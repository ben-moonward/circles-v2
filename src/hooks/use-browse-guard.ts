/**
 * Browse guard stops the user from leaving the page and shows a confirmation message instead.
 * Used for areas where we don't want the user to leave the page recklessly, such as on large form pages.
 *
 * The hook is active as long as the component is mounted.
 *
 * Below are the exposed methods for overriding the browse guard e.g. for a Submit action.
 * -- push (...args: Parameters<typeof router.push>): void --
 * * Use this for going to a route without triggering the browse guard.
 * -- reload (): void --
 * * Use this for reloading the page without triggering the browse guard.
 * -- decline (): void --
 * * Use this for when the user declines to go ahead with browsing away (e.g. clicks "cancel").
 */

import router from "next/router";
import { useState, useEffect } from "react";

export type BrowseGuardArgs = {
    onBrowseAway?: (route: string) => void;
    exceptedRoutes?: string[];
    warningText?: string;
    enabled?: boolean;
};

export function useBrowseGuard({
    exceptedRoutes = [],
    warningText = "You have unsaved changes - are you sure you wish to leave this page?",
    enabled = true,
    onBrowseAway,
}: BrowseGuardArgs) {
    const [backPath, setBackPath] = useState<string | null>(null);
    const [bypass, setBypass] = useState<Function | null>(null);

    useEffect(() => {
        // This handles native window reloads or close events
        const handleWindowClose = (e: BeforeUnloadEvent) => {
            if (bypass) return;
            e.preventDefault();
            return (e.returnValue = warningText);
        };
        // This handles Next route changes
        const handleBrowseAway = (route: string) => {
            if (
                !enabled ||
                exceptedRoutes.includes(route) ||
                backPath === route ||
                bypass
            )
                return;
            setBackPath(route);
            onBrowseAway && onBrowseAway(route);
            throw "routeChange aborted.";
        };
        // Use the bypass action if user is bypassing
        if (bypass) bypass();
        // Register/unregister events
        window.addEventListener("beforeunload", handleWindowClose);
        router.events.on("routeChangeStart", handleBrowseAway);
        return () => {
            window.removeEventListener("beforeunload", handleWindowClose);
            router.events.off("routeChangeStart", handleBrowseAway);
        };
    }, [backPath, bypass, enabled, exceptedRoutes, onBrowseAway, warningText]);

    /**
     * Force navigates to a page via URL, bypassing the browse guard's protection.
     * Use this for form submission etc. where you don't want to show the guard pop-up.
     * Uses the same parameters as router.push
     * @param args The same parameters as used for router.push
     */
    function push(...args: Parameters<typeof router.push>): void {
        setBypass(() => router.push(...args));
    }

    /**
     * Forces a browser reload, bypassing the browse guard's protection.
     * Use this for form submission etc. where you don't want to show the guard pop-up.
     */
    function reload(): void {
        setBypass(() => router.reload());
    }

    /**
     * Intended for handling when the user does not go ahead with browsing away. e.g. when user presses "Go back" or "Decline".
     * Must do this or else future attempts to navigate will be overridden with the old url.
     *
     * Potential for usability upgrade here.
     */
    function decline(): void {
        setBackPath(null);
    }

    return { push, reload, decline };
}

export default useBrowseGuard;

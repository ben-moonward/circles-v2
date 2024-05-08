import { useEffect, useState } from "react";

export enum SCREEN_SIZE {
    "sm" = "640px",
    "md" = "768px",
    "lg" = "1024px",
    "xl" = "1280px",
    "2xl" = "1536px",
}

export type MediaQueryStatus = {
    isInitialized: boolean;
    matches: boolean | null;
};

/**
 * Returns matches = true if screen size matches the provided size.
 * Only supports min-width for now.
 * @param minWidth Value to match screen width E.g. "768px"
 * @returns MediaQueryStatus
 */
const useMediaQuery = (minWidth: SCREEN_SIZE | string): MediaQueryStatus => {
    const [matches, setMatches] = useState<boolean | null>(null);
    const isInitialized = matches !== null;

    useEffect(() => {
        const matchMedia = window.matchMedia(`(min-width: ${minWidth})`);
        setMatches(matchMedia.matches);
        matchMedia.addEventListener("change", onChangeEvent);
        return () => matchMedia.removeEventListener("change", onChangeEvent);
    }, [minWidth]);

    function onChangeEvent(event: MediaQueryListEvent) {
        setMatches(event.matches);
    }

    return {
        isInitialized,
        matches,
    };
};

export default useMediaQuery;

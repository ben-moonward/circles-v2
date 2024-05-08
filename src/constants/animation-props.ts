import { TransitionClasses } from "@headlessui/react";
import { AnimationProps } from "framer-motion";

// Framer = advanced animation
// HeadlessUi = simple animation

namespace Animation {
    /* -----------------------------------
     * HeadlessUI animation props
     * ----------------------------------- */

    export const headlessUiDropdown: TransitionClasses = {
        enter: "transition duration-100 ease-out",
        enterFrom: "transform scale-95 opacity-0",
        enterTo: "transform scale-100 opacity-100",
        leave: "transition duration-75 ease-out",
        leaveFrom: "transform scale-100 opacity-100",
        leaveTo: "transform scale-95 opacity-0",
    };

    /* -----------------------------------
     * Framer Motion animation props
     * (should separate. probably don't need framer in general.)
     * ----------------------------------- */

    export const fade: AnimationProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2, ease: "easeInOut" },
    };
}

export default Animation;

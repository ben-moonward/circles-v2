import { Example } from "@/types/examples.type";
import { create } from "zustand";

type State = {
    example: Example;
};

type Action = {
    setExample: (example: Example) => void;
};

const InitialExampleState: Example = { test: true };

const useExampleStore = create<State & Action>(set => ({
    example: InitialExampleState,
    setExample: example =>
        set(() => {
            return { example: example };
        }),
}));

export default useExampleStore;

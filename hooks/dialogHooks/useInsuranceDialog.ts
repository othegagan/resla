import { create } from "zustand";

interface InsuranceDialogStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useInsuranceDialog = create<InsuranceDialogStore>((set) => ({
    isOpen: false,
    onOpen: () => {
        set({ isOpen: true });
    },
    onClose: () => set({ isOpen: false }),
}));

export default useInsuranceDialog;

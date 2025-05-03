import { create } from "zustand";

// Define the type for our store state
interface UseSignInModalStore {
  isOpen: boolean;

  // Actions
  openModal: () => void;
  closeModal: () => void;
}

// Create the store
const useSignInModal = create<UseSignInModalStore>((set) => ({
  // Initial state
  isOpen: false,

  // Actions
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export default useSignInModal;

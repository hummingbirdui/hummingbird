import HummingbirdModal from "./components/modal";

declare global {
  interface Window {
    HummingbirdModal: typeof HummingbirdModal;
  }
}

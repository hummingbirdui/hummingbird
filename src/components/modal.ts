import Modal from "bootstrap/js/dist/modal";
import "bootstrap/js/dist/modal";

class HummingbirdModal extends Modal {
  constructor(element: Element, options: any) {
    super(element, options);
  }

  customMethod(): void {
    console.log("Custom modal method triggered!");
  }
}
document.addEventListener("DOMContentLoaded", () => {
  window.HummingbirdModal = HummingbirdModal;
});

export default HummingbirdModal;

import { Toast } from '@hummingbirdui/hummingbird/src/index';

const toastInit = () => {
  const toastTrigger = document.getElementById('liveToastBtn');
  const toastLiveExample = document.getElementById('liveToast') as HTMLElement;
  const toastPlacement = document.getElementById('toastPlacement');
  const toastPlacementSelect = document.getElementById('selectToastPlacement') as HTMLSelectElement;
  if (toastTrigger) {
    const hbToast = Toast.getOrCreateInstance(toastLiveExample);
    toastTrigger.addEventListener('click', () => {
      hbToast.show();
    });
  }
  if (toastPlacement) {
    toastPlacementSelect.addEventListener('change', function () {
      if (!toastPlacement.dataset.originalClass) {
        toastPlacement.dataset.originalClass = toastPlacement.className;
      }

      toastPlacement.className = `${toastPlacement.dataset.originalClass} ${this.value}`;
    });
  }
};

export default toastInit;

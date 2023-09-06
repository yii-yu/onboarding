(() => {
  const BTN_ATTR = 'data-goodstyle';
  const DATA_SET = 'goodstyle';
  const URL_IFRAME = 'https://dl5k3yfyoyakh.cloudfront.net';

  class Widget {
    constructor(container) {
      this.container = container;
      this.iframe = null;
      this._init();
    }

    _init() {
      this._renderModal();
      this._findButtons();
      if (!this.iframe) {
        this._renderIframe();
      }

      this.btnCloseModal.addEventListener('click', this._closeModal.bind(this));
    }

    _findButtons() {
      const btns = document.querySelectorAll(`[${BTN_ATTR}]`);

      if (btns.length) {
        for (let btn of btns) {
          btn.addEventListener('click', this._btnClick.bind(this));
        }
      }
    }
    _btnClick(event) {
      this._openModal();
      this.iframe.contentWindow.postMessage(
        event.target.dataset[DATA_SET],
        URL_IFRAME
      );
    }
    _renderModal() {
      this.modal = document.createElement('div');
      this.modalContent = document.createElement('div');
      this.modal.classList.add('modal-goodstyle');
      this.modalContent.classList.add('modal-content');
      this.btnCloseModal = document.createElement('span');
      this.btnCloseModal.classList.add('close');
      this.modal.appendChild(this.modalContent);
      this.modalContent.appendChild(this.btnCloseModal);
      this.container.appendChild(this.modal);
    }
    _openModal() {
      this.modal.style.display = 'flex';
    }
    _closeModal() {
      this.modal.style.display = 'none';
    }
    _renderIframe() {
      this.iframe = document.createElement('iframe');
      this.iframe.style.width = '100%';
      this.iframe.style.height = '100%';
      this.iframe.style.borderWidth = 0;
      this.iframe.style.display = 'block';
      this.iframe.src = URL_IFRAME;
      this.modalContent.appendChild(this.iframe);
    }
  }

  window.GoodstyleWidget = {
    init(container) {
      if (!container) {
        container = document.createElement('div');
        container.classList.add('goodstyle');
        document.body.appendChild(container);
      }
      return new Widget(container);
    },
  };

  document.addEventListener('DOMContentLoaded', () => {
    window.GoodstyleWidget.init();
  });
})();

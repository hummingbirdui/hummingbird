import Dropzone from 'dropzone';

const dropzoneInit = () => {
  // dropzone list preview
  const listPreviewsContainer = document.querySelector('[data-dz-preview="dz-list-preview"]') as HTMLElement;
  const listPreviewTemplate = listPreviewsContainer.querySelector('.dz-preview-template') as HTMLElement;

  new Dropzone('[data-dropzone="dropzone-list-preview"]', {
    previewsContainer: listPreviewsContainer,
    previewTemplate: listPreviewTemplate.innerHTML,
  });

  // dropzone thumbnail preview
  const thumbnailPreviewsContainer = document.querySelector('[data-dz-preview="dz-thumbnail-preview"]') as HTMLElement;
  const thumbnailPreviewTemplate = thumbnailPreviewsContainer.querySelector('.dz-preview-template') as HTMLElement;

  new Dropzone('[data-dropzone="dropzone-thumbnail-preview"]', {
    previewsContainer: thumbnailPreviewsContainer,
    previewTemplate: thumbnailPreviewTemplate.innerHTML,
  });

  // avatar dropzone
  new Dropzone('[data-dropzone="dropzone-avatar"]', {
    maxFiles: 1,
    acceptedFiles: 'image/*',
    init: function (this: Dropzone) {
      this.on('maxfilesexceeded', function (this: Dropzone, file) {
        this.removeAllFiles();
        this.addFile(file);
      });
    },
  });

  // file dropbox
  const dropboxPreviewsContainer = document.querySelector('[data-dz-preview="dz-dropbox-preview"]') as HTMLElement;
  const dropboxPreviewTemplate = dropboxPreviewsContainer.querySelector('.dz-preview-template') as HTMLElement;

  new Dropzone('[data-dropzone="file-dropbox"]', {
    previewsContainer: dropboxPreviewsContainer,
    previewTemplate: dropboxPreviewTemplate.innerHTML,
  });

  // dropzone single
  const singlePreviewsContainer = document.querySelector('[data-dz-preview="dz-single-preview"]') as HTMLElement;
  const singlePreviewTemplate = singlePreviewsContainer.querySelector('.dz-preview-template') as HTMLElement;

  new Dropzone('[data-dropzone="dropzone-single"]', {
    previewsContainer: singlePreviewsContainer,
    previewTemplate: singlePreviewTemplate.innerHTML,
    maxFiles: 1,
    init: function (this: Dropzone) {
      this.on('maxfilesexceeded', function (this: Dropzone, file) {
        this.removeAllFiles();
        this.addFile(file);
      });
    },
  });
};

export default dropzoneInit;

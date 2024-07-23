export interface INgxGalleryOrderedImage {
  src: string;
  type: string;
  index: number;
}

export class NgxGalleryOrderedImage implements INgxGalleryOrderedImage {
  src: string;
  type: string;
  index: number;

  constructor(obj: INgxGalleryOrderedImage) {
    this.src = obj.src;
    this.type = obj.type;
    this.index = obj.index;
  }
}

export class CanvasImage {
    canvas: HTMLCanvasElement;
    context: any;
    width: any;
    height: any;

    constructor(image: any) {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.width = this.canvas.width = image.naturalWidth;
        this.height = this.canvas.height = image.naturalHeight;
        this.context.drawImage(image, 0, 0, this.width, this.height);
    }

    getImageData(): any {
        return this.context?.getImageData(0, 0, this.width, this.height);
    }
}

import { TextureLoader,CanvasTexture,Texture } from "three";
import { ZikoUICanvas,ZikoUIImage } from "ziko";
const useTexture=texture=>{
    if(texture instanceof Texture) return texture;
    if(texture instanceof ZikoUIImage) return new TextureLoader().load(texture.element.src);
    if(texture instanceof ZikoUICanvas) return new CanvasTexture(texture.element);
    if(texture instanceof HTMLImageElement) return new TextureLoader().load(texture.src);
    if(texture instanceof HTMLCanvasElement) return new CanvasTexture(texture);
    throw new Error("Unsupported texture type");
}
const isValidTexture=texture=>[Texture,ZikoUIImage,ZikoUICanvas,HTMLImageElement,HTMLCanvasElement,].some(n=>texture instanceof n)
export {
    isValidTexture,
    useTexture
}

// if(value instanceof ZikoUIElement){
//     if(value instanceof ZikoUIImage){}
//     if(value instanceof ZikoUISvg){}
//     if(value instanceof ZikoUICanvas){}
//     if(value instanceof ZikoUIVideo){}
// }
// if(value instanceof HTMLElement){
//     if(value instanceof HTMLImageElement){}
//     if(value instanceof HTMLCanvasElement){}
//     if(value instanceof HTMLVideoElement){}
// }
// if(value instanceof SVGSVGElement){}

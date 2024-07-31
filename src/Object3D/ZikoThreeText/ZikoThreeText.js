import { 
    TextGeometry,
    FontLoader,
 } from "three/examples/jsm/Addons.js";
import { ZikoThreeObject3D } from "../ZikoThreeObject3D";
import { Mesh,MeshBasicMaterial,ShapeGeometry } from "three";
class ZikoThreeText extends ZikoThreeObject3D{
    constructor(text){
        super();
        this.element=null;
    }
}
import {fontData} from "./Fonts/f.js"
// const text3=(text)=>new ZikoThreeText(text);
const text3=(text="hello")=>{
    const loader = new FontLoader();
    const font = loader.parse(fontData); // Parse font synchronously from preloaded data
    // const geometry = new TextGeometry(text, {
    //     font: font,
    //     size: 80,
    //     height: 1, // Use `height` instead of `depth` for TextGeometry
    //     curveSegments: 12,
    //     bevelEnabled: true,
    //     bevelThickness: 10,
    //     bevelSize: 8,
    //     bevelOffset: 0,
    //     bevelSegments: 5
    // });
	const shapes = font.generateShapes( text, 10 );
	const geometry = new ShapeGeometry( shapes );

    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const textMesh = new Mesh(geometry, material);
    return textMesh;
    
}
window.text3=text3
export { text3 }
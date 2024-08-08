import { 
    TextGeometry,
    FontLoader,
 } from "three/examples/jsm/Addons.js";
import { Mesh,MeshBasicMaterial,ShapeGeometry } from "three";
import {fontData} from "./Fonts/helvetiker_regular.js"
import { __ZikoThreeGeoMatBased__ } from "./__ZikoThreeGeoMatBased__.js";
const loader = new FontLoader();
const font = loader.parse(fontData); 
class ZikoThreeText extends __ZikoThreeGeoMatBased__{
    constructor(text){
        super()
        this.text = text;
    }
    get type(){
        return "text";
    }
}
class ZikoThreeText3D extends ZikoThreeText{
    constructor(text,size=1,height=1){
        super(text);
        const geometry = new TextGeometry(text, {
                font,
                size,
                height
            });
        const material = new MeshBasicMaterial({ /* color: 0x00ff00 */ });
        this.element=new Mesh(geometry, material);
        this.element.geometry.computeBoundingBox();
        this.element.geometry.boundingBox.getCenter(this.element.position).multiplyScalar(-1);
    }
    get class(){
        return[
            "text",
            "3d"
        ]
    }
}
class ZikoThreeText2D extends ZikoThreeText{
    constructor(text,size=1){
        super(text);
        const shapes = font.generateShapes( text, size );
	    const geometry = new ShapeGeometry( shapes );
        const material = new MeshBasicMaterial({ /* color: 0x00ff00 */ });
        this.element=new Mesh(geometry, material);
        this.element.geometry.computeBoundingBox();
        this.element.geometry.boundingBox.getCenter(this.element.position).multiplyScalar(-1);
    }
    get class(){
        return[
            "text",
            "3d"
        ]
    }
}
const text3=(text,size,height)=>new ZikoThreeText3D(text,size,height);
const text2=(text,size)=>new ZikoThreeText2D(text,size);
export { 
    text3,
    text2
 }
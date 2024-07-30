import { CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { ZikoThreeObject3D } from '../ZikoThreeObject3D';
class ZikoThreeCss extends ZikoThreeObject3D{
    constructor(UIElement){
        super()
        this.cache={
            type:"css"
        }
        this.element=new CSS3DObject(UIElement.element)
    }
    get type(){
		return "css";
	}
}
const ui3=UIElement=>new ZikoThreeCss(UIElement)
export {ui3}
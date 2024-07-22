import { CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { ZikoThreeObject } from '../ZikoThreeMesh';
class ZikoThreeCss extends ZikoThreeObject{
    constructor(UIElement){
        super()
        this.cache={
            type:"css"
        }
        this.element=new CSS3DObject(UIElement.element)
    }
}
const ui3=UIElement=>new ZikoThreeCss(UIElement)
export {ui3}
import { HTMLMesh } from 'three/examples/jsm/Addons.js';
import { ZikoThreeObject3D } from '../ZikoThreeObject3D';
class ZikoThreHTMLMesh extends ZikoThreeObject3D{
    constructor(UIElement){
        super()
        this.cache={
            type:"html"
        }
        this.element=new HTMLMesh(UIElement.element)
    }
    get type(){
		return "html";
	}
}
const htmlMesh=UIElement=>new ZikoThreHTMLMesh(UIElement)
export {htmlMesh}
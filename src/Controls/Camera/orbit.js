import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { __ZikoThreeCameraControls__ } from './__ZikoThreeCameraControls__';
class ZikoThreeOrbitControls extends __ZikoThreeCameraControls__{
    constructor(target){
        super(target)
        this.init(false)
        this.onChange();
    }
    init(){
        this.control=new OrbitControls(this.__TARGET__.camera.currentCamera,this.__TARGET__.rendererTarget.domElement);
        return this;
    }
    onChange(handler,renderGl=true,renderCss=true){
        this.control.addEventListener("change",()=>{
            if(!this.isPaused){
                this.__TARGET__.renderGl();
                if(renderGl)this.__TARGET__.renderGl();
                if(this.__TARGET__.cache.type==="css" && renderCss)this.__TARGET__.renderCss();
                if(handler)handler();
            }
        });
        return this;
    }
}
const ZikoOrbitControls=target=>new ZikoThreeOrbitControls(target);
export {ZikoOrbitControls}
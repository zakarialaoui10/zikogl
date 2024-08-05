import { TransformControls } from 'three/addons/controls/TransformControls.js';
import { ZikoThreeLightHelper } from "../../Object3D/ZikoThreeHelper/index.js"
import { __ZikoThreeObjectControls__ } from './__ZikoThreeObjectsControls__.js';
import { ZikoThreeObject3D } from '../../Object3D/ZikoThreeObject3D.js';
class ZikoThreeTransformControls extends __ZikoThreeObjectControls__{
    constructor(target){
        super(target)
        this.control=new TransformControls(target.camera.currentCamera,target.rendererGl.domElement);
        this.__TARGET__.sceneGl.add(this.control);
        this.isPaused=false;
        this.mode="translate";
        this.onChange()
    }
    add(){
        this.__TARGET__.sceneGl.add(this.control);
        return this;  
    }
    onChange(handler){
        this.control.addEventListener("change",()=>{
            if(!this.isPaused){
                if(this.__TARGET__.cache.type==="css")this.__TARGET__.renderCss()
                this.__TARGET__.renderGl()
                if(handler)handler()
            }
        });
        this.control.addEventListener('dragging-changed',( event )=>{
            if(this.__TARGET__.currentCameraControls){
                event.value?this.__TARGET__.currentCameraControls.disable():this.__TARGET__.currentCameraControls.enable();
                if(event.value){
                    this.__TARGET__.currentCameraControls.disable();
                    this.__TARGET__.controls.drag.disable(true);

                }
                else{
                    this.__TARGET__.currentCameraControls.enable();
                    this.__TARGET__.controls.drag.enable(true);
                }
            }
            //console.log(event.value)
            //this.__TARGET__.cache.controls.orbit.enabled = ! event.value;
            //console.log(this.__TARGET__.cache.controls.orbit.enabled )
        })
        return this;
    }
    setMode(mode=this.mode){
        this.control.setMode(mode);
        return this;
    }
    attach(obj){
        if(obj instanceof ZikoThreeLightHelper)this.control.attach(obj.attached_light);
        else this.control.attach(obj.element);
        return this;
    }
}

const ZikoTransformControls=target=>new ZikoThreeTransformControls(target);
const useTransformControls=(child,mode)=>{
    if(child instanceof ZikoThreeObject3D)return new ZikoThreeTransformControls(child.parent).attach(child).setMode(mode);
    return new ZikoThreeTransformControls(child).setMode(mode)
    
}
export {
    ZikoTransformControls,
    useTransformControls
}
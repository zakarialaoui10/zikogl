import { PointerControls } from './MyControls/PointerControls';
import { __ZikoThreeObjectControls__ } from './__ZikoThreeObjectsControls__';
class ZikoThreePointerControls extends __ZikoThreeObjectControls__{
    constructor(target,ZikoGlElements) {
        super(target);
        this.elements=ZikoGlElements;
        this.objects=this.elements.map(n=>n.element);
        this.control = new PointerControls(this.objects,target.camera.currentCamera, target.rendererTarget.domElement);
        Object.assign(this.__cache__,{
            currentElement:null,
            savedStates: []
        })
    }
    init() {
        this.control = new PointerControls(objects,this.__TARGET__.camera.currentCamera, this.__TARGET__.rendererTarget.domElement);
        return this;
    }
    get element(){
        return this.__cache__.currentElement;
    }
    onClick(callback){
        this.control.addEventListener("click",(e)=>{
            this.__cache__.currentElement=this.elements.find(n=>n.id===e.object.id);
            this.__TARGET__.currentCameraControls?.disable()
            if(callback)callback.call(this,this);
        })
        return this;
    }
    onUp(callback){
        this.control.addEventListener("pointerup",(e)=>{
            this.__TARGET__.currentCameraControls.enable();
            if(callback)callback.call(this,this);
        })
        return this;
    }
    onHoverOn(callback){
        this.control.addEventListener("hoveron",(e)=>{
            this.__cache__.currentElement=this.elements.find(n=>n.id===e.object.id);
            callback.call(this,this);
        })
        return this;
    }
    onHoverOff(callback){
        this.control.addEventListener("hoveroff",(e)=>{
            this.__cache__.currentElement=this.elements.find(n=>n.id===e.object.id);
            callback.call(this,this);
        })
        return this;
    }
    save() {
        this.__cache__.savedStates = this.elements.map(n => {
            return {
                id: n.id,
                position: n.element.position.clone(),
                rotation: n.element.rotation.clone(),
                scale: n.element.scale.clone()
            };
        });
        return this;
    }

    restore() {
        this.__cache__.savedStates.forEach(state => {
            const element = this.elements.find(n => n.id === state.id);
            if (element) {
                element.element.position.copy(state.position);
                element.element.rotation.copy(state.rotation);
                element.element.scale.copy(state.scale);
            }
        });
        if(this.__TARGET__.type==="css")this.__TARGET__.renderCss()
        this.__TARGET__.renderGl();
    return this;
    }
}
const ZikoPointerControls = (target,objects) => new ZikoThreePointerControls(target,objects)
const usePointerControls = (objects)=>{
    const SCENE = objects[0].parent;
    const CTRL = ZikoPointerControls(SCENE,objects);
    SCENE.cache.controls.drag = CTRL;
    return CTRL;
}
export {
    ZikoPointerControls,
    usePointerControls
}

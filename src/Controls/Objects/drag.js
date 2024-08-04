import { DragControls } from 'three/addons/controls/DragControls.js';
import { __ZikoThreeControls__ } from '../__ZikoThreeControls__';

class ZikoThreeDragControls extends __ZikoThreeControls__{
    constructor(target,ZikoGlElements) {
        super(target);
        this.elements=ZikoGlElements;
        this.objects=this.elements.map(n=>n.element);
        this.control = new DragControls(this.objects,target.camera.currentCamera, target.rendererTarget.domElement);
        Object.assign(this.__cache__,{
            currentElement:null
        })
        // this.onChange();
    }
    init() {
        this.control = new DragControls(objects,this.__TARGET__.camera.currentCamera, this.__TARGET__.rendererTarget.domElement);
        // this.restore();
        return this;
    }
    get element(){
        return this.__cache__.currentElement;
    }
    onStart(callback){
        this.control.addEventListener("dragstart",(e)=>{
            this.__cache__.currentElement=this.elements.find(n=>n.id===e.object.id);
            callback.call(this,this);
        })
        return this;
    }
    onDrag(callback){
        this.control.addEventListener("drag",(e)=>{
            callback.call(this,this);
        })
        return this;
    }
    onEnd(callback){
        this.control.addEventListener("dragend",(e)=>{
            callback.call(this,this);
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
        this.control.addEventListener("off",(e)=>{
            this.__cache__.currentElement=this.elements.find(n=>n.id===e.object.id);
            callback.call(this,this);
        })
        return this;
    }
}

const ZikoDragControls = (target,objects) => new ZikoThreeDragControls(target,objects)
const useDragControls = ZikoDragControls
export {
    ZikoDragControls,
    useDragControls
}

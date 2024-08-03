import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Vector3,Quaternion } from 'three/src/Three.js';
import { __ZikoThreeControls__ } from './__ZikoThreeControls__';
class ZikoThreeOrbitControls extends __ZikoThreeControls__{
    constructor(target){
        super(target)
        // this.__TARGET__=target;
        this.control=new OrbitControls(target.camera.currentCamera,target.rendererTarget.domElement);
        // this.isPaused=false;
        // this.__cache__={
        //     saved_state:{
        //         position:new Vector3(),
        //         quaternion:new Quaternion()
        //     }   
        // }
        this.onChange();
    }
    // get currentState(){
    //     const state={
    //         position:new Vector3(),
    //         quaternion:new Quaternion()
    //     }
    //     state.position.copy(this.__TARGET__.camera.currentCamera.position);
    //     state.quaternion.copy(this.__TARGET__.camera.currentCamera.quaternion);
    //     return state;
    // }
    // save(){
    //     this.__cache__.saved_state.position.copy(this.__TARGET__.camera.currentCamera.position);
    //     this.__cache__.saved_state.quaternion.copy(this.__TARGET__.camera.currentCamera.quaternion);
    //     return this;
    // }
    // useState(state,renderGl=true,renderCss=true){
    //     let {position,quaternion}=state;
	// 	if(!(position instanceof Vector3)){
	// 		const {x,y,z}=position;
	// 		position=new Vector3(x,y,z)
	// 	}
	// 	if(!(quaternion instanceof Quaternion)){
	// 		const {_x,_y,_z,_w}=quaternion;
	// 		quaternion=new Quaternion(_x,_y,_z,_w)
	// 	}
	// 	this.__TARGET__.camera.currentCamera.position.copy(position);
    //     this.__TARGET__.camera.currentCamera.quaternion.copy(quaternion);
	// 	this.__TARGET__.camera.currentCamera.updateMatrixWorld();
	// 	if(renderGl)this.__TARGET__?.renderGl()
	// 	if(renderCss)this.__TARGET__?.renderCss()
	// }
    // restore(renderGl=false,renderCss=false){
    //     this.useState(this.__cache__.saved_state,renderGl,renderCss)
    //     return this;
    // }
    // enable(){
    //     this.restore();
    //     this.control.enabled=true;
    //     return this;
    // }
    // disable(){
    //     this.save();
    //     this.control.enabled=false;
    //     return this;
    // }
    // pause(){
    //     this.isPaused=true;
    //     return this;
    // }
    // resume(){
    //     this.isPaused=false;
    //     return this;
    // }
    // dispose(){
    //     this.save();
    //     this.control.dispose();
    //     return this;
    // }
    init(){
        this.control=new OrbitControls(this.__TARGET__.camera.currentCamera,this.__TARGET__.rendererTarget.domElement);
        this.restore();
        return this;
    }
    // clear(){
    //     this.dispose();
    //     this.__TARGET__.cache.controls.orbit=null;
    //     return null
    // }
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
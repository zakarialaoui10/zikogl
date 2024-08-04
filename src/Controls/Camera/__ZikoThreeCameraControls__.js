import { __ZikoThreeControls__ } from "../__ZikoThreeControls__";
import { 
    Quaternion,
    Vector3 
} from "three";
class __ZikoThreeCameraControls__ extends __ZikoThreeControls__{
    constructor(target){
        super(target)
        this.__cache__={
            saved_state:{
                position:new Vector3(),
                quaternion:new Quaternion()
            }   
        }
    }
    get class(){
        return [
            "controls",
            "camera-controls"
        ]
    }
    get currentState(){
        const state={
            position:new Vector3(),
            quaternion:new Quaternion()
        }
        state.position.copy(this.__TARGET__.camera.currentCamera.position);
        state.quaternion.copy(this.__TARGET__.camera.currentCamera.quaternion);
        return state;
    }
    save(){
        this.__cache__.saved_state.position.copy(this.__TARGET__.camera.currentCamera.position);
        this.__cache__.saved_state.quaternion.copy(this.__TARGET__.camera.currentCamera.quaternion);
        return this;
    }
    restore(renderGl=false,renderCss=false){
        this.useState(this.__cache__.saved_state,renderGl,renderCss)
        return this;
    }
    useState(state,renderGl=true,renderCss=true){
        let {position,quaternion}=state;
		if(!(position instanceof Vector3)){
			const {x,y,z}=position;
			position=new Vector3(x,y,z)
		}
		if(!(quaternion instanceof Quaternion)){
			const {_x,_y,_z,_w}=quaternion;
			quaternion=new Quaternion(_x,_y,_z,_w)
		}
		this.__TARGET__.camera.currentCamera.position.copy(position);
        this.__TARGET__.camera.currentCamera.quaternion.copy(quaternion);
		this.__TARGET__.camera.currentCamera.updateMatrixWorld();
		if(renderGl)this.__TARGET__?.renderGl()
		if(renderCss)this.__TARGET__?.renderCss()
	}
    
}
export{
    __ZikoThreeCameraControls__
}
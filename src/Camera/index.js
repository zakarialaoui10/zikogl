import {
	PerspectiveCamera,
	OrthographicCamera,
	CameraHelper,
	Vector3,
	Quaternion,
	MathUtils
} from "three";
class ZikoTHREECamera{
	#PERSPECTIVE_CAMERA
	#ORTHOGRAPHIC_CAMERA
	#SWITCH_STATE={
		position:new Vector3(),
        quaternion:new Quaternion()	
	}
	constructor(w,h,near=0.1,far=1000){
		this.parent=null;
		this.w=w;
		this.h=h;
		this.near=near;
		this.far=far;
		this.#PERSPECTIVE_CAMERA=new PerspectiveCamera(this.fov,this.aspect,this.near,this.far);
		this.currentCamera=this.#PERSPECTIVE_CAMERA;
		this.fov=50;
		this.perspectiveDistance=10;
		this.orthographicDistance=120;
		this.__cache__={
			saved_state:{
				position:new Vector3(),
				quaternion:new Quaternion()
			}
		}
	}
	#maintain(){
		if(this.parent)this.parent.renderGl()
		return this;
	}
	save(){
        this.__cache__.saved_state.position.copy(this.currentCamera.position);
        this.__cache__.saved_state.quaternion.copy(this.currentCamera.quaternion);
        return this;
    }
    restore(renderGl=false,renderCss=false){
		this.useState(this.__cache__.saved_state,renderGl,renderCss)
        return this;
    }
	#save_for_switch(){
		this.#SWITCH_STATE.position.copy(this.currentCamera.position);
        this.#SWITCH_STATE.quaternion.copy(this.currentCamera.quaternion);
        return this;
	}
	#restore_for_switch(){
		this.useState(this.#SWITCH_STATE,true,true)
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
		this.currentCamera.position.copy(position);
        this.currentCamera.quaternion.copy(quaternion);
		this.currentCamera.updateMatrixWorld();
		if(renderGl && this.parent.cache.type === "gl")this.parent?.renderGl()
		if(renderCss && this.parent.cache.type === "css")this.parent?.renderCss()
	}
	get left(){
		return -this.perspectiveDistance*Math.tan(this.halfFovH);
	}
	get right(){
		return this.perspectiveDistance*Math.tan(this.halfFovH);
	}
	get top(){
		return this.perspectiveDistance*Math.tan(this.halfFovV);
	}
	get bottom(){
		return -this.perspectiveDistance*Math.tan(this.halfFovV);
	}
	get aspect(){
		return this.w/this.h;
	}
	get halfFovV(){
		return MathUtils.DEG2RAD * this.fov * 0.5;
	}
	get halfFovH(){
		return Math.atan((this.parent.width/this.parent.height) * Math.tan( this.halfFovV ) );
	}
	get halfH(){
		return this.perspectiveDistance*Math.tan(this.halfFovH)
	}
	get halfV(){
		return this.perspectiveDistance*Math.tan(this.halfFovV)
	}
	posX(x=this.px){
		this.currentCamera.position.x=x;
		this.#maintain()
		return this;
	}
	posY(y=this.py){
		this.currentCamera.position.y=y;
		this.#maintain()
		return this;
	}
	posZ(z=this.pz){
		this.currentCamera.position.z=z;
		this.#maintain()
		return this;
	}
	get px(){
		return this.currentCamera.position.x;
	}
	get py(){
		return this.currentCamera.position.y;
	}
	get pz(){
		return this.currentCamera.position.z;
	}
	pos(x=this.px,y=this.py,z=this.pz){
		this.currentCamera.position.set(x,y,z);
		this.#maintain()
		return this;
	}
	rotX(x=this.rx){
		this.currentCamera.rotation.x=x;
		this.#maintain()
		return this;
	}
	rotY(y=this.ry){
		this.currentCamera.rotation.y=y;
		this.#maintain()
		return this;
	}
	rotZ(z=this.rz){
		this.currentCamera.rotation.z=z;
		this.#maintain()
		return this;
	}
	get rx(){
		return this.currentCamera.rotation.x;
	}
	get ry(){
		return this.currentCamera.rotation.y;
	}
	get rz(){
		return this.currentCamera.rotation.z;
	}
	rot(x=this.rx,y=this.ry,z=this.rz){
		this.currentCamera.rotation.set(x,y,z);
		this.#maintain()
		return this;
	}
	usePerspective(){
		this.#save_for_switch()
		if(!this.#PERSPECTIVE_CAMERA)this.#PERSPECTIVE_CAMERA=new PerspectiveCamera(this.fov,this.aspect,this.near,this.far);
		this.currentCamera=this.#PERSPECTIVE_CAMERA;
		if(this.parent.cache.controls.orbit)this.parent.cache.controls.orbit.control.object=this.currentCamera;
		this.#restore_for_switch();
		return this;
	}
	useOrthographic(){
		this.#save_for_switch()
		if(!this.#ORTHOGRAPHIC_CAMERA)this.#ORTHOGRAPHIC_CAMERA=new OrthographicCamera(this.left,this.right,this.top,this.bottom,this.near,this.far);
		this.currentCamera= this.#ORTHOGRAPHIC_CAMERA;
		if(this.parent.cache.controls.orbit)this.parent.cache.controls.orbit.control.object=this.currentCamera;
		this.#restore_for_switch();
		return this;
	}
	get helper(){
		return new CameraHelper(this.currentCamera)
	}
}

export const ZikoCamera=(w,h,n,f)=>new ZikoTHREECamera(w,h,n,f);
import {
    WebGLRenderer, 
    Scene,
    Color,
    PCFSoftShadowMap,
    Vector2,
    Raycaster,
    Fog,
    FogExp2
 } from "three";
import {
    ZikoUIElement,
} from "ziko"
import Ziko  from "ziko";
import { ZikoCamera } from "../Camera";
import { 
    ZikoThreeObject3D,
 } from "../Object3D/ZikoThreeObject3D.js";
import {  waitElm } from "../Utils";
import { 
    ZikoOrbitControls, 
    ZikoMapControls,
    ZikoFlyControls,
    ZikoTrackballControls,
    ZikoArcballControls,
    ZikoFirstPersonControls,
    ZikoPointerLockControls
} from "../Controls/index.js";
import { isValidTexture, useTexture } from "../Loaders/texture.js";
class ZikoThreeSceneGl extends ZikoUIElement{
    constructor(w,h){
        super("figure","figure")
        Object.assign(this.cache,{
            args:[w,h],
            type:"gl",
            currentCameraControls:null,
            controls:{
                orbit:null,
                trackball:null,
                map:null,
                fly:null,
                firstPerson:null,
                pointerLock:null,
                arcball:null,
                transform:null,
                drag:null,
            },
            // watch:{
            //     intersection:{
            //         enabled:true,
            //         pointer:new Vector2(),
            //         raycaster:new Raycaster(),
            //         INTERSECTED:null,
            //         onStartIntersectionCallback:()=>{},
            //         onEndIntersectionCallback:()=>{}
            //     }
            // }
        })
        this.canvas=Ziko.UI.html("canvas").render(true,this.element)
        this.rendererGl=new WebGLRenderer({canvas:this.canvas.element});
        this.rendererTarget=this.rendererGl;
		this.sceneGl=new Scene();
        this.camera=ZikoCamera(w,h,0.1,1000);
        this.camera.currentCamera.position.z=10;
        this.camera.parent=this;
        this.sceneGl.background=new Color("#3333ee");
        this.renderGl()
        this.render();
        this.size(w,h);
        this.watchSize(()=>this.maintain())
        // this.useOrbitControls();
        // this.sceneGl.addEventListener("rerender",()=>this.renderGl())
        // waitElm(this.element.element).then(()=>{
        //     this.useOrbitControls()
        // })
        this.style({
            margin:0
        })
        globalThis.addEventListener("DOMContentLoaded", () => {
            this.renderGl();
            if(this.type==="css")this.renderCss();
            this.useOrbitControls()
        });
    }
    get controls(){
        return this.cache.controls;
    }
    get currentCameraControls(){
        return this.cache.currentCameraControls;
    }
    get px(){
        return this.sceneGl.position.x;
    }
    get py(){
        return this.sceneGl.position.y;
    }
    get pz(){
        return this.sceneGl.position.z;
    }
    get rx(){
        return this.sceneGl.rotation.x;
    }
    get ry(){
        return this.sceneGl.rotation.y;
    }
    get rz(){
        return this.sceneGl.rotation.z;
    }
    clone(){
        const SCENE = new this.constructor(...this.cache.args);
        SCENE.__proto__=this.__proto__;
        const items=this.items.map(n=>n.clone())
        SCENE.add(...items);
        return SCENE
    }
    maintain(){
        this.camera.currentCamera.aspect=(this.element.clientWidth)/(this.element.clientHeight); 
        this.camera.currentCamera.updateProjectionMatrix();
        this.rendererGl.setSize(this.element.clientWidth,this.element.clientHeight);
        for (let i = 0; i < this.items.length; i++)
        Object.assign(this, { [[i]]: this.items[i] });
        this.length = this.items.length;
        this.renderGl()
        return this;
    }
    renderGl(){
        // if(this.cache.watch.intersection.enabled){
        //     this.cache.watch.intersection.raycaster.setFromCamera( this.cache.watch.intersection.pointer, this.camera.currentCamera );
        //     const intersects = this.cache.watch.intersection.raycaster.intersectObjects( this.sceneGl.children, false );
        //     if ( intersects.length > 0 ) {
        //         let current = this.items.find(n=>n.id===intersects[ 0 ].object.id)
        //         if ( this.cache.watch.intersection.INTERSECTED != current ) {
        //             this.cache.watch.intersection.INTERSECTED =  current;
        //             this.cache.watch.intersection.onStartIntersectionCallback.call(this);
        //         }
        // } else {
        //     this.cache.watch.intersection.INTERSECTED = null;
        // }
        // }
		this.rendererGl.render(this.sceneGl,this.camera.currentCamera);
		return this;
	}
    // watchObjectIntersection(onStartIntersectionCallback=()=>{},onEndIntersectionCallback=()=>{}){
    //     this.cache.watch.intersection.onStartIntersectionCallback=()=>onStartIntersectionCallback(this.cache.watch.intersection.INTERSECTED);
    //     this.cache.watch.intersection.onEndIntersectionCallback=()=>onEndIntersectionCallback(this.cache.watch.intersection.INTERSECTED);
    //     return this;
    // }
    add(...obj){
		obj.map((n,i)=>{
			if(n instanceof ZikoThreeObject3D){
				this.sceneGl.add(obj[i].element);
				this.items.push(obj[i]);
				n.parent=this;
			}
			else this.sceneGl.add(obj[i])
		});
        // this.sceneGl.dispatchEvent({ type: 'rerender', message: 'This is a custom event!' })
        // this.emit("rerender");
        this.maintain();
		return this;
	}
    remove(...obj){
        if(obj.length==0){
            if(this.Target.children.length) this.Target.removeChild(this.element);
          }
        else {
            obj.map((n,i)=>this.sceneGl.remove(obj[i].element));
            this.items=this.items.filter(n=>!obj.includes(n));
            this.maintain();
        }
		return this;
    }
    size(w = "100%", h = "100%") {
        if(typeof(w)==="number")w=w+"px";
        if(typeof(h)==="number")h=h+"px";
        waitElm(this.element).then((e)=>{
            this.element.style.width=w;
            this.element.style.height=h;
            this.canvas.style.margin=0;
            this.camera.currentCamera.aspect=(this.element.clientWidth)/(this.element.clientHeight); 
            this.camera.currentCamera.updateProjectionMatrix();
            this.rendererGl.setSize(this.element.clientWidth,this.element.clientHeight);
            this.renderGl();
        })
        return this;
    }
    background(texture){
        if(["string","number"].includes(typeof texture)){
            if((texture.length===7||texture.length===4)&&texture[0]==="#")this.sceneGl.background=new Color(texture);
        }
        if(isValidTexture(texture))this.sceneGl.background=useTexture(texture);
        this.renderGl();
        return this;
    }
    posX(x=this.px,render=true){
        this.sceneGl.position.x=x;
        if(render)this.renderGl();
        return this;
    }
    posY(y=this.py,render=true){
        this.sceneGl.position.y=y;
        if(render)this.renderGl();
        return this;
    }
    posZ(z=this.pz,render=true){
        this.sceneGl.position.z=z;
        if(render)this.renderGl();
        return this;
    }
    pos(x,y,z,render=true){
        this.sceneGl.position.set(x,y,z);
        if(render)this.renderGl();
        return this;
    }
    tarnslateX(dx=0,render=true){
        this.sceneGl.position.x=this.px+dx;
        if(render)this.renderGl();
        return this;
    }
    translateY(dy=0,render=true){
        this.sceneGl.position.y=this.py+dy;
        if(render)this.renderGl();
        return this;
    }
    translateZ(dz=0,render=true){
        this.sceneGl.position.z=this.pz+dz;
        if(render)this.renderGl();
        return this;
    }
    translate(dx=0,dy=0,dz=0,render=true){
        this.sceneGl.rotation.set(
            this.px+dx,
            this.py+dy,
            this.pz+dz,
            );
        if(render)this.renderGl();
        return this;
    }
    rotX(x=this.rx,render=true){
        this.sceneGl.rotation.x=x;
        if(render)this.renderGl();
        return this;
    }
    rotY(y=this.ry,render=true){
        this.sceneGl.rotation.y=y;
        if(render)this.renderGl();
        return this;            
    }
    rotZ(z=this.rz,render=true){
        this.sceneGl.rotation.z=z;
        if(render)this.renderGl();
        return this;            
    }
    rot(x,y,z){
        this.sceneGl.rotation.set(x,y,z);
        if(render)this.renderGl();
        return this;
    }
    useFog(color,near,far){
        this.sceneGl.fog = new Fog(color,near,far);
        return this;
    }
    useFogExp2(color,density){
        this.sceneGl.fog = new FogExp2(color,density);
        return this;
    }
    useShadow(type=PCFSoftShadowMap){
        this.rendererGl.shadowMap.enabled = true;
        this.rendererGl.shadowMap.type = type;
        return this;
    }
    disableShadow(){
        this.rendererGl.shadowMap.enabled = false;
        return this;
    }
    toImage(){

    }
    toVideo(){

    }
    fromJson(){

    }
    toJson(){

    }
    useOrbitControls(){
        let restore=false;
        if(!this.cache.controls.orbit)this.cache.controls.orbit=ZikoOrbitControls(this);
        ["trackball","map","fly","firstPerson","pointerLock","arcball"].forEach(n=>this.controls[n]?.disable(restore));
        this.controls.orbit.enable(false);
        this.cache.currentCameraControls=this.cache.controls.orbit;
        return this;
    }
    useTrackballControls(){
        if(!this.cache.controls.trackball)this.cache.controls.trackball=ZikoTrackballControls(this);
        ["orbit","map","fly","firstPerson","pointerLock","arcball"].forEach(n=>this.controls[n]?.disable(false));
        this.controls.trackball.enable(false);
        this.cache.currentCameraControls=this.cache.controls.trackball;
        return this;
    }
    useMapControls(){
        if(!this.cache.controls.map)this.cache.controls.map=ZikoMapControls(this);
        ["orbit","trackball","fly","firstPerson","pointerLock","arcball"].forEach(n=>this.controls[n]?.disable(false));
        this.controls.map.enable(false);
        this.cache.currentCameraControls=this.cache.controls.map;
        return this;
    }
    useFlyControls(){
        if(!this.cache.controls.fly)this.cache.controls.fly=ZikoFlyControls(this);
        ["orbit","trackball","map","firstPerson","pointerLock","arcball"].forEach(n=>this.controls[n]?.disable(false));
        this.controls.fly.enable(false);
        this.cache.currentCameraControls=this.cache.controls.fly;
        return this;
    }
    usePointerLockControls(){
        if(!this.cache.controls.pointerLock)this.cache.controls.pointerLock=ZikoPointerLockControls(this);
        ["orbit","trackball","map","firstPerson","fly","arcball"].forEach(n=>this.controls[n]?.disable(false));
        this.controls.pointerLock.enable(false);
        this.cache.currentCameraControls=this.cache.controls.pointerLock;
        return this;
    }
    useArcballControls(){
        if(!this.cache.controls.arcball)this.cache.controls.arcball=ZikoArcballControls(this);
        ["orbit","trackball","map","firstPerson","pointerLock","fly"].forEach(n=>this.controls[n]?.disable(false));
        this.controls.arcball.enable(false);
        this.cache.currentCameraControls=this.cache.controls.arcball;
        return this;
    }
    useFirstPersonControls(){
        if(!this.cache.controls.firstPerson)this.cache.controls.firstPerson=ZikoFirstPersonControls(this);
        ["orbit","trackball","map","fly","pointerLock","arcball"].forEach(n=>this.controls[n]?.disable(false));
        this.controls.firstPerson.enable(false);
        this.cache.currentCameraControls=this.cache.controls.firstPerson;
        return this;
    }
    usePerspectiveCamera(){
        this.camera.usePerspective();
        return this;
    }
    useOrthographicCamera(){
        this.camera.useOrthographic();
        return this;
    }
}
const SceneGl=(w,h)=>new ZikoThreeSceneGl(w,h)
export {
    ZikoThreeSceneGl,
    SceneGl
}
import * as THREE from "three";
import {
    ZikoUIElement,
    html
} from "ziko"
import Ziko  from "ziko";
import { ZikoCamera } from "../Camera";
import { 
    ZikoThreeObject,
 } from "../Mesh/ZikoThreeMesh";
//import { SceneMethodes } from "./Methodes.js";
import { mixin, waitElm } from "../Utils";
import { ZikoUIImage } from "ziko";
import { image2texture } from "../Loaders/image.js";
import { 
    ZikoOrbitControls, 
    ZikoTransformControls,
    ZikoMapControls,
} from "../Controls/index.js";
class ZikoThreeSceneGl extends ZikoUIElement{
    constructor(w,h){
        super("figure","figure")
        Object.assign(this.cache,{
            type:"gl",
            controls:{
                orbit:null,
                transform:null
            },
            pointer:new THREE.Vector2(),
		    raycaster:new THREE.Raycaster(),
            last_intersected_uuid:null
        })
        // mixin(this.__proto__,SceneMethodes)
        this.canvas=Ziko.UI.html("canvas").render(true,this.element)
        this.rendererGl=new THREE.WebGLRenderer({canvas:this.canvas.element});
        this.rendererTarget=this.rendererGl;
		this.sceneGl=new THREE.Scene();
        this.camera=ZikoCamera(w,h,0.1,1000);
        this.camera.currentCamera.position.z=10;
        this.camera.parent=this;
        this.sceneGl.background=new THREE.Color("#ff0000");
        this.renderGl()
        this.render();
        this.size(w,h);
        this.watchSize(()=>this.maintain())
        this.useOrbitControls()
        waitElm(this.element.element).then(()=>{
            this.useOrbitControls()
        })
        this.style({
            margin:0
        })
            
    }
    get orbit(){
        return this.cache.controls.orbit;
    }
    get controls(){
        return this.cache.controls;
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
        //this.forEachIntersectedItem()
		this.rendererGl.render(this.sceneGl,this.camera.currentCamera);
		return this;
	}
    add(...obj){
		obj.map((n,i)=>{
			if(n instanceof ZikoThreeObject){
				this.sceneGl.add(obj[i].element);
				this.items.push(obj[i]);
				n.parent=this;
			}
			else this.sceneGl.add(obj[i])
		});
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
    // forEachIntersectedItem(if_callback=()=>{},else_callback=()=>{}){
    //     this.cache.raycaster.setFromCamera( this.cache.pointer, this.camera.currentCamera );
    //     const intersects = this.cache.raycaster.intersectObjects( this.sceneGl.children ).filter(n=>{
    //         return !(
    //             (n.object.type.includes("Controls"))||
    //             (n.object.tag==="helper")||
    //             ["X","Y","Z","XYZ","XYZE","E"].includes(n.object.name)
    //         )
    //     })
    //     const uuids=intersects.map(n=>n.object.uuid);
    //     const intersectred_items=this.items.filter(n=>uuids.includes(n.element.uuid))
    //     const not_intersectred_items=this.items.filter(n=>!uuids.includes(n.element.uuid))
    //         for ( let i = 0; i < intersectred_items.length; i ++ ) {
    //             console.log(intersectred_items[i])
    //             intersectred_items[i].color("#ff00ff")    
    //         }
    //     return this;

    //     // should be used  with throttle or debounce
    // }
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
    clone(){

    }
    background(texture){
        if(typeof texture === "string"){
            if((texture.length===7||texture.length===4)&&texture[0]==="#")this.sceneGl.background=new THREE.Color(texture);
        }
        if(texture instanceof THREE.Texture){
            this.sceneGl.background=texture;
        }
        if(texture instanceof ZikoUIImage){
            this.sceneGl.background=image2texture(texture);
        }
        this.renderGl();
        return this;
    }
    posX(x=this.POSX){
        this.sceneGl.position.x=x;
        this.renderGl();
        return this;
    }
    posY(y=this.POSY){
        this.sceneGl.position.y=y;
        this.renderGl();
        return this;
    }
    posZ(z=this.POSZ){
        this.sceneGl.position.z=z;
        this.renderGl();
        return this;
    }
    pos(x,y,z){
        this.sceneGl.rotation.set(x,y,z);
        this.renderGl();
        return this;
    }
    tarnslateX(dx=0){
        this.sceneGl.position.x=this.POSX+dx;
        this.renderGl();
        return this;
    }
    translateY(dy=0){
        this.sceneGl.position.y=this.POSY+dy;
        this.renderGl();
        return this;
    }
    translateZ(dz=0){
        this.sceneGl.position.z=this.POSZ+dz;
        this.renderGl();
        return this;
    }
    translate(dx=0,dy=0,dz=0){
        this.sceneGl.rotation.set(
            this.POSX+dx,
            this.POSY+dy,
            this.POSZ+dz,
            );
        this.renderGl();
        return this;
    }
    rotX(x=this.ROTX){
        this.sceneGl.rotation.x=x;
        this.renderGl();
        return this;
    }
    rotY(y=this.ROTY){
        this.sceneGl.rotation.y=y;
        this.renderGl();
        return this;            
    }
    rotZ(z=this.ROTZ){
        this.sceneGl.rotation.z=z;
        this.renderGl();
        return this;            
    }
    rot(x,y,z){
        this.sceneGl.rotation.set(x,y,z);
        this.renderGl();
        return this;
    }
    fog(color,near,far){

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
        if(!this.cache.controls.orbit)this.cache.controls.orbit=ZikoOrbitControls(this);
        this.cache.controls?.map?.disable();
        return this;
    }
    useTransformControls(){
        if(!this.cache.controls.transform)this.cache.controls.transform=ZikoTransformControls(this);
        return this;
    }
    useMapControls(){
        if(!this.cache.controls.map)this.cache.controls.map=ZikoMapControls(this);
        this.cache.controls?.orbit?.disable();
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
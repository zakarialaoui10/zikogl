import * as THREE from "three"
import { ZikoUIImage } from "ziko";
import { waitElm } from "../../Utils";
import { image2texture } from "../../Loaders/image.js";
import { 
    ZikoOrbitControls, 
    ZikoTransformControls,
    ZikoMapControls,
} from "../../Controls/index.js";
class SceneMethodes{
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
        fromJson(color,near,far){

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
export { SceneMethodes }
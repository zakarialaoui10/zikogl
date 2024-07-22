import * as THREE from "three"
import {
    ZikoUIImage,
    ZikoUICanvas
} from "ziko"
class ZikoThreeMaterial{
    // constructor(){
    //    // this.material=null
    // }
    useMeshBasicMaterial(){
        this.element.material=new THREE.MeshBasicMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshPhongMaterial(){
        this.element.material=new THREE.MeshPhongMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshDepthMaterial(){
        this.element.material=new THREE.MeshDepthMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshLambertMaterial(){
        this.element.material=new THREE.MeshLambertMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshPhysicalMaterial(){
        this.element.material=new THREE.MeshPhysicalMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshNormalMaterial(){
        this.element.material=new THREE.MeshNormalMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshStandardMaterial(){
        this.element.material=new THREE.MeshStandardMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshDistanceMaterial(){
        this.element.material=new THREE.MeshDistanceMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshMatcapMaterial(){
        this.element.material=new THREE.MeshMatcapMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshToonMaterial(){
        this.element.material=new THREE.MeshToonMaterial(this.cache.materialAttributes);
        return this;
    }
    useLineBasicMaterial(){
        this.element.material=new THREE.LineBasicMaterial(this.cache.materialAttributes);
        return this;
    }
    useLineDashedMaterial(){
        this.element.material=new THREE.LineDashedMaterial(this.cache.materialAttributes);
        return this;
    }
    usePointsMaterial(){
        this.element.material=new THREE.PointsMaterial(this.cache.materialAttributes);
        return this;      
    }
    style(materialAttr,render=true){
        for(let key in materialAttr){
            let value = materialAttr[key];
            switch(key){
                case "visible":this.element.visible=materialAttr[key];break;
                case "color" : value = new Color(value);break;
                case "texture" : {
                    if(["number","string"].includes(typeof value)) this.element.material.color=new Color(value);
                    if(value instanceof Color) this.element.material.color=value;
                    if(value instanceof Texture){
                        if(value instanceof CanvasTexture){
                            
                        }
                    }
                    if(value instanceof ZikoUIElement){
                        if(value instanceof ZikoUIImage){

                        }
                        if(value instanceof ZikoUISvg){

                        }
                        if(value instanceof ZikoUICanvas){

                        }
                        if(value instanceof ZikoUIVideo){

                        }
                    }
                    if(value instanceof HTMLElement){
                        if(value instanceof HTMLImageElement){

                        }
                        if(value instanceof HTMLCanvasElement){

                        }
                        if(value instanceof HTMLVideoElement){

                        }
                    }
                    if(value instanceof SVGSVGElement){

                    }

                } ; break;
               // default : this.element.material[key]=materialAttr[key];
            }
            this.element.material[key]=value;
            Object.assign(this.cache.materialAttributes,{[key]:value})
        }
        //if(render)this.parent.render();
        return this;
    }
    color(color,render=true){
        this.element.material.color=new THREE.Color(color);
        if(render && this.parent)this.parent.renderGl();
        return this;
    }
    side(){

    }
    wireframe(bool,render=true){
        this.element.material.wireframe=bool;
        if(render && this.parent)this.parent.renderGl();
        return this;
    }
    opacity(n=1,render=true){
        this.transparent(true,false);
        this.element.material.opacity=n;
        if(render && this.parent)this.parent.renderGl()
        return this;
    }
    transparent(bool,render=true){
        this.element.material.transparent=bool;
        this.parent.renderGl();          
    }
    texture(texture,render=true){
        if(texture instanceof THREE.Texture){
            this.element.material.map=texture;
        }
        if(texture instanceof ZikoUIImage){
            this.element.material.map=image2texture(texture);
        }
        if(texture instanceof ZikoUICanvas){
            this.element.material.map=canvas2texture(texture);
        }
        this.element.material.needsUpdate=true;
        if(render && this.parent)this.parent.renderGl()
        return this;
    }
}
export{
    ZikoThreeMaterial
}
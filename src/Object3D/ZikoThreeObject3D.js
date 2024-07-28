import { Texture, Color, Mesh, CanvasTexture } from "three";
// import { ZikoUICanvas, ZikoUIElement, ZikoUIImage, ZikoUISvg, ZikoUIVideo } from "ziko";
import {
    ZikoThreeGeometry,
    ZikoThreeMaterial,
} from "./Methodes/index.js"
import { mixin } from "../Utils/index.js";
class ZikoThreeObject3D{
    constructor(){
        this.parent=null;
        this.cache={
            type:null
        }
        mixin(this.__proto__,ZikoThreeGeometry);
    }
    unrender(){
        if(this.parent && this.parent.items.includes(this)){
            this.parent.remove(this)
        }
        return this;
    }
    get px(){
        return this.element.position.x;
    }
    get py(){
        return this.element.position.y;
    }
    get pz(){
        return this.element.position.z;
    }
    get rx(){
        return this.element.rotation.x;
    }
    get ry(){
        return this.element.rotation.y;
    }
    get rz(){
        return this.element.rotation.z;
    }
    get x(){
        return {
            pos:this.px,
            rot:this.rx
        }
    }
    get y(){
        return {
            pos:this.py,
            rot:this.ry
        }
    }
    get z(){
        return {
            pos:this.pz,
            rot:this.rz
        }
    }
}
class ZikoThreeMesh extends ZikoThreeObject3D{
    constructor(Geometry,Material){
        super()
        this.cache={
            type:"gl",
            materialAttributes:{}
        }
        this.element=new Mesh(Geometry,Material);
        mixin(this.__proto__,ZikoThreeMaterial);
    }
    get isHovered(){
        //this.parent.renderGl()

        //return this.parent.cache.last_intersected_uuid===this.element.uuid;
    }
    get Geometry(){
        return this.element.geometry;
    }
    get Material(){
        return this.element.material;
    }
    
}
export {
    ZikoThreeObject3D,
    ZikoThreeMesh
}
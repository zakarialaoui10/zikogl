import { Mesh } from "three";
import {
    ZikoThreeGeometry,
    ZikoThreeMaterial,
    MaterialType
} from "./Methodes/index.js"
import { mixin } from "../Utils/index.js";
class ZikoThreeObject{
    constructor(){
        this.parent=null; // Scene
        mixin(this.__proto__,ZikoThreeGeometry);
    }
    _Maintain(){
        this.element=new Mesh(this.geometry,this.material.currentMaterial);
        if(this.parent)this.parent.renderGl();
        return this;
    }
    render(){
        if(this.parent)this.parent.renderGl();
        return this;
    }
    remove(){

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
class ZikoThreeMesh extends ZikoThreeObject{
    constructor(Geometry,Material){
        super()
        this.cache={
            type:"gl"
        }
        this.element=new Mesh(Geometry,Material);
        this.material=MaterialType(this.element,{});
        mixin(this.__proto__,ZikoThreeMaterial)
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
    ZikoThreeObject,
    ZikoThreeMesh
}
import { Mesh,Color } from "three";
import { ZikoThreeObject3D } from "../ZikoThreeObject3D";
import { isValidTexture, useTexture } from "../../Loaders/texture";
class __ZikoThreeGeoMatBased__ extends ZikoThreeObject3D{
    constructor(){
        super()
        this.cache={
            type:"gl",
            materialAttributes:{}
        }
    }
    get isHovered(){
    }
    get geometry(){
        return this.element.geometry;
    }
    get material(){
        return this.element.material;
    } 
    style(materialAttr,render=true){
        for(let key in materialAttr){
            let value = materialAttr[key];
            switch(key){
                case "color" : value = new Color(value);break;
                case "map": // IT USES THE NEXT LOGIC 
                case "texture": {
                    if(["number","string"].includes(typeof value)) this.element.material.color=new Color(value);
                    if(value instanceof Color) this.element.material.color=value;
                    if(isValidTexture(value)) {
                        this.element.material.needsUpdate=true;
                        value = useTexture(value);
                        key = "map";
                    }
                } ; break;
               // default : this.element.material[key]=materialAttr[key];
            }
            this.element.material[key]=value;
            Object.assign(this.cache.materialAttributes,{[key]:value})
        }
        if(render && this.parent)this.parent.renderGl(); // IF parent type is Gl
        return this;
    }  
    get st(){
        return{
            color:(color,render=true)=>this.style({color},render),
            texture:(texture,render=true)=>this.style({texture},render),
            side:null,
            transparent:null,
            opacity:null,
            wireframe:null
        }
    }
}

export{
    __ZikoThreeGeoMatBased__
}
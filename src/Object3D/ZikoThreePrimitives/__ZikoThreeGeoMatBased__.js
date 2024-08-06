import { Color } from "three";
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
    clone(){
        const Geometry = this.geometry;
        const Material = this.material;
        const OBJECT = new this.constructor(Geometry,Material);
        // OBJECT.style(this.cache.materialAttributes);
        OBJECT.element.applyMatrix4(this.element.matrix);
        return OBJECT;
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
                case "color" :
                case "emissive" : 
                case "sheen" : 
                case "attenuationColor" : value = new Color(value);break;
                case "map": // IT USES THE NEXT LOGIC 
                case "texture": [key,value]=mapTexture.call(this,"map",value) ; break;
                case "emissiveMap": [key,value]=mapTexture.call(this,"emissiveMap",value) ; break;
                case "alphaMap": [key,value]=mapTexture.call(this,"alphaMap",value) ; break;
                case "specularMap": [key,value]=mapTexture.call(this,"specularMap",value) ; break;
                case "normalMap": [key,value]=mapTexture.call(this,"normalMap",value) ; break;
                case "lightMap": [key,value]=mapTexture.call(this,"lightMap",value) ; break;
                case "bumpMap": [key,value]=mapTexture.call(this,"bumpMap",value) ; break;
                case "displacementMap": [key,value]=mapTexture.call(this,"displacementMap",value) ; break;
               // default : this.element.material[key]=materialAttr[key];
            }
            this.element.material[key]=value;
            // console.log({[key]:value})
            this.cache.materialAttributes[key]=value;
            // Object.assign(this.cache.materialAttributes,{[key]:value})
        }
        if(render && this.parent)this.parent.renderGl(); // IF parent type is Gl
        return this;
    }  
    get st(){
        return{
            color:(color,render=true)=>this.style({color},render),
            texture:(texture,render=true)=>this.style({texture},render),
            emmisive:(texture,color,intensity,render)=>this.style({
                emmisiveMap:texture,
                emmisive:new Color(color),
                emissiveIntensity:intensity
            },render),
            displacementMap:(texture,scale,bias)=>this.style({
                displacementMap:texture,
                displacementScale:scale,
                displacementBias:bias,
            }),
            side:null,
            transparent:null,
            opacity:null,
            wireframe:null
        }
    }
}
function mapTexture(__key,value){
        if(["number","string"].includes(typeof value)) this.element.material.color=new Color(value);
        if(value instanceof Color) this.element.material.color=value;
        if(isValidTexture(value)) {
            this.element.material.needsUpdate=true;
            value = useTexture(value);
        }
        return[__key,value]
}
export{
    __ZikoThreeGeoMatBased__
}
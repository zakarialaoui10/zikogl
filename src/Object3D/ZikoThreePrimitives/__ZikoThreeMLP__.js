import { Mesh,Color } from "three";
import { ZikoThreeObject3D } from "../ZikoThreeObject3D";
class __ZikoThreeMLP__ extends ZikoThreeObject3D{
    constructor(Geometry,Material){
        super()
        this.cache={
            type:"gl",
            materialAttributes:{}
        }
        this.element=new Mesh(Geometry,Material);
    }
    get isHovered(){
        //this.parent.renderGl()

        //return this.parent.cache.last_intersected_uuid===this.element.uuid;
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
        // if(render)this.parent.renderGl(); // IF parent type is Gl
        return this;
    }  
    get st(){
        return{
            color:(color,render=true)=>this.style({color},render),
            side:null,
            transparent:null,
            opacity:null,
            texture:null,
            wireframe:null
        }
    }
}

export{
    __ZikoThreeMLP__
}
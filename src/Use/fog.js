import { Fog,FogExp2 } from "three";
class ZikoThreeFog{
    constructor(FogType,scene,color,density){
        this.parentScene=scene;
        this.fog=new FogType(color,density);
    }
    render(){
        this.parentScene.fog=this.fog;
        return this;
    }
    unrender(){
        delete this.parentScene.fog;
        return this;
    }
}
const useFog=(scene,color,density)=>new ZikoThreeFog(Fog,scene,color,density);
const useFogExp2=(scene,color,density)=>new ZikoThreeFog(FogExp2,scene,color,density); 
export{
    useFog,
    useFogExp2
}
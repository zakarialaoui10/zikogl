import { ZikoThreeObject3D } from "../ZikoThreeObject3D";
import { 
    Points,
    PointsMaterial
 } from "three";
import { ZikoThreeMesh } from "./ZikoThreeMesh";
import { __ZikoThreeGeoMatBased__ } from "./__ZikoThreeGeoMatBased__";
class ZikoThreePoints extends __ZikoThreeGeoMatBased__{
    constructor(ZikoMesh){
        super()
        if(ZikoMesh instanceof ZikoThreeMesh){
            const Material = new PointsMaterial(ZikoMesh.cache.materialAttributes);
            this.element=new Points(ZikoMesh.element.geometry, Material);
        }
    }
    get type(){
        return "points"
    }
}
const usePoints=ZikoMesh=>new ZikoThreePoints(ZikoMesh);
export{
    usePoints
}
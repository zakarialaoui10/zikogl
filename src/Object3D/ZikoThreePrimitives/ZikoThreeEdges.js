import { ZikoThreeObject3D } from "../ZikoThreeObject3D";
import { 
    EdgesGeometry,
    LineSegments,
    LineBasicMaterial
 } from "three";
import { ZikoThreeMesh } from "./ZikoThreeMesh";
class ZikoThreeEdges extends ZikoThreeObject3D{
    constructor(ZikoMesh){
        super()
        if(ZikoMesh instanceof ZikoThreeMesh){
            const Geometry = new EdgesGeometry(ZikoMesh.element.geometry);
            const Material = new LineBasicMaterial(ZikoMesh.cache.materialAttributes);
            this.element=new LineSegments(Geometry, Material);
        }
    }
    get type(){
        return "edges"
    }
}
const useEdges=ZikoMesh=>new ZikoThreeEdges(ZikoMesh);
export{
    useEdges
}
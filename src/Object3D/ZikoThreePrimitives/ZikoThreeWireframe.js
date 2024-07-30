import { ZikoThreeObject3D } from "../ZikoThreeObject3D";
import { 
    WireframeGeometry,
    LineSegments,
    LineBasicMaterial
 } from "three";
import { ZikoThreeMesh } from "./ZikoThreeMesh";
class ZikoThreeWireframe extends ZikoThreeObject3D{
    constructor(ZikoMesh){
        super()
        if(ZikoMesh instanceof ZikoThreeMesh){
            const Geometry = new WireframeGeometry(ZikoMesh.element.geometry);
            const Material = new LineBasicMaterial(ZikoMesh.cache.materialAttributes);
            this.element=new LineSegments(Geometry, Material);
        }   
    }
    get type(){
        return "wireframe"
    }
}
const useWireframe=ZikoMesh=>new ZikoThreeWireframe(ZikoMesh);
export{
    useWireframe
}
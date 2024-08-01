import { 
    Points,
    PointsMaterial,
    BufferGeometry
 } from "three";
import { ZikoThreeMesh } from "./ZikoThreeMesh";
import { __ZikoThreeGeoMatBased__ } from "./__ZikoThreeGeoMatBased__";
class ZikoThreePoints extends __ZikoThreeGeoMatBased__{
    constructor(){
        super();
    }
    get type(){
        return "points"
    }
}
class ZikoThreePointsMeshBased extends ZikoThreePoints{
    constructor(ZikoMesh){
        super();
        if(ZikoMesh instanceof ZikoThreeMesh){
            const Material = new PointsMaterial(ZikoMesh.cache.materialAttributes);
            this.element=new Points(ZikoMesh.element.geometry, Material);
        }
    }
}
class ZikoThreePointsVectorBased extends ZikoThreePoints{
    constructor(X,Y,Z,size,color){
        super();
        const geometry = new BufferGeometry();
        const vertices = [];
        for(let i=0;i<X.length;i++){
            vertices.push(X[i],Y[i],Z[i]);
        }
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        const material = new PointsMaterial({ color: 0x888888, size: 0.5 });
        this.element = new Points(geometry,material);
    }
}
const usePoints=ZikoMesh=>new ZikoThreePointsMeshBased(ZikoMesh);
const points3=(X,Y,Z,size = 0.1,color = 0x111111)=>new ZikoThreePointsVectorBased(X,Y,Z,size,color);
export{
    usePoints,
    points3
}
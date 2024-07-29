import { 
    Mesh,
    BoxGeometry,
    PlaneGeometry,
    CylinderGeometry,
    SphereGeometry,
    ConeGeometry,
    TorusGeometry,
    RingGeometry,
    TorusKnotGeometry,
    TetrahedronGeometry,
    DodecahedronGeometry,
    IcosahedronGeometry,
    OctahedronGeometry,
    MeshBasicMaterial,
    MeshPhongMaterial,
    MeshDepthMaterial,
    MeshLambertMaterial,
    MeshPhysicalMaterial,
    MeshNormalMaterial,
    MeshStandardMaterial,
    MeshDistanceMaterial,
    MeshMatcapMaterial,
    MeshToonMaterial
 } from "three";
import { __ZikoThreeMLP__ } from "./__ZikoThreeMLP__";
class ZikoThreeMesh extends __ZikoThreeMLP__{
    constructor(Geometry,Material){
        super(Geometry,Material);
        this.element=new Mesh(Geometry,Material);
    }
    useMeshBasicMaterial(){
        this.element.material=MeshBasicMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshPhongMaterial(){
        this.element.material=MeshPhongMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshDepthMaterial(){
        this.element.material=MeshDepthMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshLambertMaterial(){
        this.element.material=MeshLambertMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshPhysicalMaterial(){
        this.element.material=MeshPhysicalMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshNormalMaterial(){
        this.element.material=MeshNormalMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshStandardMaterial(){
        this.element.material=MeshStandardMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshDistanceMaterial(){
        this.element.material=MeshDistanceMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshMatcapMaterial(){
        this.element.material=MeshMatcapMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshToonMaterial(){
        this.element.material=MeshToonMaterial(this.cache.materialAttributes);
        return this;
    }
}
const cube3=(l)=>new ZikoThreeMesh(new BoxGeometry(l,l,l));
const plane3=(w,h)=>new ZikoThreeMesh(new PlaneGeometry(w,h,100,100));
const cuboid3=(l,L,h)=>new ZikoThreeMesh(new BoxGeometry(l,L,h));
const cylindre3=(rT,rB,h)=>new ZikoThreeMesh(new CylinderGeometry(rT,rB,h,100)); 
const sphere3 = (r, { width = 50, height = 50, phi = [0, 2 * Math.PI], theta = [0, 2 * Math.PI] } = {}) => {
    return new ZikoThreeMesh(
        new SphereGeometry(r, width, height, phi[0], phi[1], theta[0], theta[1])
    );
};
const cone3=(r,h)=>new ZikoThreeMesh(new ConeGeometry(r,h,100));
const torus3=(r,tubeRadius)=>new ZikoThreeMesh(new TorusGeometry(r,tubeRadius,100,100,2*PI));  
const ring=(innerRadius=1, outerRadius=2, thetaSegments=20)=>new ZikoThreeMesh(new RingGeometry(innerRadius, outerRadius, thetaSegments));
const torusKnot3=(r,tube,tubularSegments,radialSegments,p,q)=>new ZikoThreeMesh(new TorusKnotGeometry(r,tube,tubularSegments,radialSegments,p,q));
const tetradron3=(r)=>new ZikoThreeMesh(new TetrahedronGeometry(r));
const dodecahedron3=(r)=>new ZikoThreeMesh(new DodecahedronGeometry(r));
const icosahedron3=(r)=>new ZikoThreeMesh(new IcosahedronGeometry(r));
const octahedron3=(r)=>new ZikoThreeMesh(new OctahedronGeometry(r));
export{
    ZikoThreeMesh,
    cube3,
    plane3,
    cuboid3,
    cylindre3,
    sphere3,
    cone3,
    torus3,
    ring,
    torusKnot3,
    tetradron3,
    dodecahedron3,
    icosahedron3,
    octahedron3
}
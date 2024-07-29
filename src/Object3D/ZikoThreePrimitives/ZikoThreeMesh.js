import { Mesh } from "three";
import { __ZikoThreeMLP__ } from "./__ZikoThreeMLP__";
class ZikoThreeMesh extends __ZikoThreeMLP__{
    constructor(Geometry,Material){
        super(Geometry,Material);
        this.element=new Mesh(Geometry,Material);
    }
    useMeshBasicMaterial(){
        this.element.material=new THREE.MeshBasicMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshPhongMaterial(){
        this.element.material=new THREE.MeshPhongMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshDepthMaterial(){
        this.element.material=new THREE.MeshDepthMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshLambertMaterial(){
        this.element.material=new THREE.MeshLambertMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshPhysicalMaterial(){
        this.element.material=new THREE.MeshPhysicalMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshNormalMaterial(){
        this.element.material=new THREE.MeshNormalMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshStandardMaterial(){
        this.element.material=new THREE.MeshStandardMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshDistanceMaterial(){
        this.element.material=new THREE.MeshDistanceMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshMatcapMaterial(){
        this.element.material=new THREE.MeshMatcapMaterial(this.cache.materialAttributes);
        return this;
    }
    useMeshToonMaterial(){
        this.element.material=new THREE.MeshToonMaterial(this.cache.materialAttributes);
        return this;
    }
}
const cube3=(l)=>new ZikoThreeMesh(new THREE.BoxGeometry(l,l,l));
const plan3=(w,h)=>new ZikoThreeMesh(new THREE.PlaneGeometry(w,h,100,100));
const cuboid3=(l,L,h)=>new ZikoThreeMesh(new THREE.BoxGeometry(l,L,h));
const cylindre3=(rT,rB,h)=>new ZikoThreeMesh(new THREE.CylinderGeometry(rT,rB,h,100)); 
const sphere3 = (r, { width = 50, height = 50, phi = [0, 2 * Math.PI], theta = [0, 2 * Math.PI] } = {}) => {
    return new ZikoThreeMesh(
        new THREE.SphereGeometry(r, width, height, phi[0], phi[1], theta[0], theta[1])
    );
};

const cone3=(r,h)=>new ZikoThreeMesh(new THREE.ConeGeometry(r,h,100));
const torus3=(r,tubeRadius)=>new ZikoThreeMesh(new THREE.TorusGeometry(r,tubeRadius,100,100,2*PI));  
const ring=(innerRadius=1, outerRadius=2, thetaSegments=20)=>new ZikoThreeMesh(new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments));
const torusKnot3=(r,tube,tubularSegments,radialSegments,p,q)=>new ZikoThreeMesh(new THREE.TorusKnotGeometry(r,tube,tubularSegments,radialSegments,p,q));
const tetradron3=(r)=>new ZikoThreeMesh(new THREE.TetrahedronGeometry(r));
const dodecahedron3=(r)=>new ZikoThreeMesh(new THREE.DodecahedronGeometry(r));
const icosahedron3=(r)=>new ZikoThreeMesh(new THREE.IcosahedronGeometry(r));
const octahedron3=(r)=>new ZikoThreeMesh(new THREE.OctahedronGeometry(r));
export{
    ZikoThreeMesh,
    cube3,
    plan3,
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
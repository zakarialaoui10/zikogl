import { Mesh } from "three";
import { __ZikoThreeMLP__ } from "./__ZikoThreeMLP__";
// import { ZikoThreeMaterial } from "../Methodes";
class ZikoThreeMesh extends __ZikoThreeMLP__{
    constructor(Geometry,Material){
        super(Geometry,Material);
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

export{
    ZikoThreeMesh
}
import { __ZikoThreeMLP__ } from "./__ZikoThreeMLP__";
class ZikoThreePoints extends __ZikoThreeMLP__{
    constructor(Geometry,Material){
        super()
    }
    get type(){
        return "points"
    }
    usePointsMaterial(){
        this.element.material=new THREE.PointsMaterial(this.cache.materialAttributes);
        return this;      
    }
}
export{
    ZikoThreePoints
}
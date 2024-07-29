import { __ZikoThreeMLP__ } from "./__ZikoThreeMLP__";
class ZikoThreeLine extends __ZikoThreeMLP__{
    constructor(Geometry,Material){
        super(Geometry,Material)
    }
    useLineBasicMaterial(){
        this.element.material=new THREE.LineBasicMaterial(this.cache.materialAttributes);
        return this;
    }
    useLineDashedMaterial(){
        this.element.material=new THREE.LineDashedMaterial(this.cache.materialAttributes);
        return this;
    }
}
export{
    ZikoThreeLine
}
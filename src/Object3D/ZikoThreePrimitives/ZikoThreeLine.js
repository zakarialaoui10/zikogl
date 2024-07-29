import { __ZikoThreeMLP__ } from "./__ZikoThreeMLP__";
class ZikoThreeLine extends __ZikoThreeMLP__{
    constructor(X,Y){
        super();
        var points = [X,Y].map(pts=>new THREE.Vector3(...pts));
        var geometry = new THREE.BufferGeometry().setFromPoints(points);
        this.element=new THREE.Line(geometry);
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
const line3=(X,Y,style)=>new ZikoThreeLine(X,Y).style(style)
export{
    ZikoThreeLine,
    line3
}
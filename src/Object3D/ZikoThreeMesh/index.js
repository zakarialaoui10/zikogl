class ZikoThreeMesh extends ZikoThreeObject3D{
    constructor(Geometry,Material){
        super()
        this.cache={
            type:"gl",
            materialAttributes:{}
        }
        this.element=new Mesh(Geometry,Material);
        mixin(this.__proto__,ZikoThreeMaterial);
    }
    get isHovered(){
        //this.parent.renderGl()

        //return this.parent.cache.last_intersected_uuid===this.element.uuid;
    }
    get Geometry(){
        return this.element.geometry;
    }
    get Material(){
        return this.element.material;
    }   
}

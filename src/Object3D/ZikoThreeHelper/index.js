import { 
    Vector3,
    AxesHelper,
    GridHelper,
    PolarGridHelper,
    Plane,
    PlaneHelper,
    BoxHelper,
    Box3Helper,
    Box3,
    ArrowHelper,
 } from "three";
import { ZikoThreeObject3D } from "../ZikoThreeObject3D";
class ZikoThreeHelper extends ZikoThreeObject3D{
    constructor(){
        super()
    }
    get type(){
        return "helper";
    }
}
class ZikoThreeAxesHelper extends ZikoThreeHelper{
    constructor(size){
        super()
        this.element=new AxesHelper(size);
    }
}
class ZikoThreeGridHelper extends ZikoThreeHelper{
    constructor(n,m,color1,color2){
        super()
        this.element=new GridHelper(n,m,color1,color2);
    }
}
class ZikoThreePolarHelper extends ZikoThreeHelper{
    constructor(radius,radials,circles,divisions){
        super()
        this.element=new PolarGridHelper(radius,radials,circles,divisions);
    }
}
class ZikoThreePlaneHelper extends ZikoThreeHelper{
    constructor(V,size,color){
        super()
        this.plane= new Plane( new Vector3( ...V ), size );
        this.element=new PlaneHelper(this.plane,size,color);
    }
}
class ZikoThreeBoxHelper extends ZikoThreeHelper{
    constructor(ZikoGlObject,color){
        super()
        this.element=new BoxHelper(ZikoGlObject.element,color);
    }
}
class ZikoThreeBox3Helper extends ZikoThreeHelper{
    constructor(V0,V1,color){
        super()
        this.box=new Box3(Vector3(...V0),Vector3(...V1),color)
        this.element=new Box3Helper(this.box,color);
    }
}
class ZikoThreeArrowHelper extends ZikoThreeHelper{
    constructor(originVector,directionVector,length,color){
        super()
        this.element=new ArrowHelper(new Vector3(...directionVector),new Vector3(...originVector),length,color)
    }
}

const useAxesHelper=(size)=>new ZikoThreeAxesHelper(size);
const useGridHelper=(N,M,color1,color2)=>new ZikoThreeGridHelper(N,M,color1,color2);
const usePolarHelper=(radius,radials,circles,divisions)=>new ZikoThreePolarHelper(radius,radials,circles,divisions);
const usePlaneHelper=(V,size,color)=>new ZikoThreePlaneHelper(V,size,color);
const useBoxHelper=(ZikoGlObject,color)=>new ZikoThreeBoxHelper(ZikoGlObject,color);
const useBoxVectorHelper=(V0=[0,0,0],V1=[1,1,1],color=0x222222)=>new ZikoThreeBox3Helper(V0,V1,color);
const useArrowHelper=(originVector,directionVector,length,color)=>new ZikoThreeArrowHelper(originVector,directionVector,length,color);
export{
    useAxesHelper,
    useGridHelper,
    usePolarHelper,
    usePlaneHelper,
    useBoxHelper,
    useBoxVectorHelper,
    useArrowHelper
}
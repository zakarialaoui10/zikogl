import { 
    AxesHelper,
    GridHelper,
    PolarGridHelper
 } from "three";
import { ZikoThreeObject3D } from "../ZikoThreeObject3D";
class ZikoThreeHelper extends ZikoThreeObject3D{
    constructor(){
        super()
    }
}
class ZikoThreeGridHelper extends ZikoThreeHelper{
    constructor(n,m,color1,color2){
        super()
        this.element=new GridHelper(n,m,color1,color2);
    }
}
class ZikoThreePolarHelper extends ZikoThreeHelper{
    constructor(r,R,c,d){
        super()
        this.element=new PolarGridHelper(r,R,c,d);
    }
}

const gridHelper3=(n,m,color1,color2)=>new ZikoThreeGridHelper(n,m,color1,color2);
const polarHelper3=(r,R,c,d)=>new ZikoThreePolarHelper(r,R,c,d);

export{
    gridHelper3,
    polarHelper3
}
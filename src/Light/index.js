import { ZikoThreeObject3D } from "../Object3D/ZikoThreeObject3D";
import { 
    AmbientLight, 
    DirectionalLight, 
    HemisphereLight, 
    PointLight, 
    RectAreaLight, 
    SpotLight 
} from "three/src/Three.js";

class ZikoThreeLight extends ZikoThreeObject3D {
    constructor() {
        super();
    }
    get type(){
        return "light";
    }
    clone(){
        const OBJECT = new this.constructor();
        OBJECT.__proto__=this.__proto__;
        OBJECT.element=new this.element.constructor(...this.cache.args);
        return OBJECT
    }
}

class ZikoThreeAmbientLight extends ZikoThreeLight {
    constructor(color = 0xffffff, intensity = 1) {
        super();
        Object.assign(this.cache,{
            args:[color,intensity]
        })
        this.element = new AmbientLight(color, intensity);
    }
}

class ZikoThreeDirectionalLight extends ZikoThreeLight {
    constructor(color = 0xffffff, intensity = 1) {
        super();
        Object.assign(this.cache,{
            args:[color,intensity]
        })
        this.element = new DirectionalLight(color, intensity);
    }
}

class ZikoThreeHemisphereLight extends ZikoThreeLight {
    constructor(skyColor = 0xffffbb, groundColor = 0x080820, intensity = 1) {
        super();
        this.element = new HemisphereLight(skyColor, groundColor, intensity);
    }
}

class ZikoThreePointLight extends ZikoThreeLight {
    constructor(color = 0xffffff, intensity = 1, distance = 0, decay = 1) {
        super();
        Object.assign(this.cache,{
            args:[color,intensit,distance,decay]
        })
        this.element = new PointLight(color, intensity, distance, decay);
    }
}

class ZikoThreeRectAreaLight extends ZikoThreeLight {
    constructor(color = 0xffffff, intensity = 1, width = 10, height = 10) {
        super();
        Object.assign(this.cache,{
            args:[color,intensity,width,height]
        })
        this.element = new RectAreaLight(color, intensity, width, height);
    }
}

class ZikoThreeSpotLight extends ZikoThreeLight {
    constructor(color = 0xffffff, intensity = 1, distance = 0, angle = Math.PI / 3, penumbra = 0, decay = 1) {
        super();
        Object.assign(this.cache,{
            args:[color,intensity,distance,angle,penumbra,decay]
        })
        this.element = new SpotLight(color, intensity, distance, angle, penumbra, decay);
    }
}

const useAmbientLight = (color, intensity) => new ZikoThreeAmbientLight(color, intensity);
const useDirectionalLight = (color, intensity) => new ZikoThreeDirectionalLight(color, intensity);
const useHemisphereLight = (skyColor, groundColor, intensity) => new ZikoThreeHemisphereLight(skyColor, groundColor, intensity);
const usePointLight = (color, intensity, distance, decay) => new ZikoThreePointLight(color, intensity, distance, decay);
const useRectAreaLight = (color, intensity, width, height) => new ZikoThreeRectAreaLight(color, intensity, width, height);
const useSpotLight = (color, intensity, distance, angle, penumbra, decay) => new ZikoThreeSpotLight(color, intensity, distance, angle, penumbra, decay);

export {
    useAmbientLight,
    useDirectionalLight,
    useHemisphereLight,
    usePointLight,
    useRectAreaLight,
    useSpotLight
};

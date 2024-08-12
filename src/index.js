import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { OBJLoader } from "three/examples/jsm/Addons.js";
window.gltf=new GLTFLoader()
window.ob=new OBJLoader()
import * as THREE from "three"
import { SceneGl } from "./Scene/gl.js";
import { SceneCss } from "./Scene/css.js";
import { loadSVG } from "./Loaders/svg.js";
import { 
    useAmbientLight,
    useDirectionalLight,
    useHemisphereLight,
    usePointLight,
    useRectAreaLight,
    useSpotLight,
} from "./Light/index.js";
import{
    useAxesHelper,
    useGridHelper,
    usePolarHelper,
    usePlaneHelper,
    useBoxHelper,
    useBoxVectorHelper,
    useArrowHelper,
    useLightHelper
} from "./Object3D/ZikoThreeHelper/index.js"
import { 
    useCoordinates,
    useTexture,
    useEdges,
    useWireframe,
    usePoints,
    useSprite
 } from "./Use";
import{
    cube3,
    plane3,
    line3,
    points3,
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
    octahedron3,
    groupe3,
    svg3,
    extrude3,
    ui3,
    htmlMesh,
    text3,
    text2
} from "./Object3D/index.js";
import { 
    useDragControls,
    usePointerControls,
    useTransformControls
 } from "./Controls";
const ZikoGl={
    THREE,
    ui3,
    htmlMesh,
    text3,
    text2,
    loadSVG,
    SceneGl,
    SceneCss,
    cube3,
    plane3,
    line3,
    points3,
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
    octahedron3,
    groupe3,
    svg3,
    extrude3,
    useAxesHelper,
    useGridHelper,
    usePolarHelper,
    usePlaneHelper,
    useBoxHelper,
    useBoxVectorHelper,
    useArrowHelper,
    useLightHelper,
    useTexture,
    useAmbientLight,
    useDirectionalLight,
    useHemisphereLight,
    usePointLight,
    useRectAreaLight,
    useSpotLight,
    useTransformControls,
    useDragControls,
    usePointerControls,
    useCoordinates,
    useEdges,
    useWireframe,
    usePoints,
    useSprite
}
if ( globalThis.__ZikoGl__ ) {
    console.warn( 'WARNING: Multiple instances of Zikogl.js being imported.' );
	} else {
		globalThis.__ZikoGl__={
            ...ZikoGl,
            ExtractAll: function () {
                const keys = Object.keys(this);
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    if (key !== 'ExtractAll' && key !== 'RemoveAll') {
                        globalThis[key] = this[key];
                    }
                }
                return this;
            },
            RemoveAll: function () {
                const keys = Object.keys(this);
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    if (key !== 'RemoveAll') {
                        delete globalThis[key];
                    }
                }
                return this;
            }
        };
	}
export * from "./Scene";
export * from "./Object3D";
export * from "./Use";
export default ZikoGl
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
    useTransformControls,
    useAxesHelper,
    useGridHelper,
    usePolarHelper,
    usePlaneHelper,
    useBoxHelper,
    useBoxVectorHelper,
    useArrowHelper,
    useLightHelper,
    useFog,
    useFogExp2,
    useCoordinates,
    useTexture,
    useEdges,
    useWireframe,
    usePoints,
 } from "./Use";
import{
    cube3,
    plane3,
    line3,
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
    text3,
    text2
} from "./Object3D/index.js";
import { useDragControls } from "./Controls/drag.js";
const ZikoGl={
    THREE,
    ui3,
    text3,
    text2,
    loadSVG,
    SceneGl,
    SceneCss,
    cube3,
    plane3,
    line3,
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
    useFog,
    useFogExp2,
    useCoordinates,
    useEdges,
    useWireframe,
    usePoints
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
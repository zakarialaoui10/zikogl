The `SceneGl` element is the root of your `ZikoGl` scene and is an instance of [ZikoUIElement](). 
It acts as the foundational container for all 3D components in your scene, including objects, lights, and cameras. As a ZikoUIElement, it inherits properties and methods that allow it to interact seamlessly within the `Ziko.js` framework. By adding other elements to the SceneGl, you build up the scene that will be rendered and displayed.

## Overview 
```js
 import {SceneGl} from "zikogl";
 const WIDTH = innerWidth;
 const HEIGHT = innerHeight;
 const BACKGROUND = 0x222222;
 const SCENE = SceneGl(WIDTH,HEIGHT,BACKGROUND);
 const C1= cube3(1).style({
    color : 0x5555ee
 }).posX(-2)
 const C2= cube3(1).style({
    color : 0x5555ee
 }).posX(2)
 SCENE.add(C1,C2);
```

The SceneGl element in ZikoGl provides a comprehensive set of features for managing camera controls, switching between different cameras, and interacting with your 3D scene. Here’s what it offers : 

## Camera Switching :
You can switch between the two supported camers in `zikogl` using the following methodes :  

 ***`.usePerspectiveCamera()`:*** Switches to a perspective camera, which mimics the way the human eye perceives the world.

 ***`.useOrthographicCamera()`:*** Switches to an orthographic camera, where objects are rendered without perspective distortion, useful for technical and architectural visualization.

 ***`.currentCamera`:*** This getter returns the camera instance currently in use within the SceneGl. It provides direct access to the camera being used for rendering the scene, allowing you to modify its properties or perform operations such as adjusting its position, rotation, or field of view.

 ## Multiple Camera Controls:
  You can easily switch between different control schemes to suit various interaction needs. When switching controls, the previously active control will be disabled to prevent conflicts. Here’s how you can switch between the available control schemes:

  ***`.useOrbitControls()`:*** Initializes the scene with OrbitControls by default, enabling the camera to orbit around the scene, zoom in/out, and pan.

  ***`.useTrackballControls()`:*** Activates TrackballControls for free-form camera rotation and movement.
  
  ***`.useMapControls()`:*** Switches to MapControls, ideal for panning and zooming, similar to a 2D map interface.
  
  ***`.useFlyControls()`:*** Enables FlyControls, allowing the camera to fly through the scene, which is useful for aerial navigation.
  
  ***`.useFirstPersonControls()`:*** Activates FirstPersonControls for a first-person perspective, moving and looking around as if through a character's eyes.
  
  ***`.usePointerLockControls()`:*** Engages PointerLockControls to capture the mouse pointer and allow unrestricted camera movement, often used in FPS-style navigation.
  
  ***`.useArcballControls()`:*** Switches to ArcballControls, which provides intuitive rotation around a pivot point.

  💡 
  ***`.currentCameraControls`:*** Every camera control scheme has its own methods and getters. You can use this getter to retrieve the currently active camera controls, allowing you to access and manipulate the specific controls in use.

 ## Scene Mainpulation :

 ***`.background(texture)`:*** Sets the background of the scene using a color or texture.

 ***`.useFog(color,near,far)`:*** Adds linear fog to the scene, simulating distance by fading objects into the background color.

 ***`.useFogExp(color, density)`:*** Adds exponential fog to the scene, 
 with a density factor that defines how quickly objects fade with distance.

 ***`.useShadow(type)`:*** Enables or disables shadow mapping, enhancing the realism of lighting in the scene.

 ***`.disableShadow()`:*** Disables shadow mapping.

 ## Object Maniulation 

  ***`.add( ...ZikoGl3DObject)`:*** Adds one or more ZikoGl3DObject instances to the scene. This method integrates the specified objects into the SceneGl, making them part of the rendered scene.

  ***`.remove( ...ZikoGl3DObject)`:*** Removes one or more ZikoGl3DObject instances from the scene. This method detaches the specified objects from the SceneGl, ensuring they are no longer rendered.

  ***`.items`*** : This property holds an array of all ZikoGl3DObject instances currently in the scene.

  ***`[index : Integer]`*** : this is an other way to acces the scene items , `SCENE[0]` this will return the first added ZikoGl3DObject on the scene , you can aslo use a negative values, for example `SCENE[-1]` will return the last element. 

 ## Inherited Methodes

 The SceneGl element inherits methods from ZikoUIElement, which allow for effective manipulation and interaction with the elements within the scene. Here’s a closer look at these inherited methods:

  ### Object Manipulation 

  ***`.forEach( callback )`:*** Iterates over each object in the scene and applies the provided callback function to each one.

  ***`.find( callback )`***

  ***`.filter( condition_callback,if_callback,else_callback)`:*** Filters the objects in the scene based on a condition defined by the condition_callback. Optionally, you can provide if_callback to handle objects that meet the condition and else_callback to handle objects that do not. 
  ### Events Handler 

<!-- ## Recap 
 ```js
  import {SceneGl} from "zikogl";
  const WIDTH = innerWidth;
  const HEIGHT = innerHeight;
  const BACKGROUND = 0x222222;
  const SCENE = SceneGl(WIDTH,HEIGHT,BACKGROUND)
                .useMapControls()
                .useFog(0xeeeeee,1,100)
  const C1= cube3(1).style({
    color : 0x5555ee
    }).posX(-2)
  const C2= cube3(1).style({
    color : 0x5555ee
    }).posX(2)
 SCENE.add(C1,C2);
 SCENE.for(element=>console.log(element))
 ``` -->

ZikoGl is a [Zikojs](https://github.com/zakarialaoui10/ziko.js) plugin built on the top of [Threejs](https://threejs.org/)
## Demo 
 [Windows entaglement](https://www.linkedin.com/posts/zakaria-elalaoui-810ab41b8_javascript-zikojs-threejs-activity-7144023650394918913-gatB?utm_source=share&utm_medium=member_desktop)
## Scene
ZikoGl provides a variety of scene setups to meet diverse rendering needs. Scenes in ZikoGl are an instance of ZikoElement, allowing you to utilize all ZikoElement methods.
Here are the main scene types:
 ### SceneGl
 SceneGl is used for creating standard WebGL scenes. It supports adding 3D objects and includes various controls for interacting with the scene.
 ```js
   gl=SceneGl(WIDTH,HEIGHT,BACKGROUND)
   gl.add(/* ...ZikoGlObject */)
   gl.useMapControls() 
   gl.useOrthographicCamera() 
 ```
 ### SceneCss
 SceneCss allows for the integration of HTML/CSS elements into the 3D scene. This is useful for combining 3D graphics with traditional web elements.
  ```js
   gl=SceneCss(WIDTH,HEIGHT,BACKGROUND)
   gl.add(/* ...ZikoGlObject,...ZikoElement*/)
   gl.useMapControls()  
 ```
## Objects 
ZikoGl provides a set of predefined objects that you can easily add to your scene. These objects can be styled and positioned as needed.
 ```js
  let sphere = sphere3(1)
                .style({
                    texture: /* Img Video Svg Canvas ...*/
                })
                .pos(x,y,z);
                .useStandardMaterial()
 ```
## Controls
ZikoGl includes a variety of control mechanisms to manipulate the camera and objects within the scene. These controls enhance user interaction and make it easier to navigate and modify the 3D environment.
 ### Camera Based Controls
 Camera-based controls allow users to navigate the scene by manipulating the camera's position and orientation.
 - ***OrbitControls :*** Enables orbiting around a target.
 - ***MapControls :***
 - ***FlyControls :*** 
 - ***TrackballControls :*** 
 - ***FirstPersonControls :*** 
 - ***PointerControls :*** 
 ### Object Based Controls
 Object-based controls are used to manipulate individual objects within the scene.

 - ***TransformControls:*** 
 ```js
  let mode="translate"; // use can use either "rotate" and scale;
  ctrl = useTransformCtrl(object);
 ```
 - ***DragContros:***
  ```js
  ctrl = useDragCtrl([objects]);
  ctrL.onStart(callback1)
      .onDrag(callback2)
 ```

 

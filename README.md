ZikoGl is a [Zikojs](https://github.com/zakarialaoui10/ziko.js) plugin built on the top of [Threejs](https://threejs.org/)
## Demo 
 [Windows entaglement](https://www.linkedin.com/posts/zakaria-elalaoui-810ab41b8_javascript-zikojs-threejs-activity-7144023650394918913-gatB?utm_source=share&utm_medium=member_desktop)
## Scene
 ### SceneGl
 ```js
   gl=SceneGl(WIDTH,HEIGHT,BACKGROUND)
   gl.add(/* ...ZikoGlObject */)
   gl.useMapControls() 
   gl.useOrthographicCamera() 
 ```
 ### SceneCss
  ```js
   gl=SceneCss(WIDTH,HEIGHT,BACKGROUND)
   gl.add(/* ...ZikoGlObject,...ZikoElement*/)
   gl.useMapControls()  
 ```
## Objects 
 ```js
  let sphere = sphere3(1)
                .style({
                    texture: /* Img Video Svg Canvas ...*/
                })
                .pos(x,y,z);
                .useStandardMaterial()
 ```
## Controls
 ### Camera Based Controls
 - ***OrbitControls :*** 
 - ***MapControls :***
 - ***FlyControls :*** 
 - ***TrackballControls :*** 
 - ***FirstPersonControls :*** 
 - ***PointerControls :*** 
 ### Object Based Controls
 - ***TransformControls:*** 
 ```js
  let mode="translate"; // use can use either "rotate" and scale;
  ctrl = useTransformControls(object);
 ```
 - ***DragContros:***
  ```js
  ctrl = useDragControls([objects]);
  ctrL.onStart(callback1)
      .onDrag(callback2)
 ```

 

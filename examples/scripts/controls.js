__Ziko__.ExtractAll()
__ZikoGl__.ExtractAll()
__Ziko__.__Config__.setDefault({target:document.body})

SCENE = SceneGl("100vw","80vh");
im=image("im.png")
et=image("textured-world-map-stockcake.jpg")
im.st.hide()  // FIX this
et.st.hide()  // FIX this

SCENE.background(im);
SCENE.add(sphere3(3).style({texture:et}))
obj=[]
for(i=-2;i<=2;i++){
	for(j=-2;j<=2;j++){
		for(k=-2;k<=2;k++){
			obj.push(cube3(0.3).pos(i*4.5,j*4.5,3*k).style({color:Random.color()}))
		}
	}
}
SCENE.add(...obj);

dragCtrl = useDragCtrl(obj);
transformCtrl = useTransformCtrl(SCENE,"rotate");
dragCtrl.onStart(e=>transformCtrl.attach(e.element));

h4("Camera Controls")
Flex(
	btn("Orbit Controls").onClick(()=>SCENE.useOrbitControls()),
	btn("Fly Controls").onClick(()=>SCENE.useFlyControls()),
	btn("Map Controls").onClick(()=>SCENE.useMapControls()),
	btn("First Person Controls").onClick(()=>SCENE.useFirstPersonControls())
).size("80vw","30px").horizontal("space-around")
h4("Transform Controls Mode")
Flex(
	btn("Translate").onClick(()=>transformCtrl.setMode("translate")),
	btn("Rotate").onClick(()=>transformCtrl.setMode("rotate")),
	btn("Scale").onClick(()=>transformCtrl.setMode("scale")),
).size("80vw","30px").horizontal("space-around")


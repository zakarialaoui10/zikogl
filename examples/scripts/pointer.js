__Ziko__.ExtractAll()
__ZikoGl__.ExtractAll()
__Ziko__.__Config__.setDefault({target:document.body})

SCENE = SceneGl("100vw","80vh");
im1 = image("im.png");
im1.st.hide();
t1 = useTexture(im1);
SCENE.background(t1);

obj=[]
for(i=-2;i<=2;i++){
	for(j=-2;j<=2;j++){
		for(k=-2;k<=2;k++){
			obj.push(cube3(0.5).pos(i*4.5,j*4.5,3*k).style({color:Random.color()}))
		}
	}
}
SCENE.add(...obj)

ptrCtrl = usePtrCtrl(obj);
transformCtrl = useTransformCtrl(SCENE);
ptrCtrl.onClick(e=>transformCtrl.attach(e.element));

Mode = Flex(
	btn("Translate"),
	btn("Rotate"),
	btn("Scale")
).horizontal("space-around",0)
Flex(
	h4("Transform Control Modes"),
	Mode
).vertical(0,0).style({
	border:"1px darkblue solid",
	width:"80vw",
	height:"80px",
	margin:"0 auto",
	color:"darkblue",
})

Mode.forEach(element=>{
	element.onClick(()=>transformCtrl.setMode(element.value))
	element.style({
		color:"darkblue",
		border:"1px darkblue solid",
		fontWeight:"bold",
		background:"transparent",
		width:"100px",
		height:"30px",
	})
})

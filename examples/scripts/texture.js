__Ziko__.ExtractAll()
__ZikoGl__.ExtractAll()
__Ziko__.__Config__.setDefault({target:document.body})

SCENE = SceneGl("100vw","50vh").background("#222222");
im1=image("im.png")
im1.st.hide()
im2=image("ziko.png")
im2.st.hide()
t1=useTexture(im1)
t2=useTexture(im2)
// obj1 = cylindre3(2,2,2).posX(-2).style({
//     side:2,
//     map:t2,
//     displacementMap:t2,
//     displacementScale: 0,
//     displacementBias: 0,
//     // emissive:0xffffff,
//     // metalness:1.0,
// })
// obj2 = cube3(3).posX(2).style({
//     specularMap:t2
// })
// obj1.useMeshPhysicalMaterial()
obj=[]
for(i=-1;i<=1;i++){
	for(j=-1;j<=1;j++){
		for(k=-1;k<=1;k++){
			obj.push(
                cube3(2.5).pos(i*4.5,j*4.5,4.5*k)
                .rot(PI*i/3,PI*j/3,PI*k/3)
                .style({
                    texture:t2,
                }))
		}
	}
}
// SCENE.add(...obj)
SCENE.background(t1)
l=useAmbientLight(0xffffff,1)
SCENE.add(l)
ele=Flex(
    text("1 ABCDE"),
    text("2 FGHIJ"),
    text("3 KLMNO"),
    text("4 PQRST"),
    text("5 UVWXY"),
    text("6 Z")
).style({
    width:"500px",
    height:"auto",
    background:"cyan"
}).vertical(0,0)
// addEventListener("DOMContentLoaded", () => SCENE.renderGl());

ht=htmlMesh(ele)
ht.element.scale.setScalar(30)
ht.element.position.set(0, 0, 0)
SCENE.add(ht)

__Ziko__.ExtractAll()
__ZikoGl__.ExtractAll()
__Ziko__.__Config__.setDefault({target:document.body})

SCENE = SceneGl("100vw","100vh").background("#222222");
im1=image("im.png")
im1.st.hide()
im2=image("ziko.png")
im2.st.hide()
t1=useTexture(im1)
t2=useTexture(im2)
obj1 = cylindre3(2,2,2).posX(-2).style({
    side:2,
    map:t2,
    displacementMap:t2,
    displacementScale: 0,
    displacementBias: 0,
    // emissive:0xffffff,
    // metalness:1.0,
})
obj2 = cube3(3).posX(2).style({
    specularMap:t2
})
obj1.useMeshPhysicalMaterial()
SCENE.add(obj1,obj2)
l=useAmbientLight(0xffffff,1)
SCENE.add(l)

addEventListener("DOMContentLoaded", () => SCENE.renderGl());

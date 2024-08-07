__Ziko__.ExtractAll();
__ZikoGl__.ExtractAll();
__Ziko__.__Config__.setDefault({ target: document.body });

SCENE = SceneGl("100vw", "100vh").useShadow();

im1 = image("im.png");
im1.st.hide();
t1 = useTexture(im1);

Floor = plane3(10, 10)
  .rot(-PI / 3, 0, 0)
  .style({
    map: t1,
  })
  .useMeshStandardMaterial()
  .receiveShadow();

C1 = cube3(1).pos(-1, 2, 0).useMeshStandardMaterial().useShadow();
C2 = cube3(1).pos(0, 1, 0).useMeshStandardMaterial().useShadow();
L = useDirectionalLight(0xffffff, 5).pos(0, 3, 0).castShadow();
SCENE.add(Floor, C1, C2, L, useLightHelper(L));

loop(
  (e) => {
    // C1.pos(2 * cos((PI / 20) * e.i), 1.5+1*sin((-PI / 20) * e.i),0);
    L.pos(3 * cos((PI / 10) * e.i), 4, sin((PI / 10) * e.i));
    SCENE.renderGl();
  },
  { fps: 10 },
).start();

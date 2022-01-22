import {useRef} from "react";
import {GLTFSchema} from "@pixiv/three-vrm";
import {useFrame} from "react-three-fiber";
import {BoxGeometry, Mesh, MeshStandardMaterial} from "three";

export default function ExampleBox() {
  // const geometry = new BoxGeometry(500, 500, 500);
  // const material = new MeshStandardMaterial({
  //   color: 0x000ff
  // });
  // const exampleBoxMesh = new Mesh(geometry, material);

  const ref = useRef({} as Mesh)
  useFrame(() => {
    ref.current.rotation.x += 0.01,
      ref.current.rotation.y += 0.01,
      ref.current.rotation.z += 0.01
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]}/>
      <meshStandardMaterial attach='material' color='0x000ff' opacity={0.5} transparent/>
    </mesh>
  )

}
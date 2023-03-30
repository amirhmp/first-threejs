import { useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import "./App.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};

const Box = (props) => {
  const ref = useRef();

  useFrame((state) => {
    const mesh = ref.current;
    if (mesh) {
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry />
      <meshBasicMaterial color="#ff00ee" />
    </mesh>
  );
};

function App() {
  return (
    <div
      style={{
        width: window.innerWidth,
        height: window.innerHeight,
      }}
    >
      <Canvas style={{ background: "black" }} camera={{ position: [3, 3, 3] }}>
        {/* <Box position={[1, 1, 0]} /> */}
        <Orbit />
        <axesHelper args={[3]} />
      </Canvas>
    </div>
  );
}

export default App;

import {Canvas} from "react-three-fiber";
import ExampleBox from "./ExampleBox";


function Example() {
  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <Canvas>
        <ExampleBox/>
      </Canvas>
    </div>
  )
}

export default Example

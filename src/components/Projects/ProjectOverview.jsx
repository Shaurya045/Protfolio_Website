import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import Texture from "./Texture";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

function ProjectOverview() {
  const [cameraFov, setCameraFov] = useState(25);

  // Effect to update fov based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 540) {
        setCameraFov(40); // Increase fov for smaller screens
      } else {
        setCameraFov(25); // Default fov for larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on mount to set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        flat
        camera={{ fov: cameraFov }}
        style={{ width: "100%", height: "100%" }}
      >
        <OrbitControls enableZoom={false} />
        <ambientLight />
        <Texture />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={0.3} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default ProjectOverview;

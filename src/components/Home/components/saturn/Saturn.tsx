"use client";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 -t saturn_bapspatil/scene.gltf 
Author: Freemodels (https://sketchfab.com/vivaanarora9)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/saturn-17b34b975dc3449da83f2ee7802004f3
Title: Saturn
*/

import * as THREE from "three";
import React, { RefObject, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { motion } from "framer-motion-3d";
import { scroll } from "framer-motion";
import FakeGlowMaterial from "./FakeGlow";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
  };
  materials: {
    Saturn: THREE.MeshStandardMaterial;
    rings: THREE.MeshStandardMaterial;
  };
  animations: any[];
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function Saturn(
  props: JSX.IntrinsicElements["group"] & {
    sectionRefs: RefObject<HTMLDivElement>[];
  },
) {
  const { nodes, materials } = useGLTF("./models/scene.gltf") as GLTFResult;
  const [progress, setProgress] = useState<any>(null);

  scroll((progress) => setProgress(progress));

  // const { x, y, z } = useControls({
  // 	x: { value: 0.54, min: 0, max: 1, step: 0.001 },
  // 	y: { value: 1, min: 1, max: 1, step: 0.001 },
  // 	z: { value: 0.5, min: 0, max: 1, step: 0.001 },
  // });
  // 0.54, 1, 0.5
  // 0.42, 1, 0.5
  // 0.01, 0.9, 0.5

  //   const section1Scroll = useScroll({
  // 		target: props.sectionRefs[0],
  // 		offset: ["end end", "start start"],
  // 	});
  // 	const section2Scroll = useScroll({
  // 		target: props.sectionRefs[1],
  // 		offset: ["end end", "start start"],
  // 	});
  // 	const section3Scroll = useScroll({
  // 		target: props.sectionRefs[2],
  // 		offset: ["end end", "start start"],
  // 	});

  return (
    // ignore next line ts
    // @ts-ignore
    <motion.group
      {...props}
      dispose={null}
      animate={{
        rotateX: 0,
        rotateY: 0.3546509040052478,
        rotateZ: 0.20769418098732523,
        y: 3.5,
      }}
      initial={{
        rotateX: progress === 0 ? 0.5 : 0,
        rotateY: 0.3546509040052478,
        rotateZ: 0.20769418098732523,
        y: 5,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
      rotation={[0.4572762640225143, 0.3546509040052478, 0.20769418098732523]}
    >
      <motion.group
        animate={
          {
            // y: -progress * 5.4,
            // rotateY: (Math.PI / 2) * progress * 5,
            // rotateX: -(Math.PI / 2) * progress * 5,
            // rotateZ: (Math.PI / 2) * progress * 5,
            // scale: progress * 2 + 1,
          }
        }
        transition={{
          ease: "linear",
        }}
        // position={[0, -1, 0]}
        // rotation={[Math.PI / 2, Math.PI * 1.7, 0]}
      >
        <group rotation={[-Math.PI / 2, 0, 0]} scale={1.758}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <motion.group
              animate={{
                rotateY: -0.419 + progress * 10,
              }}
              transition={{
                ease: "linear",
              }}
              rotation={[-0.419, Math.PI / 2, 0]}
            >
              <mesh
                geometry={nodes.Object_5.geometry}
                material={materials.rings}
                material-envMapIntensity={1}
              />
              <mesh>
                <sphereGeometry args={[0.35, 24, 24]} attach="geometry" />
                <FakeGlowMaterial
                  falloff={0.2}
                  glowInternalRadius={0.9}
                  glowColor={"#a9732b"}
                  glowSharpness={0}
                  side={"THREE.FrontSide"}
                  opacity={0.5}
                  depthTest={false}
                />
              </mesh>
              {/* <mesh
								geometry={nodes.Object_4.geometry}
								material={materials.Saturn}
								material-envMapIntensity={1}
							/> */}
              <mesh material={materials.Saturn} material-envMapIntensity={1}>
                <sphereGeometry args={[0.3, 24, 24]} />
              </mesh>
            </motion.group>
          </group>
        </group>
      </motion.group>
    </motion.group>
  );
}

useGLTF.preload("./models/scene.gltf");

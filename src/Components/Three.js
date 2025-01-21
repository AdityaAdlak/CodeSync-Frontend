import React, { useEffect } from "react";
import * as THREE from "three";

const CursorReactiveCodeBlocks = () => {
  useEffect(() => {
    let scene,
      camera,
      renderer,
      HEIGHT,
      WIDTH,
      container,
      cursor = new THREE.Vector2(),
      blocks = [];

    const createScene = () => {
      HEIGHT = window.innerHeight;
      WIDTH = window.innerWidth;

      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x1a1a1a, 10, 1500);

      const aspectRatio = WIDTH / HEIGHT;
      const fieldOfView = 60;
      const nearPlane = 1;
      const farPlane = 10000;
      camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
      );

      camera.position.set(0, 0, 500);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });
      renderer.setSize(WIDTH, HEIGHT);
      renderer.shadowMap.enabled = true;

      container = document.getElementById("canvas");
      container.appendChild(renderer.domElement);

      window.addEventListener("resize", handleWindowResize, false);
      window.addEventListener("mousemove", onMouseMove, false);

      generateCodeBlocks();
    };

    const handleWindowResize = () => {
      HEIGHT = window.innerHeight;
      WIDTH = window.innerWidth;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
    };

    const generateCodeBlocks = () => {
      const blockGeometry = new THREE.BoxGeometry(10, 10, 10);
      for (let i = 0; i < 50; i++) {
        const blockMaterial = new THREE.MeshPhongMaterial({
          color: new THREE.Color(Math.random(), Math.random(), Math.random()),
          emissive: new THREE.Color(Math.random(), Math.random(), Math.random()),
          flatShading: true
        });

        const block = new THREE.Mesh(blockGeometry, blockMaterial);
        block.position.set(
          Math.random() * 500 - 250,
          Math.random() * 500 - 250,
          Math.random() * 500 - 250
        );
        blocks.push(block);
        scene.add(block);
      }
    };

    const onMouseMove = (event) => {
      cursor.x = (event.clientX / WIDTH) * 2 - 1;
      cursor.y = -(event.clientY / HEIGHT) * 2 + 1;
    };

    const loop = () => {
      const time = Date.now() * 0.001;

      blocks.forEach((block) => {
        const dist = block.position.distanceTo(new THREE.Vector3(cursor.x * 250, cursor.y * 250, 0));

        // Move closer when the cursor is near
        if (dist < 100) {
          block.position.z = Math.sin(time * 2) * 50;
          block.scale.set(1.5, 1.5, 1.5); // Grow the block
        } else {
          block.scale.set(1, 1, 1); // Return to normal size
          block.position.z = Math.cos(time * 2) * 50;
        }

        block.rotation.x += 0.01;
        block.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(loop);
    };

    createScene();
    loop();
  }, []);

  return (
    <div>
      <div id="canvas" />
      <div className="cursor-trail">
        <style>{`
          html, body {
            margin: 0;
            height: 100%;
            background: #1a1a1a;
            overflow: hidden;
          }

          #canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .cursor-trail {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
          }

          .cursor-trail::before {
            content: ">";
            font-size: 2rem;
            color: lightblue;
            font-family: 'Courier New', Courier, monospace;
            position: absolute;
            pointer-events: none;
            transition: transform 0.1s ease-in-out;
          }

        `}</style>
      </div>
    </div>
  );
};

export default CursorReactiveCodeBlocks;

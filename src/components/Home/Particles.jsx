import Particles from "react-particles";
import React from 'react'
import { useCallback } from "react";
import { loadFull } from "tsparticles";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async engine => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          opacity: 0,
        },
        fullScreen: false,
        fpsLimit: 120,
        interactivity: {
          events: {
              onClick: {
                  enable: false,
                  mode: "push",
              },
              onHover: {
                  enable: false,
                  mode: "repulse",
              },
              resize: true,
          },
          modes: {
              push: {
                  quantity: 4,
              },
              repulse: {
                  distance: 200,
                  duration: 0.4,
              },
          },
        },
        particles: {
          color: {
            value: "#55e0e5",
          },
          links: {
            color: "#55e0e5",
            distance: 160,
            enable: true,
            opacity: .5,
            width: .75,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: {min: .5, max: 3.5},
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 100,
          },
          opacity: {
            value: .7,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesComponent
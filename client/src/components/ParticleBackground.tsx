import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface ParticleBackgroundProps {
  id?: string;
  className?: string;
  preset?: "network" | "space" | "matrix" | "cyber" | "bubbles" | "particles3d";
}

export default function ParticleBackground({ 
  id = "tsparticles", 
  className, 
  preset = "network" 
}: ParticleBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded:", container);
  }, []);

  // Define different presets
  const presetConfigs = {
    network: {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    },
    space: {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: false,
        },
        move: {
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 0.2,
            minimumValue: 0.1,
          },
          value: { min: 0.1, max: 0.5 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    },
    matrix: {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: "#00ff00",
        },
        links: {
          enable: false,
        },
        move: {
          direction: "bottom" as const,
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 2,
          straight: true,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: "char",
          character: {
            value: ["0", "1"],
            font: "Verdana",
            style: "",
            weight: "400",
          },
        },
        size: {
          value: 10,
        },
      },
      detectRetina: true,
    },
    cyber: {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: ["#3998DB", "#ffffff"],
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 0.3,
            minimumValue: 0.1,
          },
          value: { min: 0.1, max: 0.5 },
        },
        shape: {
          type: ["circle", "triangle", "square"],
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    },
    bubbles: {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 40,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 0.3,
            minimumValue: 0.1,
          },
          value: { min: 0.1, max: 0.4 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 5, max: 20 },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 5,
            sync: false,
          },
        },
      },
      detectRetina: true,
    },
    particles3d: {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1.5,
          straight: false,
          path: {
            enable: true,
            delay: {
              value: 0.1
            }
          },
          trail: {
            enable: true,
            fillColor: "#000000",
            length: 3
          }
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 70,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
        rotate: {
          value: 0,
          direction: "clockwise",
          animation: {
            enable: true,
            speed: 5,
            sync: false
          }
        },
        shadow: {
          enable: true,
          color: "#000000",
          blur: 5,
          offset: {
            x: 3,
            y: 3
          }
        }
      },
      detectRetina: true,
    },
  };

  // Get the selected preset
  const config = presetConfigs[preset];

  return (
    <Particles
      id={id}
      className={className}
      init={particlesInit}
      loaded={particlesLoaded}
      options={config}
    />
  );
}
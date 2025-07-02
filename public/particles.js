const options = {
  fpsLimit: 40,
  particles: {
      number: {
          value: 200,
          density: {
              enable: true,
          },
      },
      color: {
          value: ["rgb(255, 215, 0)", "rgb(255, 226, 59)", "rgb(228, 194, 0)"],
      },
      opacity: {
          animation: {
              enable: true,
              speed: 1,
              sync: false,
          },
          value: { min: 0.1, max: 0.5 },
      },
      size: {
          value: { min: 1, max: 3 },
      },
      move: {
          enable: true,
          speed: 0.5,
          random: true,
      },
  },
  interactivity: {
      detectsOn: "window",
      events: {
          onClick: {
              enable: true,
              mode: "push",
          },
          onHover: {
              enable: true,
              mode: "repulse"
          },
      },
      modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4, factor: 5 }
      }
  },
  background: {
      image: "radial-gradient(rgb(26, 26, 26), #000)",
  },
}

export default options;
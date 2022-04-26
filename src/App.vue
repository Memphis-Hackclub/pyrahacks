<script>
export default {
  name: "App",
};
</script>

<template>
  <NavBar />
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

:root {
  --accent: #78e6d3;
  --accent-red: #f31535;
  --light-bg: #666666;
}

html {
  background: black;
  background-image: url("assets/pyrahacks-bg.svg");
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  font-family: "Apercu Mono", sans-serif;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100vw;
}

a {
  color: inherit;
}

@keyframes glow-text {
  0% {
    text-shadow: 0 0 15px var(--accent);
  }
  50% {
    text-shadow: 0 0 25px var(--accent);
  }
  100% {
    text-shadow: 0 0 15px var(--accent);
  }
}

@keyframes glow-box {
  0% {
    box-shadow: 0 0 15px var(--accent);
  }
  50% {
    box-shadow: 0 0 20px var(--accent);
  }
  100% {
    box-shadow: 0 0 15px var(--accent);
  }
}
</style>

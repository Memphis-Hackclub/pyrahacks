<script>
export default {
  name: "NavBar",
};
</script>

<template>
  <nav>
    <img src="../assets/pyrahacks.svg" alt="PyraHacks Logo" class="nav-logo" />
    <router-link to="/">Home</router-link>
    <a
      href="https://pyrahacks.devpost.com/#challenge-description"
      target="_blank"
      rel="nofollow"
      >About</a
    >
    <a
      href="https://pyrahacks.devpost.com/register"
      target="_blank"
      rel="nofollow"
      >Register</a
    >
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLScbMbe0GbKvtfmPkFatJjQFsF7TyYL-TmLWA3Bn9bJAhz_6pQ/viewform"
      target="_blank"
      rel="nofollow"
      >Pledge</a
    >
  </nav>
</template>

<style scoped>
nav {
  width: calc(100% - 4rem);
  display: flex;
  flex-direction: row;
  height: 4rem;
  padding: 2rem;
  align-items: center;
}

.nav-logo {
  height: 4rem;
  width: 4rem;
  margin-right: 3rem;
}

nav a {
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  margin-right: 3rem;
  font-size: 1.2em;
  line-height: 1;
  position: relative;
}

nav a:after {
  content: "";
  position: absolute;
  width: 100%;
  max-width: 0;
  height: 0.1em;
  background: var(--accent-red);
  bottom: -0.1em;
  left: 0;
  transition: 0.2s;
  box-shadow: 0 -2px 10px var(--accent-red);
}

nav a:hover:after {
  max-width: 100%;
}

nav a:last-of-type {
  margin-right: 0;
}

@media only screen and (max-width: 1200px) {
  nav {
    justify-content: center;
    padding: 0;
    padding-top: 2rem;
    margin: auto;
    margin-bottom: 1rem;
  }

  nav a,
  .nav-logo {
    margin-right: 5%;
    font-size: 1em;
  }

  .nav-logo {
    height: 2.5rem;
    width: 2.5rem;
  }
}
</style>

<template>
  <main>
    <iframe
      id="iframe-snsnmntqhor"
      src="https://keepthescore.co/embed/snsnmntqhor/"
      style="width: calc(100% - 4em); border: none; height: calc(100% - 1em)"
    ></iframe>
  </main>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      sponsors: [
        {
          name: "The Peabody",
          url: "https://www.peabodymemphis.com/",
          image: "peabody-logo.svg",
        },
        {
          name: "echo3D",
          url: "https://www.echo3d.co/",
          image: "echo3d-logo.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
main {
  width: 100%;
}

#iframe-snsnmntqhor {
  background: transparent;
}

@media only screen and (max-width: 1200px) {
  main {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    text-align: center;
  }
}
</style>
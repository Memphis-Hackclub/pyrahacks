<template>
  <main>
    <div class="image-parent">
      <img
        src="../assets/computer.png"
        alt="an image of a computer displaying the PyraHacks logo"
      />
    </div>
    <div class="content-parent">
      <div class="content">
        <h1>
          A free, fast-paced online hackathon for anyone benefiting St. Jude
        </h1>
        <div class="buttons">
          <Button
            href="https://calendar.google.com/calendar/u/0/r/eventedit?dates=20220610/20220612&details=PyraHacks+%2722+is+a+virtual+hackathon+supporting+St.+Jude+Children%27s+Hospital.&location=Virtual&text=PyraHacks+%2722&pli=1"
            type="secondary"
            >June 10, 2022</Button
          >
          <Button href="https://pyrahacks.devpost.com/register"
            >Pre-Register</Button
          >
        </div>
        <h2>
          Sponsored by
          <a href="https://memphishack.com" target="_blank" rel="nofollow"
            >Memphis Hack Club</a
          >
          and:
        </h2>
        <div class="sponsor-grid">
          <a
            v-for="(s, i) in sponsors"
            :key="i"
            :href="s.url"
            target="_blank"
            rel="nofollow"
            :title="s.name"
          >
            <img :src="`/sponsors/${s.image}`" :alt="s.name" />
          </a>
        </div>
      </div>
    </div>
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
          name: "Hack Club Bank",
          url: "https://hackclub.com/bank",
          image: "hc-bank-logo.svg",
        },
        {
          name: "echo3D",
          url: "https://www.echo3d.co/",
          image: "echo3d-logo.png",
        },
        {
          name: "Kiddobyte",
          url: "https://kiddobyte.org/",
          image: "kiddobyte-logo.png",
        },
         {
          name: "Leading Learners",
          url: "https://www.leading-learners.com",
          image: "Leading Learners.png",
        },
        {
          name: "Sticker Mule",
          url: "https://stickermule.com/",
          image: "stickermule-logo.svg",
        },
           
      ],
    };
  },
};
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
}

.image-parent {
  width: 1fr;
}

img {
  max-width: 500px;
}

.content {
  text-align: left;
  padding-left: 2em;
  padding-right: 2em;
}

h1 {
  color: var(--accent);
  text-shadow: 0 0 15px var(--accent);
  letter-spacing: -0.1ch;
  font-size: clamp(4rem, 5vw, 3rem);
  line-height: 1em;
  font-weight: normal;
  animation: glow-text 3s infinite;
}

.buttons {
  margin-top: 2rem;
  display: flex;
  margin-bottom: 1.5rem;
}

.buttons ::v-deep(a) {
  margin-right: 1rem;
}

h2 {
  font-weight: normal;
  font-size: 1.2em;
}

.sponsor-grid {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
}

.sponsor-grid img {
  height: 3rem;
  padding-right: 1.5rem;
  padding-bottom: 0.5rem;
  transition: filter 0.2s;
  filter: brightness(0) invert(1);
}

.sponsor-grid a:hover img {
  filter: brightness(0) invert(1) drop-shadow(0 0 3px var(--accent));
}

.sponsor-grid a {
  position: relative;
}

.sponsor-grid a:after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background: var(--accent);
  mix-blend-mode: multiply;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.15s;
}

.sponsor-grid a:hover::after {
  opacity: 1;
}

@media only screen and (max-width: 1200px) {
  main {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    text-align: center;
  }

  .content {
    text-align: center;
    max-width: calc(100vw - 4em);
    margin: auto;
  }

  h1 {
    font-size: 2rem;
    animation: none;
  }

  h2 {
    font-size: 1rem;
    width: max-content;
    margin: auto;
    max-width: 90%;
  }

  .buttons ::v-deep(a:last-of-type) {
    margin-right: 0;
  }

  .buttons ::v-deep(a) {
    font-size: 1em;
  }

  .buttons {
    width: max-content;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  .sponsor-grid {
    justify-content: center;
    width: 90%;
    margin: auto;
    margin-top: 1.4rem;
    margin-bottom: 2rem;
  }

  .sponsor-grid img {
    padding: 0.5em;
    height: auto;
    width: auto;
    max-width: 80vw;
    max-height: 20vh;
    min-width: 3rem;
  }

  .sponsor-grid a {
    flex-grow: 1;
  }

  .image-parent img {
    max-width: 300px;
    width: auto;
  }
}
</style>

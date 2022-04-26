<template>
  <a
    :href="href"
    @click="$emit('click')"
    :class="type"
    rel="nofollow"
    target="_blank"
    ><slot></slot
  ></a>
</template>

<script>
export default {
  name: "Button",
  emits: ["click"],
  props: {
    href: {
      type: String,
      default: "#",
    },
    type: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style scoped>
a {
  font-family: "Apercu", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  width: max-content;
  transition: 0.2s;
  position: relative;
  transform-style: preserve-3d;
}

a:after {
  content: "";
  background: var(--accent);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  transition: top 0.15s, left 0.15s, opacity 0.2s;
  transform: translateZ(-1px);
  box-shadow: 0 0 15px var(--accent);
  opacity: 0;
}

a:hover:after {
  opacity: 0.7;
  top: 5px;
  left: 5px;
  animation: glow-box 1s infinite;
}

a:hover {
  transform: translate(-2px, -2px);
}

.primary {
  background: var(--accent);
  color: black;
  padding: 0.75em 1.25em;
  font-size: 1.4em;
}

.secondary {
  background: var(--light-bg);
  color: white;
  padding: 0.75em 1.25em;
  font-size: 1.4em;
}
</style>
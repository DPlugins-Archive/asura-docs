<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

const { frontmatter } = useData();

const hasShowcases = computed(() => {
  return frontmatter.value.showcases && frontmatter.value.showcases.length > 0;
});

interface Feature {
  name?: string;
  url?: string;
  logo?: string;
}

const showcases = computed<Feature[]>(() => {
  return frontmatter.value.showcases ? frontmatter.value.showcases : [];
});
</script>

<template>
  <div
    v-if="hasShowcases"
    class="home-showcases"
  >
    <div class="wrapper">
      <div class="container">
        <h3 class="title">Showcase</h3>
        <div class="showcases">
          <section
            v-for="(showcase, index) in showcases"
            :key="index"
            class="showcase"
          >
            <a
              :href="showcase.url"
              :title="showcase.name"
              target="_blank"
            >
              <img
                :src="showcase.logo"
                :alt="showcase.name"
                class="logo"
                :style="showcase.img_style ?? ''"
              >
            </a>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-showcases {
  margin: 0 auto;
  padding: 2.5rem 0 2.75rem;
  max-width: 960px;
}

.home-content + .home-showcases {
  padding-top: 0;
}

@media (min-width: 420px) {
  .home-showcases {
    padding: 3.25rem 0 3.5rem;
  }

  .home-content + .home-showcases {
    padding-top: 0;
  }
}

@media (min-width: 720px) {
  .home-showcases {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
}

.wrapper {
  padding: 0 1.5rem;
}

.home-content + .home-showcases .wrapper {
  border-top: 1px solid var(--c-divider);
  padding-top: 2.5rem;
}

@media (min-width: 420px) {
  .home-content + .home-showcases .wrapper {
    padding-top: 3.25rem;
  }
}

@media (min-width: 720px) {
  .wrapper {
    padding-right: 0;
    padding-left: 0;
  }
}

.container {
  margin: 0 auto;
  max-width: 392px;
}

@media (min-width: 720px) {
  .container {
    max-width: 960px;
  }
}

.showcases {
  display: flex;
  flex-wrap: wrap;
  margin: -20px -24px;
}

.showcase {
  flex-shrink: 0;
  padding: 15px 19px;
  width: 100%;
  border-radius: 12px;
}

.showcase img {
  border-radius: 12px;
  padding: 5px;
}

@media (min-width: 720px) {
  .showcase {
    width: calc(100% / 4);
    text-align: center;
  }
}

.title {
  margin: 2rem;
  border-bottom: 0;
  line-height: 1.4;
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  color: rgb(154, 154, 154);
}

@media (min-width: 420px) {
  .title {
    font-size: 1.4rem;
  }
}

.details {
  margin: 0;
  line-height: 1.6;
  font-size: 1rem;
  color: var(--c-text-light);
}

.title + .details {
  padding-top: 0.25rem;
}

.logo {
  max-height: 50px;
  height: auto;
  width: auto;
}
</style>

<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <h3 class="title" id="reviews"> Reviews </h3>
        <component is="script" src="https://utteranc.es/client.js" repo="oxyrealm/asura-docs" label="testimonial" issue-term="pathname" theme="preferred-color-scheme" crossorigin="anonymous" async></component>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 0 1.5rem;
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
</style>

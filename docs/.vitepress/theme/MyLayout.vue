<script setup>
import DefaultTheme from 'vitepress/theme'
import HomeShowcase from './HomeShowcase.vue'
import HomeReview from './HomeReview.vue'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #page-bottom-ads>
      <div style="padding-top:2rem;text-align:center;">
        <a href="https://www.digitalocean.com/?refcode=acb41ca21dc2&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg" alt="DigitalOcean Referral Badge" /></a>
      </div>
    </template>
    
    <template #home-footer>
      <div style="padding-top:2rem;text-align:center;">
        <a href="https://www.digitalocean.com/?refcode=acb41ca21dc2&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg" alt="DigitalOcean Referral Badge" /></a>
      </div>
    </template>
    
    <template #home-features>
      <HomeShowcase />
      <HomeReview />
    </template>
  </Layout>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css";

.youtube-container {
  position: relative;
  margin: auto;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}
@media screen and (min-width: 768px) {
  .youtube-container {
    padding-bottom: 34%;
    padding-left: 30%;
    padding-right: 30%;
    width: 0;
  }
}
.youtube-container iframe,
.youtube-container object,
.youtube-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}



.video-lesson {
    display: flex;
    align-items: center;
    background-color: #e7ecf3;
    padding: 1em 1.25em;
    border-radius: 2px;
    margin: 24px 0
}

.video-lesson,.video-lesson a {
    color: #486491;
    position: relative;
}

.video-lesson a {
    padding-left: 16px
}

.video-lesson:before {
    content: "\f144";
    font-family: "Font Awesome 5 Free";  /* updated font-family */
    font-weight: 900; /* regular style/weight */
    font-size: 2em;
    display: inline-block;
    color: #73abfe;
    vertical-align: middle
}
</style>
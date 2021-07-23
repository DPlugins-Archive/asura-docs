<script setup>
import DefaultTheme from 'vitepress/theme'
import HomeShowcase from './HomeShowcase.vue'
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
    </template>
  </Layout>
</template>
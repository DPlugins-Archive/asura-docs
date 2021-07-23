<script setup>
import { onMounted } from "vue";

onMounted(() => {
    let googleAnalyticsScript = document.createElement('script');
    googleAnalyticsScript.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-G1NG01LWQV');
    googleAnalyticsScript.setAttribute('async', '');
    document.head.appendChild(googleAnalyticsScript);
    let googleAnalyticsBodyScript = window.document.createElement('script');
    googleAnalyticsBodyScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G1NG01LWQV');
    `;
    document.body.appendChild(googleAnalyticsBodyScript);
});
</script>
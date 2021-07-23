<script>
export default {
    mounted() {
        let googleAnalyticsScript = window.document.createElement('script');
        googleAnalyticsScript.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-G1NG01LWQV');
        googleAnalyticsScript.setAttribute('async', '');
        window.document.body.appendChild(googleAnalyticsScript);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G1NG01LWQV');
    }
}
</script>
<script lang="ts">
    let { src = "./cv.png" } = $props();
</script>

<div class="cv-square">
    <img class="cv-image" {src} alt="CV"/>
    <div class="dark-filter">CV</div>
</div>

<style>
    @font-face { font-family: coolFont; src: url("/fonts/secretFont_aalt.otf"); }

    .cv-square {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
    .cv-image {
        width: 100%;
        height: 150%;
        object-fit: cover;
    }
    .dark-filter {
        background-color: black;
        opacity: 0.6;
        position: absolute;
        top: 0; left: 0;
        height: 100%; width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: coolFont, serif;
        font-size: 4rem;
        color: white;
    }
</style>
<script lang="ts">
    let { src = "./cv.png", text="Découvrez mon CV"} = $props();
</script>

<div class="cv-square">
    <img class="cv-image" {src} alt="."/>
    <div class="black-filter">{text}</div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    .cv-square {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
        transform: scale(1);
    }

    .cv-square:hover .cv-image{
        transform: scale(1.2);
    }

    .cv-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .black-filter {
        background-color: rgba(0, 0, 0, 1);
        position: absolute;
        opacity: 0.6;
        top: 0; left: 0;
        height: 100%; width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 3rem;
        color: white;
    }
</style>
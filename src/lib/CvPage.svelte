<script lang="ts">

import SlideButton from "./utils/SlideButton.svelte";
</script>
<div class="cv-wrapper">
    <img src="./cv.png" alt="mon cv" class="cv">
    <p></p>
    <a href="./cv.pdf" download="CV Morisset Eliott" class="downloadbutton">
        <SlideButton text={"Téléchargez mon CV"}/>
    </a>
</div>


<style>
    .cv-wrapper{
        height: 100vh;
        padding-top: 5rem;
        width: auto;
        display: flex;
        justify-content: center;
    }

    .downloadbutton{
        padding-left: 10rem;
        align-self: center;
    }
</style>
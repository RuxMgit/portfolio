<script lang="ts">
    import {locale, locales, isLoading} from 'svelte-i18n'
    import NameTitle from "./lib/title/NameTitle.svelte";
    import TopBar from "./lib/TopBar.svelte";

</script>

<!--Isloading-->
<main>
    <div>
        <TopBar/>
    </div>
    <div class="canvas-container">
        <NameTitle/>
    </div>


</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .canvas-container {
        height: 100vh;
        width: 100vw;
    }

    canvas {
        width: 100%;
        height: 100%;
    }

</style>

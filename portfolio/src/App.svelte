<script lang="ts">
    import {locale, locales, isLoading} from 'svelte-i18n'
    import NameTitle from "./lib/title/NameTitle.svelte";
    import TopBar from "./lib/TopBar.svelte";
    import Projects from "./lib/projects/Projects.svelte";
    history.pushState({}, '', '/');

    const Pages = {
        HOME : 0,
        PROJECTS : 1
    }

    let currentPage = $state(Pages.HOME)

    function changePageFromButtonClick(buttonPath : String){
        if (buttonPath == "projects"){
            currentPage = Pages.PROJECTS
        }
    }
</script>

<!--Isloading-->
<main>
    <div>
        <TopBar onButtonClick={changePageFromButtonClick}/>
    </div>
    {#if (currentPage === Pages.HOME)}
        <div class="canvas-container">
            <NameTitle/>
        </div>
    {/if}
    {#if (currentPage===Pages.PROJECTS)}
        <Projects/>
    {/if}
</main>
AAAAA
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

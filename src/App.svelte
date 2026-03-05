<script lang="ts">
    import {locale, locales, isLoading} from 'svelte-i18n'
    import NameTitle from "./lib/title/NameTitle.svelte";
    import TopBar from "./lib/TopBar.svelte";
    import Projects from "./lib/projects/Projects.svelte";
    import HomePageButton from "./lib/HomePageButton.svelte";
    import Skills from "./lib/skills/Skills.svelte";

    const Pages = {
        HOME : 0,
        PROJECTS : 1,
        SKILLS : 2
    }

    let currentPage = $state(Pages.HOME)

    function changePageFromButtonClick(buttonPath : String){
        if (buttonPath == "projects"){
            currentPage = Pages.PROJECTS
        }
        else if (buttonPath=="skills"){
            currentPage = Pages.SKILLS
        }
    }
</script>

<main>
    <TopBar onButtonClick={changePageFromButtonClick}/>

    {#if (currentPage === Pages.HOME)}
        <div class="canvas-container">
            <NameTitle/>
        </div>
    {/if}

    {#if (currentPage===Pages.PROJECTS)}
        <Projects/>
    {/if}

    {#if (currentPage===Pages.SKILLS)}
        <Skills/>
    {/if}

    <HomePageButton/>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    :global(.topbar) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }

    :global(.home-page-button) {
        position: fixed;
        bottom: 2rem;
        left: 2rem;
        z-index: 100;
    }

    .canvas-container {
        height: 100vh;
        width: 100vw;
        padding-top: 60px;
    }

</style>
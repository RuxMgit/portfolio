<script lang="ts">
    import {locale, locales, isLoading} from 'svelte-i18n'
    import HeroCanvas from "./lib/hero/HeroCanvas.svelte";
    import TopBar from "./lib/TopBar.svelte";
    import Projects from "./lib/projects/Projects.svelte";
    import HomePageButton from "./lib/HomePageButton.svelte";
    import Skills from "./lib/skills/Skills.svelte";
    import AboutSection from "./lib/about/AboutSection.svelte";
    import Footer from "./lib/Footer.svelte";
    import ExperienceSection from "./lib/experience/ExperienceSection.svelte";

    const Pages = {
        HOME : 0,
        PROJECTS : 1,
        SKILLS : 2,
        CV : 3
    }

    let currentPage = $state(Pages.HOME)

    function changePageFromButtonClick(buttonPath : String){
        if (buttonPath=="home"){
            currentPage = Pages.HOME
        }
        else if (buttonPath == "projects"){
            currentPage = Pages.PROJECTS
        }
        else if (buttonPath=="skills"){
            currentPage = Pages.SKILLS
        }
        else if (buttonPath=="cv"){
            currentPage = Pages.CV
        }
        window.scrollTo({ top: 0, behavior: 'instant' });
    }
</script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<main>
    <TopBar onButtonClick={changePageFromButtonClick}/>

    {#if (currentPage === Pages.HOME)}
        <div class="homepage-container">
            <HeroCanvas/>
            <AboutSection onNavigate={changePageFromButtonClick}/>
            <ExperienceSection/>
        </div>
    {:else}
        <HomePageButton onButtonClick={changePageFromButtonClick}/>
        {#if (currentPage===Pages.PROJECTS)}
            <Projects/>
        {:else if (currentPage===Pages.SKILLS)}
            <Skills/>
        {:else if (currentPage===Pages.CV)}
            <ExperienceSection/>
        {/if}
    {/if}
</main>
<!--<Footer/>-->

<style>
    :global(body) {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
    }

    main {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    :global(.topbar) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }

    .homepage-container {
        display: flex;
        flex-direction: column;
        padding-top: 60px;
    }
</style>
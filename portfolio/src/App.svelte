<script lang="ts">
    import { locale, locales, isLoading } from 'svelte-i18n'
    import NameTitle from "./lib/NameTitle.svelte";
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
    main{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .canvas-container {
        width: 100vh;
        flex-grow: 1;
        justify-content: center;
        align-items: center;

    }

</style>

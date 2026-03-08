<script lang="ts">
    import SlideButton from "../utils/SlideButton.svelte";
    import SvelteTypedJs from 'svelte-typed-js'

    let {buttonText, image, onNavigate} = $props()

    import codeLines from "../../assets/codeLines.json"

    const buildTypedString = (lines) =>
        lines.map(l => `${l.text}^${l.pause}`).join('\n')

    const typedStrings = [buildTypedString(codeLines)]

</script>

<div class="wrapper">
    {#if (image)}
        <img src={image} class="projects-image" alt="projects">
    {:else}
        <p></p>
        <SvelteTypedJs
                strings={typedStrings}
                typeSpeed={40}
                loop={true}
        >
            <pre class="typing"></pre>
        </SvelteTypedJs>
    {/if}
    <div class="dark-filter">
        <SlideButton text={buttonText} onClick={onNavigate}/>
    </div>

</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    .typing {
        font-family: 'Fira Code', 'Courier New', monospace;
        font-size: 1rem;
        white-space: pre;
        text-align: left;
        line-height: 1.6;
    }
    .wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.5s ease;
    }


    .projects-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .dark-filter {
        background-color: black;
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Bebas Neue', sans-serif;
        transition: transform 0.5s ease;
    }

    .wrapper:hover {
        transform: scale(1.1);
    }

</style>
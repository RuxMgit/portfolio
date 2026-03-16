<script lang="ts">
    import GlitchButton from "./utils/GlitchButton.svelte";

    let {onButtonClick} = $props()

    function handleButtonClick(buttonPath: String){
        onButtonClick(buttonPath)
    }

</script>

<style>

    .navBar{
        display: flex;
        align-items: center;
        padding: clamp(0.5rem, 1vh, 1rem) clamp(1rem, 2vw, 2rem);
    }

    .nav-item{
        color: white;
        white-space: nowrap;
    }

    .nav-separator{
        height: 1px;
        background-color: white;
        flex-grow: 1;
        margin: 0 1.5rem;
    }
</style>

<div class="topbar">
    <nav class="navBar">
        <div class="nav-item">
            <GlitchButton buttonText="Compétences" onClick={handleButtonClick} buttonPath="skills"/>
        </div>

        <div class="nav-separator"></div>

        <div class="nav-item">
            <GlitchButton buttonText="Projets" onClick={handleButtonClick} buttonPath="projects"/>
        </div>

        <div class="nav-separator"></div>

        <div class="nav-item">
            <GlitchButton buttonText="CV" onClick={handleButtonClick} buttonPath="cv"/>
        </div>
    </nav>
</div>

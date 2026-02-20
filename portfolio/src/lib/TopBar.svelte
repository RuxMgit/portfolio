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
        padding: 1rem 2rem;
    }

    .nav-item{
        color: white;
        white-space: nowrap;
    }

    .nav-text{
        letter-spacing: 0.2em;
        text-transform: uppercase;
    }

    .nav-separator{
        height: 1px;
        background-color: white;
        flex-grow: 1;
        margin: 0 1.5rem;
    }
</style>

<nav class="navBar">
    <div class="nav-item">
        <GlitchButton buttonText="Projets" onClick={handleButtonClick} buttonPath="projects"/>
    </div>

    <div class="nav-separator"></div>
    <div class="nav-item">
        <span class="nav-text"> ELEMENT 2 </span>
    </div>

    <div class="nav-separator"></div>
    <div class="nav-item">
        <span class="nav-text"> ELEMENT 3 </span>
    </div>

</nav>
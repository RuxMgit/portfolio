<script lang="ts">
    import Star from "./Star.svelte";

    let {text, color, onclick} = $props()

    interface StarInstance {
        color : string
        x : number
        y : number

    }

    const starNumbers = 8;
    let stars : StarInstance[] = $state([])

    function onMouseOverStarButton(){
        for (let i = 0; i < starNumbers; i++) {
            stars.push({
                color:color,
                x: Math.random()*200-100,
                y: Math.random()*200-100
            })
        }
        setTimeout(()=>{stars=stars.splice(starNumbers)}, 3000)
    }
</script>
<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<button style="--button_color:{color}" onclick={onclick} onmouseover={onMouseOverStarButton}>
    {text}
    {#each stars as star}
        <div style="transform: translate({star.x}px, {star.y}px)" class="star-wrapper">
            <Star color={star.color}/>
        </div>
    {/each}
</button>

<style>
    @font-face {
        font-family: coolFont;
        src: url("/fonts/secretFont_aalt.otf")
    }

    .star-wrapper{
        width: 100px;
        height: 100px;
    }

    button {
        position: relative;
        background: transparent;
        width: 90px;
        height: 90px;
        font-family: coolFont, serif;
        font-size: 4rem;
        font-weight: 500;
        color: var(--button_color);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none
    }
    button:focus {outline: none}

</style>

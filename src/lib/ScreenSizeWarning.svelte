<script lang="ts">
    let {children} = $props();

    let myInnerWidth = $state(0)
</script>

<svelte:window bind:innerWidth={myInnerWidth}/>

{#if myInnerWidth < 1650}
    <div class="error-message">
        Bonjour, ce site web a été conçu pour des appareils ayant une largeur d'écran supérieure à 1650
    </div>
{:else}
    {@render children?.()}
{/if}
<style>
    .error-message {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding :1rem;
    }
</style>
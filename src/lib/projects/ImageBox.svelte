<script lang="ts">
    export let imagePath: string = "";
    export let color: string = "#000";
</script>

<style>
    .image-box {
        flex: 0 0 220px;
        min-height: 120px;
        border-radius: 0.6rem;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background: color-mix(in srgb, var(--c) 10%, transparent);
        border: 1.5px solid color-mix(in srgb, var(--c) 20%, transparent);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .placeholder {
        width: 48px;
        height: 48px;
        border-radius: 0.4rem;
        background: color-mix(in srgb, var(--c) 20%, transparent);
    }
</style>

<div class="image-box" style="--c: {color}">
    {#if imagePath}
        <img src={imagePath} alt="" />
    {:else}
        <div class="placeholder"></div>
    {/if}
</div>
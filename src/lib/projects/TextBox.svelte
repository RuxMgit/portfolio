<script lang="ts">
    export let title: string = "";
    export let slogan: string = "";
    export let color: string = "#000";
</script>

<style>
    .text-box {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.25rem 0;
    }

    .title-line {
        height: 10px;
        border-radius: 99px;
        background: var(--c);
        width: 70%;
        opacity: 0.85;
    }

    .slogan-line {
        height: 7px;
        border-radius: 99px;
        background: var(--c);
        width: 50%;
        opacity: 0.4;
    }

    h2 {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--c);
        line-height: 1.2;
    }

    p {
        margin: 0;
        font-size: 0.875rem;
        color: color-mix(in srgb, var(--c) 70%, #555);
        line-height: 1.4;
    }
</style>

<div class="text-box" style="--c: {color}">
    {#if title}
        <h2>{title}</h2>
    {:else}
        <div class="title-line"></div>
    {/if}

    {#if slogan}
        <p>{slogan}</p>
    {:else}
        <div class="slogan-line"></div>
        <div class="slogan-line" style="width: 40%; opacity: 0.3;"></div>
    {/if}
</div>
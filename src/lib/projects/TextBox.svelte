<script lang="ts">
    export let title: string = "";
    export let slogan: string = "";
    export let color: string = "#000";
    export let bgColor: string = "transparent";
</script>

<style>
    .text-box {
        flex: 0 0 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2.5rem 3rem;
        box-sizing: border-box;
        background: var(--bg);
        transition: padding 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .card:hover .text-box {
        padding: 2.5rem 3.4rem;
    }

    .top { display: flex; flex-direction: column; gap: 0.75rem; }
    .bottom { display: flex; flex-direction: column; gap: 0.5rem; }

    h2 {
        margin: 0;
        font-size: clamp(1.6rem, 3vw, 2.4rem);
        font-weight: 800;
        color: var(--c);
        line-height: 1.15;
        letter-spacing: -0.02em;
        transition: letter-spacing 0.4s ease;
    }

    .text-box:hover h2 {
        letter-spacing: -0.01em;
    }

    p {
        margin: 0;
        font-size: 0.85rem;
        color: var(--c);
        opacity: 0.6;
        line-height: 1.6;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        transition: opacity 0.3s ease;
    }

    .text-box:hover p {
        opacity: 0.9;
    }

    .bar { border-radius: 99px; background: var(--c); }
    .bar-title  { height: 14px; width: 80%; opacity: 0.7; }
    .bar-title2 { height: 14px; width: 60%; opacity: 0.5; }
    .bar-sub    { height: 7px;  width: 90%; opacity: 0.3; }
    .bar-sub2   { height: 7px;  width: 75%; opacity: 0.2; }
    .bar-sub3   { height: 7px;  width: 55%; opacity: 0.15; }
</style>

<div class="text-box" style="--c: {color}; --bg: {bgColor}">
    <div class="top">
        {#if title}
            <h2>{title}</h2>
        {:else}
            <div class="bar bar-title"></div>
            <div class="bar bar-title2"></div>
        {/if}
    </div>
    <div class="bottom">
        {#if slogan}
            <p>{slogan}</p>
        {:else}
            <div class="bar bar-sub"></div>
            <div class="bar bar-sub2"></div>
            <div class="bar bar-sub3"></div>
        {/if}
    </div>
</div>
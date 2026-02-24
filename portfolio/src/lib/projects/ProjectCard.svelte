<script lang="ts">


    interface CardData {
        title: string;
        imagePath: string;
        slogan: string;
        color: string;
        bgColor: string;
    }

    interface Props {
        direction: string;
        data: CardData;
    }

    let { direction, data }: Props = $props();

    const ltr = direction === "leftToRight";

    const clips = {
        side:   ltr ? "polygon(0 0, 100% 0, calc(100% - 100px) 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 100% 100%, 100px 100%)",
        dark:   ltr ? "polygon(100px 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 0, calc(100% - 100px) 0, 100% 100%, 0 100%)",
        center: ltr ? "polygon(100px 0, 100% 0, calc(100% - 100px) 100%, 0 100%)"
            : "polygon(0 0, calc(100% - 100px) 0, 100% 100%, 100px 100%)",
    };
</script>

<style>
    @import './projectCard.css';
</style>

<div class="banner" style="background: {data.bgColor};">
    <div class="left" style="background: {ltr ? data.color : data.bgColor}; clip-path: {ltr ? clips.side : clips.dark};">
        {#if ltr}
            <p>{data.slogan}</p>
        {:else}
            <span class="title" style="transform: rotate(30deg);">{data.title}</span>
        {/if}
    </div>

    <div class="center" style="clip-path: {clips.center};">
        <img src={data.imagePath} alt="preview" />
    </div>

    <div class="right" style="background: {ltr ? data.bgColor : data.color}; clip-path: {ltr ? clips.dark : clips.side};">
        {#if ltr}
            <span class="title" style="transform: rotate(-30deg);">{data.title}</span>
        {:else}
            <p>{data.slogan}</p>
        {/if}
    </div>
</div>

<link rel="stylesheet" href="styles.css">


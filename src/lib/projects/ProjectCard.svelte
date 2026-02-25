<script lang="ts">
    import ImageBox from "./ImageBox.svelte";
    import TextBox from "./TextBox.svelte";

    export interface CardData {
        title: string;
        imagePath: string;
        slogan: string;
        color: string;
        bgColor: string;
    }

    export let direction: string;
    export let data: CardData;
</script>

<style>
    .card {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        padding: 1.5rem 2rem;
        border-radius: 1rem;
        gap: 1.5rem;
        background-color: var(--bg);
        min-height: 160px;
        width: 100%;
        box-sizing: border-box;
    }

    .card.reverse {
        flex-direction: row-reverse;
    }

    .separator {
        width: 2px;
        background: var(--accent);
        border-radius: 2px;
        opacity: 0.25;
        align-self: stretch;
    }
</style>

<div
        class="card {direction === 'rightToLeft' ? 'reverse' : ''}"
        style="--bg: {data.bgColor}; --accent: {data.color};"
>
    <ImageBox imagePath={data.imagePath} color={data.color} />
    <div class="separator"></div>
    <TextBox title={data.title} slogan={data.slogan} color={data.color} />
</div>
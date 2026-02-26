<script lang="ts">
    import ImageBox from "./ImageBox.svelte";
    import TextBox from "./TextBox.svelte";

    export interface CardData {
        title: string;
        imagePaths: string[];
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
        width: 100%;
        height: 50vh;
        min-height: 320px;
        box-sizing: border-box;
        overflow: hidden;
        border-radius: 1.25rem;
    }
</style>

{#if direction === 'leftToRight'}
    <div class="card">
        <TextBox title={data.title} slogan={data.slogan} color={data.color} bgColor={data.bgColor} />
        <ImageBox imagePaths={data.imagePaths} color={data.color} />
    </div>
{:else}
    <div class="card">
        <ImageBox imagePaths={data.imagePaths} color={data.color} />
        <TextBox title={data.title} slogan={data.slogan} color={data.color} bgColor={data.bgColor} />
    </div>
{/if}
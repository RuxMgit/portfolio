<script lang="ts">
    import ImageBox from "./ImageBox.svelte";
    import TextBox from "./TextBox.svelte";
    import { onMount } from "svelte";

    export interface CardData {
        title: string;
        imagePaths: string[];
        slogan: string;
        color: string;
        bgColor: string;
    }

    export let direction: string;
    export let data: CardData;

    let cardEl: HTMLDivElement;
    let visible = false;

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { visible = true; observer.disconnect(); } },
            { threshold: 0.15 }
        );
        observer.observe(cardEl);
        return () => observer.disconnect();
    });
</script>

<style>
    .card {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        width: 85%;
        height: 50vh;
        min-height: 320px;
        box-sizing: border-box;
        overflow: hidden;
        border-radius: 1rem;
        opacity: 0;
        transform: translateY(40px);
        transition:
                opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .card.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .card:hover {
        box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
        transform: translateY(-4px) scale(1.005);
        transition:
                box-shadow 0.4s ease,
                transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .card.visible:hover {
        opacity: 1;
    }
</style>

{#if direction === 'leftToRight'}
    <div class="card" class:visible bind:this={cardEl}>
        <TextBox title={data.title} slogan={data.slogan} color={data.color} bgColor={data.bgColor} />
        <ImageBox imagePaths={data.imagePaths} color={data.color} />
    </div>
{:else}
    <div class="card" class:visible bind:this={cardEl}>
        <ImageBox imagePaths={data.imagePaths} color={data.color} />
        <TextBox title={data.title} slogan={data.slogan} color={data.color} bgColor={data.bgColor} />
    </div>
{/if}
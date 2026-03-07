<script lang="ts">
    import ImageBox from "./ImageBox.svelte";
    import TextBox from "./TextBox.svelte";
    import { onMount } from "svelte";
    import DescriptionBox from "./DescriptionBox.svelte";

    interface CardData {
        title: string;
        imagePaths: string[];
        slogan: string;
        color: string;
        bgColor: string;
        description: string;
    }

    interface Props {
        direction: string;
        data: CardData;
    }

    let { direction, data }: Props = $props();

    let cardEl: HTMLDivElement = $state()!;
    let visible = $state(false);
    let descriptionOpen = $state(false);

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { visible = true; observer.disconnect(); } },
            { threshold: 0.15 }
        );
        observer.observe(cardEl);
        return () => observer.disconnect();
    });
</script>

{#if direction === 'leftToRight'}
    <div class="card" class:visible bind:this={cardEl}>
        <button class="info-btn right" onclick={() => descriptionOpen = !descriptionOpen} aria-label="Informations">+ Infos</button>
        <TextBox title={data.title} slogan={data.slogan} color={data.color} bgColor={data.bgColor} />
        {#if descriptionOpen}
            <DescriptionBox text={data.description} color={data.color} bgColor={data.bgColor}/>
        {:else}
            <ImageBox imagePaths={data.imagePaths} color={data.color} />
        {/if}
    </div>
{:else}
    <div class="card" class:visible bind:this={cardEl}>
        <button class="info-btn left" onclick={() => descriptionOpen = !descriptionOpen} aria-label="Informations">+ Infos</button>
        {#if descriptionOpen}
            <DescriptionBox text={data.description} color={data.color} bgColor={data.bgColor}/>
        {:else}
            <ImageBox imagePaths={data.imagePaths} color={data.color} />
        {/if}
        <TextBox title={data.title} slogan={data.slogan} color={data.color} bgColor={data.bgColor} />
    </div>
{/if}

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

    .info-btn {
        position: absolute;
        background: black;
        color: var(--c);
        font-size: 1.5rem;
        font-weight: 700;
        cursor: pointer;
        opacity: 0.5;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.2s ease;
        z-index: 3;
    }

    .info-btn.right{
        bottom: 0.7rem;
        right: 0.3rem;
    }
    .info-btn.left{
        bottom: 0.7rem;
        left: 0.3rem;
    }

    .info-btn:hover {
        opacity: 1;
    }
</style>


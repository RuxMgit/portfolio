<script lang="ts">
    import useEmblaCarousel from 'embla-carousel-svelte'
    import type { EmblaCarouselType } from 'embla-carousel'
    import Autoplay from 'embla-carousel-autoplay'

    import gamesData from '../../assets/gamesData.json'

    let {data = gamesData} = $props()

    let emblaApi: EmblaCarouselType | undefined
    let options = { loop: true }
    let plugins = [Autoplay({ delay: 3000, stopOnInteraction: true })]

    const goToPrev = () => {
        emblaApi?.plugins().autoplay?.stop()
        emblaApi?.scrollPrev()
    }
    const goToNext = () => {
        emblaApi?.plugins().autoplay?.stop()
        emblaApi?.scrollNext()
    }

    const onInit = (event: CustomEvent<EmblaCarouselType>) => {
        emblaApi = event.detail
    }
</script>

<div class="embla">
    <div
            class="embla__viewport"
            onemblaInit={onInit}
            use:useEmblaCarousel={{ options, plugins }}
    >
        <div class="embla__container">
            {#each data as slide}
                <div
                        class="embla__slide"
                        style="background-image: url({slide.image});"
                >
                    <div class="embla__slide__overlay"></div>
                    <h2 class="embla__slide__title">{slide.title}</h2>
                </div>
            {/each}
        </div>
    </div>

    <button class="embla__btn embla__prev" onclick={goToPrev} aria-label="Slide précédent">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6" />
        </svg>
    </button>

    <button class="embla__btn embla__next" onclick={goToNext} aria-label="Slide suivant">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6" />
        </svg>
    </button>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    .embla {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .embla__viewport {
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .embla__container {
        display: flex;
        touch-action: pan-y pinch-zoom;
        height: 100%;
    }

    .embla__slide {
        position: relative;
        flex: 0 0 100%;
        min-width: 0;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .embla__slide__overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5));
    }

    .embla__slide__title {
        position: relative;
        z-index: 1;
        color: white;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 2.5rem;
        letter-spacing: 0.05em;
        font-weight: 400;
        text-align: center;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
    }

    .embla__btn {
        position: absolute;
        top: 40%;
        z-index: 10;
        background: rgba(0, 0, 0, 0);
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: white;
        transition: background 0.2s ease, transform 0.2s ease;
    }

    .embla__btn:hover {
        background: rgba(0, 0, 0, 0.25);
    }

    .embla__prev { left: 1rem; }
    .embla__next { right: 1rem; }
</style>
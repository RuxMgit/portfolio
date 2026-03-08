<script lang="ts">
    import StarButton from "../utils/StarButton.svelte";
    import { fade } from 'svelte/transition'
    let { song, colors, onPrev, onNext } = $props();
</script>

{#key song.id}
    <div class="music-card"
         style="border-color: {colors.border}"
         in:fade={{ duration: 300 }}>
        <div class="card-wrapper">
            <img src={song.coverArt} alt="cover art" class="cover-art">
            <div class="artist" style="color: {colors.artist}">{song.artist}</div>
            <div class="music-title" style="color: {colors.title}">{song.title}</div>
            <div class="spacer"></div>
            <div class="play-buttons">
                <StarButton text="←" color={song.color} onclick={onPrev}/>
                <StarButton text="→" color={song.color} onclick={onNext}/>
            </div>
        </div>
    </div>
{/key}

<style>
    @font-face { font-family: coolFont; src: url("/fonts/secretFont_aalt.otf"); }

    .music-card {
        font-family: coolFont, serif;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        gap: 0.5rem;
        padding: clamp(0.75rem, 3%, 2rem);
        box-sizing: border-box;
    }
    .card-wrapper{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;

    }

    .cover-art-wrapper {
        flex: 1;
        min-height: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cover-art {
        width: 100%;
        border-radius: 1rem;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        max-height: 100%;
    }

    .artist {
        font-size: clamp(1.2rem, 5vw, 2.2rem);
        letter-spacing: 0.03em;
        text-align: center;
        flex-shrink: 0;
    }

    .music-title {
        font-size: clamp(2rem, 8vw, 4rem);
        line-height: 1;
        text-align: center;
        word-break: break-word;
        hyphens: auto;
        flex-shrink: 0;
    }

    .play-buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 0.5rem;
        box-sizing: border-box;
        flex-shrink: 0;
    }
</style>
<script lang="ts">
    import StarButton from "./StarButton.svelte";
    let { song, colors, onPrev, onNext } = $props();
</script>

<div class="music-card" style="border-color: {colors.border}">
    <img src={song.coverArt} alt="cover art" class="cover-art">
    <div class="artist" style="color: {colors.artist}">{song.artist}</div>
    <div class="music-title" style="color: {colors.title}">{song.title}</div>
    <div class="play-buttons">
        <StarButton text="←" color={song.color} onclick={onPrev}/>
        <StarButton text="→" color={song.color} onclick={onNext}/>
    </div>
</div>

<style>
    @font-face { font-family: coolFont; src: url("/fonts/secretFont_aalt.otf"); }

    .music-card {
        font-family: coolFont, serif;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 80%;
        position: relative;
        overflow: hidden;
        gap: 0.75rem;
        padding: 2rem;
    }
    .cover-art {
        width: 100%;
        border-radius: 1rem;
        aspect-ratio: 1 / 1;
    }
    .artist {
        font-size: 1.8rem;
        letter-spacing: 0.03em;
        text-align: center;
    }
    .music-title {
        max-width: 20rem;
        font-size: 3rem;
        line-height: 1;
        text-align: center;
        word-break: break-word;
        hyphens: auto;
    }
    .play-buttons {
        position: absolute;
        bottom: 2rem;
        left: 0.5rem;
        right: 0.5rem;
        display: flex;
        justify-content: space-between;
    }
</style>
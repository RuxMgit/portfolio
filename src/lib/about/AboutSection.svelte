<script lang="ts">
    import musicBoxData from "../../assets/musicBoxData.json";
    import StarButton from "./StarButton.svelte";
    import chroma from 'chroma-js';

    console.log(musicBoxData)
    let selectedSong = $state(9)
    function next(){
        if (selectedSong==musicBoxData.length){
            selectedSong=0
        }else {
            selectedSong++
        }
    }

    let colors = $derived(() => {
        const base = musicBoxData[selectedSong].color;
        return {
            border:     musicBoxData[selectedSong].colorOverride ?? chroma(base).saturate(1).hex(),
            glow:       chroma(base).alpha(0.25).css(),
            title:      chroma(base).brighten(0.8).saturate(0.5).hex(),
            artist:     chroma(base).brighten(2).desaturate(1).hex(),
        };
    });
</script>

<div class="about-container">
    <div class="profile-card" style="
        --border:      {colors().border};
        --glow:        {colors().glow};
        --title:       {colors().title};
        --artist:      {colors().artist};
        border-color:  {colors().border};
    ">
        <img src={musicBoxData[selectedSong].coverArt} alt="cover art" class="cover-art">
        <div class="artist">{musicBoxData[selectedSong].artist}</div>
        <div class="music-title" style="color: {musicBoxData[selectedSong].color}">{musicBoxData[selectedSong].title}</div>
        <div class="play-buttons">
            <StarButton text={"\u2190"} color={musicBoxData[selectedSong].color}/>
            <StarButton text={"\u2192"} color={musicBoxData[selectedSong].color}/>
        </div>
    </div>
    <div>

    </div>
</div>

<style>
    @font-face {
        font-family: coolFont;
        src: url("/fonts/secretFont_aalt.otf");
    }

    .about-container {
        height: 100vh;
        padding :10rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .profile-card {
        font-family: coolFont, serif;
        color: black;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 22rem;
        height: 35rem;
        border-radius: 3rem;
        background: #0d0d0d;
        position: relative;
        overflow: hidden;
        gap: 0.75rem;
        padding :2rem;
        border: 2px solid var(--border);
    }

    .cover-art {
        position: relative;
        width: 100%;
        border-radius: 1rem;
        aspect-ratio : 1 / 1
    }

    .artist {
        position: relative;
        z-index: 1;
        font-size: 1.8rem;
        color: var(--artist);
        letter-spacing: 0.03em;
        text-align: center;
    }

    .music-title {
        position: relative;
        z-index: 1;
        max-width: 20rem;
        font-size: 3rem;
        line-height: 1;
        text-align: center;
        word-break: break-word;
        hyphens: auto;
        color: var(--title);
    }

    .play-buttons {
        position: absolute;
        bottom: 2rem;
        left: 0.5rem;
        right: 0.5rem;
        z-index: 1;
        display: flex;
        justify-content: space-between;
    }
</style>
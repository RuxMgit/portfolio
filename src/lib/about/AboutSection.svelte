<script lang="ts">
    import musicBoxData from "../../assets/musicBoxData.json";
    import StarButton from "../utils/StarButton.svelte";
    import chroma from 'chroma-js';
    import MusicCard from "./MusicCard.svelte";
    import CvCard from "./CvCard.svelte";
    import SquareSelector from "./SquareSelector.svelte";
    import SlideButton from "../utils/SlideButton.svelte";
    import CoolCell from "./CoolCell.svelte";
    import internationalData from "../../assets/inter.json"
    let selectedSong = $state(0)
    function changeSong(direction: number){
        selectedSong = (selectedSong + direction + musicBoxData.length) % musicBoxData.length;
    }

    let colors = $derived(() => {
        const base = musicBoxData[selectedSong].color;
        return {
            border:     musicBoxData[selectedSong].colorOverride ?? chroma(base).saturate(1).hex(),
            glow:       chroma(base).alpha(0.85).css(),
            title:      chroma(base).brighten(0.8).saturate(0.5).hex(),
            artist:     chroma(base).brighten(2).desaturate(1).hex(),
        };
    });
    $effect(() => {
        document.documentElement.style.setProperty('--border', colors().border);
        document.documentElement.style.setProperty('--title', colors().title);
        document.documentElement.style.setProperty('--glow', colors().glow);
        document.documentElement.style.setProperty('--artist', colors().artist);
    });

</script>

<div class="about-container"  style="
            --border:      {colors().border};
            --glow:        {colors().glow};
            --title:       {colors().title};
            --artist:      {colors().artist};
        ">
    <div class="grid">
        <div class="cell">
            <CvCard src="" text="Développeur Fullstack créatif et bilingue"/>
        </div>
        <div class="cell"><p>Experience</p></div>
        <div class="cell cv-square span-col-2 ">
            <CvCard />
        </div>

        <div class="cell span-col-2">
            <CoolCell buttonText="Mes projets" image="./projects.png" onNavigate={() => onNavigate('projects')}/>
        </div>
        <div class="cell">
            <SquareSelector data={internationalData}/>
        </div>
        <div class="cell span-row-2 music-card">
            <MusicCard song={musicBoxData[selectedSong]} colors={colors()} onPrev={() => changeSong(-1)} onNext={() => changeSong(1)} />
        </div>
        <div class="cell">
            <SquareSelector/>
        </div>
        <div class="cell span-col-2">
            <CoolCell buttonText="Mes compétences techniques" onNavigate={() => onNavigate('skills')}/>
        </div>
    </div>
</div>

<style>
    @font-face {
        font-family: coolFont;
        src: url("/fonts/secretFont_aalt.otf");
    }

    .about-container {
        height: 100vh;
        padding :5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .grid {
        display: grid;
        height: 100%;
        width: 100%;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 16px;
        padding: 8px;
    }

    .cell {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #0d0d0d;
        border: 2px solid var(--border);
        border-radius: 3rem;
        overflow: hidden;
        transition: border-color 0.4s ease;
    }
    .span-col-2 { grid-column: span 2; }
    .span-row-2 { grid-row: span 2; }
</style>
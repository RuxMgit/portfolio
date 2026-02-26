<script>
    import ProjectCard from "./ProjectCard.svelte";
    import skyjoCardData from "../../assets/projectsData/skyjoCard.json";
    import chuuiCardData from "../../assets/projectsData/chuuiCard.json";
    import flip7CounterCardData from "../../assets/projectsData/flip7CounterCard.json";
    import loneCardData from "../../assets/projectsData/loneCard.json";
    import judilibreCardData from "../../assets/projectsData/judilibreCard.json";


</script>

<style>
    .card-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

{#if skyjoCardData && chuuiCardData}
    <div class="card-container">
        <ProjectCard direction="leftToRight" data={skyjoCardData}/>
        <ProjectCard direction="rightToLeft" data={chuuiCardData}/>
        <ProjectCard direction="leftToRight" data={flip7CounterCardData}/>
        <ProjectCard direction="rightToLeft" data={loneCardData}/>
        <ProjectCard direction="leftToRight" data={judilibreCardData}/>

    </div>
{/if}
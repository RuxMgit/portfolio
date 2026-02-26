<script>
    import ProjectCard from "./ProjectCard.svelte";
    import skyjoCardData from "../../assets/projectsData/skyjoCard.json";
    import chuuiCardData from "../../assets/projectsData/chuuiCard.json";
    import flip7CounterCardData from "../../assets/projectsData/flip7CounterCard.json";
    import loneCardData from "../../assets/projectsData/loneCard.json";


</script>


{#if skyjoCardData && chuuiCardData}
    <ProjectCard direction="leftToRight" data={skyjoCardData}/>
    <ProjectCard direction="rightToLeft" data={chuuiCardData}/>
    <ProjectCard direction="leftToRight" data={flip7CounterCardData}/>
    <ProjectCard direction="rightToLeft" data={loneCardData}/>
{/if}
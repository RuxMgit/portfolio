<script>
    import ProjectCard from "./ProjectCard.svelte";
    import skyjoCardData from "../../assets/projectsData/skyjoCard.json";
    import chuuiCardData from "../../assets/projectsData/chuuiCard.json";


</script>


{#if skyjoCardData && chuuiCardData}
    <ProjectCard direction="leftToRight" data={skyjoCardData}/>
    <ProjectCard direction="rightToLeft" data={chuuiCardData}/>
{/if}
<script>
    import ProjectCard from "./ProjectCard.svelte";
    let skyjoCardData = $state(null);
    let chuuiCardData = $state(null);

    fetch('/projectsData/skyjoCard.json')
        .then(r => r.json())
        .then(data => skyjoCardData = data);
    fetch('/projectsData/chuuiCard.json')
        .then(r => r.json())
        .then(data => chuuiCardData = data);


</script>


{#if skyjoCardData && chuuiCardData}
    <ProjectCard direction="leftToRight" data={skyjoCardData}/>
    <ProjectCard direction="rightToLeft" data={chuuiCardData}/>
{/if}
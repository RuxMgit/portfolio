<script>
    import ProjectCard from "./ProjectCard.svelte";
    let skyjoData = $state(null);

    fetch('/projectsData/skyjoCard.json')
        .then(r => r.json())
        .then(data => skyjoData = data);

</script>


{#if skyjoData}
    <ProjectCard direction="leftToRight" data={skyjoData}/>
{/if}
<script lang="ts">
    interface Props {
        direction: string;
        data: CardData;
    }

    interface CardData {
        title: string;
        imagePath: string;
        slogan: string;
        color: string;
    }

    let { direction, data }: Props = $props();

</script>

<style>
    .project-container{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: stretch;
    }

    .project-title{

    }

    .project-image{

    }

    .project-slogan{

    }



</style>

<div class="project-container">
    {#if direction === "leftToRight"}
        <div class="project-slogan">
            {#if data != null}
                {data.slogan}
            {/if}
        </div>
        <div class="project-image">
            <img src={data.imagePath}>
        </div>
        <div class="project-title">
            {#if data != null}
                {data.title}
            {/if}
        </div>
    {/if}
    {#if direction === "rightToLeft"}
        <div class="project-title"> </div>
        <div class="project-image"> </div>
        <div class="project-slogan"> </div>
    {/if}
</div>
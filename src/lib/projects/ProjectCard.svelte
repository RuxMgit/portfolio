<script lang="ts">
    export interface CardData {
        title: string;
        imagePath: string;
        slogan: string;
        color: string;
        bgColor: string;
    }

    export let direction: string;
    export let data: CardData;

    $: ltr = direction === "leftToRight";

    const offset = 100;

</script>

<style>
    .card{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem 2rem;

    }
</style>


<div class="card">
    <div></div>
</div>
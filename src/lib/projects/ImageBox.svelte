<script lang="ts">
    export let imagePaths: string[] = [];
    export let color: string = "#000";

    $: count = imagePaths.length;
</script>

<style>
    .image-box {
        flex: 0 0 50%;
        height: 100%;
        overflow: hidden;
        display: flex;
    }

    .img-wrap {
        flex: 1;
        overflow: hidden;
        position: relative;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .image-box:hover img {
        transform: scale(1.04);
    }

    .placeholder {
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.08);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .placeholder-inner {
        width: 48px;
        height: 48px;
        border-radius: 0.5rem;
        background: rgba(255,255,255,0.2);
    }

    .gap { display: flex; gap: 0px; width: 100%; height: 100%; }
    .gap-col { display: flex; flex-direction: column; flex: 1; gap: 2px; }
</style>

<div class="image-box">
    {#if count === 0}
        <div class="img-wrap">
            <div class="placeholder"><div class="placeholder-inner"></div></div>
        </div>

    {:else if count === 1}
        <div class="img-wrap" style="flex: 1; height: 100%">
            <img src={imagePaths[0]} alt="" />
        </div>

    {:else if count === 2}
        <div class="gap">
            {#each imagePaths as src}
                <div class="img-wrap"><img {src} alt="" /></div>
            {/each}
        </div>

    {:else if count === 3}
        <div class="gap">
            <div class="img-wrap" style="flex: 1.4">
                <img src={imagePaths[0]} alt="" />
            </div>
            <div class="gap-col">
                <div class="img-wrap"><img src={imagePaths[1]} alt="" /></div>
                <div class="img-wrap"><img src={imagePaths[2]} alt="" /></div>
            </div>
        </div>

    {:else if count === 4}
        <div class="gap" style="flex-wrap: wrap;">
            {#each imagePaths as src}
                <div class="img-wrap" style="flex: 0 0 calc(50% - 1px); height: calc(50% - 1px)">
                    <img {src} alt="" />
                </div>
            {/each}
        </div>
    {/if}
</div>
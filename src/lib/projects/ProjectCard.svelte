<script lang="ts">


    interface CardData {
        title: string;
        imagePath: string;
        slogan: string;
        color: string;
        bgColor: string;
    }

    interface Props {
        direction: string;
        data: CardData;
    }

    let { direction, data }: Props = $props();

    const ltr = direction === "leftToRight";

    const clips = {
        side:   ltr ? "polygon(0 0, 100% 0, calc(100% - 100px) 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 100% 100%, 100px 100%)",
        dark:   ltr ? "polygon(100px 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 0, calc(100% - 100px) 0, 100% 100%, 0 100%)",
        center: ltr ? "polygon(100px 0, 100% 0, calc(100% - 100px) 100%, 0 100%)"
            : "polygon(0 0, calc(100% - 100px) 0, 100% 100%, 100px 100%)",
    };

    let hovered = $state<'left' | 'center' | 'right' | null>(null);

    const leftFlex   = $derived(hovered === 'left'   ? '0 0 52%' : ltr ? '0 0 44%' : '0 0 30%');
    const rightFlex  = $derived(hovered === 'right'  ? '0 0 52%' : ltr ? '0 0 30%' : '0 0 44%');
    const centerFlex = $derived(hovered === 'center' ? '0 0 36%' : '0 0 30%');
</script>

<style>
    .banner {
        display: flex;
        align-items: stretch;
        width: 100%;
        height: 260px;
        overflow: hidden;
    }
    .left, .right, .center {
        transition: flex 0.3s ease;
    }

    .left {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }

    .right {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }

    .center {
        flex: 0 0 30%;
        background: #ececec;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        margin-left: -100px;
        margin-right: -100px;
    }

    img {
        max-width: 85%;
        max-height: 210px;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    }

    p {
        color: #fff;
        text-align: center;
        padding: 0 2.5rem;
        font-weight: 500;
        line-height: 1.55;
        text-shadow: 0 1px 3px rgba(0,0,0,0.25);
        margin: 0;
    }

    .title {
        font-size: 2rem;
        font-weight: 800;
        color: #fff;
        white-space: nowrap;
        text-shadow: 0 2px 8px rgba(0,0,0,0.4);
    }
</style>

<div class="banner" style="background: {data.bgColor};">
    <div
            role="region"
            class="left"
            style="background: {ltr ? data.color : data.bgColor}; clip-path: {ltr ? clips.side : clips.dark}; flex:{leftFlex}"
            onmouseover={()=>hovered='left'}
            onmouseleave={()=>hovered=null}
            onfocus={() => hovered = 'left'}
            onblur={() => hovered = null}
    >
        {#if ltr}
            <p>{data.slogan}</p>
        {:else}
            <span class="title" style="transform: rotate(30deg);">{data.title}</span>
        {/if}
    </div>

    <div
            class="center"
            style="clip-path: {clips.center}; flex:{centerFlex}"
            role="region"
            onmouseover={()=>hovered='center'}
            onmouseleave={()=>hovered=null}
            onfocus={() => hovered = 'center'}
            onblur={() => hovered = null}
    >
        <img src={data.imagePath} alt="preview" />
    </div>

    <div
            role="region"
            class="right"
            style="background: {ltr ? data.bgColor : data.color}; clip-path: {ltr ? clips.dark : clips.side}; flex:{rightFlex}"
            onmouseover={()=>hovered='right'}
            onmouseleave={()=>hovered=null}
            onfocus={() => hovered = 'right'}
            onblur={() => hovered = null}
    >
        {#if ltr}
            <span class="title" style="transform: rotate(-30deg);">{data.title}</span>
        {:else}
            <p>{data.slogan}</p>
        {/if}
    </div>
</div>

<link rel="stylesheet" href="styles.css">


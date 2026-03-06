<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { Canvas } from '@threlte/core'
    import { PerfMonitor } from '@threlte/extras'
    import bubblesData from "../../assets/bubblesData.json";
    import BubbleCard from "./BubbleCard.svelte";
    import BubbleModal from "./BubbleModal.svelte";
    import type { BubbleData } from './BubbleCard.svelte';
    import Effects from "./Effects.svelte";
    import { writable } from 'svelte/store';
    import {ballTrails} from "./SkillTrails";

    interface Ball extends BubbleData {
        x: number;
        y: number;
        angle: number;
        speed: number;
        wobbleOffset: number;
        wobbleSpeed: number;
        wobbleAmp: number;
        trail: Array<{ x: number; y: number }>;
    }

    const RADIUS = 44;

    let balls: Ball[] = $state([]);
    let containerEl: HTMLDivElement;
    let animFrame: number;
    let Width = 800, Height = 600;
    let selectedBubble: BubbleData | null = $state(null);
    let t = 0;

    function initBalls(): void {
        const rect = containerEl.getBoundingClientRect();
        Width = rect.width;
        Height = rect.height;
        balls = (bubblesData as BubbleData[]).map((btn) => ({
            ...btn,
            x: RADIUS + Math.random() * (Width - 2 * RADIUS),
            y: RADIUS + Math.random() * (Height - 2 * RADIUS),
            angle: Math.random() * Math.PI * 2,
            speed: 2,
            wobbleOffset: Math.random() * Math.PI * 2,
            wobbleSpeed: 0.008 + Math.random() * 0.006,
            wobbleAmp: 0.3 + Math.random() * 0.4,
            trail: [],
        }));
    }

    function tick(): void {
        const rect = containerEl.getBoundingClientRect();
        Width = rect.width; Height = rect.height;
        t++;

        for (const ball of balls) {
            ball.trail.unshift({ x: ball.x, y: ball.y });
            if (ball.trail.length > 250) ball.trail.pop();

            const wobble = Math.sin(t * ball.wobbleSpeed + ball.wobbleOffset) * ball.wobbleAmp * 0.02;
            ball.angle += wobble;
            ball.x += Math.cos(ball.angle) * ball.speed;
            ball.y += Math.sin(ball.angle) * ball.speed;

            if (ball.x - RADIUS < 0)      { ball.x = RADIUS;         ball.angle = Math.PI - ball.angle; }
            if (ball.x + RADIUS > Width)  { ball.x = Width - RADIUS; ball.angle = Math.PI - ball.angle; }
            if (ball.y - RADIUS < 0)      { ball.y = RADIUS;          ball.angle = -ball.angle; }
            if (ball.y + RADIUS > Height) { ball.y = Height - RADIUS; ball.angle = -ball.angle; }
        }

        ballTrails.set(balls.map(b => ({
            id: b.id,
            color: b.color,
            trail: b.trail
        })));

        animFrame = requestAnimationFrame(tick);
    }

    onMount(() => {
        initBalls();
        animFrame = requestAnimationFrame(tick);
    });

    onDestroy(() => {
        cancelAnimationFrame(animFrame);
    });
    let timerId =0
    // TODO : Ajouter la barre de progression
    function handleMouseOverBall(ball:Ball){
        clearTimeout(timerId)
        ball.speed = ball.speed/100
        timerId = setTimeout(()=>{
            selectedBubble = ball;
        }, 1000)
    }
    function handleMouseOutBall(ball:Ball){
        ball.speed = ball.speed*100
        clearTimeout(timerId)
    }
</script>
<div class="canvas-container">
    <Canvas renderProps={{ alpha: true }}>
<!--        <PerfMonitor/>-->
        <Effects />
    </Canvas>
</div>
<div class="scene" bind:this={containerEl}>
    {#each balls as ball (ball.id)}
        <div
                class="ball-wrapper"
                style="
                left: {ball.x - RADIUS}px;
                top: {ball.y - RADIUS}px;
                width: {RADIUS * 2}px;
                height: {RADIUS * 2}px;
            "
        >
            <BubbleCard
                    data={ball}
                    radius={RADIUS}
                    onmouseover={() =>handleMouseOverBall(ball)}
                    onmouseout={()=>handleMouseOutBall(ball)}
            />
        </div>
    {/each}
</div>

{#if selectedBubble}
    <BubbleModal bubble={selectedBubble} onclose={() => selectedBubble = null} />
{/if}

<style>
    .scene {
        position: absolute;
        inset: 0;
        z-index: 1;
    }

    .ball-wrapper {
        position: absolute;
        z-index: 1;
    }

    .canvas-container {
        position: absolute;
        inset: 0;
        z-index: 0;
        pointer-events: none;
    }
</style>
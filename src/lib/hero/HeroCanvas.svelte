<script>
    import { Canvas } from '@threlte/core'
    import HeroScene from './HeroScene.svelte'
    import {PerfMonitor} from "@threlte/extras";
</script>
<div class="canvas-container">
    <Canvas rendererParameters={ {antialias: true} }>
        <HeroScene />
    </Canvas>
</div>

<style>
    .canvas-container{
        height: 100vh;
    }
</style>
<script>
    import { Canvas } from '@threlte/core'
    import HeroScene from './HeroScene.svelte'
    import {PerfMonitor} from "@threlte/extras";
</script>

<Canvas rendererParameters={ {antialias: true} }>
    <HeroScene />
</Canvas>
<script>
    import { Canvas } from '@threlte/core'
    import NameTitleScene from './NameTitleScene.svelte'
    import {PerfMonitor} from "@threlte/extras";
</script>

<Canvas rendererParameters={ {antialias: true} }>
    <NameTitleScene />
</Canvas>
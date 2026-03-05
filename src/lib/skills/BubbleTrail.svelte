<script lang="ts">
    import { T } from '@threlte/core'
    import {MeshLineGeometry, MeshLineMaterial, useTexture} from '@threlte/extras'
    import { Vector3 } from 'three'

    interface Props {
        trail: Array<{ x: number; y: number }>;
        color: string;
        width?: number;
    }

    let { trail, color, width = 15 }: Props = $props()

    function toWorld(x: number, y: number): Vector3 {
        return new Vector3(
            (x - window.innerWidth / 2) / 50,
            -(y - window.innerHeight / 2) / 50,
            0
        )
    }
    const texture = useTexture('./brush-texture.png')

    const points = $derived(trail.map(p => toWorld(p.x, p.y)))
</script>

<T.Mesh>
    <MeshLineGeometry points={points} />
    {#await texture then alphaMap}
        <MeshLineMaterial
                width={width}
                color={color}
                attenuate={false}
                opacity={0.7}
                transparent
                depthTest={false}
                {alphaMap}
        />
    {/await}
</T.Mesh>
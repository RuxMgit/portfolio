<script module lang="ts">
    import { Vector3 } from 'three'  // ← import ici, pas dans l'instance

    const createPoints = (count = 40) => {
        const points: Vector3[] = []
        for (let i = 0; i < count; i += 1) {
            points.push(new Vector3())
        }
        return points
    }
</script>

<script lang="ts">
    import { T, useTask } from '@threlte/core'
    import {MeshLineGeometry, MeshLineMaterial, Text} from '@threlte/extras'

    interface Props {
        position: { x: number; y: number };
        color: string;
        width?: number;
    }

    let { position, color, width = 8 }: Props = $props()

    const count = 40
    let front = $state.raw(createPoints(count))
    let back = createPoints(count)


    function screenToWorld(x: number, y: number): [number, number] {
        const wx = (x - window.innerWidth / 2) / 50
        const wy = -(y - window.innerHeight / 2) / 50
        return [wx, wy]
    }

    useTask((delta) => {
        const [wx, wy] = screenToWorld(position.x, position.y)

        if (back[0]?.lengthSq() === 0) {
            back.forEach(p => p.set(wx, wy, 0))
        }

        back[0]?.set(wx, wy, 0)
        const alpha = 1e-6 ** delta
        for (let i = 1; i < count; i += 1) {
            const first = back[i - 1]
            const second = back[i]
            if (first) second?.lerp(first, alpha)
        }

        const temp = front
        front = back
        back = temp
    })
</script>

<T.Mesh>
    <MeshLineGeometry points={front} shape="taper" />
    <MeshLineMaterial {width} {color} attenuate={false} opacity={0.7} transparent />
    <MeshLineMaterial width={120} color={color} attenuate={false} opacity={1} transparent={true} />
    <Text
            position={[5,0,0]}
            text={"SALUT"}
            scale={12}
            font="./fonts/secretFont.otf"
    />
</T.Mesh>
<script lang="ts">
    import { T, useTask } from '@threlte/core'
    import { Color, MeshBasicMaterial, PlaneGeometry } from 'three'
    import { ballTrails } from './SkillTrails'

    const CELL_SIZE = 1.5
    const GAP = 0.15
    const STEP = CELL_SIZE + GAP
    const COLS = Math.ceil(window.innerWidth / 50 / STEP) + 2
    const ROWS = Math.ceil(window.innerHeight / 50 / STEP) + 2

    const offsetX = -((COLS - 1) * STEP) / 2
    const offsetY = -((ROWS - 1) * STEP) / 2

    interface Cell {
        col: number
        row: number
        x: number
        y: number
        heat: number
        color: Color
        mat: MeshBasicMaterial
    }

    const cells: Cell[] = []
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const x = offsetX + col * STEP
            const y = offsetY + row * STEP
            cells.push({
                col, row, x, y,
                heat: 0,
                color: new Color('#ffffff'),
                mat: new MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0 })
            })
        }
    }

    const geo = new PlaneGeometry(CELL_SIZE, CELL_SIZE)

    function screenToWorld(x: number, y: number): [number, number] {
        return [
            (x - window.innerWidth / 2) / 50,
            -(y - window.innerHeight / 2) / 50
        ]
    }

    useTask((delta) => {
        for (const ball of $ballTrails) {
            const head = ball.trail[0]
            if (!head) continue
            const [wx, wy] = screenToWorld(head.x, head.y)
            const col = Math.round((wx - offsetX) / STEP)
            const row = Math.round((wy - offsetY) / STEP)
            const cell = cells[row * COLS + col]
            if (cell) {
                cell.heat = 1
                cell.mat.color.set(ball.color)
            }
        }

        for (const cell of cells) {
            if (cell.heat > 0) {
                cell.heat = Math.max(0, cell.heat - delta * 1.5) // vitesse de fade
                cell.mat.opacity = cell.heat * 0.6
            }
        }
    })
</script>

{#each cells as cell}
    <T.Mesh
            geometry={geo}
            material={cell.mat}
            position={[cell.x, cell.y, -0.1]}
    />
{/each}
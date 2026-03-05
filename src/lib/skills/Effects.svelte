<script lang="ts">
    import {T, useThrelte} from '@threlte/core'
    import {ballTrails} from "./SkillTrails";
    import BubbleTrail from "./BubbleTrail.svelte";
    import {Text} from "@threlte/extras";

    const { renderer } = useThrelte()
    renderer.setClearAlpha(0)
</script>

<T.OrthographicCamera zoom={50} makeDefault position={[0, 0, 10]} />
<T.Mesh renderOrder={-1} visible={false}>
    <T.PlaneGeometry />
</T.Mesh>
{#each $ballTrails as ball (ball.id)}
    <BubbleTrail
            position={ball.position}
            color={ball.color}
    />
{/each}
<Text
        position={[0,0,0]}
        text={"SALUT"}
        scale={12}
        font="./fonts/secretFont.otf"
/>
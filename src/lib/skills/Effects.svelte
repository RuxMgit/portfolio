<script lang="ts">
    import {T, useThrelte} from '@threlte/core'
    import {ballTrails} from "./SkillTrails";
    import BubbleTrail from "./BubbleTrail.svelte";
    import {Text, Align} from "@threlte/extras";
    import GridTrail from "./GridTrail.svelte";

    const { renderer } = useThrelte()
    renderer.setClearAlpha(0)
</script>

<T.OrthographicCamera zoom={50} makeDefault position={[0, 0, 10]} />

<Align auto x={0} y={0} z={false}>
    <GridTrail />
    {#each $ballTrails as ball (ball.id)}
        <BubbleTrail trail={ball.trail} color={ball.color} />
    {/each}
    <Text
            position={[0,0,0]}
            text={"Compétences"}
            scale={20}
            font="./fonts/secretFont_aalt.otf"
    />
<!--    <T.GridHelper args={[40]} rotation.x={Math.PI / 2} />-->
</Align>
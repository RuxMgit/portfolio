<script>
    import {T, useLoader, useTask} from '@threlte/core'
    import {interactivity, Text, Suspense} from '@threlte/extras'
    import {Spring} from 'svelte/motion'
    import {DoubleSide, TextureLoader} from "three";

    interactivity()
    const scale = new Spring(1)

    const rotationX = new Spring(0, {stiffness: 0.05, damping: 0.5})
    const rotationY = new Spring(0, {stiffness: 0.05, damping: 0.5})

    let time = 0
    useTask((delta) => {
        time += delta
    })

    function handleMouseMove(e) {
        rotationY.target = (e.clientX / window.innerWidth - 0.5) * 0.4
        rotationX.target = (e.clientY / window.innerHeight - 0.5) * -0.4
    }

    const texture = useLoader(TextureLoader).load("/crown.png")
</script>

<svelte:window on:mousemove={handleMouseMove}/>

<T.PerspectiveCamera
        makeDefault
        position={[0, 0, 60]}
        oncreate={(ref) => {
        ref.lookAt(0, 0, 0)
    }}
/>

<Suspense>
    <T.AmbientLight intensity={2}/>
    <T.DirectionalLight position={[10, 10, 10]} intensity={2}/>

    <T.Group
            rotation.x={rotationX.current}
            rotation.y={rotationY.current}
            position.y={Math.sin(time) * 0.5}
    >
        <T.Mesh
                position={[0, 0, 3]}
                rotation.x={-0.05}
                rotation.y={0.4}
                scale={25}
        >
            <T.PlaneGeometry/>
            <T.MeshBasicMaterial
                map={$texture}
                transparent={true}
                side={DoubleSide}
                depthWrite={false}
                color="#135bc2"
            />
        </T.Mesh>

        <Text
                text="Eliott Morisset"
                anchorX="50%"
                anchorY="50%"
                fontSize={8}
                font="/public/fonts/AlmendraDisplay-Regular.ttf"
                letterSpacing={-0.05}
                scale={scale.current}
                onpointerenter={() => { scale.target = 1.1}}
                onpointerleave={() => {scale.target = 1}}
                outlineWidth={0.10}
                outlineColor="white"
        >
            <T.MeshStandardMaterial
                    color="white"
                    metalness={0.8}
                    roughness={0.2}
            />
        </Text>
    </T.Group>
</Suspense>
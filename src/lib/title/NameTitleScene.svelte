<script>
    import {T, useLoader, useTask} from '@threlte/core'
    import {interactivity, FakeGlowMaterial, Suspense, Stars, SVG, CameraControls} from '@threlte/extras'
    import {Spring, Tween} from 'svelte/motion'
    import {DoubleSide, TextureLoader} from "three";
    import url from '../../assets/drawing.svg?url'

    interactivity()
    const scale = new Spring(0.70)

    const rotationX = new Spring(0, {stiffness: 0.05, damping: 0.5})
    const rotationY = new Spring(0, {stiffness: 0.05, damping: 0.5})

    let time = $state(0)
    useTask((delta) => {
        time += delta
    })

    function handleMouseMove(e) {
        rotationY.target = (e.clientX / window.innerWidth - 0.5) * 0.4
        rotationX.target = (e.clientY / window.innerHeight - 0.5) * -0.4
    }

    const crownTexture = useLoader(TextureLoader).load("/crown.png")

    let speed = new Tween(0.1, {
        duration: 1000,
    })
    let rotation = $state(0)
    useTask((delta) => {
        rotation += delta * speed.current
    })


</script>

<svelte:window on:mousemove={handleMouseMove}/>

<T.PerspectiveCamera
        makeDefault
        position={[0, 0, 80]}
        oncreate={(ref) => {
        ref.lookAt(0, 0, 0)
    }}
>
<!--    <CameraControls/>-->
</T.PerspectiveCamera>


<Suspense>
    <Stars/>
    <T.AmbientLight intensity={50}/>
    <T.DirectionalLight position={[10, 10, 10]} intensity={20} castShadow/>

    <T.Group
        position={[0,0,0]}
    >

        <T.Group
                rotation.x={rotationX.current}
                rotation.y={rotationY.current}
                position.y={Math.sin(time) * 0.5}
                castShadow
        >
            <T.Mesh
                    position={[0, 0, -50]}
                    rotation.x={0.04}
                    rotation.y={-0.4}
                    rotation.z={rotation}
                    scale={24}
                    castShadow
            >
                <FakeGlowMaterial
                        glowColor="#DE3163"
                        glowInternalRadius={0.95}
                        falloff={0.15}
                        glowSharpness={0.1}
                />
                <T.TorusGeometry args={[1, 0.03, 16, 100]} />
            </T.Mesh>
            <T.Mesh
                    position={[0, 0, 10]}
                    rotation.x={-0.04}
                    rotation.y={0.4}
                    rotation.z={rotation}
                    scale={55}
                    onpointerenter={()=>{speed.target = 5}}
                    onpointerleave={()=>{speed.target = 0.1}}
                    castShadow
            >
                <T.PlaneGeometry/>
                <T.MeshBasicMaterial
                        map={$crownTexture}
                        transparent={true}
                        side={DoubleSide}
                        depthWrite={false}
                        color="#CF9FFF"
                />
            </T.Mesh>
            <!--        TITRE-->
            <T.Mesh
                    castShadow
                    position={[0, 45, 5]}
            >
                <T.PlaneGeometry args={[90, 20]} />
                <T.MeshBasicMaterial transparent opacity={0} depthWrite={false} />
            </T.Mesh>

            <T.Group
                    position={[-50, 82, 5]}
                    scale={scale.current}
                    scale.y={scale.current}
            >
                <SVG src={url} />
            </T.Group>

        </T.Group>
    </T.Group>
</Suspense>
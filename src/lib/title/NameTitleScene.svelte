<script>
    import {T, useLoader, useTask} from '@threlte/core'
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
    import {interactivity, FakeGlowMaterial, Suspense, Stars, Environment, CameraControls} from '@threlte/extras'
    import {Spring, Tween} from 'svelte/motion'
    import {TextureLoader} from "three";
    import * as THREE from 'three'

    const crown = useLoader(GLTFLoader).load('./IceCrown.glb')
    const nom = useLoader(GLTFLoader).load('./Nom.glb')

    const crownTexture = useLoader(TextureLoader).load("./crown.png")
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

    let speed = new Tween(0.1, {
        duration: 1000,
    })
    let rotation = $state(0)
    useTask((delta) => {
        rotation += delta * speed.current
    })

    $effect(() => {
        if ($crown) {
            const mesh = $crown.scene.getObjectByName('Crown')
            if (mesh) {
                const oldMat = mesh.material
                mesh.material = new THREE.MeshPhysicalMaterial({
                    map: oldMat.map,
                    color: new THREE.Color(0xadd8e6),
                    roughness: 0.05,
                    metalness: 0.0,
                    transmission: 0.85,
                    thickness: 2.0,
                    ior: 1.31,
                    envMapIntensity: 2.0,
                })
                mesh.renderOrder = 1
            }
        }
    })
</script>

<svelte:window on:mousemove={handleMouseMove}/>
<Environment format="hdr" type="pmrem" />
<T.PerspectiveCamera
        makeDefault
        position={[0, 0, 80]}
        oncreate={(ref) => {
        ref.lookAt(0, 0, 0)
    }}
>
    <CameraControls/>
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
            {#if $crown}
                <T.Group rotation.x={0} rotation.y={0.5} rotation.z={0.7}>
                    <T is={$crown.scene}
                       position={[0, 0, 0]}
                       rotation.y={rotation}
                       scale={10}
                       onpointerenter={() => { speed.target = 5 }}
                       onpointerleave={() => { speed.target = 0.1 }}
                    />
                </T.Group>
            {/if}
            <!--TITRE-->
            {#if $nom}
                <T is={$nom.scene}
                   position={[0, 0, 0]}
                   rotation.x={1.5}
                   rotation.y={0}
                   rotation.z={0}
                   scale={60}
                   onpointerenter={() => { speed.target = 5 }}
                   onpointerleave={() => { speed.target = 0.1 }}
                />
            {/if}


        </T.Group>
    </T.Group>
</Suspense>
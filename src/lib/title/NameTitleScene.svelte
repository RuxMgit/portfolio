<script>
    import {T, useLoader, useTask} from '@threlte/core'
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
    import {interactivity, Text, Suspense, Stars, Environment} from '@threlte/extras'
    import {Spring, Tween} from 'svelte/motion'
    import {TextureLoader} from "three";
    import * as THREE from 'three'

    const crown = useLoader(GLTFLoader).load('./IceCrown.glb')
    const nom = useLoader(GLTFLoader).load('./Nom.glb')

    interactivity()

    const rotationX = new Spring(0, {stiffness: 0.05, damping: 0.5})
    const rotationY = new Spring(0, {stiffness: 0.05, damping: 0.5})
    let time = $state(0)
    useTask((delta) => { time += delta })

    function handleMouseMove(e) {
        rotationY.target = (e.clientX / window.innerWidth - 0.5) * 0.4
        rotationX.target = (e.clientY / window.innerHeight - 0.5) * -0.2
    }

    let speed = new Tween(0.1, { duration: 1000 })
    let rotation = $state(0)
    useTask((delta) => { rotation += delta * speed.current })

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
                    transmission: 0.95,
                    thickness: 2.0,
                    ior: 1.31,
                    envMapIntensity: 2.0,
                })
                mesh.castShadow = true
                mesh.receiveShadow = true
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
        oncreate={(ref) => { ref.lookAt(0, 0, 0) }}
/>

<Suspense>
<!--    <Stars/>-->

    <T.AmbientLight intensity={1.5} color="#ffffff" />

    <T.DirectionalLight position={[0, 50, 50]} intensity={20} color="#ffffff" castShadow />

    <T.PointLight position={[0, 0, 40]} intensity={500} color="#ffffff" distance={200} />
    <T.PointLight position={[30, 20, 20]} intensity={400} color="#ff88cc" distance={150} />
    <T.PointLight position={[-30, 20, 20]} intensity={400} color="#88ccff" distance={150} />
    <T.PointLight position={[0, -20, 20]} intensity={300} color="#aa88ff" distance={150} />
    <T.PointLight position={[0, 30, 10]} intensity={300} color="#ffee88" distance={150} />



        <T.Group
            rotation.x={rotationX.current}
            rotation.y={rotationY.current}
            position.y={Math.sin(time) * 0.5}
    >
        {#if $crown}
            <T.Group rotation.x={0} rotation.y={0.5} rotation.z={0.7}>
                <T is={$crown.scene}
                   position={[0, 2, 0]}
                   rotation.y={rotation}
                   scale={10}
                   onpointerenter={() => { speed.target = 5 }}
                   onpointerleave={() => { speed.target = 0.1 }}
                />
            </T.Group>
        {/if}

        {#if $nom}
            <Text
                    position={[-60,9,0]}
                    text={"\uF0A1"}
                    scale={200}
                    font="./fonts/secretFont.otf"
            />
            <Text
                    position={[56.5,9,0]}
                    text={"\uF0A1"}
                    scale={200}
                    font="./fonts/secretFont.otf"
            />
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
            <T.Mesh
                    position={[0, 0, -50]}
                    rotation.x={0.04}
                    rotation.y={-0.4}
                    rotation.z={0}
                    scale={25}
            >
                <T.MeshStandardMaterial
                        color="#ff69b4"
                        emissive="#ff1493"
                        emissiveIntensity={5}
                        toneMapped={false}
                />
                <T.RingGeometry args={[1, 1.015, 4]} />
            </T.Mesh>
            <Text
                    position={[-3.3,18,-20]}
                    text={"\u2020"}
                    scale={180}
                    font="./fonts/secretFont.otf"
            />

            <T.PointLight position={[0, 0, -45]} intensity={300} color="#ff69b4" distance={100} />
    </T.Group>

</Suspense>
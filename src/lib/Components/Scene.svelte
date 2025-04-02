<script>
	import { Slider, Pane, Color, Folder, Button } from "svelte-tweakpane-ui";
    import { onMount } from "svelte";

    import Ybot from "./ybot.svelte";
    import Walls from "./Walls.svelte";

    import { T, useTask } from "@threlte/core";
	import { OrbitControls, interactivity, Outlines, Stars, FakeGlowMaterial } from "@threlte/extras";
	import { BoxGeometry, MeshStandardMaterial, OrthographicCamera, PerspectiveCamera, SphereGeometry } from "three";

    import { Spring } from 'svelte/motion'
    import { Tween } from "svelte/motion";
    import { sineOut } from "svelte/easing";
    import { backOut } from "svelte/easing";

	import { render } from "svelte/server";
	import { scale } from "svelte/transition";

    interactivity()

    //---> Object references
    //-> Camera
    let orbitRef = $state();
    let cameraRef = $state();
    
    //---> Camera Tweening
    const CameraTweenOptions = {duration : 500, easing: backOut}
    const defaultCameraPosition = {x : -10, y : 10, z : 10}
    let tweenedTarget = new Tween([0, 0, 0], CameraTweenOptions)
    let tweenedPosition = new Tween([-10,10,10], CameraTweenOptions)
    
    function ResetOrbitTarget(){
        // reset orbit target
        let currentOrbitTarget = [orbitRef.target.x, orbitRef.target.y, orbitRef.target.z]
        tweenedTarget.set(currentOrbitTarget, {duration: 0}) 
        tweenedTarget.target = [0,0,0]

        // reset camera position
        let currentCameraPos = [cameraRef.position.x, cameraRef.position.y, cameraRef.position.z]
        tweenedPosition.set(currentCameraPos, {duration:0});
        tweenedPosition.target = [-10, 10, 10]
    }

    onMount(()=>{
        orbitRef.saveState();
    })
</script>

<!-- Map -->
<Ybot />
<Walls/>
<Stars speed={1}/>

<!-- Lighting -->
<T.DirectionalLight color="white" castShadow position={[1,5,2]} intensity={2}/>
<T.AmbientLight color="white" intensity={2}/>

<!-- Camera -->
<T.PerspectiveCamera
bind:ref={cameraRef}
makeDefault
position={tweenedPosition.current}
>
<OrbitControls 
bind:ref={orbitRef}
enableDamping
dampingFactor={0.1}
target={tweenedTarget.current}
/>
</T.PerspectiveCamera>

<!-- Helper Menu -->
<Pane position="fixed" title="Tweakin">
    <Folder title="Orbit">
        <Button label="Orbit" on:click={ResetOrbitTarget} title="Reset Orbit Target"/>
    </Folder>
</Pane>
<script>
	import { Slider, Pane, Color, Folder, Button } from "svelte-tweakpane-ui";
    import { onMount } from "svelte";

    import Ybot from "./ybot.svelte";
    import Walls from "./Walls.svelte";
	import Interactable from "./Interactable.svelte";

    import { T, useTask } from "@threlte/core";
	import { OrbitControls, interactivity, Outlines, Stars, FakeGlowMaterial, onReveal, Edges, HTML, Float } from "@threlte/extras";
	import { BoxGeometry, Mesh, MeshStandardMaterial, OrthographicCamera, PerspectiveCamera, PlaneGeometry, SphereGeometry } from "three";

    import { Spring } from 'svelte/motion'
    import { Tween } from "svelte/motion";
    import { linear, sineOut, quintOut, quintInOut, quintIn } from "svelte/easing";

	import { render } from "svelte/server";
	import { scale } from "svelte/transition";

    interactivity()

    //---> Object references
    //-> Camera
    let orbitRef = $state();
    let cameraRef = $state();

    //---> Object Manipulation
    //-> Dummy
    const dummyPos = $state({x:0, y:0, z:0})
    
    //---> Camera Tweening
    const CameraTweenOptions = {duration : 500, easing: quintInOut}
    const defaultCameraPosition = [-8,6,8]
    const defaultCameraTarget = [0,1,0]

    let tweenedTarget = new Tween([0, 0, 0], CameraTweenOptions)
    let tweenedPosition = new Tween(defaultCameraPosition, CameraTweenOptions)

    const PointOfInterests = {
        home : {lookAtPosition : defaultCameraTarget, cameraPosition : defaultCameraPosition},
        dummy : {lookAtPosition : defaultCameraTarget, cameraPosition : defaultCameraPosition},
    }

    let Interactables = $state([])

    const AddToInteractables = (ref) => {Interactables.push(ref);}

    function LookAtObject(object){
        if (object == null)
            return console.log("ERROR! NO OBJECT TO LOOK AT")

        let currentOrbitTarget = [orbitRef.target.x, orbitRef.target.y, orbitRef.target.z]
        tweenedTarget.set(currentOrbitTarget, {duration: 0}) 
        tweenedTarget.target = object.lookAtPosition

        // reset camera position
        let currentCameraPos = [cameraRef.position.x, cameraRef.position.y, cameraRef.position.z]
        tweenedPosition.set(currentCameraPos, {duration:0});
        tweenedPosition.target = object.cameraPosition
    }

    function OnRobotClicked(){
        console.log("HEGAS")
    }

    onMount(()=>{
        orbitRef.saveState();
    })

    let mesh

    
</script>

<!-- Map -->
<T.Mesh onclick={OnRobotClicked}
>

<Float scale={0.7} floatIntensity={5}>
    <HTML transform geometry={new PlaneGeometry}>
        <div id="computer-wrap">
            <button style:display="block">Hello</button>
            <button style:display="block">Hello</button>
            <button style:display="block">Hello</button>
            <button style:display="block">Hello</button>
            <button style:display="block">Hello</button>
            <button style:display="block">Hello</button>
        </div>
    </HTML>
</Float>

    
<Ybot name="hello"  
position={[dummyPos.x, dummyPos.y, dummyPos.z]}
bind:ref={
    ()=>this,
    (r)=>AddToInteractables(r)
}
/>
</T.Mesh>
<Walls
bind:ref={
    ()=>this,
    (r)=>AddToInteractables(r)
}
/>
<Stars speed={1}/>

{#snippet outline()}
    <Outlines color="black"/>   
{/snippet}

<T.Mesh
geometry={new BoxGeometry()}
material={new MeshStandardMaterial()}
>
</T.Mesh>

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
        <Button label="Orbit" on:click={()=>LookAtObject(PointOfInterests.home)} title="Reset Orbit Target"/>
        
    </Folder>
    <Folder label="Dummy">
        <Slider label="X" bind:value={dummyPos.x}/>
        <Slider label="Y" bind:value={dummyPos.y}/>
        <Slider label="Z" bind:value={dummyPos.z}/>
        <Button label="Dummy" title="Look At Dummy" on:click={()=>LookAtObject(PointOfInterests.dummy)}/>
    </Folder>
</Pane>

<style>
    #computer-wrap{
        width: 100px;
        height: 100px;
        overflow-y:scroll;
        border: 1px solid red;
        
        scrollbar-width: thin;
        scrollbar-color: rgb(29, 29, 29);
    }
</style>
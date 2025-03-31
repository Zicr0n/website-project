<script>
    import { T } from '@threlte/core'
    import { OrbitControls } from '@threlte/extras';
    import Walls from './Walls.svelte';

    import { Color, Folder, Pane, Slider} from 'svelte-tweakpane-ui'

    const redWall = $state({x : 0, y:0, z:0})
</script>

<!-- Object Tweaking-->
<Pane position={'fixed'} title="Tweakin">
    <Folder title="RedWall">
        <Slider label="X" bind:value={redWall.x}/>
        <Slider label="Y" bind:value={redWall.y}/>
        <Slider label="Z" bind:value={redWall.z}/>
    </Folder>
</Pane>

<!-- Room -->
<Walls/>

<!-- Camera -->
<T.PerspectiveCamera
  makeDefault
  position={[-5, 5, 5]}
    
  oncreate={(ref) => {
    ref.lookAt(0, redWall.y, 0)
  }}
><OrbitControls target={[0,redWall.y,0]}/></T.PerspectiveCamera>

<!-- Lightning -->
<T.DirectionalLight castShadow position={[0, 10, 10]} intensity={2}/>
<T.AmbientLight intensity={2} color="#ffffff"/>

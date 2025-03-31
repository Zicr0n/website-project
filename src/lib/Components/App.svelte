<script>
    import { Canvas } from '@threlte/core'
    import Scene from './Scene.svelte'

    let date = new Date()
    let day = date.getUTCDate()

    // https://dev.to/atapas/the-best-way-to-get-the-month-name-from-a-date-in-javascript-3pjn
    let month = date.toLocaleString('default', {month : 'long'})

    let year = date.getFullYear()
</script>

<main>
    <div id="canvas">
        <Canvas>
            <Scene />
        </Canvas>
    </div>
    
</main>

<nav class="fixed w-full h-32 flex items-center px-16 gap-16">
    <p class="">Alalwani<br>Mohammad<br>Samir</p>
    <p>{day} {month} <br>{year}</p>
</nav>

<style>
    main{
        position: fixed;
        width: 100%;
        height: 100vh;
    }

    #canvas{
        height: 100vh;
    }
</style>

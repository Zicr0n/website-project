<script>
    import { T } from '@threlte/core'
    import { DoubleSide } from 'three/src/constants.js';
</script>

<T.Mesh receiveShadow  rotation={[-Math.PI * 0.5, 0, 0]}>
    <T.PlaneGeometry args={[10,5]} />
    <T.MeshStandardMaterial side={DoubleSide} color="red"/>
</T.Mesh>

<T.Mesh receiveShadow  rotation={[0, 0, 0]} position={[0,2.5,-2.5]}>
    <T.PlaneGeometry args={[10,5]} />
    <T.MeshStandardMaterial side={DoubleSide} color="green"/>
</T.Mesh>

<T.Mesh receiveShadow   rotation={[0, -Math.PI * 0.5 , 0]} position={[5,2.5, 0]}>
    <T.PlaneGeometry args={[5,5]} />
    <T.MeshStandardMaterial side={DoubleSide} color="blue"/>
</T.Mesh>
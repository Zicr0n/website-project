<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@3.0.0 static/RawGLTF/georgefloyd/floyd.glb
Author: Daniel Edwards (https://sketchfab.com/dedwards2)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/george-floyd-memorial-bust-0c4f918e8e16463e8d5de92bc49a9f23
Title: George Floyd Memorial Bust
-->

<script>
  import { T } from '@threlte/core'
  import { useGltf, Outlines } from '@threlte/extras'

  let { fallback, error, children, floyd="lel", ref = $bindable(), ...props} = $props()

  const gltf = useGltf('/RawGLTF/georgefloyd/floyd.glb')
</script>

<T.Group
  bind:ref
  dispose={false}
  {...props}
>
  {#await gltf}
    {@render fallback?.()}
  {:then gltf}
    <T.Group rotation={[-Math.PI / 2, 0, 0]}>
      <T.Mesh
        geometry={gltf.nodes.Object_2.geometry}
        material={gltf.materials.material_0}
      />
      <T.Mesh
        geometry={gltf.nodes.Object_3.geometry}
        material={gltf.materials.material_0}
      />
      <T.Mesh
        geometry={gltf.nodes.Object_4.geometry}
        material={gltf.materials.material_0}
      />
      <T.Mesh
        geometry={gltf.nodes.Object_5.geometry}
        material={gltf.materials.material_0}
      />
      <T.Mesh
        geometry={gltf.nodes.Object_6.geometry}
        material={gltf.materials.material_0}
      />
      <T.Mesh
        geometry={gltf.nodes.Object_7.geometry}
        material={gltf.materials.material_0}
      />
      <T.Mesh
        geometry={gltf.nodes.Object_8.geometry}
        material={gltf.materials.material_0}
      />
      <T.Mesh
        geometry={gltf.nodes.Object_9.geometry}
        material={gltf.materials.material_0}
      />
      <T.Mesh
        geometry={gltf.nodes.Object_10.geometry}
        material={gltf.materials.material_0}
      />
      <T.Mesh
        geometry={gltf.nodes.Object_11.geometry}
        material={gltf.materials.material_0}
      />
      <Outlines color="black"/>
    </T.Group>
  {:catch err}
    {@render error?.({ error: err })}
  {/await}

  {@render children?.({ ref })}
</T.Group>

<!-- src/routes/devblog/[slug]/+page.svelte -->
<script>

    /** @type {import('./$types').PageData} */

    let {data} = $props()

    let Content = $state(data.content)
    console.log(data)
    
  </script>
  
<article>
    <h1>{data.title}</h1>
    <p>Published: {data.date}</p>
    <div class="prose dark:prose-invert">
        <Content/>
    </div>
</article>


<style global>
    .prose :global{
        h1{
            background-color: red;
        }
    }

</style>
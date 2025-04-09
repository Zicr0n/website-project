<!-- src/routes/devblog/+page.svelte -->
<script>
	const {data} = $props()
    import { base } from '$app/paths';
    import Lightswitch from '$lib/Components/Lightswitch.svelte';
</script>

<header class="w-full">
    <h1 class="h1">Devblog</h1>
    <Lightswitch/>
    
</header>
<main class="w-full">
    <ul class="bg-tertiary-50-950 rounded-s">
        {#each data.posts as post}
            <li>
                <a href="{base}/devblog/{post.slug}" class="list-item preset-filled-tertiary-200-800 btn p-2 my-2 hover:ml-2 transition-all w-full">
                    {post.title} — {post.date}
                </a>
            </li>
        {/each}
    </ul>
</main>
<footer class="w-full">

</footer>

<style>
    footer, main, header{
        padding: 16px;
    }
</style>

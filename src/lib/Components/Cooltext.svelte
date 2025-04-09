<script>
    let {color = $bindable(), text = $bindable()} = $props()

    export let foo;
</script>

<h1 style:background-color={color}>{text}</h1>

<style>
    h1{
        background-color: red;
    }
</style>
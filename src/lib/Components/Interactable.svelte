<script>
    import { T } from "@threlte/core";
    import { interactivity } from "@threlte/extras";

    interactivity()
</script>


<slot onpointerenter={()=>console.log("ENTERED SLOT")}/>
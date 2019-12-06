<template>
    
</template>

<script>
let storeModule = "session";

export default {
    name: "logout",
    mounted() {
        console.log("suh");
        this.$store.dispatch(`${storeModule}/logout`);
    }
}
</script>
<template>
    <h2 class="happy">Hey, this is a vue component demo…… {{msg}}</h2>
</template>

<script>
    export default {
        name: "Hey",
        props: {
            msg: {
                type: String,
                default: "vue component test message"
            }
        },
        methods: {

        },
        data() {
            return {

            }
        },
    }
</script>

<style>
.happy{
    color: orange;
}
</style>
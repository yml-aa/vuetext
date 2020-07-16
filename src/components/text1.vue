<template>
    <div>
    <input type="button" value="按钮" :title="mytitle">
    <input type="button" value="anniu" v-on:click="show">
    </div>
</template>

<script>
    export default {
        name: "text1",
        el:'#divclass',
        data() {
            return {
                message:'2443ew5t4',
                mytitle:'我的我的'
            }
        },
        methods: {
            show() {
                alert("hello")
            }
        }
    }

</script>

<style scoped>

</style>
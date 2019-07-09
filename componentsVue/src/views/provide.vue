<template>
    <div class="provide">
        <h1>provide</h1>
    </div>
</template>

<script>
export default {
    name: 'provide',
    inject: ['app'],
    mounted(){
        console.log(this.app.value);
    }
}
</script>

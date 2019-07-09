<template>
    <div class="prop">
        <i-button size="large"  disabled ref="btn">large
            <span slot="icon" class="icon">icon</span>
        </i-button>
        <i-button size="small" @click.native="handleClick">small</i-button>
        <i-button size="default" @on-click="handleClick">default</i-button>

    </div>
</template>

<script>
import iButton from '@/components/ibutton'
export default {
    name:'Prop',
    components: {iButton},
    methods:{
        handleClick(value){
            console.log(value);
            this.$refs.btn.isShow();
        },
        
    }
}
</script>
<style scoped>
.icon{
    color: aquamarine;
}
</style>


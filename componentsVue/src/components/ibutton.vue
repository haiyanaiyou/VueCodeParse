<template>
    <div class="ibutton">
        <button :class="'btn ' + size" :disabled="disabled" @click="handleClick">
            <slot name="icon"></slot>
            <slot></slot>
        </button>
    </div>
</template>
<script>
function isValue(value, list){
    for(let i =0; i<list.length; i++){
        if(value === list[i]){
            return true;
        }
    }
    return false;
}
export default {
    name: 'ibutton',
    props:{
        disabled:{
            type: Boolean,
            default: false
        },
        size:{
            validator (value){
                return isValue(value, ['small', 'large', 'default']);
            },
            default: 'default'
        }
    },
    methods:{
        handleClick(event){
            this.$emit('on-click',event);
        },
        isShow(){
            window.alert('hi')
        }
    }
}
</script>

<style scoped>
.ibutton{
    display: inline-block;
}
.btn{
    background: yellow;
    color: black;
    font-weight: 700;
    border:1px solid #ccc;
    border-radius: 10px;
}
.small{
    width: 60px;
    height: 40px;
    line-height: 40px;
}
.large{
    width: 120px;
    height: 80px;
    line-height: 80px;
}
.default{
    width: 100px;
    height: 80px;
    line-height: 80px;
}
</style>



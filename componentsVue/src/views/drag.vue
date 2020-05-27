<template>
  <div id="drag" @mousedown="handleMove" class="drag">
    {{positionX}}
    {{positionY}}
  </div>
</template>

<script>
export default {
  name: "myDrag",
  data() {
    return {
      positionX: 0,
      positionY: 0
    };
  },
  methods: {
    handleMove(e) {
        let odiv = e.target;
        let x = e.clientX - odiv.offsetLeft;
        let y = e.clientY - odiv.offsetTop;
        document.onmousemove = (e)=>{
            let left = e.clientX - x;
            let top = e.clientY - y;
            this.positionX = top;
            this.positionY = left;

            odiv.style.left = left + 'px';
            odiv.style.top = top + 'px';
        };
        document.onmouseup = (e)=>{
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
  }
};
</script>

<style scoped>
.drag {
  position: relative;
  top: 10px;
  left: 10px;
  width: 200px;
  background: #666;
  color: aliceblue;
  cursor: pointer;
}
</style>
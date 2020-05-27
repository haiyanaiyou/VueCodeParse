<template>
  <div>
    <h2>购物车</h2>
    <table>
      <tr>
        <th>勾选</th>
        <th>课程名称</th>
        <th>课程价格</th>
        <th>数量</th>
        <th>总价</th>
      </tr>
      <tr v-for="(item, index) in courseItem" :key="index">
        <td>
          <input type="checkbox" v-model="item.isActive" />
        </td>
        <td>{{item.courseName}}</td>
        <td>{{item.coursePrice}}</td>
        <td>
          <button @click="minus(index)">-</button>
          {{item.number}}
          <button @click="add(index)">+</button>
        </td>
        <td>{{item.coursePrice * item.number}}</td>
      </tr>
      <tr>
        <td></td>
        <td colspan="2">{{isActiveCourse}}/{{allCourse}}</td>
        <td colspan="2">{{allPrice}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    courseItem: Array
  },
  computed: {
    isActiveCourse() {
        return this.courseItem.filter(item => item.isActive).length;
    },
    allCourse() {
        return this.courseItem.length;
    },
    allPrice() {
        let num = 0;
        this.courseItem.forEach(item => {
            if(item.isActive){
                num += item.coursePrice * item.number;
            }
        });
        return num;
    }
  },
  methods: {
    minus(index) {
      let num = this.courseItem[index].number;
      if (num > 1) {
        this.courseItem[index].number -= 1;
      } else {
        if (window.confirm("确定删除？")) {
          this.$emit("remove", index);
        }
      }
    },
    add(index) {
      this.courseItem[index].number += 1;
    }
  }
};
</script>
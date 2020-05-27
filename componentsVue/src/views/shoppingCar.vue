<template>
    <div class="shopping">
        <div>
            <h2>添加课程</h2>
            <div class="form-item">
                <label>课程名称：</label>
                <input type="text" v-model="course.courseName">
            </div>
            <div class="form-item">
                <label>课程价格：</label>
                <input type="text" v-model="course.coursePrice">
            </div>
            <div>
                <button @click="handleAddCourse">添加课程列表</button>
            </div>
        </div>
        <div>
            <h2>课程列表</h2>
            <table>
                <tr>
                    <th>课程名称</th>
                    <th>课程价格</th>
                    <th></th>
                </tr>
                <tr v-for="(item, index) in courseList" :key="item.id">
                    <th>{{item.courseName}}</th>
                    <th>{{item.coursePrice}}</th>
                    <th>
                        <button @click="addCourseToCar(index)">加入购物车</button>
                    </th>
                </tr>
            </table>
        </div>
        <cart :courseItem='courseItem' @remove="remove"></cart>
    </div>
</template>

<script>
import Cart from './component/Cart';
export default {
    name: 'ShoppingCar',
    components: {
        Cart
    },
    data(){
        return{
            courseList: [
                {
                    courseName: 'web课程',
                    coursePrice: '1000',
                    id: 1,
                },
                {
                    courseName: 'java课程',
                    coursePrice: '2000',
                    id: 2,
                },
            ],
            course: {},
            courseItem: [],
        }
    },
    methods: {
        handleAddCourse(){
            this.courseList.push(this.course)
            this.course = {};
        },
        addCourseToCar(index){
            let item = this.courseList[index];
            let isHasCourse = this.courseItem.find(x=>x.id === item.id);
            if(isHasCourse){
                isHasCourse.number += 1;
            }else{
                this.courseItem.push({
                    ...item,
                    number: 1,
                    isActive: true,
                });
            }           
        },
        remove(index){
            this.courseItem.splice(index,1);
        }
    }
    
}
</script>
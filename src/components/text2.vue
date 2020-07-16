<template>
    <div>
        <div>
        <label>ID:
            <input type="text" v-model="id">
        </label>
            <label>Name:
                <input type="text" v-model="name">
            </label>
            <input type="button" value="添加" @click="add">
            <label>搜索品牌名字:
                <input type="text">
            </label>
        </div>
        <table border="1px" width="100%">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Ctime</th>
                <th>Operation</th>
            </tr>
            <tr v-for="item in list" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.ctime}}</td>
                <td>
                    <a href="" @click.prevent="del(item.id)">删除</a>
                </td>
            </tr>
            </thead>
        </table>
    </div>
</template>

<script>
    export default {
        name: "text22",
        data(){
            return {
                list:[
                    {id :'1', name:'232',ctime:new Date() },
                    {id :'2', name:'22332',ctime:new Date() },
                    {id :'3', name:'1232',ctime:new Date() }
                ],
                id:'',
                name:''
            }
        },
        methods: {
            add() {
            //    分析
            //    1、获取到id 和name，直接从data上获取
            //    2、组织一个对象
            //    3、把这个对象，调用数组的相关方法，添加到当前data上的list上
            //    4、注意：在vue中，已经实现了数据的双向绑定，每当我们修改了data中的数据，
            //    vue会默认监听到数据的改动，自动把最新的数据，应用到页面上

                var car = {id: this.id,name: this.name,ctime:new Date()}
                this.list.push(car)
                this.id = this.name =''
            },
            del(id) {
                //分析
                //1.如何根据id，找到要删除这一项的索引
                //2、如果找到了索引，直接调用数组的splice方法
                window.console.log('w2e23')
                var index = this.list.findIndex(item => {
                    if(item.id == id){
                        return true;
                    }
                })
                this.list.splice(index,1)
            }
        }
    }
</script>

<style scoped>

</style>
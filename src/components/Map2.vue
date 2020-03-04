<template>
  <div class="map">
    <div id="chart" style="width: 600px;height:500px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'  //引入echarts
import jsonp from 'jsonp'  //引入jsonp
import 'echarts/map/js/china'   //引入中国地图

let option ={
    title:{   //标题 
        text:'vue实现疫情地图',
        x:'center',   //居中
        textStyle:{   //标题 样式
            color:'#9c0505'
        }
    },
    tooltip:{  //提示信息
         trigger: 'item',   //类型
         //地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
        formatter: '地区：{b}<br/>确诊：{c}'
    },
    series:[  //数据
        {
            type:'map',  //图表的类型
            map:'china',
            // data:[
            //     {name: '北京', value: 200},
            //     {name: '湖北', value: 20000},
            //     {name: '湖南', value: 10000},
            //     {name: '西藏', value: 8000},
            //     {name: '云南', value: 4000},
            // ],
            label:{  //图形上的文本标签，可用于说明图形的一些数据信息
                show:true,
                color:'red',
                fontSize:10
            },
            zoom:1.3,  //当前视角的缩放比例。
            itemStyle:{  //地图区域的多边形 图形样式。
                 borderColor:'blue',
            },
            emphasis:{  //高亮状态下的设置
                label:{  //图形上的文本标签，可用于说明图形的一些数据信息
                    color:'#fff',
                    fontSize:12
                },
                itemStyle:{  //地图区域的多边形 图形样式。
                    areaColor:'green',
                },
            }
        }
    ],
    visualMap: {  //视觉地图
        type:'piecewise',   //分段型
        show:true,
        pieces: [
            {min: 10000}, // 不指定 max，表示 max 为无限大（Infinity）。
            {min: 1000, max: 9999},
            {min: 100, max: 999},
            {min: 10, max: 99},
            {min: 1, max: 9},
            {value: 0}     // 不指定 min，表示 min 为无限大（-Infinity）。
        ],
        inRange: {  //范围
            color: ['#fff', '#ffaa85', '#660208'],
        },
        itemWidth:10,
        itemHeight:10
    },
    toolbox: {  
        show: true,
        orient: 'horizontal',   
        left: 'right',  
        top: 'top',
        feature: {
            dataView: {readOnly: false},  
            restore: {}, 
            saveAsImage: {}
        }
    },
};
export default {
  data(){
    return {
      myChart:''
    }
  },
  mounted(){   // 生命周期
    this.getData();
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById('chart'));
    // 使用刚指定的配置项和数据显示图表。
     //myChart.setOption(option);
  },
  methods:{
      //真实数据
    getData(){
        //jsonp('url',function(){})
        jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',(err,data)=>{
           // console.log(data.data.list)
            //data.data.list    map()
            var lists = data.data.list.map(item=>{return {name: item.name, value: item.value}});
            console.log(lists)
            console.log(lists);
            option.series[0].data = lists;
            // 使用刚指定的配置项和数据显示图表。
            this.myChart.setOption(option);
        })
    }
  }

}
</script>
<style scoped>
#chart {
  margin: 0 auto;
}
</style>
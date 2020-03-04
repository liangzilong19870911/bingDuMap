<template>
  <div class="home">
    <div id="chart2" style="width: 100%;height:300px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data(){
    return {
      
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart2'));
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '全国 新增确诊/疑似 趋势'
            },
            tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['新增确诊', '新增疑似']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            data: ['2.11', '2.12', '2.13', '2.14', '2.15', '2.16', '2.17', '2.18', '2.19', '2.20', '2.21', '2.22', '2.23']
        },
        yAxis: {
            type: 'value'
        },
        series: [
                  {
                      name: '新增确诊',
                      type: 'line',
                      smooth: true,
                      data: [2022, 15153, 5093, 2644, 2009, 2051,1891, 1751, 825, 892, 399, 649, 416]
                  },
                  {
                      name: '新增疑似',
                      type: 'line',
                      smooth: true,
                      data: [3342, 2807, 2450, 2277, 1918, 1563, 1432,1185,1277, 1614, 1614, 882, 620]
                  }
              ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
  }

}
</script>

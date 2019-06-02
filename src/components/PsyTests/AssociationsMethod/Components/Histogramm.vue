<template>
  <div id="charts">
    <div class="text-black" id="chart1">
      <apexchart
          type='bar'
          :options="chartOptions"
          :series="series"
      />
    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  import VueApexCharts from "vue-apexcharts";
  Vue.use(VueApexCharts);
  Vue.component("apexchart", VueApexCharts);

  export default {
    name: "Histogramm",

    props: {
     inputArray: {
       type: Array,
       required: true,
       default: function(){
       return [{x: 'f', y: 1, z: 'q'}]
       }
     },
    },

    data: function() {
      return {
        chartOptions: {
          chart: {
            height: 350,
            type: 'bar',
          },
/*          plotOptions: {
            bar: {
              dataLabels: {
                position: 'top', // top, center, bottom
              },
            }
          },*/
          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val + "s";
            },
            offsetY: -20,
            style: {
              fontSize: '12px',
              colors: ["#304758"]
            }
          },

          xaxis: {/*
            categories: ["Second step", "Third step", "Fourth step", "Final step"],*/
            position: 'top',
            labels: {
              offsetY: -18,

            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
              offsetY: -35,

            }
          },
          fill: {
            gradient: {
              shade: 'light',
              type: "horizontal",
              shadeIntensity: 0.25,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [50, 0, 100, 100]
            },
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              formatter: function (val) {
                return val + " s";
              }
            }

          },

        }
      }
    },

    methods: {

    },

    computed:{
      series(){
        console.log('in', this.inputArray)
        if(this.inputArray) {
          let arr = [];
          arr[0] = {};
          arr[0].data = this.inputArray;
          //console.log('hey',arr)
          return arr
        }

        return 0
      }
    },

    mounted(){
    }
  };
</script>

<style scoped>
  #chart1,
  #chart2 {
    max-width: 90%;
    margin: 35px auto;
  }

  #chart2 {
    position: relative;
    margin-top: -70px;
    margin-bottom: 0px;
  }

  #app {
    padding-top: 20px;
    padding-left: 10px;
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 22px 35px -16px rgba(0, 0, 0, 0.1);
    max-width: 650px;
    margin: 35px auto;
  }
</style>

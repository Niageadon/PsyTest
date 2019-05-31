<template>
  <div id="charts">
    <div id="chart1">
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
    data: function() {
      return {
        series: [{
         /* name: 'Inflation',
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]*/
          data: [{
            x: 'Apple',
            y: 54,
            z: 'fff'
          }, {
            x: 'Orange',
            y: 66
          }],
        }],
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
              return val + "%";
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
                return val + "%";
              }
            }

          },
          title: {
            text: 'Monthly Inflation in Argentina, 2002',
            floating: true,
            offsetY: 370,
            align: 'center',
            style: {
              color: '#444'
            }
          }
        }
      };
    },

    methods: {
      generateDayWiseTimeSeries: function(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
          var x = baseval;
          var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
            yrange.min;

          series.push([x, y]);
          baseval += 86400000;
          i++;
        }

        return series;
      }
    }
  };
</script>

<style scoped>
  #chart1,
  #chart2 {
    max-width: 650px;
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

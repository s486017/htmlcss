Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

var gaugeOptions = {
    chart: {
        type: 'solidgauge'
    },
    title: {
    		text: ''
    },
    pane: {
        center: ['50%', '95%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
            innerRadius: '90%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },
    tooltip: {
        enabled: false
    },
    yAxis: {
				stops: [
          [0.5, {
            linearGradient: {
              x1: 0,
              x2: 0,
              y1: 0,
              y2: 1
            },
            stops: [
              [0, '#ff0000'],
              [1, '#ffff00']
            ]
          }],
          [0.9, {
            linearGradient: {
              x1: 0,
              x2: 1,
              y1: 0,
              y2: 0
            },
            stops: [
              [0, '#ff0000'],
              [0.5, '#ffff00'],
              [1, '#00ff00']
            ]
          }]
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            y: 16
        }
    },
    plotOptions: {
        solidgauge: {
        		innerRadius: '90%',
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};
function _chartSpeed(_target,_title,_point) {
  // The speed gauge
  var chartSpeed = Highcharts.chart(_target, Highcharts.merge(gaugeOptions, {
      yAxis: {
          min: 0,
          max: 1000,
          title: {
              text: ''
          }
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Speed',
          data: [_point],
          dataLabels: {
              format:
                  '<div style="text-align:center" class="arcseries">' +
                  '<span class=t1>'+_title+'</span><br/>' +
                  '<span class=t2>({y}占쏙옙)</span>' +
                  '</div>'
          },
          tooltip: {
              valueSuffix: ''
          }
      }]
  }));
}
function _columnchart(_target,_categories,_series,_type) {
  if (_type==undefined) {
    _color  = ['#feef4b', '#abdbff']
  }
  else if(_type == 'defaultcolor'){
    _color = ['#abdbff']
  }
  else{
    _color  = ['#abdbff']
  }
  console.log(_target,_type)
  Highcharts.chart(_target, {
      chart: {
          type: 'column'
      },
      credits: {
          enabled: false
      },
      title: {
          text: ''
      },
      colors: _color,
      xAxis: {categories: _categories },
      series: _series ,
      yAxis: {
          allowDecimals: false,
          min: 0,
          title: {
              enabled: false
          }
      },
      tooltip: {
          formatter: function () {
              return '<b>' + this.x + '</b><br/>' +
                  this.series.name + ': ' + this.y + '<br/>' +
                  'Total: ' + this.point.stackTotal;
          }
      },
      plotOptions: {
          column: {
              stacking: 'normal',
              dataLabels: {
                  enabled: true,
                  y: -20,
                  verticalAlign: 'top'
              }
          }
      }      
  })
}
// stacking 占쏙옙占쏙옙 占썬끇已�
function _columnchart2(_target,_categories,_series,_type) {
  if (_type==undefined) {
    _color  = ['#feef4b', '#abdbff']
  }
  else if(_type == 'defaultcolor'){
    _color = ['#abdbff']
  }
  else{
    _color  = ['#abdbff']
  }
  console.log(_target,_type)
  Highcharts.chart(_target, {
      chart: {
          type: 'column'
      },
      credits: {
          enabled: false
      },
      title: {
          text: ''
      },
      colors: _color,
      xAxis: {categories: _categories },
      series: _series ,
      yAxis: {
          allowDecimals: false,
          min: 0,
          title: {
              enabled: false
          }
      },
      tooltip: {
          formatter: function () {
              return '<b>' + this.x + '</b><br/>' +
                  this.series.name + ': ' + this.y + '<br/>' +
                  'Total: ' + this.point.stackTotal;
          }
      },
      plotOptions: {
          column: {
              // stacking: 'normal',
              dataLabels: {
                  enabled: true,
                  y: -20,
                  verticalAlign: 'top'
              }
          }
      }      
  })
}

function _linechart(_target,_categories,_series,_type) {
  // console.log(_series)

  Highcharts.chart(_target, {
      chart: {
          type: 'line'
      },
      credits: {
          enabled: false
      },
      title: {
          text: ''
      },
      colors: _series.length > 1 ? ['#abdbff','#ffed43','#ff6565'] : ['#ff6565']
      ,
      legend: {
          enabled: _type == 'legendTrue' ? true : false
      },
      xAxis: {
          // categories: ['201810', '201811', '201812', '201901', '201902', '201903']
          categories: _categories
      },
      yAxis: {
          title: {
              enabled: false
          }
      },
      plotOptions: {
          line: {
              dataLabels: {
                  enabled: true
              },
              enableMouseTracking: false
          }
      },
      series: _series
      // series: [{
      //     name: 'Series 1',
      //     data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5]
      // }]
  });
}

// 筌띲끇窺 占쎄낯苑�癰귣떯由� 筌ㅼ뮄�젏 占썬끆援낉옙占� 占쎈맦�뇧
function maemulDetailRecentRealDeal(data, data2, tradeTypeNm) {
    var seriesData = [{
        name: '筌띲끇�꼻',
        data: []
    }, {
        name: '占쎄쑴苑�',
        data: []
    }];

    data.items = data.items.reverse();      // 占쎄퀣�뵠占쎄퀡占� 占쎌뮄而숋옙�뮇�몵嚥∽옙 占쎈베�졊
    data2.items = data2.items.reverse();    // 占쎄퀣�뵠占쎄퀡占� 占쎌뮄而숋옙�뮇�몵嚥∽옙 占쎈베�졊

    if (data.items.length) {
        $('#maemul-detail-recent-real-deal-chart1').show();
    } else {
        $('#maemul-detail-recent-real-deal-chart1').hide();
    }

    if (data2.items.length) {
        $('#maemul-detail-recent-real-deal-chart2').show();
    } else {
        $('#maemul-detail-recent-real-deal-chart2').hide();
    }
    
    _.forEach(data.items, function(item, i) {
        var obj = {x: +item.cntrcYrmn, y:+item.dealAmnt};

        if (i === data.items.length - 1) {
            obj.dataLabels = {
                enabled: true
            };
            obj.marker = {
                enabled: true
            };
        }

        seriesData[0].data.push(obj);
    });

    _.forEach(data2.items, function(item, i) {
        var obj = {x: +item.cntrcYrmn, y:+item.deposit};

        if (i === data2.items.length - 1) {
            obj.dataLabels = {
                enabled: true
            };
            obj.marker = {
                enabled: true
            };
        }

        seriesData[1].data.push(obj);
    });

    // 筌ㅼ뮄�젏 占썬끆援낉옙占� 占쎈맦�뇧 筌△뫂�뱜 - 筌띲끇�꼻
    var recentRealDealChartOptions1 = {
        chart: {
            type: 'spline',
            marginRight: 50
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        colors: ['#0894fd'],
        xAxis: {
            lineWidth: 0,
            tickLength: 0,
            crosshair: {
                width: 2
            },
            labels: {
                formatter: function() {
                    var label = '' + this.value,
                        temp1 = label.substr(0, 4),
                        temp2 = label.substr(4, 2);

                    if (temp2 === '00') {
                        temp2 = '01';
                    } else if (temp2 === '25') {
                        temp2 = '04';
                    } else if (temp2 === '50') {
                        temp2 = '07';
                    } else if (temp2 === '75') {
                        temp2 = '10';
                    }
                    label = temp1 + temp2;

                    return label;
                }
            }
        },
        yAxis: {
            title: {
                    enabled: false
            },
            labels: {
                formatter: function() {
                    return setWon(this.value);
                }
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            split: true,
            formatter: function() {
                return setWon(this.y);
            }
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                },
                dataLabels: {
					enabled: false,
					crop: false,
					overflow: 'none',
					align: 'left',
					verticalAlign: 'middle',
					//y: 5,
					//x: 5,
					formatter: function() {
						return '<span style="color:'+this.series.color+'">'+this.series.name+'</span>';
					}
				}
            }
        },
        series: [seriesData[0]]
    };

    // 筌ㅼ뮄�젏 占썬끆援낉옙占� 占쎈맦�뇧 筌△뫂�뱜 - 占쎄쑴苑�
    var recentRealDealChartOptions2 = {
        chart: {
            type: 'spline',
            marginRight: 50
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        colors: ['#1f3c94'],
        xAxis: {
            lineWidth: 0,
            tickLength: 0,
            crosshair: {
                width: 2
            },
            labels: {
                formatter: function() {
                    var label = '' + this.value,
                        temp1 = label.substr(0, 4),
                        temp2 = label.substr(4, 2);

                    if (temp2 === '00') {
                        temp2 = '01';
                    } else if (temp2 === '25') {
                        temp2 = '04';
                    } else if (temp2 === '50') {
                        temp2 = '07';
                    } else if (temp2 === '75') {
                        temp2 = '10';
                    }
                    label = temp1 + temp2;

                    return label;
                }
            }
        },
        yAxis: {
            title: {
                    enabled: false
            },
            labels: {
                formatter: function() {
                    return setWon(this.value);
                }
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            split: true,
            formatter: function() {
                return setWon(this.y);
            }
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                },
                dataLabels: {
					enabled: false,
					crop: false,
					overflow: 'none',
					align: 'left',
					verticalAlign: 'middle',
					//y: 5,
					//x: 5,
					formatter: function() {
						return '<span style="color:'+this.series.color+'">'+this.series.name+'</span>';
					}
				}
            }
        },
        series: [seriesData[1]]
    };

    if ($('#maemul-detail-recent-real-deal-chart1').length) {
        Highcharts.chart('maemul-detail-recent-real-deal-chart1', recentRealDealChartOptions1);
    }
    if ($('#maemul-detail-recent-real-deal-chart2').length) {
        Highcharts.chart('maemul-detail-recent-real-deal-chart2', recentRealDealChartOptions2);
    }
}

function maemulDetailRecentRealDealMain(data, data2, tradeTypeNm) {
    var seriesData = [{
        name: '筌띲끇�꼻',
        data: []
    }, {
        name: tradeTypeNm,
        data: []
    }];

    if (tradeTypeNm === '筌띲끇�꼻') {
        data.items = data.items.reverse();      // 占쎄퀣�뵠占쎄퀡占� 占쎌뮄而숋옙�뮇�몵嚥∽옙 占쎈베�졊

        if (data.items.length) {
            $('#maemul-detail-recent-real-deal-chart1').show();
        } else {
            $('#maemul-detail-recent-real-deal-chart1').hide();
        }

        _.forEach(data.items, function(item, i) {
            var obj = {x: +item.cntrcYrmn, y:+item.dealAmnt};
    
            if (i === data.items.length - 1) {
                // obj.dataLabels = {
                //     enabled: true
                // };
                // obj.marker = {
                //     enabled: true
                // };
            }
    
            seriesData[0].data.push(obj);
        });
    } else if (tradeTypeNm === '占쎄쑴苑�' || tradeTypeNm === '占쎈뗄苑�') {
        data2.items = data2.items.reverse();    // 占쎄퀣�뵠占쎄퀡占� 占쎌뮄而숋옙�뮇�몵嚥∽옙 占쎈베�졊    

        if (data2.items.length) {
            $('#maemul-detail-recent-real-deal-chart2').show();
        } else {
            $('#maemul-detail-recent-real-deal-chart2').hide();
        }

        _.forEach(data2.items, function(item, i) {
            if (tradeTypeNm === '占쎄쑴苑�') {
                var obj = {x: +item.cntrcYrmn, y:+item.deposit};
            } else if (tradeTypeNm === '占쎈뗄苑�') {
                var obj = {x: +item.cntrcYrmn, y:+item.mnthlAmnt};
            }
    
            if (i === data2.items.length - 1) {
                // obj.dataLabels = {
                //     enabled: true
                // };
                // obj.marker = {
                //     enabled: true
                // };
            }
    
            seriesData[1].data.push(obj);
        });
    }

    // 筌ㅼ뮄�젏 占썬끆援낉옙占� 占쎈맦�뇧 筌△뫂�뱜 - 筌띲끇�꼻
    var recentRealDealChartOptions1 = {
        chart: {
            type: 'spline',
            marginRight: 50
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        colors: ['#0894fd'],
        xAxis: {
            lineWidth: 0,
            tickLength: 0,
            crosshair: {
                width: 2
            },
            labels: {
                formatter: function() {
                    var label = '' + this.value,
                        temp1 = label.substr(0, 4),
                        temp2 = label.substr(4, 2);

                    if (temp2 === '00') {
                        temp2 = '01';
                    } else if (temp2 === '25') {
                        temp2 = '04';
                    } else if (temp2 === '50') {
                        temp2 = '07';
                    } else if (temp2 === '75') {
                        temp2 = '10';
                    }
                    label = temp1 + temp2;

                    return label;
                }
            }
        },
        yAxis: {
            title: {
                    enabled: false
            },
            labels: {
                formatter: function() {
                    return setWon(this.value);
                }
            }
        },
        legend: {
            enabled: true,
            align: 'right'
        },
        tooltip: {
            split: true,
            formatter: function() {
                return setWon(this.y);
            }
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                },
                dataLabels: {
					enabled: false,
					crop: false,
					overflow: 'none',
					align: 'left',
					verticalAlign: 'middle',
					//y: 5,
					//x: 5,
					formatter: function() {
						return '<span style="color:'+this.series.color+'">'+this.series.name+'</span>';
					}
				}
            }
        },
        series: [seriesData[0]]
    };

    // 筌ㅼ뮄�젏 占썬끆援낉옙占� 占쎈맦�뇧 筌△뫂�뱜 - 占쎄쑴苑�
    var recentRealDealChartOptions2 = {
        chart: {
            type: 'spline',
            marginRight: 50
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        colors: ['#1f3c94'],
        xAxis: {
            lineWidth: 0,
            tickLength: 0,
            crosshair: {
                width: 2
            },
            labels: {
                formatter: function() {
                    var label = '' + this.value,
                        temp1 = label.substr(0, 4),
                        temp2 = label.substr(4, 2);

                    if (temp2 === '00') {
                        temp2 = '01';
                    } else if (temp2 === '25') {
                        temp2 = '04';
                    } else if (temp2 === '50') {
                        temp2 = '07';
                    } else if (temp2 === '75') {
                        temp2 = '10';
                    }
                    label = temp1 + temp2;

                    return label;
                }
            }
        },
        yAxis: {
            title: {
                    enabled: false
            },
            labels: {
                formatter: function() {
                    return setWon(this.value);
                }
            }
        },
        legend: {
            enabled: true
        },
        tooltip: {
            split: true,
            formatter: function() {
                return setWon(this.y);
            }
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                },
                dataLabels: {
					enabled: false,
					crop: false,
					overflow: 'none',
					align: 'left',
					verticalAlign: 'middle',
					//y: 5,
					//x: 5,
					formatter: function() {
						return '<span style="color:'+this.series.color+'">'+this.series.name+'</span>';
					}
				}
            }
        },
        series: [seriesData[1]]
    };

    if (tradeTypeNm === '筌띲끇�꼻') {
        if ($('#maemul-detail-recent-real-deal-chart1').length) {
            Highcharts.chart('maemul-detail-recent-real-deal-chart1', recentRealDealChartOptions1);
        }
    } else if (tradeTypeNm === '占쎄쑴苑�' || tradeTypeNm === '占쎈뗄苑�') {
        if ($('#maemul-detail-recent-real-deal-chart1').length) {
            Highcharts.chart('maemul-detail-recent-real-deal-chart1', recentRealDealChartOptions2);
        }
    }
    
    if ($('#maemul-detail-recent-real-deal-chart2').length) {
        Highcharts.chart('maemul-detail-recent-real-deal-chart2', recentRealDealChartOptions2);
    }
}

// 占쎌늽�닋占쎈베�궖, �뤃癒�彛낉옙占� 筌△뫂�뱜
function membersChart(containerId, data, parentData, type1, type2) {
    var categories,
        chartData;

    if (type2 === 'student') {
        if (type1 === 'elementary') {
            categories = [
                '1占쎌늾���',
                '2占쎌늾���',
                '3占쎌늾���',
                '4占쎌늾���',
                '5占쎌늾���',
                '6占쎌늾���',
                '占쎈���땾占쎌늽�닋'
            ];
            chartData = [
                +data.firstStcls || null,
                +data.scndStcls || null,
                +data['3rdstcls'] || null,
                +data['4thstcls'] || null,
                +data['5thstcls'] || null,
                +data['6thstcls'] || null,
                +data.spclStcls || null
            ];
        } else if (type1 === 'middle' || type2 === 'high') {
            categories = [
                '1占쎌늾���',
                '2占쎌늾���',
                '3占쎌늾���',
                '占쎈���땾占쎌늽�닋'
            ];
            chartData = [
                +data.firstStcls || null,
                +data.scndStcls || null,
                +data['3rdstcls'] || null,
                +data.spclStcls || null
            ];
        }
    } else if (type2 === 'teacher') {
        categories = [
            '�뤃癒��삢',
            '�뤃癒�而�',
            '癰귣똻彛끾뤃癒�沅�',
            '占쎌눖而꿩뤃癒�沅�',
            '占쎈���땾�뤃癒�沅�',
            '占쎄낯堉뉑뤃癒�沅�',
            '疫꿸퀗而숋옙�뮄�꺍占쏙옙'
        ];
        chartData = [
            +data.prncpSm || null,
            +data.vicePrncpSm || null,
            +data.asgndTchrSm || null,
            +data.gnrlTchrSm || null,
            +data.spclTchrSm || null,
            +data.ntrtnTchrSm || null,
            +data.fxtrmTchrSm || null
        ];
    } else if (type2 === 'studentPerClass' || type2 === 'studentPerTeacher') {
        categories = [
            parentData.locplcSi,
            parentData.locplcGu,
            data.scholNm
        ];

        if (type2 === 'studentPerClass') {
            chartData = [
                +data.ofcedStcls || null,
                +data.edctnStcls || null,
                +data.nmbrStcls | null
            ];
        } else if (type2 === 'studentPerTeacher') {
            chartData = [
                +data.ofcedNmbrTchr || null,
                +data.edctnNmbrTchr || null,
                +data.nmbrStdnTchr | null
            ];
        }
    }

    var membersChartOptions = {
        chart: {
            type: 'column',
            margin: [10, 0, 20, 0],
            spacing: [0, 0, 0, 0]
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: categories,
            labels: {
                autoRotation: false
            }
        },
        yAxis: {
            min: 0,
            title: {
                enabled: false
            },
            labels: {
                    enabled: false
            },
            stackLabels: {
                enabled: true,
                style: {
                    color: 'gray'
                }
            },
            tickInterval: 20
        },
        tooltip: {
            enabled: false
        },
        legend: {
                enabled: false
        },
        plotOptions: {
                column: {
                    pointWidth: 20,
                stacking: 'normal'
            }
        },
        series: [{
            name: '',
            color: '#aedcff',
            data: chartData
    
        }]
    };

    if ($('#' + containerId).length) {
        // 筌△뫂�뱜占썬끉�뵠 筌띲끇窺 占쎄낯苑�占쎈뗀�늺占쎈Ŋ苑� 占쎌늿�뻻占쏙옙 筌띾‘�뵠 占쎌빘苑�占쎌꼷堉깍옙占� 筌띲끇窺 占쎄낯苑�占쎈뗀�늺占쎈Ŋ苑� 占썬끋寃뺞에�끉�뵠 占쎈뜄由븝옙占� 占쎄쑴湲쏙옙占� 占쎈뜆堉깍옙占� 占쎌럡而숋옙占� 占쎌뮆�쟿占쎈��占� 占쎈Þ��� 占썬끋六�
        membersCharttimer[membersCharttimer.length] = setTimeout(function() {
            Highcharts.chart(containerId, membersChartOptions);
        }, Math.random() * 1000);
    }
}

// 占쎄낮�뼖占썬끉�읅 筌△뫂�뱜
function consultationChart(containerId, data, parentData, type1, type2) {
    var consultationPerformanceChartOptions = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            margin: [0, 0, 0, 0],
            spacing: [0, 0, 0, 0],
            events: {
                load: function () { 
                    $('#' + containerId).find('.highcharts-legend-item rect').css('transform', 'translate(0, -1px)');
                },
                redraw: function () {
                    $('#' + containerId).find('.highcharts-legend-item rect').css('transform', 'translate(0, -1px)');
                }
            }
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        tooltip: {
            enabled: false
        },
        legend: {
            align: 'right',
            verticalAlign: 'bottom',
            layout: 'vertical',
            floating: false,
            squareSymbol: false,
            symbolHeight: 8,
            symbolWidth: 16,
            symbolRadius: 0
        },
        colors: ['#bbbbbb', '#0894fd'],
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false
                },
                center: ['30%', '50%'],
                size: '120%',
                showInLegend: true,
                states: {
                        hover: {
                            enabled: false
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '',
            innerSize: '60%',
            data: [
                ['占쎈��占쏙옙怨룸뼖', +data.intrnCnslr],
                ['占쎈챶占쏙옙怨룸뼖', +data.stdntTotal]
            ]
        }]
    };

    if ($('#' + containerId).length) {
        // 筌△뫂�뱜占썬끉�뵠 筌띲끇窺 占쎄낯苑�占쎈뗀�늺占쎈Ŋ苑� 占쎌늿�뻻占쏙옙 筌띾‘�뵠 占쎌빘苑�占쎌꼷堉깍옙占� 筌띲끇窺 占쎄낯苑�占쎈뗀�늺占쎈Ŋ苑� 占썬끋寃뺞에�끉�뵠 占쎈뜄由븝옙占� 占쎄쑴湲쏙옙占� 占쎈뜆堉깍옙占� 占쎌럡而숋옙占� 占쎌뮆�쟿占쎈��占� 占쎈Þ��� 占썬끋六�
        
        consultationCharttimer[consultationCharttimer.length] = setTimeout(function() {
            Highcharts.chart(containerId, consultationPerformanceChartOptions, function(chart) {
                var span1 = $('<span id="' + containerId + '-centerText1" style="position:absolute; text-align:center; font-size:12px;">�룯占�</span>'),
                    span2 = $('<span id="' + containerId + '-centerText2" style="position:absolute; text-align:center; font-size:12px;">占쎄낮�뼖占썬끉�읅</span>'),
                    span3 = $('<span id="' + containerId + '-centerText3" style="position:absolute; text-align:center; font-size:12px;"><strong>' + (+data.intrnCnslr + +data.stdntTotal) + '</strong></span>');
                
                $('#' + containerId).find('.highcharts-container').append(span1).append(span2).append(span3);
                span1.css('left', '53px');
                span1.css('top', '35px');
                span1.css('width', '50px');
                span2.css('left', '53px');
                span2.css('top', '49px');
                span2.css('width', '50px');
                span3.css('left', '53px');
                span3.css('top', '65px');
                span3.css('width', '50px');
            });
        }, Math.random() * 1000);
    }
}

// 筌ㅼ뮄�젏 占썬끆援낉옙�꼵占� �뜮袁㏉꺍 筌△뫂�뱜
function realDealCompareChart(container, data, item) {
    var data = {
        sido: {
            min: parseInt(data[0].minAmnt, 10),
            max: parseInt(data[0].maxAmnt, 10),
            avg: parseInt(data[0].avgAmnt, 10),
        },
        sigugun: {
            min: parseInt(data[1].minAmnt, 10),
            max: parseInt(data[1].maxAmnt, 10),
            avg: parseInt(data[1].avgAmnt, 10),
        },
        dongmyun: {
            min: parseInt(data[2].minAmnt, 10),
            max: parseInt(data[2].maxAmnt, 10),
            avg: parseInt(data[2].avgAmnt, 10),
        }
    };

    if (item) {
        data['maemul'] = {
            price: item.sortAmnt
        };
    }

    var sidoGap = data.sido.max - data.sido.min;
    var sido = container.find('.sido');
    sido.css({
        left: 0,
        width: '100%'
    });

    var sigugun = container.find('.sigugun');
    sigugun.css({
        left: ((data.sigugun.min - data.sido.min) / sidoGap * 100) + '%',
        width: ((data.sigugun.max - data.sigugun.min) / sidoGap * 100) + '%'
    });

    var dongmyun = container.find('.dongmyun');
    dongmyun.css({
        left: ((data.dongmyun.min - data.sido.min) / sidoGap * 100) + '%',
        width: ((data.dongmyun.max - data.dongmyun.min) / sidoGap * 100) + '%'
    });

    if (item) {
        var maemul = container.find('.maemul');
        var _currentPer = ((data.maemul.price - data.sido.min) / sidoGap * 100);
        maemul.css({
            left: _currentPer>100 ? 100+'%' : _currentPer + '%'
        });
    }
}



// 筌ㅼ뮄�젏 占썬끆援낉옙�꼵占� �뜮袁㏉꺍 筌△뫂�뱜 筌롫뗄�뵥 占쎌꼷�뵠筌욑옙
function realDealCompareChartMain(container, data, item) {
    var data = {
        sido: {
            min: parseInt(data[0].minAmnt, 10),
            max: parseInt(data[0].maxAmnt, 10),
            avg: parseInt(data[0].avgAmnt, 10),
        },
        sigugun: {
            min: parseInt(data[1].minAmnt, 10),
            max: parseInt(data[1].maxAmnt, 10),
            avg: parseInt(data[1].avgAmnt, 10),
        },
        dongmyun: {
            min: parseInt(data[2].minAmnt, 10),
            max: parseInt(data[2].maxAmnt, 10),
            avg: parseInt(data[2].avgAmnt, 10),
        }
    };

    if (item) {
        data['maemul'] = {
            price: item.sortAmnt
        };
    }

    var sidoGap = data.sido.max - data.sido.min;

    var sido = container.find('.sido');
    sido.css({
        left: 0,
        width: '100%'
    });

    if (!sidoGap) {
        container.find('div').hide();
        container.find('.real-deal-compare-chart-nodata').show();
        return;
    } else {
        container.find('div').show();
        container.find('.real-deal-compare-chart-nodata').hide();
    }

    var sigugun = container.find('.sigugun');
    sigugun.css({
        left: ((data.sigugun.min - data.sido.min) / sidoGap * 100) + '%',
        width: ((data.sigugun.max - data.sigugun.min) / sidoGap * 100) + '%'
    });

    var dongmyun = container.find('.dongmyun');
    dongmyun.css({
        left: ((data.dongmyun.min - data.sido.min) / sidoGap * 100) + '%',
        width: ((data.dongmyun.max - data.dongmyun.min) / sidoGap * 100) + '%'
    });

    if (item) {
        var maemul = container.find('.maemul');
        maemul.css({
            left: ((data.maemul.price - data.sido.min) / sidoGap * 100) + '%'
        });
    }
}

function _piechart(_target,_label,_data) {
    $('#'+_target).highcharts({
      credits: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      chart: {
        type: 'pie',
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      colors: ['#bbbbbb', '#0894fd'],
      plotOptions: {
              pie: {
                  startAngle: -30,
                  dataLabels: {
                      enabled: false
                  },
                  center: ['50%', '50%'],
                  size: '100%',
                  showInLegend: false,
                  states: {
                          hover: {
                              enabled: false
                      }
                  }
              }
          },
      title: {
        text: '<span class="number">'+_data+'</span>'+'<span class="percent">%</span>',
        align: 'center',
        verticalAlign: 'middle'
      },
      series: [{
        type: 'pie',
        name: '',
        innerSize: '80%',
        data: [
          ['占쎄쑴猿�', 100], {
            name: _label,
            y: _data,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]

    })
}
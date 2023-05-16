import React from 'react'
import ReactApexcharts from '../@core/components/react-apexcharts'
const Donut = () => {
    var options = {
      "chart": {
          "animations": {
              "enabled": false
          },
          "background": "#fff",
          "dropShadow": {
              "enabled": true,
              "left": 7,
              "color": "#B1B1B1"
          },
          "foreColor": "#373D3F",
          "fontFamily": "Roboto",
          "height": 240,
          "id": "qHh5t",
          "toolbar": {
              "show": false
          },
          "type": "donut",
          "width": 300
      },
      "plotOptions": {
          "bar": {
              "borderRadius": 10
          },
          "radialBar": {
              "hollow": {
                  "background": "#fff"
              },
              "dataLabels": {
                  "name": {},
                  "value": {},
                  "total": {}
              }
          },
          "pie": {
              "donut": {
                  "size": "73%",
                  "background": "#FFFFFF",
                  "labels": {
                      "show": true,
                      "name": {
                          "fontSize": 28
                      },
                      "value": {
                          "fontSize": 35,
                          "fontWeight": 600
                      },
                      "total": {
                          "show": true,
                          "fontSize": 23,
                          "fontWeight": 500
                      }
                  }
              }
          }
      },
      "dataLabels": {
          "enabled": false,
          "style": {
              "fontWeight": 700
          }
      },
      "fill": {
          "opacity": 1,
          "gradient": {
              "shade": "light",
              "type": "vertical",
              "gradientToColors": [
                  "#E7E7E7"
              ],
              "opacityFrom": 0.5,
              "colorStops": [
                  {
                      "opacity": 0.6,
                      "offset": 77,
                      "color": "#6CFED2"
                  },
                  {
                      "opacity": 1,
                      "offset": 97,
                      "color": "#86EBBA"
                  }
              ]
          }
      },
      "grid": {
          "padding": {
              "right": 0,
              "bottom": 12,
              "left": 10
          }
      },
      "labels": [
          "A",
          "B",
          "C",
          "D"
      ],
      "legend": {
          "show": false,
          "position": "top",
          "fontSize": 14,
          "offsetX": -100,
          "offsetY": -91,
          "markers": {
              "width": 11,
              "height": 10,
              "strokeWidth": 6,
              "radius": 14
          },
          "itemMargin": {
              "vertical": 0
          }
      },
      "series": [
          10,
          10,
          10,
          10
      ],
      "stroke": {
          "show": false,
          "lineCap": "round",
          "width": 1,
          "colors": [
              "#fff"
          ],
          "dashArray": 5
      },
      "tooltip": {
          "fillSeriesColor": true,
          "theme": "dark"
      },
      "xaxis": {
          "labels": {
              "trim": true,
              "style": {}
          },
          "title": {
              "style": {
                  "fontWeight": 700
              }
          }
      },
      "yaxis": {
          "labels": {
              "style": {}
          },
          "title": {
              "style": {
                  "fontWeight": 700
              }
          }
      },
      "_chartInstances": [
          {
              "id": "7rrnf",
              "chart": {
                  "opts": {
                      "series": [
                          11,
                          24,
                          32,
                          13,
                          32
                      ],
                      "annotations": {
                          "position": "front",
                          "yaxis": [],
                          "xaxis": [],
                          "points": []
                      },
                      "chart": {
                          "type": "donut",
                          "background": "",
                          "foreColor": "#333",
                          "offsetX": 0,
                          "offsetY": 0,
                          "toolbar": {
                              "show": false
                          },
                          "animations": {
                              "enabled": false
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 2,
                              "left": 2,
                              "blur": 4,
                              "color": "#000",
                              "opacity": 0.35
                          },
                          "fontFamily": "Roboto",
                          "height": 250,
                          "width": 300,
                          "id": "7rrnf"
                      },
                      "plotOptions": {
                          "bar": {
                              "horizontal": false,
                              "columnWidth": "70%",
                              "barHeight": "70%",
                              "distributed": false,
                              "borderRadius": 10,
                              "colors": {
                                  "ranges": [],
                                  "backgroundBarColors": [],
                                  "backgroundBarOpacity": 1
                              },
                              "dataLabels": {
                                  "position": "top"
                              }
                          },
                          "heatmap": {
                              "radius": 2,
                              "enableShades": true,
                              "shadeIntensity": 0.5
                          },
                          "radialBar": {
                              "startAngle": 0,
                              "endAngle": 360,
                              "offsetX": 0,
                              "offsetY": 0,
                              "hollow": {
                                  "margin": 5,
                                  "size": "50%",
                                  "background": "#fff",
                                  "position": "front",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "track": {
                                  "show": true,
                                  "background": "#f2f2f2",
                                  "strokeWidth": "97%",
                                  "opacity": 1,
                                  "margin": 5,
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "dataLabels": {
                                  "show": true,
                                  "name": {
                                      "show": true,
                                      "fontSize": 16,
                                      "offsetY": 0
                                  },
                                  "value": {
                                      "show": true,
                                      "fontSize": 14,
                                      "offsetY": 16
                                  },
                                  "total": {
                                      "show": false,
                                      "label": "Total",
                                      "fontSize": 16
                                  }
                              }
                          },
                          "pie": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "dataLabels": {
                                  "offset": 0
                              },
                              "donut": {
                                  "size": "65%",
                                  "labels": {
                                      "show": false,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "offsetY": -10
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 20,
                                          "offsetY": 10
                                      },
                                      "total": {
                                          "show": false,
                                          "showAlways": false,
                                          "label": "Total",
                                          "fontSize": 16
                                      }
                                  }
                              }
                          },
                          "radar": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "polygons": {
                                  "strokeColors": "#e8e8e8",
                                  "connectorColors": "#e8e8e8",
                                  "fill": {}
                              }
                          }
                      },
                      "theme": {
                          "mode": "light",
                          "palette": "palette4"
                      },
                      "dataLabels": {
                          "enabled": true,
                          "textAnchor": "middle",
                          "offsetX": 0,
                          "offsetY": 0,
                          "style": {
                              "fontSize": 12,
                              "fontWeight": 700
                          },
                          "background": {
                              "enabled": true,
                              "foreColor": "#fff",
                              "borderRadius": 2,
                              "padding": 4,
                              "opacity": 0.9,
                              "borderWidth": 1,
                              "borderColor": "#fff"
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 1,
                              "left": 1,
                              "blur": 1,
                              "color": "#000",
                              "opacity": 0.45
                          }
                      },
                      "markers": {
                          "size": 0,
                          "strokeColors": "#fff",
                          "strokeWidth": 2,
                          "strokeOpacity": 0.9,
                          "strokeDashArray": 0,
                          "fillOpacity": 1,
                          "shape": "circle",
                          "radius": 2,
                          "offsetX": 0,
                          "offsetY": 0,
                          "hover": {}
                      },
                      "xaxis": {
                          "type": "category",
                          "offsetX": 0,
                          "offsetY": 0,
                          "position": "bottom",
                          "labels": {
                              "show": true,
                              "rotate": -45,
                              "rotateAlways": false,
                              "trim": true,
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "fontSize": 12,
                                  "fontWeight": 400
                              }
                          },
                          "axisBorder": {
                              "show": true,
                              "color": "#e0e0e0"
                          },
                          "axisTicks": {
                              "show": true,
                              "color": "#e0e0e0"
                          },
                          "title": {
                              "style": {
                                  "fontSize": 12,
                                  "fontWeight": 700
                              }
                          },
                          "crosshairs": {
                              "show": true,
                              "width": 1,
                              "position": "back",
                              "opacity": 0.9,
                              "stroke": {
                                  "color": "#b6b6b6",
                                  "width": 1
                              },
                              "fill": {
                                  "type": "solid",
                                  "color": "#B1B9C4",
                                  "gradient": {
                                      "colorFrom": "#D8E3F0",
                                      "colorTo": "#BED1E6",
                                      "opacityFrom": 0.4,
                                      "opacityTo": 0.5
                                  }
                              },
                              "dropShadow": {
                                  "enabled": false,
                                  "left": 0,
                                  "top": 0,
                                  "blur": 1,
                                  "opacity": 0.4
                              }
                          },
                          "convertedCatToNumeric": false
                      },
                      "yaxis": [
                          {
                              "show": true,
                              "showAlways": false,
                              "showForNullSeries": true,
                              "opposite": false,
                              "reversed": false,
                              "logarithmic": false,
                              "logBase": 10,
                              "forceNiceScale": false,
                              "floating": false,
                              "labels": {
                                  "show": true,
                                  "minWidth": 0,
                                  "maxWidth": 160,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "rotate": 0,
                                  "padding": 20,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  }
                              },
                              "axisBorder": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "title": {
                                  "rotate": -90,
                                  "offsetY": 0,
                                  "offsetX": 0,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetX": 0
                              },
                              "crosshairs": {
                                  "show": true,
                                  "position": "front",
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 0
                                  }
                              }
                          }
                      ],
                      "grid": {
                          "show": true,
                          "borderColor": "#e0e0e0",
                          "strokeDashArray": 0,
                          "position": "back",
                          "xaxis": {
                              "lines": {
                                  "show": false
                              }
                          },
                          "yaxis": {
                              "lines": {
                                  "show": true
                              }
                          },
                          "row": {
                              "opacity": 0.5
                          },
                          "column": {
                              "opacity": 0.5
                          },
                          "padding": {
                              "top": 0,
                              "right": 25,
                              "bottom": 0,
                              "left": 20
                          }
                      },
                      "stroke": {
                          "show": true,
                          "curve": "smooth",
                          "lineCap": "butt",
                          "width": 2,
                          "dashArray": 0
                      },
                      "fill": {
                          "type": "solid",
                          "opacity": 1,
                          "gradient": {
                              "shade": "dark",
                              "type": "horizontal",
                              "shadeIntensity": 0.5,
                              "inverseColors": true,
                              "opacityFrom": 1,
                              "opacityTo": 1,
                              "stops": [
                                  0,
                                  50,
                                  100
                              ],
                              "colorStops": []
                          },
                          "pattern": {
                              "style": "squares",
                              "width": 6,
                              "height": 6,
                              "strokeWidth": 2
                          }
                      },
                      "legend": {
                          "show": true,
                          "showForSingleSeries": false,
                          "floating": false,
                          "position": "right",
                          "horizontalAlign": "center",
                          "fontSize": 14,
                          "fontWeight": 400,
                          "offsetX": -20,
                          "offsetY": 0,
                          "labels": {
                              "useSeriesColors": false
                          },
                          "markers": {
                              "width": 12,
                              "height": 12,
                              "strokeWidth": 0,
                              "strokeColor": "#fff",
                              "radius": 12
                          },
                          "itemMargin": {
                              "horizontal": 5,
                              "vertical": 0
                          },
                          "onItemClick": {
                              "toggleDataSeries": true
                          },
                          "onItemHover": {
                              "highlightDataSeries": true
                          }
                      },
                      "labels": [
                          "A",
                          "B",
                          "C",
                          "D",
                          "E"
                      ]
                  },
                  "w": {
                      "config": {
                          "annotations": {
                              "position": "front",
                              "texts": [],
                              "images": [],
                              "shapes": []
                          },
                          "chart": {
                              "animations": {
                                  "enabled": false,
                                  "easing": "easeinout",
                                  "speed": 800,
                                  "animateGradually": {
                                      "delay": 150,
                                      "enabled": true
                                  },
                                  "dynamicAnimation": {
                                      "enabled": true,
                                      "speed": 350
                                  }
                              },
                              "background": "",
                              "locales": [
                                  {
                                      "name": "en",
                                      "options": {
                                          "months": [
                                              "January",
                                              "February",
                                              "March",
                                              "April",
                                              "May",
                                              "June",
                                              "July",
                                              "August",
                                              "September",
                                              "October",
                                              "November",
                                              "December"
                                          ],
                                          "shortMonths": [
                                              "Jan",
                                              "Feb",
                                              "Mar",
                                              "Apr",
                                              "May",
                                              "Jun",
                                              "Jul",
                                              "Aug",
                                              "Sep",
                                              "Oct",
                                              "Nov",
                                              "Dec"
                                          ],
                                          "days": [
                                              "Sunday",
                                              "Monday",
                                              "Tuesday",
                                              "Wednesday",
                                              "Thursday",
                                              "Friday",
                                              "Saturday"
                                          ],
                                          "shortDays": [
                                              "Sun",
                                              "Mon",
                                              "Tue",
                                              "Wed",
                                              "Thu",
                                              "Fri",
                                              "Sat"
                                          ],
                                          "toolbar": {
                                              "exportToSVG": "Download SVG",
                                              "exportToPNG": "Download PNG",
                                              "exportToCSV": "Download CSV",
                                              "menu": "Menu",
                                              "selection": "Selection",
                                              "selectionZoom": "Selection Zoom",
                                              "zoomIn": "Zoom In",
                                              "zoomOut": "Zoom Out",
                                              "pan": "Panning",
                                              "reset": "Reset Zoom"
                                          }
                                      }
                                  }
                              ],
                              "defaultLocale": "en",
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 2,
                                  "left": 2,
                                  "blur": 4,
                                  "color": "#000",
                                  "opacity": 0.35
                              },
                              "events": {},
                              "foreColor": "#333",
                              "fontFamily": "Roboto",
                              "height": 250,
                              "parentHeightOffset": 15,
                              "redrawOnParentResize": true,
                              "redrawOnWindowResize": true,
                              "id": "7rrnf",
                              "offsetX": 0,
                              "offsetY": 0,
                              "selection": {
                                  "enabled": false,
                                  "type": "x",
                                  "fill": {
                                      "color": "#24292e",
                                      "opacity": 0.1
                                  },
                                  "stroke": {
                                      "width": 1,
                                      "color": "#24292e",
                                      "opacity": 0.4,
                                      "dashArray": 3
                                  },
                                  "xaxis": {},
                                  "yaxis": {}
                              },
                              "sparkline": {
                                  "enabled": false
                              },
                              "brush": {
                                  "enabled": false,
                                  "autoScaleYaxis": true
                              },
                              "stacked": false,
                              "stackType": "normal",
                              "toolbar": {
                                  "show": false,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "tools": {
                                      "download": true,
                                      "selection": false,
                                      "zoom": false,
                                      "zoomin": false,
                                      "zoomout": false,
                                      "pan": false,
                                      "reset": false,
                                      "customIcons": []
                                  },
                                  "export": {
                                      "csv": {
                                          "columnDelimiter": ",",
                                          "headerCategory": "category",
                                          "headerValue": "value"
                                      },
                                      "png": {},
                                      "svg": {}
                                  },
                                  "autoSelected": "zoom"
                              },
                              "type": "donut",
                              "width": 300,
                              "zoom": {
                                  "enabled": true,
                                  "type": "x",
                                  "autoScaleYaxis": false,
                                  "zoomedArea": {
                                      "fill": {
                                          "color": "#90CAF9",
                                          "opacity": 0.4
                                      },
                                      "stroke": {
                                          "color": "#0D47A1",
                                          "opacity": 0.4,
                                          "width": 1
                                      }
                                  }
                              }
                          },
                          "plotOptions": {
                              "area": {
                                  "fillTo": "origin"
                              },
                              "bar": {
                                  "horizontal": false,
                                  "columnWidth": "70%",
                                  "barHeight": "70%",
                                  "distributed": false,
                                  "borderRadius": 10,
                                  "rangeBarOverlap": true,
                                  "rangeBarGroupRows": false,
                                  "colors": {
                                      "backgroundBarOpacity": 1,
                                      "backgroundBarRadius": 0
                                  },
                                  "dataLabels": {
                                      "position": "top",
                                      "maxItems": 100,
                                      "hideOverflowingLabels": true,
                                      "orientation": "horizontal"
                                  }
                              },
                              "bubble": {},
                              "candlestick": {
                                  "colors": {
                                      "upward": "#00B746",
                                      "downward": "#EF403C"
                                  },
                                  "wick": {
                                      "useFillColor": true
                                  }
                              },
                              "boxPlot": {
                                  "colors": {
                                      "upper": "#00E396",
                                      "lower": "#008FFB"
                                  }
                              },
                              "heatmap": {
                                  "radius": 2,
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "reverseNegativeShade": false,
                                  "distributed": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "treemap": {
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "distributed": false,
                                  "reverseNegativeShade": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "radialBar": {
                                  "inverseOrder": false,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "hollow": {
                                      "margin": 5,
                                      "size": "50%",
                                      "background": "#fff",
                                      "imageWidth": 150,
                                      "imageHeight": 150,
                                      "imageOffsetX": 0,
                                      "imageOffsetY": 0,
                                      "imageClipped": true,
                                      "position": "front",
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "track": {
                                      "show": true,
                                      "background": "#f2f2f2",
                                      "strokeWidth": "97%",
                                      "opacity": 1,
                                      "margin": 5,
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "dataLabels": {
                                      "show": true,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "fontWeight": 600,
                                          "offsetY": 0
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 14,
                                          "fontWeight": 400,
                                          "offsetY": 16
                                      },
                                      "total": {
                                          "show": false,
                                          "label": "Total",
                                          "fontSize": 16,
                                          "fontWeight": 600
                                      }
                                  }
                              },
                              "pie": {
                                  "customScale": 1,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "expandOnClick": true,
                                  "dataLabels": {
                                      "offset": 0,
                                      "minAngleToShowLabel": 10
                                  },
                                  "donut": {
                                      "size": "65%",
                                      "labels": {
                                          "show": false,
                                          "name": {
                                              "show": true,
                                              "fontSize": 16,
                                              "fontWeight": 600,
                                              "offsetY": -10
                                          },
                                          "value": {
                                              "show": true,
                                              "fontSize": 20,
                                              "fontWeight": 400,
                                              "offsetY": 10
                                          },
                                          "total": {
                                              "show": false,
                                              "showAlways": false,
                                              "label": "Total",
                                              "fontSize": 16,
                                              "fontWeight": 400
                                          }
                                      }
                                  }
                              },
                              "polarArea": {
                                  "rings": {
                                      "strokeWidth": 1,
                                      "strokeColor": "#e8e8e8"
                                  },
                                  "spokes": {
                                      "strokeWidth": 1,
                                      "connectorColors": "#e8e8e8"
                                  }
                              },
                              "radar": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "polygons": {
                                      "strokeWidth": 1,
                                      "strokeColors": "#e8e8e8",
                                      "connectorColors": "#e8e8e8",
                                      "fill": {}
                                  }
                              }
                          },
                          "dataLabels": {
                              "enabled": true,
                              "textAnchor": "middle",
                              "distributed": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "fontSize": 12,
                                  "fontWeight": 700
                              },
                              "background": {
                                  "enabled": true,
                                  "foreColor": "#fff",
                                  "borderRadius": 2,
                                  "padding": 4,
                                  "opacity": 0.9,
                                  "borderWidth": 1,
                                  "borderColor": "#fff",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 1,
                                      "left": 1,
                                      "blur": 1,
                                      "color": "#000",
                                      "opacity": 0.45
                                  }
                              },
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 1,
                                  "left": 1,
                                  "blur": 1,
                                  "color": "#000",
                                  "opacity": 0.45
                              }
                          },
                          "fill": {
                              "type": "solid",
                              "opacity": 1,
                              "gradient": {
                                  "shade": "dark",
                                  "type": "horizontal",
                                  "shadeIntensity": 0.5,
                                  "inverseColors": true,
                                  "opacityFrom": 1,
                                  "opacityTo": 1
                              },
                              "image": {
                                  "src": []
                              },
                              "pattern": {
                                  "style": "squares",
                                  "width": 6,
                                  "height": 6,
                                  "strokeWidth": 2
                              }
                          },
                          "forecastDataPoints": {
                              "count": 0,
                              "fillOpacity": 0.5,
                              "dashArray": 4
                          },
                          "grid": {
                              "show": true,
                              "borderColor": "#e0e0e0",
                              "strokeDashArray": 0,
                              "position": "back",
                              "xaxis": {
                                  "lines": {
                                      "show": false
                                  }
                              },
                              "yaxis": {
                                  "lines": {
                                      "show": true
                                  }
                              },
                              "row": {
                                  "opacity": 0.5
                              },
                              "column": {
                                  "opacity": 0.5
                              },
                              "padding": {
                                  "top": 0,
                                  "right": 25,
                                  "bottom": 0,
                                  "left": 20
                              }
                          },
                          "legend": {
                              "show": true,
                              "showForSingleSeries": false,
                              "showForNullSeries": true,
                              "showForZeroSeries": true,
                              "floating": false,
                              "position": "right",
                              "horizontalAlign": "center",
                              "inverseOrder": false,
                              "fontSize": 14,
                              "fontWeight": 400,
                              "offsetX": -20,
                              "offsetY": 0,
                              "customLegendItems": [],
                              "labels": {
                                  "useSeriesColors": false
                              },
                              "markers": {
                                  "width": 12,
                                  "height": 12,
                                  "strokeWidth": 0,
                                  "strokeColor": "#fff",
                                  "radius": 12,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "itemMargin": {
                                  "horizontal": 5,
                                  "vertical": 0
                              },
                              "onItemClick": {
                                  "toggleDataSeries": true
                              },
                              "onItemHover": {
                                  "highlightDataSeries": true
                              }
                          },
                          "markers": {
                              "discrete": [],
                              "size": 0,
                              "strokeColors": "#fff",
                              "strokeWidth": 2,
                              "strokeOpacity": 0.9,
                              "strokeDashArray": 0,
                              "fillOpacity": 1,
                              "shape": "circle",
                              "width": 8,
                              "height": 8,
                              "radius": 2,
                              "offsetX": 0,
                              "offsetY": 0,
                              "showNullDataPoints": true,
                              "hover": {
                                  "sizeOffset": 3
                              }
                          },
                          "noData": {
                              "align": "center",
                              "verticalAlign": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "fontSize": "14px"
                              }
                          },
                          "responsive": [],
                          "states": {
                              "normal": {
                                  "filter": {
                                      "type": "none",
                                      "value": 0
                                  }
                              },
                              "hover": {
                                  "filter": {
                                      "type": "lighten",
                                      "value": 0.1
                                  }
                              },
                              "active": {
                                  "allowMultipleDataPointsSelection": false,
                                  "filter": {
                                      "type": "darken",
                                      "value": 0.5
                                  }
                              }
                          },
                          "title": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 0,
                              "floating": false,
                              "style": {
                                  "fontSize": "14px",
                                  "fontWeight": 900
                              }
                          },
                          "subtitle": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 30,
                              "floating": false,
                              "style": {
                                  "fontSize": "12px",
                                  "fontWeight": 400
                              }
                          },
                          "stroke": {
                              "show": true,
                              "curve": "smooth",
                              "lineCap": "butt",
                              "width": 2,
                              "dashArray": 0
                          },
                          "tooltip": {
                              "enabled": true,
                              "shared": true,
                              "followCursor": false,
                              "intersect": false,
                              "inverseOrder": false,
                              "fillSeriesColor": true,
                              "theme": "dark",
                              "style": {
                                  "fontSize": "12px"
                              },
                              "onDatasetHover": {
                                  "highlightDataSeries": false
                              },
                              "x": {
                                  "show": true,
                                  "format": "dd MMM"
                              },
                              "y": {
                                  "title": {}
                              },
                              "z": {
                                  "title": "Size: "
                              },
                              "marker": {
                                  "show": true
                              },
                              "items": {
                                  "display": "flex"
                              },
                              "fixed": {
                                  "enabled": false,
                                  "position": "topRight",
                                  "offsetX": 0,
                                  "offsetY": 0
                              }
                          },
                          "xaxis": {
                              "type": "category",
                              "categories": [],
                              "convertedCatToNumeric": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickPlacement": "on",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": true,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "theme": {
                              "mode": "light",
                              "palette": "palette4",
                              "monochrome": {
                                  "enabled": false,
                                  "color": "#008FFB",
                                  "shadeTo": "light",
                                  "shadeIntensity": 0.65
                              }
                          }
                      },
                      "globals": {
                          "chartID": "7rrnf",
                          "cuid": "b2chr784",
                          "events": {
                              "beforeMount": [],
                              "mounted": [],
                              "updated": [],
                              "clicked": [],
                              "selection": [],
                              "dataPointSelection": [],
                              "zoomed": [],
                              "scrolled": []
                          },
                          "colors": [
                              "#4ecdc4",
                              "#c7f464",
                              "#81D4FA",
                              "#fd6a6a",
                              "#546E7A"
                          ],
                          "clientX": null,
                          "clientY": null,
                          "fill": {
                              "colors": [
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A"
                              ]
                          },
                          "stroke": {},
                          "dataLabels": {
                              "style": {}
                          },
                          "radarPolygons": {
                              "fill": {
                                  "colors": [
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none"
                                  ]
                              }
                          },
                          "markers": {
                              "size": [
                                  0,
                                  0,
                                  0,
                                  0,
                                  0,
                                  0
                              ],
                              "largestSize": 0
                          },
                          "animationEnded": true,
                          "isDirty": true,
                          "isExecCalled": false,
                          "initialConfig": {},
                          "initialSeries": [
                              11,
                              24,
                              32,
                              13,
                              32
                          ],
                          "lastXAxis": {
                              "type": "category",
                              "categories": [],
                              "convertedCatToNumeric": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickPlacement": "on",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": true,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "lastYAxis": [
                              {
                                  "show": true,
                                  "showAlways": false,
                                  "showForNullSeries": true,
                                  "opposite": false,
                                  "reversed": false,
                                  "logarithmic": false,
                                  "logBase": 10,
                                  "forceNiceScale": false,
                                  "floating": false,
                                  "labels": {
                                      "show": true,
                                      "minWidth": 0,
                                      "maxWidth": 160,
                                      "offsetX": 0,
                                      "offsetY": 0,
                                      "rotate": 0,
                                      "padding": 20,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 400,
                                          "cssClass": ""
                                      }
                                  },
                                  "axisBorder": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 1,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "axisTicks": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 6,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "title": {
                                      "rotate": -90,
                                      "offsetY": 0,
                                      "offsetX": 0,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 700,
                                          "cssClass": ""
                                      }
                                  },
                                  "tooltip": {
                                      "enabled": false,
                                      "offsetX": 0
                                  },
                                  "crosshairs": {
                                      "show": true,
                                      "position": "front",
                                      "stroke": {
                                          "color": "#b6b6b6",
                                          "width": 1,
                                          "dashArray": 0
                                      }
                                  }
                              }
                          ],
                          "columnSeries": null,
                          "labels": [
                              "A",
                              "B",
                              "C",
                              "D",
                              "E"
                          ],
                          "timescaleLabels": [],
                          "noLabelsProvided": false,
                          "allSeriesCollapsed": false,
                          "collapsedSeries": [],
                          "collapsedSeriesIndices": [],
                          "ancillaryCollapsedSeries": [],
                          "ancillaryCollapsedSeriesIndices": [],
                          "risingSeries": [],
                          "dataFormatXNumeric": false,
                          "capturedSeriesIndex": -1,
                          "capturedDataPointIndex": -1,
                          "selectedDataPoints": [],
                          "goldenPadding": 35,
                          "invalidLogScale": false,
                          "ignoreYAxisIndexes": [],
                          "yAxisSameScaleIndices": [],
                          "maxValsInArrayIndex": -1,
                          "radialSize": 106.19512195121952,
                          "zoomEnabled": true,
                          "panEnabled": false,
                          "selectionEnabled": false,
                          "yaxis": null,
                          "mousedown": false,
                          "lastClientPosition": {},
                          "yValueDecimal": 0,
                          "total": 0,
                          "SVGNS": "http://www.w3.org/2000/svg",
                          "svgWidth": 300,
                          "svgHeight": 250,
                          "noData": false,
                          "locale": {
                              "toolbar": {
                                  "exportToSVG": "Download SVG",
                                  "exportToPNG": "Download PNG",
                                  "exportToCSV": "Download CSV",
                                  "menu": "Menu",
                                  "selection": "Selection",
                                  "selectionZoom": "Selection Zoom",
                                  "zoomIn": "Zoom In",
                                  "zoomOut": "Zoom Out",
                                  "pan": "Panning",
                                  "reset": "Reset Zoom"
                              }
                          },
                          "dom": {
                              "baseEl": {
                                  "_prevClass": "7rrnf"
                              },
                              "elWrap": {},
                              "Paper": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "svg",
                                  "_defs": {
                                      "_stroke": "#000000",
                                      "_event": null,
                                      "dom": {},
                                      "node": {},
                                      "type": "defs"
                                  }
                              },
                              "elGraphical": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elAnnotations": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elLegendWrap": {},
                              "elLegendForeign": {},
                              "elGridRectMask": {},
                              "elGridRectMarkerMask": {},
                              "elForecastMask": {},
                              "elNonForecastMask": {},
                              "elGridRect": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              },
                              "elGridRectMarker": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              }
                          },
                          "memory": {
                              "methodsToExec": []
                          },
                          "shouldAnimate": true,
                          "skipLastTimelinelabel": false,
                          "skipFirstTimelinelabel": false,
                          "delayedElements": [],
                          "axisCharts": false,
                          "isDataXYZ": false,
                          "resized": true,
                          "resizeTimer": null,
                          "comboCharts": false,
                          "dataChanged": false,
                          "previousPaths": [],
                          "allSeriesHasEqualX": true,
                          "pointsArray": [],
                          "dataLabelsRects": [],
                          "lastDrawnDataLabelsIndexes": [],
                          "hasNullValues": false,
                          "easing": "<>",
                          "zoomed": false,
                          "gridWidth": 230,
                          "gridHeight": 250,
                          "rotateXLabels": false,
                          "defaultLabels": false,
                          "yLabelFormatters": [
                              null
                          ],
                          "LINE_HEIGHT_RATIO": 1.618,
                          "xAxisLabelsHeight": 0,
                          "xAxisLabelsWidth": 0,
                          "yAxisLabelsWidth": 0,
                          "scaleX": 1,
                          "scaleY": 1,
                          "translateX": 30,
                          "translateY": 0,
                          "translateYAxisX": [],
                          "yAxisWidths": [],
                          "translateXAxisY": 0,
                          "translateXAxisX": 0,
                          "tooltip": {
                              "tooltipUtil": {},
                              "tooltipLabels": {
                                  "tooltipUtil": {}
                              },
                              "tooltipPosition": {},
                              "marker": {
                                  "tooltipPosition": {}
                              },
                              "intersect": {},
                              "axesTooltip": {},
                              "showOnIntersect": false,
                              "showTooltipTitle": false,
                              "fixedTooltip": false,
                              "xaxisTooltip": null,
                              "yaxisTTEls": null,
                              "isBarShared": true,
                              "lastHoverTime": 1683548286804,
                              "xyRatios": null,
                              "isXAxisTooltipEnabled": false,
                              "yaxisTooltips": [
                                  false
                              ],
                              "allTooltipSeriesGroups": [],
                              "dataPointsDividedHeight": null,
                              "dataPointsDividedWidth": null,
                              "legendLabels": {
                                  "0": {},
                                  "1": {},
                                  "2": {},
                                  "3": {},
                                  "4": {}
                              },
                              "ttItems": [
                                  {},
                                  {},
                                  {},
                                  {},
                                  {}
                              ]
                          },
                          "series": [
                              11,
                              24,
                              32,
                              13,
                              32
                          ],
                          "seriesCandleO": [],
                          "seriesCandleH": [],
                          "seriesCandleM": [],
                          "seriesCandleL": [],
                          "seriesCandleC": [],
                          "seriesRangeStart": [],
                          "seriesRangeEnd": [],
                          "seriesRangeBar": [],
                          "seriesPercent": [
                              [
                                  9.821428571428571
                              ],
                              [
                                  21.428571428571427
                              ],
                              [
                                  28.571428571428573
                              ],
                              [
                                  11.607142857142858
                              ],
                              [
                                  28.571428571428573
                              ]
                          ],
                          "seriesGoals": [],
                          "seriesX": [],
                          "seriesZ": [],
                          "seriesNames": [
                              "A",
                              "B",
                              "C",
                              "D",
                              "E"
                          ],
                          "seriesTotals": [
                              11,
                              24,
                              32,
                              13,
                              32
                          ],
                          "seriesLog": [],
                          "seriesColors": [],
                          "stackedSeriesTotals": [],
                          "seriesXvalues": [
                              [],
                              [],
                              [],
                              [],
                              []
                          ],
                          "seriesYvalues": [
                              [],
                              [],
                              [],
                              [],
                              []
                          ],
                          "categoryLabels": [],
                          "selectionResizeTimer": null,
                          "isXNumeric": false,
                          "xaxisLabelsCount": 0,
                          "isMultiLineX": false,
                          "isMultipleYAxis": false,
                          "maxY": -1.7976931348623157e+308,
                          "minY": 5e-324,
                          "minYArr": [],
                          "maxYArr": [],
                          "maxX": -1.7976931348623157e+308,
                          "minX": 1.7976931348623157e+308,
                          "initialMaxX": -1.7976931348623157e+308,
                          "initialMinX": 1.7976931348623157e+308,
                          "maxDate": 0,
                          "minDate": 1.7976931348623157e+308,
                          "minZ": 1.7976931348623157e+308,
                          "maxZ": -1.7976931348623157e+308,
                          "minXDiff": 1.7976931348623157e+308,
                          "yAxisScale": [],
                          "xAxisScale": null,
                          "xAxisTicksPositions": [],
                          "yLabelsCoords": [],
                          "yTitleCoords": [],
                          "barPadForNumericAxis": 0,
                          "padHorizontal": 0,
                          "xRange": 0,
                          "yRange": [],
                          "zRange": 0,
                          "dataPoints": 0,
                          "xTickAmount": 0,
                          "xyCharts": false,
                          "isBarHorizontal": false,
                          "chartClass": ".apexcharts7rrnf",
                          "comboBarCount": 0
                      }
                  },
                  "publicMethods": [
                      "updateOptions",
                      "updateSeries",
                      "appendData",
                      "appendSeries",
                      "toggleSeries",
                      "showSeries",
                      "hideSeries",
                      "setLocale",
                      "resetSeries",
                      "zoomX",
                      "toggleDataPointSelection",
                      "dataURI",
                      "addXaxisAnnotation",
                      "addYaxisAnnotation",
                      "addPointAnnotation",
                      "clearAnnotations",
                      "removeAnnotation",
                      "paper",
                      "destroy"
                  ],
                  "eventList": [
                      "click",
                      "mousedown",
                      "mousemove",
                      "mouseleave",
                      "touchstart",
                      "touchmove",
                      "touchleave",
                      "mouseup",
                      "touchend"
                  ],
                  "animations": {},
                  "axes": {},
                  "core": {},
                  "config": {
                      "opts": {}
                  },
                  "data": {
                      "twoDSeries": [],
                      "threeDSeries": [],
                      "twoDSeriesX": [],
                      "seriesGoals": [],
                      "coreUtils": {},
                      "fallbackToCategory": false
                  },
                  "grid": {
                      "xaxisLabels": [
                          "A",
                          "B",
                          "C",
                          "D",
                          "E"
                      ],
                      "axesUtils": {},
                      "isRangeBar": 0
                  },
                  "graphics": {},
                  "coreUtils": {},
                  "crosshairs": {},
                  "events": {},
                  "exports": {},
                  "localization": {},
                  "options": {
                      "yAxis": {
                          "show": true,
                          "showAlways": false,
                          "showForNullSeries": true,
                          "opposite": false,
                          "reversed": false,
                          "logarithmic": false,
                          "logBase": 10,
                          "forceNiceScale": false,
                          "floating": false,
                          "labels": {
                              "show": true,
                              "minWidth": 0,
                              "maxWidth": 160,
                              "offsetX": 0,
                              "offsetY": 0,
                              "rotate": 0,
                              "padding": 20,
                              "style": {
                                  "colors": [],
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": ""
                              }
                          },
                          "axisBorder": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 1,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "axisTicks": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 6,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "title": {
                              "rotate": -90,
                              "offsetY": 0,
                              "offsetX": 0,
                              "style": {
                                  "fontSize": "11px",
                                  "fontWeight": 900,
                                  "cssClass": ""
                              }
                          },
                          "tooltip": {
                              "enabled": false,
                              "offsetX": 0
                          },
                          "crosshairs": {
                              "show": true,
                              "position": "front",
                              "stroke": {
                                  "color": "#b6b6b6",
                                  "width": 1,
                                  "dashArray": 0
                              }
                          }
                      },
                      "pointAnnotation": {
                          "x": 0,
                          "y": null,
                          "yAxisIndex": 0,
                          "seriesIndex": 0,
                          "marker": {
                              "size": 4,
                              "fillColor": "#fff",
                              "strokeWidth": 2,
                              "strokeColor": "#333",
                              "shape": "circle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "radius": 2,
                              "cssClass": ""
                          },
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          },
                          "customSVG": {
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "image": {
                              "width": 20,
                              "height": 20,
                              "offsetX": 0,
                              "offsetY": 0
                          }
                      },
                      "yAxisAnnotation": {
                          "y": 0,
                          "y2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "width": "100%",
                          "yAxisIndex": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "end",
                              "position": "right",
                              "offsetX": 0,
                              "offsetY": -3,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "xAxisAnnotation": {
                          "x": 0,
                          "x2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "orientation": "vertical",
                              "position": "top",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "text": {
                          "x": 0,
                          "y": 0,
                          "text": "",
                          "textAnchor": "start",
                          "fontSize": "13px",
                          "fontWeight": 400,
                          "appendTo": ".apexcharts-annotations",
                          "backgroundColor": "transparent",
                          "borderColor": "#c2c2c2",
                          "borderRadius": 0,
                          "borderWidth": 0,
                          "paddingLeft": 4,
                          "paddingRight": 4,
                          "paddingTop": 2,
                          "paddingBottom": 2
                      }
                  },
                  "responsive": {},
                  "series": {
                      "legendInactiveClass": "legend-mouseover-inactive"
                  },
                  "theme": {
                      "isColorFn": false,
                      "isHeatmapDistributed": false,
                      "isBarDistributed": false
                  },
                  "formatters": {
                      "tooltipKeyFormat": "dd MMM"
                  },
                  "titleSubtitle": {},
                  "legend": {
                      "isBarsDistributed": false,
                      "legendHelpers": {}
                  },
                  "toolbar": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308
                  },
                  "dimensions": {
                      "lgRect": {
                          "x": 0,
                          "y": 0,
                          "height": 0,
                          "width": 0
                      },
                      "yAxisWidth": 0,
                      "yAxisWidthLeft": 0,
                      "yAxisWidthRight": 0,
                      "xAxisHeight": 0,
                      "isSparkline": false,
                      "dimHelpers": {},
                      "dimYAxis": {},
                      "dimXAxis": {},
                      "dimGrid": {},
                      "lgWidthForSideLegends": 0,
                      "xPadRight": 0,
                      "xPadLeft": 0
                  },
                  "updateHelpers": {},
                  "zoomPanSelection": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308,
                      "dragged": false,
                      "graphics": {},
                      "eventList": [
                          "mousedown",
                          "mouseleave",
                          "mousemove",
                          "touchstart",
                          "touchmove",
                          "mouseup",
                          "touchend"
                      ],
                      "clientX": 0,
                      "clientY": 0,
                      "startX": 0,
                      "endX": 0,
                      "dragX": 0,
                      "startY": 0,
                      "endY": 0,
                      "dragY": 0,
                      "moveDirection": "none"
                  },
                  "pie": {
                      "chartType": "donut",
                      "initialAnim": false,
                      "dynamicAnim": false,
                      "animBeginArr": [
                          0,
                          0,
                          0,
                          0,
                          0,
                          0
                      ],
                      "animDur": 0,
                      "defaultSize": 230,
                      "centerY": 115,
                      "centerX": 115,
                      "fullAngle": 360,
                      "initialAngle": 0,
                      "donutSize": 69.02682926829269,
                      "maxY": 32,
                      "sliceLabels": [
                          {
                              "_stroke": "#000000",
                              "_event": null,
                              "dom": {},
                              "node": {},
                              "type": "g"
                          },
                          {
                              "_stroke": "#000000",
                              "_event": null,
                              "dom": {},
                              "node": {},
                              "type": "g"
                          },
                          {
                              "_stroke": "#000000",
                              "_event": null,
                              "dom": {},
                              "node": {},
                              "type": "g"
                          },
                          {
                              "_stroke": "#000000",
                              "_event": null,
                              "dom": {},
                              "node": {},
                              "type": "g"
                          },
                          {
                              "_stroke": "#000000",
                              "_event": null,
                              "dom": {},
                              "node": {},
                              "type": "g"
                          }
                      ],
                      "sliceSizes": [
                          106.19512195121952,
                          106.19512195121952,
                          106.19512195121952,
                          106.19512195121952,
                          106.19512195121952
                      ],
                      "prevSectorAngleArr": [],
                      "ret": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      },
                      "strokeWidth": 2
                  },
                  "rangeBar": {
                      "isHorizontal": false,
                      "strokeWidth": 2,
                      "isNullValue": false,
                      "isRangeBar": 0,
                      "xyRatios": null,
                      "yaxisIndex": 0,
                      "seriesLen": 0,
                      "barHelpers": {}
                  },
                  "annotations": {
                      "graphics": {},
                      "helpers": {},
                      "xAxisAnnotations": {},
                      "yAxisAnnotations": {},
                      "pointsAnnotations": {},
                      "xDivision": null
                  }
              }
          },
          {
              "id": "C1mik",
              "chart": {
                  "opts": {
                      "series": [
                          {
                              "name": "Area",
                              "data": [
                                  {
                                      "x": "Jan",
                                      "y": 31
                                  },
                                  {
                                      "x": "Feb",
                                      "y": 40
                                  },
                                  {
                                      "x": "Mar",
                                      "y": 28
                                  },
                                  {
                                      "x": "Apr",
                                      "y": 51
                                  },
                                  {
                                      "x": "May",
                                      "y": 42
                                  },
                                  {
                                      "x": "Jun",
                                      "y": 56
                                  },
                                  {
                                      "x": "Jul",
                                      "y": 33
                                  }
                              ]
                          }
                      ],
                      "annotations": {
                          "position": "front",
                          "yaxis": [],
                          "xaxis": [],
                          "points": []
                      },
                      "chart": {
                          "type": "area",
                          "background": "",
                          "foreColor": "#333",
                          "offsetX": 0,
                          "offsetY": 0,
                          "toolbar": {
                              "show": false
                          },
                          "animations": {
                              "enabled": false
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 2,
                              "left": 2,
                              "blur": 4,
                              "color": "#000",
                              "opacity": 0.35
                          },
                          "fontFamily": "Roboto",
                          "height": 250,
                          "width": 480,
                          "id": "C1mik"
                      },
                      "plotOptions": {
                          "bar": {
                              "horizontal": false,
                              "columnWidth": "70%",
                              "barHeight": "70%",
                              "distributed": false,
                              "borderRadius": 10,
                              "colors": {
                                  "ranges": [],
                                  "backgroundBarColors": [],
                                  "backgroundBarOpacity": 1
                              },
                              "dataLabels": {
                                  "position": "top"
                              }
                          },
                          "heatmap": {
                              "radius": 2,
                              "enableShades": true,
                              "shadeIntensity": 0.5
                          },
                          "radialBar": {
                              "startAngle": 0,
                              "endAngle": 360,
                              "offsetX": 0,
                              "offsetY": 0,
                              "hollow": {
                                  "margin": 5,
                                  "size": "50%",
                                  "background": "#fff",
                                  "position": "front",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "track": {
                                  "show": true,
                                  "background": "#f2f2f2",
                                  "strokeWidth": "97%",
                                  "opacity": 1,
                                  "margin": 5,
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "dataLabels": {
                                  "show": true,
                                  "name": {
                                      "show": true,
                                      "fontSize": 16,
                                      "offsetY": 0
                                  },
                                  "value": {
                                      "show": true,
                                      "fontSize": 14,
                                      "offsetY": 16
                                  },
                                  "total": {
                                      "show": false,
                                      "label": "Total",
                                      "fontSize": 16
                                  }
                              }
                          },
                          "pie": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "dataLabels": {
                                  "offset": 0
                              },
                              "donut": {
                                  "size": "65%",
                                  "labels": {
                                      "show": false,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "offsetY": -10
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 20,
                                          "offsetY": 10
                                      },
                                      "total": {
                                          "show": false,
                                          "showAlways": false,
                                          "label": "Total",
                                          "fontSize": 16
                                      }
                                  }
                              }
                          },
                          "radar": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "polygons": {
                                  "strokeColors": "#e8e8e8",
                                  "connectorColors": "#e8e8e8",
                                  "fill": {}
                              }
                          }
                      },
                      "theme": {
                          "mode": "light",
                          "palette": "palette4"
                      },
                      "dataLabels": {
                          "enabled": false,
                          "textAnchor": "middle",
                          "offsetX": 0,
                          "offsetY": 0,
                          "style": {
                              "fontSize": 12,
                              "fontWeight": 700
                          },
                          "background": {
                              "enabled": true,
                              "foreColor": "#fff",
                              "borderRadius": 2,
                              "padding": 4,
                              "opacity": 0.9,
                              "borderWidth": 1,
                              "borderColor": "#fff"
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 1,
                              "left": 1,
                              "blur": 1,
                              "color": "#000",
                              "opacity": 0.45
                          }
                      },
                      "markers": {
                          "size": 0,
                          "strokeColors": "#fff",
                          "strokeWidth": 2,
                          "strokeOpacity": 0.9,
                          "strokeDashArray": 0,
                          "fillOpacity": 1,
                          "shape": "circle",
                          "radius": 2,
                          "offsetX": 0,
                          "offsetY": 0,
                          "hover": {}
                      },
                      "yaxis": [
                          {
                              "show": true,
                              "showAlways": false,
                              "showForNullSeries": true,
                              "opposite": false,
                              "reversed": false,
                              "logarithmic": false,
                              "logBase": 10,
                              "forceNiceScale": false,
                              "floating": false,
                              "labels": {
                                  "show": true,
                                  "minWidth": 0,
                                  "maxWidth": 160,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "rotate": 0,
                                  "padding": 20,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  }
                              },
                              "axisBorder": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "title": {
                                  "rotate": -90,
                                  "offsetY": 0,
                                  "offsetX": 0,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetX": 0
                              },
                              "crosshairs": {
                                  "show": true,
                                  "position": "front",
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 0
                                  }
                              }
                          }
                      ],
                      "grid": {
                          "show": true,
                          "borderColor": "#e0e0e0",
                          "strokeDashArray": 0,
                          "position": "back",
                          "padding": {
                              "top": 0,
                              "right": 25,
                              "bottom": 0,
                              "left": 15
                          }
                      },
                      "stroke": {
                          "show": true,
                          "curve": "straight",
                          "lineCap": "butt",
                          "width": 4,
                          "dashArray": 0
                      },
                      "fill": {
                          "type": "solid",
                          "opacity": 0.3,
                          "gradient": {
                              "shade": "dark",
                              "type": "horizontal",
                              "shadeIntensity": 0.5,
                              "inverseColors": true,
                              "opacityFrom": 1,
                              "opacityTo": 1,
                              "stops": [
                                  0,
                                  50,
                                  100
                              ],
                              "colorStops": []
                          },
                          "pattern": {
                              "style": "squares",
                              "width": 6,
                              "height": 6,
                              "strokeWidth": 2
                          }
                      },
                      "legend": {
                          "show": true,
                          "showForSingleSeries": false,
                          "floating": false,
                          "position": "bottom",
                          "horizontalAlign": "center",
                          "fontSize": 14,
                          "fontWeight": 400,
                          "offsetX": -20,
                          "offsetY": 0,
                          "labels": {
                              "useSeriesColors": false
                          },
                          "markers": {
                              "width": 12,
                              "height": 12,
                              "strokeWidth": 0,
                              "strokeColor": "#fff",
                              "radius": 12
                          },
                          "itemMargin": {
                              "horizontal": 5,
                              "vertical": 0
                          },
                          "onItemClick": {
                              "toggleDataSeries": true
                          },
                          "onItemHover": {
                              "highlightDataSeries": true
                          }
                      }
                  },
                  "w": {
                      "config": {
                          "annotations": {
                              "position": "front",
                              "texts": [],
                              "images": [],
                              "shapes": []
                          },
                          "chart": {
                              "animations": {
                                  "enabled": false,
                                  "easing": "easeinout",
                                  "speed": 800,
                                  "animateGradually": {
                                      "delay": 150,
                                      "enabled": true
                                  },
                                  "dynamicAnimation": {
                                      "enabled": true,
                                      "speed": 350
                                  }
                              },
                              "background": "",
                              "locales": [
                                  null
                              ],
                              "defaultLocale": "en",
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 2,
                                  "left": 2,
                                  "blur": 4,
                                  "color": "#000",
                                  "opacity": 0.35
                              },
                              "events": {},
                              "foreColor": "#333",
                              "fontFamily": "Roboto",
                              "height": 250,
                              "parentHeightOffset": 15,
                              "redrawOnParentResize": true,
                              "redrawOnWindowResize": true,
                              "id": "C1mik",
                              "offsetX": 0,
                              "offsetY": 0,
                              "selection": {
                                  "enabled": false,
                                  "type": "x",
                                  "fill": {
                                      "color": "#24292e",
                                      "opacity": 0.1
                                  },
                                  "stroke": {
                                      "width": 1,
                                      "color": "#24292e",
                                      "opacity": 0.4,
                                      "dashArray": 3
                                  },
                                  "xaxis": {},
                                  "yaxis": {}
                              },
                              "sparkline": {
                                  "enabled": false
                              },
                              "brush": {
                                  "enabled": false,
                                  "autoScaleYaxis": true
                              },
                              "stacked": false,
                              "stackType": "normal",
                              "toolbar": {
                                  "show": false,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "tools": {
                                      "download": true,
                                      "selection": true,
                                      "zoom": true,
                                      "zoomin": true,
                                      "zoomout": true,
                                      "pan": true,
                                      "reset": true,
                                      "customIcons": []
                                  },
                                  "export": {
                                      "csv": {
                                          "columnDelimiter": ",",
                                          "headerCategory": "category",
                                          "headerValue": "value"
                                      },
                                      "png": {},
                                      "svg": {}
                                  },
                                  "autoSelected": "zoom"
                              },
                              "type": "area",
                              "width": 480,
                              "zoom": {
                                  "enabled": true,
                                  "type": "x",
                                  "autoScaleYaxis": false,
                                  "zoomedArea": {
                                      "fill": {
                                          "color": "#90CAF9",
                                          "opacity": 0.4
                                      },
                                      "stroke": {
                                          "color": "#0D47A1",
                                          "opacity": 0.4,
                                          "width": 1
                                      }
                                  }
                              }
                          },
                          "plotOptions": {
                              "area": {
                                  "fillTo": "origin"
                              },
                              "bar": {
                                  "horizontal": false,
                                  "columnWidth": "70%",
                                  "barHeight": "70%",
                                  "distributed": false,
                                  "borderRadius": 10,
                                  "rangeBarOverlap": true,
                                  "rangeBarGroupRows": false,
                                  "colors": {
                                      "backgroundBarOpacity": 1,
                                      "backgroundBarRadius": 0
                                  },
                                  "dataLabels": {
                                      "position": "top",
                                      "maxItems": 100,
                                      "hideOverflowingLabels": true,
                                      "orientation": "horizontal"
                                  }
                              },
                              "bubble": {},
                              "candlestick": {
                                  "colors": {
                                      "upward": "#00B746",
                                      "downward": "#EF403C"
                                  },
                                  "wick": {
                                      "useFillColor": true
                                  }
                              },
                              "boxPlot": {
                                  "colors": {
                                      "upper": "#00E396",
                                      "lower": "#008FFB"
                                  }
                              },
                              "heatmap": {
                                  "radius": 2,
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "reverseNegativeShade": false,
                                  "distributed": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "treemap": {
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "distributed": false,
                                  "reverseNegativeShade": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "radialBar": {
                                  "inverseOrder": false,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "hollow": {
                                      "margin": 5,
                                      "size": "50%",
                                      "background": "#fff",
                                      "imageWidth": 150,
                                      "imageHeight": 150,
                                      "imageOffsetX": 0,
                                      "imageOffsetY": 0,
                                      "imageClipped": true,
                                      "position": "front",
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "track": {
                                      "show": true,
                                      "background": "#f2f2f2",
                                      "strokeWidth": "97%",
                                      "opacity": 1,
                                      "margin": 5,
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "dataLabels": {
                                      "show": true,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "fontWeight": 600,
                                          "offsetY": 0
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 14,
                                          "fontWeight": 400,
                                          "offsetY": 16
                                      },
                                      "total": {
                                          "show": false,
                                          "label": "Total",
                                          "fontSize": 16,
                                          "fontWeight": 600
                                      }
                                  }
                              },
                              "pie": {
                                  "customScale": 1,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "expandOnClick": true,
                                  "dataLabels": {
                                      "offset": 0,
                                      "minAngleToShowLabel": 10
                                  },
                                  "donut": {
                                      "size": "65%",
                                      "labels": {
                                          "show": false,
                                          "name": {
                                              "show": true,
                                              "fontSize": 16,
                                              "fontWeight": 600,
                                              "offsetY": -10
                                          },
                                          "value": {
                                              "show": true,
                                              "fontSize": 20,
                                              "fontWeight": 400,
                                              "offsetY": 10
                                          },
                                          "total": {
                                              "show": false,
                                              "showAlways": false,
                                              "label": "Total",
                                              "fontSize": 16,
                                              "fontWeight": 400
                                          }
                                      }
                                  }
                              },
                              "polarArea": {
                                  "rings": {
                                      "strokeWidth": 1,
                                      "strokeColor": "#e8e8e8"
                                  },
                                  "spokes": {
                                      "strokeWidth": 1,
                                      "connectorColors": "#e8e8e8"
                                  }
                              },
                              "radar": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "polygons": {
                                      "strokeWidth": 1,
                                      "strokeColors": "#e8e8e8",
                                      "connectorColors": "#e8e8e8",
                                      "fill": {}
                                  }
                              }
                          },
                          "dataLabels": {
                              "enabled": false,
                              "textAnchor": "middle",
                              "distributed": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "fontSize": 12,
                                  "fontWeight": 700
                              },
                              "background": {
                                  "enabled": true,
                                  "foreColor": "#fff",
                                  "borderRadius": 2,
                                  "padding": 4,
                                  "opacity": 0.9,
                                  "borderWidth": 1,
                                  "borderColor": "#fff",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 1,
                                      "left": 1,
                                      "blur": 1,
                                      "color": "#000",
                                      "opacity": 0.45
                                  }
                              },
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 1,
                                  "left": 1,
                                  "blur": 1,
                                  "color": "#000",
                                  "opacity": 0.45
                              }
                          },
                          "fill": {
                              "type": "solid",
                              "opacity": 0.3,
                              "gradient": {
                                  "shade": "dark",
                                  "type": "horizontal",
                                  "shadeIntensity": 0.5,
                                  "inverseColors": true,
                                  "opacityFrom": 1,
                                  "opacityTo": 1
                              },
                              "image": {
                                  "src": []
                              },
                              "pattern": {
                                  "style": "squares",
                                  "width": 6,
                                  "height": 6,
                                  "strokeWidth": 2
                              }
                          },
                          "forecastDataPoints": {
                              "count": 0,
                              "fillOpacity": 0.5,
                              "dashArray": 4
                          },
                          "grid": {
                              "show": true,
                              "borderColor": "#e0e0e0",
                              "strokeDashArray": 0,
                              "position": "back",
                              "xaxis": {
                                  "lines": {
                                      "show": false
                                  }
                              },
                              "yaxis": {
                                  "lines": {
                                      "show": true
                                  }
                              },
                              "row": {
                                  "opacity": 0.5
                              },
                              "column": {
                                  "opacity": 0.5
                              },
                              "padding": {
                                  "top": 0,
                                  "right": 25,
                                  "bottom": 0,
                                  "left": 15
                              }
                          },
                          "labels": [],
                          "legend": {
                              "show": true,
                              "showForSingleSeries": false,
                              "showForNullSeries": true,
                              "showForZeroSeries": true,
                              "floating": false,
                              "position": "bottom",
                              "horizontalAlign": "center",
                              "inverseOrder": false,
                              "fontSize": 14,
                              "fontWeight": 400,
                              "offsetX": -20,
                              "offsetY": 0,
                              "customLegendItems": [],
                              "labels": {
                                  "useSeriesColors": false
                              },
                              "markers": {
                                  "width": 12,
                                  "height": 12,
                                  "strokeWidth": 0,
                                  "strokeColor": "#fff",
                                  "radius": 12,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "itemMargin": {
                                  "horizontal": 5,
                                  "vertical": 0
                              },
                              "onItemClick": {
                                  "toggleDataSeries": true
                              },
                              "onItemHover": {
                                  "highlightDataSeries": true
                              }
                          },
                          "markers": {
                              "discrete": [],
                              "size": 0,
                              "strokeColors": "#fff",
                              "strokeWidth": 2,
                              "strokeOpacity": 0.9,
                              "strokeDashArray": 0,
                              "fillOpacity": 1,
                              "shape": "circle",
                              "width": 8,
                              "height": 8,
                              "radius": 2,
                              "offsetX": 0,
                              "offsetY": 0,
                              "showNullDataPoints": true,
                              "hover": {
                                  "sizeOffset": 6
                              }
                          },
                          "noData": {
                              "align": "center",
                              "verticalAlign": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "fontSize": "14px"
                              }
                          },
                          "responsive": [],
                          "states": {
                              "normal": {
                                  "filter": {
                                      "type": "none",
                                      "value": 0
                                  }
                              },
                              "hover": {
                                  "filter": {
                                      "type": "lighten",
                                      "value": 0.1
                                  }
                              },
                              "active": {
                                  "allowMultipleDataPointsSelection": false,
                                  "filter": {
                                      "type": "darken",
                                      "value": 0.5
                                  }
                              }
                          },
                          "title": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 0,
                              "floating": false,
                              "style": {
                                  "fontSize": "14px",
                                  "fontWeight": 900
                              }
                          },
                          "subtitle": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 30,
                              "floating": false,
                              "style": {
                                  "fontSize": "12px",
                                  "fontWeight": 400
                              }
                          },
                          "stroke": {
                              "show": true,
                              "curve": "straight",
                              "lineCap": "butt",
                              "width": 4,
                              "dashArray": 0
                          },
                          "tooltip": {
                              "enabled": true,
                              "shared": true,
                              "followCursor": false,
                              "intersect": false,
                              "inverseOrder": false,
                              "fillSeriesColor": false,
                              "theme": "light",
                              "style": {
                                  "fontSize": "12px"
                              },
                              "onDatasetHover": {
                                  "highlightDataSeries": false
                              },
                              "x": {
                                  "show": true,
                                  "format": "dd MMM"
                              },
                              "y": {
                                  "title": {}
                              },
                              "z": {
                                  "title": "Size: "
                              },
                              "marker": {
                                  "show": true
                              },
                              "items": {
                                  "display": "flex"
                              },
                              "fixed": {
                                  "enabled": false,
                                  "position": "topRight",
                                  "offsetX": 0,
                                  "offsetY": 0
                              }
                          },
                          "xaxis": {
                              "type": "numeric",
                              "categories": [],
                              "convertedCatToNumeric": true,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickAmount": "dataPoints",
                              "tickPlacement": "on",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": true,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "theme": {
                              "mode": "light",
                              "palette": "palette4",
                              "monochrome": {
                                  "enabled": false,
                                  "color": "#008FFB",
                                  "shadeTo": "light",
                                  "shadeIntensity": 0.65
                              }
                          }
                      },
                      "globals": {
                          "chartID": "C1mik",
                          "cuid": "3l3ojeybi",
                          "events": {
                              "beforeMount": [],
                              "mounted": [],
                              "updated": [],
                              "clicked": [],
                              "selection": [],
                              "dataPointSelection": [],
                              "zoomed": [],
                              "scrolled": []
                          },
                          "colors": [
                              "#4ecdc4",
                              "#c7f464",
                              "#81D4FA",
                              "#fd6a6a",
                              "#546E7A"
                          ],
                          "clientX": null,
                          "clientY": null,
                          "fill": {
                              "colors": [
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A"
                              ]
                          },
                          "stroke": {},
                          "dataLabels": {
                              "style": {}
                          },
                          "radarPolygons": {
                              "fill": {
                                  "colors": [
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none"
                                  ]
                              }
                          },
                          "markers": {
                              "size": [
                                  0,
                                  0
                              ],
                              "largestSize": 0
                          },
                          "animationEnded": true,
                          "isDirty": true,
                          "isExecCalled": false,
                          "initialConfig": {
                              "labels": []
                          },
                          "initialSeries": [
                              {
                                  "name": "Area",
                                  "data": [
                                      {
                                          "x": "Jan",
                                          "y": 31
                                      },
                                      {
                                          "x": "Feb",
                                          "y": 40
                                      },
                                      {
                                          "x": "Mar",
                                          "y": 28
                                      },
                                      {
                                          "x": "Apr",
                                          "y": 51
                                      },
                                      {
                                          "x": "May",
                                          "y": 42
                                      },
                                      {
                                          "x": "Jun",
                                          "y": 56
                                      },
                                      {
                                          "x": "Jul",
                                          "y": 33
                                      }
                                  ]
                              }
                          ],
                          "lastXAxis": {
                              "type": "category",
                              "categories": [],
                              "convertedCatToNumeric": true,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickPlacement": "on",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": true,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "lastYAxis": [
                              {
                                  "show": true,
                                  "showAlways": false,
                                  "showForNullSeries": true,
                                  "opposite": false,
                                  "reversed": false,
                                  "logarithmic": false,
                                  "logBase": 10,
                                  "forceNiceScale": false,
                                  "floating": false,
                                  "labels": {
                                      "show": true,
                                      "minWidth": 0,
                                      "maxWidth": 160,
                                      "offsetX": 0,
                                      "offsetY": 0,
                                      "rotate": 0,
                                      "padding": 20,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 400,
                                          "cssClass": ""
                                      }
                                  },
                                  "axisBorder": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 1,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "axisTicks": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 6,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "title": {
                                      "rotate": -90,
                                      "offsetY": 0,
                                      "offsetX": 0,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 700,
                                          "cssClass": ""
                                      }
                                  },
                                  "tooltip": {
                                      "enabled": false,
                                      "offsetX": 0
                                  },
                                  "crosshairs": {
                                      "show": true,
                                      "position": "front",
                                      "stroke": {
                                          "color": "#b6b6b6",
                                          "width": 1,
                                          "dashArray": 0
                                      }
                                  }
                              }
                          ],
                          "columnSeries": null,
                          "labels": [
                              1,
                              2,
                              3,
                              4,
                              5,
                              6,
                              7
                          ],
                          "timescaleLabels": [],
                          "noLabelsProvided": true,
                          "allSeriesCollapsed": false,
                          "collapsedSeries": [],
                          "collapsedSeriesIndices": [],
                          "ancillaryCollapsedSeries": [],
                          "ancillaryCollapsedSeriesIndices": [],
                          "risingSeries": [],
                          "dataFormatXNumeric": false,
                          "capturedSeriesIndex": -1,
                          "capturedDataPointIndex": -1,
                          "selectedDataPoints": [],
                          "goldenPadding": 35,
                          "invalidLogScale": false,
                          "ignoreYAxisIndexes": [],
                          "yAxisSameScaleIndices": [],
                          "maxValsInArrayIndex": 0,
                          "radialSize": 92.00000000000001,
                          "zoomEnabled": true,
                          "panEnabled": false,
                          "selectionEnabled": false,
                          "yaxis": null,
                          "mousedown": false,
                          "lastClientPosition": {},
                          "yValueDecimal": 0,
                          "total": 0,
                          "SVGNS": "http://www.w3.org/2000/svg",
                          "svgWidth": 480,
                          "svgHeight": 250,
                          "noData": false,
                          "locale": {
                              "toolbar": {
                                  "exportToSVG": "Download SVG",
                                  "exportToPNG": "Download PNG",
                                  "exportToCSV": "Download CSV",
                                  "menu": "Menu",
                                  "selection": "Selection",
                                  "selectionZoom": "Selection Zoom",
                                  "zoomIn": "Zoom In",
                                  "zoomOut": "Zoom Out",
                                  "pan": "Panning",
                                  "reset": "Reset Zoom"
                              }
                          },
                          "dom": {
                              "baseEl": {
                                  "_prevClass": "C1mik"
                              },
                              "elWrap": {},
                              "Paper": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "svg",
                                  "_defs": {
                                      "_stroke": "#000000",
                                      "_event": null,
                                      "dom": {},
                                      "node": {},
                                      "type": "defs"
                                  }
                              },
                              "elGraphical": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elAnnotations": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elLegendWrap": {},
                              "elGridRectMask": {},
                              "elGridRectMarkerMask": {},
                              "elForecastMask": {},
                              "elNonForecastMask": {},
                              "elGridRect": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              },
                              "elGridRectMarker": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              }
                          },
                          "memory": {
                              "methodsToExec": []
                          },
                          "shouldAnimate": true,
                          "skipLastTimelinelabel": false,
                          "skipFirstTimelinelabel": false,
                          "delayedElements": [
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              },
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              },
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              },
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              }
                          ],
                          "axisCharts": true,
                          "isDataXYZ": false,
                          "resized": true,
                          "resizeTimer": null,
                          "comboCharts": false,
                          "dataChanged": false,
                          "previousPaths": [],
                          "allSeriesHasEqualX": true,
                          "pointsArray": [
                              [
                                  [
                                      0,
                                      169.125
                                  ],
                                  [
                                      70.83333333333333,
                                      123
                                  ],
                                  [
                                      141.66666666666666,
                                      184.5
                                  ],
                                  [
                                      212.5,
                                      66.625
                                  ],
                                  [
                                      283.3333333333333,
                                      112.75
                                  ],
                                  [
                                      354.16666666666663,
                                      41
                                  ],
                                  [
                                      425,
                                      158.875
                                  ]
                              ]
                          ],
                          "dataLabelsRects": [],
                          "lastDrawnDataLabelsIndexes": [],
                          "hasNullValues": false,
                          "easing": "<>",
                          "zoomed": false,
                          "gridWidth": 425,
                          "gridHeight": 205,
                          "rotateXLabels": false,
                          "defaultLabels": false,
                          "yLabelFormatters": [
                              null
                          ],
                          "LINE_HEIGHT_RATIO": 1.618,
                          "xAxisLabelsHeight": 10,
                          "xAxisLabelsWidth": 0,
                          "yAxisLabelsWidth": 0,
                          "scaleX": 1,
                          "scaleY": 1,
                          "translateX": 30,
                          "translateY": 30,
                          "translateYAxisX": [
                              -3
                          ],
                          "yAxisWidths": [],
                          "translateXAxisY": -4,
                          "translateXAxisX": 0,
                          "tooltip": {
                              "tooltipUtil": {},
                              "tooltipLabels": {
                                  "tooltipUtil": {}
                              },
                              "tooltipPosition": {},
                              "marker": {
                                  "tooltipPosition": {}
                              },
                              "intersect": {},
                              "axesTooltip": {},
                              "showOnIntersect": false,
                              "showTooltipTitle": true,
                              "fixedTooltip": false,
                              "xaxisTooltip": {},
                              "yaxisTTEls": null,
                              "isBarShared": true,
                              "lastHoverTime": 1683550968321,
                              "xyRatios": {
                                  "yRatio": [
                                      0.1951219512195122
                                  ],
                                  "invertedYRatio": 0.09411764705882353,
                                  "zRatio": null,
                                  "xRatio": 0.01411764705882353,
                                  "initialXRatio": 0.01411764705882353,
                                  "invertedXRatio": 0.02926829268292683,
                                  "baseLineInvertedY": -255,
                                  "baseLineY": [
                                      -123
                                  ],
                                  "baseLineX": 70.83333333333333
                              },
                              "isXAxisTooltipEnabled": true,
                              "yaxisTooltips": [
                                  false
                              ],
                              "allTooltipSeriesGroups": [],
                              "xaxisOffY": 206,
                              "xaxisTooltipText": {},
                              "yaxisOffX": 1,
                              "yaxisTooltip": {},
                              "yaxisTooltipText": [
                                  {}
                              ],
                              "xcrosshairsWidth": 1,
                              "ycrosshairs": {
                                  "instance": {
                                      "_stroke": "#b6b6b6",
                                      "_event": null,
                                      "dom": {},
                                      "type": "line"
                                  }
                              },
                              "ycrosshairsHidden": {
                                  "instance": {
                                      "_stroke": "#b6b6b6",
                                      "_event": null,
                                      "dom": {},
                                      "type": "line"
                                  }
                              },
                              "xAxisTicksPositions": [
                                  70.83333333333333,
                                  141.66666666666666,
                                  212.5,
                                  283.3333333333333,
                                  354.16666666666663,
                                  424.99999999999994,
                                  495.83333333333326
                              ],
                              "dataPointsDividedHeight": 29.285714285714285,
                              "dataPointsDividedWidth": 60.714285714285715,
                              "tooltipTitle": {},
                              "legendLabels": {},
                              "ttItems": [
                                  {}
                              ],
                              "seriesBound": {
                                  "x": 0,
                                  "y": 0,
                                  "width": 0,
                                  "height": 0,
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0
                              }
                          },
                          "series": [
                              [
                                  31,
                                  40,
                                  28,
                                  51,
                                  42,
                                  56,
                                  33
                              ]
                          ],
                          "seriesCandleO": [],
                          "seriesCandleH": [],
                          "seriesCandleM": [],
                          "seriesCandleL": [],
                          "seriesCandleC": [],
                          "seriesRangeStart": [],
                          "seriesRangeEnd": [],
                          "seriesRangeBar": [],
                          "seriesPercent": [
                              [
                                  100,
                                  100,
                                  100,
                                  100,
                                  100,
                                  100,
                                  100
                              ]
                          ],
                          "seriesGoals": [
                              [
                                  null,
                                  null,
                                  null,
                                  null,
                                  null,
                                  null,
                                  null
                              ]
                          ],
                          "seriesX": [
                              [
                                  1,
                                  2,
                                  3,
                                  4,
                                  5,
                                  6,
                                  7
                              ]
                          ],
                          "seriesZ": [
                              []
                          ],
                          "seriesNames": [
                              "Area"
                          ],
                          "seriesTotals": [
                              281
                          ],
                          "seriesLog": [
                              null
                          ],
                          "seriesColors": [
                              null
                          ],
                          "stackedSeriesTotals": [
                              31,
                              40,
                              28,
                              51,
                              42,
                              56,
                              33
                          ],
                          "seriesXvalues": [
                              [
                                  0,
                                  70.83333333333333,
                                  141.66666666666666,
                                  212.5,
                                  283.3333333333333,
                                  354.16666666666663,
                                  425
                              ]
                          ],
                          "seriesYvalues": [
                              [
                                  169.125,
                                  123,
                                  184.5,
                                  66.625,
                                  112.75,
                                  41,
                                  158.875
                              ]
                          ],
                          "categoryLabels": [
                              "Jan",
                              "Feb",
                              "Mar",
                              "Apr",
                              "May",
                              "Jun",
                              "Jul"
                          ],
                          "selectionResizeTimer": null,
                          "isXNumeric": true,
                          "xaxisLabelsCount": 7,
                          "isMultiLineX": false,
                          "isMultipleYAxis": false,
                          "maxY": 64,
                          "minY": 24,
                          "minYArr": [
                              24
                          ],
                          "maxYArr": [
                              64
                          ],
                          "maxX": 7,
                          "minX": 1,
                          "initialMaxX": 7,
                          "initialMinX": 1,
                          "maxDate": 0,
                          "minDate": 1.7976931348623157e+308,
                          "minZ": 1.7976931348623157e+308,
                          "maxZ": -1.7976931348623157e+308,
                          "minXDiff": 1,
                          "yAxisScale": [
                              {
                                  "result": [
                                      24,
                                      32,
                                      40,
                                      48,
                                      56,
                                      64
                                  ],
                                  "niceMin": 24,
                                  "niceMax": 64
                              }
                          ],
                          "xAxisScale": {
                              "result": [
                                  1,
                                  2,
                                  3,
                                  4,
                                  5,
                                  6,
                                  7
                              ],
                              "niceMin": 1,
                              "niceMax": 7
                          },
                          "xAxisTicksPositions": [],
                          "yLabelsCoords": [
                              {
                                  "width": 10,
                                  "index": 0
                              }
                          ],
                          "yTitleCoords": [
                              {
                                  "width": 0,
                                  "index": 0
                              }
                          ],
                          "barPadForNumericAxis": 0,
                          "padHorizontal": 0,
                          "xRange": 6,
                          "yRange": [
                              40
                          ],
                          "zRange": null,
                          "dataPoints": 7,
                          "xTickAmount": 5,
                          "xyCharts": true,
                          "isBarHorizontal": false,
                          "chartClass": ".apexchartsC1mik",
                          "comboBarCount": 0,
                          "isRangeBar": false,
                          "xAxisHeight": 10,
                          "hasNegs": true,
                          "yLogRatio": [
                              0.1951219512195122
                          ],
                          "logYRange": [
                              null
                          ]
                      }
                  },
                  "publicMethods": [
                      "updateOptions",
                      "updateSeries",
                      "appendData",
                      "appendSeries",
                      "toggleSeries",
                      "showSeries",
                      "hideSeries",
                      "setLocale",
                      "resetSeries",
                      "zoomX",
                      "toggleDataPointSelection",
                      "dataURI",
                      "addXaxisAnnotation",
                      "addYaxisAnnotation",
                      "addPointAnnotation",
                      "clearAnnotations",
                      "removeAnnotation",
                      "paper",
                      "destroy"
                  ],
                  "eventList": [
                      "click",
                      "mousedown",
                      "mousemove",
                      "mouseleave",
                      "touchstart",
                      "touchmove",
                      "touchleave",
                      "mouseup",
                      "touchend"
                  ],
                  "animations": {},
                  "axes": {},
                  "core": {},
                  "config": {
                      "opts": {}
                  },
                  "data": {
                      "twoDSeriesX": [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul"
                      ],
                      "coreUtils": {},
                      "fallbackToCategory": true,
                      "activeSeriesIndex": 0
                  },
                  "grid": {
                      "xaxisLabels": [
                          1,
                          2,
                          3,
                          4,
                          5,
                          6,
                          7
                      ],
                      "axesUtils": {},
                      "isRangeBar": 0,
                      "elg": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      },
                      "elgridLinesH": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      },
                      "elgridLinesV": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      }
                  },
                  "graphics": {},
                  "coreUtils": {},
                  "crosshairs": {},
                  "events": {},
                  "exports": {},
                  "localization": {},
                  "options": {
                      "yAxis": {
                          "show": true,
                          "showAlways": false,
                          "showForNullSeries": true,
                          "opposite": false,
                          "reversed": false,
                          "logarithmic": false,
                          "logBase": 10,
                          "forceNiceScale": false,
                          "floating": false,
                          "labels": {
                              "show": true,
                              "minWidth": 0,
                              "maxWidth": 160,
                              "offsetX": 0,
                              "offsetY": 0,
                              "rotate": 0,
                              "padding": 20,
                              "style": {
                                  "colors": [],
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": ""
                              }
                          },
                          "axisBorder": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 1,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "axisTicks": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 6,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "title": {
                              "rotate": -90,
                              "offsetY": 0,
                              "offsetX": 0,
                              "style": {
                                  "fontSize": "11px",
                                  "fontWeight": 900,
                                  "cssClass": ""
                              }
                          },
                          "tooltip": {
                              "enabled": false,
                              "offsetX": 0
                          },
                          "crosshairs": {
                              "show": true,
                              "position": "front",
                              "stroke": {
                                  "color": "#b6b6b6",
                                  "width": 1,
                                  "dashArray": 0
                              }
                          }
                      },
                      "pointAnnotation": {
                          "x": 0,
                          "y": null,
                          "yAxisIndex": 0,
                          "seriesIndex": 0,
                          "marker": {
                              "size": 4,
                              "fillColor": "#fff",
                              "strokeWidth": 2,
                              "strokeColor": "#333",
                              "shape": "circle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "radius": 2,
                              "cssClass": ""
                          },
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          },
                          "customSVG": {
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "image": {
                              "width": 20,
                              "height": 20,
                              "offsetX": 0,
                              "offsetY": 0
                          }
                      },
                      "yAxisAnnotation": {
                          "y": 0,
                          "y2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "width": "100%",
                          "yAxisIndex": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "end",
                              "position": "right",
                              "offsetX": 0,
                              "offsetY": -3,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "xAxisAnnotation": {
                          "x": 0,
                          "x2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "orientation": "vertical",
                              "position": "top",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "text": {
                          "x": 0,
                          "y": 0,
                          "text": "",
                          "textAnchor": "start",
                          "fontSize": "13px",
                          "fontWeight": 400,
                          "appendTo": ".apexcharts-annotations",
                          "backgroundColor": "transparent",
                          "borderColor": "#c2c2c2",
                          "borderRadius": 0,
                          "borderWidth": 0,
                          "paddingLeft": 4,
                          "paddingRight": 4,
                          "paddingTop": 2,
                          "paddingBottom": 2
                      }
                  },
                  "responsive": {},
                  "series": {
                      "legendInactiveClass": "legend-mouseover-inactive"
                  },
                  "theme": {
                      "isColorFn": false,
                      "isHeatmapDistributed": false,
                      "isBarDistributed": false
                  },
                  "formatters": {
                      "tooltipKeyFormat": "dd MMM"
                  },
                  "titleSubtitle": {},
                  "legend": {
                      "isBarsDistributed": false,
                      "legendHelpers": {}
                  },
                  "toolbar": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1,
                      "maxX": 7
                  },
                  "dimensions": {
                      "lgRect": {
                          "x": 0,
                          "y": 0,
                          "height": 0,
                          "width": 0
                      },
                      "yAxisWidth": 15,
                      "yAxisWidthLeft": 15,
                      "yAxisWidthRight": 0,
                      "xAxisHeight": 10,
                      "isSparkline": false,
                      "dimHelpers": {},
                      "dimYAxis": {},
                      "dimXAxis": {},
                      "dimGrid": {},
                      "lgWidthForSideLegends": 0,
                      "xPadRight": 0,
                      "xPadLeft": 0,
                      "xAxisWidth": 0
                  },
                  "updateHelpers": {},
                  "zoomPanSelection": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1,
                      "maxX": 7,
                      "dragged": false,
                      "graphics": {},
                      "eventList": [
                          "mousedown",
                          "mouseleave",
                          "mousemove",
                          "touchstart",
                          "touchmove",
                          "mouseup",
                          "touchend"
                      ],
                      "clientX": 0,
                      "clientY": 0,
                      "startX": 0,
                      "endX": 0,
                      "dragX": 0,
                      "startY": 0,
                      "endY": 0,
                      "dragY": 0,
                      "moveDirection": "none",
                      "zoomRect": {
                          "_stroke": "none",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "rect"
                      },
                      "selectionRect": {
                          "_stroke": "none",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "rect",
                          "_memory": {
                              "_draggable": {
                                  "constraint": {
                                      "minX": 0,
                                      "minY": 0,
                                      "maxX": 425,
                                      "maxY": 205
                                  },
                                  "value": true
                              }
                          }
                      }
                  },
                  "pie": {
                      "chartType": "area",
                      "initialAnim": false,
                      "dynamicAnim": false,
                      "animBeginArr": [
                          0
                      ],
                      "animDur": 0,
                      "defaultSize": 205,
                      "centerY": 102.5,
                      "centerX": 212.5,
                      "fullAngle": 360,
                      "initialAngle": 0,
                      "donutSize": 59.80000000000001,
                      "maxY": 0,
                      "sliceLabels": [],
                      "sliceSizes": [],
                      "prevSectorAngleArr": []
                  },
                  "rangeBar": {
                      "isHorizontal": false,
                      "strokeWidth": 4,
                      "isNullValue": false,
                      "isRangeBar": 0,
                      "xRatio": 0.01411764705882353,
                      "initialXRatio": 0.01411764705882353,
                      "invertedXRatio": 0.02926829268292683,
                      "invertedYRatio": 0.09411764705882353,
                      "baseLineInvertedY": -255,
                      "yaxisIndex": 0,
                      "seriesLen": 0,
                      "barHelpers": {}
                  },
                  "annotations": {
                      "graphics": {},
                      "helpers": {},
                      "xAxisAnnotations": {},
                      "yAxisAnnotations": {},
                      "pointsAnnotations": {},
                      "xDivision": 60.714285714285715
                  }
              }
          },
          {
              "id": "EYAhO",
              "chart": {
                  "opts": {
                      "series": [
                          {
                              "name": "Bar 1",
                              "data": [
                                  {
                                      "x": "Item 1",
                                      "y": 10
                                  },
                                  {
                                      "x": "Item 2",
                                      "y": 20
                                  },
                                  {
                                      "x": "Item 3",
                                      "y": 30
                                  },
                                  {
                                      "x": "Item 4",
                                      "y": 40
                                  }
                              ]
                          },
                          {
                              "name": "Bar 2",
                              "data": [
                                  {
                                      "x": "Item 1",
                                      "y": 20
                                  },
                                  {
                                      "x": "Item 2",
                                      "y": 10
                                  },
                                  {
                                      "x": "Item 3",
                                      "y": 15
                                  },
                                  {
                                      "x": "Item 4",
                                      "y": 25
                                  }
                              ]
                          }
                      ],
                      "annotations": {
                          "position": "front",
                          "yaxis": [],
                          "xaxis": [],
                          "points": []
                      },
                      "chart": {
                          "type": "bar",
                          "background": "",
                          "foreColor": "#333",
                          "offsetX": 0,
                          "offsetY": 0,
                          "toolbar": {
                              "show": false
                          },
                          "animations": {
                              "enabled": false
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 2,
                              "left": 2,
                              "blur": 4,
                              "color": "#000",
                              "opacity": 0.35
                          },
                          "fontFamily": "Roboto",
                          "height": 230,
                          "width": 400,
                          "stacked": true,
                          "id": "EYAhO"
                      },
                      "plotOptions": {
                          "bar": {
                              "horizontal": true,
                              "columnWidth": "70%",
                              "barHeight": "70%",
                              "distributed": false,
                              "borderRadius": 10,
                              "colors": {
                                  "ranges": [],
                                  "backgroundBarColors": [],
                                  "backgroundBarOpacity": 1
                              },
                              "dataLabels": {
                                  "position": "center"
                              }
                          },
                          "heatmap": {
                              "radius": 2,
                              "enableShades": true,
                              "shadeIntensity": 0.5
                          },
                          "radialBar": {
                              "startAngle": 0,
                              "endAngle": 360,
                              "offsetX": 0,
                              "offsetY": 0,
                              "hollow": {
                                  "margin": 5,
                                  "size": "50%",
                                  "background": "#fff",
                                  "position": "front",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "track": {
                                  "show": true,
                                  "background": "#f2f2f2",
                                  "strokeWidth": "97%",
                                  "opacity": 1,
                                  "margin": 5,
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "dataLabels": {
                                  "show": true,
                                  "name": {
                                      "show": true,
                                      "fontSize": 16,
                                      "offsetY": 0
                                  },
                                  "value": {
                                      "show": true,
                                      "fontSize": 14,
                                      "offsetY": 16
                                  },
                                  "total": {
                                      "show": false,
                                      "label": "Total",
                                      "fontSize": 16
                                  }
                              }
                          },
                          "pie": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "dataLabels": {
                                  "offset": 0
                              },
                              "donut": {
                                  "size": "65%",
                                  "labels": {
                                      "show": false,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "offsetY": -10
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 20,
                                          "offsetY": 10
                                      },
                                      "total": {
                                          "show": false,
                                          "showAlways": false,
                                          "label": "Total",
                                          "fontSize": 16
                                      }
                                  }
                              }
                          },
                          "radar": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "polygons": {
                                  "strokeColors": "#e8e8e8",
                                  "connectorColors": "#e8e8e8",
                                  "fill": {}
                              }
                          }
                      },
                      "theme": {
                          "mode": "light",
                          "palette": "palette4"
                      },
                      "dataLabels": {
                          "enabled": true,
                          "textAnchor": "middle",
                          "offsetX": 0,
                          "offsetY": -3,
                          "style": {
                              "fontSize": 12,
                              "fontWeight": 700,
                              "colors": [
                                  "#fff"
                              ]
                          },
                          "background": {
                              "enabled": false,
                              "foreColor": "#fff",
                              "borderRadius": 2,
                              "padding": 4,
                              "opacity": 0.9,
                              "borderWidth": 1,
                              "borderColor": "#fff"
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 1,
                              "left": 1,
                              "blur": 1,
                              "color": "#000",
                              "opacity": 0.45
                          }
                      },
                      "markers": {
                          "size": 0,
                          "strokeColors": "#fff",
                          "strokeWidth": 2,
                          "strokeOpacity": 0.9,
                          "strokeDashArray": 0,
                          "fillOpacity": 1,
                          "shape": "circle",
                          "radius": 2,
                          "offsetX": 0,
                          "offsetY": 0,
                          "hover": {}
                      },
                      "yaxis": [
                          {
                              "show": true,
                              "showAlways": false,
                              "showForNullSeries": true,
                              "opposite": false,
                              "reversed": false,
                              "logarithmic": false,
                              "logBase": 10,
                              "forceNiceScale": false,
                              "floating": false,
                              "labels": {
                                  "show": true,
                                  "minWidth": 0,
                                  "maxWidth": 160,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "rotate": 0,
                                  "padding": 20,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  }
                              },
                              "axisBorder": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "title": {
                                  "rotate": -90,
                                  "offsetY": 0,
                                  "offsetX": 0,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetX": 0
                              },
                              "crosshairs": {
                                  "show": true,
                                  "position": "front",
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 0
                                  }
                              }
                          }
                      ],
                      "stroke": {
                          "show": true,
                          "curve": "smooth",
                          "lineCap": "butt",
                          "width": 2,
                          "dashArray": 0
                      },
                      "fill": {
                          "type": "solid",
                          "opacity": 0.85,
                          "gradient": {
                              "shade": "dark",
                              "type": "horizontal",
                              "shadeIntensity": 0.5,
                              "inverseColors": true,
                              "opacityFrom": 1,
                              "opacityTo": 1,
                              "stops": [
                                  0,
                                  50,
                                  100
                              ],
                              "colorStops": []
                          },
                          "pattern": {
                              "style": "squares",
                              "width": 6,
                              "height": 6,
                              "strokeWidth": 2
                          }
                      },
                      "legend": {
                          "show": true,
                          "showForSingleSeries": false,
                          "floating": false,
                          "position": "bottom",
                          "horizontalAlign": "center",
                          "fontSize": 14,
                          "fontWeight": 400,
                          "offsetX": -20,
                          "offsetY": 0,
                          "labels": {
                              "useSeriesColors": false
                          },
                          "markers": {
                              "width": 12,
                              "height": 12,
                              "strokeWidth": 0,
                              "strokeColor": "#fff",
                              "radius": 12
                          },
                          "itemMargin": {
                              "horizontal": 5,
                              "vertical": 0
                          },
                          "onItemClick": {
                              "toggleDataSeries": true
                          },
                          "onItemHover": {
                              "highlightDataSeries": true
                          }
                      }
                  },
                  "w": {
                      "config": {
                          "annotations": {
                              "position": "front",
                              "texts": [],
                              "images": [],
                              "shapes": []
                          },
                          "chart": {
                              "animations": {
                                  "enabled": false,
                                  "easing": "swing",
                                  "speed": 800,
                                  "animateGradually": {
                                      "delay": 150,
                                      "enabled": true
                                  },
                                  "dynamicAnimation": {
                                      "enabled": true,
                                      "speed": 350
                                  }
                              },
                              "background": "",
                              "locales": [
                                  null
                              ],
                              "defaultLocale": "en",
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 2,
                                  "left": 2,
                                  "blur": 4,
                                  "color": "#000",
                                  "opacity": 0.35
                              },
                              "events": {},
                              "foreColor": "#333",
                              "fontFamily": "Roboto",
                              "height": 230,
                              "parentHeightOffset": 15,
                              "redrawOnParentResize": true,
                              "redrawOnWindowResize": true,
                              "id": "EYAhO",
                              "offsetX": 0,
                              "offsetY": 0,
                              "selection": {
                                  "enabled": false,
                                  "type": "x",
                                  "fill": {
                                      "color": "#24292e",
                                      "opacity": 0.1
                                  },
                                  "stroke": {
                                      "width": 1,
                                      "color": "#24292e",
                                      "opacity": 0.4,
                                      "dashArray": 3
                                  },
                                  "xaxis": {},
                                  "yaxis": {}
                              },
                              "sparkline": {
                                  "enabled": false
                              },
                              "brush": {
                                  "enabled": false,
                                  "autoScaleYaxis": true
                              },
                              "stacked": true,
                              "stackType": "normal",
                              "toolbar": {
                                  "show": false,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "tools": {
                                      "download": true,
                                      "selection": false,
                                      "zoom": false,
                                      "zoomin": false,
                                      "zoomout": false,
                                      "pan": false,
                                      "reset": false,
                                      "customIcons": []
                                  },
                                  "export": {
                                      "csv": {
                                          "columnDelimiter": ",",
                                          "headerCategory": "category",
                                          "headerValue": "value"
                                      },
                                      "png": {},
                                      "svg": {}
                                  },
                                  "autoSelected": "zoom"
                              },
                              "type": "bar",
                              "width": 400,
                              "zoom": {
                                  "enabled": false,
                                  "type": "x",
                                  "autoScaleYaxis": false,
                                  "zoomedArea": {
                                      "fill": {
                                          "color": "#90CAF9",
                                          "opacity": 0.4
                                      },
                                      "stroke": {
                                          "color": "#0D47A1",
                                          "opacity": 0.4,
                                          "width": 1
                                      }
                                  }
                              }
                          },
                          "plotOptions": {
                              "area": {
                                  "fillTo": "origin"
                              },
                              "bar": {
                                  "horizontal": true,
                                  "columnWidth": "70%",
                                  "barHeight": "70%",
                                  "distributed": false,
                                  "borderRadius": 10,
                                  "rangeBarOverlap": true,
                                  "rangeBarGroupRows": false,
                                  "colors": {
                                      "backgroundBarOpacity": 1,
                                      "backgroundBarRadius": 0
                                  },
                                  "dataLabels": {
                                      "position": "center",
                                      "maxItems": 100,
                                      "hideOverflowingLabels": true,
                                      "orientation": "horizontal"
                                  }
                              },
                              "bubble": {},
                              "candlestick": {
                                  "colors": {
                                      "upward": "#00B746",
                                      "downward": "#EF403C"
                                  },
                                  "wick": {
                                      "useFillColor": true
                                  }
                              },
                              "boxPlot": {
                                  "colors": {
                                      "upper": "#00E396",
                                      "lower": "#008FFB"
                                  }
                              },
                              "heatmap": {
                                  "radius": 2,
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "reverseNegativeShade": false,
                                  "distributed": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "treemap": {
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "distributed": false,
                                  "reverseNegativeShade": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "radialBar": {
                                  "inverseOrder": false,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "hollow": {
                                      "margin": 5,
                                      "size": "50%",
                                      "background": "#fff",
                                      "imageWidth": 150,
                                      "imageHeight": 150,
                                      "imageOffsetX": 0,
                                      "imageOffsetY": 0,
                                      "imageClipped": true,
                                      "position": "front",
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "track": {
                                      "show": true,
                                      "background": "#f2f2f2",
                                      "strokeWidth": "97%",
                                      "opacity": 1,
                                      "margin": 5,
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "dataLabels": {
                                      "show": true,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "fontWeight": 600,
                                          "offsetY": 0
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 14,
                                          "fontWeight": 400,
                                          "offsetY": 16
                                      },
                                      "total": {
                                          "show": false,
                                          "label": "Total",
                                          "fontSize": 16,
                                          "fontWeight": 600
                                      }
                                  }
                              },
                              "pie": {
                                  "customScale": 1,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "expandOnClick": true,
                                  "dataLabels": {
                                      "offset": 0,
                                      "minAngleToShowLabel": 10
                                  },
                                  "donut": {
                                      "size": "65%",
                                      "labels": {
                                          "show": false,
                                          "name": {
                                              "show": true,
                                              "fontSize": 16,
                                              "fontWeight": 600,
                                              "offsetY": -10
                                          },
                                          "value": {
                                              "show": true,
                                              "fontSize": 20,
                                              "fontWeight": 400,
                                              "offsetY": 10
                                          },
                                          "total": {
                                              "show": false,
                                              "showAlways": false,
                                              "label": "Total",
                                              "fontSize": 16,
                                              "fontWeight": 400
                                          }
                                      }
                                  }
                              },
                              "polarArea": {
                                  "rings": {
                                      "strokeWidth": 1,
                                      "strokeColor": "#e8e8e8"
                                  },
                                  "spokes": {
                                      "strokeWidth": 1,
                                      "connectorColors": "#e8e8e8"
                                  }
                              },
                              "radar": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "polygons": {
                                      "strokeWidth": 1,
                                      "strokeColors": "#e8e8e8",
                                      "connectorColors": "#e8e8e8",
                                      "fill": {}
                                  }
                              }
                          },
                          "dataLabels": {
                              "enabled": true,
                              "textAnchor": "middle",
                              "distributed": false,
                              "offsetX": 0,
                              "offsetY": -3,
                              "style": {
                                  "fontSize": 12,
                                  "fontWeight": 700
                              },
                              "background": {
                                  "enabled": false,
                                  "foreColor": "#fff",
                                  "borderRadius": 2,
                                  "padding": 4,
                                  "opacity": 0.9,
                                  "borderWidth": 1,
                                  "borderColor": "#fff",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 1,
                                      "left": 1,
                                      "blur": 1,
                                      "color": "#000",
                                      "opacity": 0.45
                                  }
                              },
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 1,
                                  "left": 1,
                                  "blur": 1,
                                  "color": "#000",
                                  "opacity": 0.45
                              }
                          },
                          "fill": {
                              "type": "solid",
                              "opacity": 0.85,
                              "gradient": {
                                  "shade": "dark",
                                  "type": "horizontal",
                                  "shadeIntensity": 0.5,
                                  "inverseColors": true,
                                  "opacityFrom": 1,
                                  "opacityTo": 1
                              },
                              "image": {
                                  "src": []
                              },
                              "pattern": {
                                  "style": "squares",
                                  "width": 6,
                                  "height": 6,
                                  "strokeWidth": 2
                              }
                          },
                          "forecastDataPoints": {
                              "count": 0,
                              "fillOpacity": 0.5,
                              "dashArray": 4
                          },
                          "grid": {
                              "show": true,
                              "borderColor": "#e0e0e0",
                              "strokeDashArray": 0,
                              "position": "back",
                              "xaxis": {
                                  "lines": {
                                      "show": false
                                  }
                              },
                              "yaxis": {
                                  "lines": {
                                      "show": true
                                  }
                              },
                              "row": {
                                  "opacity": 0.5
                              },
                              "column": {
                                  "opacity": 0.5
                              },
                              "padding": {
                                  "top": 0,
                                  "right": 25,
                                  "bottom": 0,
                                  "left": 15
                              }
                          },
                          "labels": [],
                          "legend": {
                              "show": true,
                              "showForSingleSeries": false,
                              "showForNullSeries": true,
                              "showForZeroSeries": true,
                              "floating": false,
                              "position": "bottom",
                              "horizontalAlign": "center",
                              "inverseOrder": false,
                              "fontSize": 14,
                              "fontWeight": 400,
                              "offsetX": -20,
                              "offsetY": 0,
                              "customLegendItems": [],
                              "labels": {
                                  "useSeriesColors": false
                              },
                              "markers": {
                                  "width": 12,
                                  "height": 12,
                                  "strokeWidth": 0,
                                  "strokeColor": "#fff",
                                  "radius": 12,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "shape": "square",
                                  "size": 8
                              },
                              "itemMargin": {
                                  "horizontal": 5,
                                  "vertical": 0
                              },
                              "onItemClick": {
                                  "toggleDataSeries": true
                              },
                              "onItemHover": {
                                  "highlightDataSeries": true
                              }
                          },
                          "markers": {
                              "discrete": [],
                              "size": 0,
                              "strokeColors": "#fff",
                              "strokeWidth": 2,
                              "strokeOpacity": 0.9,
                              "strokeDashArray": 0,
                              "fillOpacity": 1,
                              "shape": "circle",
                              "width": 8,
                              "height": 8,
                              "radius": 2,
                              "offsetX": 0,
                              "offsetY": 0,
                              "showNullDataPoints": true,
                              "hover": {
                                  "sizeOffset": 3
                              }
                          },
                          "noData": {
                              "align": "center",
                              "verticalAlign": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "fontSize": "14px"
                              }
                          },
                          "responsive": [],
                          "states": {
                              "normal": {
                                  "filter": {
                                      "type": "none",
                                      "value": 0
                                  }
                              },
                              "hover": {
                                  "filter": {
                                      "type": "lighten",
                                      "value": 0.1
                                  }
                              },
                              "active": {
                                  "allowMultipleDataPointsSelection": false,
                                  "filter": {
                                      "type": "darken",
                                      "value": 0.5
                                  }
                              }
                          },
                          "title": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 0,
                              "floating": false,
                              "style": {
                                  "fontSize": "14px",
                                  "fontWeight": 900
                              }
                          },
                          "subtitle": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 30,
                              "floating": false,
                              "style": {
                                  "fontSize": "12px",
                                  "fontWeight": 400
                              }
                          },
                          "stroke": {
                              "show": true,
                              "curve": "smooth",
                              "lineCap": "butt",
                              "width": 2,
                              "dashArray": 0
                          },
                          "tooltip": {
                              "enabled": true,
                              "shared": false,
                              "followCursor": false,
                              "intersect": true,
                              "inverseOrder": false,
                              "fillSeriesColor": false,
                              "theme": "light",
                              "style": {
                                  "fontSize": "12px"
                              },
                              "onDatasetHover": {
                                  "highlightDataSeries": false
                              },
                              "x": {
                                  "show": true,
                                  "format": "dd MMM"
                              },
                              "y": {
                                  "title": {}
                              },
                              "z": {
                                  "title": "Size: "
                              },
                              "marker": {
                                  "show": true
                              },
                              "items": {
                                  "display": "flex"
                              },
                              "fixed": {
                                  "enabled": false,
                                  "position": "topRight",
                                  "offsetX": 0,
                                  "offsetY": 0
                              }
                          },
                          "xaxis": {
                              "type": "category",
                              "categories": [],
                              "convertedCatToNumeric": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickPlacement": "between",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "theme": {
                              "mode": "light",
                              "palette": "palette4",
                              "monochrome": {
                                  "enabled": false,
                                  "color": "#008FFB",
                                  "shadeTo": "light",
                                  "shadeIntensity": 0.65
                              }
                          }
                      },
                      "globals": {
                          "chartID": "EYAhO",
                          "cuid": "1vwest3zg",
                          "events": {
                              "beforeMount": [],
                              "mounted": [],
                              "updated": [],
                              "clicked": [],
                              "selection": [],
                              "dataPointSelection": [],
                              "zoomed": [],
                              "scrolled": []
                          },
                          "colors": [
                              "#4ecdc4",
                              "#c7f464",
                              "#81D4FA",
                              "#fd6a6a",
                              "#546E7A"
                          ],
                          "clientX": 1670,
                          "clientY": 69,
                          "fill": {
                              "colors": [
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A"
                              ]
                          },
                          "stroke": {},
                          "dataLabels": {
                              "style": {
                                  "colors": [
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff"
                                  ]
                              }
                          },
                          "radarPolygons": {
                              "fill": {
                                  "colors": [
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none"
                                  ]
                              }
                          },
                          "markers": {
                              "size": [
                                  0,
                                  0,
                                  0
                              ],
                              "largestSize": 0
                          },
                          "animationEnded": true,
                          "isDirty": true,
                          "isExecCalled": false,
                          "initialConfig": {},
                          "initialSeries": [
                              {
                                  "name": "Bar 1",
                                  "data": [
                                      {
                                          "x": "Item 1",
                                          "y": 10
                                      },
                                      {
                                          "x": "Item 2",
                                          "y": 20
                                      },
                                      {
                                          "x": "Item 3",
                                          "y": 30
                                      },
                                      {
                                          "x": "Item 4",
                                          "y": 40
                                      }
                                  ]
                              },
                              {
                                  "name": "Bar 2",
                                  "data": [
                                      {
                                          "x": "Item 1",
                                          "y": 20
                                      },
                                      {
                                          "x": "Item 2",
                                          "y": 10
                                      },
                                      {
                                          "x": "Item 3",
                                          "y": 15
                                      },
                                      {
                                          "x": "Item 4",
                                          "y": 25
                                      }
                                  ]
                              }
                          ],
                          "lastXAxis": {
                              "type": "category",
                              "categories": [],
                              "convertedCatToNumeric": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickPlacement": "between",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "lastYAxis": [
                              {
                                  "show": true,
                                  "showAlways": false,
                                  "showForNullSeries": true,
                                  "opposite": false,
                                  "reversed": false,
                                  "logarithmic": false,
                                  "logBase": 10,
                                  "forceNiceScale": false,
                                  "floating": false,
                                  "labels": {
                                      "show": true,
                                      "minWidth": 0,
                                      "maxWidth": 160,
                                      "offsetX": 0,
                                      "offsetY": 0,
                                      "rotate": 0,
                                      "padding": 20,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 400,
                                          "cssClass": ""
                                      }
                                  },
                                  "axisBorder": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 1,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "axisTicks": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 6,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "title": {
                                      "rotate": -90,
                                      "offsetY": 0,
                                      "offsetX": 0,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 700,
                                          "cssClass": ""
                                      }
                                  },
                                  "tooltip": {
                                      "enabled": false,
                                      "offsetX": 0
                                  },
                                  "crosshairs": {
                                      "show": true,
                                      "position": "front",
                                      "stroke": {
                                          "color": "#b6b6b6",
                                          "width": 1,
                                          "dashArray": 0
                                      }
                                  }
                              }
                          ],
                          "columnSeries": null,
                          "labels": [
                              "Item 1",
                              "Item 2",
                              "Item 3",
                              "Item 4"
                          ],
                          "timescaleLabels": [],
                          "noLabelsProvided": false,
                          "allSeriesCollapsed": false,
                          "collapsedSeries": [],
                          "collapsedSeriesIndices": [],
                          "ancillaryCollapsedSeries": [],
                          "ancillaryCollapsedSeriesIndices": [],
                          "risingSeries": [],
                          "dataFormatXNumeric": false,
                          "capturedSeriesIndex": -1,
                          "capturedDataPointIndex": -1,
                          "selectedDataPoints": [],
                          "goldenPadding": 35,
                          "invalidLogScale": false,
                          "ignoreYAxisIndexes": [],
                          "yAxisSameScaleIndices": [],
                          "maxValsInArrayIndex": 0,
                          "radialSize": 84.2439024390244,
                          "zoomEnabled": false,
                          "panEnabled": false,
                          "selectionEnabled": false,
                          "yaxis": null,
                          "mousedown": false,
                          "lastClientPosition": {},
                          "yValueDecimal": 0,
                          "total": 0,
                          "SVGNS": "http://www.w3.org/2000/svg",
                          "svgWidth": 400,
                          "svgHeight": 230,
                          "noData": false,
                          "locale": {
                              "toolbar": {
                                  "exportToSVG": "Download SVG",
                                  "exportToPNG": "Download PNG",
                                  "exportToCSV": "Download CSV",
                                  "menu": "Menu",
                                  "selection": "Selection",
                                  "selectionZoom": "Selection Zoom",
                                  "zoomIn": "Zoom In",
                                  "zoomOut": "Zoom Out",
                                  "pan": "Panning",
                                  "reset": "Reset Zoom"
                              }
                          },
                          "dom": {
                              "baseEl": {
                                  "_prevClass": "EYAhO"
                              },
                              "elWrap": {},
                              "Paper": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "svg",
                                  "_defs": {
                                      "_stroke": "#000000",
                                      "_event": null,
                                      "dom": {},
                                      "node": {},
                                      "type": "defs"
                                  }
                              },
                              "elGraphical": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elAnnotations": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elLegendWrap": {},
                              "elLegendForeign": {},
                              "elGridRectMask": {},
                              "elGridRectMarkerMask": {},
                              "elForecastMask": {},
                              "elNonForecastMask": {},
                              "elGridRect": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              },
                              "elGridRectMarker": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              }
                          },
                          "memory": {
                              "methodsToExec": []
                          },
                          "shouldAnimate": true,
                          "skipLastTimelinelabel": false,
                          "skipFirstTimelinelabel": false,
                          "delayedElements": [
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              },
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              },
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              }
                          ],
                          "axisCharts": true,
                          "isDataXYZ": false,
                          "resized": true,
                          "resizeTimer": null,
                          "comboCharts": false,
                          "dataChanged": false,
                          "previousPaths": [],
                          "allSeriesHasEqualX": true,
                          "pointsArray": [],
                          "dataLabelsRects": [
                              [
                                  {
                                      "x": 21.6625,
                                      "y": 17.125,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 43.224999999999994,
                                      "y": 63.375,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 64.7875,
                                      "y": 109.625,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 86.35,
                                      "y": 155.875,
                                      "width": 0,
                                      "height": 0
                                  }
                              ],
                              [
                                  {
                                      "x": 86.35,
                                      "y": 17.125,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 107.9125,
                                      "y": 63.375,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 161.81875,
                                      "y": 109.625,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 226.50625000000002,
                                      "y": 155.875,
                                      "width": 0,
                                      "height": 0
                                  }
                              ]
                          ],
                          "lastDrawnDataLabelsIndexes": [
                              [
                                  0,
                                  1,
                                  2,
                                  3,
                                  0,
                                  1,
                                  2,
                                  3
                              ],
                              [
                                  0,
                                  1,
                                  2,
                                  3,
                                  0,
                                  1,
                                  2,
                                  3
                              ]
                          ],
                          "hasNullValues": false,
                          "zoomed": false,
                          "gridWidth": 345,
                          "gridHeight": 185,
                          "rotateXLabels": false,
                          "defaultLabels": false,
                          "yLabelFormatters": [
                              null
                          ],
                          "LINE_HEIGHT_RATIO": 1.618,
                          "xAxisLabelsHeight": 10,
                          "xAxisLabelsWidth": 0,
                          "yAxisLabelsWidth": 0,
                          "scaleX": 1,
                          "scaleY": 1,
                          "translateX": 30,
                          "translateY": 30,
                          "translateYAxisX": [
                              -3
                          ],
                          "yAxisWidths": [],
                          "translateXAxisY": -8,
                          "translateXAxisX": 0,
                          "tooltip": {
                              "tooltipUtil": {},
                              "tooltipLabels": {
                                  "tooltipUtil": {}
                              },
                              "tooltipPosition": {},
                              "marker": {
                                  "tooltipPosition": {}
                              },
                              "intersect": {},
                              "axesTooltip": {},
                              "showOnIntersect": true,
                              "showTooltipTitle": true,
                              "fixedTooltip": false,
                              "xaxisTooltip": null,
                              "yaxisTTEls": null,
                              "isBarShared": false,
                              "lastHoverTime": 1683550972419,
                              "xyRatios": {
                                  "yRatio": [
                                      0.43243243243243246
                                  ],
                                  "invertedYRatio": 0.2318840579710145,
                                  "zRatio": null,
                                  "xRatio": null,
                                  "initialXRatio": null,
                                  "invertedXRatio": null,
                                  "baseLineInvertedY": 0.1,
                                  "baseLineY": [
                                      0
                                  ],
                                  "baseLineX": 0
                              },
                              "isXAxisTooltipEnabled": false,
                              "yaxisTooltips": [
                                  false
                              ],
                              "allTooltipSeriesGroups": [],
                              "xaxisOffY": 186,
                              "yaxisOffX": 1,
                              "yaxisTooltip": {},
                              "yaxisTooltipText": [
                                  {}
                              ],
                              "xcrosshairsWidth": 0,
                              "ycrosshairs": {
                                  "instance": {
                                      "_stroke": "#b6b6b6",
                                      "_event": null,
                                      "dom": {},
                                      "type": "line"
                                  }
                              },
                              "ycrosshairsHidden": {
                                  "instance": {
                                      "_stroke": "#b6b6b6",
                                      "_event": null,
                                      "dom": {},
                                      "type": "line"
                                  }
                              },
                              "xAxisTicksPositions": [
                                  86.25,
                                  172.5,
                                  258.75,
                                  345
                              ],
                              "dataPointsDividedHeight": 46.25,
                              "dataPointsDividedWidth": 86.25,
                              "tooltipTitle": {},
                              "legendLabels": {
                                  "0": {},
                                  "1": {}
                              },
                              "ttItems": [
                                  {},
                                  {}
                              ],
                              "seriesBound": {
                                  "x": 0,
                                  "y": 0,
                                  "width": 0,
                                  "height": 0,
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0
                              }
                          },
                          "series": [
                              [
                                  10,
                                  20,
                                  30,
                                  40
                              ],
                              [
                                  20,
                                  10,
                                  15,
                                  25
                              ]
                          ],
                          "seriesCandleO": [],
                          "seriesCandleH": [],
                          "seriesCandleM": [],
                          "seriesCandleL": [],
                          "seriesCandleC": [],
                          "seriesRangeStart": [],
                          "seriesRangeEnd": [],
                          "seriesRangeBar": [],
                          "seriesPercent": [
                              [
                                  33.333333333333336,
                                  66.66666666666667,
                                  66.66666666666667,
                                  61.53846153846154
                              ],
                              [
                                  66.66666666666667,
                                  33.333333333333336,
                                  33.333333333333336,
                                  38.46153846153846
                              ]
                          ],
                          "seriesGoals": [
                              [
                                  null,
                                  null,
                                  null,
                                  null
                              ],
                              [
                                  null,
                                  null,
                                  null,
                                  null
                              ]
                          ],
                          "seriesX": [
                              null,
                              [
                                  "Item 1",
                                  "Item 2",
                                  "Item 3",
                                  "Item 4"
                              ]
                          ],
                          "seriesZ": [
                              [],
                              []
                          ],
                          "seriesNames": [
                              "Bar 1",
                              "Bar 2"
                          ],
                          "seriesTotals": [
                              100,
                              70
                          ],
                          "seriesLog": [
                              null,
                              null
                          ],
                          "seriesColors": [
                              null,
                              null
                          ],
                          "stackedSeriesTotals": [
                              30,
                              30,
                              45,
                              65
                          ],
                          "seriesXvalues": [
                              [
                                  43.225,
                                  86.35,
                                  129.475,
                                  172.6
                              ],
                              [
                                  129.475,
                                  129.475,
                                  194.1625,
                                  280.4125
                              ]
                          ],
                          "seriesYvalues": [
                              [
                                  53.1875,
                                  99.4375,
                                  145.6875,
                                  191.9375
                              ],
                              [
                                  53.1875,
                                  99.4375,
                                  145.6875,
                                  191.9375
                              ]
                          ],
                          "categoryLabels": [],
                          "selectionResizeTimer": null,
                          "isXNumeric": false,
                          "xaxisLabelsCount": 0,
                          "isMultiLineX": false,
                          "isMultipleYAxis": false,
                          "maxY": 80,
                          "minY": 0,
                          "minYArr": [
                              0
                          ],
                          "maxYArr": [
                              80
                          ],
                          "maxX": -1.7976931348623157e+308,
                          "minX": 1.7976931348623157e+308,
                          "initialMaxX": -1.7976931348623157e+308,
                          "initialMinX": 1.7976931348623157e+308,
                          "maxDate": 0,
                          "minDate": 1.7976931348623157e+308,
                          "minZ": 1.7976931348623157e+308,
                          "maxZ": -1.7976931348623157e+308,
                          "minXDiff": 1.7976931348623157e+308,
                          "yAxisScale": [
                              {
                                  "result": [
                                      0,
                                      20,
                                      40,
                                      60,
                                      80
                                  ],
                                  "niceMin": 0,
                                  "niceMax": 80
                              }
                          ],
                          "xAxisScale": null,
                          "xAxisTicksPositions": [],
                          "yLabelsCoords": [
                              {
                                  "width": 0,
                                  "index": 0
                              }
                          ],
                          "yTitleCoords": [
                              {
                                  "width": 0,
                                  "index": 0
                              }
                          ],
                          "barPadForNumericAxis": 0,
                          "padHorizontal": 0,
                          "xRange": null,
                          "yRange": [
                              80
                          ],
                          "zRange": null,
                          "dataPoints": 4,
                          "xTickAmount": 4,
                          "xyCharts": true,
                          "isBarHorizontal": true,
                          "chartClass": ".apexchartsEYAhO",
                          "comboBarCount": 0,
                          "isRangeBar": false,
                          "xAxisHeight": 10,
                          "yLogRatio": [
                              0.43243243243243246
                          ],
                          "logYRange": [
                              null
                          ]
                      }
                  },
                  "publicMethods": [
                      "updateOptions",
                      "updateSeries",
                      "appendData",
                      "appendSeries",
                      "toggleSeries",
                      "showSeries",
                      "hideSeries",
                      "setLocale",
                      "resetSeries",
                      "zoomX",
                      "toggleDataPointSelection",
                      "dataURI",
                      "addXaxisAnnotation",
                      "addYaxisAnnotation",
                      "addPointAnnotation",
                      "clearAnnotations",
                      "removeAnnotation",
                      "paper",
                      "destroy"
                  ],
                  "eventList": [
                      "click",
                      "mousedown",
                      "mousemove",
                      "mouseleave",
                      "touchstart",
                      "touchmove",
                      "touchleave",
                      "mouseup",
                      "touchend"
                  ],
                  "animations": {},
                  "axes": {},
                  "core": {},
                  "config": {
                      "opts": {}
                  },
                  "data": {
                      "coreUtils": {},
                      "fallbackToCategory": true,
                      "activeSeriesIndex": 0
                  },
                  "grid": {
                      "xaxisLabels": [
                          "Item 1",
                          "Item 2",
                          "Item 3",
                          "Item 4"
                      ],
                      "axesUtils": {},
                      "isRangeBar": 0,
                      "elg": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      },
                      "elgridLinesH": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      },
                      "elgridLinesV": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      }
                  },
                  "graphics": {},
                  "coreUtils": {},
                  "crosshairs": {},
                  "events": {},
                  "exports": {},
                  "localization": {},
                  "options": {
                      "yAxis": {
                          "show": true,
                          "showAlways": false,
                          "showForNullSeries": true,
                          "opposite": false,
                          "reversed": false,
                          "logarithmic": false,
                          "logBase": 10,
                          "forceNiceScale": false,
                          "floating": false,
                          "labels": {
                              "show": true,
                              "minWidth": 0,
                              "maxWidth": 160,
                              "offsetX": 0,
                              "offsetY": 0,
                              "rotate": 0,
                              "padding": 20,
                              "style": {
                                  "colors": [],
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": ""
                              }
                          },
                          "axisBorder": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 1,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "axisTicks": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 6,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "title": {
                              "rotate": -90,
                              "offsetY": 0,
                              "offsetX": 0,
                              "style": {
                                  "fontSize": "11px",
                                  "fontWeight": 900,
                                  "cssClass": ""
                              }
                          },
                          "tooltip": {
                              "enabled": false,
                              "offsetX": 0
                          },
                          "crosshairs": {
                              "show": true,
                              "position": "front",
                              "stroke": {
                                  "color": "#b6b6b6",
                                  "width": 1,
                                  "dashArray": 0
                              }
                          }
                      },
                      "pointAnnotation": {
                          "x": 0,
                          "y": null,
                          "yAxisIndex": 0,
                          "seriesIndex": 0,
                          "marker": {
                              "size": 4,
                              "fillColor": "#fff",
                              "strokeWidth": 2,
                              "strokeColor": "#333",
                              "shape": "circle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "radius": 2,
                              "cssClass": ""
                          },
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          },
                          "customSVG": {
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "image": {
                              "width": 20,
                              "height": 20,
                              "offsetX": 0,
                              "offsetY": 0
                          }
                      },
                      "yAxisAnnotation": {
                          "y": 0,
                          "y2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "width": "100%",
                          "yAxisIndex": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "end",
                              "position": "right",
                              "offsetX": 0,
                              "offsetY": -3,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "xAxisAnnotation": {
                          "x": 0,
                          "x2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "orientation": "vertical",
                              "position": "top",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "text": {
                          "x": 0,
                          "y": 0,
                          "text": "",
                          "textAnchor": "start",
                          "fontSize": "13px",
                          "fontWeight": 400,
                          "appendTo": ".apexcharts-annotations",
                          "backgroundColor": "transparent",
                          "borderColor": "#c2c2c2",
                          "borderRadius": 0,
                          "borderWidth": 0,
                          "paddingLeft": 4,
                          "paddingRight": 4,
                          "paddingTop": 2,
                          "paddingBottom": 2
                      }
                  },
                  "responsive": {},
                  "series": {
                      "legendInactiveClass": "legend-mouseover-inactive"
                  },
                  "theme": {
                      "isColorFn": false,
                      "isHeatmapDistributed": false,
                      "isBarDistributed": false
                  },
                  "formatters": {
                      "tooltipKeyFormat": "dd MMM"
                  },
                  "titleSubtitle": {},
                  "legend": {
                      "isBarsDistributed": false,
                      "legendHelpers": {}
                  },
                  "toolbar": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308
                  },
                  "dimensions": {
                      "lgRect": {
                          "x": 0,
                          "y": 0,
                          "height": 0,
                          "width": 0
                      },
                      "yAxisWidth": 15,
                      "yAxisWidthLeft": 10,
                      "yAxisWidthRight": 0,
                      "xAxisHeight": 10,
                      "isSparkline": false,
                      "dimHelpers": {},
                      "dimYAxis": {},
                      "dimXAxis": {},
                      "dimGrid": {},
                      "lgWidthForSideLegends": 0,
                      "xPadRight": 0,
                      "xPadLeft": 0,
                      "xAxisWidth": 0
                  },
                  "updateHelpers": {},
                  "zoomPanSelection": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308,
                      "dragged": false,
                      "graphics": {},
                      "eventList": [
                          "mousedown",
                          "mouseleave",
                          "mousemove",
                          "touchstart",
                          "touchmove",
                          "mouseup",
                          "touchend"
                      ],
                      "clientX": 0,
                      "clientY": 0,
                      "startX": 0,
                      "endX": 0,
                      "dragX": 0,
                      "startY": 0,
                      "endY": 0,
                      "dragY": 0,
                      "moveDirection": "none"
                  },
                  "pie": {
                      "chartType": "bar",
                      "initialAnim": false,
                      "dynamicAnim": false,
                      "animBeginArr": [
                          0
                      ],
                      "animDur": 0,
                      "defaultSize": 185,
                      "centerY": 92.5,
                      "centerX": 172.5,
                      "fullAngle": 360,
                      "initialAngle": 0,
                      "donutSize": 54.75853658536585,
                      "maxY": 0,
                      "sliceLabels": [],
                      "sliceSizes": [],
                      "prevSectorAngleArr": []
                  },
                  "rangeBar": {
                      "isHorizontal": true,
                      "strokeWidth": 2,
                      "isNullValue": false,
                      "isRangeBar": 0,
                      "xRatio": null,
                      "initialXRatio": null,
                      "invertedXRatio": null,
                      "invertedYRatio": 0.2318840579710145,
                      "baseLineInvertedY": 0.1,
                      "yaxisIndex": 0,
                      "seriesLen": 0,
                      "barHelpers": {}
                  },
                  "annotations": {
                      "graphics": {},
                      "invertAxis": true,
                      "helpers": {},
                      "xAxisAnnotations": {
                          "invertAxis": true
                      },
                      "yAxisAnnotations": {},
                      "pointsAnnotations": {},
                      "xDivision": 86.25
                  }
              }
          },
          {
              "id": "AcHwP",
              "chart": {
                  "opts": {
                      "series": [
                          11,
                          24,
                          32,
                          13,
                          32
                      ],
                      "annotations": {
                          "position": "front",
                          "yaxis": [],
                          "xaxis": [],
                          "points": []
                      },
                      "chart": {
                          "type": "pie",
                          "background": "",
                          "foreColor": "#333",
                          "offsetX": 0,
                          "offsetY": 0,
                          "toolbar": {
                              "show": false
                          },
                          "animations": {
                              "enabled": false
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 2,
                              "left": 2,
                              "blur": 4,
                              "color": "#000",
                              "opacity": 0.35
                          },
                          "fontFamily": "Roboto",
                          "height": 250,
                          "width": 300,
                          "id": "AcHwP"
                      },
                      "plotOptions": {
                          "bar": {
                              "horizontal": false,
                              "columnWidth": "70%",
                              "barHeight": "70%",
                              "distributed": false,
                              "borderRadius": 10,
                              "colors": {
                                  "ranges": [],
                                  "backgroundBarColors": [],
                                  "backgroundBarOpacity": 1
                              },
                              "dataLabels": {
                                  "position": "top"
                              }
                          },
                          "heatmap": {
                              "radius": 2,
                              "enableShades": true,
                              "shadeIntensity": 0.5
                          },
                          "radialBar": {
                              "startAngle": 0,
                              "endAngle": 360,
                              "offsetX": 0,
                              "offsetY": 0,
                              "hollow": {
                                  "margin": 5,
                                  "size": "50%",
                                  "background": "#fff",
                                  "position": "front",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "track": {
                                  "show": true,
                                  "background": "#f2f2f2",
                                  "strokeWidth": "97%",
                                  "opacity": 1,
                                  "margin": 5,
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "dataLabels": {
                                  "show": true,
                                  "name": {
                                      "show": true,
                                      "fontSize": 16,
                                      "offsetY": 0
                                  },
                                  "value": {
                                      "show": true,
                                      "fontSize": 14,
                                      "offsetY": 16
                                  },
                                  "total": {
                                      "show": false,
                                      "label": "Total",
                                      "fontSize": 16
                                  }
                              }
                          },
                          "pie": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "dataLabels": {
                                  "offset": 0
                              },
                              "donut": {
                                  "size": "65%",
                                  "labels": {
                                      "show": false,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "offsetY": -10
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 20,
                                          "offsetY": 10
                                      },
                                      "total": {
                                          "show": false,
                                          "showAlways": false,
                                          "label": "Total",
                                          "fontSize": 16
                                      }
                                  }
                              }
                          },
                          "radar": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "polygons": {
                                  "strokeColors": "#e8e8e8",
                                  "connectorColors": "#e8e8e8",
                                  "fill": {}
                              }
                          }
                      },
                      "theme": {
                          "mode": "light",
                          "palette": "palette4"
                      },
                      "dataLabels": {
                          "enabled": true,
                          "textAnchor": "middle",
                          "offsetX": 0,
                          "offsetY": 0,
                          "style": {
                              "fontSize": 12,
                              "fontWeight": 700
                          },
                          "background": {
                              "enabled": true,
                              "foreColor": "#fff",
                              "borderRadius": 2,
                              "padding": 4,
                              "opacity": 0.9,
                              "borderWidth": 1,
                              "borderColor": "#fff"
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 1,
                              "left": 1,
                              "blur": 1,
                              "color": "#000",
                              "opacity": 0.45
                          }
                      },
                      "markers": {
                          "size": 0,
                          "strokeColors": "#fff",
                          "strokeWidth": 2,
                          "strokeOpacity": 0.9,
                          "strokeDashArray": 0,
                          "fillOpacity": 1,
                          "shape": "circle",
                          "radius": 2,
                          "offsetX": 0,
                          "offsetY": 0,
                          "hover": {}
                      },
                      "yaxis": [
                          {
                              "show": true,
                              "showAlways": false,
                              "showForNullSeries": true,
                              "opposite": false,
                              "reversed": false,
                              "logarithmic": false,
                              "logBase": 10,
                              "forceNiceScale": false,
                              "floating": false,
                              "labels": {
                                  "show": true,
                                  "minWidth": 0,
                                  "maxWidth": 160,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "rotate": 0,
                                  "padding": 20,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  }
                              },
                              "axisBorder": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "title": {
                                  "rotate": -90,
                                  "offsetY": 0,
                                  "offsetX": 0,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetX": 0
                              },
                              "crosshairs": {
                                  "show": true,
                                  "position": "front",
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 0
                                  }
                              }
                          }
                      ],
                      "stroke": {
                          "show": true,
                          "curve": "smooth",
                          "lineCap": "butt",
                          "width": 2,
                          "dashArray": 0
                      },
                      "fill": {
                          "type": "solid",
                          "opacity": 1,
                          "gradient": {
                              "shade": "dark",
                              "type": "horizontal",
                              "shadeIntensity": 0.5,
                              "inverseColors": true,
                              "opacityFrom": 1,
                              "opacityTo": 1,
                              "stops": [
                                  0,
                                  50,
                                  100
                              ],
                              "colorStops": []
                          },
                          "pattern": {
                              "style": "squares",
                              "width": 6,
                              "height": 6,
                              "strokeWidth": 2
                          }
                      },
                      "legend": {
                          "show": true,
                          "showForSingleSeries": false,
                          "floating": false,
                          "position": "right",
                          "horizontalAlign": "center",
                          "fontSize": 14,
                          "fontWeight": 400,
                          "offsetX": -20,
                          "offsetY": 0,
                          "labels": {
                              "useSeriesColors": false
                          },
                          "markers": {
                              "width": 12,
                              "height": 12,
                              "strokeWidth": 0,
                              "strokeColor": "#fff",
                              "radius": 12
                          },
                          "itemMargin": {
                              "horizontal": 5,
                              "vertical": 0
                          },
                          "onItemClick": {
                              "toggleDataSeries": true
                          },
                          "onItemHover": {
                              "highlightDataSeries": true
                          }
                      },
                      "labels": [
                          "A",
                          "B",
                          "C",
                          "D",
                          "E"
                      ]
                  },
                  "w": {
                      "config": {
                          "annotations": {
                              "position": "front",
                              "texts": [],
                              "images": [],
                              "shapes": []
                          },
                          "chart": {
                              "animations": {
                                  "enabled": false,
                                  "easing": "easeinout",
                                  "speed": 800,
                                  "animateGradually": {
                                      "delay": 150,
                                      "enabled": true
                                  },
                                  "dynamicAnimation": {
                                      "enabled": true,
                                      "speed": 350
                                  }
                              },
                              "background": "",
                              "locales": [
                                  null
                              ],
                              "defaultLocale": "en",
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 2,
                                  "left": 2,
                                  "blur": 4,
                                  "color": "#000",
                                  "opacity": 0.35
                              },
                              "events": {},
                              "foreColor": "#333",
                              "fontFamily": "Roboto",
                              "height": 250,
                              "parentHeightOffset": 15,
                              "redrawOnParentResize": true,
                              "redrawOnWindowResize": true,
                              "id": "AcHwP",
                              "offsetX": 0,
                              "offsetY": 0,
                              "selection": {
                                  "enabled": false,
                                  "type": "x",
                                  "fill": {
                                      "color": "#24292e",
                                      "opacity": 0.1
                                  },
                                  "stroke": {
                                      "width": 1,
                                      "color": "#24292e",
                                      "opacity": 0.4,
                                      "dashArray": 3
                                  },
                                  "xaxis": {},
                                  "yaxis": {}
                              },
                              "sparkline": {
                                  "enabled": false
                              },
                              "brush": {
                                  "enabled": false,
                                  "autoScaleYaxis": true
                              },
                              "stacked": false,
                              "stackType": "normal",
                              "toolbar": {
                                  "show": false,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "tools": {
                                      "download": true,
                                      "selection": false,
                                      "zoom": false,
                                      "zoomin": false,
                                      "zoomout": false,
                                      "pan": false,
                                      "reset": false,
                                      "customIcons": []
                                  },
                                  "export": {
                                      "csv": {
                                          "columnDelimiter": ",",
                                          "headerCategory": "category",
                                          "headerValue": "value"
                                      },
                                      "png": {},
                                      "svg": {}
                                  },
                                  "autoSelected": "zoom"
                              },
                              "type": "pie",
                              "width": 300,
                              "zoom": {
                                  "enabled": true,
                                  "type": "x",
                                  "autoScaleYaxis": false,
                                  "zoomedArea": {
                                      "fill": {
                                          "color": "#90CAF9",
                                          "opacity": 0.4
                                      },
                                      "stroke": {
                                          "color": "#0D47A1",
                                          "opacity": 0.4,
                                          "width": 1
                                      }
                                  }
                              }
                          },
                          "plotOptions": {
                              "area": {
                                  "fillTo": "origin"
                              },
                              "bar": {
                                  "horizontal": false,
                                  "columnWidth": "70%",
                                  "barHeight": "70%",
                                  "distributed": false,
                                  "borderRadius": 10,
                                  "rangeBarOverlap": true,
                                  "rangeBarGroupRows": false,
                                  "colors": {
                                      "backgroundBarOpacity": 1,
                                      "backgroundBarRadius": 0
                                  },
                                  "dataLabels": {
                                      "position": "top",
                                      "maxItems": 100,
                                      "hideOverflowingLabels": true,
                                      "orientation": "horizontal"
                                  }
                              },
                              "bubble": {},
                              "candlestick": {
                                  "colors": {
                                      "upward": "#00B746",
                                      "downward": "#EF403C"
                                  },
                                  "wick": {
                                      "useFillColor": true
                                  }
                              },
                              "boxPlot": {
                                  "colors": {
                                      "upper": "#00E396",
                                      "lower": "#008FFB"
                                  }
                              },
                              "heatmap": {
                                  "radius": 2,
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "reverseNegativeShade": false,
                                  "distributed": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "treemap": {
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "distributed": false,
                                  "reverseNegativeShade": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "radialBar": {
                                  "inverseOrder": false,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "hollow": {
                                      "margin": 5,
                                      "size": "50%",
                                      "background": "#fff",
                                      "imageWidth": 150,
                                      "imageHeight": 150,
                                      "imageOffsetX": 0,
                                      "imageOffsetY": 0,
                                      "imageClipped": true,
                                      "position": "front",
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "track": {
                                      "show": true,
                                      "background": "#f2f2f2",
                                      "strokeWidth": "97%",
                                      "opacity": 1,
                                      "margin": 5,
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "dataLabels": {
                                      "show": true,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "fontWeight": 600,
                                          "offsetY": 0
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 14,
                                          "fontWeight": 400,
                                          "offsetY": 16
                                      },
                                      "total": {
                                          "show": false,
                                          "label": "Total",
                                          "fontSize": 16,
                                          "fontWeight": 600
                                      }
                                  }
                              },
                              "pie": {
                                  "customScale": 1,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "expandOnClick": true,
                                  "dataLabels": {
                                      "offset": 0,
                                      "minAngleToShowLabel": 10
                                  },
                                  "donut": {
                                      "size": "65%",
                                      "labels": {
                                          "show": false,
                                          "name": {
                                              "show": true,
                                              "fontSize": 16,
                                              "fontWeight": 600,
                                              "offsetY": -10
                                          },
                                          "value": {
                                              "show": true,
                                              "fontSize": 20,
                                              "fontWeight": 400,
                                              "offsetY": 10
                                          },
                                          "total": {
                                              "show": false,
                                              "showAlways": false,
                                              "label": "Total",
                                              "fontSize": 16,
                                              "fontWeight": 400
                                          }
                                      }
                                  }
                              },
                              "polarArea": {
                                  "rings": {
                                      "strokeWidth": 1,
                                      "strokeColor": "#e8e8e8"
                                  },
                                  "spokes": {
                                      "strokeWidth": 1,
                                      "connectorColors": "#e8e8e8"
                                  }
                              },
                              "radar": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "polygons": {
                                      "strokeWidth": 1,
                                      "strokeColors": "#e8e8e8",
                                      "connectorColors": "#e8e8e8",
                                      "fill": {}
                                  }
                              }
                          },
                          "dataLabels": {
                              "enabled": true,
                              "textAnchor": "middle",
                              "distributed": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "fontSize": 12,
                                  "fontWeight": 700
                              },
                              "background": {
                                  "enabled": true,
                                  "foreColor": "#fff",
                                  "borderRadius": 2,
                                  "padding": 4,
                                  "opacity": 0.9,
                                  "borderWidth": 1,
                                  "borderColor": "#fff",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 1,
                                      "left": 1,
                                      "blur": 1,
                                      "color": "#000",
                                      "opacity": 0.45
                                  }
                              },
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 1,
                                  "left": 1,
                                  "blur": 1,
                                  "color": "#000",
                                  "opacity": 0.45
                              }
                          },
                          "fill": {
                              "type": "solid",
                              "opacity": 1,
                              "gradient": {
                                  "shade": "dark",
                                  "type": "horizontal",
                                  "shadeIntensity": 0.5,
                                  "inverseColors": true,
                                  "opacityFrom": 1,
                                  "opacityTo": 1
                              },
                              "image": {
                                  "src": []
                              },
                              "pattern": {
                                  "style": "squares",
                                  "width": 6,
                                  "height": 6,
                                  "strokeWidth": 2
                              }
                          },
                          "forecastDataPoints": {
                              "count": 0,
                              "fillOpacity": 0.5,
                              "dashArray": 4
                          },
                          "grid": {
                              "show": true,
                              "borderColor": "#e0e0e0",
                              "strokeDashArray": 0,
                              "position": "back",
                              "xaxis": {
                                  "lines": {
                                      "show": false
                                  }
                              },
                              "yaxis": {
                                  "lines": {
                                      "show": true
                                  }
                              },
                              "row": {
                                  "opacity": 0.5
                              },
                              "column": {
                                  "opacity": 0.5
                              },
                              "padding": {
                                  "top": 0,
                                  "right": 25,
                                  "bottom": 0,
                                  "left": 15
                              }
                          },
                          "legend": {
                              "show": true,
                              "showForSingleSeries": false,
                              "showForNullSeries": true,
                              "showForZeroSeries": true,
                              "floating": false,
                              "position": "right",
                              "horizontalAlign": "center",
                              "inverseOrder": false,
                              "fontSize": 14,
                              "fontWeight": 400,
                              "offsetX": -20,
                              "offsetY": 0,
                              "customLegendItems": [],
                              "labels": {
                                  "useSeriesColors": false
                              },
                              "markers": {
                                  "width": 12,
                                  "height": 12,
                                  "strokeWidth": 0,
                                  "strokeColor": "#fff",
                                  "radius": 12,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "itemMargin": {
                                  "horizontal": 5,
                                  "vertical": 0
                              },
                              "onItemClick": {
                                  "toggleDataSeries": true
                              },
                              "onItemHover": {
                                  "highlightDataSeries": true
                              }
                          },
                          "markers": {
                              "discrete": [],
                              "size": 0,
                              "strokeColors": "#fff",
                              "strokeWidth": 2,
                              "strokeOpacity": 0.9,
                              "strokeDashArray": 0,
                              "fillOpacity": 1,
                              "shape": "circle",
                              "width": 8,
                              "height": 8,
                              "radius": 2,
                              "offsetX": 0,
                              "offsetY": 0,
                              "showNullDataPoints": true,
                              "hover": {
                                  "sizeOffset": 3
                              }
                          },
                          "noData": {
                              "align": "center",
                              "verticalAlign": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "fontSize": "14px"
                              }
                          },
                          "responsive": [],
                          "states": {
                              "normal": {
                                  "filter": {
                                      "type": "none",
                                      "value": 0
                                  }
                              },
                              "hover": {
                                  "filter": {
                                      "type": "lighten",
                                      "value": 0.1
                                  }
                              },
                              "active": {
                                  "allowMultipleDataPointsSelection": false,
                                  "filter": {
                                      "type": "darken",
                                      "value": 0.5
                                  }
                              }
                          },
                          "title": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 0,
                              "floating": false,
                              "style": {
                                  "fontSize": "14px",
                                  "fontWeight": 900
                              }
                          },
                          "subtitle": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 30,
                              "floating": false,
                              "style": {
                                  "fontSize": "12px",
                                  "fontWeight": 400
                              }
                          },
                          "stroke": {
                              "show": true,
                              "curve": "smooth",
                              "lineCap": "butt",
                              "width": 2,
                              "dashArray": 0
                          },
                          "tooltip": {
                              "enabled": true,
                              "shared": true,
                              "followCursor": false,
                              "intersect": false,
                              "inverseOrder": false,
                              "fillSeriesColor": true,
                              "theme": "dark",
                              "style": {
                                  "fontSize": "12px"
                              },
                              "onDatasetHover": {
                                  "highlightDataSeries": false
                              },
                              "x": {
                                  "show": true,
                                  "format": "dd MMM"
                              },
                              "y": {
                                  "title": {}
                              },
                              "z": {
                                  "title": "Size: "
                              },
                              "marker": {
                                  "show": true
                              },
                              "items": {
                                  "display": "flex"
                              },
                              "fixed": {
                                  "enabled": false,
                                  "position": "topRight",
                                  "offsetX": 0,
                                  "offsetY": 0
                              }
                          },
                          "xaxis": {
                              "type": "category",
                              "categories": [],
                              "convertedCatToNumeric": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickPlacement": "on",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": true,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "theme": {
                              "mode": "light",
                              "palette": "palette4",
                              "monochrome": {
                                  "enabled": false,
                                  "color": "#008FFB",
                                  "shadeTo": "light",
                                  "shadeIntensity": 0.65
                              }
                          }
                      },
                      "globals": {
                          "chartID": "AcHwP",
                          "cuid": "mvqy60zvi",
                          "events": {
                              "beforeMount": [],
                              "mounted": [],
                              "updated": [],
                              "clicked": [],
                              "selection": [],
                              "dataPointSelection": [],
                              "zoomed": [],
                              "scrolled": []
                          },
                          "colors": [
                              "#4ecdc4",
                              "#c7f464",
                              "#81D4FA",
                              "#fd6a6a",
                              "#546E7A"
                          ],
                          "clientX": null,
                          "clientY": null,
                          "fill": {
                              "colors": [
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A"
                              ]
                          },
                          "stroke": {},
                          "dataLabels": {
                              "style": {}
                          },
                          "radarPolygons": {
                              "fill": {
                                  "colors": [
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none"
                                  ]
                              }
                          },
                          "markers": {
                              "size": [
                                  0,
                                  0,
                                  0,
                                  0,
                                  0,
                                  0
                              ],
                              "largestSize": 0
                          },
                          "animationEnded": true,
                          "isDirty": true,
                          "isExecCalled": false,
                          "initialConfig": {},
                          "initialSeries": [
                              11,
                              24,
                              32,
                              13,
                              32
                          ],
                          "lastXAxis": {
                              "type": "category",
                              "categories": [],
                              "convertedCatToNumeric": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickPlacement": "on",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": true,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "lastYAxis": [
                              {
                                  "show": true,
                                  "showAlways": false,
                                  "showForNullSeries": true,
                                  "opposite": false,
                                  "reversed": false,
                                  "logarithmic": false,
                                  "logBase": 10,
                                  "forceNiceScale": false,
                                  "floating": false,
                                  "labels": {
                                      "show": true,
                                      "minWidth": 0,
                                      "maxWidth": 160,
                                      "offsetX": 0,
                                      "offsetY": 0,
                                      "rotate": 0,
                                      "padding": 20,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 400,
                                          "cssClass": ""
                                      }
                                  },
                                  "axisBorder": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 1,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "axisTicks": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 6,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "title": {
                                      "rotate": -90,
                                      "offsetY": 0,
                                      "offsetX": 0,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 700,
                                          "cssClass": ""
                                      }
                                  },
                                  "tooltip": {
                                      "enabled": false,
                                      "offsetX": 0
                                  },
                                  "crosshairs": {
                                      "show": true,
                                      "position": "front",
                                      "stroke": {
                                          "color": "#b6b6b6",
                                          "width": 1,
                                          "dashArray": 0
                                      }
                                  }
                              }
                          ],
                          "columnSeries": null,
                          "labels": [
                              "A",
                              "B",
                              "C",
                              "D",
                              "E"
                          ],
                          "timescaleLabels": [],
                          "noLabelsProvided": false,
                          "allSeriesCollapsed": false,
                          "collapsedSeries": [],
                          "collapsedSeriesIndices": [],
                          "ancillaryCollapsedSeries": [],
                          "ancillaryCollapsedSeriesIndices": [],
                          "risingSeries": [],
                          "dataFormatXNumeric": false,
                          "capturedSeriesIndex": -1,
                          "capturedDataPointIndex": -1,
                          "selectedDataPoints": [],
                          "goldenPadding": 35,
                          "invalidLogScale": false,
                          "ignoreYAxisIndexes": [],
                          "yAxisSameScaleIndices": [],
                          "maxValsInArrayIndex": -1,
                          "radialSize": 108.63414634146342,
                          "zoomEnabled": true,
                          "panEnabled": false,
                          "selectionEnabled": false,
                          "yaxis": null,
                          "mousedown": false,
                          "lastClientPosition": {},
                          "yValueDecimal": 0,
                          "total": 0,
                          "SVGNS": "http://www.w3.org/2000/svg",
                          "svgWidth": 300,
                          "svgHeight": 250,
                          "noData": false,
                          "locale": {
                              "toolbar": {
                                  "exportToSVG": "Download SVG",
                                  "exportToPNG": "Download PNG",
                                  "exportToCSV": "Download CSV",
                                  "menu": "Menu",
                                  "selection": "Selection",
                                  "selectionZoom": "Selection Zoom",
                                  "zoomIn": "Zoom In",
                                  "zoomOut": "Zoom Out",
                                  "pan": "Panning",
                                  "reset": "Reset Zoom"
                              }
                          },
                          "dom": {
                              "baseEl": {
                                  "_prevClass": "AcHwP"
                              },
                              "elWrap": {},
                              "Paper": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "svg",
                                  "_defs": {
                                      "_stroke": "#000000",
                                      "_event": null,
                                      "dom": {},
                                      "node": {},
                                      "type": "defs"
                                  }
                              },
                              "elGraphical": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elAnnotations": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elLegendWrap": {},
                              "elLegendForeign": {},
                              "elGridRectMask": {},
                              "elGridRectMarkerMask": {},
                              "elForecastMask": {},
                              "elNonForecastMask": {},
                              "elGridRect": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              },
                              "elGridRectMarker": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              }
                          },
                          "memory": {
                              "methodsToExec": []
                          },
                          "shouldAnimate": true,
                          "skipLastTimelinelabel": false,
                          "skipFirstTimelinelabel": false,
                          "delayedElements": [],
                          "axisCharts": false,
                          "isDataXYZ": false,
                          "resized": true,
                          "resizeTimer": null,
                          "comboCharts": false,
                          "dataChanged": false,
                          "previousPaths": [],
                          "allSeriesHasEqualX": true,
                          "pointsArray": [],
                          "dataLabelsRects": [],
                          "lastDrawnDataLabelsIndexes": [],
                          "hasNullValues": false,
                          "easing": "<>",
                          "zoomed": false,
                          "gridWidth": 235,
                          "gridHeight": 250,
                          "rotateXLabels": false,
                          "defaultLabels": false,
                          "yLabelFormatters": [
                              null
                          ],
                          "LINE_HEIGHT_RATIO": 1.618,
                          "xAxisLabelsHeight": 0,
                          "xAxisLabelsWidth": 0,
                          "yAxisLabelsWidth": 0,
                          "scaleX": 1,
                          "scaleY": 1,
                          "translateX": 25,
                          "translateY": 0,
                          "translateYAxisX": [],
                          "yAxisWidths": [],
                          "translateXAxisY": 0,
                          "translateXAxisX": 0,
                          "tooltip": {
                              "tooltipUtil": {},
                              "tooltipLabels": {
                                  "tooltipUtil": {}
                              },
                              "tooltipPosition": {},
                              "marker": {
                                  "tooltipPosition": {}
                              },
                              "intersect": {},
                              "axesTooltip": {},
                              "showOnIntersect": false,
                              "showTooltipTitle": false,
                              "fixedTooltip": false,
                              "xaxisTooltip": null,
                              "yaxisTTEls": null,
                              "isBarShared": true,
                              "lastHoverTime": 1683550976818,
                              "xyRatios": null,
                              "isXAxisTooltipEnabled": false,
                              "yaxisTooltips": [
                                  false
                              ],
                              "allTooltipSeriesGroups": [],
                              "dataPointsDividedHeight": null,
                              "dataPointsDividedWidth": null,
                              "legendLabels": {
                                  "0": {},
                                  "1": {},
                                  "2": {},
                                  "3": {},
                                  "4": {}
                              },
                              "ttItems": [
                                  {},
                                  {},
                                  {},
                                  {},
                                  {}
                              ]
                          },
                          "series": [
                              11,
                              24,
                              32,
                              13,
                              32
                          ],
                          "seriesCandleO": [],
                          "seriesCandleH": [],
                          "seriesCandleM": [],
                          "seriesCandleL": [],
                          "seriesCandleC": [],
                          "seriesRangeStart": [],
                          "seriesRangeEnd": [],
                          "seriesRangeBar": [],
                          "seriesPercent": [
                              [
                                  9.821428571428571
                              ],
                              [
                                  21.428571428571427
                              ],
                              [
                                  28.571428571428573
                              ],
                              [
                                  11.607142857142858
                              ],
                              [
                                  28.571428571428573
                              ]
                          ],
                          "seriesGoals": [],
                          "seriesX": [],
                          "seriesZ": [],
                          "seriesNames": [
                              "A",
                              "B",
                              "C",
                              "D",
                              "E"
                          ],
                          "seriesTotals": [
                              11,
                              24,
                              32,
                              13,
                              32
                          ],
                          "seriesLog": [],
                          "seriesColors": [],
                          "stackedSeriesTotals": [],
                          "seriesXvalues": [
                              [],
                              [],
                              [],
                              [],
                              []
                          ],
                          "seriesYvalues": [
                              [],
                              [],
                              [],
                              [],
                              []
                          ],
                          "categoryLabels": [],
                          "selectionResizeTimer": null,
                          "isXNumeric": false,
                          "xaxisLabelsCount": 0,
                          "isMultiLineX": false,
                          "isMultipleYAxis": false,
                          "maxY": -1.7976931348623157e+308,
                          "minY": 5e-324,
                          "minYArr": [],
                          "maxYArr": [],
                          "maxX": -1.7976931348623157e+308,
                          "minX": 1.7976931348623157e+308,
                          "initialMaxX": -1.7976931348623157e+308,
                          "initialMinX": 1.7976931348623157e+308,
                          "maxDate": 0,
                          "minDate": 1.7976931348623157e+308,
                          "minZ": 1.7976931348623157e+308,
                          "maxZ": -1.7976931348623157e+308,
                          "minXDiff": 1.7976931348623157e+308,
                          "yAxisScale": [],
                          "xAxisScale": null,
                          "xAxisTicksPositions": [],
                          "yLabelsCoords": [],
                          "yTitleCoords": [],
                          "barPadForNumericAxis": 0,
                          "padHorizontal": 0,
                          "xRange": 0,
                          "yRange": [],
                          "zRange": 0,
                          "dataPoints": 0,
                          "xTickAmount": 0,
                          "xyCharts": false,
                          "isBarHorizontal": false,
                          "chartClass": ".apexchartsAcHwP",
                          "comboBarCount": 0
                      }
                  },
                  "publicMethods": [
                      "updateOptions",
                      "updateSeries",
                      "appendData",
                      "appendSeries",
                      "toggleSeries",
                      "showSeries",
                      "hideSeries",
                      "setLocale",
                      "resetSeries",
                      "zoomX",
                      "toggleDataPointSelection",
                      "dataURI",
                      "addXaxisAnnotation",
                      "addYaxisAnnotation",
                      "addPointAnnotation",
                      "clearAnnotations",
                      "removeAnnotation",
                      "paper",
                      "destroy"
                  ],
                  "eventList": [
                      "click",
                      "mousedown",
                      "mousemove",
                      "mouseleave",
                      "touchstart",
                      "touchmove",
                      "touchleave",
                      "mouseup",
                      "touchend"
                  ],
                  "animations": {},
                  "axes": {},
                  "core": {},
                  "config": {
                      "opts": {}
                  },
                  "data": {
                      "twoDSeries": [],
                      "threeDSeries": [],
                      "twoDSeriesX": [],
                      "seriesGoals": [],
                      "coreUtils": {},
                      "fallbackToCategory": false
                  },
                  "grid": {
                      "xaxisLabels": [
                          "A",
                          "B",
                          "C",
                          "D",
                          "E"
                      ],
                      "axesUtils": {},
                      "isRangeBar": 0
                  },
                  "graphics": {},
                  "coreUtils": {},
                  "crosshairs": {},
                  "events": {},
                  "exports": {},
                  "localization": {},
                  "options": {
                      "yAxis": {
                          "show": true,
                          "showAlways": false,
                          "showForNullSeries": true,
                          "opposite": false,
                          "reversed": false,
                          "logarithmic": false,
                          "logBase": 10,
                          "forceNiceScale": false,
                          "floating": false,
                          "labels": {
                              "show": true,
                              "minWidth": 0,
                              "maxWidth": 160,
                              "offsetX": 0,
                              "offsetY": 0,
                              "rotate": 0,
                              "padding": 20,
                              "style": {
                                  "colors": [],
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": ""
                              }
                          },
                          "axisBorder": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 1,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "axisTicks": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 6,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "title": {
                              "rotate": -90,
                              "offsetY": 0,
                              "offsetX": 0,
                              "style": {
                                  "fontSize": "11px",
                                  "fontWeight": 900,
                                  "cssClass": ""
                              }
                          },
                          "tooltip": {
                              "enabled": false,
                              "offsetX": 0
                          },
                          "crosshairs": {
                              "show": true,
                              "position": "front",
                              "stroke": {
                                  "color": "#b6b6b6",
                                  "width": 1,
                                  "dashArray": 0
                              }
                          }
                      },
                      "pointAnnotation": {
                          "x": 0,
                          "y": null,
                          "yAxisIndex": 0,
                          "seriesIndex": 0,
                          "marker": {
                              "size": 4,
                              "fillColor": "#fff",
                              "strokeWidth": 2,
                              "strokeColor": "#333",
                              "shape": "circle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "radius": 2,
                              "cssClass": ""
                          },
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          },
                          "customSVG": {
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "image": {
                              "width": 20,
                              "height": 20,
                              "offsetX": 0,
                              "offsetY": 0
                          }
                      },
                      "yAxisAnnotation": {
                          "y": 0,
                          "y2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "width": "100%",
                          "yAxisIndex": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "end",
                              "position": "right",
                              "offsetX": 0,
                              "offsetY": -3,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "xAxisAnnotation": {
                          "x": 0,
                          "x2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "orientation": "vertical",
                              "position": "top",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "text": {
                          "x": 0,
                          "y": 0,
                          "text": "",
                          "textAnchor": "start",
                          "fontSize": "13px",
                          "fontWeight": 400,
                          "appendTo": ".apexcharts-annotations",
                          "backgroundColor": "transparent",
                          "borderColor": "#c2c2c2",
                          "borderRadius": 0,
                          "borderWidth": 0,
                          "paddingLeft": 4,
                          "paddingRight": 4,
                          "paddingTop": 2,
                          "paddingBottom": 2
                      }
                  },
                  "responsive": {},
                  "series": {
                      "legendInactiveClass": "legend-mouseover-inactive"
                  },
                  "theme": {
                      "isColorFn": false,
                      "isHeatmapDistributed": false,
                      "isBarDistributed": false
                  },
                  "formatters": {
                      "tooltipKeyFormat": "dd MMM"
                  },
                  "titleSubtitle": {},
                  "legend": {
                      "isBarsDistributed": false,
                      "legendHelpers": {}
                  },
                  "toolbar": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308
                  },
                  "dimensions": {
                      "lgRect": {
                          "x": 0,
                          "y": 0,
                          "height": 0,
                          "width": 0
                      },
                      "yAxisWidth": 0,
                      "yAxisWidthLeft": 0,
                      "yAxisWidthRight": 0,
                      "xAxisHeight": 0,
                      "isSparkline": false,
                      "dimHelpers": {},
                      "dimYAxis": {},
                      "dimXAxis": {},
                      "dimGrid": {},
                      "lgWidthForSideLegends": 0,
                      "xPadRight": 0,
                      "xPadLeft": 0
                  },
                  "updateHelpers": {},
                  "zoomPanSelection": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308,
                      "dragged": false,
                      "graphics": {},
                      "eventList": [
                          "mousedown",
                          "mouseleave",
                          "mousemove",
                          "touchstart",
                          "touchmove",
                          "mouseup",
                          "touchend"
                      ],
                      "clientX": 0,
                      "clientY": 0,
                      "startX": 0,
                      "endX": 0,
                      "dragX": 0,
                      "startY": 0,
                      "endY": 0,
                      "dragY": 0,
                      "moveDirection": "none"
                  },
                  "pie": {
                      "chartType": "pie",
                      "initialAnim": false,
                      "dynamicAnim": false,
                      "animBeginArr": [
                          0,
                          0,
                          0,
                          0,
                          0,
                          0
                      ],
                      "animDur": 0,
                      "defaultSize": 235,
                      "centerY": 117.5,
                      "centerX": 117.5,
                      "fullAngle": 360,
                      "initialAngle": 0,
                      "donutSize": 70.61219512195123,
                      "maxY": 32,
                      "sliceLabels": [
                          {
                              "_stroke": "#000000",
                              "_event": null,
                              "dom": {},
                              "node": {},
                              "type": "g"
                          },
                          {
                              "_stroke": "#000000",
                              "_event": null,
                              "dom": {},
                              "node": {},
                              "type": "g"
                          },
                          {
                              "_stroke": "#000000",
                              "_event": null,
                              "dom": {},
                              "node": {},
                              "type": "g"
                          },
                          {
                              "_stroke": "#000000",
                              "_event": null,
                              "dom": {},
                              "node": {},
                              "type": "g"
                          },
                          {
                              "_stroke": "#000000",
                              "_event": null,
                              "dom": {},
                              "node": {},
                              "type": "g"
                          }
                      ],
                      "sliceSizes": [
                          108.63414634146342,
                          108.63414634146342,
                          108.63414634146342,
                          108.63414634146342,
                          108.63414634146342
                      ],
                      "prevSectorAngleArr": [],
                      "ret": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      },
                      "strokeWidth": 2
                  },
                  "rangeBar": {
                      "isHorizontal": false,
                      "strokeWidth": 2,
                      "isNullValue": false,
                      "isRangeBar": 0,
                      "xyRatios": null,
                      "yaxisIndex": 0,
                      "seriesLen": 0,
                      "barHelpers": {}
                  },
                  "annotations": {
                      "graphics": {},
                      "helpers": {},
                      "xAxisAnnotations": {},
                      "yAxisAnnotations": {},
                      "pointsAnnotations": {},
                      "xDivision": null
                  }
              }
          },
          {
              "id": "v7RDV",
              "chart": {
                  "opts": {
                      "series": [
                          {
                              "name": "Column 1",
                              "data": [
                                  {
                                      "x": "Item 1",
                                      "y": 10
                                  },
                                  {
                                      "x": "Item 2",
                                      "y": 20
                                  },
                                  {
                                      "x": "Item 3",
                                      "y": 30
                                  },
                                  {
                                      "x": "Item 4",
                                      "y": 40
                                  }
                              ]
                          },
                          {
                              "name": "Column 2",
                              "data": [
                                  {
                                      "x": "Item 1",
                                      "y": 15
                                  },
                                  {
                                      "x": "Item 2",
                                      "y": 10
                                  },
                                  {
                                      "x": "Item 3",
                                      "y": 25
                                  },
                                  {
                                      "x": "Item 4",
                                      "y": 30
                                  }
                              ]
                          }
                      ],
                      "annotations": {
                          "position": "front",
                          "yaxis": [],
                          "xaxis": [],
                          "points": []
                      },
                      "chart": {
                          "type": "bar",
                          "background": "",
                          "foreColor": "#333",
                          "offsetX": 0,
                          "offsetY": 0,
                          "toolbar": {
                              "show": false
                          },
                          "animations": {
                              "enabled": false
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 2,
                              "left": 2,
                              "blur": 4,
                              "color": "#000",
                              "opacity": 0.35
                          },
                          "fontFamily": "Roboto",
                          "height": 250,
                          "width": 400,
                          "stacked": true,
                          "stackType": "100%",
                          "id": "v7RDV"
                      },
                      "plotOptions": {
                          "bar": {
                              "horizontal": false,
                              "columnWidth": "70%",
                              "barHeight": "70%",
                              "distributed": false,
                              "borderRadius": 10,
                              "colors": {
                                  "ranges": [],
                                  "backgroundBarColors": [],
                                  "backgroundBarOpacity": 1
                              },
                              "dataLabels": {
                                  "position": "center"
                              }
                          },
                          "heatmap": {
                              "radius": 2,
                              "enableShades": true,
                              "shadeIntensity": 0.5
                          },
                          "radialBar": {
                              "startAngle": 0,
                              "endAngle": 360,
                              "offsetX": 0,
                              "offsetY": 0,
                              "hollow": {
                                  "margin": 5,
                                  "size": "50%",
                                  "background": "#fff",
                                  "position": "front",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "track": {
                                  "show": true,
                                  "background": "#f2f2f2",
                                  "strokeWidth": "97%",
                                  "opacity": 1,
                                  "margin": 5,
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "dataLabels": {
                                  "show": true,
                                  "name": {
                                      "show": true,
                                      "fontSize": 16,
                                      "offsetY": 0
                                  },
                                  "value": {
                                      "show": true,
                                      "fontSize": 14,
                                      "offsetY": 16
                                  },
                                  "total": {
                                      "show": false,
                                      "label": "Total",
                                      "fontSize": 16
                                  }
                              }
                          },
                          "pie": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "dataLabels": {
                                  "offset": 0
                              },
                              "donut": {
                                  "size": "65%",
                                  "labels": {
                                      "show": false,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "offsetY": -10
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 20,
                                          "offsetY": 10
                                      },
                                      "total": {
                                          "show": false,
                                          "showAlways": false,
                                          "label": "Total",
                                          "fontSize": 16
                                      }
                                  }
                              }
                          },
                          "radar": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "polygons": {
                                  "strokeColors": "#e8e8e8",
                                  "connectorColors": "#e8e8e8",
                                  "fill": {}
                              }
                          }
                      },
                      "theme": {
                          "mode": "light",
                          "palette": "palette4"
                      },
                      "dataLabels": {
                          "enabled": true,
                          "textAnchor": "middle",
                          "offsetX": 0,
                          "offsetY": 0,
                          "style": {
                              "fontSize": 12,
                              "fontWeight": 700,
                              "colors": [
                                  "#fff"
                              ]
                          },
                          "background": {
                              "enabled": false,
                              "foreColor": "#fff",
                              "borderRadius": 2,
                              "padding": 4,
                              "opacity": 0.9,
                              "borderWidth": 1,
                              "borderColor": "#fff"
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 1,
                              "left": 1,
                              "blur": 1,
                              "color": "#000",
                              "opacity": 0.45
                          }
                      },
                      "markers": {
                          "size": 0,
                          "strokeColors": "#fff",
                          "strokeWidth": 2,
                          "strokeOpacity": 0.9,
                          "strokeDashArray": 0,
                          "fillOpacity": 1,
                          "shape": "circle",
                          "radius": 2,
                          "offsetX": 0,
                          "offsetY": 0,
                          "hover": {}
                      },
                      "yaxis": [
                          {
                              "show": true,
                              "showAlways": false,
                              "showForNullSeries": true,
                              "opposite": false,
                              "reversed": false,
                              "logarithmic": false,
                              "logBase": 10,
                              "tickAmount": 5,
                              "forceNiceScale": false,
                              "max": 100,
                              "min": 0,
                              "floating": false,
                              "labels": {
                                  "show": true,
                                  "minWidth": 0,
                                  "maxWidth": 160,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "rotate": 0,
                                  "padding": 20,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  }
                              },
                              "axisBorder": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "title": {
                                  "rotate": -90,
                                  "offsetY": 0,
                                  "offsetX": 0,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetX": 0
                              },
                              "crosshairs": {
                                  "show": true,
                                  "position": "front",
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 0
                                  }
                              }
                          }
                      ],
                      "stroke": {
                          "show": true,
                          "curve": "smooth",
                          "lineCap": "butt",
                          "width": 2,
                          "dashArray": 0
                      },
                      "fill": {
                          "type": "solid",
                          "opacity": 0.85,
                          "gradient": {
                              "shade": "dark",
                              "type": "horizontal",
                              "shadeIntensity": 0.5,
                              "inverseColors": true,
                              "opacityFrom": 1,
                              "opacityTo": 1,
                              "stops": [
                                  0,
                                  50,
                                  100
                              ],
                              "colorStops": []
                          },
                          "pattern": {
                              "style": "squares",
                              "width": 6,
                              "height": 6,
                              "strokeWidth": 2
                          }
                      },
                      "legend": {
                          "show": true,
                          "showForSingleSeries": false,
                          "floating": false,
                          "position": "bottom",
                          "horizontalAlign": "center",
                          "fontSize": 14,
                          "fontWeight": 400,
                          "offsetX": -20,
                          "offsetY": 0,
                          "labels": {
                              "useSeriesColors": false
                          },
                          "markers": {
                              "width": 12,
                              "height": 12,
                              "strokeWidth": 0,
                              "strokeColor": "#fff",
                              "radius": 12
                          },
                          "itemMargin": {
                              "horizontal": 5,
                              "vertical": 0
                          },
                          "onItemClick": {
                              "toggleDataSeries": true
                          },
                          "onItemHover": {
                              "highlightDataSeries": true
                          }
                      }
                  },
                  "w": {
                      "config": {
                          "annotations": {
                              "position": "front",
                              "texts": [],
                              "images": [],
                              "shapes": []
                          },
                          "chart": {
                              "animations": {
                                  "enabled": false,
                                  "easing": "swing",
                                  "speed": 800,
                                  "animateGradually": {
                                      "delay": 150,
                                      "enabled": true
                                  },
                                  "dynamicAnimation": {
                                      "enabled": true,
                                      "speed": 350
                                  }
                              },
                              "background": "",
                              "locales": [
                                  null
                              ],
                              "defaultLocale": "en",
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 2,
                                  "left": 2,
                                  "blur": 4,
                                  "color": "#000",
                                  "opacity": 0.35
                              },
                              "events": {},
                              "foreColor": "#333",
                              "fontFamily": "Roboto",
                              "height": 250,
                              "parentHeightOffset": 15,
                              "redrawOnParentResize": true,
                              "redrawOnWindowResize": true,
                              "id": "v7RDV",
                              "offsetX": 0,
                              "offsetY": 0,
                              "selection": {
                                  "enabled": false,
                                  "type": "x",
                                  "fill": {
                                      "color": "#24292e",
                                      "opacity": 0.1
                                  },
                                  "stroke": {
                                      "width": 1,
                                      "color": "#24292e",
                                      "opacity": 0.4,
                                      "dashArray": 3
                                  },
                                  "xaxis": {},
                                  "yaxis": {}
                              },
                              "sparkline": {
                                  "enabled": false
                              },
                              "brush": {
                                  "enabled": false,
                                  "autoScaleYaxis": true
                              },
                              "stacked": true,
                              "stackType": "100%",
                              "toolbar": {
                                  "show": false,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "tools": {
                                      "download": true,
                                      "selection": false,
                                      "zoom": false,
                                      "zoomin": false,
                                      "zoomout": false,
                                      "pan": false,
                                      "reset": false,
                                      "customIcons": []
                                  },
                                  "export": {
                                      "csv": {
                                          "columnDelimiter": ",",
                                          "headerCategory": "category",
                                          "headerValue": "value"
                                      },
                                      "png": {},
                                      "svg": {}
                                  },
                                  "autoSelected": "zoom"
                              },
                              "type": "bar",
                              "width": 400,
                              "zoom": {
                                  "enabled": true,
                                  "type": "x",
                                  "autoScaleYaxis": false,
                                  "zoomedArea": {
                                      "fill": {
                                          "color": "#90CAF9",
                                          "opacity": 0.4
                                      },
                                      "stroke": {
                                          "color": "#0D47A1",
                                          "opacity": 0.4,
                                          "width": 1
                                      }
                                  }
                              }
                          },
                          "plotOptions": {
                              "area": {
                                  "fillTo": "origin"
                              },
                              "bar": {
                                  "horizontal": false,
                                  "columnWidth": "70%",
                                  "barHeight": "70%",
                                  "distributed": false,
                                  "borderRadius": 10,
                                  "rangeBarOverlap": true,
                                  "rangeBarGroupRows": false,
                                  "colors": {
                                      "backgroundBarOpacity": 1,
                                      "backgroundBarRadius": 0
                                  },
                                  "dataLabels": {
                                      "position": "center",
                                      "maxItems": 100,
                                      "hideOverflowingLabels": true,
                                      "orientation": "horizontal"
                                  }
                              },
                              "bubble": {},
                              "candlestick": {
                                  "colors": {
                                      "upward": "#00B746",
                                      "downward": "#EF403C"
                                  },
                                  "wick": {
                                      "useFillColor": true
                                  }
                              },
                              "boxPlot": {
                                  "colors": {
                                      "upper": "#00E396",
                                      "lower": "#008FFB"
                                  }
                              },
                              "heatmap": {
                                  "radius": 2,
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "reverseNegativeShade": false,
                                  "distributed": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "treemap": {
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "distributed": false,
                                  "reverseNegativeShade": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "radialBar": {
                                  "inverseOrder": false,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "hollow": {
                                      "margin": 5,
                                      "size": "50%",
                                      "background": "#fff",
                                      "imageWidth": 150,
                                      "imageHeight": 150,
                                      "imageOffsetX": 0,
                                      "imageOffsetY": 0,
                                      "imageClipped": true,
                                      "position": "front",
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "track": {
                                      "show": true,
                                      "background": "#f2f2f2",
                                      "strokeWidth": "97%",
                                      "opacity": 1,
                                      "margin": 5,
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "dataLabels": {
                                      "show": true,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "fontWeight": 600,
                                          "offsetY": 0
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 14,
                                          "fontWeight": 400,
                                          "offsetY": 16
                                      },
                                      "total": {
                                          "show": false,
                                          "label": "Total",
                                          "fontSize": 16,
                                          "fontWeight": 600
                                      }
                                  }
                              },
                              "pie": {
                                  "customScale": 1,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "expandOnClick": true,
                                  "dataLabels": {
                                      "offset": 0,
                                      "minAngleToShowLabel": 10
                                  },
                                  "donut": {
                                      "size": "65%",
                                      "labels": {
                                          "show": false,
                                          "name": {
                                              "show": true,
                                              "fontSize": 16,
                                              "fontWeight": 600,
                                              "offsetY": -10
                                          },
                                          "value": {
                                              "show": true,
                                              "fontSize": 20,
                                              "fontWeight": 400,
                                              "offsetY": 10
                                          },
                                          "total": {
                                              "show": false,
                                              "showAlways": false,
                                              "label": "Total",
                                              "fontSize": 16,
                                              "fontWeight": 400
                                          }
                                      }
                                  }
                              },
                              "polarArea": {
                                  "rings": {
                                      "strokeWidth": 1,
                                      "strokeColor": "#e8e8e8"
                                  },
                                  "spokes": {
                                      "strokeWidth": 1,
                                      "connectorColors": "#e8e8e8"
                                  }
                              },
                              "radar": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "polygons": {
                                      "strokeWidth": 1,
                                      "strokeColors": "#e8e8e8",
                                      "connectorColors": "#e8e8e8",
                                      "fill": {}
                                  }
                              }
                          },
                          "dataLabels": {
                              "enabled": true,
                              "textAnchor": "middle",
                              "distributed": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "fontSize": 12,
                                  "fontWeight": 700
                              },
                              "background": {
                                  "enabled": false,
                                  "foreColor": "#fff",
                                  "borderRadius": 2,
                                  "padding": 4,
                                  "opacity": 0.9,
                                  "borderWidth": 1,
                                  "borderColor": "#fff",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 1,
                                      "left": 1,
                                      "blur": 1,
                                      "color": "#000",
                                      "opacity": 0.45
                                  }
                              },
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 1,
                                  "left": 1,
                                  "blur": 1,
                                  "color": "#000",
                                  "opacity": 0.45
                              }
                          },
                          "fill": {
                              "type": "solid",
                              "opacity": 0.85,
                              "gradient": {
                                  "shade": "dark",
                                  "type": "horizontal",
                                  "shadeIntensity": 0.5,
                                  "inverseColors": true,
                                  "opacityFrom": 1,
                                  "opacityTo": 1
                              },
                              "image": {
                                  "src": []
                              },
                              "pattern": {
                                  "style": "squares",
                                  "width": 6,
                                  "height": 6,
                                  "strokeWidth": 2
                              }
                          },
                          "forecastDataPoints": {
                              "count": 0,
                              "fillOpacity": 0.5,
                              "dashArray": 4
                          },
                          "grid": {
                              "show": true,
                              "borderColor": "#e0e0e0",
                              "strokeDashArray": 0,
                              "position": "back",
                              "xaxis": {
                                  "lines": {
                                      "show": false
                                  }
                              },
                              "yaxis": {
                                  "lines": {
                                      "show": true
                                  }
                              },
                              "row": {
                                  "opacity": 0.5
                              },
                              "column": {
                                  "opacity": 0.5
                              },
                              "padding": {
                                  "top": 0,
                                  "right": 25,
                                  "bottom": 0,
                                  "left": 15
                              }
                          },
                          "labels": [],
                          "legend": {
                              "show": true,
                              "showForSingleSeries": false,
                              "showForNullSeries": true,
                              "showForZeroSeries": true,
                              "floating": false,
                              "position": "bottom",
                              "horizontalAlign": "center",
                              "inverseOrder": false,
                              "fontSize": 14,
                              "fontWeight": 400,
                              "offsetX": -20,
                              "offsetY": 0,
                              "customLegendItems": [],
                              "labels": {
                                  "useSeriesColors": false
                              },
                              "markers": {
                                  "width": 12,
                                  "height": 12,
                                  "strokeWidth": 0,
                                  "strokeColor": "#fff",
                                  "radius": 12,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "shape": "square",
                                  "size": 8
                              },
                              "itemMargin": {
                                  "horizontal": 5,
                                  "vertical": 0
                              },
                              "onItemClick": {
                                  "toggleDataSeries": true
                              },
                              "onItemHover": {
                                  "highlightDataSeries": true
                              }
                          },
                          "markers": {
                              "discrete": [],
                              "size": 0,
                              "strokeColors": "#fff",
                              "strokeWidth": 2,
                              "strokeOpacity": 0.9,
                              "strokeDashArray": 0,
                              "fillOpacity": 1,
                              "shape": "circle",
                              "width": 8,
                              "height": 8,
                              "radius": 2,
                              "offsetX": 0,
                              "offsetY": 0,
                              "showNullDataPoints": true,
                              "hover": {
                                  "sizeOffset": 3
                              }
                          },
                          "noData": {
                              "align": "center",
                              "verticalAlign": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "fontSize": "14px"
                              }
                          },
                          "responsive": [],
                          "states": {
                              "normal": {
                                  "filter": {
                                      "type": "none",
                                      "value": 0
                                  }
                              },
                              "hover": {
                                  "filter": {
                                      "type": "lighten",
                                      "value": 0.1
                                  }
                              },
                              "active": {
                                  "allowMultipleDataPointsSelection": false,
                                  "filter": {
                                      "type": "darken",
                                      "value": 0.5
                                  }
                              }
                          },
                          "title": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 0,
                              "floating": false,
                              "style": {
                                  "fontSize": "14px",
                                  "fontWeight": 900
                              }
                          },
                          "subtitle": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 30,
                              "floating": false,
                              "style": {
                                  "fontSize": "12px",
                                  "fontWeight": 400
                              }
                          },
                          "stroke": {
                              "show": true,
                              "curve": "smooth",
                              "lineCap": "butt",
                              "width": 2,
                              "dashArray": 0
                          },
                          "tooltip": {
                              "enabled": true,
                              "shared": false,
                              "followCursor": false,
                              "intersect": true,
                              "inverseOrder": false,
                              "fillSeriesColor": false,
                              "theme": "light",
                              "style": {
                                  "fontSize": "12px"
                              },
                              "onDatasetHover": {
                                  "highlightDataSeries": false
                              },
                              "x": {
                                  "show": true,
                                  "format": "dd MMM"
                              },
                              "y": {
                                  "title": {}
                              },
                              "z": {
                                  "title": "Size: "
                              },
                              "marker": {
                                  "show": true
                              },
                              "items": {
                                  "display": "flex"
                              },
                              "fixed": {
                                  "enabled": false,
                                  "position": "topRight",
                                  "offsetX": 0,
                                  "offsetY": 0
                              }
                          },
                          "xaxis": {
                              "type": "category",
                              "categories": [],
                              "convertedCatToNumeric": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickPlacement": "between",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "theme": {
                              "mode": "light",
                              "palette": "palette4",
                              "monochrome": {
                                  "enabled": false,
                                  "color": "#008FFB",
                                  "shadeTo": "light",
                                  "shadeIntensity": 0.65
                              }
                          }
                      },
                      "globals": {
                          "chartID": "v7RDV",
                          "cuid": "xzrttqi4",
                          "events": {
                              "beforeMount": [],
                              "mounted": [],
                              "updated": [],
                              "clicked": [],
                              "selection": [],
                              "dataPointSelection": [],
                              "zoomed": [],
                              "scrolled": []
                          },
                          "colors": [
                              "#4ecdc4",
                              "#c7f464",
                              "#81D4FA",
                              "#fd6a6a",
                              "#546E7A"
                          ],
                          "clientX": 1212,
                          "clientY": 530,
                          "fill": {
                              "colors": [
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A"
                              ]
                          },
                          "stroke": {},
                          "dataLabels": {
                              "style": {
                                  "colors": [
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff"
                                  ]
                              }
                          },
                          "radarPolygons": {
                              "fill": {
                                  "colors": [
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none"
                                  ]
                              }
                          },
                          "markers": {
                              "size": [
                                  0,
                                  0,
                                  0
                              ],
                              "largestSize": 0
                          },
                          "animationEnded": true,
                          "isDirty": true,
                          "isExecCalled": false,
                          "initialConfig": {},
                          "initialSeries": [
                              {
                                  "name": "Column 1",
                                  "data": [
                                      {
                                          "x": "Item 1",
                                          "y": 10
                                      },
                                      {
                                          "x": "Item 2",
                                          "y": 20
                                      },
                                      {
                                          "x": "Item 3",
                                          "y": 30
                                      },
                                      {
                                          "x": "Item 4",
                                          "y": 40
                                      }
                                  ]
                              },
                              {
                                  "name": "Column 2",
                                  "data": [
                                      {
                                          "x": "Item 1",
                                          "y": 15
                                      },
                                      {
                                          "x": "Item 2",
                                          "y": 10
                                      },
                                      {
                                          "x": "Item 3",
                                          "y": 25
                                      },
                                      {
                                          "x": "Item 4",
                                          "y": 30
                                      }
                                  ]
                              }
                          ],
                          "lastXAxis": {
                              "type": "category",
                              "categories": [],
                              "convertedCatToNumeric": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickPlacement": "between",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "lastYAxis": [
                              {
                                  "show": true,
                                  "showAlways": false,
                                  "showForNullSeries": true,
                                  "opposite": false,
                                  "reversed": false,
                                  "logarithmic": false,
                                  "logBase": 10,
                                  "tickAmount": 5,
                                  "forceNiceScale": false,
                                  "max": 100,
                                  "min": 0,
                                  "floating": false,
                                  "labels": {
                                      "show": true,
                                      "minWidth": 0,
                                      "maxWidth": 160,
                                      "offsetX": 0,
                                      "offsetY": 0,
                                      "rotate": 0,
                                      "padding": 20,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 400,
                                          "cssClass": ""
                                      }
                                  },
                                  "axisBorder": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 1,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "axisTicks": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 6,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "title": {
                                      "rotate": -90,
                                      "offsetY": 0,
                                      "offsetX": 0,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 700,
                                          "cssClass": ""
                                      }
                                  },
                                  "tooltip": {
                                      "enabled": false,
                                      "offsetX": 0
                                  },
                                  "crosshairs": {
                                      "show": true,
                                      "position": "front",
                                      "stroke": {
                                          "color": "#b6b6b6",
                                          "width": 1,
                                          "dashArray": 0
                                      }
                                  }
                              }
                          ],
                          "columnSeries": null,
                          "labels": [
                              "Item 1",
                              "Item 2",
                              "Item 3",
                              "Item 4"
                          ],
                          "timescaleLabels": [],
                          "noLabelsProvided": false,
                          "allSeriesCollapsed": false,
                          "collapsedSeries": [],
                          "collapsedSeriesIndices": [],
                          "ancillaryCollapsedSeries": [],
                          "ancillaryCollapsedSeriesIndices": [],
                          "risingSeries": [],
                          "dataFormatXNumeric": false,
                          "capturedSeriesIndex": -1,
                          "capturedDataPointIndex": -1,
                          "selectedDataPoints": [],
                          "goldenPadding": 35,
                          "invalidLogScale": false,
                          "ignoreYAxisIndexes": [],
                          "yAxisSameScaleIndices": [],
                          "maxValsInArrayIndex": 0,
                          "radialSize": 94.00000000000001,
                          "zoomEnabled": true,
                          "panEnabled": false,
                          "selectionEnabled": false,
                          "yaxis": null,
                          "mousedown": false,
                          "lastClientPosition": {},
                          "yValueDecimal": 0,
                          "total": 0,
                          "SVGNS": "http://www.w3.org/2000/svg",
                          "svgWidth": 400,
                          "svgHeight": 250,
                          "noData": false,
                          "locale": {
                              "toolbar": {
                                  "exportToSVG": "Download SVG",
                                  "exportToPNG": "Download PNG",
                                  "exportToCSV": "Download CSV",
                                  "menu": "Menu",
                                  "selection": "Selection",
                                  "selectionZoom": "Selection Zoom",
                                  "zoomIn": "Zoom In",
                                  "zoomOut": "Zoom Out",
                                  "pan": "Panning",
                                  "reset": "Reset Zoom"
                              }
                          },
                          "dom": {
                              "baseEl": {
                                  "_prevClass": "v7RDV"
                              },
                              "elWrap": {},
                              "Paper": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "svg",
                                  "_defs": {
                                      "_stroke": "#000000",
                                      "_event": null,
                                      "dom": {},
                                      "node": {},
                                      "type": "defs"
                                  }
                              },
                              "elGraphical": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elAnnotations": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elLegendWrap": {},
                              "elLegendForeign": {},
                              "elGridRectMask": {},
                              "elGridRectMarkerMask": {},
                              "elForecastMask": {},
                              "elNonForecastMask": {},
                              "elGridRect": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              },
                              "elGridRectMarker": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              }
                          },
                          "memory": {
                              "methodsToExec": []
                          },
                          "shouldAnimate": true,
                          "skipLastTimelinelabel": false,
                          "skipFirstTimelinelabel": false,
                          "delayedElements": [
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              },
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              },
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              }
                          ],
                          "axisCharts": true,
                          "isDataXYZ": false,
                          "resized": true,
                          "resizeTimer": null,
                          "comboCharts": false,
                          "dataChanged": false,
                          "previousPaths": [],
                          "allSeriesHasEqualX": true,
                          "pointsArray": [],
                          "dataLabelsRects": [
                              [
                                  {
                                      "x": 42.125,
                                      "y": 164,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 128.375,
                                      "y": 136.66666666666666,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 214.625,
                                      "y": 149.0909090909091,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 300.875,
                                      "y": 146.42857142857142,
                                      "width": 0,
                                      "height": 0
                                  }
                              ],
                              [
                                  {
                                      "x": 42.125,
                                      "y": 61.5,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 128.375,
                                      "y": 34.16666666666664,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 214.625,
                                      "y": 46.59090909090908,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 300.875,
                                      "y": 43.92857142857142,
                                      "width": 0,
                                      "height": 0
                                  }
                              ]
                          ],
                          "lastDrawnDataLabelsIndexes": [
                              [
                                  0,
                                  1,
                                  2,
                                  3,
                                  0,
                                  1,
                                  2,
                                  3
                              ],
                              [
                                  0,
                                  1,
                                  2,
                                  3,
                                  0,
                                  1,
                                  2,
                                  3
                              ]
                          ],
                          "hasNullValues": false,
                          "zoomed": false,
                          "gridWidth": 345,
                          "gridHeight": 205,
                          "rotateXLabels": false,
                          "defaultLabels": false,
                          "yLabelFormatters": [
                              null
                          ],
                          "LINE_HEIGHT_RATIO": 1.618,
                          "xAxisLabelsHeight": 10,
                          "xAxisLabelsWidth": 0,
                          "yAxisLabelsWidth": 0,
                          "scaleX": 1,
                          "scaleY": 1,
                          "translateX": 30,
                          "translateY": 30,
                          "translateYAxisX": [
                              -3
                          ],
                          "yAxisWidths": [],
                          "translateXAxisY": -4,
                          "translateXAxisX": 0,
                          "tooltip": {
                              "tooltipUtil": {},
                              "tooltipLabels": {
                                  "tooltipUtil": {}
                              },
                              "tooltipPosition": {},
                              "marker": {
                                  "tooltipPosition": {}
                              },
                              "intersect": {},
                              "axesTooltip": {},
                              "showOnIntersect": true,
                              "showTooltipTitle": true,
                              "fixedTooltip": false,
                              "xaxisTooltip": null,
                              "yaxisTTEls": null,
                              "isBarShared": false,
                              "lastHoverTime": 1683551077741,
                              "xyRatios": {
                                  "yRatio": [
                                      0.4878048780487805
                                  ],
                                  "invertedYRatio": 0.2898550724637681,
                                  "zRatio": null,
                                  "xRatio": null,
                                  "initialXRatio": null,
                                  "invertedXRatio": null,
                                  "baseLineInvertedY": 0.1,
                                  "baseLineY": [
                                      0
                                  ],
                                  "baseLineX": 0
                              },
                              "isXAxisTooltipEnabled": false,
                              "yaxisTooltips": [
                                  false
                              ],
                              "allTooltipSeriesGroups": [],
                              "xaxisOffY": 206,
                              "yaxisOffX": 1,
                              "yaxisTooltip": {},
                              "yaxisTooltipText": [
                                  {}
                              ],
                              "xcrosshairsWidth": 1,
                              "ycrosshairs": {
                                  "instance": {
                                      "_stroke": "#b6b6b6",
                                      "_event": null,
                                      "dom": {},
                                      "type": "line"
                                  }
                              },
                              "ycrosshairsHidden": {
                                  "instance": {
                                      "_stroke": "#b6b6b6",
                                      "_event": null,
                                      "dom": {},
                                      "type": "line"
                                  }
                              },
                              "xAxisTicksPositions": [
                                  86.25,
                                  172.5,
                                  258.75,
                                  345
                              ],
                              "dataPointsDividedHeight": 51.25,
                              "dataPointsDividedWidth": 86.25,
                              "tooltipTitle": {},
                              "legendLabels": {
                                  "0": {},
                                  "1": {}
                              },
                              "ttItems": [
                                  {},
                                  {}
                              ],
                              "seriesBound": {
                                  "x": 0,
                                  "y": 0,
                                  "width": 0,
                                  "height": 0,
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0
                              }
                          },
                          "series": [
                              [
                                  10,
                                  20,
                                  30,
                                  40
                              ],
                              [
                                  15,
                                  10,
                                  25,
                                  30
                              ]
                          ],
                          "seriesCandleO": [],
                          "seriesCandleH": [],
                          "seriesCandleM": [],
                          "seriesCandleL": [],
                          "seriesCandleC": [],
                          "seriesRangeStart": [],
                          "seriesRangeEnd": [],
                          "seriesRangeBar": [],
                          "seriesPercent": [
                              [
                                  40,
                                  66.66666666666667,
                                  54.54545454545455,
                                  57.142857142857146
                              ],
                              [
                                  60,
                                  33.333333333333336,
                                  45.45454545454545,
                                  42.857142857142854
                              ]
                          ],
                          "seriesGoals": [
                              [
                                  null,
                                  null,
                                  null,
                                  null
                              ],
                              [
                                  null,
                                  null,
                                  null,
                                  null
                              ]
                          ],
                          "seriesX": [
                              null,
                              [
                                  "Item 1",
                                  "Item 2",
                                  "Item 3",
                                  "Item 4"
                              ]
                          ],
                          "seriesZ": [
                              [],
                              []
                          ],
                          "seriesNames": [
                              "Column 1",
                              "Column 2"
                          ],
                          "seriesTotals": [
                              100,
                              80
                          ],
                          "seriesLog": [
                              null,
                              null
                          ],
                          "seriesColors": [
                              null,
                              null
                          ],
                          "stackedSeriesTotals": [
                              25,
                              30,
                              55,
                              70
                          ],
                          "seriesXvalues": [
                              [
                                  99.1875,
                                  185.4375,
                                  271.6875,
                                  357.9375
                              ],
                              [
                                  99.1875,
                                  185.4375,
                                  271.6875,
                                  357.9375
                              ]
                          ],
                          "seriesYvalues": [
                              [
                                  123,
                                  68.33333333333331,
                                  93.18181818181817,
                                  87.85714285714285
                              ],
                              [
                                  0,
                                  -2.842170943040401e-14,
                                  -1.4210854715202004e-14,
                                  0
                              ]
                          ],
                          "categoryLabels": [],
                          "selectionResizeTimer": null,
                          "isXNumeric": false,
                          "xaxisLabelsCount": 4,
                          "isMultiLineX": false,
                          "isMultipleYAxis": false,
                          "maxY": 100,
                          "minY": 0,
                          "minYArr": [
                              0
                          ],
                          "maxYArr": [
                              100
                          ],
                          "maxX": -1.7976931348623157e+308,
                          "minX": 1.7976931348623157e+308,
                          "initialMaxX": -1.7976931348623157e+308,
                          "initialMinX": 1.7976931348623157e+308,
                          "maxDate": 0,
                          "minDate": 1.7976931348623157e+308,
                          "minZ": 1.7976931348623157e+308,
                          "maxZ": -1.7976931348623157e+308,
                          "minXDiff": 1.7976931348623157e+308,
                          "yAxisScale": [
                              {
                                  "result": [
                                      0,
                                      20,
                                      40,
                                      60,
                                      80,
                                      100
                                  ],
                                  "niceMin": 0,
                                  "niceMax": 100
                              }
                          ],
                          "xAxisScale": null,
                          "xAxisTicksPositions": [],
                          "yLabelsCoords": [
                              {
                                  "width": 10,
                                  "index": 0
                              }
                          ],
                          "yTitleCoords": [
                              {
                                  "width": 0,
                                  "index": 0
                              }
                          ],
                          "barPadForNumericAxis": 0,
                          "padHorizontal": 0,
                          "xRange": null,
                          "yRange": [
                              100
                          ],
                          "zRange": null,
                          "dataPoints": 4,
                          "xTickAmount": 0,
                          "xyCharts": true,
                          "isBarHorizontal": false,
                          "chartClass": ".apexchartsv7RDV",
                          "comboBarCount": 0,
                          "isRangeBar": false,
                          "xAxisHeight": 10,
                          "yLogRatio": [
                              0.4878048780487805
                          ],
                          "logYRange": [
                              null
                          ]
                      }
                  },
                  "publicMethods": [
                      "updateOptions",
                      "updateSeries",
                      "appendData",
                      "appendSeries",
                      "toggleSeries",
                      "showSeries",
                      "hideSeries",
                      "setLocale",
                      "resetSeries",
                      "zoomX",
                      "toggleDataPointSelection",
                      "dataURI",
                      "addXaxisAnnotation",
                      "addYaxisAnnotation",
                      "addPointAnnotation",
                      "clearAnnotations",
                      "removeAnnotation",
                      "paper",
                      "destroy"
                  ],
                  "eventList": [
                      "click",
                      "mousedown",
                      "mousemove",
                      "mouseleave",
                      "touchstart",
                      "touchmove",
                      "touchleave",
                      "mouseup",
                      "touchend"
                  ],
                  "animations": {},
                  "axes": {},
                  "core": {},
                  "config": {
                      "opts": {}
                  },
                  "data": {
                      "coreUtils": {},
                      "fallbackToCategory": true,
                      "activeSeriesIndex": 0
                  },
                  "grid": {
                      "xaxisLabels": [
                          "Item 1",
                          "Item 2",
                          "Item 3",
                          "Item 4"
                      ],
                      "axesUtils": {},
                      "isRangeBar": 0,
                      "elg": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      },
                      "elgridLinesH": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      },
                      "elgridLinesV": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      }
                  },
                  "graphics": {},
                  "coreUtils": {},
                  "crosshairs": {},
                  "events": {},
                  "exports": {},
                  "localization": {},
                  "options": {
                      "yAxis": {
                          "show": true,
                          "showAlways": false,
                          "showForNullSeries": true,
                          "opposite": false,
                          "reversed": false,
                          "logarithmic": false,
                          "logBase": 10,
                          "forceNiceScale": false,
                          "floating": false,
                          "labels": {
                              "show": true,
                              "minWidth": 0,
                              "maxWidth": 160,
                              "offsetX": 0,
                              "offsetY": 0,
                              "rotate": 0,
                              "padding": 20,
                              "style": {
                                  "colors": [],
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": ""
                              }
                          },
                          "axisBorder": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 1,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "axisTicks": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 6,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "title": {
                              "rotate": -90,
                              "offsetY": 0,
                              "offsetX": 0,
                              "style": {
                                  "fontSize": "11px",
                                  "fontWeight": 900,
                                  "cssClass": ""
                              }
                          },
                          "tooltip": {
                              "enabled": false,
                              "offsetX": 0
                          },
                          "crosshairs": {
                              "show": true,
                              "position": "front",
                              "stroke": {
                                  "color": "#b6b6b6",
                                  "width": 1,
                                  "dashArray": 0
                              }
                          }
                      },
                      "pointAnnotation": {
                          "x": 0,
                          "y": null,
                          "yAxisIndex": 0,
                          "seriesIndex": 0,
                          "marker": {
                              "size": 4,
                              "fillColor": "#fff",
                              "strokeWidth": 2,
                              "strokeColor": "#333",
                              "shape": "circle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "radius": 2,
                              "cssClass": ""
                          },
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          },
                          "customSVG": {
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "image": {
                              "width": 20,
                              "height": 20,
                              "offsetX": 0,
                              "offsetY": 0
                          }
                      },
                      "yAxisAnnotation": {
                          "y": 0,
                          "y2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "width": "100%",
                          "yAxisIndex": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "end",
                              "position": "right",
                              "offsetX": 0,
                              "offsetY": -3,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "xAxisAnnotation": {
                          "x": 0,
                          "x2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "orientation": "vertical",
                              "position": "top",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "text": {
                          "x": 0,
                          "y": 0,
                          "text": "",
                          "textAnchor": "start",
                          "fontSize": "13px",
                          "fontWeight": 400,
                          "appendTo": ".apexcharts-annotations",
                          "backgroundColor": "transparent",
                          "borderColor": "#c2c2c2",
                          "borderRadius": 0,
                          "borderWidth": 0,
                          "paddingLeft": 4,
                          "paddingRight": 4,
                          "paddingTop": 2,
                          "paddingBottom": 2
                      }
                  },
                  "responsive": {},
                  "series": {
                      "legendInactiveClass": "legend-mouseover-inactive"
                  },
                  "theme": {
                      "isColorFn": false,
                      "isHeatmapDistributed": false,
                      "isBarDistributed": false
                  },
                  "formatters": {
                      "tooltipKeyFormat": "dd MMM"
                  },
                  "titleSubtitle": {},
                  "legend": {
                      "isBarsDistributed": false,
                      "legendHelpers": {}
                  },
                  "toolbar": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308
                  },
                  "dimensions": {
                      "lgRect": {
                          "x": 0,
                          "y": 0,
                          "height": 0,
                          "width": 0
                      },
                      "yAxisWidth": 15,
                      "yAxisWidthLeft": 15,
                      "yAxisWidthRight": 0,
                      "xAxisHeight": 10,
                      "isSparkline": false,
                      "dimHelpers": {},
                      "dimYAxis": {},
                      "dimXAxis": {},
                      "dimGrid": {},
                      "lgWidthForSideLegends": 0,
                      "xPadRight": 0,
                      "xPadLeft": 0,
                      "xAxisWidth": 0
                  },
                  "updateHelpers": {},
                  "zoomPanSelection": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308,
                      "dragged": false,
                      "graphics": {},
                      "eventList": [
                          "mousedown",
                          "mouseleave",
                          "mousemove",
                          "touchstart",
                          "touchmove",
                          "mouseup",
                          "touchend"
                      ],
                      "clientX": 0,
                      "clientY": 0,
                      "startX": 0,
                      "endX": 0,
                      "dragX": 0,
                      "startY": 0,
                      "endY": 0,
                      "dragY": 0,
                      "moveDirection": "none"
                  },
                  "pie": {
                      "chartType": "bar",
                      "initialAnim": false,
                      "dynamicAnim": false,
                      "animBeginArr": [
                          0
                      ],
                      "animDur": 0,
                      "defaultSize": 205,
                      "centerY": 102.5,
                      "centerX": 172.5,
                      "fullAngle": 360,
                      "initialAngle": 0,
                      "donutSize": 61.10000000000001,
                      "maxY": 0,
                      "sliceLabels": [],
                      "sliceSizes": [],
                      "prevSectorAngleArr": []
                  },
                  "rangeBar": {
                      "isHorizontal": false,
                      "strokeWidth": 2,
                      "isNullValue": false,
                      "isRangeBar": 0,
                      "xRatio": null,
                      "initialXRatio": null,
                      "invertedXRatio": null,
                      "invertedYRatio": 0.2898550724637681,
                      "baseLineInvertedY": 0.1,
                      "yaxisIndex": 0,
                      "seriesLen": 0,
                      "barHelpers": {}
                  },
                  "annotations": {
                      "graphics": {},
                      "helpers": {},
                      "xAxisAnnotations": {},
                      "yAxisAnnotations": {},
                      "pointsAnnotations": {},
                      "xDivision": 86.25
                  }
              }
          },
          {
              "id": "9Jp0s",
              "chart": {
                  "opts": {
                      "series": [
                          {
                              "name": "Bar",
                              "data": [
                                  {
                                      "x": "Item 1",
                                      "y": 10
                                  },
                                  {
                                      "x": "Item 2",
                                      "y": 20
                                  },
                                  {
                                      "x": "Item 3",
                                      "y": 30
                                  },
                                  {
                                      "x": "Item 4",
                                      "y": 40
                                  }
                              ]
                          }
                      ],
                      "annotations": {
                          "position": "front",
                          "yaxis": [],
                          "xaxis": [],
                          "points": []
                      },
                      "chart": {
                          "type": "bar",
                          "background": "",
                          "foreColor": "#333",
                          "offsetX": 0,
                          "offsetY": 0,
                          "toolbar": {
                              "show": false
                          },
                          "animations": {
                              "enabled": false
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 2,
                              "left": 2,
                              "blur": 4,
                              "color": "#000",
                              "opacity": 0.35
                          },
                          "fontFamily": "Roboto",
                          "height": 230,
                          "width": 400,
                          "id": "9Jp0s"
                      },
                      "plotOptions": {
                          "bar": {
                              "horizontal": true,
                              "columnWidth": "70%",
                              "barHeight": "70%",
                              "distributed": false,
                              "borderRadius": 10,
                              "colors": {
                                  "ranges": [],
                                  "backgroundBarColors": [],
                                  "backgroundBarOpacity": 1
                              },
                              "dataLabels": {
                                  "position": "top"
                              }
                          },
                          "heatmap": {
                              "radius": 2,
                              "enableShades": true,
                              "shadeIntensity": 0.5
                          },
                          "radialBar": {
                              "startAngle": 0,
                              "endAngle": 360,
                              "offsetX": 0,
                              "offsetY": 0,
                              "hollow": {
                                  "margin": 5,
                                  "size": "50%",
                                  "background": "#fff",
                                  "position": "front",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "track": {
                                  "show": true,
                                  "background": "#f2f2f2",
                                  "strokeWidth": "97%",
                                  "opacity": 1,
                                  "margin": 5,
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "dataLabels": {
                                  "show": true,
                                  "name": {
                                      "show": true,
                                      "fontSize": 16,
                                      "offsetY": 0
                                  },
                                  "value": {
                                      "show": true,
                                      "fontSize": 14,
                                      "offsetY": 16
                                  },
                                  "total": {
                                      "show": false,
                                      "label": "Total",
                                      "fontSize": 16
                                  }
                              }
                          },
                          "pie": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "dataLabels": {
                                  "offset": 0
                              },
                              "donut": {
                                  "size": "65%",
                                  "labels": {
                                      "show": false,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "offsetY": -10
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 20,
                                          "offsetY": 10
                                      },
                                      "total": {
                                          "show": false,
                                          "showAlways": false,
                                          "label": "Total",
                                          "fontSize": 16
                                      }
                                  }
                              }
                          },
                          "radar": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "polygons": {
                                  "strokeColors": "#e8e8e8",
                                  "connectorColors": "#e8e8e8",
                                  "fill": {}
                              }
                          }
                      },
                      "theme": {
                          "mode": "light",
                          "palette": "palette4"
                      },
                      "dataLabels": {
                          "enabled": true,
                          "textAnchor": "middle",
                          "offsetX": -2,
                          "offsetY": -3,
                          "style": {
                              "fontSize": 12,
                              "fontWeight": 700,
                              "colors": [
                                  "#fff"
                              ]
                          },
                          "background": {
                              "enabled": false,
                              "foreColor": "#fff",
                              "borderRadius": 2,
                              "padding": 4,
                              "opacity": 0.9,
                              "borderWidth": 1,
                              "borderColor": "#fff"
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 1,
                              "left": 1,
                              "blur": 1,
                              "color": "#000",
                              "opacity": 0.45
                          }
                      },
                      "markers": {
                          "size": 0,
                          "strokeColors": "#fff",
                          "strokeWidth": 2,
                          "strokeOpacity": 0.9,
                          "strokeDashArray": 0,
                          "fillOpacity": 1,
                          "shape": "circle",
                          "radius": 2,
                          "offsetX": 0,
                          "offsetY": 0,
                          "hover": {}
                      },
                      "yaxis": [
                          {
                              "show": true,
                              "showAlways": false,
                              "showForNullSeries": true,
                              "opposite": false,
                              "reversed": false,
                              "logarithmic": false,
                              "logBase": 10,
                              "forceNiceScale": false,
                              "floating": false,
                              "labels": {
                                  "show": true,
                                  "minWidth": 0,
                                  "maxWidth": 160,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "rotate": 0,
                                  "padding": 20,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  }
                              },
                              "axisBorder": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "title": {
                                  "rotate": -90,
                                  "offsetY": 0,
                                  "offsetX": 0,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetX": 0
                              },
                              "crosshairs": {
                                  "show": true,
                                  "position": "front",
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 0
                                  }
                              }
                          }
                      ],
                      "stroke": {
                          "show": true,
                          "curve": "smooth",
                          "lineCap": "butt",
                          "width": 2,
                          "dashArray": 0
                      },
                      "fill": {
                          "type": "solid",
                          "opacity": 0.85,
                          "gradient": {
                              "shade": "dark",
                              "type": "horizontal",
                              "shadeIntensity": 0.5,
                              "inverseColors": true,
                              "opacityFrom": 1,
                              "opacityTo": 1,
                              "stops": [
                                  0,
                                  50,
                                  100
                              ],
                              "colorStops": []
                          },
                          "pattern": {
                              "style": "squares",
                              "width": 6,
                              "height": 6,
                              "strokeWidth": 2
                          }
                      },
                      "legend": {
                          "show": true,
                          "showForSingleSeries": false,
                          "floating": false,
                          "position": "bottom",
                          "horizontalAlign": "center",
                          "fontSize": 14,
                          "fontWeight": 400,
                          "offsetX": -20,
                          "offsetY": 0,
                          "labels": {
                              "useSeriesColors": false
                          },
                          "markers": {
                              "width": 12,
                              "height": 12,
                              "strokeWidth": 0,
                              "strokeColor": "#fff",
                              "radius": 12
                          },
                          "itemMargin": {
                              "horizontal": 5,
                              "vertical": 0
                          },
                          "onItemClick": {
                              "toggleDataSeries": true
                          },
                          "onItemHover": {
                              "highlightDataSeries": true
                          }
                      }
                  },
                  "w": {
                      "config": {
                          "annotations": {
                              "position": "front",
                              "texts": [],
                              "images": [],
                              "shapes": []
                          },
                          "chart": {
                              "animations": {
                                  "enabled": false,
                                  "easing": "swing",
                                  "speed": 800,
                                  "animateGradually": {
                                      "delay": 150,
                                      "enabled": true
                                  },
                                  "dynamicAnimation": {
                                      "enabled": true,
                                      "speed": 350
                                  }
                              },
                              "background": "",
                              "locales": [
                                  null
                              ],
                              "defaultLocale": "en",
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 2,
                                  "left": 2,
                                  "blur": 4,
                                  "color": "#000",
                                  "opacity": 0.35
                              },
                              "events": {},
                              "foreColor": "#333",
                              "fontFamily": "Roboto",
                              "height": 230,
                              "parentHeightOffset": 15,
                              "redrawOnParentResize": true,
                              "redrawOnWindowResize": true,
                              "id": "9Jp0s",
                              "offsetX": 0,
                              "offsetY": 0,
                              "selection": {
                                  "enabled": false,
                                  "type": "x",
                                  "fill": {
                                      "color": "#24292e",
                                      "opacity": 0.1
                                  },
                                  "stroke": {
                                      "width": 1,
                                      "color": "#24292e",
                                      "opacity": 0.4,
                                      "dashArray": 3
                                  },
                                  "xaxis": {},
                                  "yaxis": {}
                              },
                              "sparkline": {
                                  "enabled": false
                              },
                              "brush": {
                                  "enabled": false,
                                  "autoScaleYaxis": true
                              },
                              "stacked": false,
                              "stackType": "normal",
                              "toolbar": {
                                  "show": false,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "tools": {
                                      "download": true,
                                      "selection": false,
                                      "zoom": false,
                                      "zoomin": false,
                                      "zoomout": false,
                                      "pan": false,
                                      "reset": false,
                                      "customIcons": []
                                  },
                                  "export": {
                                      "csv": {
                                          "columnDelimiter": ",",
                                          "headerCategory": "category",
                                          "headerValue": "value"
                                      },
                                      "png": {},
                                      "svg": {}
                                  },
                                  "autoSelected": "zoom"
                              },
                              "type": "bar",
                              "width": 400,
                              "zoom": {
                                  "enabled": false,
                                  "type": "x",
                                  "autoScaleYaxis": false,
                                  "zoomedArea": {
                                      "fill": {
                                          "color": "#90CAF9",
                                          "opacity": 0.4
                                      },
                                      "stroke": {
                                          "color": "#0D47A1",
                                          "opacity": 0.4,
                                          "width": 1
                                      }
                                  }
                              }
                          },
                          "plotOptions": {
                              "area": {
                                  "fillTo": "origin"
                              },
                              "bar": {
                                  "horizontal": true,
                                  "columnWidth": "70%",
                                  "barHeight": "70%",
                                  "distributed": false,
                                  "borderRadius": 10,
                                  "rangeBarOverlap": true,
                                  "rangeBarGroupRows": false,
                                  "colors": {
                                      "backgroundBarOpacity": 1,
                                      "backgroundBarRadius": 0
                                  },
                                  "dataLabels": {
                                      "position": "top",
                                      "maxItems": 100,
                                      "hideOverflowingLabels": true,
                                      "orientation": "horizontal"
                                  }
                              },
                              "bubble": {},
                              "candlestick": {
                                  "colors": {
                                      "upward": "#00B746",
                                      "downward": "#EF403C"
                                  },
                                  "wick": {
                                      "useFillColor": true
                                  }
                              },
                              "boxPlot": {
                                  "colors": {
                                      "upper": "#00E396",
                                      "lower": "#008FFB"
                                  }
                              },
                              "heatmap": {
                                  "radius": 2,
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "reverseNegativeShade": false,
                                  "distributed": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "treemap": {
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "distributed": false,
                                  "reverseNegativeShade": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "radialBar": {
                                  "inverseOrder": false,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "hollow": {
                                      "margin": 5,
                                      "size": "50%",
                                      "background": "#fff",
                                      "imageWidth": 150,
                                      "imageHeight": 150,
                                      "imageOffsetX": 0,
                                      "imageOffsetY": 0,
                                      "imageClipped": true,
                                      "position": "front",
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "track": {
                                      "show": true,
                                      "background": "#f2f2f2",
                                      "strokeWidth": "97%",
                                      "opacity": 1,
                                      "margin": 5,
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "dataLabels": {
                                      "show": true,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "fontWeight": 600,
                                          "offsetY": 0
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 14,
                                          "fontWeight": 400,
                                          "offsetY": 16
                                      },
                                      "total": {
                                          "show": false,
                                          "label": "Total",
                                          "fontSize": 16,
                                          "fontWeight": 600
                                      }
                                  }
                              },
                              "pie": {
                                  "customScale": 1,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "expandOnClick": true,
                                  "dataLabels": {
                                      "offset": 0,
                                      "minAngleToShowLabel": 10
                                  },
                                  "donut": {
                                      "size": "65%",
                                      "labels": {
                                          "show": false,
                                          "name": {
                                              "show": true,
                                              "fontSize": 16,
                                              "fontWeight": 600,
                                              "offsetY": -10
                                          },
                                          "value": {
                                              "show": true,
                                              "fontSize": 20,
                                              "fontWeight": 400,
                                              "offsetY": 10
                                          },
                                          "total": {
                                              "show": false,
                                              "showAlways": false,
                                              "label": "Total",
                                              "fontSize": 16,
                                              "fontWeight": 400
                                          }
                                      }
                                  }
                              },
                              "polarArea": {
                                  "rings": {
                                      "strokeWidth": 1,
                                      "strokeColor": "#e8e8e8"
                                  },
                                  "spokes": {
                                      "strokeWidth": 1,
                                      "connectorColors": "#e8e8e8"
                                  }
                              },
                              "radar": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "polygons": {
                                      "strokeWidth": 1,
                                      "strokeColors": "#e8e8e8",
                                      "connectorColors": "#e8e8e8",
                                      "fill": {}
                                  }
                              }
                          },
                          "dataLabels": {
                              "enabled": true,
                              "textAnchor": "middle",
                              "distributed": false,
                              "offsetX": -2,
                              "offsetY": -3,
                              "style": {
                                  "fontSize": 12,
                                  "fontWeight": 700
                              },
                              "background": {
                                  "enabled": false,
                                  "foreColor": "#fff",
                                  "borderRadius": 2,
                                  "padding": 4,
                                  "opacity": 0.9,
                                  "borderWidth": 1,
                                  "borderColor": "#fff",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 1,
                                      "left": 1,
                                      "blur": 1,
                                      "color": "#000",
                                      "opacity": 0.45
                                  }
                              },
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 1,
                                  "left": 1,
                                  "blur": 1,
                                  "color": "#000",
                                  "opacity": 0.45
                              }
                          },
                          "fill": {
                              "type": "solid",
                              "opacity": 0.85,
                              "gradient": {
                                  "shade": "dark",
                                  "type": "horizontal",
                                  "shadeIntensity": 0.5,
                                  "inverseColors": true,
                                  "opacityFrom": 1,
                                  "opacityTo": 1
                              },
                              "image": {
                                  "src": []
                              },
                              "pattern": {
                                  "style": "squares",
                                  "width": 6,
                                  "height": 6,
                                  "strokeWidth": 2
                              }
                          },
                          "forecastDataPoints": {
                              "count": 0,
                              "fillOpacity": 0.5,
                              "dashArray": 4
                          },
                          "grid": {
                              "show": true,
                              "borderColor": "#e0e0e0",
                              "strokeDashArray": 0,
                              "position": "back",
                              "xaxis": {
                                  "lines": {
                                      "show": false
                                  }
                              },
                              "yaxis": {
                                  "lines": {
                                      "show": true
                                  }
                              },
                              "row": {
                                  "opacity": 0.5
                              },
                              "column": {
                                  "opacity": 0.5
                              },
                              "padding": {
                                  "top": 0,
                                  "right": 25,
                                  "bottom": 0,
                                  "left": 15
                              }
                          },
                          "labels": [],
                          "legend": {
                              "show": true,
                              "showForSingleSeries": false,
                              "showForNullSeries": true,
                              "showForZeroSeries": true,
                              "floating": false,
                              "position": "bottom",
                              "horizontalAlign": "center",
                              "inverseOrder": false,
                              "fontSize": 14,
                              "fontWeight": 400,
                              "offsetX": -20,
                              "offsetY": 0,
                              "customLegendItems": [],
                              "labels": {
                                  "useSeriesColors": false
                              },
                              "markers": {
                                  "width": 12,
                                  "height": 12,
                                  "strokeWidth": 0,
                                  "strokeColor": "#fff",
                                  "radius": 12,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "shape": "square",
                                  "size": 8
                              },
                              "itemMargin": {
                                  "horizontal": 5,
                                  "vertical": 0
                              },
                              "onItemClick": {
                                  "toggleDataSeries": true
                              },
                              "onItemHover": {
                                  "highlightDataSeries": true
                              }
                          },
                          "markers": {
                              "discrete": [],
                              "size": 0,
                              "strokeColors": "#fff",
                              "strokeWidth": 2,
                              "strokeOpacity": 0.9,
                              "strokeDashArray": 0,
                              "fillOpacity": 1,
                              "shape": "circle",
                              "width": 8,
                              "height": 8,
                              "radius": 2,
                              "offsetX": 0,
                              "offsetY": 0,
                              "showNullDataPoints": true,
                              "hover": {
                                  "sizeOffset": 3
                              }
                          },
                          "noData": {
                              "align": "center",
                              "verticalAlign": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "fontSize": "14px"
                              }
                          },
                          "responsive": [],
                          "states": {
                              "normal": {
                                  "filter": {
                                      "type": "none",
                                      "value": 0
                                  }
                              },
                              "hover": {
                                  "filter": {
                                      "type": "lighten",
                                      "value": 0.1
                                  }
                              },
                              "active": {
                                  "allowMultipleDataPointsSelection": false,
                                  "filter": {
                                      "type": "darken",
                                      "value": 0.5
                                  }
                              }
                          },
                          "title": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 0,
                              "floating": false,
                              "style": {
                                  "fontSize": "14px",
                                  "fontWeight": 900
                              }
                          },
                          "subtitle": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 30,
                              "floating": false,
                              "style": {
                                  "fontSize": "12px",
                                  "fontWeight": 400
                              }
                          },
                          "stroke": {
                              "show": true,
                              "curve": "smooth",
                              "lineCap": "butt",
                              "width": 2,
                              "dashArray": 0
                          },
                          "tooltip": {
                              "enabled": true,
                              "shared": false,
                              "followCursor": false,
                              "intersect": true,
                              "inverseOrder": false,
                              "fillSeriesColor": false,
                              "theme": "light",
                              "style": {
                                  "fontSize": "12px"
                              },
                              "onDatasetHover": {
                                  "highlightDataSeries": false
                              },
                              "x": {
                                  "show": true,
                                  "format": "dd MMM"
                              },
                              "y": {
                                  "title": {}
                              },
                              "z": {
                                  "title": "Size: "
                              },
                              "marker": {
                                  "show": true
                              },
                              "items": {
                                  "display": "flex"
                              },
                              "fixed": {
                                  "enabled": false,
                                  "position": "topRight",
                                  "offsetX": 0,
                                  "offsetY": 0
                              }
                          },
                          "xaxis": {
                              "type": "category",
                              "categories": [],
                              "convertedCatToNumeric": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickPlacement": "between",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "theme": {
                              "mode": "light",
                              "palette": "palette4",
                              "monochrome": {
                                  "enabled": false,
                                  "color": "#008FFB",
                                  "shadeTo": "light",
                                  "shadeIntensity": 0.65
                              }
                          }
                      },
                      "globals": {
                          "chartID": "9Jp0s",
                          "cuid": "2f31e5es",
                          "events": {
                              "beforeMount": [],
                              "mounted": [],
                              "updated": [],
                              "clicked": [],
                              "selection": [],
                              "dataPointSelection": [],
                              "zoomed": [],
                              "scrolled": []
                          },
                          "colors": [
                              "#4ecdc4",
                              "#c7f464",
                              "#81D4FA",
                              "#fd6a6a",
                              "#546E7A"
                          ],
                          "clientX": null,
                          "clientY": null,
                          "fill": {
                              "colors": [
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A"
                              ]
                          },
                          "stroke": {},
                          "dataLabels": {
                              "style": {
                                  "colors": [
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff"
                                  ]
                              }
                          },
                          "radarPolygons": {
                              "fill": {
                                  "colors": [
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none"
                                  ]
                              }
                          },
                          "markers": {
                              "size": [
                                  0,
                                  0
                              ],
                              "largestSize": 0
                          },
                          "animationEnded": true,
                          "isDirty": true,
                          "isExecCalled": false,
                          "initialConfig": {},
                          "initialSeries": [
                              {
                                  "name": "Bar",
                                  "data": [
                                      {
                                          "x": "Item 1",
                                          "y": 10
                                      },
                                      {
                                          "x": "Item 2",
                                          "y": 20
                                      },
                                      {
                                          "x": "Item 3",
                                          "y": 30
                                      },
                                      {
                                          "x": "Item 4",
                                          "y": 40
                                      }
                                  ]
                              }
                          ],
                          "lastXAxis": {
                              "type": "category",
                              "categories": [],
                              "convertedCatToNumeric": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickPlacement": "between",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "lastYAxis": [
                              {
                                  "show": true,
                                  "showAlways": false,
                                  "showForNullSeries": true,
                                  "opposite": false,
                                  "reversed": false,
                                  "logarithmic": false,
                                  "logBase": 10,
                                  "forceNiceScale": false,
                                  "floating": false,
                                  "labels": {
                                      "show": true,
                                      "minWidth": 0,
                                      "maxWidth": 160,
                                      "offsetX": 0,
                                      "offsetY": 0,
                                      "rotate": 0,
                                      "padding": 20,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 400,
                                          "cssClass": ""
                                      }
                                  },
                                  "axisBorder": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 1,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "axisTicks": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 6,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "title": {
                                      "rotate": -90,
                                      "offsetY": 0,
                                      "offsetX": 0,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 700,
                                          "cssClass": ""
                                      }
                                  },
                                  "tooltip": {
                                      "enabled": false,
                                      "offsetX": 0
                                  },
                                  "crosshairs": {
                                      "show": true,
                                      "position": "front",
                                      "stroke": {
                                          "color": "#b6b6b6",
                                          "width": 1,
                                          "dashArray": 0
                                      }
                                  }
                              }
                          ],
                          "columnSeries": null,
                          "labels": [
                              "Item 1",
                              "Item 2",
                              "Item 3",
                              "Item 4"
                          ],
                          "timescaleLabels": [],
                          "noLabelsProvided": false,
                          "allSeriesCollapsed": false,
                          "collapsedSeries": [],
                          "collapsedSeriesIndices": [],
                          "ancillaryCollapsedSeries": [],
                          "ancillaryCollapsedSeriesIndices": [],
                          "risingSeries": [],
                          "dataFormatXNumeric": false,
                          "capturedSeriesIndex": -1,
                          "capturedDataPointIndex": -1,
                          "selectedDataPoints": [],
                          "goldenPadding": 35,
                          "invalidLogScale": false,
                          "ignoreYAxisIndexes": [],
                          "yAxisSameScaleIndices": [],
                          "maxValsInArrayIndex": 0,
                          "radialSize": 84.2439024390244,
                          "zoomEnabled": false,
                          "panEnabled": false,
                          "selectionEnabled": false,
                          "yaxis": null,
                          "mousedown": false,
                          "lastClientPosition": {},
                          "yValueDecimal": 0,
                          "total": 0,
                          "SVGNS": "http://www.w3.org/2000/svg",
                          "svgWidth": 400,
                          "svgHeight": 230,
                          "noData": false,
                          "locale": {
                              "toolbar": {
                                  "exportToSVG": "Download SVG",
                                  "exportToPNG": "Download PNG",
                                  "exportToCSV": "Download CSV",
                                  "menu": "Menu",
                                  "selection": "Selection",
                                  "selectionZoom": "Selection Zoom",
                                  "zoomIn": "Zoom In",
                                  "zoomOut": "Zoom Out",
                                  "pan": "Panning",
                                  "reset": "Reset Zoom"
                              }
                          },
                          "dom": {
                              "baseEl": {
                                  "_prevClass": "9Jp0s"
                              },
                              "elWrap": {},
                              "Paper": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "svg",
                                  "_defs": {
                                      "_stroke": "#000000",
                                      "_event": null,
                                      "dom": {},
                                      "node": {},
                                      "type": "defs"
                                  }
                              },
                              "elGraphical": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elAnnotations": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elLegendWrap": {},
                              "elGridRectMask": {},
                              "elGridRectMarkerMask": {},
                              "elForecastMask": {},
                              "elNonForecastMask": {},
                              "elGridRect": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              },
                              "elGridRectMarker": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              }
                          },
                          "memory": {
                              "methodsToExec": []
                          },
                          "shouldAnimate": true,
                          "skipLastTimelinelabel": false,
                          "skipFirstTimelinelabel": false,
                          "delayedElements": [
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              },
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              },
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              }
                          ],
                          "axisCharts": true,
                          "isDataXYZ": false,
                          "resized": true,
                          "resizeTimer": null,
                          "comboCharts": false,
                          "dataChanged": false,
                          "previousPaths": [],
                          "allSeriesHasEqualX": true,
                          "pointsArray": [],
                          "dataLabelsRects": [
                              [
                                  {
                                      "x": 82.35,
                                      "y": 17.125,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 168.6,
                                      "y": 63.375,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 254.85000000000002,
                                      "y": 109.625,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 341.1,
                                      "y": 155.875,
                                      "width": 0,
                                      "height": 0
                                  }
                              ]
                          ],
                          "lastDrawnDataLabelsIndexes": [
                              [
                                  0,
                                  1,
                                  2,
                                  3,
                                  0,
                                  1,
                                  2,
                                  3
                              ]
                          ],
                          "hasNullValues": false,
                          "zoomed": false,
                          "gridWidth": 345,
                          "gridHeight": 185,
                          "rotateXLabels": false,
                          "defaultLabels": false,
                          "yLabelFormatters": [
                              null
                          ],
                          "LINE_HEIGHT_RATIO": 1.618,
                          "xAxisLabelsHeight": 10,
                          "xAxisLabelsWidth": 0,
                          "yAxisLabelsWidth": 0,
                          "scaleX": 1,
                          "scaleY": 1,
                          "translateX": 30,
                          "translateY": 30,
                          "translateYAxisX": [
                              -3
                          ],
                          "yAxisWidths": [],
                          "translateXAxisY": -8,
                          "translateXAxisX": 0,
                          "tooltip": {
                              "tooltipUtil": {},
                              "tooltipLabels": {
                                  "tooltipUtil": {}
                              },
                              "tooltipPosition": {},
                              "marker": {
                                  "tooltipPosition": {}
                              },
                              "intersect": {},
                              "axesTooltip": {},
                              "showOnIntersect": true,
                              "showTooltipTitle": true,
                              "fixedTooltip": false,
                              "xaxisTooltip": null,
                              "yaxisTTEls": null,
                              "isBarShared": false,
                              "lastHoverTime": 1683551088206,
                              "xyRatios": {
                                  "yRatio": [
                                      0.21621621621621623
                                  ],
                                  "invertedYRatio": 0.11594202898550725,
                                  "zRatio": null,
                                  "xRatio": null,
                                  "initialXRatio": null,
                                  "invertedXRatio": null,
                                  "baseLineInvertedY": 0.1,
                                  "baseLineY": [
                                      0
                                  ],
                                  "baseLineX": 0
                              },
                              "isXAxisTooltipEnabled": false,
                              "yaxisTooltips": [
                                  false
                              ],
                              "allTooltipSeriesGroups": [],
                              "xaxisOffY": 186,
                              "yaxisOffX": 1,
                              "yaxisTooltip": {},
                              "yaxisTooltipText": [
                                  {}
                              ],
                              "xcrosshairsWidth": 0,
                              "ycrosshairs": {
                                  "instance": {
                                      "_stroke": "#b6b6b6",
                                      "_event": null,
                                      "dom": {},
                                      "type": "line"
                                  }
                              },
                              "ycrosshairsHidden": {
                                  "instance": {
                                      "_stroke": "#b6b6b6",
                                      "_event": null,
                                      "dom": {},
                                      "type": "line"
                                  }
                              },
                              "xAxisTicksPositions": [
                                  86.25,
                                  172.5,
                                  258.75,
                                  345
                              ],
                              "dataPointsDividedHeight": 46.25,
                              "dataPointsDividedWidth": 86.25,
                              "tooltipTitle": {},
                              "legendLabels": {},
                              "ttItems": [
                                  {}
                              ],
                              "seriesBound": {
                                  "x": 0,
                                  "y": 0,
                                  "width": 0,
                                  "height": 0,
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0
                              }
                          },
                          "series": [
                              [
                                  10,
                                  20,
                                  30,
                                  40
                              ]
                          ],
                          "seriesCandleO": [],
                          "seriesCandleH": [],
                          "seriesCandleM": [],
                          "seriesCandleL": [],
                          "seriesCandleC": [],
                          "seriesRangeStart": [],
                          "seriesRangeEnd": [],
                          "seriesRangeBar": [],
                          "seriesPercent": [
                              [
                                  100,
                                  100,
                                  100,
                                  100
                              ]
                          ],
                          "seriesGoals": [
                              [
                                  null,
                                  null,
                                  null,
                                  null
                              ]
                          ],
                          "seriesX": [
                              null
                          ],
                          "seriesZ": [
                              []
                          ],
                          "seriesNames": [
                              "Bar"
                          ],
                          "seriesTotals": [
                              100
                          ],
                          "seriesLog": [
                              null
                          ],
                          "seriesColors": [
                              null
                          ],
                          "stackedSeriesTotals": [
                              10,
                              20,
                              30,
                              40
                          ],
                          "seriesXvalues": [
                              [
                                  null,
                                  258.85,
                                  388.225,
                                  517.6
                              ]
                          ],
                          "seriesYvalues": [
                              [
                                  53.1875,
                                  99.4375,
                                  145.6875,
                                  191.9375
                              ]
                          ],
                          "categoryLabels": [],
                          "selectionResizeTimer": null,
                          "isXNumeric": false,
                          "xaxisLabelsCount": 0,
                          "isMultiLineX": false,
                          "isMultipleYAxis": false,
                          "maxY": 40,
                          "minY": 0,
                          "minYArr": [
                              0
                          ],
                          "maxYArr": [
                              40
                          ],
                          "maxX": -1.7976931348623157e+308,
                          "minX": 1.7976931348623157e+308,
                          "initialMaxX": -1.7976931348623157e+308,
                          "initialMinX": 1.7976931348623157e+308,
                          "maxDate": 0,
                          "minDate": 1.7976931348623157e+308,
                          "minZ": 1.7976931348623157e+308,
                          "maxZ": -1.7976931348623157e+308,
                          "minXDiff": 1.7976931348623157e+308,
                          "yAxisScale": [
                              {
                                  "result": [
                                      0,
                                      10,
                                      20,
                                      30,
                                      40
                                  ],
                                  "niceMin": 0,
                                  "niceMax": 40
                              }
                          ],
                          "xAxisScale": null,
                          "xAxisTicksPositions": [],
                          "yLabelsCoords": [
                              {
                                  "width": 0,
                                  "index": 0
                              }
                          ],
                          "yTitleCoords": [
                              {
                                  "width": 0,
                                  "index": 0
                              }
                          ],
                          "barPadForNumericAxis": 0,
                          "padHorizontal": 0,
                          "xRange": null,
                          "yRange": [
                              40
                          ],
                          "zRange": null,
                          "dataPoints": 4,
                          "xTickAmount": 4,
                          "xyCharts": true,
                          "isBarHorizontal": true,
                          "chartClass": ".apexcharts9Jp0s",
                          "comboBarCount": 0,
                          "isRangeBar": false,
                          "xAxisHeight": 10,
                          "yLogRatio": [
                              0.21621621621621623
                          ],
                          "logYRange": [
                              null
                          ]
                      }
                  },
                  "publicMethods": [
                      "updateOptions",
                      "updateSeries",
                      "appendData",
                      "appendSeries",
                      "toggleSeries",
                      "showSeries",
                      "hideSeries",
                      "setLocale",
                      "resetSeries",
                      "zoomX",
                      "toggleDataPointSelection",
                      "dataURI",
                      "addXaxisAnnotation",
                      "addYaxisAnnotation",
                      "addPointAnnotation",
                      "clearAnnotations",
                      "removeAnnotation",
                      "paper",
                      "destroy"
                  ],
                  "eventList": [
                      "click",
                      "mousedown",
                      "mousemove",
                      "mouseleave",
                      "touchstart",
                      "touchmove",
                      "touchleave",
                      "mouseup",
                      "touchend"
                  ],
                  "animations": {},
                  "axes": {},
                  "core": {},
                  "config": {
                      "opts": {}
                  },
                  "data": {
                      "coreUtils": {},
                      "fallbackToCategory": true,
                      "activeSeriesIndex": 0
                  },
                  "grid": {
                      "xaxisLabels": [
                          "Item 1",
                          "Item 2",
                          "Item 3",
                          "Item 4"
                      ],
                      "axesUtils": {},
                      "isRangeBar": 0,
                      "elg": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      },
                      "elgridLinesH": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      },
                      "elgridLinesV": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      }
                  },
                  "graphics": {},
                  "coreUtils": {},
                  "crosshairs": {},
                  "events": {},
                  "exports": {},
                  "localization": {},
                  "options": {
                      "yAxis": {
                          "show": true,
                          "showAlways": false,
                          "showForNullSeries": true,
                          "opposite": false,
                          "reversed": false,
                          "logarithmic": false,
                          "logBase": 10,
                          "forceNiceScale": false,
                          "floating": false,
                          "labels": {
                              "show": true,
                              "minWidth": 0,
                              "maxWidth": 160,
                              "offsetX": 0,
                              "offsetY": 0,
                              "rotate": 0,
                              "padding": 20,
                              "style": {
                                  "colors": [],
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": ""
                              }
                          },
                          "axisBorder": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 1,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "axisTicks": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 6,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "title": {
                              "rotate": -90,
                              "offsetY": 0,
                              "offsetX": 0,
                              "style": {
                                  "fontSize": "11px",
                                  "fontWeight": 900,
                                  "cssClass": ""
                              }
                          },
                          "tooltip": {
                              "enabled": false,
                              "offsetX": 0
                          },
                          "crosshairs": {
                              "show": true,
                              "position": "front",
                              "stroke": {
                                  "color": "#b6b6b6",
                                  "width": 1,
                                  "dashArray": 0
                              }
                          }
                      },
                      "pointAnnotation": {
                          "x": 0,
                          "y": null,
                          "yAxisIndex": 0,
                          "seriesIndex": 0,
                          "marker": {
                              "size": 4,
                              "fillColor": "#fff",
                              "strokeWidth": 2,
                              "strokeColor": "#333",
                              "shape": "circle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "radius": 2,
                              "cssClass": ""
                          },
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          },
                          "customSVG": {
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "image": {
                              "width": 20,
                              "height": 20,
                              "offsetX": 0,
                              "offsetY": 0
                          }
                      },
                      "yAxisAnnotation": {
                          "y": 0,
                          "y2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "width": "100%",
                          "yAxisIndex": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "end",
                              "position": "right",
                              "offsetX": 0,
                              "offsetY": -3,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "xAxisAnnotation": {
                          "x": 0,
                          "x2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "orientation": "vertical",
                              "position": "top",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "text": {
                          "x": 0,
                          "y": 0,
                          "text": "",
                          "textAnchor": "start",
                          "fontSize": "13px",
                          "fontWeight": 400,
                          "appendTo": ".apexcharts-annotations",
                          "backgroundColor": "transparent",
                          "borderColor": "#c2c2c2",
                          "borderRadius": 0,
                          "borderWidth": 0,
                          "paddingLeft": 4,
                          "paddingRight": 4,
                          "paddingTop": 2,
                          "paddingBottom": 2
                      }
                  },
                  "responsive": {},
                  "series": {
                      "legendInactiveClass": "legend-mouseover-inactive"
                  },
                  "theme": {
                      "isColorFn": false,
                      "isHeatmapDistributed": false,
                      "isBarDistributed": false
                  },
                  "formatters": {
                      "tooltipKeyFormat": "dd MMM"
                  },
                  "titleSubtitle": {},
                  "legend": {
                      "isBarsDistributed": false,
                      "legendHelpers": {}
                  },
                  "toolbar": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308
                  },
                  "dimensions": {
                      "lgRect": {
                          "x": 0,
                          "y": 0,
                          "height": 0,
                          "width": 0
                      },
                      "yAxisWidth": 15,
                      "yAxisWidthLeft": 10,
                      "yAxisWidthRight": 0,
                      "xAxisHeight": 10,
                      "isSparkline": false,
                      "dimHelpers": {},
                      "dimYAxis": {},
                      "dimXAxis": {},
                      "dimGrid": {},
                      "lgWidthForSideLegends": 0,
                      "xPadRight": 0,
                      "xPadLeft": 0,
                      "xAxisWidth": 0
                  },
                  "updateHelpers": {},
                  "zoomPanSelection": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308,
                      "dragged": false,
                      "graphics": {},
                      "eventList": [
                          "mousedown",
                          "mouseleave",
                          "mousemove",
                          "touchstart",
                          "touchmove",
                          "mouseup",
                          "touchend"
                      ],
                      "clientX": 0,
                      "clientY": 0,
                      "startX": 0,
                      "endX": 0,
                      "dragX": 0,
                      "startY": 0,
                      "endY": 0,
                      "dragY": 0,
                      "moveDirection": "none"
                  },
                  "pie": {
                      "chartType": "bar",
                      "initialAnim": false,
                      "dynamicAnim": false,
                      "animBeginArr": [
                          0
                      ],
                      "animDur": 0,
                      "defaultSize": 185,
                      "centerY": 92.5,
                      "centerX": 172.5,
                      "fullAngle": 360,
                      "initialAngle": 0,
                      "donutSize": 54.75853658536585,
                      "maxY": 0,
                      "sliceLabels": [],
                      "sliceSizes": [],
                      "prevSectorAngleArr": []
                  },
                  "rangeBar": {
                      "isHorizontal": true,
                      "strokeWidth": 2,
                      "isNullValue": false,
                      "isRangeBar": 0,
                      "xRatio": null,
                      "initialXRatio": null,
                      "invertedXRatio": null,
                      "invertedYRatio": 0.11594202898550725,
                      "baseLineInvertedY": 0.1,
                      "yaxisIndex": 0,
                      "seriesLen": 0,
                      "barHelpers": {}
                  },
                  "bar": {
                      "isHorizontal": true,
                      "strokeWidth": 2,
                      "isNullValue": false,
                      "isRangeBar": 0,
                      "xRatio": null,
                      "initialXRatio": null,
                      "invertedXRatio": null,
                      "invertedYRatio": 0.11594202898550725,
                      "baseLineInvertedY": 0.1,
                      "yaxisIndex": 0,
                      "seriesLen": 1,
                      "barHelpers": {},
                      "totalItems": 4,
                      "visibleI": 0,
                      "visibleItems": 4,
                      "zeroSerieses": [],
                      "radiusOnSeriesNumber": 0,
                      "isReversed": false
                  },
                  "annotations": {
                      "graphics": {},
                      "invertAxis": true,
                      "helpers": {},
                      "xAxisAnnotations": {
                          "invertAxis": true
                      },
                      "yAxisAnnotations": {},
                      "pointsAnnotations": {},
                      "xDivision": 86.25
                  }
              }
          },
          {
              "id": "DLzkY",
              "chart": {
                  "opts": {
                      "series": [
                          {
                              "name": "Bar",
                              "data": [
                                  {
                                      "x": "Item 1",
                                      "y": 10
                                  },
                                  {
                                      "x": "Item 2",
                                      "y": 20
                                  },
                                  {
                                      "x": "Item 3",
                                      "y": 30
                                  },
                                  {
                                      "x": "Item 4",
                                      "y": 40
                                  }
                              ]
                          }
                      ],
                      "annotations": {
                          "position": "front",
                          "yaxis": [],
                          "xaxis": [],
                          "points": []
                      },
                      "chart": {
                          "type": "bar",
                          "background": "",
                          "foreColor": "#333",
                          "offsetX": 0,
                          "offsetY": 0,
                          "toolbar": {
                              "show": false
                          },
                          "animations": {
                              "enabled": false
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 2,
                              "left": 2,
                              "blur": 4,
                              "color": "#000",
                              "opacity": 0.35
                          },
                          "fontFamily": "Roboto",
                          "height": 230,
                          "width": 400,
                          "id": "DLzkY"
                      },
                      "plotOptions": {
                          "bar": {
                              "horizontal": true,
                              "columnWidth": "70%",
                              "barHeight": "70%",
                              "distributed": false,
                              "borderRadius": 10,
                              "colors": {
                                  "ranges": [],
                                  "backgroundBarColors": [],
                                  "backgroundBarOpacity": 1
                              },
                              "dataLabels": {
                                  "position": "top"
                              }
                          },
                          "heatmap": {
                              "radius": 2,
                              "enableShades": true,
                              "shadeIntensity": 0.5
                          },
                          "radialBar": {
                              "startAngle": 0,
                              "endAngle": 360,
                              "offsetX": 0,
                              "offsetY": 0,
                              "hollow": {
                                  "margin": 5,
                                  "size": "50%",
                                  "background": "#fff",
                                  "position": "front",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "track": {
                                  "show": true,
                                  "background": "#f2f2f2",
                                  "strokeWidth": "97%",
                                  "opacity": 1,
                                  "margin": 5,
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "dataLabels": {
                                  "show": true,
                                  "name": {
                                      "show": true,
                                      "fontSize": 16,
                                      "offsetY": 0
                                  },
                                  "value": {
                                      "show": true,
                                      "fontSize": 14,
                                      "offsetY": 16
                                  },
                                  "total": {
                                      "show": false,
                                      "label": "Total",
                                      "fontSize": 16
                                  }
                              }
                          },
                          "pie": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "dataLabels": {
                                  "offset": 0
                              },
                              "donut": {
                                  "size": "65%",
                                  "labels": {
                                      "show": false,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "offsetY": -10
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 20,
                                          "offsetY": 10
                                      },
                                      "total": {
                                          "show": false,
                                          "showAlways": false,
                                          "label": "Total",
                                          "fontSize": 16
                                      }
                                  }
                              }
                          },
                          "radar": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "polygons": {
                                  "strokeColors": "#e8e8e8",
                                  "connectorColors": "#e8e8e8",
                                  "fill": {}
                              }
                          }
                      },
                      "theme": {
                          "mode": "light",
                          "palette": "palette4"
                      },
                      "dataLabels": {
                          "enabled": true,
                          "textAnchor": "middle",
                          "offsetX": -2,
                          "offsetY": -3,
                          "style": {
                              "fontSize": 12,
                              "fontWeight": 700,
                              "colors": [
                                  "#fff"
                              ]
                          },
                          "background": {
                              "enabled": false,
                              "foreColor": "#fff",
                              "borderRadius": 2,
                              "padding": 4,
                              "opacity": 0.9,
                              "borderWidth": 1,
                              "borderColor": "#fff"
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 1,
                              "left": 1,
                              "blur": 1,
                              "color": "#000",
                              "opacity": 0.45
                          }
                      },
                      "markers": {
                          "size": 0,
                          "strokeColors": "#fff",
                          "strokeWidth": 2,
                          "strokeOpacity": 0.9,
                          "strokeDashArray": 0,
                          "fillOpacity": 1,
                          "shape": "circle",
                          "radius": 2,
                          "offsetX": 0,
                          "offsetY": 0,
                          "hover": {}
                      },
                      "yaxis": [
                          {
                              "show": true,
                              "showAlways": false,
                              "showForNullSeries": true,
                              "opposite": false,
                              "reversed": false,
                              "logarithmic": false,
                              "logBase": 10,
                              "forceNiceScale": false,
                              "floating": false,
                              "labels": {
                                  "show": true,
                                  "minWidth": 0,
                                  "maxWidth": 160,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "rotate": 0,
                                  "padding": 20,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  }
                              },
                              "axisBorder": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "title": {
                                  "rotate": -90,
                                  "offsetY": 0,
                                  "offsetX": 0,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetX": 0
                              },
                              "crosshairs": {
                                  "show": true,
                                  "position": "front",
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 0
                                  }
                              }
                          }
                      ],
                      "stroke": {
                          "show": true,
                          "curve": "smooth",
                          "lineCap": "butt",
                          "width": 2,
                          "dashArray": 0
                      },
                      "fill": {
                          "type": "solid",
                          "opacity": 0.85,
                          "gradient": {
                              "shade": "dark",
                              "type": "horizontal",
                              "shadeIntensity": 0.5,
                              "inverseColors": true,
                              "opacityFrom": 1,
                              "opacityTo": 1,
                              "stops": [
                                  0,
                                  50,
                                  100
                              ],
                              "colorStops": []
                          },
                          "pattern": {
                              "style": "squares",
                              "width": 6,
                              "height": 6,
                              "strokeWidth": 2
                          }
                      },
                      "legend": {
                          "show": true,
                          "showForSingleSeries": false,
                          "floating": false,
                          "position": "bottom",
                          "horizontalAlign": "center",
                          "fontSize": 14,
                          "fontWeight": 400,
                          "offsetX": -20,
                          "offsetY": 0,
                          "labels": {
                              "useSeriesColors": false
                          },
                          "markers": {
                              "width": 12,
                              "height": 12,
                              "strokeWidth": 0,
                              "strokeColor": "#fff",
                              "radius": 12
                          },
                          "itemMargin": {
                              "horizontal": 5,
                              "vertical": 0
                          },
                          "onItemClick": {
                              "toggleDataSeries": true
                          },
                          "onItemHover": {
                              "highlightDataSeries": true
                          }
                      }
                  },
                  "w": {
                      "config": {
                          "annotations": {
                              "position": "front",
                              "texts": [],
                              "images": [],
                              "shapes": []
                          },
                          "chart": {
                              "animations": {
                                  "enabled": false,
                                  "easing": "swing",
                                  "speed": 800,
                                  "animateGradually": {
                                      "delay": 150,
                                      "enabled": true
                                  },
                                  "dynamicAnimation": {
                                      "enabled": true,
                                      "speed": 350
                                  }
                              },
                              "background": "",
                              "locales": [
                                  null
                              ],
                              "defaultLocale": "en",
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 2,
                                  "left": 2,
                                  "blur": 4,
                                  "color": "#000",
                                  "opacity": 0.35
                              },
                              "events": {},
                              "foreColor": "#333",
                              "fontFamily": "Roboto",
                              "height": 230,
                              "parentHeightOffset": 15,
                              "redrawOnParentResize": true,
                              "redrawOnWindowResize": true,
                              "id": "DLzkY",
                              "offsetX": 0,
                              "offsetY": 0,
                              "selection": {
                                  "enabled": false,
                                  "type": "x",
                                  "fill": {
                                      "color": "#24292e",
                                      "opacity": 0.1
                                  },
                                  "stroke": {
                                      "width": 1,
                                      "color": "#24292e",
                                      "opacity": 0.4,
                                      "dashArray": 3
                                  },
                                  "xaxis": {},
                                  "yaxis": {}
                              },
                              "sparkline": {
                                  "enabled": false
                              },
                              "brush": {
                                  "enabled": false,
                                  "autoScaleYaxis": true
                              },
                              "stacked": false,
                              "stackType": "normal",
                              "toolbar": {
                                  "show": false,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "tools": {
                                      "download": true,
                                      "selection": false,
                                      "zoom": false,
                                      "zoomin": false,
                                      "zoomout": false,
                                      "pan": false,
                                      "reset": false,
                                      "customIcons": []
                                  },
                                  "export": {
                                      "csv": {
                                          "columnDelimiter": ",",
                                          "headerCategory": "category",
                                          "headerValue": "value"
                                      },
                                      "png": {},
                                      "svg": {}
                                  },
                                  "autoSelected": "zoom"
                              },
                              "type": "bar",
                              "width": 400,
                              "zoom": {
                                  "enabled": false,
                                  "type": "x",
                                  "autoScaleYaxis": false,
                                  "zoomedArea": {
                                      "fill": {
                                          "color": "#90CAF9",
                                          "opacity": 0.4
                                      },
                                      "stroke": {
                                          "color": "#0D47A1",
                                          "opacity": 0.4,
                                          "width": 1
                                      }
                                  }
                              }
                          },
                          "plotOptions": {
                              "area": {
                                  "fillTo": "origin"
                              },
                              "bar": {
                                  "horizontal": true,
                                  "columnWidth": "70%",
                                  "barHeight": "70%",
                                  "distributed": false,
                                  "borderRadius": 10,
                                  "rangeBarOverlap": true,
                                  "rangeBarGroupRows": false,
                                  "colors": {
                                      "backgroundBarOpacity": 1,
                                      "backgroundBarRadius": 0
                                  },
                                  "dataLabels": {
                                      "position": "top",
                                      "maxItems": 100,
                                      "hideOverflowingLabels": true,
                                      "orientation": "horizontal"
                                  }
                              },
                              "bubble": {},
                              "candlestick": {
                                  "colors": {
                                      "upward": "#00B746",
                                      "downward": "#EF403C"
                                  },
                                  "wick": {
                                      "useFillColor": true
                                  }
                              },
                              "boxPlot": {
                                  "colors": {
                                      "upper": "#00E396",
                                      "lower": "#008FFB"
                                  }
                              },
                              "heatmap": {
                                  "radius": 2,
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "reverseNegativeShade": false,
                                  "distributed": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "treemap": {
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "distributed": false,
                                  "reverseNegativeShade": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "radialBar": {
                                  "inverseOrder": false,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "hollow": {
                                      "margin": 5,
                                      "size": "50%",
                                      "background": "#fff",
                                      "imageWidth": 150,
                                      "imageHeight": 150,
                                      "imageOffsetX": 0,
                                      "imageOffsetY": 0,
                                      "imageClipped": true,
                                      "position": "front",
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "track": {
                                      "show": true,
                                      "background": "#f2f2f2",
                                      "strokeWidth": "97%",
                                      "opacity": 1,
                                      "margin": 5,
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "dataLabels": {
                                      "show": true,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "fontWeight": 600,
                                          "offsetY": 0
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 14,
                                          "fontWeight": 400,
                                          "offsetY": 16
                                      },
                                      "total": {
                                          "show": false,
                                          "label": "Total",
                                          "fontSize": 16,
                                          "fontWeight": 600
                                      }
                                  }
                              },
                              "pie": {
                                  "customScale": 1,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "expandOnClick": true,
                                  "dataLabels": {
                                      "offset": 0,
                                      "minAngleToShowLabel": 10
                                  },
                                  "donut": {
                                      "size": "65%",
                                      "labels": {
                                          "show": false,
                                          "name": {
                                              "show": true,
                                              "fontSize": 16,
                                              "fontWeight": 600,
                                              "offsetY": -10
                                          },
                                          "value": {
                                              "show": true,
                                              "fontSize": 20,
                                              "fontWeight": 400,
                                              "offsetY": 10
                                          },
                                          "total": {
                                              "show": false,
                                              "showAlways": false,
                                              "label": "Total",
                                              "fontSize": 16,
                                              "fontWeight": 400
                                          }
                                      }
                                  }
                              },
                              "polarArea": {
                                  "rings": {
                                      "strokeWidth": 1,
                                      "strokeColor": "#e8e8e8"
                                  },
                                  "spokes": {
                                      "strokeWidth": 1,
                                      "connectorColors": "#e8e8e8"
                                  }
                              },
                              "radar": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "polygons": {
                                      "strokeWidth": 1,
                                      "strokeColors": "#e8e8e8",
                                      "connectorColors": "#e8e8e8",
                                      "fill": {}
                                  }
                              }
                          },
                          "dataLabels": {
                              "enabled": true,
                              "textAnchor": "middle",
                              "distributed": false,
                              "offsetX": -2,
                              "offsetY": -3,
                              "style": {
                                  "fontSize": 12,
                                  "fontWeight": 700
                              },
                              "background": {
                                  "enabled": false,
                                  "foreColor": "#fff",
                                  "borderRadius": 2,
                                  "padding": 4,
                                  "opacity": 0.9,
                                  "borderWidth": 1,
                                  "borderColor": "#fff",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 1,
                                      "left": 1,
                                      "blur": 1,
                                      "color": "#000",
                                      "opacity": 0.45
                                  }
                              },
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 1,
                                  "left": 1,
                                  "blur": 1,
                                  "color": "#000",
                                  "opacity": 0.45
                              }
                          },
                          "fill": {
                              "type": "solid",
                              "opacity": 0.85,
                              "gradient": {
                                  "shade": "dark",
                                  "type": "horizontal",
                                  "shadeIntensity": 0.5,
                                  "inverseColors": true,
                                  "opacityFrom": 1,
                                  "opacityTo": 1
                              },
                              "image": {
                                  "src": []
                              },
                              "pattern": {
                                  "style": "squares",
                                  "width": 6,
                                  "height": 6,
                                  "strokeWidth": 2
                              }
                          },
                          "forecastDataPoints": {
                              "count": 0,
                              "fillOpacity": 0.5,
                              "dashArray": 4
                          },
                          "grid": {
                              "show": true,
                              "borderColor": "#e0e0e0",
                              "strokeDashArray": 0,
                              "position": "back",
                              "xaxis": {
                                  "lines": {
                                      "show": false
                                  }
                              },
                              "yaxis": {
                                  "lines": {
                                      "show": true
                                  }
                              },
                              "row": {
                                  "opacity": 0.5
                              },
                              "column": {
                                  "opacity": 0.5
                              },
                              "padding": {
                                  "top": 0,
                                  "right": 25,
                                  "bottom": 0,
                                  "left": 15
                              }
                          },
                          "labels": [],
                          "legend": {
                              "show": true,
                              "showForSingleSeries": false,
                              "showForNullSeries": true,
                              "showForZeroSeries": true,
                              "floating": false,
                              "position": "bottom",
                              "horizontalAlign": "center",
                              "inverseOrder": false,
                              "fontSize": 14,
                              "fontWeight": 400,
                              "offsetX": -20,
                              "offsetY": 0,
                              "customLegendItems": [],
                              "labels": {
                                  "useSeriesColors": false
                              },
                              "markers": {
                                  "width": 12,
                                  "height": 12,
                                  "strokeWidth": 0,
                                  "strokeColor": "#fff",
                                  "radius": 12,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "shape": "square",
                                  "size": 8
                              },
                              "itemMargin": {
                                  "horizontal": 5,
                                  "vertical": 0
                              },
                              "onItemClick": {
                                  "toggleDataSeries": true
                              },
                              "onItemHover": {
                                  "highlightDataSeries": true
                              }
                          },
                          "markers": {
                              "discrete": [],
                              "size": 0,
                              "strokeColors": "#fff",
                              "strokeWidth": 2,
                              "strokeOpacity": 0.9,
                              "strokeDashArray": 0,
                              "fillOpacity": 1,
                              "shape": "circle",
                              "width": 8,
                              "height": 8,
                              "radius": 2,
                              "offsetX": 0,
                              "offsetY": 0,
                              "showNullDataPoints": true,
                              "hover": {
                                  "sizeOffset": 3
                              }
                          },
                          "noData": {
                              "align": "center",
                              "verticalAlign": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "fontSize": "14px"
                              }
                          },
                          "responsive": [],
                          "states": {
                              "normal": {
                                  "filter": {
                                      "type": "none",
                                      "value": 0
                                  }
                              },
                              "hover": {
                                  "filter": {
                                      "type": "lighten",
                                      "value": 0.1
                                  }
                              },
                              "active": {
                                  "allowMultipleDataPointsSelection": false,
                                  "filter": {
                                      "type": "darken",
                                      "value": 0.5
                                  }
                              }
                          },
                          "title": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 0,
                              "floating": false,
                              "style": {
                                  "fontSize": "14px",
                                  "fontWeight": 900
                              }
                          },
                          "subtitle": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 30,
                              "floating": false,
                              "style": {
                                  "fontSize": "12px",
                                  "fontWeight": 400
                              }
                          },
                          "stroke": {
                              "show": true,
                              "curve": "smooth",
                              "lineCap": "butt",
                              "width": 2,
                              "dashArray": 0
                          },
                          "tooltip": {
                              "enabled": true,
                              "shared": false,
                              "followCursor": false,
                              "intersect": true,
                              "inverseOrder": false,
                              "fillSeriesColor": false,
                              "theme": "light",
                              "style": {
                                  "fontSize": "12px"
                              },
                              "onDatasetHover": {
                                  "highlightDataSeries": false
                              },
                              "x": {
                                  "show": true,
                                  "format": "dd MMM"
                              },
                              "y": {
                                  "title": {}
                              },
                              "z": {
                                  "title": "Size: "
                              },
                              "marker": {
                                  "show": true
                              },
                              "items": {
                                  "display": "flex"
                              },
                              "fixed": {
                                  "enabled": false,
                                  "position": "topRight",
                                  "offsetX": 0,
                                  "offsetY": 0
                              }
                          },
                          "xaxis": {
                              "type": "category",
                              "categories": [],
                              "convertedCatToNumeric": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickPlacement": "between",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "theme": {
                              "mode": "light",
                              "palette": "palette4",
                              "monochrome": {
                                  "enabled": false,
                                  "color": "#008FFB",
                                  "shadeTo": "light",
                                  "shadeIntensity": 0.65
                              }
                          }
                      },
                      "globals": {
                          "chartID": "DLzkY",
                          "cuid": "293ppkmu",
                          "events": {
                              "beforeMount": [],
                              "mounted": [],
                              "updated": [],
                              "clicked": [],
                              "selection": [],
                              "dataPointSelection": [],
                              "zoomed": [],
                              "scrolled": []
                          },
                          "colors": [
                              "#4ecdc4",
                              "#c7f464",
                              "#81D4FA",
                              "#fd6a6a",
                              "#546E7A"
                          ],
                          "clientX": null,
                          "clientY": null,
                          "fill": {
                              "colors": [
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A"
                              ]
                          },
                          "stroke": {},
                          "dataLabels": {
                              "style": {
                                  "colors": [
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff",
                                      "#fff"
                                  ]
                              }
                          },
                          "radarPolygons": {
                              "fill": {
                                  "colors": [
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none"
                                  ]
                              }
                          },
                          "markers": {
                              "size": [
                                  0,
                                  0
                              ],
                              "largestSize": 0
                          },
                          "animationEnded": true,
                          "isDirty": true,
                          "isExecCalled": false,
                          "initialConfig": {},
                          "initialSeries": [
                              {
                                  "name": "Bar",
                                  "data": [
                                      {
                                          "x": "Item 1",
                                          "y": 10
                                      },
                                      {
                                          "x": "Item 2",
                                          "y": 20
                                      },
                                      {
                                          "x": "Item 3",
                                          "y": 30
                                      },
                                      {
                                          "x": "Item 4",
                                          "y": 40
                                      }
                                  ]
                              }
                          ],
                          "lastXAxis": {
                              "type": "category",
                              "categories": [],
                              "convertedCatToNumeric": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickPlacement": "between",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "lastYAxis": [
                              {
                                  "show": true,
                                  "showAlways": false,
                                  "showForNullSeries": true,
                                  "opposite": false,
                                  "reversed": false,
                                  "logarithmic": false,
                                  "logBase": 10,
                                  "forceNiceScale": false,
                                  "floating": false,
                                  "labels": {
                                      "show": true,
                                      "minWidth": 0,
                                      "maxWidth": 160,
                                      "offsetX": 0,
                                      "offsetY": 0,
                                      "rotate": 0,
                                      "padding": 20,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 400,
                                          "cssClass": ""
                                      }
                                  },
                                  "axisBorder": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 1,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "axisTicks": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 6,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "title": {
                                      "rotate": -90,
                                      "offsetY": 0,
                                      "offsetX": 0,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 700,
                                          "cssClass": ""
                                      }
                                  },
                                  "tooltip": {
                                      "enabled": false,
                                      "offsetX": 0
                                  },
                                  "crosshairs": {
                                      "show": true,
                                      "position": "front",
                                      "stroke": {
                                          "color": "#b6b6b6",
                                          "width": 1,
                                          "dashArray": 0
                                      }
                                  }
                              }
                          ],
                          "columnSeries": null,
                          "labels": [
                              "Item 1",
                              "Item 2",
                              "Item 3",
                              "Item 4"
                          ],
                          "timescaleLabels": [],
                          "noLabelsProvided": false,
                          "allSeriesCollapsed": false,
                          "collapsedSeries": [],
                          "collapsedSeriesIndices": [],
                          "ancillaryCollapsedSeries": [],
                          "ancillaryCollapsedSeriesIndices": [],
                          "risingSeries": [],
                          "dataFormatXNumeric": false,
                          "capturedSeriesIndex": -1,
                          "capturedDataPointIndex": -1,
                          "selectedDataPoints": [],
                          "goldenPadding": 35,
                          "invalidLogScale": false,
                          "ignoreYAxisIndexes": [],
                          "yAxisSameScaleIndices": [],
                          "maxValsInArrayIndex": 0,
                          "radialSize": 84.2439024390244,
                          "zoomEnabled": false,
                          "panEnabled": false,
                          "selectionEnabled": false,
                          "yaxis": null,
                          "mousedown": false,
                          "lastClientPosition": {},
                          "yValueDecimal": 0,
                          "total": 0,
                          "SVGNS": "http://www.w3.org/2000/svg",
                          "svgWidth": 400,
                          "svgHeight": 230,
                          "noData": false,
                          "locale": {
                              "toolbar": {
                                  "exportToSVG": "Download SVG",
                                  "exportToPNG": "Download PNG",
                                  "exportToCSV": "Download CSV",
                                  "menu": "Menu",
                                  "selection": "Selection",
                                  "selectionZoom": "Selection Zoom",
                                  "zoomIn": "Zoom In",
                                  "zoomOut": "Zoom Out",
                                  "pan": "Panning",
                                  "reset": "Reset Zoom"
                              }
                          },
                          "dom": {
                              "baseEl": {
                                  "_prevClass": "DLzkY"
                              },
                              "elWrap": {},
                              "Paper": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "svg",
                                  "_defs": {
                                      "_stroke": "#000000",
                                      "_event": null,
                                      "dom": {},
                                      "node": {},
                                      "type": "defs"
                                  }
                              },
                              "elGraphical": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elAnnotations": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elLegendWrap": {},
                              "elGridRectMask": {},
                              "elGridRectMarkerMask": {},
                              "elForecastMask": {},
                              "elNonForecastMask": {},
                              "elGridRect": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              },
                              "elGridRectMarker": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              }
                          },
                          "memory": {
                              "methodsToExec": []
                          },
                          "shouldAnimate": true,
                          "skipLastTimelinelabel": false,
                          "skipFirstTimelinelabel": false,
                          "delayedElements": [
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              },
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              },
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              }
                          ],
                          "axisCharts": true,
                          "isDataXYZ": false,
                          "resized": true,
                          "resizeTimer": null,
                          "comboCharts": false,
                          "dataChanged": false,
                          "previousPaths": [],
                          "allSeriesHasEqualX": true,
                          "pointsArray": [],
                          "dataLabelsRects": [
                              [
                                  {
                                      "x": 82.35,
                                      "y": 17.125,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 168.6,
                                      "y": 63.375,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 254.85000000000002,
                                      "y": 109.625,
                                      "width": 0,
                                      "height": 0
                                  },
                                  {
                                      "x": 341.1,
                                      "y": 155.875,
                                      "width": 0,
                                      "height": 0
                                  }
                              ]
                          ],
                          "lastDrawnDataLabelsIndexes": [
                              [
                                  0,
                                  1,
                                  2,
                                  3,
                                  0,
                                  1,
                                  2,
                                  3
                              ]
                          ],
                          "hasNullValues": false,
                          "zoomed": false,
                          "gridWidth": 345,
                          "gridHeight": 185,
                          "rotateXLabels": false,
                          "defaultLabels": false,
                          "yLabelFormatters": [
                              null
                          ],
                          "LINE_HEIGHT_RATIO": 1.618,
                          "xAxisLabelsHeight": 10,
                          "xAxisLabelsWidth": 0,
                          "yAxisLabelsWidth": 0,
                          "scaleX": 1,
                          "scaleY": 1,
                          "translateX": 30,
                          "translateY": 30,
                          "translateYAxisX": [
                              -3
                          ],
                          "yAxisWidths": [],
                          "translateXAxisY": -8,
                          "translateXAxisX": 0,
                          "tooltip": {
                              "tooltipUtil": {},
                              "tooltipLabels": {
                                  "tooltipUtil": {}
                              },
                              "tooltipPosition": {},
                              "marker": {
                                  "tooltipPosition": {}
                              },
                              "intersect": {},
                              "axesTooltip": {},
                              "showOnIntersect": true,
                              "showTooltipTitle": true,
                              "fixedTooltip": false,
                              "xaxisTooltip": null,
                              "yaxisTTEls": null,
                              "isBarShared": false,
                              "lastHoverTime": 1683551096058,
                              "xyRatios": {
                                  "yRatio": [
                                      0.21621621621621623
                                  ],
                                  "invertedYRatio": 0.11594202898550725,
                                  "zRatio": null,
                                  "xRatio": null,
                                  "initialXRatio": null,
                                  "invertedXRatio": null,
                                  "baseLineInvertedY": 0.1,
                                  "baseLineY": [
                                      0
                                  ],
                                  "baseLineX": 0
                              },
                              "isXAxisTooltipEnabled": false,
                              "yaxisTooltips": [
                                  false
                              ],
                              "allTooltipSeriesGroups": [],
                              "xaxisOffY": 186,
                              "yaxisOffX": 1,
                              "yaxisTooltip": {},
                              "yaxisTooltipText": [
                                  {}
                              ],
                              "xcrosshairsWidth": 0,
                              "ycrosshairs": {
                                  "instance": {
                                      "_stroke": "#b6b6b6",
                                      "_event": null,
                                      "dom": {},
                                      "type": "line"
                                  }
                              },
                              "ycrosshairsHidden": {
                                  "instance": {
                                      "_stroke": "#b6b6b6",
                                      "_event": null,
                                      "dom": {},
                                      "type": "line"
                                  }
                              },
                              "xAxisTicksPositions": [
                                  86.25,
                                  172.5,
                                  258.75,
                                  345
                              ],
                              "dataPointsDividedHeight": 46.25,
                              "dataPointsDividedWidth": 86.25,
                              "tooltipTitle": {},
                              "legendLabels": {},
                              "ttItems": [
                                  {}
                              ],
                              "seriesBound": {
                                  "x": 0,
                                  "y": 0,
                                  "width": 0,
                                  "height": 0,
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0
                              }
                          },
                          "series": [
                              [
                                  10,
                                  20,
                                  30,
                                  40
                              ]
                          ],
                          "seriesCandleO": [],
                          "seriesCandleH": [],
                          "seriesCandleM": [],
                          "seriesCandleL": [],
                          "seriesCandleC": [],
                          "seriesRangeStart": [],
                          "seriesRangeEnd": [],
                          "seriesRangeBar": [],
                          "seriesPercent": [
                              [
                                  100,
                                  100,
                                  100,
                                  100
                              ]
                          ],
                          "seriesGoals": [
                              [
                                  null,
                                  null,
                                  null,
                                  null
                              ]
                          ],
                          "seriesX": [
                              null
                          ],
                          "seriesZ": [
                              []
                          ],
                          "seriesNames": [
                              "Bar"
                          ],
                          "seriesTotals": [
                              100
                          ],
                          "seriesLog": [
                              null
                          ],
                          "seriesColors": [
                              null
                          ],
                          "stackedSeriesTotals": [
                              10,
                              20,
                              30,
                              40
                          ],
                          "seriesXvalues": [
                              [
                                  null,
                                  258.85,
                                  388.225,
                                  517.6
                              ]
                          ],
                          "seriesYvalues": [
                              [
                                  53.1875,
                                  99.4375,
                                  145.6875,
                                  191.9375
                              ]
                          ],
                          "categoryLabels": [],
                          "selectionResizeTimer": null,
                          "isXNumeric": false,
                          "xaxisLabelsCount": 0,
                          "isMultiLineX": false,
                          "isMultipleYAxis": false,
                          "maxY": 40,
                          "minY": 0,
                          "minYArr": [
                              0
                          ],
                          "maxYArr": [
                              40
                          ],
                          "maxX": -1.7976931348623157e+308,
                          "minX": 1.7976931348623157e+308,
                          "initialMaxX": -1.7976931348623157e+308,
                          "initialMinX": 1.7976931348623157e+308,
                          "maxDate": 0,
                          "minDate": 1.7976931348623157e+308,
                          "minZ": 1.7976931348623157e+308,
                          "maxZ": -1.7976931348623157e+308,
                          "minXDiff": 1.7976931348623157e+308,
                          "yAxisScale": [
                              {
                                  "result": [
                                      0,
                                      10,
                                      20,
                                      30,
                                      40
                                  ],
                                  "niceMin": 0,
                                  "niceMax": 40
                              }
                          ],
                          "xAxisScale": null,
                          "xAxisTicksPositions": [],
                          "yLabelsCoords": [
                              {
                                  "width": 0,
                                  "index": 0
                              }
                          ],
                          "yTitleCoords": [
                              {
                                  "width": 0,
                                  "index": 0
                              }
                          ],
                          "barPadForNumericAxis": 0,
                          "padHorizontal": 0,
                          "xRange": null,
                          "yRange": [
                              40
                          ],
                          "zRange": null,
                          "dataPoints": 4,
                          "xTickAmount": 4,
                          "xyCharts": true,
                          "isBarHorizontal": true,
                          "chartClass": ".apexchartsDLzkY",
                          "comboBarCount": 0,
                          "isRangeBar": false,
                          "xAxisHeight": 10,
                          "yLogRatio": [
                              0.21621621621621623
                          ],
                          "logYRange": [
                              null
                          ]
                      }
                  },
                  "publicMethods": [
                      "updateOptions",
                      "updateSeries",
                      "appendData",
                      "appendSeries",
                      "toggleSeries",
                      "showSeries",
                      "hideSeries",
                      "setLocale",
                      "resetSeries",
                      "zoomX",
                      "toggleDataPointSelection",
                      "dataURI",
                      "addXaxisAnnotation",
                      "addYaxisAnnotation",
                      "addPointAnnotation",
                      "clearAnnotations",
                      "removeAnnotation",
                      "paper",
                      "destroy"
                  ],
                  "eventList": [
                      "click",
                      "mousedown",
                      "mousemove",
                      "mouseleave",
                      "touchstart",
                      "touchmove",
                      "touchleave",
                      "mouseup",
                      "touchend"
                  ],
                  "animations": {},
                  "axes": {},
                  "core": {},
                  "config": {
                      "opts": {}
                  },
                  "data": {
                      "coreUtils": {},
                      "fallbackToCategory": true,
                      "activeSeriesIndex": 0
                  },
                  "grid": {
                      "xaxisLabels": [
                          "Item 1",
                          "Item 2",
                          "Item 3",
                          "Item 4"
                      ],
                      "axesUtils": {},
                      "isRangeBar": 0,
                      "elg": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      },
                      "elgridLinesH": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      },
                      "elgridLinesV": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      }
                  },
                  "graphics": {},
                  "coreUtils": {},
                  "crosshairs": {},
                  "events": {},
                  "exports": {},
                  "localization": {},
                  "options": {
                      "yAxis": {
                          "show": true,
                          "showAlways": false,
                          "showForNullSeries": true,
                          "opposite": false,
                          "reversed": false,
                          "logarithmic": false,
                          "logBase": 10,
                          "forceNiceScale": false,
                          "floating": false,
                          "labels": {
                              "show": true,
                              "minWidth": 0,
                              "maxWidth": 160,
                              "offsetX": 0,
                              "offsetY": 0,
                              "rotate": 0,
                              "padding": 20,
                              "style": {
                                  "colors": [],
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": ""
                              }
                          },
                          "axisBorder": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 1,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "axisTicks": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 6,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "title": {
                              "rotate": -90,
                              "offsetY": 0,
                              "offsetX": 0,
                              "style": {
                                  "fontSize": "11px",
                                  "fontWeight": 900,
                                  "cssClass": ""
                              }
                          },
                          "tooltip": {
                              "enabled": false,
                              "offsetX": 0
                          },
                          "crosshairs": {
                              "show": true,
                              "position": "front",
                              "stroke": {
                                  "color": "#b6b6b6",
                                  "width": 1,
                                  "dashArray": 0
                              }
                          }
                      },
                      "pointAnnotation": {
                          "x": 0,
                          "y": null,
                          "yAxisIndex": 0,
                          "seriesIndex": 0,
                          "marker": {
                              "size": 4,
                              "fillColor": "#fff",
                              "strokeWidth": 2,
                              "strokeColor": "#333",
                              "shape": "circle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "radius": 2,
                              "cssClass": ""
                          },
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          },
                          "customSVG": {
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "image": {
                              "width": 20,
                              "height": 20,
                              "offsetX": 0,
                              "offsetY": 0
                          }
                      },
                      "yAxisAnnotation": {
                          "y": 0,
                          "y2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "width": "100%",
                          "yAxisIndex": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "end",
                              "position": "right",
                              "offsetX": 0,
                              "offsetY": -3,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "xAxisAnnotation": {
                          "x": 0,
                          "x2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "orientation": "vertical",
                              "position": "top",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "text": {
                          "x": 0,
                          "y": 0,
                          "text": "",
                          "textAnchor": "start",
                          "fontSize": "13px",
                          "fontWeight": 400,
                          "appendTo": ".apexcharts-annotations",
                          "backgroundColor": "transparent",
                          "borderColor": "#c2c2c2",
                          "borderRadius": 0,
                          "borderWidth": 0,
                          "paddingLeft": 4,
                          "paddingRight": 4,
                          "paddingTop": 2,
                          "paddingBottom": 2
                      }
                  },
                  "responsive": {},
                  "series": {
                      "legendInactiveClass": "legend-mouseover-inactive"
                  },
                  "theme": {
                      "isColorFn": false,
                      "isHeatmapDistributed": false,
                      "isBarDistributed": false
                  },
                  "formatters": {
                      "tooltipKeyFormat": "dd MMM"
                  },
                  "titleSubtitle": {},
                  "legend": {
                      "isBarsDistributed": false,
                      "legendHelpers": {}
                  },
                  "toolbar": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308
                  },
                  "dimensions": {
                      "lgRect": {
                          "x": 0,
                          "y": 0,
                          "height": 0,
                          "width": 0
                      },
                      "yAxisWidth": 15,
                      "yAxisWidthLeft": 10,
                      "yAxisWidthRight": 0,
                      "xAxisHeight": 10,
                      "isSparkline": false,
                      "dimHelpers": {},
                      "dimYAxis": {},
                      "dimXAxis": {},
                      "dimGrid": {},
                      "lgWidthForSideLegends": 0,
                      "xPadRight": 0,
                      "xPadLeft": 0,
                      "xAxisWidth": 0
                  },
                  "updateHelpers": {},
                  "zoomPanSelection": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308,
                      "dragged": false,
                      "graphics": {},
                      "eventList": [
                          "mousedown",
                          "mouseleave",
                          "mousemove",
                          "touchstart",
                          "touchmove",
                          "mouseup",
                          "touchend"
                      ],
                      "clientX": 0,
                      "clientY": 0,
                      "startX": 0,
                      "endX": 0,
                      "dragX": 0,
                      "startY": 0,
                      "endY": 0,
                      "dragY": 0,
                      "moveDirection": "none"
                  },
                  "pie": {
                      "chartType": "bar",
                      "initialAnim": false,
                      "dynamicAnim": false,
                      "animBeginArr": [
                          0
                      ],
                      "animDur": 0,
                      "defaultSize": 185,
                      "centerY": 92.5,
                      "centerX": 172.5,
                      "fullAngle": 360,
                      "initialAngle": 0,
                      "donutSize": 54.75853658536585,
                      "maxY": 0,
                      "sliceLabels": [],
                      "sliceSizes": [],
                      "prevSectorAngleArr": []
                  },
                  "rangeBar": {
                      "isHorizontal": true,
                      "strokeWidth": 2,
                      "isNullValue": false,
                      "isRangeBar": 0,
                      "xRatio": null,
                      "initialXRatio": null,
                      "invertedXRatio": null,
                      "invertedYRatio": 0.11594202898550725,
                      "baseLineInvertedY": 0.1,
                      "yaxisIndex": 0,
                      "seriesLen": 0,
                      "barHelpers": {}
                  },
                  "bar": {
                      "isHorizontal": true,
                      "strokeWidth": 2,
                      "isNullValue": false,
                      "isRangeBar": 0,
                      "xRatio": null,
                      "initialXRatio": null,
                      "invertedXRatio": null,
                      "invertedYRatio": 0.11594202898550725,
                      "baseLineInvertedY": 0.1,
                      "yaxisIndex": 0,
                      "seriesLen": 1,
                      "barHelpers": {},
                      "totalItems": 4,
                      "visibleI": 0,
                      "visibleItems": 4,
                      "zeroSerieses": [],
                      "radiusOnSeriesNumber": 0,
                      "isReversed": false
                  },
                  "annotations": {
                      "graphics": {},
                      "invertAxis": true,
                      "helpers": {},
                      "xAxisAnnotations": {
                          "invertAxis": true
                      },
                      "yAxisAnnotations": {},
                      "pointsAnnotations": {},
                      "xDivision": 86.25
                  }
              }
          },
          {
              "id": "tIEba",
              "chart": {
                  "opts": {
                      "series": [
                          {
                              "name": "Column",
                              "data": [
                                  {
                                      "x": "Item 1",
                                      "y": 10
                                  },
                                  {
                                      "x": "Item 2",
                                      "y": 20
                                  },
                                  {
                                      "x": "Item 3",
                                      "y": 30
                                  },
                                  {
                                      "x": "Item 4",
                                      "y": 40
                                  }
                              ]
                          }
                      ],
                      "annotations": {
                          "position": "front",
                          "yaxis": [],
                          "xaxis": [],
                          "points": []
                      },
                      "chart": {
                          "type": "bar",
                          "background": "",
                          "foreColor": "#333",
                          "offsetX": 0,
                          "offsetY": 0,
                          "toolbar": {
                              "show": false
                          },
                          "animations": {
                              "enabled": false
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 2,
                              "left": 2,
                              "blur": 4,
                              "color": "#000",
                              "opacity": 0.35
                          },
                          "fontFamily": "Roboto",
                          "height": 250,
                          "width": 400,
                          "id": "tIEba"
                      },
                      "plotOptions": {
                          "bar": {
                              "horizontal": false,
                              "columnWidth": "70%",
                              "barHeight": "70%",
                              "distributed": false,
                              "borderRadius": 10,
                              "colors": {
                                  "ranges": [],
                                  "backgroundBarColors": [],
                                  "backgroundBarOpacity": 1
                              },
                              "dataLabels": {
                                  "position": "top"
                              }
                          },
                          "heatmap": {
                              "radius": 2,
                              "enableShades": true,
                              "shadeIntensity": 0.5
                          },
                          "radialBar": {
                              "startAngle": 0,
                              "endAngle": 360,
                              "offsetX": 0,
                              "offsetY": 0,
                              "hollow": {
                                  "margin": 5,
                                  "size": "50%",
                                  "background": "#fff",
                                  "position": "front",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "track": {
                                  "show": true,
                                  "background": "#f2f2f2",
                                  "strokeWidth": "97%",
                                  "opacity": 1,
                                  "margin": 5,
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "dataLabels": {
                                  "show": true,
                                  "name": {
                                      "show": true,
                                      "fontSize": 16,
                                      "offsetY": 0
                                  },
                                  "value": {
                                      "show": true,
                                      "fontSize": 14,
                                      "offsetY": 16
                                  },
                                  "total": {
                                      "show": false,
                                      "label": "Total",
                                      "fontSize": 16
                                  }
                              }
                          },
                          "pie": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "dataLabels": {
                                  "offset": 0
                              },
                              "donut": {
                                  "size": "65%",
                                  "labels": {
                                      "show": false,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "offsetY": -10
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 20,
                                          "offsetY": 10
                                      },
                                      "total": {
                                          "show": false,
                                          "showAlways": false,
                                          "label": "Total",
                                          "fontSize": 16
                                      }
                                  }
                              }
                          },
                          "radar": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "polygons": {
                                  "strokeColors": "#e8e8e8",
                                  "connectorColors": "#e8e8e8",
                                  "fill": {}
                              }
                          }
                      },
                      "theme": {
                          "mode": "light",
                          "palette": "palette4"
                      },
                      "dataLabels": {
                          "enabled": false,
                          "textAnchor": "middle",
                          "offsetX": 0,
                          "offsetY": 0,
                          "style": {
                              "fontSize": 12,
                              "fontWeight": 700
                          },
                          "background": {
                              "enabled": true,
                              "foreColor": "#fff",
                              "borderRadius": 2,
                              "padding": 4,
                              "opacity": 0.9,
                              "borderWidth": 1,
                              "borderColor": "#fff"
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 1,
                              "left": 1,
                              "blur": 1,
                              "color": "#000",
                              "opacity": 0.45
                          }
                      },
                      "markers": {
                          "size": 0,
                          "strokeColors": "#fff",
                          "strokeWidth": 2,
                          "strokeOpacity": 0.9,
                          "strokeDashArray": 0,
                          "fillOpacity": 1,
                          "shape": "circle",
                          "radius": 2,
                          "offsetX": 0,
                          "offsetY": 0,
                          "hover": {}
                      },
                      "yaxis": [
                          {
                              "show": true,
                              "showAlways": false,
                              "showForNullSeries": true,
                              "opposite": false,
                              "reversed": false,
                              "logarithmic": false,
                              "logBase": 10,
                              "forceNiceScale": false,
                              "floating": false,
                              "labels": {
                                  "show": true,
                                  "minWidth": 0,
                                  "maxWidth": 160,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "rotate": 0,
                                  "padding": 20,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  }
                              },
                              "axisBorder": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "title": {
                                  "rotate": -90,
                                  "offsetY": 0,
                                  "offsetX": 0,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetX": 0
                              },
                              "crosshairs": {
                                  "show": true,
                                  "position": "front",
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 0
                                  }
                              }
                          }
                      ],
                      "stroke": {
                          "show": true,
                          "curve": "smooth",
                          "lineCap": "butt",
                          "width": 2,
                          "dashArray": 0
                      },
                      "fill": {
                          "type": "solid",
                          "opacity": 0.85,
                          "gradient": {
                              "shade": "dark",
                              "type": "horizontal",
                              "shadeIntensity": 0.5,
                              "inverseColors": true,
                              "opacityFrom": 1,
                              "opacityTo": 1,
                              "stops": [
                                  0,
                                  50,
                                  100
                              ],
                              "colorStops": []
                          },
                          "pattern": {
                              "style": "squares",
                              "width": 6,
                              "height": 6,
                              "strokeWidth": 2
                          }
                      },
                      "legend": {
                          "show": true,
                          "showForSingleSeries": false,
                          "floating": false,
                          "position": "bottom",
                          "horizontalAlign": "center",
                          "fontSize": 14,
                          "fontWeight": 400,
                          "offsetX": -20,
                          "offsetY": 0,
                          "labels": {
                              "useSeriesColors": false
                          },
                          "markers": {
                              "width": 12,
                              "height": 12,
                              "strokeWidth": 0,
                              "strokeColor": "#fff",
                              "radius": 12
                          },
                          "itemMargin": {
                              "horizontal": 5,
                              "vertical": 0
                          },
                          "onItemClick": {
                              "toggleDataSeries": true
                          },
                          "onItemHover": {
                              "highlightDataSeries": true
                          }
                      }
                  },
                  "w": {
                      "config": {
                          "annotations": {
                              "position": "front",
                              "texts": [],
                              "images": [],
                              "shapes": []
                          },
                          "chart": {
                              "animations": {
                                  "enabled": false,
                                  "easing": "swing",
                                  "speed": 800,
                                  "animateGradually": {
                                      "delay": 150,
                                      "enabled": true
                                  },
                                  "dynamicAnimation": {
                                      "enabled": true,
                                      "speed": 350
                                  }
                              },
                              "background": "",
                              "locales": [
                                  null
                              ],
                              "defaultLocale": "en",
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 2,
                                  "left": 2,
                                  "blur": 4,
                                  "color": "#000",
                                  "opacity": 0.35
                              },
                              "events": {},
                              "foreColor": "#333",
                              "fontFamily": "Roboto",
                              "height": 250,
                              "parentHeightOffset": 15,
                              "redrawOnParentResize": true,
                              "redrawOnWindowResize": true,
                              "id": "tIEba",
                              "offsetX": 0,
                              "offsetY": 0,
                              "selection": {
                                  "enabled": false,
                                  "type": "x",
                                  "fill": {
                                      "color": "#24292e",
                                      "opacity": 0.1
                                  },
                                  "stroke": {
                                      "width": 1,
                                      "color": "#24292e",
                                      "opacity": 0.4,
                                      "dashArray": 3
                                  },
                                  "xaxis": {},
                                  "yaxis": {}
                              },
                              "sparkline": {
                                  "enabled": false
                              },
                              "brush": {
                                  "enabled": false,
                                  "autoScaleYaxis": true
                              },
                              "stacked": false,
                              "stackType": "normal",
                              "toolbar": {
                                  "show": false,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "tools": {
                                      "download": true,
                                      "selection": false,
                                      "zoom": false,
                                      "zoomin": false,
                                      "zoomout": false,
                                      "pan": false,
                                      "reset": false,
                                      "customIcons": []
                                  },
                                  "export": {
                                      "csv": {
                                          "columnDelimiter": ",",
                                          "headerCategory": "category",
                                          "headerValue": "value"
                                      },
                                      "png": {},
                                      "svg": {}
                                  },
                                  "autoSelected": "zoom"
                              },
                              "type": "bar",
                              "width": 400,
                              "zoom": {
                                  "enabled": true,
                                  "type": "x",
                                  "autoScaleYaxis": false,
                                  "zoomedArea": {
                                      "fill": {
                                          "color": "#90CAF9",
                                          "opacity": 0.4
                                      },
                                      "stroke": {
                                          "color": "#0D47A1",
                                          "opacity": 0.4,
                                          "width": 1
                                      }
                                  }
                              }
                          },
                          "plotOptions": {
                              "area": {
                                  "fillTo": "origin"
                              },
                              "bar": {
                                  "horizontal": false,
                                  "columnWidth": "70%",
                                  "barHeight": "70%",
                                  "distributed": false,
                                  "borderRadius": 10,
                                  "rangeBarOverlap": true,
                                  "rangeBarGroupRows": false,
                                  "colors": {
                                      "backgroundBarOpacity": 1,
                                      "backgroundBarRadius": 0
                                  },
                                  "dataLabels": {
                                      "position": "top",
                                      "maxItems": 100,
                                      "hideOverflowingLabels": true,
                                      "orientation": "horizontal"
                                  }
                              },
                              "bubble": {},
                              "candlestick": {
                                  "colors": {
                                      "upward": "#00B746",
                                      "downward": "#EF403C"
                                  },
                                  "wick": {
                                      "useFillColor": true
                                  }
                              },
                              "boxPlot": {
                                  "colors": {
                                      "upper": "#00E396",
                                      "lower": "#008FFB"
                                  }
                              },
                              "heatmap": {
                                  "radius": 2,
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "reverseNegativeShade": false,
                                  "distributed": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "treemap": {
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "distributed": false,
                                  "reverseNegativeShade": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "radialBar": {
                                  "inverseOrder": false,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "hollow": {
                                      "margin": 5,
                                      "size": "50%",
                                      "background": "#fff",
                                      "imageWidth": 150,
                                      "imageHeight": 150,
                                      "imageOffsetX": 0,
                                      "imageOffsetY": 0,
                                      "imageClipped": true,
                                      "position": "front",
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "track": {
                                      "show": true,
                                      "background": "#f2f2f2",
                                      "strokeWidth": "97%",
                                      "opacity": 1,
                                      "margin": 5,
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "dataLabels": {
                                      "show": true,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "fontWeight": 600,
                                          "offsetY": 0
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 14,
                                          "fontWeight": 400,
                                          "offsetY": 16
                                      },
                                      "total": {
                                          "show": false,
                                          "label": "Total",
                                          "fontSize": 16,
                                          "fontWeight": 600
                                      }
                                  }
                              },
                              "pie": {
                                  "customScale": 1,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "expandOnClick": true,
                                  "dataLabels": {
                                      "offset": 0,
                                      "minAngleToShowLabel": 10
                                  },
                                  "donut": {
                                      "size": "65%",
                                      "labels": {
                                          "show": false,
                                          "name": {
                                              "show": true,
                                              "fontSize": 16,
                                              "fontWeight": 600,
                                              "offsetY": -10
                                          },
                                          "value": {
                                              "show": true,
                                              "fontSize": 20,
                                              "fontWeight": 400,
                                              "offsetY": 10
                                          },
                                          "total": {
                                              "show": false,
                                              "showAlways": false,
                                              "label": "Total",
                                              "fontSize": 16,
                                              "fontWeight": 400
                                          }
                                      }
                                  }
                              },
                              "polarArea": {
                                  "rings": {
                                      "strokeWidth": 1,
                                      "strokeColor": "#e8e8e8"
                                  },
                                  "spokes": {
                                      "strokeWidth": 1,
                                      "connectorColors": "#e8e8e8"
                                  }
                              },
                              "radar": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "polygons": {
                                      "strokeWidth": 1,
                                      "strokeColors": "#e8e8e8",
                                      "connectorColors": "#e8e8e8",
                                      "fill": {}
                                  }
                              }
                          },
                          "dataLabels": {
                              "enabled": false,
                              "textAnchor": "middle",
                              "distributed": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "fontSize": 12,
                                  "fontWeight": 700
                              },
                              "background": {
                                  "enabled": true,
                                  "foreColor": "#fff",
                                  "borderRadius": 2,
                                  "padding": 4,
                                  "opacity": 0.9,
                                  "borderWidth": 1,
                                  "borderColor": "#fff",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 1,
                                      "left": 1,
                                      "blur": 1,
                                      "color": "#000",
                                      "opacity": 0.45
                                  }
                              },
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 1,
                                  "left": 1,
                                  "blur": 1,
                                  "color": "#000",
                                  "opacity": 0.45
                              }
                          },
                          "fill": {
                              "type": "solid",
                              "opacity": 0.85,
                              "gradient": {
                                  "shade": "dark",
                                  "type": "horizontal",
                                  "shadeIntensity": 0.5,
                                  "inverseColors": true,
                                  "opacityFrom": 1,
                                  "opacityTo": 1
                              },
                              "image": {
                                  "src": []
                              },
                              "pattern": {
                                  "style": "squares",
                                  "width": 6,
                                  "height": 6,
                                  "strokeWidth": 2
                              }
                          },
                          "forecastDataPoints": {
                              "count": 0,
                              "fillOpacity": 0.5,
                              "dashArray": 4
                          },
                          "grid": {
                              "show": true,
                              "borderColor": "#e0e0e0",
                              "strokeDashArray": 0,
                              "position": "back",
                              "xaxis": {
                                  "lines": {
                                      "show": false
                                  }
                              },
                              "yaxis": {
                                  "lines": {
                                      "show": true
                                  }
                              },
                              "row": {
                                  "opacity": 0.5
                              },
                              "column": {
                                  "opacity": 0.5
                              },
                              "padding": {
                                  "top": 0,
                                  "right": 25,
                                  "bottom": 0,
                                  "left": 15
                              }
                          },
                          "labels": [],
                          "legend": {
                              "show": true,
                              "showForSingleSeries": false,
                              "showForNullSeries": true,
                              "showForZeroSeries": true,
                              "floating": false,
                              "position": "bottom",
                              "horizontalAlign": "center",
                              "inverseOrder": false,
                              "fontSize": 14,
                              "fontWeight": 400,
                              "offsetX": -20,
                              "offsetY": 0,
                              "customLegendItems": [],
                              "labels": {
                                  "useSeriesColors": false
                              },
                              "markers": {
                                  "width": 12,
                                  "height": 12,
                                  "strokeWidth": 0,
                                  "strokeColor": "#fff",
                                  "radius": 12,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "shape": "square",
                                  "size": 8
                              },
                              "itemMargin": {
                                  "horizontal": 5,
                                  "vertical": 0
                              },
                              "onItemClick": {
                                  "toggleDataSeries": true
                              },
                              "onItemHover": {
                                  "highlightDataSeries": true
                              }
                          },
                          "markers": {
                              "discrete": [],
                              "size": 0,
                              "strokeColors": "#fff",
                              "strokeWidth": 2,
                              "strokeOpacity": 0.9,
                              "strokeDashArray": 0,
                              "fillOpacity": 1,
                              "shape": "circle",
                              "width": 8,
                              "height": 8,
                              "radius": 2,
                              "offsetX": 0,
                              "offsetY": 0,
                              "showNullDataPoints": true,
                              "hover": {
                                  "sizeOffset": 3
                              }
                          },
                          "noData": {
                              "align": "center",
                              "verticalAlign": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "fontSize": "14px"
                              }
                          },
                          "responsive": [],
                          "states": {
                              "normal": {
                                  "filter": {
                                      "type": "none",
                                      "value": 0
                                  }
                              },
                              "hover": {
                                  "filter": {
                                      "type": "lighten",
                                      "value": 0.1
                                  }
                              },
                              "active": {
                                  "allowMultipleDataPointsSelection": false,
                                  "filter": {
                                      "type": "darken",
                                      "value": 0.5
                                  }
                              }
                          },
                          "title": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 0,
                              "floating": false,
                              "style": {
                                  "fontSize": "14px",
                                  "fontWeight": 900
                              }
                          },
                          "subtitle": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 30,
                              "floating": false,
                              "style": {
                                  "fontSize": "12px",
                                  "fontWeight": 400
                              }
                          },
                          "stroke": {
                              "show": true,
                              "curve": "smooth",
                              "lineCap": "butt",
                              "width": 2,
                              "dashArray": 0
                          },
                          "tooltip": {
                              "enabled": true,
                              "shared": false,
                              "followCursor": false,
                              "intersect": true,
                              "inverseOrder": false,
                              "fillSeriesColor": false,
                              "theme": "light",
                              "style": {
                                  "fontSize": "12px"
                              },
                              "onDatasetHover": {
                                  "highlightDataSeries": false
                              },
                              "x": {
                                  "show": true,
                                  "format": "dd MMM"
                              },
                              "y": {
                                  "title": {}
                              },
                              "z": {
                                  "title": "Size: "
                              },
                              "marker": {
                                  "show": true
                              },
                              "items": {
                                  "display": "flex"
                              },
                              "fixed": {
                                  "enabled": false,
                                  "position": "topRight",
                                  "offsetX": 0,
                                  "offsetY": 0
                              }
                          },
                          "xaxis": {
                              "type": "category",
                              "categories": [],
                              "convertedCatToNumeric": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickPlacement": "between",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "theme": {
                              "mode": "light",
                              "palette": "palette4",
                              "monochrome": {
                                  "enabled": false,
                                  "color": "#008FFB",
                                  "shadeTo": "light",
                                  "shadeIntensity": 0.65
                              }
                          }
                      },
                      "globals": {
                          "chartID": "tIEba",
                          "cuid": "blzba9gbf",
                          "events": {
                              "beforeMount": [],
                              "mounted": [],
                              "updated": [],
                              "clicked": [],
                              "selection": [],
                              "dataPointSelection": [],
                              "zoomed": [],
                              "scrolled": []
                          },
                          "colors": [
                              "#4ecdc4",
                              "#c7f464",
                              "#81D4FA",
                              "#fd6a6a",
                              "#546E7A"
                          ],
                          "clientX": null,
                          "clientY": null,
                          "fill": {
                              "colors": [
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A"
                              ]
                          },
                          "stroke": {},
                          "dataLabels": {
                              "style": {}
                          },
                          "radarPolygons": {
                              "fill": {
                                  "colors": [
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none"
                                  ]
                              }
                          },
                          "markers": {
                              "size": [
                                  0,
                                  0
                              ],
                              "largestSize": 0
                          },
                          "animationEnded": true,
                          "isDirty": true,
                          "isExecCalled": false,
                          "initialConfig": {},
                          "initialSeries": [
                              {
                                  "name": "Column",
                                  "data": [
                                      {
                                          "x": "Item 1",
                                          "y": 10
                                      },
                                      {
                                          "x": "Item 2",
                                          "y": 20
                                      },
                                      {
                                          "x": "Item 3",
                                          "y": 30
                                      },
                                      {
                                          "x": "Item 4",
                                          "y": 40
                                      }
                                  ]
                              }
                          ],
                          "lastXAxis": {
                              "type": "category",
                              "categories": [],
                              "convertedCatToNumeric": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickPlacement": "between",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "lastYAxis": [
                              {
                                  "show": true,
                                  "showAlways": false,
                                  "showForNullSeries": true,
                                  "opposite": false,
                                  "reversed": false,
                                  "logarithmic": false,
                                  "logBase": 10,
                                  "forceNiceScale": false,
                                  "floating": false,
                                  "labels": {
                                      "show": true,
                                      "minWidth": 0,
                                      "maxWidth": 160,
                                      "offsetX": 0,
                                      "offsetY": 0,
                                      "rotate": 0,
                                      "padding": 20,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 400,
                                          "cssClass": ""
                                      }
                                  },
                                  "axisBorder": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 1,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "axisTicks": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 6,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "title": {
                                      "rotate": -90,
                                      "offsetY": 0,
                                      "offsetX": 0,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 700,
                                          "cssClass": ""
                                      }
                                  },
                                  "tooltip": {
                                      "enabled": false,
                                      "offsetX": 0
                                  },
                                  "crosshairs": {
                                      "show": true,
                                      "position": "front",
                                      "stroke": {
                                          "color": "#b6b6b6",
                                          "width": 1,
                                          "dashArray": 0
                                      }
                                  }
                              }
                          ],
                          "columnSeries": null,
                          "labels": [
                              "Item 1",
                              "Item 2",
                              "Item 3",
                              "Item 4"
                          ],
                          "timescaleLabels": [],
                          "noLabelsProvided": false,
                          "allSeriesCollapsed": false,
                          "collapsedSeries": [],
                          "collapsedSeriesIndices": [],
                          "ancillaryCollapsedSeries": [],
                          "ancillaryCollapsedSeriesIndices": [],
                          "risingSeries": [],
                          "dataFormatXNumeric": false,
                          "capturedSeriesIndex": -1,
                          "capturedDataPointIndex": -1,
                          "selectedDataPoints": [],
                          "goldenPadding": 35,
                          "invalidLogScale": false,
                          "ignoreYAxisIndexes": [],
                          "yAxisSameScaleIndices": [],
                          "maxValsInArrayIndex": 0,
                          "radialSize": 94.00000000000001,
                          "zoomEnabled": true,
                          "panEnabled": false,
                          "selectionEnabled": false,
                          "yaxis": null,
                          "mousedown": false,
                          "lastClientPosition": {},
                          "yValueDecimal": 0,
                          "total": 0,
                          "SVGNS": "http://www.w3.org/2000/svg",
                          "svgWidth": 400,
                          "svgHeight": 250,
                          "noData": false,
                          "locale": {
                              "toolbar": {
                                  "exportToSVG": "Download SVG",
                                  "exportToPNG": "Download PNG",
                                  "exportToCSV": "Download CSV",
                                  "menu": "Menu",
                                  "selection": "Selection",
                                  "selectionZoom": "Selection Zoom",
                                  "zoomIn": "Zoom In",
                                  "zoomOut": "Zoom Out",
                                  "pan": "Panning",
                                  "reset": "Reset Zoom"
                              }
                          },
                          "dom": {
                              "baseEl": {
                                  "_prevClass": "tIEba"
                              },
                              "elWrap": {},
                              "Paper": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "svg",
                                  "_defs": {
                                      "_stroke": "#000000",
                                      "_event": null,
                                      "dom": {},
                                      "node": {},
                                      "type": "defs"
                                  }
                              },
                              "elGraphical": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elAnnotations": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elLegendWrap": {},
                              "elGridRectMask": {},
                              "elGridRectMarkerMask": {},
                              "elForecastMask": {},
                              "elNonForecastMask": {},
                              "elGridRect": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              },
                              "elGridRectMarker": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              }
                          },
                          "memory": {
                              "methodsToExec": []
                          },
                          "shouldAnimate": true,
                          "skipLastTimelinelabel": false,
                          "skipFirstTimelinelabel": false,
                          "delayedElements": [
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              },
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              },
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              }
                          ],
                          "axisCharts": true,
                          "isDataXYZ": false,
                          "resized": true,
                          "resizeTimer": null,
                          "comboCharts": false,
                          "dataChanged": false,
                          "previousPaths": [],
                          "allSeriesHasEqualX": true,
                          "pointsArray": [],
                          "dataLabelsRects": [],
                          "lastDrawnDataLabelsIndexes": [],
                          "hasNullValues": false,
                          "zoomed": false,
                          "gridWidth": 345,
                          "gridHeight": 205,
                          "rotateXLabels": false,
                          "defaultLabels": false,
                          "yLabelFormatters": [
                              null
                          ],
                          "LINE_HEIGHT_RATIO": 1.618,
                          "xAxisLabelsHeight": 10,
                          "xAxisLabelsWidth": 0,
                          "yAxisLabelsWidth": 0,
                          "scaleX": 1,
                          "scaleY": 1,
                          "translateX": 30,
                          "translateY": 30,
                          "translateYAxisX": [
                              -3
                          ],
                          "yAxisWidths": [],
                          "translateXAxisY": -4,
                          "translateXAxisX": 0,
                          "tooltip": {
                              "tooltipUtil": {},
                              "tooltipLabels": {
                                  "tooltipUtil": {}
                              },
                              "tooltipPosition": {},
                              "marker": {
                                  "tooltipPosition": {}
                              },
                              "intersect": {},
                              "axesTooltip": {},
                              "showOnIntersect": true,
                              "showTooltipTitle": true,
                              "fixedTooltip": false,
                              "xaxisTooltip": null,
                              "yaxisTTEls": null,
                              "isBarShared": false,
                              "lastHoverTime": 1683551109333,
                              "xyRatios": {
                                  "yRatio": [
                                      0.1951219512195122
                                  ],
                                  "invertedYRatio": 0.11594202898550725,
                                  "zRatio": null,
                                  "xRatio": null,
                                  "initialXRatio": null,
                                  "invertedXRatio": null,
                                  "baseLineInvertedY": 0.1,
                                  "baseLineY": [
                                      0
                                  ],
                                  "baseLineX": 0
                              },
                              "isXAxisTooltipEnabled": false,
                              "yaxisTooltips": [
                                  false
                              ],
                              "allTooltipSeriesGroups": [],
                              "xaxisOffY": 206,
                              "yaxisOffX": 1,
                              "yaxisTooltip": {},
                              "yaxisTooltipText": [
                                  {}
                              ],
                              "xcrosshairsWidth": 1,
                              "ycrosshairs": {
                                  "instance": {
                                      "_stroke": "#b6b6b6",
                                      "_event": null,
                                      "dom": {},
                                      "type": "line"
                                  }
                              },
                              "ycrosshairsHidden": {
                                  "instance": {
                                      "_stroke": "#b6b6b6",
                                      "_event": null,
                                      "dom": {},
                                      "type": "line"
                                  }
                              },
                              "xAxisTicksPositions": [
                                  86.25,
                                  172.5,
                                  258.75,
                                  345
                              ],
                              "dataPointsDividedHeight": 51.25,
                              "dataPointsDividedWidth": 86.25,
                              "tooltipTitle": {},
                              "legendLabels": {},
                              "ttItems": [
                                  {}
                              ],
                              "seriesBound": {
                                  "x": 0,
                                  "y": 0,
                                  "width": 0,
                                  "height": 0,
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0
                              }
                          },
                          "series": [
                              [
                                  10,
                                  20,
                                  30,
                                  40
                              ]
                          ],
                          "seriesCandleO": [],
                          "seriesCandleH": [],
                          "seriesCandleM": [],
                          "seriesCandleL": [],
                          "seriesCandleC": [],
                          "seriesRangeStart": [],
                          "seriesRangeEnd": [],
                          "seriesRangeBar": [],
                          "seriesPercent": [
                              [
                                  100,
                                  100,
                                  100,
                                  100
                              ]
                          ],
                          "seriesGoals": [
                              [
                                  null,
                                  null,
                                  null,
                                  null
                              ]
                          ],
                          "seriesX": [
                              null
                          ],
                          "seriesZ": [
                              []
                          ],
                          "seriesNames": [
                              "Column"
                          ],
                          "seriesTotals": [
                              100
                          ],
                          "seriesLog": [
                              null
                          ],
                          "seriesColors": [
                              null
                          ],
                          "stackedSeriesTotals": [
                              10,
                              20,
                              30,
                              40
                          ],
                          "seriesXvalues": [
                              [
                                  43.125,
                                  215.625,
                                  301.875,
                                  388.125
                              ]
                          ],
                          "seriesYvalues": [
                              [
                                  153.75,
                                  102.5,
                                  51.25,
                                  0
                              ]
                          ],
                          "categoryLabels": [],
                          "selectionResizeTimer": null,
                          "isXNumeric": false,
                          "xaxisLabelsCount": 4,
                          "isMultiLineX": false,
                          "isMultipleYAxis": false,
                          "maxY": 40,
                          "minY": 0,
                          "minYArr": [
                              0
                          ],
                          "maxYArr": [
                              40
                          ],
                          "maxX": -1.7976931348623157e+308,
                          "minX": 1.7976931348623157e+308,
                          "initialMaxX": -1.7976931348623157e+308,
                          "initialMinX": 1.7976931348623157e+308,
                          "maxDate": 0,
                          "minDate": 1.7976931348623157e+308,
                          "minZ": 1.7976931348623157e+308,
                          "maxZ": -1.7976931348623157e+308,
                          "minXDiff": 1.7976931348623157e+308,
                          "yAxisScale": [
                              {
                                  "result": [
                                      0,
                                      10,
                                      20,
                                      30,
                                      40
                                  ],
                                  "niceMin": 0,
                                  "niceMax": 40
                              }
                          ],
                          "xAxisScale": null,
                          "xAxisTicksPositions": [],
                          "yLabelsCoords": [
                              {
                                  "width": 10,
                                  "index": 0
                              }
                          ],
                          "yTitleCoords": [
                              {
                                  "width": 0,
                                  "index": 0
                              }
                          ],
                          "barPadForNumericAxis": 0,
                          "padHorizontal": 0,
                          "xRange": null,
                          "yRange": [
                              40
                          ],
                          "zRange": null,
                          "dataPoints": 4,
                          "xTickAmount": 0,
                          "xyCharts": true,
                          "isBarHorizontal": false,
                          "chartClass": ".apexchartstIEba",
                          "comboBarCount": 0,
                          "isRangeBar": false,
                          "xAxisHeight": 10,
                          "yLogRatio": [
                              0.1951219512195122
                          ],
                          "logYRange": [
                              null
                          ]
                      }
                  },
                  "publicMethods": [
                      "updateOptions",
                      "updateSeries",
                      "appendData",
                      "appendSeries",
                      "toggleSeries",
                      "showSeries",
                      "hideSeries",
                      "setLocale",
                      "resetSeries",
                      "zoomX",
                      "toggleDataPointSelection",
                      "dataURI",
                      "addXaxisAnnotation",
                      "addYaxisAnnotation",
                      "addPointAnnotation",
                      "clearAnnotations",
                      "removeAnnotation",
                      "paper",
                      "destroy"
                  ],
                  "eventList": [
                      "click",
                      "mousedown",
                      "mousemove",
                      "mouseleave",
                      "touchstart",
                      "touchmove",
                      "touchleave",
                      "mouseup",
                      "touchend"
                  ],
                  "animations": {},
                  "axes": {},
                  "core": {},
                  "config": {
                      "opts": {}
                  },
                  "data": {
                      "coreUtils": {},
                      "fallbackToCategory": true,
                      "activeSeriesIndex": 0
                  },
                  "grid": {
                      "xaxisLabels": [
                          "Item 1",
                          "Item 2",
                          "Item 3",
                          "Item 4"
                      ],
                      "axesUtils": {},
                      "isRangeBar": 0,
                      "elg": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      },
                      "elgridLinesH": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      },
                      "elgridLinesV": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      }
                  },
                  "graphics": {},
                  "coreUtils": {},
                  "crosshairs": {},
                  "events": {},
                  "exports": {},
                  "localization": {},
                  "options": {
                      "yAxis": {
                          "show": true,
                          "showAlways": false,
                          "showForNullSeries": true,
                          "opposite": false,
                          "reversed": false,
                          "logarithmic": false,
                          "logBase": 10,
                          "forceNiceScale": false,
                          "floating": false,
                          "labels": {
                              "show": true,
                              "minWidth": 0,
                              "maxWidth": 160,
                              "offsetX": 0,
                              "offsetY": 0,
                              "rotate": 0,
                              "padding": 20,
                              "style": {
                                  "colors": [],
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": ""
                              }
                          },
                          "axisBorder": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 1,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "axisTicks": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 6,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "title": {
                              "rotate": -90,
                              "offsetY": 0,
                              "offsetX": 0,
                              "style": {
                                  "fontSize": "11px",
                                  "fontWeight": 900,
                                  "cssClass": ""
                              }
                          },
                          "tooltip": {
                              "enabled": false,
                              "offsetX": 0
                          },
                          "crosshairs": {
                              "show": true,
                              "position": "front",
                              "stroke": {
                                  "color": "#b6b6b6",
                                  "width": 1,
                                  "dashArray": 0
                              }
                          }
                      },
                      "pointAnnotation": {
                          "x": 0,
                          "y": null,
                          "yAxisIndex": 0,
                          "seriesIndex": 0,
                          "marker": {
                              "size": 4,
                              "fillColor": "#fff",
                              "strokeWidth": 2,
                              "strokeColor": "#333",
                              "shape": "circle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "radius": 2,
                              "cssClass": ""
                          },
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          },
                          "customSVG": {
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "image": {
                              "width": 20,
                              "height": 20,
                              "offsetX": 0,
                              "offsetY": 0
                          }
                      },
                      "yAxisAnnotation": {
                          "y": 0,
                          "y2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "width": "100%",
                          "yAxisIndex": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "end",
                              "position": "right",
                              "offsetX": 0,
                              "offsetY": -3,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "xAxisAnnotation": {
                          "x": 0,
                          "x2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "orientation": "vertical",
                              "position": "top",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "text": {
                          "x": 0,
                          "y": 0,
                          "text": "",
                          "textAnchor": "start",
                          "fontSize": "13px",
                          "fontWeight": 400,
                          "appendTo": ".apexcharts-annotations",
                          "backgroundColor": "transparent",
                          "borderColor": "#c2c2c2",
                          "borderRadius": 0,
                          "borderWidth": 0,
                          "paddingLeft": 4,
                          "paddingRight": 4,
                          "paddingTop": 2,
                          "paddingBottom": 2
                      }
                  },
                  "responsive": {},
                  "series": {
                      "legendInactiveClass": "legend-mouseover-inactive"
                  },
                  "theme": {
                      "isColorFn": false,
                      "isHeatmapDistributed": false,
                      "isBarDistributed": false
                  },
                  "formatters": {
                      "tooltipKeyFormat": "dd MMM"
                  },
                  "titleSubtitle": {},
                  "legend": {
                      "isBarsDistributed": false,
                      "legendHelpers": {}
                  },
                  "toolbar": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308
                  },
                  "dimensions": {
                      "lgRect": {
                          "x": 0,
                          "y": 0,
                          "height": 0,
                          "width": 0
                      },
                      "yAxisWidth": 15,
                      "yAxisWidthLeft": 15,
                      "yAxisWidthRight": 0,
                      "xAxisHeight": 10,
                      "isSparkline": false,
                      "dimHelpers": {},
                      "dimYAxis": {},
                      "dimXAxis": {},
                      "dimGrid": {},
                      "lgWidthForSideLegends": 0,
                      "xPadRight": 0,
                      "xPadLeft": 0,
                      "xAxisWidth": 0
                  },
                  "updateHelpers": {},
                  "zoomPanSelection": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308,
                      "dragged": false,
                      "graphics": {},
                      "eventList": [
                          "mousedown",
                          "mouseleave",
                          "mousemove",
                          "touchstart",
                          "touchmove",
                          "mouseup",
                          "touchend"
                      ],
                      "clientX": 0,
                      "clientY": 0,
                      "startX": 0,
                      "endX": 0,
                      "dragX": 0,
                      "startY": 0,
                      "endY": 0,
                      "dragY": 0,
                      "moveDirection": "none"
                  },
                  "pie": {
                      "chartType": "bar",
                      "initialAnim": false,
                      "dynamicAnim": false,
                      "animBeginArr": [
                          0
                      ],
                      "animDur": 0,
                      "defaultSize": 205,
                      "centerY": 102.5,
                      "centerX": 172.5,
                      "fullAngle": 360,
                      "initialAngle": 0,
                      "donutSize": 61.10000000000001,
                      "maxY": 0,
                      "sliceLabels": [],
                      "sliceSizes": [],
                      "prevSectorAngleArr": []
                  },
                  "rangeBar": {
                      "isHorizontal": false,
                      "strokeWidth": 2,
                      "isNullValue": false,
                      "isRangeBar": 0,
                      "xRatio": null,
                      "initialXRatio": null,
                      "invertedXRatio": null,
                      "invertedYRatio": 0.11594202898550725,
                      "baseLineInvertedY": 0.1,
                      "yaxisIndex": 0,
                      "seriesLen": 0,
                      "barHelpers": {}
                  },
                  "bar": {
                      "isHorizontal": false,
                      "strokeWidth": 2,
                      "isNullValue": false,
                      "isRangeBar": 0,
                      "xRatio": null,
                      "initialXRatio": null,
                      "invertedXRatio": null,
                      "invertedYRatio": 0.11594202898550725,
                      "baseLineInvertedY": 0.1,
                      "yaxisIndex": 0,
                      "seriesLen": 1,
                      "barHelpers": {},
                      "totalItems": 4,
                      "visibleI": 0,
                      "visibleItems": 4,
                      "zeroSerieses": [],
                      "radiusOnSeriesNumber": 0,
                      "isReversed": false
                  },
                  "annotations": {
                      "graphics": {},
                      "helpers": {},
                      "xAxisAnnotations": {},
                      "yAxisAnnotations": {},
                      "pointsAnnotations": {},
                      "xDivision": 86.25
                  }
              }
          },
          {
              "id": "qHh5t",
              "chart": {
                  "opts": {
                      "annotations": {
                          "position": "front",
                          "yaxis": [],
                          "xaxis": [],
                          "points": []
                      },
                      "chart": {
                          "type": "donut",
                          "background": "#fff",
                          "foreColor": "#373D3F",
                          "offsetX": 0,
                          "offsetY": 0,
                          "toolbar": {
                              "show": false
                          },
                          "animations": {
                              "enabled": false
                          },
                          "dropShadow": {
                              "enabled": true,
                              "top": 2,
                              "left": 7,
                              "blur": 4,
                              "color": "#B1B1B1",
                              "opacity": 0.25
                          },
                          "fontFamily": "Roboto",
                          "height": 240,
                          "width": 300,
                          "id": "qHh5t"
                      },
                      "plotOptions": {
                          "bar": {
                              "horizontal": false,
                              "columnWidth": "70%",
                              "barHeight": "70%",
                              "distributed": false,
                              "borderRadius": 10,
                              "colors": {
                                  "ranges": [],
                                  "backgroundBarColors": [],
                                  "backgroundBarOpacity": 1
                              },
                              "dataLabels": {
                                  "position": "top"
                              }
                          },
                          "heatmap": {
                              "radius": 2,
                              "enableShades": true,
                              "shadeIntensity": 0.5
                          },
                          "radialBar": {
                              "startAngle": 0,
                              "endAngle": 360,
                              "offsetX": 0,
                              "offsetY": 0,
                              "hollow": {
                                  "margin": 5,
                                  "size": "50%",
                                  "background": "#fff",
                                  "position": "front",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "track": {
                                  "show": true,
                                  "background": "#f2f2f2",
                                  "strokeWidth": "97%",
                                  "opacity": 1,
                                  "margin": 5,
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "dataLabels": {
                                  "show": true,
                                  "name": {
                                      "show": true,
                                      "fontSize": 16,
                                      "offsetY": 0
                                  },
                                  "value": {
                                      "show": true,
                                      "fontSize": 14,
                                      "offsetY": 16
                                  },
                                  "total": {
                                      "show": false,
                                      "label": "Total",
                                      "fontSize": 16
                                  }
                              }
                          },
                          "pie": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "dataLabels": {
                                  "offset": 0
                              },
                              "donut": {
                                  "size": "73%",
                                  "background": "#FFFFFF",
                                  "labels": {
                                      "show": true,
                                      "name": {
                                          "show": true,
                                          "fontSize": 28,
                                          "offsetY": -10,
                                          "fontWeight": 600
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 35,
                                          "offsetY": 10,
                                          "fontWeight": 600
                                      },
                                      "total": {
                                          "show": true,
                                          "showAlways": false,
                                          "label": "Total",
                                          "fontSize": 23,
                                          "fontWeight": 500
                                      }
                                  }
                              }
                          },
                          "radar": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "polygons": {
                                  "strokeColors": "#e8e8e8",
                                  "connectorColors": "#e8e8e8",
                                  "fill": {}
                              }
                          }
                      },
                      "theme": {
                          "mode": "light",
                          "palette": "palette1"
                      },
                      "dataLabels": {
                          "enabled": false,
                          "textAnchor": "middle",
                          "offsetX": 0,
                          "offsetY": 0,
                          "style": {
                              "fontSize": 12,
                              "fontWeight": 700
                          },
                          "background": {
                              "enabled": true,
                              "foreColor": "#fff",
                              "borderRadius": 2,
                              "padding": 4,
                              "opacity": 0.9,
                              "borderWidth": 1,
                              "borderColor": "#fff"
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 1,
                              "left": 1,
                              "blur": 1,
                              "color": "#000",
                              "opacity": 0.45
                          }
                      },
                      "markers": {
                          "size": 0,
                          "strokeColors": "#fff",
                          "strokeWidth": 2,
                          "strokeOpacity": 0.9,
                          "strokeDashArray": 0,
                          "fillOpacity": 1,
                          "shape": "circle",
                          "radius": 2,
                          "offsetX": 0,
                          "offsetY": 0,
                          "hover": {}
                      },
                      "yaxis": [
                          null
                      ],
                      "grid": {
                          "show": true,
                          "borderColor": "#e0e0e0",
                          "strokeDashArray": 0,
                          "position": "back",
                          "padding": {
                              "top": 0,
                              "right": 0,
                              "bottom": 12,
                              "left": 10
                          }
                      },
                      "stroke": {
                          "show": true,
                          "curve": "smooth",
                          "lineCap": "round",
                          "width": 1,
                          "dashArray": 5
                      },
                      "fill": {
                          "type": "solid",
                          "opacity": 1,
                          "gradient": {
                              "shade": "light",
                              "type": "vertical",
                              "shadeIntensity": 0.5,
                              "inverseColors": true,
                              "opacityFrom": 0.5,
                              "opacityTo": 1,
                              "stops": [
                                  0,
                                  50,
                                  100
                              ]
                          },
                          "pattern": {
                              "style": "squares",
                              "width": 6,
                              "height": 6,
                              "strokeWidth": 2
                          }
                      },
                      "legend": {
                          "show": false,
                          "showForSingleSeries": false,
                          "floating": false,
                          "position": "top",
                          "horizontalAlign": "center",
                          "fontSize": 14,
                          "fontWeight": 400,
                          "offsetX": -100,
                          "offsetY": -91,
                          "labels": {
                              "useSeriesColors": false
                          },
                          "markers": {
                              "width": 11,
                              "height": 10,
                              "strokeWidth": 6,
                              "strokeColor": "#fff",
                              "radius": 14
                          },
                          "itemMargin": {
                              "horizontal": 5,
                              "vertical": 0
                          },
                          "onItemClick": {
                              "toggleDataSeries": true
                          },
                          "onItemHover": {
                              "highlightDataSeries": true
                          }
                      }
                  },
                  "w": {
                      "globals": {
                          "chartID": "qHh5t",
                          "cuid": "qqqmiwsx",
                          "events": {
                              "beforeMount": [],
                              "mounted": [],
                              "updated": [],
                              "clicked": [],
                              "selection": [],
                              "dataPointSelection": [],
                              "zoomed": [],
                              "scrolled": []
                          },
                          "colors": [
                              "#008FFB",
                              "#00E396",
                              "#FEB019",
                              "#FF4560",
                              "#775DD0"
                          ],
                          "clientX": 1124,
                          "clientY": 384,
                          "fill": {
                              "colors": [
                                  "#008FFB",
                                  "#00E396",
                                  "#FEB019",
                                  "#FF4560",
                                  "#775DD0",
                                  "#008FFB",
                                  "#00E396",
                                  "#FEB019",
                                  "#FF4560",
                                  "#775DD0",
                                  "#008FFB",
                                  "#00E396",
                                  "#FEB019",
                                  "#FF4560",
                                  "#775DD0",
                                  "#008FFB",
                                  "#00E396",
                                  "#FEB019",
                                  "#FF4560",
                                  "#775DD0",
                                  "#008FFB",
                                  "#00E396",
                                  "#FEB019",
                                  "#FF4560",
                                  "#775DD0",
                                  "#008FFB",
                                  "#00E396",
                                  "#FEB019",
                                  "#FF4560",
                                  "#775DD0",
                                  "#008FFB",
                                  "#00E396",
                                  "#FEB019",
                                  "#FF4560",
                                  "#775DD0",
                                  "#008FFB",
                                  "#00E396",
                                  "#FEB019",
                                  "#FF4560",
                                  "#775DD0",
                                  "#008FFB",
                                  "#00E396",
                                  "#FEB019",
                                  "#FF4560",
                                  "#775DD0",
                                  "#008FFB",
                                  "#00E396",
                                  "#FEB019",
                                  "#FF4560",
                                  "#775DD0"
                              ]
                          },
                          "stroke": {
                              "colors": [
                                  "#fff",
                                  "#fff",
                                  "#fff",
                                  "#fff"
                              ]
                          },
                          "dataLabels": {
                              "style": {}
                          },
                          "radarPolygons": {
                              "fill": {
                                  "colors": [
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none"
                                  ]
                              }
                          },
                          "markers": {
                              "size": [
                                  0,
                                  0,
                                  0,
                                  0,
                                  0
                              ],
                              "largestSize": 0
                          },
                          "animationEnded": true,
                          "isDirty": true,
                          "isExecCalled": false,
                          "initialConfig": {
                              "annotations": {
                                  "position": "front",
                                  "texts": [],
                                  "images": [],
                                  "shapes": []
                              },
                              "forecastDataPoints": {
                                  "count": 0,
                                  "fillOpacity": 0.5,
                                  "dashArray": 4
                              },
                              "markers": {
                                  "discrete": [],
                                  "size": 0,
                                  "strokeColors": "#fff",
                                  "strokeWidth": 2,
                                  "strokeOpacity": 0.9,
                                  "strokeDashArray": 0,
                                  "fillOpacity": 1,
                                  "shape": "circle",
                                  "width": 8,
                                  "height": 8,
                                  "radius": 2,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "showNullDataPoints": true,
                                  "hover": {
                                      "sizeOffset": 3
                                  }
                              },
                              "noData": {
                                  "align": "center",
                                  "verticalAlign": "middle",
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "14px"
                                  }
                              },
                              "responsive": [],
                              "states": {
                                  "normal": {
                                      "filter": {
                                          "type": "none",
                                          "value": 0
                                      }
                                  },
                                  "hover": {
                                      "filter": {
                                          "type": "lighten",
                                          "value": 0.1
                                      }
                                  },
                                  "active": {
                                      "allowMultipleDataPointsSelection": false,
                                      "filter": {
                                          "type": "darken",
                                          "value": 0.5
                                      }
                                  }
                              },
                              "title": {
                                  "align": "left",
                                  "margin": 5,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "floating": false,
                                  "style": {
                                      "fontSize": "14px",
                                      "fontWeight": 900
                                  }
                              },
                              "subtitle": {
                                  "align": "left",
                                  "margin": 5,
                                  "offsetX": 0,
                                  "offsetY": 30,
                                  "floating": false,
                                  "style": {
                                      "fontSize": "12px",
                                      "fontWeight": 400
                                  }
                              },
                              "theme": {
                                  "mode": "light",
                                  "palette": "palette1",
                                  "monochrome": {
                                      "enabled": false,
                                      "color": "#008FFB",
                                      "shadeTo": "light",
                                      "shadeIntensity": 0.65
                                  }
                              }
                          },
                          "initialSeries": [
                              10,
                              10,
                              10,
                              10
                          ],
                          "lastXAxis": [],
                          "lastYAxis": [],
                          "columnSeries": null,
                          "labels": [
                              "A",
                              "B",
                              "C",
                              "D"
                          ],
                          "timescaleLabels": [],
                          "noLabelsProvided": false,
                          "allSeriesCollapsed": false,
                          "collapsedSeries": [],
                          "collapsedSeriesIndices": [],
                          "ancillaryCollapsedSeries": [],
                          "ancillaryCollapsedSeriesIndices": [],
                          "risingSeries": [],
                          "dataFormatXNumeric": false,
                          "capturedSeriesIndex": -1,
                          "capturedDataPointIndex": -1,
                          "selectedDataPoints": [],
                          "goldenPadding": 35,
                          "invalidLogScale": false,
                          "ignoreYAxisIndexes": [],
                          "yAxisSameScaleIndices": [],
                          "maxValsInArrayIndex": -1,
                          "radialSize": 101.34146341463416,
                          "zoomEnabled": true,
                          "panEnabled": false,
                          "selectionEnabled": false,
                          "yaxis": null,
                          "mousedown": false,
                          "lastClientPosition": {},
                          "yValueDecimal": 0,
                          "total": 0,
                          "SVGNS": "http://www.w3.org/2000/svg",
                          "svgWidth": 300,
                          "svgHeight": 240,
                          "noData": false,
                          "locale": {
                              "toolbar": {
                                  "exportToSVG": "Download SVG",
                                  "exportToPNG": "Download PNG",
                                  "exportToCSV": "Download CSV",
                                  "menu": "Menu",
                                  "selection": "Selection",
                                  "selectionZoom": "Selection Zoom",
                                  "zoomIn": "Zoom In",
                                  "zoomOut": "Zoom Out",
                                  "pan": "Panning",
                                  "reset": "Reset Zoom"
                              }
                          },
                          "dom": {
                              "baseEl": {
                                  "_prevClass": "qHh5t"
                              },
                              "elWrap": {},
                              "Paper": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "svg",
                                  "_defs": {
                                      "_stroke": "#000000",
                                      "_event": null,
                                      "dom": {},
                                      "node": {},
                                      "type": "defs"
                                  }
                              },
                              "elGraphical": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elAnnotations": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elLegendWrap": {},
                              "elGridRectMask": {},
                              "elGridRectMarkerMask": {},
                              "elForecastMask": {},
                              "elNonForecastMask": {},
                              "elGridRect": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              },
                              "elGridRectMarker": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              }
                          },
                          "memory": {
                              "methodsToExec": []
                          },
                          "shouldAnimate": true,
                          "skipLastTimelinelabel": false,
                          "skipFirstTimelinelabel": false,
                          "delayedElements": [],
                          "axisCharts": false,
                          "isDataXYZ": false,
                          "resized": true,
                          "resizeTimer": null,
                          "comboCharts": false,
                          "dataChanged": true,
                          "previousPaths": [
                              10,
                              10,
                              10,
                              10
                          ],
                          "allSeriesHasEqualX": true,
                          "pointsArray": [],
                          "dataLabelsRects": [],
                          "lastDrawnDataLabelsIndexes": [],
                          "hasNullValues": false,
                          "easing": "<>",
                          "zoomed": false,
                          "gridWidth": 220,
                          "gridHeight": 218,
                          "rotateXLabels": false,
                          "defaultLabels": false,
                          "yLabelFormatters": [
                              null
                          ],
                          "LINE_HEIGHT_RATIO": 1.618,
                          "xAxisLabelsHeight": 0,
                          "xAxisLabelsWidth": 0,
                          "yAxisLabelsWidth": 0,
                          "scaleX": 1,
                          "scaleY": 1,
                          "translateX": 45,
                          "translateY": 0,
                          "translateYAxisX": [],
                          "yAxisWidths": [],
                          "translateXAxisY": 0,
                          "translateXAxisX": 0,
                          "tooltip": {
                              "tooltipUtil": {},
                              "tooltipLabels": {
                                  "tooltipUtil": {}
                              },
                              "tooltipPosition": {},
                              "marker": {
                                  "tooltipPosition": {}
                              },
                              "intersect": {},
                              "axesTooltip": {},
                              "showOnIntersect": false,
                              "showTooltipTitle": false,
                              "fixedTooltip": false,
                              "xaxisTooltip": null,
                              "yaxisTTEls": null,
                              "isBarShared": true,
                              "lastHoverTime": 1683551831596,
                              "xyRatios": null,
                              "isXAxisTooltipEnabled": false,
                              "yaxisTooltips": [
                                  false
                              ],
                              "allTooltipSeriesGroups": [],
                              "dataPointsDividedHeight": null,
                              "dataPointsDividedWidth": null,
                              "legendLabels": {},
                              "ttItems": [
                                  {},
                                  {},
                                  {},
                                  {}
                              ]
                          },
                          "series": [
                              10,
                              10,
                              10,
                              10
                          ],
                          "seriesCandleO": [],
                          "seriesCandleH": [],
                          "seriesCandleM": [],
                          "seriesCandleL": [],
                          "seriesCandleC": [],
                          "seriesRangeStart": [],
                          "seriesRangeEnd": [],
                          "seriesRangeBar": [],
                          "seriesPercent": [
                              [
                                  25
                              ],
                              [
                                  25
                              ],
                              [
                                  25
                              ],
                              [
                                  25
                              ]
                          ],
                          "seriesGoals": [],
                          "seriesX": [],
                          "seriesZ": [],
                          "seriesNames": [
                              "A",
                              "B",
                              "C",
                              "D"
                          ],
                          "seriesTotals": [
                              10,
                              10,
                              10,
                              10
                          ],
                          "seriesLog": [],
                          "seriesColors": [],
                          "stackedSeriesTotals": [],
                          "seriesXvalues": [
                              [],
                              [],
                              [],
                              []
                          ],
                          "seriesYvalues": [
                              [],
                              [],
                              [],
                              []
                          ],
                          "categoryLabels": [],
                          "selectionResizeTimer": null,
                          "isXNumeric": false,
                          "xaxisLabelsCount": 0,
                          "isMultiLineX": false,
                          "isMultipleYAxis": false,
                          "maxY": -1.7976931348623157e+308,
                          "minY": 5e-324,
                          "minYArr": [],
                          "maxYArr": [],
                          "maxX": -1.7976931348623157e+308,
                          "minX": 1.7976931348623157e+308,
                          "initialMaxX": -1.7976931348623157e+308,
                          "initialMinX": 1.7976931348623157e+308,
                          "maxDate": 0,
                          "minDate": 1.7976931348623157e+308,
                          "minZ": 1.7976931348623157e+308,
                          "maxZ": -1.7976931348623157e+308,
                          "minXDiff": 1.7976931348623157e+308,
                          "yAxisScale": [],
                          "xAxisScale": null,
                          "xAxisTicksPositions": [],
                          "yLabelsCoords": [],
                          "yTitleCoords": [],
                          "barPadForNumericAxis": 0,
                          "padHorizontal": 0,
                          "xRange": 0,
                          "yRange": [],
                          "zRange": 0,
                          "dataPoints": 0,
                          "xTickAmount": 0,
                          "xyCharts": false,
                          "isBarHorizontal": false,
                          "chartClass": ".apexchartsqHh5t",
                          "comboBarCount": 0
                      }
                  },
                  "publicMethods": [
                      "updateOptions",
                      "updateSeries",
                      "appendData",
                      "appendSeries",
                      "toggleSeries",
                      "showSeries",
                      "hideSeries",
                      "setLocale",
                      "resetSeries",
                      "zoomX",
                      "toggleDataPointSelection",
                      "dataURI",
                      "addXaxisAnnotation",
                      "addYaxisAnnotation",
                      "addPointAnnotation",
                      "clearAnnotations",
                      "removeAnnotation",
                      "paper",
                      "destroy"
                  ],
                  "eventList": [
                      "click",
                      "mousedown",
                      "mousemove",
                      "mouseleave",
                      "touchstart",
                      "touchmove",
                      "touchleave",
                      "mouseup",
                      "touchend"
                  ],
                  "animations": {},
                  "axes": {},
                  "core": {},
                  "config": {
                      "opts": {}
                  },
                  "data": {
                      "twoDSeries": [],
                      "threeDSeries": [],
                      "twoDSeriesX": [],
                      "seriesGoals": [],
                      "coreUtils": {},
                      "fallbackToCategory": false
                  },
                  "grid": {
                      "xaxisLabels": [
                          "A",
                          "B",
                          "C",
                          "D"
                      ],
                      "axesUtils": {},
                      "isRangeBar": 0
                  },
                  "graphics": {},
                  "coreUtils": {},
                  "crosshairs": {},
                  "events": {},
                  "exports": {},
                  "localization": {},
                  "options": {
                      "yAxis": {
                          "show": true,
                          "showAlways": false,
                          "showForNullSeries": true,
                          "opposite": false,
                          "reversed": false,
                          "logarithmic": false,
                          "logBase": 10,
                          "forceNiceScale": false,
                          "floating": false,
                          "labels": {
                              "show": true,
                              "minWidth": 0,
                              "maxWidth": 160,
                              "offsetX": 0,
                              "offsetY": 0,
                              "rotate": 0,
                              "padding": 20,
                              "style": {
                                  "colors": [],
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": ""
                              }
                          },
                          "axisBorder": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 1,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "axisTicks": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 6,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "title": {
                              "rotate": -90,
                              "offsetY": 0,
                              "offsetX": 0,
                              "style": {
                                  "fontSize": "11px",
                                  "fontWeight": 900,
                                  "cssClass": ""
                              }
                          },
                          "tooltip": {
                              "enabled": false,
                              "offsetX": 0
                          },
                          "crosshairs": {
                              "show": true,
                              "position": "front",
                              "stroke": {
                                  "color": "#b6b6b6",
                                  "width": 1,
                                  "dashArray": 0
                              }
                          }
                      },
                      "pointAnnotation": {
                          "x": 0,
                          "y": null,
                          "yAxisIndex": 0,
                          "seriesIndex": 0,
                          "marker": {
                              "size": 4,
                              "fillColor": "#fff",
                              "strokeWidth": 2,
                              "strokeColor": "#333",
                              "shape": "circle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "radius": 2,
                              "cssClass": ""
                          },
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          },
                          "customSVG": {
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "image": {
                              "width": 20,
                              "height": 20,
                              "offsetX": 0,
                              "offsetY": 0
                          }
                      },
                      "yAxisAnnotation": {
                          "y": 0,
                          "y2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "width": "100%",
                          "yAxisIndex": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "end",
                              "position": "right",
                              "offsetX": 0,
                              "offsetY": -3,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "xAxisAnnotation": {
                          "x": 0,
                          "x2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "orientation": "vertical",
                              "position": "top",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "text": {
                          "x": 0,
                          "y": 0,
                          "text": "",
                          "textAnchor": "start",
                          "fontSize": "13px",
                          "fontWeight": 400,
                          "appendTo": ".apexcharts-annotations",
                          "backgroundColor": "transparent",
                          "borderColor": "#c2c2c2",
                          "borderRadius": 0,
                          "borderWidth": 0,
                          "paddingLeft": 4,
                          "paddingRight": 4,
                          "paddingTop": 2,
                          "paddingBottom": 2
                      }
                  },
                  "responsive": {},
                  "series": {
                      "legendInactiveClass": "legend-mouseover-inactive"
                  },
                  "theme": {
                      "isColorFn": false,
                      "isHeatmapDistributed": false,
                      "isBarDistributed": false
                  },
                  "formatters": {
                      "tooltipKeyFormat": "dd MMM"
                  },
                  "titleSubtitle": {},
                  "legend": {
                      "isBarsDistributed": false,
                      "legendHelpers": {}
                  },
                  "toolbar": {
                      "ev": {},
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308
                  },
                  "dimensions": {
                      "lgRect": {
                          "x": 0,
                          "y": 0,
                          "height": 0,
                          "width": 0
                      },
                      "yAxisWidth": 0,
                      "yAxisWidthLeft": 0,
                      "yAxisWidthRight": 0,
                      "xAxisHeight": 0,
                      "isSparkline": false,
                      "dimHelpers": {},
                      "dimYAxis": {},
                      "dimXAxis": {},
                      "dimGrid": {},
                      "lgWidthForSideLegends": 0,
                      "xPadRight": 0,
                      "xPadLeft": 0
                  },
                  "updateHelpers": {},
                  "zoomPanSelection": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308,
                      "dragged": false,
                      "graphics": {},
                      "eventList": [
                          "mousedown",
                          "mouseleave",
                          "mousemove",
                          "touchstart",
                          "touchmove",
                          "mouseup",
                          "touchend"
                      ],
                      "clientX": 0,
                      "clientY": 0,
                      "startX": 0,
                      "endX": 0,
                      "dragX": 0,
                      "startY": 0,
                      "endY": 0,
                      "dragY": 0,
                      "moveDirection": "none"
                  },
                  "pie": {
                      "chartType": "donut",
                      "initialAnim": false,
                      "dynamicAnim": false,
                      "animBeginArr": [
                          0,
                          0,
                          0,
                          0,
                          0
                      ],
                      "animDur": 0,
                      "defaultSize": 218,
                      "centerY": 109,
                      "centerX": 110,
                      "fullAngle": 360,
                      "initialAngle": 0,
                      "donutSize": 73.97926829268293,
                      "maxY": 10,
                      "sliceLabels": [],
                      "sliceSizes": [
                          101.34146341463416,
                          101.34146341463416,
                          101.34146341463416,
                          101.34146341463416
                      ],
                      "prevSectorAngleArr": [
                          90,
                          90,
                          90,
                          90
                      ],
                      "ret": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      },
                      "strokeWidth": 0
                  },
                  "rangeBar": {
                      "isHorizontal": false,
                      "strokeWidth": 1,
                      "isNullValue": false,
                      "isRangeBar": 0,
                      "xyRatios": null,
                      "yaxisIndex": 0,
                      "seriesLen": 0,
                      "barHelpers": {}
                  },
                  "annotations": {
                      "graphics": {},
                      "helpers": {},
                      "xAxisAnnotations": {},
                      "yAxisAnnotations": {},
                      "pointsAnnotations": {},
                      "xDivision": null
                  }
              }
          },
          {
              "id": "pWNgI",
              "chart": {
                  "opts": {
                      "series": [
                          {
                              "name": "Column 1",
                              "data": [
                                  {
                                      "x": "Item 1",
                                      "y": 10
                                  },
                                  {
                                      "x": "Item 2",
                                      "y": 20
                                  },
                                  {
                                      "x": "Item 3",
                                      "y": 30
                                  },
                                  {
                                      "x": "Item 4",
                                      "y": 40
                                  }
                              ]
                          },
                          {
                              "name": "Column 2",
                              "data": [
                                  {
                                      "x": "Item 1",
                                      "y": 15
                                  },
                                  {
                                      "x": "Item 2",
                                      "y": 10
                                  },
                                  {
                                      "x": "Item 3",
                                      "y": 25
                                  },
                                  {
                                      "x": "Item 4",
                                      "y": 30
                                  }
                              ]
                          }
                      ],
                      "annotations": {
                          "position": "front",
                          "yaxis": [],
                          "xaxis": [],
                          "points": []
                      },
                      "chart": {
                          "type": "bar",
                          "background": "",
                          "foreColor": "#333",
                          "offsetX": 0,
                          "offsetY": 0,
                          "toolbar": {
                              "show": false
                          },
                          "animations": {
                              "enabled": false
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 2,
                              "left": 2,
                              "blur": 4,
                              "color": "#000",
                              "opacity": 0.35
                          },
                          "fontFamily": "Roboto",
                          "height": 250,
                          "width": 400,
                          "stacked": true,
                          "id": "pWNgI"
                      },
                      "plotOptions": {
                          "bar": {
                              "horizontal": false,
                              "columnWidth": "70%",
                              "barHeight": "70%",
                              "distributed": false,
                              "borderRadius": 10,
                              "colors": {
                                  "ranges": [],
                                  "backgroundBarColors": [],
                                  "backgroundBarOpacity": 1
                              },
                              "dataLabels": {
                                  "position": "top"
                              }
                          },
                          "heatmap": {
                              "radius": 2,
                              "enableShades": true,
                              "shadeIntensity": 0.5
                          },
                          "radialBar": {
                              "startAngle": 0,
                              "endAngle": 360,
                              "offsetX": 0,
                              "offsetY": 0,
                              "hollow": {
                                  "margin": 5,
                                  "size": "50%",
                                  "background": "#fff",
                                  "position": "front",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "track": {
                                  "show": true,
                                  "background": "#f2f2f2",
                                  "strokeWidth": "97%",
                                  "opacity": 1,
                                  "margin": 5,
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 0,
                                      "left": 0,
                                      "blur": 3,
                                      "color": "#000",
                                      "opacity": 0.5
                                  }
                              },
                              "dataLabels": {
                                  "show": true,
                                  "name": {
                                      "show": true,
                                      "fontSize": 16,
                                      "offsetY": 0
                                  },
                                  "value": {
                                      "show": true,
                                      "fontSize": 14,
                                      "offsetY": 16
                                  },
                                  "total": {
                                      "show": false,
                                      "label": "Total",
                                      "fontSize": 16
                                  }
                              }
                          },
                          "pie": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "dataLabels": {
                                  "offset": 0
                              },
                              "donut": {
                                  "size": "65%",
                                  "labels": {
                                      "show": false,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "offsetY": -10
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 20,
                                          "offsetY": 10
                                      },
                                      "total": {
                                          "show": false,
                                          "showAlways": false,
                                          "label": "Total",
                                          "fontSize": 16
                                      }
                                  }
                              }
                          },
                          "radar": {
                              "offsetX": 0,
                              "offsetY": 0,
                              "polygons": {
                                  "strokeColors": "#e8e8e8",
                                  "connectorColors": "#e8e8e8",
                                  "fill": {}
                              }
                          }
                      },
                      "theme": {
                          "mode": "light",
                          "palette": "palette4"
                      },
                      "dataLabels": {
                          "enabled": false,
                          "textAnchor": "middle",
                          "offsetX": 0,
                          "offsetY": 0,
                          "style": {
                              "fontSize": 12,
                              "fontWeight": 700
                          },
                          "background": {
                              "enabled": true,
                              "foreColor": "#fff",
                              "borderRadius": 2,
                              "padding": 4,
                              "opacity": 0.9,
                              "borderWidth": 1,
                              "borderColor": "#fff"
                          },
                          "dropShadow": {
                              "enabled": false,
                              "top": 1,
                              "left": 1,
                              "blur": 1,
                              "color": "#000",
                              "opacity": 0.45
                          }
                      },
                      "markers": {
                          "size": 0,
                          "strokeColors": "#fff",
                          "strokeWidth": 2,
                          "strokeOpacity": 0.9,
                          "strokeDashArray": 0,
                          "fillOpacity": 1,
                          "shape": "circle",
                          "radius": 2,
                          "offsetX": 0,
                          "offsetY": 0,
                          "hover": {}
                      },
                      "yaxis": [
                          {
                              "show": true,
                              "showAlways": false,
                              "showForNullSeries": true,
                              "opposite": false,
                              "reversed": false,
                              "logarithmic": false,
                              "logBase": 10,
                              "forceNiceScale": false,
                              "floating": false,
                              "labels": {
                                  "show": true,
                                  "minWidth": 0,
                                  "maxWidth": 160,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "rotate": 0,
                                  "padding": 20,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  }
                              },
                              "axisBorder": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": false,
                                  "color": "#e0e0e0",
                                  "width": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "title": {
                                  "rotate": -90,
                                  "offsetY": 0,
                                  "offsetX": 0,
                                  "style": {
                                      "fontSize": 11,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetX": 0
                              },
                              "crosshairs": {
                                  "show": true,
                                  "position": "front",
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 0
                                  }
                              }
                          }
                      ],
                      "stroke": {
                          "show": true,
                          "curve": "smooth",
                          "lineCap": "butt",
                          "width": 2,
                          "dashArray": 0
                      },
                      "fill": {
                          "type": "solid",
                          "opacity": 0.85,
                          "gradient": {
                              "shade": "dark",
                              "type": "horizontal",
                              "shadeIntensity": 0.5,
                              "inverseColors": true,
                              "opacityFrom": 1,
                              "opacityTo": 1,
                              "stops": [
                                  0,
                                  50,
                                  100
                              ],
                              "colorStops": []
                          },
                          "pattern": {
                              "style": "squares",
                              "width": 6,
                              "height": 6,
                              "strokeWidth": 2
                          }
                      },
                      "legend": {
                          "show": true,
                          "showForSingleSeries": false,
                          "floating": false,
                          "position": "bottom",
                          "horizontalAlign": "center",
                          "fontSize": 14,
                          "fontWeight": 400,
                          "offsetX": -20,
                          "offsetY": 0,
                          "labels": {
                              "useSeriesColors": false
                          },
                          "markers": {
                              "width": 12,
                              "height": 12,
                              "strokeWidth": 0,
                              "strokeColor": "#fff",
                              "radius": 12
                          },
                          "itemMargin": {
                              "horizontal": 5,
                              "vertical": 0
                          },
                          "onItemClick": {
                              "toggleDataSeries": true
                          },
                          "onItemHover": {
                              "highlightDataSeries": true
                          }
                      }
                  },
                  "w": {
                      "config": {
                          "annotations": {
                              "position": "front",
                              "texts": [],
                              "images": [],
                              "shapes": []
                          },
                          "chart": {
                              "animations": {
                                  "enabled": false,
                                  "easing": "swing",
                                  "speed": 800,
                                  "animateGradually": {
                                      "delay": 150,
                                      "enabled": true
                                  },
                                  "dynamicAnimation": {
                                      "enabled": true,
                                      "speed": 350
                                  }
                              },
                              "background": "",
                              "locales": [
                                  null
                              ],
                              "defaultLocale": "en",
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 2,
                                  "left": 2,
                                  "blur": 4,
                                  "color": "#000",
                                  "opacity": 0.35
                              },
                              "events": {},
                              "foreColor": "#333",
                              "fontFamily": "Roboto",
                              "height": 250,
                              "parentHeightOffset": 15,
                              "redrawOnParentResize": true,
                              "redrawOnWindowResize": true,
                              "id": "pWNgI",
                              "offsetX": 0,
                              "offsetY": 0,
                              "selection": {
                                  "enabled": false,
                                  "type": "x",
                                  "fill": {
                                      "color": "#24292e",
                                      "opacity": 0.1
                                  },
                                  "stroke": {
                                      "width": 1,
                                      "color": "#24292e",
                                      "opacity": 0.4,
                                      "dashArray": 3
                                  },
                                  "xaxis": {},
                                  "yaxis": {}
                              },
                              "sparkline": {
                                  "enabled": false
                              },
                              "brush": {
                                  "enabled": false,
                                  "autoScaleYaxis": true
                              },
                              "stacked": true,
                              "stackType": "normal",
                              "toolbar": {
                                  "show": false,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "tools": {
                                      "download": true,
                                      "selection": false,
                                      "zoom": false,
                                      "zoomin": false,
                                      "zoomout": false,
                                      "pan": false,
                                      "reset": false,
                                      "customIcons": []
                                  },
                                  "export": {
                                      "csv": {
                                          "columnDelimiter": ",",
                                          "headerCategory": "category",
                                          "headerValue": "value"
                                      },
                                      "png": {},
                                      "svg": {}
                                  },
                                  "autoSelected": "zoom"
                              },
                              "type": "bar",
                              "width": 400,
                              "zoom": {
                                  "enabled": true,
                                  "type": "x",
                                  "autoScaleYaxis": false,
                                  "zoomedArea": {
                                      "fill": {
                                          "color": "#90CAF9",
                                          "opacity": 0.4
                                      },
                                      "stroke": {
                                          "color": "#0D47A1",
                                          "opacity": 0.4,
                                          "width": 1
                                      }
                                  }
                              }
                          },
                          "plotOptions": {
                              "area": {
                                  "fillTo": "origin"
                              },
                              "bar": {
                                  "horizontal": false,
                                  "columnWidth": "70%",
                                  "barHeight": "70%",
                                  "distributed": false,
                                  "borderRadius": 10,
                                  "rangeBarOverlap": true,
                                  "rangeBarGroupRows": false,
                                  "colors": {
                                      "backgroundBarOpacity": 1,
                                      "backgroundBarRadius": 0
                                  },
                                  "dataLabels": {
                                      "position": "top",
                                      "maxItems": 100,
                                      "hideOverflowingLabels": true,
                                      "orientation": "horizontal"
                                  }
                              },
                              "bubble": {},
                              "candlestick": {
                                  "colors": {
                                      "upward": "#00B746",
                                      "downward": "#EF403C"
                                  },
                                  "wick": {
                                      "useFillColor": true
                                  }
                              },
                              "boxPlot": {
                                  "colors": {
                                      "upper": "#00E396",
                                      "lower": "#008FFB"
                                  }
                              },
                              "heatmap": {
                                  "radius": 2,
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "reverseNegativeShade": false,
                                  "distributed": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "treemap": {
                                  "enableShades": true,
                                  "shadeIntensity": 0.5,
                                  "distributed": false,
                                  "reverseNegativeShade": false,
                                  "useFillColorAsStroke": false,
                                  "colorScale": {
                                      "inverse": false,
                                      "ranges": []
                                  }
                              },
                              "radialBar": {
                                  "inverseOrder": false,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "hollow": {
                                      "margin": 5,
                                      "size": "50%",
                                      "background": "#fff",
                                      "imageWidth": 150,
                                      "imageHeight": 150,
                                      "imageOffsetX": 0,
                                      "imageOffsetY": 0,
                                      "imageClipped": true,
                                      "position": "front",
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "track": {
                                      "show": true,
                                      "background": "#f2f2f2",
                                      "strokeWidth": "97%",
                                      "opacity": 1,
                                      "margin": 5,
                                      "dropShadow": {
                                          "enabled": false,
                                          "top": 0,
                                          "left": 0,
                                          "blur": 3,
                                          "color": "#000",
                                          "opacity": 0.5
                                      }
                                  },
                                  "dataLabels": {
                                      "show": true,
                                      "name": {
                                          "show": true,
                                          "fontSize": 16,
                                          "fontWeight": 600,
                                          "offsetY": 0
                                      },
                                      "value": {
                                          "show": true,
                                          "fontSize": 14,
                                          "fontWeight": 400,
                                          "offsetY": 16
                                      },
                                      "total": {
                                          "show": false,
                                          "label": "Total",
                                          "fontSize": 16,
                                          "fontWeight": 600
                                      }
                                  }
                              },
                              "pie": {
                                  "customScale": 1,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "startAngle": 0,
                                  "endAngle": 360,
                                  "expandOnClick": true,
                                  "dataLabels": {
                                      "offset": 0,
                                      "minAngleToShowLabel": 10
                                  },
                                  "donut": {
                                      "size": "65%",
                                      "labels": {
                                          "show": false,
                                          "name": {
                                              "show": true,
                                              "fontSize": 16,
                                              "fontWeight": 600,
                                              "offsetY": -10
                                          },
                                          "value": {
                                              "show": true,
                                              "fontSize": 20,
                                              "fontWeight": 400,
                                              "offsetY": 10
                                          },
                                          "total": {
                                              "show": false,
                                              "showAlways": false,
                                              "label": "Total",
                                              "fontSize": 16,
                                              "fontWeight": 400
                                          }
                                      }
                                  }
                              },
                              "polarArea": {
                                  "rings": {
                                      "strokeWidth": 1,
                                      "strokeColor": "#e8e8e8"
                                  },
                                  "spokes": {
                                      "strokeWidth": 1,
                                      "connectorColors": "#e8e8e8"
                                  }
                              },
                              "radar": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "polygons": {
                                      "strokeWidth": 1,
                                      "strokeColors": "#e8e8e8",
                                      "connectorColors": "#e8e8e8",
                                      "fill": {}
                                  }
                              }
                          },
                          "dataLabels": {
                              "enabled": false,
                              "textAnchor": "middle",
                              "distributed": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "fontSize": 12,
                                  "fontWeight": 700
                              },
                              "background": {
                                  "enabled": true,
                                  "foreColor": "#fff",
                                  "borderRadius": 2,
                                  "padding": 4,
                                  "opacity": 0.9,
                                  "borderWidth": 1,
                                  "borderColor": "#fff",
                                  "dropShadow": {
                                      "enabled": false,
                                      "top": 1,
                                      "left": 1,
                                      "blur": 1,
                                      "color": "#000",
                                      "opacity": 0.45
                                  }
                              },
                              "dropShadow": {
                                  "enabled": false,
                                  "top": 1,
                                  "left": 1,
                                  "blur": 1,
                                  "color": "#000",
                                  "opacity": 0.45
                              }
                          },
                          "fill": {
                              "type": "solid",
                              "opacity": 0.85,
                              "gradient": {
                                  "shade": "dark",
                                  "type": "horizontal",
                                  "shadeIntensity": 0.5,
                                  "inverseColors": true,
                                  "opacityFrom": 1,
                                  "opacityTo": 1
                              },
                              "image": {
                                  "src": []
                              },
                              "pattern": {
                                  "style": "squares",
                                  "width": 6,
                                  "height": 6,
                                  "strokeWidth": 2
                              }
                          },
                          "forecastDataPoints": {
                              "count": 0,
                              "fillOpacity": 0.5,
                              "dashArray": 4
                          },
                          "grid": {
                              "show": true,
                              "borderColor": "#e0e0e0",
                              "strokeDashArray": 0,
                              "position": "back",
                              "xaxis": {
                                  "lines": {
                                      "show": false
                                  }
                              },
                              "yaxis": {
                                  "lines": {
                                      "show": true
                                  }
                              },
                              "row": {
                                  "opacity": 0.5
                              },
                              "column": {
                                  "opacity": 0.5
                              },
                              "padding": {
                                  "top": 0,
                                  "right": 25,
                                  "bottom": 0,
                                  "left": 15
                              }
                          },
                          "labels": [],
                          "legend": {
                              "show": true,
                              "showForSingleSeries": false,
                              "showForNullSeries": true,
                              "showForZeroSeries": true,
                              "floating": false,
                              "position": "bottom",
                              "horizontalAlign": "center",
                              "inverseOrder": false,
                              "fontSize": 14,
                              "fontWeight": 400,
                              "offsetX": -20,
                              "offsetY": 0,
                              "customLegendItems": [],
                              "labels": {
                                  "useSeriesColors": false
                              },
                              "markers": {
                                  "width": 12,
                                  "height": 12,
                                  "strokeWidth": 0,
                                  "strokeColor": "#fff",
                                  "radius": 12,
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "shape": "square",
                                  "size": 8
                              },
                              "itemMargin": {
                                  "horizontal": 5,
                                  "vertical": 0
                              },
                              "onItemClick": {
                                  "toggleDataSeries": true
                              },
                              "onItemHover": {
                                  "highlightDataSeries": true
                              }
                          },
                          "markers": {
                              "discrete": [],
                              "size": 0,
                              "strokeColors": "#fff",
                              "strokeWidth": 2,
                              "strokeOpacity": 0.9,
                              "strokeDashArray": 0,
                              "fillOpacity": 1,
                              "shape": "circle",
                              "width": 8,
                              "height": 8,
                              "radius": 2,
                              "offsetX": 0,
                              "offsetY": 0,
                              "showNullDataPoints": true,
                              "hover": {
                                  "sizeOffset": 3
                              }
                          },
                          "noData": {
                              "align": "center",
                              "verticalAlign": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "fontSize": "14px"
                              }
                          },
                          "responsive": [],
                          "states": {
                              "normal": {
                                  "filter": {
                                      "type": "none",
                                      "value": 0
                                  }
                              },
                              "hover": {
                                  "filter": {
                                      "type": "lighten",
                                      "value": 0.1
                                  }
                              },
                              "active": {
                                  "allowMultipleDataPointsSelection": false,
                                  "filter": {
                                      "type": "darken",
                                      "value": 0.5
                                  }
                              }
                          },
                          "title": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 0,
                              "floating": false,
                              "style": {
                                  "fontSize": "14px",
                                  "fontWeight": 900
                              }
                          },
                          "subtitle": {
                              "align": "left",
                              "margin": 5,
                              "offsetX": 0,
                              "offsetY": 30,
                              "floating": false,
                              "style": {
                                  "fontSize": "12px",
                                  "fontWeight": 400
                              }
                          },
                          "stroke": {
                              "show": true,
                              "curve": "smooth",
                              "lineCap": "butt",
                              "width": 2,
                              "dashArray": 0
                          },
                          "tooltip": {
                              "enabled": true,
                              "shared": false,
                              "followCursor": false,
                              "intersect": true,
                              "inverseOrder": false,
                              "fillSeriesColor": false,
                              "theme": "light",
                              "style": {
                                  "fontSize": "12px"
                              },
                              "onDatasetHover": {
                                  "highlightDataSeries": false
                              },
                              "x": {
                                  "show": true,
                                  "format": "dd MMM"
                              },
                              "y": {
                                  "title": {}
                              },
                              "z": {
                                  "title": "Size: "
                              },
                              "marker": {
                                  "show": true
                              },
                              "items": {
                                  "display": "flex"
                              },
                              "fixed": {
                                  "enabled": false,
                                  "position": "topRight",
                                  "offsetX": 0,
                                  "offsetY": 0
                              }
                          },
                          "xaxis": {
                              "type": "category",
                              "categories": [],
                              "convertedCatToNumeric": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickPlacement": "between",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "theme": {
                              "mode": "light",
                              "palette": "palette4",
                              "monochrome": {
                                  "enabled": false,
                                  "color": "#008FFB",
                                  "shadeTo": "light",
                                  "shadeIntensity": 0.65
                              }
                          }
                      },
                      "globals": {
                          "chartID": "pWNgI",
                          "cuid": "7pfk8hfg",
                          "events": {
                              "beforeMount": [],
                              "mounted": [],
                              "updated": [],
                              "clicked": [],
                              "selection": [],
                              "dataPointSelection": [],
                              "zoomed": [],
                              "scrolled": []
                          },
                          "colors": [
                              "#4ecdc4",
                              "#c7f464",
                              "#81D4FA",
                              "#fd6a6a",
                              "#546E7A"
                          ],
                          "clientX": null,
                          "clientY": null,
                          "fill": {
                              "colors": [
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A",
                                  "#4ecdc4",
                                  "#c7f464",
                                  "#81D4FA",
                                  "#fd6a6a",
                                  "#546E7A"
                              ]
                          },
                          "stroke": {},
                          "dataLabels": {
                              "style": {}
                          },
                          "radarPolygons": {
                              "fill": {
                                  "colors": [
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none",
                                      "none"
                                  ]
                              }
                          },
                          "markers": {
                              "size": [
                                  0,
                                  0,
                                  0
                              ],
                              "largestSize": 0
                          },
                          "animationEnded": true,
                          "isDirty": true,
                          "isExecCalled": false,
                          "initialConfig": {},
                          "initialSeries": [
                              {
                                  "name": "Column 1",
                                  "data": [
                                      {
                                          "x": "Item 1",
                                          "y": 10
                                      },
                                      {
                                          "x": "Item 2",
                                          "y": 20
                                      },
                                      {
                                          "x": "Item 3",
                                          "y": 30
                                      },
                                      {
                                          "x": "Item 4",
                                          "y": 40
                                      }
                                  ]
                              },
                              {
                                  "name": "Column 2",
                                  "data": [
                                      {
                                          "x": "Item 1",
                                          "y": 15
                                      },
                                      {
                                          "x": "Item 2",
                                          "y": 10
                                      },
                                      {
                                          "x": "Item 3",
                                          "y": 25
                                      },
                                      {
                                          "x": "Item 4",
                                          "y": 30
                                      }
                                  ]
                              }
                          ],
                          "lastXAxis": {
                              "type": "category",
                              "categories": [],
                              "convertedCatToNumeric": false,
                              "offsetX": 0,
                              "offsetY": 0,
                              "labels": {
                                  "show": true,
                                  "rotate": -45,
                                  "rotateAlways": false,
                                  "hideOverlappingLabels": true,
                                  "trim": true,
                                  "maxHeight": 120,
                                  "showDuplicates": true,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 400,
                                      "cssClass": ""
                                  },
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "datetimeUTC": true,
                                  "datetimeFormatter": {
                                      "year": "yyyy",
                                      "month": "MMM 'yy",
                                      "day": "dd MMM",
                                      "hour": "HH:mm",
                                      "minute": "HH:mm:ss",
                                      "second": "HH:mm:ss"
                                  }
                              },
                              "axisBorder": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "width": "100%",
                                  "height": 1,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "axisTicks": {
                                  "show": true,
                                  "color": "#e0e0e0",
                                  "height": 6,
                                  "offsetX": 0,
                                  "offsetY": 0
                              },
                              "tickPlacement": "between",
                              "floating": false,
                              "position": "bottom",
                              "title": {
                                  "offsetX": 0,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": 12,
                                      "fontWeight": 700,
                                      "cssClass": ""
                                  }
                              },
                              "crosshairs": {
                                  "show": true,
                                  "width": 1,
                                  "position": "back",
                                  "opacity": 0.9,
                                  "stroke": {
                                      "color": "#b6b6b6",
                                      "width": 1,
                                      "dashArray": 3
                                  },
                                  "fill": {
                                      "type": "solid",
                                      "color": "#B1B9C4",
                                      "gradient": {
                                          "colorFrom": "#D8E3F0",
                                          "colorTo": "#BED1E6",
                                          "stops": [
                                              0,
                                              100
                                          ],
                                          "opacityFrom": 0.4,
                                          "opacityTo": 0.5
                                      }
                                  },
                                  "dropShadow": {
                                      "enabled": false,
                                      "left": 0,
                                      "top": 0,
                                      "blur": 1,
                                      "opacity": 0.4
                                  }
                              },
                              "tooltip": {
                                  "enabled": false,
                                  "offsetY": 0,
                                  "style": {
                                      "fontSize": "12px"
                                  }
                              }
                          },
                          "lastYAxis": [
                              {
                                  "show": true,
                                  "showAlways": false,
                                  "showForNullSeries": true,
                                  "opposite": false,
                                  "reversed": false,
                                  "logarithmic": false,
                                  "logBase": 10,
                                  "forceNiceScale": false,
                                  "floating": false,
                                  "labels": {
                                      "show": true,
                                      "minWidth": 0,
                                      "maxWidth": 160,
                                      "offsetX": 0,
                                      "offsetY": 0,
                                      "rotate": 0,
                                      "padding": 20,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 400,
                                          "cssClass": ""
                                      }
                                  },
                                  "axisBorder": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 1,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "axisTicks": {
                                      "show": false,
                                      "color": "#e0e0e0",
                                      "width": 6,
                                      "offsetX": 0,
                                      "offsetY": 0
                                  },
                                  "title": {
                                      "rotate": -90,
                                      "offsetY": 0,
                                      "offsetX": 0,
                                      "style": {
                                          "fontSize": 11,
                                          "fontWeight": 700,
                                          "cssClass": ""
                                      }
                                  },
                                  "tooltip": {
                                      "enabled": false,
                                      "offsetX": 0
                                  },
                                  "crosshairs": {
                                      "show": true,
                                      "position": "front",
                                      "stroke": {
                                          "color": "#b6b6b6",
                                          "width": 1,
                                          "dashArray": 0
                                      }
                                  }
                              }
                          ],
                          "columnSeries": null,
                          "labels": [
                              "Item 1",
                              "Item 2",
                              "Item 3",
                              "Item 4"
                          ],
                          "timescaleLabels": [],
                          "noLabelsProvided": false,
                          "allSeriesCollapsed": false,
                          "collapsedSeries": [],
                          "collapsedSeriesIndices": [],
                          "ancillaryCollapsedSeries": [],
                          "ancillaryCollapsedSeriesIndices": [],
                          "risingSeries": [],
                          "dataFormatXNumeric": false,
                          "capturedSeriesIndex": -1,
                          "capturedDataPointIndex": -1,
                          "selectedDataPoints": [],
                          "goldenPadding": 35,
                          "invalidLogScale": false,
                          "ignoreYAxisIndexes": [],
                          "yAxisSameScaleIndices": [],
                          "maxValsInArrayIndex": 0,
                          "radialSize": 94.00000000000001,
                          "zoomEnabled": true,
                          "panEnabled": false,
                          "selectionEnabled": false,
                          "yaxis": null,
                          "mousedown": false,
                          "lastClientPosition": {},
                          "yValueDecimal": 0,
                          "total": 0,
                          "SVGNS": "http://www.w3.org/2000/svg",
                          "svgWidth": 400,
                          "svgHeight": 250,
                          "noData": false,
                          "locale": {
                              "toolbar": {
                                  "exportToSVG": "Download SVG",
                                  "exportToPNG": "Download PNG",
                                  "exportToCSV": "Download CSV",
                                  "menu": "Menu",
                                  "selection": "Selection",
                                  "selectionZoom": "Selection Zoom",
                                  "zoomIn": "Zoom In",
                                  "zoomOut": "Zoom Out",
                                  "pan": "Panning",
                                  "reset": "Reset Zoom"
                              }
                          },
                          "dom": {
                              "baseEl": {
                                  "_prevClass": "pWNgI"
                              },
                              "elWrap": {},
                              "Paper": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "svg",
                                  "_defs": {
                                      "_stroke": "#000000",
                                      "_event": null,
                                      "dom": {},
                                      "node": {},
                                      "type": "defs"
                                  }
                              },
                              "elGraphical": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elAnnotations": {
                                  "_stroke": "#000000",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "g"
                              },
                              "elLegendWrap": {},
                              "elLegendForeign": {},
                              "elGridRectMask": {},
                              "elGridRectMarkerMask": {},
                              "elForecastMask": {},
                              "elNonForecastMask": {},
                              "elGridRect": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              },
                              "elGridRectMarker": {
                                  "_stroke": "none",
                                  "_event": null,
                                  "dom": {},
                                  "node": {},
                                  "type": "rect"
                              }
                          },
                          "memory": {
                              "methodsToExec": []
                          },
                          "shouldAnimate": true,
                          "skipLastTimelinelabel": false,
                          "skipFirstTimelinelabel": false,
                          "delayedElements": [
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              },
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              },
                              {
                                  "el": {
                                      "instance": {
                                          "_stroke": "#000000",
                                          "_event": null,
                                          "dom": {},
                                          "type": "g"
                                      }
                                  },
                                  "index": 0
                              }
                          ],
                          "axisCharts": true,
                          "isDataXYZ": false,
                          "resized": true,
                          "resizeTimer": null,
                          "comboCharts": false,
                          "dataChanged": false,
                          "previousPaths": [],
                          "allSeriesHasEqualX": true,
                          "pointsArray": [],
                          "dataLabelsRects": [],
                          "lastDrawnDataLabelsIndexes": [],
                          "hasNullValues": false,
                          "zoomed": false,
                          "gridWidth": 345,
                          "gridHeight": 205,
                          "rotateXLabels": false,
                          "defaultLabels": false,
                          "yLabelFormatters": [
                              null
                          ],
                          "LINE_HEIGHT_RATIO": 1.618,
                          "xAxisLabelsHeight": 10,
                          "xAxisLabelsWidth": 0,
                          "yAxisLabelsWidth": 0,
                          "scaleX": 1,
                          "scaleY": 1,
                          "translateX": 30,
                          "translateY": 30,
                          "translateYAxisX": [
                              -3
                          ],
                          "yAxisWidths": [],
                          "translateXAxisY": -4,
                          "translateXAxisX": 0,
                          "tooltip": {
                              "tooltipUtil": {},
                              "tooltipLabels": {
                                  "tooltipUtil": {}
                              },
                              "tooltipPosition": {},
                              "marker": {
                                  "tooltipPosition": {}
                              },
                              "intersect": {},
                              "axesTooltip": {},
                              "showOnIntersect": true,
                              "showTooltipTitle": true,
                              "fixedTooltip": false,
                              "xaxisTooltip": null,
                              "yaxisTTEls": null,
                              "isBarShared": false,
                              "lastHoverTime": 1683551159130,
                              "xyRatios": {
                                  "yRatio": [
                                      0.3902439024390244
                                  ],
                                  "invertedYRatio": 0.2318840579710145,
                                  "zRatio": null,
                                  "xRatio": null,
                                  "initialXRatio": null,
                                  "invertedXRatio": null,
                                  "baseLineInvertedY": 0.1,
                                  "baseLineY": [
                                      0
                                  ],
                                  "baseLineX": 0
                              },
                              "isXAxisTooltipEnabled": false,
                              "yaxisTooltips": [
                                  false
                              ],
                              "allTooltipSeriesGroups": [],
                              "xaxisOffY": 206,
                              "yaxisOffX": 1,
                              "yaxisTooltip": {},
                              "yaxisTooltipText": [
                                  {}
                              ],
                              "xcrosshairsWidth": 1,
                              "ycrosshairs": {
                                  "instance": {
                                      "_stroke": "#b6b6b6",
                                      "_event": null,
                                      "dom": {},
                                      "type": "line"
                                  }
                              },
                              "ycrosshairsHidden": {
                                  "instance": {
                                      "_stroke": "#b6b6b6",
                                      "_event": null,
                                      "dom": {},
                                      "type": "line"
                                  }
                              },
                              "xAxisTicksPositions": [
                                  86.25,
                                  172.5,
                                  258.75,
                                  345
                              ],
                              "dataPointsDividedHeight": 51.25,
                              "dataPointsDividedWidth": 86.25,
                              "tooltipTitle": {},
                              "legendLabels": {
                                  "0": {},
                                  "1": {}
                              },
                              "ttItems": [
                                  {},
                                  {}
                              ],
                              "seriesBound": {
                                  "x": 0,
                                  "y": 0,
                                  "width": 0,
                                  "height": 0,
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0
                              }
                          },
                          "series": [
                              [
                                  10,
                                  20,
                                  30,
                                  40
                              ],
                              [
                                  15,
                                  10,
                                  25,
                                  30
                              ]
                          ],
                          "seriesCandleO": [],
                          "seriesCandleH": [],
                          "seriesCandleM": [],
                          "seriesCandleL": [],
                          "seriesCandleC": [],
                          "seriesRangeStart": [],
                          "seriesRangeEnd": [],
                          "seriesRangeBar": [],
                          "seriesPercent": [
                              [
                                  40,
                                  66.66666666666667,
                                  54.54545454545455,
                                  57.142857142857146
                              ],
                              [
                                  60,
                                  33.333333333333336,
                                  45.45454545454545,
                                  42.857142857142854
                              ]
                          ],
                          "seriesGoals": [
                              [
                                  null,
                                  null,
                                  null,
                                  null
                              ],
                              [
                                  null,
                                  null,
                                  null,
                                  null
                              ]
                          ],
                          "seriesX": [
                              null,
                              [
                                  "Item 1",
                                  "Item 2",
                                  "Item 3",
                                  "Item 4"
                              ]
                          ],
                          "seriesZ": [
                              [],
                              []
                          ],
                          "seriesNames": [
                              "Column 1",
                              "Column 2"
                          ],
                          "seriesTotals": [
                              100,
                              80
                          ],
                          "seriesLog": [
                              null,
                              null
                          ],
                          "seriesColors": [
                              null,
                              null
                          ],
                          "stackedSeriesTotals": [
                              25,
                              30,
                              55,
                              70
                          ],
                          "seriesXvalues": [
                              [
                                  99.1875,
                                  185.4375,
                                  271.6875,
                                  357.9375
                              ],
                              [
                                  99.1875,
                                  185.4375,
                                  271.6875,
                                  357.9375
                              ]
                          ],
                          "seriesYvalues": [
                              [
                                  179.375,
                                  153.75,
                                  128.125,
                                  102.5
                              ],
                              [
                                  140.9375,
                                  128.125,
                                  64.0625,
                                  25.625
                              ]
                          ],
                          "categoryLabels": [],
                          "selectionResizeTimer": null,
                          "isXNumeric": false,
                          "xaxisLabelsCount": 4,
                          "isMultiLineX": false,
                          "isMultipleYAxis": false,
                          "maxY": 80,
                          "minY": 0,
                          "minYArr": [
                              0
                          ],
                          "maxYArr": [
                              80
                          ],
                          "maxX": -1.7976931348623157e+308,
                          "minX": 1.7976931348623157e+308,
                          "initialMaxX": -1.7976931348623157e+308,
                          "initialMinX": 1.7976931348623157e+308,
                          "maxDate": 0,
                          "minDate": 1.7976931348623157e+308,
                          "minZ": 1.7976931348623157e+308,
                          "maxZ": -1.7976931348623157e+308,
                          "minXDiff": 1.7976931348623157e+308,
                          "yAxisScale": [
                              {
                                  "result": [
                                      0,
                                      20,
                                      40,
                                      60,
                                      80
                                  ],
                                  "niceMin": 0,
                                  "niceMax": 80
                              }
                          ],
                          "xAxisScale": null,
                          "xAxisTicksPositions": [],
                          "yLabelsCoords": [
                              {
                                  "width": 10,
                                  "index": 0
                              }
                          ],
                          "yTitleCoords": [
                              {
                                  "width": 0,
                                  "index": 0
                              }
                          ],
                          "barPadForNumericAxis": 0,
                          "padHorizontal": 0,
                          "xRange": null,
                          "yRange": [
                              80
                          ],
                          "zRange": null,
                          "dataPoints": 4,
                          "xTickAmount": 0,
                          "xyCharts": true,
                          "isBarHorizontal": false,
                          "chartClass": ".apexchartspWNgI",
                          "comboBarCount": 0,
                          "isRangeBar": false,
                          "xAxisHeight": 10,
                          "yLogRatio": [
                              0.3902439024390244
                          ],
                          "logYRange": [
                              null
                          ]
                      }
                  },
                  "publicMethods": [
                      "updateOptions",
                      "updateSeries",
                      "appendData",
                      "appendSeries",
                      "toggleSeries",
                      "showSeries",
                      "hideSeries",
                      "setLocale",
                      "resetSeries",
                      "zoomX",
                      "toggleDataPointSelection",
                      "dataURI",
                      "addXaxisAnnotation",
                      "addYaxisAnnotation",
                      "addPointAnnotation",
                      "clearAnnotations",
                      "removeAnnotation",
                      "paper",
                      "destroy"
                  ],
                  "eventList": [
                      "click",
                      "mousedown",
                      "mousemove",
                      "mouseleave",
                      "touchstart",
                      "touchmove",
                      "touchleave",
                      "mouseup",
                      "touchend"
                  ],
                  "animations": {},
                  "axes": {},
                  "core": {},
                  "config": {
                      "opts": {}
                  },
                  "data": {
                      "coreUtils": {},
                      "fallbackToCategory": true,
                      "activeSeriesIndex": 0
                  },
                  "grid": {
                      "xaxisLabels": [
                          "Item 1",
                          "Item 2",
                          "Item 3",
                          "Item 4"
                      ],
                      "axesUtils": {},
                      "isRangeBar": 0,
                      "elg": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      },
                      "elgridLinesH": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      },
                      "elgridLinesV": {
                          "_stroke": "#000000",
                          "_event": null,
                          "dom": {},
                          "node": {},
                          "type": "g"
                      }
                  },
                  "graphics": {},
                  "coreUtils": {},
                  "crosshairs": {},
                  "events": {},
                  "exports": {},
                  "localization": {},
                  "options": {
                      "yAxis": {
                          "show": true,
                          "showAlways": false,
                          "showForNullSeries": true,
                          "opposite": false,
                          "reversed": false,
                          "logarithmic": false,
                          "logBase": 10,
                          "forceNiceScale": false,
                          "floating": false,
                          "labels": {
                              "show": true,
                              "minWidth": 0,
                              "maxWidth": 160,
                              "offsetX": 0,
                              "offsetY": 0,
                              "rotate": 0,
                              "padding": 20,
                              "style": {
                                  "colors": [],
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": ""
                              }
                          },
                          "axisBorder": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 1,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "axisTicks": {
                              "show": false,
                              "color": "#e0e0e0",
                              "width": 6,
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "title": {
                              "rotate": -90,
                              "offsetY": 0,
                              "offsetX": 0,
                              "style": {
                                  "fontSize": "11px",
                                  "fontWeight": 900,
                                  "cssClass": ""
                              }
                          },
                          "tooltip": {
                              "enabled": false,
                              "offsetX": 0
                          },
                          "crosshairs": {
                              "show": true,
                              "position": "front",
                              "stroke": {
                                  "color": "#b6b6b6",
                                  "width": 1,
                                  "dashArray": 0
                              }
                          }
                      },
                      "pointAnnotation": {
                          "x": 0,
                          "y": null,
                          "yAxisIndex": 0,
                          "seriesIndex": 0,
                          "marker": {
                              "size": 4,
                              "fillColor": "#fff",
                              "strokeWidth": 2,
                              "strokeColor": "#333",
                              "shape": "circle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "radius": 2,
                              "cssClass": ""
                          },
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          },
                          "customSVG": {
                              "offsetX": 0,
                              "offsetY": 0
                          },
                          "image": {
                              "width": 20,
                              "height": 20,
                              "offsetX": 0,
                              "offsetY": 0
                          }
                      },
                      "yAxisAnnotation": {
                          "y": 0,
                          "y2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "width": "100%",
                          "yAxisIndex": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "end",
                              "position": "right",
                              "offsetX": 0,
                              "offsetY": -3,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "xAxisAnnotation": {
                          "x": 0,
                          "x2": null,
                          "strokeDashArray": 1,
                          "fillColor": "#c2c2c2",
                          "borderColor": "#c2c2c2",
                          "borderWidth": 1,
                          "opacity": 0.3,
                          "offsetX": 0,
                          "offsetY": 0,
                          "label": {
                              "borderColor": "#c2c2c2",
                              "borderWidth": 1,
                              "borderRadius": 2,
                              "textAnchor": "middle",
                              "orientation": "vertical",
                              "position": "top",
                              "offsetX": 0,
                              "offsetY": 0,
                              "style": {
                                  "background": "#fff",
                                  "fontSize": "11px",
                                  "fontWeight": 400,
                                  "cssClass": "",
                                  "padding": {
                                      "left": 5,
                                      "right": 5,
                                      "top": 2,
                                      "bottom": 2
                                  }
                              }
                          }
                      },
                      "text": {
                          "x": 0,
                          "y": 0,
                          "text": "",
                          "textAnchor": "start",
                          "fontSize": "13px",
                          "fontWeight": 400,
                          "appendTo": ".apexcharts-annotations",
                          "backgroundColor": "transparent",
                          "borderColor": "#c2c2c2",
                          "borderRadius": 0,
                          "borderWidth": 0,
                          "paddingLeft": 4,
                          "paddingRight": 4,
                          "paddingTop": 2,
                          "paddingBottom": 2
                      }
                  },
                  "responsive": {},
                  "series": {
                      "legendInactiveClass": "legend-mouseover-inactive"
                  },
                  "theme": {
                      "isColorFn": false,
                      "isHeatmapDistributed": false,
                      "isBarDistributed": false
                  },
                  "formatters": {
                      "tooltipKeyFormat": "dd MMM"
                  },
                  "titleSubtitle": {},
                  "legend": {
                      "isBarsDistributed": false,
                      "legendHelpers": {}
                  },
                  "toolbar": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308
                  },
                  "dimensions": {
                      "lgRect": {
                          "x": 0,
                          "y": 0,
                          "height": 0,
                          "width": 0
                      },
                      "yAxisWidth": 15,
                      "yAxisWidthLeft": 15,
                      "yAxisWidthRight": 0,
                      "xAxisHeight": 10,
                      "isSparkline": false,
                      "dimHelpers": {},
                      "dimYAxis": {},
                      "dimXAxis": {},
                      "dimGrid": {},
                      "lgWidthForSideLegends": 0,
                      "xPadRight": 0,
                      "xPadLeft": 0,
                      "xAxisWidth": 0
                  },
                  "updateHelpers": {},
                  "zoomPanSelection": {
                      "selectedClass": "apexcharts-selected",
                      "minX": 1.7976931348623157e+308,
                      "maxX": -1.7976931348623157e+308,
                      "dragged": false,
                      "graphics": {},
                      "eventList": [
                          "mousedown",
                          "mouseleave",
                          "mousemove",
                          "touchstart",
                          "touchmove",
                          "mouseup",
                          "touchend"
                      ],
                      "clientX": 0,
                      "clientY": 0,
                      "startX": 0,
                      "endX": 0,
                      "dragX": 0,
                      "startY": 0,
                      "endY": 0,
                      "dragY": 0,
                      "moveDirection": "none"
                  },
                  "pie": {
                      "chartType": "bar",
                      "initialAnim": false,
                      "dynamicAnim": false,
                      "animBeginArr": [
                          0
                      ],
                      "animDur": 0,
                      "defaultSize": 205,
                      "centerY": 102.5,
                      "centerX": 172.5,
                      "fullAngle": 360,
                      "initialAngle": 0,
                      "donutSize": 61.10000000000001,
                      "maxY": 0,
                      "sliceLabels": [],
                      "sliceSizes": [],
                      "prevSectorAngleArr": []
                  },
                  "rangeBar": {
                      "isHorizontal": false,
                      "strokeWidth": 2,
                      "isNullValue": false,
                      "isRangeBar": 0,
                      "xRatio": null,
                      "initialXRatio": null,
                      "invertedXRatio": null,
                      "invertedYRatio": 0.2318840579710145,
                      "baseLineInvertedY": 0.1,
                      "yaxisIndex": 0,
                      "seriesLen": 0,
                      "barHelpers": {}
                  },
                  "annotations": {
                      "graphics": {},
                      "helpers": {},
                      "xAxisAnnotations": {},
                      "yAxisAnnotations": {},
                      "pointsAnnotations": {},
                      "xDivision": 86.25
                  }
              }
          }
      ]
  }
  return (
    <ReactApexcharts type='donut'  options={options} series={options.series} height={200}/>
  )
}

export default Donut


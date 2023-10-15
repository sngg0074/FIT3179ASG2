var vg_1 = "Graphs/choroplethv2.vg.json";
var vg_2 = "Graphs/stacked_bar_chart.json";
var vg_3 = "Graphs/bubble_chart.json";
var vg_4 = "Graphs/heatmap.json";
var vg_5 = "Graphs/connected_dot_plot.json";
var vg_6 = "Graphs/parallel_coordinate.json";

vegaEmbed("#choropleth", vg_1, {"actions": false}).then(function(result){}).catch(console.error);
vegaEmbed("#stack", vg_2, {"actions": false}).then(function(result){}).catch(console.error);
vegaEmbed("#bubble", vg_3, {"actions": false}).then(function(result){}).catch(console.error);
vegaEmbed("#heat", vg_4, {"actions": false}).then(function(result){}).catch(console.error);
vegaEmbed("#dot", vg_5, {"actions": false}).then(function(result){}).catch(console.error);
vegaEmbed("#parallel", vg_6, {"actions": false}).then(function(result){}).catch(console.error);
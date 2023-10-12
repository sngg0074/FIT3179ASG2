var vg_1 = "Graphs/choroplethv2.vg.json";
var vg_2 = "Graphs/connected_dot_plot.json";
var vg_3 = "Graphs/parallel_coordinate.json";


vegaEmbed("#choropleth", vg_1, {"actions": false}).then(function(result){}).catch(console.error);
vegaEmbed("#condotplot", vg_2, {"actions": false}).then(function(result){}).catch(console.error);
vegaEmbed("#paralco", vg_3, {"actions": false}).then(function(result){}).catch(console.error);
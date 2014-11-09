var d3 = 
var _ = require("./lib/underscore-min.js");
var UndirectedGraph = require("./lib/undirected_graph.js").UndirectedGraph;




d3.json("world.json", function(error, world) {
		if (error) return console.error(error);

		var colors = [2,3,4,2,2,0,0,0,0,1,2,2,2,2,1,1,3,0,3,3,2,1,0,1,0,3,3,1,2,0,1,0,2,0,1,1,1,0,1,0,3,0,3,1,1,1,0,1,1,0,1,2,2,0,0,1,0,1,1,2,1,1,2,1,1,0,0,1,1,0,0,2,1,2,0,1,0,0,0,0,0,2,0,2,0,0,3,0,3,2,2,2,2,2,0,0,1,3,2,2,2,0,1,0,2,0,2,2,0,3,3,0,0,0,0,1,0,1,1,0,0,0,0,0,2,0,0,2,0,2,1,3,1,0,0,0,3,0,1,0,1,0,0,0,2,0,1,1,2,0,3,0,1,1,1,0,1,3,0,0,0,0,2,0,1,2,1,1,0,1,2,0,0,2,2,2,1]; 

		var countries = topojson.feature(world, world.objects.countries).features; 

		neighbors1 = _.chain(world.objects.countries.geometries).groupBy(function(country){
			return country.properties.continent;
		}).each(function(continent,key,list){
			list[key] = topojson.neighbors(continent);
		}).value();

		var neighbors = topojson.neighbors(world.objects.countries.geometries);



graph = new UndirectedGraph(data.length);

_.each(data,function(country,index){
  _.each(country,function(neighbor){
    graph.addEdge(index, neighbor);
  });
});

console.log(graph.slfColorize());

console.log(graph.colors);

window.onload = function() {
var graph = {"nodes":[{"name":"forum.aufeminin.com","onto_class":"Website","type":["forum","marchand"],"rating":90,"id":2951,"hasURL":"forum.aufeminin.com"},{"name":"misterparfum.com","onto_class":"Website","type":["marchand"],"rating":1,"id":654654,"hasURL":"misterparfum.com"},{"name":"parfumerieprix.com","onto_class":"Website","type":["marchand"],"rating":80,"id":6546544,"hasURL":"parfumerieprix.com"},{"name":"parfumpourlui.com","onto_class":"Website","type":["marchand"],"rating":1,"id":68987978,"hasURL":"parfumpourlui.com"},		{"name":"rasoirmoinscher.com","onto_class":"Website","type":["marchand"],"rating":1,"id":9878933,"hasURL":"rasoirmoinscher.com"},{"name":"forum.lesarnaques.com","onto_class":"Website","type":["forum"],"rating":1,"id":6161,"hasURL":"forum.lesarnaques.com"},{"name":"http://forum.lesarnaques.com","onto_class":"Webpage","type":["forum","list"],"rating":1,"id":64654,"title":"MISTER PARFUM","language":"FR"},{"name":"MISTER PARFUM = ATTENTION !!","onto_class":"Post","type":["forum"],"rating":20,"id":354654,"hasContent":"MISTER PARFUM","publicationDate":"2013-09-05"},{"name":"Re: MISTER PARFUM = ATTENTION !!","onto_class":"Post","type":["forum"],"rating":50,"id":8494,"hasContent":"Re: MISTER PARFUM","publicationDate":"2013-09-05"},{"name":"MISTER PARFUM","onto_class":"Keyword","type":[],"rating":1,"id":6846874,"hasValue":"MISTER PARFUM"},{"name":"misterparfum.com","onto_class":"Keyword","type":[],"rating":1,"id":5487,"hasValue":"misterparfum.com"},{"name":"Kenzo","onto_class":"Keyword","type":[],"rating":80,"id":"parfum_kenzo","hasValue":"kenzo"},{"name":"lady million","onto_class":"Keyword","type":[],"rating":1,"id":65465465,"hasValue":"lady million"},{"name":"Jungle de Kenzo","onto_class":"Keyword","type":[],"rating":90,"id":"jungle_de_kenzo","hasValue":"jungle de kenzo"},{"name":"kikdeluxe","onto_class":"Agent","type":[],"rating":20,"id":313514,"hasNickName":"kikideluxe","isBuyer":1},{"name":"Korben06","onto_class":"Agent","type":[],"rating":40,"id":36543614,"hasNickName":"Korben06","isBuyer":1},{"name":"Yann YA645","onto_class":"Agent","type":[],"rating":100,"id":"Yann_YA645","hasNickName":"YA645-GANDI","locatedCity":"Belize City","hasFakeWhois":1},{"name":"Jungle http://misterparfum.com/10363-jungle.html","onto_class":"Post","type":["marchand"],"rating":1,"id":97413,"hasContent":"Jungle"},{"name":"http://misterparfum.com/10363-jungle.html","onto_class":"Webpage","type":["marchand"],"rating":1,"id":97414,"hasURL":"http://misterparfum.com/10363-jungle.html"},{"name":"Jungle de Kenzo pour homme, 100 ml, 55 euros","onto_class":"Product","type":[],"rating":100,"id":976431231,"hasPrice":"55.99","hasDiscount":1,"hasCurrency":"EUR","hasCapacity":100},{"name":"Jungle Elephant","onto_class":"Post","type":["marchand"],"rating":1,"id":9416,"hasContent":"JUNGLE (ELEPHANT)"},{"name":"leaderparfum.com","onto_class":"Website","type":["marchand"],"rating":1,"id":998949,"hasURL":"leaderparfum.com.com"},{"name":"Jungle (Elephan) de Kenzo pour homme, 50 ml, 51 euros","onto_class":"Product","type":[],"rating":100,"id":984941,"hasPrice":"51","hasDiscount":1,"hasCurrency":"EUR","hasCapacity":50},{"name":"GODADDY","onto_class":"Agent","type":[],"rating":100,"id":"99843","hasNickName":"GODADDY.COM","locatedCity":"unknown","hasFakeWhois":1},{"name":"monparfumpascher.com","onto_class":"Website","type":["marchand"],"rating":1,"id":94915,"hasURL":"monparfumpascher.com"},{"name":"liderperfume.com","onto_class":"Website","type":["marchand"],"rating":1,"id":913134,"hasURL":"liderperfume.com"},{"name":"liderprofumo.com","onto_class":"Website","type":["marchand"],"rating":1,"id":9134371,"hasURL":"liderprofumo.com"}],"links":[{"source":6,"target":5,"value":6, "label":"publishedOn"},{"source":8,"target":5,"value":6, "label":"publishedOn"},{"source":7,"target":1,"value":4, "label":"containsKeyword"},{"source":8,"target":10,"value":3, "label":"containsKeyword"},{"source":7,"target":14,"value":4, "label":"publishedBy"},{"source":8,"target":15,"value":6, "label":"publishedBy"},{"source":9,"target":1,"value":6, "label":"depicts"},{"source":10,"target":1,"value":6, "label":"depicts"},{"source":16,"target":1,"value":6, "label":"manageWebsite"},{"source":16,"target":2,"value":5, "label":"manageWebsite"},{"source":16,"target":3,"value":6, "label":"manageWebsite"},{"source":16,"target":4,"value":6, "label":"manageWebsite"},{"source":19,"target":18,"value":2, "label":"postedOn"},{"source":18,"target":1,"value":6, "label":"childOf"},{"source":17,"target":19,"value":8, "label":"describes"},{"source":18,"target":11,"value":6, "label":"containsKeyword"},{"source":17,"target":13,"value":3, "label":"containsKeyword"},{"source":20,"target":13,"value":3, "label":"containsKeyword"},{"source":20,"target":21,"value":3, "label":"postedOn"},{"source":22,"target":20,"value":3, "label":"postedOn"},{"source":23,"target":21,"value":3, "label":"manageWebsite"},{"source":23,"target":24,"value":3, "label":"manageWebsite"},{"source":23,"target":25,"value":3, "label":"manageWebsite"},{"source":23,"target":26,"value":3, "label":"manageWebsite"}]} ;


var margin = {top: -5, right: -5, bottom: -5, left: -5};
var width = 900 - margin.left - margin.right,
	height = 600- margin.top - margin.bottom;

var color = d3.scale.category20();
	
var force = d3.layout.force()
            .charge(-200)
            .linkDistance(50)
            .size([width + margin.left + margin.right, height + margin.top + margin.bottom]);

var zoom = d3.behavior.zoom()
            .scaleExtent([1, 10])
            .on("zoom", zoomed);

var drag = d3.behavior.drag()
            .origin(function(d) { return d; })
            .on("dragstart", dragstarted)
            .on("drag", dragged)
            .on("dragend", dragended);


var svg = d3.select("#map").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.right + ")")
            .call(zoom);

var rect = svg.append("rect")
            .attr("width", width)
            .attr("height", height)
            .style("fill", "none")
            .style("pointer-events", "all");

var container = svg.append("g");

//d3.json('http://blt909.free.fr/wd/map2.json', function(error, graph) {
                
force.nodes(graph.nodes)
                    .links(graph.links)
                    .start();
      
                var tooltip = d3.select("body")
                    .append("foreignObject")
                    .append("xhtml:div")
                    .attr("id", "tooltip")
                    .style("position", "absolute")
                    .style("z-index", "10")
                    .style("color", "#eeeeee")
                    .style("visibility", "hidden")
                    .text("");

var link = container.append("g")
                        .attr("class", "links")
                        .selectAll(".link")
			.data(graph.links)
                        .enter().append("line")
			.attr("class", "link")
			.style("stroke-width", function(d) { return Math.sqrt(d.value); });
  
var node = container.append("g")
                        .attr("class", "nodes")
                        .selectAll(".node")
			.data(graph.nodes)
			.enter().append("g")
			.attr("class", "node")
                        .attr("cx", function(d) { return d.x; })
                        .attr("cy", function(d) { return d.y; })
                        .call(drag);
		  
node.append("circle")
			.attr("r", function(d) { return d.weight * 2+ 12; })
			.style("fill", function(d) { return color(1/d.rating); });
		 
                
force.on("tick", function() {
    
    link.attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; });
    
    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

});
                
var linkedByIndex = {};

graph.links.forEach(function(d) {
                    linkedByIndex[d.source.index + "," + d.target.index] = 1;
});


function isConnected(a, b) {
    return linkedByIndex[a.index + "," + b.index] || linkedByIndex[b.index + "," + a.index];
};

node.on("mouseover", function(d){
                        
                        node.classed("node-active", function(o) {
                            thisOpacity = isConnected(d, o) ? true : false;
                            this.setAttribute('fill-opacity', thisOpacity);
                            return thisOpacity;
                        });

                        link.classed("link-active", function(o) {
                            return o.source === d || o.target === d ? true : false;
                        });
                        
                        d3.select(this).classed("node-active", true);
                        d3.select(this).select("circle").transition()
                                .duration(750)
                                .attr("r", (d.weight * 2+ 12)*1.5);
});
		
node.on("mouseout", function(d){
                        
                        node.classed("node-active", false);
                        link.classed("link-active", false);
                    
                        d3.select(this).select("circle").transition()
                                .duration(750)
                                .attr("r", d.weight * 2+ 12);
});


function dottype(d) {
          d.x = +d.x;
          d.y = +d.y;
          return d;
        };

function zoomed() {
          container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
};

function dragstarted(d) {
          d3.event.sourceEvent.stopPropagation();
         // force.stop();
          d3.select(this).classed("dragging", true);
            force.start();
};

function dragged(d) {
          d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
          
};

function dragended(d) {          
          d3.select(this).classed("dragging", false);
};
}
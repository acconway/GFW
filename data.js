var continentColors = {
	Africa: ["#B3542B", "#C05F2B", "#D17D2A", "#CFA421"],
	Antarctica: ["#56342A"],
	Asia: ["#4B1E3C", "#531A3F", "#692550", "#5E2550"],
	Europe: ["#B83D30", "#79292D", "#9A2B29", "#BF2B24", "#BF261B"],
	"North America": ["#46658C", "#465F80", "#4A6486", "#38557A"],
	Oceania: ["#56342A", "#3C2820"],
	"South America": ["#79802D", "#727B37", "#5B642C", "#798F2D"],
	"Seven seas (open ocean)": ["#56342A"]
};

var storyData = {
	"Sparking Change": {
		color: "#66ffff",
		displayName: "Sparking Change* in_ Sub-Saharan Africa",
		countries: ["Burkina Faso", "Kenya", "Uganda"]
	},
	"Safe World For Girls": {
		color: "#ff99ff",
		displayName: "Building* a Safe_ World for Girls",
		countries: ["Malawi", "India"],
		centerTuning: {
			"India": {
				x: -4,
				y: -8
			}
		}
	},
	"Reinventing Equality": {
		color: "#99ff33",
		displayName: "Reinventing* Equality",
		countries: ["Croatia", "Georgia"]
	},
	"Fully Charged FLOW": {
		color: "#ffff33",
		displayName: "Fully Charged*_ to Lead",
		countries: ["Bangladesh", "China", "Fiji", "Indonesia", "Kyrgyzstan", "Marshall Islands", "Philippines", "Samoa", "Sri Lanka", "Tajikistan", "Timor-Leste", "Tonga", "Vietnam", /*"Nepal",*/ "Cambodia", "India", "Pakistan"],
		centerTuning: {
			"Cambodia": {
				x: 1.2,
				y: 0
			},
			"Vietnam": {
				x: -1,
				y: 5
			},
			"India": {
				x: -3,
				y: 2
			},
			"Nepal": {
				x: -0.8,
				y: 0.5
			},
			"Philippines": {
				x: -0.5,
				y: 2
			},
			"Indonesia": {
				x: -10,
				y: 2
			}
		},
		connectors: ["Pakistan_Tajikistan", "Pakistan_India",
			"India_Sri Lanka",
			"India_Vietnam",
			"India_China",
			"India_Kyrgyzstan",
			"India_Tajikistan",
			"Tajikistan_Kyrgyzstan",
			"Kyrgyzstan_China",
			//"India_Indonesia",
			//"Kyrgyzstan_Vietnam",
			"China_Vietnam",
			"China_Philippines",
			"Vietnam_Cambodia",
			"Indonesia_Cambodia",
			"Sri Lanka_Indonesia",
			//"Sri Lanka_Bangladesh",
			"Sri Lanka_Cambodia",
			"Vietnam_Philippines",
			"Philippines_Indonesia",
			"Philippines_Timor-Leste",
			"Timor-Leste_Fiji",
			"Timor-Leste_Indonesia",
			"Fiji_China",
			"Fiji_Philippines",
		]
	},
	"Wired to Defend": {
		color: "#ffff66",
		displayName:"Wired* to Defend",
		countries: ["Guatemala", "Bolivia", "Ecuador", "Mexico", "Honduras", "El Salvador", "Nicaragua"],
		connectors: ["Mexico_Guatemala", "Mexico_Honduras", "El Salvador_Ecuador", "El Salvador_Guatemala", "El Salvador_Nicaragua", "Honduras_Guatemala", "Honduras_Nicaragua", "Nicaragua_Ecuador", "Ecuador_Bolivia"]
	},
	"Electrifying Action": {
		displayName:"Electrifying *Action",
		color: "#ffcc00",
		countries: ["Lebanon", "Jordan"]
	},
	"Shutting Down Trafficking": {
		displayName:"Shutting Down*_ Trafficking",
		color: "#33FFcc",
		countries: ["India", "Indonesia", "Nepal", "Philippines", "Thailand"],
		centerTuning: {
			"India": {
				x: 3,
				y: -3.5
			},
			"Nepal": {
				x: 0,
				y: 0
			},
			"Philippines": {
				x: 2,
				y: -3.8
			},
			"Indonesia": {
				x: 0,
				y: 0
			},
			"Thailand": {
				x: -1.6,
				y: 2
			}
		},
		connectors: ["India_Nepal", "India_Thailand", "India_Indonesia", "Nepal_Thailand", "Nepal_Philippines", "Philippines_Thailand", "Philippines_Indonesia", "Indonesia_Thailand"]
	}
};

var countryData = {}; 

var countryColoring = [2, 3, 4, 2, 2, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 1, 3, 0, 3, 3, 2, 1, 0, 1, 0, 3, 3, 1, 2, 0, 1, 0, 2, 0, 1, 1, 1, 0, 1, 0, 3, 0, 3, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2, 0, 0, 1, 0, 1, 1, 2, 1, 1, 2, 1, 1, 0, 0, 1, 1, 0, 0, 2, 1, 2, 0, 1, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 3, 0, 3, 2, 2, 2, 2, 2, 0, 0, 1, 3, 2, 2, 2, 0, 1, 0, 2, 0, 2, 2, 0, 3, 3, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 1, 3, 1, 0, 0, 0, 3, 0, 1, 0, 1, 0, 0, 0, 2, 0, 1, 1, 2, 0, 3, 0, 1, 1, 1, 0, 1, 3, 0, 0, 0, 0, 2, 0, 1, 2, 1, 1, 0, 1, 2, 0, 0, 2, 2, 2, 1];

var cleanCountryData = function(countries) {
	_.each(countries.features, function(country) {
		//Put russia in asia 
		if (country.properties['name_long'] == "Russian Federation") {
			country.properties.continent = "Asia";
		}
		//French Guiana in SA
		if (country.properties['name_long'] == "France") {
			countries.features.push({
				geometry: {
					type: "MultiPolygon",
					coordinates: country.geometry.coordinates.splice(0, 1)
				},
				id: "FRA",
				properties: {
					continent: "South America",
					name_long: "French Guiana"
				},
				type: "feature"
			});
		}
		//Trinidad and tobago in NA
		if (country.properties['name_long'] == "Trinidad and Tobago") {
			country.properties.continent = "South America";
		}
		//Icelenad in NA 
		if (country.properties['name_long'] == "Iceland") {
			country.properties.continent = "North America";
		}
	});
};

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

var hexToRGB = function(hex){
	return [hexToR(hex),hexToG(hex),hexToB(hex)];
};

_.each(storyData,function(story){
	story.color = hexToRGB(story.color);
});


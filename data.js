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
		displayPath: function(ctx) {

			ctx.beginPath();

			c.fillStyle = "#ffff00";
			c.strokeStyle = "#ffff00";

			ctx.moveTo(209.5, 305.1);
			ctx.lineTo(216.9, 305.1);
			ctx.lineTo(216.5, 306.7);
			ctx.lineTo(211, 306.7);
			ctx.lineTo(209.7, 312.6);
			ctx.lineTo(213.8, 312.6);
			ctx.lineTo(213.4, 314.2);
			ctx.lineTo(209.2, 314.2);
			ctx.lineTo(207.5, 322.5);
			ctx.lineTo(205.6, 322.5);
			ctx.lineTo(209.5, 305.1);

			ctx.moveTo(220.7, 305.1);
			ctx.lineTo(217.89999999999998, 317.8);
			ctx.bezierCurveTo(217.49999999999997, 319.6, 217.7, 321.1, 219.7, 321.1);
			ctx.bezierCurveTo(221.7, 321.1, 222.6, 319.6, 223, 317.8);
			ctx.lineTo(225.8, 305.1);
			ctx.lineTo(227.70000000000002, 305.1);
			ctx.lineTo(224.9, 317.90000000000003);
			ctx.bezierCurveTo(224.3, 320.70000000000005, 222.5, 322.70000000000005, 219.4, 322.70000000000005);
			ctx.bezierCurveTo(216.3, 322.70000000000005, 215.4, 320.70000000000005, 216, 317.90000000000003);
			ctx.lineTo(218.8, 305.1);
			ctx.lineTo(220.7, 305.1);

			ctx.moveTo(232.7, 305.1);
			ctx.lineTo(229.2, 320.8);
			ctx.lineTo(234.79999999999998, 320.8);
			ctx.lineTo(234.39999999999998, 322.40000000000003);
			ctx.lineTo(227, 322.40000000000003);
			ctx.lineTo(230.8, 305.1);
			ctx.lineTo(232.7, 305.1);

			ctx.moveTo(242, 305.1);
			ctx.lineTo(238.5, 320.8);
			ctx.lineTo(244.1, 320.8);
			ctx.lineTo(243.7, 322.40000000000003);
			ctx.lineTo(236.2, 322.40000000000003);
			ctx.lineTo(240, 305.1);
			ctx.lineTo(242, 305.1);

			ctx.moveTo(248.5, 305.1);
			ctx.lineTo(249.8, 312.70000000000005);
			ctx.lineTo(254.4, 305.1);
			ctx.lineTo(256.4, 305.1);
			ctx.lineTo(250.2, 315.1);
			ctx.lineTo(248.6, 322.40000000000003);
			ctx.lineTo(246.7, 322.40000000000003);
			ctx.lineTo(248.29999999999998, 315.1);
			ctx.lineTo(246.49999999999997, 305.1);
			ctx.lineTo(248.5, 305.1);

			ctx.moveTo(269.6, 310.3);
			ctx.bezierCurveTo(270, 307.6, 269.40000000000003, 306.40000000000003, 267.90000000000003, 306.40000000000003);
			ctx.bezierCurveTo(265.70000000000005, 306.40000000000003, 264.3, 308.3, 263.1, 313.70000000000005);
			ctx.bezierCurveTo(261.90000000000003, 319.1, 262.40000000000003, 321.00000000000006, 264.6, 321.00000000000006);
			ctx.bezierCurveTo(266.40000000000003, 321.00000000000006, 267.6, 319.80000000000007, 268.40000000000003, 316.6000000000001);
			ctx.lineTo(270.3, 316.6000000000001);
			ctx.bezierCurveTo(269.40000000000003, 320.4000000000001, 267.2, 322.6000000000001, 264.3, 322.6000000000001);
			ctx.bezierCurveTo(261.2, 322.6000000000001, 259.8, 320.2000000000001, 261.3, 313.7000000000001);
			ctx.bezierCurveTo(262.8, 307.1000000000001, 265.2, 304.8000000000001, 268.3, 304.8000000000001);
			ctx.bezierCurveTo(270.90000000000003, 304.8000000000001, 272.1, 306.60000000000014, 271.5, 310.3000000000001);
			ctx.lineTo(269.6, 310.3000000000001);

			ctx.moveTo(277.6, 305.1);
			ctx.lineTo(275.90000000000003, 312.6);
			ctx.lineTo(281.00000000000006, 312.6);
			ctx.lineTo(282.70000000000005, 305.1);
			ctx.lineTo(284.6, 305.1);
			ctx.lineTo(280.8, 322.40000000000003);
			ctx.lineTo(278.90000000000003, 322.40000000000003);
			ctx.lineTo(280.70000000000005, 314.1);
			ctx.lineTo(275.6, 314.1);
			ctx.lineTo(273.8, 322.40000000000003);
			ctx.lineTo(271.90000000000003, 322.40000000000003);
			ctx.lineTo(275.70000000000005, 305.1);
			ctx.lineTo(277.6, 305.1);

			ctx.moveTo(292.7, 305.1);
			ctx.lineTo(292.7, 322.40000000000003);
			ctx.lineTo(290.8, 322.40000000000003);
			ctx.lineTo(290.90000000000003, 317.3);
			ctx.lineTo(286.50000000000006, 317.3);
			ctx.lineTo(284.30000000000007, 322.40000000000003);
			ctx.lineTo(282.4000000000001, 322.40000000000003);
			ctx.lineTo(290.1000000000001, 305.1);
			ctx.lineTo(292.7, 305.1);

			ctx.moveTo(298.3, 305.1);
			ctx.lineTo(302.5, 305.1);
			ctx.bezierCurveTo(305.3, 305.1, 306.9, 306.70000000000005, 306.3, 309.6);
			ctx.bezierCurveTo(305.90000000000003, 311.5, 304.6, 313.20000000000005, 302.6, 313.8);
			ctx.lineTo(303.6, 322.40000000000003);
			ctx.lineTo(301.6, 322.40000000000003);
			ctx.lineTo(300.6, 314.20000000000005);
			ctx.lineTo(298.1, 314.30000000000007);
			ctx.lineTo(296.3, 322.4000000000001);
			ctx.lineTo(294.40000000000003, 322.4000000000001);
			ctx.lineTo(298.3, 305.1);
			ctx.moveTo(298.5, 312.7);
			ctx.lineTo(300.1, 312.7);
			ctx.bezierCurveTo(302.8, 312.7, 303.90000000000003, 311.59999999999997, 304.3, 309.7);
			ctx.bezierCurveTo(304.7, 307.8, 304.1, 306.7, 301.40000000000003, 306.7);
			ctx.lineTo(299.8, 306.7);
			ctx.lineTo(298.5, 312.7);

			ctx.moveTo(316.4, 310.4);
			ctx.bezierCurveTo(316.79999999999995, 308.09999999999997, 316.5, 306.4, 314.59999999999997, 306.4);
			ctx.bezierCurveTo(312.49999999999994, 306.4, 311.09999999999997, 308.29999999999995, 309.9, 313.7);
			ctx.bezierCurveTo(308.7, 319.09999999999997, 309.29999999999995, 321, 311.4, 321);
			ctx.bezierCurveTo(313.2, 321, 314.29999999999995, 320, 314.7, 318.3);
			ctx.lineTo(315.2, 315.90000000000003);
			ctx.lineTo(312.8, 315.90000000000003);
			ctx.lineTo(313.2, 314.3);
			ctx.lineTo(317.4, 314.3);
			ctx.lineTo(315.59999999999997, 322.40000000000003);
			ctx.lineTo(314.4, 322.40000000000003);
			ctx.lineTo(314.4, 321.1);
			ctx.bezierCurveTo(313.5, 322.1, 312.29999999999995, 322.6, 310.9, 322.6);
			ctx.bezierCurveTo(307.9, 322.6, 306.5, 320.20000000000005, 307.9, 313.70000000000005);
			ctx.bezierCurveTo(309.4, 307.1, 311.79999999999995, 304.80000000000007, 314.79999999999995, 304.80000000000007);
			ctx.bezierCurveTo(317.99999999999994, 304.80000000000007, 318.49999999999994, 307.6000000000001, 318.09999999999997, 310.4000000000001);
			ctx.lineTo(316.4, 310.4000000000001);

			ctx.moveTo(330.3, 305.1);
			ctx.lineTo(329.90000000000003, 306.70000000000005);
			ctx.lineTo(323.90000000000003, 306.70000000000005);
			ctx.lineTo(322.6, 312.6);
			ctx.lineTo(327.1, 312.6);
			ctx.lineTo(326.70000000000005, 314.20000000000005);
			ctx.lineTo(322.20000000000005, 314.20000000000005);
			ctx.lineTo(320.70000000000005, 320.90000000000003);
			ctx.lineTo(327.00000000000006, 320.90000000000003);
			ctx.lineTo(326.6000000000001, 322.50000000000006);
			ctx.lineTo(318.4000000000001, 322.50000000000006);
			ctx.lineTo(322.2000000000001, 305.20000000000005);
			ctx.lineTo(330.3, 305.20000000000005);

			ctx.moveTo(333, 305.1);
			ctx.lineTo(336.2, 305.1);
			ctx.bezierCurveTo(339.8, 305.1, 341.59999999999997, 307.1, 340.09999999999997, 313.8);
			ctx.bezierCurveTo(338.59999999999997, 320.40000000000003, 335.99999999999994, 322.5, 332.29999999999995, 322.5);
			ctx.lineTo(329.09999999999997, 322.5);
			ctx.lineTo(333, 305.1);
			ctx.moveTo(331.4, 320.8);
			ctx.lineTo(332.4, 320.8);
			ctx.bezierCurveTo(335.09999999999997, 320.8, 337, 319.6, 338.29999999999995, 313.7);
			ctx.bezierCurveTo(339.59999999999997, 307.8, 338.29999999999995, 306.59999999999997, 335.59999999999997, 306.59999999999997);
			ctx.lineTo(334.59999999999997, 306.59999999999997);
			ctx.lineTo(331.4, 320.8);

			ctx.closePath();
			ctx.fill();
			ctx.stroke();

			ctx.beginPath();

			c.fillStyle = "white";
			c.strokeStyle = "white";

			ctx.moveTo(207, 335.9);
			ctx.lineTo(208.7, 335.9);
			ctx.lineTo(209.6, 331.7);
			ctx.lineTo(211.29999999999998, 331.7);
			ctx.lineTo(210.39999999999998, 335.9);
			ctx.lineTo(212.7, 335.9);
			ctx.lineTo(212.39999999999998, 337.29999999999995);
			ctx.lineTo(210.09999999999997, 337.29999999999995);
			ctx.lineTo(208.19999999999996, 345.99999999999994);
			ctx.bezierCurveTo(207.99999999999997, 346.69999999999993, 208.29999999999995, 347.19999999999993, 209.19999999999996, 347.19999999999993);
			ctx.bezierCurveTo(209.49999999999997, 347.19999999999993, 209.99999999999997, 347.0999999999999, 210.29999999999995, 346.99999999999994);
			ctx.lineTo(209.99999999999994, 348.29999999999995);
			ctx.bezierCurveTo(209.49999999999994, 348.4, 208.99999999999994, 348.49999999999994, 208.29999999999995, 348.49999999999994);
			ctx.bezierCurveTo(206.69999999999996, 348.49999999999994, 206.09999999999997, 347.69999999999993, 206.49999999999994, 345.79999999999995);
			ctx.lineTo(208.39999999999995, 337.19999999999993);
			ctx.lineTo(206.69999999999996, 337.19999999999993);
			ctx.lineTo(207, 335.9);

			ctx.moveTo(218.2, 335.7);
			ctx.bezierCurveTo(220.79999999999998, 335.7, 221.6, 337.7, 220.6, 342.2);
			ctx.bezierCurveTo(219.6, 346.7, 218, 348.7, 215.29999999999998, 348.7);
			ctx.bezierCurveTo(212.59999999999997, 348.7, 211.89999999999998, 346.7, 212.89999999999998, 342.2);
			ctx.bezierCurveTo(213.9, 337.7, 215.6, 335.7, 218.2, 335.7);
			ctx.closePath();
			ctx.moveTo(215.6, 347.2);
			ctx.bezierCurveTo(217.1, 347.2, 217.9, 346.3, 218.79999999999998, 342.2);
			ctx.bezierCurveTo(219.7, 338.09999999999997, 219.29999999999998, 337.2, 217.79999999999998, 337.2);
			ctx.bezierCurveTo(216.29999999999998, 337.2, 215.49999999999997, 338.09999999999997, 214.6, 342.2);
			ctx.bezierCurveTo(213.7, 346.3, 214.2, 347.2, 215.6, 347.2);

			ctx.moveTo(232.7, 331.1);
			ctx.lineTo(229.2, 346.8);
			ctx.lineTo(234.79999999999998, 346.8);
			ctx.lineTo(234.39999999999998, 348.40000000000003);
			ctx.lineTo(227, 348.40000000000003);
			ctx.lineTo(230.8, 331.1);
			ctx.lineTo(232.7, 331.1);

			ctx.moveTo(238.6, 342.4);
			ctx.lineTo(238.4, 343.09999999999997);
			ctx.bezierCurveTo(237.70000000000002, 346.09999999999997, 238.20000000000002, 347.2, 239.8, 347.2);
			ctx.bezierCurveTo(241.10000000000002, 347.2, 241.9, 346, 242.4, 344.8);
			ctx.lineTo(244, 345);
			ctx.bezierCurveTo(243.3, 346.9, 241.5, 348.6, 239.2, 348.6);
			ctx.bezierCurveTo(236.6, 348.6, 235.79999999999998, 346.6, 236.79999999999998, 342.1);
			ctx.bezierCurveTo(237.79999999999998, 337.6, 239.39999999999998, 335.6, 242.1, 335.6);
			ctx.bezierCurveTo(244.7, 335.6, 245.4, 338, 244.6, 341.6);
			ctx.lineTo(244.4, 342.40000000000003);
			ctx.lineTo(238.6, 342.40000000000003);
			ctx.moveTo(243.1, 341);
			ctx.bezierCurveTo(243.6, 338.3, 243.4, 337.1, 241.9, 337.1);
			ctx.bezierCurveTo(240.70000000000002, 337.1, 239.6, 338, 238.9, 341);
			ctx.lineTo(243.1, 341);

			ctx.moveTo(247.5, 339.3);
			ctx.bezierCurveTo(248.3, 337.3, 249.8, 335.7, 252, 335.7);
			ctx.bezierCurveTo(254.3, 335.7, 255.3, 337, 254.8, 339.3);
			ctx.lineTo(253.3, 346.3);
			ctx.bezierCurveTo(253.10000000000002, 347.40000000000003, 253, 348.2, 253.10000000000002, 348.5);
			ctx.lineTo(251.3, 348.5);
			ctx.lineTo(251.3, 347.4);
			ctx.bezierCurveTo(250.5, 348.09999999999997, 249.10000000000002, 348.7, 248.3, 348.7);
			ctx.bezierCurveTo(246.4, 348.7, 245.3, 347.5, 245.8, 345.5);
			ctx.bezierCurveTo(246.5, 342.4, 250.20000000000002, 340.9, 252.8, 340.3);
			ctx.lineTo(253, 339.40000000000003);
			ctx.bezierCurveTo(253.3, 338.00000000000006, 252.8, 337.20000000000005, 251.7, 337.20000000000005);
			ctx.bezierCurveTo(250.39999999999998, 337.20000000000005, 249.39999999999998, 338.50000000000006, 249, 339.6);
			ctx.lineTo(247.5, 339.3);
			ctx.moveTo(252.6, 341.7);
			ctx.bezierCurveTo(250.9, 342.2, 248.1, 343.3, 247.6, 345.3);
			ctx.bezierCurveTo(247.29999999999998, 346.5, 247.7, 347.2, 249, 347.2);
			ctx.bezierCurveTo(249.9, 347.2, 250.9, 346.59999999999997, 251.7, 345.9);
			ctx.lineTo(252.6, 341.7);

			ctx.moveTo(262.3, 347.2);
			ctx.lineTo(262.3, 347.2);
			ctx.bezierCurveTo(261.5, 348.09999999999997, 260.5, 348.59999999999997, 259.40000000000003, 348.59999999999997);
			ctx.bezierCurveTo(257.40000000000003, 348.59999999999997, 256.20000000000005, 346.9, 257.20000000000005, 342.09999999999997);
			ctx.bezierCurveTo(258.20000000000005, 337.29999999999995, 260.30000000000007, 335.59999999999997, 262.20000000000005, 335.59999999999997);
			ctx.bezierCurveTo(263.1, 335.59999999999997, 263.80000000000007, 336.2, 264.20000000000005, 336.79999999999995);
			ctx.lineTo(265.50000000000006, 330.99999999999994);
			ctx.lineTo(267.20000000000005, 330.99999999999994);
			ctx.lineTo(264.1, 344.99999999999994);
			ctx.bezierCurveTo(263.70000000000005, 346.59999999999997, 263.6, 347.59999999999997, 263.6, 348.3999999999999);
			ctx.lineTo(262, 348.3999999999999);
			ctx.lineTo(262.3, 347.2);
			ctx.moveTo(264, 338.2);
			ctx.bezierCurveTo(263.6, 337.7, 263.1, 337.09999999999997, 262.4, 337.09999999999997);
			ctx.bezierCurveTo(260.9, 337.09999999999997, 259.79999999999995, 338.29999999999995, 259, 342.09999999999997);
			ctx.bezierCurveTo(258.1, 345.9, 258.8, 347.09999999999997, 260.2, 347.09999999999997);
			ctx.bezierCurveTo(260.7, 347.09999999999997, 261.59999999999997, 346.59999999999997, 262.3, 345.9);
			ctx.lineTo(264, 338.2);

			ctx.closePath();
			ctx.fill();
			ctx.stroke();

		},
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
		displayName: "Wired* to Defend",
		countries: ["Guatemala", "Bolivia", "Ecuador", "Mexico", "Honduras", "El Salvador", "Nicaragua"],
		connectors: ["Mexico_Guatemala", "Mexico_Honduras", "El Salvador_Ecuador", "El Salvador_Guatemala", "El Salvador_Nicaragua", "Honduras_Guatemala", "Honduras_Nicaragua", "Nicaragua_Ecuador", "Ecuador_Bolivia"]
	},
	"Electrifying Action": {
		displayName: "Electrifying *Action",
		color: "#ffcc00",
		countries: ["Lebanon", "Jordan"]
	},
	"Shutting Down Trafficking": {
		displayName: "Shutting Down*_ Trafficking",
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

function hexToR(h) {
	return parseInt((cutHex(h)).substring(0, 2), 16)
}

function hexToG(h) {
	return parseInt((cutHex(h)).substring(2, 4), 16)
}

function hexToB(h) {
	return parseInt((cutHex(h)).substring(4, 6), 16)
}

function cutHex(h) {
	return (h.charAt(0) == "#") ? h.substring(1, 7) : h
}

var hexToRGB = function(hex) {
	return [hexToR(hex), hexToG(hex), hexToB(hex)];
};

_.each(storyData, function(story) {
	story.color = hexToRGB(story.color);
});
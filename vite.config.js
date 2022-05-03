	// vite.config.js
	const { resolve } = require("path");

	module.exports = {
	    base: "./", //set base here or in the build command
	    build: {
	        rollupOptions: {
	            input: {
	                main: resolve(__dirname, "index.html"),
	                about: resolve(__dirname, "about.html"),
	                colors_and_animation: resolve(__dirname, "colors_and_animation.html"),
	                design_for_developers: resolve(__dirname, "design_for_developers.html"),
	                fonts_and_cards: resolve(__dirname, "fonts_and_cards.html"),
	                frameworks: resolve(__dirname, "frameworks.html"),
	                hogwarts: resolve(__dirname, "hogwarts.html"),
	                impact: resolve(__dirname, "impact.html"),
	                party_devil: resolve(__dirname, "party_devil.html"),
	                responsive: resolve(__dirname, "responsive.html"),
	            },
	        },
	    },
	};
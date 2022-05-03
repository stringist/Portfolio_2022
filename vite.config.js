	// vite.config.js
	const { resolve } = require("path");

	module.exports = {
	    base: "./", //set base here or in the build command
	    build: {
	        rollupOptions: {
	            input: {
	                main: resolve(__dirname, "index.html"),
	                sub: resolve(__dirname, "about.html"),
	                sub1: resolve(__dirname, "colors_and_animation.html"),
	                sub2: resolve(__dirname, "design_for_developers.html"),
	                sub3: resolve(__dirname, "fonts_and_cards.html"),
	                sub4: resolve(__dirname, "frameworks.html"),
	                sub5: resolve(__dirname, "hogwarts.html"),
	                sub6: resolve(__dirname, "impact.html"),
	                sub7: resolve(__dirname, "party_devil.html"),
	                sub8: resolve(__dirname, "responsive.html"),
	            },
	        },
	    },
	};
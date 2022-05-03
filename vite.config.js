	// vite.config.js
	const { resolve } = require("path");

	module.exports = {
	    base: "./", //set base here or in the build command
	    build: {
	        rollupOptions: {
	            input: {
	                main: resolve(__dirname, "index.html"),
	                sub: resolve(__dirname, "about.html"),
	                sub: resolve(__dirname, "colors_and_animation.html"),
	                sub: resolve(__dirname, "design_for_developers.html"),
	                sub: resolve(__dirname, "fonts_and_cards.html"),
	                sub: resolve(__dirname, "frameworks.html"),
	                sub: resolve(__dirname, "hogwarts.html"),
	                sub: resolve(__dirname, "impact.html"),
	                sub: resolve(__dirname, "party_devil.html"),
	                sub: resolve(__dirname, "responsive.html"),
	            },
	        },
	    },
	};
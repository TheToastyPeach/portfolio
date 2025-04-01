module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/CSS");
    eleventyConfig.addPassthroughCopy("./src/JS");
    eleventyConfig.addPassthroughCopy("./src/IMG");
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}
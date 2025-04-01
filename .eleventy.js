module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/CSS");
    eleventyConfig.addPassthroughCopy("./src/JS");
    eleventyConfig.addPassthroughCopy("./src/IMG");
    eleventyConfig.addPassthroughCopy("./src/posts");
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}
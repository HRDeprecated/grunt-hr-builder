var _ = require('lodash');
var Builder = require('hr-builder').Builder;
var defaultConfig = require('hr-builder').defaultConfig;

module.exports = function(grunt) {
    grunt.registerMultiTask('hr', 'Build an HappyRhino Application.', function() {
        var options = this.options({});
        var done = this.async();
        var config = _.defaults(this.data, defaultConfig);
        var builder = new Builder(config, grunt.log);
        builder.build().then(function() {
            done();
        }, done);
    });
};
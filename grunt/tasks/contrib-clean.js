module.exports = function(grunt) {
    'use strict';

    grunt.config('clean', {
        flatBuild: '<%= directories.flatBuild.build %>'
    });
};
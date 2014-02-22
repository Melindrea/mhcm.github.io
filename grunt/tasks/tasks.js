module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('commit', [
        'lint'
    ]);

    grunt.registerTask('lint', [
        'newer:jsvalidate',
        'newer:jshint',
        'newer:jsonlint'
    ]);

    grunt.registerTask('default', [
        'lint',
        'assemble'
    ]);

};
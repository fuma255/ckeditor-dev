/* bender-tags: clipboard,pastefromword */
/* jshint ignore:start */
/* bender-ckeditor-plugins: pastefromword,ajax, */
/* jshint ignore:end */
/* bender-include: _lib/q.js,_helpers/promisePasteEvent.js,_helpers/assertWordFilter.js,_helpers/createTestCase.js */
/* bender-include: _helpers/createTestSuite.js,_helpers/pfwTools.js */
/* global pfwTools,createTestSuite */

( function() {
	'use strict';

	var config = {
		allowedContent: true,
		language: 'en',
		removePlugins: pfwTools.defaultConfig.removePlugins,
		pasteFromWord_keepEmptyMargins: true
	};

	bender.editor = {
		config: config
	};

	bender.test( createTestSuite( {
		browsers: [
			'chrome',
			'edge',
			'firefox',
			'ie11'
		],
		wordVersions: [
			'Word2013',
			'Word2016'
		],
		tests: {
			'Vertical_margin': true
		},

		ignoreAll: CKEDITOR.env.ie
	} ) );
} )();

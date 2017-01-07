'use strict'
const { join } = require('path')

// TODO: Verify %HOMEPATH% correctly resolves on windows.
const HOME = process.env.HOME || process.env.HOMEPATH
const serverPath = join(HOME, 'selenium-server-standalone-3.0.1.jar')

module.exports = {
	'src_folders': ['tests'],
	'output_folder': 'tests/nightwatch-reports',

	'selenium': {
		'start_process': true,
		'server_path': serverPath,
	},

	'test_settings': {
		'default': {
			'launch_url': 'http://localhost',
			'selenium_host': 'localhost',
			'silent': true,
			'desiredCapabilities': {
				'browserName': 'firefox',
				'marionette': true,
			},
		},
	},
}

module.exports = {
    sets: {
        desktop: {
            browsers: ["chrome"],
            files: 'tests/desktop'
        }
    },

    browsers: {
        chrome: {
            automationProtocol: 'devtools',
            desiredCapabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    args: ['--headless']
                }
            }
        },
        safari: {
            desiredCapabilities: {
                browserName: 'safari'
            }
        },
    },



	plugins: {
		"allure-hermione": {
		}
	}
};

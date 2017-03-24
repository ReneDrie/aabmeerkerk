import { EnvironmentNames, URLNames, VariableNames } from './configNames';
/**
 * Global config file used by the ConfigManager
 *
 *    {
*		"environments": {
*			"live": {
*				"variables": {
*					"base": "{protocol}//clients.vellance.net/"
*				},
*				"urls": {
*					"api": { "url": "{base}api/flapi.php" }
*				},
*				"properties": {
*					"facebook_appid": "0123456789",
*					"linkedin_apikey": ""
*				}
*			},
*			"staging": {
*				"extends": "live",
*				"variables": {
*					"base": "{protocol}//staging.vellance.net/"
*				}
*			},
*			"development": {
*				"extends": "staging",
*				"variables": {
*					"base": "{protocol}//devmonks.vellance.net/"
*				}
*			},
*			"local": {
*				"extends": "development",
*				"variables": {
*					"base": ""
*				}
*			}
*		},
*		"variables": {
*			"protocol": document.location.protocol
*		},
*		"urls": {
*			"api": { "url": "{base}api/flapi.php" },
*			"facebook_channelurl": { "url": "{base}channel.html" }
*		},
*		"properties": {
*			"defaultLocale": "en_GB"
*		}
*	}
*
* @namespace app.config
* @class config
*/

const config = {
	environments: {
		[EnvironmentNames.PRODUCTION]: {
			variables: {},
			urls: {},
			properties: {}
		},
		[EnvironmentNames.LOCAL]: {
			extends: EnvironmentNames.PRODUCTION,
			variables: {},
			urls: {
				[URLNames.INIT]: '/static/public-root/app.json',
				[URLNames.PAGE_PREFIX]: '/static/public-root/page/',
			},
			properties: {}
		}
	},
	variables: {
		[VariableNames.PROTOCOL]: document.location.protocol,
		[VariableNames.BASE]: document.querySelector('meta[name=document-base]').getAttribute('content'),
	},
	urls: {
		[URLNames.INIT]: '/static/app.json',
		[URLNames.PAGE_PREFIX]: '/static/page/',
	},
	properties: {}
};

export default {
	config
}

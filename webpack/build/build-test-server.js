const path = require('path');
const chalk = require('chalk');
const express = require('express');
const serveStatic = require('serve-static');
const config = require('../../config');
const { paths } = config;
const app = express();

const port = 1337;
const sslPort = port + 1;
const rootPath = path.normalize(__dirname.replace(/webpack(\\|\/)build/, ''));
const distPath = '/dist/';

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve static files
const staticPath = path.normalize(rootPath + distPath + path.posix.join(paths.publicPath, paths.staticPath));
app.use(staticPath, express.static(`${staticPath}`));

const fs = require('fs');
const https = require('https');

const serve = serveStatic(rootPath + distPath, {'index': ['index.html']});

app.get('*', (req, res) => {
	serve(req, res, function() {

	});
});

https.createServer(
	{
		key: fs.readFileSync(path.resolve(__dirname, '../../config/dev/cert/key.pem')),
		cert: fs.readFileSync(path.resolve(__dirname, '../../config/dev/cert/cert.pem'))
	}, app).listen(sslPort);

app.listen(port, function (err) {
	if (err) {

		console.log(err);
		return
	}
	console.log(chalk.bold('\nListening at'));
	console.log(chalk.bold.green(`   http://localhost:${port}`));
	console.log(chalk.bold.yellow(`   https://localhost:${sslPort}`));
});

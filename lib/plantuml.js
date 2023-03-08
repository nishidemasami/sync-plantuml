const { resolve } = require('path');
const { execSync } = require('child_process');

const plantuml = (uml) => {
	const plantumlJar = resolve(__dirname, '../vendor/plantuml.jar');
	const result = execSync(
		[
			'java',
			'-jar',
			'-Djava.awt.headless=true',
			'--add-opens=java.xml/com.sun.org.apache.xalan.internal.xsltc.trax="ALL-UNNAMED"',
			plantumlJar,
			'-tsvg',
			'-pipe',
		].join(' '),
		{ input: uml }
	);

	return result.toString();
};

module.exports.plantuml = plantuml;

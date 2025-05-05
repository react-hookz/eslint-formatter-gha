import {endGroup, error, notice, startGroup, warning} from '@actions/core';
import type {ESLint} from 'eslint';

const severityActor = [notice, warning, error];

const GHAFormatter: ESLint.Formatter['format'] = (results) => {
	startGroup('Lint Annotations');

	for (const result of results) {
		for (const message of result.messages) {
			const actor = severityActor[message.severity];
			if (!actor) {
				warning(`Unknown eslint severity: ${message.severity}`);

				continue;
			}

			actor(`${message.message} (${message.ruleId})`, {
				file: result.filePath,
				startLine: message.line,
				endLine: message.endLine,
				startColumn: message.column,
				endColumn: message.endColumn,
			});
		}
	}

	endGroup();

	return '';
};

export default GHAFormatter;

import { endGroup, startGroup } from '@actions/core';
import { issueCommand } from '@actions/core/lib/command';
import type { ESLint } from 'eslint';

const severityLabel = {
  0: 'debug',
  1: 'warning',
  2: 'error',
} as const;

export = ((results): string => {
  startGroup('Lint Annotations');

  results.forEach((res) => {
    res.messages.forEach((msg) => {
      issueCommand(
        severityLabel[msg.severity],
        {
          file: res.filePath,
          line: msg.line,
          col: msg.column,
        },
        msg.message
      );
    });
  });

  endGroup();

  return '';
}) as ESLint.Formatter['format'];

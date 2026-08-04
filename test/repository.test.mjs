import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import test from 'node:test';

test('runs with the official demo script and documents the installation flow', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');

  assert.match(html, /identifier=e603b776f9ad980e95/);
  assert.match(readme, /https:\/\/knocket\.trtc\.io\//);
  assert.match(readme, /https:\/\/console\.trtc\.io\/knocket-installation/);
  assert.match(readme, /Replace the demo script/i);
});

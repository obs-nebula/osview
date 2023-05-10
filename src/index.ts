#! /usr/bin/env node

import readline from 'readline';
import { processOption } from './Os';
import { log } from 'console';

function iWantOut(key: any) {
  return (
    (key.ctrl && key.name === 'c') || key.name === 'q' || key.name === 'escape'
  );
}

const options = ['a', 'c', 'm', 't', 'u'];

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}
process.stdin.on('keypress', function (_, key) {
  if (iWantOut(key)) {
    process.stdout.write('Bye\n');
    process.exit();
  }

  if (options.find(o => key.name === o)) {
    process.stdout.write(`${processOption(key.name).toString()}\n`);
  } else {
    menu();
  }
});

function menu() {
  log(`
  ----------------------------------------
  Please type one option:
  a --> CPU Arch
  c --> CPU(s) Info
  m --> Available memory
  t --> Total memory
  u --> Uptime
  q --> Quit
  ----------------------------------------`);
}

menu();

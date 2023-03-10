#! /usr/bin/env node

import readline from 'readline';
import { processOption } from './Os';
import ManualTracer from './ManualTracer';

const manualTracer = new ManualTracer();

function iWantOut(key:any) {
  return key.ctrl && key.name === 'c' ||
      key.name === 'q' ||
      key.name === 'escape';
}

const options = ['a', 'c', 'm', 't', 'u'];

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (_, key) => {
  
  if (iWantOut(key)) {
    console.log('Bye');
    return process.exit();
  }

  if (options.find(o => key.name === o)) {
    const parent = manualTracer.startParentSpan('processOption');
    console.log(processOption(key.name, parent));
    parent.end();
  } else {
    menu();
  }
});

function menu () {
  const menu = `
  ----------------------------------------
  Please type one option:
  a --> CPU Arch
  c --> CPU(s) Info
  m --> Available memory
  t --> Total memory
  u --> Uptime
  q --> Quit
  ----------------------------------------`;
  console.log(menu);
}

menu();

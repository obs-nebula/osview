import os from 'os';

import ManualTracer from './ManualTracer';

const manualTracer = new ManualTracer();
const parent = manualTracer.startParentSpan('Function processOption');

export function processOption(option: string) {

  let result: string | string[] = '';
  switch (option) {
    case 'a':
      result = cpuArch();
      break;
    case 'c':
      result = cpuModelSpeed();
      break;
    case 'm':
      result = memAvailable();
      break;
    case 't':
      result = totalMemory();
      break;
    case 'u':
      result = uptime();
      break;
    default:
      break;
  }

  parent.end();
  return result;
}

function cpuModelSpeed(): string[] {
  console.log('CPU(s):');
  const span = manualTracer.startSpan(cpuModelSpeed.name, parent);
  const cpus = os.cpus()
    .map(c => `Model: ${c.model} current speed: ${c.speed} MHz`);
  span.end();
  return cpus;
}

function memAvailable(): string {
  const span = manualTracer.startSpan(memAvailable.name, parent);
  const memory = `Available memory: ${Math.round(os.freemem() / Math.pow(2, 20))} MB`;
  span.end();
  return memory;
}

function cpuArch(): string {
  const span = manualTracer.startSpan(cpuArch.name, parent);
  const arch = `Arch: ${os.arch()} bits`
  span.end();
  return arch;
}

function totalMemory(): string {
  const span = manualTracer.startSpan(totalMemory.name, parent);
  const totalMem = `Total memory: ${Math.round(os.totalmem() / Math.pow(2, 20))} MB`
  span.end();
  return totalMem;
}

function uptime(): string {
  const span = manualTracer.startSpan(uptime.name, parent);
  const up = `${Math.round(os.uptime() / 60)} minutes up`;
  span.end();
  return up;
}
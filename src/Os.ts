import { Span } from '@opentelemetry/api';
import os from 'os';

import ManualTracer from './ManualTracer';

const manualTracer = new ManualTracer();

export function processOption(option: string, parent: Span) {
  switch (option) {
    case 'a':
      return arch();
    case 'c':
      return cpuInfo(parent);
    case 'm':
      return memAvailable();
    case 't':
      return totalMem();
    case 'u':
      return uptime();  
  }
}

function cpuInfo(parent:Span) {
  console.log('CPU(s):');
  const span = manualTracer.startSpan(cpuInfo.name, parent);
  const cpus = os.cpus()
  .map(c => `Model: ${c.model} current speed: ${c.speed} MHz`);
  span.end();
  return cpus;
}

function memAvailable() {
  return `Available memory: ${Math.round(os.freemem() / Math.pow(2, 20))} MB`;
}

function arch() {
  return `Arch: ${os.arch()} bits`;
}

function totalMem() {
  return `Total memory: ${Math.round(os.totalmem() / Math.pow(2, 20))} MB`;
}

function uptime() {
  return `${Math.round(os.uptime() / 60)} minutes up`;
}
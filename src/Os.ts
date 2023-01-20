import os from 'os';

export function processOption(option: string) {
  switch (option) {
    case 'a':
      return arch();
    case 'c':
      return cpuInfo();
    case 'm':
      return memAvailable();
    case 't':
      return totalMem();
    case 'u':
      return uptime();  
  }
}

function cpuInfo() {
  console.log('CPU(s):');
  return os.cpus()
    .map(c => `Model: ${c.model} current speed: ${c.speed} MHz`);
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
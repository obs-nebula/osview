# osview

> OTEL-JS packages in use:

| Package | Why |
| ----------- | ----------- |
| @opentelemetry/exporter-trace-otlp-http | To export to OTEL collector via OTLP/HTTP |
| @opentelemetry/resources | To be used with `semantic-conventions` to identify the application/service's name |
| @opentelemetry/sdk-trace-base | For manual instrumentation  |
| @opentelemetry/semantic-conventions | To be used with `resources` to identify the application/service's name |
| @opentelemetry/api | To get the trace instance and control spans creation |
| @opentelemetry/sdk-metrics | For manual instrumentation |
| @opentelemetry/exporter-prometheus | To export to prometheus |

Open a terminal and
```
docker-compose up
```

Open other terminal and
```console
npm install
npm run build

npm start or npm install -g .
```

```console
➜  osview git:(main) ✗ osview

  ----------------------------------------
  Please type one option:
  a --> CPU Arch
  c --> CPU(s) Info
  m --> Available memory
  t --> Total memory
  u --> Uptime
  q --> Quit
  ----------------------------------------
Arch: x64 bits
CPU(s):
[
  'Model: 11th Gen Intel(R) Core(TM) i7-1185G7 @ 3.00GHz current speed: 1200 MHz',
  'Model: 11th Gen Intel(R) Core(TM) i7-1185G7 @ 3.00GHz current speed: 1082 MHz',
  'Model: 11th Gen Intel(R) Core(TM) i7-1185G7 @ 3.00GHz current speed: 3000 MHz',
  'Model: 11th Gen Intel(R) Core(TM) i7-1185G7 @ 3.00GHz current speed: 1127 MHz',
  'Model: 11th Gen Intel(R) Core(TM) i7-1185G7 @ 3.00GHz current speed: 1193 MHz',
  'Model: 11th Gen Intel(R) Core(TM) i7-1185G7 @ 3.00GHz current speed: 1001 MHz',
  'Model: 11th Gen Intel(R) Core(TM) i7-1185G7 @ 3.00GHz current speed: 3000 MHz',
  'Model: 11th Gen Intel(R) Core(TM) i7-1185G7 @ 3.00GHz current speed: 1182 MHz'
]
Available memory: 28881 MB
Total memory: 31804 MB
862 minutes up
Bye
```

### Traces

![01](img/1.png)

![02](img/2.png)

### Metrics



![02](img/3.png)

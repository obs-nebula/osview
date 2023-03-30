import { Counter } from '@opentelemetry/api';
import { MeterProvider, PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-proto';

export default class ManualMetrics {
  menuActionCounter: Counter;
  constructor() {
    const metricsExporter = new OTLPMetricExporter();
    const meterProvider = new MeterProvider();
    meterProvider.addMetricReader(new PeriodicExportingMetricReader({ exporter: metricsExporter }));

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const meter = meterProvider.getMeter(process.env.npm_package_name!, process.env.npm_package_version);

    this.menuActionCounter = meter.createCounter('menu-usage', {
      description: 'Menu action counter',
    });
  }

  public incrementCounter(menuEntry: string) {
    const attributes = { pid: process.pid, menuEntry: menuEntry };
    this.menuActionCounter.add(1, attributes);
  }

}

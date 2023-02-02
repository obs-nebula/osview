import opentelemetry from '@opentelemetry/api';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { BasicTracerProvider, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { Span, Tracer } from "@opentelemetry/api";

export default class ManualTracer {
  tracer:Tracer;
  constructor() {
    const resource = new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: process.env.npm_package_name
    });
    
    const provider = new BasicTracerProvider({ resource: resource });
    const exporter = new OTLPTraceExporter();
    provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
    provider.register();
    this.tracer = opentelemetry.trace.getTracer('manual-tracer');
  }

  public startParentSpan(name:string) : Span {
    return this.tracer.startSpan(name);
  }

  public startSpan(name:string, parent: Span) : Span {
    const ctx = opentelemetry.trace.setSpan(opentelemetry.context.active(), parent);
    const span = this.tracer.startSpan(name, undefined, ctx);
    return span;
  }
}

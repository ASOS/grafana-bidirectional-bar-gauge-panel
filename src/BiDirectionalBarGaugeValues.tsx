import { PanelData } from '@grafana/data';
import { BiDirectionalBarGaugeOptions } from 'types';

export class BiDirectionalBarGaugeValues {
  value: number;
  target: number;
  percentage: number;

  constructor(data: PanelData, options: BiDirectionalBarGaugeOptions) {
    this.value = valueFrom(data, options.valueDataColumnName, options.operation);
    this.target = options.target;
    if (options.targetFromData) {
      this.target = valueFrom(data, options.targetDataColumnName, options.operationTarget);
    }
    this.percentage = 100 - (this.value / this.target) * 100;
  }

  summary() {
    return `${this.value.toFixed(2)}/${this.target.toFixed(2)} (${this.percentage.toFixed(2)}%)`;
  }
}

function valueFrom(data: PanelData, columnName: string, operation: string) {
  let calcs = data.series[0].fields.find(f => f.name === columnName)?.state?.calcs;
  return calcs != null ? calcs[operation] : null;
}

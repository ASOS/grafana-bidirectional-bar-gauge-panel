import { Color } from '@grafana/data';

export interface BiDirectionalBarGaugeOptions {
  showWarning: boolean;
  warningThreshold: number;
  progressBarHeight: number;
  debug: boolean;
  showValue: boolean;
  valueColor: Color;
  valueOpacity: number;
  showUnit: boolean;
  unit: string;
  targetFromData: boolean;
  targetDataColumnName: string;
  target: number;
  valueDataColumnName: string;
  colorOver: Color;
  colorSectionOver: Color;
  colorUnder: Color;
  colorSectionUnder: Color;
  colorWarn: Color;
  operation: string;
  operationTarget: string;
}

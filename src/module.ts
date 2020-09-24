import { PanelPlugin } from '@grafana/data';
import { BiDirectionalBarGaugeOptions } from './types';
import { BiDirectionalBarGauge } from './BiDirectionalBarGauge';

export const plugin = new PanelPlugin<BiDirectionalBarGaugeOptions>(BiDirectionalBarGauge).setPanelOptions(builder => {
  return builder
    .addBooleanSwitch({
      path: 'showWarning',
      name: 'Show warning',
      defaultValue: true,
    })
    .addNumberInput({
      path: 'warningThreshold',
      name: 'Warning threshold',
      settings: {
        integer: false,
        min: -100,
        max: 0,
        step: 1,
      },
      defaultValue: -5.0,
      showIf: (config: BiDirectionalBarGaugeOptions) => config.showWarning,
    })
    .addColorPicker({
      path: 'colorOver',
      name: 'Bar color for positive percentages',
      settings: {
        enableNamedColors: true,
      },
      defaultValue: 'green',
    })
    .addColorPicker({
      path: 'colorSectionOver',
      name: 'Color for positive section background',
      settings: {
        enableNamedColors: true,
      },
      defaultValue: '#002200',
    })
    .addColorPicker({
      path: 'colorUnder',
      name: 'Bar color for negative percentages',
      settings: {
        enableNamedColors: true,
      },
      defaultValue: 'red',
    })
    .addColorPicker({
      path: 'colorSectionUnder',
      name: 'Color for negative section background',
      settings: {
        enableNamedColors: true,
      },
      defaultValue: '#220000',
    })
    .addColorPicker({
      path: 'colorWarn',
      name: 'Bar color for warning percentages',
      settings: {
        enableNamedColors: true,
      },
      defaultValue: 'orange',
      showIf: (config: BiDirectionalBarGaugeOptions) => config.showWarning,
    })
    .addNumberInput({
      path: 'progressBarHeight',
      name: 'Progress bar height (%)',
      settings: {
        integer: false,
        min: 0,
        max: 100,
        step: 10,
      },
      defaultValue: 100,
    })
    .addTextInput({
      path: 'valueDataColumnName',
      name: 'Column name for value',
      defaultValue: 'value',
    })
    .addSelect({
      path: 'operation',
      name: 'Series operation for calculating value',
      defaultValue: 'first',
      settings: {
        options: [
          {
            value: 'first',
            label: 'First',
          },
          {
            value: 'last',
            label: 'Last',
          },
          {
            value: 'mean',
            label: 'Average',
          },
          {
            value: 'max',
            label: 'Max',
          },
          {
            value: 'min',
            label: 'Min',
          },
          {
            value: 'sum',
            label: 'Total',
          },
        ],
      },
    })
    .addBooleanSwitch({
      path: 'showValue',
      name: 'Show value',
      defaultValue: true,
    })
    .addColorPicker({
      path: 'valueColor',
      name: 'Value color',
      settings: {
        enableNamedColors: true,
      },
      defaultValue: 'white',
      showIf: (config: BiDirectionalBarGaugeOptions) => config.showValue,
    })
    .addNumberInput({
      path: 'valueOpacity',
      name: 'Value opacity',
      settings: {
        integer: false,
        min: 0,
        max: 1,
        step: 0.1,
      },
      defaultValue: 0.6,
      showIf: (config: BiDirectionalBarGaugeOptions) => config.showValue,
    })
    .addBooleanSwitch({
      path: 'showUnit',
      name: 'Show unit',
      defaultValue: true,
      showIf: (config: BiDirectionalBarGaugeOptions) => config.showValue,
    })
    .addUnitPicker({
      path: 'unit',
      name: 'Unit',
      defaultValue: 'ms',
      showIf: (config: BiDirectionalBarGaugeOptions) => config.showValue && config.showUnit,
    })
    .addBooleanSwitch({
      path: 'targetFromData',
      name: 'Read target from data',
      defaultValue: false,
    })
    .addNumberInput({
      path: 'target',
      name: 'Target',
      defaultValue: 100,
      showIf: (config: BiDirectionalBarGaugeOptions) => !config.targetFromData,
    })
    .addTextInput({
      path: 'targetDataColumnName',
      name: 'Column name for target',
      defaultValue: 'target',
      showIf: (config: BiDirectionalBarGaugeOptions) => config.targetFromData,
    })
    .addSelect({
      path: 'operationTarget',
      name: 'Series operation for calculating target',
      defaultValue: 'first',
      settings: {
        options: [
          {
            value: 'first',
            label: 'First',
          },
          {
            value: 'last',
            label: 'Last',
          },
          {
            value: 'mean',
            label: 'Average',
          },
          {
            value: 'max',
            label: 'Max',
          },
          {
            value: 'min',
            label: 'Min',
          },
          {
            value: 'sum',
            label: 'Total',
          },
        ],
      },
      showIf: (config: BiDirectionalBarGaugeOptions) => config.targetFromData,
    })
    .addBooleanSwitch({
      path: 'debug',
      name: 'Debug',
      defaultValue: false,
    });
});

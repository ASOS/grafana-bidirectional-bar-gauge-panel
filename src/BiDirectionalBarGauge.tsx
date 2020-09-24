import React from 'react';
import { PanelProps } from '@grafana/data';
import { BiDirectionalBarGaugeOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import { BarSection, Bar, Debug, getColorHex } from 'BiDirectionalBarGaugeComponents';
import { BiDirectionalBarGaugeValues } from 'BiDirectionalBarGaugeValues';

export const BiDirectionalBarGauge: React.FC<PanelProps<BiDirectionalBarGaugeOptions>> = ({
  options,
  data,
  width,
  height,
}) => {
  const styles = getStyles();
  let values = new BiDirectionalBarGaugeValues(data, options);

  return values.value === null ? (
    <div>
      <p>Received no data.</p>
      {options.debug && <Debug data={data} />}
    </div>
  ) : (
    <div
      title={values.summary()}
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      {options.debug && <Debug data={data} />}
      <BarSection color={options.colorSectionUnder} />
      <BarSection color={options.colorSectionOver} />
      <Bar percentage={values.percentage} options={options} />
      {options.showValue && (
        <p
          className={cx(
            styles.value,
            css`
              color: ${getColorHex(options.valueColor)};
              opacity: ${options.valueOpacity};
            `
          )}
        >
          {values.value.toFixed(2)}
          {options.showUnit && options.unit}
        </p>
      )}
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
      margin: 0px;
      padding: 0px;
    `,
    value: css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-size: large;
    `,
  };
});

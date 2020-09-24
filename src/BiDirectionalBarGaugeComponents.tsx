import React from 'react';
import { getColorDefinitionByName, Color } from '@grafana/data';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';

const map = (value: number, x1: number, y1: number, x2: number, y2: number) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

export function getColorHex(color: Color) {
  return getColorDefinitionByName(color)?.variants.dark || color;
}

export function Bar(props: any) {
  const styles = getStyles();
  let percentage = Math.max(-100, Math.min(props.percentage, 100));
  let color = props.options.colorOver;
  if (percentage < 0) {
    color = props.options.colorUnder;
    if (percentage > props.options.warningThreshold && props.options.showWarning) {
      color = props.options.colorWarn;
    }
  }
  return (
    <div
      className={cx(
        styles.bar,
        css`
          background-color: ${getColorHex(color)};
          width: ${Math.abs(percentage / 2)}%;
          height: ${props.options.progressBarHeight}%;
          margin-left: ${Math.min(map(percentage, -100, 0, 0, 50), 50)}%;
        `
      )}
    />
  );
}

export function BarSection(props: any) {
  const styles = getStyles();
  return (
    <div
      className={cx(
        styles.section,
        css`
          background-color: ${getColorHex(props.color)};
        `
      )}
    />
  );
}

export function Debug(props: any) {
  const styles = getStyles();
  return <div className={styles.debug}>{JSON.stringify(props.data)}</div>;
}

const getStyles = stylesFactory(() => {
  return {
    section: css`
      height: 100%;
      width: 50%;
      float: left;
      margin: 0px;
    `,
    bar: css`
      margin: 0px;
      position: relative;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    `,
    debug: css`
      font-size: xx-small;
    `,
  };
});

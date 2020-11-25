# ![Plugin logo](https://raw.githubusercontent.com/asos/grafana-bidirectional-bar-gauge-panel/main/src/img/logo.svg) Bidirectional Bar Gauge Grafana Panel Plugin

[![Build](https://github.com/asos/grafana-bidirectional-bar-gauge-panel/workflows/Test%20&%20Build/badge.svg)](https://github.com/asos/grafana-bidirectional-bar-gauge-panel/actions?query=workflow%3A%22Build+%26+Publish%22)
[![Release](https://github.com/asos/grafana-bidirectional-bar-gauge-panel/workflows/Release/badge.svg)](https://github.com/asos/grafana-bidirectional-bar-gauge-panel/actions?query=workflow%3ARelease)


## Panel

This grafana plugin displays a horizonal bar gauge showing how close to a target a value is. It covers a range of -100% to 100% (values outside the range are clipped visually)

It is meant for displaying metrics such as SLA target compliance.

For example, for a service with a response time SLA of 100 milliseconds, a value of 104 milliseconds falls 4% under the SLA and is displayed as a warning like so:

![preview](https://raw.githubusercontent.com/asos/grafana-bidirectional-bar-gauge-panel/main/assets/preview.png)

The panel also displays a tooltip on mouse hover with details:

![preview tooltip](https://raw.githubusercontent.com/asos/grafana-bidirectional-bar-gauge-panel/main/assets/preview_tooltip.png)

## Installation

The plugin is waiting to be added to the central [Grafana Plugin Hub](https://grafana.com/grafana/plugins) 

In the meantime, you can install it locally using the `dist` folder in the latest [release](https://github.com/ASOS/grafana-bidirectional-bar-gauge-panel/releases)

## Panel Display Options

### Warning

You can enable a threshold to show as a warning instead of an error using a different color:

![warning](https://raw.githubusercontent.com/asos/grafana-bidirectional-bar-gauge-panel/main/assets/option_warning.png)

If the value displayed is above the specified threshold (but below 0 obviously), then the gauge will be coloured as a warning

### Colours

You can control the different colours of the gauge:

![colours](https://raw.githubusercontent.com/asos/grafana-bidirectional-bar-gauge-panel/main/assets/option_colours.png)

The colours, in order, correspond to the gague colour for positive values, the background colour of the positive section, the negative values, the negative background section and, finally, the warning section, if enabled.

### Bar height

You can control the height of the gauge bar:

![bar height](https://raw.githubusercontent.com/asos/grafana-bidirectional-bar-gauge-panel/main/assets/option_height.png)

This field accepts values in the range 0-100 and it controls the height of the bar. For example, for a value of 60, it will produce this:

![bar height preview](https://raw.githubusercontent.com/asos/grafana-bidirectional-bar-gauge-panel/main/assets/option_height_preview.png)

### Value

The value to be displayed can be calculated from a column in the supplied table:

![value calculation](https://raw.githubusercontent.com/asos/grafana-bidirectional-bar-gauge-panel/main/assets/option_value.png)

The first field is the name of column to pull the value from and the second field is the calculation to use to produce the final value from all the table rows supplied (defaults to using the first row)

#### Value overlay

You can control the value overlay:

![value overlay](https://raw.githubusercontent.com/asos/grafana-bidirectional-bar-gauge-panel/main/assets/option_value_show.png)

If the slider is selected, the gauge will show an overlay with the final value, using the specified colour and opacity.

You can also decide to show a unit in the overlay:

![value overlay unit](https://raw.githubusercontent.com/asos/grafana-bidirectional-bar-gauge-panel/main/assets/option_value_unit.png)

### Target

The gauge compares the final value to a target value in order to produce the percentage difference. The target can be specified manually:

![target manual](https://raw.githubusercontent.com/asos/grafana-bidirectional-bar-gauge-panel/main/assets/option_target.png)

or calculated dynamically from the supplied data table:

![target from data](https://raw.githubusercontent.com/asos/grafana-bidirectional-bar-gauge-panel/main/assets/option_target_from_data.png)

The first field is the name of the column in the supplied table containing the target values and the second field determines how the target value is calculated using the rows (defaults to using the first row value)

### Debug

You can temporarily enable a debug option:

![debug](https://raw.githubusercontent.com/asos/grafana-bidirectional-bar-gauge-panel/main/assets/option_debug.png)

This will show the data supplied to the gauge for troubleshooting purposes:

![debug preview](https://raw.githubusercontent.com/asos/grafana-bidirectional-bar-gauge-panel/main/assets/option_debug_preview.png)


Test

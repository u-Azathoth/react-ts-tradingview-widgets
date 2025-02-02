import React from "react";
import { ColorTheme, DateRange, CopyrightStyles, Locales } from "../index";
export declare type MiniChartProps = {
    symbol?: string;
    width?: number | string;
    height?: number | string;
    locale?: Locales;
    dateRange?: DateRange;
    colorTheme?: ColorTheme;
    trendLineColor?: string;
    underLineColor?: string;
    underLineBottomColor?: string;
    isTransparent?: boolean;
    autosize?: boolean;
    largeChartUrl?: string;
    children?: never;
    copyrightStyles?: CopyrightStyles;
};
declare const MiniChart: React.FC<MiniChartProps>;
export default MiniChart;

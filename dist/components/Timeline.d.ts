import React from "react";
import { ColorTheme, CopyrightStyles, DisplayMode, Locales, Market } from "../index";
declare type ConditionalTimelineProps = {
    feedMode?: "market";
    market?: Market;
    symbol?: never;
} | {
    feedMode?: "symbol";
    symbol?: string;
    market?: never;
} | {
    feedMode?: "all_symbols";
    market?: never;
    symbol?: never;
};
export declare type TimelineProps = {
    colorTheme?: ColorTheme;
    isTransparent?: boolean;
    displayMode?: DisplayMode;
    width?: number | number;
    height?: number | number;
    autosize?: boolean;
    locale?: Locales;
    largeChartUrl?: string;
    children?: never;
    copyrightStyles?: CopyrightStyles;
} & ConditionalTimelineProps;
declare const Timeline: React.FC<TimelineProps>;
export default Timeline;

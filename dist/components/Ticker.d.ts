import React from "react";
import { ColorTheme, CopyrightStyles, Locales } from "../index";
export declare type TickerProps = {
    colorTheme?: ColorTheme;
    isTransparent?: boolean;
    showSymbolLogo?: boolean;
    locale?: Locales;
    symbols?: TickerSymbols;
    children?: never;
    copyrightStyles?: CopyrightStyles;
};
export declare type TickerSymbols = TickerSymbol[];
export declare type TickerSymbol = {
    proName: string;
    title: string;
};
declare const Ticker: React.FC<TickerProps>;
export default Ticker;

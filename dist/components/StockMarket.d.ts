import React from "react";
import { ColorTheme, DateRange, CopyrightStyles, Locales } from "../index";
export declare type StockMarketProps = {
    colorTheme?: ColorTheme;
    dateRange?: DateRange;
    exchange?: "US" | "NASDAQ" | "NYSE" | "AMEX" | "OTC" | "ASX" | "CSE" | "NEO" | "TSX" | "TSXV" | "EGX" | "BER" | "DUS" | "FWB" | "HAM" | "HAN" | "MUN" | "SWB" | "XETR" | "BSE" | "NSE" | "TASE" | "MIL" | "LUXSE" | "PSE" | "NEWCONNECT" | "KRX" | "NGM" | "TPEX" | "BIST" | "LSE" | "LSIN" | "HNX";
    showChart?: boolean;
    locale?: Locales;
    largeChartUrl?: string;
    isTransparent?: boolean;
    showSymbolLogo?: boolean;
    showFloatingTooltip?: boolean;
    width?: string | number;
    height?: string | number;
    autosize?: boolean;
    plotLineColorGrowing?: string;
    plotLineColorFalling?: string;
    gridLineColor?: string;
    scaleFontColor?: string;
    belowLineFillColorGrowing?: string;
    belowLineFillColorFalling?: string;
    belowLineFillColorGrowingBottom?: string;
    belowLineFillColorFallingBottom?: string;
    symbolActiveColor?: string;
    children?: never;
    copyrightStyles?: CopyrightStyles;
};
declare const StockMarket: React.FC<StockMarketProps>;
export default StockMarket;

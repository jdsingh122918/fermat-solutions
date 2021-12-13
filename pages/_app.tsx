import '../styles/globals.css'
import type {AppProps} from 'next/app'
import createEmotionCache from "../src/createEmotionCache";
import {EmotionCache} from "@emotion/utils";
import {CacheProvider} from "@emotion/react";
import Head from "next/head";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../src/theme";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>FERMAT SOLUTIONS</title>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <Component {...pageProps}/>
            </ThemeProvider>
        </CacheProvider>
    )
}

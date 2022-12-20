import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="theme-color" media="(prefers-color-scheme: light)" content="#f5f5f5" />
				<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#22222" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

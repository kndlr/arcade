import Head from "next/head";
import { PageTransition } from "next-page-transitions";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="description" content="KNDLR Arcade" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageTransition timeout={250} classNames="page-transition">
                <Component {...pageProps} />
            </PageTransition>
            <style jsx global>{`
                .page-transition-enter {
                    opacity: 0;
                }
                .page-transition-enter-active {
                    opacity: 1;
                    transition: opacity 0.25s;
                }
                .page-transition-exit {
                    opacity: 1;
                }
                .page-transition-exit-active {
                    opacity: 0;
                    transition: opacity 0.25s;
                }
            `}</style>
        </>
    );
}

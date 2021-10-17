import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { DotsHorizontalIcon } from "@heroicons/react/outline";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>KNDLR Arcade</title>
            </Head>

            <main className={styles.main}>
                <div className={styles.game}>
                    <img className={styles.icon} src="/icon/baseball.png"></img>
                    <span className={styles.title}>야구게임</span>
                    <p className={styles.description}>으갸갹</p>
                    <Link href="/baseball">
                        <a>
                            <button className={styles.link}>
                                지금 시작하기
                            </button>
                        </a>
                    </Link>
                </div>
                <div className={styles.game}>
                    <DotsHorizontalIcon className={styles.icon} />
                    <span className={styles.title}>기다려</span>
                    <p className={styles.description}>아직 생각중</p>
                </div>
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}

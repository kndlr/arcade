import Link from "next/link";
import styles from "../styles/End.module.css";
import { AcademicCapIcon } from "@heroicons/react/outline";

export default function End({ show, attempt, answer, timer }) {
    var minutes = Math.floor(timer / 60000);
    var seconds = ((timer % 60000) / 1000).toFixed(0);

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <span className={styles.title}>
                    <AcademicCapIcon />
                    이겼습니다!
                </span>
                <div className={styles.result}>
                    <b>시도</b> {attempt}회<br />
                    <b>정답</b> {answer}
                    <br />
                    <b>시간</b>{" "}
                    {minutes + ":" + (seconds < 10 ? "0" : "") + seconds}
                </div>
                <Link href="/baseball">
                    <a>
                        <button className={styles.link}>다시 시작하기</button>
                    </a>
                </Link>
            </div>
        </div>
    );
}

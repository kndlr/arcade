import Head from "next/head";
import styles from "../styles/Baseball.module.css";
import { ChatAltIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import Mark from "../components/Mark";
import End from "../components/End";

export default function Baseball() {
    const [question, setQuestion] = useState([]);
    const [questionAnswer, setQuestionAnswer] = useState([]);
    const [answer, setAnswer] = useState("");
    const [timer, setTimer] = useState();
    const [end, setEnd] = useState(false);

    const displayBox = React.createRef();
    const questionBox = React.createRef();

    useEffect(() => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        var value = "";

        for (var i = 0; i < 4; i++) {
            const index =
                i == 0
                    ? Math.floor(Math.random() * (numbers.length - 1))
                    : Math.floor(Math.random() * numbers.length);
            value += numbers[index].toString();
            numbers.splice(index, 1);
        }

        setAnswer(value);
        setTimer(new Date());
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Baseball - KNDLR Arcade</title>
            </Head>

            <main className={styles.main}>
                <div className={styles.content}>
                    <span className={styles.placeholder}>
                        내가 생각하는 답은?
                    </span>
                    <div ref={displayBox} className={styles.display}>
                        <Input key="display1" />
                        <Input key="display2" />
                        <Input key="display3" />
                        <Input key="display4" />
                    </div>
                </div>
                <div className={styles.content}>
                    <span className={styles.placeholder}>
                        마킹하기! (정답에 있을 것 같은 수)
                    </span>
                    <div className={styles.mark}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((value) => (
                            <Mark key={value} value={value} />
                        ))}
                    </div>
                </div>
                <div className={styles.content}>
                    <span className={styles.placeholder}>
                        질문하기! (지금까지 {question.length}번 질문)
                    </span>
                    <div ref={questionBox} className={styles.question}>
                        <Input key="question1" />
                        <Input key="question2" />
                        <Input key="question3" />
                        <Input key="question4" />
                        <button
                            className={styles.ask}
                            onClick={() => {
                                var userInput = Array.from(
                                    questionBox.current.childNodes
                                ).map((el) => el.value);
                                var strike = 0;
                                var ball = 0;

                                for (var i = 0; i < 4; i++) {
                                    for (var j = 0; j < 4; j++) {
                                        if (userInput[i] == answer[j]) {
                                            i == j ? strike++ : ball++;
                                        }
                                    }
                                }

                                setQuestion((value) => [
                                    userInput.join(" "),
                                    ...value,
                                ]);
                                setQuestionAnswer((value) => [
                                    [strike, ball],
                                    ...value,
                                ]);

                                if (strike == 4) {
                                    setEnd(true);
                                }
                            }}
                        >
                            <ChatAltIcon />
                        </button>
                    </div>
                    <div className={styles.asked}>
                        {question.length > 0 ? (
                            question.map((value, index) => (
                                <>
                                    <div className={styles.answer}>
                                        <div className={styles.number}>
                                            {value.split("").join(" ")}
                                        </div>
                                        <p>-</p>
                                        <div className={styles.result}>
                                            {questionAnswer[index][0]}S{" "}
                                            {questionAnswer[index][1]}B
                                        </div>
                                    </div>
                                </>
                            ))
                        ) : (
                            <div className={styles.info}>
                                아직 질문이 없습니다 :(
                            </div>
                        )}
                    </div>
                </div>
                {end ? (
                    <End
                        show={end}
                        attempt={question.length}
                        answer={answer}
                        timer={new Date() - timer}
                    ></End>
                ) : null}
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}

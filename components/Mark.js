import styles from "../styles/Mark.module.css";

export default function Mark({ value }) {
    return (
        <label className={styles.label}>
            <input className={styles.input} type="checkbox"></input>
            <div className={styles.mark}>{value}</div>
        </label>
    );
}

import styles from "../styles/Input.module.css";

export default function Input() {
    return (
        <input
            className={styles.input}
            type="number"
            onInput={(el) => {
                el.target.value.length > 1
                    ? (el.target.value = el.target.value
                          .replace(/[^0-9]/g, "")
                          .slice(1))
                    : (el.target.value = el.target.value.replace(
                          /[^0-9]/g,
                          ""
                      ));
            }}
        ></input>
    );
}

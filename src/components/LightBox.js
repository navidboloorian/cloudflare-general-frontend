import styles from "../css/LightBox.module.css";

export const LightBox = ({component, hideLightBox}) => {
    return (
        <>
            <div id={styles.background}></div>
            <div id={styles.close} onClick={() => hideLightBox()}><h2>+</h2></div>
            <div id={styles.box}><div id={styles.content}>{component}</div></div>
        </>
    )
}
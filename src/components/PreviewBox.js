import { useEffect } from "react";
import styles from "../css/PreviewBox.module.css";

export function PreviewBox({component, showLightBox}) {

    return <div onClick={() => showLightBox(component)} className={styles.box}>{component}</div>;
}
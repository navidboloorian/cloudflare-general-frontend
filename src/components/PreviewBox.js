/**
 * Stores PreviewBox which shows a mini version of the information passed in.
 */

import styles from "../css/PreviewBox.module.css";

/**
 * Component that is shown on the main page. Clicking it will open up an expanded view in the form of a LightBox.
 * 
 * @param component is the component to be displayed in the box
 * @param hideLightBox is the function that alters the state of the LightBox's visibility
 * @returns div representing the preview box
 */
export function PreviewBox({component, showLightBox}) {

    return <div onClick={() => showLightBox(component)} className={styles.box}>{component}</div>;
}
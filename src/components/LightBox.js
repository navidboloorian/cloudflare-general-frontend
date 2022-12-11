/**
 * Stores LightBox component that displays information on frontend in boxes.
 */

import styles from "../css/LightBox.module.css";

/**
 * Component that displays information in an expanded view. Can be hidden by clicking the close button.
 * 
 * @param component is the component to be displayed in the box
 * @param hideLightBox is the function that alters the state of the LightBox's visibility
 * @returns a lightbox storing the passed-in component
 */
export const LightBox = ({component, hideLightBox}) => {
    return (
        <>
            <div id={styles.background}></div>
            <div id={styles.close} onClick={() => hideLightBox()}><h2>+</h2></div>
            <div id={styles.box}><div id={styles.content}>{component}</div></div>
        </>
    )
}
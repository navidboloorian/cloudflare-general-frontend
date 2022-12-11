/**
 * Stores DomainListItem component which renders a single row for the table.
 */

import styles from "../css/DomainListItem.module.css";

/**
 * Component that displays an individual row of the DomainList table.
 * 
 * @param site is a JSON object representing the site information
 * @returns div that stores all of the row info
 */
export const DomainListItem = ({site}) => {
    const {rank, rankChange, domain, category} = site;

    // default color of rank change is white
    let rankChangeStyle = styles.noChange;

    // set rank change to green if positive, red if negative
    if(parseInt(rankChange) > 0) {
        rankChangeStyle = styles.positiveChange;
    }
    else if(parseInt(rankChange) < 0) {
        rankChangeStyle = styles.negativeChange;
    }

    return(
        <div className={styles.row}>
            {/** increment rank by one to account for starting value of 0 */}
            <div className={styles.column}>{parseInt(rank) || parseInt(rank) === 0 ? (parseInt(rank) + 1) : rank}</div>
            <div className={`${styles.column} ${rankChangeStyle}`}>{rankChange}</div>
            <div className={styles.column}>{domain}</div>
            <div className={styles.column}>{category}</div>
        </div>
    );
}
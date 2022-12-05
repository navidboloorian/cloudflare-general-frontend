import styles from "../css/DomainListItem.module.css";

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
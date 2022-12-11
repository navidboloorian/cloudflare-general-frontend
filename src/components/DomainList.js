/**
 * Stores DomainList component which renders table based on info.
 */

import styles from "../css/DomainList.module.css";
import { DomainListItem } from "./DomainListItem";

/**
 * Component that displays table of domains.
 * 
 * @param popularDomains is the list of domains to be displayed
 * @returns div storing multiple rows that comprise the table
 */
export const DomainList = ({popularDomains}) => {
    // row at the top of the table
    const titleRow = {rank: "Rank", rankChange: "Rank Change", domain: "Domain", category: "Category"};

    return(
        <div id={styles.list}>
            <h2>Popular Domains</h2>
            {/** adds to the title row as the first item in the table */}
            <DomainListItem site={titleRow} />
            {
                // ensures that entries are not undefined
                popularDomains.rankingEntries ?
                    popularDomains.rankingEntries.map((site, index) => <DomainListItem site={site} key={index} />)
                :
                    null
            }
        </div>
    );
}
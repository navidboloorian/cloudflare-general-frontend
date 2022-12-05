import styles from "../css/DomainList.module.css";
import { DomainListItem } from "./DomainListItem";

export const DomainList = ({popularDomains}) => {
    const titleRow = {rank: "Rank", rankChange: "Rank Change", domain: "Domain", category: "Category"};

    return(
        <div id={styles.list}>
            <h2>Popular Domains</h2>
            <DomainListItem site={titleRow} />
            {
                popularDomains.rankingEntries ?
                    popularDomains.rankingEntries.map((site, index) => <DomainListItem site={site} key={index} />)
                :
                    null
            }
        </div>
    );
}
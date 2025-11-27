import { SearchIcon } from "@assets/icons";

import * as styles from "./search.css";

const Search = () => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="공연명, 가수명 등 검색"
        className={styles.input}
      />
      <button type="button" className={styles.searchButton}>
        <SearchIcon width={24} height={24} />
      </button>
    </div>
  );
};

export default Search;


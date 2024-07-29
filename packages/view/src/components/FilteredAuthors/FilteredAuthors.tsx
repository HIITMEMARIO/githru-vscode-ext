import { Author } from "components/@common/Author";
import { usePreLoadAuthorImg } from "components/VerticalClusterList/Summary/Summary.hook";
import { getInitData } from "components/VerticalClusterList/Summary/Summary.util";
import { useGlobalData } from "hooks";

import "./FilteredAuthors.scss";

const FilteredAuthors = () => {
  const { selectedData } = useGlobalData();
  const authSrcMap = usePreLoadAuthorImg();
  const selectedClusters = getInitData(selectedData);
  const filteredSelectedData = selectedClusters.reverse().slice(0, 9);
  const selectedClustersLength = selectedClusters.slice(9);

  return (
    <div className="selected-container">
      {authSrcMap &&
        filteredSelectedData.reverse().map((selectedCluster) => {
          return selectedCluster.summary.authorNames.map((authorArray: string[]) => {
            return authorArray.map((authorName: string) => (
              <Author
                key={authorName}
                name={authorName}
                src={authSrcMap[authorName]}
              />
            ));
          });
        })}
      <div className="selected-length">
        {selectedClusters.length > 9 ? `+ ${selectedClustersLength.length} more` : null}
      </div>
    </div>
  );
};

export default FilteredAuthors;

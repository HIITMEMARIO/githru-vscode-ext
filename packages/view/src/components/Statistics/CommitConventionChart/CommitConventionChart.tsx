import { useGetSelectedData } from "../Statistics.hook";

import { filterCommitsByConvention } from "./CommitConventionChart.util";

const CommitConventionChart = () => {
  const rawData = useGetSelectedData();
  const useData = filterCommitsByConvention(rawData);
  console.log(useData);
  return (
    <div>
      <p>Commit Convention Chart</p>
      {/* <svg ref={svgRef} /> */}
    </div>
  );
};

export default CommitConventionChart;

// import { useRef } from "react";
import { useGetSelectedData } from "../Statistics.hook";
// import * as d3 from "d3";

import { convertToHierarchy, filterCommitsByConvention } from "./CommitConventionChart.util";

const CommitConventionChart = () => {
  const rawData = useGetSelectedData();
  const useData = filterCommitsByConvention(rawData);

  const convertedData = convertToHierarchy(useData);
  console.log("convertedData", convertedData);

  return (
    <div>
      <p>Commit Convention Chart</p>
      {/* <svg ref={svgRef} /> */}
    </div>
  );
};

export default CommitConventionChart;

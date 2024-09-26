import type { ClusterNode } from "types";

import { conventions, regex } from "./CommitConventionChart.const";

export const filterCommitsByConvention = (rawData: ClusterNode[]) => {
  const categorizedFiles: Record<string, string[]> = {
    fix: [],
    feat: [],
    style: [],
    test: [],
    docs: [],
    chore: [],
    setup: [],
    others: [],
  };

  rawData?.forEach((i) => {
    i.commitNodeList.forEach((item) => {
      const commitMessage = item.commit.message;
      const match = commitMessage.match(regex);
      const matchedConvention = conventions.find((convention) => match?.[1].includes(convention));

      if (match) {
        // diffStatistics의 파일들을 돌면서 Object.keys로 키값(파일명)만 저장
        Object.keys(item.commit.diffStatistics.files).forEach((fileName) => {
          if (matchedConvention) {
            // 해당 컨벤션에 맞는 파일 이름을 Push 해서 저장
            categorizedFiles[matchedConvention].push(fileName);
          } else {
            // 컨벤션이 없으면 others에 Push 해서 저장
            categorizedFiles.others.push(fileName);
          }
        });
      }
    });
  });

  // 최종적으로 분류된 파일 이름들을 출력
  return categorizedFiles;
};

// export const filteredConventions = (useData) =>{

// }

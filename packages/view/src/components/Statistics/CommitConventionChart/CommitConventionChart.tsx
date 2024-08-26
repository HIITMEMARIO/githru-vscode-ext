// import * as d3 from "d3";

// import { useGlobalData } from "hooks";

const ComitConventionChart = () => {
  // 'selectedData'는 이미 채워진 상태라고 가정하고 'conventions'는 필터링된 데이터
  // const { selectedData } = useGlobalData();
  // // Step 1: 커밋 메시지에서 컨벤션 추출
  // selectedData.forEach((item) => {
  //   const conventions = ["fix", "feat", "style"];
  //   const regex = /^(.*?):/; // ":" 앞의 내용을 추출하는 정규표현식

  //   if (item.commitNodeList && item.commitNodeList.length > 0) {
  //     const [
  //       {
  //         commit: { message },
  //       },
  //     ] = item.commitNodeList;
  //     const match = message.match(regex);

  //     if (match && conventions.some((convention) => match[1].includes(convention))) {
  //       // 이 item을 해당 컨벤션 카테고리에 추가
  //       const convention = conventions.find((conventionItem) => match[1].includes(conventionItem));
  //       // 여기에 해당 item을 상태 또는 데이터 구조에 추가
  //     } else {
  //       // 이 item이 어떤 컨벤션에도 맞지 않는 경우, 'othersData'로 분류
  //       // 'othersData' 상태 또는 구조에 추가
  //     }
  //   }
  // });

  // // Step 2: D3.js 차트 설정

  // // 계층적 데이터 구조 정의
  // const data = {
  //   name: "commits",
  //   children: [
  //     // 필터링된 데이터에 따라 채우기
  //     { name: "fix", children: [] },
  //     { name: "feat", children: [] },
  //     { name: "style", children: [] },
  //     { name: "othersData", children: [] },
  //   ],
  // };

  // // Step 3: 초기 바 차트 렌더링
  // const svg = d3.select("svg");
  // const margin = { top: 20, right: 30, bottom: 40, left: 90 };
  // const width = +svg.attr("width") - margin.left - margin.right;
  // const height = +svg.attr("height") - margin.top - margin.bottom;

  // const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

  // // 데이터에 따라 x 및 y 스케일 정의
  // const x = d3.scaleLinear().range([0, width]);
  // const y = d3.scaleBand().range([height, 0]).padding(0.1);

  // // Step 4: 바 추가
  // g.selectAll(".bar")
  //   .data(data.children)
  //   .enter()
  //   .append("rect")
  //   .attr("class", "bar")
  //   .attr("x", 0)
  //   .attr("y", (d) => y(d.name))
  //   .attr("width", (d) => x(d.value))
  //   .attr("height", y.bandwidth())
  //   .on("click", function (d) {
  //     // Step 5: 클릭 시 데이터 필터링 및 차트 업데이트
  //     // 첫 번째 클릭은 파일별 필터링, 두 번째 클릭은 파일 내에서 저자별로 필터링
  //     updateChart(d); // updateChart를 구현하여 필터링 및 재렌더링 처리
  //   });

  // // 클릭과 데이터 업데이트를 처리하는 updateChart 함수 정의
  // function updateChart(d) {
  //   // 'd'에 따라 데이터를 필터링하고 차트를 업데이트
  //   // 예: 'fix'이면, 'fix' 하위의 파일을 보여줌
  //   // 추가 클릭 시, 그 파일에 커밋한 저자별로 보여줌
  //   // 필터링된 새 데이터를 사용해 차트를 다시 그림
  // }

  return <div>ComitConventionChart</div>;
};

export default ComitConventionChart;

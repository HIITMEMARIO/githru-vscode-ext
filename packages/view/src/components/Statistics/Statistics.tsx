import { AuthorBarChart } from "./AuthorBarChart";
import { CommitConventionChart } from "./CommitConventionChart";
import { FileIcicleSummary } from "./FileIcicleSummary";
import "./Statistics.scss";

const Statistics = () => {
  return (
    <div className="statistics">
      <AuthorBarChart />
      <FileIcicleSummary />
      <CommitConventionChart />
    </div>
  );
};

export default Statistics;

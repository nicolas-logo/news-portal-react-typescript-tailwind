import { MostReadsData } from "../data/data";
import MostRead from "./mostRead";

const mostReadContainer = () => {
  return (
    <div className="sm:flex content-center justify-center items-center">
      {MostReadsData.sort((a, b) => b.totalVisits - a.totalVisits).map(
        (art, index) => (
          <MostRead index={index} art={art} />
        )
      )}
    </div>
  );
};

export default mostReadContainer;

import Matches from "./Matches";

export interface MatchesResult {
  matchesOfTwo: number;
  matchesOfThree: number;
  matchesOfFour: number;
  matchesOfFive: number;
}

interface ResultDetailsProps {
  matches: MatchesResult;
}

const ResultDetails: React.FC<ResultDetailsProps> = (props) => {
  const { matches } = props;

  return (
    <div className=" bg-white w-fit h-fit   text-black">
      <div className="flex flex-wrap border-2 border-secondary border-solid rounded-md justify-between text-center">
        <Matches title={"2 mathes"} matches={matches.matchesOfTwo} />
        <Matches title={"3 mathes"} matches={matches.matchesOfThree} />
        <Matches title={"4 mathes"} matches={matches.matchesOfFour} />
        <Matches title={"5 mathes"} matches={matches.matchesOfFive} />
      </div>
    </div>
  );
};
export default ResultDetails;

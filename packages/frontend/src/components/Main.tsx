import NumbersBar from "./NumbersBar";
import ResultDetails, { MatchesResult } from "./ResultDetails";
import Summary from "./Summary";

const MainContent = () => {
  const matches: MatchesResult = {
    matchesOfTwo: 12345,
    matchesOfThree: 1234,
    matchesOfFour: 123,
    matchesOfFive: 0,
  };

  return (
    <div className="flex justify-center h-fit my-10  ">
      <div className="g-white mx-2  px-12 py-8 rounded-md shadow-lg flex flex-col gap-8">
        <h1 className="text-3xl font-bold mb-4">Result</h1>
        <Summary numberOfTickets={1234567} years={158} cost={370370100} />
        <ResultDetails matches={matches} />
        <NumbersBar title={"Winning numbers"} numbers={[1, 9, 34, 68, 90]} />
        <NumbersBar title={"Your numbers"} numbers={[2, 7, 32, 44, 87]} />
      </div>
    </div>
  );
};
export default MainContent;

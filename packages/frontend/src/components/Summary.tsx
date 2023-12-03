interface SummaryProps {
  numberOfTickets: number;
  years: number;
  cost: number;
}

const Summary: React.FC<SummaryProps> = (props) => {
  const { numberOfTickets, years, cost } = props;

  return (
    <div className=" bg-primary w-fit  rounded-md text-white">
      <div className="flex flex-col gap-2  py-4 px-8">
        <div className="grid  grid-cols-3  ">
          <span className="font-semibold col-span-2">Number of tickets:</span>
          <span className="font-semibold col-span-1">{numberOfTickets}</span>
        </div>
        <div className="grid  grid-cols-3  ">
          <span className="col-span-2">Years spent:</span>
          <span className="col-span-1">{years}</span>
        </div>
        <div className="grid  grid-cols-3  ">
          <span className="col-span-2">Cost of tickets:</span>
          <span className="col-span-1">{cost} Ft</span>
        </div>
      </div>
    </div>
  );
};
export default Summary;

interface Matches {
  title: string;
  matches: number;
}

const Matches: React.FC<Matches> = (props) => {
  const { title, matches } = props;

  return (
    <div className="grid p-4  grid-row-3 gap-2 border-secondary  border-r-2 pr-2 last:border-0 w-[130px] max-w-[130px]">
      <span className="row-span-2">{title}</span>
      <span className="font-bold row-span-1">{matches}</span>
    </div>
  );
};
export default Matches;

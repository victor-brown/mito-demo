interface NumbersBarProps {
  title: string;
  numbers: number[];
}

const NumbersBar: React.FC<NumbersBarProps> = (props) => {
  const { title, numbers } = props;

  return (
    <div className="grid grid-cols-2 grid-rows-1 w-[400px]  gap-2 ">
      <p className="my-auto">{title}</p>
      <div className="flex gap-5 text-center ">
        {numbers.map((number) => (
          <p className="rounded-md bg-white text-black p-2 border-2 border-solid border-primary min-w-[40px] w-fit">
            {number}
          </p>
        ))}
      </div>
    </div>
  );
};
export default NumbersBar;

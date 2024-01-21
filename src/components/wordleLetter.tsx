type LetterProps = {
  letter: string;
  color: "green" | "yellow" | "darkGray";
};

export const Letter = ({ letter, color }: LetterProps) => {
  const getColor = () => {
    if (color === "green")
      return " bg-green-500 text-white border-black-500 border-2 animation-flip";
    if (color === "yellow")
      return "animation-flip bg-yellow-500 text-white border-black-500 border-2";
    if (color === "darkGray")
      return "animation-flip bg-gray-400 text-white border-black-500 border-2";
    return " text-black border-black-500  border-2 bg-gray-50";
  };
  return (
    <div
      className={
        "flex items-center justify-center h-10 w-10 rounded uppercase font-bold border-black-500 " +
        getColor()
      }
    >
      {letter}
    </div>
  );
};

type LetterProps = {
  letter: string;
  color: "green" | "yellow" | "darkGray";
};

export const Letter = ({ letter, color }: LetterProps) => {
  const getColor = () => {
    if (color === "green") return "bg-green-500 text-white";
    if (color === "yellow") return "bg-yellow-500 text-white";
    if (color === "darkGray") return "bg-gray-400 text-white";
    return "bg-gray-50 text-black";
  };
  return (
    <div
      className={
        "flex items-center justify-center h-10 w-10 rounded uppercase font-bold  " +
        getColor()
      }
    >
      {letter}
    </div>
  );
};

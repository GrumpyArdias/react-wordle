import { useState, useEffect } from "react";
import { letterLength, letters } from "./wordleBoard";
import { Letter } from "./wordleLetter";
type RowProps = {
  active: boolean;
  goNext: () => void;
  wordToGuess: string;
  actualRow: number;
  word: string[];
  setWord: (word: string[]) => void;
  setHandleInputWord: (word: string) => void;
};

export function Row({
  active,
  goNext,
  wordToGuess,
  actualRow,
  word,
  setWord,
  setHandleInputWord,
}: RowProps) {
  const [colors, setColors] = useState<("green" | "yellow" | "darkGray")[]>([]);

  useEffect(() => {
    if (!active) return;
    const keyUpListener = async (event: KeyboardEvent) => {
      const { key } = event;

      setHandleInputWord(word.join(""));

      if (key === "Enter" && word.length === letterLength) {
        const checkWord = () => {
          const wordToGuessToArr = wordToGuess.split("");
          setColors(
            word.map((letter, i) => {
              if (letter === wordToGuessToArr[i]) return "green";
              if (wordToGuessToArr.includes(letter)) return "yellow";
              return "darkGray";
            })
          );

          const letterMatches = word.filter((letter) =>
            wordToGuessToArr.includes(letter)
          );
          return letterMatches;
        };

        checkWord();

        if (word.join("") === wordToGuess) {
          console.log("correct word");
          return;
        }

        goNext();
      }

      if (key === "Backspace") {
        word.pop();
        setWord([...word]);
      }
      if (word.length >= letterLength) return;

      if (letters.includes(key)) {
        setWord([...word, key]);
      }
    };

    document.addEventListener("keyup", keyUpListener);
    return () => {
      document.removeEventListener("keyup", keyUpListener);
    };
  }, [
    word,
    active,
    goNext,
    actualRow,
    wordToGuess,
    setWord,
    setColors,
    setHandleInputWord,
  ]);

  return (
    <div className="flex gap-2 mb-2" tabIndex={0}>
      {new Array(letterLength).fill(0).map((_, i) => (
        <Letter letter={word[i]} color={colors[i]} key={i} />
      ))}
    </div>
  );
}

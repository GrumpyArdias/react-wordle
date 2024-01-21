import { useEffect, useState } from "react";
import { Row } from "./wordleRow";
import { getWord } from "../../api/wordService";

export const letterLength = 5;
export const rowLength = 6;
export const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export function Board() {
  const [activeRow, setActiveRow] = useState(0);
  const [wordToGuess, setWordToGuess] = useState<string>("");
  const [userInputs, setUserInputs] = useState<Record<number, string[]>>({});

  useEffect(() => {
    const handleNewWord = async () => {
      const word = await getWord();
      console.log(word);
      if (!word) return;
      setWordToGuess(word);
    };
    handleNewWord();
  }, []);

  if (!wordToGuess) return null;
  console.log(userInputs);
  return (
    <div>
      {new Array(rowLength).fill(0).map((_, i) => (
        <Row
          key={i}
          active={i === activeRow}
          goNext={() => setActiveRow((prevActiveRow) => prevActiveRow + 1)}
          wordToGuess={wordToGuess}
          actualRow={i}
          word={userInputs[i] || []}
          setWord={(word: string[]) =>
            setUserInputs((prevUserInputs) => ({
              ...prevUserInputs,
              [i]: word,
            }))
          }
        />
      ))}
    </div>
  );
}

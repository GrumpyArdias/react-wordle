import { useEffect, useState } from "react";
import { Row } from "./wordleRow";
import { getWord } from "../api/wordService";
import { Keyboard } from "./wordleKeyboard";

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
  const [inputWord, setInputWord] = useState("");

  useEffect(() => {
    const handleNewWord = async () => {
      const word = await getWord();
      console.log(word);
      if (!word) return;
      setWordToGuess(word);
    };
    handleNewWord();
  }, []);

  const handleInputWord = (word: string) => {
    setInputWord(word);
  };

  if (!wordToGuess) return null;
  return (
    <div>
      <div className="flex justify-center font-sans text-5xl mt-10 uppercase font-bold">
        <h1>Wordle</h1>
      </div>
      <div className="flex flex-col items-center my-10">
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
            setHandleInputWord={handleInputWord}
          />
        ))}
      </div>
      <Keyboard word={inputWord} wordToGuess={wordToGuess} />
    </div>
  );
}

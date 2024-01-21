import { useState, useEffect } from "react";
import { Letter } from "./wordleLetter";

type KeyboardProps = {
  word: string;
  wordToGuess: string;
};

const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

export function Keyboard({ word, wordToGuess }: KeyboardProps) {
  const [colors, setColors] = useState<{
    [key: string]: "green" | "yellow" | "darkGray";
  }>({});

  useEffect(() => {
    if (word.length === 5) {
      const wordToGuessToArr = wordToGuess.split("");
      const newColors = word.split("").reduce((acc, letter, i) => {
        if (letter === wordToGuessToArr[i]) {
          acc[letter] = "green";
        } else if (wordToGuessToArr.includes(letter)) {
          acc[letter] = "yellow";
        } else {
          acc[letter] = "darkGray";
        }
        return acc;
      }, {} as { [key: string]: "green" | "yellow" | "darkGray" });

      setColors(newColors);
    }
  }, [word, wordToGuess]);

  return (
    <div>
      {qwerty.map((row, index) => (
        <div className="flex justify-center gap-2 mt-2" key={index}>
          {row.split("").map((key) => (
            <div
              className="flex h-10 w-10 items-center rounded bg-gray-50 font-bold uppercase"
              key={key}
            >
              <Letter letter={key} color={colors[key]} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

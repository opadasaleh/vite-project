import { useState } from "react"
import words from "./wordList.json" 
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random()*words.length)]
  })
  const [guessedLetter,setGuessedLetters ] = useState<string[]>([])
  console.log(wordToGuess)
  return (
    <div className="max-w-800 flex flex-col gap-10 mt-0 mb-0 ml-auto mr-auto items-center">
      <div className="text-4xl text-center ">
        Lose 
        Win
      </div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard /> 
    </div>
  )
}

export default App

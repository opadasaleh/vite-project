export function HangmanWord() {
    const word = "hello"
    const guessedLetters = ["h","o" ]
    return <div className="flex gap-1 text-8xl font-bold uppercase font-mono">{word.split("").map((letter, index) => (
        <span className="border-b-10" key={index}>
            <span className={guessedLetters.includes(letter) ? "visible" : "invisible"}>{letter}</span>
        </span>
   ))}
    </div>
}
const HEAD = (
    <div className="w-15 h-15 rounded-full border-amber-500 border-7 absolute top-14 -right-6" ></div>
) 
const BODY = (
    <div className="w-2 h-25 absolute bg-black top-28 left-68 "> </div>
)

const L_ARM = (
    <div className="w-2 h-25 absolute bg-black top-27 left-56 rotate-120 origin-right "> </div>
)
const R_ARM = (
    <div className="w-2 h-25 absolute bg-black top-27 left-80 -rotate-120 origin-left "> </div>
)
const L_LEGS = (
    <div className="w-2 h-25 absolute bg-black top-50 left-64 rotate-20 origin-left"> </div>
)
const R_LEGS = (
    <div className="w-2 h-25 absolute bg-black top-50 left-72 -rotate-20 origin-right "> </div>
)
export function HangmanDrawing() {
    return <div className="relative">

        
        <div className="bg-black w-2.5 h-15 ml-60 top-0 right-0 absolute"> </div>
        {BODY}
        {HEAD}
        {R_ARM}
        {L_ARM}
        {L_LEGS}
        {R_LEGS}
        <div className="bg-black w-40 h-2.5 ml-30"> </div>
        <div className=" bg-black h-100 w-2.5 ml-30 "></div>
        <div className="h-2.5 w-64 bg-black"></div>
    </div>
}

import line from "../assets/horizontalLine.png"
function Box() {
  return (
    <div className="flex items-center justify-around w-full my-20">
        <div className="w-60"> 
            <h1 className="text-4xl">Let’s Introduce Ourself</h1>
        </div>

        <div className="flex items-center justify-center text-left w-1/2">
          <img className=" h-40 mx-2" src={line} alt="Part Break Ractangle Image"/>
          
          <div className="flex flex-col items-start w-96 ml-4">
            <h3 className="text-4xl">Criminal Lawyer</h3>
            <p className="text-white text-wrap text-opacity-50 ">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequatduis enim velit
              mollit Exercitation.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Box;
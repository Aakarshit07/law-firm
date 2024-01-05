import Logo from "../../utils/Logo/Logo";
import NavigationButton from "../../utils/NavigationItems/NavigationItems";
import Button from "../../utils/Button/Button";
import Input from "../../utils/Input/Input";
import emailicon from "../../assets/emailicon.png"
import heroimage from "../../assets/heroimage.png"
function Navbar() {
  return (
    <nav className="bg-black h-[100vh]">
        <div className="flex items-center justify-between p-2">
            <Logo />
            <NavigationButton />
            <Button className="bg-transparent hover:bg-white text-white-700 font-300 hover:text-black py-2 px-4 border-2 border-white hover:border-transparent">
                Contact Now
            </Button>
        </div>
        <div className="flex items-center justify-between p-2 m-2">
            {/* left hero  */}
            <div className="p-2">
                <div className="my-2 w-3/6">
                    <h1 className="text-6xl text-wrap">You don’t have to 
                        {" "}
                        <span className="font-bold text-wrap">
                            Fight them Alone.
                        </span>
                    </h1>
                </div>

                <div className="text-white text-opacity-50 text-wrap my-10 w-96">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.
                    </p>
                </div>

                <div className="flex justify-center items-center w-96 bg-white bg-opacity-50 rounded-full">
                    <img className="p-4" src={emailicon} alt="Email" />
                    <Input classname=" bg-transparent outline-none placeholder:text-white placeholder:text-opacity-75" placeholder="Enter your eamil address" type="text" />
                    <Button className="bg-yellow-500 text-black rounded-full w-28 h-10 text-sm">
                        Let's Talk
                    </Button>
                </div>

            </div>

            {/* right hero */}
            <div className="p-2">
                <img className="w-96 px-2" src={heroimage} alt="" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
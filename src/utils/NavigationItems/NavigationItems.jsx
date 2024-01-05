import Button from "../Button/Button";

function NavigationButton() {
    return(
        <div className="flex items-center justify-around py-1 px-2">
            <Button className="hover:bg-gray-900 text-white-700 font-300 hover:text-white px-3  rounded-md mx-1"
            >Home</Button>
            
            <Button className="hover:bg-gray-900 text-white-700 font-300 hover:text-white px-3 rounded-md mx-1"
            >Attorneys</Button>
            
            <Button className="hover:bg-gray-900 text-white-700 font-300 hover:text-white px-3 rounded-md mx-1"
            >Practice Areas</Button>
            
            <Button className="hover:bg-gray-900 text-white-700 font-300 hover:text-white px-3 rounded-md mx-1"
            >About Us</Button>
        </div>
    ) 
}

export default NavigationButton;
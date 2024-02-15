import Image from "next/image"
import { logo } from "../public/assists/images/index"
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import NavBarBottom from "./NavBarBottom";


const NavBar = () => {
  return (
    <div className='w-full bg-blue text-white'>
      <div className="w-full h-full border-b-[1px]">
        <div className="max-w-container w-full flex flex-col md:flex-row h-35 md:h-20 px-4 items-center justify-between ">
          {/* Logo */}
          {/* <div className="flex flex-row"> */}
          <div className="h-[50px] w-[180px] md:h-[70px] md:w-[250px] px-5 shrink-0 rounded-full bg-transparent flex items-center gap-2
             hover:bg-hoverBg duration-300 curser-pointer">
            <Image src={logo} alt="logo" className="w-full h-full" />
          </div>

          {/* search */}
          <div className="w-full h-10 relative ">
            <input
              className="h-full w-full rounded-full px-4 text-black text-base 
             outline-none border-[1px] border-transparent focus-visible:border-black"
              type="text" placeholder="Search everything at online-shope" />
            <span className="absolute w-8 h-8 rounded-full flex items-center justify-center
            top-1 right-1 bg-yellow text-black text-xl">
              <IoSearchOutline />
            </span>
          </div>

          {/* sign-in */}
          <div className="h-12 mx-3 px-5 shrink-0 rounded-full bg-transparent flex items-center gap-2
             hover:bg-hoverBg duration-300 curser-pointer">
            <AiOutlineUser />
            <div>
              <p className="rext-xs">Sign In</p>
              <h2 className="text-base font-semibold -mt-1">Account</h2>
            </div>
          </div>

          {/* Shopping Cart  */}
          <div className="flex flex-col px-5  shrink-0 justify-center items-center gap-2 h-12
         rounded-full bg-transparent hover:bg-hoverBg duration-300 relative">
            <BsCart2 className="text-2xl" />
            <p className="text-[11px] -mt-2">$0.00</p>
            <span className="absolute w-4 h-4 bg-yellow text-black top-0 right-4
        rounded-full flex items-center justify-center font-bodyFont text-xs">
              0
            </span>
          </div>

        </div></div>
      <NavBarBottom />
    </div>
  )
}


export default NavBar
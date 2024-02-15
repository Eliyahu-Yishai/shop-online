import { phoneImg } from "@/public/assists/images"

const NavBarButtons = () => {
  return (
    <div className='max-w-container mx-auto py-2 px-6 flex items-center justify-between'>
        <ul className="flex gap-6 text-sm font-semibold">
          <li className="navBarBottomLi">Mobile computers</li>
          <li className="navBarBottomLi">Mobile Phones</li>
          <li className="navBarBottomLi">Gaming</li>
          <li className="navBarBottomLi">Computer screens</li>
          <li className="navBarBottomLi">Office equipment</li>
        </ul>
    </div>
  )
}

export default NavBarButtons
import { useState } from 'react'
import mockup from '../assets/mockup-ui.png'
import {BsEyeglasses} from 'react-icons/bs'
import Chat from './Chat'
import ChatTest from './ChatTest'

const Mockup = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    console.log(open)
    setOpen(true)
  }

  return (
    <>
      <div className="relative w-[100vw] h-[100vh]">
        <div
          onClick={handleClick}
          className="flex flex-col justify-center absolute top-[22.25em] left-[17em]"
        >
          <div className="flex justify-center items-center w-[75px] h-[75px] bg-white p-4 rounded-full">
            <BsEyeglasses />
          </div>
          <span className="text-sm text-center text-[#777676] mt-1">Alvan AI</span>
        </div>

        <img src={mockup} alt="mockup" className="w-full h-full" />
      </div>
      {open && <Chat />}
      {/* <Chat /> */}
    </>
  );
}

export default Mockup

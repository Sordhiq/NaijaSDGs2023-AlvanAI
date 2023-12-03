import { MdClose } from 'react-icons/md'

const ChatTest = () => {
  return (
      <div className="bg-white w-full h-[70vh] rounded-s-lg">

        {/* Chat Header  */}
      <div className="relative h-[100px] p-4 border-b">
        <div className="absolute top-[50%] left-[50%] adjust">
          <div className="flex justify-center items-center w-[60px] h-[60px] bg-[#f7f7f7] p-4 rounded-full">
            A
          </div>
          <span>Alvan AI</span>
        </div>
        <div className="absolute top-5 right-4 p-4 border">
          <MdClose />
        </div>
          </div>

          {/* Chat Input */}
          <div className='flex'>
              <input placeholder='Enter a prompt here' />
              <button>
                  <span></span>
              </button>
          </div>
    </div>
  );
}

export default ChatTest

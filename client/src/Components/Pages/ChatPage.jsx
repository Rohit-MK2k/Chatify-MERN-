import React from 'react'
import { IoSend} from "react-icons/io5";

function ChatPage() {
  const messageForm = 'flex flex-row border-2 rounded-3xl w-full p-3'
  const messageBox = 'pr-3 bg-transparent w-fit grow focus:outline-none'
  return (
      <>
        <div className="flex flex-row m-auto mr-1 px-3 py-4 justify-center items-cente w-screen h-screen ">
          <div className="flex flex-col w-3/12 border-2 rounded-2xl p-2">
              <div>Chatify </div>
          </div>
          <div className="flex flex-col ml-1 justify-end w-9/12 p-2 relative border-2 rounded-2xl">
            <form action="" className={messageForm}>
              <input type="text" id="chat" className={messageBox} placeholder='Message' />
              <button type="submit" className='p-2 '><IoSend /></button>
            </form>
          </div>
        </div>
      </>
  )
}

export default ChatPage
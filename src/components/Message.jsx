import React from 'react'
import { auth } from '../firebase'


const style = {
    message: ` flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name: ` absolute mt-[-4rem] text-orange-300 text-xs `,
    sent: ` bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received: ` bg-[#e5e5ea] text-black float-left rounded-br-full`
}

const Message = ({message}) => {
  const messageClass = 
  message.uid === auth.currentUser.uid 
  ? `${style.sent}`
  : `${style.received}`
  return (
    <div>
        <section className={`${style.message} ${messageClass} `}>
            <p className={style.name}>{message.name}</p>
            <p>{message.text}</p>
        </section> 
    </div>
  )
}

export default Message
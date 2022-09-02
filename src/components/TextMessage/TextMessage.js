import * as React from "react"

import * as style from './textMessage.module.scss'

const TextMessage = ({ isUserMessage, text }) => {
  return (
    <section className={`${style.message} ${isUserMessage ? style.messageUser : style.messageContact}`}>
      <div className={`${style.messageInner} ${isUserMessage ? style.messageUserText : style.messageContactText}`}>
        <p>{text}</p>
      </div>
    </section>
  )
}

export default TextMessage
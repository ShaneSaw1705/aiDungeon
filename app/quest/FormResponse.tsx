import React from 'react'
import FormInput from './Form'

interface Props {
  response: string[]
}

const FormResponse = (props: Props) => {
  if (!props.response) {
    return
  }
  return (
    <div className="relative bottom-0 right-0 left-0 w-[795px] h-[775px] m-auto mt-[70px] align-bottom rounded-md bg-opacity-50">
      <div className="absolute bottom-0 left-0 w-full">
        {props.response.map((chat, index) => (
          <div
            key={index}
            className="bg-[#6d6d6d] p-[10px] mt-[10px] mb-[10px] bg-opacity-75 shadow-sm rounded-md"
            style={{ width: 'fit-content' }}
          >
            <p className="chat-text">{chat}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FormResponse

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
    <div className="relative bottom-0 right-0 left-0 w-[795px] h-[800px] m-auto mt-[20px] align-bottom rounded-md bg-[#292929] ">
      <span className="absolute bottom-0 left-0 p-[10px]">
        {props.response.map((chat, index) => (
          <>
            <p key={index} className="">
              {chat}
            </p>
          </>
        ))}
      </span>
    </div>
  )
}

export default FormResponse

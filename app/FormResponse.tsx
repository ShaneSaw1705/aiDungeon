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
    <div className="absolute bottom-[100px]  w-screen text-center ">
      {props.response.map((chat) => (
        <p key={chat}>{chat}</p>
      ))}
    </div>
  )
}

export default FormResponse

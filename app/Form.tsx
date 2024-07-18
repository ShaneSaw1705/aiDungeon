'use client'

import { sendRequest } from '@/actions/formAction'
import FormResponse from './FormResponse'
import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react'

const Form = () => {
  const [formState, setFormState] = useState('')

  const [response, setResponse] = useState<string[]>([])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newResponse = [...response, formState]
    setResponse(newResponse)
    setFormState('')
    console.log(response)
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormState(e.target.value)
  }



  return (
    <>
      <div>
        <FormResponse response={response} />
      </div>
      <div className="absolute bottom-0 right-0 left-0 w-[795px] m-auto text-center mb-[70px] bg-[#6d6d6d] p-[10px] rounded-md shadow-2xl bg-opacity-75">
        {/* <form action={async formData => {
          await sendRequest(formData)
        }}> */}
        <form onSubmit={handleSubmit}>
          <input
            name="userinput"
            type="text"
            className="rounded-md p-2 pr-[500px] text-black .placeholder-black::placeholder bg-slate-200"
            placeholder="input text"
            value={formState}
            onChange={handleChange}
          ></input>
          <button className="ml-[10px] bg-slate-200 p-2 rounded-md text-black">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Form

'use server'

import axios from "axios"
import { revalidatePath } from "next/cache"

export const sendRequest = async (FormData:FormData) => {
  const formContent = String(FormData.get('userinput'))

  // await axios.get('RequestFromAI')

  revalidatePath('/')
}
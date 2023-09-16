import { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { api } from '@/lib/axios'

interface Prompt {
  id: string
  title: string
  template: string
}

interface IPromptSelect {
  onPromptSelected: (template: string) => void
}
export function PromptSelect({ onPromptSelected }: IPromptSelect) {
  const [prompts, setPrompts] = useState<Prompt[] | null>(null)

  function handlePromptSeleted(promptId: string) {
    const selectedPrompt = prompts?.find((prompt) => prompt.id === promptId)

    if (!selectedPrompt) {
      return
    }

    onPromptSelected(selectedPrompt.template)
  }

  useEffect(() => {
    api.get('/prompts').then((res) => setPrompts(res.data))
  }, [])
  return (
    <Select onValueChange={handlePromptSeleted}>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um prompt..." />
      </SelectTrigger>
      <SelectContent>
        {prompts?.map((prompt, index) => {
          return (
            <SelectItem value={prompt.id} key={index}>
              {prompt.title}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}

import { ChatInput } from '@/components/Inputs/ChatInput'
import { DefaultInput } from '@/components/Inputs/DefaultInput'
import { ModalInput } from '@/components/Inputs/ModalInput'

export default function Home() {
  return (
    <div>
      <h1>Next.js</h1>
      <button>Click me</button>
      <DefaultInput placeholder="Placeholder" />
      <ModalInput placeholder="Placeholder" />
      <ChatInput placeholder="Placeholder" />
    </div>
  )
}

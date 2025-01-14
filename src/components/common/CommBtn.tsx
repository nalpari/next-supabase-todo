import { Button } from '../ui/button'

export default function CommBtn({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <div className="py-2">
      <Button onClick={onClick}>{text}</Button>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export interface HintProps {
  hint: {
    type: string
    content: string
  } 
  toggleHint: () => void;
  showHint: boolean;
}

export default function Hint({ hint, toggleHint, showHint }: Readonly<HintProps>) {
  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <Button
        onClick={toggleHint}
        variant='secondary'
        aria-expanded={showHint}
        aria-controls="hint-content"
      >
        {showHint ? "Ascunde indiciu" : "Indiciu"}
      </Button>
      {showHint && (
        <Card className="mt-2">
          <CardContent className="p-4">
            {hint.type === "IMAGE" ? (
              <img
                src={hint.content}
                alt="Hint"
                width={300}
                height={200}
                className="rounded-md"
              />
            ) : (
              <p>{hint.content}</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
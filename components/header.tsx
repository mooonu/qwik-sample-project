import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg" />
          <span className="font-semibold text-xl text-foreground">MyApp</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            홈
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            기능
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            가격
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            문의
          </a>
        </nav>
        <Button>시작하기</Button>
      </div>
    </header>
  )
}

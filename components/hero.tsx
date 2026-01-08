import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          더 나은 경험을 위한
          <br />
          <span className="text-primary">최고의 솔루션</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          간단하고 빠르게 시작하세요. 우리의 플랫폼은 당신의 아이디어를 현실로 만들어 드립니다.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">무료로 시작하기</Button>
          <Button size="lg" variant="outline">
            더 알아보기
          </Button>
        </div>
      </div>
    </section>
  )
}

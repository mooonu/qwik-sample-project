import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Smartphone } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "빠른 속도",
    description: "최적화된 성능으로 빠르고 부드러운 사용자 경험을 제공합니다.",
  },
  {
    icon: Shield,
    title: "안전한 보안",
    description: "최신 보안 기술로 당신의 데이터를 안전하게 보호합니다.",
  },
  {
    icon: Smartphone,
    title: "반응형 디자인",
    description: "모든 기기에서 완벽하게 작동하는 반응형 인터페이스를 제공합니다.",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">주요 기능</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <feature.icon className="w-10 h-10 text-primary mb-2" />
                <CardTitle className="text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

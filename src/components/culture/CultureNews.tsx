import { Calendar, ChevronRight, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const news = [
  {
    category: '공지사항',
    title: '2025년 문화도시 영월 시민공모사업 안내',
    date: '2025.01.10',
    description: '영월시민 여러분의 창의적인 문화 프로젝트를 기다립니다.',
    tags: ['공모', '시민참여'],
  },
  {
    category: '행사안내',
    title: '모아달(月) 문화축제 개최',
    date: '2025.01.08',
    description: '영월의 달빛 아래서 펼쳐지는 특별한 문화축제',
    tags: ['축제', '문화행사'],
  },
  {
    category: '모집',
    title: '문화도시 서포터즈 3기 모집',
    date: '2025.01.05',
    description: '영월 문화도시를 함께 만들어갈 서포터즈를 모집합니다.',
    tags: ['모집', '서포터즈'],
  },
  {
    category: '결과발표',
    title: '2024 문화도시 성과 공유회',
    date: '2024.12.28',
    description: '한 해 동안의 문화도시 영월의 성과를 공유합니다.',
    tags: ['성과', '공유회'],
  },
];

const yearlyArchives = [
  { year: '2025', title: '문화도시 3년차', count: 12 },
  { year: '2024', title: '문화도시 2년차', count: 48 },
  { year: '2023', title: '문화도시 원년', count: 36 },
];

export default function CultureNews() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-culture-primary to-culture-accent bg-clip-text text-transparent">
              소식 & 아카이브
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            문화도시 영월의 최신 소식과 지난 활동들을 확인하세요
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Section */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold mb-6 text-culture-primary">최신 소식</h3>
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-culture-primary/10">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-culture-primary border-culture-primary">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg hover:text-culture-primary transition-colors cursor-pointer">
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs text-muted-foreground flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="text-culture-primary hover:text-culture-primary/80">
                      자세히 <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="text-center pt-4">
              <Button variant="outline" className="border-culture-primary text-culture-primary hover:bg-culture-primary hover:text-white">
                모든 소식 보기
              </Button>
            </div>
          </div>

          {/* Archive Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-culture-primary">모아달(月) 아카이브</h3>
            
            {yearlyArchives.map((archive, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-culture-primary/10 hover:border-culture-primary/30"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-3xl font-bold text-culture-primary">
                        {archive.year}
                      </CardTitle>
                      <CardDescription className="mt-1">{archive.title}</CardDescription>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-culture-accent">{archive.count}</span>
                      <p className="text-xs text-muted-foreground">프로젝트</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-culture-primary hover:text-culture-primary/80 hover:bg-culture-light"
                  >
                    아카이브 보기
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-to-br from-culture-primary/10 to-culture-accent/10 border-culture-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">문화도시 자료실</CardTitle>
                <CardDescription>
                  영월 문화도시의 모든 자료를 한 곳에서 확인하세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-culture-primary to-culture-accent hover:opacity-90 text-white">
                  자료실 바로가기
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
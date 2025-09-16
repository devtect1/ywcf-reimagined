import { Calendar, ArrowUpRight, FileText, Briefcase, Volume2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const newsItems = [
  {
    id: 1,
    category: '공지사항',
    title: '2025년 상반기 기획공연 일정 안내',
    date: '2025.01.15',
    isNew: true,
  },
  {
    id: 2,
    category: '공지사항',
    title: '영월문화예술회관 대관 신청 안내',
    date: '2025.01.12',
    isNew: true,
  },
  {
    id: 3,
    category: '공지사항',
    title: '문화가 있는 날 행사 참여 안내',
    date: '2025.01.10',
    isNew: false,
  },
];

const recruitItems = [
  {
    id: 1,
    title: '2025년 상반기 문화예술 강사 모집',
    department: '교육팀',
    deadline: '2025.01.31',
    status: '모집중',
  },
  {
    id: 2,
    title: '영월아트센터 전시 도슨트 모집',
    department: '전시팀',
    deadline: '2025.02.15',
    status: '모집중',
  },
];

const pressItems = [
  {
    id: 1,
    title: '영월문화재단, 지역 예술가와 함께하는 특별전 개최',
    source: '영월신문',
    date: '2025.01.14',
  },
  {
    id: 2,
    title: '청소년 문화예술 교육 프로그램 큰 호응',
    source: '강원일보',
    date: '2025.01.11',
  },
];

export default function NewsSection() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            소식 & <span className="gradient-text">공지사항</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            영월문화관광재단의 최신 소식을 확인하세요
          </p>
        </div>

        <Tabs defaultValue="notice" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="notice" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              공지사항
            </TabsTrigger>
            <TabsTrigger value="recruit" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              채용정보
            </TabsTrigger>
            <TabsTrigger value="press" className="flex items-center gap-2">
              <Volume2 className="w-4 h-4" />
              언론보도
            </TabsTrigger>
          </TabsList>

          <TabsContent value="notice" className="space-y-4">
            {newsItems.map((item) => (
              <Card
                key={item.id}
                className="hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{item.category}</Badge>
                        {item.isNew && (
                          <Badge className="bg-gradient-primary text-white border-0">
                            NEW
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="recruit" className="space-y-4">
            {recruitItems.map((item) => (
              <Card
                key={item.id}
                className="hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{item.department}</Badge>
                        <Badge className="bg-gradient-secondary text-white border-0">
                          {item.status}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                        <span>마감일: {item.deadline}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="press" className="space-y-4">
            {pressItems.map((item) => (
              <Card
                key={item.id}
                className="hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{item.source}</Badge>
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
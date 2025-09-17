import { Users, Lightbulb, Archive, MapPin, BookOpen, Beaker, Mountain, Grid } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const programs = [
  {
    icon: Lightbulb,
    title: '도시문화연구/개발',
    description: '지역 특색을 살린 문화 콘텐츠 연구 및 개발',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Users,
    title: '문화도시거버넌스',
    description: '시민과 함께 만드는 문화도시 운영체계',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Archive,
    title: '아카이브 영월',
    description: '영월의 문화자산 수집, 보존, 활용',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: MapPin,
    title: '도시자산브랜딩',
    description: '영월만의 독특한 문화브랜드 구축',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: BookOpen,
    title: '문화광부학교',
    description: '문화예술 교육 프로그램 운영',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: Beaker,
    title: '지역생활실험실',
    description: '주민 주도 문화실험 프로젝트',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Mountain,
    title: '문화광산영월',
    description: '지역 문화자원 발굴 및 활용',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Grid,
    title: '구석구석문화영월',
    description: '일상 속 문화공간 조성',
    color: 'from-orange-500 to-amber-500',
  },
];

export default function CulturePrograms() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-culture-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-culture-primary to-culture-accent bg-clip-text text-transparent">
              주요 사업
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            영월 도시문화센터가 추진하는 다양한 문화도시 사업을 소개합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-culture-primary/20 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${program.color}`} />
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <program.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg text-culture-foreground">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {program.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
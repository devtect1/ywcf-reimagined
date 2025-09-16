import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import performanceImg from '@/assets/performance.jpg';
import exhibitionImg from '@/assets/exhibition.jpg';
import yeongwolLandscape from '@/assets/yeongwol-landscape.jpg';

const events = [
  {
    id: 1,
    title: '가가호호 콘서트',
    category: '공연',
    date: '2025.01.24',
    time: '19:30',
    location: '영월문화예술회관',
    image: performanceImg,
    price: '전석 20,000원',
    status: '예매중',
  },
  {
    id: 2,
    title: '단종 1698',
    category: '전시',
    date: '2025.01.17 - 02.28',
    time: '10:00 - 18:00',
    location: '영월아트센터',
    image: exhibitionImg,
    price: '무료',
    status: '진행중',
  },
  {
    id: 3,
    title: '동강뗏목축제',
    category: '축제',
    date: '2025.07.26 - 28',
    time: '종일',
    location: '동강 일대',
    image: yeongwolLandscape,
    price: '무료',
    status: '예정',
  },
];

const categoryColors = {
  공연: 'bg-gradient-primary',
  전시: 'bg-gradient-secondary',
  축제: 'bg-accent',
};

export default function EventsSection() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            주요 <span className="gradient-text">문화행사</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            영월에서 펼쳐지는 다채로운 문화예술 프로그램을 만나보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={event.id}
              className="group overflow-hidden hover-scale cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge
                    className={`${
                      categoryColors[event.category as keyof typeof categoryColors]
                    } text-white border-0`}
                  >
                    {event.category}
                  </Badge>
                  <Badge
                    variant={event.status === '예매중' ? 'default' : 'secondary'}
                  >
                    {event.status}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <p className="font-semibold text-primary">{event.price}</p>
                </div>
              </CardContent>

              <CardFooter className="px-6 pb-6">
                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                >
                  자세히 보기
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            전체 일정 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
import { Building2, Users, Palette, Music } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import performanceImg from '@/assets/performance.jpg';
import exhibitionImg from '@/assets/exhibition.jpg';
import yeongwolLandscape from '@/assets/yeongwol-landscape.jpg';

const facilities = [
  {
    id: 1,
    name: '영월문화예술회관',
    description: '최첨단 음향과 조명 시설을 갖춘 1,200석 규모의 대극장',
    image: performanceImg,
    icon: Music,
    features: ['대극장 1,200석', '소극장 300석', '연습실 4개', '전시실'],
    color: 'from-primary/20 to-accent/20',
  },
  {
    id: 2,
    name: '영월아트센터',
    description: '현대미술과 전통예술이 조화를 이루는 복합문화공간',
    image: exhibitionImg,
    icon: Palette,
    features: ['전시장 3개', '아트샵', '카페테리아', '교육실'],
    color: 'from-secondary/20 to-primary/20',
  },
  {
    id: 3,
    name: '야외공연장',
    description: '자연과 함께하는 열린 문화공간',
    image: yeongwolLandscape,
    icon: Building2,
    features: ['수용인원 5,000명', '잔디광장', '야외전시장', '주차장'],
    color: 'from-accent/20 to-secondary/20',
  },
];

export default function FacilitiesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            문화시설 <span className="gradient-text">안내</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            영월의 문화예술을 이끄는 대표 시설들을 소개합니다
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card
              key={facility.id}
              className="group overflow-hidden hover-glow cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${facility.color} opacity-60`}
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <facility.icon className="w-12 h-12 mb-2" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">{facility.name}</h3>
                <p className="text-muted-foreground mb-6">
                  {facility.description}
                </p>

                <div className="space-y-2">
                  <p className="font-semibold text-sm text-primary mb-2">
                    주요 시설
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {facility.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
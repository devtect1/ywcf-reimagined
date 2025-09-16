import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroBg from '@/assets/hero-bg.jpg';
import performanceImg from '@/assets/performance.jpg';
import exhibitionImg from '@/assets/exhibition.jpg';

const slides = [
  {
    title: '김산진 콜렉션 특별전',
    subtitle: '365일 개방',
    description: '영월의 아름다운 문화유산을 만나보세요',
    image: exhibitionImg,
    badge: '전시',
    date: '2025.10.17 - 19',
    location: '영월문화예술회관',
  },
  {
    title: '대관 안내',
    subtitle: '대관 안내',
    description: '대관 홈페이지, 좌석 안내',
    image: performanceImg,
    badge: '공연',
    date: '상시',
    location: '영월아트센터',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary text-white text-sm font-semibold">
                  {slides[currentSlide].badge}
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                {slides[currentSlide].title}
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 font-light">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-wrap gap-4 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{slides[currentSlide].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{slides[currentSlide].location}</span>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                >
                  자세히 보기
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold px-8"
                >
                  예매하기
                </Button>
              </div>
            </div>

            {/* Image Card */}
            <div className="hidden lg:block">
              <Card className="overflow-hidden shadow-2xl hover-scale animate-scale-in">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-[500px] object-cover"
                />
              </Card>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <Button
              size="icon"
              variant="ghost"
              onClick={prevSlide}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    currentSlide === index
                      ? 'w-8 bg-white'
                      : 'bg-white/50 hover:bg-white/70'
                  )}
                />
              ))}
            </div>
            
            <Button
              size="icon"
              variant="ghost"
              onClick={nextSlide}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
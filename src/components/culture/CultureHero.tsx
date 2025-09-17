import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const slides = [
  {
    title: '문화로 빛나는',
    subtitle: '영월의 미래',
    description: '도시 전체가 하나의 문화 플랫폼이 되는 영월',
    badge: '2025 문화도시',
  },
  {
    title: '지역과 함께하는',
    subtitle: '문화도시 영월',
    description: '주민이 주도하고, 문화가 일상이 되는 도시',
    badge: '문화거버넌스',
  },
  {
    title: '구석구석',
    subtitle: '문화가 살아있는 영월',
    description: '모든 곳이 문화공간, 모든 이가 문화시민',
    badge: '문화광산',
  },
];

export default function CultureHero() {
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
    <section className="relative min-h-[600px] mt-20 overflow-hidden bg-gradient-to-br from-culture-primary/10 via-culture-accent/5 to-background">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-culture-primary/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-culture-accent/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-culture-primary to-culture-accent text-white text-sm font-semibold shadow-lg">
              <Sparkles className="w-4 h-4" />
              {slides[currentSlide].badge}
            </span>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-scale-in">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="text-culture-primary">{slides[currentSlide].title}</span>
              <br />
              <span className="bg-gradient-to-r from-culture-primary to-culture-accent bg-clip-text text-transparent">
                {slides[currentSlide].subtitle}
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-culture-primary to-culture-accent hover:opacity-90 text-white shadow-lg"
            >
              문화도시 알아보기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-culture-primary text-culture-primary hover:bg-culture-primary hover:text-white"
            >
              사업 참여하기
            </Button>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <Button
            size="icon"
            variant="ghost"
            onClick={prevSlide}
            className="text-culture-primary hover:bg-culture-primary/10"
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
                    ? 'w-8 bg-culture-primary'
                    : 'bg-culture-primary/30 hover:bg-culture-primary/50'
                )}
              />
            ))}
          </div>
          
          <Button
            size="icon"
            variant="ghost"
            onClick={nextSlide}
            className="text-culture-primary hover:bg-culture-primary/10"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
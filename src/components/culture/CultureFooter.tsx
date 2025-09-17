import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function CultureFooter() {
  return (
    <footer className="bg-gradient-to-b from-culture-primary/5 to-culture-primary/10 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-culture-primary mb-4">영월 도시문화센터</h3>
            <p className="text-sm text-muted-foreground mb-4">
              문화로 행복한 도시, 시민이 주도하는 문화도시 영월을 만들어갑니다.
            </p>
            <div className="flex gap-3">
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:bg-culture-primary hover:text-white transition-all"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:bg-culture-primary hover:text-white transition-all"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="hover:bg-culture-primary hover:text-white transition-all"
              >
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-culture-primary mb-4">바로가기</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-culture-primary transition-colors">
                  문화도시 소개
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-culture-primary transition-colors">
                  사업 안내
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-culture-primary transition-colors">
                  공지사항
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-culture-primary transition-colors">
                  자료실
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold text-culture-primary mb-4">주요 사업</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-culture-primary transition-colors">
                  문화도시거버넌스
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-culture-primary transition-colors">
                  아카이브 영월
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-culture-primary transition-colors">
                  문화광부학교
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-culture-primary transition-colors">
                  지역생활실험실
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-culture-primary mb-4">연락처</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-culture-primary" />
                <span>강원도 영월군 영월읍 단종로 31</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-culture-primary" />
                <span>033-375-6353</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-culture-primary" />
                <span>culture@ywcf.or.kr</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-culture-primary" />
                <span>평일 09:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-culture-primary/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#" className="hover:text-culture-primary transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-culture-primary transition-colors">이용약관</a>
            <a href="#" className="hover:text-culture-primary transition-colors">이메일무단수집거부</a>
            <a href="#" className="hover:text-culture-primary transition-colors">사이트맵</a>
          </div>
          <p className="text-center md:text-right">
            © 2025 영월 도시문화센터. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
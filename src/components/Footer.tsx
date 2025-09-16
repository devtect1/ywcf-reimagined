import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const quickLinks = [
  { name: '개인정보처리방침', href: '#' },
  { name: '이용약관', href: '#' },
  { name: '이메일무단수집거부', href: '#' },
  { name: '사이트맵', href: '#' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'Youtube' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img
              src="/logo-light.svg"
              alt="영월문화관광재단"
              className="h-10 w-auto"
            />
            <p className="text-sm text-background/80">
              문화와 예술이 살아 숨쉬는
              <br />
              영월의 문화관광 플랫폼
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-background/10 text-background/80 hover:text-background"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">연락처</h3>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5" />
                <div>
                  <p>대표전화: 033-375-6366</p>
                  <p>팩스: 033-375-6226</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5" />
                <span>info@ywcf.or.kr</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">오시는 길</h3>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  강원도 영월군 영월읍
                  <br />
                  영월로 2103
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5" />
                <span>
                  평일 09:00 - 18:00
                  <br />
                  (점심시간 12:00 - 13:00)
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">바로가기</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-background/20 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© 2025 영월문화관광재단. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-background transition-colors">
              관련사이트
            </a>
            <span>|</span>
            <a href="#" className="hover:text-background transition-colors">
              문의하기
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
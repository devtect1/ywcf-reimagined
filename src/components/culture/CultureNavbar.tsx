import { useState, useEffect } from 'react';
import { Menu, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    title: '문화도시 영월 소개',
    items: [
      { name: '문화도시센터 소개', href: '#' },
    ],
  },
  {
    title: '사업소개',
    items: [
      { name: '도시문화연구/개발', href: '#' },
      { name: '문화도시거버넌스', href: '#' },
      { name: '아카이브 영월', href: '#' },
      { name: '도시자산브랜딩', href: '#' },
      { name: '문화광부학교', href: '#' },
      { name: '지역생활실험실', href: '#' },
      { name: '문화광산영월', href: '#' },
      { name: '구석구석문화영월', href: '#' },
      { name: '편안히 넘나드는 영월', href: '#' },
    ],
  },
  {
    title: '모아달(月):문화도시',
    items: [
      { name: '25년 문화도시', href: '#' },
      { name: '24년 문화도시', href: '#' },
      { name: '23년 문화도시', href: '#' },
    ],
  },
];

export default function CultureNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-lg shadow-lg'
          : 'bg-culture-primary/10 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/culture-center" className="flex items-center">
            <img 
              src="/logo-culture-v2.png" 
              alt="영월 도시문화센터" 
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((menu) => (
                  <NavigationMenuItem key={menu.title}>
                    <NavigationMenuTrigger
                      className={cn(
                        'bg-transparent font-medium text-base text-culture-foreground',
                        'hover:text-culture-primary'
                      )}
                    >
                      {menu.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-1 p-4">
                        {menu.items.map((item) => (
                          <li key={item.name}>
                            <NavigationMenuLink asChild>
                              <a
                                href={item.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-culture-light hover:text-culture-primary focus:bg-culture-light focus:text-culture-primary"
                              >
                                {item.name}
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              variant="outline"
              className="border-culture-primary text-culture-primary hover:bg-culture-primary hover:text-white"
              onClick={() => window.location.href = '/'}
            >
              <Home className="mr-2 h-4 w-4" />
              영월문화관광재단
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-culture-primary"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[385px]">
              <div className="flex flex-col gap-6 mt-8">
                {menuItems.map((menu) => (
                  <div key={menu.title}>
                    <h3 className="font-semibold text-lg mb-3 text-culture-primary">
                      {menu.title}
                    </h3>
                    <ul className="space-y-2 ml-4">
                      {menu.items.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-culture-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Button
                  variant="outline"
                  className="w-full border-culture-primary text-culture-primary hover:bg-culture-primary hover:text-white mt-4"
                  onClick={() => window.location.href = '/'}
                >
                  <Home className="mr-2 h-4 w-4" />
                  영월문화관광재단
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
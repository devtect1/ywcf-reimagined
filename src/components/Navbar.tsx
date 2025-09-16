import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
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
    title: '재단소개',
    items: [
      { name: '인사말', href: '#' },
      { name: '미션과 비전', href: '#' },
      { name: '조직도', href: '#' },
      { name: '오시는 길', href: '#' },
    ],
  },
  {
    title: '사업안내',
    items: [
      { name: '공연사업', href: '#' },
      { name: '전시사업', href: '#' },
      { name: '교육사업', href: '#' },
      { name: '축제사업', href: '#' },
    ],
  },
  {
    title: '시설안내',
    items: [
      { name: '영월아트센터', href: '#' },
      { name: '대관안내', href: '#' },
      { name: '좌석배치도', href: '#' },
    ],
  },
  {
    title: '참여마당',
    items: [
      { name: '공지사항', href: '#' },
      { name: '채용정보', href: '#' },
      { name: '자료실', href: '#' },
    ],
  },
];

export default function Navbar() {
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
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={isScrolled ? '/logo-dark.svg' : '/logo-light.svg'}
              alt="영월문화관광재단"
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
                        'bg-transparent font-medium text-base',
                        !isScrolled && 'text-white hover:text-white/80 data-[state=open]:text-white'
                      )}
                    >
                      {menu.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-1 p-4">
                        {menu.items.map((item) => (
                          <li key={item.name}>
                            <NavigationMenuLink asChild>
                              <a
                                href={item.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
              variant="default"
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              티켓 예매
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  'relative',
                  !isScrolled && 'text-white hover:text-white/80'
                )}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[385px]">
              <div className="flex flex-col gap-6 mt-8">
                {menuItems.map((menu) => (
                  <div key={menu.title}>
                    <h3 className="font-semibold text-lg mb-3 text-primary">
                      {menu.title}
                    </h3>
                    <ul className="space-y-2 ml-4">
                      {menu.items.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
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
                  variant="default"
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity mt-4"
                >
                  티켓 예매
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Building2, UserPlus, FileText, Users } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [oooDropdownOpen, setOooDropdownOpen] = useState(false);
  const [ipDropdownOpen, setIpDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const oooLinks = [
    { path: '/registraciya-ooo', label: 'Регистрация ООО', icon: Building2 },
    { path: '/likvidaciya-ooo', label: 'Ликвидация ООО', icon: FileText },
    { path: '/izmeneniya', label: 'Внесение изменений', icon: Users },
    { path: '/gotovye-ooo', label: 'Готовые ООО', icon: Building2 },
  ];

  const ipLinks = [
    { path: '/registraciya-ip', label: 'Регистрация ИП', icon: UserPlus },
    { path: '/likvidaciya-ip', label: 'Ликвидация ИП', icon: FileText },
  ];

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg leading-tight">РегФайл</div>
              <div className="text-xs text-primary-400">Центр Регистрации</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Для ООО Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOooDropdownOpen(true)}
              onMouseLeave={() => setOooDropdownOpen(false)}
            >
              <button className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                location.pathname.includes('ooo') || location.pathname.includes('izmeneniya') 
                  ? 'bg-primary-light text-success' 
                  : 'hover:bg-primary-light'
              }`}>
                <span>Для ООО</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${oooDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {oooDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-card-hover py-2 animate-fade-in">
                  {oooLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                        isActive(link.path) 
                          ? 'bg-success-light text-success-dark' 
                          : 'text-primary-600 hover:bg-primary-50'
                      }`}
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Для ИП Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIpDropdownOpen(true)}
              onMouseLeave={() => setIpDropdownOpen(false)}
            >
              <button className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                location.pathname.includes('ip') 
                  ? 'bg-primary-light text-success' 
                  : 'hover:bg-primary-light'
              }`}>
                <span>Для ИП</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${ipDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {ipDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-card-hover py-2 animate-fade-in">
                  {ipLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                        isActive(link.path) 
                          ? 'bg-success-light text-success-dark' 
                          : 'text-primary-600 hover:bg-primary-50'
                      }`}
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/dokumenty" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/dokumenty') ? 'bg-primary-light text-success' : 'hover:bg-primary-light'
              }`}
            >
              Документы
            </Link>

            <Link 
              to="/o-kompanii" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/o-kompanii') ? 'bg-primary-light text-success' : 'hover:bg-primary-light'
              }`}
            >
              О компании
            </Link>

            <Link 
              to="/kontakty" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/kontakty') ? 'bg-primary-light text-success' : 'hover:bg-primary-light'
              }`}
            >
              Контакты
            </Link>
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+74952155330" 
              className="flex items-center gap-2 text-primary-100 hover:text-success transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+7 495 215-53-30</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-primary-light rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-light animate-fade-in">
            <nav className="flex flex-col gap-2">
              <div className="text-primary-400 text-sm font-medium px-4 py-2">Для ООО</div>
              {oooLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive(link.path) 
                      ? 'bg-success text-white' 
                      : 'text-primary-100 hover:bg-primary-light'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </Link>
              ))}
              
              <div className="text-primary-400 text-sm font-medium px-4 py-2 mt-2">Для ИП</div>
              {ipLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive(link.path) 
                      ? 'bg-success text-white' 
                      : 'text-primary-100 hover:bg-primary-light'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </Link>
              ))}

              <div className="border-t border-primary-light my-2"></div>

              {[
                { path: '/dokumenty', label: 'Документы' },
                { path: '/o-kompanii', label: 'О компании' },
                { path: '/kontakty', label: 'Контакты' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    isActive(link.path) 
                      ? 'bg-success text-white' 
                      : 'text-primary-100 hover:bg-primary-light'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <a 
                href="tel:+74952155330" 
                className="flex items-center justify-center gap-2 bg-success text-white px-4 py-4 rounded-lg font-semibold mt-4"
              >
                <Phone className="w-5 h-5" />
                <span>+7 495 215-53-30</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

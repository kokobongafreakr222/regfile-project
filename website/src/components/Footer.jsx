import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Building2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    ooo: [
      { path: '/registraciya-ooo', label: 'Регистрация ООО' },
      { path: '/likvidaciya-ooo', label: 'Ликвидация ООО' },
      { path: '/izmeneniya', label: 'Внесение изменений' },
      { path: '/gotovye-ooo', label: 'Готовые ООО' },
    ],
    ip: [
      { path: '/registraciya-ip', label: 'Регистрация ИП' },
      { path: '/likvidaciya-ip', label: 'Ликвидация ИП' },
    ],
    company: [
      { path: '/o-kompanii', label: 'О компании' },
      { path: '/kontakty', label: 'Контакты' },
      { path: '/dokumenty', label: 'Документы' },
    ],
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">РегФайл</div>
                <div className="text-sm text-primary-400">Центр Регистрации и Сопровождения Бизнеса</div>
              </div>
            </div>
            
            <p className="text-primary-300 text-sm leading-relaxed mb-6">
              15 лет помогаем предпринимателям открывать, менять и закрывать бизнес 
              без лишних хлопот и визитов в налоговую.
            </p>

            <div className="space-y-3">
              <a href="tel:+74952155330" className="flex items-center gap-3 text-primary-200 hover:text-success transition-colors">
                <Phone className="w-5 h-5 text-success" />
                <span className="font-semibold">+7 495 215-53-30</span>
              </a>
              
              <a href="mailto:info@regfile.ru" className="flex items-center gap-3 text-primary-200 hover:text-success transition-colors">
                <Mail className="w-5 h-5 text-success" />
                <span>info@regfile.ru</span>
              </a>
            </div>
          </div>

          {/* ООО Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Для ООО</h4>
            <ul className="space-y-3">
              {footerLinks.ooo.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-primary-300 hover:text-success transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ИП Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Для ИП</h4>
            <ul className="space-y-3">
              {footerLinks.ip.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-primary-300 hover:text-success transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-lg mb-6 mt-8">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-primary-300 hover:text-success transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Контакты</h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-primary-300 text-sm">
                  г. Москва, ул. Василия Петушкова, д. 27, оф. 104
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <div className="text-primary-300 text-sm">
                  <div>ПН–ПТ: 8:00–20:00</div>
                  <div>СБ: 10:00–18:00 (по записи)</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-primary-light rounded-xl">
              <div className="text-sm text-primary-300 mb-2">Работаем в 20+ городах России</div>
              <div className="text-xs text-primary-400">
                Москва, СПб, Астрахань, Белгород, Брянск, Владимир, Волгоград, 
                Воронеж, Иваново, Калуга, Кемерово, Курск, Нижний Новгород, 
                Рязань, Самара, Смоленск, Тула, Тверь, Казань
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-400 text-sm">
              © {currentYear} Центр Регистрации и Сопровождения Бизнеса. Все права защищены.
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-primary-400 hover:text-success transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/oferta" className="text-primary-400 hover:text-success transition-colors">
                Публичная оферта
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

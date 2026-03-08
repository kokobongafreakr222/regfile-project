import { Link } from 'react-router-dom';
import { Phone, Award, Users, Building2, Clock } from 'lucide-react';

export function OKompaniiPage() {
  const stats = [
    { value: '15', label: 'лет на рынке', suffix: '+' },
    { value: '10000', label: 'компаний открыли и закрыли', suffix: '+' },
    { value: '20', label: 'городов России', suffix: '+' },
    { value: '0', label: 'претензий от ФНС', suffix: '' },
  ];

  return (
    <div>
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto container-padding py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-success mb-6">
              <Link to="/" className="hover:underline">Главная</Link>
              <span>/</span>
              <span className="text-primary-300">О компании</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-hero font-bold leading-tight mb-6">
              Центр Регистрации и Сопровождения Бизнеса
            </h1>

            <p className="text-lg md:text-body-lg text-primary-200 mb-8 leading-relaxed">
              15 лет помогаем предпринимателям открывать, менять и закрывать бизнес 
              без лишних хлопот и визитов в налоговую.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary-light border-y border-primary-light">
        <div className="max-w-7xl mx-auto container-padding py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="stat-number">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 font-bold text-primary-900 mb-6">Наша история</h2>
              
              <div className="space-y-4 text-primary-700">
                <p>
                  Центр Регистрации и Сопровождения Бизнеса «РегФайл» работает с 2009 года. 
                  За это время мы помогли более чем 10 000 предпринимателям открыть, изменить 
                  или закрыть свой бизнес.
                </p>
                
                <p>
                  Мы специализируемся на регистрации и ликвидации ООО и ИП, внесении изменений 
                  в учредительные документы, получении готовых компаний.
                </p>
                
                <p>
                  Наша главная ценность — экономия времени клиентов. Мы делаем всё так, 
                  чтобы вам не приходилось стоять в очередях и разбираться в тонкостях закона.
                </p>
              </div>
            </div>

            <div className="bg-primary rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Наши принципы</h3>
              
              <div className="space-y-6">
                {[
                  { icon: Award, title: 'Профессионализм', desc: '15 лет опыта, знаем все нюансы' },
                  { icon: Users, title: 'Клиентоориентированность', desc: 'Работаем для результата клиента' },
                  { icon: Clock, title: 'Скорость', desc: 'Делаем быстро, без задержек' },
                  { icon: Building2, title: 'Надёжность', desc: 'Гарантии прописаны в договоре' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-primary-300">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-success">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Работаем по всей России
          </h2>

          <p className="text-xl text-success-light mb-8">
            Москва, Санкт-Петербург, Астрахань, Белгород, Брянск, Владимир, 
            Волгоград, Воронеж, Иваново, Калуга, Кемерово, Курск, Нижний Новгород, 
            Рязань, Самара, Смоленск, Тула, Тверь, Казань
          </p>

          <a
            href="tel:+74952155330"
            className="inline-flex items-center gap-3 bg-white text-success px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors shadow-lg"
          >
            <Phone className="w-6 h-6" />
            +7 495 215-53-30
          </a>
        </div>
      </section>
    </div>
  );
}

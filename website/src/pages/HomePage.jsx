import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Building2, FileText, Users, CheckCircle, Clock, Shield, Award } from 'lucide-react';

export function HomePage() {
  const stats = [
    { value: '15', label: 'лет на рынке', suffix: '+' },
    { value: '10000', label: 'компаний открыли и закрыли', suffix: '+' },
    { value: '20', label: 'городов России', suffix: '+' },
    { value: '0', label: 'визитов в налоговую для наших клиентов', suffix: '' },
  ];

  const services = [
    {
      id: 'likvidaciya',
      title: 'Ликвидация ООО',
      description: 'Закроем компанию за 2-3 месяца без ваших визитов в налоговую. Гарантия от претензий — прописываем в договоре.',
      price: 'от 25 000 ₽',
      time: '2-3 месяца',
      icon: FileText,
      href: '/likvidaciya-ooo',
      features: ['Без визитов в налоговую', 'Гарантия в договоре', 'Сопровождение на всех этапах'],
      featured: true,
    },
    {
      id: 'reg-ooo',
      title: 'Регистрация ООО',
      description: 'Откроем компанию за 3 дня. Подберем ОКВЭД, систему налогообложения, подготовим документы.',
      price: 'от 15 000 ₽',
      time: '3 дня',
      icon: Building2,
      href: '/registraciya-ooo',
      features: ['Подготовка документов', 'Подбор ОКВЭД', 'Полное сопровождение'],
    },
    {
      id: 'reg-ip',
      title: 'Регистрация ИП',
      description: 'Откроем ИП за 1 день. Поможем выбрать между ООО и ИП под ваш бизнес.',
      price: 'от 5 000 ₽',
      time: '1 день',
      icon: Users,
      href: '/registraciya-ip',
      features: ['Быстрая регистрация', 'Консультация', 'Помощь в выборе'],
    },
    {
      id: 'gotovye',
      title: 'Готовые ООО',
      description: 'Купите готовую компанию и начните работу завтра. Чистая история, расчетный счет за 1 день.',
      price: 'от 35 000 ₽',
      time: '1 день',
      icon: CheckCircle,
      href: '/gotovye-ooo',
      features: ['Чистая история', 'Быстрый старт', 'Готовые документы'],
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Консультация',
      description: 'Звоните или оставляете заявку. Мы задаем уточняющие вопросы и сразу называем цену и сроки.',
      price: 'Бесплатно',
    },
    {
      number: '02',
      title: 'Договор',
      description: 'Фиксируем сроки и гарантии в договоре. Оплата — после подписания или поэтапно.',
    },
    {
      number: '03',
      title: 'Работа',
      description: 'Сами готовим все документы, подаем в налоговую, отвечаем на запросы.',
    },
    {
      number: '04',
      title: 'Результат',
      description: 'Передаем вам готовые документы: выписку из ЕГРЮЛ, лист записи, подтверждение закрытия.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto container-padding py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="badge-success mb-6 inline-flex">
                <Award className="w-4 h-4 mr-2" />
                Работаем с 2009 года
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-hero font-bold leading-tight mb-6">
                10 000 компаний закрыли через нас.{" "}
                <span className="text-success">0 — сходили в налоговую.</span>
              </h1>
              
              <p className="text-lg md:text-body-lg text-primary-200 mb-8 leading-relaxed">
                Регистрация, ликвидация и изменения в ООО и ИП без ваших визитов в налоговую. 
                15 лет опыта, гарантия результата.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+74952155330" className="btn-primary text-center">
                  <Phone className="w-5 h-5" />
                  Получить консультацию
                </a>
                <Link to="/likvidaciya-ooo" className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-center">
                  Ликвидация ООО
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-primary-300">
                <Phone className="w-5 h-5" />
                <a 
                  href="tel:+74952155330"
                  className="text-xl font-semibold text-white hover:text-success transition-colors"
                >
                  +7 495 215-53-30
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-success/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-primary-light rounded-3xl p-8 border border-primary-400/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-success/20 rounded-2xl flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-success" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-300">Статус компании</div>
                      <div className="text-success font-semibold text-lg">✓ Успешно закрыта</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { label: 'ОГРН', value: '1234567890123' },
                      { label: 'Дата закрытия', value: '15.03.2024' },
                      { label: 'Срок закрытия', value: '2 месяца 14 дней', highlight: true },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between py-3 border-b border-primary-400/20 last:border-0">
                        <span className="text-primary-300">{item.label}</span>
                        <span className={item.highlight ? 'text-success font-semibold' : 'text-white'}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-primary-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-body-lg text-primary-600 max-w-2xl mx-auto">
              Выбирайте нужную услугу — мы скажем сроки и цену сразу
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.href}
                className={`block p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                  service.featured 
                    ? 'bg-primary text-white border-primary shadow-featured' 
                    : 'bg-white border-primary-200 hover:border-success'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  service.featured ? 'bg-success/20' : 'bg-success/10'
                }`}>
                  <service.icon className={`w-7 h-7 ${service.featured ? 'text-success' : 'text-success'}`} />
                </div>
                
                {service.featured && (
                  <div className="badge-success mb-3">Популярное</div>
                )}
                
                <h3 className={`text-xl font-bold mb-2 ${service.featured ? 'text-white' : 'text-primary-900'}`}>
                  {service.title}
                </h3>
                
                <p className={`text-sm mb-4 ${service.featured ? 'text-primary-200' : 'text-primary-600'}`}>
                  {service.description}
                </p>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    service.featured ? 'bg-success text-white' : 'bg-success/10 text-success'
                  }`}>
                    {service.price}
                  </span>
                  <span className={`text-sm ${service.featured ? 'text-primary-300' : 'text-primary-400'}`}>
                    <Clock className="w-4 h-4 inline mr-1" />
                    {service.time}
                  </span>
                </div>
                
                <span className={`inline-flex items-center gap-1 text-sm font-medium ${
                  service.featured ? 'text-success' : 'text-primary-900'
                }`}>
                  Подробнее <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-primary-900 mb-4">
              Как мы работаем
            </h2>
            <p className="text-body-lg text-primary-600 max-w-2xl mx-auto">
              Прозрачный процесс без скрытых платежей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary-200 mb-4">{step.number}</div>
                
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{step.title}</h3>
                
                <p className="text-primary-600 mb-3">{step.description}</p>
                
                {step.price && (
                  <span className="badge-success">{step.price}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 font-bold text-primary-900 mb-6">
                Почему выбирают нас
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: 'Без визитов в налоговую',
                    description: 'Все документы подаем электронно. Вам не нужно стоять в очередях и ходить по кабинетам.',
                  },
                  {
                    icon: CheckCircle,
                    title: 'Гарантия в договоре',
                    description: 'Фиксируем сроки и результат. Если не успеем — вернем деньги.',
                  },
                  {
                    icon: Award,
                    title: '15 лет опыта',
                    description: 'С 2009 года открыли и закрыли более 10 000 компаний. Знаем все нюансы.',
                  },
                  {
                    icon: Clock,
                    title: 'Экономия времени',
                    description: 'Сами разбираемся с документами, отвечаем на запросы ФНС, контролируем сроки.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-1">{item.title}</h4>
                      <p className="text-primary-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary rounded-3xl p-8 lg:p-12 text-white">
              <div className="text-success text-6xl mb-6">"</div>
              
              <blockquote className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                Думал, закрыть ООО — это просто. Потратил две недели на сбор документов, 
                потом еще месяц на попытки подать. В итоге пришел к вам — и через три месяца 
                все было готово. Без моего участия.
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-success/20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-success">П</span>
                </div>
                
                <div>
                  <div className="font-semibold">Петр К.</div>
                  <div className="text-primary-300 text-sm">Закрыл ООО через РегФайл</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-success">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Нужна консультация?
          </h2>
          
          <p className="text-xl text-success-light mb-8">
            Позвоните или оставьте заявку — мы ответим на все вопросы
          </p>
          
          <a
            href="tel:+74952155330"
            className="inline-flex items-center gap-3 bg-white text-success px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors shadow-lg"
          >
            <Phone className="w-6 h-6" />
            +7 495 215-53-30
          </a>
          
          <p className="mt-6 text-success-light text-sm">
            ПН–ПТ: 8:00–20:00, СБ: 10:00–18:00 (по записи)
          </p>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock, Shield, ArrowRight, FileText, AlertTriangle, HelpCircle } from 'lucide-react';

export function LikvidaciyaPage() {
  const [activeTab, setActiveTab] = useState('dobrovolnaya');

  const liquidationTypes = [
    {
      id: 'dobrovolnaya',
      title: 'Добровольная ликвидация',
      recommended: true,
      price: 'от 25 000 ₽',
      time: '2-3 месяца',
      when: 'Компания без долгов',
      features: [
        'Закрытие без долгов',
        'Гарантия в договоре',
        'Сопровождение на всех этапах',
        'Исключение из ЕГРЮЛ',
      ],
    },
    {
      id: 'prodazha',
      title: 'Продажа компании',
      price: 'от 15 000 ₽',
      time: '1-2 недели',
      when: 'Нужно быстро уйти из директоров',
      features: [
        'Быстрая смена учредителей',
        'Выход из директоров',
        'Минимум документов',
      ],
      warning: 'Есть риски: новый владелец может создать долги',
    },
    {
      id: 'bankrotstvo',
      title: 'Банкротство',
      price: 'от 50 000 ₽',
      time: '6-12 месяцев',
      when: 'Компания с долгами',
      features: [
        'Списание долгов',
        'Через арбитражный суд',
        'Полное закрытие',
      ],
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Подача заявления',
      duration: '2 недели',
      description: 'Готовим и подаем заявление о ликвидации в налоговую инспекцию.',
    },
    {
      number: '2',
      title: 'Публикация в Вестнике',
      duration: '2,5 месяца',
      description: 'Публикуем сообщение о ликвидации для кредиторов. Ждем срок для предъявления требований.',
    },
    {
      number: '3',
      title: 'Промежуточный баланс',
      duration: '2 недели',
      description: 'Готовим и подаем промежуточный ликвидационный баланс.',
    },
    {
      number: '4',
      title: 'Ликвидационный баланс',
      duration: '2 недели',
      description: 'Подаем финальный баланс и получаем документы о закрытии компании.',
    },
  ];

  const faq = [
    {
      question: 'Нужно ли приезжать в налоговую?',
      answer: 'Нет. Все документы мы подаем электронно через портал ФНС. Вам нужно только подписать документы у нас в офисе или курьером.',
    },
    {
      question: 'Что если у компании есть долги?',
      answer: 'При добровольной ликвидации все долги должны быть погашены. Если долги есть и погасить невозможно — рассматриваем банкротство.',
    },
    {
      question: 'Могут ли прийти из налоговой после ликвидации?',
      answer: 'Вероятность минимальна, если компания чистая. На всякий случай мы фиксируем в договоре гарантию: если будут претензии в течение года — поможем разобраться.',
    },
    {
      question: 'Сколько стоит точно?',
      answer: 'Цена зависит от сложности: количество учредителей, наличие долгов, регион. После бесплатной консультации называем точную цену.',
    },
  ];

  const includes = [
    'Подготовка всех документов для ликвидации',
    'Подача в налоговую инспекцию',
    'Публикация в Вестнике государственной регистрации',
    'Ответы на запросы ФНС',
    'Подготовка промежуточного баланса',
    'Подготовка ликвидационного баланса',
    'Получение документов о закрытии',
    'Гарантия результата в договоре',
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto container-padding py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-success mb-6">
              <Link to="/" className="hover:underline">Главная</Link>
              <span>/</span>
              <span className="text-primary-300">Ликвидация ООО</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-hero font-bold leading-tight mb-6">
              Закроем ООО за 3 месяца{" "}
              <span className="text-success">под ключ</span>
            </h1>

            <p className="text-lg md:text-body-lg text-primary-200 mb-8 leading-relaxed">
              Без ваших визитов в налоговую. Сами подготовим документы, подадим, 
              проконтролируем процесс. Гарантия в договоре.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="text-3xl font-bold text-success">от 25 000 ₽</div>
              </div>
              <div className="h-8 w-px bg-primary-light hidden sm:block"></div>
              <div className="flex items-center gap-2 text-primary-300">
                <Clock className="w-5 h-5" />
                <span>2-3 месяца</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+74952155330" className="btn-primary text-center">
                <Phone className="w-5 h-5" />
                Получить консультацию
              </a>
              <Link to="/dokumenty" className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-center">
                Только документы — 20 000 ₽
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold text-primary-900 mb-4">
              Выберите способ ликвидации
            </h2>
            <p className="text-body-lg text-primary-600 max-w-2xl mx-auto">
              В зависимости от ситуации вашей компании
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {liquidationTypes.map((type) => (
              <div 
                key={type.id}
                className={`rounded-2xl p-6 border-2 transition-all cursor-pointer ${
                  activeTab === type.id 
                    ? 'border-success bg-success/5' 
                    : 'border-primary-200 hover:border-success/50'
                }`}
                onClick={() => setActiveTab(type.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-1">{type.title}</h3>
                    <div className="text-small text-primary-500">{type.when}</div>
                  </div>
                  
                  {type.recommended && (
                    <span className="badge-success">Рекомендуем</span>
                  )}
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="text-2xl font-bold text-success">{type.price}</div>
                  <div className="text-small text-primary-400">{type.time}</div>
                </div>

                <ul className="space-y-2 mb-4">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-primary-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {type.warning && (
                  <div className="flex items-start gap-2 p-3 bg-warning/10 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
                    <span className="text-small text-warning">{type.warning}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold text-primary-900 mb-4">
              Этапы ликвидации
            </h2>
            <p className="text-body-lg text-primary-600 max-w-2xl mx-auto">
              Срок от 6 месяцев по закону, но мы делаем всё без задержек
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-primary-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-success">{step.number}</span>
                  </div>
                  <span className="badge-primary">{step.duration}</span>
                </div>

                <h3 className="text-lg font-semibold text-primary-900 mb-2">{step.title}</h3>
                <p className="text-sm text-primary-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 font-bold text-primary-900 mb-6">
                Что входит в стоимость
              </h2>

              <ul className="space-y-4">
                {includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                    <span className="text-primary-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Стоимость</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between py-3 border-b border-primary-light">
                  <span className="text-primary-200">Наши услуги</span>
                  <span className="font-semibold">от 25 000 ₽</span>
                </div>
                <div className="flex justify-between py-3 border-b border-primary-light">
                  <span className="text-primary-200">Госпошлина и публикации</span>
                  <span className="font-semibold">~ 15 000 ₽</span>
                </div>
              </div>

              <div className="bg-success/20 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Итого от</span>
                  <span className="text-3xl font-bold text-success">40 000 ₽</span>
                </div>
              </div>

              <p className="text-small text-primary-300 mb-4">
                Точная цена после бесплатной консультации
              </p>

              <a href="tel:+74952155330" className="btn-primary w-full text-center">
                <Phone className="w-5 h-5" />
                Получить консультацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-primary-50">
        <div className="max-w-3xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold text-primary-900 mb-4">
              Частые вопросы
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-primary-200">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">{item.question}</h4>
                    <p className="text-primary-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-success">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Готовы закрыть ООО?
          </h2>

          <p className="text-xl text-success-light mb-8">
            Позвоните сейчас — бесплатная консультация
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

import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock } from 'lucide-react';

export function RegistraciyaIpPage() {
  return (
    <div>
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto container-padding py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-success mb-6">
              <Link to="/" className="hover:underline">Главная</Link>
              <span>/</span>
              <span className="text-primary-300">Регистрация ИП</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-hero font-bold leading-tight mb-6">
              Откроем ИП за 1 день
            </h1>

            <p className="text-lg md:text-body-lg text-primary-200 mb-8 leading-relaxed">
              Быстрая регистрация индивидуального предпринимателя с сопровождением в налоговую.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="text-3xl font-bold text-success">от 5 000 ₽</div>
              <div className="h-8 w-px bg-primary-light hidden sm:block"></div>
              <div className="flex items-center gap-2 text-primary-300">
                <Clock className="w-5 h-5" />
                <span>1 день</span>
              </div>
            </div>

            <a href="tel:+74952155330" className="btn-primary inline-flex">
              <Phone className="w-5 h-5" />
              Получить консультацию
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-h2 font-bold text-primary-900 mb-6">Что входит</h2>
              
              <ul className="space-y-4">
                {[
                  'Консультация по порядку регистрации',
                  'Выбор системы налогообложения',
                  'Подбор кодов ОКВЭД',
                  'Подготовка заявления',
                  'Сопровождение в ФНС',
                  'Получение документов',
                ].map((item, idx) => (
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
                  <span className="font-semibold">от 5 000 ₽</span>
                </div>
                <div className="flex justify-between py-3 border-b border-primary-light">
                  <span className="text-primary-200">Госпошлина</span>
                  <span className="font-semibold">800 ₽</span>
                </div>
              </div>

              <a href="tel:+74952155330" className="btn-primary w-full text-center">
                <Phone className="w-5 h-5" />
                Заказать
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

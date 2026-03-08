import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock, ArrowRight } from 'lucide-react';

export function GotovyeOooPage() {
  return (
    <div>
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto container-padding py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-success mb-6">
              <Link to="/" className="hover:underline">Главная</Link>
              <span>/</span>
              <span className="text-primary-300">Готовые ООО</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-hero font-bold leading-tight mb-6">
              Купите готовую компанию и начните работу{" "}
              <span className="text-success">завтра</span>
            </h1>

            <p className="text-lg md:text-body-lg text-primary-200 mb-8 leading-relaxed">
              Чистая история, расчетный счет за 1 день. Без очередей в налоговую.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="text-3xl font-bold text-success">от 35 000 ₽</div>
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
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Чистая история', desc: 'Никаких долгов и обязательств' },
              { title: 'Быстрый старт', desc: 'Расчетный счет за 1 день' },
              { title: 'Готовые документы', desc: 'Все документы в порядке' },
            ].map((item, idx) => (
              <div key={idx} className="card text-center">
                <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-success" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">{item.title}</h3>
                <p className="text-primary-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Как проходит сделка</h3>
            
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              {[
                'Выбор компании',
                'Проверка',
                'Смена учредителей',
                'Готовность к работе',
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    {idx + 1}
                  </div>
                  <div className="text-sm">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight, MapPin, Users, FileText } from 'lucide-react';

export function IzmeneniyaPage() {
  const services = [
    { title: 'Смена юридического адреса', price: 'от 5 000 ₽', icon: MapPin },
    { title: 'Смена директора', price: 'от 5 000 ₽', icon: Users },
    { title: 'Изменение наименования', price: 'от 5 000 ₽', icon: FileText },
    { title: 'Ввод/выход участника', price: 'от 10 000 ₽', icon: Users },
    { title: 'Купля-продажа доли', price: 'от 10 000 ₽', icon: FileText },
    { title: 'Увеличение уставного капитала', price: 'от 8 000 ₽', icon: FileText },
    { title: 'Добавление ОКВЭД', price: 'от 3 000 ₽', icon: FileText },
  ];

  return (
    <div>
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto container-padding py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-success mb-6">
              <Link to="/" className="hover:underline">Главная</Link>
              <span>/</span>
              <span className="text-primary-300">Внесение изменений</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-hero font-bold leading-tight mb-6">
              Внесём изменения в ООО{" "}
              <span className="text-success">без ваших визитов</span>
            </h1>

            <p className="text-lg md:text-body-lg text-primary-200 mb-8 leading-relaxed">
              Смена адреса, директора, участников, наименования. Быстро и без ошибок.
            </p>

            <a href="tel:+74952155330" className="btn-primary inline-flex">
              <Phone className="w-5 h-5" />
              Получить консультацию
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="card hover:border-success transition-colors">
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-success" />
                </div>

                <h3 className="text-lg font-semibold text-primary-900 mb-2">{service.title}</h3>
                
                <div className="text-success font-bold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

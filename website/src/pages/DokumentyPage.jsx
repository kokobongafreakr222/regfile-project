import { Link } from 'react-router-dom';
import { Phone, CheckCircle, FileText } from 'lucide-react';

export function DokumentyPage() {
  const docs = [
    { title: 'Документы для регистрации ООО', price: 'от 3 000 ₽' },
    { title: 'Документы для регистрации ИП', price: 'от 2 000 ₽' },
    { title: 'Документы для ликвидации ООО', price: 'от 20 000 ₽' },
    { title: 'Документы для внесения изменений', price: 'от 2 000 ₽' },
  ];

  return (
    <div>
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto container-padding py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-success mb-6">
              <Link to="/" className="hover:underline">Главная</Link>
              <span>/</span>
              <span className="text-primary-300">Документы</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-hero font-bold leading-tight mb-6">
              Подготовим документы для самостоятельной подачи
            </h1>

            <p className="text-lg md:text-body-lg text-primary-200 mb-8 leading-relaxed">
              Если хотите сэкономить и подать документы самостоятельно — подготовим всё правильно.
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
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {docs.map((doc, idx) => (
              <div key={idx} className="card">
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-success" />
                </div>

                <h3 className="text-lg font-semibold text-primary-900 mb-2">{doc.title}</h3>
                
                <div className="text-success font-bold mb-4">{doc.price}</div>

                <ul className="space-y-2 text-sm text-primary-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Правильное заполнение
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Соответствие закону
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-warning/10 border border-warning/20 rounded-2xl p-6">
            <h4 className="font-semibold text-warning mb-2">Важно</h4>
            <p className="text-primary-700">
              При заказе только документов без сопровождения вы сами подаёте документы в налоговую 
              и несёте ответственность за результат. Консультация не входит в стоимость.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

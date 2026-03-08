import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, Building2 } from 'lucide-react';

export function KontaktyPage() {
  return (
    <div>
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto container-padding py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-success mb-6">
              <Link to="/" className="hover:underline">Главная</Link>
              <span>/</span>
              <span className="text-primary-300">Контакты</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-hero font-bold leading-tight mb-6">
              Свяжитесь с нами
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">Телефон</h3>
                  <a href="tel:+74952155330" className="text-2xl font-bold text-success hover:underline">
                    +7 495 215-53-30
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">Email</h3>
                  <a href="mailto:info@regfile.ru" className="text-primary-700 hover:text-success">
                    info@regfile.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">Адрес</h3>
                  <p className="text-primary-700">
                    г. Москва, ул. Василия Петушкова, д. 27, оф. 104
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">Режим работы</h3>
                  <p className="text-primary-700">ПН–ПТ: 8:00–20:00<br />СБ: 10:00–18:00 (по записи)</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Форма обратной связи</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="label">Ваше имя</label>
                  <input type="text" className="input" placeholder="Иван Иванов" />
                </div>

                <div>
                  <label className="label">Телефон *</label>
                  <input type="tel" className="input" placeholder="+7 (___) ___-__-__" required />
                </div>

                <div>
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="example@mail.ru" />
                </div>

                <div>
                  <label className="label">Что вас интересует?</label>
                  <select className="input">
                    <option>Регистрация ООО</option>
                    <option>Ликвидация ООО</option>
                    <option>Регистрация ИП</option>
                    <option>Готовые ООО</option>
                    <option>Внесение изменений</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div>
                  <label className="label">Сообщение</label>
                  <textarea className="input h-32 resize-none" placeholder="Опишите вашу ситуацию..."></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Отправить заявку
                </button>

                <p className="text-xs text-primary-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

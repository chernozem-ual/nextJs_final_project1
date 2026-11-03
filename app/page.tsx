const steps = [
  ["Оставляете заявку", "Через сайт или Telegram"],
  ["Получаете расчет", "Под ваш объем и формат работы"],
  ["Подписываем договор", "Через ЭДО"],
  ["Принимаем товар", "От поставщика или производства"],
  ["Автоматизируем упаковку", "С видеоконтролем каждого этапа"],
  ["Отправляем", "На маркетплейсы по всей России"],
  ["Получаете результат", "Отзывы покупателей и прибыль"],
];

const services = [
  ["Приемка и сортировка", "Принимаем поставки любого объема и размещаем товар на адресное хранение."],
  ["Проверка на брак", "Контроль качества перед упаковкой и отгрузкой."],
  ["Сборка заказов", "Быстрая комплектация заказов по данным маркетплейса."],
  ["Отправка на маркетплейсы", "FBO и FBS для всех крупных площадок."],
  ["Интеграции", "Синхронизация с маркетплейсами и CRM."],
];

const advantages = [
  ["Скорость", "До 20 000 товаров за смену и отправка день в день."],
  ["Точность", "99,8% точность сборки благодаря автоматизации."],
  ["Надежность", "Страхование товара и круглосуточный контроль."],
  ["Прозрачность", "Видеофиксация каждого заказа и понятная отчетность."],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <div className="brand">BOXPACK</div>
          <div className="menu-button" aria-hidden="true">
            <span />
            <span />
          </div>
          <nav className="nav" aria-label="Основная навигация">
            <span>Услуги</span>
            <span>Как это работает</span>
            <span>Видеофиксация</span>
            <span>Калькулятор</span>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Автоматизированный фулфилмент</p>
            <h1>Фулфилмент,<br />который держит<br />сроки и репутацию</h1>
            <p className="hero-text">
              Автоматизированная упаковка, видеоконтроль каждого заказа и отправка в день поступления.
              Мы берем на себя хранение, сборку, маркировку и логистику.
            </p>
            <div className="hero-actions">
              <div className="text-link">
                Рассчитать стоимость <ArrowIcon />
              </div>
              <div className="outline-button">Получить консультацию</div>
            </div>
            <div className="stats" aria-label="Ключевые показатели">
              <article><span className="stat-icon">▣</span><strong>5000+</strong><small>заказов в день</small></article>
              <article><span className="stat-icon">◇</span><strong>99,8%</strong><small>точность сборки</small></article>
              <article><span className="stat-icon">▰</span><strong>FBO/FBS</strong><small>все маркетплейсы</small></article>
            </div>
          </div>
          <div className="video-card" aria-label="Презентационное видео">
            <div className="video-placeholder">
              <span>Видео автоматической упаковочной линии</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <div className="section-heading">
            <h2>Как начать работать с нами</h2>
            <p>Подключение занимает всего несколько дней. Все процессы максимально автоматизированы.</p>
          </div>
          <div className="steps-grid">
            {steps.map(([title, text], index) => (
              <article className="step-card" key={title}>
                <span>Шаг {index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          <div className="section-heading">
            <h2>Услуги фулфилмента</h2>
            <p>Полный цикл обработки товара от приемки до доставки.</p>
          </div>
          <div className="services-grid">
            {services.map(([title, text]) => (
              <article className="service-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="advantages">
        <div className="container">
          <div className="section-heading light">
            <h2>Почему выбирают BOXPACK</h2>
            <p>Стабильные процессы, которые помогают вашему бизнесу расти.</p>
          </div>
          <div className="advantages-grid">
            {advantages.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div className="brand">BOXPACK</div>
          <p>Фулфилмент для маркетплейсов</p>
          <div className="footer-action">Оставить заявку <ArrowIcon /></div>
        </div>
      </footer>
    </main>
  );
}

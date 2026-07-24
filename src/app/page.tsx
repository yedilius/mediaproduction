import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Blocks,
  BrainCircuit,
  Check,
  CircleDot,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { FinanceDashboard } from "@/components/FinanceDashboard";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FounderPortrait } from "@/components/FounderPortrait";
import { InvestorCalculator } from "@/components/InvestorCalculator";
import { ClickSpark } from "@/components/effects/ClickSpark";
import { LightRays } from "@/components/effects/LightRays";
import { ShinyText } from "@/components/effects/ShinyText";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Reveal } from "@/components/Reveal";
import { RiskMatrix } from "@/components/RiskMatrix";
import { VisualStory } from "@/components/VisualStory";
import { expenses, monthlyExpenses } from "@/config/expenses";
import { breakEvenModels, launchPlan, scenarios } from "@/config/scenarios";
import { additionalServices, services } from "@/config/services";
import { heroMetrics, siteConfig } from "@/config/site";
import { operations } from "@/config/operations";
import { formatCurrency } from "@/lib/format";

const problems = [
  "Несколько несвязанных подрядчиков",
  "Задержки и сложное согласование",
  "Отсутствие единой стратегии",
  "Размытая ответственность",
  "Нерегулярный контент",
  "Отсутствие аналитики",
];

const solution = [
  "Одна команда",
  "Одна стратегия",
  "Один центр ответственности",
  "Контент на месяц",
  "Продвижение и аналитика",
  "Подключение IT-решений",
];

const roadmap = ["Media Production", "Marketing System", "IT Integration", "AI & Business Automation"];

export default function HomePage() {
  return (
    <>
      <header className="site-header" id="top">
        <Link href="/" className="brand" aria-label="Media Production — главная">
          <span className="brand-mark">MP</span>
          <span>Media Production</span>
        </Link>
        <nav aria-label="Основная навигация">
          {siteConfig.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="button button-small button-secondary" href="/investor-room">Investor Room <ArrowRight size={16} /></Link>
      </header>

      <main>
        <VisualStory />
        <section className="hero section-shell">
          <div className="hero-grid">
            <Reveal className="hero-copy">
              <LightRays className="hero-copy-rays" />
              <div className="status-pill"><span /> Инвестиционная платформа · Казахстан</div>
              <h1>
                Месяц контента{" "}
                <ShinyText
                  className="hero-shiny"
                  text="за один съемочный день"
                  speed={3.4}
                  delay={1.2}
                  color="#c7ff3d"
                  shineColor="#ffffff"
                  spread={115}
                />
              </h1>
              <p>{siteConfig.description}</p>
              <div className="hero-actions">
                <ClickSpark>
                  <Link className="button button-primary" href="#model">Изучить бизнес-модель <ArrowDownRight size={18} /></Link>
                </ClickSpark>
                <Link className="button button-secondary" href="#finance">Финансовая модель</Link>
                <Link className="text-link" href="#portfolio">Открыть портфолио <ArrowRight size={16} /></Link>
                <Link className="text-link" href="/investor-room">Investor Room <ShieldCheck size={16} /></Link>
              </div>
            </Reveal>
            <Reveal className="hero-system">
              <div className="system-glow" />
              <div className="system-top">
                <span>CONTENT OS / 01</span>
                <Gauge size={22} />
              </div>
              <div className="scene-hero-copy">
                <span>Единая система</span>
                <strong>Strategy → Production → Growth</strong>
                <p>Одна интерактивная сцена связывает контент, маркетинг, финансы, личный бренд и IT-направление.</p>
              </div>
              <div className="system-foot">
                <span>{siteConfig.role}</span>
                <span>Strategy → Production → Growth</span>
              </div>
            </Reveal>
          </div>
          <div className="metric-strip">
            {heroMetrics.map((metric) => (
              <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
            ))}
          </div>
        </section>

        <section className="section-shell" id="model">
          <Reveal className="section-intro">
            <span className="eyebrow">01 · Контекст</span>
            <h2>Не очередное SMM-агентство.<br />Операционная система роста.</h2>
            <p>Мы объединяем стратегию, производство контента, продвижение и будущую IT-интеграцию в одной управляемой системе.</p>
          </Reveal>
          <div className="compare-grid">
            <Reveal className="compare-card problem-card">
              <div className="card-title"><CircleDot size={18} /><span>Сегодня на рынке</span></div>
              <ul>{problems.map((item) => <li key={item}><span>—</span>{item}</li>)}</ul>
            </Reveal>
            <Reveal className="compare-card solution-card">
              <div className="card-title"><Sparkles size={18} /><span>Система Media Production</span></div>
              <ul>{solution.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
            </Reveal>
          </div>
        </section>

        <section className="section-shell services-section" id="services">
          <Reveal className="section-intro inline-intro">
            <div><span className="eyebrow">02 · Продуктовая линейка</span><h2>Понятный продукт.<br />Масштабируемая ценность.</h2></div>
            <p>Основной тариф формирует повторяемую выручку. Дополнительные продукты увеличивают ценность клиента и развивают digital-контур.</p>
          </Reveal>
          <div className="services-grid">
            {services.map((service) => (
              <Reveal key={service.id} className={`service-card ${service.featured ? "featured" : ""}`}>
                {service.featured && <span className="service-badge">Основной продукт</span>}
                <div>
                  <span className="service-index">/ {service.id.toUpperCase()}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <ul>{service.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul>
                <strong>{formatCurrency(service.price)} <small>/ месяц</small></strong>
              </Reveal>
            ))}
          </div>
          <div className="additional-row">
            {additionalServices.map((service) => (
              <article key={service.id}>
                <span>{service.title}</span>
                <strong>{service.pricePrefix} {formatCurrency(service.price)}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell break-even-section">
          <Reveal className="section-intro">
            <span className="eyebrow">03 · Точка безубыточности</span>
            <h2>Плановый выход — в течение 1–2 месяцев после запуска.</h2>
            <p>Это плановый ориентир, а не гарантия. Модель требует предварительных продаж, управляемой загрузки и контроля расходов.</p>
          </Reveal>
          <div className="model-grid">
            <Reveal className="model-card">
              <span>Базовая модель</span>
              <div className="formula"><strong>{breakEvenModels.base.clients}</strong><i>×</i><strong>{formatCurrency(breakEvenModels.base.averageCheck)}</strong></div>
              <p>Клиентов × средний чек</p>
              <div className="model-total"><span>Выручка</span><b>{formatCurrency(breakEvenModels.base.revenue)}</b></div>
            </Reveal>
            <Reveal className="model-card">
              <span>Смешанная модель</span>
              <div className="formula"><strong>{breakEvenModels.mixed.clients}</strong><i>+</i><strong>{formatCurrency(breakEvenModels.mixed.additionalRevenue)}</strong></div>
              <p>Клиентов + дополнительные услуги</p>
              <div className="model-total"><span>Выручка</span><b>{formatCurrency(breakEvenModels.mixed.totalRevenue)}</b></div>
            </Reveal>
          </div>
          <div className="timeline">
            {launchPlan.map((phase, index) => (
              <Reveal className="timeline-card" key={phase.phase}>
                <span>0{index + 1}</span><h3>{phase.phase}</h3>
                <ul>{phase.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-shell finance-section" id="finance">
          <Reveal className="section-intro inline-intro">
            <div><span className="eyebrow">04 · Финансовая модель</span><h2>Экономика, которую можно проверить.</h2></div>
            <p>Все значения вынесены в конфигурацию. Сценарии показывают прибыль до окончательного налогового расчета.</p>
          </Reveal>
          <div className="finance-layout">
            <div className="expense-card">
              <div className="expense-head"><span>Ежемесячные расходы</span><strong>{formatCurrency(monthlyExpenses)}</strong></div>
              {expenses.map((expense) => (
                <div className="expense-row" key={expense.label}><span>{expense.label}</span><b>{formatCurrency(expense.value)}</b></div>
              ))}
            </div>
            <FinanceDashboard />
          </div>
          <div className="scenario-grid">
            {scenarios.map((scenario) => (
              <article key={scenario.id}>
                <span>{scenario.title}</span>
                <strong>{scenario.clients} клиентов</strong>
                <dl><div><dt>Выручка</dt><dd>{formatCurrency(scenario.revenue)}</dd></div><div><dt>Прибыль</dt><dd>{formatCurrency(scenario.profit)}</dd></div></dl>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell calculator-section" id="calculator">
          <Reveal className="section-intro">
            <span className="eyebrow">05 · Интерактивный калькулятор</span>
            <h2>Инвестор получает долю только от чистой распределяемой прибыли.</h2>
            <p>Измените параметры, чтобы оценить чувствительность модели. Процент от выручки не используется.</p>
          </Reveal>
          <InvestorCalculator />
        </section>

        <section className="section-shell brand-section">
          <Reveal className="brand-panel">
            <div className="brand-main">
              <div>
                <span className="eyebrow">06 · Growth engine</span>
                <h2>Личный бренд как двигатель роста.</h2>
                <p>Экспертный контент показывает кейсы, процессы команды, результаты клиентов, маркетинг, технологии, IT и автоматизацию.</p>
              </div>
              <div className="founder-note">
                <h3>{siteConfig.role}</h3>
                <p>{siteConfig.roleDescription}</p>
              </div>
              <div className="brand-outcomes">
                {["Органические заявки", "Доверие", "Снижение зависимости от рекламы", "Повышение среднего чека", "Партнерства", "Более крупные клиенты"].map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="check-trajectory">
                <small>Стратегический потенциал среднего чека — не гарантия</small>
                <div><strong>300 000 ₸</strong><ArrowRight /><strong>350–400 тыс. ₸</strong><ArrowRight /><strong>450–700 тыс. ₸</strong></div>
              </div>
            </div>
            <FounderPortrait />
          </Reveal>
        </section>

        <section className="section-shell roadmap-section">
          <Reveal className="section-intro">
            <span className="eyebrow">07 · Развитие в IT и AI</span>
            <h2>От производства контента — к системе привлечения и обработки клиентов.</h2>
          </Reveal>
          <div className="roadmap">
            {roadmap.map((step, index) => (
              <Reveal className="roadmap-step" key={step}>
                <span>0{index + 1}</span>
                {index === 0 ? <Layers3 /> : index === 1 ? <Workflow /> : index === 2 ? <Blocks /> : <BrainCircuit />}
                <h3>{step}</h3>
                {index < roadmap.length - 1 && <ArrowRight className="roadmap-arrow" />}
              </Reveal>
            ))}
          </div>
          <div className="future-tags">
            {["Сайты", "CRM", "Telegram-боты", "AI-консультанты", "Автоматизация заявок", "Аналитические панели", "Цифровые системы бизнеса"].map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>

        <section className="section-shell operations-section">
          <Reveal className="section-intro inline-intro">
            <div><span className="eyebrow">08 · Операционная система</span><h2>Бизнес не зависит от одного человека.</h2></div>
            <p>Роли, стандарты и контрольные точки превращают expertise в воспроизводимый процесс без почасового тайминга съёмочного дня.</p>
          </Reveal>
          <div className="operations-grid">
            {operations.map((operation, index) => (
              <Reveal className="operation-card" key={operation.title}>
                <span>0{index + 1}</span><h3>{operation.title}</h3>
                <ul>{operation.items.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-shell risks-section">
          <Reveal className="section-intro">
            <span className="eyebrow">09 · Управление рисками</span>
            <h2>Риск становится управляемым, когда у него есть сигнал и ответственный.</h2>
          </Reveal>
          <RiskMatrix />
        </section>

        <section className="section-shell transformation-section">
          <Reveal className="section-intro">
            <span className="eyebrow">10 · До / После</span>
            <h2>Из набора публикаций — в измеримую marketing system.</h2>
          </Reveal>
          <BeforeAfter />
          <p className="placeholder-note center-note">Количественные показатели будут добавлены из реального кейса.</p>
        </section>

        <section className="section-shell portfolio-section" id="portfolio">
          <Reveal className="section-intro inline-intro">
            <div><span className="eyebrow">11 · Реальные работы</span><h2>Портфолио, которое уже существует.</h2></div>
            <p>Сохранены реальные материалы исходного сайта. Результаты не выдуманы: недостающие метрики отмечены как данные для последующего добавления.</p>
          </Reveal>
          <PortfolioGrid />
        </section>

        <section className="section-shell investor-cta">
          <Reveal className="investor-panel">
            <div><span className="eyebrow">12 · Investor Room</span><h2>Структура для due diligence — без публикации конфиденциальных файлов.</h2></div>
            <ClickSpark>
              <Link className="button button-primary" href="/investor-room">Открыть Investor Room <ShieldCheck size={18} /></Link>
            </ClickSpark>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div><span className="brand-mark">MP</span><strong>Media Production</strong></div>
        <p>{siteConfig.role}<br />{siteConfig.contact.note}</p>
        <Link href="#top">Наверх ↑</Link>
      </footer>
    </>
  );
}

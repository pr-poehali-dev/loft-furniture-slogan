import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      id: 1,
      name: 'Стеллаж Industrial Pro',
      price: '45 000 ₽',
      image: 'https://cdn.poehali.dev/projects/12e04123-5e53-4c74-864d-c73b38f6a062/files/dfaf0ab5-5af0-4e7e-b050-aaf09a9a763d.jpg',
      description: 'Металлический стеллаж с деревянными полками'
    },
    {
      id: 2,
      name: 'Обеденный стол Loft',
      price: '65 000 ₽',
      image: 'https://cdn.poehali.dev/projects/12e04123-5e53-4c74-864d-c73b38f6a062/files/2163774d-60cb-4a45-bd0a-5e708564a7da.jpg',
      description: 'Массив дерева на металлических ножках'
    },
    {
      id: 3,
      name: 'Книжный стеллаж Metal',
      price: '38 000 ₽',
      image: 'https://cdn.poehali.dev/projects/12e04123-5e53-4c74-864d-c73b38f6a062/files/0579cf19-2365-440e-a744-a91d75b0eee5.jpg',
      description: 'Индустриальный дизайн для вашей библиотеки'
    }
  ];

  const portfolio = [
    { title: 'Квартира-студия 45м²', description: 'Полная меблировка в стиле лофт' },
    { title: 'Офис IT-компании', description: 'Рабочее пространство на 20 человек' },
    { title: 'Кафе "Индустрия"', description: 'Обстановка для заведения 150м²' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">LOFT FACTORY</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'catalog', 'about', 'portfolio', 'delivery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'about' && 'О нас'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              МЕБЕЛЬ ИЗ МЕТАЛЛА<br />И ДЕРЕВА
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-light">
              Создаём брутальную мебель в индустриальном стиле для жилых и коммерческих пространств
            </p>
            <div className="flex gap-4">
              <Button size="lg" onClick={() => scrollToSection('catalog')} className="text-lg">
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="text-lg">
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Избранные товары</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden group hover:border-primary transition-colors">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button variant="outline">Подробнее</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О нас</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                LOFT FACTORY — производитель мебели в индустриальном стиле с 2015 года.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Мы используем натуральное дерево и качественный металл, создавая уникальные изделия,
                которые служат десятилетиями.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground uppercase">Проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">9</div>
                  <div className="text-sm text-muted-foreground uppercase">Лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground uppercase">Гарантия</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-muted rounded-sm border-4 border-primary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Factory" size={120} className="text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Портфолио</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="Building2" className="text-primary" />
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Доставка и оплата</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Icon name="Truck" size={48} className="text-primary mb-4" />
                <CardTitle className="text-xl">Доставка по России</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Доставляем в любой город России. Москва и МО — бесплатно при заказе от 50 000 ₽
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Package" size={48} className="text-primary mb-4" />
                <CardTitle className="text-xl">Упаковка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Надёжная упаковка защитит мебель при транспортировке. Все углы защищены.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="CreditCard" size={48} className="text-primary mb-4" />
                <CardTitle className="text-xl">Оплата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Наличные, карта, безналичный расчёт. Возможна рассрочка на 6 месяцев.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Промышленная, д. 15<br />
                    Производство и шоурум
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Mail" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@loft-factory.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Clock" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">
                    Пн-Пт: 10:00 - 20:00<br />
                    Сб-Вс: 11:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-primary transition-colors"
                />
                <textarea
                  placeholder="Сообщение"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <Button className="w-full" size="lg">Отправить заявку</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 LOFT FACTORY. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

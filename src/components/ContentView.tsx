
import React from 'react';
import SidebarNav from './SidebarNav';
import { Section, InfoCard } from './Section';
import AnimatedTransition from './AnimatedTransition';
import { Shield } from 'lucide-react';

interface ContentViewProps {
  activeTab: 'info' | 'tools';
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ContentView: React.FC<ContentViewProps> = ({ 
  activeTab, 
  activeSection, 
  setActiveSection 
}) => {
  const sections = {
    '1.1': 'Анонімність та її значення',
    '1.2': 'Уразливості браузерів',
    '1.3': 'Методи збору даних',
    '1.4': 'Загрози приватності',
    '2.1': 'VPN: принципи роботи та безпека',
    '2.2': 'Проксі-сервери',
    '2.3': 'Технологія Tor',
    '2.4': 'Зміна HTTP-заголовків',
    '2.5': 'Browser Fingerprinting та захист'
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pb-16">
      <AnimatedTransition show={activeTab === 'info'} type="fade" duration={300}>
        {activeTab === 'info' && (
          <div className="flex gap-8">
            <SidebarNav 
              sections={sections} 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
            />
            
            <div className="flex-1">
              <div className="section-card">
                <Section id="1.1" title={sections['1.1']} isActive={activeSection === '1.1'}>
                  <div className="prose max-w-none">
                    <p className="mb-4 text-gray-600 leading-relaxed">
                      Майже кожен слід в інтернеті, від пошукових запитів до геолокації - стає частиною профілю, який будують мережі про кожного з користувачів. Компанії збирають дані для таргетованої реклами, хакери вистежують персональну інформацію, а держави відстежують онлайн активність громадян.
                    </p>
                    
                    <p className="mb-4 text-gray-600 leading-relaxed">
                      Анонімність — це здатність людини або групи осіб приховувати свою справжню особистість чи характеристики, які могли б сприяти їхній ідентифікації. Треті особи не повинні мати можливості пов'язати дії користувача з його реальними даними – іменем, адресою проживання, контактною інформацією тощо.
                    </p>
                    
                    <h3 className="text-lg font-medium mt-8 mb-4">Ключові аспекти</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <li className="bg-gray-50 p-4 rounded-xl">
                        <p className="font-medium mb-1">Приватність</p>
                        <p className="text-sm text-gray-600">Право вирішувати, хто матиме доступ до інформації про вас</p>
                      </li>
                      <li className="bg-gray-50 p-4 rounded-xl">
                        <p className="font-medium mb-1">Конфіденційність</p>
                        <p className="text-sm text-gray-600">Право контролювати, хто може бачити ваше спілкування та дані</p>
                      </li>
                      <li className="bg-gray-50 p-4 rounded-xl">
                        <p className="font-medium mb-1">Псевдонімність</p>
                        <p className="text-sm text-gray-600">Використання постійного альтер-его замість справжнього імені</p>
                      </li>
                      <li className="bg-gray-50 p-4 rounded-xl">
                        <p className="font-medium mb-1">Свобода висловлювань</p>
                        <p className="text-sm text-gray-600">Можливість відкрито обговорювати чутливі питання без страху переслідувань</p>
                      </li>
                    </ul>

                    <InfoCard title="Значення анонімності" className="mb-6">
                      <p className="text-gray-600 mb-3">
                        Анонімність відіграє важливу роль у забезпеченні прав і безпеки користувачів, особливо для:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Журналістів у країнах з авторитарними режимами</li>
                        <li>Правозахисників, яким необхідно захищати конфіденційність джерел</li>
                        <li>Дослідників, що працюють із соціально чутливими темами</li>
                        <li>Викривачів корупції та дисидентів</li>
                      </ul>
                    </InfoCard>

                    <InfoCard title="Парадокс анонімності">
                      <p className="text-gray-600">
                        Анонімність створює парадокс: з одного боку, захищає певні групи, з іншого — ускладнює боротьбу з кіберзлочинністю. Вирішення цього парадоксу вимагає балансу між технічними рішеннями в шифруванні та правовими нормами в регулюванні збору даних.
                      </p>
                    </InfoCard>
                  </div>
                </Section>

                <Section id="1.2" title={sections['1.2']} isActive={activeSection === '1.2'}>
                  <div className="prose max-w-none mb-6">
                    <p className="text-gray-600 leading-relaxed">
                      Навіть при відсутності прямого введення персональних даних в інтернеті, існує багато технічних параметрів, які дозволяють ідентифікувати особу. Розглянемо ключові механізми браузерів, які формують так званий цифровий слід користувачів.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <InfoCard title="IP-адреса як інструмент геолокації">
                      <p className="text-gray-600">
                        IP-адреса є унікальним ідентифікатором пристрою в мережі, який розкриває географічне положення користувача, особливо при підключенні до Wi-Fi. Провайдери часто прив'язують IP-адреси до регіонів, міст, що дозволяє легко відстежити активність користувача.
                      </p>
                    </InfoCard>
                    <InfoCard title="User-Agent: технічний профіль браузера">
                      <p className="text-gray-600">
                        Кожен браузер автоматично передає серверам ряд технічних даних, включаючи версію ОС, тип браузера та його налаштування. Ця інформація може бути частиною унікального цифрового профілю. Рідкісні комбінації роблять вас менш схожими на інших користувачів.
                      </p>
                    </InfoCard>
                    <InfoCard title="Cookies та скрипти відстеження">
                      <p className="text-gray-600">
                        Файли cookies зберігають дані авторизації і часто використовуються рекламними мережами для збору інформації. Трекери фіксують переглянуті сторінки, пошук в інтернеті, час перебування на сайті та вподобання. Ці дані формують таргетовані реклами.
                      </p>
                    </InfoCard>
                    <InfoCard title="Браузерний відбиток (Browser Fingerprinting)">
                      <p className="text-gray-600">
                        Цей метод ідентифікації базується на унікальній комбінації параметрів браузера: розширень, встановлених шрифтів, роздільності екрана, часового поясу тощо. На відміну від cookies, відбиток генерується динамічно і не залишає даних на пристрої.
                      </p>
                    </InfoCard>
                  </div>
                </Section>

                <Section id="1.3" title={sections['1.3']} isActive={activeSection === '1.3'}>
                  <div className="space-y-5">
                    <InfoCard title="Реєстраційні форми та профілі">
                      <p className="text-gray-600 mb-3">
                        Найбільш простий спосіб збору даних — отримання інформації через різні методи реєстрації:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Картки лояльності (фізичні та віртуальні)</li>
                        <li>Бонусні програми та промокоди</li>
                        <li>Онлайн-опитування та анкети</li>
                        <li>Форми зворотного зв'язку</li>
                        <li>Створення облікових записів та заповнення профілів</li>
                      </ul>
                    </InfoCard>
                    <InfoCard title="Веб-аналітика (Google Analytics)">
                      <p className="text-gray-600 mb-3">
                        Пасивний метод збору даних, який відстежує поведінку користувачів на вебсайтах:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Шляхи навігації: які сторінки відвідує користувач і в якому порядку</li>
                        <li>Тривалість перебування: скільки часу витрачається на кожну сторінку</li>
                        <li>Джерела трафіку: звідки прийшов користувач (пошук, реклама, соцмережі)</li>
                        <li>Дії: кліки, заповнення форм, покупки</li>
                      </ul>
                    </InfoCard>
                    <InfoCard title="Перехоплення даних">
                      <p className="text-gray-600 mb-3">
                        Активні методи збору інформації без згоди користувача:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Фішинг через підроблені точки Wi-Fi (Evil Twin)</li>
                        <li>Соціальна інженерія через "загублений" USB-накопичувач</li>
                        <li>Перехоплення через незахищені зображення (Pixel Tracking)</li>
                      </ul>
                    </InfoCard>
                    <InfoCard title="Аналіз метаданих із фото чи документів">
                      <p className="text-gray-600 mb-3">
                        Користувач ділиться фотографією в соцмережах чи месенджерах. Ці файли можуть містити:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Геотеги (точне місце зйомки)</li>
                        <li>Модель камери або смартфона</li>
                        <li>Точний час та дату створення файлу</li>
                        <li>Інші EXIF-дані, які можна витягти навіть звичайними інструментами</li>
                      </ul>
                    </InfoCard>
                  </div>
                </Section>

                <Section id="1.4" title={sections['1.4']} isActive={activeSection === '1.4'}>
                  <div className="prose max-w-none mb-6">
                    <p className="text-gray-600 leading-relaxed">
                      Ми вже розглянули, як різні онлайн-сервіси збирають дані про вас — від пошукових запитів до звичайних кліків мишкою. Але що відбувається після цього? Розглянемо головні ризики, які загрожують кожному, хто залишає свої дані у відкритому доступі.
                    </p>
                  </div>
                  <div className="space-y-5">
                    <InfoCard title="Профілювання користувачів">
                      <p className="text-gray-600">
                        Кожен ваш крок в інтернеті додає нові деталі до вашого цифрового портрета. Компанії та зловмисники можуть дізнатися ваші звички, страхи та слабкості. Наприклад, якщо ви часто шукаєте знижки, вам почнуть пропонувати "ексклюзивні пропозиції", а якщо цікавитеся питаннями здоров'я, вам можуть нав'язати сумнівні медичні послуги.
                      </p>
                    </InfoCard>
                    <InfoCard title="Таргетована реклама">
                      <p className="text-gray-600">
                        Алгоритми створюють для вас окрему "інформаційну бульбашку", з якої важко вибратися. Вам починають показувати лише той контент, який "вам цікавий". Знаючи ваші звички, маркетологи маніпулюють вами через тактику терміновості ("залишилося 2 квитки!", "знижка тільки сьогодні!") або навмисно формують потребу в товарах, які вам не потрібні.
                      </p>
                    </InfoCard>
                    <InfoCard title="Витоки персональних даних">
                      <p className="text-gray-600">
                        Бази даних регулярно зламують, і ваші особисті дані можуть потрапити на чорний ринок. Згодом ваш номер телефону може використовуватися для шахрайських дзвінків, а ваша електронна пошта — для спаму чи фішингових атак. Підключення до публічного Wi-Fi без захисту може призвести до того, що ваші паролі чи фінансові дані перехоплять зловмисники.
                      </p>
                    </InfoCard>
                    <InfoCard title="Соціальна інженерія">
                      <p className="text-gray-600 mb-3">
                        Один із найнебезпечніших методів крадіжки інформації — це коли вас змушують добровільно її віддати:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Фішингові атаки (підроблені листи від банків, сервісів)</li>
                        <li>Спеціалізований фішинг (spear-phishing) з використанням відомої інформації про вас</li>
                        <li>Крадіжка особистості (оформлення кредитів на ваше ім'я, реєстрація фальшивих компаній)</li>
                      </ul>
                    </InfoCard>
                  </div>
                </Section>

                <Section id="2.1" title={sections['2.1']} isActive={activeSection === '2.1'}>
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <p className="text-gray-600 leading-relaxed mb-6">
                        VPN (Virtual Private Network) створює зашифрований тунель між вашим пристроєм і сервером VPN-провайдера. Завдяки цьому ваш інтернет-трафік не можна легко прочитати чи перехопити навіть у незахищених Wi-Fi-мережах.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-primary/10 p-4 rounded-xl text-center">
                        <h4 className="font-medium mb-1 text-primary">Шифрування</h4>
                        <p className="text-sm text-gray-600">Протоколи: OpenVPN, WireGuard, IKEv2</p>
                      </div>
                      <div className="bg-primary/10 p-4 rounded-xl text-center">
                        <h4 className="font-medium mb-1 text-primary">Зміна IP</h4>
                        <p className="text-sm text-gray-600">Маскування географічного розташування</p>
                      </div>
                      <div className="bg-primary/10 p-4 rounded-xl text-center">
                        <h4 className="font-medium mb-1 text-primary">Безпека з'єднання</h4>
                        <p className="text-sm text-gray-600">Захист у публічних Wi-Fi мережах</p>
                      </div>
                    </div>

                    <InfoCard title="Порівняльний аналіз популярних VPN-сервісів">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h5 className="font-medium mb-1">NordVPN</h5>
                          <p className="text-sm text-gray-600">Широкий вибір серверів і відмінна політика конфіденційності</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h5 className="font-medium mb-1">ExpressVPN</h5>
                          <p className="text-sm text-gray-600">Преміум-сервіс із високою швидкістю та простотою використання</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h5 className="font-medium mb-1">ProtonVPN</h5>
                          <p className="text-sm text-gray-600">Швейцарський VPN з акцентом на конфіденційність і безкоштовною версією</p>
                        </div>
                      </div>
                    </InfoCard>

                    <InfoCard title="Ключові критерії вибору VPN">
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li><span className="font-medium">Юрисдикція:</span> Країна реєстрації провайдера (перевага країнам з суворими законами про конфіденційність)</li>
                        <li><span className="font-medium">Швидкість і сервери:</span> Кількість серверів і країн, швидкість з'єднання</li>
                        <li><span className="font-medium">Функціонал:</span> Kill Switch, подвійний VPN, блокування реклами та шкідливих сайтів</li>
                        <li><span className="font-medium">Політика збереження логів:</span> Чи зберігає провайдер дані про вашу активність</li>
                      </ul>
                    </InfoCard>

                    <InfoCard title="Обмеження VPN" accent={true}>
                      <p className="text-gray-600">
                        VPN не забезпечує 100% анонімність. Він не приховає вашу активність від самих сервісів, якими ви користуєтесь (Google, Facebook), якщо ви авторизовані на них. Також зверніть увагу на небезпеку безкоштовних VPN, які можуть збирати та продавати ваші дані.
                      </p>
                    </InfoCard>
                  </div>
                </Section>

                <Section id="2.2" title={sections['2.2']} isActive={activeSection === '2.2'}>
                  <div className="prose max-w-none mb-6">
                    <p className="text-gray-600 leading-relaxed">
                      Проксі-сервери є інструментом для приховування реальної IP-адреси та забезпечення певного рівня анонімності. Вони використовуються для обходу регіональних обмежень, підвищення конфіденційності та кешування даних. На відміну від VPN, проксі застосовуються переважно для окремих застосунків або протоколів і не шифрують увесь трафік.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                      <InfoCard title="HTTP/HTTPS-проксі">
                        <p className="text-gray-600">
                          Працюють із веб-трафіком у браузерах. HTTPS-проксі забезпечує захищене з'єднання через SSL/TLS, що підвищує рівень конфіденційності.
                        </p>
                      </InfoCard>
                      <InfoCard title="SOCKS-проксі">
                        <p className="text-gray-600">
                          Підтримують різні види трафіку, включаючи P2P та ігрові клієнти. SOCKS5 забезпечує додатковий рівень безпеки завдяки шифруванню та автентифікації.
                        </p>
                      </InfoCard>
                    </div>

                    <InfoCard title="Види проксі-серверів">
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li><span className="font-medium">Анонімні проксі:</span> Приховують реальну IP-адресу користувача</li>
                        <li><span className="font-medium">Прозорі (transparent) проксі:</span> Не приховують IP-адресу, але використовуються для кешування</li>
                        <li><span className="font-medium">Реверс-проксі:</span> Застосовуються на стороні сервера для приховання внутрішньої інфраструктури</li>
                      </ul>
                    </InfoCard>

                    <InfoCard title="Налаштування проксі-серверів">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h5 className="font-medium mb-1">У браузері</h5>
                          <p className="text-sm text-gray-600">Параметри в розділі "Мережеві налаштування"</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h5 className="font-medium mb-1">В операційній системі</h5>
                          <p className="text-sm text-gray-600">Windows: "Параметри мережі та інтернету", macOS: "Мережа"</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h5 className="font-medium mb-1">В окремих застосунках</h5>
                          <p className="text-sm text-gray-600">FTP-клієнти, месенджери та інші програми</p>
                        </div>
                      </div>
                    </InfoCard>

                    <InfoCard title="Ризики використання проксі" accent={true}>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Нестабільність безкоштовних сервісів — обмежений ресурс, що впливає на швидкість</li>
                        <li>Вразливість до перехоплення трафіку — особливо якщо проксі не використовує шифрування</li>
                        <li>Компрометація проксі-сервера — адміністратори можуть вести журнали активності</li>
                      </ul>
                    </InfoCard>
                  </div>
                </Section>

                <Section id="2.3" title={sections['2.3']} isActive={activeSection === '2.3'}>
                  <div className="space-y-6">
                    <InfoCard title="Загальний принцип роботи Tor">
                      <p className="text-gray-600">
                        Tor (The Onion Router) — це децентралізована мережа, яка забезпечує анонімність користувачів завдяки переспрямуванню трафіку через випадковий ланцюг серверів (вузлів). Кожен вузол знає лише попередню та наступну ланку маршруту, що ускладнює відстеження кінцевого відправника та одержувача даних.
                      </p>
                    </InfoCard>

                    <InfoCard title="Принцип багаторівневого шифрування">
                      <p className="text-gray-600 mb-3">
                        Tor використовує багатошарове шифрування: кожен вузол розшифровує лише один шар даних, розкриваючи адресу наступного вузла. Це забезпечує конфіденційність, оскільки жоден вузол (крім кінцевого) не має повної інформації про маршрут та вміст переданих даних.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <h5 className="font-medium mb-1">Вхідні вузли</h5>
                          <p className="text-sm text-gray-600">Приймають трафік від користувача</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <h5 className="font-medium mb-1">Проміжні вузли</h5>
                          <p className="text-sm text-gray-600">Передають трафік між вузлами</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <h5 className="font-medium mb-1">Вихідні вузли</h5>
                          <p className="text-sm text-gray-600">Передають дані на цільовий сервер</p>
                        </div>
                      </div>
                    </InfoCard>

                    <InfoCard title="Переваги Tor">
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Високий рівень анонімності завдяки багаторівневому шифруванню</li>
                        <li>Можливість обходу цензури та доступу до заблокованих ресурсів</li>
                        <li>Кросплатформне рішення (Windows, macOS, Linux, Android)</li>
                        <li>Динамічна зміна маршрутів для кожного сеансу</li>
                      </ul>
                    </InfoCard>

                    <InfoCard title="Обмеження Tor">
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Повільна швидкість з'єднання через багаторівневе шифрування</li>
                        <li>Вихідні вузли потенційно можуть переглядати незашифрований трафік</li>
                        <li>Деякі сайти блокують підключення через Tor</li>
                        <li>Потребує додаткових заходів безпеки для повної анонімності</li>
                      </ul>
                    </InfoCard>

                    <InfoCard title="Практичні рекомендації">
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Використовуйте лише офіційний Tor Browser</li>
                        <li>Відмовтеся від плагінів: вони можуть розкрити реальний IP</li>
                        <li>Завжди перевіряйте HTTPS: захистить дані від вихідного вузла до сервера</li>
                        <li>Не вводьте особисті дані: анонімність зникає при розкритті особистої інформації</li>
                        <li>Комбінуйте з VPN: приховує факт використання Tor від провайдера</li>
                      </ul>
                    </InfoCard>
                  </div>
                </Section>

                <Section id="2.4" title={sections['2.4']} isActive={activeSection === '2.4'}>
                  <div className="space-y-6">
                    <div className="prose max-w-none mb-4">
                      <p className="text-gray-600 leading-relaxed">
                        Одним із ключових методів підвищення анонімності користувача є модифікація HTTP-заголовків, зокрема User-Agent, що вказує на тип браузера, версію, операційну систему та інші параметри. Зміна або «підробка» цього заголовка ускладнює створення точного профілю користувача.
                      </p>
                    </div>
                    
                    <InfoCard title="Значення User-Agent">
                      <p className="text-gray-600 mb-3">
                        HTTP-заголовок User-Agent містить інформацію про браузер, версію, ОС. Ця 
                        інформація використовується для створення цифрового профілю користувача.
                      </p>
                      <div className="p-3 bg-gray-100 rounded-lg text-sm font-mono text-gray-700 overflow-auto">
                        Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) 
                        Chrome/91.0.4472.124 Safari/537.36
                      </div>
                    </InfoCard>

                    <InfoCard title="Причини підміни">
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Приховати реальні технічні характеристики користувача</li>
                        <li>Емуляція інших пристроїв (наприклад, мобільних)</li>
                        <li>Обхід обмежень доступу та таргетованої реклами</li>
                        <li>Захист від відстеження та профілювання</li>
                      </ul>
                    </InfoCard>

                    <InfoCard title="Практична реалізація">
                      <p className="text-gray-600 mb-3">
                        За допомогою Python і Selenium можна налаштувати автоматичну зміну User-Agent при кожному запуску браузера. Це забезпечує динамічну зміну "цифрового відбитка" і ускладнює відстеження.
                      </p>
                    </InfoCard>

                    <InfoCard title="Переваги та обмеження підходу">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div>
                          <h5 className="font-medium mb-2">Переваги</h5>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                            <li>Динамічна зміна User-Agent ускладнює ідентифікацію</li>
                            <li>Емуляція різних типів пристроїв допомагає обходити обмеження</li>
                            <li>Гнучкість налаштувань для різних сценаріїв</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Обмеження</h5>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                            <li>Недостатньо проти розширених методів відстеження</li>
                            <li>Незвичайні значення можуть привертати увагу</li>
                            <li>Потребує додаткових заходів для повної анонімності</li>
                          </ul>
                        </div>
                      </div>
                    </InfoCard>
                  </div>
                </Section>

                <Section id="2.5" title={sections['2.5']} isActive={activeSection === '2.5'}>
                  <div className="space-y-6">
                    <InfoCard title="Що таке Browser Fingerprinting?">
                      <p className="text-gray-600 mb-3">
                        Browser Fingerprinting — це метод ідентифікації користувачів на основі унікальних параметрів їхнього браузера та пристрою. Замість традиційних трекерів, сайти використовують набір характеристик, які рідко змінюються або унікальні для кожного користувача:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>User-Agent — дані про браузер, ОС та їхні версії</li>
                        <li>Роздільна здатність екрану — розмір екрану та вікна браузера</li>
                        <li>Встановлені шрифти — різні ОС мають унікальні списки шрифтів</li>
                        <li>Мовні налаштування — мова інтерфейсу браузера та локалізація</li>
                        <li>Canvas Fingerprinting — аналіз відмінностей у відтворенні зображення</li>
                        <li>WebGL Fingerprinting — збір даних про відеокарту</li>
                      </ul>
                    </InfoCard>

                    <InfoCard title="Як працює Browser Fingerprinting?">
                      <p className="text-gray-600">
                        Комбінація параметрів дозволяє створити майже унікальний «відбиток» пристрою, який можна використовувати для відстеження користувачів навіть після очищення кешу чи зміни IP-адреси. На відміну від cookies, цей метод не залишає даних на пристрої користувача і працює навіть у режимі інкогніто.
                      </p>
                    </InfoCard>

                    <InfoCard title="Методи захисту">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium mb-2">Tor Browser</h5>
                          <p className="text-sm text-gray-600">
                            Уніфікує налаштування браузера для всіх користувачів, блокує JavaScript та WebGL, які часто застосовуються для fingerprinting.
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium mb-2">Розширення для браузера</h5>
                          <p className="text-sm text-gray-600">
                            uBlock Origin, Privacy Badger, NoScript (Firefox), HTTPS Everywhere — блокують скрипти та трекери.
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium mb-2">Зміна налаштувань браузера</h5>
                          <p className="text-sm text-gray-600">
                            Браузери Brave або Firefox з посиленими налаштуваннями приватності мають вбудовані функції для блокування fingerprinting.
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium mb-2">Віртуальні машини</h5>
                          <p className="text-sm text-gray-600">
                            Використання віртуальних машин або браузерів у режимі "пісочниці" не залишає унікальних слідів на пристрої.
                          </p>
                        </div>
                      </div>
                    </InfoCard>
                  </div>
                </Section>
              </div>
            </div>
          </div>
        )}
      </AnimatedTransition>
      
      <AnimatedTransition show={activeTab === 'tools'} type="fade" duration={300}>
        {activeTab === 'tools' && (
          <div className="section-card mt-8">
            <div className="p-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900">Інструменти захисту</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-center">
                Тут представлені інструменти, які допоможуть вам захистити свою приватність та безпеку в інтернеті.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium mb-4">Корисні розширення для браузера</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-1 flex items-center">
                        <a href="https://ublockorigin.com" target="_blank" rel="noopener noreferrer" 
                          className="text-primary hover:underline flex items-center">
                          uBlock Origin <span className="ml-1 text-xs text-gray-500">↗</span>
                        </a>
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Блокує рекламу, скрипти та трекери.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-1 flex items-center">
                        <a href="https://privacybadger.org" target="_blank" rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center">
                          Privacy Badger <span className="ml-1 text-xs text-gray-500">↗</span>
                        </a>
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Аналізує активність веб-сайтів та блокує ті, що намагаються відстежувати користувача.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-1 flex items-center">
                        <a href="https://addons.mozilla.org/uk/firefox/addon/noscript/" target="_blank" rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center">
                          NoScript (Firefox) <span className="ml-1 text-xs text-gray-500">↗</span>
                        </a>
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Забороняє виконання шкідливих скриптів.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-1 flex items-center">
                        <a href="https://www.eff.org/https-everywhere" target="_blank" rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center">
                          HTTPS Everywhere <span className="ml-1 text-xs text-gray-500">↗</span>
                        </a>
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Примусово використовує зашифровані HTTPS-з'єднання для захисту трафіку.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium mb-4">Інструменти анонімізації</h3>
                  <div className="space-y-5">
                    <div>
                      <h4 className="font-medium mb-3">Мережа Tor</h4>
                      <p className="text-gray-600 mb-3 text-sm">
                        Tor Browser дозволяє користуватись інтернетом анонімно, маскуючи вашу локацію та захищаючи від стеження.
                      </p>
                      <a href="https://www.torproject.org/ru/download/" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
                        Завантажити Tor Browser
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Надійний VPN-сервіс</h4>
                      <p className="text-gray-600 mb-3 text-sm">
                        NordVPN забезпечує шифрування з'єднання, захист від стеження та доступ до обмеженого контенту.
                      </p>
                      <a href="https://nordvpn.com/uk/offer/" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
                        Перейти до NordVPN
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium mb-4">Підміна User-Agent</h3>
                <p className="text-gray-600 mb-4">
                  Підміна User-Agent допомагає приховати інформацію про вашу операційну систему та браузер. 
                  Нижче наведено код на Python для реалізації такої функціональності:
                </p>
                <div className="bg-gray-800 p-5 rounded-lg overflow-x-auto">
                  <pre className="text-green-400 text-sm leading-relaxed">
{`from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from random import choice
os_list = [
"Windows NT 10.0; Win64; x64",
"Macintosh; Intel Mac OS X 10_15_7",
"X11; Linux x86_64",
"Linux; Android 10; SM-G973F",
"iPhone; CPU iPhone OS 14_0 like Mac OS X"
]
browser_list = [
("Chrome", "89.0.4389.90"),
("Firefox", "86.0"),
("Safari", "14.0.3"),
("Edge", "89.0.774.45"),
("Opera", "75.0.3969.149")
]

def generate_random_user_agent():
    os = choice(os_list)
    browser, version = choice(browser_list)
    if browser == "Safari":
        return f"Mozilla/5.0 ({os}) AppleWebKit/537.36 (KHTML, like Gecko) Version/{version} Safari/537.36"
    elif browser == "Opera":
        return f"Mozilla/5.0 ({os}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{version} Safari/537.36 OPR/{version}"
    return f"Mozilla/5.0 ({os}) AppleWebKit/537.36 (KHTML, like Gecko) {browser}/{version} Safari/537.36"
options = Options()
custom_user_agent = generate_random_user_agent()
options.add_argument(f'user-agent={custom_user_agent}')
options.add_argument('--disable-gpu')
options.add_argument('--no-sandbox')
options.add_experimental_option('excludeSwitches', ['enable-automation'])
options.add_experimental_option('useAutomationExtension', False)
driver = webdriver.Chrome(options=options)
try:
    driver.get("https://www.whatismybrowser.com/detect/what-is-my-user-agent/")
    wait = WebDriverWait(driver, 10)
    detected_value = wait.until(EC.presence_of_element_located((By.ID, "detected_value")))
    displayed_user_agent = detected_value.text
    print(f"Встановлений User-Agent: {custom_user_agent}")
    print(f"Визначений User-Agent: {displayed_user_agent}")
    print("User-Agent успішно змінено!" if custom_user_agent in displayed_user_agent else "User-Agent не було змінено належним чином")
    driver.get("https://uk.wikipedia.org/wiki/Україна")
    input("Натисніть Enter для закриття браузера...")
except Exception as e:
    print(f"Виникла помилка: {e}")
finally:
    driver.quit()`}
                  </pre>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Цей код дозволяє випадковим чином генерувати та встановлювати User-Agent у браузері Chrome за допомогою Selenium.
                </p>
              </div>
            </div>
          </div>
        )}
      </AnimatedTransition>
    </div>
  );
};

export default ContentView;

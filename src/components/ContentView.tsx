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
                      Анонімність — це здатність приховувати свою особистість в інтернеті, що захищає 
                      дані від компаній, хакерів і держав. Вона тісно пов'язана з конфіденційністю 
                      (контроль доступу до інформації) та псевдонімністю (використання альтернативної 
                      онлайн-особистості).
                    </p>
                    
                    <h3 className="text-lg font-medium mt-8 mb-4">Ключові аспекти</h3>
                    <ul className="grid grid-cols-2 gap-4 mb-6">
                      <li className="bg-gray-50 p-4 rounded-xl">Приватність</li>
                      <li className="bg-gray-50 p-4 rounded-xl">Конфіденційність</li>
                      <li className="bg-gray-50 p-4 rounded-xl">Псевдонімність</li>
                      <li className="bg-gray-50 p-4 rounded-xl">Свобода висловлювань</li>
                    </ul>

                    <InfoCard title="Захист персональних даних" className="mb-6">
                      <p className="text-gray-600">
                        Відсутність публічної прив'язки до особистої інформації зменшує ймовірність 
                        цілеспрямованих атак, доксингу та соціальної інженерії.
                      </p>
                    </InfoCard>

                    <InfoCard title="Приватність і цифрова безпека">
                      <p className="text-gray-600">
                        Обмеження збору персональних даних допомагає зменшити вплив цифрового стеження 
                        такого як таргетована реклама та алгоритми формування рекомендацій у стрічці 
                        соціальних мереж.
                      </p>
                    </InfoCard>
                  </div>
                </Section>

                <Section id="1.2" title={sections['1.2']} isActive={activeSection === '1.2'}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <InfoCard title="IP-адреса">
                      <p className="text-gray-600">
                        Унікальний ідентифікатор вашого пристрою в мережі, який розкриває 
                        географічне положення користувача, особливо при підключенні до Wi-Fi.
                      </p>
                    </InfoCard>
                    <InfoCard title="User-Agent">
                      <p className="text-gray-600">
                        Кожен браузер передає серверам технічні дані: версію ОС, тип браузера 
                        та його налаштування.
                      </p>
                    </InfoCard>
                    <InfoCard title="Cookies та трекери">
                      <p className="text-gray-600">
                        Файли cookies зберігають дані авторизації і використовуються рекламними 
                        мережами для збору інформації.
                      </p>
                    </InfoCard>
                    <InfoCard title="Браузерний відбиток">
                      <p className="text-gray-600">
                        Унікальна комбінація параметрів браузера: розширень, шрифтів, 
                        роздільності екрана, часового поясу.
                      </p>
                    </InfoCard>
                  </div>
                </Section>

                <Section id="1.3" title={sections['1.3']} isActive={activeSection === '1.3'}>
                  <div className="space-y-5">
                    <InfoCard title="Реєстраційні форми">
                      <p className="text-gray-600">
                        Збір даних через реєстраційні форми, бонусні програми та промокоди, 
                        онлайн-опитування та анкети.
                      </p>
                    </InfoCard>
                    <InfoCard title="Веб-аналітика">
                      <p className="text-gray-600">
                        Інструменти як Google Analytics, що аналізують поведінку користувачів 
                        на сайтах, шляхи навігації та джерела трафіку.
                      </p>
                    </InfoCard>
                    <InfoCard title="Перехоплення даних">
                      <p className="text-gray-600">
                        Використання підроблених Wi-Fi мереж (Evil Twin), соціальна інженерія 
                        та інші методи перехоплення інформації.
                      </p>
                    </InfoCard>
                    <InfoCard title="Метадані">
                      <p className="text-gray-600">
                        Аналіз метаданих із фотографій чи документів, включаючи геотеги та іншу 
                        інформацію EXIF.
                      </p>
                    </InfoCard>
                  </div>
                </Section>

                <Section id="1.4" title={sections['1.4']} isActive={activeSection === '1.4'}>
                  <div className="space-y-5">
                    <InfoCard title="Профілювання">
                      <p className="text-gray-600">
                        Кожен ваш крок в інтернеті додає деталі до цифрового портрета. Компанії та 
                        зловмисники можуть дізнатися ваші звички, страхи та слабкості, які 
                        використовуються для створення вашого профілю.
                      </p>
                    </InfoCard>
                    <InfoCard title="Таргетована реклама">
                      <p className="text-gray-600">
                        Алгоритми створюють для вас "інформаційну бульбашку", показуючи лише контент, 
                        який "вам цікавий". Знаючи ваші звички, маркетологи можуть маніпулювати 
                        вашими рішеннями.
                      </p>
                    </InfoCard>
                    <InfoCard title="Витоки персональних даних">
                      <p className="text-gray-600">
                        Бази даних регулярно зламують, і ваші особисті дані можуть потрапити на 
                        чорний ринок. Згодом ваш номер телефону може використовуватися для 
                        шахрайських дзвінків.
                      </p>
                    </InfoCard>
                    <InfoCard title="Соціальна інженерія">
                      <p className="text-gray-600">
                        Фішингові атаки, спеціалізований фішинг та крадіжка особистості — способи, 
                        якими вас можуть змусити добровільно віддати важливу інформацію або обманути.
                      </p>
                    </InfoCard>
                  </div>
                </Section>

                <Section id="2.1" title={sections['2.1']} isActive={activeSection === '2.1'}>
                  <div className="space-y-6">
                    <div className="prose max-w-none">
                      <p className="text-gray-600 leading-relaxed mb-6">
                        VPN створює зашифрований тунель між вашим пристроєм і сервером, приховуючи 
                        ваш трафік від сторонніх спостерігачів. Це захищає з'єднання в незахищених 
                        Wi-Fi мережах та змінює вашу IP-адресу.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-primary/10 p-4 rounded-xl text-center">
                        <h4 className="font-medium mb-1 text-primary">Шифрування</h4>
                      </div>
                      <div className="bg-primary/10 p-4 rounded-xl text-center">
                        <h4 className="font-medium mb-1 text-primary">Зміна IP</h4>
                      </div>
                      <div className="bg-primary/10 p-4 rounded-xl text-center">
                        <h4 className="font-medium mb-1 text-primary">Безпека з'єднання</h4>
                      </div>
                    </div>

                    <InfoCard title="Ключові критерії вибору VPN">
                      <p className="text-gray-600">
                        При виборі VPN-сервісу звертайте увагу на: юрисдикцію провайдера (країна 
                        реєстрації), швидкість і кількість серверів, наявність функцій Kill Switch, 
                        політику збереження логів.
                      </p>
                    </InfoCard>

                    <InfoCard title="Популярні VPN-сервіси">
                      <p className="text-gray-600">
                        Серед найнадійніших VPN-провайдерів: NordVPN (широкий вибір серверів), 
                        ExpressVPN (висока швидкість), ProtonVPN (швейцарська юрисдикція, 
                        безкоштовна версія).
                      </p>
                    </InfoCard>

                    <InfoCard title="Обмеження VPN" accent={true}>
                      <p className="text-gray-600">
                        VPN не забезпечує 100% анонімність. Він не приховає вашу активність від 
                        самих сервісів, якими ви користуєтесь (Google, Facebook), якщо ви 
                        авторизовані на них.
                      </p>
                    </InfoCard>
                  </div>
                </Section>

                <Section id="2.2" title={sections['2.2']} isActive={activeSection === '2.2'}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                      <InfoCard title="HTTP/HTTPS-проксі">
                        <p className="text-gray-600">
                          Працюють із веб-трафіком у браузерах. HTTPS-проксі забезпечує захищене 
                          з'єднання через SSL/TLS, що підвищує рівень конфіденційності.
                        </p>
                      </InfoCard>
                      <InfoCard title="SOCKS-проксі">
                        <p className="text-gray-600">
                          Підтримують різні види трафіку, включаючи P2P та ігрові клієнти. SOCKS5 
                          забезпечує додатковий рівень безпеки завдяки шифруванню.
                        </p>
                      </InfoCard>
                    </div>

                    <InfoCard title="! Ризики використання проксі" accent={true}>
                      <p className="text-gray-600">
                        Нестабільність безкоштовних сервісів, вразливість до перехоплення трафіку, 
                        можливість ведення журналів активності адміністраторами проксі.
                      </p>
                    </InfoCard>
                  </div>
                </Section>

                <Section id="2.3" title={sections['2.3']} isActive={activeSection === '2.3'}>
                  <div className="space-y-6">
                    <InfoCard title="Принцип багаторівневого шифрування">
                      <p className="text-gray-600">
                        Tor створює випадковий ланцюг із трьох вузлів, кожен з яких знає лише 
                        попередню та наступну ланку. Ваш трафік шифрується у кілька шарів, і кожен 
                        вузол розшифровує лише один шар.
                      </p>
                    </InfoCard>

                    <InfoCard title="Переваги Tor">
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Високий рівень анонімності завдяки багаторівневому шифруванню</li>
                        <li>Можливість обходу цензури та доступу до заблокованих ресурсів</li>
                        <li>Кросплатформне рішення (Windows, macOS, Linux, Android)</li>
                      </ul>
                    </InfoCard>

                    <InfoCard title="Обмеження Tor">
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Повільна швидкість з'єднання через багаторівневе шифрування</li>
                        <li>Вихідні вузли потенційно можуть переглядати незашифрований трафік</li>
                        <li>Деякі сайти блокують підключення через Tor</li>
                      </ul>
                    </InfoCard>

                    <InfoCard title="Практичні рекомендації">
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Використовуйте лише офіційний Tor Browser</li>
                        <li>Перевіряйте наявність HTTPS при відвідуванні сайтів</li>
                        <li>Не вводьте особисті дані, якщо хочете залишитись анонімним</li>
                        <li>Розгляньте комбінацію Tor з VPN для додаткового захисту</li>
                      </ul>
                    </InfoCard>
                  </div>
                </Section>

                <Section id="2.4" title={sections['2.4']} isActive={activeSection === '2.4'}>
                  <div className="space-y-6">
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
                      <p className="text-gray-600">
                        Підробка дозволяє приховати технічні характеристики, emulateють інші пристрої, 
                        обходити обмеження або запобігати відстеженню.
                      </p>
                    </InfoCard>

                    <InfoCard title="Ризики" accent={true}>
                      <p className="text-gray-600">
                        Нестандартні значення заголовків можуть виділяти вас серед інших користувачів, 
                        привертаючи увагу систем відстеження.
                      </p>
                    </InfoCard>
                  </div>
                </Section>

                <Section id="2.5" title={sections['2.5']} isActive={activeSection === '2.5'}>
                  <div className="space-y-6">
                    <InfoCard title="Що таке Browser Fingerprinting?">
                      <p className="text-gray-600">
                        Технологія створення унікального "відбитку" браузера на основі параметрів: 
                        User-Agent, роздільної здатності екрана, встановлених шрифтів, налаштувань 
                        мови, Canvas і WebGL.
                      </p>
                    </InfoCard>

                    <InfoCard title="Методи захисту">
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Використання Tor Browser, що уніфікує параметри для всіх користувачів</li>
                        <li>Розширення: uBlock Origin, Privacy Badger, NoScript</li>
                        <li>Налаштування конфіденційності в браузерах Firefox та Brave</li>
                        <li>Використання віртуальних машин або "пісочниць"</li>
                      </ul>
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

const georgianFacts = [
  'Иберийское царство (иначе – царство Картли) зародилось в 537 году до нашей эры на восточной территории современной Грузии. В античных и византийских источниках государство известно, как Иберия, но местное население называло себя картвели. Отсюда и название страны – Сакартвело.',
  'Древними грузинскими государствами принято считать Колхидское и Иберийское царства. Первое Колхидское царство возникло, ориентировочно, во втором тысячелетии до н.э. Второе – в VI веке до н.э. и занимало территорию Западной Грузии с выходом на восточное побережье Черного моря. Колхидское царство сыграло большую роль в объединении грузинских племен. Упоминания о Колхиде встречаются в древнегреческих мифах: именно к горам Колхиды был прикован Прометей. Но наибольшую известность получил миф о золотом руне, хранившемся в Древнем Колхидском царстве.',
  'Начиная с I века нашей эры, в Грузию начинает проникать новая религия – христианство. Изначально на Западе его распространяли греки, но основной процесс христианизации государства прочно связан с именем просветительницы – святой Нино. В IV столетии, во время правления царя Мириана, новая религия стала государственной. Согласно одной из легенд, Нино смогла исцелить царя от слепоты и он распорядился заложить первый христианский храм. Провозглашение христианства официальной религией послужило объединяющим фактором для разрозненных частей Грузии и привело к развитию грузинской письменности, возникшей еще до нашей эры.',
  'В V веке картлийский царь Вахтанг I Горгасал основал город Тбилиси (от грузинского «тбили» – теплый). Согласно легенде, решение о закладке города было принято во время охоты, когда раненое животное исцелилось у теплого серного источника на глазах царя.',
  'С начала VII века Колхида и Картли находились под властью иранских Сасанидов, а уже с середины этого столетия завоеваны арабами. Мощное исламское государство Арабский халифат, подчинившее себе территории Ирана, Палестины и ряда других, образовало на востоке Грузии Тбилисский эмират.',
  'С середины восьмого столетия начинается освобождение грузинских земель от арабского владычества, результатом которого стало возникновение независимых от арабского Халифата областей: Кахетии, Абхазии и Картвелии. К началу IX века почти вся страна, исключая территорию Тбилисского эмирата, была отвоевана у арабов, а в начале XI века окончательно прекратил свое существование и Тбилисский эмират.',
  'К X веку, в основном, сложилась грузинская народность, а картли стали ядром будущего Грузинского государства.',
  'Есть легенда о том, как грузинам досталась именно эта территория Земли. Так случилось, что в то время, когда Бог распределял земли между народами, грузины пышным застольем отмечали сотворение мира и опоздали к Богу за получением своей территории. Они попросили прощения и объяснили опоздание тем, что поднимали кубки с вином за Бога. Всевышний, поражённый такой непосредственностью, отдал им небольшой кусочек земли, который приберёг для себя. И сказал Бог, что земля эта очень красива и люди всегда будут восхищаться ею. Так и получилось. Красота окружающей природы в этой маленькой стране просто завораживает.',
  'У Грузии несколько названий. Славяне называют её Грузией, жители Запада — Georgia или Джорджия, а мусульмане — Гюрджистан. Сами грузины называют родную страну Сакартвело, ведь в древности здесь проживали картвелы.',
  'В древние времена Грузия и Испания назывались одинаково — Иберия. Язык басков, народа севера Испании, и сейчас похож на язык жителей Грузии.',
  'Археологические раскопки подтверждают, что люди на территории современной Грузии жили ещё 1,7 миллионов лет назад. Самые древние человеческие останки обнаружены в 1991 году именно в Грузии, в Дманиси.',
  'На территории Грузии археологи нашли самую древнюю виноградную лозу и остатки сосудов для вина. Это говорит о том, что Грузию можно считать родиной виноградарства и виноделия. А в Кахетии найдена бронзовая фигурка мужчины, который держит в руке чашу с вином. И датируется эта находка VII веком до нашей эры.',
  'В Грузии много долгожителей. Сами грузины считают, что причина тому их гостеприимство. Время, которое хозяин посвятит гостю, не идёт в зачёт прожитого возраста. Вполне возможно, что именно поэтому в Грузии вас настойчиво зазывают в гости сразу после знакомства.',
  'Христианство грузины приняли раньше, чем Киевская Русь. Это произошло в начале IV века благодаря святой Нино, которая доживала здесь свои последние годы и умерла в местечке Бодбе. Позже над её могилой возвели храм Св. Георгия, а спустя время на этом месте возник монастырь, в котором хранятся мощи Св. Нино.',
  'Христианство до сих пор остаётся основной религией Грузии. Грузины — очень верующие люди, они свято чтут все религиозные праздники и соблюдают старинные обычаи.',
  'Родина для грузин — не пустой звук, они очень любят свою страну. Даже живя далеко за её пределами, они помнят национальные традиции и не забывают своего происхождения.',
  'События из древнегреческой легенды о похищении Ясоном Золотого руна происходили на территории нынешней Грузии.',
  'Греки первоначально называли Грузию Страной восходящего солнца.',
  'С Грузией связана и легенда о Прометее. Считается, что греческий герой, подаривший огонь людям, был прикован к горе Хвамли в Лечхуми. Есть даже пещера Прометея в районе курорта Цхалтубо, где всегда много туристов.',
  'Селение Ушгули в Верхней Сванетии считаетися одним из самых высокогорных в мире. Здесь, на высоте 2200–2300 метров, постоянно живут люди.',
  'В Грузии природа не только красивая, но ещё и лечебная. Здесь насчитывается около 2500 источников минеральной воды.',
  'Зима в некоторых местах Грузии бывает без снега. Поэтому, например, в Батуми или Тбилиси, если вдруг идёт снег, то люди выходят на улицы полюбоваться им и очень радуются такому редкому событию.',
  'В Грузии родились некоторые известные личности. Среди них поэт Владимир Маяковский и министр иностранных дел России Сергей Лавров.',
  'В Грузии очень уважительно относятся к старшим, но при этом часто называют их по именам. Даже дети к своим родителям обращаются по имени, ведь здесь так принято и вполне естественно.',
  'Здесь сильны любые семейные традиции и связи. Очень часто слово отца — это закон, который нужно неукоснительно соблюдать.',
  'Если грузинский ребёнок зовёт папу, он произносит «мама». Такое обращение к папе часто сильно удивляет туристов, которые слышат такое обращение детей на улицах грузинских сёл и городов. А мама — это «дэда». Ещё есть «бабуа» и «бебуа» — что, соответственно, переводится как дедушка и бабушка.',
  'Здесь доброжелательно относятся к гостям не только обычные люди на улицах, но и полицейские. Они всегда готовы прийти на помощь в случае необходимости. Например, если вы приехали в гости на автомобиле (а грузинское застолье просто не бывает без вина) и вам нужно вернуться к себе, то можно не оставлять машину, а обратиться к полицейскому, который станет вашим «трезвым водителем».',
  'В грузинских домах гостям не предлагают разуваться. Наоборот, хозяйка может обидеться, если вы начнёте снимать уличную обувь или попросите тапочки.',
  'Для угощения гостя на стол ставят всё, что есть в доме. Это могут быть и самые последние запасы, если семья не очень состоятельная. Но гость голодным не останется никогда. И ночлег при необходимости ему гарантирован.',
  'Свадьбы здесь отмечают с огромным размахом и большим количеством гостей. Там бывают не только родственники и друзья, но и друзья друзей, а порой и совсем малознакомые люди. Отказываться от приглашения нельзя. Если вам оказали честь и позвали на свадебное торжество, вы просто обязаны пойти. Иначе очень обидите хозяев.',
  'Есть свадебный обычай, который нравится многим женщинам. Дело в том, что родственники жениха должны дарить невесте золотые украшения. Нарушать эту традицию нельзя.',
  'Иногда, наблюдая в ресторане, как грузины едят руками, можно подумать, что они не умеют пользоваться столовыми приборами. Но нет. Некоторые блюда нужно есть только руками, например, хинкали или шашлык. И если вы возьмёте вилку или ложку, чтобы отведать эти блюда, вас просто не поймут.',
  'Грузинское застолье невозможно без тамады и длинных тостов. Тост — это зачастую целая история, а не просто предложение выпить за здоровье или за любовь.',
  'Многим из нас знакомо блюдо грузинской кухни «Цыплёнок табака». Так вот, правильнее было бы говорить «цыплёнок тапака», от названия сковороды, в которой раньше готовили это блюдо. Но со временем стали произносить «цыплёнок табака».',
  'Грузинские хозяйки без всякого стеснения развешивают постиранное бельё для просушки на обозрение всех соседей. В любом дворе в Тбилиси можно увидеть ряды верёвок, натянутых между балконами или даже закреплённых на ближайших столбах, которые завешаны бельём.',
  'Грузины бывают очень предприимчивыми, они любят торговать и торговаться. Обсуждать цену нужно везде: на рынке, с таксистом, при заказе каких-то услуг. Если на рынке сразу согласиться с названной ценой, продавец может и обидеться на вас.',
  'Известны три очень предприимчивых брата из Грузии: Алекси, Давид и Серго Мдивани. Они стали самыми известными брачными аферистами в 20-30-х годах прошлого столетия. Братья многократно женились на богатых и известных женщинах из разных стран и смогли обогатиться на полмиллиарда долларов.',
  'В домах Грузии нет центрального отопления и снабжения горячей водой. Каждый владелец сам устанавливает нагревательные и отопительные приборы.',
  'В высотных домах лифт — это платная услуга. Внутри находится устройство для приёма оплаты. Если не заплатишь, лифт не поедет. В некоторых домах лифт закрывается на замок, а плата взимается за месяц. Каждая семья, внёсшая оплату, имеет свой ключ. Эти деньги обычно используются на поддержание лифта в рабочем состоянии.',
  'Занятия у школьников Тбилиси начинаются не 1 сентября, как мы привыкли. Точной даты вообще нет, обычно учебный год в грузинских школах стартует в срок с 17 по 21 сентября. Это зависит от того, насколько жаркая погода стоит на улице.',
  'Домашний скот очень вольготно чувствует себя на улицах и дорогах Грузии. Коровы, козы, бараны свободно гуляют, при этом зачастую создают помехи движению машин. Но не вызывают особых «нареканий» у местных жителей и сами не обращают никакого внимания на звуковые сигналы автомобилей.',
  'С начала XXI века в Грузии активно развивается туризм. За небольшой промежуток времени очень многое сделано для привлечения сюда туристов. Разработаны маршруты, построены гостиницы, бурно развивается горнолыжный туризм. В этой небольшой стране уже сейчас действуют 5 горнолыжных курортов.',
  'В Грузии с лёгкостью можно путешествовать бесплатно — автостопом. Вас с удовольствием подвезут да ещё и расскажут много интересных историй из жизни, легенд, поведают о местных достопримечательностях.',
  'Иногда считается, что грузины плохо относятся к русским, но в большинстве своём это не так. Политика и отношения простых людей — это две большие разницы. Национальность хорошего человека не имеет значения.',
  'В грузинском языке нет привычных для нас ударений на какую-то одну букву, нет заглавных букв, мужского или женского рода. Иногда только из контекста может быть понятно «о нём или о ней» идёт речь.',
  'В Грузии используется двадцатеричная числовая система. То есть, счёт идет до 20. А чтобы назвать число больше 20, например, 37 — говорят двадцать и семнадцать, 62 — три раза по 20 и два.',
  'Для грузинского языка характерно отсутствие женского, мужского и среднего рода. Существительные не основываются на местоимениях “он, она, оно”, используется только указательная частица “ис”. Чтобы определить род глагола, существительного или прилагательного, нужно использовать дополнительные слова в предложении. Такой прием делает размер грузинской фразы больше, чем ее перевод на русский язык.',
  'Другая особенность национального языка Грузии — префиксация и суффиксация в спряжении и склонении глаголов. В результате появляется многообразие глагольных форм и однокоренных слов с большим количество морфем, поэтому в грузинском языке множество глаголов с общей глагольной основой.',
  'Характерной чертой грузинской музыки является многоголосое народное пение, то есть одновременное звучание в определенной мелодической последовательности. Исторически народным и церковным пением занимаются мужчины.',
  'В Грузии растёт 500 сортов винограда, и это составляет почти одну четвертую часть мировых сортов винограда, включая находящиеся под угрозой исчезновения лозы, не найденные больше нигде на Земле.',
  'Самая высокая гора в Альпах – Монблан высотой 4804 м., в Швейцарии, Австрии, Франции или Италии нет гор выше 5000 м. В Грузии три пика по пять тысяч метров. С высотой 5201 м. Шхара является самой высокой вершиной Грузии, за ней следует Джанга с высотой 5051 м. Обе горы находятся в Сванетии. Третий пятитысячный пик – Казбек в Мцхета-Мтианетском регионе. В Грузии также находится самая высокая постоянно населенная деревня в Европе, расположенная на высоте 2100 метров. Это деревня Ушгули, расположенная у подножия горы Шхара.',
  'В Грузии много исторических памятников. Кафедральный собор Баграти в Кутаиси, Гелатский монастырь, исторические памятники Мцхета и Верхняя Сванетия находятся под защитой ЮНЕСКО в рамках проекта Всемирного наследия.',
];

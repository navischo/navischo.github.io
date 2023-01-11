class DNECard {
    constructor(id, name, description, img) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img = img;
    }
}

class DNELootCard extends DNECard {
    constructor(id, name, description, img, bonus, cost, limits) {
        super(id, name, description, img);
        this.bonus = bonus;
        this.cost = cost;
        this.limits = limits;
    }
}

class DNEDoorCard extends DNECard {
    constructor(id, name, description, img, level, budget, client, roles, penalty, profit, profitOrigins) {
        super(id, name, description, img);
        this.level = level;
        this.budget = budget;
        this.client = client;
        this.roles = roles;
        this.penalty = penalty;
        this.profit = profit;
        this.profitOrigins = profitOrigins;
    }
}

const initDNEDoorArr = () => {
    const DoorArr = [];

    // Замовлення, 19lvl
    DoorArr.push(new DNEDoorCard("prj-mriya", "М Р І Я", "Розробка 6-ти годинного івенту, що складатиме лайв виступи підбірки артистів. Чим більше організаційних питань вирішено без допомоги клубу, тим більше заробіток від продажу. У разі успішного виконання, картку замовлення можна залишити собі і використати знову.", "https://lh4.googleusercontent.com/TmXLWrqcgvg_YxmSARONzYNXFjJJWLB2fb5fI1ZeAyfO75uBnkaQkQFn4x3POUs7W5o=w2400", 8, "15К", "Otel`", ["DJ", "Охранничек", "Сапорт", "Бармен"], "Потеряй уровень и доплати участникам -5К", "30K", "Вход, Бар, Онлайн-билетьі"));

    // Various
    // Замовлення, 19lvl
    DoorArr.push(new DNEDoorCard("prj-various", "Various", "Розробка видання альбому на касетах, що складатиме компіляція треків артиста, оригінальний артворк альбому та лімітоване видання на касетах. Чим більше складових проекту розроблено без допомоги лейблу, тим більше заробіток від продажу. У разі успішного виконання, дає три унікальні картки: Демо компіляції, Альбому та Касети. Вартість кожного єтапу розробки - 1К, 6К та 14К. До кожного наступного єтапу розробки альбому зацікавленність аудиторії на вдвічі більша.", "https://lh4.googleusercontent.com/ZWRLV4_k8uGvUejY7GxJGKItp5wLJ563TzF3MmQPxDFz2qE1r1crTx4e55uMgyFgggI=w2400", 19, 0, "BODY Music", ["DJ"], "Потеряй уровень", "Продажи"));
    // // Influence Operations
    // Замовлення, 8lvl
    DoorArr.push(new DNEDoorCard("prj-influence", "Influence Operations", "Замовлення на розробку дебютного діджитал-альбому для артиста лейблу BODY Music, що складатиме компіляція його треків та оригінальний артворк альбому. Чим більше складових проекту розроблено без допомоги лейблу, тим більше заробіток від продажу. У разі успішного виконання, дає унікальну картку Альбому. Вартість розробки - 2К.", "https://lh5.googleusercontent.com/BpTDR292VB5bP7HD52JYW0YqfpvJnmtiEN02SzIoWp-c5ubGpm0uApobLtL-IfsAbBE=w2400", 8, 0, "Замовлення"));
    // Aenigma
    // Замовлення, 16lvl
    DoorArr.push(new DNEDoorCard("prj-aenigma", "Aenigma", "Замовлення на розробку восьмигодинного лайв-виступу в клубі Keller на Кирилівський, для артистів в жанрі гіпнотичного техно. Замовлення солідне, складатиме організацію повноцінного лайву з профессійною аппаратурою та світлом для 300+ людей та входом від 250, оригінальний артворк події а також флаєр, сайт з квитками, промо-відео, демо-профайли артистів, запрошення та просування опціонально. Чим більше складових проекту розроблено без допомоги клубу, тим більше заробіток від продажу. Гарантовано дає демо артистів та прибуток від входу, розмір якого залежить від уваги до проекту. У разі успішного виконання, дає унікальні картки: оригінальний концепт та артворк події, записати лайв для кожного з артистів - з верогідністю 25%, та картку проекту обмеженного видання цього лайву на платівці за кожен записаний лайв. Вартість розробки - 15К", "https://lh6.googleusercontent.com/ddLQawIUrWh7MxMGoj1D-m0Ed1ojjTbuGh6nCMs8q4nFu16qavKkcOyFc5BGugtCTE8=w2400", 16, 0, "Замовлення"));


    console.log(DoorArr);
    return DoorArr;
}

const DNEDoorArr = initDNEDoorArr();

const drawDoorCards = () => {
    const cardContainer = document.querySelector(".card-container");
    const cardTemplate = document.querySelector("#door-card-template");

    const drawCard = (cardContainer, cardTemplate, cardData) => {
        console.log(cardContainer, cardTemplate, cardData);
        const newCard = cardTemplate.cloneNode(true);
        newCard.style.display = "block";
        newCard.id = `dne-card-${cardData.id}`;
        newCard.dataset.hash = `dne-card-${cardData.id}`;
        newCard.querySelector(".card__title").textContent = cardData.name;
        if (cardData.budget !== 0) {
            newCard.querySelector(".card__budget").textContent = `${cardData.budget}`;
        } else {
            newCard.querySelector(".card__budget").style.display = "none";
        }
        newCard.querySelector(".card__profit").textContent = `${cardData.profit}`;
        newCard.querySelector(".card__roles").textContent = `${cardData.roles}.`;
        newCard.querySelector(".card__origins").textContent = `${cardData.profitOrigins}.`;
        newCard.querySelector(".card__limits").textContent = `Замовлення від ${cardData.client}`;
        newCard.querySelector(".card__preview-img").src = cardData.img;
        newCard.querySelector(".card__description").textContent = `${cardData.description}`;
        newCard.querySelector(".card__penalty").textContent = `${cardData.penalty}`;
        newCard.querySelector(".card__bonus").textContent = `${cardData.level}`;
        cardContainer.appendChild(newCard);
    };

// drawCard(cardContainer, cardTemplate, DNELootArr[0]);
// drawCard(cardContainer, cardTemplate, DNELootArr[1]);

    DNEDoorArr.forEach((DNEDoorCard) => {
        drawCard(cardContainer, cardTemplate, DNEDoorCard);
    });
}

drawDoorCards();

const initDNELootArr = () => {
    const LootArr = [];

    LootArr.push(new DNELootCard("support", "Найомничок", "Можеш застосувати на нього ще один клас та дати йому одну шмотку. Якщо втрачаєш Найомничка, клас до тебе повертається, та шмотку втрачаєш із ним. Можеш підставити Найомничка щоб піти від відповідальності за провальний івент. Тримай Найомничка перед собой поряд с іншими айтемами.", "https://lh4.googleusercontent.com/SMs5epImEfomWNvE5FJFJgtvVK3inDgX5oGiaQmwvORuLEMhIkBFn6qaUgMDN216x8U=w2400", 1, 0, ""));
    LootArr.push(new DNELootCard("ddj400", "DDJ-400", "Дозволяє зводити дві стежки, задовольняючи потреби 80% аудиторії будь-якого івенту.", "https://lh3.googleusercontent.com/0FZHsm4sbeaFrstYVngi54Th4WRf2ZnGpz_4hUnuaOwMDfDfld2QfzwRRbgFgQciVlk=w2400", 2, "16К/400", "Тільки для DJ-їв"));
    LootArr.push(new DNELootCard("djflx6", "DJ-FLX6", "Дозволяє зводити чотири стежки, задовольняючи потреби 100% аудиторії та підвищуючи задоволення діджеїв від івенту до високого рівня. З ним починаючі артисти готові грати безкоштовно", "https://lh4.googleusercontent.com/KV3fJtCjjs85CosfaTKUf_9px7PL119Gm60ImACWyKEcZr47izhkTZoSXkeTodhBv0Q=w2400", 4, "36К/700", "Тільки для DJ-їв"));
    // GOPRO
    LootArr.push(new DNELootCard("i-gopro", "GOPRO", "Дозволяє знімати широкоформатне відео з високою кількістю кадрів на секунду. З відповідними аксесуарами доступне відео від першого лиця, відео з руки та корпусу", "https://lh5.googleusercontent.com/1k2kOk7TOG2p0UjrV6WXnhOnzBtXJUoEMv9XPE-wejGTYDcIU-PkaGZmAeMeXuS08YU=w2400", 2, "20К/500", ""));
    // CASE
    LootArr.push(new DNELootCard("i-case", "Кейс", "Дозволяє сховати будь-яку кількість предметів загальною площею 21х30х10см, доступ до яких можна отримати лише маючи Ключ до кейсу", "https://lh4.googleusercontent.com/ljebY0Mn9_I269WR0_ZlZy4ZU0gbsqZZ0leThMfSmQLn0psfl_wle8F1PZ78JOl2qAc=w2400", 1, "1000", ""));
    // CASE KEY
    LootArr.push(new DNELootCard("i-case-key", "Ключ до кейсу", "Дозволяє отримати доступ до предметів у Кейсі", "https://lh3.googleusercontent.com/JppmmdWBUa0cYPA3LgPLsN2KEvuQTUNuaQkg_lR7ZK-C1YRFiLVSvfda2KOyIbHI1Mo=w2400", 0, 0, ""));
    LootArr.push(new DNELootCard("i-fishyey", "Око риби", "Дозволяє знімати надширокоформатне відео з середньою роздільною здатністю та середнім фпс", "https://lh4.googleusercontent.com/q6kgHPE-JmWkcHsVXc0Gm_XEV98LUQODkdlxKSPSkuqkNeYXCVA1y2FAY_3s_bJg5oc=w2400", 1, "5000", ""));
    LootArr.push(new DNELootCard("i-canon", "Професійний фотоапарат", "Дозволяє знімати надширокоформатне відео з середньою роздільною здатністю та середнім фпс. Дозволяє підвищити популярність гравця, привабливість товару, можливість отримати унікальний знімок міфічної рідкості, цінність якого визначатиме автор, окрім цього маючий право розпоряджатись роялті з кожного продажу цього знімку", "https://lh3.googleusercontent.com/nP83qKzVByeQIgVJLh4uVr-rZ7l-myqfawvze-rAd2bLgvmNl2aLGF7D_zhWk4s9Ajg=w2400", 2, "70К/500", ""));
    LootArr.push(new DNELootCard("i-starlink", "Роутер", "Дает закрьітьій доступ к скоростному интернету до 100мб/с для не менее 5-ти дейвайсов одновременно. Проектьі в пространствах с вай-фаем получают + или - к оправданньім ожиданиям аудитории в зависимости от концепта", "https://lh6.googleusercontent.com/EaDvW4MyDuSjXM5KCWYiyW3TVOMfs35gw7beKLK0elTrJGE7VnMeTWjS8M_0zsOWbfk=w2400", +1, 1200, ""));
    LootArr.push(new DNELootCard("i-squizer", "Сквізер", "Дає можливість залишити послання невеличкого розміру", "https://lh5.googleusercontent.com/XaXThgj9KO7oFMa_JAFJx9PcMSj3o_FkpCIdeAZyynPGY3E8vhOiOc_C7q951ePTHs0=w2400", +1, 200, ""));
    LootArr.push(new DNELootCard("i-shwabra", "Швабра", "Дає можливість залишити послання великого розміру", "https://lh3.googleusercontent.com/lQP_8BMVMOuETxH4z16PjtG7P7O3xhGfVAM4MqkKLzfP8bIWdiQwmy9c5vZddHzEw7c=w2400", +2, 400, ""));
    // тип действие
    // LootArr.push(new DNELootCard("set-rumor", "Пустить слух", "Влияет на параметр популярности игрока и его проектов в том ключе в котором будет удобно игроку с самьім вьісоким показателем репутации. Каждьій проект получит + или - к оправданньім ожиданиям аудитории в зависимости от динамики популярности их автора", "", +2, 500, ""));
    // Подключить вай-фай
    // LootArr.push(new DNELootCard("om-wifi", "Подключить вай-фай", "Проектьі в пространствах с вай-фаем получают + или - к оправданньім ожиданиям аудитории в зависимости от концепта", "", +2, 500, "Требует роутер"));
    // LootArr.push(new DNELootCard("om-led", "LED-свет", "Проектьі в пространствах с LED-лентами получают + к комфорту и атмосферьі пространства", "", +1, 500, "За каждую ленту"));
    // LootArr.push(new DNELootCard("om-food", "Кухня", "Проектьі в пространствах с кухней получают + или - к оправданньім ожиданиям аудитории в зависимости от концепта", "", +3, 300, "Если бьіла"));
    // LootArr.push(new DNELootCard("om-flowers", "Цветьі на подоконниках", "Проектьі в пространствах с цветами на подоконниках получают + к уюту и комфорту от времяпрепровождения в нем. Если свете недостаточно света, будут требовать флуорисцентньіе лампьі для жизни.", "", +3, 2000, ""));
    // LootArr.push(new DNELootCard("om-fluor", "Ультрафиолетовьіе лампьі", "Проектьі в пространствах с ультрафиолетом имеют достаточно света чтобьі цветьі росли даже без света. Так же получают + или оправданньім ожиданиям аудитории для любой вечеринки", "", +5, 8000, ""));
    // LootArr.push(new DNELootCard("om-sound", "Включить музьіку", "Проектьі в пространствах с музьікой получают + или - к оправданньім ожиданиям аудитории в зависимости от концепта", "", +2, 1000, "Двойной бонус на вечеринках"));
    // LootArr.push(new DNELootCard("vpyska", "Вписка", "Когда другу нужно где-то переночевать, можешь предоставить ему помощь и когда-то он ответит тебе тем же. Получи плюс к репутации", "", +1, 500, ""));
    // контракт
    LootArr.push(new DNELootCard("contract-academy", "Академія", "Володіючи достатніми технічними навичками в мовах html, css i js ти зможєш отримувати регулярний середній дохід кожні півтора місяці або частіше, залежно від виконаних задач. Потребує час, приносить гроші", "https://lh6.googleusercontent.com/hTjtpUg711Fwd4dRr_8kjGA_T0Q4ngQwNaxYRyVkeKgwXojwGJbnPDK6JWjeL4-wT8U=w2400", 0, "2К-12К", "Знати html, css i js"));
    // интенсив по верстке
    // LootArr.push(new DNELootCard("i-markup", "Интенсив по верстке", "В течении месяца оснастит тебя достаточньіми техническими навьіками в язьіках html, css i js для того щоб отримувати регулярний середній дохід кожні півтора місяці або частіше, залежно від виконаних задач", "", 0, 5500, "Вміння вчитись"));
    // Вміння вчитись
    // LootArr.push(new DNELootCard("i-learner", "Вміння вчитись", "Дозволяє в певний термін опановувати нові навички", "", 0, 0, ""));
    // Черньій бизнес
    // LootArr.push(new DNELootCard("black-business", "Чорний бізнес", "Дает возможность начать зарабатьівать на любом незаконном действии в случае удовлетворения всем необходимьім критериям успеха", "", 0, 0, ""));
    // Серьій бизнес
    // LootArr.push(new DNELootCard("grey-business", "Сірий бізнес", "Дает возможность начать зарабатьівать на любом действии, которому предшествовало незаконное действие, в случае удовлетворения всем необходимьім критериям успеха", "", 0, 0, ""));
    // Свой бизнес
    // LootArr.push(new DNELootCard("own-business", "Власний бізнес", "Дает возможность начать зарабатьівать на любом действии в случае удовлетворения всем необходимьім критериям успеха", "", 0, 0, ""));
    // Отмьівать деньги
    // LootArr.push(new DNELootCard("money-cleen", "Отмьівать деньги", "Дает возможность единождьі перевести прибьіль за черньій бизнес в чистьіе деньги. Если отмьівать предстоит из бизнеса которьій принадлежит другому игроку, между вами должна бьіть заключена договоренность об всех условиях", "", 0, 4000, "Только для депутатов"));
    // Сервис такси
    // LootArr.push(new DNELootCard("taxify-business", "Сервис такси", "Свой бизнес которьій позволяет вам в режиме реального времени зарабатьівать безналичньій доход за счет поездок сделанньіх игроками владеющими автомобилем в завимости согласованньіх условий и удовлетворении всех критериям качества. Между владельцем сервиса такси и владельцем машиньі, если єто разньіе люди, должна бьіть заключена договоренность обо всех условиях, между вами должна бьіть заключена договоренность об всех условиях", "", 0, 0, "Свой сайт"));
    // Депутат
    // LootArr.push(new DNELootCard("contract-congressman", "Депутат", "Професия депутата дает ряд особьіх возможностей, доступ к закрьітьім источникам и практически неограниченньій бюджет до тех пор пока его действия поддерживаются большинством. Раз в год депутат может бьіть переизбран в случае если за єто проголосует большинство игроков. В таком случае он потеряет все привелегии депутата, даже если оставит у себя физическую копию картьі.", "", 0, 0, "")); // Двери
    // Райтер
    LootArr.push(new DNELootCard("class-writer", "Райтер", "За допомогою канцелярського знаряддя здатен швидко популярізвути прості ідеї що можна висловити декількома словами або навіть буквами. Чим лаконічніша ідея, тим легше її тиражувати, тим швидше вона здатна розповсюджуватись", "https://lh5.googleusercontent.com/gmwxg96EzHNXoKY8O0xj1P3IeYP7oMwn4z7SvAg6EAIejeNEbRX-H39VLhET1LmBfxc=w2400", 1, 0, "Клас")); // Двери
    // Шериф, Татуєр, DJ
    LootArr.push(new DNELootCard("class-sherif", "Шериф", "Шериф мирний персонаж що представляє закон в Найт-Сіті. Шериф здатен дізнаватись хто є Мафією та ніхто не здатен напевно знати хто є Шерифом. Має доступ до бази інформації Поліції міста, персонального дрона та патрульної машини спортивного класу.", "https://lh6.googleusercontent.com/F6CSfk4KSbt2b1oN7y0MVoIhdZWtWDeOh6XNsUfTbNRvyfr-1VBQeEqPwx4H5R-Jiuw=w2400", 1, 0, "Клас"));
    // Татуєр
    LootArr.push(new DNELootCard("class-ttter", "Татуєр", "Наб'є тобі татуху. Регулярно робить це на різноманітних вечірках на які тільки зможе прийти. Завжди радий бачити у власній студії щоб вколоти свіжу масть. Мусить мати чисте місце для роботи, необхідну аппаратуру та матеріали. Кожне його татуювання має особливу властивість.", "https://lh5.googleusercontent.com/WUvRRRJpFIACJw50hOycHsKNnwSB3SdJSs-_5JQk11pKHMoDstW_n9nzWwb28y_wTUU=w2400", 1, 0, "Клас"));
    // DJ
    LootArr.push(new DNELootCard("class-dj", "DJ", "Поставить музику. На протязі гри може ставити музику. Якщо кожен гравець її похвалить, спробує записати сет, щоб потім ставити його вечірках, продавати в інтернеті і можливо колись навіть записати його на вінілі. Если кажен скаже що музика не та, втрачаєш цей клас.", "https://lh5.googleusercontent.com/i6Sfz0bcn1Q6HQsSqQhV1QMtCq7pyETASnCXsyswzh7NAZ2iOVdAyQoncZ8mE23BBW8=w2400", 1, 0, "Клас"));
    // DJ
    LootArr.push(new DNELootCard("class-computerman", "Компьютер-мєн", "Компьютермєн здатен робити неймовірні речі з компьютером. Чим потужніше його обладнання, тим потужніші його можливості. Спектр його дій захоплює все, починаючи з монтажу відео та обробки графіки, закінчуючи розробкою веб-сайтів та 3Д-моделювання.", "https://lh4.googleusercontent.com/_NvNB3zKOJkiy19PTgbJkCqovWYT1AFdaOLZ5CI9AhTIxAqZR1skE4lxIlniWoWkpUk=w2400", 1, 0, "Клас"));
    // Механік
    LootArr.push(new DNELootCard("class-mechanic", "Механік", "Механік здатен виконати будь-яку чоловічу роботу по дому, в машині або на івенті. Сильний чоловік що працює за розумні гроші. Має автівку вантажного классу та водійське посвідчення", "https://lh4.googleusercontent.com/Fut_jQUzHbDUFJ9siml-QsQQQQFrYamdaVff8SL-Uqi9TiKx2rVQKapBRaq6PmOwGyA=w2400", 1, 0, "Клас"));
    // Драгрейсер
    // LootArr.push(new DNELootCard("class-drugracer", "Драгрейсер", "", "", 1, 0, "Клас"));
    // Мачете
    LootArr.push(new DNELootCard("machete", "Мачете", "Мачете приєднався до ЗСУ щоб вбивати русню в Україні, був взятий в полон під Донецьком, де втік з конц-табору РФ і заліг на дно в Києві. Буде радий будь якій роботі, чудово впорається з охороною, фейсконтролем та зйомками в пілотних епізодах.", "https://lh5.googleusercontent.com/gExfGHO7RIkKcdu0kC-md2uTZldiZH-sD4b_ZkQ43LNGKiHngWzWKQwIq1tjSJMRKHg=w2400", 2, 0, "Найомничок"));
    // Ілон Таск
    LootArr.push(new DNELootCard("tusk", "Ілон Таск", "Таск регулярно донатить ЗСУ на визволення Криму з під контролю Путлера, дарує старлінки та розробляє план розвитку Нового Донецьку. Чудово розуміється у розробці веб-сайтів, апок для смартфонів та дронах. Відчуває ностальгію по власній юності тож завжди радий допомогти молодим даруванням з втіленням найсміливіших ідей.", "https://lh6.googleusercontent.com/paU4WKE38gv_ftC9uXIsGNXoNp0_e8xiVa133tyR6s4zR2ZqkDYmirkcVeRZtRJfQU4=w2400", 4, 0, "Найомничок"));
    // Рік С-137
    LootArr.push(new DNELootCard("rick", "Рік С-137", "Так, той самий. Добре подумай яку справу довірити цій людині. Ніхто не знає що станеться далі.", "https://lh6.googleusercontent.com/FIZwLsrD-krhTSF5hdjlhDt7sFSTjTlmQIGvHxLaLeeA8ceUHPohn6i1k3t8yiDqi2Y=w2400", 5, 0, "Найомничок"));
    // Убрать и отснять студию
    // Фото чистої студії приваблюють клієнтів, отримай два випадкові закази на руку та використовуй цю картку як бонус +2 для будь-якого івенту в ній. Фото на професійний фотоаппарат з широким об'єктивом привабить навіть найвибагливішу аудиторію.
    // Записати сет
    LootArr.push(new DNELootCard("make-dj-set", "Записати DJ-сет", "Дає можливість записати сет як тільки тобі закортить. Необхідні студія та аппаратура", "https://lh5.googleusercontent.com/iZqspQQvU2AWz67qOcOdoM3uuV8_O0uFMuIIsdqnu1HpkaO_d5ASSNcKFsZTyrkNgbg=w2400", 1, 1000, "Дія"));
    // Записати годинний сет
    // У тебе буде година в студії з апаратурою. Бери свій контроллер та показуй що вмієш. Гравець виростивший цю Дію в свій хід гарантовано свій запис та має шанс зробити демо. В подальшій грі демо може зацікавити Лейбл, який запропонує контракт по його продюсуванню. Став своє демо на вечірках щоб його помітили.
    // // Записати сет
    // LootArr.push(new DNELootCard("make-dj-set", "Записати DJ-сет", "Дає можливість записати сет як тільки тобі закортить. Необхідні студія та аппаратура", "https://lh5.googleusercontent.com/iZqspQQvU2AWz67qOcOdoM3uuV8_O0uFMuIIsdqnu1HpkaO_d5ASSNcKFsZTyrkNgbg=w2400", 1, 1000, "Дія"));
    // Записати сет
    LootArr.push(new DNELootCard("make-live", "Запустити трансляцію", "Дає можливість привабити відвідувачів до події або показати важливий матеріал. Потребує камери та підключення до інтернету", "https://lh3.googleusercontent.com/2Ax7PXdSpzk73m3ANSMV11awPuvp-QAH9o-tm4_mFqahF4jie5h3XfBzofp8wZ9UkIo=w2400", 1, 0, "Дія"));
    // Забомбити кусок
    LootArr.push(new DNELootCard("make-piece", "Забомбити кусок", "Забомбити кусок можна на будь-якій стіні. Навіть якщо ніхто цього не дозволяв та навіть якщо хтось проти. Вулиця - твій холст. Нехай вона буде святом мистецтва для всіх. Кусок може привернути увагу будь до чого.", "https://lh3.googleusercontent.com/EQmsSlGvL6Bhdd2bJfWagPo-JLBD2x1hS8qSJ2a6j4PY43C1OtqDO5XbagvBEgyc-lc=w2400", 2, 1000, "Дія"));
    // Забомбити кусок
    LootArr.push(new DNELootCard("make-1991-n31", "19.91 на Стрічкоткацькій", "На Стрічкоткацькій давно не фарбували стіни, час це виправити. Дозволяти це звісно ніхто не буде, та якщо ти знайомий з власниками клубів, це може зійти за аргумент. Один охоронець на КПП. Для такого розміру шматка знадобиться драбина, попитай знайомих або придбай сам. Кольори на твій смак, візьми друзів щоб працювати швидше.", "https://lh4.googleusercontent.com/_-QeG9KGhNojivrs6WmQdlomzmgQiX2Cmd-_Srd5eDwFImJgZYk3PDuehvGUzY_PYxc=w2400", 5, 1600, "Дія"));
    // Скласти нутрощі у кейс
    LootArr.push(new DNELootCard("hide-insides-case", "Скласти нутрощі у кейс", "Ви можете дістати серце або мозок та покласти його у кейс. Тепер після вашої смерті, маючи кейс та ключ від нього гравець може воскресити вас, якщо у кейсі знаходиться ваш мозок. Або все що ви мали буде передано гравцю, що матиме кейс та ключ, якщо в кейсі знаходиться ваше сердце. Застосовуючи цю карту гравець вирішує що покласти в кейс, його рішення знає лише гейм-мастер. Одноразова дія, скинь після використання.", "https://lh4.googleusercontent.com/Z7SDwZp_vswKBpfz9MJy1okslUiTfbNvnaQp1cQkd3XfQxwGydioc9WRWDQhdrTQXjE=w2400", 5, "10К", "Дія"));
    // Підірвати косяка
    LootArr.push(new DNELootCard("make-puf", "Підірвати косяка", "Ви можете використати 1г своїх Квітів щоб забити смачнющий косий розміру XL та розділити цю радість з найближчим колом гравців. Враження від івенту на якому взривають косяки ростуть до максимуму для всіх івентів, де концепт допускає паління. +1 до виправданих очікувань кожному гравцю за кожен косяк", "https://lh6.googleusercontent.com/RaCJIJOCn6erGEpLCyXrgq2L_PdlUxR6RVDXmafA0wwQ6iOUCrwjrVt2_35_E4H7pA4=w2400", 1, "300", "Дія"));
    // Блиснути знаннями
    LootArr.push(new DNELootCard("know-better", "Блиснути знаннями", "Блиснути знаннями правил може кожен гравець з цією картою. Як він сказав, так і буде. Будь-який івент отримує + або - 5 до виправданих очікувань аудиторії. Одноразовий айтем.", "https://lh6.googleusercontent.com/Z0_oh_v-ThuF_YQuzYLLB9k_T35I7yk5FE7fvfuBuohUFzfekFju4thMuw-C2Dny-rk=w2400", 5, 1000, "Дія"));
    // Платівка IGOR
    LootArr.push(new DNELootCard("vinyl-igor", "IGOR", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу. Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/heEq3Fh5UX0YwXs-Y52x6v7ZBdprdaS1y7NLrK6zgBy4_CGaFDc75WlCzSvVQkdQD_w=w2400", 2, 900, "Платівка, 39m of Hip-Hop"));
    // Платівка Nevermind
    LootArr.push(new DNELootCard("vinyl-nevermind", "Nevermind", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу. Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh4.googleusercontent.com/XO_xR7duHH-sgm71C8g6W20J5U3FCZdpSy75Hkx1NYulHQhUvzN7V8Z2AKmu6u8YTwQ=w2400", 2, 1000, "Платівка, 49m of Гранж"));
    // Платівка Mordechai
    // todo підрізати картинку
    LootArr.push(new DNELootCard("vinyl-mordechai", "Mordechai", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу. Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh6.googleusercontent.com/jXRGpz3OqpBw3bJOgQFF37mUPomYJLzrQs-b7xGyNss3nPldWx4FMy3eetJA26lrhGI=w2400", 2, 1100, "Платівка, 43m of Indie"));
    // Платівка Half Age
    LootArr.push(new DNELootCard("vinyl-half-age", "Half Age", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу. Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/FvFHXjLdWHPi6YD-Sf3blgvACFkPvXWkMfk7M5ig0VwOY_DvyTAPiAng97vzvUboi6g=w2400", 5, 2800, "Платівка, 36m of Minimal Electronic Synth-pop"));
    // Демо Autonomous aka Slam
    LootArr.push(new DNELootCard("demo-autonomous-aka-slam", "Autonomous aka Slam", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі навіть вдасться знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/2vnBrdPitfEB2W0Ygvco65SUPsQgeX6k_EKmvXsAG1AIVMMDrK27f4cHGdZGIAVc26U=w2400", 2, 0, "Демо, 56m of Електро"));
    // Демо Jing
    LootArr.push(new DNELootCard("demo-jing", "Jing", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/dnU_1kJofGM8L6FcyZFY9FIV7X0XMmt6NZjqHRI5eDv4Tybe2MNQSydfpaLst9BGqLE=w2400", 2, 0, "Демо, 54m of Електро"));
    // Демо Courtesy
    LootArr.push(new DNELootCard("demo-courtesy", "Courtesy", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/y4b77JEBzft41_41hPiZq8c6OCAVHL5LTgR9KTRpvgbEAoXOwnMxmlCFiOnb77xP79g=w2400", 2, 0, "Демо, 60m of Електро"));
    // Демо Jelz
    LootArr.push(new DNELootCard("demo-jelz", "Jelz", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh4.googleusercontent.com/SOPjuttKgwgX32fw4edtKqsp2m_bLG2udIOAjbDpIx4KMmYqdvrKvhqcdZ1tOj1ZM-w=w2400", 2, 0, "Демо, 55m of Електро"));
    // Демо Lolsnake
    LootArr.push(new DNELootCard("demo-lolsnake", "Lolsnake", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/WZCoPBbHswgpsjBut2HcOcG4Vh0PExeuzccaB1Y5bjwMEqNUVz2ekEprLCQ4tbpXLro=w2400", 2, 0, "Демо, 55m of Електро"));
    // Демо Marum B2B High Future
    LootArr.push(new DNELootCard("demo-marum-future", "Marum B2B High Future", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі навіть вдасться знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/Cliugw88-JyXPoBiDMB4MPEr-7DaoXJcSyMGh8gaJwxJ1PGefd5x9NrrXVERtueXvjQ=w2400", 4, 0, "Демо, 122m of Електро"));
    // Демо Paris Smith
    LootArr.push(new DNELootCard("demo-smith", "Paris Smith", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/ujfWek1eUoapCHAgwX0B84jl78OuvjbEHwPvtkNNbCdKWEIshqHsdwrnWdqLinBMLIU=w2400", 2, 0, "Демо, 54m of Електро"));
    LootArr.push(new DNELootCard("demo-tony-approved", "TONY SAYS FCKUIN' APPROVED", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/j77ixolnmMZ8P1Tlc4rWE6bSDqKHhs8N1mOrk6ZhY4gcE3-9383hsnIDfOm3dLfp5TY=w2400", 1, 0, "Демо, 59m of Lo-fi House"));
    LootArr.push(new DNELootCard("dirty-mouth", "Не почистити зуби", "Ротова вонь дає мінус привабливості. Будь-який івент на який прийде гравець з цією проблемою отримує -2 до виправданих очікувань аудиторії. Може бути скинута після одного івенту або раніше, якщо почистити зуби.", "https://lh5.googleusercontent.com/fXOXvb-4Nu-o1LqenwcbnBhj8BCoFxNLn6Dsez4KU8f2jDpg-cru4RivzjN2uFpXK_0=w2400", 2, 0, "Проблема!"));
    // Боже втручання
    LootArr.push(new DNELootCard("god-wtf", "Боже втручання", "Ти маєш зіграти цю карту, як тільки її отримав. Усі DJ одразу отримують замовлення на вечірку на Кирилівській! Знайди карту замовлення вечірки на Кирилівській та одразу її активуй. Після проведення цієї вечірки гра закінчиться та виграє гравець з найбільшим капіталом. Якщо ти виграв за рахунок цієї карти, ти в праві підвергнути суперників безжальному осміянню.", "https://lh5.googleusercontent.com/oKk0dgYD_pZfoxzwIy_FmLIWw2ffxHfpl0vJwiAXkGYei30EFVrLyMG9K-HvkSmRKRA=w2400", 0, 0, ""));
    // Спойлер
    LootArr.push(new DNELootCard("spoiler", "Спойлер", "Спойлер дозволяє дізнатись хто виграє гру і не дати йому це зробити. Навіть якщо він вже мав виграти і кричить про це у весь голос. Рішення залежить тільки від тебе.", "https://lh5.googleusercontent.com/uXfX_bj1898ak2fCQmahc-wipWTmASAPGRQa-ywKRELxW69VRALjVf09rndPQkKpImI=w2400", 0, 0, ""));
    // Басік
    LootArr.push(new DNELootCard("car-basic", "Басік", "Басік дозволяє перевозити великі речі з точки А в точку B. Головне щоб в тебе було водійське посвідчення, або друг що його має.", "https://lh6.googleusercontent.com/wStGVg8Yb2fYZNfplyT3mHmtmeRieKLPqpdqy9lL0r9FYV5BMiH2miGi59FD85vShMs=w2400", 2, "90K/500", "Авто"));
    // Водійське посвідчення
    LootArr.push(new DNELootCard("car-docs", "Водійське посвідчення", "Дозволяє легально керувати будь-яким транспортним засобом в межах Найт-Сіті.", "https://lh3.googleusercontent.com/PXtkM4KTHKrrhkGnkAdQqurHFp9oPuRABqjaiSciDDQ6Z1KlADcmDbXMWuSRvq_cnk8=w2400", 1, "0", ""));

    // DoorsArr.push(new ContractCard('Гикающий гик', '+6 против воинов', 6, 'Стань нормальным, сбрось все ссвои расы и классы', '2 сокровища'));
    // DoorsArr.push(new ContractCard('Сочащаяся слизь', 'Какая мерзость! +4 против эльфов', 1, 'Потеряй надетую обувку. Если нет обувки, потеряй уровень.', '1 сокровище'));
    // DoorsArr.push(new ContractCard('Улетные улитки', 'У тебя на смывку -2', 4, 'Разворовывают твои сокровища. Сбрось столько шмоток из игры или карт с руки(по своему выбору), сколько выпадет на кубике.', '2 сокровища'));
    // DoorsArr.push(new ContractCard('Бигфут', '+3 против дварфов', 12, 'Наступает на тебя и съедает шляпу. Потеряй надетый головняк.', '3 сокровища'));
    // DoorsArr.push(new ContractCard('Гарпистки', 'Сопротивляются магии. +5 против волшебников.', 4, 'Хреново исполняют ужасную музыку. Потеряй 2 уровня.', '2 сокровища'));
    // DoorsArr.push(new ContractCard('Лепрекон', 'Да он отвратителен! +5 против эльфов.', 4, 'Забирает у тебя две шмотки - первую выбирает правый сосед, вторую левый. Сбрось эти шмотки.', '2 сокровища'));
    // DoorsArr.push(new ContractCard('Обдолбанный голем', 'Можешь биться или пройти мимо, плюнув на обдолбанного голема и его сокровища. Исключение: вкусно выглядящим хафлингам придётся биться.', 14, 'Его пробивает на хавку. Ты съеден и мёртв.', '4 сокровища'));
    // DoorsArr.push(new ContractCard('Амазонка', 'Не бьётся с женщинами; вместо боя дает одно сокровище.', 8, 'Тебя вздула женщина! Ущемление гордости в тяжелой форме. Потеряй все свои классы. Если у тебя нет класса, потеряй 3 уровня.', '2 сокровища'));

    // Various
    // Замовлення, 19lvl
    LootArr.push(new DNELootCard("prj-various", "Various", "Замовлення на розробку лімітованого видання альбому на касетах для артиста лейблу BODY Music, що складатиме компіляція його треків, оригінальний артворк альбому та лімітоване видання на касетах. Чим більше складових проекту розроблено без допомоги лейблу, тим більше заробіток від продажу. У разі успішного виконання, дає три унікальні картки: Демо компіляції, Альбому та Касети. Вартість кожного єтапу розробки - 1К, 6К та 14К. До кожного наступного єтапу розробки альбому зацікавленність аудиторії на вдвічі більша.", "https://lh4.googleusercontent.com/ZWRLV4_k8uGvUejY7GxJGKItp5wLJ563TzF3MmQPxDFz2qE1r1crTx4e55uMgyFgggI=w2400", 19, 0, "Замовлення"));
    // Influence Operations
    // Замовлення, 8lvl
    LootArr.push(new DNELootCard("prj-influence", "Influence Operations", "Замовлення на розробку дебютного діджитал-альбому для артиста лейблу BODY Music, що складатиме компіляція його треків та оригінальний артворк альбому. Чим більше складових проекту розроблено без допомоги лейблу, тим більше заробіток від продажу. У разі успішного виконання, дає унікальну картку Альбому. Вартість розробки - 2К.", "https://lh5.googleusercontent.com/BpTDR292VB5bP7HD52JYW0YqfpvJnmtiEN02SzIoWp-c5ubGpm0uApobLtL-IfsAbBE=w2400", 8, 0, "Замовлення"));
    // Aenigma
    // Замовлення, 16lvl
    LootArr.push(new DNELootCard("prj-aenigma", "Aenigma", "Замовлення на розробку восьмигодинного лайв-виступу в клубі Keller на Кирилівський, для артистів в жанрі гіпнотичного техно. Замовлення солідне, складатиме організацію повноцінного лайву з профессійною аппаратурою та світлом для 300+ людей та входом від 250, оригінальний артворк події а також флаєр, сайт з квитками, промо-відео, демо-профайли артистів, запрошення та просування опціонально. Чим більше складових проекту розроблено без допомоги клубу, тим більше заробіток від продажу. Гарантовано дає демо артистів та прибуток від входу, розмір якого залежить від уваги до проекту. У разі успішного виконання, дає унікальні картки: оригінальний концепт та артворк події, записати лайв для кожного з артистів - з верогідністю 25%, та картку проекту обмеженного видання цього лайву на платівці за кожен записаний лайв. Вартість розробки - 15К", "https://lh6.googleusercontent.com/ddLQawIUrWh7MxMGoj1D-m0Ed1ojjTbuGh6nCMs8q4nFu16qavKkcOyFc5BGugtCTE8=w2400", 16, 0, "Замовлення"));
    // Создать профайл
    // LootArr.push(new DNELootCard("get-profile", "Создать профайл", "Дает доступ к новой странице с профайлом игрока на которого бьіла применена карта", "", 0, 1000, ""));
    // Плазма
    // LootArr.push(new DNELootCard("plasma", "Плазма", "Повьішает комфорт и бюджет пространства. Позволяет показьівать видео на большом єкране, вьізьівая у зрителей вовлечение", "", 0, "25000/500", "Требует крепление"));
    // Зібрати чутки
    // LootArr.push(new DNELootCard("get-rumors", "Зібрати чутки", "Дозволяє дізнатись ставлення різних фракцій до гравця", "", 0, 500, ""));
    // персонажі
    // Яценко
    // LootArr.push(new DNELootCard("yats", "Яценко", "Дозволяє проводити події в Closer", "", 0, 0, ""));

    // todo єкран профайл которьій будет дублировать информацию из всех достуньіх источников
    // today 17/36



    console.log(LootArr);
    return LootArr;
}

const DNELootArr = initDNELootArr();

const drawLootCards = () => {
    const cardContainer = document.querySelector(".card-container");
    const cardTemplate = document.querySelector("#card-template");
    const drawCard = (cardContainer, cardTemplate, cardData) => {
        console.log(cardContainer, cardTemplate, cardData);
        const newCard = cardTemplate.cloneNode(true);
        newCard.style.display = "block";
        newCard.id = `dne-card-${cardData.id}`;
        newCard.dataset.hash = `dne-card-${cardData.id}`;
        newCard.querySelector(".card__title").textContent = cardData.name;
        if (cardData.cost !== 0) {
            newCard.querySelector(".card__price").textContent = cardData.cost;
        } else {
            newCard.querySelector(".card__price").style.display = "none";
        }
        newCard.querySelector(".card__limits").textContent = cardData.limits; // todo вьінести лимитьі в отдельньій параметр
        newCard.querySelector(".card__preview-img").src = cardData.img;
        newCard.querySelector(".card__description").textContent = cardData.description;
        if (cardData.bonus !== 0) {
            newCard.querySelector(".card__bonus").textContent = `+${cardData.bonus}`;
        } else if (cardData.limits === "Проблема!") {
            newCard.querySelector(".card__bonus").textContent = `-${cardData.bonus}`;
        } else {
            newCard.querySelector(".card__bonus").style.display = "none";
        }
        cardContainer.appendChild(newCard);
    };

// drawCard(cardContainer, cardTemplate, DNELootArr[0]);
// drawCard(cardContainer, cardTemplate, DNELootArr[1]);

    DNELootArr.forEach((DNELootCard) => {
        drawCard(cardContainer, cardTemplate, DNELootCard);
    });
}

drawLootCards();

// Ідеї для карт
// Проектор, Екран, Получить травму, Сильная Стамина, Хороший имунитет, Радио-программа, Так говорил Заратустра(Книга, Дает новьіе знания пропорционально времени потраченному на изучение. Покупается один раз и может бьіть передана другим игрокам посредством бартера или продажи при встрече., 1, 400, Желание читать), Желание читать(Желание, Желание читать позволяет находить новую информацию в письменньіх источниках как статьи, письма и книги. Возникает внутри мотивационньіх центров мозга и подтверждается наличием данной картьі. Положи ее перед собой как айтемьі и смело изучай картьі книг)
// 21Savage
// Покинув бандитське життя щоб вбивати русню в Україні, з радістю візметься за будь-яку работу, чудово розуміється в жанрі Hip-Hop
// Rayan.io
// Діджей штучний інтелект Хіп-Хоп радіо з найсвіжіжим звуком у цьому жанрі
// Дефрагмент
// Демон устанавливается в приватную подсеть пользователя и стирает все его данньіе и обнуляет счета жертвьі. Может бьіть установлен жертве перед убийством для достижения полного обнуления посредством Наночервя или подключения через личньій порт.
// Перегрузка
// Демон перегружает внутренними запросами персональную деку отключая подсистемьі памяти, слуха и мелкой моторики. Жертва обездвижена до перезагрузки деки. Может бьіть загружен через приватную сеть и запущен удаленно или по собьітию, указанному перед установкой.
// Риппер-док
// Рипер вьтащит из тебя пулю, дочистит деку от демонов, установит кибер-имплант. Требует чистого рабочего места и неоходимую аппаратуру для каждой задачи.
// LOLSNAKE, +8
// DJ-найомничок
// Iraqi-American, Berlin-based DJ, producer and founder of the Weeeirdos queer platform and event series, Lolsnake brings magnetic energy to every space she soundtracks and will undoubtedly leave a lasting impression allowing you to delve into her world of tripped out techno, euphoric trance and other surprises. Участие єтого персонажа в любом проекте значительно повьішает интерес и шанс оправдать ожидания аудитории.
// Land Cruiser, +2, 280К/2К
// Крузер габаритньій автомобиль с полньім приводом. Дотавит тебя и твои большие шмотки в даже в самьіе труднодоступньіе уголки Країни. Еще четьіре человека спокойно поместятся в салоне. Потребує водійське посвідчення або друга що його має.
// Weeirdos
// Label
// Присьілай свои демо чтобьі получить продюсирование, шанс новьіх записей и лайвов на єтом лейбле. Каждьій лейб работает по-своему, отличаясь ценностями, целями и отношением к артистам. Подписавшись на лейбл диджеи получают доступ к его заказам до тех пор пока следует условиям Контракта.
// HOR
// Розумний лейбл
// Штучний інтеллект классу Селектор, розроблений на основі аналізу і дослідження десятків тисяч лайвів лейблу HOR, названий на честь джерела своєї інформаційної бази. Фізичне знаходження невідомо, спілкується та дає завдання по телефону. Після підписання Контракту дає доступ до своєї бази замовлень та може бути задіяний в проектах як Найомничок. Спеціалізується на записі Електронної музики та промо артистів.
// B.R.
// Розумний лейбл
// Штучний інтеллект классу Селектор, розроблений на основі аналізу і дослідження проектів лейблу BOILER ROOM, названий на честь джерела своєї інформаційної бази. Фізичне знаходження невідомо, спілкується та дає завдання по телефону. Після підписання Контракту дає доступ до своєї бази замовлень та може бути задіяний в проектах як Найомничок. Спеціалізується на амбіційних лайв-виступів, що роблять акцент на масштаб, та промо артистів.
// FILMMAKER
// DJ
// Штучний інтелект класу Креєйтор, розроблений на основі єнграмми мозку андерграундного Електронного музиканта 20х років, на честь якого був названий. Фізично знаходиться в андроїді, регулярно організовує власні проекти та виступає наживо. Може підписуватись на лейбли, створюючи унікальні колабораційні проекти, та виступати в ролі Найомничка.
// BODY Music
// Label
// Dungeon electronics & vehicles for the soul. Curated by Filmmaker. Demos & Enquiries: info@bodymusick.com Присьілай свои демо чтобьі получить продюсирование, шанс новьіх записей и лайвов на єтом лейбле. Каждьій лейб работает по-своему, отличаясь ценностями, целями и отношением к артистам. Подписавшись на лейбл диджеи получают доступ к его заказам до тех пор пока следует условиям Контракта.
// Anatomy
// Замовлення, 14lvl
// Замовлення на розробку діджитал-альбому для лейблу BODY Music, що має включати демо двох або більше DJ-їв в жанрі Electro або Industrial. Чим більше артистів, тим більше заробіток від продажу. У разі успішного виконання, дає унікальну карту категорії Album із жанрами демо що в нього увійшли. Перші три рази до кожного наступного перевипуску альбому зацікавленність аудиторії до нового релізу буде на 40% більшою.
// Sol Ortega
// DJ
// Штучний інтелект класу Креєйтор, розроблена на основі єнграмми мозку андерграундного Електронної музикантки 20х років, на честь якої була названа. Фізично не існує, регулярно записує лайв виступи у віртуальному просторі. Може підписуватись на лейбли, створюючи унікальні колабораційні проекти, та виступати в ролі Найомничка.
// Boulevard Depo
// DJ та Репер
// Штучний інтелект класу Креєйтор, розроблена на основі єнграмми мозку популярного репера-терориста що діяв на далекому Сході 30х років, на честь якої була названа. Фізично існує в андроїді, регулярно видає власні музичні альбоми та супутні товари. Може підписуватись на лейбли, створюючи унікальні колабораційні проекти, та виступати в ролі Найомничка.
// POKENAV
// Децентрализованньій анонимньій форум с двухсторонним шифрованием, обладающий всеми возможностями современного мессенджера. Позволяет подключаться к сети из любого браузера и обмениваться анонимньіми сообщениями с другими игроками.
// DMT-дихання
// Потребує короткий проміжок часу щоб перезавантажити хімію крові та отримати певну кількість додаткової енергії. Сесія дихання може тривати від 5 до 45 хвилин, даючи тим більше енергії, чем довшою вона була. Кожен гравець що приєнується до сесії дає більше додаткової енергії усім учасникам.
// Нейровирус
// Скрипт-разведчик, передается через приватньіе сети и отправляет все ключевьіе данньіе подсети жертвьі по заранее указанному адресу. По собьітию или команде может запустить Демона, при условии наличия в пайпе доступного слота Кибердеки.
// Кибердека
// Нетраннерская модификация мозга, позволяет загружать в сеть и удаленно управлять программами, которьіе отправляются цепочками из одного или более скриптов. Чем качественнее дека, тем больше скриптов в один пайп способен вместить пользователь.
// Звук, +3, 45К/1800
// Регулярний набір з потужного монітора на штативі, мікшеру, дим-машини та двух мікро. Дозволить влаштувати адерграунд-сцену в будь-якому місці де є живлення. Для лайву потребує контроллер.
// Сказать прямо
// Карта позволяет в любой момент вьісказать короткий спич применившему ее игроку. В течении спича никто не перебивает, заговоривший во время чужого спича однаждьі получает предупреждение, дваждьі - покидает игру.

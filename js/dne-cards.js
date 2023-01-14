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
    DoorArr.push(new DNEDoorCard("prj-mriya", "М Р І Я", "Розробка 6-ти годинного івенту, що складатиме лайв виступи підбірки артистів. Чим більше організаційних питань вирішено без допомоги клубу, тим більше заробіток від продажу. У разі успішного виконання, картку замовлення можна залишити собі і використати знову.", "https://lh4.googleusercontent.com/TmXLWrqcgvg_YxmSARONzYNXFjJJWLB2fb5fI1ZeAyfO75uBnkaQkQFn4x3POUs7W5o=w2400", 8, "15К", "Otel`", "DJ Охороничок Фейс* Бармен*", "Усі витрати на організаторі, якщо івент зібрав менше 50% від бюджету, карта скидається", "30K", "Вхід, Бар, Онлайн-каса"));
    // Замовлення, 13lvl
    DoorArr.push(new DNEDoorCard("prj-weedian-greece", "Trip to Greece", "Замовлення на розробку діджитал-альбому культового артиста жанру Stoner Rock спеціально для B.R., що складатиме мастеринг його матеріалу з туру до Греції, фінальний запис у студії на живих інструментах та оригінальний артворк для обкладинки. <br>Чим більше складових проекту розроблено без допомоги лейблу, тим більше заробіток від продажу. Картка може бути використана повторно, кожного разу потребуючи новий бюджет та даючи новий прибуток.", "https://lh3.googleusercontent.com/Z1-pnBGEl5eqzNZcowO-6Ar0YSuA_7iujHC4t6Zs-j3wd_BM5rUajXT4gpg9hzK7rI8=w2400", 18, "5К", "B.R.", "DJ, Filmmaker*", "B.R. має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "4K/10K/30K", "Платіж"));
    // Influence Operations
    // Замовлення, 8lvl
    DoorArr.push(new DNEDoorCard("prj-influence", "Influence Operations", "Замовлення на розробку дебютного діджитал-альбому для артиста лейблу BODY Music, що складатиме мастеринг альбому та продаж в дві хвилі. <br> Картка може бути використана повторно, кожного разу потребуючи новий бюджет та даючи новий прибуток. Вартість запуску кожної нової хвилі - 50К, 70К, 90K.", "https://lh5.googleusercontent.com/BpTDR292VB5bP7HD52JYW0YqfpvJnmtiEN02SzIoWp-c5ubGpm0uApobLtL-IfsAbBE=w2400", 4, "2K", "BODY Music", "DJ, Filmmaker*", "BODY Music має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "4K/7K", "Платіж"));
    // Various
    // Замовлення, 19lvl
    DoorArr.push(new DNEDoorCard("prj-various", "Various", "Розробка видання альбому на касетах, що складатиме компіляція треків артиста, оригінальний артворк альбому та лімітоване видання на касетах. <br>Чим більше складових проекту розроблено без допомоги лейблу, тим більше заробіток від продажу. Картка може бути використана повторно, кожного разу потребуючи новий бюджет та даючи новий прибуток. Вартість кожного єтапу розробки - 1К, 6К та 14К. До кожного наступного єтапу розробки альбому зацікавленність аудиторії на вдвічі більша.", "https://lh4.googleusercontent.com/ZWRLV4_k8uGvUejY7GxJGKItp5wLJ563TzF3MmQPxDFz2qE1r1crTx4e55uMgyFgggI=w2400", 19, "21К", "BODY Music", "DJ, Filmmaker*", "BODY Music має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "2К/10К/42K", "Платіж"));
    // Aenigma
    // Замовлення, 16lvl
    DoorArr.push(new DNEDoorCard("prj-aenigma", "Aenigma", "Замовлення на розробку восьмигодинного лайв-виступу в клубі Keller на Кирилівський, для артистів в жанрі гіпнотичного техно.<br> Замовлення солідне, складатиме організацію повноцінного лайву з профессійною аппаратурою та світлом для 300+ людей та входом від 250, оригінальний артворк події а також флаєр, сайт з квитками, промо-відео, демо-профайли артистів, запрошення та просування опціонально. <br>Чим більше складових проекту розроблено без допомоги клубу, тим більше заробіток від продажу. Гарантовано дає демо артистів та прибуток від входу, розмір якого залежить від уваги до проекту. У разі успішного виконання, дає високий прибуток з різноманітного спектру джерел. Можливість записати лайв та демо для кожного з артистів та з верогідністю 25% отримати замовлення на запис у студії від кожного з них. Картка може бути використана повторно, кожного разу потребуючи новий бюджет та даючи новий прибуток. Вартість розробки кожного этапу - 15К, 25К, 40К", "https://lh6.googleusercontent.com/ddLQawIUrWh7MxMGoj1D-m0Ed1ojjTbuGh6nCMs8q4nFu16qavKkcOyFc5BGugtCTE8=w2400", 28, "80К", "Keller", "DJ, Охороничок, Фейс*, Бармен*, Сапортики*, Татуер*, Райтер*, Filmmaker*", "Усі витрати на організаторі, якщо івент зібрав менше 50% від бюджету, карта скидається", "20К/50К/120K", "Бар, Вхід, Онлайн-каса, Мерч, Кухня"));

    // Замовлення, 19lvl
    DoorArr.push(new DNEDoorCard("prj-vinyl-love-market", "LOVE MARKET", "Розробка лімітованого видання альбому на вінілі. Дає єдиночасну виплату одразу після затвердження лейблом, унікальну картку платівки та право на роялті.<br> Підвищує множитель по жанру для цього альбому до 100%", "https://lh3.googleusercontent.com/IXOuUL6ZhG1a2RRJIP9h-6AejjfwVBIJAHOm6X0VJAwUUxnJGRbps-YX4WDCOFbKWTY=w2400", 29, "50К", "BODY Music", "DJ, Продавець, Filmmaker*", "BODY Music має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "90К/100К/180K<sup>+1K</sup>", "Платіж та роялті"));
    // Замовлення, 19lvl
    DoorArr.push(new DNEDoorCard("prj-vinyl-reinvent", "REINVENT", "Розробка лімітованого видання альбому на вінілі в дві хвилі продажів. Дає єдиночасну виплату після кожної хвилі продажів, унікальну картку платівки та право на роялті.<br> Підвищує множитель по жанру для цього альбому до 100%", "https://lh6.googleusercontent.com/KsopzyO244fv6F6DYLNhHQeLVSPh7uu_Odpu2eFOhElDjB4M96UflzZl28elG4YmL0o=w2400", 9, "10K", "BODY Music", "DJ, Продавець, Filmmaker*", "BODY Music має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "30К/70K<sup>+1K</sup>", "Платіж та роялті"));
    DoorArr.push(new DNEDoorCard("prj-vinyl-vlad-tapes", "VLAD TAPES", "Розробка лімітованого видання альбому на вінілі в три хвилі продажів. Дає єдиночасну виплату після кожної хвилі продажів, унікальну картку платівки та право на роялті.<br> Підвищує множитель по жанру для цього альбому до 100%", "https://lh5.googleusercontent.com/TK4C77xn6pXtigKWguyAkXr7Bv870d8RnVPu4S0ES97c1bvxT_lirN5SWO3v7UxNzOc=w2400", 12, "20K", "BODY Music", "DJ, Продавець, Filmmaker*", "BODY Music має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "30К/50К/70K<sup>+1K</sup>", "Платіж та роялті"));
    DoorArr.push(new DNEDoorCard("prj-vinyl-various-i", "VARIOUS I", "Розробка лімітованого видання альбому на вінілі в два этапи та три хвилі продажів. Дає єдиночасну виплату після кожної хвилі продажів, унікальну картку платівки та право на роялті.<br> Підвищує множитель по жанру для цього альбому до 100%. Вартість кожного этапу розробки 20К та 40К", "https://lh5.googleusercontent.com/5hLta786kJhFTBQJjkPqKc2CTbh2GiQuntiAnGmcLFBWK0XFYLa8sku3YMAvowk02L4=w2400", 22, "60K", "BODY Music", "DJ, Продавець, Filmmaker*", "BODY Music має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "50К/70К/100K<sup>+1K</sup>", "Платіж та роялті"));
    DoorArr.push(new DNEDoorCard("prj-vinyl-nocturnal", "NOCTURNAL", "Розробка лімітованого видання альбому на вінілі в дві хвилі продажів. Дає єдиночасну виплату після кожної хвилі продажів, унікальну картку платівки та право на роялті.<br> Підвищує множитель по жанру для цього альбому до 100%.", "https://lh3.googleusercontent.com/H4C_Qg_PGYfxghE7AcKFZcj3UOBOkMwJOCrrkVskIQFLJ2gFrJec_yacUOcGmfMGY1o=w2400", 18, "28K", "BODY Music", "DJ, Продавець, Filmmaker*", "BODY Music має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "50К/70К<sup>+1K</sup>", "Платіж та роялті"));

    // DoorsArr.push(new ContractCard('Гикающий гик', '+6 против воинов', 6, 'Стань нормальным, сбрось все ссвои расы и классы', '2 сокровища'));
    // DoorsArr.push(new ContractCard('Сочащаяся слизь', 'Какая мерзость! +4 против эльфов', 1, 'Потеряй надетую обувку. Если нет обувки, потеряй уровень.', '1 сокровище'));
    // DoorsArr.push(new ContractCard('Улетные улитки', 'У тебя на смывку -2', 4, 'Разворовывают твои сокровища. Сбрось столько шмоток из игры или карт с руки(по своему выбору), сколько выпадет на кубике.', '2 сокровища'));
    // DoorsArr.push(new ContractCard('Бигфут', '+3 против дварфов', 12, 'Наступает на тебя и съедает шляпу. Потеряй надетый головняк.', '3 сокровища'));
    // DoorsArr.push(new ContractCard('Гарпистки', 'Сопротивляются магии. +5 против волшебников.', 4, 'Хреново исполняют ужасную музыку. Потеряй 2 уровня.', '2 сокровища'));
    // DoorsArr.push(new ContractCard('Лепрекон', 'Да он отвратителен! +5 против эльфов.', 4, 'Забирает у тебя две шмотки - первую выбирает правый сосед, вторую левый. Сбрось эти шмотки.', '2 сокровища'));
    // DoorsArr.push(new ContractCard('Обдолбанный голем', 'Можешь биться или пройти мимо, плюнув на обдолбанного голема и его сокровища. Исключение: вкусно выглядящим хафлингам придётся биться.', 14, 'Его пробивает на хавку. Ты съеден и мёртв.', '4 сокровища'));
    // DoorsArr.push(new ContractCard('Амазонка', 'Не бьётся с женщинами; вместо боя дает одно сокровище.', 8, 'Тебя вздула женщина! Ущемление гордости в тяжелой форме. Потеряй все свои классы. Если у тебя нет класса, потеряй 3 уровня.', '2 сокровища'));

    console.log(DoorArr);
    return DoorArr;
}

const DNEDoorArr = initDNEDoorArr();

const drawDoorCards = (cardData, specialContainer = "") => {
    const cardContainer = document.querySelector(`.card-container`);
    const cardTemplate = document.querySelector("#door-card-template");

    const drawCard = (cardContainer, cardTemplate, cardData) => {
        const ID = `dne-card-${cardData.id}`;
        console.log(ID, `#${ID}`, cardContainer, cardTemplate, cardData);
        const newCard = cardTemplate.cloneNode(true);
        newCard.style.display = "block";
        newCard.id = ID;
        new Swiper(`#${ID}`, {
            effect: "flip",
            grabCursor: true,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        newCard.querySelector(".card__title").textContent = cardData.name;
        newCard.querySelector(".js.card__id").textContent = `#${cardData.id}`;
        if (cardData.budget !== 0) {
            newCard.querySelector(".card__budget").textContent = `${cardData.budget}`;
        } else {
            newCard.querySelector(".card__budget").style.display = "none";
        }
        newCard.querySelector(".card__profit").innerHTML = `${cardData.profit}`;
        newCard.querySelector(".card__roles").textContent = `${cardData.roles}.`;
        newCard.querySelector(".card__origins").textContent = `${cardData.profitOrigins}.`;
        newCard.querySelector(".card__limits").textContent = `Замовлення від ${cardData.client}`;
        newCard.querySelector(".card__preview-img").src = cardData.img;
        newCard.querySelector(".card__description").innerHTML = `${cardData.description}`;
        newCard.querySelector(".card__penalty").textContent = `${cardData.penalty}`;
        newCard.querySelector(".card__bonus").textContent = `${cardData.level}`;
        console.log(cardContainer, `${specialContainer} .card-container`);
        cardContainer.appendChild(newCard);
    };

    cardData.forEach((DNEDoorCard) => {
        drawCard(cardContainer, cardTemplate, DNEDoorCard);
    });
}



const initDNELootArr = () => {
    const LootArr = [];

    LootArr.push(new DNELootCard("support", "Найомничок", "Можеш застосувати на нього ще один клас та дати йому одну шмотку. Якщо втрачаєш Найомничка, клас до тебе повертається, та шмотку втрачаєш із ним. Можеш підставити Найомничка щоб піти від відповідальності за провальний івент. Тримай Найомничка перед собой поряд с іншими айтемами.", "https://lh4.googleusercontent.com/SMs5epImEfomWNvE5FJFJgtvVK3inDgX5oGiaQmwvORuLEMhIkBFn6qaUgMDN216x8U=w2400", 1, 0, ""));
    LootArr.push(new DNELootCard("ddj400", "DDJ-400", "Дозволяє зводити дві стежки, задовольняючи потреби 80% аудиторії будь-якого івенту.", "https://lh3.googleusercontent.com/0FZHsm4sbeaFrstYVngi54Th4WRf2ZnGpz_4hUnuaOwMDfDfld2QfzwRRbgFgQciVlk=w2400", 2, "16К/400", "Бонус для DJ-їв"));
    LootArr.push(new DNELootCard("djflx6", "DJ-FLX6", "Дозволяє зводити чотири стежки, задовольняючи потреби 100% аудиторії та підвищуючи задоволення діджеїв від івенту до високого рівня. З ним починаючі артисти готові грати безкоштовно", "https://lh4.googleusercontent.com/KV3fJtCjjs85CosfaTKUf_9px7PL119Gm60ImACWyKEcZr47izhkTZoSXkeTodhBv0Q=w2400", 4, "36К/700", "Бонус для DJ-їв"));
    // GOPRO
    LootArr.push(new DNELootCard("i-gopro", "GOPRO", "Дозволяє знімати широкоформатне відео з високою кількістю кадрів на секунду. З відповідними аксесуарами доступне відео від першого лиця, відео з руки та корпусу", "https://lh5.googleusercontent.com/1k2kOk7TOG2p0UjrV6WXnhOnzBtXJUoEMv9XPE-wejGTYDcIU-PkaGZmAeMeXuS08YU=w2400", 2, "20К/500", "Бонус для Filmmaker"));
    // CASE
    LootArr.push(new DNELootCard("i-case", "Кейс", "Дозволяє сховати будь-яку кількість предметів загальною площею 21х30х10см, доступ до яких можна отримати лише маючи предмет ключа до цього кейсу", "https://lh4.googleusercontent.com/ljebY0Mn9_I269WR0_ZlZy4ZU0gbsqZZ0leThMfSmQLn0psfl_wle8F1PZ78JOl2qAc=w2400", 1, "1К", ""));
    // CASE KEY
    // LootArr.push(new DNELootCard("i-case-key", "Ключ до кейсу", "Дозволяє отримати доступ до предметів у Кейсі", "https://lh3.googleusercontent.com/JppmmdWBUa0cYPA3LgPLsN2KEvuQTUNuaQkg_lR7ZK-C1YRFiLVSvfda2KOyIbHI1Mo=w2400", 0, 0, ""));
    LootArr.push(new DNELootCard("i-fishyey", "Око риби", "Дозволяє знімати надширокоформатне відео з середньою роздільною здатністю та середнім фпс", "https://lh4.googleusercontent.com/q6kgHPE-JmWkcHsVXc0Gm_XEV98LUQODkdlxKSPSkuqkNeYXCVA1y2FAY_3s_bJg5oc=w2400", 1, "5К", "Бонус для Filmmaker"));
    LootArr.push(new DNELootCard("i-canon", "Професійний фотоапарат", "Дозволяє робити високоякісні цифрові знімки, що можуть бути корисними в різних обставинах. Дозволяє підвищити популярність гравця, привабливість товару. Шанс 5% отримати унікальний знімок міфічної рідкості, цінність та роялті визначає автор", "https://lh3.googleusercontent.com/nP83qKzVByeQIgVJLh4uVr-rZ7l-myqfawvze-rAd2bLgvmNl2aLGF7D_zhWk4s9Ajg=w2400", 2, "70К/500", "Бонус для Фотографа"));
    LootArr.push(new DNELootCard("i-starlink", "Роутер", "Дает закрьітьій доступ к скоростному интернету до 100мб/с для не менее 5-ти дейвайсов одновременно. Проектьі в пространствах с вай-фаем получают + или - к оправданньім ожиданиям аудитории в зависимости от концепта", "https://lh6.googleusercontent.com/EaDvW4MyDuSjXM5KCWYiyW3TVOMfs35gw7beKLK0elTrJGE7VnMeTWjS8M_0zsOWbfk=w2400", "1", 1200, ""));
    LootArr.push(new DNELootCard("i-squizer", "Сквізер", "Дає можливість залишити послання невеличкого розміру", "https://lh5.googleusercontent.com/XaXThgj9KO7oFMa_JAFJx9PcMSj3o_FkpCIdeAZyynPGY3E8vhOiOc_C7q951ePTHs0=w2400", "1", 200, "Бонус для Райтера"));
    LootArr.push(new DNELootCard("i-shwabra", "Швабра", "Дає можливість залишити послання великого розміру", "https://lh3.googleusercontent.com/lQP_8BMVMOuETxH4z16PjtG7P7O3xhGfVAM4MqkKLzfP8bIWdiQwmy9c5vZddHzEw7c=w2400", "2", 400, "Бонус для Райтера"));
    LootArr.push(new DNELootCard("i-pizza", "Піца", "Можливість насолодитися смачнющою Тоні Пепероні з Домінос в компанії друзів просто зараз. Єфект подвоюється якщо разом з нею Підірвати косяка", "https://lh5.googleusercontent.com/0ydgCI9fvxKBC5fQrmBDRRhOuAlzcyPCJekU-7NsBmHaqlG1DnzjR3MSZ3RNcVqKPdQ=w2400", "2", 420, ""));
    LootArr.push(new DNELootCard("i-regular-sound", "Потужний звук", "Професійний сет звукового обладнання потужністю в 600вт, в який входить: монітор, мікшер Yamaha, два безпровідні мікро, дим машина, штатив та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може розкачати натовп до 50 людей, чудово підходить для невеликих приміщень.", "https://lh3.googleusercontent.com/zSIxmWk_sBxfUJH9MDJaOpa1VMjdTuHSS-AXw-C1tTURrS_coBvFOY4VpFF3XF1oCvE=w2400", "6", "40К/1800", ""));
    LootArr.push(new DNELootCard("i-vinyl-sound", "Потужний вініловий звук", "Професійний сет звукового обладнання потужністю в 600вт, в який входить: два монітори, мікшер та два вінілові програвачі, дим машина, штатив та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може підтримувати в тонусі або розкачати натовп до 100 людей, чудово підходить для невеликих та середніх приміщень.", "https://lh4.googleusercontent.com/kRz3BiDfIYHwBYj1Rr_jae4H1MxOXKsQ8IXu8e1E9ardUxIL3goX42y7cTThQGHcZyE=w2400", "7", "60К/2800", ""));
    LootArr.push(new DNELootCard("i-powerful-sound", "Надпотужний звук", "Професійний сет звукового обладнання потужністю в 1200вт, в який входить: два монітори, мікшер Yamaha, два безпровідні мікро, дим машина, штатив та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може розкачати натовп до 200 людей, чудово підходить для невеликих та середіх приміщень. В житлових зонах на таке обладнання можуть скаржитись сусіди.", "https://lh5.googleusercontent.com/ikLJs1LtUQRgNei8RBjBvT_CMR8kM8YpiRSdrilyIL6N6CKTM5wzW24q4MRz3S9DEGQ=w2400", "10", "70К/3200", "Тільки для DJ"));
    LootArr.push(new DNELootCard("i-spaceful-sound", "Просторий звук", "Професійний сет звукового обладнання потужністю в 2000вт, спецільно для якісного наповнення звуком просторих приміщень в який входить: п'ять моніторів, мікшер Yamaha, два безпровідні мікро, дві потужні дим машини, штативи та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може розкачати натовп до 300 людей, чудово підходить для середіх та великих приміщень.", "https://lh4.googleusercontent.com/PgwB0JeWhLsKU4KtxkCantInRPu6B9cx6OVvCJbr9zKw7NOL9_Qs-D3iiIp72__QBVU=w2400", "16", "270К/5800", "Тільки для DJ"));
    LootArr.push(new DNELootCard("i-gamer-sound", "Стрімерський звук", "Професійний сет звукового обладнання потужністю в 400вт, в який входить: два монітори, один вініловий програвач, касетний плеєр, мікшер Yamaha, два бездротові мікро, дим машина, штатив та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може розкачати натовп до 40 людей та підтримувати його в тонусі, чудово підходить для невеликих приміщень. Завдяки звукоізоляціі навіть в житлових зонах на таке обладнання не буде скарг від сусідів.", "https://lh3.googleusercontent.com/cRVIaT5RkZiuYTlpQXRqJVzdZg1HFBYpEi-WiQyVgi_CqS5ydcVr0t9GljmyJ2N6XMo=w2400", "8", "120К/3400", ""));
    LootArr.push(new DNELootCard("i-silent-sound", "Ізольований b2b звук", "Професійний сет звукового обладнання потужністю в 900вт, в який входить: два монітори, мікшер Yamaha, два підвішені мікро, дим машина, штатив та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може розкачати натовп до 100 людей, чудово підходить для невеликих та середіх приміщень. Спеціальзується на одночасному записі, може вмістити до 4х артистів. Завдяки звукоізоляціі навіть в житлових зонах на таке обладнання не буде скарг від сусідів.", "https://lh4.googleusercontent.com/l6lpA8YVQLDObWm_ZJmv0QDxTa45w1X8mTAgdl4G7EhPvf2zPMCn4SysHbg-GEeqwm0=w2400", "9", "90К/2800", ""));
    LootArr.push(new DNELootCard("i-legacy-sound", "Професійний звук минулого", "Раритетний сет звукового обладнання потужністю в 300вт, в який входить: монітор, мікшер, касетний програвач та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може розкачати невеличкий натовп до 80 людей, дає широкі можливості для своєї вартості.", "https://lh5.googleusercontent.com/p63-RSBO5TxBjDjWZIbMJ-U-nr1bOKCIefdIbYj_OBR2PycPyoSeuD_LvwOnAibyCk8=w2400", "4", "15К/400", ""));
    LootArr.push(new DNELootCard("i-fathers-sound", "Батьків звук", "Раритетний сет звукового обладнання потужністю в 200вт, в який входить: монітор, мікшер та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може розкачати невеличкий натовп до 30 людей, дає широкі можливості для своєї вартості.", "https://lh3.googleusercontent.com/v2R3CPQL-GvaR4XGIPQa6MumoK02LiwWSF45vvL5etQfcEX4qSPQa6OAA04fyWEpIpE=w2400", "3", "2К/300", ""));
    LootArr.push(new DNELootCard("i-bunny-sound", "Преміум звук", "Професійний сет домашнього звукового обладнання преміального классу потужністю в 500вт, в який входить: два монітор, мікшер, дим машина та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може підтримувати в тонусі невелике приміщення людей до 30 осіб. Чудово підходить для середніх частот в невеличкому просторі затишних приміщеннь.", "https://lh6.googleusercontent.com/8fTLZWHk-ttKuc5cug7UfnzEfUj19MQJHHns_s1hV-Hkvl96PtkFydoA_bq7bNpVU3M=w2400", "5", "80К/1200", ""));
    // LootArr.push(new DNELootCard("i-from-paris-wl", "Ваза кокаїну", "Так, це зовсім незаконно. Цю картку можна просто скинути.<br><br> А можна і залишити)", "https://lh4.googleusercontent.com/3EXp5XTiFmNzh17E373Q5eRFptHUJYDzeGaIRMhG07HXXJynWKqbrqZgVzSVKdyqhco=w2400", "13", "800K", "Шериф цим зацікавиться"));
    // LootArr.push(new DNELootCard("i-from-kherson-wl", "Центнер бошок", "Боже правий", "https://lh6.googleusercontent.com/p-HwPSacUlld8yDTA-4yajUhEsUznscnT7M5xfsA1e7K1JpEMGs9vrHr0eT1SpiBqDk=w2400", "25", "5КK", "Шериф цим серйозно зацікавиться"));
    // LootArr.push(new DNELootCard("i-censored-mod", "На любое дерьмо", "Дає можливість отримати легендарні карти неймовірної сили та цінності. Їх використання може призвести до будь-яких наслідків, давай собі в цьому розуміння, якщо наважишся це робити.", "https://lh6.googleusercontent.com/p-HwPSacUlld8yDTA-4yajUhEsUznscnT7M5xfsA1e7K1JpEMGs9vrHr0eT1SpiBqDk=w2400", 0, 0, "Мод"));
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
    LootArr.push(new DNELootCard("class-dj", "DJ", "Поставить музику. На протязі гри може ставити музику. Якщо кожен гравець її похвалить, спробує записати Демо, щоб потім ставити його на вечірках, продавати як Альбом в інтернеті і можливо колись навіть записати його на вінілі.<br> Якщо кожен гравець визнає що музика не та, той хто її ставив втрачає цей клас.", "https://lh5.googleusercontent.com/i6Sfz0bcn1Q6HQsSqQhV1QMtCq7pyETASnCXsyswzh7NAZ2iOVdAyQoncZ8mE23BBW8=w2400", 1, 0, "Клас"));
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
    LootArr.push(new DNELootCard("v", "V", "Так, поклич цього хлопця, що може піти не так?)", "https://lh6.googleusercontent.com/TGoJYG0KoqQ1oSf45SIKkFmp_6skZRJ9pmmR1vEWo6_xyFoHuCqZWI01Pi58MzRBKgg=w2400", 5, 0, "Найомничок"));
    // Кільце влади
    LootArr.push(new DNELootCard("power-ring", "Кільце влади", "Посилює найсильніші якості носителя, покращуючи їх до максимуму відносно обставин. Кільця влади можуть бути різної форми та рівнів могутності, залежно від майстра що його викував, рідкості матеріалу та каменю. З часом використання пробуджує темні сторони особистості носія та поступово підкоря його власній волі. Кільце влади завжди вірне лише своєму творцю, завжди прагне до нього і чим більше наближається, тим могутнішим стає.", "https://lh4.googleusercontent.com/dWwMABhNjnvI-OOzxZDgmEqELhIfSJ25Ru8fR0hflXz1Ufd3Tr-jXDtZKTKVQ3dIxzk=w2400", 4, 0, "Драгоцінність"));
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
    LootArr.push(new DNELootCard("know-better", "Блиснути знаннями", "Блиснути знаннями правил може кожен гравець з цією картою. Як він сказав, так і буде. Будь-який івент отримує + або - 5 до виправданих очікувань аудиторії. Одноразовий айтем.", "https://lh6.googleusercontent.com/Z0_oh_v-ThuF_YQuzYLLB9k_T35I7yk5FE7fvfuBuohUFzfekFju4thMuw-C2Dny-rk=w2400", 5, 4000, "Дія"));
    // Записати сет
    LootArr.push(new DNELootCard("make-kabanchik", "Рванути кабанчиком", "Дає можливість терміново привезти великі речі з точки А в точку B. Одноразова карта, після використання скинь.", "https://lh3.googleusercontent.com/D3lF7EoLNhW0st7HHOxKHe_NFPBXk2X0WB-ZZ2rE1Qh1uoDmFdZu6-_-4a_8NVmnGoY=w2400", 1, 400, "Дія"));
    LootArr.push(new DNELootCard("make-zaychickom", "Злітати зайцем", "Дає можливість терміново привезти айтем в одну руку, що не є великим, з точки А в точку B. Одноразова карта, після використання скинь.", "https://lh5.googleusercontent.com/GRSCU2MwtGB_MFC8rBA8TH-DAM43J5xUobuYvehwwAH8y4fMMvHZ9XpYtfITfrnz3vM=w2400", 1, 700, "Дія"));
    LootArr.push(new DNELootCard("make-after-transfer", "Афтер трансфер", "Розвезе всіх гостей по домівках після закінчення вечірки. Повір, вони будуть тобі за це вдячні.", "https://lh6.googleusercontent.com/kb4mpV8o6NAM_5ydJRplk8wgXmPpx8Bdt2NPzxfDFYVRRVEjafmgFvWBVdkC3zAXL8g=w2400", 3, 2500, "Дія"));
    LootArr.push(new DNELootCard("make-french-exit", "Піти по-французьки", "Гравець що використав цю карту, дістає вогнепальну зброю и робить постріл у голову гравця, в адресу якого була використана карта.<br><br> Все, цей гравець мертвий, куля в голову як не як.<br><br> А ти що думав з тобою тут хтось сюсюкатись буде?", "https://lh3.googleusercontent.com/VVGoBbf0sATIkcowuVZuAuJrkjF0C6ZKr2bY43f_f4U4B9Hk9au3Q90d9mGiIZDhKso=w2400", 0, 0, "Дія"));
    // Платівка IGOR
    LootArr.push(new DNELootCard("vinyl-igor", "IGOR", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/heEq3Fh5UX0YwXs-Y52x6v7ZBdprdaS1y7NLrK6zgBy4_CGaFDc75WlCzSvVQkdQD_w=w2400", 3, 900, "Платівка, 39m of Hip-Hop"));
    // Платівка Nevermind
    LootArr.push(new DNELootCard("vinyl-nevermind", "Nevermind", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh4.googleusercontent.com/XO_xR7duHH-sgm71C8g6W20J5U3FCZdpSy75Hkx1NYulHQhUvzN7V8Z2AKmu6u8YTwQ=w2400", 3, 1000, "Платівка, 49m of Гранж"));
    // Платівка Mordechai
    // todo підрізати картинку
    LootArr.push(new DNELootCard("vinyl-mordechai", "Mordechai", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh6.googleusercontent.com/jXRGpz3OqpBw3bJOgQFF37mUPomYJLzrQs-b7xGyNss3nPldWx4FMy3eetJA26lrhGI=w2400", 3, 1100, "Платівка, 43m of Indie"));
    // Платівка Half Age
    LootArr.push(new DNELootCard("vinyl-half-age", "Half Age", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/FvFHXjLdWHPi6YD-Sf3blgvACFkPvXWkMfk7M5ig0VwOY_DvyTAPiAng97vzvUboi6g=w2400", 5, 2800, "Платівка, 36m of Minimal Electronic Synth-pop"));
    // Альбом NOCTURNAL
    LootArr.push(new DNELootCard("album-nocturnal", "NOCTURNAL", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/Ptll0Y5YHiOav4t10WasQeX7jXMF9oaWB4kKM8gyyC4kzYGABC8Oy3c3zJeLasmQ2gk=w2400", 2, 300, "Альбом, 37m of Industrial Synthpunk"));
    // Альбом LOVE MARKET
    LootArr.push(new DNELootCard("album-love-market", "LOVE MARKET", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/QavzJ5EDbmtiCCgTz_odOe8FEN8_KaU2mrVj8vCznlUQDiycL9_UKpLTUKSNeFL5VZM=w2400", 2, 300, "Альбом, 34m of Synthpunk OldSchool Techno"));
    LootArr.push(new DNELootCard("album-various-i", "VARIOUS I", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh6.googleusercontent.com/jslDr5gZF13pcyCQkYqS0VkCvkZk1gxwo6QC932fsv6umzMu4ybxzuFcNPZcc598NdE=w2400", 2, 400, "Альбом, 44m of Coldwave Synthpunk"));
    LootArr.push(new DNELootCard("album-vlad-tapes", "VLAD TAPES", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/2RKvslgebe6RIgM66NUUI7AYquTfEmHi9FeTop_TX1WOuEeWP7kam-OoBJlyhn3hyuM=w2400", 3, 400, "Альбом, 94m of Coldwave Synthpunk Techno"));
    LootArr.push(new DNELootCard("album-latent-alters", "LATENT ALTERS", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/GGMAazaL4Dt-dnG-Lj_DOZHuv-pK46rycToWRLNSzRXPN6aPkUBTJy6gBBaeveENxko=w2400", 3, 500, "Альбом, 99m of  Darkwave Downtempo Minimal Synth"));
    LootArr.push(new DNELootCard("album-reinvent", "REINVENT", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/GnGZSFdgASnC0N3Q88Rlx1ESg6mvfyrkeiUPZJCw9LC1MD-RLK7KraBeMrWZIzoCaEQ=w2400", 2, 400, "Альбом, 25m of EBM Industrial Synthpunk"));
    LootArr.push(new DNELootCard("album-motion-regime", "MOTION PICTURES REGIME", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/JhJBlkcN3Cf9KPLhA30mnHXCkPHi6blltsHQkVMbm82UDu7UCcK9q0sEmOvxeL5GA04=w2400", 3, 700, "Альбом, 42m of Electronic Breakbeat"));
    // Демо Autonomous aka Slam
    LootArr.push(new DNELootCard("demo-tweeman", "TWEEMAN", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі навіть вдасться знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/IAON5k2AY0ZW5M--oM4njhEfQDFvLYJCFN9mRIzdpVZJHYlLCNVakDyu5bCnr9_lWAI=w2400", 2, 500, "Демо, 56m of Електро"));
    LootArr.push(new DNELootCard("demo-autonomous-aka-slam", "Autonomous aka Slam", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі навіть вдасться знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/2vnBrdPitfEB2W0Ygvco65SUPsQgeX6k_EKmvXsAG1AIVMMDrK27f4cHGdZGIAVc26U=w2400", 2, 500, "Демо, 56m of Електро"));
    // Демо Jing
    LootArr.push(new DNELootCard("demo-jing", "Jing", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/dnU_1kJofGM8L6FcyZFY9FIV7X0XMmt6NZjqHRI5eDv4Tybe2MNQSydfpaLst9BGqLE=w2400", 2, 500, "Демо, 54m of Електро"));
    // Демо Courtesy
    LootArr.push(new DNELootCard("demo-courtesy", "Courtesy", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/y4b77JEBzft41_41hPiZq8c6OCAVHL5LTgR9KTRpvgbEAoXOwnMxmlCFiOnb77xP79g=w2400", 2, 500, "Демо, 60m of Електро"));
    // Демо Jelz
    LootArr.push(new DNELootCard("demo-jelz", "Jelz", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh4.googleusercontent.com/SOPjuttKgwgX32fw4edtKqsp2m_bLG2udIOAjbDpIx4KMmYqdvrKvhqcdZ1tOj1ZM-w=w2400", 2, 500, "Демо, 55m of Електро"));
    // Демо Lolsnake
    LootArr.push(new DNELootCard("demo-lolsnake", "Lolsnake", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/WZCoPBbHswgpsjBut2HcOcG4Vh0PExeuzccaB1Y5bjwMEqNUVz2ekEprLCQ4tbpXLro=w2400", 2, 500, "Демо, 55m of Електро"));
    // Демо Marum B2B High Future
    LootArr.push(new DNELootCard("demo-marum-future", "Marum B2B High Future", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі навіть вдасться знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/Cliugw88-JyXPoBiDMB4MPEr-7DaoXJcSyMGh8gaJwxJ1PGefd5x9NrrXVERtueXvjQ=w2400", 4, "1K", "Демо, 122m of Електро"));
    // Демо Paris Smith
    LootArr.push(new DNELootCard("demo-smith", "Paris Smith", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/ujfWek1eUoapCHAgwX0B84jl78OuvjbEHwPvtkNNbCdKWEIshqHsdwrnWdqLinBMLIU=w2400", 2, 500, "Демо, 54m of Електро"));
    LootArr.push(new DNELootCard("demo-deep-lofi-house", "DEEP LOFI HOUSE MIX", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh6.googleusercontent.com/zS10ZYBzZeDDdkakdAlyyddKA8ReOm8k7aWpxpGmQPmDi3WzPt_UZtEnPqBvjCkSbw8=w2400", 1, 0, "Демо, 67m of Deep Lo-fi House"));
    LootArr.push(new DNELootCard("demo-tony-approved", "TONY SAYS FCKUIN' APPROVED", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/j77ixolnmMZ8P1Tlc4rWE6bSDqKHhs8N1mOrk6ZhY4gcE3-9383hsnIDfOm3dLfp5TY=w2400", 1, 0, "Демо, 59m of Lo-fi House"));
    LootArr.push(new DNELootCard("demo-before-sunrise", "Before Sunrise", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/kKnxkDw2YetuwFER1oXirDF3nXcyWI65_TwrFa3JlFSCoF2rhv4MRDVWfpQsZIr9O9Y=w2400", 1, 0, "Демо, 65m of Deep House"));
    LootArr.push(new DNELootCard("demo-sub-zero", "Sub Zero", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/Z_4RM0MnEAAoy5LStyg6qJ3ghcVaGteTda7dlLWb61i9ZwGqhpfBqUNifGcLBjCOqG8=w2400", 1, 0, "Демо, 12m of Hardcore Techno Gabber"));
    LootArr.push(new DNELootCard("demo-phonk-fridays-004", "PHONK FRIDAY 004", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/pchxMrA7l83jZlwD6Co2MEHcubf09JV9usXQUDp2wtz2_IGy4q7UF5HIogK4DgmcU0w=w2400", 1, 0, "Демо, 104m of Phonk Trap"));
    LootArr.push(new DNELootCard("demo-dark-trap-777", "DARK TRAP.MP4: chapter 777", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh4.googleusercontent.com/qmFc7i2PSqCqjCIED70uRF_VmrIce-CcjcFB30MWX5pGk9mqW4Gk3PZvG16erTbEnSQ=w2400", 1, 0, "Демо, 43m of Dark Trap"));
    LootArr.push(new DNELootCard("demo-dark-trap-4", "DARK TRAP.MP4: chapter 4", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/VEUpXmwQGG__0UeqGcwM_oQjd2tUXeJFBCznYB39MANkhwB5H0-GkErhSub_O3i1rD8=w2400", 1, 0, "Демо, 35m of Dark Trap"));
    LootArr.push(new DNELootCard("demo-chill-out", "CHILL OUT DOPE", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Ambient сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "https://lh6.googleusercontent.com/xZrSeC4nKTJfqaqOD2dJuGkd0GkhAdLUYUlYbYRRFOZbaXLwU08jYSRq1oPq6xm2_j8=w2400", 3, 0, "Демо, 150m of Deep Stoned Ambient"));

    LootArr.push(new DNELootCard("dirty-mouth", "Не почистити зуби", "Ротова вонь дає мінус привабливості. Будь-який івент на який прийде гравець з цією проблемою отримує -2 до виправданих очікувань аудиторії. Може бути скинута після одного івенту або раніше, якщо почистити зуби.", "https://lh5.googleusercontent.com/fXOXvb-4Nu-o1LqenwcbnBhj8BCoFxNLn6Dsez4KU8f2jDpg-cru4RivzjN2uFpXK_0=w2400", 2, 0, "Проблема!"));
    // Боже втручання
    LootArr.push(new DNELootCard("god-wtf", "Боже втручання", "Ти маєш зіграти цю карту, як тільки її отримав. Усі DJ одразу отримують замовлення на вечірку на Кирилівській! Знайди карту замовлення вечірки на Кирилівській та одразу її активуй. Після проведення цієї вечірки гра закінчиться та виграє гравець з найбільшим капіталом. Якщо ти виграв за рахунок цієї карти, ти в праві підвергнути суперників безжальному осміянню.", "https://lh5.googleusercontent.com/oKk0dgYD_pZfoxzwIy_FmLIWw2ffxHfpl0vJwiAXkGYei30EFVrLyMG9K-HvkSmRKRA=w2400", 0, 0, ""));
    // Спойлер
    LootArr.push(new DNELootCard("spoiler", "Спойлер", "Спойлер дозволяє дізнатись хто виграє гру і не дати йому це зробити. Навіть якщо він вже мав виграти і кричить про це у весь голос. Рішення залежить тільки від тебе.", "https://lh5.googleusercontent.com/uXfX_bj1898ak2fCQmahc-wipWTmASAPGRQa-ywKRELxW69VRALjVf09rndPQkKpImI=w2400", 0, 0, ""));
    // Басік
    LootArr.push(new DNELootCard("car-basic", "Басік", "Басік дозволяє перевозити великі речі з точки А в точку B. Головне щоб в тебе було водійське посвідчення, або друг що його має.", "https://lh6.googleusercontent.com/wStGVg8Yb2fYZNfplyT3mHmtmeRieKLPqpdqy9lL0r9FYV5BMiH2miGi59FD85vShMs=w2400", 2, "90K/500", "Авто"));
    // Таємничий фургон
    LootArr.push(new DNELootCard("car-mystery-track", "Таємничий фургон", "Дозволяє перевозити великі речі з точки А в точку B. Продавець сказав, що має якусь особливість, та не сказав яку.", "https://lh6.googleusercontent.com/0GkaTTGsXh_uSXnfkxxJ4QN3jQzO-DeTghgGp4JijNf5EtyY2t4FtqnCGAq3NKT91Fs=w2400", 2, "110K/700", "Авто"));
    LootArr.push(new DNELootCard("car-my-avi", "Міні-аві", "Дозволяє перевозити великі речі з точки А в точку B. Літає так швидко, що не наздогнати.", "https://lh6.googleusercontent.com/G3sHLcA51HqhXD2U0pd0gGdl2QAEnfpz2g2YPbkra4Sq-EY5nlGJNjuJLhRuUR2XkpQ=w2400", 3, "220K/1700", "Авто"));
    // Водійське посвідчення
    LootArr.push(new DNELootCard("car-docs", "Водійське посвідчення", "Дозволяє уникнути штрафу від Шерифа, якщо керувати будь-яким транспортним засобом в межах Найт-Сіті.", "https://lh3.googleusercontent.com/PXtkM4KTHKrrhkGnkAdQqurHFp9oPuRABqjaiSciDDQ6Z1KlADcmDbXMWuSRvq_cnk8=w2400", 1, "0", ""));
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

const drawLootCards = (cardData) => {
    const cardContainer = document.querySelector(".card-container");
    const cardTemplate = document.querySelector("#card-template");
    const drawCard = (cardContainer, cardTemplate, cardData) => {
        console.log(cardContainer, cardTemplate, cardData);
        const newCard = cardTemplate.cloneNode(true);
        newCard.style.display = "block";
        newCard.id = `dne-card-${cardData.id}`;
        newCard.dataset.hash = `dne-card-${cardData.id}`;
        newCard.querySelector(".card__title").textContent = cardData.name;
        newCard.querySelector(".js.card__id").textContent = `#${cardData.id}`;
        if (cardData.cost !== 0) {
            newCard.querySelector(".card__price").textContent = cardData.cost;
        } else {
            newCard.querySelector(".card__price").style.display = "none";
        }
        newCard.querySelector(".card__limits").textContent = cardData.limits; // todo вьінести лимитьі в отдельньій параметр
        newCard.querySelector(".card__preview-img").src = cardData.img;
        newCard.querySelector(".card__description").innerHTML = cardData.description;
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

    cardData.forEach((DNELootCard) => {
        drawCard(cardContainer, cardTemplate, DNELootCard);
    });
}



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
// Сказать прямо
// Карта позволяет в любой момент вьісказать короткий спич применившему ее игроку. В течении спича никто не перебивает, заговоривший во время чужого спича однаждьі получает предупреждение, дваждьі - покидает игру.
// Право останнього ходу
// Дає можливість володарю цієї карти бути останнім хто зробить свій хід, навіть якщо хтось стверджує, що гру закінчено. Якщо в момент закінчення гри перед гравцем, використашим цю карту, є інші гравці що мають зробити свій останній вхід, вони роблять його перед ним в звичному порядку.

// +++ два нових параметри: час та енергія. Основні показники тепер: гроші, час та енергія. Своєрідний аналог продовольства, деревини, металу та нафти з Серпу. За рахунок них гравці та найомнички зможуть використовувати карти що потребуватимуть певну кількість грошей, часу, енергії або усього водночас.

// DMT-дихання 5хв
// Дає можливість наситити тіло киснем та отримати енергії на годину. Для підтримання єфекту на задовільному рівні рекомендується використовувати не частіше одного разу на добу.
// Ростяжка 15хв
// Дає можливість ростягнути мязи, розім'яти зажими в суглобах та знизити стрес організму від фізичного навантаження. Отримай енергію на годину, витрачай менше енергії на дії з фізичним навантаженням, та можливість виконувати силові вправи впродовж доби. Для посилення єфекту до вищого рівня рекомендується використовувати не рідше ніж раз на дві доби.
// Клас Відьмак
// Дає здатність полювати на монстрів, отримуючи замовлення від персонажів та власноруч домовляючись про винагороду.
// Лечите, глупцы
// Кто позвал Гендальфа? Не знаю, но он уже напаливает Наемничков на курилке жирнющим джоинтом в духе старых Ширских традиций. Используй эту карту чтобы напалить всех вокруг, +2 к оправданным ожиданиям от вечеринки для каждого дунувшего.
// 1up
// https://lh4.googleusercontent.com/Tp-OCYgwdmmEESRTfr5pVRypB46latBy3uAIOqbhsKlghxUsKAPN48RuUD_leLquyEM=w2400
// Ще одне життя. Так, ти можеш почати усе з початку. Використай цю картку щоб врятувати від смерті побратима.
//
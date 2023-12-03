import { DNELootCard, DNEDoorCard, DNEMonsterCard } from "./interface.cards.js";
import { setSoundStat } from "../utils/setSoundStat.js";
import { STRINGS } from "./const.cards.js";

//=> LOOT START

const initDNELootArr = () => {
    const LootArr = [];


    const ddj400 = new DNELootCard("ddj400", "DDJ-400", "Дозволяє зводити дві стежки, задовольняючи потреби 80% аудиторії будь-якого івенту.", "https://lh3.googleusercontent.com/0FZHsm4sbeaFrstYVngi54Th4WRf2ZnGpz_4hUnuaOwMDfDfld2QfzwRRbgFgQciVlk=w2400", 2, "16K/400", "Бонус для DJ-їв", "Дозволяє зводити дві стежки, модифікувати та записувати музику", "", true, true, "loot");
    ddj400.collection = "soundTool";
    LootArr.push(ddj400);

    const plx500 = new DNELootCard("plx500", "PLX-500", "Дозволяє зводити на одну стежку вінілу більше, за наявності Мікшера, задовольняючи потреби 100% аудиторії та підвищуючи задоволення діджеїв від івенту до високого рівня. З ним починаючі артисти готові грати безкоштовно", "https://lh3.googleusercontent.com/KN2qxZnH-hXNEHgObCGjs5LZ0ZGYecDDhdQITXMEm664nSvrjALLo-mqsfuYaPzqaD0=w2400", 3, "16K/400", "Бонус для DJ-їв", "Дозволяє зводити на одну стежку вінілу більше, за наявності Мікшера, модифікувати та записувати музику.", "", true, true, "loot");
    plx500.collection = "soundTool";
    LootArr.push(plx500);

    const ddjrev1 = new DNELootCard("ddjrev1", "DDJ-REV1", "Дозволяє зводити дві стежки, задовольняючи потреби 100% аудиторії та підвищуючи задоволення діджеїв від івенту до високого рівня. З ним починаючі артисти готові грати безкоштовно", "https://lh6.googleusercontent.com/bCCZKzLEoTr1u-IZlLjIlJUhGc7tE_H7YlxQVYs6-RKfarQLmOnExKK_e2gBIh0Ezd8=w2400", 2, "17K/400", "Бонус для DJ-їв", "Дозволяє зводити дві стежки, модифікувати та записувати музику.", "", true, true, "loot");
    ddjrev1.collection = "soundTool";
    LootArr.push(ddjrev1);

    const djflx6 = new DNELootCard("djflx6", "DJ-FLX6", "Дозволяє зводити чотири стежки, задовольняючи потреби 100% аудиторії та підвищуючи задоволення діджеїв від івенту до високого рівня. З ним починаючі артисти готові грати безкоштовно", "https://lh4.googleusercontent.com/KV3fJtCjjs85CosfaTKUf_9px7PL119Gm60ImACWyKEcZr47izhkTZoSXkeTodhBv0Q=w2400", 4, "36K/700", "Бонус для DJ-їв", "Дозволяє зводити чотири стежки, модифікувати та записувати музику.", "", true, true, "loot");
    djflx6.collection = "soundTool";
    LootArr.push(djflx6);

    const ddjxp2 = new DNELootCard("ddjxp2", "DDJ-XP2", "Додає сетапу ще 32 перформанс пади, що дозволять гнучкіше маніпулювати та модифікувати стежки на льоту. З ним починаючі артисти готові грати безкоштовно", "https://lh3.googleusercontent.com/IAkFezRRdHo3SI4bKJf2MhUi5Pn6hcNFKdjZ2Sohw1Tltj_rCNGjEb6gfSOPuxoZKhw=w2400", 2, "19K/300", "Бонус для DJ-їв", "Додає сетапу ще 32 перформанс пади, що дозволять гнучкіше маніпулювати та модифікувати стежки на льоту.", "", true, true, "loot");
    ddjxp2.collection = "soundTool";
    LootArr.push(ddjxp2);

    const AORUS_SHORTLINE = "Відкриває можливість в режимі реального часу переглядати свій цифровий худ, статистику гравця та можливість зберігати прогрес в LocalStorage. Дає особливі здібності для кожного класу."; // todo добавить возможность шерить на других игроков
    const AORUS_LONGLINE = `Портативний компьютер на прямому нейронному інтерфейсі, дозволяє пірнати в Кібер-простір, отримуючи так чином доступ до усіх переваг доступних профессійним Нетраннерам. ${AORUS_SHORTLINE}`;
    LootArr.push(new DNELootCard("aorus5-se4", "AORUS 5 SE4", AORUS_LONGLINE, "https://lh3.googleusercontent.com/-8zozTgk_gMZXuEodcSS5zaBawwHmRZU-0OO9ym3ZOiy3CAYComQSPZqHgZrE_5WXak=w2400", 3, 66999, "", AORUS_SHORTLINE, "", false, true, "loot")); // todo додати в майбутньому каталог, систему прокачки та особливі здібності для кожного классу, що має цей айтем

    const cdj3000 = new DNELootCard("cdj3000", "CDJ-3000", "Дозволяє зводити на одну стежку більше, за наявності Мікшера, задовольняючи потреби 100% аудиторії та підвищуючи задоволення діджеїв від івенту до високого рівня. З ним починаючі артисти готові грати безкоштовно", "https://lh3.googleusercontent.com/I48oibRzq_d66ig_NMxfN7snaHm6Y9EZifZvJeMqlsbJSM9tn7ipwZlhAneW8O7J1pI=w2400", 3, "130K/1K", "Бонус для DJ-їв", "Дозволяє зводити на одну стежку більше, за наявності Мікшера, модифікувати та записувати музику.", "", true, true, "loot");
    cdj3000.collection = "soundTool";
    LootArr.push(cdj3000);

    const djm250mk2 = new DNELootCard("djm250mk2", "DJM-250MK2", "Дозволяє зводити дві стежки, як з вінілових, так із цифрових програвачів, модифікувати та записувати музику.", "https://lh5.googleusercontent.com/jvQ8mSu_KZDU5TUFnqx74vCdhm3BZR1W4X8vV9Cm5ZSchihgHRf4PmeTaxTz7rgxJfU=w2400", 2, "12K/200", "Бонус для DJ-їв", "Дозволяє зводити дві стежки, як з вінілових, так із цифрових програвачів, модифікувати та записувати музику.", "", true, true, "loot");
    djm250mk2.collection = "soundTool";
    LootArr.push(djm250mk2);

    const djm750mk2 = new DNELootCard("djm750mk2", "DJM-750MK2", "Дозволяє зводити чотири стежки, як з вінілових, так із цифрових програвачів, модифікувати та записувати музику.", "https://lh6.googleusercontent.com/P-urxZ4DMOTdvX6mHrfjtDgkd4pAje03DYu51pxrPhs2S5i9iX28anwdDpDAr36kaDo=w2400", 4, "39K/400", "Бонус для DJ-їв", "Дозволяє зводити чотири стежки, як з вінілових, так із цифрових програвачів, модифікувати та записувати музику.", "", true, true, "loot");
    djm750mk2.collection = "soundTool";
    LootArr.push(djm750mk2);

    const djms11 = new DNELootCard("djms11", "DJM-S11", "Дозволяє зводити чотири стежки, як з вінілових, так із цифрових програвачів, модифікувати та записувати музику.", "https://lh3.googleusercontent.com/v3iDqUuvWRbLjgb-ILH0yP-S-NMZtYN_6AR_s8miYuUUSPGwvAAouw66GRkNmMpn-Lk=w2400", 4, "87K/800", "Бонус для DJ-їв", "Дозволяє зводити чотири стежки, як з вінілових, так із цифрових програвачів, модифікувати та записувати музику.", "", true, true, "loot");
    djms11.collection = "soundTool";
    LootArr.push(djms11);

    const sps585 = new DNELootCard("sps585", "SPS-585", "", "https://lh4.googleusercontent.com/bqJZTshGqWQIuNYeYIdqBFQHLjPYv1dFGhstCVnbOBYEuPUIoajBYK569wf-gEMt9As=w2400", 2, "2300", "+2 з DDJ-400", "Проста та надійна акустична система на 3.5мм, з якою впорається навіть маля.<br><br>Чудово поєднується з DDJ-400, отримай +2 та ще +1, якщо ти DJ.", "", true, true, "loot");
    sps585.collection = "soundTool";
    LootArr.push(sps585);

    // GOPRO
    LootArr.push(new DNELootCard("i-gopro", "GOPRO", "Дозволяє знімати широкоформатне відео з високою кількістю кадрів на секунду. З відповідними аксесуарами доступне відео від першого лиця, відео з руки та корпусу", "https://lh5.googleusercontent.com/1k2kOk7TOG2p0UjrV6WXnhOnzBtXJUoEMv9XPE-wejGTYDcIU-PkaGZmAeMeXuS08YU=w2400", 2, "20К/500", "Бонус для Відеомейкер"));
    // CASE
    LootArr.push(new DNELootCard("i-case", "Кейс", "", "https://lh4.googleusercontent.com/ljebY0Mn9_I269WR0_ZlZy4ZU0gbsqZZ0leThMfSmQLn0psfl_wle8F1PZ78JOl2qAc=w2400", 0, "1K", "+1 для Татуєра", "Дозволяє сховати будь-яку кількість предметів загальною площею 21х30х10см, доступ до яких можна отримати лише маючи предмет ключа до цього кейсу", "", false, true, "loot"));
    // CASE KEY
    // LootArr.push(new DNELootCard("i-case-key", "Ключ до кейсу", "Дозволяє отримати доступ до предметів у Кейсі", "https://lh3.googleusercontent.com/JppmmdWBUa0cYPA3LgPLsN2KEvuQTUNuaQkg_lR7ZK-C1YRFiLVSvfda2KOyIbHI1Mo=w2400", 0, 0, ""));
    LootArr.push(new DNELootCard("i-fishyey", "Око риби", "Дозволяє знімати надширокоформатне відео з середньою роздільною здатністю та середнім фпс", "https://lh4.googleusercontent.com/q6kgHPE-JmWkcHsVXc0Gm_XEV98LUQODkdlxKSPSkuqkNeYXCVA1y2FAY_3s_bJg5oc=w2400", 1, "5К", "Бонус для Відеомейкер"));
    LootArr.push(new DNELootCard("i-canon", "Професійний фотоапарат", "Дозволяє робити високоякісні цифрові знімки, що можуть бути корисними в різних обставинах. З кожним новим івентом отримуєш атмосферні знімки", "https://lh3.googleusercontent.com/nP83qKzVByeQIgVJLh4uVr-rZ7l-myqfawvze-rAd2bLgvmNl2aLGF7D_zhWk4s9Ajg=w2400", 2, "70K/500", "", "Дозволяє робити високоякісні цифрові знімки, що можуть бути корисними в різних обставинах. З кожним новим івентом отримуєш атмосферні знімки", "", false, true, "loot"));

    const I_LAMP_IMG_ID = `1d8WtQSXTKoc10IC21YmCHqNnatnadFRK`;
    const I_LAMP_IMG = `https://drive.google.com/uc?id=${I_LAMP_IMG_ID}`;
    LootArr.push(new DNELootCard("i-lamp", "Гравілампа", "Кільцева лампа діаметром 55' здатна знаходитись в будь-якій точці простору та освітлювати простір великих розмірів.", I_LAMP_IMG, 1, 5000, "", "Кільцева лампа діаметром 55' здатна знаходитись в будь-якій точці простору та освітлювати простір великих розмірів.", "", false, true, "loot"));

    LootArr.push(new DNELootCard("i-starlink", "Роутер", "Дает закрьітьій доступ к скоростному интернету до 100мб/с для не менее 5-ти дейвайсов одновременно. Проектьі в пространствах с вай-фаем получают + или - к оправданньім ожиданиям аудитории в зависимости от концепта", "https://lh6.googleusercontent.com/EaDvW4MyDuSjXM5KCWYiyW3TVOMfs35gw7beKLK0elTrJGE7VnMeTWjS8M_0zsOWbfk=w2400", 1, 1200, ""));
    LootArr.push(new DNELootCard("i-squizer", "Сквізер", "Дає можливість залишити послання невеличкого розміру", "https://lh5.googleusercontent.com/XaXThgj9KO7oFMa_JAFJx9PcMSj3o_FkpCIdeAZyynPGY3E8vhOiOc_C7q951ePTHs0=w2400", 1, 200, "Бонус для Райтера"));
    LootArr.push(new DNELootCard("i-shwabra", "Швабра", "Дає можливість залишити послання великого розміру", "https://lh3.googleusercontent.com/lQP_8BMVMOuETxH4z16PjtG7P7O3xhGfVAM4MqkKLzfP8bIWdiQwmy9c5vZddHzEw7c=w2400", 2, 400, "Бонус для Райтера"));

    const FOOD_LONGLINE = (paste) => `Можливість насолодитися ${paste} в компанії друзів просто зараз. Ефект подвоюється якщо разом з нею використати Спалах`;
    // Банан
    //
    //
    const BANAN_LONGLINE = FOOD_LONGLINE("солодким Бананом");
    const BANAN_SHORTLINE = `Satisfaction`;
    const BANAN_IMG_ID = `15vp8EgurcWCoE6szd6JCMGD_GJ2tw_k1`;
    const BANAN_IMG = `https://drive.google.com/uc?id=${BANAN_IMG_ID}`;
    const iBanan = new DNELootCard("i-banan", "Банан", BANAN_LONGLINE, BANAN_IMG, 1, 50, "", BANAN_SHORTLINE, "", true, true, "loot");
    iBanan.collection = "food";
    LootArr.push(iBanan);

    // Сінабон
    //
    //
    const SINABON_LONGLINE = FOOD_LONGLINE("смачнющим Сінабоном");
    const SINABON_SHORTLINE = `Eat me`;
    const SINABON_IMG_ID = `1z7MOOmRtCbp2jFVXrDweMNxU77xPSZcJ`;
    const SINABON_IMG = `https://drive.google.com/uc?id=${SINABON_IMG_ID}`;
    const iSinabon = new DNELootCard("i-sinabon", "Сінабон", SINABON_LONGLINE, SINABON_IMG, 1, 100, "", SINABON_SHORTLINE, "", true, true, "loot")
    iSinabon.collection = "food";
    LootArr.push(iSinabon);

    const iHappy = new DNELootCard("i-happy", "Хеппі-Міл", FOOD_LONGLINE("смачнющим Хеппі-Міл"), "https://lh4.googleusercontent.com/f3gSMMyUE42eUPgXA0zv_ayBKF9_NbJulPBf97MQKgS3TsqNNPVq5WIAl9KDupFUuCk=w2400", 1, 180, "", "Знаю, ти мене хочеш", "", true, true, "loot");
    iHappy.collection = "food";
    LootArr.push(iHappy);

    const iMacMenu = new DNELootCard("i-macmenu", "Мак-Меню", FOOD_LONGLINE("смачнющим Мак-Меню"), "https://lh4.googleusercontent.com/y5P2jbhCxlBTx9wSx0md0AfubamFyoZ0MbBF9Hm_BZyb1sPP3D8-sA1CooxoeZE41eI=w2400", 1, 240, "", "О так, візьми мене", "", true, true, "loot");
    iMacMenu.collection = "food";
    LootArr.push(iMacMenu);

    const iPizza = new DNELootCard("i-pizza", "Піца", FOOD_LONGLINE("смачнющою Тоні Пепероні з Домінос"), "https://lh3.googleusercontent.com/GQ1YskWL7s-W0WwpNfDYWF7PwMjnfqSaBn2K2prOh8Ga4NX2GOwNKk_PzN_bGLxdKyc=w2400", 2, 420, "", "Смачнюща Тоні Пепероні вже стукає в твої двері. Не змушуй її чекати", "", true, true, "loot");
    iPizza.collection = "food";
    LootArr.push(iPizza);

    const iRegularSound = new DNELootCard("i-regular-sound", "Потужний звук", "Професійний сет звукового обладнання потужністю в 600вт, в який входить: монітор, мікшер Yamaha, два безпровідні мікро, дим машина, штатив та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може розкачати натовп до 50 людей, чудово підходить для невеликих приміщень.", "https://lh3.googleusercontent.com/zSIxmWk_sBxfUJH9MDJaOpa1VMjdTuHSS-AXw-C1tTURrS_coBvFOY4VpFF3XF1oCvE=w2400", 6, "40K/1800", "Велика", "Звук дає можливість ділитися своєю музикою з натовпом. Чим гучніше, тим більше людей зачепить.", "", true, true, "loot");
    iRegularSound.collection = "soundSystem";
    LootArr.push(iRegularSound);

    const iVinylSound = new DNELootCard("i-vinyl-sound", "Потужний вініловий звук", "Професійний сет звукового обладнання потужністю в 600вт, в який входить: два монітори, мікшер та два вінілові програвачі, дим машина, штатив та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може підтримувати в тонусі або розкачати натовп до 100 людей, чудово підходить для невеликих та середніх приміщень.", "https://lh4.googleusercontent.com/kRz3BiDfIYHwBYj1Rr_jae4H1MxOXKsQ8IXu8e1E9ardUxIL3goX42y7cTThQGHcZyE=w2400", 7, "60K/2800", "Велика", "Звук дає можливість ділитися своєю музикою з натовпом. Чим гучніше, тим більше людей зачепить.<br><br> Дозволяє грати вініл.", "", true, true, "loot");
    iVinylSound.collection = "soundSystem";
    LootArr.push(iVinylSound);

    const iPowerfulSound = new DNELootCard("i-powerful-sound", "Надпотужний звук", "Професійний сет звукового обладнання потужністю в 1200вт, в який входить: два монітори, мікшер Yamaha, два безпровідні мікро, дим машина, штатив та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може розкачати натовп до 200 людей, чудово підходить для невеликих та середіх приміщень. В житлових зонах на таке обладнання можуть скаржитись сусіди.", "https://lh5.googleusercontent.com/ikLJs1LtUQRgNei8RBjBvT_CMR8kM8YpiRSdrilyIL6N6CKTM5wzW24q4MRz3S9DEGQ=w2400", 10, "70K/3200", "Тільки для DJ. Велика", "Звук дає можливість ділитися своєю музикою з натовпом. Чим гучніше, тим більше людей зачепить.", "", true, true, "loot");
    iPowerfulSound.collection = "soundSystem";
    LootArr.push(iPowerfulSound);

    const iSpacefulSound = new DNELootCard("i-spaceful-sound", "Просторий звук", "Професійний сет звукового обладнання потужністю в 2000вт, спецільно для якісного наповнення звуком просторих приміщень в який входить: п'ять моніторів, мікшер Yamaha, два безпровідні мікро, дві потужні дим машини, штативи та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може розкачати натовп до 300 людей, чудово підходить для середіх та великих приміщень.", "https://lh4.googleusercontent.com/PgwB0JeWhLsKU4KtxkCantInRPu6B9cx6OVvCJbr9zKw7NOL9_Qs-D3iiIp72__QBVU=w2400", 16, "270K/5800", "Тільки для DJ. Велика", "Звук дає можливість ділитися своєю музикою з натовпом. Чим гучніше, тим більше людей зачепить.", "", true, true, "loot");
    iSpacefulSound.collection = "soundSystem";
    LootArr.push(iSpacefulSound);

    const iGamerSound = new DNELootCard("i-gamer-sound", "Стрімерський звук", "Професійний сет звукового обладнання потужністю в 400вт, в який входить: два монітори, один вініловий програвач, касетний плеєр, мікшер Yamaha, два бездротові мікро, дим машина, штатив та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може розкачати натовп до 40 людей та підтримувати його в тонусі, чудово підходить для невеликих приміщень. Завдяки звукоізоляціі навіть в житлових зонах на таке обладнання не буде скарг від сусідів.", "https://lh3.googleusercontent.com/cRVIaT5RkZiuYTlpQXRqJVzdZg1HFBYpEi-WiQyVgi_CqS5ydcVr0t9GljmyJ2N6XMo=w2400", 8, "120K/3400", "Велика", "Звук дає можливість ділитися своєю музикою з натовпом. Чим гучніше, тим більше людей зачепить.", "", true, true, "loot");
    iGamerSound.collection = "soundSystem";
    LootArr.push(iGamerSound);

    const iSilentSound = new DNELootCard("i-silent-sound", "Ізольований b2b звук", "Професійний сет звукового обладнання потужністю в 900вт, в який входить: два монітори, мікшер Yamaha, два підвішені мікро, дим машина, штатив та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може розкачати натовп до 100 людей, чудово підходить для невеликих та середіх приміщень. Спеціальзується на одночасному записі, може вмістити до 4х артистів. Завдяки звукоізоляціі навіть в житлових зонах на таке обладнання не буде скарг від сусідів.", "https://lh4.googleusercontent.com/l6lpA8YVQLDObWm_ZJmv0QDxTa45w1X8mTAgdl4G7EhPvf2zPMCn4SysHbg-GEeqwm0=w2400", 9, "90K/2800", "Велика", "Звук дає можливість ділитися своєю музикою з натовпом. Чим гучніше, тим більше людей зачепить.", "", true, true, "loot");
    iSilentSound.collection = "soundSystem";
    LootArr.push(iSilentSound);

    const iLegacySound = new DNELootCard("i-legacy-sound", "Професійний звук минулого", "Раритетний сет звукового обладнання потужністю в 300вт, в який входить: монітор, мікшер, касетний програвач та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може розкачати невеличкий натовп до 80 людей, дає широкі можливості для своєї вартості.", "https://lh5.googleusercontent.com/p63-RSBO5TxBjDjWZIbMJ-U-nr1bOKCIefdIbYj_OBR2PycPyoSeuD_LvwOnAibyCk8=w2400", 4, "15K/400", "Велика", "Звук дає можливість ділитися своєю музикою з натовпом. Чим гучніше, тим більше людей зачепить.", "", true, true, "loot");
    iLegacySound.collection = "soundSystem";
    LootArr.push(iLegacySound);

    const iFathersSound = new DNELootCard("i-fathers-sound", "Батьків звук", "Раритетний сет звукового обладнання потужністю в 200вт, в який входить: монітор, мікшер та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може розкачати невеличкий натовп до 30 людей, дає широкі можливості для своєї вартості.", "https://lh3.googleusercontent.com/v2R3CPQL-GvaR4XGIPQa6MumoK02LiwWSF45vvL5etQfcEX4qSPQa6OAA04fyWEpIpE=w2400", 3, "2K/300", "Велика", "Звук дає можливість ділитися своєю музикою з натовпом. Чим гучніше, тим більше людей зачепить.", "", true, true, "loot");
    iFathersSound.collection = "soundSystem";
    LootArr.push(iFathersSound);

    const iBunnySound = new DNELootCard("i-bunny-sound", "Преміум звук", "Професійний сет домашнього звукового обладнання преміального классу потужністю в 500вт, в який входить: два монітор, мікшер, дим машина та дротова система що живиться від розетки 220V. З якісним контроллером та Діджеєм може підтримувати в тонусі невелике приміщення людей до 30 осіб. Чудово підходить для середніх частот в невеличкому просторі затишних приміщеннь.", "https://lh6.googleusercontent.com/8fTLZWHk-ttKuc5cug7UfnzEfUj19MQJHHns_s1hV-Hkvl96PtkFydoA_bq7bNpVU3M=w2400", 5, "80K/1200", "Велика", "Звук дає можливість ділитися своєю музикою з натовпом. Чим гучніше, тим більше людей зачепить.", "", true, true, "loot");
    iBunnySound.collection = "soundSystem";
    LootArr.push(iBunnySound);

    // Аватар
    //
    //
    const AVATARS_IMG = [
        {
            id: "ttter",
            img: `1qbAUvoaeM9h5RSevlXBIukqjIXeuaisX`
        },
        {
            id: "support",
            img: `1oGR5pBAN1MAzTqjJPmjJEn71grIeH4ml`
        },
        {
            id: "writer",
            img: `1ck2tmnoBqNo3oxRCo7GbESc9F1df9r9I`
        },
        {
            id: "netrunner",
            img: `1ZLp6spRdHVPDXf3BdMc2F60mtWIZn5rY`
        },
        {
            id: "dj",
            img: `1MUH8aWJtvLnkK09q5ZFPQVlImzW1HS24`
        },
        {
            id: "dragonborn",
            img: `16-Pudgm3T9YBQ5lxDANy3laIb-67lZVa`
        },
        {
            id: "olivye",
            img: `1j8UhFJu4jVExfpLUZt3YFE99OjIVvyVD`
        }
    ];
    const initAvatar = (avatarObj) => {
        const AVATAR_LONGLINE = "";
        const AVATAR_SHORTLINE = ``;
        const AVATAR_IMG_ID = `${avatarObj.img}`;
        const AVATAR_IMG = `https://drive.google.com/uc?id=${AVATAR_IMG_ID}`;

        LootArr.push(new DNELootCard(`avatar-${avatarObj.id}`, "", AVATAR_LONGLINE, AVATAR_IMG, 0, 0, "", AVATAR_SHORTLINE, "", true, true, "avatar"));
    }
    AVATARS_IMG.forEach((avatarObj) => initAvatar(avatarObj));


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
    LootArr.push(new DNELootCard("contract-academy", "Академія", "Володіючи достатніми технічними навичками в мовах html, css i js ти зможєш отримувати регулярний середній дохід кожні півтора місяці або частіше, залежно від виконаних задач. Потребує час, приносить гроші", "https://lh6.googleusercontent.com/hTjtpUg711Fwd4dRr_8kjGA_T0Q4ngQwNaxYRyVkeKgwXojwGJbnPDK6JWjeL4-wT8U=w2400", 0, "2h-16h 2К-24К", "Знати html, css i js"));
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
    LootArr.push(new DNELootCard("class-writer", "Райтер", "Здатен бомбити великі шматки, кожен з яких даватиме автору постійний бонус доки його не бафнуть. Чудовий спосіб привернути увагу до події. Бомбити графіті - найдешевший та найшвидший спосіб гучно заявити про своє існування в будь-якому районі Найт-Сіті. За допомогою канцелярського знаряддя здатен швидко популярізвути прості ідеї що можна висловити декількома словами або навіть буквами. Чим лаконічніша ідея, тим легше її тиражувати, тим швидше вона здатна розповсюджуватись. Шериф не залишить це без уваги але і просто так звинуватити не зможе. Пильнуй щоб він був найдалі коли працюєш.", "https://lh5.googleusercontent.com/gmwxg96EzHNXoKY8O0xj1P3IeYP7oMwn4z7SvAg6EAIejeNEbRX-H39VLhET1LmBfxc=w2400", 1, 0, "Клас", "Здатен бомбити великі шматки, кожен з яких даватиме автору постійний бонус доки його не бафнуть.", "", true, true, "class")); // Двери
    // Шериф, Татуєр, DJ
    LootArr.push(new DNELootCard("class-sherif", "Шериф", "Шериф мирний персонаж що представляє закон в Найт-Сіті. Шериф здатен дізнаватись хто є Мафією та ніхто не здатен напевно знати хто є Шерифом. Має доступ до бази інформації Поліції міста, персонального дрона та патрульної машини спортивного класу.", "https://lh6.googleusercontent.com/F6CSfk4KSbt2b1oN7y0MVoIhdZWtWDeOh6XNsUfTbNRvyfr-1VBQeEqPwx4H5R-Jiuw=w2400", 1, 0, "Клас"));
    // Татуєр
    LootArr.push(new DNELootCard("class-ttter", "Татуєр", "Наб'є тобі татуху. Регулярно робить це на різноманітних вечірках на які тільки зможе прийти. Завжди радий бачити у власній студії щоб вколоти свіжу масть. Мусить мати чисте місце для роботи, необхідну аппаратуру та матеріали. Кожне його татуювання має особливу властивість. Наб'є тобі татуху. Кожне тату дає власнику особливу властивість до кінця гри, яку саме - обирає татуєр та гейм-майстер. Власник може попросити татуєра дати татуюванню якусь певну властивість, та чи зробить він це знатиме лише гейм-майстер.", "https://lh5.googleusercontent.com/WUvRRRJpFIACJw50hOycHsKNnwSB3SdJSs-_5JQk11pKHMoDstW_n9nzWwb28y_wTUU=w2400", 1, 0, "Клас", "Наб'є тобі татуху. Кожне тату дає власнику особливу властивість до кінця гри, яку саме дізнаєшся лише згодом.", "", true, true, "class"));
    // DJ
    LootArr.push(new DNELootCard("class-dj", "DJ", "Поставить музику. На протязі гри може ставити музику. Якщо кожен гравець її похвалить, спробує записати Демо, щоб потім ставити його на вечірках, продавати як Альбом в інтернеті і можливо колись навіть записати його на вінілі.<br> Якщо кожен гравець визнає що музика не та, той хто її ставив втрачає цей клас.", "https://lh5.googleusercontent.com/i6Sfz0bcn1Q6HQsSqQhV1QMtCq7pyETASnCXsyswzh7NAZ2iOVdAyQoncZ8mE23BBW8=w2400", 1, 0, "Клас", "Ставить музику. Ти відповідальний за звук, enjoy!", "", true, true, "class"));


    const NETRUNNER_LONGLINE = "Нетраннер здатен робити неймовірні речі з компьютером. Чим потужніше його обладнання, тим потужніші його можливості. Спектр його дій захоплює все, починаючи з монтажу відео та обробки графіки, закінчуючи розробкою веб-сайтів та 3Д-моделювання.";
    const NETRUNNER_SHORTLINE = "Нетраннер здатен робити неймовірні речі з компьютером. Чим потужніше його обладнання, тим потужніші його можливості. Спектр його дій захоплює все.";
    LootArr.push(new DNELootCard("class-netrunner", "Техношаман", NETRUNNER_LONGLINE, "https://lh4.googleusercontent.com/_NvNB3zKOJkiy19PTgbJkCqovWYT1AFdaOLZ5CI9AhTIxAqZR1skE4lxIlniWoWkpUk=w2400", 1, 0, "Клас", NETRUNNER_SHORTLINE, "", true, true, "class"));
    LootArr.push(new DNELootCard("botnet", "Ботнет", "Мережа фейкових користувачів Instagram що виглядають як звичайні люди, коментують один одного, репостять та надсилають повідомлення з рандомізованим контентом. Можуть миттєво популярізувати будь яку ідею на всю свою аудиторію. Розробити такий не складко, потрібно трохи технічних навичок та багато креативності. Мережевий Дозор зацікавиться їх власником.", "https://lh4.googleusercontent.com/esZ8EbhZ6W4wudZe-Kjm442KRBg_1P3-lePD8HJddEOErmflqrhrVjl3vFHzFhDywFA=w2400", 6, "3К", "Тільки для Компьютермена"));
    // LootArr.push(new DNELootCard("law-belford", "Закон Белфорда", "Математичний закон, що дозволяє перевіряти масиви данних будь-якого об'єму на фальсифікацію.", "", 0, 0, "Тільки для Компьютермена"));
    LootArr.push(new DNELootCard("class-riper-doc", "Ріпер-док", "Рипер вьтащит из тебя пулю, дочистит деку от демонов, установит кибер-имплант. Требует чистого рабочего места и неоходимую аппаратуру для каждой задачи.", "https://lh4.googleusercontent.com/dCcYzvFtdty2YemyWeXVuSufgM-cBjEQitKSc0hNJd0LbAxk3U6mYsvy-P-z72aFuF4=w2400", 1, 0, "Клас"));
    LootArr.push(new DNELootCard("i-cyberdeck", "Кібер-дека", "Нетраннерська модифікація мозку, дозволяє завантажувати в мережу та віддалено керувати программами, які відправляються ланцюгами з одного або більше скриптів. Чим якісніша дека, тим більше скриптів в один пайп здатен вмістити її користувач. Об'єм пам'яті: 2 слоти", "https://lh3.googleusercontent.com/d1L38A_1BkvWOxovw9VXYP7N43Nf3lzr0694rItzFJkcdzp1V-28OQaE7um0LPMFGQc=w2400", 1, "10К", "Кібер-імплант"));
    LootArr.push(new DNELootCard("i-stack", "Карбоновий стек", "Дозволяє зберегти єнграмму особистості щоб завантажити в інше тіло. Процес не є приємним, відновлення може займати від декількох годин, до декількох днів. Таким чином незворотно вбити власника стеку можна лише фізично знищивши стек з енергетичної зброї.", "https://lh6.googleusercontent.com/tnZoBgsKRJl80CrR9alTbiItgE6plsJRSGd83Hts9vEmC3cvGc0WV9MrvEKg22GyO3Q=w2400", 1, "400К", "Кібер-імплант"));
    LootArr.push(new DNELootCard("class-collector", "Коллекціонер", "Зробить відео-контент з будь-якого творчого задуму. Спробуй використати отримані матеріали щоб розповісти у відео-форматі про свою справу. Хтось може звернути на це увагу та запропонувати тобі роботу.", "https://lh6.googleusercontent.com/c1TwnNfpDleCf4bJp00yiswT7zTrzzfhSjwTWXdBLALXUHYy9dEmYMCEKpHdbWuKfE4=w2400", 1, 0, "Клас", "Здатен бачити спражню цінність предметів, виділяти серед них драгоцінні.<br><br> Надає цю інформацію за розумний відсоток або соковитий аванс", "", true, true, "class"));
    const BARBER_LONGLINE = "Підстреже тебе швидко та якісно. Гарна новина: Ти маєш постійну роботу в мережі барберів та стабільний заробіток відносно рангу. Погана новина: Ти жінка.<br> Щасти<br><br> Міні-гра:<br>Не дивись їй під спідницю.";
    LootArr.push(new DNELootCard("class-barber", "Барбер", BARBER_LONGLINE, "https://lh5.googleusercontent.com/swk49Cl7o0LdJzLglojbUTrMZVPS1j2fkGa7-rMJcpuDCwv5HBkunz_vIjrwQa45UFA=w2400", 1, 0, "Клас", BARBER_LONGLINE, "", true, true, "class"));
    // LootArr.push(new DNELootCard("class-videomaker", "Відео-<br>мейкер", "Зробить відео-контент з будь-якого творчого задуму. Спробуй використати отримані матеріали щоб розповісти у відео-форматі про свою справу. Хтось може звернути на це увагу та запропонувати тобі роботу.", "https://lh4.googleusercontent.com/FZFTYr__oUeAQtVUxdlG0AT7A2BMWGKmCL9KECct9KeZK6iacLswIjCpc2aEWfqjk64=w2400", 1, 0, "Клас", "Створює відео-контент з івентів, на які приходить.", "", true));
    LootArr.push(new DNELootCard("class-shoplifter", "Шопліфтер", "Може дістати для тебе будь-який айтем з магазину вдвічі дешевше, не питай як. Може скинути будь-яку картку з руки щоб з верогідністю 30% вкрасти будь-яку річ іншого гравця, що знаходиться з ним в одному приміщенні та не захищена ключем. Крадіжка важливих предметів, наприклад звуку під час вечірки може призвести до найкатастрофічніших наслідків. В разі невдалої крадіжки тобі доведеться заплатити її власнику компенсацію до 50% від вартості айтему. Охороничок допоможе залишати Шопліфтера за дверима.", "https://lh3.googleusercontent.com/6Wd_TULgCtwHpTisY2Nivlpvcwy8xRw9I6jgMeWF0NMnSZwHA86gcw5RD0fq6-GPFmE=w2400", 1, 0, "Клас", "Може дістати для тебе будь-який айтем з магазину вдвічі дешевше, не питай як.<br><br> Підріж айтем іншого гравця з верогідністю 33% скинувши картку з руки.", "", true, true, "class"));
    LootArr.push(new DNELootCard("class-seller", "Селлер", "Може продавати айтеми дорожче їх собівартості, та обов'язково попросить відсоток, чим кращий продавець, тим більший. Має можливість працювати на івентах із мерчем та магазинах, щоб отримати додатковий дохід.", "https://lh3.googleusercontent.com/fWeM_q6WoqvpbeZHsyZGK3T1c7l4-xddZJJnNPF0rpEqDyIGzKWynUshmb27N7F_MOs=w2400", 1, 0, "Клас", "Може продати айтеми дорожче собівартості, та обов'язкого візьме відсоток.", "", true, true, "class"));
    LootArr.push(new DNELootCard("class-streamer", "Стрімер", "Може отримувати донати під час трансляцій. Чим більшу аудиторію має стрімер, тим більше верогідність розмір та кількість донатів. Має можливість працювати на івентах із мерчем, щоб отримати додатковий дохід.", "https://lh4.googleusercontent.com/uWaxdPO9xe4sZXU4UZGrMBx5hQ0GVXnV4Vk-WaqWbokv14PdbenppCzovLvbc4Rw5WM=w2400", 1, 0, "Клас", "Може отримувати донати під час трансляцій. Чим більшу аудиторію має стрімер, тим більше верогідність розмір та кількість донатів.<br> Має можливість працювати на івентах із мерчем, щоб отримати додатковий дохід.", "", true, true, "class"));
    LootArr.push(new DNELootCard("class-jeweller", "Ювелір", "Вітання, тепер ти маєш здатність створювати дорогоцінні речі з металу та каменю.<br><br> Та май на увазі, постійне використання здібностей такого роду призводить певні метаморфози.", "https://lh6.googleusercontent.com/vZeo459Kvfml9PNnrpt6aB175VWeNr8EEmVo60Ukk64PF7NxGr1rNjJlXAXY8kxC9ZU=w2400", 1, 0, "Клас", "Вітання, тепер ти маєш здатність створювати дорогоцінні речі з металу та каменю.<br><br> Та май на увазі, постійне використання здібностей такого роду призводить певні метаморфози.", "", true, true, "class"));
    LootArr.push(new DNELootCard("class-photographer", "Фотограф", "Зробить тобі якісні знімки. В істаграмі вартість будь чого росте в рази, коли має якісні знімки, будь це івент, простір або татуювання. Зробивши фото гравця ти маєш шанс згенерувати персонажа на основі його образу. Має можливість працювати на івентах, щоб принести йому більше популярності, шанс нових замовлень та отримати за це додатковий дохід.", "https://lh3.googleusercontent.com/V43LauxtU-trhnzgphBra9iro6BlfDJ3mYQfCSP6jdCkXQY2FTZsBndJvT8Cc6UM-dk=w2400", 1, 0, "Клас"));
    LootArr.push(new DNELootCard("", "Шинобі", "", "", 1, 0, "", "", "", false));

    // Шинобі
    //
    //
    const SHINOBI_CLASS_LONGLINE = "Мистецтво Шинобі - іллюзія. Здатен вивчати бойові мистецтва, дзютсу та використовувати їх у бою";
    const SHINOBI_CLASS_SHORTLINE = `Здатен вивчати мистецтва ведення бою, Дзютсу та використовувати їх на свою користь.`;
    const SHINOBI_CLASS_IMG_ID = ``;
    const SHINOBI_CLASS_IMG = `https://lh3.googleusercontent.com/J9zfpfgBU-x_Ix5SfbLtxnJe7717J__pqa5zGGQ8l_CYeDSOB-xXvDOXcC2jv7aLePI=w2400`;

    LootArr.push(new DNELootCard("class-shinobi", "Шинобі", SHINOBI_CLASS_LONGLINE, SHINOBI_CLASS_IMG, 1, 0, "Клас", SHINOBI_CLASS_SHORTLINE, "", true, true, "class"));

    // Майстер Бою
    //
    //
    const COMBAT_MASTER_LONGLINE = "";
    const COMBAT_MASTER_SHORTLINE = `Пройди курс бойової підготовки, щоб відкривати в собі навички ведення бою.<br><br> Досвідчені фахівці отримують високооплачувану роботу на проєктній основі.<br><br> Чим складніше завдання,<br> тим вище ставки.`;
    const COMBAT_MASTER_IMG_ID = `1nWqUkT3EPwJ-nw2nwhgWTEsp7Wec4R7I`;
    const COMBAT_MASTER_IMG = `https://drive.google.com/uc?id=${COMBAT_MASTER_IMG_ID}`;

    LootArr.push(new DNELootCard("combat-master", "Майстер Бою", COMBAT_MASTER_LONGLINE, COMBAT_MASTER_IMG, 1, 0, "Клас", COMBAT_MASTER_SHORTLINE, "", true, true, "class"));

    // Драйвер
    //
    //
    const DRIVER_CLASS_LONGLINE = `
    Щоб освоїти цей клас та отримати доступ до можливостей Драйвера, ти маєш використовувати Душу, кожного разу отримуючи нові здібності натомість. 
    Виконай квест "Перша доставка". 
    Ти музикант, приїхав у нове місто та влаштувався в анонімну службу доставки Клаудпанк. 
    Ти завантажуєш свого вихованця як кастомну особу борт-помічника. 
    Тобі потрібні гроші, щоб знайти нове синтетичне тіло собаки для нього. 
    Доставляючи посилки під всевидячим оком крила корпорацій та пильним наглядом блок постів міста у тебе виникають сумніви у легальному статусі свого роботодавця.`;
    const DRIVER_CLASS_SHORTLINE = `Драйвер здатен<br> водити Авто як завгодно,<br> та далеко не хто завгодно<br> здатен водити Авто<br><br> як Драйвер.`;
    const DRIVER_CLASS_IMG_ID = `11vbz4Dx3UfPLTR2GdbhFFDpkGq4LXwWc`;
    const DRIVER_CLASS_IMG = `https://drive.google.com/uc?id=${DRIVER_CLASS_IMG_ID}`;

    LootArr.push(new DNELootCard("class-driver", "Драйвер", DRIVER_CLASS_LONGLINE, DRIVER_CLASS_IMG, 1, 0, "Клас", DRIVER_CLASS_SHORTLINE, "", true, true, "class"));

    // Манчкін
    //
    //
    const MUNCHKIN_LONGLINE = "Грає карти Манчкіну коли йому заманеться, згідно правил, які сам вигадує.<br><br>Можеш не розповідати йому, що це інша гра, він все одно не повірить.";
    const MUNCHKIN_SHORTLINE = `Грає карти Манчкіну коли йому заманеться, згідно правил, які сам вигадує.`;
    const MUNCHKIN_IMG_ID = `1MHnPkUgirqzQFRtRoWTMsjdo9zSHTA_X`;
    const MUNCHKIN_IMG = `https://drive.google.com/uc?id=${MUNCHKIN_IMG_ID}`;

    LootArr.push(new DNELootCard("class-munchkin", "Манчкін", MUNCHKIN_LONGLINE, MUNCHKIN_IMG, 1, 0, "Клас", MUNCHKIN_SHORTLINE, "", true, true, "class"));


    // Драгрейсер
    // LootArr.push(new DNELootCard("class-drugracer", "Драгрейсер", "", "", 1, 0, "Клас"));
    LootArr.push(new DNELootCard("class-typograf", "Типограф", "Типограф надрукує тобі будь-яку картку та віддасть за розумний відсоток від її вартості.", "https://lh6.googleusercontent.com/o75I3KWBcZNK5MEn9EYCKrvJK7SYlc65cGLIlDnpf7O5OZsSNQIRtQ7rzY8TXEr-1a8=w2400", 1, 0, "Клас", "Типограф надрукує тобі будь-яку картку та віддасть за розумний відсоток від її вартості.", "", true, true, "class"));

    // Рокраннер
    //
    //
    const ROCKRUNNER_CLASS_LONGLINE = "Рок-музиканти, співаки, заколотники XXI століття, які перетворили свою музику на зброю і направили її проти корпорацій та урядів, на боротьбу з системою, використовують своє мистецтво для вираження своїх поглядів на політичну чи соціальну ситуацію, відрізняються непохитністю, радикальними висловлюваннями та виступами, що запам'ятовуються.";
    const ROCKRUNNER_CLASS_SHORTLINE = `Розірве натовп своїм соло, збере гурт та організує виступ<br> за вихідні.<br><br> Щоб на наступні<br> зробити це знову.`;
    const ROCKRUNNER_CLASS_IMG_ID = `1aOmIiNYZ1cvlIgKUmF3TmWNMdAddpgAg`;
    const ROCKRUNNER_CLASS_IMG = `https://drive.google.com/uc?id=${ROCKRUNNER_CLASS_IMG_ID}`;

    LootArr.push(new DNELootCard("class-rockrunner", "Рокраннер", ROCKRUNNER_CLASS_LONGLINE, ROCKRUNNER_CLASS_IMG, 1, 0, "Клас", ROCKRUNNER_CLASS_SHORTLINE, "", true, true, "class"));



    const GABE_LONGLINE = "Любить своїх фанів. Відповідає на твої імейли. Оплачує своїм робітникам та їх родинам подорож на Гаваї.<br><br>Звісно в нього ти знайдеш найкращий лут, або навідь зможеш придбати.";
    LootArr.push(new DNELootCard("gabe", "Гейб", GABE_LONGLINE, "https://lh6.googleusercontent.com/7i6mSHABzuXys1AYpZyzxTxgHSPfoMZIdRPKBJeCvwtBcvx8L7arDexJJF2ODvT6HQY=w2400", 0, 0, "Мільярдер", GABE_LONGLINE, "", true, true, "npc"));

    // Гейм-майстер
    //
    //
    const GM_LONGLINE = "Ти - гейм-майстер, розум всесвіту в який отримують запрошення Гравці. Історія їх рішень веде свою розповідь твоїм мовчанням та закінчується твоїм словом.";
    const GM_SHORTLINE = `Ти - гейм-майстер, розум всесвіту в який отримують запрошення Гравці.<br><br> Історія їх рішень веде свою розповідь твоїм мовчанням та закінчується твоїм словом.`;
    const GM_IMG_ID = ``;
    const GM_IMG = `https://lh3.googleusercontent.com/ZTuvzKcI1DXRXzBe7dMlO1oS1TH9KWmfNayttkFz6fw6wEnptPQozduYQHDtjSZOE4M=w2400`;

    LootArr.push(new DNELootCard("gm", "Гейм-майстер", GM_LONGLINE, GM_IMG, 0, 0, "А", GM_SHORTLINE, "", true, true, "class"));

    // Міхалич
    //
    //
    const MICKHALYCH_LONGLINE = `
        Є справа, друже. Треба знайти декого у місті.<br>
        Він ніс мені важливу інформацію. Зник він десь у районі мосту. Його треба знайти та забрати інформацію, у живого чи мертвого — мені все одно.<br>
        <br>Знайди Вовка на локації, розпитай його. Напевно, він знає, де той може бути.
    `;
    const MICKHALYCH_SHORTLINE = `Тримає Магазин рідкостей у Києві. Хоч і скупий, та досвідчені Шинобі його поважають.<br><br> За свої послуги бере багато, але допомагає новачкам вижити.`;
    const MICKHALYCH_IMG_ID = `1JEkeyP47FTPN8fUhaD-XXMuacyn7hPtE`;
    const MICKHALYCH_IMG = `https://drive.google.com/uc?id=${MICKHALYCH_IMG_ID}`;

    LootArr.push(new DNELootCard("michalych", "Міхалич", MICKHALYCH_LONGLINE, MICKHALYCH_IMG, 1, 0, "Найомничок", MICKHALYCH_SHORTLINE, "", true, true, "npc"));

    LootArr.push(new DNELootCard("support", "Найомничок", "Можеш застосувати на нього ще один клас та дати йому одну шмотку. Якщо втрачаєш Найомничка, клас до тебе повертається, та шмотку втрачаєш із ним. Можеш підставити Найомничка щоб піти від відповідальності за провальний івент. Тримай Найомничка перед собой поряд с іншими айтемами.", "https://lh4.googleusercontent.com/SMs5epImEfomWNvE5FJFJgtvVK3inDgX5oGiaQmwvORuLEMhIkBFn6qaUgMDN216x8U=w2400", 1, 0, "", STRINGS.COMPANION_SHORTLINE, "", true, true, "npc"));

    const SONYA_LONGLINE = `Бот-найомничок в уборі андроіда, може допомогати, виконуючи прості команди. При активації система дозволяє завантажити будь-яку особистість, що була попередньо записана на носій пам'яті. Відрізняється від інших Найомничків тим що у якості головного модулю встановлена акустична система XB77 із штучним інтелектом Hypnosoft. З встановленою Кібердекою має здатність завантажуваи саунд з будь-яких ресурсів, розпізнавати його та створювати інтерактивні плей-листи. Тож фактично має здатність виконувати роль DJ. Можеш застосувати на нього ще один клас та дати йому одну шмотку. Якщо втрачаєш Найомничка, клас до тебе повертається, та шмотку втрачаєш із ним. Можеш підставити Найомничка щоб піти від відповідальності за провальний івент. Тримай Найомничка перед собой поряд с іншими айтемами.`;
    const SONYA_SHORTLINE = `Бот-найомничок в уборі андроіда, може допомогати, виконуючи прості команди.<br><br> Завантажувати будь-яку особистість та саунд з будь-яких ресурсів і розпізнавати їх, фактично виконуючи роль DJ або звичайного Найомничка. <br><br>Дай йому клас та шмотку за бажанням.`;
    const SONYA_IMG_ID = `1kxGyXmYD_Abakvcrc26JAIsNmFZdKiOV`;
    const SONYA_IMG = `https://drive.google.com/uc?id=${SONYA_IMG_ID}`;
    LootArr.push(new DNELootCard("sonya-xb77", "Sonya XB77", SONYA_LONGLINE, SONYA_IMG, 1, 0, "Бот-Найомничок", SONYA_SHORTLINE, "", true, true, "npc"));

    // Хайред
    //
    //
    const HIRED_LONGLINE = "";
    const HIRED_SHORTLINE = `Молодий стажер з Пекла, не боїться важкої праці та чудово керує персоналом.`;
    const HIRED_IMG_ID = `1croBMIMlSuDqFjHU9U5Z1IQP_87SGrLG`;
    const HIRED_IMG = `https://drive.google.com/uc?id=${HIRED_IMG_ID}`;

    LootArr.push(new DNELootCard("hired", "Хайред", HIRED_LONGLINE, HIRED_IMG, 1, 0, "Найомничок", HIRED_SHORTLINE, "", true, true, "npc"));

    // Снуп
    //
    //
    const SNOOP_LONGLINE = "";
    const SNOOP_SHORTLINE = `Легенда Хіп-Хоп культури, завжди на висоті і готовий до фристайлу, завжди привітний і перманентно палає.`;
    const SNOOP_IMG_ID = `1_LtxoMzbS3aPCJ3ASGmHtK_tdojGRbFd`;
    const SNOOP_IMG = `https://drive.google.com/uc?id=${SNOOP_IMG_ID}`;

    LootArr.push(new DNELootCard("snoop-dog", "Снуп Дог", SNOOP_LONGLINE, SNOOP_IMG, 1, 0, "Найомничок-MC", SNOOP_SHORTLINE, "", true, true, "npc"));

    // Ребека
    //
    //
    const REBECA_LONGLINE = "";
    const REBECA_SHORTLINE = `Вона повернулась, щоб змінити свою долю назавжди.`;
    const REBECA_IMG_ID = `1d2_a75c3KIiNDvajEy8-1VUJXaNsX-2B`;
    const REBECA_IMG = `https://drive.google.com/uc?id=${REBECA_IMG_ID}`;

    LootArr.push(new DNELootCard("rebeca", "Ребека", REBECA_LONGLINE, REBECA_IMG, 1, 0, "Найомничок", REBECA_SHORTLINE, "", true, true, "npc"));


    //  Лусіо
    //
    //
    const LUCIO_LONGLINE = "";
    const LUCIO_SHORTLINE = `Try to match <br>this BPM!`;
    const LUCIO_IMG_ID = `1TwF8NwC7gpd2NJQY4lEi0c48npZx4b0F`;
    const LUCIO_IMG = `https://drive.google.com/uc?id=${LUCIO_IMG_ID}`;

    LootArr.push(new DNELootCard("lucio", "Лусіо", LUCIO_LONGLINE, LUCIO_IMG, 1, 0, "Найомничок-DJ", LUCIO_SHORTLINE, "", true, true, "npc"));


    // Лялька
    //
    //
    const DOLL_LONGLINE = "";
    const DOLL_SHORTLINE = `Welcome home, good hunter`;
    const DOLL_IMG_ID = `1nezBWRaDGRcT2zR4oM3nCgaDyoIuNcxH`;
    const DOLL_IMG = `https://drive.google.com/uc?id=${DOLL_IMG_ID}`;

    LootArr.push(new DNELootCard("doll", "Doll", DOLL_LONGLINE, DOLL_IMG, 1, 0, "Найомничок", DOLL_SHORTLINE, "", true, true, "npc"));

    LootArr.push(new DNELootCard("mechanic", "Механік", "Механік здатен виконати будь-яку чоловічу роботу по дому, в машині або на івенті. Сильний чоловік що працює за розумні гроші. Має автівку вантажного классу та водійське посвідчення", "https://lh4.googleusercontent.com/Fut_jQUzHbDUFJ9siml-QsQQQQFrYamdaVff8SL-Uqi9TiKx2rVQKapBRaq6PmOwGyA=w2400", 1, 0, "Найомничок", "Сильний чоловік що працює за розумні гроші. Має - автівку вантажного классу, посвідчення.", "", true, true, "npc"));

    // Бойовий Механік
    //
    //
    const COMBAT_MECHANIC_LONGLINE = "Бойовий механік здатна виконати будь-яку роботу не тільки в приміщенні або машині, а навідь на полі бою та прямо під час сутички. Незамінний помічник, елітного рівня, що виручить усюди.";
    const COMBAT_MECHANIC_SHORTLINE = `Бойовий механік здатна виконати будь-яку роботу не тільки в приміщенні або машині, а навідь на полі бою та прямо під час`;
    const COMBAT_MECHANIC_IMG_ID = `1-WjUmxxPEkLk0vpKiceiQqUaTFVPk3x1`;
    const COMBAT_MECHANIC_IMG = `https://drive.google.com/uc?id=${COMBAT_MECHANIC_IMG_ID}`;

    LootArr.push(new DNELootCard("combat-mechanic", "Бойовий Механік", COMBAT_MECHANIC_LONGLINE, COMBAT_MECHANIC_IMG, 1, 0, "Найомничок", COMBAT_MECHANIC_SHORTLINE, "", true, true, "npc"));

    LootArr.push(new DNELootCard("porn-prince", "Порно-принц", "Здатен створити гарячий відео-контент з будь-якого творчого задуму. Спробуй використати отримані матеріали щоб розповісти у відео-форматі про свою справу. Хтось може звернути на це увагу та запропонувати тобі роботу.", "https://lh4.googleusercontent.com/FZFTYr__oUeAQtVUxdlG0AT7A2BMWGKmCL9KECct9KeZK6iacLswIjCpc2aEWfqjk64=w2400", 1, 0, "Найомничок", "Здатен створити гарячий відео-контент з будь-якого творчого задуму на твоєму івенті.<br><br> Забезпеч його апаратурою,усе інше - справа техніки.", "", true, true, "npc"));

    // Єва
    //
    //
    const EVA_LONGLINE = "";
    const EVA_SHORTLINE = `Молода дівчина успішно стрімить, майструє крихітні прикраси з епоксидної смоли та дарує Найомничкам, заряджаючи їх енергією.`;
    const EVA_IMG_ID = `15FWesuvomOmKaToRH-dkPdOzzi-HaEww`;
    const EVA_IMG = `https://drive.google.com/uc?id=${EVA_IMG_ID}`;

    LootArr.push(new DNELootCard("eva", "Єва", EVA_LONGLINE, EVA_IMG, 1, 0, "Найомничок-Стрімер", EVA_SHORTLINE, "", true, true, "npc"));

    LootArr.push(new DNELootCard("alise", "Aліс`е", "Проклятий янгол з сумними очима. Чудово продає речі, бо здатна відрізнити оригінал від підробки та цінує свій відсоток.", "https://lh4.googleusercontent.com/a-hieOJkrw-3bWjz8EawHojHcLcH78bHvYAFnIN9rew2VPZUxg8mTzcrMJb791fwPL4=w2400", 1, 0, "Найомничок", "Проклятий янгол з сумними очима. Чудово продає речі, бо здатна відрізнити оригінал від підробки та цінує свій відсоток.", "", true, true, "npc"));

    // Макіма
    //
    //
    const MAKIMA_LONGLINE = "";
    const MAKIMA_SHORTLINE = `Високопоставлений мисливець на демонів, що служить у Бюро Громадської Безпеки.`;
    const MAKIMA_IMG_ID = `1DiP8r8WrcyiHnKjJct9VymEEeETT1WjT`;
    const MAKIMA_IMG = `https://drive.google.com/uc?id=${MAKIMA_IMG_ID}`;

    LootArr.push(new DNELootCard("makima", "Макіма", MAKIMA_LONGLINE, MAKIMA_IMG, 1, 0, "Найомничок", MAKIMA_SHORTLINE, "", true, true, "npc"));


    // Мисливець
    //
    //
    const HUNTER_LONGLINE = "";
    const HUNTER_SHORTLINE = `Полює на монстрів. Захистить твій івент від них за потреби та допоможе здихатись Відповідальності за провал.`;
    const HUNTER_IMG_ID = `1-uOsrs2xqQVCWqsCu46h9m_ddf-AJwnI`;
    const HUNTER_IMG = `https://drive.google.com/uc?id=${HUNTER_IMG_ID}`;

    LootArr.push(new DNELootCard("lilith", "Ліліт", HUNTER_LONGLINE, HUNTER_IMG, 1, 0, "Найомничок", HUNTER_SHORTLINE, "", true, true, "npc"));

    // Діксі
    //
    //
    const DIXI_LONGLINE = "";
    const DIXI_SHORTLINE = `Професійний боєць проїздом з Найт-Сіті. Має найдсучасне кібернетичне тіло та схильність до Кіберпсихозу.<br><br> Її дії не передбачувані, а зброя смертоносна.`;
    const DIXI_IMG_ID = `1fuTZ9EWIwGcrhbLsUtMFm5J_YYdY_95X`;
    const DIXI_IMG = `https://drive.google.com/uc?id=${DIXI_IMG_ID}`;

    LootArr.push(new DNELootCard("dixi", "Діксі", DIXI_LONGLINE, DIXI_IMG, 1, 0, "Найомничок", DIXI_SHORTLINE, "", true, true, "npc"));


    // i2B
    //
    //
    const I2B_LONGLINE = "";
    const I2B_SHORTLINE = `Бойовий-андроід із твоїх мрій. Допомогає, захищає, муркоче.`;
    const I2B_IMG_ID = `1DRcSPPfyUf42kikvepWXU8N780PGqJ62`;
    const I2B_IMG = `https://drive.google.com/uc?id=${I2B_IMG_ID}`;

    LootArr.push(new DNELootCard("i2b", "i2B", I2B_LONGLINE, I2B_IMG, 1, 0, "Найомничок", I2B_SHORTLINE, "", true, true, "npc"));

    LootArr.push(new DNELootCard("vargus", "Варгус", "Варгус має талант до продажу речей людям та живе щасливим життям, підпрацьовуючи в секс-шопі, у вільний час від книжок та рольових ігор. З радістю допоможе тобі в продажі товарів на івентах, та обов'язково візьме відсоток. Навіть не думай, в неї є подруга.", "https://lh3.googleusercontent.com/6gH7UsITDPPYen1jxeGornc0u1qERrzJASIDw5yNCQs03ptnsEWqH1fi-LrecRVtM9k=w2400", 1, 0, "Найомничок", "Варгус має талант до продажу речей людям та з радістю допоможе тобі з цим за розумний відсоток", "", true, true, "npc"));
    LootArr.push(new DNELootCard("olivye", "Олів'є", "Олів'є - людина перформанс. Він перетворить на захопливу пригоду навідь звичайнісінький день. Перетворить на товар буквально будь-що, з радістю допоможе тобі в продажі та обов'язково візьме відсоток.", "https://lh6.googleusercontent.com/UPZBku2FlEp8bXCBMhdsRXu2ZRWVrAyLidobt8lMhi82Fudyxexfi7rwCHubrAGSgM4=w2400", 1, 0, "Найомничок", "Олів'є - людина перформанс. Перетворить на товар буквально будь-що, з радістю допоможе тобі в продажі та обов'язково візьме відсоток.", "", true, true, "npc"));
    LootArr.push(new DNELootCard("wednesday", "Середа", "Середа переїхала з Харкова і захопилася Київською натурою, від тоді нічне життя столиці її не відпускає. Має талант до продажу рослин та речей з органічних матеріалів. З радістю допоможе тобі в продажі товарів на івентах, та обов'язково візьме відсоток.", "https://lh3.googleusercontent.com/4sGFySzeBod97kvEwmqncV9wHszsLBoE0qDZ5rujFfsqjfU6eqYpjdLnKP63VXSI7gE=w2400", 1, 0, "Найомничок", "Має талант до продажу рослин та речей з органічних матеріалів. З радістю допоможе тобі в продажі товарів на івентах, та обов'язково візьме відсоток.", "", true, true, "npc"));
    LootArr.push(new DNELootCard("cleo", "Клео", "Клео - надійний товариш, доки ти її друг. Переїхавши з Берліну почала займатися організацією і доводі успішно. Має власне авто, талант до продажу та організації, та працює лише за ідею і тільки з одним гравцем за всю партію.", "https://lh3.googleusercontent.com/a8JzDrNSRIgDG_m4yH4-A5kttXRu6SM6D1APBlOBn4WhIdT4bpUA9_YtHB_yPejzOlc=w2400", 1, 0, "Найомничок-DJ", "Має власне авто, талант до продажу та організації, та працює лише за ідею і тільки з одним гравцем за всю партію.", "", true, true, "npc"));

    // Сенсей
    //
    //
    const SENSEI_LONGLINE = "";
    const SENSEI_SHORTLINE = `Помстись ворогам. Поверни свою честь. Опануй мистецтво смертельного бою.`;
    const SENSEI_IMG_ID = `13eiuBzIQXINrQvxyr6OdlaLiS_yJLMDN`;
    const SENSEI_IMG = `https://drive.google.com/uc?id=${SENSEI_IMG_ID}`;

    LootArr.push(new DNELootCard("sensei", "Сенсей", SENSEI_LONGLINE, SENSEI_IMG, 1, 0, "Найомничок", SENSEI_SHORTLINE, "", true, true, "npc"));

    LootArr.push(new DNELootCard("zer0", "0", "Смертельно небезпечний та фантастично дорогий.", "https://lh3.googleusercontent.com/iLWF6yChVeG_1Sstqxehiaq2TEH7Tv3PNkHekUKIbKoZ_04FxB-FF5K5LXocBLO-Xjo=w2400", 1, 0, "Найомничок", "Смертельно небезпечний та фантастично дорогий.", "", true, true, "npc"));

    // 47
    //
    //
    const F7_LONGLINE = `Agent 47 (also known as \"The Hitman\", or simply by his birth name \"47\", ... the first time as well as Lucas Grey's death, with 47 saying \"he made it count\".`;
    const F7_SHORTLINE = `The IOI<br> bold experiment also known<br> as \"The Hitman\", or simply<br> by his birth name \"47\"`;
    const F7_IMG_ID = `1UHaztzmNF7XWuEwebmtHfpEjB6T2mit6`;
    const F7_IMG = `https://drive.google.com/uc?id=${F7_IMG_ID}`;

    LootArr.push(new DNELootCard("i47", "47", F7_LONGLINE, F7_IMG, 1, 0, "Найомничок", F7_SHORTLINE, "", true, true, "npc"));

    LootArr.push(new DNELootCard("i61", "61", "Trust me, i`am i61", "https://lh6.googleusercontent.com/qumGC_im9tZgoM_aMaItCmCqO37bUO2EYilop2w6PZPSvJQbXmfomdP_tyjrrWux-Rk=w2400", 1, 0, "Найомничок", "Trust me, i`am i61", "", true, true, "npc"));

    // Ghost Dog
    //
    //
    const GHOST_DOG_LONGLINE = "";
    const GHOST_DOG_SHORTLINE = ``;
    const GHOST_DOG_IMG_ID = `1UL2biMpCnSviaVt7mg4goGdIH4mmcf4N`;
    const GHOST_DOG_IMG = `https://drive.google.com/uc?id=${GHOST_DOG_IMG_ID}`;

    LootArr.push(new DNELootCard("ghost-dog", "Ghost Dog", GHOST_DOG_LONGLINE, GHOST_DOG_IMG, 1, 0, "Найомничок", GHOST_DOG_SHORTLINE, "", true, true, "npc"));

    // LootArr.push(new DNELootCard("upgrade", "UPGRADE", "Після страшенних травм важко сумісних з життям ви стали учасником державної програми відновлення Апгрейд. Титанові кістки в поєднанні з надсучасним інтерфейсом карбонового спинного мозку роблять можливість в автоматичному режимі чинити опір агресору у ситуаціях рівня небезпеки S та нижче, поки ваша свідомість повністю підтримує лінгвістичні здібності.", "https://lh3.googleusercontent.com/hjjlI54RXzntVQCU3Wluj_wZMKhlxkPth3kQGXeHRqVjyHAeJunEYCI2z5LhYWMup2A=w2400", 1, 0, "", "Після страшенних травм важко сумісних з життям ви стали учасником державної програми відновлення Апгрейд.<br> Титанові кістки в поєднанні з надсучасним інтерфейсом карбонового спинного мозку роблять можливість в автоматичному режимі чинити опір агресору у ситуаціях рівня небезпеки S та нижче.<br><br> Тим часом ваша свідомість повністю підтримує лінгвістичні здібності.", "", true, true, "anti"));
    LootArr.push(new DNELootCard("upgrade", "UPGRADE", "Після страшенних травм важко сумісних з життям ви стали учасником державної програми відновлення Апгрейд. Титанові кістки в поєднанні з надсучасним інтерфейсом карбонового спинного мозку роблять можливість в автоматичному режимі чинити опір агресору у ситуаціях рівня небезпеки S та нижче, поки ваша свідомість повністю підтримує лінгвістичні здібності.", "https://lh3.googleusercontent.com/hjjlI54RXzntVQCU3Wluj_wZMKhlxkPth3kQGXeHRqVjyHAeJunEYCI2z5LhYWMup2A=w2400", 1, 0, "", "Після страшенних травм важко сумісних з життям ви стали учасником державної програми відновлення Апгрейд.<br> Титанові кістки в поєднанні з надсучасним інтерфейсом карбонового спинного мозку роблять можливість в автоматичному режимі чинити опір агресору у ситуаціях рівня небезпеки S та нижче.<br><br> Тим часом ваша свідомість повністю підтримує лінгвістичні здібності.", "", false, "anti"));
    LootArr.push(new DNELootCard("machete", "Мачете", "Мачете приєднався до ЗСУ щоб вбивати русню в Україні, був взятий в полон під Донецьком, де втік з конц-табору РФ і заліг на дно в Києві. Буде радий будь якій роботі, чудово впорається з охороною, фейсконтролем та зйомками в пілотних епізодах.", "https://lh5.googleusercontent.com/gExfGHO7RIkKcdu0kC-md2uTZldiZH-sD4b_ZkQ43LNGKiHngWzWKQwIq1tjSJMRKHg=w2400", 1, 0, "Найомничок", "Охоронничок від бога і співрозмовник чудовий, легко впорається навіть з баром або фейсом", "", true, true, "npc"));
    // LootArr.push(new DNELootCard("machete", "Мачете", "Мачете приєднався до ЗСУ щоб вбивати русню в Україні, був взятий в полон під Донецьком, де втік з конц-табору РФ і заліг на дно в Києві. Буде радий будь якій роботі, чудово впорається з охороною, фейсконтролем та зйомками в пілотних епізодах.", "https://lh5.googleusercontent.com/gExfGHO7RIkKcdu0kC-md2uTZldiZH-sD4b_ZkQ43LNGKiHngWzWKQwIq1tjSJMRKHg=w2400", 1, 0, "Найомничок", "Охоронничок від бога і співрозмовник чудовий, легко впорається навіть з баром або фейсом", "", true));
    LootArr.push(new DNELootCard("sansa-stark", "Санса Старк", "Молода та відважна рудовласа бестія з півночі. Відома шанувальниця темного етнічного звучання в важкій музиці та впевнений організатор івентів в жанрі Rock. Легендарна організаторка серії підпільних вечірок Зима Близько на підтримку ЗСУ.", "https://lh3.googleusercontent.com/s0OH3vKnb3jKHXlJSTSsxvMBqGntiTV2oIIqeBU-pkH0IDMx_6ny0TrgxD8OnMl_nRM=w2400", 1, 0, "Найомничок-Рокраннер", "Відома шанувальниця темного етнічного звучання в важкій музиці та впевнений організатор івентів в жанрі Rock.", "", true, true, "npc"));
    LootArr.push(new DNELootCard("naruto", "Наруто", "Завжди прийде на поміч якщо ти його друг. З цип хлопцем і в вогонь і в воду, ніколи тебе не залишить, навіть якщо перейшов до іншого гравця.", "https://lh5.googleusercontent.com/_kuetu2hY9sUDU93DjJByiZBegvmbwZQmn6PgK6InJ8cba4gankCVVUyneRUC6iPxVw=w2400", 1, 0, "Найомничок", "Завжди прийде на поміч якщо ти його друг. З цип хлопцем і в вогонь і в воду, ніколи тебе не залишить, навіть якщо перейшов до іншого гравця.", "", true, true, "npc"));
    LootArr.push(new DNELootCard("shadow", "Тінь", "Тінь вирішив відпочити від свого всесвіту і чілить у Києві останні місяці. Кажуть від привіз із собою смарагд Хаосу. Спробуй спитати як в нього справи, для твоєї вечірки може бути корисною його знатність рухатись з неймовірною швидкістю.", "https://lh5.googleusercontent.com/GJR1NJCddA61Kyl4Yp1z01p0iskBFSzn8R4gweyV58AxrMTkffw9FFZ4Gh7MmhosYK8=w2400", 1, 0, "Найомничок", "Тінь вирішив відпочити від свого всесвіту і чілить у Києві.", "", true, true, "npc"));
    LootArr.push(new DNELootCard("gorillaz", "Gorillaz", "Купа підлідків зібрали Рок-гурт та вирішили спробувати свої сили у Києві. Створюють експерементальний саунд, поєднуючи Electro, Рок та Хіп-Хоп напрями. Звучить надсучасно, сподіваюсь їх хтось помітить.", "https://lh4.googleusercontent.com/-dJLEO2gYvSlpBUlUkHuc24Cegq32ZLTrn83vDiOf8-hwuYAkW8eLMHkwKoBvFT8b8k=w2400", 4, 0, "4 Найомничка", "Четверо хлопців шукають роботу.<br><br> Здається, в них власний гурт, створюють експерементальний саунд, поєднуючи<br> Electro, Рок та Хіп-Хоп.<br><br> Звучить надсучасно, сподіваюсь їх хтось помітить.", "", true, true, "npc"));

    const SAYLOR_MOON_LONGLINE = "";
    const SAYLOR_MOON_SHORTLINE = "Юна леді вчиться контролювати свої здібності, пізнаючи себе та світ творчості.<br><br> Відкриття власного клубу та створення дружньої спільноти - її пристрасть та найбільша мрія.";
    LootArr.push(new DNELootCard("saylor-moon", "Сейлор Мун", SAYLOR_MOON_LONGLINE, "https://lh3.googleusercontent.com/g5fpxKQ6LO9LYce4mmrWnTdhkwmMyx58dmMDVovS7WaoO8Qzk-fkD7Xlvi_z0L5M6FM=w2400", 1, 0, "Найомничок", SAYLOR_MOON_SHORTLINE, "", true, true, "npc"));

    // Сашко Злих
    //
    //
    const ZLYKH_LONGLINE = "";
    const ZLYKH_SHORTLINE = ``;
    const ZLYKH_IMG_ID = `1JBAF__zcZ9tyrH_zFQ5sayleNnt04glW`;
    const ZLYKH_IMG = `https://drive.google.com/uc?id=${ZLYKH_IMG_ID}`;

    LootArr.push(new DNELootCard("zlykh", "Сашко Злих", ZLYKH_LONGLINE, ZLYKH_IMG, 1, 0, "Найомничок-DJ", ZLYKH_SHORTLINE, "", true, true, "npc"));

    const TWINS_LONGLINE = "";
    const TWINS_SHORTLINE = "Близнюки чудово розуміються на командній роботі, як пристрасть до Індустріального звучання, вона в них в крові.";
    LootArr.push(new DNELootCard("twins", "Близнята", TWINS_LONGLINE, "https://lh6.googleusercontent.com/_X5UuUmOsyvCwAK1wa7nsYwh7MQzvX-N0eauLx9xBo_fZt9rmliWAh1ytWR-mqpNSIk=w2400", 2, 0, "2 Найомничка", TWINS_SHORTLINE, "", true, true, "npc"));


    const CHAOS_GREEN_LONGLINE = "Подвоює бонус усієї команди до виправданих очікувань аудиторії від івенту. Якщо його використовує Тінь, бонус потроється.";
    LootArr.push(new DNELootCard("chaos-green", "Смарагд Хаосу", CHAOS_GREEN_LONGLINE, "https://lh4.googleusercontent.com/unGQKQaPdQNlXOFsTaxOl10sHiwGJaucGGsQUiXC8DD_IaS6e25CJwWt4aTLGGxSCqM=w2400", 7, "200K/7K", "", CHAOS_GREEN_LONGLINE, "", true, true, "loot"));
    LootArr.push(new DNELootCard("lady-falko", "Леді Фалько", "Таємнича княжа особа веде свій бізнес чисто та обачно. Латекс та шкіра - для неї головна пристрасть, а про її івенти складають легенди.", "https://lh6.googleusercontent.com/YlzcEVCM2vJECjlLpkSl2kZqlj5T6rCIUQBVQSB2hXzHi6sOsZLIILTVRWm5HM4l9IE=w2400", 1, 0, "Найомничок", "Таємнича княжа особа веде свій бізнес чисто та обачно. Латекс та шкіра - її пристрасть, про її івенти складають легенди.", "", true, true, "npc"));
    LootArr.push(new DNELootCard("iron-alchemic", "Сталевий Алхімік", "Всім іноді потрібна перерва. Рок музика дала можливість Эдварду Элрику зробити її для себе. Кажуть він чудово проявляє себе в організації івентів з рок-музикою. Чутово мати такого хлопця в команді, якщо збираєшся влаштувати івент в цьому жанрі.", "https://lh6.googleusercontent.com/h2uF5Q439t611fW6MQEOEFbADuixR5J35oRrZQJmlWR05oEi8viPeyzk5vRPppS1-ms=w2400", 1, 0, "Найомничок-Рокраннер", "Всім іноді потрібна перерва. Рок музика дала можливість Эдварду зробити її для себе.", "", true, true, "npc"));
    LootArr.push(new DNELootCard("philosopher-stone", "Філососький камінь", "Дозволяє три рази за гру перетворити одну карту айтему на будь-яку іншу картку айтему. Навіть якщо ця картка одна в грі і вже комусь належить. Айтем, на який було використано камінь набуває усіх властивостей нового айтему, а попередні - втрачає. Від тепер це дві ідеальні копії.", "https://lh6.googleusercontent.com/ShUiPYAGTjXlxpRycl_a4SJeoVkFtgT2nk08pURKbk4K6dwp5Krx8q0Nj8HwC4p3O7Q=w2400", 8, "333K", "Тільки для Сталевого Алхіміка", "Дозволяє три рази за гру перетворити одну карту айтему на будь-яку іншу картку айтему. <br><br>Айтем, на який було використано камінь набуває усіх властивостей нового айтему, а попередні - втрачає.<br>Від тепер це дві ідеальні копії.", "", true, true, "loot"));
    // LootArr.push(new DNELootCard("elias-jensen", "Alias Jensen", "", "https://drive.google.com/file/d/1AaIOpGM8FoHQ-LNlqXVIUDvyru5Wl2hC/view?usp=share_link", 1, 0, "Найомничок-MC", "Амбітний новачок нізвідки шукає роботу. Має талант до продажу, пристрасть до Хіп-Хопу та обмаль часу.", "", true, true, "npc"));

    // Elias Jensen
    //
    //
    const ELIAS_JENSEN_LONGLINE = "";
    const ELIAS_JENSEN_SHORTLINE = `Легендарний DJ Детройтської сцени та професійний продюсер з платиновими платівками в таких жанрах як Industrial та EDM`;
    const ELIAS_JENSEN_IMG_ID = `1AaIOpGM8FoHQ-LNlqXVIUDvyru5Wl2hC`;
    const ELIAS_JENSEN_IMG = `https://drive.google.com/uc?id=${ELIAS_JENSEN_IMG_ID}`;

    LootArr.push(new DNELootCard("elias-jensen", "Elias Jensen", ELIAS_JENSEN_LONGLINE, ELIAS_JENSEN_IMG, 1, 0, "Найомничок-DJ", ELIAS_JENSEN_SHORTLINE, "", true, true, "npc"));

    // Toxic
    //
    //
    const TOXIC_LONGLINE = "Купа новачків шукає роботу у місті. Один з таких, кажуть раньше був кухарем, знається на організації публічних івентів. Від MCів завжди чекай біди, а від невідомих MCів тим паче.";
    const TOXIC_SHORTLINE = `Амбітний новачок нізвідки шукає роботу. Має талант до продажу, пристрасть до Хіп-Хопу та обмаль часу аби зустрітись.`;
    const TOXIC_IMG_ID = `1-xnMSwzvFqT6NizOFr-4LOruZD1AMqOa`;
    const TOXIC_IMG = `https://drive.google.com/uc?id=${TOXIC_IMG_ID}`;

    LootArr.push(new DNELootCard("toxic", "Sertolovo Toxic", TOXIC_LONGLINE, TOXIC_IMG, 1, 0, "Найомничок-MC", TOXIC_SHORTLINE, "", true, true, "npc"));
    LootArr.push(new DNELootCard("i-sneeker-trunk", "Багажник кросів", "Багажник рідкісних вінтажних кросів, як мене запевнив їх продавець. Звідки вони в нього, я не питав. Цю купу брухту в ідеалі привести до ладу та реалізувати. Гравець або найомничок з класом Продавець здатен продати їх втричі дорожче, але обов'язково візьме відсоток.", "https://lh3.googleusercontent.com/cq-AdJ91YqaIIgmGibDDEP5Vpi77Ppzb3rXXxMzA14r--Tnk1ODXZGpnEaKjMQgjqso=w2400", 0, "80K", "Велика", "Багажник рідкісних вінтажних кросів, як мене запевнив їх продавець.", "", true, true, "anti"));
    // Ілон Таск
    LootArr.push(new DNELootCard("tusk", "Ілон Таск", "Таск регулярно донатить ЗСУ на визволення Криму з під контролю Путлера, дарує старлінки та розробляє план розвитку Нового Донецьку. Чудово розуміється у розробці веб-сайтів, апок для смартфонів та дронах. Відчуває ностальгію по власній юності тож завжди радий допомогти молодим даруванням з втіленням найсміливіших ідей.", "https://lh6.googleusercontent.com/paU4WKE38gv_ftC9uXIsGNXoNp0_e8xiVa133tyR6s4zR2ZqkDYmirkcVeRZtRJfQU4=w2400", 1, 0, "Найомничок", "Чудово розуміється на Electroнній музиці та техніці, може домовитись їх придбати вдвічі дешевше, не просто ж так він мільярдер.", "", true, true, "npc"));
    // Рік С-137
    LootArr.push(new DNELootCard("rick", "Рік С-137", "Так, той самий. В нього завжди при собі його портальна пушка та хто в біса зна що ще. Добре подумай яку справу довірити цій людині. Ніхто не знає що станеться далі.", "https://lh6.googleusercontent.com/FIZwLsrD-krhTSF5hdjlhDt7sFSTjTlmQIGvHxLaLeeA8ceUHPohn6i1k3t8yiDqi2Y=w2400", 1, 0, "Найомничок", "Так, той самий. З ядерним перегаром, літаючою тарілкою зі сміття та мікровсесвітом, накшталт твого, під капотом", "", true, true, "npc"));

    // Дідусь Влад
    //
    //
    const VLAD_LONGLINE = "";
    const VLAD_SHORTLINE = ``;
    const VLAD_IMG_ID = `166GMUPmFsJQBKEHPj-tbfGM02yYqBJrz`;
    const VLAD_IMG = `https://drive.google.com/uc?id=${VLAD_IMG_ID}`;

    LootArr.push(new DNELootCard("vlad", "Дідусь Влад", VLAD_LONGLINE, VLAD_IMG, 1, 0, "Найомничок", VLAD_SHORTLINE, "", true, true, "npc"));

    // A
    //
    //
    const A_LONGLINE = "";
    const A_SHORTLINE = ``;
    const A_IMG_ID = `1hQd9OPzuLXvkNyudTTH7dfBvRLBwBuI2`;
    const A_IMG = `https://drive.google.com/uc?id=${A_IMG_ID}`;

    LootArr.push(new DNELootCard("a", "A", A_LONGLINE, A_IMG, 1, 0, "Найомничок", A_SHORTLINE, "", true, true, "npc"));

    // D
    //
    //
    const D_LONGLINE = "";
    const D_SHORTLINE = ``;
    const D_IMG_ID = `1PuJGV4EQ74OJ2R2XmZ8y3ZpTFnCwiM6G`;
    const D_IMG = `https://drive.google.com/uc?id=${D_IMG_ID}`;

    LootArr.push(new DNELootCard("d", "D", D_LONGLINE, D_IMG, 1, 0, "Найомничок", D_SHORTLINE, "", true, true, "npc"));

    LootArr.push(new DNELootCard("ricks-second-portalgun", "Запасна портальна пушка Ріка", "Дозволяє миттєво переміщатись з пункту А в пункт Б. В часі з нею не поподорожуєш, бо Рік зробив її щоб Морті міг швидко ходити за пивом. Не заправляй її спрайтом.", "https://lh5.googleusercontent.com/FvLcgRozAUKRG7UniV9wQnIoNEvckTZ_g8DvU0so9nsPalQfPtkGfHzsNVH14obqe6o=w2400", 5, "300К/5К", "Авто"));
    LootArr.push(new DNELootCard("v", "V", "Так, поклич цього хлопця, що може піти не так?)", "https://lh6.googleusercontent.com/TGoJYG0KoqQ1oSf45SIKkFmp_6skZRJ9pmmR1vEWo6_xyFoHuCqZWI01Pi58MzRBKgg=w2400", 1, 0, "Найомничок", "Виглядає як порядний Охороничок та вправний Водій", "", true, true, "npc"));
    LootArr.push(new DNELootCard("wolf", "THE WOLF", "I solve problems", "https://lh3.googleusercontent.com/hgUIik77UVkI226aXYkYt7gtuvicht-KY4ytgoTuwB47f7gzrG93-9QI-rhgw5Y7RAk=w2400", 1, 0, "Найомничок", "I solve problems", "", true, true, "npc"));

    // GENDALF
    //
    //
    const GENDALF_LONGLINE = "";
    const GENDALF_SHORTLINE = `Старий чарівник пристосувався до нових умов.`;
    const GENDALF_IMG_ID = `1xPCA3ckLOBJTJ_cfQ2SZNbkACdnwGiUc`;
    const GENDALF_IMG = `https://drive.google.com/uc?id=${GENDALF_IMG_ID}`;

    LootArr.push(new DNELootCard("gendalf", "Гендальф", GENDALF_LONGLINE, GENDALF_IMG, 1, 0, "Найомничок", GENDALF_SHORTLINE, "", true, true, "npc"));

    const LISOVA_MAVKA_LONGLINE = "";
    const LISOVA_MAVKA_SHORTLINE = "Здатна створювати неймовірні напої з природніх речовин та залюбки реалізує свій продукт на твоєму івенті.";
    LootArr.push(new DNELootCard("lisova-mavka", "Лісова Діва", LISOVA_MAVKA_LONGLINE, "https://lh3.googleusercontent.com/gTtZ-rp5BXr_GyuAwIiSkTFBQWUmbwyyeFrc0G534MsQGLv_r6U8VonEkSm5eqW0z4E=w2400", 1, 0, "Найомничок", LISOVA_MAVKA_SHORTLINE, "", true, true, "npc"));

    // SHAMAN
    //
    //
    const SHAMAN_LONGLINE = "";
    const SHAMAN_SHORTLINE = `Майстер дихання та традиційної китайської чайної церемонії.`;
    const SHAMAN_IMG_ID = `1J_SfvUvfA1lRbiHsosm-0Hn32JaQ1HGr`;
    const SHAMAN_IMG = `https://drive.google.com/uc?id=${SHAMAN_IMG_ID}`;

    LootArr.push(new DNELootCard("shaman", "Шаман", SHAMAN_LONGLINE, SHAMAN_IMG, 1, 0, "Найомничок", SHAMAN_SHORTLINE, "", true, true, "npc"));

    // Убрать и отснять студию
    // Фото чистої студії приваблюють клієнтів, отримай два випадкові закази на руку та використовуй цю картку як бонус +2 для будь-якого івенту в ній. Фото на професійний фотоаппарат з широким об'єктивом привабить навіть найвибагливішу аудиторію.

    // Пограти
    //
    //
    const PLAY_LONGLINE = "";
    const PLAY_SHORTLINE = `Дозволь собі зануритись у світ гри на пів годинки`;
    const PLAY_IMG_ID = `1Qoa0B40mSFTaZ7pYDECC8dHgL-xufmsZ`;
    const PLAY_IMG = `https://drive.google.com/uc?id=${PLAY_IMG_ID}`;

    LootArr.push(new DNELootCard("dia-play", "Пограти", PLAY_LONGLINE, PLAY_IMG, 1, "30m", "Дія", PLAY_SHORTLINE, "", true, true, "dia"));

    // Пограти для себе
    //
    //
    const PLAY_FOR_YOURSELF_LONGLINE = "";
    const PLAY_FOR_YOURSELF_SHORTLINE = `Невимушена сесія лише для тебе. Насолоджуйся.`;
    const PLAY_FOR_YOURSELF_IMG_ID = `1MpvpA01Rw-lGIx-7tYMY7Rc8TK_1ZgeN`;
    const PLAY_FOR_YOURSELF_IMG = `https://drive.google.com/uc?id=${PLAY_FOR_YOURSELF_IMG_ID}`;

    LootArr.push(new DNELootCard("dia-play-for-yourself", "Пограти для себе", PLAY_FOR_YOURSELF_LONGLINE, PLAY_FOR_YOURSELF_IMG, 1, "20m", "Дія", PLAY_FOR_YOURSELF_SHORTLINE, "", true, true, "dia"));

    // Нічна гра
    //
    //
    const DIA_NIGHT_PLAY_LONGLINE = "";
    const DIA_NIGHT_PLAY_SHORTLINE = `Одягай кегурумі, кутайся в пледик, хапай ніштяки та пішли скоріш, Сонька чекає.`;
    const DIA_NIGHT_PLAY_IMG_ID = `1EZ8ai1v7_s0ZCtbeQ8JIoXjnTPBq83Kp`;
    const DIA_NIGHT_PLAY_IMG = `https://drive.google.com/uc?id=${DIA_NIGHT_PLAY_IMG_ID}`;

    LootArr.push(new DNELootCard("dia-night-play", "Нічна гра", DIA_NIGHT_PLAY_LONGLINE, DIA_NIGHT_PLAY_IMG, 1, "1⚡ 2h", "Дія", DIA_NIGHT_PLAY_SHORTLINE, "", true, true, "dia"));

    const CALL_MARSELLUS_LONGLINE = "";
    const CALL_MARSELLUS_SHORTLINE = "В тебе нема проблем, друже";
    LootArr.push(new DNELootCard("call-marsellus", "Подзвонити Марселасу", CALL_MARSELLUS_LONGLINE, "https://lh5.googleusercontent.com/kV-iYymA8Iz_UVYOgazjCYk6Mcy_IBTzqnqQ78M_VWGrrY5EIKbeY11VDKhu1Qxq7nw=w2400", 0, "5⚡", "Дія", CALL_MARSELLUS_SHORTLINE, "", true, true, "dia"));

    // Записати сет
    LootArr.push(new DNELootCard("make-dj-set", "Записати професійний DJ-сет", "Дає можливість записати професійний DJ-сет як тільки тобі закортить. Необхідна лише аппаратура та за бажанням камера. Якщо маєш студію, використай цю карту лише за рахунок енергії. Зніми на камеру та зроби трансляцію щоб отримати +1 до бонусу за кожну дію та шанс своїм демо привернути увагу лейблів або отримати проект.", "https://lh5.googleusercontent.com/iZqspQQvU2AWz67qOcOdoM3uuV8_O0uFMuIIsdqnu1HpkaO_d5ASSNcKFsZTyrkNgbg=w2400", 1, "1⚡ 500", "Дія", "Дає можливість записати професійний DJ-сет як тільки тобі закортить.<br><br> Необхідна лише аппаратура та, за бажанням, камера.<br><br> Якщо маєш студію, використай цю карту лише за рахунок енергії.", "", true, true, "dia"));
    // Записати годинний сет
    // У тебе буде година в студії з апаратурою. Бери свій контроллер та показуй що вмієш. Гравець виростивший цю Дію в свій хід гарантовано свій запис та має шанс зробити демо. В подальшій грі демо може зацікавити Лейбл, який запропонує контракт по його продюсуванню. Став своє демо на вечірках щоб його помітили.
    // // Записати сет
    // LootArr.push(new DNELootCard("make-dj-set", "Записати DJ-сет", "Дає можливість записати сет як тільки тобі закортить. Необхідні студія та аппаратура", "https://lh5.googleusercontent.com/iZqspQQvU2AWz67qOcOdoM3uuV8_O0uFMuIIsdqnu1HpkaO_d5ASSNcKFsZTyrkNgbg=w2400", 1, 1000, "Дія"));
    // Записати сет
    LootArr.push(new DNELootCard("make-live", "Запустити трансляцію", "Дає можливість привабити відвідувачів до події або показати важливий матеріал. Потребує камери та підключення до інтернету. Приваблює додаткових відвідувачів, виклади дві додаткові карти аудиторії.", "https://lh3.googleusercontent.com/2Ax7PXdSpzk73m3ANSMV11awPuvp-QAH9o-tm4_mFqahF4jie5h3XfBzofp8wZ9UkIo=w2400", 1, "1⚡ 1h", "Дія", "Приваблює додаткових відвідувачів, виклади дві додаткові карти <br>аудиторії.", "", true, true, "dia"));

    LootArr.push(new DNELootCard("dia-draw", "Малювання", "Використовуй час та енергію для отримання малюнків. Чим більше енергії та часу ти в них вкладеш, тим сильнішими вони будуть. Створення графічного зображення є однією з найдревніших медетацій винайдених людством. Від печерних малюнків кров'ю, до чорнил на папері перенесення власного бачення в матеріальний світ заворожувала людину. Просто бери та починай малювати, уява зробить усе інше.", "https://lh3.googleusercontent.com/oprP-CtoxAG5IWogg2Gn56Pu9MBNfNt35n4gQave2BvFfVA7YlExQdgtjL6t9r_kMsg=w2400", 1, "1⚡ 1h", "Дія", "Використай час та енергію для створення малюнку.<br><br> Чим більше енергії та часу ти в нього вкладеш, тим кращий результат чекатиме на тебе в кінці.<br><br>+1 малюнок в твою коллекцію", "", true, true, "dia"));

    // Код
    //
    //
    const DIA_CODE_LONGLINE = "Використовуй час, енергію та свої навички программування, щоб написати апку на js та html/css. Чим більше енергії та часу ти в них вкладеш, тим кориснішою вона буде.";
    const DIA_CODE_SHORTLINE = `Використай час, енергію та свої навички программування для створення коду.<br><br> Чим більше енергії та часу ти в нього вкладеш, тим кращий результат чекатиме на тебе в кінці.<br><br>+1 кодпен в твою коллекцію`;
    const DIA_CODE_IMG_ID = `1_xdG_U2HiygsrK20rd5EvpVAd5IactFi`;
    const DIA_CODE_IMG = `https://drive.google.com/uc?id=${DIA_CODE_IMG_ID}`;

    LootArr.push(new DNELootCard("dia-code", "Код", DIA_CODE_LONGLINE, DIA_CODE_IMG, 1, "1⚡ 1h", "Dia", DIA_CODE_SHORTLINE, "", true, true, "dia"));

    // Сон
    //
    //
    const SLEEP_LONGLINE = "";
    const SLEEP_SHORTLINE = `Відпочинь щоб відновити сили. Загорнись у теплий пледик разом с подругою на величезному ліжку, щоб отримати додаткові +1 за кожен пункт на протязі усього наступного дня.`;
    const SLEEP_IMG_ID = `1OBgmNUQd927sMFp0XkK69PNf8GqASh0i`;
    const SLEEP_IMG = `https://drive.google.com/uc?id=${SLEEP_IMG_ID}`;

    LootArr.push(new DNELootCard("sleep", "Сон", SLEEP_LONGLINE, SLEEP_IMG, 1, "8h", "Дія", SLEEP_SHORTLINE, "", true, true, "dia"));


    // Флоп
    const FLOP_SHORTLINE = "Швидкий, характерно недбалий, закрас та контур за лічені хвилини, опціонально тінь.<br><br>Як правило достатньо двох банок(високий слім+низький фет) контрастних кольорів.<br><br>Намалювати скетч заздалегідь буде супер";
    const FLOP_LONGLINE = ` $Універсальний солдат в арсеналі Вандала, що з двох банок здатен зробити швидкий закрас та контур за лічені хвилини. Опціонально можна намалювати скетч і впевнитись у результаті до початку роботи.`;
    LootArr.push(new DNELootCard("make-flop", "Флоп", FLOP_LONGLINE, "https://lh3.googleusercontent.com/oAnpZMw-GdG79UEJot10AtxR0buHdZ5KAKhuvsOeLbHSPRHN_EW8srN8Ilc6ItibViU=w2400", 1, "1⚡ 500", "Дія", FLOP_SHORTLINE, "", true, true, "dia"));

    // Забомбити кусок
    const MAKE_PIECE_LONGLINE = "Забомбити кусок можна на будь-якій стіні. Навіть якщо ніхто цього не дозволяв та навіть якщо хтось проти. Вулиця - твій холст. Нехай вона буде святом мистецтва для всіх. Кусок може привернути увагу будь до чого.";
    const MAKE_PIECE_SHORTLINE = "Приверни увагу до себе забомбивши на вечірці<br> величезне графіті.<br><br> Потрібна лише фарба. Якщо вона в тебе є, карта спрацює лише за рахунок енергії.";
    LootArr.push(new DNELootCard("make-piece", "Кусок", MAKE_PIECE_LONGLINE, "https://lh5.googleusercontent.com/-LrxKPIJUhhiMqNOVDdPo07vri3pfz1Y_if2szB_lX63yS06ESUebo8_xUEETw22yb8=w2400", 2, "1⚡ 1K", "Дія", MAKE_PIECE_SHORTLINE, "", true, true, "dia"));

    // Сумісний кусок
    const MAKE_COOP_PIECE_LONGLINE = "Скооперуйся з ще одним(або більше) Райтером щоб забомбити сумісний кусок, що даватиме бонус усім. На Стрічкоткацькій давно не фарбували стіни, час це виправити. Дозволяти це звісно ніхто не буде, та якщо ти знайомий з власниками клубів, це може зійти за аргумент. Один охоронець на КПП. Для такого розміру шматка знадобиться драбина, попитай знайомих або придбай сам. Кольори на твій смак, візьми друзів щоб працювати швидше. Зніми на камеру щоб отримати +1 до бонусу та запис процессу.";
    const MAKE_COOP_PIECE_SHORTLINE = "Скооперуйся з ще одним<br>(або більше) Райтером щоб забомбити сумісний кусок, що даватиме бонус усім.";
    LootArr.push(new DNELootCard("make-coop-piece", "Cумісний кусок", MAKE_COOP_PIECE_LONGLINE, "https://lh4.googleusercontent.com/_-QeG9KGhNojivrs6WmQdlomzmgQiX2Cmd-_Srd5eDwFImJgZYk3PDuehvGUzY_PYxc=w2400", 5, "4⚡ 2K", "Дія", MAKE_COOP_PIECE_SHORTLINE, "", true, true, "dia"));

    // Батьків кусок
    //
    //
    const BIG_PIECE_LONGLINE = "";
    const BIG_PIECE_SHORTLINE = `Зроби величезний кусок, захлистнувши пів будинку на тязі чотирьох Монтан Мед Макс надвисокого тиску.<br><br> Може тоді батько зверне на тебе увагу`;
    const BIG_PIECE_IMG = `https://lh6.googleusercontent.com/aRXdCAgO40cEypP8zVLUdBMzgndfPUzyivJuAHve3K7hOqUTyhvznTjIIkKKuJhmEZE=w2400`;

    LootArr.push(new DNELootCard("make-big-piece", "Батьків кусок", BIG_PIECE_LONGLINE, BIG_PIECE_IMG, 6, "6⚡ 1.6K", "Дія", BIG_PIECE_SHORTLINE, "", true, true, "dia"));
    // Потяг
    const MAKE_TRAIN_PIECE_LONGLINE = "";
    const MAKE_TRAIN_PIECE_SHORTLINE = `Роздай стилю прямо на поїзді. Розроби ескіз в діджиталі, забезпеч фарбу та візьми Найомничка(або Гравця) прикрити спину та/або забомбити разом.<br><br> Більше Райтерів, більше шансів на успіх.`;
    LootArr.push(new DNELootCard("make-train-piece", "Потяг", MAKE_TRAIN_PIECE_LONGLINE, "https://lh5.googleusercontent.com/Mf3V9aRudavOj-zjTawLxbihB27qE1d2MoSc5Mi9PSqflqsO1lhKiIBglOF0ko1BL3Q=w2400", 7, "7⚡ 3K", "Дія", MAKE_TRAIN_PIECE_SHORTLINE, "", true, true, "dia"));

    // Скласти нутрощі у кейс
    LootArr.push(new DNELootCard("hide-insides-case", "Скласти нутрощі у кейс", "Ви можете дістати серце або мозок та покласти його у кейс. Тепер після вашої смерті, маючи кейс та ключ від нього гравець може воскресити вас, якщо у кейсі знаходиться ваш мозок. Або все що ви мали буде передано гравцю, що матиме кейс та ключ, якщо в кейсі знаходиться ваше сердце. Застосовуючи цю карту гравець вирішує що покласти в кейс, його рішення знає лише гейм-мастер. Одноразова дія, скинь після використання.", "https://lh4.googleusercontent.com/Z7SDwZp_vswKBpfz9MJy1okslUiTfbNvnaQp1cQkd3XfQxwGydioc9WRWDQhdrTQXjE=w2400", 5, "10К", "Дія"));
    // Спалах
    LootArr.push(new DNELootCard("make-puf", "Спалах", "Ви можете використати 1г своїх Квітів щоб забити смачнющий косий розміру XL та розділити цю радість з найближчим колом гравців. Ходять чутки, що просунуті гравці здатні творити магію під час Спалаху. Враження від івенту на якому взривають косяки ростуть до максимуму для всіх івентів, де концепт допускає паління. +1 до виправданих очікувань кожному гравцю за кожен косяк.", "https://lh6.googleusercontent.com/RaCJIJOCn6erGEpLCyXrgq2L_PdlUxR6RVDXmafA0wwQ6iOUCrwjrVt2_35_E4H7pA4=w2400", 1, "300", "Дія", "Використай свої квіти, щоб зробити Спалах. Кажуть він має неймовірну силу, особливо під час вечірок.", "", true, true, "dia"));
    // Блиснути знаннями
    LootArr.push(new DNELootCard("know-better", "Блиснути знаннями", "Блиснути знаннями правил може кожен гравець з цією картою. Як він сказав, так і буде. Будь-який івент отримує + або - 5 до виправданих очікувань аудиторії. Одноразовий айтем.", "https://lh6.googleusercontent.com/Z0_oh_v-ThuF_YQuzYLLB9k_T35I7yk5FE7fvfuBuohUFzfekFju4thMuw-C2Dny-rk=w2400", 5, "5⚡", "Дія", "Будь-який івент отримує + або - 5 до виправданих очікувань аудиторії. Одноразовий айтем.", "", true, true, "dia"));
    // Записати сет
    const MAKE_KABANCHIK_LONGLINE = "Дає можливість терміново привезти великі речі з точки А в точку B. Одноразова карта, після використання скинь.";
    LootArr.push(new DNELootCard("make-kabanchik", "Рванути кабанчиком", MAKE_KABANCHIK_LONGLINE, "https://lh3.googleusercontent.com/D3lF7EoLNhW0st7HHOxKHe_NFPBXk2X0WB-ZZ2rE1Qh1uoDmFdZu6-_-4a_8NVmnGoY=w2400", 1, 700, "Дія", MAKE_KABANCHIK_LONGLINE, "", true, true, "dia"));

    const MAKE_ZAYCHICKOM_DESCRIPTION = "Дає можливість терміново привезти айтем в одну руку, що не є великим, з точки А в точку B. Одноразова карта, після використання скинь.";
    LootArr.push(new DNELootCard("make-zaychickom", "Злітати зайцем", MAKE_ZAYCHICKOM_DESCRIPTION, "https://lh5.googleusercontent.com/GRSCU2MwtGB_MFC8rBA8TH-DAM43J5xUobuYvehwwAH8y4fMMvHZ9XpYtfITfrnz3vM=w2400", 1, 400, "Дія", "Дає можливість терміново привезти айтеми, що не є великими.", "", true, true, "dia"));

    LootArr.push(new DNELootCard("make-after-transfer", "Афтер трансфер", "Розвезе всіх гостей по домівках після закінчення вечірки. Повір, вони будуть тобі за це вдячні.", "https://lh6.googleusercontent.com/kb4mpV8o6NAM_5ydJRplk8wgXmPpx8Bdt2NPzxfDFYVRRVEjafmgFvWBVdkC3zAXL8g=w2400", 3, 2500, "Дія", "Розвезе всіх гостей по домівках після закінчення вечірки. Повір, вони будуть тобі за це вдячні.", "", true, true, "dia"));

    // Підтримати Найомничків
    //
    //
    const SUPPORT_SUPPORTS_LONGLINE = "";
    const SUPPORT_SUPPORTS_SHORTLINE = `Підтримай Найомничків щоб зарядити їх додатковою енергією.<br><br>Підвези, як маєш автівку, Спалах допоможе розрядити атмосферу.<br><br>Даруй добро навколо і Всесвіт відповість тобі тим же`;
    const SUPPORT_SUPPORTS_IMG_ID = `1e1G9Q0P5WmJJuFpdsayk7B-sd-uY9vJB`;
    const SUPPORT_SUPPORTS_IMG = `https://drive.google.com/uc?id=${SUPPORT_SUPPORTS_IMG_ID}`;

    LootArr.push(new DNELootCard("support-supports", "Підтримати Найомничків", SUPPORT_SUPPORTS_LONGLINE, SUPPORT_SUPPORTS_IMG, 1, "1⚡ 300", "Дія", SUPPORT_SUPPORTS_SHORTLINE, "", true, true, "dia"));

    LootArr.push(new DNELootCard("make-french-exit", "Піти по-французьки", "Гравець що використав цю карту, дістає вогнепальну зброю и робить постріл у голову гравця, в адресу якого була використана карта.<br><br> Все, цей гравець мертвий, куля в голову як не як.<br><br> А ти що думав з тобою тут хтось сюсюкатись буде?", "https://lh3.googleusercontent.com/VVGoBbf0sATIkcowuVZuAuJrkjF0C6ZKr2bY43f_f4U4B9Hk9au3Q90d9mGiIZDhKso=w2400", 0, 0, "Дія"));

    // Flower Boy
    //
    //
    const FLOWER_BOY_VINYL_LONGLINE = "";
    const FLOWER_BOY_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const FLOWER_BOY_VINYL_IMG_ID = `12Xt1sW8PmEzrkcOfNNNGk0bLug_mcZec`;
    const FLOWER_BOY_VINYL_IMG = `https://drive.google.com/uc?id=${FLOWER_BOY_VINYL_IMG_ID}`;

    LootArr.push(new DNELootCard("vinyl-flower-boy", "Flower Boy", FLOWER_BOY_VINYL_LONGLINE, FLOWER_BOY_VINYL_IMG, 3, 1100, "Платівка, 46m of Progressive Hip-Hop", FLOWER_BOY_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/FcBfSwxOVUM"));

    // Платівка IGOR
    LootArr.push(new DNELootCard("vinyl-igor", "IGOR", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/heEq3Fh5UX0YwXs-Y52x6v7ZBdprdaS1y7NLrK6zgBy4_CGaFDc75WlCzSvVQkdQD_w=w2400", 3, 900, "Платівка, 39m of Hip-Hop", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtu.be/wfGuSP7PvW4"));
    // Платівка Nevermind
    LootArr.push(new DNELootCard("vinyl-nevermind", "Nevermind", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh4.googleusercontent.com/XO_xR7duHH-sgm71C8g6W20J5U3FCZdpSy75Hkx1NYulHQhUvzN7V8Z2AKmu6u8YTwQ=w2400", 3, 1000, "Платівка, 49m of Гранж", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtu.be/DDwcMbu8fBI"));
    // Платівка Mordechai
    // todo підрізати картинку
    LootArr.push(new DNELootCard("vinyl-mordechai", "Mordechai", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh6.googleusercontent.com/jXRGpz3OqpBw3bJOgQFF37mUPomYJLzrQs-b7xGyNss3nPldWx4FMy3eetJA26lrhGI=w2400", 3, 1100, "Платівка, 43m of Indie", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtu.be/51aa2rlmaAE"));

    // Plantasia
    //
    //
    const PLANTASIA_ALBUM_LONGLINE = "";
    const PLANTASIA_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const PLANTASIA_ALBUM_IMG_ID = `17fRnCL68fOfxnmJWXPFgP-v3iJL8_HbV`;
    const PLANTASIA_ALBUM_IMG = `https://drive.google.com/uc?id=${PLANTASIA_ALBUM_IMG_ID}`;

    LootArr.push(new DNELootCard("vinyl-plantasia", `Plantasia`, PLANTASIA_ALBUM_LONGLINE, PLANTASIA_ALBUM_IMG, 3, 800, "Альбом, 31m of Ambient", PLANTASIA_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/SZkR3PyHTs0"));

    // Salad Days
    //
    //
    const SALAD_DAYS_VINYL_LONGLINE = "";
    const SALAD_DAYS_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const SALAD_DAYS_VINYL_IMG_ID = `13gekL79BsF5IFzovcMa5JaeHbFUq96QX`;
    const SALAD_DAYS_VINYL_IMG = `https://drive.google.com/uc?id=${SALAD_DAYS_VINYL_IMG_ID}`;

    LootArr.push(new DNELootCard("vinyl-salad-days", "Salad Days", SALAD_DAYS_VINYL_LONGLINE, SALAD_DAYS_VINYL_IMG, 3, 10000, "Платівка, 34m of Soft Rock Psychodelic Lo-fi", SALAD_DAYS_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/0HQqXllXpfQ"));

    // 1AM CHILL SESSION
    //
    //
    const I_AM_CHILL_SESSION_VINYL_LONGLINE = "";
    const I_AM_CHILL_SESSION_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const I_AM_CHILL_SESSION_VINYL_IMG_ID = `1tzMaJsjehPBQbXjkSg8wNlPQ-lFlhqmJ`;
    // const I_AM_CHILL_SESSION_VINYL_IMG_ID = `1mZFZ2uCF3tsldpVGzt9ceu4NU3KICEk8`;
    const I_AM_CHILL_SESSION_VINYL_IMG = `https://drive.google.com/uc?id=${I_AM_CHILL_SESSION_VINYL_IMG_ID}`;

    LootArr.push(new DNELootCard("vinyl-i-am-chill-session", "1AM CHILL SESSION", I_AM_CHILL_SESSION_VINYL_LONGLINE, I_AM_CHILL_SESSION_VINYL_IMG, 4, 1600, "Платівка, 160m of Chill Ambient", I_AM_CHILL_SESSION_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/TlWYgGyNnJo"));

    const DEATH_LESSONS_VINYL_IMG_ID = `1RP9uwmDb8PjE-ny4aFOLghFN3p4-5Q02`;
    const DEATH_LESSONS_VINYL_IMG = `https://drive.google.com/uc?id=${DEATH_LESSONS_VINYL_IMG_ID}`;
    LootArr.push(new DNELootCard("vinyl-death-lessons", "DEATH LESSONS", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", DEATH_LESSONS_VINYL_IMG, 4, 500, "Платівка, 13m of Experimental Acid Techno", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtu.be/79VEr-S7PXw"));

    const FLYING_AWAY_VINYL_IMG_ID = `1BZCDvlFi0lkQ1AJZmUI0PnafjicdjAPO`;
    const FLYING_AWAY_VINYL_IMG = `https://drive.google.com/uc?id=${FLYING_AWAY_VINYL_IMG_ID}`;
    LootArr.push(new DNELootCard("vinyl-flying-away", "FLYING AWAY", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", FLYING_AWAY_VINYL_IMG, 4, 1800, "Платівка, 46m of Experimental Psychodelic Electronic", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtu.be/T_Ne2Zs5754"));

    // Sleepwalking
    //
    //
    const SLEEPWALKING_VINYL_LONGLINE = "";
    const SLEEPWALKING_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const SLEEPWALKING_VINYL_IMG_ID = `1fqEkGINyeUaLkQTpFNQsfMYwFFcUxkuG`;
    const SLEEPWALKING_VINYL_IMG = `https://drive.google.com/uc?id=${SLEEPWALKING_VINYL_IMG_ID}`;

    LootArr.push(new DNELootCard("vinyl-sleepwalking", "Sleepwalking", SLEEPWALKING_VINYL_LONGLINE, SLEEPWALKING_VINYL_IMG, 4, 4000, "Платівка, 40m of Indie Rock Synth-pop", SLEEPWALKING_VINYL_SHORTLINE, "", true, true, "sound", "https://youtube.com/playlist?list=PLy0AuyZgWahFSiI_2JofKeiG5W-goqhps&si=ZoA7PkMpHtUwMUn-"));

    // Bless vol.2
    //
    //
    const BLESS_VOL2_LONGLINE = "";
    const BLESS_VOL2_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const BLESS_VOL2_IMG_ID = `1HIsqL9-Or1pVkyISKA5RyJ0pFIdklx29`;
    const BLESS_VOL2_IMG = `https://drive.google.com/uc?id=${BLESS_VOL2_IMG_ID}`;

    LootArr.push(new DNELootCard("album-bless-vol-2", "Bless vol.2", BLESS_VOL2_LONGLINE, BLESS_VOL2_IMG, 5, 1300, "Платівка, 217m of Lo-Fi Hip-Hop Jazz", BLESS_VOL2_SHORTLINE, "", true, true, "sound", "https://youtu.be/oJuP-4Hsvkg"));

    // Платівка Half Age
    LootArr.push(new DNELootCard("vinyl-half-age", "Half Age", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/FvFHXjLdWHPi6YD-Sf3blgvACFkPvXWkMfk7M5ig0VwOY_DvyTAPiAng97vzvUboi6g=w2400", 5, 2800, "Платівка, 36m of New-Age Minimal Electronic Synth-pop", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtu.be/bf3-Emt7s0U"));


    // Le jardin de Lucy
    //
    //
    const LUCY_VINYL_LONGLINE = "";
    const LUCY_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const LUCY_VINYL_IMG_ID = `1MwprtqrAk1iBApY-WLwdGRZGrmE0aejg`;
    const LUCY_VINYL_IMG = `https://drive.google.com/uc?id=${LUCY_VINYL_IMG_ID}`;

    LootArr.push(new DNELootCard("vinyl-le-jardin-de-lucy", "Le jardin de Lucy", LUCY_VINYL_LONGLINE, LUCY_VINYL_IMG, 5, 1200, "Платівка, 57m of Electronic Reggae Dub", LUCY_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/Ljw5eJdO4kQ"));

    // The Eternal Present
    //
    //
    const ETERNAL_PRESENT_VINYL_LONGLINE = "";
    const ETERNAL_PRESENT_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const ETERNAL_PRESENT_VINYL_IMG_ID = `11s8Xvd_p8lYpfXBKg51uE1tZMN4QRnKn`;
    const ETERNAL_PRESENT_VINYL_IMG = `https://drive.google.com/uc?id=${ETERNAL_PRESENT_VINYL_IMG_ID}`;

    LootArr.push(new DNELootCard("vinyl-eternal-present", "The Eternal Present", ETERNAL_PRESENT_VINYL_LONGLINE, ETERNAL_PRESENT_VINYL_IMG, 5, 1400, "Платівка, 39m of Electronic Industrial Cyber", ETERNAL_PRESENT_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/NWSM4y1PAyo"));

    // Erased from history
    //
    //
    const ERASED_FROM_HISTORY_VINYL_LONGLINE = "";
    const ERASED_FROM_HISTORY_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const ERASED_FROM_HISTORY_VINYL_IMG_ID = `1we-bhs3mUOb4nwvMhiuPodi44LDR-sIT`;
    const ERASED_FROM_HISTORY_VINYL_IMG = `https://drive.google.com/uc?id=${ERASED_FROM_HISTORY_VINYL_IMG_ID}`;

    LootArr.push(new DNELootCard("vinyl-erased-from-history", "Erased from history", ERASED_FROM_HISTORY_VINYL_LONGLINE, ERASED_FROM_HISTORY_VINYL_IMG, 5, 1600, "Платівка, 25m of Electronic Breakbeat Ghost Vaporware", ERASED_FROM_HISTORY_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/wfz0mHr5YB0"));

     // I care be cause you do
    //
    //
    const GEOGADDI_VINYL_LONGLINE = "";
    const GEOGADDI_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const GEOGADDI_VINYL_IMG_ID = `12Y59u08V15D1XmDI0nw14mdwnSaSWHVn`;
    const GEOGADDI_VINYL_IMG = `https://drive.google.com/uc?id=${GEOGADDI_VINYL_IMG_ID}`;

    LootArr.push(new DNELootCard("vinyl-geogaddi", "Geogaddi", GEOGADDI_VINYL_LONGLINE, GEOGADDI_VINYL_IMG, 6, 1400, "Платівка, 66m of Electronic Psychodelic Downtempo IDM", GEOGADDI_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/vDkHR80rNtw"));


    LootArr.push(new DNELootCard("vinyl-stay-ugly", "Stay Ugly", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh4.googleusercontent.com/E3bFd24vQSohVXr-aE7e8YIjz2g-lQJaEcc0r9k83Quc_5SpraxdRRzyWbBO0wrvSxs=w2400", 6, 4200, "Платівка, 16m of Meta Hip-Hop", STRINGS.VINYL_LONGLINE, "", true, true, "sound"));
    LootArr.push(new DNELootCard("vinyl-pursuit", "Pursuit", "180-gram clear vinyl housed in bespoke inner and outer sleeves including a 10x10\" photographic print.\n" + "Limited to 500 copies worldwide, individually hand numbered.\n" + "Not sealed. <br>" + "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh6.googleusercontent.com/5C_USwT9sZWSz5od1wgsA3ZmJ-Z92BVVOrqM5vCrlyLpZ1wtLErOAxCk8KsqHu4GrKo=w2400", 7, 5500, "Платівка, 4m of Progressive Electronic"));

    // Платівка In Utero
    const IN_UTERO_VINYL_IMG_ID = `179SGPNfEG35eWuuquSIx3BmigDy7B6yV`;
    const IN_UTERO_VINYL_IMG = `https://drive.google.com/uc?id=${IN_UTERO_VINYL_IMG_ID}`;
    LootArr.push(new DNELootCard("vinyl-in-utero", "In Utero", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", IN_UTERO_VINYL_IMG, 6, 11111, "Платівка, 41m of Гранж", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtu.be/Y-5bmRELuts"));

    // I care be cause you do
    //
    //
    const I_CARE_BECAUSE_YOU_DO_VINYL_LONGLINE = "";
    const I_CARE_BECAUSE_YOU_DO_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const I_CARE_BECAUSE_YOU_DO_VINYL_IMG_ID = `1f84pXs05cbjiGwSGNJnYsQNrEVDAhlM-`;
    const I_CARE_BECAUSE_YOU_DO_VINYL_IMG = `https://drive.google.com/uc?id=${I_CARE_BECAUSE_YOU_DO_VINYL_IMG_ID}`;

    LootArr.push(new DNELootCard("vinyl-i-care-be-cause-you-do", "I care be cause you do", I_CARE_BECAUSE_YOU_DO_VINYL_LONGLINE, I_CARE_BECAUSE_YOU_DO_VINYL_IMG, 6, 1700, "Платівка, 63m of Ambient Electronic Acid Techno IDM", I_CARE_BECAUSE_YOU_DO_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/NJesxnyCMbU"));


    // Flower Boy
    //
    //
    const CYBERPUNK_TRIPLE_VINYL_LONGLINE = "";
    const CYBERPUNK_TRIPLE_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const CYBERPUNK_TRIPLE_VINYL_IMG_ID = `1tcTkGEShbTgAayGdnAzzVn3Hq2Fy-CJD`;
    const CYBERPUNK_TRIPLE_VINYL_IMG = `https://drive.google.com/uc?id=${CYBERPUNK_TRIPLE_VINYL_IMG_ID}`;

    LootArr.push(new DNELootCard("vinyl-cyberpunk-triple", "CYBERPUNK 2077 VINYL 3LP SET", CYBERPUNK_TRIPLE_VINYL_LONGLINE, CYBERPUNK_TRIPLE_VINYL_IMG, 7, 4200, "Платівка, 99m of Progressive Electronic Rock", CYBERPUNK_TRIPLE_VINYL_SHORTLINE, "", true, true, "sound"));

    // Платівка Slow Rush
    //
    //
    const SLOW_RUSH_VINYL_LONGLINE = "";
    const SLOW_RUSH_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const SLOW_RUSH_VINYL_IMG_ID = `1C6B2Q28YCUs6uJdlvZbCMDoOuSPQjxba`;
    const SLOW_RUSH_VINYL_IMG = `https://drive.google.com/uc?id=${SLOW_RUSH_VINYL_IMG_ID}`;

    LootArr.push(new DNELootCard("vinyl-slow-rush", "Slow Rush", SLOW_RUSH_VINYL_LONGLINE, SLOW_RUSH_VINYL_IMG, 7, 1900, "Платівка, 57m of Electronic Psychodelic Synth-Pop", SLOW_RUSH_VINYL_SHORTLINE, "", true, true, "sound", "https://youtube.com/playlist?list=PLr9Yx3twkzdK2GF5xVgpsM8PvREBdzf5c&si=m0vvZTihFrXxLkBt"));


    // Платівка Currents
    //
    //
    const CURRENTS_VINYL_LONGLINE = "";
    const CURRENTS_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const CURRENTS_VINYL_IMG_ID = `1k6bdJva07FUJcbR44Pxer5jMIPkIRvtF`;
    const CURRENTS_VINYL_IMG = `https://drive.google.com/uc?id=${CURRENTS_VINYL_IMG_ID}`;

    LootArr.push(new DNELootCard("vinyl-currents", "Currents", CURRENTS_VINYL_LONGLINE, CURRENTS_VINYL_IMG, 8, 1800, "Платівка, 51m of Progressive Psychodelic Synth-Pop", CURRENTS_VINYL_SHORTLINE, "", true, true, "sound", "https://youtube.com/playlist?list=PL81_CtYCym28qkVe3nVMRG7hMR5_Ky3Hf&si=vupJtx4HKQ1lffT3"));


    // Платівка AM
    const AM_VINYL_IMG_ID = `1qYSkZ1q2Qd50SdqOAW3KP9VFFWRfpa3d`;
    const AM_VINYL_IMG = `https://drive.google.com/uc?id=${AM_VINYL_IMG_ID}`;
    LootArr.push(new DNELootCard("vinyl-am", "AM", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", AM_VINYL_IMG, 8, 1700, "Платівка, 41m of Indie Rock", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtu.be/bpOSxM0rNPM"));

    // Платівка Delicate Sound of Thunder
    const DELICATE_SOUND_VINYL_IMG_ID = `1wLAnPq2f__iu7qBwERFjUjuqKBBR7j22`;
    const DELICATE_SOUND_VINYL_IMG = `https://drive.google.com/uc?id=${DELICATE_SOUND_VINYL_IMG_ID}`;
    LootArr.push(new DNELootCard("vinyl-delicate-sound-of-thunder", "Delicate Sound<br> of Thunder", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", DELICATE_SOUND_VINYL_IMG, 9, "NYP", "Платівка, 104m of Progressive Psychodelic Rock", STRINGS.VINYL_LONGLINE, "", true, true, "sound"));

    // Платівка Currents
    //
    //
    const THE_VERY_BEST_OF_THE_DOORS_VINYL_LONGLINE = "";
    const THE_VERY_BEST_OF_THE_DOORS_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const THE_VERY_BEST_OF_THE_DOORS_VINYL_IMG_ID = `1Tr5qgz1klVR1gEFUh51scPlpqmhv6jjn`;
    const THE_VERY_BEST_OF_THE_DOORS_VINYL_IMG = `https://drive.google.com/uc?id=${THE_VERY_BEST_OF_THE_DOORS_VINYL_IMG_ID}`;

    LootArr.push(new DNELootCard("vinyl-the-very-best-of-the-doors", "DOORS", THE_VERY_BEST_OF_THE_DOORS_VINYL_LONGLINE, THE_VERY_BEST_OF_THE_DOORS_VINYL_IMG, 9, 10000, "Платівка, 78m of Progressive Psychodelic Rock", THE_VERY_BEST_OF_THE_DOORS_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/UYcjlmeRNTo"));


    LootArr.push(new DNELootCard("album-aleph", "Aleph", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh6.googleusercontent.com/C8MFf0NXHJesCRn1SgP6Y6fg6AbOesG6rrKe1cCe3vQMuhp8KLMkmKZYvPeZfxoy-SU=w2400", 8, 7777, "Альбом, 54m of Progressive Electronic", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtu.be/bpOSxM0rNPM?si=k_IfUEZRx3dVx1rO"));

    // Альбом NOCTURNAL
    LootArr.push(new DNELootCard("album-hentai", "HENTAI-JAZZ [DELUXE]", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh4.googleusercontent.com/qigbEl26rtBCPjVFTsY-tAk455SX9d9T2Ubu0TjhMm0JYFDHCDcnEi3w7U8Q2kBzKrw=w2400", 2, 300, "Альбом, 62m of Vaporwave Jazz Barberbeat", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/DthOCASDg1c"));
    LootArr.push(new DNELootCard("album-rare-gods", "RARE GODS", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh6.googleusercontent.com/OFR8ufbJuQKecwX6FiEyTL522Jnqes2xL2g62sIwI8eXZhTbtalyDlKeUi1TGBcPmE0=w2400", 2, "NYP", "Альбом, 17m of Abstract Vaporwave Hip-Hop", STRINGS.ALBUM_LONGLINE, "", true, true, "sound"));
    LootArr.push(new DNELootCard("album-pluxury", "PLUXURY", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/G4TemTj5XXRd5n0PT7DzgQRI4XGbfdrdXO-kh8V_V-d_sYzYginfGgfOvWIkqoh9Khs=w2400", 2, "NYP", "Альбом, 31m of Cloud Hip-Hop", STRINGS.ALBUM_LONGLINE, "", true, true, "sound"));
    LootArr.push(new DNELootCard("album-paywall", "PAYWALL", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh6.googleusercontent.com/I9yE4jWJsFQ1ZHyVWkphQWqJVb5NkSRK-w02jcDDdP1Pc4kEsdXVN4gEVpHXAfWfjE4=w2400", 2, "NYP", "Альбом, 24m of Abstract Cloud Hip-Hop", STRINGS.ALBUM_LONGLINE, "", true, true, "sound"));
    LootArr.push(new DNELootCard("album-toxic", "TOXIC", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/-0BiGi775ic-8I15Cza4sLnAW5kB-CcCt97pQOxHLCyNbtlFWcZK3ze37vwIiBBSSwY=w2400", 2, "NYP", "Альбом, 30m of Meta Cloud Hip-Hop", STRINGS.ALBUM_LONGLINE, "", true, true, "sound"));

    // Plastic Beach
    //
    //
    const PLASTIC_BEACH_ALBUM_LONGLINE = "";
    const PLASTIC_BEACH_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const PLASTIC_BEACH_ALBUM_IMG_ID = `1io8Dz5ByOPRT0JzhCN2FcK4ca_BRGklC`;
    const PLASTIC_BEACH_ALBUM_IMG = `https://drive.google.com/uc?id=${PLASTIC_BEACH_ALBUM_IMG_ID}`;

    LootArr.push(new DNELootCard("album-plastic-beach", "Plastic Beach", PLASTIC_BEACH_ALBUM_LONGLINE, PLASTIC_BEACH_ALBUM_IMG, 3, 500, "Альбом, 55m Electronic Funk Hip-Hop", PLASTIC_BEACH_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/8hfkE62WUJk"));

    const INTERNET_OF_EARS_ALBUM_IMG_ID = `1OgXAcP7Zk-10zO_-Re6a6qq0XuQfl6kY`;
    const INTERNET_OF_EARS_ALBUM_IMG = `https://drive.google.com/uc?id=${INTERNET_OF_EARS_ALBUM_IMG_ID}`;
    LootArr.push(new DNELootCard("album-internet-of-ears", "INTERNET OF EARS", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", INTERNET_OF_EARS_ALBUM_IMG, 2, 400, "Альбом, 49m of Dark Industrial Ghettotech", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/xrT3DcRqR6E"));

    LootArr.push(new DNELootCard("album-nocturnal", "NOCTURNAL", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/Ptll0Y5YHiOav4t10WasQeX7jXMF9oaWB4kKM8gyyC4kzYGABC8Oy3c3zJeLasmQ2gk=w2400", 2, 300, "Альбом, 37m of Industrial Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/yUau3wleuXc"));
    // Альбом LOVE MARKET
    LootArr.push(new DNELootCard("album-love-market", "LOVE MARKET", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/QavzJ5EDbmtiCCgTz_odOe8FEN8_KaU2mrVj8vCznlUQDiycL9_UKpLTUKSNeFL5VZM=w2400", 2, 300, "Альбом, 34m of OldSchool Synthpunk Techno", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/J1RC1OAkGKY"));
    LootArr.push(new DNELootCard("album-various-i", "VARIOUS I", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh6.googleusercontent.com/jslDr5gZF13pcyCQkYqS0VkCvkZk1gxwo6QC932fsv6umzMu4ybxzuFcNPZcc598NdE=w2400", 2, 400, "Альбом, 44m of Coldwave Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/aVHEZsX5Mmk"));
    LootArr.push(new DNELootCard("album-vlad-tapes", "VLAD TAPES", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/2RKvslgebe6RIgM66NUUI7AYquTfEmHi9FeTop_TX1WOuEeWP7kam-OoBJlyhn3hyuM=w2400", 3, 400, "Альбом, 94m of Coldwave Synthpunk Techno", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/9yb2l9Th9bs"));
    LootArr.push(new DNELootCard("album-latent-alters", "LATENT ALTERS", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/GGMAazaL4Dt-dnG-Lj_DOZHuv-pK46rycToWRLNSzRXPN6aPkUBTJy6gBBaeveENxko=w2400", 3, 500, "Альбом, 99m of  Darkwave Downtempo Minimal Synth", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/tIGYzdgSB7Y"));
    LootArr.push(new DNELootCard("album-reinvent", "REINVENT", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/GnGZSFdgASnC0N3Q88Rlx1ESg6mvfyrkeiUPZJCw9LC1MD-RLK7KraBeMrWZIzoCaEQ=w2400", 2, 400, "Альбом, 25m of EBM Industrial Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/V7qZiduqfZw"));

    LootArr.push(new DNELootCard("album-motion-regime", "MOTION PICTURES REGIME", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/JhJBlkcN3Cf9KPLhA30mnHXCkPHi6blltsHQkVMbm82UDu7UCcK9q0sEmOvxeL5GA04=w2400", 3, 700, "Альбом, 42m of Electronic Breakbeat", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/oh4FnH2OJhs"));
    LootArr.push(new DNELootCard("album-neon-skydeath", "NEON SKYDEATH", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh6.googleusercontent.com/9bnPwSeFJeyqlhBgTnKtBahoVvKAkwSB5ZChAyhpMm_wYPrjUHFHnq1_wrbflpwt1Fs=w2400", 3, "NYP", "Альбом, 26m of Retrowave Syntpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/XPFgXsF-QkA"));

    const SCREENING_PLEXUS_ALBUM_IMG_ID = `1wnODFpBuMuDX0nUdygXKendUir6sdPND`;
    const SCREENING_PLEXUS_ALBUM_IMG = `https://drive.google.com/uc?id=${SCREENING_PLEXUS_ALBUM_IMG_ID}`;
    LootArr.push(new DNELootCard("album-screening-plexus", "SCREENING PLEXUS", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", SCREENING_PLEXUS_ALBUM_IMG, 3, 1000, "Альбом, 42m of Retrowave Dark Syntpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/-sFuEY-QMQA"));

    const ETERNAL_RETURN_ALBUM_IMG_ID = `1leD3SnBGyQKMAA0JoArxLAjRaW-8gkmq`;
    const ETERNAL_RETURN_ALBUM_IMG = `https://drive.google.com/uc?id=${ETERNAL_RETURN_ALBUM_IMG_ID}`;
    LootArr.push(new DNELootCard("album-eternal-return", "ETERNAL RETURN", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", ETERNAL_RETURN_ALBUM_IMG, 4, 300, "Альбом, 42m of Electro Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/1C3tLxvVC8g"));

    const BUNKER_ISLAND_ALBUM_IMG_ID = `1iKPKPVEwTWovs1q0Bc2JiY-AJVHF-vpb`;
    const BUNKER_ISLAND_ALBUM_IMG = `https://drive.google.com/uc?id=${BUNKER_ISLAND_ALBUM_IMG_ID}`;
    LootArr.push(new DNELootCard("album-bunker-island", "BUNKER ISLAND", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", BUNKER_ISLAND_ALBUM_IMG, 4, 300, "Альбом, 30m of Electro Dungeonwave Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/r7X6o9f2_Q0"));

    const VARIOUS_II_ALBUM_IMG_ID = `19kfiinfD6DbwUUdB67_yt7Yhlm3okcEa`;
    const VARIOUS_II_ALBUM_IMG = `https://drive.google.com/uc?id=${VARIOUS_II_ALBUM_IMG_ID}`;
    LootArr.push(new DNELootCard("album-various-ii", "VARIOUS II", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", VARIOUS_II_ALBUM_IMG, 4, 500, "Альбом, 57m of Electro Coldwave Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/p5QcUK8nVBk"));

    const NOIR_TIMES_ALBUM_IMG_ID = `1dlyt9541g9h9XoHczKmWh-69pjKtb4KY`;
    const NOIR_TIMES_ALBUM_IMG = `https://drive.google.com/uc?id=${NOIR_TIMES_ALBUM_IMG_ID}`;
    LootArr.push(new DNELootCard("album-noir-times", "NOIR TIMES", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", NOIR_TIMES_ALBUM_IMG, 4, 300, "Альбом, 39m of Hardcore Industrial Synthwave", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/1DDF0vSpFeo"));

    const LATEX_AND_LEATHER_ALBUM_IMG_ID = `1zvG74zo8mVAd7Yc0CorswC6Cw4xufEg2`;
    const LATEX_AND_LEATHER_ALBUM_IMG = `https://drive.google.com/uc?id=${LATEX_AND_LEATHER_ALBUM_IMG_ID}`;
    LootArr.push(new DNELootCard("album-latex-and-leather", "LATEX & LEATHER", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", LATEX_AND_LEATHER_ALBUM_IMG, 5, 200, "Альбом, 13m of Industrial Coldwave Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/Ov91awg_Qx0"));

    // CYBERPUNK 2077: PHANTOM LIBERTY
    //
    //
    const PHANTOM_LIBERTY_ALBUM_LONGLINE = "";
    const PHANTOM_LIBERTY_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE_2}`;
    const PHANTOM_LIBERTY_ALBUM_IMG_ID = `1c8NJyX34CRmxY8m6rtrXexueI_FS5EP0`;
    const PHANTOM_LIBERTY_ALBUM_IMG = `https://drive.google.com/uc?id=${PHANTOM_LIBERTY_ALBUM_IMG_ID}`;

    LootArr.push(new DNELootCard("album-phantom-liberty", "CYBERPUNK 2077: PHANTOM LIBERTY", PHANTOM_LIBERTY_ALBUM_LONGLINE, PHANTOM_LIBERTY_ALBUM_IMG, 4, 0, "Альбом, 54m Electronic Synthpunk Trip-Hop", PHANTOM_LIBERTY_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/kHfhACP7ekY"));

    // VESSEL
    //
    //
    const VESSEL_ALBUM_LONGLINE = "";
    const VESSEL_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const VESSEL_ALBUM_IMG_ID = `1nvBWcTFxBurZesjhZUSxOPvzQN_bHKt9`;
    const VESSEL_ALBUM_IMG = `https://drive.google.com/uc?id=${VESSEL_ALBUM_IMG_ID}`;

    LootArr.push(new DNELootCard("album-vessel", "VESSEL", VESSEL_ALBUM_LONGLINE, VESSEL_ALBUM_IMG, 4, 400, "Альбом, 31m Electronic Ambient IDM", VESSEL_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtube.com/playlist?list=OLAK5uy_nfqbc26YAtKKa4IpRLrWcTyhcaS6ws6_Q&si=q5mMofmeYJGrYOrf"));

    // POSSESSION
    //
    //
    const POSSESSION_DEMO_LONGLINE = "";
    const POSSESSION_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const POSSESSION_DEMO_IMG_ID = `1XZsw5zZvvgKv3Dbie-fbnwbdQ5lO9-te`;
    const POSSESSION_DEMO_IMG = `https://drive.google.com/uc?id=${POSSESSION_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-possession", "POSSESSION", POSSESSION_DEMO_LONGLINE, POSSESSION_DEMO_IMG, 4, 800, "Демо, 61m Hardcore Techno Gabber", POSSESSION_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/pZhUS_q4jkc"));

    // MISSION_LONDON
    //
    //
    const MISSION_LONDON_DEMO_LONGLINE = "";
    const MISSION_LONDON_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const MISSION_LONDON_DEMO_IMG_ID = `1SdpIwmPXKuip-aylc06hNCJBX4swxcGb`;
    const MISSION_LONDON_DEMO_IMG = `https://drive.google.com/uc?id=${MISSION_LONDON_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-mission-london", "MISSION LONDON", MISSION_LONDON_DEMO_LONGLINE, MISSION_LONDON_DEMO_IMG, 4, 500, "Демо, 57m Dark Electro", MISSION_LONDON_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/dvIIszC5DuY"));

    // Демо Autonomous aka Slam
    LootArr.push(new DNELootCard("demo-tweeman", "TWEEMAN", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі навіть вдасться знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/IAON5k2AY0ZW5M--oM4njhEfQDFvLYJCFN9mRIzdpVZJHYlLCNVakDyu5bCnr9_lWAI=w2400", 3, 500, "Демо, 56m of Electro", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://www.youtube.com/live/EMliZzkRHCg"));
    LootArr.push(new DNELootCard("demo-autonomous-aka-slam", "Autonomous aka Slam", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі навіть вдасться знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/2vnBrdPitfEB2W0Ygvco65SUPsQgeX6k_EKmvXsAG1AIVMMDrK27f4cHGdZGIAVc26U=w2400", 5, "2K", "Демо, 56m of Electro", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://www.youtube.com/live/grVIOY9Mv88"));
    // Демо Jing
    LootArr.push(new DNELootCard("demo-jing", "Jing", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/dnU_1kJofGM8L6FcyZFY9FIV7X0XMmt6NZjqHRI5eDv4Tybe2MNQSydfpaLst9BGqLE=w2400", 2, 500, "Демо, 54m of Electro", STRINGS.DEMO_LONGLINE_SHORT, "", true, true, "sound", "https://www.youtube.com/live/z0iYJX-zTeg"));
    // Демо Courtesy
    LootArr.push(new DNELootCard("demo-courtesy", "Courtesy", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/y4b77JEBzft41_41hPiZq8c6OCAVHL5LTgR9KTRpvgbEAoXOwnMxmlCFiOnb77xP79g=w2400", 2, 500, "Демо, 60m of Electro", STRINGS.DEMO_LONGLINE_SHORT, "", true, true, "sound", "https://www.youtube.com/live/yEgV-alFoIU"));
    // Демо Jelz
    LootArr.push(new DNELootCard("demo-jelz", "Jelz", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh4.googleusercontent.com/SOPjuttKgwgX32fw4edtKqsp2m_bLG2udIOAjbDpIx4KMmYqdvrKvhqcdZ1tOj1ZM-w=w2400", 2, 500, "Демо, 55m of Electro", STRINGS.DEMO_LONGLINE_SHORT, "", true, true, "sound", "https://youtu.be/bmkUxv_oK68"));
    // Демо Lolsnake
    LootArr.push(new DNELootCard("demo-lolsnake", "Lolsnake", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/WZCoPBbHswgpsjBut2HcOcG4Vh0PExeuzccaB1Y5bjwMEqNUVz2ekEprLCQ4tbpXLro=w2400", 2, 500, "Демо, 55m of Electro", STRINGS.DEMO_LONGLINE_SHORT, "", true, true, "sound", "https://www.youtube.com/live/qv9uFfDZ3kM"));
    // Демо Marum B2B High Future
    LootArr.push(new DNELootCard("demo-marum-future", "Marum B2B High Future", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі навіть вдасться знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/Cliugw88-JyXPoBiDMB4MPEr-7DaoXJcSyMGh8gaJwxJ1PGefd5x9NrrXVERtueXvjQ=w2400", 4, "1K", "Демо, 122m of Electro", STRINGS.DEMO_LONGLINE_SHORT, "", true, true, "sound", "https://www.youtube.com/live/LCIEDrKtsS8"));
    // Демо Paris Smith
    LootArr.push(new DNELootCard("demo-smith", "Paris Smith", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/ujfWek1eUoapCHAgwX0B84jl78OuvjbEHwPvtkNNbCdKWEIshqHsdwrnWdqLinBMLIU=w2400", 2, 500, "Демо, 54m of Electro", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://www.youtube.com/live/oMIDuNHIxhY"));

    // Fracture
    //
    //
    const FRACTURE_DEMO_LONGLINE = "";
    const FRACTURE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const FRACTURE_DEMO_IMG_ID = `1A9Jrpxg8D5sJw40lgxvPaHKq8q6x0TFw`;
    const FRACTURE_DEMO_IMG = `https://drive.google.com/uc?id=${FRACTURE_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-fracture", "Fracture", FRACTURE_DEMO_LONGLINE, FRACTURE_DEMO_IMG, 5, "4K", "Демо, 55m of Electro", FRACTURE_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/ah6g-aoXcY8"));

    // Nite Fleit
    //
    //
    const NITE_FLEIT_DEMO_LONGLINE = "";
    const NITE_FLEIT_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const NITE_FLEIT_DEMO_IMG_ID = `1WqyqS1RPqjHheQccGZ8vuR6_z89HfaDa`;
    const NITE_FLEIT_DEMO_IMG = `https://drive.google.com/uc?id=${NITE_FLEIT_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-nite-fleit", "Nite Fleit", NITE_FLEIT_DEMO_LONGLINE, NITE_FLEIT_DEMO_IMG, 2, 500, "Демо, 54m of Electro", NITE_FLEIT_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/_KlvpRSSU8A"));

    // Operation Madness
    //
    //
    const MADNESS_DEMO_LONGLINE = "";
    const MADNESS_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const MADNESS_DEMO_IMG_ID = `1g__G2RZpDSGnPPV-3Q5IDcFbngB9cTgr`;
    const MADNESS_DEMO_IMG = `https://drive.google.com/uc?id=${MADNESS_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-madness", "Operation Madness", MADNESS_DEMO_LONGLINE, MADNESS_DEMO_IMG, 2, 500, "Демо, 55m of Electro", MADNESS_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/GuQ60ZlYDlo"));

    // Sim0ne
    //
    //
    const SIMONA_DEMO_LONGLINE = "";
    const SIMONA_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const SIMONA_DEMO_IMG_ID = `1i_XzHA78FqWh0lEGchGYyngxJE_tvWJ0`;
    const SIMONA_DEMO_IMG = `https://drive.google.com/uc?id=${SIMONA_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-sim0ne", "Sim0ne", SIMONA_DEMO_LONGLINE, SIMONA_DEMO_IMG, 3, "1K", "Демо, 54m of Electro", SIMONA_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/JQhB2GdEDRE"));

    // Oneman
    //
    //
    const ONEMAN_DEMO_LONGLINE = "";
    const ONEMAN_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const ONEMAN_DEMO_IMG_ID = `1KRRpkeM82gFld3FPTOk0TfTI4joZgOG1`;
    const ONEMAN_DEMO_IMG = `https://drive.google.com/uc?id=${ONEMAN_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-oneman", "Oneman", ONEMAN_DEMO_LONGLINE, ONEMAN_DEMO_IMG, 3, "1K", "Демо, 56m of Electro", ONEMAN_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/4uQWqqTsJ2U"));

    // DJ Perception
    //
    //
    const DJ_PERCEPTION_DEMO_LONGLINE = "";
    const DJ_PERCEPTION_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const DJ_PERCEPTION_DEMO_IMG_ID = `1Axtle-9Z6QBxA6KbUpLmKZp9JlmQkAsd`;
    const DJ_PERCEPTION_DEMO_IMG = `https://drive.google.com/uc?id=${DJ_PERCEPTION_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-dj-perception", "DJ Perception", DJ_PERCEPTION_DEMO_LONGLINE, DJ_PERCEPTION_DEMO_IMG, 3, "1K", "Демо, 56m of Electro", DJ_PERCEPTION_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/8HoAazS_12Y"));

    // Jordss
    //
    //
    const LORDSS_DEMO_LONGLINE = "";
    const LORDSS_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const LORDSS_DEMO_IMG_ID = `1u7NTPZf6QoFFF-zAkulLmN82OvTYvcGo`;
    const LORDSS_DEMO_IMG = `https://drive.google.com/uc?id=${LORDSS_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-jordss", "Jordss", LORDSS_DEMO_LONGLINE, LORDSS_DEMO_IMG, 3, "1K", "Демо, 54m of Electro", LORDSS_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/peHfDBoEpAA"));

    // Neffa T & Flowdan
    //
    //
    const NEFFA_T_DEMO_LONGLINE = "";
    const NEFFA_T_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const NEFFA_T_DEMO_IMG_ID = `1pRUh6PagZ_VYsU2X5R2LeDW8lQI8MmGd`;
    const NEFFA_T_DEMO_IMG = `https://drive.google.com/uc?id=${NEFFA_T_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-neffa-t", "Neffa T & Flowdan", NEFFA_T_DEMO_LONGLINE, NEFFA_T_DEMO_IMG, 3, "1K", "Демо, 55m of Electro", NEFFA_T_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/_Cg0FM42lKo"));

    // Nastya Muravyova
    // /
    //
    const MURAVYOVA_DEMO_LONGLINE = "";
    const MURAVYOVA_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const MURAVYOVA_DEMO_IMG_ID = `1JhB6cT3DFC5Z9x_ukDdArZS15TNxRui_`;
    const MURAVYOVA_DEMO_IMG = `https://drive.google.com/uc?id=${MURAVYOVA_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-muravyova", "Nastya Muravyova", MURAVYOVA_DEMO_LONGLINE, MURAVYOVA_DEMO_IMG, 4, "5K", "Демо, 54m of Electro", MURAVYOVA_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/WEBfIRFuTUw"));

    // Wallflower
    //
    //
    const WALLFLOWER_DEMO_LONGLINE = "";
    const WALLFLOWER_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const WALLFLOWER_DEMO_IMG_ID = `1gaDgx6O1Q0NtEYXDA44nU0ZNHNqVpf00`;
    const WALLFLOWER_DEMO_IMG = `https://drive.google.com/uc?id=${WALLFLOWER_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-wallflower", "Wallflower", WALLFLOWER_DEMO_LONGLINE, WALLFLOWER_DEMO_IMG, 4, "5K", "Демо, 55m of Electro", WALLFLOWER_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/GwCw9WShNYM"));

    // Sol Ortega
    //
    //
    const SOL_ORTEGA_DEMO_LONGLINE = "";
    const SOL_ORTEGA_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const SOL_ORTEGA_DEMO_IMG_ID = `1_lBS5BECqdiEoPadA9JlpeUwIlr_Cn16`;
    const SOL_ORTEGA_DEMO_IMG = `https://drive.google.com/uc?id=${SOL_ORTEGA_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-sol-ortega", "Sol Ortega", SOL_ORTEGA_DEMO_LONGLINE, SOL_ORTEGA_DEMO_IMG, 4, "5K", "Демо, 55m of Electro", SOL_ORTEGA_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/8VDVV8peqT8"));

    // Hex Electronix
    //
    //
    const HEX_DEMO_LONGLINE = "";
    const HEX_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const HEX_DEMO_IMG_ID = `1l3vS3k3hdmkOdc1jlXG3JhZBeKMJYMXL`;
    const HEX_DEMO_IMG = `https://drive.google.com/uc?id=${HEX_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-hex-electronix", "Hex Electronix", HEX_DEMO_LONGLINE, HEX_DEMO_IMG, 4, "4K", "Демо, 53m of Electro", HEX_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/cwPLgNQz5jE?si=OvuW8Zn0KD4kIPyq"));

    // Thom Yorke
    //
    //
    const YORKE_DEMO_LONGLINE = "";
    const YORKE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const YORKE_DEMO_IMG_ID = `1aolL5UYFf-XvE6Xb_Bjups5uT6XgR297`;
    const YORKE_DEMO_IMG = `https://drive.google.com/uc?id=${YORKE_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-thom-yorke", "Thom Yorke", YORKE_DEMO_LONGLINE, YORKE_DEMO_IMG, 7, "10K", "Демо, 32m of Experimental Electro", YORKE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/qt-ohn5C3kU"));

    LootArr.push(new DNELootCard("demo-deep-lofi-house", "DEEP LOFI HOUSE MIX", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh6.googleusercontent.com/zS10ZYBzZeDDdkakdAlyyddKA8ReOm8k7aWpxpGmQPmDi3WzPt_UZtEnPqBvjCkSbw8=w2400", 1, 0, "Демо, 67m of Deep Lo-Fi House", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://youtu.be/yL06_XP4o-s"));
    LootArr.push(new DNELootCard("demo-tony-approved", "TONY SAYS FCKUIN' APPROVED", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/j77ixolnmMZ8P1Tlc4rWE6bSDqKHhs8N1mOrk6ZhY4gcE3-9383hsnIDfOm3dLfp5TY=w2400", 1, 0, "Демо, 59m of Lo-Fi House", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://youtu.be/9qFWNOgq2Fg"));

    // Bless
    //
    //
    const BLESS_LONGLINE = "";
    const BLESS_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const BLESS_IMG_ID = `17ySMJ9XBO2oAYE6TdKy0YNmxyEIM-60M`;
    const BLESS_IMG = `https://drive.google.com/uc?id=${BLESS_IMG_ID}`;

    LootArr.push(new DNELootCard("album-bless-vol-1", "Bless vol.1", BLESS_LONGLINE, BLESS_IMG, 3, 0, "Альбом, 199m of Lo-Fi Hip-Hop Jazz", BLESS_SHORTLINE, "", true, true, "sound", "https://youtu.be/WWZAwSWSLPo"));

    LootArr.push(new DNELootCard("demo-before-sunrise", "Before Sunrise", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/kKnxkDw2YetuwFER1oXirDF3nXcyWI65_TwrFa3JlFSCoF2rhv4MRDVWfpQsZIr9O9Y=w2400", 1, 0, "Демо, 65m of Deep House", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://youtu.be/Glg4SiSX_xk"));
    LootArr.push(new DNELootCard("demo-sub-zero", "Sub Zero", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/Z_4RM0MnEAAoy5LStyg6qJ3ghcVaGteTda7dlLWb61i9ZwGqhpfBqUNifGcLBjCOqG8=w2400", 1, 0, "Демо, 12m of Hardcore Techno Gabber", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://soundcloud.com/zzza4em/sets/mp3-7"));

    // Артем Ікра каже Так
    //
    //
    const DEMO_IKRA_SAYS_YES_LONGLINE = "";
    const DEMO_IKRA_SAYS_YES_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const DEMO_IKRA_SAYS_YES_IMG = `https://lh6.googleusercontent.com/jdHH6etnr0P9mZ9yWcJPTSEWRZzG86vkqY1Z7SwjsGYSchuIVPA21i8vtKJr7XZh49Q=w2400`;

    LootArr.push(new DNELootCard("demo-ikra-says-yes", "Артем Ікра каже Так", DEMO_IKRA_SAYS_YES_LONGLINE, DEMO_IKRA_SAYS_YES_IMG, 2, "NYP", "Демо, 57m of Electro", DEMO_IKRA_SAYS_YES_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/yesbelgrade/artem-ikra-says-yes"));

    // Apex Twin Sleep
    //
    //
    const DEMO_APEX_TWIN_SLEEP_LONGLINE = "";
    const DEMO_APEX_TWIN_SLEEP_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const DEMO_APEX_TWIN_SLEEP_IMG_ID = `1dP3tk9yUqix5nsr2_C4qO3Pw5eogxwFl`;
    const DEMO_APEX_TWIN_SLEEP_IMG = `https://drive.google.com/uc?id=${DEMO_APEX_TWIN_SLEEP_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-apex-twin-sleep", "Apex Twin Sleep", DEMO_APEX_TWIN_SLEEP_LONGLINE, DEMO_APEX_TWIN_SLEEP_IMG, 2, 0, "Демо, 101m of Electronic Ambient", DEMO_APEX_TWIN_SLEEP_SHORTLINE, "", true, true, "sound", "https://youtu.be/NUNrgiDfPq8"));


    // Артем Ікра каже Так
    //
    //
    const DEMO_PHONK_CLOUD_LONGLINE = "";
    const DEMO_PHONK_CLOUD_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const DEMO_PHONK_CLOUD_IMG_ID = `1B37KkLOfMuupjVEjkswSKNI4cDoBzTkk`;
    const DEMO_PHONK_CLOUD_IMG = `https://drive.google.com/uc?id=${DEMO_PHONK_CLOUD_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-phonk-cloud", "PHONK CLOUD", DEMO_PHONK_CLOUD_LONGLINE, DEMO_PHONK_CLOUD_IMG, 2, "NYP", "Демо, 10m of Cloud Phonk", DEMO_PHONK_CLOUD_SHORTLINE, "", true, true, "sound", "https://youtu.be/a1m1-4JVyAM"));


    LootArr.push(new DNELootCard("demo-phonk-fridays-004", "PHONK FRIDAY 004", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh6.googleusercontent.com/HJJfm6UflRH1Ni8xdUN0gqQj64-u7zHb_EkxbfIcPmM5-fITgv26JAxCRbEyBIvKYrE=w2400", 1, 0, "Демо, 104m of Cloud Phonk Trap", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://www.youtube.com/live/oHthm7EwGoU"));
    LootArr.push(new DNELootCard("demo-phonk-fridays-005", "PHONK FRIDAY 005", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/3AkmwPXRJNR2QT6tUsAjora1RjsOX6ZcIIclJBNdsZJJuxxj3ly-hcQ5tFRRKRyszwE=w2400", 1, 0, "Демо, 103m of Abstract Phonk Trap", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://www.youtube.com/live/_Cd1O44Vft0"));
    LootArr.push(new DNELootCard("demo-phonk-fridays-007", "PHONK FRIDAY 007", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh3.googleusercontent.com/sp2zgiifWGm-MEh6_gEmBkeDDv1FG78eGaGGxt5INCQWUXKQWS_SXAR-yJ0iGsUWhyk=w2400", 1, 0, "Демо, 118m of Abstract Phonk Trap", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://www.youtube.com/live/x7L4lyhfDyM"));
    LootArr.push(new DNELootCard("demo-phonk-fridays-008", "PHONK FRIDAY 008", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/csTzzLvd16H9ObuyzI-GMbYohdFyOYCgL5GkRwrx84XKOsCuwqwHf-wC3LPYS_olhKI=w2400", 1, 0, "Демо, 116m of Abstract Phonk Trap", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://youtu.be/h36L3a1p5Sc"));
    LootArr.push(new DNELootCard("demo-phonk-fridays-009", "PHONK FRIDAY 009", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh6.googleusercontent.com/e2LACEK48rqCbVwFxfKqulPCICUxhFNY_MfqPx-RLgBYDATA364mw4j-xm6mN9ky2fg=w2400", 3, 0, "Демо, 113m of Meta Phonk Trap", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://www.youtube.com/live/oqsU1f3s_QU"));

    // Phonk Fridays 010
    //
    //
    const PHONK_FRIDAYS_10_DEMO_LONGLINE = "";
    const PHONK_FRIDAYS_10_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const PHONK_FRIDAYS_10_DEMO_IMG_ID = `1jQfsUHvlTHax0n8Bi3qs2Mh44bG3Z0uB`;
    const PHONK_FRIDAYS_10_DEMO_IMG = `https://drive.google.com/uc?id=${PHONK_FRIDAYS_10_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-phonk-fridays-010", "PHONK FRIDAY 010", PHONK_FRIDAYS_10_DEMO_LONGLINE, PHONK_FRIDAYS_10_DEMO_IMG, 1, 0, "Демо, 23m of  of Phonk Trap", PHONK_FRIDAYS_10_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/4ezZb_ftCrQ"));

    // Phonk Fridays 010
    //
    //
    const HIGH_ALONE_DEMO_LONGLINE = "";
    const HIGH_ALONE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const HIGH_ALONE_DEMO_IMG_ID = `1RtjUJpVo4KL26W7Or9Yx9FifD1dJ6b4X`;
    const HIGH_ALONE_DEMO_IMG = `https://drive.google.com/uc?id=${HIGH_ALONE_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-high-alone", "HIGH ALONE", HIGH_ALONE_DEMO_LONGLINE, HIGH_ALONE_DEMO_IMG, 2, 0, "Демо, 31m of  of Dark Phonk Trap", HIGH_ALONE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/VSYceN99B44"));


    LootArr.push(new DNELootCard("demo-dark-trap-777", "DARK TRAP.MP4: chapter 777", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh4.googleusercontent.com/qmFc7i2PSqCqjCIED70uRF_VmrIce-CcjcFB30MWX5pGk9mqW4Gk3PZvG16erTbEnSQ=w2400", 1, 0, "Демо, 43m of Dark Trap", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://youtu.be/fqQ33fAGWfE"));
    LootArr.push(new DNELootCard("demo-dark-trap-4", "DARK TRAP.MP4: chapter 4", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh5.googleusercontent.com/VEUpXmwQGG__0UeqGcwM_oQjd2tUXeJFBCznYB39MANkhwB5H0-GkErhSub_O3i1rD8=w2400", 1, 0, "Демо, 35m of Dark Trap", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://youtu.be/OWcDNVDsIJw"));

    // World of horror
    //
    //
    const WORLD_OF_HORROR_DEMO_LONGLINE = "";
    const WORLD_OF_HORROR_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const WORLD_OF_HORROR_DEMO_IMG_ID = `1xkcSoZA6t-ZbKCuzc9vi4SWg-qg6XeYn`;
    const WORLD_OF_HORROR_DEMO_IMG = `https://drive.google.com/uc?id=${WORLD_OF_HORROR_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-world-of-horror", "World of horror", WORLD_OF_HORROR_DEMO_LONGLINE, WORLD_OF_HORROR_DEMO_IMG, 2, 0, "Демо, 87m of Dark Lo-Fi", WORLD_OF_HORROR_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/3eTj9l8uCW4"));



    // FIGHT CLUB
    //
    //
    const FIGHT_CLUB_DEMO_LONGLINE = "";
    const FIGHT_CLUB_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const FIGHT_CLUB_DEMO_IMG_ID = `16aurwje2LlkdOJ9wAEKV0DEaqCb2lw8l`;
    const FIGHT_CLUB_DEMO_IMG = `https://drive.google.com/uc?id=${FIGHT_CLUB_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-fight-club", "FIGHT CLUB", FIGHT_CLUB_DEMO_LONGLINE, FIGHT_CLUB_DEMO_IMG, 3, 0, "Демо, 60m of Dark Electronic", FIGHT_CLUB_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/4nRm9Khlz6o"));


    LootArr.push(new DNELootCard("demo-micks-tape", "The Mick's Tape", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "https://lh3.googleusercontent.com/GTqOwUdDzk7TZP5nxVFsqoFmwH_NbpP-hPYRvAaJqEBfq_BUTDhk_LJ79jQ0R2ORoZA=w2400", 2, 0, "Демо, 54m of Dark Synth Rock", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/QH0MkaXpwDQ"));

    // Journey into abstract
    //
    //
    const JOURNEY_INTO_ABSTRACT_DEMO_LONGLINE = "";
    const JOURNEY_INTO_ABSTRACT_DEMO_SHORTLINE = ``;
    const JOURNEY_INTO_ABSTRACT_DEMO_IMG_ID = `1PXGKpjTVI4VH8-db5LDC3y2tEPvjiq6G`;
    const JOURNEY_INTO_ABSTRACT_DEMO_IMG = `https://drive.google.com/uc?id=${JOURNEY_INTO_ABSTRACT_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-journey-into-abstract", "A Journey Into Abstract Hip-Hop", JOURNEY_INTO_ABSTRACT_DEMO_LONGLINE, JOURNEY_INTO_ABSTRACT_DEMO_IMG, 3, "NYP", "Альбом, 70m of Abstract Hip-Hop", JOURNEY_INTO_ABSTRACT_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/3q8nGnls1Ow"));

    LootArr.push(new DNELootCard("demo-in-your-head", "ITS ALL IN YOUR HEAD", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "https://lh6.googleusercontent.com/HJN6_sWjfFOE5DjBxDZJfYGMFyFDJBiuT5N2WXZ7Z7hwhc89laKTrNgsc5fuaSz_FbI=w2400", 1, 0, "Демо, 40m of Vaporwave Barberbeat"));

    // Journey into abstract
    //
    //
    const DEEP_INTO_YOUR_EYES_DEMO_LONGLINE = "";
    const DEEP_INTO_YOUR_EYES_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const DEEP_INTO_YOUR_EYES_DEMO_IMG_ID = `11X3kpazkngu_wPZ3QDybIVh6GnpmGKFT`;
    const DEEP_INTO_YOUR_EYES_DEMO_IMG = `https://drive.google.com/uc?id=${DEEP_INTO_YOUR_EYES_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-deep-into-your-eyes", "Deep into your eyes", DEEP_INTO_YOUR_EYES_DEMO_LONGLINE, DEEP_INTO_YOUR_EYES_DEMO_IMG, 3, 0, "Альбом, 147m of Psybient Psychill Trip", DEEP_INTO_YOUR_EYES_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/csOMNHiV7Yo"));

    LootArr.push(new DNELootCard("demo-chill-out", "CHILL OUT DOPE", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Ambient сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "https://lh6.googleusercontent.com/xZrSeC4nKTJfqaqOD2dJuGkd0GkhAdLUYUlYbYRRFOZbaXLwU08jYSRq1oPq6xm2_j8=w2400", 3, 0, "Демо, 150m of Deep Stoned Ambient Chillwave", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/kGG6atEiWA4"));
    LootArr.push(new DNELootCard("demo-mac-lofi", "If Mac Miller made a <br>Lo-Fi radio", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "https://lh6.googleusercontent.com/__TE5qiVZ8radplr9C-_nNYXPxYLNgh0s7zZiY3Cb2LdI2cBdy5o0zp_geoHeMHLIo4=w2400", 2, 0, "Демо, 45m of Lo-Fi Hip-Hop", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/1Z9BD5B0EJo"));
    LootArr.push(new DNELootCard("demo-420mix", "420MIX💨", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "https://lh3.googleusercontent.com/DltYV5OGu4XExGUf1xrquZh4Kyukc7urY0ON2gft_m1QxFPgZWAWkSVn07P54gEq-Hk=w2400", 2, 0, "Демо, 27m of Lo-Fi Trippy Hip-Hop", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/n0kyzGMe-mM"));
    LootArr.push(new DNELootCard("demo-best-weed-songs", "BEST W SONGS", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "https://lh4.googleusercontent.com/RdTE8C75wDup2GNbRdPS0MYH9hMzzEZ8pK6adWOOsxsmSJP-cJOqPtYqNxURuDEWDL0=w2400", 2, 0, "Демо, 56m of Classic 90s Stoner Hip-Hop", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/S6iHskdjGb8"));
    LootArr.push(new DNELootCard("album-iron-horse", "Iron Horse", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh4.googleusercontent.com/aQFjkqVVes7TM3o5-ar3XiL-bR-bXy7ap8IGqzG1XSTJAGo_WOoZ1u-OIJx7LDFUg4Y=w2400", 1, 0, "Альбом, 44m of Psychodelic Rock", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/-gXrS6eKfjk"));
    LootArr.push(new DNELootCard("demo-driftin-4", "D R I F T I N 4", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "https://lh3.googleusercontent.com/MQ6U8FWLiJNjYhhJI2xJdOukxaapEH5P9DGD3tJKz9MAdNovEKjCobIdZK1-m-si8Ig=w2400", 1, 0, "Демо, 52m of Phonk Trap", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/tmqiH813lns"));
    LootArr.push(new DNELootCard("demo-phonk-sesh-4", "P H O N K <br>S E S H 4", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "https://lh4.googleusercontent.com/654SFzeubpegErNPhQDo5wdrUdd4EaggVTxLdCTI2g24W8MjOGNGY3D5nsDCmOr0K40=w2400", 1, 0, "Демо, 85m of Phonk Trap", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/f292QkgJMYc"));
    LootArr.push(new DNELootCard("demo-enter-void", "ENTER THE VOID 2", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "https://lh3.googleusercontent.com/SWCAFtVMEBd7flzl7L1olK6xDf_N5kHOs8kUHDiqB0_BVZDj9wDM13JdnekFX4AB9Xk=w2400", 1, 0, "Демо, 18m of Experimental Ambient", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/aeIZnAaHL88"));

    // Phonk Fridays 010
    //
    //
    const CYBER_PHONK_DEMO_LONGLINE = "";
    const CYBER_PHONK_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const CYBER_PHONK_DEMO_IMG_ID = `1YB2SvhUkEr2l4QBxztc8zNbCSZxN9NFc`;
    const CYBER_PHONK_DEMO_IMG = `https://drive.google.com/uc?id=${CYBER_PHONK_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-cyber-phonk", "Cyberphonk", CYBER_PHONK_DEMO_LONGLINE, CYBER_PHONK_DEMO_IMG, 3, 0, "Демо, 28m of  of Phonk Trap Electronic", CYBER_PHONK_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/OhvmwTpiRIw"));

    const TRAPPIN_JAPAN_DEMO_IMG_ID = `1jICz5dgKLfs4Y-sATRuifkxgQtmfnhLX`;
    const TRAPPIN_JAPAN_DEMO_IMG = `https://drive.google.com/uc?id=${TRAPPIN_JAPAN_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-trappin-japan", "TRAPPIN IN JAPAN", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", `${TRAPPIN_JAPAN_DEMO_IMG}`, 1, 0, "Демо, 56m of Phonk<br> Vapor Trap", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/T6w7MABthn4"));
    LootArr.push(new DNELootCard("demo-trappin-japan-15", "TRAPPIN IN JAPAN 15", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "https://lh3.googleusercontent.com/dLtfBGYLL2FMmBNcGlRdPGX1D-KYo6UQ1rXdtGZiabL4syg7AzmonpwvxaS9TKY_E7k=w2400", 1, 0, "Демо, 56m of Phonk<br> Vapor Trap", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/k-5YFwXyAjc"));
    LootArr.push(new DNELootCard("demo-trappin-japan-18", "TRAPPIN IN JAPAN 18", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "https://lh3.googleusercontent.com/R8hhVznQZxCScNx3mClr50t-31uLZNNaVzHBSnwo8_Qg8T6sZmwjkXubNOfb1VMxOis=w2400", 1, 0, "Демо, 68m of Lo-Fi<br> Vapor Trap", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/-mD_nqa2KJU"));

    // TRAPPIN IN JAPAN 2099
    //
    //
    const TRAPPIN_IN_JAPAN_2099_DEMO_LONGLINE = "";
    const TRAPPIN_IN_JAPAN_2099_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const TRAPPIN_IN_JAPAN_2099_DEMO_IMG_ID = `1QO_n0BkDYl81Izws_tqzGxUbnKsKpCe-`;
    const TRAPPIN_IN_JAPAN_2099_DEMO_IMG = `https://drive.google.com/uc?id=${TRAPPIN_IN_JAPAN_2099_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-trappin-japan-2099", "TRAPPIN IN JAPAN 2099", TRAPPIN_IN_JAPAN_2099_DEMO_LONGLINE, TRAPPIN_IN_JAPAN_2099_DEMO_IMG, 3, 0, "Демо, 66m of  of Phonk Trap", TRAPPIN_IN_JAPAN_2099_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/ewpL0YWBy_o"));


    // TRAPPIN IN JAPAN 23
    //
    //
    const TRAPPIN_IN_JAPAN_23_DEMO_LONGLINE = "";
    const TRAPPIN_IN_JAPAN_23_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const TRAPPIN_IN_JAPAN_23_DEMO_IMG_ID = `1cu7JQalnTiVFuiyfmmM13zQOzkUeXP2Z`;
    const TRAPPIN_IN_JAPAN_23_DEMO_IMG = `https://drive.google.com/uc?id=${TRAPPIN_IN_JAPAN_23_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-trappin-japan-23", "TRAPPIN IN JAPAN 23", TRAPPIN_IN_JAPAN_23_DEMO_LONGLINE, TRAPPIN_IN_JAPAN_23_DEMO_IMG, 3, 0, "Демо, 66m of  of Phonk Vapor Trap", TRAPPIN_IN_JAPAN_23_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/ZGjkh5VeIxs"));

    // Phonk Fridays 010
    //
    //
    const TRAPPIN_IN_JAPAN_24_DISK_1_DEMO_LONGLINE = "";
    const TRAPPIN_IN_JAPAN_24_DISK_1_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const TRAPPIN_IN_JAPAN_24_DISK_1_DEMO_IMG_ID = `1khOQdh8Wd2FfHJlRQrgnNDPawHGelQcv`;
    const TRAPPIN_IN_JAPAN_24_DISK_1_DEMO_IMG = `https://drive.google.com/uc?id=${TRAPPIN_IN_JAPAN_24_DISK_1_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-trappin-japan-24-disk-1", "TRAPPIN IN JAPAN 24 DISK 1", TRAPPIN_IN_JAPAN_24_DISK_1_DEMO_LONGLINE, TRAPPIN_IN_JAPAN_24_DISK_1_DEMO_IMG, 3, 0, "Демо, 45m of  of Phonk Vapor Trap", TRAPPIN_IN_JAPAN_24_DISK_1_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/cFH7-lE83io"));


    const CYBERDREAM_DEMO_IMG_ID = `1vwSVvNU0yzCmHsCrXKtnVzOlQ8mPiPl7`;
    const CYBERDREAM_DEMO_IMG = `https://drive.google.com/uc?id=${CYBERDREAM_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-cyberdream", "CYBER DREAM", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", `${CYBERDREAM_DEMO_IMG}`, 2, 0, "Демо, 120m of Vapor Chillwave Synthwave", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/yhCuCqJbOVE"));


    // AMBIENT TECHNO MIX 003
    //
    //
    const AMBIENT_TECHNO_003_LONGLINE = "";
    const AMBIENT_TECHNO_003_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const AMBIENT_TECHNO_003_IMG_ID = `1OJDmbnrguvckqkYUZWlqufpGhqG9_omO`;
    const AMBIENT_TECHNO_003_IMG = `https://drive.google.com/uc?id=${AMBIENT_TECHNO_003_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-ambient-techno-003", "AMBIENT TECHNO MIX 003", AMBIENT_TECHNO_003_LONGLINE, AMBIENT_TECHNO_003_IMG, 2, 0, "Демо, 96m of Ambient Techno", AMBIENT_TECHNO_003_SHORTLINE, "", true, true, "sound", "https://youtu.be/_TlmWBlYC8Q"));

    // LootArr.push(new DNELootCard("demo-patience", "P A T I E N C E", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "https://lh3.googleusercontent.com/R8hhVznQZxCScNx3mClr50t-31uLZNNaVzHBSnwo8_Qg8T6sZmwjkXubNOfb1VMxOis=w2400", 1, 0, "Демо, 68m of Lo-Fi<br> Vapor Trap", STRINGS.DEMO_LONGLINE, "", true, true, "sound"));

    // Patience
    //
    //
    const DEMO_PATIENCE_LONGLINE = "";
    const DEMO_PATIENCE_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const DEMO_PATIENCE_IMG = `https://lh3.googleusercontent.com/bcu13OJqk1khEZOvbIrxWXsCzvm1XSCgXy1G2wQHtgjapTpC394qTNhZmp2DucuMPCM=w2400`;

    LootArr.push(new DNELootCard("demo-patience", "P A T I E N C E", DEMO_PATIENCE_LONGLINE, DEMO_PATIENCE_IMG, 2, 0, "Демо, 39m of Chillwave Synthwave Retrowave", DEMO_PATIENCE_SHORTLINE, "", true, true, "sound", "https://youtu.be/Vd-tURJ4ThM"));

    // Royal noises from dead kingdoms
    //
    //
    const DEMO_CALM_DOWN_LONGLINE = "";
    const DEMO_CALM_DOWN_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const DEMO_CALM_DOWN_IMG_ID = `1JXhE690RzyUPRwI--jSlgpav7i9-U7ki`;
    const DEMO_CALM_DOWN_IMG = `https://drive.google.com/uc?id=${DEMO_CALM_DOWN_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-calm-down", "Calm Down", DEMO_CALM_DOWN_LONGLINE, DEMO_CALM_DOWN_IMG, 1, 0, "Демо, 16m of Experimental Ambient", DEMO_CALM_DOWN_SHORTLINE, "", true, true, "sound", "https://youtu.be/6EnT0zeVJkw"));


    // Royal noises from dead kingdoms
    //
    //
    const ALBUM_ROYAL_NOISES_LONGLINE = "";
    const ALBUM_ROYAL_NOISES_SHORTLINE = ``;
    const ALBUM_ROYAL_NOISES_IMG_ID = `1W0oKo1GPgLlv7Gl1KMYCBw_qLvqksNv7`;
    const ALBUM_ROYAL_NOISES_IMG = `https://drive.google.com/uc?id=${ALBUM_ROYAL_NOISES_IMG_ID}`;

    LootArr.push(new DNELootCard("album-royal-noises-from-dead-kingdoms", "Royal noises from dead kingdoms", ALBUM_ROYAL_NOISES_LONGLINE, ALBUM_ROYAL_NOISES_IMG, 2, 200, "Демо, 30m of Electronic Lo-Fi", ALBUM_ROYAL_NOISES_SHORTLINE, "", true, true, "sound"));


    // CHILL DUDE HERE
    //
    //
    const CHILL_DUDE_HERE_DEMO_LONGLINE = "";
    const CHILL_DUDE_HERE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const CHILL_DUDE_HERE_DEMO_IMG_ID = `1e983AlaSqeXDObvtCjPXw7yqFkqObTvb`;
    const CHILL_DUDE_HERE_DEMO_IMG = `https://drive.google.com/uc?id=${CHILL_DUDE_HERE_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-chill-dude-here", "CHILL DUDE HERE", CHILL_DUDE_HERE_DEMO_LONGLINE, CHILL_DUDE_HERE_DEMO_IMG, 2, 0, "Демо, 242m of Ambient Chillwave", CHILL_DUDE_HERE_DEMO_SHORTLINE, "", true, true, "sound"));

    // Bardcore for Dungeons & Dragons Chaos
    //
    //
    const BARDCORE_FOR_DND_DEMO_LONGLINE = "";
    const BARDCORE_FOR_DND_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE_SHORT}`;
    const BARDCORE_FOR_DND_DEMO_IMG_ID = `172geHf2iriwbIWK1NBF3zwdQf-wJTBAh`;
    const BARDCORE_FOR_DND_DEMO_IMG = `https://drive.google.com/uc?id=${BARDCORE_FOR_DND_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-bardcore-for-dnd", "Bardcore for Dungeons & Dragons Chaos", BARDCORE_FOR_DND_DEMO_LONGLINE, BARDCORE_FOR_DND_DEMO_IMG, 2, 0, "Демо, 79m of Bardcore", BARDCORE_FOR_DND_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/dd-qazuihVk"));


    // Eighties Music... but it has been turned medieval!
    //
    //
    const BARDCORE_80_DEMO_LONGLINE = "";
    const BARDCORE_80_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE_SHORT}`;
    const BARDCORE_80_DEMO_IMG_ID = `1jqi5ZEiuMJLJtWltsixQYzjwvHpSpJEc`;
    const BARDCORE_80_DEMO_IMG = `https://drive.google.com/uc?id=${BARDCORE_80_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-medieval-80", "Eighties Music... but it has been turned medieval!", BARDCORE_80_DEMO_LONGLINE, BARDCORE_80_DEMO_IMG, 2, 0, "Демо, 92m of Bardcore Ambient", BARDCORE_80_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/d47Wr2Gcpko"));

    // Dr. Dre Beats but they're MEDIEVAL
    //
    //
    const MEDIAEVAL_DRE_DEMO_LONGLINE = "";
    const MEDIAEVAL_DRE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const MEDIAEVAL_DRE_DEMO_IMG_ID = `1iZkCjwKMZb87yi23bT-vL3ew9m9-1Dk_`;
    const MEDIAEVAL_DRE_DEMO_IMG = `https://drive.google.com/uc?id=${MEDIAEVAL_DRE_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-medieval-dre", "Dr. Dre Beats but they're MEDIEVAL", MEDIAEVAL_DRE_DEMO_LONGLINE, MEDIAEVAL_DRE_DEMO_IMG, 2, 0, "Демо, 58m of Bardcore Hip-Hop", MEDIAEVAL_DRE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/R1rVTOHWhYc"));

    // Anathema
    //
    //
    const ANATHEMA_ALBUM_LONGLINE = "";
    const ANATHEMA_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const ANATHEMA_ALBUM_IMG_ID = `1BTK9D2GoYB5Vg4Acp0jAzV4S6piv-0nC`;
    const ANATHEMA_ALBUM_IMG = `https://drive.google.com/uc?id=${ANATHEMA_ALBUM_IMG_ID}`;

    LootArr.push(new DNELootCard("album-anathema", "Anathema", ANATHEMA_ALBUM_LONGLINE, ANATHEMA_ALBUM_IMG, 2, 0, "Альбом, 47m of Vaporwave Downtempo Trip-Hop", ANATHEMA_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/DjU2P02YZpE"));

    // Anathema
    //
    //
    const ETERNITY_OF_PAIN_ALBUM_LONGLINE = "";
    const ETERNITY_OF_PAIN_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const ETERNITY_OF_PAIN_ALBUM_IMG_ID = `110vh8sqktvTn1EewRfoS1q6wOUULY5Ok`;
    const ETERNITY_OF_PAIN_ALBUM_IMG = `https://drive.google.com/uc?id=${ETERNITY_OF_PAIN_ALBUM_IMG_ID}`;

    LootArr.push(new DNELootCard("album-eternity-of-pain", "Eternity of pain", ETERNITY_OF_PAIN_ALBUM_LONGLINE, ETERNITY_OF_PAIN_ALBUM_IMG, 2, 0, "Альбом, 56m of Experimental Industrial Vaporvawe", ETERNITY_OF_PAIN_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/m1dPbco7dok"));

    // Lost soul
    //
    //
    const LOST_SOUL_ALBUM_LONGLINE = "";
    const LOST_SOUL_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const LOST_SOUL_ALBUM_IMG_ID = `1Xn5Un_iekULg1ELV8BUBClLJRoamtbSj`;
    const LOST_SOUL_ALBUM_IMG = `https://drive.google.com/uc?id=${LOST_SOUL_ALBUM_IMG_ID}`;

    LootArr.push(new DNELootCard("album-lost-soul", "Lost soul", LOST_SOUL_ALBUM_LONGLINE, LOST_SOUL_ALBUM_IMG, 2, 0, "Альбом, 46m of Vaporvawe Abstract Hip-Hop", LOST_SOUL_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/mNH_h0KxBJ4"));


    // HARDWAVE PHONK MIX
    //
    //
    const HARDWAVE_DEMO_LONGLINE = "";
    const HARDWAVE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const HARDWAVE_DEMO_IMG_ID = `12xpLKOEc3Zj2XNh0DmlPZGIENrA8K2xL`;
    const HARDWAVE_DEMO_IMG = `https://drive.google.com/uc?id=${HARDWAVE_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-hardwave", "HARDWAVE PHONK MIX", HARDWAVE_DEMO_LONGLINE, HARDWAVE_DEMO_IMG, 1, 0, "Демо, 76m of Hardwave Phonk", HARDWAVE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/9GDnI1tCoZM"));

    // Sing Me a Lullaby, My Sweet Temptation
    //
    //
    const SWEET_TEMPTATION_ALBUM_LONGLINE = "";
    const SWEET_TEMPTATION_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const SWEET_TEMPTATION_ALBUM_IMG_ID = `1oDnU-joLQnXZ_IXwEjQfSSAfy9xBOHOo`;
    const SWEET_TEMPTATION_ALBUM_IMG = `https://drive.google.com/uc?id=${SWEET_TEMPTATION_ALBUM_IMG_ID}`;

    LootArr.push(new DNELootCard("album-sweet-temptation", "Sing Me a Lullaby, My Sweet Temptation", SWEET_TEMPTATION_ALBUM_LONGLINE, SWEET_TEMPTATION_ALBUM_IMG, 3, 500, "Альбом, 36m of Hardwave Hip-Hop", SWEET_TEMPTATION_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/vkzJT3Y5n1Y"));

    //
    //
    //
    const ALBUM_I_MO_LONGER_FEAR_LONGLINE = "";
    const ALBUM_I_MO_LONGER_FEAR_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const ALBUM_I_MO_LONGER_FEAR_IMG_ID = `1tq4UM6q8HnMC2GgHShZSQ0-WHjFhEKAP`;
    const ALBUM_I_MO_LONGER_FEAR_IMG = `https://drive.google.com/uc?id=${ALBUM_I_MO_LONGER_FEAR_IMG_ID}`;

    LootArr.push(new DNELootCard("album-i-no-longer-fear", "I NO LONGER FEAR THE RAZOR GUARDING MY HEEL I,II,III,IV", ALBUM_I_MO_LONGER_FEAR_LONGLINE, ALBUM_I_MO_LONGER_FEAR_IMG, 2, 0, "Альбом, 30m of Cloud Trap Hip-Hop", ALBUM_I_MO_LONGER_FEAR_SHORTLINE, "", true, true, "sound", "https://youtu.be/n-E1gnMvzng"));

    // HOTLINE MIAMI EPIC MIX
    //
    //
    const EPIC_HOTLINE_DEMO_LONGLINE = "";
    const EPIC_HOTLINE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const EPIC_HOTLINE_DEMO_IMG_ID = `1bbxxOMmU-Gfc8RxlDIINf6K4T41ZQ9rT`;
    const EPIC_HOTLINE_DEMO_IMG = `https://drive.google.com/uc?id=${EPIC_HOTLINE_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-epic-hotline", "HOTLINE MIAMI<br> EPIC MIX", EPIC_HOTLINE_DEMO_LONGLINE, EPIC_HOTLINE_DEMO_IMG, 1, 0, "Демо, 87m of Synth Retrowave", EPIC_HOTLINE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/bnAYRFcYIao"));

    // HOTLINE MIAMI CHILL MIX
    //
    //
    const CHILL_HOTLINE_DEMO_LONGLINE = "";
    const CHILL_HOTLINE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const CHILL_HOTLINE_DEMO_IMG_ID = `1e7NHh9oQ1hM-dYEq-2IUmMBAofeATTax`;
    const CHILL_HOTLINE_DEMO_IMG = `https://drive.google.com/uc?id=${CHILL_HOTLINE_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-chill-hotline", "HOTLINE MIAMI CHILL MIX", CHILL_HOTLINE_DEMO_LONGLINE, CHILL_HOTLINE_DEMO_IMG, 1, 0, "Демо, 99m of Chill Retrowave", CHILL_HOTLINE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/Dgy2ssdhYCg"));

    // DANGEROUS DAYS
    //
    //
    const DANGEROUS_DAYS_ALBUM_LONGLINE = "";
    const DANGEROUS_DAYS_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const DANGEROUS_DAYS_ALBUM_IMG_ID = `1guZ8eFtexrCgGvYSmxcdezNaoHX6Lp5G`;
    const DANGEROUS_DAYS_ALBUM_IMG = `https://drive.google.com/uc?id=${DANGEROUS_DAYS_ALBUM_IMG_ID}`;

    LootArr.push(new DNELootCard("album-dangerous-days", "DANGEROUS DAYS", DANGEROUS_DAYS_ALBUM_LONGLINE, DANGEROUS_DAYS_ALBUM_IMG, 2, "1.2K", "Демо, 69m of Coldwave Synth Retrowave", DANGEROUS_DAYS_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/1Vsf3zYppP4"));

    // ANGELWAVE
    //
    //
    const ANGELWAVE_ALBUM_LONGLINE = "";
    const ANGELWAVE_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const ANGELWAVE_ALBUM_IMG_ID = `1nrjlM84k1793Itl_lHi91RyMyaSmaHm5`;
    const ANGELWAVE_ALBUM_IMG = `https://drive.google.com/uc?id=${ANGELWAVE_ALBUM_IMG_ID}`;

    LootArr.push(new DNELootCard("album-angelwave", "ANGELWAVE", ANGELWAVE_ALBUM_LONGLINE, ANGELWAVE_ALBUM_IMG, 3, "NYP", "Альбом, 30m of Progressive Vapor Cloud", ANGELWAVE_ALBUM_SHORTLINE, "", true, true, "sound"));


    // ENIGMA
    //
    //
    const ENIGMA_ALBUM_LONGLINE = "";
    const ENIGMA_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE_2}`;
    const ENIGMA_ALBUM_IMG_ID = `1f5VbsCJEIh6Du7qdEIXK18GEOBpyDuYm`;
    const ENIGMA_ALBUM_IMG = `https://drive.google.com/uc?id=${ENIGMA_ALBUM_IMG_ID}`;

    LootArr.push(new DNELootCard("album-enigma", "ENIGMA", ENIGMA_ALBUM_LONGLINE, ENIGMA_ALBUM_IMG, 9, "NYP", "Альбом, 352m of New-Age Downtempo Experimental Ambient Chillout", ENIGMA_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/7Qv6CsSEaPE"));

    // How to see through walls
    //
    //
    const HOW_TO_SEE_THROUGH_WALLS_ALBUM_LONGLINE = "";
    const HOW_TO_SEE_THROUGH_WALLS_ALBUM_SHORTLINE = ``;
    const HOW_TO_SEE_THROUGH_WALLS_ALBUM_IMG_ID = `1QsltsKrrS8aH3wZ4nWLlPt0xRAikS1qY`;
    const HOW_TO_SEE_THROUGH_WALLS_ALBUM_IMG = `https://drive.google.com/uc?id=${HOW_TO_SEE_THROUGH_WALLS_ALBUM_IMG_ID}`;

    LootArr.push(new DNELootCard("album-how-to-see-through-walls", "How to see through walls", HOW_TO_SEE_THROUGH_WALLS_ALBUM_LONGLINE, HOW_TO_SEE_THROUGH_WALLS_ALBUM_IMG, 3, 0, "Альбом, 37m of Electronic Vapor Ambient", HOW_TO_SEE_THROUGH_WALLS_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/eyFfubvho4M"));


    // Zeldawave
    //
    //
    const ZELDAWAVE_DEMO_LONGLINE = "";
    const ZELDAWAVE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const ZELDAWAVE_DEMO_IMG_ID = `1oK_9CJdh5lNu_p3FYGExmDrxuttOZngU`;
    const ZELDAWAVE_DEMO_IMG = `https://drive.google.com/uc?id=${ZELDAWAVE_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-zeldawave", "Zeldawave", ZELDAWAVE_DEMO_LONGLINE, ZELDAWAVE_DEMO_IMG, 1, 0, "Демо, 20m of Vapor Ambient", ZELDAWAVE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/bHUvykXL8Og"));

    // Zeldawave 2
    //
    //
    const ZELDAWAVE_2_DEMO_LONGLINE = "";
    const ZELDAWAVE_2_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const ZELDAWAVE_2_DEMO_IMG_ID = `1yHu5WTJTqwPBr7jTjJDS1rXrnFej7eXA`;
    const ZELDAWAVE_2_DEMO_IMG = `https://drive.google.com/uc?id=${ZELDAWAVE_2_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-zeldawave-2", "Zeldawave II", ZELDAWAVE_2_DEMO_LONGLINE, ZELDAWAVE_2_DEMO_IMG, 2, 0, "Демо, 28m of Vapor Ambient", ZELDAWAVE_2_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/kQXsiJ1lLss"));

    // Dub Wars
    //
    //
    const DUB_WARS_DEMO_LONGLINE = "";
    const DUB_WARS_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const DUB_WARS_DEMO_IMG_ID = `19QaHbVDWha8GeMJuh0zah2MhVybNvXHh`;
    const DUB_WARS_DEMO_IMG = `https://drive.google.com/uc?id=${DUB_WARS_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-dub-wars", "Dub Wars: A New Dope", DUB_WARS_DEMO_LONGLINE, DUB_WARS_DEMO_IMG, 3, 0, "Демо, 60m of Abstract Psy Dub", DUB_WARS_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/rMqxBWj6Qj8"));

    // Best of Tour De Manège
    //
    //
    const TOUR_DE_MANEGE_DEMO_LONGLINE = "";
    const TOUR_DE_MANEGE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const TOUR_DE_MANEGE_DEMO_IMG_ID = `103_a2PITPU0q7LVL7GRbgrt69Z7KshV3`;
    const TOUR_DE_MANEGE_DEMO_IMG = `https://drive.google.com/uc?id=${TOUR_DE_MANEGE_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-tour-de-manege", "Best of Tour De Manège", TOUR_DE_MANEGE_DEMO_LONGLINE, TOUR_DE_MANEGE_DEMO_IMG, 2, 0, "Демо, 91m of Trippy Abstract Hip-Hop", TOUR_DE_MANEGE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/EB6-PQ1hAVc"));

    // Gesserit Sister
    //
    //
    const GESSERIT_SISTER_DEMO_LONGLINE = "";
    const GESSERIT_SISTER_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const GESSERIT_SISTER_DEMO_IMG_ID = `1YLgWZPie0fkDQ56QpKKIxTsHHt_nTIhp`;
    const GESSERIT_SISTER_DEMO_IMG = `https://drive.google.com/uc?id=${GESSERIT_SISTER_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-gesserit-sister", "A Bene Gesserit Sister", GESSERIT_SISTER_DEMO_LONGLINE, GESSERIT_SISTER_DEMO_IMG, 1, 0, "Демо, 29m of Dark Ambient", GESSERIT_SISTER_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/EB6-PQ1hAVc"));

    // Gorilaz
    //
    //
    const GORILLAZ_X_HOUSE_DEMO_LONGLINE = "";
    const GORILLAZ_X_HOUSE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE_SHORT}`;
    const GORILLAZ_X_HOUSE_DEMO_IMG_ID = `16iDFhUcwmUj-175sQTCg2cXg2j26iLqX`;
    const GORILLAZ_X_HOUSE_DEMO_IMG = `https://drive.google.com/uc?id=${GORILLAZ_X_HOUSE_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-gorillaz-x-house", "Gorillaz X House Mix", GORILLAZ_X_HOUSE_DEMO_LONGLINE, GORILLAZ_X_HOUSE_DEMO_IMG, 1, 0, "Демо, 38m of Abstract Hip-Hop House", GORILLAZ_X_HOUSE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/k8WpsRa3iB0"));

    // Take a little trip with me
    //
    //
    const TAKE_A_LITTLE_DEMO_LONGLINE = "";
    const TAKE_A_LITTLE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE_SHORT_2}`;
    const TAKE_A_LITTLE_DEMO_IMG_ID = `1eAtSAJVwCWLOaJ9FLdIsH3x-PLt3fv3T`;
    const TAKE_A_LITTLE_DEMO_IMG = `https://drive.google.com/uc?id=${TAKE_A_LITTLE_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-take-a-little-trip-with-me", "Take a little trip with me", TAKE_A_LITTLE_DEMO_LONGLINE, TAKE_A_LITTLE_DEMO_IMG, 2, 0, "Демо, 128m of Ambient Psychodelic Trip", TAKE_A_LITTLE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/keP2jfl4kT4"));

    // Psycho Tropical Berlin
    //
    //
    const PSYCHO_TROPICAL_BERLIN_ALBUM_LONGLINE = "";
    const PSYCHO_TROPICAL_BERLIN_ALBUM_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const PSYCHO_TROPICAL_BERLIN_ALBUM_IMG_ID = `1zvzJvVFYEMnlpzC_pX69KWQjzAx3Dvra`;
    const PSYCHO_TROPICAL_BERLIN_ALBUM_IMG = `https://drive.google.com/uc?id=${PSYCHO_TROPICAL_BERLIN_ALBUM_IMG_ID}`;

    LootArr.push(new DNELootCard("album-psycho-tropical-berlin", "Psycho Tropical Berlin", PSYCHO_TROPICAL_BERLIN_ALBUM_LONGLINE, PSYCHO_TROPICAL_BERLIN_ALBUM_IMG, 3, 0, "Альбом, 65m of Psy Electronic", PSYCHO_TROPICAL_BERLIN_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/fNQ_3TCnAyw"));

    // Nice Guys Love You - Vol. 4
    //
    //
    const NICE_GUYS_LOVE_YOU_4_DEMO_LONGLINE = "";
    const NICE_GUYS_LOVE_YOU_4_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const NICE_GUYS_LOVE_YOU_4_DEMO_IMG_ID = `1bhbmKR4eMjz1x5cs8PKw4TSCswQ8bTnt`;
    const NICE_GUYS_LOVE_YOU_4_DEMO_IMG = `https://drive.google.com/uc?id=${NICE_GUYS_LOVE_YOU_4_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-nice-guys-love-you-4", "Nice Guys Love You Vol. 4", NICE_GUYS_LOVE_YOU_4_DEMO_LONGLINE, NICE_GUYS_LOVE_YOU_4_DEMO_IMG, 2, 0, "Демо, 99m of Indie Lo-Fi", NICE_GUYS_LOVE_YOU_4_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/ZD37ZPMTjPw"));

    // Hyrule Lofi
    //
    //
    const LOFI_TIME_DEMO_LONGLINE = "";
    const LOFI_TIME_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const LOFI_TIME_DEMO_IMG_ID = `19yhuD_3s6xOxclhG6hqJvyKmhe42Cw_8`;
    const LOFI_TIME_DEMO_IMG = `https://drive.google.com/uc?id=${LOFI_TIME_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-ambient-time", `Ambient Time`, LOFI_TIME_DEMO_LONGLINE, LOFI_TIME_DEMO_IMG, 1, 0, "Демо, 38m of Ambient Lo-Fi", LOFI_TIME_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/kKLzVv4hb8w"));

    // Hyrule Lofi
    //
    //
    const HYRULE_LOFI_DEMO_LONGLINE = "";
    const HYRULE_LOFI_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const HYRULE_LOFI_DEMO_IMG_ID = `1tg9rVUhWlOMeC5R8yd25SiYq233Mpy_3`;
    const HYRULE_LOFI_DEMO_IMG = `https://drive.google.com/uc?id=${HYRULE_LOFI_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-hyrule-lofi", `Hyrule<br> Lo-Fi`, HYRULE_LOFI_DEMO_LONGLINE, HYRULE_LOFI_DEMO_IMG, 1, 0, "Демо, 34m of Lo-Fi", HYRULE_LOFI_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/NXqr-zpDnMc"));

    // Level Select
    //
    //
    const LEVEL_SELECT_DEMO_LONGLINE = "";
    const LEVEL_SELECT_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const LEVEL_SELECT_DEMO_IMG_ID = `1f4UA4u3Ebn5AFoVLvWBGz8qV1UgKKIfL`;
    const LEVEL_SELECT_DEMO_IMG = `https://drive.google.com/uc?id=${LEVEL_SELECT_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-level-select", `Level Select`, LEVEL_SELECT_DEMO_LONGLINE, LEVEL_SELECT_DEMO_IMG, 3, 0, "Демо, 57m of Dub Jungle", LEVEL_SELECT_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/Oa4MT9LPcaU"));

    // Slowed Mr. Robot vol.6-7
    //
    //
    const SLOWED_ROBOT_DEMO_LONGLINE = "";
    const SLOWED_ROBOT_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const SLOWED_ROBOT_DEMO_IMG_ID = `1Zh0a-EZKSApRlCddW397kLEex0fQWVUP`;
    const SLOWED_ROBOT_DEMO_IMG = `https://drive.google.com/uc?id=${SLOWED_ROBOT_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-mr-robot-6-7", `Mr. Robot vol.6&7`, SLOWED_ROBOT_DEMO_LONGLINE, SLOWED_ROBOT_DEMO_IMG, 1, 0, "Демо, 55m of Ambient Downtempo", SLOWED_ROBOT_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/OytfbywcMNs"));

    // Level Select
    //
    //
    const EXODUS_DEMO_LONGLINE = "";
    const EXODUS_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const EXODUS_DEMO_IMG_ID = `1gzZoNLbGksrrg1Z9TrA_4VG_wsUdi5Wx`;
    const EXODUS_DEMO_IMG = `https://drive.google.com/uc?id=${EXODUS_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-exodus", `EXODUS`, EXODUS_DEMO_LONGLINE, EXODUS_DEMO_IMG, 3, 0, "Демо, 135m of Synthwave Retrowave Chillwave", EXODUS_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/cCTaiJZAZak"));

    // // VILL4IN TV Episode 001 + 002
    // //
    // //
    // const VILL4IN_TV_DEMO_LONGLINE = "";
    // const VILL4IN_TV_DEMO_SHORTLINE = `${STRINGS.ALBUM_LONGLINE_2}`;
    // const VILL4IN_TV_DEMO_IMG_ID = `1IOWzUR6lRoI05EKH3KL3nNsRPA8K5s8a`;
    // const VILL4IN_TV_DEMO_IMG = `https://drive.google.com/uc?id=${VILL4IN_TV_DEMO_IMG_ID}`;
    //
    // LootArr.push(new DNELootCard("demo-vill4in-tv", "VILL4IN TV Episode 001 + 002", VILL4IN_TV_DEMO_LONGLINE, VILL4IN_TV_DEMO_IMG, 3, 0, "Платівка, 243m of Experimental Ambient Downtempo Vaporware", VILL4IN_TV_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/tRoW695S3vc"));



    // LootArr.push(new DNELootCard("i-blank-hoodie", "Бланковий худік", "", "", 1, 1500, ""));
    // LootArr.push(new DNELootCard("money", "Гроші", "Коли вони дзвонять, зазвичай беруть слухавку", "", 1, "∞", ""));
    // LootArr.push(new DNELootCard("leak", "Злив", "Старий добрий спосіб швидко та надійно стати цікавою  та популярною. Обов'язково мати камеру що знімає в 1080p, шакальними відео з туалету вже нікого не зацікавиш. Хочеш посилити ефект? Замов рекламу)", "", 10, 0, "Тільки для дівчат"));
    // LootArr.push(new DNELootCard("only-friends", "Only Friends", "Старий добрий спосіб швидко та надійно перетворити свою популярність у стабільний заробіток. Обов'язково мати камеру що знімає в 1080p та доступ до інтернету і що найменше один раз на тиждень приділяти день роботі. Чим вищий профессіоналізм ти будеш демонструвати, тим вище буде винагороджуватись твоя праця.", "", 2, "2К-60K", "Тільки для дівчат"));
    LootArr.push(new DNELootCard("i-safe", "Сейф", "Дає суттєвий рівень безпеки будь-яким речам площею 30х40см. Доступ до них може отримати лише володар ключа від сейфу, що виготовляється в єдиному єкземплярі при покупці.", "https://lh6.googleusercontent.com/LaTJIdex8PUbPB0NB7g5BhVVnUeTmq3Fh8wUv0PLbudO8PPoSxBMTOpt24cTq0n05sM=w2400", 0, 3400, ""));
    LootArr.push(new DNELootCard("i-alarm-button", "Тривожна кнопка", "Миттєво викликає патруль озброєної охорони що прибуває напротязі двох хвилин та чемно питає що сталося. У вартість входить: виїзд майстера, додаток, його активація та налаштування, навчання. Додатково оплачується виїзд групи швидкого реагування: 800 — виїзд і кожні 30 хв - ще 500", "https://lh6.googleusercontent.com/5XhLjs9p0Pmxj2OgcIkIvLVDIrThcCjgO8yptC1NlByuFt-EEVRhsc0JSB_eJ382Gek=w2400", 0, "2К+300/міс", ""));

    LootArr.push(new DNELootCard("dirty-mouth", "Не почистити зуби", "Ротова вонь дає мінус привабливості. Будь-який івент на який прийде гравець з цією проблемою отримує -2 до виправданих очікувань аудиторії. Може бути скинута після одного івенту або раніше, якщо почистити зуби.", "https://lh5.googleusercontent.com/fXOXvb-4Nu-o1LqenwcbnBhj8BCoFxNLn6Dsez4KU8f2jDpg-cru4RivzjN2uFpXK_0=w2400", 2, 0, "Проблема!"));
    // Боже втручання
    LootArr.push(new DNELootCard("god-wtf", "Боже втручання", "Ти маєш зіграти цю карту, як тільки її отримав. Усі DJ одразу отримують замовлення на вечірку на Кирилівській! Знайди карту замовлення вечірки на Кирилівській та одразу її активуй. Після проведення цієї вечірки гра закінчиться та виграє гравець з найбільшим капіталом. Якщо ти виграв за рахунок цієї карти, ти в праві підвергнути суперників нещадному реготу.", "https://lh5.googleusercontent.com/oKk0dgYD_pZfoxzwIy_FmLIWw2ffxHfpl0vJwiAXkGYei30EFVrLyMG9K-HvkSmRKRA=w2400", 0, 0, "", "Усі DJ-ї отримують рівень просто зараз, навіть якщо це переможний рівень. Якщо ти виграв за рахунок цієї карти, ти в праві підвергнути суперників нещадному реготу.", "", true, true, "dia"));

    // Нокіа
    //
    //
    const NOKIA_LONGLINE = "";
    const NOKIA_SHORTLINE = `Так, ще працює`;
    const NOKIA_IMG_ID = `1pXrDMWoWJquMqkDbb5eyEAUYzOznq4pl`;
    const NOKIA_IMG = `https://drive.google.com/uc?id=${NOKIA_IMG_ID}`;

    LootArr.push(new DNELootCard("nokia", "Нокіа", NOKIA_LONGLINE, NOKIA_IMG, 1, 0, "Фон", NOKIA_SHORTLINE, "", true, true, "anti"));

    // Воскресіння
    //
    //
    const RESURRECTION_LONGLINE = "";
    const RESURRECTION_SHORTLINE = `Дозволяє один раз піднятись після Смертельного удару`;
    const RESURRECTION_IMG_ID = `1yJyUEOVQe7kjHTZUDsaSUhaUTVFt_MPX`;
    const RESURRECTION_IMG = `https://drive.google.com/uc?id=${RESURRECTION_IMG_ID}`;

    // LootArr.push(new DNELootCard("resurrection", "Воскресіння", RESURRECTION_LONGLINE, RESURRECTION_IMG, 0, 0, "Дзютсу", RESURRECTION_SHORTLINE, "", true, true, "anti"));
    LootArr.push(new DNELootCard("resurrection", "Воскресіння", RESURRECTION_LONGLINE, RESURRECTION_IMG, 0, 0, "Дзютсу", RESURRECTION_SHORTLINE, "", false, "anti"));

    // LootArr.push(new DNELootCard("soft-paws", "На м'яких лапках", "З ними ти маєш здатність переміщатись непоітно, а твої рухи стають безшумні. Втрать здатність тримати будь що, бо в тебе лапки. Лапки з Навушками створюють неймовірної сили комбо.", "", 0, 0, "", "З ними ти маєш здатність переміщатись непоітно, а твої рухи стають безшумні. Втрать здатність тримати будь що, бо в тебе лапки.", "", false, "loot"));
    // Спойлер
    LootArr.push(new DNELootCard("spoiler", "Спойлер", "Спойлер дозволяє дізнатись хто виграє гру і не дати йому це зробити. Навіть якщо він вже мав виграти і кричить про це у весь голос. Рішення залежить тільки від тебе.", "https://lh5.googleusercontent.com/uXfX_bj1898ak2fCQmahc-wipWTmASAPGRQa-ywKRELxW69VRALjVf09rndPQkKpImI=w2400", 0, 0, ""));
    // Басік
    LootArr.push(new DNELootCard("car-basic", "Басік", "Басік дозволяє перевозити великі речі з точки А в точку B. Головне щоб в тебе було водійське посвідчення, або друг що його має.", "https://lh6.googleusercontent.com/wStGVg8Yb2fYZNfplyT3mHmtmeRieKLPqpdqy9lL0r9FYV5BMiH2miGi59FD85vShMs=w2400", 2, "90K/500", "Авто", "Басік дозволяє перевозити великі речі з точки А в точку B. Головне щоб в тебе було водійське посвідчення, або друг що його має.", "", true, true, "car"));
    // Таємничий фургон
    LootArr.push(new DNELootCard("car-mystery-track", "Таємничий фургон", "Дозволяє перевозити великі речі з точки А в точку B. Продавець сказав, що має якусь особливість, та не сказав яку.", "https://lh6.googleusercontent.com/0GkaTTGsXh_uSXnfkxxJ4QN3jQzO-DeTghgGp4JijNf5EtyY2t4FtqnCGAq3NKT91Fs=w2400", 2, "110K/700", "Авто", "Дозволяє перевозити великі речі з точки А в точку B. Продавець сказав, що має якусь особливість, та не сказав яку.", "", true, true, "car"));
    LootArr.push(new DNELootCard("car-my-avi", "Міні-аві", "Дозволяє перевозити великі речі з точки А в точку B. Літає так швидко, що не наздогнати.", "https://lh6.googleusercontent.com/G3sHLcA51HqhXD2U0pd0gGdl2QAEnfpz2g2YPbkra4Sq-EY5nlGJNjuJLhRuUR2XkpQ=w2400", 3, "220K/1700", "Авто", "Дозволяє перевозити великі речі з точки А в точку B. Літає так швидко, що не наздогнати.", "", true, true, "car"));
    LootArr.push(new DNELootCard("car-cosmos-track", "Космос-бас", "Дозволяє перевозити великі речі та безліч Найомничків з точки А в точку B. Літає так швидко, що не наздогнати.", "https://lh6.googleusercontent.com/JZpuQtC_XPMf-6fF-X1a8iHN34Q7nll6duEXKbFb5TAz4ir8bj2QEIVVgD43K3Yk-G4=w2400", 3, "240K/1400", "Авто", "Дозволяє перевозити великі речі та безліч Найомничків з точки А в точку B. Літає так швидко, що не наздогнати.", "", true, true, "car"));

    const CAR_FERRARI_SHORTLINE = "Найшвидший транспорт на земній поверхні. Підходить для замовлень де швидкість на першому місці.";
    const CAR_FERRARI_LONGLINE = "Дозволяє перевозити великі речі та одного Найомничка з точки А в точку B.<br><br> Пристебни ремінь, крихітко.";
    LootArr.push(new DNELootCard("car-ferrari", "Ферарі", CAR_FERRARI_LONGLINE, "https://lh4.googleusercontent.com/faeJJ6BqQD6CnwzDZg19iPT84KMR97wRsAKGOqUCkJZQ8qCR1d58DUsf2ttucDmUHXM=w2400", 4, "370K/5K", "Авто", CAR_FERRARI_SHORTLINE, "", true, true, "car"));
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
    const NO_RULES_DMT_IMG_ID = `1fIo3eHY8kCPqdlF-vnvfZM9iPwmxjDnU`;
    const NO_RULES_DMT_IMG = `https://drive.google.com/uc?id=${NO_RULES_DMT_IMG_ID}`;

    LootArr.push(new DNELootCard("dmt-breathing-no-rules", "DMT-дихання без правил", "Максимально проста заспокійлива медитація на основі практики холотропного дихання. Нічого складного, просто повторюй за майстром та насолоджуйся. Потребує короткий проміжок часу щоб перезавантажити хімію крові та отримати певну кількість додаткової енергії. Сесія дихання може тривати від 5 до 45 хвилин, даючи тим більше енергії, чем довшою вона була. Кожен гравець що приєнується до сесії дає більше додаткової енергії усім учасникам. Дає можливість наситити тіло киснем та отримати енергії на годину. Для підтримання єфекту на задовільному рівні рекомендується використовувати не частіше одного разу на добу.", NO_RULES_DMT_IMG, 1, "5m", "Медитація", "Заспокійлива медитація позбавлена будь яких правил, what ever works best", "", true, true, "anti", "https://youtu.be/YJ0mCDlwi2Q"));

    LootArr.push(new DNELootCard("dmt-breathing", "DMT-дихання", "Максимально проста заспокійлива медитація на основі практики холотропного дихання. Нічого складного, просто повторюй за майстром та насолоджуйся. Потребує короткий проміжок часу щоб перезавантажити хімію крові та отримати певну кількість додаткової енергії. Сесія дихання може тривати від 5 до 45 хвилин, даючи тим більше енергії, чем довшою вона була. Кожен гравець що приєнується до сесії дає більше додаткової енергії усім учасникам. Дає можливість наситити тіло киснем та отримати енергії на годину. Для підтримання єфекту на задовільному рівні рекомендується використовувати не частіше одного разу на добу.", "https://lh5.googleusercontent.com/giP9SpZzE2TghZ_eEbGlFBd6rCj6KtDQdtxWqk4rArsCotYD0kUK_4drDWieWkdUfzw=w2400", 1, "5m", "Медитація", "Проста заспокійлива медитація для відновлення енергії", "", true, true, "anti", "https://youtu.be/WAi868by1aA"));
    LootArr.push(new DNELootCard("dmt-alkaline-breathing", "Tao Te Ching", "Просунута фокусуюча медитація на основі практики холотропного дихання. Нічого складного, просто повторюй за майстром та насолоджуйся. Потребує короткий проміжок часу щоб перезавантажити хімію крові та отримати певну кількість додаткової енергії. Сесія дихання може тривати від 5 до 45 хвилин, даючи тим більше енергії, чем довшою вона була. Кожен гравець що приєнується до сесії дає більше додаткової енергії усім учасникам. Дає можливість наситити тіло киснем та отримати енергії на годину. Для підтримання єфекту на задовільному рівні рекомендується використовувати не частіше одного разу на добу.", "https://lh3.googleusercontent.com/LBMcaimOv_avTcBhSzXZnSrkvPtOQE_pAJpoQApnPQvX0c_b2hof0uFA4SllGn6Vf1U=w2400", 1, "15m", "Alkaline DMT-дихання", "Просунута тонізуюча медитація для додаткової енергії та миттевого фокусу", "", true, true, "anti", "https://youtu.be/eqGoJzM1F9s"));

    LootArr.push(new DNELootCard("dmt-shamanic-technic", "Шаманічне дихання", "Просунута дворівнева техніка дихання через рот, що складається з двох швидких вдохів на половину легень та повний видих в кінці ітерації.", "https://lh6.googleusercontent.com/0oclNbVaoBfebNJiioiBHMNjiFptXElUd4yvLE2_0NPgYH0PVw4Qg0AUVuGwu7fxK4c=w2400", 1, "", "Техніка", "Просунута техніка дихання через рот, що складається з двох швидких вдохів. +1 до медитацій з нею", "", true, true, "anti"));
    LootArr.push(new DNELootCard("dmt-wim-hof-technic", "Дихання Віма-Хова", "Просунута дворівнева техніка дихання через рот, що складається з двох швидких вдохів на половину легень та повний видих в кінці ітерації.", "https://lh3.googleusercontent.com/jLq3nGiyHFsvIQP0N8z8NScEgURv7gK013bVtKGeutejfw2xJRUspz36x4pjzXQD7yM=w2400", 1, "", "Техніка", "Просунута техніка дихання, що складається з одного глибокого вдоху через рот. Отримай +1 до усіх медитацій з цією технікою", "", true, true, "anti"));
    LootArr.push(new DNELootCard("picnick", "Пікнік", "Хапай подругу та на пляж, сонечко на дворі", "https://lh6.googleusercontent.com/JFMHRRTLGPGvIyj5MURCTrcnBSXxQu28Rx4lUl0JmSXF_NUAD9ozjd-QtQPqQpz0pZs=w2400", 1, "3⚡ 5h", "Пригода", "Хапай подругу та на пляж, сонечко на дворі.<br><br>Використай картки Спалаху або Хеппі-Міл аби зробити його особливим", "", true, true, "anti"));

    const POOL_DAY_LONGLINE = "";
    const POOL_DAY_SHORTLINE = "Сонечко сяє, пташки щебечуть, лолі плескають у воді. Твій карман зігріває два здорових косяка. Один, щоб цей день почати, та ще один, щоб його закінчити.";
    LootArr.push(new DNELootCard("pool-day", "День басейну", POOL_DAY_LONGLINE, "https://lh4.googleusercontent.com/n8qFlaoITH-yHq7uGCfyMx2G79_gStc1gjO0ODMaqTwMAq2LrjFXFnYk5FbOvagAI0U=w2400", 1, "4⚡ 8h 1K", "Пригода", POOL_DAY_SHORTLINE, "", true, true, "anti"));


    const FOREST_DAY_LONGLINE = "";
    const FOREST_DAY_SHORTLINE = "";
    LootArr.push(new DNELootCard("forest-day", "День лісу", FOREST_DAY_LONGLINE, "https://lh5.googleusercontent.com/yHJa_BdTAaNBdmpnu5nKnYPAxLus_KsoYAtcPPEXL91qSxo19S71EkVU0JdgQ30h3Ow=w2400", 1, "1⚡ 12h", "Пригода", FOREST_DAY_SHORTLINE, "", true, true, "anti"));

    LootArr.push(new DNELootCard("flower", "Квітка", "Насичує повітря киснем коли ти спиш, та ласує погляд коли прокидаєшся", "https://lh4.googleusercontent.com/G6o_Ys9Md86JRahzppRJv9QauONxab3IBGV05cSE1BoOBarZSPnUmadf0BJJbtaTojg=w2400", 0, "", "", "Насичує повітря киснем коли ти спиш, та ласує погляд коли прокидаєшся", "", true, true, "anti"));

    // Фон
    //
    //
    const FON_LONGLINE = "Портативний комп'ютерний термінал має низку особливих функцій для кожного. Може бути використаний для дзвінків, роутингу, доступу до Кіберпростору та багато іншого. Чим краще технологічно підкований виробник, тим ширшим буде набір можливостей.";
    const FON_SHORTLINE = `Дозволяє дзвонити Найомничкам, виходити в Мережу, бачити цифровий інтерфейс гри.`;
    const FON_IMG_ID = `1AWl-YY9QslohV0-jO4NRKtIX7UqZ06pm`;
    const FON_IMG = `https://drive.google.com/uc?id=${FON_IMG_ID}`;

    LootArr.push(new DNELootCard("ifon", "Фон", FON_LONGLINE, FON_IMG, 1, 4200, "", FON_SHORTLINE, "", true, true, "anti"));

    LootArr.push(new DNELootCard("unprompted-trip", "Спонтанна подорож", "Дає відчути справжній смак життя та розвиває вміння швидко адаптуватися до нових умов. Використовуючи цю карту ти відпускаєш жагу контролю над власним життям та довіряєш свою долю випадку.", "https://lh5.googleusercontent.com/zjsNPBT05XWGt1ThEvkQqxAXhtBDCgdYYiziaXQQcexhtb3rutoHbuk7yTPqaAxR698=w2400", 0, "", "", "Дає відчути справжній смак життя та розвиває вміння швидко адаптуватися до нових умов. Відпусти жагу контролю над життям та довірся випадку.", "", true, true, "anti"));

    // GAMEBOY
    //
    //
    const GAMEBOY_LONGLINE = "Дозволяє зберегти свій прогрес на GAMEBOY. Перезаписуй збереження скільки завгодно разів, та в тебе тільки один слот. Використовуй в будь який момент свого ходу щоб зберегтись або завантажитись. У випадку смерті ти просто завантажуєшся з останнього збереження. Цей предмет не можна обміняти або купити, лише подарувати, отримавши цю картку від Майстра на початку гри";
    const GAMEBOY_SHORTLINE = `Дозволяє зберегти свій прогрес на GAMEBOY. В будь який момент створи збереження та за потреби використай свій GAMEBOY щоб до нього завантажитись.`;
    const GAMEBOY_IMG = `https://lh4.googleusercontent.com/sN9l6r5xenQZTyUKE5O138NHImoBEvUqKk5LT3A5T8VRifLeSY9WcaPSsCgm_bAobrQ=w2400`;

    LootArr.push(new DNELootCard("gameboy", "GAMEBOY", GAMEBOY_LONGLINE, GAMEBOY_IMG, 0, 0, "", GAMEBOY_SHORTLINE, "", true, true, "anti"));

    // Mr. Mistix
    //
    //
    const MR_MISTIX_LONGLINE = "";
    const MR_MISTIX_SHORTLINE = `Присвятить життя тому щоб виконати одне твоє бажання, після чого назавжди зникне`;
    const MR_MISTIX_IMG_ID = `1a1apWkm5lJ3YcKAdvdUnvBUcy8IKmVHB`;
    const MR_MISTIX_IMG = `https://drive.google.com/uc?id=${MR_MISTIX_IMG_ID}`;

    LootArr.push(new DNELootCard("mr-mistix", "Mr. Mistix", MR_MISTIX_LONGLINE, MR_MISTIX_IMG, 0, 0, "Одноразова картка", MR_MISTIX_SHORTLINE, "", true, true, "anti"));

    // Кільце влади
    LootArr.push(new DNELootCard("power-ring", "Кільце влади", "Посилює найсильніші якості носителя, покращуючи їх до максимуму відносно обставин. Кільця влади можуть бути різної форми та рівнів могутності, залежно від майстра що його викував, рідкості матеріалу та каменю. З часом використання пробуджує темні сторони особистості носія та поступово підкоряє його власній волі. Кільце влади завжди вірне лише своєму творцю, завжди прагне до нього і чим більше наближається, тим могутнішим стає.", "https://lh4.googleusercontent.com/dWwMABhNjnvI-OOzxZDgmEqELhIfSJ25Ru8fR0hflXz1Ufd3Tr-jXDtZKTKVQ3dIxzk=w2400", 4, 0, "Драгоцінність", "Посилює найсильніші якості носителя, покращуючи їх до максимуму відносно обставин.", "", true, true, "anti"));


    // Почіта
    //
    //
    const POCHITA_LONGLINE = `Смерть із цією Тваринкою запускає вступний квест "Одна ніч у Києві" якщо встановлений Мод "Ніч на Землі".`;
    const POCHITA_SHORTLINE = `Може принести себе в жертву, щоб дати воскреснути своєму господареві, коли він зустріне Смерть.`;
    const POCHITA_IMG_ID = `1E6H0YeXJi9ShDVeNfKxPUaLZopLBaMKE`;
    const POCHITA_IMG = `https://drive.google.com/uc?id=${POCHITA_IMG_ID}`;

    LootArr.push(new DNELootCard("pochita", "Почіта", POCHITA_LONGLINE, POCHITA_IMG, 1, 0, "Тваринка", POCHITA_SHORTLINE, "", true, true, "npc"));

    // Фелікс
    //
    //
    const FELIX_LONGLINE = "";
    const FELIX_SHORTLINE = `Зіграє з тобою сет b2b. Зігріває та муркоче, загортається в м'які речі і заряджається на сонечку.`;
    const FELIX_IMG_ID = `1XEFWfOp4QXDsEEp9X3I9XQXADkno9-23`;
    const FELIX_IMG = `https://drive.google.com/uc?id=${FELIX_IMG_ID}`;

    LootArr.push(new DNELootCard("felix", "Фелікс", FELIX_LONGLINE, FELIX_IMG, 1, 0, "Тваринка-DJ", FELIX_SHORTLINE, "", true, true, "npc"));

    // 1UP
    //
    //
    const IUP_LONGLINE = "";
    const IUP_SHORTLINE = `Ще одне життя. Так, ти можеш почати усе з початку. Використай цю картку щоб врятувати від Смерті побратима.`;
    const IUP_IMG = `https://lh4.googleusercontent.com/Tp-OCYgwdmmEESRTfr5pVRypB46latBy3uAIOqbhsKlghxUsKAPN48RuUD_leLquyEM=w2400`;

    // LootArr.push(new DNELootCard("iup", "1UP", IUP_LONGLINE, IUP_IMG, 0, 0, "", IUP_SHORTLINE, "", true, true, "anti"));
    LootArr.push(new DNELootCard("iup", "1UP", IUP_LONGLINE, IUP_IMG, 0, 0, "", IUP_SHORTLINE, "", false, "anti"));

    LootArr.push(new DNELootCard("tea-break", "Перерва на чай", "Дозволяє структурувати думки та наповнитись теплом чаю. Отримай свіжу енергію.", "https://lh6.googleusercontent.com/8MI06infbLkWNJCmXKTVbMgdTpssFnCfwu4A_MdURrkFaJyzWMlbNzd6GOulWRXYUz0=w2400", 1, "15m", ""));
    LootArr.push(new DNELootCard("moving", "Переїзд", "Використай зв'язки щоб позбавити іншого гравця студії. Він одразу пропускає хід та має витратити 3К щоб перевести свої великі речі на склад, інакше їх буде втрачено.", "https://lh4.googleusercontent.com/6E7iqRHUF0X_5GHgRrD35Zwg0FYMhvc-DdqoZOYlQ44dAbHP79XfUTAnVueigimk_Ts=w2400", 4, 0, "Проблема!"));
    LootArr.push(new DNELootCard("zero-ambition", "Нульові амбіції", "Зацькуй іншого гравця разом зі своїми Найомничками, щоб позбавити його мотивації діяти. Настіпні три ходи він може тільки витрачати гроші. Щоб використати цю карту, треба мати що найменше 2х найомничків. +1 пропущений хід та -1 бонус за кожного наступного наймничка, якщо їх більше.", "https://lh6.googleusercontent.com/1RPpDAYIjBGRsJJ5TNVSrWO5mtP1hG3PKMx34dwQ4b3c9bwUnz8G9xtNfMGWCAefptc=w2400", 3, 0, "Проблема!"));
    LootArr.push(new DNELootCard("breakdown", "Панічний ступор", "Накрути іншого гравця разом зі своїми Найомничками, щоб впевнити його що він не встигає. На наступному своєму івенті він має виправдати очікування аудиторії тільки за рахунок лайн-апу. Щоб використати цю карту, треба мати що найменше 2х найомничків. -1 бонус за кожного наступного наймничка, якщо їх більше.", "https://lh6.googleusercontent.com/xffJ6AXD2wxPi3wFRNgga9iUOmIWXQV7QY8QdidqiCytZF57nNHI_zRAAbtqZSXpb0o=w2400", 2, 0, "Проблема!"));
    LootArr.push(new DNELootCard("seppuku", "Сеппуку", "Ти мертвий.", "https://lh5.googleusercontent.com/zyr6pz4k23-dqGhGpyEe-hJMIxOCR2vjBPYtiBhetHY_TJ9dfJtTEbZ-yipb-TqYYYM=w2400", 0, 0, ""));
    LootArr.push(new DNELootCard("gameboy", "GAMEBOY", "Дозволяє зберегти свій прогрес на GAMEBOY. Перезаписуй збереження скільки завгодно разів, та в тебе тільки один слот. Використовуй в будь який момент свого ходу щоб зберегтись або завантажитись. У випадку смерті ти просто завантажуєшся з останнього збереження. Цей предмет не можна обміняти або купити, лише подарувати, отримавши цю картку від Майстра на початку гри", "https://lh4.googleusercontent.com/sN9l6r5xenQZTyUKE5O138NHImoBEvUqKk5LT3A5T8VRifLeSY9WcaPSsCgm_bAobrQ=w2400", 0, "0", ""));
    LootArr.push(new DNELootCard("e", "∄", "Nicht heute", "https://lh3.googleusercontent.com/0lBFAvAVJ4mxoyJ8WNXz8EE_cesilaNQXOMOcHrD1vRr1CG0JVyF9l8oOI4fZo4ivyo=w2400", 0, "0", ""));

    // 1up
//
//

    // todo єкран профайл которьій будет дублировать информацию из всех достуньіх источников
    // today 17/36


    // console.log(LootArr);
    return LootArr;
}

const DNELootArr = initDNELootArr().filter(card => card.isBuild);

DNELootArr.forEach((card) => {
    if (card.type === "sound") {
        setSoundStat(card);
    }
});

//=> LOOT END

//=> DOORS START

const initDNEDoorArr = () => {
    const DoorArr = [];

    // 1AM LOFI SESSION
    //
    //
    const BALANCE_LONGLINE = "Старі друзі вриваються на Нижньоюрківську з масштабним івентом на два Клуби та запрошують тебе увірватись разом.";
    const BALANCE_SHORTLINE = `${BALANCE_LONGLINE}`;
    const BALANCE_IMG_ID = `1HmI00iUUFcUbDLR-Vln4RWVKh8vWdWjc`;
    const BALANCE_IMG = `https://drive.google.com/uc?id=${BALANCE_IMG_ID}`;

    DoorArr.push(new DNEDoorCard("prj-balance", "БАЛАНС", BALANCE_LONGLINE, BALANCE_IMG, 7, "16h", "Tea Unity", "DJ,Гейм-майстер,Чайний майстер,Zen-інструктор", "", "?", "Усі доступні", BALANCE_SHORTLINE, "", true, true, "prj"));


    // 1AM LOFI SESSION
    //
    //
    const I_AM_LOFI_SESSION_LONGLINE = "Запиши коротке Демо, до 20m в жанрі Lo-fi, щоб зацікавити лейбл. Можливість записати ексклюзивний сет для видання на касетах або вінілі, якщо твоє демо прозведе враження.";
    const I_AM_LOFI_SESSION_SHORTLINE = `${I_AM_LOFI_SESSION_LONGLINE}`;
    const I_AM_LOFI_SESSION_IMG_ID = `1XTVXsGZvfDQB2rq6c8zpF4CN9sXlkuq3`;
    const I_AM_LOFI_SESSION_IMG = `https://drive.google.com/uc?id=${I_AM_LOFI_SESSION_IMG_ID}`;

    DoorArr.push(new DNEDoorCard("prj-i-am-lofi-session", "1AM LOFI SESSION", I_AM_LOFI_SESSION_LONGLINE, I_AM_LOFI_SESSION_IMG, 1, "1h", "Lofi Girl", "DJ", "", "?", "Платіж", I_AM_LOFI_SESSION_SHORTLINE, "", true, true, "prj"));

    // Cyberpunk Online
    //
    //
    // const CYBERPUNK_ONLINE_LONGLINE = "";
    // const CYBERPUNK_ONLINE_SHORTLINE = `Just do it.`;
    // const CYBERPUNK_ONLINE_IMG_ID = `1SAFT9um4Wk8jr42g5pSzDXPiaZ9VxcRO`;
    // const CYBERPUNK_ONLINE_IMG = `https://drive.google.com/uc?id=${CYBERPUNK_ONLINE_IMG_ID}`;

    // DoorArr.push(new DNEDoorCard("prj-cyberpunk-online", "Cyberpunk Online", CYBERPUNK_ONLINE_LONGLINE, CYBERPUNK_ONLINE_IMG, 40, "?", "Green House", "Найомничок", "Усі витрати на замовнику, виконай роботу на вищому рівні щоб отримати особливий бонус від замовника.", "?", "", "", "", true, true, "prj"));
    DoorArr.push(new DNEDoorCard("prj-game", "Настільна гра", "Ваш друг пропонує вам розробити власну колекційну карткову гру. Виготовіть пілотну партію на 254 картки за тиждень і зіграйте найпершу пригоду в історії зі своїми друзями.", "https://lh6.googleusercontent.com/88QzQQ3A_d2Ay7UT7pakKhHI_JkLFM70HrMOM2IXWLKIRckIMNJ2OR_ynfQMNgouips=w2400", 1, "420 8h", "Green House", "Найомничок", "Усі витрати на тобі", "", "", "Твій друг притяг пусті карти з манчкіну та розповідає що має шалену ідею для гри.", "", true, true, "prj"));
    DoorArr.push(new DNEDoorCard("prj-ee-dragobrat", "EE: <span style='letter-spacing: -2.4px;'>Hi-Lite</span>", "Розробка 8-ми годинного івенту, що складатиме лайв виступи підбірки артистів в жанрі важкої Electroніки. Чим більше організаційних питань вирішено без допомоги клубу, тим більше заробіток від продажу. У разі успішного виконання, картку замовлення можна залишити собі і використати знову, організувавши нову ітерацію цьогож івенту. Вартість організації кожної наступної ітерації подвоюється.", "https://lh3.googleusercontent.com/_fp6uXNNwaRaxoX8ttxY78-UzNOn0nXxL5s4Cxc7nP7lED_U-VqoAo6OMolxR_2k4kQ=w2400", 2, "5К", "EE", "DJ* Татуер* Чай*", "Усі витрати на організаторі, якщо івент зібрав менше 50% від бюджету, карта скидається", "?", "Усі доступні", "Розробка івенту-подорожі в горах на вільних умовах", "", true, true, "prj"));
    // Influence Operations
    // Замовлення, 8lvl
    const PRJ_INFLUENCE_IMG_ID = `139AibVxbAKjyP8dbUdzHR8P0IyqIBcWL`;
    const PRJ_INFLUENCE_IMG = `https://drive.google.com/uc?id=${PRJ_INFLUENCE_IMG_ID}`;
    DoorArr.push(new DNEDoorCard("prj-influence", "Influence Operations", "Замовлення на розробку дебютного діджитал-альбому для артиста лейблу BODY Music, що складатиме мастеринг альбому та продаж в дві хвилі. <br> Картка може бути використана повторно, кожного разу потребуючи новий бюджет та даючи новий прибуток.", PRJ_INFLUENCE_IMG, 4, "2K", "BODY Music", "DJ, Відеомейкер*", "BODY Music має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "7K/14K", "Платіж", "Розробка дебютного альбому. Виконай замовлення повторно, щоб отримати більший профіт.", "", true, true, "prj"));

    DoorArr.push(new DNEDoorCard("prj-open-air", "OPEN AIR", "Розробка 8-ми годинного івенту, що складатиме лайв виступи підбірки артистів в жанрі важкої Electroніки. Чим більше організаційних питань вирішено без допомоги клубу, тим більше заробіток від продажу. У разі успішного виконання, картку замовлення можна залишити собі і використати знову, організувавши нову ітерацію цьогож івенту. Вартість організації кожної наступної ітерації подвоюється.", "https://lh5.googleusercontent.com/scqgFRn9nLg64BMQFcGh6xobDxZAjS1doFaOxvd2ro-q72IhoooxDp_7NeBiGLfSycE=w2400", 5, "6К", "Laboratorium", "DJ Охороничок Фейс* Бармен*", "Усі витрати на організаторі, якщо івент зібрав менше 50% від бюджету, карта скидається", "10K/24K/48K", "Вхід, Бар, Онлайн-каса", "Влаштуй лайтовий музичний вечір для старих знайомих.", "", true, true, "prj"));

    DoorArr.push(new DNEDoorCard("prj-open-air", "STRICHKA", "Розробка 8-ми годинного івенту, що складатиме лайв виступи підбірки артистів в жанрі важкої Electroніки. Чим більше організаційних питань вирішено без допомоги клубу, тим більше заробіток від продажу. У разі успішного виконання, картку замовлення можна залишити собі і використати знову, організувавши нову ітерацію цьогож івенту. Вартість організації кожної наступної ітерації подвоюється.", "https://lh6.googleusercontent.com/ZbX_IVe3LzCa5fqSpfxx0OuLlsIWQQvqD58Z6JUrGxWBVRyDwyJDLwNm7UYGhKvnaj0=w2400", 44, "500К", "Closer", "DJх45, Охоронна компапія, Фейс х3, Бармен х6", "Усі витрати на організаторі, якщо івент зібрав менше 50% від бюджету, організатор виплачує збитки", "2КК", "Виплата"));
    DoorArr.push(new DNEDoorCard("prj-ee-in-the-rain", "EE: <span style='letter-spacing: -2.4px;'>DITR</span>", "Розробка 8-ми годинного івенту, що складатиме лайв виступи підбірки артистів в жанрі важкої Electroніки. Чим більше організаційних питань вирішено без допомоги клубу, тим більше заробіток від продажу. У разі успішного виконання, картку замовлення можна залишити собі і використати знову, організувавши нову ітерацію цьогож івенту. Вартість організації кожної наступної ітерації подвоюється.", "https://lh3.googleusercontent.com/IvwG4edQe9LEYQD1X9AEL5wpFPl5ckAH6vTwClAhsc3qcxVgSE98g-FZfyfMyEhAwgs=w2400", 6, "15К", "EE", ">5DJ Охороничок Фейс* Татуер* Чай* Бармер* Сапорт*", "Усі витрати на організаторі, якщо івент зібрав менше 50% від бюджету, карта скидається", "?", "Вхід Бар* Онлайн-каса*", "Розробка вечірки в жанрі Electro з потужним звуком та 8-ми годинним лайнапом у просторому приміщенні на вільних умовах", "", true, true, "prj"));
    DoorArr.push(new DNEDoorCard("prj-ee-everything-you-wish", "EE: <span style='letter-spacing: -2.4px;'>EYW</span>", "Розробка 8-ми годинного івенту, що складатиме лайв виступи підбірки артистів в жанрі важкої Electroніки. Чим більше організаційних питань вирішено без допомоги клубу, тим більше заробіток від продажу. У разі успішного виконання, картку замовлення можна залишити собі і використати знову, організувавши нову ітерацію цьогож івенту. Вартість організації кожної наступної ітерації подвоюється.", "https://lh6.googleusercontent.com/Ztm83T-tjo2EL3LSmp3XsZZ26BlYTiJEf_vROgQkhsQRn-rv1q_yDOzq4VLa5J7WrLQ=w2400", 7, "15К", "EE", ">8DJ >2Охороничок Фейс* Татуер* Чай* Бармер* >3Сапорт*", "Усі витрати на організаторі, якщо івент зібрав менше 50% від бюджету, карта скидається", "?", "Вхід Бар* Онлайн-каса*", "Розробка вечірки в жанрі Electro з потужним звуком та 12-ти годинним лайнапом у просторому приміщенні на вільних умовах", "", true, true, "prj"));
    DoorArr.push(new DNEDoorCard("prj-mriya", "МРІЯ", "Розробка 6-ти годинного івенту, що складатиме лайв виступи підбірки артистів. Чим більше організаційних питань вирішено без допомоги клубу, тим більше заробіток від продажу. У разі успішного виконання, картку замовлення можна залишити собі і використати знову.", "https://lh4.googleusercontent.com/TmXLWrqcgvg_YxmSARONzYNXFjJJWLB2fb5fI1ZeAyfO75uBnkaQkQFn4x3POUs7W5o=w2400", 8, "15К", "Otel`", "DJ Охороничок Фейс* Бармен*", "Усі витрати на організаторі, якщо івент зібрав менше 50% від бюджету, карта скидається", "30K/50K/80K", "Вхід, Бар, Онлайн-каса", "Розробка 6-ти годинного івенту.", "", true, true, "prj"));

    // Drainvoid
    // Замовлення, 9lvl
    DoorArr.push(new DNEDoorCard("prj-drainvoid-cassets", "Drainvoid Cassets", "Розробка видання альбому на касетах, що складатиме компіляція треків артиста, оригінальний артворк альбому та лімітоване видання на касетах. <br>Чим більше складових проекту розроблено без допомоги лейблу, тим більше заробіток від продажу. Картка може бути використана повторно, кожного разу потребуючи новий бюджет та даючи новий прибуток. В результаті гравець що виконав проект отримує 100 одиниць кассет на руки, що можна продавати в мережі по 420. До кожного наступного єтапу розробки альбому зацікавленність аудиторії на вдвічі більша.", "https://lh3.googleusercontent.com/fPx2-vLS29NA__mguV-mFPstHZuz4TzO-Htx5U2o0RAIiuB4_NHJgk6AOKcvPT7JmIo=w2400", 9, "14К", "BODY Music", "DJ, Відеомейкер*", "BODY Music має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "420/item", "Продукт", "Розробка видання альбому на касетах в 100 одиниць", "", true, true, "prj"));

    // Замовлення, 13lvl
    DoorArr.push(new DNEDoorCard("prj-weedian-greece", "Trip to Greece", "Замовлення на розробку діджитал-альбому культового артиста жанру Stoner Rock спеціально для B.R., що складатиме мастеринг його матеріалу з туру до Греції, фінальний запис у студії на живих інструментах та оригінальний артворк для обкладинки. <br>Чим більше складових проекту розроблено без допомоги лейблу, тим більше заробіток від продажу. Картка може бути використана повторно, кожного разу потребуючи новий бюджет та даючи новий прибуток.", "https://lh3.googleusercontent.com/Z1-pnBGEl5eqzNZcowO-6Ar0YSuA_7iujHC4t6Zs-j3wd_BM5rUajXT4gpg9hzK7rI8=w2400", 6, "5К", "B.R.", "DJ, Відеомейкер*", "B.R. має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "4K/10K/30K", "Платіж"));
    // Various
    // Замовлення, 19lvl
    DoorArr.push(new DNEDoorCard("prj-various", "Various", "Розробка видання альбому на касетах, що складатиме компіляція треків артиста, оригінальний артворк альбому та лімітоване видання на касетах. <br>Чим більше складових проекту розроблено без допомоги лейблу, тим більше заробіток від продажу. Картка може бути використана повторно, кожного разу потребуючи новий бюджет та даючи новий прибуток. Вартість кожного єтапу розробки - 1К, 6К та 14К. До кожного наступного єтапу розробки альбому зацікавленність аудиторії на вдвічі більша.", "https://lh4.googleusercontent.com/ZWRLV4_k8uGvUejY7GxJGKItp5wLJ563TzF3MmQPxDFz2qE1r1crTx4e55uMgyFgggI=w2400", 19, "21К", "BODY Music", "DJ, Відеомейкер*", "BODY Music має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "2К/10К/42K", "Платіж"));

    DoorArr.push(new DNEDoorCard("prj-vinyl-reinvent", "REINVENT", "Розробка лімітованого видання альбому на вінілі в дві хвилі продажів. Дає єдиночасну виплату після кожної хвилі продажів, унікальну картку платівки та право на роялті.<br> Підвищує множитель по жанру для цього альбому до 100%", "https://lh6.googleusercontent.com/KsopzyO244fv6F6DYLNhHQeLVSPh7uu_Odpu2eFOhElDjB4M96UflzZl28elG4YmL0o=w2400", 11, "16K", "BODY Music", "DJ, Продавець, Відеомейкер*", "BODY Music має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "30К/70K<sup>+1K</sup>", "Платіж та роялті", "Розробка видання альбому на вінілі.", "", true, true, "prj"));

    DoorArr.push(new DNEDoorCard("prj-vinyl-vlad-tapes", "VLAD TAPES", "Розробка лімітованого видання альбому на вінілі в три хвилі продажів. Дає єдиночасну виплату після кожної хвилі продажів, унікальну картку платівки та право на роялті.<br> Підвищує множитель по жанру для цього альбому до 100%", "https://lh5.googleusercontent.com/TK4C77xn6pXtigKWguyAkXr7Bv870d8RnVPu4S0ES97c1bvxT_lirN5SWO3v7UxNzOc=w2400", 12, "20K", "BODY Music", "DJ, Продавець, Відеомейкер*", "BODY Music має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "30К/50К/70K<sup>+1K</sup>", "Платіж та роялті", "Розробка видання альбому на вінілі.", "", true, true, "prj"));

    DoorArr.push(new DNEDoorCard("prj-vinyl-drainvoid", "DRAINVOID VINYL", "Розробка лімітованого видання альбому на вінілі для артиста лейблу BODY Music, включає запис, оригінальний артворк та видання на вінілі. В результаті завершення всіх етапів розробки гравець отримує партію з 150 екземплярів, яку можливо реалізувати в інтернеті від 1К за шт.<br> Успішне завершення цього проекту підвищує твій бонус за метч усіх альбомів, що мають з ним спільний жанр до 100%.", "https://lh4.googleusercontent.com/0B-PJPjjTpWWTZen5nItT7jAFT1yqtAemp_qSc8-lyaK8X9xbBClBhbp2xiLsZNm_qI=w2400", 13, "44K", "BODY Music", "DJ, Продавець, Відеомейкер*", "BODY Music має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "1К/item", "Продукт", "Розробка видання альбому на вінілі, партією в 150 одиниць", "", true, true, "prj"));

    DoorArr.push(new DNEDoorCard("prj-mexanika", "МЕХАНІКА", "Розробка 8-ми годинного івенту, що складатиме лайв виступи підбірки артистів в жанрі важкої Electroніки. Чим більше організаційних питань вирішено без допомоги клубу, тим більше заробіток від продажу. У разі успішного виконання, картку замовлення можна залишити собі і використати знову, організувавши нову ітерацію цьогож івенту. Вартість організації кожної наступної ітерації подвоюється.", "https://lh4.googleusercontent.com/dZncA2slFBuTZ1f3YwjQmwEqRM52N7WUtmBTKi3je_F0web2tdrKULaY_itdCgb618U=w2400", 16, "25К", "Keller", "DJ Охороничок Фейс Бармен*", "Усі витрати на організаторі, якщо івент зібрав менше 50% від бюджету, карта скидається", "60K/110K/190K", "Вхід, Бар, Онлайн-каса", "Розробка 8-ми годинного івенту.", "", true, true, "prj"));


    // Aenigma
    // Замовлення, 16lvl
    DoorArr.push(new DNEDoorCard("prj-aenigma", "Aenigma", "Замовлення на розробку восьмигодинного лайв-виступу в клубі Keller на Кирилівський, для артистів в жанрі гіпнотичного техно.<br> Замовлення солідне, складатиме організацію повноцінного лайву з профессійною аппаратурою та світлом для 300+ людей та входом від 250, оригінальний артворк події а також флаєр, сайт з квитками, промо-відео, демо-профайли артистів, запрошення та просування опціонально. <br>Чим більше складових проекту розроблено без допомоги клубу, тим більше заробіток від продажу. Гарантовано дає демо артистів та прибуток від входу, розмір якого залежить від уваги до проекту. У разі успішного виконання, дає високий прибуток з різноманітного спектру джерел. Можливість записати лайв та демо для кожного з артистів та з верогідністю 25% отримати замовлення на запис у студії від кожного з них. Картка може бути використана повторно, кожного разу потребуючи новий бюджет та даючи новий прибуток. Вартість розробки кожного этапу - 15К, 25К, 40К", "https://lh6.googleusercontent.com/ddLQawIUrWh7MxMGoj1D-m0Ed1ojjTbuGh6nCMs8q4nFu16qavKkcOyFc5BGugtCTE8=w2400", 28, "80K", "Keller", "DJ, Охороничок, Фейс*, Бармен*, Сапортики*, Татуер*, Райтер*, Відеомейкер*", "Усі витрати на організаторі, якщо івент зібрав менше 50% від бюджету, карта скидається", "20К/50К/120K", "Бар, Вхід, Онлайн-каса, Мерч, Кухня"));

    // Замовлення, 19lvl
    DoorArr.push(new DNEDoorCard("prj-vinyl-love-market", "LOVE MARKET", "Розробка лімітованого видання альбому на вінілі. Дає єдиночасну виплату одразу після затвердження лейблом, унікальну картку платівки та право на роялті.<br> Підвищує множитель по жанру для цього альбому до 100%", "https://lh3.googleusercontent.com/IXOuUL6ZhG1a2RRJIP9h-6AejjfwVBIJAHOm6X0VJAwUUxnJGRbps-YX4WDCOFbKWTY=w2400", 29, "50К", "BODY Music", "DJ, Продавець, Відеомейкер*", "BODY Music має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "90К/100К/180K<sup>+1K</sup>", "Платіж та роялті"));
    // Замовлення, 19lvl
    DoorArr.push(new DNEDoorCard("prj-vinyl-various-i", "VARIOUS I", "Розробка лімітованого видання альбому на вінілі в два этапи та три хвилі продажів. Дає єдиночасну виплату після кожної хвилі продажів, унікальну картку платівки та право на роялті.<br> Підвищує множитель по жанру для цього альбому до 100%. Вартість кожного этапу розробки 20К та 40К", "https://lh5.googleusercontent.com/5hLta786kJhFTBQJjkPqKc2CTbh2GiQuntiAnGmcLFBWK0XFYLa8sku3YMAvowk02L4=w2400", 22, "60K", "BODY Music", "DJ, Продавець, Відеомейкер*", "BODY Music має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "50К/70К/100K<sup>+1K</sup>", "Платіж та роялті"));
    DoorArr.push(new DNEDoorCard("prj-vinyl-nocturnal", "NOCTURNAL", "Розробка лімітованого видання альбому на вінілі в дві хвилі продажів. Дає єдиночасну виплату після кожної хвилі продажів, унікальну картку платівки та право на роялті.<br> Підвищує множитель по жанру для цього альбому до 100%.", "https://lh3.googleusercontent.com/H4C_Qg_PGYfxghE7AcKFZcj3UOBOkMwJOCrrkVskIQFLJ2gFrJec_yacUOcGmfMGY1o=w2400", 18, "28K", "BODY Music", "DJ, Продавець, Відеомейкер*", "BODY Music має затвердити роботу інакше витрачені час та енергія не будуть сплачені грошима", "50К/70К<sup>+1K</sup>", "Платіж та роялті", "Розробка видання альбому на вінілі", "", true, true, "prj"));

    // DoorsArr.push(new ContractCard('Гикающий гик', '+6 против воинов', 6, 'Стань нормальным, сбрось все ссвои расы и классы', '2 сокровища'));
    // DoorsArr.push(new ContractCard('Сочащаяся слизь', 'Какая мерзость! +4 против эльфов', 1, 'Потеряй надетую обувку. Если нет обувки, потеряй уровень.', '1 сокровище'));
    // DoorsArr.push(new ContractCard('Улетные улитки', 'У тебя на смывку -2', 4, 'Разворовывают твои сокровища. Сбрось столько шмоток из игры или карт с руки(по своему выбору), сколько выпадет на кубике.', '2 сокровища'));
    // DoorsArr.push(new ContractCard('Бигфут', '+3 против дварфов', 12, 'Наступает на тебя и съедает шляпу. Потеряй надетый головняк.', '3 сокровища'));
    // DoorsArr.push(new ContractCard('Гарпистки', 'Сопротивляются магии. +5 против волшебников.', 4, 'Хреново исполняют ужасную музыку. Потеряй 2 уровня.', '2 сокровища'));
    // DoorsArr.push(new ContractCard('Лепрекон', 'Да он отвратителен! +5 против эльфов.', 4, 'Забирает у тебя две шмотки - первую выбирает правый сосед, вторую левый. Сбрось эти шмотки.', '2 сокровища'));
    // DoorsArr.push(new ContractCard('Обдолбанный голем', 'Можешь биться или пройти мимо, плюнув на обдолбанного голема и его сокровища. Исключение: вкусно выглядящим хафлингам придётся биться.', 14, 'Его пробивает на хавку. Ты съеден и мёртв.', '4 сокровища'));
    // DoorsArr.push(new ContractCard('Амазонка', 'Не бьётся с женщинами; вместо боя дает одно сокровище.', 8, 'Тебя вздула женщина! Ущемление гордости в тяжелой форме. Потеряй все свои классы. Если у тебя нет класса, потеряй 3 уровня.', '2 сокровища'));

    // console.log(DoorArr);
    return DoorArr;
}

const DNEDoorArr = initDNEDoorArr().filter(card => card.isBuild);

//=> DOORS END

const DNECards = new Set(DNELootArr.concat(DNEDoorArr));

const initMonsterArr = () => {
    const MonstersArr = [];

    MonstersArr.push(new DNEMonsterCard("monster", "Монстр", "1", "Монстр почувається нормально. Так він каже. Насправді монстр зробив одне невдале татуювання. Все б нічого, скажеш ти, у кого вони всі вдалі? - І будеш правий. Ось тільки є один нюанс, це здоровенний блекворк на обличчі. Тепер ця чунга чанга збирається в останню путь завтра ввечері. Зроби щось, якщо тобі не начхати"))

    return MonstersArr;
}

const DNEMonsterArr = initMonsterArr();
const DNESecretCards = {
    monsters: DNEMonsterArr,
    smiths: [],
    mafia: []
}

export { DNECards, DNESecretCards };

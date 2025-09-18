import { STRINGS } from "./const.cards.js";
import { DNELootCard } from "./interface.cards.js";

const initSoundCards = () => {
    const LootArr = [];
    const NewLootArr = [];
    // $$$$$$\   $$$$$$\  $$\   $$\ $$\   $$\ $$$$$$$\
    // $$  __$$\ $$  __$$\ $$ |  $$ |$$$\  $$ |$$  __$$\
    // $$ /  \__|$$ /  $$ |$$ |  $$ |$$$$\ $$ |$$ |  $$ |
    // \$$$$$$\  $$ |  $$ |$$ |  $$ |$$ $$\$$ |$$ |  $$ |
    //  \____$$\ $$ |  $$ |$$ |  $$ |$$ \$$$$ |$$ |  $$ |
    // $$\   $$ |$$ |  $$ |$$ |  $$ |$$ |\$$$ |$$ |  $$ |
    // \$$$$$$  | $$$$$$  |\$$$$$$  |$$ | \$$ |$$$$$$$  |
    //  \______/  \______/  \______/ \__|  \__|\_______/

    const TALES_OF_THE_MAD_MOON_LONGLINE = "";
    const TALES_OF_THE_MAD_MOON_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-tales-of-the-mad-moon", "Tales of<br>the Mad Moon", TALES_OF_THE_MAD_MOON_LONGLINE, "img/sound/album-tales-of-the-mad-moon.jpg", 8, 0, "Альбом, 87m of Dark Dungeon Synth", TALES_OF_THE_MAD_MOON_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/gBmz4O41jfc"));

    const OCTOBER_RUST_LONGLINE = "";
    const OCTOBER_RUST_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-october-rust", "OCTOBER RUST", OCTOBER_RUST_LONGLINE, "img/sound/vinyl-october-rust.png", 6, 0, "Платівка, 73m of Progressive Gothic Metal", OCTOBER_RUST_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/C5vqN44iK20"));

    const PEOPLE_ARE_MACHINES_LONGLINE = "";
    const PEOPLE_ARE_MACHINES_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-people-are-machines", "People Are Machines", PEOPLE_ARE_MACHINES_LONGLINE, "img/sound/album-people-are-machines.jpg", 3, 0, "Альбом, 51m of Psychodelic Blues Rock", PEOPLE_ARE_MACHINES_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/C5vqN44iK20"));

    const MAYBE_WE_WILL_HUG_EACH_OTHER_IN_A_PAST_LIFE_LONGLINE = "";
    const MAYBE_WE_WILL_HUG_EACH_OTHER_IN_A_PAST_LIFE_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-maybe-we-will-hug-each-other-in-a-past-life", "Maybe we'll hug each other in a past life", MAYBE_WE_WILL_HUG_EACH_OTHER_IN_A_PAST_LIFE_LONGLINE, "img/sound/album-maybe-we-will-hug-each-other-in-a-past-life.jpg", 7, 0, "Альбом, 51m of Alternative Experimental Psychodelic Ambient", MAYBE_WE_WILL_HUG_EACH_OTHER_IN_A_PAST_LIFE_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/ix-6vG3qXPc"));

    const TENDER_NEW_SIGNS_LONGLINE = "";
    const TENDER_NEW_SIGNS_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-tender-new-signs", "Tender New Signs", TENDER_NEW_SIGNS_LONGLINE, "img/sound/album-tender-new-signs.jpg", 5, 0, "Альбом, 40m of Alternative Indie", TENDER_NEW_SIGNS_ALBUM_SHORTLINE, "", true, true, "sound", "https://tamaryn.bandcamp.com/album/tender-new-signs"));

    const COLOURMEINKINDNESS_LONGLINE = "";
    const COLOURMEINKINDNESS_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-colourmeinkindness", "Colourmein<br>kindness", COLOURMEINKINDNESS_LONGLINE, "img/sound/album-colourmeinkindness.jpg", 2, 0, "Альбом, 34m of Alternative Rock", COLOURMEINKINDNESS_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/o1f4V0nzUbA"));

    const GOO_LONGLINE = "";
    const GOO_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-goo", "Goo", GOO_LONGLINE, "img/sound/album-goo.jpg", 7, 0, "Альбом, 49m of Alternative Rock", GOO_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/k_1rqDKM_0E"));

    const COME_MY_FANATICS_LONGLINE = "";
    const COME_MY_FANATICS_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-come-my-fanatics", "Come My Fanatics...", COME_MY_FANATICS_LONGLINE, "img/sound/album-come-my-fanatics.jpg", 8, 0, "Альбом, 51m of Doom Stoner", COME_MY_FANATICS_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtube.com/playlist?list=PLHTo__bpnlYUkFjUtEbiWFiMQQhmXGT12&si=nKq2Ee4scdEsEVWj"));

    const SUPERCOVEN_LONGLINE = "";
    const SUPERCOVEN_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-supercoven", "Supercoven", SUPERCOVEN_LONGLINE, "img/sound/album-supercoven.jpg", 7, 0, "Альбом, 32m of Doom Stoner", SUPERCOVEN_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtube.com/playlist?list=OLAK5uy_m_jE8Vf5mXb25RpWndmf0QG2KSuo3ZUTY&si=wFxbpzoP_N0c0SgM"));

    const KOI_NO_YOKAN_LONGLINE = "";
    const KOI_NO_YOKAN_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-koi-no-yokan", "Koi No Yokan", KOI_NO_YOKAN_LONGLINE, "img/sound/album-koi-no-yokan.jpg", 7, 0, "Альбом, 52m of Nu Metal Alternative", KOI_NO_YOKAN_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/5FoUNvoFFVY"));

    const WHITE_PONY_LONGLINE = "";
    const WHITE_PONY_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-white-pony", "White Pony", WHITE_PONY_LONGLINE, "img/sound/album-white-pony.jpg", 7, 0, "Альбом, 49m of Nu Metal Alternative", WHITE_PONY_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/v1npHeOskdQ"));

    const AROUND_THE_FUR_LONGLINE = "";
    const AROUND_THE_FUR_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-around-the-fur", "Around<br>The Fur", AROUND_THE_FUR_LONGLINE, "img/sound/album-around-the-fur.jpg", 8, 0, "Альбом, 74m of Nu Metal Alternative", AROUND_THE_FUR_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/Ybh-zGZbddU"));

    const WITCHCULT_TODAY_LONGLINE = "";
    const WITCHCULT_TODAY_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-witchcult-today", "Witchcult Today", WITCHCULT_TODAY_LONGLINE, "img/sound/album-witchcult-today.jpg", 6, 0, "Альбом, 59m of Doom Stoner", WITCHCULT_TODAY_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/Jzem_-At6F4"));

    const LEGALIZE_DRUGS_LONGLINE = "";
    const LEGALIZE_DRUGS_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-legalize-drugs-and-murder", "Legalize Drugs & Murder", LEGALIZE_DRUGS_LONGLINE, "img/sound/album-legalize-drugs-and-murder.jpg", 8, 0, "Платівка, 35m of Doom Stoner", LEGALIZE_DRUGS_ALBUM_SHORTLINE, "", true, true, "sound", "https://witchfinderrecords.bandcamp.com/album/legalise-drugs-and-murder"));

    const MEZZANINE_LONGLINE = "";
    const MEZZANINE_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-mezzanine", "Mezzanine", MEZZANINE_LONGLINE, "img/sound/vinyl-mezzanine.png", 8, 0, "Платівка, 64m of Trip-Hop Downtempo", MEZZANINE_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/ORxdyjvfItk?si=nk4VFlyAMgjKEhX3"));

    const NOSTALGIA_LONGLINE = "";
    const NOSTALGIA_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-nostalgia", "Nostalgia", NOSTALGIA_LONGLINE, "img/sound/album-nostalgia.jpg", 8, 0, "Альбом, 40m of Trip-Hop Funk<br>Alternative Rock", NOSTALGIA_ALBUM_SHORTLINE, "", true, true, "sound", "https://skinshape.bandcamp.com/album/nostalgia"));

    const ABANDON_LONGLINE = "";
    const ABANDON_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-abandon", "Abandon", ABANDON_LONGLINE, "img/sound/album-abandon.jpg", 8, 0, "Альбом, 54m of Industrial Noise Drone", ABANDON_ALBUM_SHORTLINE, "", true, true, "sound", "https://music.youtube.com/playlist?list=OLAK5uy_nsp6AcVc9JDEx6cIEEoiAU35P8hkoUUt4&si=Rg8DY7F3N29fLeR2"));

    const BESTIAL_BURDEN_LONGLINE = "";
    const BESTIAL_BURDEN_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-bestial-burden", "Bestial Burden", BESTIAL_BURDEN_LONGLINE, "img/sound/album-bestial-burden.jpg", 7, 0, "Альбом, 32m of Noise<br>Experimental Industrial", BESTIAL_BURDEN_ALBUM_SHORTLINE, "", true, true, "sound", "https://music.youtube.com/playlist?list=OLAK5uy_mS37M653qOK-6JUXA1j6PD3ZzJvMFXqt0&si=irzLNkoQCwjlP-fy"));

    const ALLAH_LAS_LONGLINE = "";
    const ALLAH_LAS_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-allah-las", "Allah-Las", ALLAH_LAS_LONGLINE, "img/sound/album-allah-las.jpg", 6, 0, "Альбом, 44m of Psychodelic Indie Rock", ALLAH_LAS_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/XMXACjSnEsM"));

    const ANOTHER_SKINSHAPE_LONGLINE = "";
    const ANOTHER_SKINSHAPE_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-another-side-of-skinshape", "Another Side Of Skinshape", ANOTHER_SKINSHAPE_LONGLINE, "img/sound/album-another-side-of-skinshape.jpg", 7, 0, "Альбом, 37m of Trip-Hop Funk<br>Psychodelic Rock", ANOTHER_SKINSHAPE_ALBUM_SHORTLINE, "", true, true, "sound", "https://skinshape.bandcamp.com/album/another-side-of-skinshape"));

    const SKINSHAPE_LONGLINE = "";
    const SKINSHAPE_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-skinshape", "Skinshape", SKINSHAPE_LONGLINE, "img/sound/album-skinshape.jpg", 9, 0, "Альбом, 34m of Trip-Hop Funk<br>Psychodelic Hip-Hop", SKINSHAPE_ALBUM_SHORTLINE, "", true, true, "sound", "https://skinshape.bandcamp.com/album/skinshape-lp"));

    const LEVENDER_LONGLINE = "";
    const LEVENDER_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-levender", "Lavender", LEVENDER_LONGLINE, "img/sound/album-levender.jpg", 7, 0, "Альбом, 10m of Cloud Hip-Hop", LEVENDER_ALBUM_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/bruhman9/sets/yung-lean-lavender-ep"));

    const PSYKOS_LONGLINE = "";
    const PSYKOS_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-psykos", "Psykos", PSYKOS_LONGLINE, "img/sound/album-psykos.jpg", 8, 0, "Альбом, 22m of Gothic Rock Post-punk", PSYKOS_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtube.com/playlist?list=PL8yOVXKR3_2AgLUcrK0DAIzBD2Bsz8uF5&si=tgdLQfGX2DA1L68m"));

    const UNRENDERED_LONGLINE = "";
    const UNRENDERED_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-unrendered", "UNRENDERED", UNRENDERED_LONGLINE, "img/sound/album-unrendered.jpg", 6, 0, "Альбом, 40m of Cloud Trap Hip-Hop", UNRENDERED_ALBUM_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/teamsesh/sets/bones-unrendered"));

    const HIGH_TIDE_IN_THE_SNAKES_NEST_LONGLINE = "";
    const HIGH_TIDE_IN_THE_SNAKES_NEST_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-high-tide-in-the-snakes-nest", "High Tide in the Snake's Nest", HIGH_TIDE_IN_THE_SNAKES_NEST_LONGLINE, "img/sound/album-high-tide-in-the-snakes-nest.jpg", 9, 0, "Альбом, 27m of Cloud Trap Hip-Hop", HIGH_TIDE_IN_THE_SNAKES_NEST_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/29VLZTa4_MU"));

    const MOON_LONGLINE = "";
    const MOON_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-moon", "M.O.O.N", MOON_LONGLINE, "img/sound/album-moon.jpg", 9, 0, "Альбом, 20m of Techno House RnB Funk", MOON_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/29VLZTa4_MU"));

    const ORACULAR_SPECTACULAR_LONGLINE = "";
    const ORACULAR_SPECTACULAR_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-oracular-spectacular", "Oracular Spectacular", ORACULAR_SPECTACULAR_LONGLINE, "img/sound/album-oracular-spectacular.jpg", 7, 0, "Альбом, 41m of Psychodelic Indie", ORACULAR_SPECTACULAR_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/iL2gjEW81KM"));

    const LOST_SUMMER_LONGLINE = "";
    const LOST_SUMMER_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-lost-summer", "LOST SUMMER", LOST_SUMMER_LONGLINE, "img/sound/album-lost-summer.jpg", 7, 0, "Альбом, 45m of Experimental Indie<br>Synth-pop Post-punk", LOST_SUMMER_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtube.com/playlist?list=PLFE1QOlYmtYwEabtCEZ4UgCfJK9lcbdv9&si=f7xlKlU01dAyEMEI"));

    const IDOL_EYES_LONGLINE = "";
    const IDOL_EYES_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-idol-eyes", "Idol Eyes", IDOL_EYES_LONGLINE, "img/sound/album-idol-eyes.jpg", 6, 0, "Альбом, 26m of Psychodelic RnB", IDOL_EYES_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/XQP4BLnCpws?si=9kKGAi2kWkqr56LB"));

    const ALBUM_MYDRIASIS_LONGLINE = "";
    const ALBUM_MYDRIASIS_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-midriasis", "MYDRIASIS", ALBUM_MYDRIASIS_LONGLINE, "img/sound/album-midriasis.jpg", 8, 0, "Альбом, 46m of Psychodelic Stoner", ALBUM_MYDRIASIS_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/vUHyWRjwL5A?si=6JBFzWTJVFpwad3V"));

    const KYIV_ETERNAL_LONGLINE = "";
    const KYIV_ETERNAL_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-kyiv-eternal", "Kyiv Eternal", KYIV_ETERNAL_LONGLINE, "img/sound/album-kyiv-eternal.jpg", 8, 0, "Альбом, 49m of Ambient Drone Glitch", KYIV_ETERNAL_ALBUM_SHORTLINE, "", true, true, "sound", "https://music.youtube.com/playlist?list=OLAK5uy_nJA7ie5DKbfMpz547lV2vayh8uzgG5bzA&si=uoh3XBvffNQVJNMN"));

    const ODE_TO_THE_SEA_LONGLINE = "";
    const ODE_TO_THE_SEA_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-ode-to-the-sea", "Ode To<br>The Sea", ODE_TO_THE_SEA_LONGLINE, "img/sound/album-ode-to-the-sea.jpg", 2, 0, "Платівка, 45m of Experimental", ODE_TO_THE_SEA_ALBUM_SHORTLINE, "", true, true, "sound", "https://muscut.bandcamp.com/album/ode-to-the-sea"));

    const UKRAINIAN_FIELD_NOTES_LONGLINE = "";
    const UKRAINIAN_FIELD_NOTES_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-ukrainian-field-notes", "Ukrainian Field Notes", UKRAINIAN_FIELD_NOTES_LONGLINE, "img/sound/album-ukrainian-field-notes.jpg", 3, 0, "Альбом, 489m of Experimental Ambient", UKRAINIAN_FIELD_NOTES_ALBUM_SHORTLINE, "", true, true, "sound", "https://systemnapotvora.bandcamp.com/album/ukrainian-field-notes-va"));

    const MADRIGALS_LONGLINE = "";
    const MADRIGALS_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-madrigals", "Madrigals", MADRIGALS_LONGLINE, "img/sound/album-madrigals.jpg", 3, 0, "Платівка, 39m of Experimental Ambient", MADRIGALS_ALBUM_SHORTLINE, "", true, true, "sound", "https://heinali.bandcamp.com/album/madrigals"));

    const EYE_OF_DELIRIOUS_LONGLINE = "";
    const EYE_OF_DELIRIOUS_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-eye-of-delirious", "Eye of Delirious", EYE_OF_DELIRIOUS_LONGLINE, "img/sound/album-eye-of-delirious.jpg", 4, 0, "Альбом, 40m of Experimental Ambient", EYE_OF_DELIRIOUS_ALBUM_SHORTLINE, "", true, true, "sound", "https://johnskingdom.bandcamp.com/album/eat-your-mind"));

    const COME_ANGEL_LONGLINE = "";
    const COME_ANGEL_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-come-angel", "Come, Angel", COME_ANGEL_LONGLINE, "img/sound/album-come-angel.jpg", 4, 0, "Альбом, 21m of Experimental Drone", COME_ANGEL_ALBUM_SHORTLINE, "", true, true, "sound", "https://offen.bandcamp.com/album/come-angel"));

    const KOMBINEZON_LONGLINE = "";
    const KOMBINEZON_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-kombinezon", "Kombinezon", KOMBINEZON_LONGLINE, "img/sound/album-kombinezon.jpg", 4, 0, "Альбом, 24m of Experimental Ambient", KOMBINEZON_ALBUM_SHORTLINE, "", true, true, "sound", "https://systemnapotvora.bandcamp.com/album/kombinezon"));

    const TYSHA_LONGLINE = "";
    const TYSHA_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-tysha", "Tysha", TYSHA_LONGLINE, "img/sound/album-tysha.jpg", 5, 0, "Альбом, 34m of Experimental Glitch Ambient", TYSHA_ALBUM_SHORTLINE, "", true, true, "sound", "https://standard-deviation.bandcamp.com/album/tysha"));

    const WHEN_YOU_ARE_NOT_AT_HOME_LONGLINE = "";
    const WHEN_YOU_ARE_NOT_AT_HOME_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-when-you-are-not-at-home", "When<br>you are<br>not<br>at home", WHEN_YOU_ARE_NOT_AT_HOME_LONGLINE, "img/sound/album-when-you-are-not-at-home.jpg", 5, 0, "Альбом, 98m of Experimental Techno", WHEN_YOU_ARE_NOT_AT_HOME_ALBUM_SHORTLINE, "", true, true, "sound", "https://mord.bandcamp.com/album/when-you-are-not-at-home"));

    const TAKE_LONGLINE = "";
    const TAKE_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-take", "Take", TAKE_LONGLINE, "img/sound/album-take.jpg", 5, 0, "Альбом, 21m of<br>Experimental Electronic", TAKE_ALBUM_SHORTLINE, "", true, true, "sound", "https://tofudj.bandcamp.com/album/take"));

    const THE_SOUND_OF_PSEUDOSCIENCE_LONGLINE = "";
    const THE_SOUND_OF_PSEUDOSCIENCE_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-the-sound-of-pseudoscience", "The<br>Sounds<br>Of<br>Pseudoscience", THE_SOUND_OF_PSEUDOSCIENCE_LONGLINE, "img/sound/album-the-sound-of-pseudoscience.jpg", 5, 0, "Платівка, 35m of Experimental Electronic", THE_SOUND_OF_PSEUDOSCIENCE_ALBUM_SHORTLINE, "", true, true, "sound", "https://muscut.bandcamp.com/album/the-sounds-of-pseudoscience"));

    const VOICE_IN_MY_HEAD_LONGLINE = "";
    const VOICE_IN_MY_HEAD_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-voice-in-my-head", "Voice In My Head", VOICE_IN_MY_HEAD_LONGLINE, "img/sound/album-voice-in-my-head.jpg", 6, 0, "Альбом, 22m of Techno House", VOICE_IN_MY_HEAD_ALBUM_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/the-wicked-bass/borys"));

    const SPADOK_LONGLINE = "";
    const SPADOK_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-spadok", "С П А Д О К", SPADOK_LONGLINE, "img/sound/album-spadok.jpg", 6, 0, "Альбом, 80m of Ambient Drone<br>Experimental Electronic", SPADOK_ALBUM_SHORTLINE, "", true, true, "sound", "https://gasolinerecords.bandcamp.com/album/-"));

    const HEAT_LONGLINE = "";
    const HEAT_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-heat", "Heat", HEAT_LONGLINE, "img/sound/album-heat.jpg", 6, 0, "Альбом, 19m of Glitch<br>Experimental IDM", HEAT_ALBUM_SHORTLINE, "", true, true, "sound", "https://johnobject.bandcamp.com/album/heat"));

    const EAT_YOUR_MIND_LONGLINE = "";
    const EAT_YOUR_MIND_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-eat-your-mind", "Eat Your Mind", EAT_YOUR_MIND_LONGLINE, "img/sound/album-eat-your-mind.jpg", 6, 0, "Альбом, 19m of Experimental Electro", EAT_YOUR_MIND_ALBUM_SHORTLINE, "", true, true, "sound", "https://johnskingdom.bandcamp.com/album/eat-your-mind"));

    const DUFFIOLOGY_LONGLINE = "";
    const DUFFIOLOGY_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-duffiology", "Duffiology", DUFFIOLOGY_LONGLINE, "img/sound/vinyl-duffiology.jpg", 6, 0, "Платівка, 23m of Electro Breakbeat", DUFFIOLOGY_ALBUM_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/clommunity/a1-timur-basha-alex-savage-duffiology"));

    const LOST_BUT_FOUND_LONGLINE = "";
    const LOST_BUT_FOUND_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-lost-but-found", "Lost but found", LOST_BUT_FOUND_LONGLINE, "img/sound/album-lost-but-found.jpg", 6, 0, "Платівка, 18m of Electronic Downtempo", LOST_BUT_FOUND_ALBUM_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/detaliweare/dtl-001-qzzaargh-lost-but-found-snippets"));

    const PO_TOBI_LONGLINE = "";
    const PO_TOBI_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-po-tobi", "По тобі", PO_TOBI_LONGLINE, "img/sound/album-po-tobi.jpg", 7, 0, "Альбом, 17m of DnB Breakbeat Jungle", PO_TOBI_ALBUM_SHORTLINE, "", true, true, "sound", "https://yuvi.bandcamp.com/album/po-tobi"));

    const AUTOPORTRACK_LONGLINE = "";
    const AUTOPORTRACK_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-autoportrack", "autoportrack", AUTOPORTRACK_LONGLINE, "img/sound/album-autoportrack.jpg", 7, 0, "Альбом, 46m of Experimental Jungle Jazz", AUTOPORTRACK_ALBUM_SHORTLINE, "", true, true, "sound", "https://andriibarmalii.bandcamp.com/album/autoportrack"));

    const TIMELINE_LONGLINE = "";
    const TIMELINE_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-timeline", "Timeline", TIMELINE_LONGLINE, "img/sound/album-timeline.jpg", 7, 0, "Альбом, 53m of DnB IDM Ambient", TIMELINE_ALBUM_SHORTLINE, "", true, true, "sound", "https://kashtanrecords.bandcamp.com/album/timeline-lp"));

    const MODERN_LONGLINE = "";
    const MODERN_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-modern", "Modern", MODERN_LONGLINE, "img/sound/album-modern.jpg", 7, 0, "Платівка, 32m of IDM<br>Experimental Electro", MODERN_ALBUM_SHORTLINE, "", true, true, "sound", "https://progressive-future.bandcamp.com/album/modern"));

    const SWEAT_LONGLINE = "";
    const SWEAT_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-sweat", "Sweat", SWEAT_LONGLINE, "img/sound/album-sweat.jpg", 7, 0, "Альбом, 52m of Gabber Glitch IDM", SWEAT_ALBUM_SHORTLINE, "", true, true, "sound", "https://johnobject.bandcamp.com/album/heat"));

    const PROGRESSIVE_FUTURE_1_LONGLINE = "";
    const PROGRESSIVE_FUTURE_1_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-progressive-future-001", "#001", PROGRESSIVE_FUTURE_1_LONGLINE, "img/sound/album-progressive-future-001.jpg", 7, 0, "Альбом, 37m of Electro Techno IDM", PROGRESSIVE_FUTURE_1_ALBUM_SHORTLINE, "", true, true, "sound", "https://progressive-future.bandcamp.com/album/001"));

    const VESELO_LONGLINE = "";
    const VESELO_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-veselo", "Veselo", VESELO_LONGLINE, "img/sound/album-veselo.jpg", 8, 0, "Альбом, 59m of Electro Synth-pop EBM", VESELO_ALBUM_SHORTLINE, "", true, true, "sound", "https://pincet.bandcamp.com/album/veselo"));

    const DIE_NAG_LONGLINE = "";
    const DIE_NAG_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-die-nag", "Die Nag", DIE_NAG_LONGLINE, "img/sound/album-die-nag.jpg", 8, 0, "Альбом, 23m of Acid House Breakbeat", DIE_NAG_ALBUM_SHORTLINE, "", true, true, "sound", "https://animalsonpsychedelicsmusic.bandcamp.com/album/die-nag-ep"));

    const RAINALICE_LONGLINE = "";
    const RAINALICE_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-rainalice", "Rainalice", RAINALICE_LONGLINE, "img/sound/album-rainalice.jpg", 8, 0, "Альбом, 56m of Acid Electro Breakbeat", RAINALICE_ALBUM_SHORTLINE, "", true, true, "sound", "https://kalaharioystercult.bandcamp.com/album/volodymyr-gnatenko-rainalice-oyster38"));

    const KURS_VALUT_LONGLINE = "";
    const KURS_VALUT_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-kurs-valut", "Kurs Valüt", KURS_VALUT_LONGLINE, "img/sound/album-kurs-valut.jpg", 9, 0, "Альбом, 35m of Synth-pop EBM<br>Post-punk", KURS_VALUT_ALBUM_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/kursvalut/sets/kurs-valut-kurs-valut-neb035"));

    const FOR_A_BRAVE_LONGLINE = "";
    const FOR_A_BRAVE_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-for-a-brave", "For A Brave", FOR_A_BRAVE_LONGLINE, "img/sound/album-for-a-brave.jpg", 9, 0, "Альбом, 24m of Acid Trance Techno", FOR_A_BRAVE_ALBUM_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/trance-pandemic/tp001-komponente-kurilo-for-a-brave-ep"));


    const PROMENI_LONGLINE = "";
    const PROMENI_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const PROMENI_IMG = `img/sound/album-promeni.jpg`;
    LootArr.push(new DNELootCard("album-promeni", "PROMENI", PROMENI_LONGLINE, PROMENI_IMG, 6, 0, "Альбом, 42m of Experimental<br>Psychodelic Electronic", PROMENI_SHORTLINE, "", true, true, "sound", "https://kvitnu.bandcamp.com/album/promeni"));


    const BLOOD_MOON_RISE_LONGLINE = "";
    const BLOOD_MOON_RISE_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-blood-moon-rise", "Blood Moon Rise", BLOOD_MOON_RISE_LONGLINE, "img/sound/album-blood-moon-rise.jpg", 9, 0, "Альбом, 45m of Psychodelic Doom Metal", BLOOD_MOON_RISE_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/8ZUlUq__ar4?si=Cw6INQOT-veX6426"));

    const STRANGE_AND_ETERNAL_LONGLINE = "";
    const STRANGE_AND_ETERNAL_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-strange-and-eternal", "Strange And Eternal", STRANGE_AND_ETERNAL_LONGLINE, "img/sound/album-strange-and-eternal.jpg", 8, 0, "Альбом, 45m of Dungeon Synth", STRANGE_AND_ETERNAL_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/xzj-1WE3P9M?si=5ns5GDMsMhQ-ICrL"));

    const GILES_COREY_LONGLINE = "";
    const GILES_COREY_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-giles-corey", "Giles Corey", GILES_COREY_LONGLINE, "img/sound/album-giles-corey.jpg", 7, 0, "Альбом, 56m of Experimental Drone", GILES_COREY_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/Mweu3JBu8bM?si=zImAU7v9Wrfov25z"));

    const INFESTISSUMAM_LONGLINE = "";
    const INFESTISSUMAM_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-infestissumam", "Infestissumam", INFESTISSUMAM_LONGLINE, "img/sound/album-infestissumam.jpg", 6, 0, "Альбом, 47m of Progressive Doom Metal", INFESTISSUMAM_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtube.com/playlist?list=PLixrJ9xPZTqfl7ujV4WiKsNxnKyiCjllN&si=n-8L_ODK6KsFqO7R"));

    const ST_LP_LONGLINE = "";
    const ST_LP_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-st-lp", "S/T LP", ST_LP_LONGLINE, "img/sound/album-st-lp.jpg", 7, 0, "Альбом, 32m of Dungeon Post-punk", ST_LP_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/QFvt2cNSOaM?si=OSiAtbwntJZlmf5F"));

    const SILENT_HILL_2_LONGLINE = "";
    const SILENT_HILL_2_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-silent-hill-2", "Silent Hill 2", SILENT_HILL_2_LONGLINE, "img/sound/album-silent-hill-2.jpg", 8, 0, "Альбом, 73m of Alternative Ambient", SILENT_HILL_2_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/QFvt2cNSOaM?si=OSiAtbwntJZlmf5F"));

    const ACOUSTIC_CHURCH_SESSION_LONGLINE = "";
    const ACOUSTIC_CHURCH_SESSION_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-acoustic-church-session", "Jazmin<br>Bean`s<br>Acoustic Church Session", ACOUSTIC_CHURCH_SESSION_LONGLINE, "img/sound/demo-acoustic-church-session.jpg", 5, 0, "Альбом, 16m of Acoustic Horror Pop", ACOUSTIC_CHURCH_SESSION_ALBUM_SHORTLINE, "", true, true, "sound", "https://music.youtube.com/playlist?list=OLAK5uy_liP6isp6OGc5_cWMzoltP09IKr01f-aDg&si=1_1jwFExyxseka-P"));

    const NINE_ONE_ONE_LONGLINE = "";
    const NINE_ONE_ONE_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-nine-one-one", "911", NINE_ONE_ONE_LONGLINE, "img/sound/album-nine-one-one.jpg", 6, 0, "Альбом, 15m of Experimental<br>Industrial Hip-Hop", NINE_ONE_ONE_ALBUM_SHORTLINE, "", true, true, "sound", "https://music.youtube.com/playlist?list=OLAK5uy_mAOre2IDt3uEkahDYosWDn6_4IbU1g5XQ&si=qyGr-IAAKIV4Sv1G"));

    const FETCH_THE_BOLT_CUTTERS_LONGLINE = "";
    const FETCH_THE_BOLT_CUTTERS_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-fetch-the-bolt-cutters", "Fetch the <span style='white-space: nowrap'>Bolt Cutters</span>", FETCH_THE_BOLT_CUTTERS_LONGLINE, "img/sound/album-fetch-the-bolt-cutters.jpg", 7, 0, "Альбом, 52m of Singer-Songwriter<br>Progressive Pop", FETCH_THE_BOLT_CUTTERS_ALBUM_SHORTLINE, "", true, true, "sound", "https://music.youtube.com/playlist?list=OLAK5uy_k-GHGUsLjvpuH7nLnGd5Cv_DdZC3Faxuo&si=5jtQYD9ro_9GAI8f"));

    const HAPPINESS_LONGLINE = "";
    const HAPPINESS_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-happiness", "Happiness", HAPPINESS_LONGLINE, "img/sound/album-happiness.jpg", 6, 0, "Альбом, 44m of Synth-pop Electronic", HAPPINESS_ALBUM_SHORTLINE, "", true, true, "sound", "https://music.youtube.com/playlist?list=OLAK5uy_kwpgtnqOGQQyEAVPRPp2IqsONf6ylqpUM&si=gQDs6i0UCGWCtozw"));

    const ELECTRA_HEART_LONGLINE = "";
    const ELECTRA_HEART_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-electra-heart", "Electra Heart", ELECTRA_HEART_LONGLINE, "img/sound/album-electra-heart.jpg", 9, 0, "Альбом, 47m of Singer-Songwriter Pop Bubblegum-Punk", ELECTRA_HEART_ALBUM_SHORTLINE, "", true, true, "sound", "https://music.youtube.com/playlist?list=OLAK5uy_n_YNhIGazBfhuR45jiyVUiPj3LNpM6mHw&si=NMW5kbfhvbd-cjHr"));

    const THE_FAMILY_JEWELS_LONGLINE = "";
    const THE_FAMILY_JEWELS_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-the-family-jewels", "The Family Jewels", THE_FAMILY_JEWELS_LONGLINE, "img/sound/album-the-family-jewels.jpg", 7, 0, "Альбом, 44m of Alternative Indie<br>Synth-pop Bubblegum-Punk", THE_FAMILY_JEWELS_ALBUM_SHORTLINE, "", true, true, "sound", "https://music.youtube.com/playlist?list=OLAK5uy_lIxs0bwVNdDGFdoE244H0b6xK4KQ8h3bY&si=UdA3Tji92G-3v-OL"));

    const HOW_SAD_HOW_LOVELY_LONGLINE = "";
    const HOW_SAD_HOW_LOVELY_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-how-sad-how-lovely", "How Sad,<br>How Lovely", HOW_SAD_HOW_LOVELY_LONGLINE, "img/sound/album-how-sad-how-lovely.jpg", 7, 0, "Альбом, 40m of Singer-Songwriter<br>Acoustic Folk", HOW_SAD_HOW_LOVELY_ALBUM_SHORTLINE, "", true, true, "sound", "https://music.youtube.com/playlist?list=OLAK5uy_kcHlawM9coeKH722Wo1Z9PCCr0CD3e5VM&si=i3pC5HW5XFDBT7cu"));

    const VIOLATOR_LONGLINE = "";
    const VIOLATOR_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-violator", "Violator", VIOLATOR_LONGLINE, "img/sound/album-violator.jpg", 6, 0, "Альбом, 72m of Synth-pop<br>Alternative Rock", VIOLATOR_ALBUM_SHORTLINE, "", true, true, "sound", "https://music.youtube.com/playlist?list=OLAK5uy_mdFMT_6jHeXEFAzkrbGszwqbrJQzYs2B4&si=3keXJWn7ga29aR7r"));

    const ADRENALINE_LONGLINE = "";
    const ADRENALINE_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-adrenaline", "Adrenaline", ADRENALINE_LONGLINE, "img/sound/vinyl-adrenaline.jpg", 7, 0, "Платівка, 47m of Nu Metal Alternative", ADRENALINE_ALBUM_SHORTLINE, "", true, true, "sound", "https://music.youtube.com/playlist?list=OLAK5uy_mNszD2xAooshMxGL-Ph4NrIBbJAdQjQbo&si=zICJmGhY_tzv7yWY"));

    const KHAAR_LONGLINE = "";
    const KHAAR_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-khaar", "Khaar", KHAAR_LONGLINE, "img/sound/album-khaar.jpg", 9, 0, "Альбом, 28m of Post-punk Electro<br>Industrial Synthpunk", KHAAR_ALBUM_SHORTLINE, "", true, true, "sound", "https://music.youtube.com/playlist?list=OLAK5uy_lSlOOZyCiCDSgcPba_pUQ6cIySOC9NrEI&si=8mswUAlfzXsN0g-4"));

    const WARLORD_LONGLINE = "";
    const WARLORD_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-warlord", "Warlord", WARLORD_LONGLINE, "img/sound/vinyl-warlord.jpg", 8, 0, "Платівка, 41m of Cloud Trap<br>Industrial Hip-Hop", WARLORD_ALBUM_SHORTLINE, "", true, true, "sound", "https://music.youtube.com/playlist?list=OLAK5uy_lpHa33dFi2rPVPhVdc07eyzJ03MCxxPWc&si=B93GvlEluYkoRFfG"));

    const RELAX_LONGLINE = "";
    const RELAX_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-relax", "Relax", RELAX_LONGLINE, "img/sound/album-relax.jpg", 7, 0, "Альбом, 42m of Alternative Indie Rock", RELAX_ALBUM_SHORTLINE, "", true, true, "sound", "https://music.youtube.com/playlist?list=OLAK5uy_lpx9zdaEtxZspWJpHnxI3_SYcEF52mDVA&si=iYcHmE-iNahv5Bti"));

    const CREST_LONGLINE = "";
    const CREST_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-crest", "Crest", CREST_LONGLINE, "img/sound/album-crest.jpg", 6, 0, "Альбом, 30m of Cloud Hip-Hop<br>Synth-pop", CREST_ALBUM_SHORTLINE, "", true, true, "sound", "https://music.youtube.com/playlist?list=OLAK5uy_kF87Zvbu92YyUOjXCKJp43tIlblvh0Y0s&si=enobQQ_syQaXS9eM"));

    const PORNOGRAPHY_LONGLINE = "";
    const PORNOGRAPHY_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-pornography", "Pornography", PORNOGRAPHY_LONGLINE, "img/sound/album-pornography.jpg", 8, 0, "Альбом, 43m of Post-punk Alternative Gothic Rock", PORNOGRAPHY_ALBUM_SHORTLINE, "", true, true, "sound", "https://music.youtube.com/playlist?list=OLAK5uy_nq-_6NxAfIduzC4BUcPY8kTPNRq2-GqK4&si=Kszw_fP42WcpuYaM"));

    const LOST_IN_TRANSIT_LONGLINE = "";
    const LOST_IN_TRANSIT_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-lost-in-transit", "Lost In Transit", LOST_IN_TRANSIT_LONGLINE, "img/sound/album-lost-in-transit.jpg", 4, 0, "Альбом, 62m of Hi-Fi Electronic", LOST_IN_TRANSIT_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/qhcpoSxzphI"));

    const GOTHAM_THE_BAD_LONGLINE = "";
    const GOTHAM_THE_BAD_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-gotham-the-bad", "Gotham - The Bad", GOTHAM_THE_BAD_LONGLINE, "img/sound/album-gotham-the-bad.jpg", 8, 0, "Альбом, 62m of Trip-Hop Dark Ambient", GOTHAM_THE_BAD_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/BMmtJJQ6bHI"));

    // Платівка VIRTUAL PRESENCE
    //
    //
    const GOTHAM_THE_GOOD_LONGLINE = "";
    const GOTHAM_THE_GOOD_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-gotham-the-good", "Gotham - The Good", GOTHAM_THE_GOOD_LONGLINE, "img/sound/album-gotham-the-good.jpg", 6, 0, "Альбом, 62m of Hip-Hop Trip-Hop Ambient", GOTHAM_THE_GOOD_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/n584P_LZuyk"));

    // Платівка VIRTUAL PRESENCE
    //
    //
    const ROCK_MACHINE_LONGLINE = "";
    const ROCK_MACHINE_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-rock-machine", "Rock Machine", ROCK_MACHINE_LONGLINE, "img/sound/album-rock-machine.jpg", 6, 0, "Альбом, 46m of Synth-Pop Indie Rock", ROCK_MACHINE_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/BKmpO6bg2Fs"));

    // Платівка VIRTUAL PRESENCE
    //
    //
    const VIRTUAL_PRESENCE_LONGLINE = "";
    const VIRTUAL_PRESENCE_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-virtual-presence", "VIRTUAL PRESENCE", VIRTUAL_PRESENCE_LONGLINE, "img/sound/album-virtual-presence.jpg", 4, 0, "Альбом, 18m of Dark Industrial", VIRTUAL_PRESENCE_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/HB0CLQVCRa8"));

    // Платівка LE_HYPOTHESE
    //
    //
    const LE_HYPOTHESE_LONGLINE = "";
    const LE_HYPOTHESE_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-hypothese-grise", "L’hypothèse Grise", LE_HYPOTHESE_LONGLINE, "img/sound/demo-l-hypothese-grise.jpg", 9, 0, "Альбом, 60m of Progressive Ambient", LE_HYPOTHESE_ALBUM_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/lesyndicatdesscorpions/lyl-june-lhypothese-grise-avec-le-syndicat-des-scorpions-10"));

    // Платівка MYSTERE
    //
    //
    const THE_SPIRAL_LONGLINE = "";
    const THE_SPIRAL_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-spiral", "THE SPIRAL", THE_SPIRAL_LONGLINE, "img/sound/album-the-spiral.jpg", 8, 0, "Альбом, 32m of Experimental<br> Industrial Noise", THE_SPIRAL_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtube.com/playlist?list=OLAK5uy_nsnuCohrZAOicGtutjuTwFmeZXKd6lPSA&si=wv4N1l4vYkhfiWu4"));

    // Платівка MYSTERE
    //
    //
    const ANON_DATABASE_LONGLINE = "";
    const ANON_DATABASE_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-anon-database", "THE ANON DATABASE", ANON_DATABASE_LONGLINE, "img/sound/album-anon-database.jpg", 6, 0, "Альбом, 34m of Downtempo<br>Experimental Ambient", ANON_DATABASE_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/wyUQi_Aq8RE?si=2cI1AKTVJ8dg1j6P"));

    // Платівка MYSTERE
    //
    //
    const THE_DROUGHT_ALBUM_LONGLINE = "";
    const THE_DROUGHT_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-drought", "THE DROUGHT", THE_DROUGHT_ALBUM_LONGLINE, "img/sound/album-the-drought.jpg", 8, 0, "Альбом, 43m of Experimental<br>Industrial Noise", THE_DROUGHT_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/pwjZrbo6Hco?si=x_M4rHII7maMuGRy"));

    // Платівка MYSTERE
    //
    //
    const MYSTERE_VINYL_LONGLINE = "";
    const MYSTERE_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-mystere", "MYSTERE", MYSTERE_VINYL_LONGLINE, "img/sound/album-mystere.jpg", 7, 900, "Альбом, 68m of Psychodelic Alternative Indie", MYSTERE_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/jTMSguDFlMI?si=HfSmT95DMNDRqe_u"));

    // WEVAL

    const WEVAL_VINYL_LONGLINE = "";
    const WEVAL_VINYL_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    // const WEVAL_VINYL_SHORTLINE = `Поклади на будь-яку іншу карту, щоб помножити її на нуль, або на двійку, щоб підняти бонус до 20. Так, він буде множитись за жанр.`;
    LootArr.push(new DNELootCard("vinyl-weval", `WEVAL`, WEVAL_VINYL_LONGLINE, "img/sound/vinyl-weval.jpg", 8, 2100, "Альбом, 50m of Hi-Fi IDM<br>Electronic", WEVAL_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/OeAO0CYcK7s"));

    // DIMENSIONAL

    // const DIMENSIONAL_ALBUM_LONGLINE = "";
    // const DIMENSIONAL_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    // const DIMENSIONAL_ALBUM_SHORTLINE2 = `Поклади на будь-яку іншу карту, щоб помножити її на нуль, або на двійку, щоб підняти бонус до 20. Так, він буде множитись за жанр.`;
    // LootArr.push(new DNELootCard("demo-dimensional", `DIMENSIONAL`, DIMENSIONAL_ALBUM_LONGLINE, "img/sound/album-dimensional.jpg", 8, 0, "Альбом, 35m of Industrial Dungeon Synthpunk", DIMENSIONAL_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/HkImUUFadls"));

    // INCURABLE
    //
    //
    const INCURABLE_LONGLINE = "";
    const INCURABLE_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const INCURABLE_IMG = `img/sound/album-incurable.jpg`;

    LootArr.push(new DNELootCard("album-incurable", "INCURABLE", INCURABLE_LONGLINE, INCURABLE_IMG, 2, 300, "Альбом, 34m of Industrial Synth", INCURABLE_SHORTLINE, "", true, true, "sound", "https://youtu.be/4pSb7784ImY"));

    // BASEMENT_626
    //
    //
    const BASEMENT_626_LONGLINE = "";
    const BASEMENT_626_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const BASEMENT_626_IMG = `img/sound/album-basement-626.jpg`;

    LootArr.push(new DNELootCard("album-basement-626", "BASEMENT 626", BASEMENT_626_LONGLINE, BASEMENT_626_IMG, 6, 0, "Альбом, 90m of Ambient Psychodelic Rock", BASEMENT_626_SHORTLINE, "", true, true, "sound", "https://youtube.com/playlist?list=OLAK5uy_k5aw8AALXYSrh5gcu4P3ObGkklYrMM6gU&si=PGysWc2vPQ9cqaZM"));

    // CREPUSCULAR
    //
    //
    const CREPUSCULAR_LONGLINE = "";
    const CREPUSCULAR_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const CREPUSCULAR_IMG = `img/sound/vinyl-crepuscular.jpg`;

    LootArr.push(new DNELootCard("vinyl-crepuscular", "CREPUSCULAR", CREPUSCULAR_LONGLINE, CREPUSCULAR_IMG, 4, 1200, "Платівка, 33m of Synthpunk Coldwave", CREPUSCULAR_SHORTLINE, "", true, true, "sound", "https://youtu.be/YokfutdK6Rs"));

    // DRAINVOID
    //
    //
    const DRAINVOID_LONGLINE = "";
    const DRAINVOID_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const DRAINVOID_IMG = `img/sound/vinyl-drainvoid.jpg`;

    LootArr.push(new DNELootCard("vinyl-drainvoid", "DRAINVOID", DRAINVOID_LONGLINE, DRAINVOID_IMG, 5, 1000, "Платівка, 33m of Dungeon Synth<br>Coldwave", DRAINVOID_SHORTLINE, "", true, true, "sound", "https://youtu.be/H5WShWhQKdE"));

    // DISCORDIAN_DISCO
    //
    //
    const DISCORDIAN_DISCO_LONGLINE = "";
    const DISCORDIAN_DISCO_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const DISCORDIAN_DISCO_IMG = `img/sound/album-discordian-disco.jpg`;

    LootArr.push(new DNELootCard("album-discordian-disco", "DISCORDIAN DISCO", DISCORDIAN_DISCO_LONGLINE, DISCORDIAN_DISCO_IMG, 6, 400, "Альбом, 40m of Synthpunk Coldwave", DISCORDIAN_DISCO_SHORTLINE, "", true, true, "sound", "https://youtu.be/GyK4OiPMW30"));

    // NEW_WAVE_OF_ENTROPY
    //
    //
    const NEW_WAVE_OF_ENTROPY_LONGLINE = "";
    const NEW_WAVE_OF_ENTROPY_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const NEW_WAVE_OF_ENTROPY_IMG = `img/sound/album-a-new-wave-of-entropy.jpg`;

    LootArr.push(new DNELootCard("album-a-new-wave-of-entropy", "A NEW WAVE OF ENTROPY", NEW_WAVE_OF_ENTROPY_LONGLINE, NEW_WAVE_OF_ENTROPY_IMG, 6, 300, "Альбом, 40m of Dark Industrial Noise", NEW_WAVE_OF_ENTROPY_SHORTLINE, "", true, true, "sound", "https://youtu.be/xLN-gkKj7CQ"));

    // EIDETIC
    //
    //
    const EIDETIC_LONGLINE = "";
    const EIDETIC_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const EIDETIC_IMG = `img/sound/album-eidetic.jpg`;

    LootArr.push(new DNELootCard("album-eidetic", "EIDETIC", EIDETIC_LONGLINE, EIDETIC_IMG, 6, 500, "Альбом, 42m of Synthpunk Coldwave", EIDETIC_SHORTLINE, "", true, true, "sound", "https://youtu.be/CaBhgUzPlko"));

    // THE_BODY_AS_A_CONSTRUCT
    //
    //
    const THE_BODY_AS_A_CONSTRUCT_LONGLINE = "";
    const THE_BODY_AS_A_CONSTRUCT_SHORTLINE = ``;
    const THE_BODY_AS_A_CONSTRUCT_IMG = `img/sound/album-the-body-as-a-construct.jpg`;

    LootArr.push(new DNELootCard("album-the-body-as-a-construct", "THE BODY AS A CONSTRUCT", THE_BODY_AS_A_CONSTRUCT_LONGLINE, THE_BODY_AS_A_CONSTRUCT_IMG, 5, 200, "Альбом, 27m of Industrial Coldwave EBM", THE_BODY_AS_A_CONSTRUCT_SHORTLINE, "", true, true, "sound", "https://youtu.be/rv4jUjdNUMw"));

    // VISCERAL
    //
    //
    const VISCERAL_LONGLINE = "";
    const VISCERAL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const VISCERAL_IMG = `img/sound/vinyl-visceral.jpg`;

    LootArr.push(new DNELootCard("vinyl-visceral", "VISCERAL", VISCERAL_LONGLINE, VISCERAL_IMG, 4, 1000, "Платівка, 32m of EBM Coldwave<br>Industrial", VISCERAL_SHORTLINE, "", true, true, "sound", "https://youtu.be/Yp-a2bBVfNc"));

    // DYING_THE_DREAM
    //
    //
    const DYING_THE_DREAM_LONGLINE = "";
    const DYING_THE_DREAM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const DYING_THE_DREAM_IMG = `img/sound/album-dying-the-dream.jpg`;

    LootArr.push(new DNELootCard("album-dying-the-dream", "DYING THE DREAM", DYING_THE_DREAM_LONGLINE, DYING_THE_DREAM_IMG, 3, 400, "Альбом, 32m of Dark Ambient Dungeon Synth", DYING_THE_DREAM_SHORTLINE, "", true, true, "sound", "https://youtu.be/ZMWg0Odp8qY"));

    // GAME_OVER
    //
    //
    const GAME_OVER_LONGLINE = "";
    const GAME_OVER_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const GAME_OVER_IMG = `img/sound/album-game-over.jpg`;

    LootArr.push(new DNELootCard("album-game-over", "GAME OVER", GAME_OVER_LONGLINE, GAME_OVER_IMG, 2, 300, "Альбом, 16m of Electro Industrial EBM", GAME_OVER_SHORTLINE, "", true, true, "sound", "https://youtu.be/HdCl_6Ksu2Y"));

    // BLOODBOUND
    //
    //
    const BLOODBOUND_LONGLINE = "";
    const BLOODBOUND_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const BLOODBOUND_IMG = `img/sound/album-bloodbound.jpg`;

    LootArr.push(new DNELootCard("album-bloodbound", "BLOODBOUND", BLOODBOUND_LONGLINE, BLOODBOUND_IMG, 8, 0, "Альбом, 47m of Dark Electro Coldwave", BLOODBOUND_SHORTLINE, "", true, true, "sound", "https://youtu.be/nZyQIohZEis?si=rDCZ03LYsjDJ4bDx"));

    // INTERMISSION
    //
    //
    const INTERMISSION_LONGLINE = "";
    const INTERMISSION_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const INTERMISSION_IMG = `img/sound/album-intermission.jpg`;

    LootArr.push(new DNELootCard("album-intermission", "INTERMISSION", INTERMISSION_LONGLINE, INTERMISSION_IMG, 7, 0, "Альбом, 37m of Experimental Electro", INTERMISSION_SHORTLINE, "", true, true, "sound", "https://standard-deviation.bandcamp.com/album/intermission"));

    // GREEN_HOUSE
    //
    //
    const GREEN_HOUSE_LONGLINE = "";
    const GREEN_HOUSE_SHORTLINE = `${STRINGS.DEMO_LONGLINE_SHORT_3}`;
    const GREEN_HOUSE_IMG = `img/sound/demo-green-house.jpg`;

    LootArr.push(new DNELootCard("vinyl-green-house", "GREEN HOUSE", GREEN_HOUSE_LONGLINE, GREEN_HOUSE_IMG, 8, 0, "Демо, 32m of Electro Ambient", GREEN_HOUSE_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/emil-zenko/greenhouselive"));

    // DOPETHRONE
    //
    //
    const DOPETHRONE_LONGLINE = "";
    const DOPETHRONE_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const DOPETHRONE_IMG = `img/sound/vinyl-dopethrone.png`;

    LootArr.push(new DNELootCard("vinyl-dopethrone", "DOPETHRONE", DOPETHRONE_LONGLINE, DOPETHRONE_IMG, 9, 1300, "Платівка, 76m of Stoner Metal", DOPETHRONE_SHORTLINE, "", true, true, "sound", "https://youtu.be/xsbAVGDPvM0"));

    // PROTOPLASM
    //
    //
    const PROTOPLASM_LONGLINE = "";
    const PROTOPLASM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const PROTOPLASM_IMG = `img/sound/album-protoplasm.jpg`;

    LootArr.push(new DNELootCard("album-protoplasm", "PROTOPLASM", PROTOPLASM_LONGLINE, PROTOPLASM_IMG, 5, 300, "Альбом, 22m of Downtempo Coldwave Synthpunk", PROTOPLASM_SHORTLINE, "", true, true, "sound", "https://youtu.be/Bfvmxzmu48A"));

    // PROTOPLASM
    //
    //
    const ARTIFICIAL_SENTIMENTS_LONGLINE = "";
    const ARTIFICIAL_SENTIMENTS_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const ARTIFICIAL_SENTIMENTS_IMG = `img/sound/album-artificial-sentiments.jpg`;

    LootArr.push(new DNELootCard("album-artificial-sentiments", "ARTIFICIAL SENTIMENTS", ARTIFICIAL_SENTIMENTS_LONGLINE, ARTIFICIAL_SENTIMENTS_IMG, 7, 500, "Альбом, 39m of Dark Electro", ARTIFICIAL_SENTIMENTS_SHORTLINE, "", true, true, "sound", "https://youtu.be/OiiggeHIsSQ"));

    // SOMBER REALM
    //
    //
    const SOMBER_REALM_LONGLINE = "";
    const SOMBER_REALM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const SOMBER_REALM_IMG = `img/sound/vinyl-somber-realm.jpg`;

    LootArr.push(new DNELootCard("vinyl-somber-realm", "SOMBER REALM", SOMBER_REALM_LONGLINE, SOMBER_REALM_IMG, 6, 1400, "Платівка, 35m of Electro Dungeon Synthpunk", SOMBER_REALM_SHORTLINE, "", true, true, "sound", "https://youtu.be/ip0rOXlwut4"));

    // Invitation To Dopeness
    //
    //
    const INVITATION_TO_DOPENESS_LONGLINE = "";
    const INVITATION_TO_DOPENESS_SHORTLINE = `${STRINGS.DEMO_LONGLINE_SHORT_3}`;
    const INVITATION_TO_DOPENESS_IMG = `img/sound/demo-invitation-to-dopeness.jpg`;

    LootArr.push(new DNELootCard("demo-invitation-to-dopeness", "Invitation To Dopeness", INVITATION_TO_DOPENESS_LONGLINE, INVITATION_TO_DOPENESS_IMG, 9, 0, "Демо, 62m of Abstract Hip-Hop", INVITATION_TO_DOPENESS_SHORTLINE, "", true, true, "sound", "https://youtu.be/rFRheWScF88"));

    // Mirage
    //
    //
    const MIRAGE_LONGLINE = "";
    const MIRAGE_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const MIRAGE_IMG = `img/sound/album-mirage.jpg`;

    LootArr.push(new DNELootCard("album-mirage", "Mirage", MIRAGE_LONGLINE, MIRAGE_IMG, 8, "NYP", "Альбом, 60m of Industrial Psychodelic Metal", MIRAGE_SHORTLINE, "", true, true, "sound", "https://youtu.be/ShkrdJeRl7o"));

    // THE WIZARDS
    //
    //
    const WIZARDS_LONGLINE = "";
    const WIZARDS_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const WIZARDS_IMG = `img/sound/album-the-wizards.jpg`;

    LootArr.push(new DNELootCard("album-the-wizards", "THE WIZARDS", WIZARDS_LONGLINE, WIZARDS_IMG, 7, "NYP", "Альбом, 91m of Trip-Hop<br>Abstract Hip-Hop", WIZARDS_SHORTLINE, "", true, true, "sound", "https://youtu.be/pKgJppNfR1g"));

    // Vampire: The Masquerade - Bloodlines
    //
    //
    const VAMPIRE_LONGLINE = "";
    const VAMPIRE_SHORTLINE = ``;
    const VAMPIRE_IMG = `img/sound/album-vampire-the-masquerade-bloodlines.jpg`;

    LootArr.push(new DNELootCard("album-vampire-the-masquerade-bloodlines", "Vampire: The Masquerade - Bloodlines", VAMPIRE_LONGLINE, VAMPIRE_IMG, 9, 0, "Альбом, 88m of Dark Ambient Alternative", VAMPIRE_SHORTLINE, "", true, true, "sound", "https://youtu.be/0Fl9-359oeg"));

    // A CHEMICAL LOVE STORY
    //
    //
    const A_CHEMICAL_LOVE_STORY_LONGLINE = "";
    const A_CHEMICAL_LOVE_STORY_SHORTLINE = ``;
    const A_CHEMICAL_LOVE_STORY_IMG = `img/sound/album-chemical-love-story.jpg`;

    LootArr.push(new DNELootCard("album-chemical-love-story", "A CHEMICAL LOVE STORY", A_CHEMICAL_LOVE_STORY_LONGLINE, A_CHEMICAL_LOVE_STORY_IMG, 6, 0, "Альбом, 34m of Electronic Downtempo Trance", A_CHEMICAL_LOVE_STORY_SHORTLINE, "", true, true, "sound", "https://youtu.be/OpT6cKPQ4gE"));

    // Spiritual Paralysis
    //
    //
    const SPIRITUAL_PARALYSIS_VINYL_LONGLINE = "";
    const SPIRITUAL_PARALYSIS_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const SPIRITUAL_PARALYSIS_VINYL_IMG = `img/sound/vinyl-spiritual-paralysis.jpg`;

    LootArr.push(new DNELootCard("vinyl-spiritual-paralysis", "Spiritual Paralysis", SPIRITUAL_PARALYSIS_VINYL_LONGLINE, SPIRITUAL_PARALYSIS_VINYL_IMG, 7, 1100, "Платівка, 40m Electronic<br>Dark Ambient", SPIRITUAL_PARALYSIS_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/7vTraPeiEtw"));

    // Supersonic Megafauna Collision
    //
    //
    const EXCURSION_LONGLINE = "";
    const EXCURSION_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const EXCURSION_IMG = `img/sound/album-excursion.jpg`;

    LootArr.push(new DNELootCard("album-excursion", "Excursion", EXCURSION_LONGLINE, EXCURSION_IMG, 4, 300, "Альбом, 43m Stoner Metal", EXCURSION_SHORTLINE, "", true, true, "sound", "https://youtu.be/JVBB_9pigT4"));

    // Supersonic Megafauna Collision
    //
    //
    const SUPERSONIC_MEGAFAUNA_COLLISION_LONGLINE = "";
    const SUPERSONIC_MEGAFAUNA_COLLISION_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const SUPERSONIC_MEGAFAUNA_COLLISION_IMG = `img/sound/album-supersonic-megafauna-collision.jpg`;

    LootArr.push(new DNELootCard("album-supersonic-megafauna-collision", "Supersonic Megafauna Collision", SUPERSONIC_MEGAFAUNA_COLLISION_LONGLINE, SUPERSONIC_MEGAFAUNA_COLLISION_IMG, 4, 300, "Альбом, 42m Doom Metal", SUPERSONIC_MEGAFAUNA_COLLISION_SHORTLINE, "", true, true, "sound", "https://youtu.be/M2jadsUGZKA"));

    // Caravan
    //
    //
    const CARAVAN_VINYL_LONGLINE = "";
    const CARAVAN_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const CARAVAN_VINYL_IMG = `img/sound/vinyl-caravan.jpg`;

    LootArr.push(new DNELootCard("vinyl-caravan", "Caravan", CARAVAN_VINYL_LONGLINE, CARAVAN_VINYL_IMG, 5, 1200, "Платівка, 40m of Psychodelic<br>Stoner Metal", CARAVAN_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/Dy_tMphZE_g"));

    // DOOM SESSION VOL2
    //
    //
    const DOOM_SESSION_VOL2_ALBUM_LONGLINE = "";
    const DOOM_SESSION_VOL2_ALBUM_SHORTLINE = ``;
    const DOOM_SESSION_VOL2_ALBUM_IMG = `img/sound/album-doom-session-2.jpg`;

    LootArr.push(new DNELootCard("album-doom-session-2", "DOOM SESSION VOL2", DOOM_SESSION_VOL2_ALBUM_LONGLINE, DOOM_SESSION_VOL2_ALBUM_IMG, 6, 1200, "Альбом, 36m Psychodelic<br>Stoner Metal", DOOM_SESSION_VOL2_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/XO2K4FEVQaA"));

    // Holy Mountain
    //
    //
    const HOLY_MOUNTAIN_VINYL_LONGLINE = "";
    const HOLY_MOUNTAIN_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    const HOLY_MOUNTAIN_VINYL_IMG = `img/sound/vinyl-holy-mountain.jpg`;

    LootArr.push(new DNELootCard("vinyl-holy-mountain", "Holy Mountain", HOLY_MOUNTAIN_VINYL_LONGLINE, HOLY_MOUNTAIN_VINYL_IMG, 3, 1400, "Платівка, 58m of Alternative Stoner Metal", HOLY_MOUNTAIN_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/1WNxnQ39b38"));


    // Requiem for Romance
    //
    //
    const REQUIEM_FOR_ROMANCE_ALBUM_LONGLINE = "";
    const REQUIEM_FOR_ROMANCE_ALBUM_SHORTLINE = ``;
    LootArr.push(new DNELootCard("album-requiem-for-romance", `Requiem for Romance`, REQUIEM_FOR_ROMANCE_ALBUM_LONGLINE, "img/sound/album-requiem-for-romance.jpg", 5, 400, "Альбом, 31m of Dark Electro Indie", REQUIEM_FOR_ROMANCE_ALBUM_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/playlist?list=OLAK5uy_l1UXlu4dgZi3jmiQamovZnyEWmF1Y6Mnk"));

    // Meddle
    //
    //
    const MEDDLE_DEMO_LONGLINE = "";
    const MEDDLE_DEMO_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-meddle", `Meddle`, MEDDLE_DEMO_LONGLINE, "img/sound/vinyl-meddle.jpg", 6, 1900, "Платівка, 47m of Progressive<br>Psychodelic Rock", MEDDLE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/90zyF3gPF8M"));

    // Morrison Hotel
    //
    //
    const MORRISON_HOTEL_VINYL_LONGLINE = "";
    const MORRISON_HOTEL_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-morrison-hotel", `Morrison Hotel`, MORRISON_HOTEL_VINYL_LONGLINE, "img/sound/vinyl-morrison-hotel.png", 5, 1200, "Платівка, 38m of Psychodelic Blues", MORRISON_HOTEL_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/dRC1mdrpCQA"));

    // Morrison Hotel
    //
    //
    const ATOMIC_HEART_MOTHER_VINYL_LONGLINE = "";
    const ATOMIC_HEART_MOTHER_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE_2}`;
    LootArr.push(new DNELootCard("vinyl-atomic-heart-mother", `Atomic Heart Mother`, ATOMIC_HEART_MOTHER_VINYL_LONGLINE, "img/sound/vinyl-atomic-heart-mother.png", 5, 1600, "Платівка, 52m of Experimental Progressive Rock", ATOMIC_HEART_MOTHER_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/DkGDi0XXsT4"));

    // L.A. Woman
    //
    //
    const LA_WOMAN_VINYL_LONGLINE = "";
    const LA_WOMAN_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-la-woman", `L.A.WOMAN`, LA_WOMAN_VINYL_LONGLINE, "img/sound/vinyl-la-woman.png", 6, 1900, "Платівка, 49m of Psychodelic Blues", LA_WOMAN_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/91vU3kHtnoU"));

    // Waiting for the Sun
    //
    //
    const WAITING_FOR_THE_SUN_VINYL_LONGLINE = "";
    const WAITING_FOR_THE_SUN_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE_2}`;
    LootArr.push(new DNELootCard("vinyl-waiting-for-the-sun", `WAITING FOR THE SUN`, WAITING_FOR_THE_SUN_VINYL_LONGLINE, "img/sound/vinyl-waiting-for-the-sun.png", 4, 1300, "Платівка, 65m of Psychodelic Rock", WAITING_FOR_THE_SUN_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/4Q12wpgi4BI"));

    // Strange Days
    //
    //
    const STRANGE_DAYS_VINYL_LONGLINE = "";
    const STRANGE_DAYS_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-strange-days", `Strange Days`, STRANGE_DAYS_VINYL_LONGLINE, "img/sound/vinyl-strange-days.jpg", 5, 6000, "Платівка, 41m of Psychodelic Rock", STRANGE_DAYS_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/mf7BsyCAT80"));

    // The Dark Side of the Moon
    //
    //
    const DARK_SIDE_OF_THE_MOON_VINYL_LONGLINE = "";
    const DARK_SIDE_OF_THE_MOON_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE_2}`;
    LootArr.push(new DNELootCard("vinyl-the-dark-side-of-the-moon", `The Dark Side of the Moon`, DARK_SIDE_OF_THE_MOON_VINYL_LONGLINE, "img/sound/vinyl-the-dark-side-of-the-moon.png", 5, 1700, "Платівка, 43m of Progressive Psychodelic Rock", DARK_SIDE_OF_THE_MOON_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/k9ynZnEBtvw"));

    // The Division Bell
    //
    //
    const THE_DIVISION_BELL_VINYL_LONGLINE = "";
    const THE_DIVISION_BELL_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-division-bell", `The Division Bell`, THE_DIVISION_BELL_VINYL_LONGLINE, "img/sound/vinyl-division-bell.png", 4, 2500, "Платівка, 67m of New-Age Progressive Rock", THE_DIVISION_BELL_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/Nc7bHU6ylvM"));

    // A Saucerful Of Secrets
    //
    //
    const SAUCERFUL_OF_SECRETS_LONGLINE = "";
    const SAUCERFUL_OF_SECRETS_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-saucerful-of-secrets", `A Saucerful Of Secrets`, SAUCERFUL_OF_SECRETS_LONGLINE, "img/sound/vinyl-saucerful-of-secrets.png", 4, 1700, "Платівка, 40m of Psychodelic Rock", SAUCERFUL_OF_SECRETS_SHORTLINE, "", true, true, "sound", "https://youtu.be/rmmuHnXLJiw"));

    // Maggot Brain
    //
    //
    const MAGGOT_BRAIN_LONGLINE = "";
    const MAGGOT_BRAIN_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-maggot-brain", `Maggot Brain`, MAGGOT_BRAIN_LONGLINE, "img/sound/vinyl-maggot-brain.jpg", 6, 2200, "Платівка, 37m of Psychodelic Rock Funk", MAGGOT_BRAIN_SHORTLINE, "", true, true, "sound", "https://youtu.be/21sP7orRS3c"));

    // Animals
    //
    //
    const ANIMALS_VINYL_LONGLINE = "";
    const ANIMALS_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-animals", `Animals`, ANIMALS_VINYL_LONGLINE, "img/sound/vinyl-animals.png", 4, 1700, "Платівка, 42m of Progressive Rock", ANIMALS_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/w0MmM73v21c"));

    // The Doors Electro Session
    //
    //
    const THE_DOOR_ELECTRO_MIX_LONGLINE = "";
    const THE_DOOR_ELECTRO_MIX_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-the-doors-electro", `The Doors Electro Session`, THE_DOOR_ELECTRO_MIX_LONGLINE, "img/sound/demo-the-doors-electro-mix.jpg", 6, 0, "Демо, 35m of Psychodelic Electro House", THE_DOOR_ELECTRO_MIX_SHORTLINE, "", true, true, "sound", "https://youtu.be/sCpRokBkaRs"));

    // Favorite Worst Nightmare
    //
    //
    const VINYL_FAVORIT_WORST_NIGHTMARE_LONGLINE = "";
    const VINYL_FAVORIT_WORST_NIGHTMARE_SHORTLINE = `${STRINGS.VINYL_LONGLINE_2}`;
    LootArr.push(new DNELootCard("vinyl-favorit-worst-nightmare", `Favorite Worst Nightmare`, VINYL_FAVORIT_WORST_NIGHTMARE_LONGLINE, "img/sound/vinyl-favorit-worst-nightmare.jpg", 5, 1800, "Платівка, 37m of Indie Rock", VINYL_FAVORIT_WORST_NIGHTMARE_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/playlist?list=PLDUEjoBVMbh9xMc8MLt4aJodKq2bHHtQK"));

    // Demon Days
    //
    //
    const VINYL_DEMON_DAYS_LONGLINE = "";
    const VINYL_DEMON_DAYS_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-demon-days", `Demon Days`, VINYL_DEMON_DAYS_LONGLINE, "img/sound/vinyl-demon-days.png", 6, 2100, "Платівка, 52m of Hip-Hop<br>Trip-Hop Alternative Rock", VINYL_DEMON_DAYS_SHORTLINE, "", true, true, "sound", "https://youtu.be/cmQOG3VM54k"));

    // Humanz
    //
    //
    const VINYL_HUMANZ_LONGLINE = "";
    const VINYL_HUMANZ_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-humanz", `Humanz`, VINYL_HUMANZ_LONGLINE, "img/sound/vinyl-humanz.jpg", 4, 1700, "Платівка, 75m of Hip-Hop Progressive Rock", VINYL_HUMANZ_SHORTLINE, "", true, true, "sound", "https://youtu.be/f2aPPgSdsKc"));

    // Gorilaz
    //
    //
    const VINYL_GORILAZ_LONGLINE = "";
    const VINYL_GORILAZ_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-gorilaz", `Gorilaz`, VINYL_GORILAZ_LONGLINE, "img/sound/vinyl-gorilaz.png", 5, 1900, "Платівка, 56m of Electronic<br>Hip-Hop Alternative Rock", VINYL_GORILAZ_SHORTLINE, "", true, true, "sound", "https://youtu.be/H-v5oHH3iWs"));

    // Farwalker
    //
    //
    const FARWALKER_ALBUM_LONGLINE = "";
    const FARWALKER_ALBUM_SHORTLINE = ``;
    LootArr.push(new DNELootCard("album-farwalker", `Farwalker`, FARWALKER_ALBUM_LONGLINE, "img/sound/album-farwalker.png", 6, 0, "Платівка, 56m of Ambient<br>Dungeon Synth", FARWALKER_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/kzsDAv5OqNM"));

    // SPAWN
    //
    //
    // const SPAWN_DEMO_LONGLINE = "";
    // const SPAWN_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE_SHORT_3}`;
    // LootArr.push(new DNELootCard("demo-spawn", `SPAWN`, SPAWN_DEMO_LONGLINE, "img/sound/demo-spawn.jpg", "d6", 0, "Демо, 98m of Psychodelic Electro Ambient", SPAWN_DEMO_SHORTLINE, "", true, true, "sound", ""));

    //
    //
    const PERFECT_BLUE_VINYL_LONGLINE = "";
    const PERFECT_BLUE_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-perfect-blue", `Perfect Blue`, PERFECT_BLUE_VINYL_LONGLINE, "img/sound/vinyl-perfect-blue.png", 2, 4000, "Платівка, 31m of Electronic", PERFECT_BLUE_VINYL_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/watch?v=p7Q0SzRQTBc&list=PLG4ENma2RvT4_nBU6aTFqW_iLYfOe2ges&index=1&ab_channel=MIMA%27SROOM"));

    // REJOICE IN THE PAIN
    //
    //
    const REJOICE_PAIN_ALBUM_LONGLINE = "";
    const REJOICE_PAIN_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    LootArr.push(new DNELootCard("album-rejoice-in-the-pain", `REJOICE IN THE PAIN`, REJOICE_PAIN_ALBUM_LONGLINE, "img/sound/album-rejoice-in-the-pain.jpg", 9, 400, "Альбом, 19m of Dark Industrial Techno", REJOICE_PAIN_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/vXuHC0m6OxA"));

    // Under Acid Hoof
    //
    //
    const ACID_HOOF_ALBUM_LONGLINE = "";
    const ACID_HOOF_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-under-acid-hoof", `Under Acid Hoof`, ACID_HOOF_ALBUM_LONGLINE, "img/sound/vinyl-under-acid-hoof.jpg", 6, 2000, "Платівка, 36m of Psychodelic Doom Metal", ACID_HOOF_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/4GwYrQeQpJk"));

    // Sleep Party People
    //
    //
    const SLEEP_PARTY_VINYL_LONGLINE = "";
    const SLEEP_PARTY_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE_2}`;
    LootArr.push(new DNELootCard("vinyl-sleep-party-people", `Sleep Party People`, SLEEP_PARTY_VINYL_LONGLINE, "img/sound/vinyl-sleep-party-people.png", 8, 800, "Платівка, 43m of Synth-Pop Electronic", SLEEP_PARTY_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/8lZIbCaVpW8"));

    // The Dawn
    //
    //
    const DAWN_ALBUM_LONGLINE = "";
    const DAWN_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-the-dawn", `The Dawn`, DAWN_ALBUM_LONGLINE, "img/sound/vinyl-the-dawn.png", 5, 1400, "Платівка, 40m of Indie<br>Psychodelic Rock", DAWN_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/G3kL-QO1ZDA"));

    // NO ENDORPHINS
    //
    //
    const NO_ENDORPHINS_VINYL_LONGLINE = "";
    const NO_ENDORPHINS_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-no-endorphins", `NO ENDORPHINS`, NO_ENDORPHINS_VINYL_LONGLINE, "img/sound/vinyl-no-endorphins.jpg", 3, 800, "Платівка, 16m of Electro Industrial Techno", NO_ENDORPHINS_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/4CLblRKVwow"));

    // THE INCURSION
    //
    //
    const INCURSION_ALBUM_LONGLINE = "";
    const INCURSION_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    LootArr.push(new DNELootCard("album-incursion", `THE INCURSION`, INCURSION_ALBUM_LONGLINE, "img/sound/album-incursion.jpg", 4, 300, "Альбом, 34m of Electro Industrial Techno", INCURSION_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/lyd23cDcqT0"));

    // Come Over
    //
    //
    const COME_OVER_VINYL_LONGLINE = "";
    const COME_OVER_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-come-over", `Come Over`, COME_OVER_VINYL_LONGLINE, "img/sound/vinyl-come-over.jpg", 5, 1000, "Платівка, 35m of Lo-Fi Indie<br>Psychodelic Rock", COME_OVER_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/S-WKoSNivXs?si=w8mooUO6PUv1VhzK"));

    // ANATOMY VOL.3
    //
    //
    const ANATOMY_VOL3_ALBUM_LONGLINE = "";
    const ANATOMY_VOL3_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    LootArr.push(new DNELootCard("album-anatomy-vol-3", `ANATOMY VOL.3`, ANATOMY_VOL3_ALBUM_LONGLINE, "img/sound/album-anatomy-vol-3.jpg", 3, 1000, "Альбом, 107m of Electro Industrial Techno", ANATOMY_VOL3_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/LuUV1IsQJq4"));

    // FOR FUCK SAYK
    //
    //
    const FORFUCKSAYK_MIX_LONGLINE = "";
    const FORFUCKSAYK_MIX_SHORTLINE = `${STRINGS.DEMO_LONGLINE_SHORT_3}`;
    LootArr.push(new DNELootCard("demo-forfucksayk", `FORFUCKSAYK`, FORFUCKSAYK_MIX_LONGLINE, "img/sound/demo-forfucksayk.jpg", 3, 0, "Демо, 30m of Dark Lo-Fi", FORFUCKSAYK_MIX_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/viberoom_io/listen-to-lofi-hip-hop-mix-by-sayk"));

    // sophisticated sekia sessions
    //
    //
    const SEKIA_SESSIONS_LONGLINE = "";
    const SEKIA_SESSIONS_SHORTLINE = `${STRINGS.DEMO_LONGLINE_SHORT_3}`;
    LootArr.push(new DNELootCard("demo-sekia-sessions", `sophisticated sekia sessions`, SEKIA_SESSIONS_LONGLINE, "img/sound/demo-sekia-sessions.jpg", 6, 0, "Демо, 45m of Electronic Trip-Hop", SEKIA_SESSIONS_SHORTLINE, "", true, true, "sound", "https://youtu.be/MtZz9pxe-wM"));

    // Passover
    //
    //
    const PASSOVER_VINYL_LONGLINE = "";
    const PASSOVER_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-passover", `Passover`, PASSOVER_VINYL_LONGLINE, "img/sound/vinyl-passover.jpg", 5, 1400, "Платівка, 59m of Psychodelic Rock<br>Alternative Indie", PASSOVER_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/iz1nq1hmVCE"));

    // INNER FLAME
    //
    //
    const INNER_FIRE_ALBUM_LONGLINE = "";
    const INNER_FIRE_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    LootArr.push(new DNELootCard("album-inner-flame", `INNER FLAME`, INNER_FIRE_ALBUM_LONGLINE, "img/sound/album-inner-flame.jpg", 8, "NYP", "Альбом, 37m of Experimental Chillout Vaporwave", INNER_FIRE_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/OPBpJyZLqVM"));

    // PYROMANIACS
    //
    //
    const PYROMANIACS_ALBUM_LONGLINE = "";
    const PYROMANIACS_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    LootArr.push(new DNELootCard("album-pyromaniacs", `PYROMANIACS`, PYROMANIACS_ALBUM_LONGLINE, "img/sound/album-pyromaniacs.jpg", 7, "NYP", "Альбом, 56m of Electronic Synthwave Vaporwave", PYROMANIACS_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/S9NbJFmvVIs"));

    // Flower Boy
    //
    //
    const FLOWER_BOY_VINYL_LONGLINE = "";
    const FLOWER_BOY_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-flower-boy", "Flower Boy", FLOWER_BOY_VINYL_LONGLINE, "img/sound/vinyl-flower-boy.jpg", 7, 1100, "Платівка, 46m of Progressive Hip-Hop", FLOWER_BOY_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/FcBfSwxOVUM"));

    // Платівка IGOR
    LootArr.push(new DNELootCard("vinyl-igor", "IGOR", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/vinyl-igor.png", 7, 900, "Платівка, 39m of Hip-Hop", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtu.be/wfGuSP7PvW4"));

    // Платівка Nevermind
    LootArr.push(new DNELootCard("vinyl-nevermind", "Nevermind", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/vinyl-nevermind.png", 7, 1000, "Платівка, 49m of Grange Alternative", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtu.be/DDwcMbu8fBI"));

    // Платівка Mordechai
    LootArr.push(new DNELootCard("vinyl-mordechai", "Mordechai", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/vinyl-mordechai.png", 6, 1100, "Платівка, 43m of Indie", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtu.be/51aa2rlmaAE"));

    // Plantasia
    //
    //
    const PLANTASIA_ALBUM_LONGLINE = "";
    const PLANTASIA_ALBUM_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-plantasia", `Plantasia`, PLANTASIA_ALBUM_LONGLINE, "img/sound/vinyl-plantasia.png", 7, 800, "Альбом, 31m of Ambient", PLANTASIA_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/SZkR3PyHTs0"));

    // Salad Days
    //
    //
    const SALAD_DAYS_VINYL_LONGLINE = "";
    const SALAD_DAYS_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-salad-days", "Salad Days", SALAD_DAYS_VINYL_LONGLINE, "img/sound/vinyl-salad-days.jpg", 6, 10000, "Платівка, 34m of Chillout Rock<br>Psychodelic Lo-fi", SALAD_DAYS_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/0HQqXllXpfQ"));

    // 1AM CHILL SESSION
    //
    //
    const I_AM_CHILL_SESSION_VINYL_LONGLINE = "";
    const I_AM_CHILL_SESSION_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-i-am-chill-session", "1AM CHILL SESSION", I_AM_CHILL_SESSION_VINYL_LONGLINE, "img/sound/vinyl-i-am-chill-session--small.png", 8, 1600, "Платівка, 160m of Chillout Ambient", I_AM_CHILL_SESSION_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/TlWYgGyNnJo"));

    LootArr.push(new DNELootCard("album-death-lessons", "DEATH LESSONS", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-death-lessons.jpg", 5, 500, "Платівка, 13m of Acid Techno", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtu.be/79VEr-S7PXw"));

    LootArr.push(new DNELootCard("vinyl-flying-away", "FLYING AWAY", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/vinyl-flying-away.png", 5, 1800, "Платівка, 46m of Experimental Psychodelic Electronic", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtu.be/T_Ne2Zs5754"));

    // Sleepwalking
    //
    //
    const SLEEPWALKING_VINYL_LONGLINE = "";
    const SLEEPWALKING_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-sleepwalking", "Sleepwalk<br>ing", SLEEPWALKING_VINYL_LONGLINE, "img/sound/vinyl-sleepwalking.jpg", 4, 4000, "Платівка, 40m of Indie Rock Synth-pop", SLEEPWALKING_VINYL_SHORTLINE, "", true, true, "sound", "https://youtube.com/playlist?list=PLy0AuyZgWahFSiI_2JofKeiG5W-goqhps&si=ZoA7PkMpHtUwMUn-"));

    // Bless vol.2
    //
    //
    const BLESS_VOL2_LONGLINE = "";
    const BLESS_VOL2_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("album-bless-vol-2", "Bless vol.2", BLESS_VOL2_LONGLINE, "img/sound/vinyl-bless-vol-2.png", 7, 1300, "Платівка, 217m of Lo-Fi Hip-Hop Jazz", BLESS_VOL2_SHORTLINE, "", true, true, "sound", "https://youtu.be/oJuP-4Hsvkg"));

    // Платівка Half Age
    LootArr.push(new DNELootCard("vinyl-half-age", "Half Age", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/vinyl-half-age.png", 5, 2800, "Платівка, 36m of New-Age Hi-Fi Electronic Synth-pop", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtu.be/bf3-Emt7s0U"));


    // Le jardin de Lucy
    //
    //
    const LUCY_VINYL_LONGLINE = "";
    const LUCY_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-le-jardin-de-lucy", "Le jardin de Lucy", LUCY_VINYL_LONGLINE, "img/sound/vinyl-le-jardin-de-lucy.jpg", 5, 1200, "Платівка, 57m of Electronic Dub", LUCY_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/Ljw5eJdO4kQ"));

    // The Eternal Present
    //
    //
    const ETERNAL_PRESENT_VINYL_LONGLINE = "";
    const ETERNAL_PRESENT_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-eternal-present", "The Eternal Present", ETERNAL_PRESENT_VINYL_LONGLINE, "img/sound/vinyl-eternal-present.jpg", 4, 1400, "Платівка, 39m of Electronic Industrial", ETERNAL_PRESENT_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/NWSM4y1PAyo"));

    // Erased from history
    //
    //
    const ERASED_FROM_HISTORY_VINYL_LONGLINE = "";
    const ERASED_FROM_HISTORY_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-erased-from-history", "Erased from history", ERASED_FROM_HISTORY_VINYL_LONGLINE, "img/sound/vinyl-erased-from-history.jpg", 6, 1600, "Платівка, 25m of Electronic Breakbeat Ghost Vaporwave", ERASED_FROM_HISTORY_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/wfz0mHr5YB0"));

    // I care be cause you do
    //
    //
    const GEOGADDI_VINYL_LONGLINE = "";
    const GEOGADDI_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-geogaddi", "Geogaddi", GEOGADDI_VINYL_LONGLINE, "img/sound/vinyl-geogaddi.png", 4, 1400, "Платівка, 66m of Electronic<br>Psychodelic Downtempo IDM", GEOGADDI_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/vDkHR80rNtw"));



    // Платівка In Utero
    LootArr.push(new DNELootCard("vinyl-in-utero", "In Utero", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/vinyl-in-utero.png", 6, 11111, "Платівка, 41m of Grange", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtu.be/Y-5bmRELuts"));

    // I care be cause you do
    //
    //
    const I_CARE_BECAUSE_YOU_DO_VINYL_LONGLINE = "";
    const I_CARE_BECAUSE_YOU_DO_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-i-care-be-cause-you-do", "I care be cause you do", I_CARE_BECAUSE_YOU_DO_VINYL_LONGLINE, "img/sound/vinyl-i-care-becouse-u-do.png", 6, 1700, "Платівка, 63m of Ambient Electronic Acid Techno IDM", I_CARE_BECAUSE_YOU_DO_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/NJesxnyCMbU"));

    // CYBERPUNK 2077 VINYL 3LP SET
    //
    //
    const CYBERPUNK_TRIPLE_VINYL_LONGLINE = "";
    const CYBERPUNK_TRIPLE_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-cyberpunk-triple", "CYBERPUNK 2077 VINYL 3LP SET", CYBERPUNK_TRIPLE_VINYL_LONGLINE, "img/sound/vinyl-cyberpunk-triple.png", 5, 4200, "Платівка, 99m of Progressive Electronic Rock", CYBERPUNK_TRIPLE_VINYL_SHORTLINE, "", true, true, "sound"));

    // Платівка Slow Rush
    //
    //
    const SLOW_RUSH_VINYL_LONGLINE = "";
    const SLOW_RUSH_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-slow-rush", "Slow Rush", SLOW_RUSH_VINYL_LONGLINE, "img/sound/vinyl-slow-rush.png", 5, 1900, "Платівка, 57m of Electronic<br>Psychodelic Synth-Pop", SLOW_RUSH_VINYL_SHORTLINE, "", true, true, "sound", "https://youtube.com/playlist?list=PLr9Yx3twkzdK2GF5xVgpsM8PvREBdzf5c&si=m0vvZTihFrXxLkBt"));


    // Платівка Currents
    //
    //
    const CURRENTS_VINYL_LONGLINE = "";
    const CURRENTS_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-currents", "Currents", CURRENTS_VINYL_LONGLINE, "img/sound/vinyl-currents.png", 9, 1800, "Платівка, 51m of Synth-Pop<br>Progressive Psychodelic", CURRENTS_VINYL_SHORTLINE, "", true, true, "sound", "https://youtube.com/playlist?list=PL81_CtYCym28qkVe3nVMRG7hMR5_Ky3Hf&si=vupJtx4HKQ1lffT3"));



    // Платівка AM
    LootArr.push(new DNELootCard("vinyl-am", "AM", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/vinyl-am.png", 5, 1700, "Платівка, 41m of Indie Rock", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtu.be/bpOSxM0rNPM"));

    // Платівка Delicate Sound of Thunder
    LootArr.push(new DNELootCard("vinyl-delicate-sound-of-thunder", "Delicate Sound<br> of Thunder", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/vinyl-delicate-sound-of-thunder.png", 6, "NYP", "Платівка, 104m of Progressive Psychodelic Rock", STRINGS.VINYL_LONGLINE, "", true, true, "sound"));

    // Платівка DOORS
    //
    //
    const THE_VERY_BEST_OF_THE_DOORS_VINYL_LONGLINE = "";
    const THE_VERY_BEST_OF_THE_DOORS_VINYL_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-the-very-best-of-the-doors", "DOORS", THE_VERY_BEST_OF_THE_DOORS_VINYL_LONGLINE, "img/sound/vinyl-the-very-best-of-the-doors.png", 2, 10000, "Платівка, 78m of Progressive<br>Psychodelic Rock", THE_VERY_BEST_OF_THE_DOORS_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/UYcjlmeRNTo"));


    LootArr.push(new DNELootCard("album-aleph", "Aleph", "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/vinyl-aleph.jpg", 7, 7777, "Альбом, 54m of Progressive Electronic", STRINGS.VINYL_LONGLINE, "", true, true, "sound", "https://youtube.com/playlist?list=PLZWELT7lB9dpsb50JJ8tpv_oP72WHwU4P&si=QOJ0ZahlUwl0usw2"));

    // Альбом NOCTURNAL
    LootArr.push(new DNELootCard("album-hentai", "HENTAI-JAZZ [DELUXE]", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-hentai.jpg", 7, 300, "Альбом, 62m of Vaporwave Jazz", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/DthOCASDg1c"));

    // Plastic Beach
    //
    //
    const PLASTIC_BEACH_ALBUM_LONGLINE = "";
    const PLASTIC_BEACH_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    LootArr.push(new DNELootCard("album-plastic-beach", "Plastic Beach", PLASTIC_BEACH_ALBUM_LONGLINE, "img/sound/album-plastic-beach.jpg", 4, 500, "Альбом, 55m Electronic Funk Hip-Hop", PLASTIC_BEACH_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/8hfkE62WUJk"));

    LootArr.push(new DNELootCard("album-internet-of-ears", "INTERNET OF EARS", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-internet-of-ears.jpg", 7, 400, "Альбом, 49m of Dark Industrial", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/xrT3DcRqR6E"));

    LootArr.push(new DNELootCard("album-nocturnal", "NOCTURNAL", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-nocturnal.jpg", 9, 300, "Альбом, 37m of Industrial Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/yUau3wleuXc"));
    // Альбом LOVE MARKET
    LootArr.push(new DNELootCard("album-love-market", "LOVE MARKET", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-love-market.jpg", 7, 300, "Альбом, 34m of Synthpunk Techno", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/J1RC1OAkGKY"));
    LootArr.push(new DNELootCard("album-various-i", "VARIOUS I", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-various-i.jpg", 5, 400, "Альбом, 44m of Coldwave Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/aVHEZsX5Mmk"));
    LootArr.push(new DNELootCard("album-vlad-tapes", "VLAD TAPES", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-vlad-tapes.jpg", 7, 400, "Альбом, 94m of Coldwave<br>Synthpunk Techno", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/9yb2l9Th9bs"));
    LootArr.push(new DNELootCard("album-latent-alters", "LATENT ALTERS", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-latent-alters.jpg", 8, 500, "Альбом, 99m of  Dark Downtempo Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/tIGYzdgSB7Y"));
    LootArr.push(new DNELootCard("album-reinvent", "REINVENT", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-reinvent.jpg", 8, 400, "Альбом, 25m of EBM<br>Industrial Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/V7qZiduqfZw"));

    LootArr.push(new DNELootCard("album-motion-regime", "MOTION PICTURES REGIME", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-motion-pictures-regime.jpg", 8, 700, "Альбом, 42m of Downtempo Coldwave Breakbeat", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/oh4FnH2OJhs"));
    LootArr.push(new DNELootCard("album-neon-skydeath", "NEON SKYDEATH", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-neon-skydeath.png", 7, "NYP", "Альбом, 26m of Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/XPFgXsF-QkA"));

    LootArr.push(new DNELootCard("album-screening-plexus", "SCREENING PLEXUS", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-screening-plexus.jpg", 7, 1000, "Альбом, 42m of Dark Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/-sFuEY-QMQA"));

    LootArr.push(new DNELootCard("album-eternal-return", "ETERNAL RETURN", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-eternal-return.jpg", 6, 300, "Альбом, 42m of Electro Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/1C3tLxvVC8g"));

    LootArr.push(new DNELootCard("album-bunker-island", "BUNKER ISLAND", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-bunker-island.jpg", 5, 300, "Альбом, 30m of Electro Dungeon Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/r7X6o9f2_Q0"));

    LootArr.push(new DNELootCard("album-various-ii", "VARIOUS II", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-various-2.png", 4, 500, "Альбом, 57m of Electro Coldwave Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/p5QcUK8nVBk"));

    LootArr.push(new DNELootCard("album-noir-times", "NOIR TIMES", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-noir-times.jpg", 7, 300, "Альбом, 39m of Hardcore Industrial Synthwave", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/1DDF0vSpFeo"));

    LootArr.push(new DNELootCard("album-latex-and-leather", "LATEX & LEATHER", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-latex-and-leather.jpg", 5, 200, "Альбом, 13m of Industrial Coldwave Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/Ov91awg_Qx0"));

    // CYBERPUNK 2077: PHANTOM LIBERTY
    //
    //
    const PHANTOM_LIBERTY_ALBUM_LONGLINE = "";
    const PHANTOM_LIBERTY_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE_2}`;
    LootArr.push(new DNELootCard("album-phantom-liberty", "CYBERPUNK 2077: PHANTOM LIBERTY", PHANTOM_LIBERTY_ALBUM_LONGLINE, "img/sound/album-phantom-liberty.png", 6, 0, "Альбом, 54m Trip-Hop<br>Electronic Synthpunk", PHANTOM_LIBERTY_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/kHfhACP7ekY"));

    // VESSEL
    //
    //
    const VESSEL_ALBUM_LONGLINE = "";
    const VESSEL_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    LootArr.push(new DNELootCard("album-vessel", "VESSEL", VESSEL_ALBUM_LONGLINE, "img/sound/album-vessel.jpg", 8, 400, "Альбом, 31m Electronic Ambient IDM", VESSEL_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtube.com/playlist?list=OLAK5uy_nfqbc26YAtKKa4IpRLrWcTyhcaS6ws6_Q&si=q5mMofmeYJGrYOrf"));

    // Демо Jing
    LootArr.push(new DNELootCard("demo-jing", "Jing", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-jing.jpg", 3, 500, "Демо, 54m of Experimental Techno", STRINGS.DEMO_LONGLINE_SHORT, "", true, true, "sound", "https://www.youtube.com/live/z0iYJX-zTeg"));
    // Демо Courtesy
    LootArr.push(new DNELootCard("demo-courtesy", "Courtesy", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-сourtesy.jpg", 3, 500, "Демо, 60m of Breakbeat Electro Acid", STRINGS.DEMO_LONGLINE_SHORT, "", true, true, "sound", "https://www.youtube.com/live/yEgV-alFoIU"));

    const NITE_FLEIT_DEMO_LONGLINE = "";
    const NITE_FLEIT_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-nite-fleit", "Nite Fleit", NITE_FLEIT_DEMO_LONGLINE, "img/sound/demo-nite-fleit.jpg", 4, 500, "Демо, 54m of Electro Techno Acid", NITE_FLEIT_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/_KlvpRSSU8A"));

    const DJ_PERCEPTION_DEMO_LONGLINE = "";
    const DJ_PERCEPTION_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-dj-perception", "DJ Perception", DJ_PERCEPTION_DEMO_LONGLINE, "img/sound/demo-dj-perception.jpg", 4, "1K", "Демо, 56m of Garage House Breakbeat", DJ_PERCEPTION_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/8HoAazS_12Y"));

    const WALLFLOWER_DEMO_LONGLINE = "";
    const WALLFLOWER_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-wallflower", "Wallflower", WALLFLOWER_DEMO_LONGLINE, "img/sound/demo-wallflower.jpg", 4, "5K", "Демо, 55m of Experimental Techno", WALLFLOWER_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/GwCw9WShNYM"));

    LootArr.push(new DNELootCard("demo-jelz", "Jelz", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-jelz.jpg", 5, 500, "Демо, 55m of Techno House Acid", STRINGS.DEMO_LONGLINE_SHORT, "", true, true, "sound", "https://youtu.be/bmkUxv_oK68"));

    LootArr.push(new DNELootCard("demo-smith", "Paris Smith", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-paris-smith.jpg", 5, 500, "Демо, 54m of Industrial Techno EBM", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://www.youtube.com/live/oMIDuNHIxhY"));

    const MADNESS_DEMO_LONGLINE = "";
    const MADNESS_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-madness", "Operation Madness", MADNESS_DEMO_LONGLINE, "img/sound/demo-madness.jpg", 5, 500, "Демо, 55m of Electro Synthwave Acid", MADNESS_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/GuQ60ZlYDlo"));

    const MURAVYOVA_DEMO_LONGLINE = "";
    const MURAVYOVA_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-muravyova", "Nastya Muravyova", MURAVYOVA_DEMO_LONGLINE, "img/sound/demo-muravyova.jpg", 7, "5K", "Демо, 54m of Industrial Techno", MURAVYOVA_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/WEBfIRFuTUw"));

    LootArr.push(new DNELootCard("demo-tweeman", "TWEEMAN", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі навіть вдасться знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-tweeman.jpg", 3, 500, "Демо, 56m of Techno Electro Acid", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://www.youtube.com/live/EMliZzkRHCg"));

    LootArr.push(new DNELootCard("demo-lolsnake", "Lolsnake", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-lolsnake.jpg", 5, 500, "Демо, 55m of Experimental Techno", STRINGS.DEMO_LONGLINE_SHORT, "", true, true, "sound", "https://www.youtube.com/live/qv9uFfDZ3kM"));

    LootArr.push(new DNELootCard("demo-marum-future", "Marum B2B High Future", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі навіть вдасться знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-marum-future.jpg", 4, "1K", "Демо, 122m of Experimental Techno", STRINGS.DEMO_LONGLINE_SHORT, "", true, true, "sound", "https://www.youtube.com/live/LCIEDrKtsS8"));

    const SOL_ORTEGA_DEMO_LONGLINE = "";
    const SOL_ORTEGA_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-sol-ortega", "Sol Ortega", SOL_ORTEGA_DEMO_LONGLINE, "img/sound/demo-sol-ortega.jpg", 4, "5K", "Демо, 55m of Techno House Acid", SOL_ORTEGA_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/8VDVV8peqT8"));

    const FILMMAKER_DEMO_LONGLINE = "";
    const FILMMAKER_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-filmmaker", "Filmmaker", FILMMAKER_DEMO_LONGLINE, "img/sound/demo-filmmaker.png", 6, "5K", "Демо, 55m of Electro Synthwave EBM", FILMMAKER_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/HbYqImVy8XQ"));

    const BEAUCAMP_DEMO_LONGLINE = "";
    const BEAUCAMP_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-isabelle-beaucamp", "Isabelle Beaucamp", BEAUCAMP_DEMO_LONGLINE, "img/sound/demo-isabelle-beaucamp.jpg", 6, "4K", "Демо, 55m of Experimental Techno", BEAUCAMP_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/wLwooCfQlko?si=0g_F1V5Be2MY50to"));

    const EID5555_DEMO_LONGLINE = "";
    const EID5555_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-eid55558", "eid55558.55", EID5555_DEMO_LONGLINE, "img/sound/demo-eid55558.png", 7, 500, "Демо, 59m of Acid Electro EBM", EID5555_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/NQM0dY4UrGQ"));

    const FRACTURE_DEMO_LONGLINE = "";
    const FRACTURE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-fracture", "Fracture", FRACTURE_DEMO_LONGLINE, "img/sound/demo-fracture.jpg", 7, "4K", "Демо, 55m of DnB Jungle Breakbeat", FRACTURE_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/ah6g-aoXcY8"));

    const SIMONA_DEMO_LONGLINE = "";
    const SIMONA_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-sim0ne", "Sim0ne", SIMONA_DEMO_LONGLINE, "img/sound/demo-sim0ne.jpg", 7, "1K", "Демо, 54m of House Garage Breakbeat", SIMONA_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/JQhB2GdEDRE"));

    const DJ_NINA_EBA_DEMO_LONGLINE = "";
    const DJ_NINA_EBA_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-dj-nina-eba", "DJ Nina Eba", DJ_NINA_EBA_DEMO_LONGLINE, "img/sound/demo-nina-eba.png", 7, "1K", "Демо, 55m of Techno Breakbeat Ambient", DJ_NINA_EBA_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/3JBIviMh7vs"));

    const ROUGE_DEMO_LONGLINE = "";
    const ROUGE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-rouge", "ROÜGE", ROUGE_DEMO_LONGLINE, "img/sound/demo-rouge.jpg", 7, "6K", "Демо, 55m of Techno Industrial Acid", ROUGE_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/t_8-teUU_yg?si=VALyip9-X83Nc97N"));

    const YOUSUKE_YUKIMATSU_DEMO_LONGLINE = "";
    const YOUSUKE_YUKIMATSU_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-yousuke-yukimatsu", "¥ØU$UK€ ¥UK1MAT$U", YOUSUKE_YUKIMATSU_DEMO_LONGLINE, "img/sound/demo-yousuke-yukimatsu.png", 8, "1K", "Демо, 55m of Experimental Industrial", YOUSUKE_YUKIMATSU_DEMO_SHORTLINE, "", true, true, "sound", "https://www.youtube.com/live/qhqGGCbQEuI"));

    // Thom Yorke
    //
    //
    const YORKE_DEMO_LONGLINE = "";
    const YORKE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-thom-yorke", "Thom Yorke", YORKE_DEMO_LONGLINE, "img/sound/demo-thom-yorke.jpg", 8, "10K", "Демо, 32m of Experimental Techno", YORKE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/qt-ohn5C3kU"));

    // Демо Autonomous aka Slam
    LootArr.push(new DNELootCard("demo-autonomous-aka-slam", "Autonomous aka Slam", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі навіть вдасться знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-autonomus.jpg", 8, "2K", "Демо, 56m of Industrial Techno EBM", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://www.youtube.com/live/grVIOY9Mv88"));

    // VOYAGER
    //
    //
    const VOYAGER_DEMO_LONGLINE = "";
    const VOYAGER_DEMO_SHORTLINE = `${STRINGS.VINYL_LONGLINE}`;
    LootArr.push(new DNELootCard("vinyl-voyager", "VOYAGER", VOYAGER_DEMO_LONGLINE, "img/sound/vinyl-voyager.png", 6, 0, "Платівка, 42m of Electro House Techno", VOYAGER_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/5ZbMh24vmpU?si=H2TAHg-h0YzbPVKj"));

    // Bless
    //
    //
    const BLESS_LONGLINE = "";
    const BLESS_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    LootArr.push(new DNELootCard("album-bless-vol-1", "Bless vol.1", BLESS_LONGLINE, "img/sound/album-bless-vol-1.jpg", 7, 0, "Альбом, 199m of Lo-Fi Hip-Hop Jazz", BLESS_SHORTLINE, "", true, true, "sound", "https://youtu.be/WWZAwSWSLPo"));

    LootArr.push(new DNELootCard("demo-sub-zero", "Sab Zero", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-sub-zero.jpg", 9, 0, "Демо, 12m of Hardcore Techno Gabber", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://soundcloud.com/zzza4em/sets/mp3-7"));

    // Артем Ікра каже Так
    //
    //
    const DEMO_IKRA_SAYS_YES_LONGLINE = "";
    const DEMO_IKRA_SAYS_YES_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-ikra-says-yes", "Артем Ікра каже Так", DEMO_IKRA_SAYS_YES_LONGLINE, "img/sound/demo-ikra-says-yes.jpg", 6, "NYP", "Демо, 57m of Experimental Electro", DEMO_IKRA_SAYS_YES_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/yesbelgrade/artem-ikra-says-yes"));

    // PHONK CLOUD
    //
    //
    const DEMO_PHONK_CLOUD_LONGLINE = "";
    const DEMO_PHONK_CLOUD_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-phonk-cloud", "PHONK CLOUD", DEMO_PHONK_CLOUD_LONGLINE, "img/sound/demo-phonk-cloud.jpg", 7, "NYP", "Демо, 10m of Cloud Phonk", DEMO_PHONK_CLOUD_SHORTLINE, "", true, true, "sound", "https://youtu.be/a1m1-4JVyAM"));



    // Phonk Fridays 010
    //
    //
    const HIGH_ALONE_DEMO_LONGLINE = "";
    const HIGH_ALONE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-high-alone", "HIGH ALONE", HIGH_ALONE_DEMO_LONGLINE, "img/sound/demo-high-alone.jpg", 6, 0, "Демо, 31m of  of Dark Phonk Trap", HIGH_ALONE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/VSYceN99B44"));


    LootArr.push(new DNELootCard("demo-dark-trap-777", "DARK TRAP.MP4: chapter 777", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-dark-trap-777.jpg", 6, 0, "Демо, 43m of Dark Trap", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://youtu.be/fqQ33fAGWfE"));
    LootArr.push(new DNELootCard("demo-dark-trap-4", "DARK TRAP.MP4: chapter 4", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-dark-trap-4.png", 6, 0, "Демо, 35m of Dark Trap", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://youtu.be/OWcDNVDsIJw"));

    // World of horror
    //
    //
    const WORLD_OF_HORROR_DEMO_LONGLINE = "";
    const WORLD_OF_HORROR_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-world-of-horror", "World of horror", WORLD_OF_HORROR_DEMO_LONGLINE, "img/sound/demo-world-of-horror.jpg", 6, 0, "Демо, 87m of Dark Lo-Fi", WORLD_OF_HORROR_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/3eTj9l8uCW4"));



    // FIGHT CLUB
    //
    //
    const FIGHT_CLUB_DEMO_LONGLINE = "";
    const FIGHT_CLUB_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-fight-club", "FIGHT CLUB", FIGHT_CLUB_DEMO_LONGLINE, "img/sound/demo-fight-club.jpg", 6, 0, "Демо, 60m of Dark Electronic", FIGHT_CLUB_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/4nRm9Khlz6o"));


    LootArr.push(new DNELootCard("demo-micks-tape", "The Mick's Tape", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "img/sound/demo-micks-tape.jpg", 8, 0, "Демо, 54m of Dark Synth Rock", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/QH0MkaXpwDQ"));

    // Journey into abstract
    //
    //
    const JOURNEY_INTO_ABSTRACT_DEMO_LONGLINE = "";
    const JOURNEY_INTO_ABSTRACT_DEMO_SHORTLINE = ``;
    LootArr.push(new DNELootCard("demo-journey-into-abstract", "A Journey Into Abstract Hip-Hop", JOURNEY_INTO_ABSTRACT_DEMO_LONGLINE, "img/sound/album-journey-into-abstract.png", 8, "NYP", "Альбом, 70m of Abstract Hip-Hop", JOURNEY_INTO_ABSTRACT_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/3q8nGnls1Ow"));


    // Journey into abstract
    //
    //
    const DEEP_INTO_YOUR_EYES_DEMO_LONGLINE = "";
    const DEEP_INTO_YOUR_EYES_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-deep-into-your-eyes", "Deep into your eyes", DEEP_INTO_YOUR_EYES_DEMO_LONGLINE, "img/sound/demo-deep-into-your-eyes.jpg", 3, 0, "Альбом, 147m of Psychodelic Chillout", DEEP_INTO_YOUR_EYES_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/csOMNHiV7Yo"));

    LootArr.push(new DNELootCard("album-iron-horse", "Iron Horse", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-iron-horse.jpg", 3, 0, "Альбом, 44m of Psychodelic Rock", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/-gXrS6eKfjk"));
    LootArr.push(new DNELootCard("demo-420mix", "420MIX💨", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "img/sound/demo-420-mix.jpg", 7, 0, "Демо, 27m of Lo-Fi Trippy Hip-Hop", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/n0kyzGMe-mM"));

    // Phonk Fridays 010
    //
    //
    const CYBER_PHONK_DEMO_LONGLINE = "";
    const CYBER_PHONK_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-cyber-phonk", "Cyberphonk", CYBER_PHONK_DEMO_LONGLINE, "img/sound/demo-cyber-phonk.jpg", 7, 0, "Демо, 28m of  of Phonk Trap Electronic", CYBER_PHONK_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/OhvmwTpiRIw"));

    LootArr.push(new DNELootCard("demo-trappin-japan", "TRAPPIN IN JAPAN", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", `img/sound/demo-trappin-in-japan.jpg`, 9, 0, "Демо, 56m of Phonk<br> Vaporwave Trap", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/T6w7MABthn4"));
    LootArr.push(new DNELootCard("demo-trappin-japan-15", "TRAPPIN IN JAPAN 15", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "img/sound/demo-trappin-in-japan-15.jpg", 6, 0, "Демо, 56m of Phonk<br> Vaporwave Trap", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/k-5YFwXyAjc"));
    // LootArr.push(new DNELootCard("demo-trappin-japan-18", "TRAPPIN IN JAPAN 18", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "img/sound/demo-trappin-in-japan-18.jpg", 1, 0, "Демо, 68m of Lo-Fi<br> Vapor Trap", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/-mD_nqa2KJU"));

    // TRAPPIN IN JAPAN 2099
    //
    //
    const TRAPPIN_IN_JAPAN_2099_DEMO_LONGLINE = "";
    const TRAPPIN_IN_JAPAN_2099_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-trappin-japan-2099", "TRAPPIN IN JAPAN 2099", TRAPPIN_IN_JAPAN_2099_DEMO_LONGLINE, "img/sound/demo-trappin-japan-2099.jpg", 7, 0, "Демо, 66m of  of Phonk Trap", TRAPPIN_IN_JAPAN_2099_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/ewpL0YWBy_o"));


    // TRAPPIN IN JAPAN 23
    //
    //
    const TRAPPIN_IN_JAPAN_23_DEMO_LONGLINE = "";
    const TRAPPIN_IN_JAPAN_23_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-trappin-japan-23", "TRAPPIN IN JAPAN 23", TRAPPIN_IN_JAPAN_23_DEMO_LONGLINE, "img/sound/demo-trappin-in-japan-23.jpg", 5, 0, "Демо, 66m of  of Phonk Vaporwave Trap", TRAPPIN_IN_JAPAN_23_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/ZGjkh5VeIxs"));

    // Phonk Fridays 010
    //
    //
    const TRAPPIN_IN_JAPAN_24_DISK_1_DEMO_LONGLINE = "";
    const TRAPPIN_IN_JAPAN_24_DISK_1_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-trappin-japan-24-disk-1", "TRAPPIN IN JAPAN 24 DISK 1", TRAPPIN_IN_JAPAN_24_DISK_1_DEMO_LONGLINE, "img/sound/demo-trappin-japan-24-disk-1.jpg", 8, 0, "Демо, 45m of  of Phonk Vaporwave Trap", TRAPPIN_IN_JAPAN_24_DISK_1_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/cFH7-lE83io"));


    LootArr.push(new DNELootCard("demo-cyberdream", "CYBER DREAM", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", `img/sound/demo-cyberdream.jpg`, 6, 0, "Демо, 120m of Chillout Synthwave Vaporwave", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/yhCuCqJbOVE"));


    // AMBIENT TECHNO MIX 003
    //
    //
    const AMBIENT_TECHNO_003_LONGLINE = "";
    const AMBIENT_TECHNO_003_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-ambient-techno-003", "AMBIENT TECHNO MIX 003", AMBIENT_TECHNO_003_LONGLINE, "img/sound/demo-ambient-techno-003.jpg", 6, 0, "Демо, 96m of Ambient Techno", AMBIENT_TECHNO_003_SHORTLINE, "", true, true, "sound", "https://youtu.be/_TlmWBlYC8Q"));


    // Patience
    //
    //
    const DEMO_PATIENCE_LONGLINE = "";
    const DEMO_PATIENCE_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-patience", "P A T I E N C E", DEMO_PATIENCE_LONGLINE, "img/sound/demo-patience.jpg", 7, 0, "Демо, 39m of Chillout Synthwave", DEMO_PATIENCE_SHORTLINE, "", true, true, "sound", "https://youtu.be/Vd-tURJ4ThM"));

    // Bardcore for Dungeons & Dragons Chaos
    //
    //
    // const BARDCORE_FOR_DND_DEMO_LONGLINE = "";
    // const BARDCORE_FOR_DND_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE_SHORT}`;
    // LootArr.push(new DNELootCard("demo-bardcore-for-dnd", "Bardcore for Dungeons & Dragons Chaos", BARDCORE_FOR_DND_DEMO_LONGLINE, "img/sound/demo-bardcore-for-dungeons.jpg", 5, 0, "Демо, 79m of Bardcore", BARDCORE_FOR_DND_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/dd-qazuihVk"));


    // Eighties Music... but it has been turned medieval!
    //
    //
    // const BARDCORE_80_DEMO_LONGLINE = "";
    // const BARDCORE_80_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE_SHORT}`;
    // LootArr.push(new DNELootCard("demo-medieval-80", "Eighties Music... but it has been turned medieval!", BARDCORE_80_DEMO_LONGLINE, "img/sound/demo-medieval-80.jpg", 3, 0, "Демо, 92m of Bardcore Ambient", BARDCORE_80_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/d47Wr2Gcpko"));

    // Dr. Dre Beats but they're MEDIEVAL
    //
    //
    // const MEDIAEVAL_DRE_DEMO_LONGLINE = "";
    // const MEDIAEVAL_DRE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    // LootArr.push(new DNELootCard("demo-medieval-dre", "Dr. Dre Beats but they're MEDIEVAL", MEDIAEVAL_DRE_DEMO_LONGLINE, "img/sound/demo-medieval-dr-dre.jpg", 4, 0, "Демо, 58m of Bardcore Hip-Hop", MEDIAEVAL_DRE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/R1rVTOHWhYc"));

    // Anathema
    //
    //
    const ANATHEMA_ALBUM_LONGLINE = "";
    const ANATHEMA_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    LootArr.push(new DNELootCard("album-anathema", "Anathema", ANATHEMA_ALBUM_LONGLINE, "img/sound/album-anathema.jpg", 7, 0, "Альбом, 47m of Trip-Hop<br>Vaporwave Downtempo", ANATHEMA_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/DjU2P02YZpE"));

    // Anathema
    //
    //
    const ETERNITY_OF_PAIN_ALBUM_LONGLINE = "";
    const ETERNITY_OF_PAIN_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    const ETERNITY_OF_PAIN_ALBUM_IMG_ID = `110vh8sqktvTn1EewRfoS1q6wOUULY5Ok`;
    const ETERNITY_OF_PAIN_ALBUM_IMG = `https://drive.google.com/uc?id=${ETERNITY_OF_PAIN_ALBUM_IMG_ID}`;

    LootArr.push(new DNELootCard("album-eternity-of-pain", "Eternity of pain", ETERNITY_OF_PAIN_ALBUM_LONGLINE, "img/sound/album-eternity-of-pain.jpg", 5, 0, "Альбом, 56m of Experimental Industrial Vaporwave", ETERNITY_OF_PAIN_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/m1dPbco7dok"));

    // Lost soul
    //
    //
    const LOST_SOUL_ALBUM_LONGLINE = "";
    const LOST_SOUL_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    LootArr.push(new DNELootCard("album-lost-soul", "Lost soul", LOST_SOUL_ALBUM_LONGLINE, "img/sound/album-lost-soul.jpg", 6, 0, "Альбом, 46m of Vaporwave<br>Abstract Hip-Hop", LOST_SOUL_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/mNH_h0KxBJ4"));



    // Sing Me a Lullaby, My Sweet Temptation
    //
    //
    const SWEET_TEMPTATION_ALBUM_LONGLINE = "";
    const SWEET_TEMPTATION_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    LootArr.push(new DNELootCard("album-sweet-temptation", "Sing Me a Lullaby, My Sweet Temptation", SWEET_TEMPTATION_ALBUM_LONGLINE, "img/sound/album-sweet-temptation.jpg", 7, 500, "Альбом, 36m of Trap Hip-Hop", SWEET_TEMPTATION_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/vkzJT3Y5n1Y"));

    //
    //
    //
    const ALBUM_I_MO_LONGER_FEAR_LONGLINE = "";
    const ALBUM_I_MO_LONGER_FEAR_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    LootArr.push(new DNELootCard("album-i-no-longer-fear", "I NO LONGER FEAR THE RAZOR GUARDING MY HEEL I,II,III,IV", ALBUM_I_MO_LONGER_FEAR_LONGLINE, "img/sound/album-no-longer-feer-the-razor.jpg", 6, 0, "Альбом, 30m of Cloud Trap Hip-Hop", ALBUM_I_MO_LONGER_FEAR_SHORTLINE, "", true, true, "sound", "https://youtu.be/n-E1gnMvzng"));

    // HOTLINE MIAMI EPIC MIX
    //
    //
    const EPIC_HOTLINE_DEMO_LONGLINE = "";
    const EPIC_HOTLINE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-epic-hotline", "HOTLINE MIAMI<br> EPIC MIX", EPIC_HOTLINE_DEMO_LONGLINE, "img/sound/demo-epic-hotline.jpg", 8, 0, "Демо, 87m of Synthwave", EPIC_HOTLINE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/bnAYRFcYIao"));

    // HOTLINE MIAMI CHILL MIX
    //
    //
    const CHILL_HOTLINE_DEMO_LONGLINE = "";
    const CHILL_HOTLINE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-chill-hotline", "HOTLINE MIAMI CHILL MIX", CHILL_HOTLINE_DEMO_LONGLINE, "img/sound/demo-chill-hotline.jpg", 6, 0, "Демо, 99m of Chillout Synthwave", CHILL_HOTLINE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/Dgy2ssdhYCg"));

    // DANGEROUS DAYS
    //
    //
    const DANGEROUS_DAYS_ALBUM_LONGLINE = "";
    const DANGEROUS_DAYS_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    LootArr.push(new DNELootCard("album-dangerous-days", "DANGEROUS DAYS", DANGEROUS_DAYS_ALBUM_LONGLINE, "img/sound/album-dangerous-days.jpg", 7, "1.2K", "Демо, 69m of Coldwave Synthwave", DANGEROUS_DAYS_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/1Vsf3zYppP4"));

    // ENIGMA
    //
    //
    const ENIGMA_ALBUM_LONGLINE = "";
    const ENIGMA_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE_2}`;
    LootArr.push(new DNELootCard("album-enigma", "ENIGMA", ENIGMA_ALBUM_LONGLINE, "img/sound/album-enigma.jpg", 9, "NYP", "Альбом, 352m of New-Age Downtempo Experimental Ambient Chillout", ENIGMA_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/7Qv6CsSEaPE"));

    // How to see through walls
    //
    //
    const HOW_TO_SEE_THROUGH_WALLS_ALBUM_LONGLINE = "";
    const HOW_TO_SEE_THROUGH_WALLS_ALBUM_SHORTLINE = ``;
    LootArr.push(new DNELootCard("album-how-to-see-through-walls", "How to see through walls", HOW_TO_SEE_THROUGH_WALLS_ALBUM_LONGLINE, "img/sound/album-how-to-see-through-walls.png", 7, 0, "Альбом, 37m of Electronic Vaporwave Ambient", HOW_TO_SEE_THROUGH_WALLS_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/eyFfubvho4M"));


    // Dub Wars
    //
    //
    const DUB_WARS_DEMO_LONGLINE = "";
    const DUB_WARS_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-dub-wars", "Dub Wars: A New Dope", DUB_WARS_DEMO_LONGLINE, "img/sound/demo-dub-wars.jpg", 6, 0, "Демо, 60m of Abstract Stoner Psychodelic Dub", DUB_WARS_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/rMqxBWj6Qj8"));

    // Best of Tour De Manège
    //
    //
    const TOUR_DE_MANEGE_DEMO_LONGLINE = "";
    const TOUR_DE_MANEGE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    const TOUR_DE_MANEGE_DEMO_IMG_ID = `103_a2PITPU0q7LVL7GRbgrt69Z7KshV3`;
    const TOUR_DE_MANEGE_DEMO_IMG = `https://drive.google.com/uc?id=${TOUR_DE_MANEGE_DEMO_IMG_ID}`;

    LootArr.push(new DNELootCard("demo-tour-de-manege", "Best of Tour De Manège", TOUR_DE_MANEGE_DEMO_LONGLINE, "img/sound/demo-tour-de-manege.jpg", 7, 0, "Демо, 91m of Trippy Abstract Hip-Hop", TOUR_DE_MANEGE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/EB6-PQ1hAVc"));

    // Gorilaz
    //
    //
    const GORILLAZ_X_HOUSE_DEMO_LONGLINE = "";
    const GORILLAZ_X_HOUSE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE_SHORT}`;
    LootArr.push(new DNELootCard("demo-gorillaz-x-house", "Gorillaz X House Mix", GORILLAZ_X_HOUSE_DEMO_LONGLINE, "img/sound/demo-gorillaz-x-house.jpg", 7, 0, "Демо, 38m of Abstract Hip-Hop House", GORILLAZ_X_HOUSE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/k8WpsRa3iB0"));

    // Take a little trip with me
    //
    //
    const TAKE_A_LITTLE_DEMO_LONGLINE = "";
    const TAKE_A_LITTLE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE_SHORT_2}`;
    LootArr.push(new DNELootCard("demo-take-a-little-trip-with-me", "Take a little trip with me", TAKE_A_LITTLE_DEMO_LONGLINE, "img/sound/demo-take-a-little-trip-with-me.jpg", 2, 0, "Демо, 128m of Psychodelic Ambient", TAKE_A_LITTLE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/keP2jfl4kT4"));

    // Psycho Tropical Berlin
    //
    //
    const PSYCHO_TROPICAL_BERLIN_ALBUM_LONGLINE = "";
    const PSYCHO_TROPICAL_BERLIN_ALBUM_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("album-psycho-tropical-berlin", "Psycho Trop<br>ical Berlin", PSYCHO_TROPICAL_BERLIN_ALBUM_LONGLINE, "img/sound/album-psycho-tropical-berlin.png", 6, 0, "Альбом, 65m of Psychodelic Electronic", PSYCHO_TROPICAL_BERLIN_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/fNQ_3TCnAyw"));

    // Nice Guys Love You - Vol. 4
    //
    //
    const NICE_GUYS_LOVE_YOU_4_DEMO_LONGLINE = "";
    const NICE_GUYS_LOVE_YOU_4_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("demo-nice-guys-love-you-4", "Nice Guys Love You Vol. 4", NICE_GUYS_LOVE_YOU_4_DEMO_LONGLINE, "img/sound/demo-nice-guys-loves-you-4.jpg", 6, 0, "Демо, 99m of Indie Lo-Fi", NICE_GUYS_LOVE_YOU_4_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/ZD37ZPMTjPw"));

    // Level Select
    //
    //
    const LEVEL_SELECT_DEMO_LONGLINE = "";
    const LEVEL_SELECT_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    LootArr.push(new DNELootCard("album-level-select", `Level Select`, LEVEL_SELECT_DEMO_LONGLINE, "img/sound/album-level-select.jpg", 6, 0, "Альбом, 57m of Dub Jungle", LEVEL_SELECT_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/Oa4MT9LPcaU"));


    // $$$$$$\   $$$$$$\  $$\   $$\ $$\   $$\ $$$$$$$\        $$$$$$$$\ $$\   $$\ $$$$$$$\
    // $$  __$$\ $$  __$$\ $$ |  $$ |$$$\  $$ |$$  __$$\       $$  _____|$$$\  $$ |$$  __$$\
    // $$ /  \__|$$ /  $$ |$$ |  $$ |$$$$\ $$ |$$ |  $$ |      $$ |      $$$$\ $$ |$$ |  $$ |
    // \$$$$$$\  $$ |  $$ |$$ |  $$ |$$ $$\$$ |$$ |  $$ |      $$$$$\    $$ $$\$$ |$$ |  $$ |
    //  \____$$\ $$ |  $$ |$$ |  $$ |$$ \$$$$ |$$ |  $$ |      $$  __|   $$ \$$$$ |$$ |  $$ |
    // $$\   $$ |$$ |  $$ |$$ |  $$ |$$ |\$$$ |$$ |  $$ |      $$ |      $$ |\$$$ |$$ |  $$ |
    // \$$$$$$  | $$$$$$  |\$$$$$$  |$$ | \$$ |$$$$$$$  |      $$$$$$$$\ $$ | \$$ |$$$$$$$  |
    //  \______/  \______/  \______/ \__|  \__|\_______/       \________|\__|  \__|\_______/

    // Tranquillitas
    //
    //
    // const TRANQUILLITAS_ALBUM_LONGLINE = "";
    // const TRANQUILLITAS_ALBUM_SHORTLINE = `${STRINGS.ALBUM_LONGLINE_2}`;
    // LootArr.push(new DNELootCard("album-tranquillitas", `Tranquilli<br>tas`, TRANQUILLITAS_ALBUM_LONGLINE, "img/sound/album-tranquillitas.jpg", 7, 600, "Платівка, 80m of Ambient Downtempo", TRANQUILLITAS_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/apXkd39xDVI"));

    // Cinco Cielos
    //
    //
    // const CINCO_CIELOS_DEMO_LONGLINE = "";
    // const CINCO_CIELOS_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE_SHORT_3}`;
    // LootArr.push(new DNELootCard("demo-cinco-cielos", `Cinco Cielos`, CINCO_CIELOS_DEMO_LONGLINE, "img/sound/demo-cinco-cielos.jpg", 3, 0, "Демо, 100m of Downtempo Chillout", CINCO_CIELOS_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/rKSOlxDvQOU"));

    // PROMENI
    //
    //
    // const PROMENI_LONGLINE = "";
    // const PROMENI_SHORTLINE = `${STRINGS.ALBUM_LONGLINE}`;
    // const PROMENI_IMG = `img/sound/album-promeni.jpg`;
    //
    // LootArr.push(new DNELootCard("album-promeni", "PROMENI", PROMENI_LONGLINE, PROMENI_IMG, 6, 0, "Альбом, 42m of Experimental<br>Psychodelic Electronic", PROMENI_SHORTLINE, "", true, true, "sound", "https://kvitnu.bandcamp.com/album/promeni"));

    // Deep Syth Journey
    //
    //
    // const DEEP_SYTH_DEMO_LONGLINE = "";
    // const DEEP_SYTH_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    // LootArr.push(new DNELootCard("demo-deep-syth-journey", "Deep Syth Journey", DEEP_SYTH_DEMO_LONGLINE, "img/sound/demo-deep-syth-journey.jpg", 6, 0, "Демо, 240m of Dark Ambient", DEEP_SYTH_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/UJ4e4XVQQcY?si=9QvLymjT5XELMtEi"));

    // VOYAGER
    //
    //
    // const HOW_TO_DISAPPEAR_DEMO_LONGLINE = "";
    // const HOW_TO_DISAPPEAR_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    // LootArr.push(new DNELootCard("demo-how-to-disappear", "How to disappear", HOW_TO_DISAPPEAR_DEMO_LONGLINE, "img/sound/demo-how-to-disappear.jpg", 7, 0, "Демо, 11m of Ambient Drone", HOW_TO_DISAPPEAR_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/rLlFWl4HTww?si=wuzZpAAUzGfIbsfG"));


    // Apex Twin Sleep
    //
    //
    // const DEMO_APEX_TWIN_SLEEP_LONGLINE = "";
    // const DEMO_APEX_TWIN_SLEEP_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    // LootArr.push(new DNELootCard("demo-apex-twin-sleep", "Apex Twin Sleep", DEMO_APEX_TWIN_SLEEP_LONGLINE, "img/sound/demo-sleep-mix.jpg", 5, 0, "Демо, 101m of Electronic Ambient", DEMO_APEX_TWIN_SLEEP_SHORTLINE, "", true, true, "sound", "https://youtu.be/NUNrgiDfPq8"));

    // LootArr.push(new DNELootCard("demo-deep-lofi-house", "DEEP LOFI HOUSE MIX", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-deep-lofi-house.jpg", 7, 0, "Демо, 67m of Lo-Fi House", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://youtu.be/yL06_XP4o-s"));
    // LootArr.push(new DNELootCard("demo-tony-approved", "TONY SAYS FCKUIN' APPROVED", "Демо дає можливість показати лейблам що ти хочеш записати. Лейб HOR має високу репутацію, його демо значно збільшує шанси знайти простір з якісною аппаратурою, зробити якісний реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-tony-approved.jpg", 6, 0, "Демо, 59m of Lo-Fi House", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://youtu.be/9qFWNOgq2Fg"));

    // LootArr.push(new DNELootCard("demo-chill-out", "CHILL OUT DOPE", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Ambient сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "img/sound/demo-chillout-dope.jpg", 5, 0, "Демо, 150m of Stoner Ambient Chillout", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/kGG6atEiWA4"));
    // LootArr.push(new DNELootCard("demo-mac-lofi", "If Mac Miller made a <br>Lo-Fi radio", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "img/sound/demo-mac-lofi.jpg", 7, 0, "Демо, 45m of Lo-Fi Hip-Hop", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/1Z9BD5B0EJo"));
    // LootArr.push(new DNELootCard("demo-best-weed-songs", "BEST W SONGS", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "img/sound/demo-best-weed-songs.jpg", 4, 0, "Демо, 56m of Stoner Hip-Hop", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/S6iHskdjGb8"));

    // Royal noises from dead kingdoms
    //
    //
    // const DEMO_CALM_DOWN_LONGLINE = "";
    // const DEMO_CALM_DOWN_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    // LootArr.push(new DNELootCard("demo-calm-down", "Calm Down", DEMO_CALM_DOWN_LONGLINE, "img/sound/demo-calm-down.jpg", 6, 0, "Демо, 16m of Experimental Ambient", DEMO_CALM_DOWN_SHORTLINE, "", true, true, "sound", "https://youtu.be/6EnT0zeVJkw"));


    // Royal noises from dead kingdoms
    //
    //
    // const ALBUM_ROYAL_NOISES_LONGLINE = "";
    // const ALBUM_ROYAL_NOISES_SHORTLINE = ``;
    // LootArr.push(new DNELootCard("album-royal-noises-from-dead-kingdoms", "Royal noises from dead kingdoms", ALBUM_ROYAL_NOISES_LONGLINE, "img/sound/album-royal-noises-from-dead-kingdoms.jpg", 3, 200, "Демо, 30m of Electronic Lo-Fi", ALBUM_ROYAL_NOISES_SHORTLINE, "", true, true, "sound"));


    // CHILL DUDE HERE
    //
    //
    // const CHILL_DUDE_HERE_DEMO_LONGLINE = "";
    // const CHILL_DUDE_HERE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    // LootArr.push(new DNELootCard("demo-chill-dude-here", "CHILL DUDE HERE", CHILL_DUDE_HERE_DEMO_LONGLINE, "img/sound/demo-chill-dude-here.jpg", 6, 0, "Демо, 242m of Ambient Chillout", CHILL_DUDE_HERE_DEMO_SHORTLINE, "", true, true, "sound"));

    // Zeldawave
    //
    //
    // const ZELDAWAVE_DEMO_LONGLINE = "";
    // const ZELDAWAVE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    // LootArr.push(new DNELootCard("demo-zeldawave", "Zeldawave", ZELDAWAVE_DEMO_LONGLINE, "img/sound/demo-zeldawave.jpg", 6, 0, "Демо, 20m of Vaporwave Ambient", ZELDAWAVE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/bHUvykXL8Og"));

    // Zeldawave 2
    //
    //
    // const ZELDAWAVE_2_DEMO_LONGLINE = "";
    // const ZELDAWAVE_2_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    // LootArr.push(new DNELootCard("demo-zeldawave-2", "Zeldawave II", ZELDAWAVE_2_DEMO_LONGLINE, "img/sound/demo-zeldawave-2.jpg", 6, 0, "Демо, 28m of Vaporwave Ambient", ZELDAWAVE_2_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/kQXsiJ1lLss"));

    // Gesserit Sister
    //
    //
    // const GESSERIT_SISTER_DEMO_LONGLINE = "";
    // const GESSERIT_SISTER_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    // LootArr.push(new DNELootCard("demo-gesserit-sister", "A Bene Gesserit Sister", GESSERIT_SISTER_DEMO_LONGLINE, "img/sound/demo-gesserite-sister.jpg", 8, 0, "Демо, 29m of Dark Ambient", GESSERIT_SISTER_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/ok0K3_0QwSQ"));

    // Hyrule Lofi
    //
    //
    // const LOFI_TIME_DEMO_LONGLINE = "";
    // const LOFI_TIME_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    // LootArr.push(new DNELootCard("demo-ambient-time", `Ambient Time`, LOFI_TIME_DEMO_LONGLINE, "img/sound/demo-ambient-time.jpg", 5, 0, "Демо, 38m of Ambient Lo-Fi", LOFI_TIME_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/kKLzVv4hb8w"));

    // Hyrule Lofi
    //
    //
    // const HYRULE_LOFI_DEMO_LONGLINE = "";
    // const HYRULE_LOFI_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    // LootArr.push(new DNELootCard("demo-hyrule-lofi", `Hyrule<br> Lo-Fi`, HYRULE_LOFI_DEMO_LONGLINE, "img/sound/demo-hyrule-lofi.jpg", 8, 0, "Демо, 34m of Lo-Fi", HYRULE_LOFI_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/NXqr-zpDnMc"));

    // Slowed Mr. Robot vol.6-7
    //
    //
    // const SLOWED_ROBOT_DEMO_LONGLINE = "";
    // const SLOWED_ROBOT_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    // LootArr.push(new DNELootCard("demo-slowed-robot", `SLOWED ROBOT`, SLOWED_ROBOT_DEMO_LONGLINE, "img/sound/demo-slowed-robot.jpg", 6, 0, "Демо, 55m of Ambient Downtempo", SLOWED_ROBOT_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/OytfbywcMNs"));

    // Level Select
    //
    //
    // const EXODUS_DEMO_LONGLINE = "";
    // const EXODUS_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    // LootArr.push(new DNELootCard("demo-exodus", `EXODUS`, EXODUS_DEMO_LONGLINE, "img/sound/demo-exodus.jpg", 6, 0, "Демо, 135m of Chillout Synthwave", EXODUS_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/cCTaiJZAZak"));

    // NewLootArr.push(new DNELootCard("vinyl-visceral", "VISCERAL", VISCERAL_LONGLINE, VISCERAL_IMG, 4, 1000, "Платівка, 32m of Industrial Coldwave EBM", VISCERAL_SHORTLINE, "", true, true, "sound", "https://youtu.be/Yp-a2bBVfNc"));
    // NewLootArr.push(new DNELootCard("album-incursion", `THE INCURSION`, INCURSION_ALBUM_LONGLINE, "img/sound/album-incursion.jpg", 4, 300, "Альбом, 34m of Electro Industrial Techno", INCURSION_ALBUM_SHORTLINE, "", true, true, "sound", "https://youtu.be/lyd23cDcqT0"));
    // NewLootArr.push(new DNELootCard("album-artificial-sentiments", "ARTIFICIAL SENTIMENTS", ARTIFICIAL_SENTIMENTS_LONGLINE, ARTIFICIAL_SENTIMENTS_IMG, 7, 500, "Альбом, 39m of Electro EDM", ARTIFICIAL_SENTIMENTS_SHORTLINE, "", true, true, "sound", "https://youtu.be/OiiggeHIsSQ"));
    // NewLootArr.push(new DNELootCard("album-intermission", "INTERMISSION", INTERMISSION_LONGLINE, INTERMISSION_IMG, 7, 0, "Альбом, 37m of Electro Experimental Techno", INTERMISSION_SHORTLINE, "", true, true, "sound", "https://standard-deviation.bandcamp.com/album/intermission"));
    // NewLootArr.push(new DNELootCard("album-dying-the-dream", "DYING THE DREAM", DYING_THE_DREAM_LONGLINE, DYING_THE_DREAM_IMG, 3, 400, "Альбом, 32m of Dark Ambient Dungeon Synth", DYING_THE_DREAM_SHORTLINE, "", true, true, "sound", "https://youtu.be/ZMWg0Odp8qY"));
    // NewLootArr.push(new DNELootCard("vinyl-no-endorphins", `NO ENDORPHINS`, NO_ENDORPHINS_VINYL_LONGLINE, "img/sound/vinyl-no-endorphins.jpg", 3, 800, "Платівка, 16m of Electro Industrial Techno", NO_ENDORPHINS_VINYL_SHORTLINE, "", true, true, "sound", "https://youtu.be/4CLblRKVwow"));
    // NewLootArr.push(new DNELootCard("album-eidetic", "EIDETIC", EIDETIC_LONGLINE, EIDETIC_IMG, 6, 500, "Альбом, 42m of Synthpunk Coldwave", EIDETIC_SHORTLINE, "", true, true, "sound", "https://youtu.be/CaBhgUzPlko"));
    // NewLootArr.push(new DNELootCard("vinyl-drainvoid", "DRAINVOID", DRAINVOID_LONGLINE, DRAINVOID_IMG, 5, 1000, "Платівка, 33m of Dungeon Synth Coldwave", DRAINVOID_SHORTLINE, "", true, true, "sound", "https://youtu.be/H5WShWhQKdE"));
    // NewLootArr.push(new DNELootCard("album-noir-times", "NOIR TIMES", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-noir-times.jpg", 7, 300, "Альбом, 39m of Hardcore Industrial Synthwave", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/1DDF0vSpFeo"));
    // NewLootArr.push(new DNELootCard("album-bunker-island", "BUNKER ISLAND", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-bunker-island.jpg", 5, 300, "Альбом, 30m of Electro Dungeonwave Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/r7X6o9f2_Q0"));
    // NewLootArr.push(new DNELootCard("album-screening-plexus", "SCREENING PLEXUS", "Альбом дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй альбоми в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/album-screening-plexus.jpg", 7, 1000, "Альбом, 42m of Dark Synthpunk", STRINGS.ALBUM_LONGLINE, "", true, true, "sound", "https://youtu.be/-sFuEY-QMQA"));
    // NewLootArr.push(new DNELootCard("album-discordian-disco", "DISCORDIAN DISCO", DISCORDIAN_DISCO_LONGLINE, DISCORDIAN_DISCO_IMG, 6, 400, "Альбом, 40m of Synthpunk Coldwave", DISCORDIAN_DISCO_SHORTLINE, "", true, true, "sound", "https://youtu.be/GyK4OiPMW30"));
    // NewLootArr.push(new DNELootCard("album-incurable", "INCURABLE", INCURABLE_LONGLINE, INCURABLE_IMG, 2, 300, "Альбом, 34m of Industrial Synth", INCURABLE_SHORTLINE, "", true, true, "sound", "https://youtu.be/4pSb7784ImY"));

    // ステップ
    //
    //
    // const STEP_SINGLE_LONGLINE = "";
    // const STEP_SINGLE_SHORTLINE = ``;
    // LootArr.push(new DNELootCard("single-step", `ステップ`, STEP_SINGLE_LONGLINE, "img/sound/single-step.jpg", "d6", 0, "Сінгл, 3:19 of Psychodelic Electronic", STEP_SINGLE_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/echomateriya/ppausja4veq6"));

    // ステップ
    //
    //
    // const DOUBLE_TWENTY_TWO_SINGLE_LONGLINE = "";
    // const DOUBLE_TWENTY_TWO_SINGLE_SHORTLINE = ``;
    // LootArr.push(new DNELootCard("single-double-twenty-two", `22:22.`, DOUBLE_TWENTY_TWO_SINGLE_LONGLINE, "img/sound/single-double-twenty-two.jpg", "d6", 0, "Сінгл, 2:22 of Trip-Hop Electronic", DOUBLE_TWENTY_TWO_SINGLE_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/echomateriya/2222instrumentaldemo-version-1"));
    //
    // G. G. P.
    //
    //
    // const GGP_SINGLE_LONGLINE = "";
    // const GGP_SINGLE_SHORTLINE = ``;
    // LootArr.push(new DNELootCard("single-ggp", `G.G.P.`, GGP_SINGLE_LONGLINE, "img/sound/single-ggp.jpg", "d6", 0, "Сінгл, 7:35 of Psychodelic Space Rock Funk", GGP_SINGLE_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/echomateriya/g-g-pdemo-version-1"));

    // A.H.H.
    //
    //
    // const AHH_SINGLE_LONGLINE = "";
    // const AHH_SINGLE_SHORTLINE = ``;
    // LootArr.push(new DNELootCard("single-ahh", `A.H.H.`, AHH_SINGLE_LONGLINE, "img/sound/single-ahh.jpg", "d6", 0, "Сінгл, 8:33 of Psychodelic<br>Hip-Hop Acid", AHH_SINGLE_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/echomateriya/ahhinstrumentaldeno-version-1"));

    // København.
    //
    //
    // const COPENHAGEN_SINGLE_LONGLINE = "";
    // const COPENHAGEN_SINGLE_SHORTLINE = ``;
    // LootArr.push(new DNELootCard("single-copenhagen", `København.`, COPENHAGEN_SINGLE_LONGLINE, "img/sound/single-copenhagen.jpg", "d6", 0, "Сінгл, 3:32 of Progressive Rock", COPENHAGEN_SINGLE_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/echomateriya/kobenhavninstrumentaldemo-version-1"));

    // Amanita
    //
    //
    // const AMANITA_SINGLE_LONGLINE = "";
    // const AMANITA_SINGLE_SHORTLINE = ``;
    // LootArr.push(new DNELootCard("single-amanita", `Amanita`, AMANITA_SINGLE_LONGLINE, "img/sound/single-amanita.jpg", "d6", 0, "Сінгл, 3:43 of Psychodelic Electronic", AMANITA_SINGLE_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/echomateriya/amanita"));

    // BIG FISH.
    //
    //
    // const BIG_FISH_SINGLE_LONGLINE = "";
    // const BIG_FISH_SINGLE_SHORTLINE = ``;
    // LootArr.push(new DNELootCard("single-big-fish", `BIG FISH.`, BIG_FISH_SINGLE_LONGLINE, "img/sound/single-big-fish.jpg", "d6", 0, "Сінгл, 4:59 of Progressive Psychodelic Space Rock", BIG_FISH_SINGLE_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/echomateriya/big-fishinstrumentaldemo-version-1"));

    // Koto.
    //
    //
    // const KOTO_SINGLE_LONGLINE = "";
    // const KOTO_SINGLE_SHORTLINE = ``;
    // LootArr.push(new DNELootCard("single-koto", `Koto.`, KOTO_SINGLE_LONGLINE, "img/sound/single-koto.jpg", "d6", 0, "Сінгл, 5:44 of Progressive Psychodelic Space Rock", KOTO_SINGLE_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/echomateriya/kotodemo-version-1"));

    // 48° 34' 39° 19'
    //
    //
    // const GEO_SINGLE_LONGLINE = "";
    // const GEO_SINGLE_SHORTLINE = ``;
    // LootArr.push(new DNELootCard("single-48-34-39-19", `48° 34' 39° 19'`, GEO_SINGLE_LONGLINE, "img/sound/single-geo.jpg", "d6", 0, "Сінгл, 4:03 of Progressive Psychodelic Space Rock", GEO_SINGLE_SHORTLINE, "", true, true, "sound", "https://soundcloud.com/echomateriya/48-34-39-19a"));
    // LootArr.push(new DNELootCard("vinyl-pursuit", "Pursuit", "180-gram clear vinyl housed in bespoke inner and outer sleeves including a 10x10\" photographic print.\n" + "Limited to 500 copies worldwide, individually hand numbered.\n" + "Not sealed. <br>" + "Платівка дає можливість поставити музику просто зараз. Це може бути цей самий альбом, або будь-який інший. Спробуй заробити гроші, використавши її під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "https://lh6.googleusercontent.com/5C_USwT9sZWSz5od1wgsA3ZmJ-Z92BVVOrqM5vCrlyLpZ1wtLErOAxCk8KsqHu4GrKo=w2400", 7, 5500, "Платівка, 4m of Progressive Electronic"));
    // LootArr.push(new DNELootCard("demo-phonk-fridays-004", "PHONK FRIDAY 004", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-phonk-friday-004.png", 1, 0, "Демо, 104m of Cloud Phonk Trap", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://www.youtube.com/live/oHthm7EwGoU"));
    // LootArr.push(new DNELootCard("demo-phonk-fridays-005", "PHONK FRIDAY 005", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-phonk-friday-005.png", 1, 0, "Демо, 103m of Abstract Phonk Trap", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://www.youtube.com/live/_Cd1O44Vft0"));
    // LootArr.push(new DNELootCard("demo-phonk-fridays-007", "PHONK FRIDAY 007", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-phonk-friday-007.png", 1, 0, "Демо, 118m of Abstract Phonk Trap", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://www.youtube.com/live/x7L4lyhfDyM"));
    // LootArr.push(new DNELootCard("demo-phonk-fridays-008", "PHONK FRIDAY 008", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-phonk-friday-008.jpg", 1, 0, "Демо, 116m of Abstract Phonk Trap", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://youtu.be/h36L3a1p5Sc"));
    // LootArr.push(new DNELootCard("demo-phonk-fridays-009", "PHONK FRIDAY 009", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії. Та будь впевнений, що твій звук всім сподобається.", "img/sound/demo-phonk-friday-009.jpg", 3, 0, "Демо, 113m of Meta Phonk Trap", STRINGS.DEMO_LONGLINE_SHORT_2, "", true, true, "sound", "https://www.youtube.com/live/oqsU1f3s_QU"));

    // Phonk Fridays 010
    //
    //
    // const PHONK_FRIDAYS_10_DEMO_LONGLINE = "";
    // const PHONK_FRIDAYS_10_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    // LootArr.push(new DNELootCard("demo-phonk-fridays-010", "PHONK FRIDAY 010", PHONK_FRIDAYS_10_DEMO_LONGLINE, "img/sound/demo-phonk-friday-010.jpg", 1, 0, "Демо, 23m of  of Phonk Trap", PHONK_FRIDAYS_10_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/4ezZb_ftCrQ"));
    // LootArr.push(new DNELootCard("demo-in-your-head", "ITS ALL IN YOUR HEAD", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "https://lh6.googleusercontent.com/HJN6_sWjfFOE5DjBxDZJfYGMFyFDJBiuT5N2WXZ7Z7hwhc89laKTrNgsc5fuaSz_FbI=w2400", 1, 0, "Демо, 40m of Vaporwave Barberbeat"));
    // LootArr.push(new DNELootCard("demo-driftin-4", "D R I F T I N 4", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "img/sound/demo-driftin-4.jpg", 1, 0, "Демо, 52m of Phonk Trap", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/tmqiH813lns"));
    // LootArr.push(new DNELootCard("demo-phonk-sesh-4", "P H O N K <br>S E S H 4", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "img/sound/demo-phonk-sesh.jpg", 1, 0, "Демо, 85m of Phonk Trap", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/f292QkgJMYc"));
    // LootArr.push(new DNELootCard("demo-enter-void", "ENTER THE VOID 2", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "img/sound/demo-enter-void-2.jpg", 1, 0, "Демо, 18m of Experimental Ambient", STRINGS.DEMO_LONGLINE, "", true, true, "sound", "https://youtu.be/aeIZnAaHL88"));
    // LootArr.push(new DNELootCard("demo-patience", "P A T I E N C E", "Демо дає можливість показати лейблам що ти хочеш записати. Можливо тобі пощастить знайти простір з якісною аппаратурою, зробити реліз та домовлятись про промо, стріми та лайви. Спробуй досягти цих можливостей домовившись про продюсування цього демо, використавши його під час вечірки, запису трансляції, сету або мікстейпу. Бонус цього демо подвоюється, якщо його грати на окремій Rock сцені.<br> Комбінуй демо та платівки в одному жанрі, щоб дати кожній наступній 50% бонус до виправданих очікувань аудиторії.", "https://lh3.googleusercontent.com/R8hhVznQZxCScNx3mClr50t-31uLZNNaVzHBSnwo8_Qg8T6sZmwjkXubNOfb1VMxOis=w2400", 1, 0, "Демо, 68m of Lo-Fi<br> Vapor Trap", STRINGS.DEMO_LONGLINE, "", true, true, "sound"));
    // HARDWAVE PHONK MIX
    //
    //
    // const HARDWAVE_DEMO_LONGLINE = "";
    // const HARDWAVE_DEMO_SHORTLINE = `${STRINGS.DEMO_LONGLINE}`;
    // LootArr.push(new DNELootCard("demo-hardwave", "HARDWAVE PHONK MIX", HARDWAVE_DEMO_LONGLINE, "img/sound/demo-hardwave.jpg", 1, 0, "Демо, 76m of Hardwave Phonk", HARDWAVE_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/9GDnI1tCoZM"));

    // // VILL4IN TV Episode 001 + 002
    // //
    // //
    // const VILL4IN_TV_DEMO_LONGLINE = "";
    // const VILL4IN_TV_DEMO_SHORTLINE = `${STRINGS.ALBUM_LONGLINE_2}`;
    // const VILL4IN_TV_DEMO_IMG_ID = `1IOWzUR6lRoI05EKH3KL3nNsRPA8K5s8a`;
    // const VILL4IN_TV_DEMO_IMG = `https://drive.google.com/uc?id=${VILL4IN_TV_DEMO_IMG_ID}`;
    //
    // LootArr.push(new DNELootCard("demo-vill4in-tv", "VILL4IN TV Episode 001 + 002", VILL4IN_TV_DEMO_LONGLINE, VILL4IN_TV_DEMO_IMG, 3, 0, "Платівка, 243m of Experimental Ambient Downtempo Vaporwave", VILL4IN_TV_DEMO_SHORTLINE, "", true, true, "sound", "https://youtu.be/tRoW695S3vc"));

    // $$$$$$\   $$$$$$\  $$\   $$\ $$\   $$\ $$$$$$$\        $$$$$$$$\ $$\   $$\ $$$$$$$\
    // $$  __$$\ $$  __$$\ $$ |  $$ |$$$\  $$ |$$  __$$\       $$  _____|$$$\  $$ |$$  __$$\
    // $$ /  \__|$$ /  $$ |$$ |  $$ |$$$$\ $$ |$$ |  $$ |      $$ |      $$$$\ $$ |$$ |  $$ |
    // \$$$$$$\  $$ |  $$ |$$ |  $$ |$$ $$\$$ |$$ |  $$ |      $$$$$\    $$ $$\$$ |$$ |  $$ |
    //  \____$$\ $$ |  $$ |$$ |  $$ |$$ \$$$$ |$$ |  $$ |      $$  __|   $$ \$$$$ |$$ |  $$ |
    // $$\   $$ |$$ |  $$ |$$ |  $$ |$$ |\$$$ |$$ |  $$ |      $$ |      $$ |\$$$ |$$ |  $$ |
    // \$$$$$$  | $$$$$$  |\$$$$$$  |$$ | \$$ |$$$$$$$  |      $$$$$$$$\ $$ | \$$ |$$$$$$$  |
    //  \______/  \______/  \______/ \__|  \__|\_______/       \________|\__|  \__|\_______/

    return LootArr;
}

export { initSoundCards };

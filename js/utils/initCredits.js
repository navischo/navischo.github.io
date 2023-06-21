import { win77 } from "../dne-cli.js";

const creditsText = `
A long time ago, in a galaxy far, far away…
<br/><br/><br/>
You pass through The
Mysterious Factory. Organize Rave,
that shake all the city,
make a lot of fun, loot
and cash on it.
<br/><br/><br/>
Hoping to stay afloat,
your competitors gathered
their last cash and crew members
to knock you out of the top
and win back their audience.
<br/><br/><br/>
Without even suspecting
what was happening,
Grandfather and Grandson
were crumbling a tasty piece of hydra,
drinking milk and cookies,
lying on the couch,
stuck in an interdimensional cable,
where just showing
the latest episode
of Cyberpunk: Edgerunners...
`;

const parsePlaylist = () => {
    let string = `<br><br><br>And most importantly,<br>
    here is your playlist for today. Enjoy!<br><br>`;
    win77.game.player.sound.forEach((sound) => {
        string = string + `${sound.name}<br>`;
    });
    return string;
}

const getCreditsMarkup = (text) => `
    <div class="credits">
        <div class="credits__wrapper">
            <p class="credits__container">
                ${text}
            </p>
        </div>
    </div>
`;

const initCredits = () => {
    const sudoPage = document.createElement("div");
    sudoPage.classList.add("sudo-page");
    sudoPage.innerHTML = getCreditsMarkup(creditsText);

    if (win77.game.player.sound.size > 0) {
        const soundCredits = document.createElement("p");
        soundCredits.classList.add("credits__container");
        soundCredits.innerHTML = parsePlaylist();
        sudoPage.querySelector(".credits__wrapper")
            .appendChild(soundCredits);
    }

    document.querySelector("body")
        .appendChild(sudoPage);

    document.addEventListener("keydown", () => {
        sudoPage.remove();
    });
}

export { initCredits };

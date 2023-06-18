import {win77} from "../dne-cli.js";

const initDirect = (name) => {
    const directIcon = document.querySelector(`[data-direct="${name}"]`);
    if (directIcon) {
        directIcon.classList.add("--online");
    }
}

const NOKIA_MENUS = [
    {
        title: "Pokewall",
        items: [
            {
                href: "#admin",
                text: "navischo",
                callback: (e) => {
                    e.preventDefault();
                    $.magnificPopup.close();
                    win77.swiper.slidePrev();
                    initDirect("navischo");
                    console.log(`Direct to navischo`);
                }
            }
            // {
            //     href: "#",
            //     text: "Green House"
            // }, {
            //     href: "#",
            //     text: "Purple Moon"
            // }, {
            //     href: "#",
            //     text: "∄"
            // }, {
            //     href: "#",
            //     text: "Fight Club"
            // }
        ]
    }
];

const nokiaMenuMarkup = (title) => `
<div id="nokia" class="nokia-area">
    <h3 class="title">${title}</h3>
    <div class="menu"></div>
</div>
`;

const initNokiaPopup = () => {
    const parent = document.querySelector("#nokia-popup");
    const newNode = document.createElement("div");
    newNode.classList.add("nokia__preview");
    newNode.innerHTML = nokiaMenuMarkup(NOKIA_MENUS[0].title);
    const menuNode = newNode.querySelector(".menu");
    NOKIA_MENUS[0].items.forEach((item) => {
        const itemNode = document.createElement("a");
        itemNode.href = item.href;
        itemNode.textContent = item.text;

        itemNode.addEventListener("click", item.callback);

        menuNode.appendChild(itemNode);
    });
    parent.appendChild(newNode);
}

export { initNokiaPopup };

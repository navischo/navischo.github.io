const WALLS = [
    {
        link: "wall.html",
        title: "What's new in DNE 0.5?"
    },
    {
        link: "wall-803.html",
        title: "DNE 0.6 is coming"
    },
    {
        link: "wall-804.html",
        title: "Balance Tournament"
    },
    {
        link: "wall-812.html",
        title: "SCREENSHOTS COMPETITION"
    },
    {
        link: "wall-A17.html",
        title: "?????7777???77??7???"
    },
];

const getNavElement = (wallsArr) => {
    const list = document.createElement("ul");
    wallsArr.forEach((wall) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
                <a href="${wall.link}" class="c-news">
                    <div class="c-news__content ">
                        <div class="c-news__title">
                            <h2><span>${wall.title}</span></h2>
                        </div>
                        <span class="l-news__separator"></span>
                    </div>
                </a>`;
        list.prepend(listItem);
    });
    return list;
}

const initWallNav = () => {
    const parent = document.querySelector(".js-wall-nav");
    parent.appendChild(getNavElement(WALLS));
}

export { initWallNav };

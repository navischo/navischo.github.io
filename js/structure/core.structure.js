/* STRUCTURE MAP
* 3. All Pages
* 2. SwiperCells contains Pages
* 1. SwiperCore contain all SwiperCells
* */

class Page {
    constructor(parent, link, init) {
        this.parent = parent;
        this.link = link;
        this.init = init;
    }
}

class SwiperCell {
    constructor(init) {
        this.init = init;
    }
}

export { Page, SwiperCell };

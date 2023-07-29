/* STRUCTURE MAP
* 3. All Pages
* 2. Swipers contains Pages
* 1. Core contain Swipers
* */

class Page {
    constructor(parent, link, init) {
        this.parent = parent;
        this.link = link;
        this.init = init;
    }
}

export { Page };

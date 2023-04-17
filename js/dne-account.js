// account type
// focused
// balanced
// solo
// sponsor

class DNEPersonality {
    constructor(focused, balanced, solo, sponsor) {
        this.focused = focused;
        this.balanced = balanced;
        this.solo = solo;
        this.sponsor = sponsor;
    }
}

class DNEAccount {
    constructor(login, password, personality) {
        this.login = login;
        this.password = password;
        this.personality = personality;
    }
}

const navischoDNEAccount = new DNEAccount("navischo", "continueisanart", new DNEPersonality(true, false, true, false));

console.log(navischoDNEAccount);

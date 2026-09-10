console.log("custom elements connected");

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <h1>Keishins Portfolio</h1>
            <div id="navigationButtons">
                <button onclick="window.location.href = 'index.html'">Home</button>
                <button onclick="window.location.href = 'HTMLGames.html'">HTML Games</button>
                <button onclick="window.location.href = 'Game1.html'">Projects</button>
                <button onclick="window.location.href = 'Game2.html'">Contact</button>
            </div>
        </header>
        `;
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>© 2026 Keishin's Portfolio. All rights reserved.</p>
        </footer>
        `;
    }
}

class MyOpener extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id = "opener">
                <form action="https://api.web3forms.com/submit" method="POST" id="visitorForm">
                    <input type="hidden" name="access_key" value="90d17bdb-7c1d-460a-9fc2-d191e0c072b0">
                    <label for=""> Name <input type="text" id="visitorName" name="Visitor Name"> </label>
                    <label for=""> Company <input type="text" id="visitorCompany" name="Company Name"> </label>
                    <input type="submit" value="Submit Details" id="submitVisitor">
                    <input type="button" value="Abstain for now" id="submitAnon">
                </form>
            </div>
        `
    }
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
customElements.define('my-opener', MyOpener);
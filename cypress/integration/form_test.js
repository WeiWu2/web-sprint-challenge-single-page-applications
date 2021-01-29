
describe('pizza app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })
    const name = () => {return cy.get('input[name="name"]')};
    const pizzaSize = () => {return  cy.get('select[name="pizzaSize"]')};
    const pepperoni = () => {return cy.get('input[name="pepperoni"]')};
    const pineapple = () => {return cy.get('input[name="pineapple"]')}
    const bacon = () => {return cy.get('input[name="bacon"]')}
    const onion = () => {return cy.get('input[name="onion"]')}
    const special = () => {return cy.get('input[name="special"]')}
    const submit = () => {return cy.get('#submit')};

    it("testing input", () => {
        name().type("Wei")
        name().should("have.value", "Wei")
        special().type("Draw a funny picture")
        special().should("have.value","Draw a funny picture")
    })

    it("testing pizza size", () => {
       pizzaSize().select("small")
       pizzaSize().should("have.value", "small")
       pizzaSize().select("medium")
       pizzaSize().should("have.value", "medium")
       pizzaSize().select("large")
       pizzaSize().should("have.value", "large")
    })
    it("testing toppings", () => {
        pepperoni().check()
        pepperoni().should("be.checked")
        pepperoni().uncheck()
        pepperoni().should("not.be.checked")
        pineapple().check()
        pineapple().should("be.checked")
        pineapple().uncheck()
        pineapple().should("not.be.checked")
        bacon().check()
        bacon().should("be.checked")
        bacon().uncheck()
        bacon().should("not.be.checked")
        onion().check()
        onion().should("be.checked")
        onion().uncheck()
        onion().should("not.be.checked")
        pepperoni().check()
        pineapple().check()
        bacon().check()
        onion().check()
        pepperoni().should("be.checked")
        pineapple().should("be.checked")
        bacon().should("be.checked")
        onion().should("be.checked")
    })
    it("testing submit", () => {
        name().type("Wei")
        submit().should("be.disabled")
        pizzaSize().select("large")
        submit().should("not.be.disabled")
        submit().click()

    })
})
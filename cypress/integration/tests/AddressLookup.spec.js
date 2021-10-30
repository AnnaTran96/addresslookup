describe("renders address look up page", () => {

    beforeEach(() => {
        cy.visit("#/addresslookup")
    })

    it("renders correctly", () => {
        cy.get(".address-container").should("exist")
    })

    it("searches for an address", async () => {
        cy.get('.select').type('London')
    })

    it("displays selected address", () => {
    })

    it("has two buttons", () => {
        cy.get('.address-container').find('button').its('length').should('eq', 2)
        cy.get("#home").should("exist")
        cy.get("#home").contains('Back to home page')
        cy.get("#new-address").should("exist")
        cy.get("#new-address").contains('Add new address')
    })


    it("should return to the home page when you click on 'Back to home page'", () => {
        cy.get("#home").click()
        cy.url().should("include", "/")
    })


    it("should render '/addnewaddress page when you click on 'Add new address", () => {
        cy.get("#new-address").click()
        cy.url().should("include", "/addnewaddress")
    })

})
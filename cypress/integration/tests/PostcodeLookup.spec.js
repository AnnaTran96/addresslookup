describe("renders postcode look up page", () => {

    beforeEach(() => {
        cy.visit("#/postcodelookup")
    })

    it("renders correctly", () => {
        cy.get(".postcode-container").should("exist")
    })

    it("searches for an address", async () => {
        cy.get('.select').type('NN13ER')
    })

    it("displays selected address", () => {
    })

    it("has two buttons", () => {
        cy.get('.postcode-container').find('button').its('length').should('eq', 2)
        cy.get("#home-btn").should("exist")
        cy.get("#home-btn").contains('Back to home page')
        cy.get("#new-address").should("exist")
        cy.get("#new-address").contains('Add new address')
    })


    it("should return to the home page when you click on 'Back to home page'", () => {
        cy.get("#home-btn").click()
        cy.url().should("include", "/")
    })


    it("should render '/addnewaddress page when you click on 'Add new address", () => {
        cy.get("#new-address").click()
        cy.url().should("include", "/addnewaddress")
    })

})
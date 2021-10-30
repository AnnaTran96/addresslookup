describe("renders the home page", () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it("renders correctly", () => {
        cy.get(".home-container").should("exist")
    })

    it("should contain two buttons", () => {
        cy.get('.home-wrapper').find('button').its('length').should('eq', 2)
        cy.get("#city-button").should("exist")
        cy.get("#city-button").contains('Search By City')
        cy.get("#postcode-button").should("exist")
        cy.get("#postcode-button").contains('Search By Postcode')
    })

    it("should render '/addresslookup page when you click on 'Search By City'", () => {
        cy.get("#city-button").click()
        cy.url().should("include", "/addresslookup")
    })

    it("should render '/postcodelookup page when you click on 'Search By Postcode'", () => {
        cy.get("#postcode-button").click({ force: true })
        cy.url().should("include", "/postcodelookup")
    })
})
describe("renders the form", () => {

    beforeEach(() => {
        cy.visit("#/addnewaddress")
    })

    it("render correctly", () => {
        cy.get('.new-address-container').should("exist")
    })

    it("displays the form", () => {
        cy.get('.formik-form').should("exist")
        cy.get('input').should("have.length", 7)
        cy.findByText("Address Line 1").should("exist")
        cy.findByText("Address Line 2").should("exist")
        cy.findByText("Address Line 3").should("exist")
        cy.findByText("Address Line 4").should("exist")
        cy.findByText("City").should("exist")
        cy.findByText("County").should("exist")
        cy.findByText("Postcode").should("exist")
    })

    it("validates the input fields for 'Address Line One, City, County and Postcode'", () => {
        cy.get('.form-button').click()
        cy.findAllByText('This is required').should("exist").should('have.length', 4)
    })

    it("displays an error if submission is unsuccessful", () => {
        const mockData = {
            addressLineOne: 'Line 1',
            addressLineTwo: 'Line 2',
            addressLineThree: 'Line 3',
            addressLineFour: 'Line 4',
            city: 'London',
            county: 'London',
            postcode: 'SW22QA'
        }

        cy.get('form>input').eq(0).type(mockData.addressLineOne)
        cy.get('form>input').eq(1).type(mockData.addressLineTwo)
        cy.get('form>input').eq(2).type(mockData.addressLineThree)
        cy.get('form>input').eq(3).type(mockData.addressLineFour)
        cy.get('form>input').eq(4).type(mockData.city)
        cy.get('form>input').eq(5).type(mockData.county)
        cy.get('form>input').eq(6).type(mockData.postcode)
        cy.get('.form-button').click()
        cy.findByText('Failed to fetch. Please try again').should("exist")

    })

    it("displays a home button and renders back to home page", () => {
        cy.get("#home-button").click()
        cy.url().should("include", "/")
    })
})
import { faker } from "@faker-js/faker/locale/en_GB"

describe('add a donator and a requester, and exchange', () => {
    it('follows donate and receive path with ship option right to end', () => {
        cy.visit('/')
        cy.contains('I want to donate a laptop').click()
        const donatorName = faker.name.fullName()
        cy.get('input[name=name]').type(donatorName)
        cy.get('input[name=address]').type(faker.address.streetAddress(true))
        cy.get('input[name=numberOfLaptops]').type(String(Math.floor(Math.random() * 4) + 1))
        cy.get('input[name=phoneNumber]').type(faker.phone.number())
        cy.get('input[name=email]').type(faker.internet.email())
        cy.get('select[name=deliveryOption]').select('SHIP')
        cy.get('form').submit()
        cy.contains('Back Home').click()
        cy.contains('I need a laptop').click()
        const firstName = faker.name.firstName();
        cy.get('input[name=firstName]').type(firstName)
        cy.get('input[name=lastName]').type(faker.name.lastName())
        cy.get('input[name=email]').type(faker.internet.email())
        cy.get('input[name=phoneNumber]').type(faker.phone.number())
        cy.get('form').submit()
        cy.get('p.primary-text').should('include.text', 'Good News!!!')
        cy.get('h1').should('include.text', 'You have been assigned a laptop')
        const recipientAddress = faker.address.streetAddress(true)
        cy.get('input[name=addressField]').type(recipientAddress)
        cy.contains('Yes please!').click()
        cy.get('h1').should('include.text', `Please let us know when you have received your laptop at ${recipientAddress}`)
        cy.contains('Thanks, I\'ve got it').click()
        cy.get('h1').should('include.text', 'Sweet! You now have your laptop. Time to start working on your application to Code Your Future?')
    })
})
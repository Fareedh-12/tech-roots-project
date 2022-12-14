import { faker } from "@faker-js/faker/locale/en_GB"

describe('add a donator', () => {
    it('allows a user to add a donator', () => {
        cy.visit('/')
        cy.contains('Donate').click()
        const donatorName = faker.name.fullName()
        cy.get('input[name=name]').type(donatorName)
        cy.get('input[name=address]').type(faker.address.streetAddress(true))
        cy.get('input[name=numberOfLaptops]').type(String(Math.floor(Math.random() * 4) + 1))
        cy.get('input[name=phoneNumber]').type(faker.phone.number())
        cy.get('input[name=email]').type(faker.internet.email())
        const deliveryOptions = ['PICKUP', 'SHIP']
        cy.get('select[name=deliveryOption]').select(deliveryOptions[Math.floor(Math.random() * deliveryOptions.length)])
        cy.get('form').submit()
        cy.visit('/list-requests')
        cy.contains('Donator List Table').click()
        cy.get('table').should('include.text', donatorName)
    })
})
/// <reference types="Cypress" />

import Util from '../support/util'

const faker = require('faker')


describe('Filling the interview form', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Should allow to fill the form out successfuly', () => {

        const interview_data = {
            your_name: faker.name.findName(),
            about_you: 'I am Marcio and work as a QA Engineer',
            check_option: 'B',
            add_user: 'Luiz Servando Rodrigues Junior',
            selection: 'B',
            current_time: Util.getFormattedTime(),
            phone: '+5511902799000',
            email: 'teste@teste.com'
        }

        cy.fill_form(interview_data)
    
        cy.get('.pp-new-public-form-success-message').should('exist')
    })
})
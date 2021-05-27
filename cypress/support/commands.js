/// <reference types="Cypress" />

Cypress.Commands.add('fill_form', (data) => {

    cy.get('input[name="customFields.your_name"]').clear().type(data.your_name)

    cy.get('textarea[name="customFields.why_do_you_want_to_work_at_pipefy"]').clear().type(data.about_you)

    cy.get('input[id^="publicForm_customFields.check_b_option_"]').each((el) => {
        if (el.attr('value') == data.check_option){
            el.trigger('click')
        }
    })

    cy.get('a[href="#add-assignee"]').click()
    cy.get('a[href="#select"]').each((el) => {
        if (el.attr('title') == data.add_user){
            el.find('img').trigger('click')
        }
    })
    cy.contains('Select any user').click()

    cy.get('#fake-pipe-field-publicForm-customFields_select_today_s_date-input').click()
    cy.get('button[title="Save"]').click()

    cy.get('select[name="customFields.select_option_b"]').select(data.selection)

    cy.get('input[name="customFields.what_time_is_it_now"]').clear().type(data.current_time)

    cy.get('input[name="customFields.place_a_phone_number_from_spain_country"]').clear().type(data.phone)

    cy.get('button[data-pp-button="submit-fields"]').click()

    cy.get('input[type="email"]').clear().type(data.email)

    cy.get('button[type="submit"]').click()
})
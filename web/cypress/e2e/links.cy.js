describe('Links abrindo nova guia/janela', () => {
    
    beforeEach(()=>{
        cy.login()
    })
    
    it('Validando o atributo do link do Instagram', () => {
        // Garantir que existe o atributo de hyperlink e que o mesmo leva para o destino
        // esperado em outra aba
        cy.get('[data-cy="instagram-link"]').click()
            .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
            .and('have.attr', 'target', '_blank')
    })


    // Retira o target blank, deixando de abrir nova página para
    // entrar outra (ex: termos de uso)
    it('Acessa link de termos de uso removendo o target blank', () => {

        cy.contains('Formulários').click()
        cy.contains('a', 'termos de uso')
            .invoke('removeAttr', 'target')
            .click()

        cy.contains('Ao acessar e usar nossos serviços, você concorda em cumprir estes termos de uso. Se você não concordar com algum aspecto destes termos, não utilize nossos serviços.')
            .should('be.visible')

    })
})
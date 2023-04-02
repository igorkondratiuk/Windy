declare namespace Cypress {
    interface Chainable<Subject> {

        createDefaultTodos(): Chainable<any>
        /**
         * Creates one Todo using UI
         * @example
         * cy.createTodo('new item')
         */
        login(email: string,pass: string): void
    }
}

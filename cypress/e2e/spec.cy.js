Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(err);
  return false;
})

describe('Website is Visitable', () => {
  it('Visits website', () => {
    cy.visit('localhost:3000')
  })
})

describe('Contains creator', () => {
  it('Visits website and find creator', () => {
    cy.visit('localhost:3000')
    cy.contains('Kardos Zsolt')
  })
})

describe('Contains creators NC', () => {
  it('Visits website and finds Neptun Code', () => {
    cy.visit('http://localhost:3000')
    cy.contains('O48WRX')
  })
})

describe('Form submit clickable', () => {
  it('Finds and Clicks form submit button', () => {
    cy.visit('localhost:3000')
    cy.get('button[id="submitform1"]').click()
  })
})

describe('Calcform submit clickable', () => {
  it('Finds and Clicks calcform submit button', () => {
    cy.visit('localhost:3000')
    cy.get('button[id="submitcalcform"]').click()
  })
})

describe('Submitting the form', () => {
  it('Finds and types in data into the form', () => {
    cy.visit('localhost:3000')
    cy.get('input[id="name"]').type('Teszt Elek')
    cy.get('input[id="password"]').type('asd12')
    cy.get('input[id="age"]').type(32)
    cy.get('button[id="submitform1"]').click()
  })
})

describe('Submitting the form and validating', () => {
  it('Finds and types in data into the form', () => {
    cy.visit('localhost:3000')
    cy.get('input[id="name"]').type('Teszt Elek')
    cy.get('input[id="password"]').type('asd12')
    cy.get('input[id="age"]').type(32)
    cy.get('button[id="submitform1"]').click()


    cy.contains('Name: Teszt Elek')
    cy.contains('Password: asd12')
    cy.contains('Age: 32')
  })
})

describe('Submitting the Calc form', () => {
  it('Finds and types in data into the form', () => {
    cy.visit('localhost:3000')
    cy.get('input[id="num1"]').type(3)
    cy.get('input[id="num2"]').type(2)
    cy.get('input[id="num3"]').type(4)
    cy.get('input[id="num4"]').type(2)
    cy.get('button[id="submitcalcform"]').click()
  })
})

describe('Submitting the Calc form and validating', () => {
  it('Finds and types in data into the form', () => {
    cy.visit('localhost:3000')
    cy.get('input[id="num1"]').type(3)
    cy.get('input[id="num2"]').type(2)
    cy.get('input[id="num3"]').type(4)
    cy.get('input[id="num4"]').type(2)
    cy.get('button[id="submitcalcform"]').click()

    cy.contains(5)
    cy.contains(2)
  })
})
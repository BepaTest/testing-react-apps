// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
import faker from 'faker'
import {build, fake} from '@jackfranklin/test-data-bot'

const buildLoginForm = build({
  fields: {
    name: fake(faker => faker.internet.userName()),
    pswd: fake(faker => faker.internet.password()),
  },
})

// function buildLoginForm(overrides) {
//   return {
//     name: faker.internet.userName(),
//     pswd: faker.internet.password(),
//     ...overrides,
//   }
// }

test('submitting the form calls onSubmit with username and password', () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  //
  // 🐨 get the username and password fields via `getByLabelText`
  // 🐨 use userEvent.type to change the username and password fields to
  //    whatever you want
  //
  // 🐨 click on the button with the text "Submit"
  //
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue

  // let submittedData
  // const handleSubmit = data => (submittedData = data)
  // render(<Login onSubmit={handleSubmit} />)
  // //screen.debug()
  // const username = screen.getByLabelText(/username/i)
  // const password = screen.getByLabelText(/password/i)
  // const submitButton = screen.getByRole('button', {name: /submit/i})

  // const name = 'Toto'
  // const pswd = 'HelloWorld'

  // userEvent.type(username, name)
  // userEvent.type(password, pswd)
  // userEvent.click(submitButton)

  // expect(submittedData).toEqual({username: name, password: pswd})

  //extra 1
  const submitMockFn = jest.fn()
  render(<Login onSubmit={submitMockFn} />)

  // const name = 'Toto'
  // const pswd = 'HelloWorld'

  const {name, pswd} = buildLoginForm({pswd: 'abc'})
  console.log(pswd)

  userEvent.type(screen.getByLabelText(/username/i), name)
  userEvent.type(screen.getByLabelText(/password/i), pswd)
  userEvent.click(screen.getByRole('button', {name: /submit/i}))

  expect(submitMockFn).toHaveBeenCalledWith({username: name, password: pswd})
  expect(submitMockFn).toHaveBeenCalledTimes(1)
})

/*
eslint
  no-unused-vars: "off",
*/

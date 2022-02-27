// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen, act} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'
// import Counter from 'components/counter'

// 🐨 create a simple function component that uses the useCounter hook
// and then exposes some UI that our test can interact with to test the
// capabilities of this hook
// 💰 here's how to use the hook:
// const {count, increment, decrement} = useCounter()

// function Couner() {
//   const {count, increment, decrement} = useCounter()
//   return (
//     <>
//       <div>Current count: {count}</div>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={increment}>Increment</button>
//     </>
//   )
// }

// test('exposes the count and increment/decrement functions', () => {
//   // 🐨 render the component
//   render(<Counter />)
//   // 🐨 get the elements you need using screen
//   const message = screen.getByText(/current count/i)
//   expect(message).toHaveTextContent('Current count: 0')
//   // 🐨 assert on the initial state of the hook
//   // 🐨 interact with the UI using userEvent and assert on the changes in the UI
//   userEvent.click(screen.getByRole('button', {name: /decrement/i}))
//   expect(message).toHaveTextContent('Current count: -1')
//   userEvent.click(screen.getByRole('button', {name: /increment/i}))
//   expect(message).toHaveTextContent('Current count: 0')
// })

test('exposes the count and increment/decrement functions', () => {
  let result
  function TestComponent(props) {
    result = useCounter(props)
    return null
  }
  render(<TestComponent />)
  expect(result.count).toBe(0)
  act(() => result.increment())
  expect(result.count).toBe(1)
  act(() => result.decrement())
  expect(result.count).toBe(0)
})

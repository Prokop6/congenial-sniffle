import {} from './src/ts/board_methods'

describe(
  'tests basic board functions',
  () => (
    test.todo.each([
      {cell: true, counter: 0, expected: 1},
      {cell: false, counter: 0, expected: 0}
    ])('check if cell is true (alive)',
    ({cell, counter, expected}) => expect(isTrue(cell, counter)).toBe(expected)
    )
  )
)

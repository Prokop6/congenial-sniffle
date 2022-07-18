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
);

/*
.each(
  [
   , [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ], [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 1]
    ]
  ]
)(
*/
  

describe('test cell value recognition in situ',
  () => (
    test.todo.each([
      { x: 0, y: 0, expected: true },
      { x: 1, y: 0, expected: true },
      { x: 2, y: 0, expected: true },
      { x: 0, y: 1, expected: true },
      { x: 1, y: 1, expected: true },
      { x: 2, y: 1, expected: true },
      { x: 0, y: 2, expected: true },
      { x: 1, y: 2, expected: true },
      { x: 2, y: 2, expected: true }
    ])('fdsf', () => {
          let cellArray = [
          [1, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ]; (
        { x, y, expected }
        ) => ( expect(isCellAlive(cellArray, x, y).toBe(expected)) )
      }
    )
  )
);

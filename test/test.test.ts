import { test_fun } from '../src/ts/test'

describe("sanity check of ts-jest", 
() => test('basic testing function',
  () => expect(test_fun(2,2)).toBe(4)
  )
  )
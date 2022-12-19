import { observable } from 'mobx'
import { expect, test } from 'vitest'
import { myCustomMobxUtil } from './mobx-utils'

test('mobx-utils-custom', () => {
  const a = myCustomMobxUtil(observable({ x: 1 }), 'x')
  expect(a).toBeDefined()
  console.log(a)
})

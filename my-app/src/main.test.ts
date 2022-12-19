import { test } from 'vitest'
import { observable } from 'mobx'
import { myCustomMobxUtil } from 'mobx-utils-custom'

//mobx-utils-custom is imported via link:../mobx-utils-custom
//using pnpm add ../mobx-utils-custom command

//In mobx-utils-custom package.json,
//if "main": "src/index.ts" ✔️, else "main": "dist/index.js" ❌

test('work', () => {
  const a = observable({ x: 1 })
  myCustomMobxUtil(a, 'x')
  console.log(a)
})

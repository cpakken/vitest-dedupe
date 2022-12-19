import { getAtom } from 'mobx'

export function myCustomMobxUtil(a: any, prop: string) {
  return getAtom(a, prop)
}

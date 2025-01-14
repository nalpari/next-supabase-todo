import { atom, selector } from 'recoil'

export const testState = atom({
  key: 'testState',
  default: 20,
})

export const testSelector = selector({
  key: 'testSelector',
  get: ({ get }) => {
    const test = get(testState)
    return test
  },
  set: ({ set }, newValue) => set(testState, newValue),
})

export const userInfoState = atom({
  key: 'userInfoState',
  default: {
    name: 'John Doe',
    age: 20,
    address: 'Seoul',
  },
})

export const userInfoSelector = selector({
  key: 'userInfoSelector',
  get: ({ get }) => {
    const userInfo = get(userInfoState)
    return userInfo
  },
  set: ({ set }, newValue) => set(userInfoState, newValue),
})

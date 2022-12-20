import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    //apparently not needed
    // dedupe: ['mobx-utils-custom', 'mobx'],
  },

  test: {
    //also tried but didn't work
    // deps: { inline: ['mobx-utils-custom', 'mobx'] },
    deps: { inline: ['mobx-utils-custom'] },
  },
})

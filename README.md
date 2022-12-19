
# Steps to reproduce
'/my-app'
  - `pnpm test` to run vitest -> will fail
  - `pnpm dev` (vite dev) -> will succeed


## Notes
This repo simulates 
  - pnpm adds a locally linked package
  - utility library 'mobx-utils-custom`
    - `pnpm add mobx`
    - `pnpm build` (dist/ files already included in repo)
      - when package.json `main: dist/index.js` ❌ 
      - when package.json `main: src/index.ts` ✅
  - consuming app 'my-app'
    - `pnpm add ../mobx-utils-custom` (locally linked)
    - `pnpm add mobx`

In vitest, the two repos are using a different instance of mobx. This is not the case when running vite dev.






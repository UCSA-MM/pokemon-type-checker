import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
  test: {

    include : ["tests/*"],

    browser: {
      enabled: true,
      testerHtmlPath: "../index.html",
      provider: playwright(),
      instances: [
        { browser: "chromium"}
      ],
    },
  },
})

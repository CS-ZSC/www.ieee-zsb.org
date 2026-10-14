import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
  ...defineCloudflareConfig(),
  // `build` runs the OpenNext build, so point it at the plain Next.js build
  // to avoid it recursively invoking itself.
  buildCommand: "pnpm run build:next",
};

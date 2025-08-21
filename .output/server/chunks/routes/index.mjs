import { c as defineEventHandler, u as useRuntimeConfig } from '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const index = defineEventHandler(() => {
  useRuntimeConfig();
  return {
    message: "Hello world from Nuxt API"
  };
});

export { index as default };
//# sourceMappingURL=index.mjs.map

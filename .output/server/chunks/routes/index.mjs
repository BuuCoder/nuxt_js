import { c as defineEventHandler } from '../_/nitro.mjs';
import jwt from 'jsonwebtoken';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const index = defineEventHandler(() => {
  const token = jwt.sign(
    { user: "batdong4", role: "admin" },
    "secret_key_123",
    { expiresIn: "1h" }
  );
  const decoded = jwt.verify(token, "secret_key_123");
  return {
    message: "Hello world from Nuxt API with JWT \u2705",
    token,
    decoded
  };
});

export { index as default };
//# sourceMappingURL=index.mjs.map

import { c as defineEventHandler } from '../../../_/nitro.mjs';
import { allProducts } from '../index.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const _slug_ = defineEventHandler((event) => {
  var _a;
  const slug = (_a = event.context.params) == null ? void 0 : _a.slug;
  const product = allProducts.find((p) => p.slug === slug);
  if (!product) {
    return { statusCode: 404, message: "Product not found" };
  }
  return product;
});

export { _slug_ as default };
//# sourceMappingURL=_slug_.mjs.map

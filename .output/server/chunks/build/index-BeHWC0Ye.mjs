import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './composables-DWgVTVzC.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Pricing — Positivus" });
    const plans = [
      { name: "Starter", price: "$29/mo", features: ["SEO basics", "Email support", "Analytics reports"] },
      { name: "Growth", price: "$99/mo", features: ["Advanced SEO", "PPC campaigns", "Priority support"] },
      { name: "Enterprise", price: "$299/mo", features: ["Custom strategy", "Dedicated manager", "Full analytics suite"] }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container-std py-14" }, _attrs))}><h1 class="text-3xl md:text-4xl font-extrabold">Pricing Plans</h1><p class="mt-4 text-white/70">Choose a plan that fits your business needs.</p><div class="mt-10 grid md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(plans, (p) => {
        _push(`<div class="card p-6 flex flex-col"><h2 class="font-semibold text-xl">${ssrInterpolate(p.name)}</h2><p class="mt-2 text-2xl font-bold">${ssrInterpolate(p.price)}</p><ul class="mt-4 space-y-2 flex-1"><!--[-->`);
        ssrRenderList(p.features, (f) => {
          _push(`<li class="text-white/70">✔ ${ssrInterpolate(f)}</li>`);
        });
        _push(`<!--]--></ul><button class="btn btn-primary mt-6">Get Started</button></div>`);
      });
      _push(`<!--]--></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BeHWC0Ye.mjs.map

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
    useHead({ title: "Services — Positivus" });
    const services = [
      { title: "Search Engine Optimization", desc: "Improve visibility and organic reach with tailored SEO strategies." },
      { title: "Pay-per-click Advertising", desc: "Drive targeted traffic with high-performing PPC campaigns." },
      { title: "Social Media Marketing", desc: "Engage your audience across platforms with creative campaigns." },
      { title: "Email Marketing", desc: "Nurture leads and boost retention with impactful email campaigns." },
      { title: "Content Creation", desc: "Compelling and optimized content tailored to your audience." },
      { title: "Analytics & Tracking", desc: "Get insights and measure performance with advanced analytics." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container-std py-14" }, _attrs))}><h1 class="text-3xl md:text-4xl font-extrabold">Our Services</h1><p class="mt-4 text-white/70">We offer a range of services to help businesses grow and succeed online.</p><div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(services, (s) => {
        _push(`<div class="card p-6"><h2 class="font-semibold text-xl">${ssrInterpolate(s.title)}</h2><p class="mt-2 text-white/70">${ssrInterpolate(s.desc)}</p></div>`);
      });
      _push(`<!--]--></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DEf5Hzdc.mjs.map

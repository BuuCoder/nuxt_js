import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
    useHead({ title: "About Us — Positivus" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container-std py-14" }, _attrs))}><h1 class="text-3xl md:text-4xl font-extrabold">About Us</h1><p class="mt-4 text-white/70 leading-relaxed max-w-3xl"> At Positivus, we are passionate about helping businesses navigate the digital landscape. Our team of experts specializes in SEO, paid advertising, social media marketing, content strategy, and analytics. </p><section class="mt-10 grid md:grid-cols-2 gap-6"><div class="card p-6"><h2 class="font-semibold text-xl">Our Mission</h2><p class="mt-2 text-white/70"> Empower businesses to grow and succeed online with cutting-edge digital marketing strategies. </p></div><div class="card p-6"><h2 class="font-semibold text-xl">Our Vision</h2><p class="mt-2 text-white/70"> To be a trusted partner for companies aiming to expand their digital presence worldwide. </p></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-4eccjkq8.mjs.map

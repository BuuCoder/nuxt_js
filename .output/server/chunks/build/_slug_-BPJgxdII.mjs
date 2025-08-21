import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useRoute } from './server.mjs';
import { u as useHead } from './composables-DWgVTVzC.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useHead({ title: `${route.params.slug} — Blog — Positivus` });
    const post = {
      title: "Top SEO Trends in 2025",
      content: `
    In 2025, SEO continues to evolve with a focus on AI-driven content,
    voice search, and user experience. Businesses need to adapt to stay competitive.`
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container-std py-14 max-w-3xl" }, _attrs))}><h1 class="text-3xl md:text-4xl font-extrabold">${ssrInterpolate(post.title)}</h1><article class="mt-6 prose prose-invert prose-lg max-w-none"><p>${ssrInterpolate(post.content)}</p></article></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-BPJgxdII.mjs.map

import { _ as __nuxt_component_0 } from './nuxt-link-Cg5djsxB.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import './server.mjs';
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
    useHead({ title: "Blog — Positivus" });
    const posts = [
      { slug: "seo-trends-2025", title: "Top SEO Trends in 2025", excerpt: "Stay ahead of the curve with the latest SEO practices for 2025." },
      { slug: "social-media-strategy", title: "Building a Winning Social Media Strategy", excerpt: "Tips and tricks for creating engaging campaigns." },
      { slug: "ppc-optimization", title: "How to Optimize Your PPC Campaigns", excerpt: "Maximize ROI with these proven PPC tactics." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container-std py-14" }, _attrs))}><h1 class="text-3xl md:text-4xl font-extrabold">Blog</h1><p class="mt-4 text-white/70">Insights, tips, and guides from our digital marketing experts.</p><div class="mt-10 grid md:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(posts, (p) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: p.slug,
          to: `/blog/${p.slug}`,
          class: "card p-6 hover:shadow-ring transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="font-semibold text-xl"${_scopeId}>${ssrInterpolate(p.title)}</h2><p class="mt-2 text-white/70"${_scopeId}>${ssrInterpolate(p.excerpt)}</p><span class="mt-3 inline-block text-accent"${_scopeId}>Read more →</span>`);
            } else {
              return [
                createVNode("h2", { class: "font-semibold text-xl" }, toDisplayString(p.title), 1),
                createVNode("p", { class: "mt-2 text-white/70" }, toDisplayString(p.excerpt), 1),
                createVNode("span", { class: "mt-3 inline-block text-accent" }, "Read more →")
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CLn9B594.mjs.map

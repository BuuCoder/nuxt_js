import { u as useFetch, _ as __nuxt_component_1 } from './fetch-BOPCUqUz.mjs';
import { defineComponent, withAsyncContext, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './composables-DWgVTVzC.mjs';
import './nuxt-link-Cg5djsxB.mjs';
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
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Products — Positivus" });
    const { data: products, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/products", "$DaB8KTHaxh")), __temp = await __temp, __restore(), __temp);
    const search = ref("");
    const sort = ref("featured");
    const filtered = computed(() => {
      if (!products.value) return [];
      let list = [...products.value];
      if (search.value.trim()) {
        const q = search.value.toLowerCase();
        list = list.filter(
          (p) => p.name.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q)
        );
      }
      if (sort.value === "low") {
        list.sort((a, b) => a.price - b.price);
      } else if (sort.value === "high") {
        list.sort((a, b) => b.price - a.price);
      }
      return list;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductCard = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container-std py-10 md:py-14" }, _attrs))}><div class="flex items-center justify-between gap-4"><div class="flex items-center gap-3"><span class="tag">Products</span><p class="text-sm text-white/60">Explore our latest gear</p></div><div class="flex items-center gap-2"><input${ssrRenderAttr("value", unref(search))} placeholder="Search..." class="bg-white/5 border border-white/10 rounded-xl2 px-4 py-2 outline-none focus:ring-2 focus:ring-accent"><select class="bg-white/5 border border-white/10 rounded-xl2 px-3 py-2 outline-none focus:ring-2 focus:ring-accent"><option value="featured"${ssrIncludeBooleanAttr(Array.isArray(unref(sort)) ? ssrLooseContain(unref(sort), "featured") : ssrLooseEqual(unref(sort), "featured")) ? " selected" : ""}>Featured</option><option value="low"${ssrIncludeBooleanAttr(Array.isArray(unref(sort)) ? ssrLooseContain(unref(sort), "low") : ssrLooseEqual(unref(sort), "low")) ? " selected" : ""}>Price: Low → High</option><option value="high"${ssrIncludeBooleanAttr(Array.isArray(unref(sort)) ? ssrLooseContain(unref(sort), "high") : ssrLooseEqual(unref(sort), "high")) ? " selected" : ""}>Price: High → Low</option></select></div></div>`);
      if (unref(pending)) {
        _push(`<div class="mt-10 text-white/60">Loading products...</div>`);
      } else if (unref(error)) {
        _push(`<div class="mt-10 text-red-400"> Failed to load products. </div>`);
      } else {
        _push(`<div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(unref(filtered), (p) => {
          _push(ssrRenderComponent(_component_ProductCard, {
            key: p.id,
            product: p
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      if (!unref(pending) && unref(filtered).length === 0) {
        _push(`<div class="mt-10 text-white/60"> No products found. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B2fHiyXl.mjs.map

import { defineComponent, withAsyncContext, computed, unref, mergeProps, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { u as useFetch, _ as __nuxt_component_1 } from './fetch-BOPCUqUz.mjs';
import { u as useRoute } from './server.mjs';
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
import '@vue/shared';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductGallery",
  __ssrInlineRender: true,
  props: {
    images: {}
  },
  setup(__props) {
    const props = __props;
    const active = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-3" }, _attrs))}><div class="aspect-[4/3] w-full overflow-hidden rounded-xl2 card p-0"><img${ssrRenderAttr("src", props.images[unref(active)])} class="w-full h-full object-cover"></div><div class="grid grid-cols-4 gap-3"><!--[-->`);
      ssrRenderList(props.images, (img, i) => {
        _push(`<button class="${ssrRenderClass([i === unref(active) ? "border-accent" : "border-white/10", "rounded-xl2 overflow-hidden border"])}"><img${ssrRenderAttr("src", img)} class="w-full h-20 object-cover"></button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductGallery.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "ProductGallery" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const { data: product, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/products/${slug}`, "$wZOL5FWIVC")), __temp = await __temp, __restore(), __temp);
    const { data: products } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/products", "$k8iIlpdlwX")), __temp = await __temp, __restore(), __temp);
    useHead({
      title: computed(
        () => product.value ? `${product.value.name} — Positivus` : "Product — Positivus"
      )
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductGallery = __nuxt_component_0;
      const _component_ProductCard = __nuxt_component_1;
      if (unref(pending)) {
        _push(`<main${ssrRenderAttrs(mergeProps({ class: "container-std py-14" }, _attrs))}><p class="text-white/70">Loading product...</p></main>`);
      } else if (unref(error)) {
        _push(`<main${ssrRenderAttrs(mergeProps({ class: "container-std py-14" }, _attrs))}><p class="text-red-400">Failed to load product.</p></main>`);
      } else if (!unref(product)) {
        _push(`<main${ssrRenderAttrs(mergeProps({ class: "container-std py-14" }, _attrs))}><p class="text-white/70">Product not found.</p></main>`);
      } else {
        _push(`<main${ssrRenderAttrs(mergeProps({ class: "container-std py-10 md:py-14" }, _attrs))}><div class="grid lg:grid-cols-2 gap-10">`);
        _push(ssrRenderComponent(_component_ProductGallery, {
          images: unref(product).images
        }, null, _parent));
        _push(`<section><h1 class="text-3xl md:text-4xl font-extrabold">${ssrInterpolate(unref(product).name)}</h1><p class="mt-3 text-white/70">${ssrInterpolate(unref(product).shortDesc)}</p><div class="mt-4 flex items-center gap-3"><div class="text-2xl font-extrabold">$${ssrInterpolate(unref(product).price.toFixed(2))}</div>`);
        if (unref(product).oldPrice) {
          _push(`<div class="text-white/40 line-through"> $${ssrInterpolate(unref(product).oldPrice.toFixed(2))}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(product).rating) {
          _push(`<div class="ml-auto text-sm text-white/70"> ★ ${ssrInterpolate(unref(product).rating.toFixed(1))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mt-6 flex items-center gap-2"><button class="btn btn-primary flex-1">Add to cart</button><button class="btn btn-dark">Buy now</button></div><div class="mt-8 card p-6"><h2 class="font-semibold">Specifications</h2><div class="mt-4 grid sm:grid-cols-2 gap-3"><!--[-->`);
        ssrRenderList(unref(product).specs, (val, key) => {
          _push(`<div class="flex justify-between gap-4 border-b border-white/10 py-2"><span class="text-white/60">${ssrInterpolate(key)}</span><span class="font-medium">${ssrInterpolate(val)}</span></div>`);
        });
        _push(`<!--]--></div></div><div class="mt-6"><h2 class="font-semibold">Description</h2><p class="mt-2 text-white/70 leading-relaxed">${ssrInterpolate(unref(product).description)}</p>`);
        if (unref(product).tags?.length) {
          _push(`<div class="mt-4 flex flex-wrap gap-2"><!--[-->`);
          ssrRenderList(unref(product).tags, (t) => {
            _push(`<span class="tag">${ssrInterpolate(t)}</span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section></div>`);
        if (unref(products)?.length) {
          _push(`<section class="mt-14"><h3 class="font-semibold mb-4">You may also like</h3><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
          ssrRenderList(unref(products)?.filter((p) => p.slug !== unref(product)?.slug).slice(0, 3), (p) => {
            _push(ssrRenderComponent(_component_ProductCard, {
              key: p.id,
              product: p
            }, null, _parent));
          });
          _push(`<!--]--></div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</main>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DH6oc9eb.mjs.map

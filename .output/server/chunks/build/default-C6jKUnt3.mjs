import { _ as __nuxt_component_0 } from './nuxt-link-Cg5djsxB.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Positivus — Landing",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-ink text-white font-sans antialiased" }, _attrs))}><main><header class="sticky top-0 z-50 bg-ink/80 backdrop-blur border-b border-white/10"><nav class="container-std h-16 flex items-center justify-between"><div class="flex items-center gap-3"><div class="size-8 rounded-lg bg-white flex items-center justify-center"><span class="text-ink font-extrabold">★</span></div><span class="font-bold">Positivus</span></div><ul class="hidden md:flex items-center gap-8 text-sm text-white/80"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about-us",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About us`);
          } else {
            return [
              createTextVNode("About us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Services`);
          } else {
            return [
              createTextVNode("Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Products`);
          } else {
            return [
              createTextVNode("Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pricing`);
          } else {
            return [
              createTextVNode("Pricing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div class="flex items-center gap-3"><button class="btn btn-dark hidden sm:inline-flex">Book a consultation</button><button class="btn btn-primary">Request a quote</button></div></nav></header><div class="min-h-[calc(100vh-415px)]">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><footer class="mt-8 border-t border-white/10"><div class="container-std py-10 grid md:grid-cols-[1fr_auto] gap-10"><div class="space-y-4"><div class="flex items-center gap-3"><div class="size-8 rounded-lg bg-white flex items-center justify-center"><span class="text-ink font-extrabold">★</span></div><span class="font-bold">Positivus</span></div><div class="text-sm text-white/70"> Email: info@positivus.com • Phone: 555-987-8901 <br> Address: 1234 Main St, Moonstone City, StarDust State 12345 </div><div class="flex items-center gap-3"><a class="btn btn-primary">Contact us</a></div></div><div class="grid sm:grid-cols-2 gap-6"><div><h5 class="font-semibold mb-3">Links</h5><ul class="space-y-2 text-sm text-white/70"><li><a href="#about" class="hover:text-white">About us</a></li><li><a href="#services" class="hover:text-white">Services</a></li><li><a href="#usecases" class="hover:text-white">Use Cases</a></li><li><a href="#pricing" class="hover:text-white">Pricing</a></li><li><a href="#blog" class="hover:text-white">Blog</a></li></ul></div><div><h5 class="font-semibold mb-3">Newsletter</h5><form class="flex gap-3"><input placeholder="Email" class="min-w-0 flex-1 bg-white/5 border border-white/10 rounded-xl2 px-4 py-3 outline-none focus:ring-2 focus:ring-accent"><button class="btn btn-primary">Subscribe</button></form></div></div></div><div class="container-std py-6 border-t border-white/10 text-sm text-white/50"> © 2025 Positivus. All rights reserved. • <a href="#" class="hover:text-white">Privacy Policy</a></div></footer></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-C6jKUnt3.mjs.map

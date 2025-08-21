import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white text-gray-900" }, _attrs))}><header class="flex items-center justify-between px-10 py-6"><div class="flex items-center space-x-2"><img src="https://crystalpng.com/wp-content/uploads/2025/03/binance_logo.png" alt="Finory" class="h-8"><span class="font-bold text-lg">FINORY COMPANY</span></div><nav class="hidden md:flex space-x-8 text-sm font-medium"><a href="#" class="hover:text-orange-600">How it works</a><a href="#" class="hover:text-orange-600">About</a><a href="#" class="hover:text-orange-600">Pricing</a><a href="#" class="hover:text-orange-600">Holders</a><a href="#" class="hover:text-orange-600">Blog <span class="text-purple-600">(32)</span></a></nav><div class="flex items-center space-x-4"><button class="text-sm">EN</button><button class="bg-black text-white px-4 py-2 rounded-md text-sm">Sign In</button></div></header><section class="px-10 py-20 grid md:grid-cols-2 gap-10 items-center"><div class="space-y-6"><h1 class="text-5xl font-bold leading-tight"><span class="text-orange-600">Tailored</span><br> Banking for a Life<br> of Distinction </h1><p class="text-gray-600 max-w-lg"> Tailored financial services designed to meet unique needs, offering unmatched security, personalized concierge support. </p><div class="flex space-x-4"><button class="bg-purple-600 text-white px-6 py-3 rounded-md shadow hover:bg-purple-700"> Open Account </button><button class="bg-gray-100 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200"> Learn more </button></div><div><p class="text-sm font-medium text-gray-500 mb-2">OUR TRUSTED PARTNERS</p><div class="flex space-x-6 items-center opacity-70"><img src="https://crystalpng.com/wp-content/uploads/2025/03/binance_logo.png" alt="Binance" class="h-6"><img src="https://crystalpng.com/wp-content/uploads/2025/03/binance_logo.png" alt="Ally" class="h-6"><img src="https://crystalpng.com/wp-content/uploads/2025/03/binance_logo.png" alt="LBank" class="h-6"></div></div></div><div class="relative flex justify-center md:justify-end"><div class="absolute top-0 right-20 w-72 h-44 rounded-xl bg-orange-500 text-white p-6 shadow-lg rotate-6"><p class="text-lg font-semibold">**** 0007</p><p class="mt-8">Dany Fox</p></div><div class="absolute top-20 right-0 w-80 h-48 rounded-xl bg-black text-white p-6 shadow-lg -rotate-3"><p class="text-lg font-semibold">4149 5791 3043 3721</p><p class="mt-8">Sam Watson</p></div><div class="absolute -left-12 top-4 bg-white shadow px-3 py-2 rounded-full flex items-center space-x-2"><img src="https://crystalpng.com/wp-content/uploads/2025/03/binance_logo.png" class="h-6 w-6 rounded-full"><span class="text-sm font-medium">Johanna Jones</span></div><div class="absolute -left-8 bottom-20 bg-white shadow px-3 py-2 rounded-full flex items-center space-x-2"><img src="https://crystalpng.com/wp-content/uploads/2025/03/binance_logo.png" class="h-6 w-6 rounded-full"><span class="text-sm font-medium">Andrew Smith</span></div></div></section><footer class="px-10 py-6 flex justify-between items-center border-t"><div class="flex space-x-4"><button class="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center"><i class="fa fa-play"></i></button><button class="rounded-full bg-gray-100 w-10 h-10"></button><button class="rounded-full bg-gray-100 w-10 h-10"></button></div><p class="text-gray-500 text-sm">⭐ Loved by 200k+ users</p></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-EcBAt9U1.mjs.map

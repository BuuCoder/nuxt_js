<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

/* Slider đơn giản cho testimonials */
const active = ref(0);
const testimonials = [{
  quote: "Chúng tôi đã làm việc với Positivus hơn 1 năm và lưu lượng truy cập đã tăng đáng kể nhờ SEO & PPC.",
  name: "John Smith",
  role: "Marketing Director at XYZ Corp",
},
{
  quote: "Nhóm chuyên nghiệp, phản hồi nhanh và thực sự quan tâm đến thành công của doanh nghiệp chúng tôi.",
  name: "Jane Doe",
  role: "CMO at ABC Inc.",
},
{
  quote: "Kết quả vượt mong đợi, chi phí quảng cáo tối ưu và chuyển đổi tăng rõ rệt.",
  name: "Michael Brown",
  role: "Head of Growth at Zeta",
},
];

let timer;
const next = () => (active.value = (active.value + 1) % testimonials.length);
const prev = () =>
  (active.value = (active.value - 1 + testimonials.length) % testimonials.length);

onMounted(() => {
  timer = setInterval(next, 4500);
});
onBeforeUnmount(() => clearInterval(timer));
</script>

<template>
  <!-- Hero -->
  <section class="container-std pt-14 md:pt-20 pb-10 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
    <div>
      <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
        Navigating the <span class="text-accent">digital landscape</span><br /> for success
      </h1>
      <p class="mt-4 text-white/70">
        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO,
        PPC, social media marketing, and content creation.
      </p>
      <div class="mt-6 flex items-center gap-3">
        <button class="btn btn-dark">Book a consultation</button>
        <button class="btn btn-primary">Get started</button>
      </div>

      <!-- Logos -->
      <div class="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-6 opacity-80">
        <div class="h-10 bg-white/5 rounded-lg flex items-center justify-center text-xs">amazon</div>
        <div class="h-10 bg-white/5 rounded-lg flex items-center justify-center text-xs">dribbble</div>
        <div class="h-10 bg-white/5 rounded-lg flex items-center justify-center text-xs">HubSpot</div>
        <div class="h-10 bg-white/5 rounded-lg flex items-center justify-center text-xs">Notion</div>
        <div class="h-10 bg-white/5 rounded-lg flex items-center justify-center text-xs">NETFLIX</div>
        <div class="h-10 bg-white/5 rounded-lg flex items-center justify-center text-xs">zoom</div>
      </div>
    </div>

    <!-- Hình minh họa -->
    <div class="relative">
      <div class="aspect-[4/3] card p-6 overflow-hidden">
        <div class="absolute -right-10 -top-10 w-72 h-72 rounded-full bg-accent/20 blur-3xl"></div>
        <div
          class="absolute right-8 top-8 size-10 rounded-full bg-accent flex items-center justify-center text-black font-bold">
          ▶</div>
        <div class="absolute bottom-8 right-8 size-10 rounded-full bg-white/10 flex items-center justify-center">★</div>
        <div class="w-full h-full grid place-items-center">
          <svg viewBox="0 0 200 200" class="w-72 text-accent/80">
            <g fill="none" stroke="currentColor" stroke-width="2">
              <ellipse cx="100" cy="100" rx="80" ry="40" />
              <ellipse cx="100" cy="90" rx="80" ry="40" />
              <ellipse cx="100" cy="110" rx="80" ry="40" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section id="services" class="container-std py-12 md:py-16">
    <div class="flex items-end justify-between mb-6">
      <div class="flex items-center gap-3">
        <span class="tag">Services</span>
        <p class="text-sm text-white/60 hidden sm:block">
          We offer a range of services to help businesses grow and succeed online.
        </p>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <!-- Service card -->
      <div class="card p-6 grid grid-cols-[1fr_auto] gap-6">
        <div>
          <h3 class="font-semibold">Search engine optimization</h3>
          <p class="text-sm text-white/60 mt-2">Tối ưu từ khóa, on-page, off-page.</p>
          <a href="#" class="mt-4 inline-flex items-center gap-2 text-accent font-semibold">
            Learn more
            <span class="i">→</span>
          </a>
        </div>
        <div class="w-28 h-24 bg-accent/20 rounded-xl2"></div>
      </div>

      <div class="card p-6 grid grid-cols-[1fr_auto] gap-6 bg-accent/10">
        <div>
          <h3 class="font-semibold">Pay‑per‑click advertising</h3>
          <p class="text-sm text-white/60 mt-2">Google Ads, Meta Ads, tối ưu CPA.</p>
          <a href="#" class="mt-4 inline-flex items-center gap-2 text-accent font-semibold">
            Learn more <span>→</span>
          </a>
        </div>
        <div class="w-28 h-24 bg-accent/20 rounded-xl2"></div>
      </div>

      <div class="card p-6 grid grid-cols-[1fr_auto] gap-6">
        <div>
          <h3 class="font-semibold">Social Media Marketing</h3>
          <p class="text-sm text-white/60 mt-2">Chiến lược & nội dung mạng xã hội.</p>
          <a href="#" class="mt-4 inline-flex items-center gap-2 text-accent font-semibold">
            Learn more <span>→</span>
          </a>
        </div>
        <div class="w-28 h-24 bg-accent/20 rounded-xl2"></div>
      </div>

      <div class="card p-6 grid grid-cols-[1fr_auto] gap-6">
        <div>
          <h3 class="font-semibold">Email Marketing</h3>
          <p class="text-sm text-white/60 mt-2">Nuôi dưỡng lead & tự động hóa.</p>
          <a href="#" class="mt-4 inline-flex items-center gap-2 text-accent font-semibold">
            Learn more <span>→</span>
          </a>
        </div>
        <div class="w-28 h-24 bg-accent/20 rounded-xl2"></div>
      </div>

      <div class="card p-6 grid grid-cols-[1fr_auto] gap-6 bg-accent/10">
        <div>
          <h3 class="font-semibold">Content Creation</h3>
          <p class="text-sm text-white/60 mt-2">Bài viết, hình ảnh, video.</p>
          <a href="#" class="mt-4 inline-flex items-center gap-2 text-accent font-semibold">
            Learn more <span>→</span>
          </a>
        </div>
        <div class="w-28 h-24 bg-accent/20 rounded-xl2"></div>
      </div>

      <div class="card p-6 grid grid-cols-[1fr_auto] gap-6">
        <div>
          <h3 class="font-semibold">Analytics & Tracking</h3>
          <p class="text-sm text-white/60 mt-2">Thiết lập đo lường & báo cáo.</p>
          <a href="#" class="mt-4 inline-flex items-center gap-2 text-accent font-semibold">
            Learn more <span>→</span>
          </a>
        </div>
        <div class="w-28 h-24 bg-accent/20 rounded-xl2"></div>
      </div>
    </div>
  </section>

  <!-- Team -->
  <section id="team" class="container-std py-12 md:py-16">
    <div class="flex items-center gap-3 mb-6">
      <span class="tag">Team</span>
      <p class="text-sm text-white/60">Meet the skilled and experienced team.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <div class="card p-6">
        <div class="flex items-center gap-4">
          <div class="size-16 rounded-full bg-accent"></div>
          <div>
            <h4 class="font-semibold">John Smith</h4>
            <p class="text-sm text-white/60">CEO and Founder</p>
          </div>
        </div>
        <p class="text-sm text-white/70 mt-4">
          10+ years in digital marketing. Experience in SEO, PPC, and content strategy.
        </p>
      </div>

      <div class="card p-6">
        <div class="flex items-center gap-4">
          <div class="size-16 rounded-full bg-accent"></div>
          <div>
            <h4 class="font-semibold">Jane Doe</h4>
            <p class="text-sm text-white/60">Director of Operations</p>
          </div>
        </div>
        <p class="text-sm text-white/70 mt-4">
          7+ years in project management and team leadership.
        </p>
      </div>

      <div class="card p-6">
        <div class="flex items-center gap-4">
          <div class="size-16 rounded-full bg-accent"></div>
          <div>
            <h4 class="font-semibold">Michael Brown</h4>
            <p class="text-sm text-white/60">Senior SEO Specialist</p>
          </div>
        </div>
        <p class="text-sm text-white/70 mt-4">
          5+ years in SEO & content. On‑page & keyword research expert.
        </p>
      </div>

      <div class="card p-6">
        <div class="flex items-center gap-4">
          <div class="size-16 rounded-full bg-accent"></div>
          <div>
            <h4 class="font-semibold">Emily Johnson</h4>
            <p class="text-sm text-white/60">PPC Manager</p>
          </div>
        </div>
        <p class="text-sm text-white/70 mt-4">
          3+ years in paid search advertising & performance analysis.
        </p>
      </div>

      <div class="card p-6">
        <div class="flex items-center gap-4">
          <div class="size-16 rounded-full bg-accent"></div>
          <div>
            <h4 class="font-semibold">Brian Williams</h4>
            <p class="text-sm text-white/60">Social Media Specialist</p>
          </div>
        </div>
        <p class="text-sm text-white/70 mt-4">
          4+ years in social content & engagement analytics.
        </p>
      </div>

      <div class="card p-6">
        <div class="flex items-center gap-4">
          <div class="size-16 rounded-full bg-accent"></div>
          <div>
            <h4 class="font-semibold">Sarah Kim</h4>
            <p class="text-sm text-white/60">Content Creator</p>
          </div>
        </div>
        <p class="text-sm text-white/70 mt-4">
          2+ years writing compelling, SEO‑optimized content.
        </p>
      </div>
    </div>

    <div class="mt-6">
      <button class="btn btn-dark">See all team</button>
    </div>
  </section>

  <!-- Testimonials -->
  <section id="testimonials" class="container-std py-12 md:py-16">
    <div class="flex items-center gap-3 mb-6">
      <span class="tag">Testimonials</span>
      <p class="text-sm text-white/60">Hear from our satisfied clients</p>
    </div>

    <div class="relative card p-8 overflow-hidden">
      <!-- Slides -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 transition">
        <article v-for="(t, i) in testimonials" :key="i"
          class="rounded-xl2 border border-white/10 bg-black/40 p-6 transition"
          :class="i === active ? 'shadow-ring' : ''">
          <p class="text-white/90 leading-relaxed">“{{ t.quote }}”</p>
          <div class="mt-6 text-sm text-white/70">
            <div class="font-semibold text-white">{{ t.name }}</div>
            <div>{{ t.role }}</div>
          </div>
        </article>
      </div>

      <!-- Controls -->
      <div class="mt-6 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button @click="prev" class="btn btn-dark px-3">←</button>
          <button @click="next" class="btn btn-dark px-3">→</button>
        </div>

        <div class="flex items-center gap-2">
          <button v-for="(t, i) in testimonials" :key="'dot' + i" @click="active = i" class="size-2 rounded-full"
            :class="i === active ? 'bg-accent' : 'bg-white/30'" />
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="container-std py-12 md:py-16">
    <div class="grid md:grid-cols-[1fr_420px] gap-8 items-stretch">
      <div class="card p-6">
        <div class="flex items-center gap-3 mb-4">
          <span class="tag">Contact Us</span>
          <p class="text-sm text-white/60">Let’s Discuss Your Digital Marketing Needs</p>
        </div>

        <form class="grid gap-4">
          <div class="flex gap-4">
            <label class="flex items-center gap-2 text-sm">
              <input type="radio" name="type" checked class="accent-black ring-accent" />
              <span>Say Hi</span>
            </label>
            <label class="flex items-center gap-2 text-sm">
              <input type="radio" name="type" class="accent-black ring-accent" />
              <span>Get a Quote</span>
            </label>
          </div>

          <input placeholder="Name"
            class="w-full bg-white/5 border border-white/10 rounded-xl2 px-4 py-3 outline-none focus:ring-2 focus:ring-accent" />
          <input placeholder="Email" type="email"
            class="w-full bg-white/5 border border-white/10 rounded-xl2 px-4 py-3 outline-none focus:ring-2 focus:ring-accent" />
          <textarea rows="5" placeholder="Message"
            class="w-full bg-white/5 border border-white/10 rounded-xl2 px-4 py-3 outline-none focus:ring-2 focus:ring-accent"></textarea>

          <button type="button" class="btn btn-dark w-full">Send Message</button>
        </form>
      </div>

      <div class="card relative overflow-hidden grid place-items-center">
        <div class="absolute -right-10 -top-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        <div class="absolute -left-10 -bottom-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div class="text-7xl text-accent">✦</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.i {
  display: inline-block;
  transform: translateY(1px);
}

.size-2 {
  width: .5rem;
  height: .5rem
}

.size-8 {
  width: 2rem;
  height: 2rem
}

.size-10 {
  width: 2.5rem;
  height: 2.5rem
}

.size-16 {
  width: 4rem;
  height: 4rem
}

.rounded-xl2 {
  border-radius: 1.25rem;
}

/* khớp extend */
</style>

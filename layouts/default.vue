<template>
  <div>
    <div class="speed-lines">
      <div v-for="n in 20" :key="n" class="speed-line" :style="{
        left: `${(n - 1) * 5}%`,
        transform: `rotate(${(n % 3 - 1) * 8}deg)`,
        opacity: 0.05 + (n % 5) * 0.02,
        height: `${70 + (n % 4) * 10}%`,
        top: `${(n % 3) * 10}%`
      }"></div>
    </div>

    <span class="sfx" style="top:8%; left:5%; font-size:2.5rem;">SHING!</span>
    <span class="sfx" style="bottom:15%; right:8%; font-size:3rem;">DOKUN</span>
    <span class="sfx" style="top:40%; right:3%; font-size:2rem;">BAM</span>
    <span class="sfx" style="bottom:30%; left:3%; font-size:1.8rem;">ZAWOO</span>

    <nav class="nav-bar">
      <div class="container nav-inner">
        <NuxtLink to="/" class="nav-logo">VLADIMIR</NuxtLink>
        <ul class="nav-links">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/projects">Projects</NuxtLink></li>
          <li><a href="https://github.com/vl444dimir" target="_blank" rel="noopener">GitHub</a></li>
        </ul>
      </div>
    </nav>

    <main>
      <slot />
    </main>

    <footer>
      <div class="container">
        <div class="divider"></div>
        <p>VLADIMIR &bull; FULL-STACK DEVELOPER &bull; 2026</p>
      </div>
    </footer>
  </div>
</template>

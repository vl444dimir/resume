<template>
  <div class="page-section">
    <div class="container">
      <div v-if="project" class="fade-in">
        <NuxtLink to="/projects" class="btn btn-ghost" style="margin-bottom: 1.5rem; font-size: 0.8rem;">
          ← BACK TO PROJECTS
        </NuxtLink>

        <div class="manga-panel angled" style="max-width: 900px;">
          <div class="sticky-label">{{ project.role }}</div>
          <div class="impact-text" style="font-size: clamp(2rem, 4vw, 3rem); margin-top: 0.5rem;">
            {{ project.title }}
          </div>
          <div class="project-meta" style="font-size: 1rem; margin: 0.5rem 0;">{{ project.subtitle }}</div>
          <div class="project-meta" style="font-size: 0.85rem;">
            <a :href="`https://github.com/${project.repo}`" target="_blank" rel="noopener">
              github.com/{{ project.repo }}
            </a>
          </div>
        </div>

        <div class="manga-panel angled-alt" style="max-width: 900px; margin-top: 1.5rem;">
          <h2>ABOUT</h2>
          <p>{{ project.description }}</p>
        </div>

        <div v-if="project.image" class="manga-panel" style="max-width: 900px; margin-top: 1.5rem;">
          <h2>SCREENSHOT</h2>
          <div style="margin-top: 0.75rem;">
            <img
              :src="project.image"
              :alt="project.title"
              class="gallery-thumb"
              @click="lightboxOpen = true"
            >
          </div>
        </div>

        <div v-if="project.pdf" class="manga-panel angled-alt" style="max-width: 900px; margin-top: 1.5rem;">
          <h2>PRESENTATION</h2>
          <p style="margin-bottom: 1rem; font-size: 0.9rem;">Pitch deck for {{ project.title }}</p>
          <div class="pdf-embed-wrapper">
            <iframe
              :src="project.pdf"
              class="pdf-embed"
              title="Presentation"
            ></iframe>
          </div>
          <div style="margin-top: 1rem;">
            <a :href="project.pdf" target="_blank" class="btn btn-primary" download>
              DOWNLOAD PDF →
            </a>
          </div>
        </div>

        <div class="manga-panel" style="max-width: 900px; margin-top: 1.5rem;">
          <h2>STACK</h2>
          <div class="stack-tags" style="margin-top: 0.5rem;">
            <span v-for="tech in project.stack" :key="tech" class="tech-tag" style="font-size: 0.85rem; padding: 0.35rem 0.8rem;">{{ tech }}</span>
          </div>
        </div>

        <div class="manga-panel angled" style="max-width: 900px; margin-top: 1.5rem;">
          <h2>KEY FEATURES</h2>
          <ul class="feature-list stagger" style="margin-top: 1rem;">
            <li v-for="(feature, i) in project.features" :key="i" :style="{ animationDelay: `${i * 80}ms` }">
              {{ feature }}
            </li>
          </ul>
        </div>

        <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
          <a :href="`https://github.com/${project.repo}`" target="_blank" rel="noopener" class="btn btn-primary">
            VIEW ON GITHUB →
          </a>
        </div>
      </div>

      <div v-else>
        <p>Project not found.</p>
        <NuxtLink to="/projects" class="btn btn-ghost">← BACK TO PROJECTS</NuxtLink>
      </div>
    </div>

    <div v-if="lightboxOpen && project?.image" class="lightbox-overlay" @click.self="lightboxOpen = false">
      <button class="lightbox-close" @click="lightboxOpen = false">✕</button>
      <img :src="project.image" :alt="project.title" class="lightbox-image">
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/composables/projects'

const route = useRoute()
const id = Number(route.params.id)
const project = computed(() => projects.find(p => p.id === id))

const lightboxOpen = ref(false)
</script>

<template>
  <div class="page-section">
    <div class="container">
      <div class="manga-panel" style="max-width: 800px; margin-bottom: 3rem;">
        <div class="impact-text" style="font-size: clamp(2rem, 4vw, 3rem);">
          PROJECTS
        </div>
        <p style="margin-top: 0.75rem; max-width: 600px;">
          7 projects &mdash; from agro monitoring to ML courses, GPS tracking to AI antifraud.
        </p>
      </div>

      <div class="project-grid stagger">
        <div v-for="project in sortedProjects" :key="project.id" class="project-card">
          <div class="sticky-label">{{ project.role }}</div>
          <h3 style="margin-top: 0.5rem;">
            <span v-if="project.starred" class="star-icon">★</span>
            {{ project.title }}
          </h3>
          <div class="project-meta">{{ project.subtitle }}</div>
          <p style="font-size: 0.9rem; margin-bottom: 0.75rem;">{{ project.description }}</p>
          <div class="stack-tags">
            <span v-for="tech in project.stack" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
          <NuxtLink :to="`/projects/${project.id}`" class="btn btn-ghost" style="margin-top: 1rem; font-size: 0.8rem;">
            DETAILS →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/composables/projects'

const sortedProjects = computed(() =>
  [...projects].sort((a, b) => {
    if (a.starred && !b.starred) return -1
    if (!a.starred && b.starred) return 1
    return a.id - b.id
  })
)
</script>

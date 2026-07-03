<template>
  <div>
    <section class="hero-section">
      <div class="container">
        <div class="manga-panel angled" style="max-width: 800px; border-width: 4px;">
          <div class="impact-text">
            <span>HI, I'M</span><br>
            <span class="burst">VLADIMIR</span>
          </div>
          <div class="divider" style="margin: 1.5rem 0;"></div>
          <p style="font-size: 1.2rem; font-family: var(--font-display); letter-spacing: 0.05em;">
            FULL-STACK DEVELOPER
          </p>
          <p style="margin-top: 0.75rem; max-width: 600px; font-size: 0.95rem;">
            React &bull; FastAPI &bull; Java Spring Boot &bull; PHP Yii3 &bull; PostgreSQL<br>
            Building web platforms, IoT systems, mobile apps, and AI solutions
          </p>
          <div style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <NuxtLink to="/projects" class="btn btn-primary">VIEW PROJECTS</NuxtLink>
            <a href="https://github.com/vl444dimir" target="_blank" rel="noopener" class="btn btn-ghost">GITHUB</a>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2 class="fade-in" style="margin-bottom: 2rem;">TECH STACK</h2>
        <div class="skill-grid stagger">
          <div class="skill-category" style="position: relative;">
            <span class="sticky-label">Frontend</span>
            <div style="margin-top: 1rem;">
              <span class="tech-tag">React 18</span>
              <span class="tech-tag">Next.js 14</span>
              <span class="tech-tag">TypeScript</span>
              <span class="tech-tag">Vite</span>
              <span class="tech-tag">Ant Design</span>
              <span class="tech-tag">Tailwind CSS</span>
              <span class="tech-tag">Leaflet</span>
              <span class="tech-tag">MapLibre GL</span>
              <span class="tech-tag">Recharts</span>
              <span class="tech-tag">Vue (Nuxt)</span>
            </div>
          </div>
          <div class="skill-category" style="position: relative;">
            <span class="sticky-label">Mobile</span>
            <div style="margin-top: 1rem;">
              <span class="tech-tag">React Native</span>
              <span class="tech-tag">Expo</span>
              <span class="tech-tag">Flutter 3</span>
              <span class="tech-tag">Dart</span>
            </div>
          </div>
          <div class="skill-category" style="position: relative;">
            <span class="sticky-label">Backend</span>
            <div style="margin-top: 1rem;">
              <span class="tech-tag">Python FastAPI</span>
              <span class="tech-tag">Java Spring Boot</span>
              <span class="tech-tag">PHP Yii 3</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">JWT / OAuth</span>
              <span class="tech-tag">REST API</span>
              <span class="tech-tag">WebSocket</span>
            </div>
          </div>
          <div class="skill-category" style="position: relative;">
            <span class="sticky-label">Database & Infra</span>
            <div style="margin-top: 1rem;">
              <span class="tech-tag">PostgreSQL</span>
              <span class="tech-tag">PostGIS</span>
              <span class="tech-tag">MySQL</span>
              <span class="tech-tag">Redis</span>
              <span class="tech-tag">Docker Compose</span>
              <span class="tech-tag">Nginx</span>
              <span class="tech-tag">Alembic</span>
            </div>
          </div>
          <div class="skill-category" style="position: relative;">
            <span class="sticky-label">AI & IoT</span>
            <div style="margin-top: 1rem;">
              <span class="tech-tag">YOLOv8</span>
              <span class="tech-tag">Sentinel Hub</span>
              <span class="tech-tag">pandas / numpy</span>
              <span class="tech-tag">TCP Binary</span>
              <span class="tech-tag">GPS Tracking</span>
              <span class="tech-tag">Geofencing</span>
            </div>
          </div>
          <div class="skill-category" style="position: relative;">
            <span class="sticky-label">Tools</span>
            <div style="margin-top: 1rem;">
              <span class="tech-tag">Git / GitHub</span>
              <span class="tech-tag">Gradle</span>
              <span class="tech-tag">Codeception</span>
              <span class="tech-tag">PSalm</span>
              <span class="tech-tag">Figma</span>
              <span class="tech-tag">Netlify</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <h2 class="fade-in" style="margin-bottom: 2rem;">HIGHLIGHTED PROJECTS</h2>
        <div class="project-grid stagger">
          <div v-for="(project, i) in featuredProjects" :key="project.id" class="project-card">
            <div class="sticky-label">{{ project.role }}</div>
            <h3 style="margin-top: 0.5rem;">{{ project.title }}</h3>
            <div class="project-meta">{{ project.subtitle }}</div>
            <p style="font-size: 0.9rem; margin-bottom: 0.75rem;">{{ project.description }}</p>
            <div class="stack-tags">
              <span v-for="tech in project.stack.slice(0, 5)" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
            <NuxtLink :to="`/projects/${project.id}`" class="btn btn-ghost" style="margin-top: 1rem; font-size: 0.8rem;">
              DETAILS →
            </NuxtLink>
          </div>
        </div>
        <div style="text-align: center; margin-top: 2rem;">
          <NuxtLink to="/projects" class="btn btn-primary">VIEW ALL PROJECTS</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/composables/projects'

const featuredProjects = projects.slice(0, 3)
</script>

export interface Project {
  id: number
  title: string
  subtitle: string
  repo: string
  description: string
  stack: string[]
  features: string[]
  role: string
  image?: string
  imageLabel?: string
  pdf?: string
  starred?: boolean
}

export function getSortedProjects(): Project[] {
  return [...projects].sort((a, b) => {
    if (a.id === 5) return -1
    if (b.id === 5) return 1
    if (a.starred && !b.starred) return -1
    if (!a.starred && b.starred) return 1
    return a.id - b.id
  })
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'DalaInfo',
    subtitle: 'Agro Monitoring Platform',
    repo: 'vl444dimir/agroproject',
    description: 'Information-analytical system for monitoring the use of fertilizers and pesticides in Kazakhstan\'s agricultural sector. SPA with role-based access, real-time dashboards, and Excel import/export.',
    stack: ['React 18', 'Ant Design', 'Leaflet', 'Java 21', 'Spring Boot 4', 'PostgreSQL 16', 'Docker', 'JWT'],
    features: [
      'JWT auth with role-based routing (user/employee/admin)',
      'Dashboard with KPI cards, Leaflet map, charts, AI recommendations',
      'Subsidies CRUD with Excel export/import wizard',
      'Harvest tracking with district filtering',
      'Fertilizer/pesticide calculator with localStorage history',
      'Audit event logging with PDF/DOCX/XLSX export',
      'Dual API: real Spring Boot backend + mock json-server',
      'Docker Compose with Nginx production config'
    ],
    role: 'Frontend developer'
  },
  {
    id: 2,
    title: 'SafeMektep',
    subtitle: 'School GPS Tracking System',
    repo: 'TimQRB/trackerschool',
    description: 'Real-time GPS tracking system for schoolchildren using HC02 wearable bracelets. Web dashboard for schools and admin, mobile app for parents.',
    stack: ['React 18', 'TypeScript', 'React Native (Expo)', 'Python 3.12', 'FastAPI', 'PostgreSQL 16 + PostGIS', 'Redis', 'Docker', 'JWT'],
    features: [
      'Real-time tracking on Leaflet map with WebSocket via Redis Pub/Sub',
      'TCP Gateway handling binary protocol from HC02 trackers',
      'Geofencing with PostGIS point-in-polygon detection',
      'SOS alerts, heart rate, SpO2, step tracking from wearables',
      'AT Command Web Terminal for serial/USB tracker config',
      'Batch device commands (lesson mode, GPS interval, SMS)',
      'Attendance logging, FCM push notifications, health records',
      'Parent mobile app (Expo) + school admin panel'
    ],
    role: 'Full-stack developer (frontend + gateway + backend)',
    starred: true
  },
  {
    id: 3,
    title: 'JailTracker',
    subtitle: 'Electronic Monitoring System',
    repo: 'TimQRB/jailtrecker',
    description: 'Web-based electronic monitoring system for supervised persons using electronic bracelets. Real-time telemetry, geofencing, and incident detection.',
    stack: ['React 18', 'TypeScript', 'MapLibre GL', 'Leaflet', 'Python 3.12', 'FastAPI', 'PostgreSQL 16', 'Docker', 'WebSocket'],
    features: [
      'Real-time bracelet telemetry ingestion (GPS, battery, pulse, WiFi)',
      'Polygon-based geofencing with incident detection engine',
      'Incidents: GEOZONE_EXIT, WIFI_LOST, PULSE_LOST, LOW_BATTERY',
      'WebSocket real-time map and incident updates',
      'Admin panel tabs: inmates, bracelets, geofences, incidents, users',
      'JWT role-based authentication',
      'Device simulator for testing telemetry scenarios',
      'Alembic database migrations'
    ],
    role: 'Full-stack developer (frontend + backend)',
    starred: true
  },
  {
    id: 4,
    title: 'EcoBaqylau AI',
    subtitle: 'Environmental Monitoring Platform',
    repo: 'TimQRB/ecoproject',
    description: 'AI-powered environmental violation reporting platform. Citizens report violations via mobile app, system analyzes photos with YOLOv8, admin panel for inspectors.',
    stack: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Flutter 3 + Dart', 'FastAPI', 'PostgreSQL 15 + PostGIS', 'YOLOv8', 'Docker'],
    features: [
      'Citizen mobile app (Flutter) for violation reports with photo + geolocation',
      'YOLOv8-based photo analysis for violation category detection',
      'Admin web panel (Next.js) with dashboard, map clustering, report management',
      'Full report lifecycle: new → review → confirm → progress → resolved',
      'Dashboard analytics with Recharts, map clustering visualization',
      'JWT role-based auth (citizen/inspector/admin)',
      'Docker Compose with Nginx reverse proxy, demo data seeding'
    ],
    role: 'Full-stack developer (web + mobile + backend)'
  },
  {
    id: 5,
    title: 'CyberShield',
    subtitle: 'Agri-Antifraud Hackathon',
    repo: 'vl444dimir/hackathon',
    description: 'Antifraud system for detecting anomalous subsidy applications using satellite NDVI data. Built for CyberShield Hackathon 2026.',
    stack: ['Python (pandas, numpy)', 'Sentinel Hub API', 'Leaflet', 'WFS Geodata', 'HTML/CSS'],
    features: [
      'Fetched 15k+ cadastral field boundaries from government WFS server',
      'NDVI vegetation index via Sentinel Hub Statistical API',
      'Risk scoring: (subsidy_per_ha / mean) × max(0, 1 - NDVI)',
      'Self-contained inspection dashboard for tablets',
      'FRAUD / SUSPICIOUS / CLEAN verdict classification',
      'Offline-capable inspection checklist with photo capture'
    ],
    role: 'Developer (data + frontend + analysis)',
    image: '/images/cybersheid.jpg',
    imageLabel: 'HACKATHON VICTORY',
    pdf: '/images/agro67-pitch.pdf',
    starred: true
  },
  {
    id: 6,
    title: 'University Partnerships',
    subtitle: 'Landing Page & Admin Panel',
    repo: 'vl444dimir/landingSKU',
    description: 'Multi-language landing page for Kozybayev University international partnerships with admin panel. Built with Yii 3 framework.',
    stack: ['PHP 8.2', 'Yii 3', 'MySQL', 'Docker', 'Nginx', 'Codeception', 'PSalm'],
    features: [
      'Partner organization cards with individual detail pages',
      'Admin panel with authentication and CRUD for partnerships',
      'Logo upload and file serving',
      'Docker Compose infrastructure (PHP + MySQL + Nginx)',
      'Kazakh locale support (i18n)',
      'Codeception testing, Psalm static analysis'
    ],
    role: 'Frontend + backend developer',
    image: '/images/partners.png',
    starred: true
  },
  {
    id: 7,
    title: 'KU-Course',
    subtitle: 'ML Learning Platform',
    repo: 'Tokud0/ku-course',
    description: 'Web platform for taking Machine Learning courses with role-based access, quizzes, progress tracking, and certificates. Built with Yii3 and FrankenPHP.',
    stack: ['PHP 8.4', 'Yii3', 'PostgreSQL 16', 'Docker Compose', 'FrankenPHP', 'Codeception', 'Psalm', 'HTML/CSS/JS'],
    features: [
      'Role-based access: admin, instructor, student',
      'Course structure: Course → Modules → Lessons (lecture/practice/test)',
      'Code and file attachments to lessons',
      'Quizzes with auto-grading (single/multiple choice, text input)',
      'Progress tracking per course (%)',
      'Certificates on course completion',
      'Lesson discussions with nested replies',
      'Session-based authentication'
    ],
    role: 'Frontend developer + backend bug fixes',
    image: '/images/kucourse.png',
    starred: true
  }
]

<script setup lang="ts">
import BaseSection from './../BaseSection.vue';

const skillSections = [
  {
    label: 'Languages & Standards',
    note: 'TypeScript, ES6, PHP / HTML, CSS',
  },
  {
    label: 'Front-End & UI Frameworks',
    note: 'Vue, React, Quasar, jQuery, Bootstrap, Tailwind CSS',
  },
  {
    label: 'State Management',
    note: 'Vuex, Pinia, Redux',
  },
  {
    label: 'Testing & Monitoring',
    note: 'Postman, Prometheus, Grafana, Nightwatch.js, Mocha, Chai, Sinon',
  },
  {
    label: 'Build & Code Quality Tools',
    note: 'Composer, Webpack, Gulp, Grunt, ESLint, Prettier',
  },
  {
    label: 'Storages',
    note: 'IndexedDB, PostgreSQL, MySQL, MariaDB, Elasticsearch, MongoDB, Redis, S3',
  },
  {
    label: 'Payment Systems',
    note: 'Stripe, PayPal, Braintree',
  },
  {
    label: 'Communication',
    note: 'REST, GraphQL, gRPC, tRPC, WebSockets, AJAX, SSE',
  },
  {
    label: 'Web Servers & Frameworks',
    note: 'Express, Nest, NGINX',
  },
  {
    label: 'Performance',
    note: 'CDN, Redis, Webworkers, Lazyload, Critical CSS',
  },
  {
    label: 'CI / CD',
    note: 'K8s, Docker, Capistrano, GitHub Actions, Jenkins',
  },
  {
    label: 'CSS Preprocessors',
    note: 'Sass, Less, Stylus',
  },
  {
    label: 'HTML/CSS Methodologies',
    note: 'BEM, Pixel-perfect, Responsive, Semantic',
  },
  {
    label: 'Version Control',
    note: 'Git, SVN, GitHub, GitLab',
  },
  {
    label: 'Command Line & OS',
    note: 'Tools CLI, Remote SSH, Linux Ubuntu',
  },
  {
    label: 'Patterns & Principles',
    note: 'DRY, KISS, YAGNI, OOP',
  },
  {
    label: 'Design Tools',
    note: 'Photoshop, Figma, Illustrator, Sketch',
  },
  {
    label: 'Communication & PM Tools',
    note: 'Jira, Asana, Monday, Trello, Slack',
  },
]
</script>

<template>
  <BaseSection title="Skills">
    <div class="skills">
      <div
        class="skills__item"
        v-for="skillSection in skillSections"
        :key="skillSection.label"
      >
        <span class="skills__item__label">
          {{ skillSection.label }}
        </span>

        <span
          v-if="skillSection.note"
          class="skills__item__note"
        >
          {{ skillSection.note }}
        </span>
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss">
.skills
{
  display: grid;
  grid-template-rows: repeat( 6, auto );
  gap: 1em;
  grid-auto-flow: column;

  @media screen and (max-width: 1024px)
  {
    grid-template-rows: repeat( 9, auto );
  }

  @media screen and (max-width: 560px)
  {
    grid-template-columns: 1fr;
    grid-template-rows: unset;
    grid-auto-flow: unset;
  }

  .skills__item
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 19em;
    margin: auto;
    text-align: center;
    line-height: 1.6;

    &__label
    {
      font-weight: 600;
      font-style: italic;
    }

    &__note
    {
      margin-top: .5em;
      font-size: .9em;
      font-style: italic;
    }

    &::after
    {
      content: '';
      width: 3em;
      margin: 1em 0 1.3em;
      border-bottom: 1px solid var(--color-light-dark);
    }

    &:last-child
    {
      &::after
      {
        display: none;
      }
    }
  }
}
</style>
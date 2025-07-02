<script setup lang="ts">
import Project from './Project.vue';

const repoUrl = 'https://github.com/vadim-cvy/wp-boilerplate-public'
</script>

<template>
  <Project title="WP Theme / Plugin Boilerplate">
    <template #summary>
      <p>
        Exactly what you're looking for if you want to see my code!
      </p>

      <p>
        See <a :href="repoUrl" target="blank">this</a> GitHub repository.
      </p>
    </template>

    <template #problem-description>
      <p>
        The 2 agencies I worked at had a problem with codebase standardization.
      </p>

      <p>
        Reasons:
      </p>

      <ul>
        <li>No well-defined internal standards or guidelines.</li>
        <li>Many small to medium-sized projects.</li>
        <li>Developers writing code and organizing projects in their own way.</li>
        <li>Frequent developer switching between projects due to time constraints of the original code authors.</li>
      </ul>

      <p>
        Each new project required developers to spend time familiarizing themselves with the codebase, which was often inconsistent and poorly documented. This made it difficult to maintain and scale.
      </p>
    </template>

    <template #solution-description>
      <p>
        I created a boilerplate that maintained flexibility and did not restrict developers in their work. The purpose of the boilerplate was to prevent desynchronization between different projects in the file structure and codebase for core WordPress functionalities like shortcodes, metaboxes, post types, etc.
      </p>

      <p>
        This boilerplate, along with new project management approaches introduced by the agencies, led to a significant improvement in codebase quality and maintainability. Developers were no longer spending time on repetitive basic tasks, and newly onboarded team members could start working on projects faster since they were already familiar with the file structure and basic codebase.
      </p>

      <p>
        The boilerplate includes/implements:
      </p>

      <ul>
        <li>
          Comprehensive instructions in the <code>README.md</code>.
        </li>

        <li>
          Helper classes for common WordPress tasks:
          <ul>
            <li>Shortcodes</li>
            <li>Post types</li>
            <li>Posts</li>
            <li>Taxonomies</li>
            <li>Metaboxes</li>
            <li>Assets management</li>
            <li>Etc.</li>
          </ul>
        </li>

        <li>
          A site setup validator for plugin dependencies, constants, settings, etc.
        </li>

        <li>
          Composer integration and PHP class autoloading.
        </li>

        <li>
          Standardized file structure for:
          <ul>
            <li>CSS assets</li>
            <li>JS assets</li>
            <li>Templates</li>
          </ul>
        </li>

        <li>
          Tools for asset source file watching (SCSS, TypeScript), compilation, and bundling (Webpack, Gulp).
        </li>

        <li>
          WP All-in-One Migration preset configurations.
        </li>

        <li>
          Astra/Beaver Builder settings synchronization (e.g., buttons, responsive breakpoints, etc.).
        </li>

        <li>
          And several other features (see the <a :href="repoUrl" target="blank">GitHub repository</a>).
        </li>
      </ul>
    </template>
  </Project>
</template>
<script setup lang="ts">
import Project from './Project.vue';
</script>

<template>
  <Project title="WP Multisite for Multi-Department Company">
    <template #problem-description>
      <p>
        The company I developed this project for had multiple departments, each with unique requirements. However, much of the business logic and design elements needed to be shared across all sites within the network.
      </p>
    </template>

    <template #solution-description>
      <p>
        To address these needs, I implemented a multisite network with the following components:
      </p>

      <ol>
        <li>
          <i>Global Core Plugin</i> - a plugin applied to the entire network.
        </li>

        <li>
          <i>Department-Specific Core Plugins</i> - one plugin for each department's sub-site.
        </li>

        <li>
          <i>Global Parent Theme</i> - a shared theme for common design elements.
        </li>

        <li>
          <i>Department-Specific Child Themes</i> - tailored themes for each sub-site.
        </li>
      </ol>

      <h5>
        Why Multisite?
      </h5>

      <p>
        A multisite network offered several advantages:
      </p>

      <ul>
        <li>
          Streamlined Codebase and Management. It simplified both the code structure and the settings management.
        </li>
        <li>
          Efficiency. While it's technically possible to achieve similar results without multisite using various CD tools, a multisite setup provided a significantly faster solution.
        </li>
        <li>
          No Typical Drawbacks. Issues often associated with multisite, such as a shared database, were not relevant to this project.
        </li>
      </ul>

      <h5>
        Why Separate Code Between Plugins and Themes?
      </h5>

      <p>
        Plugins act as the Model. Responsible for business logic and core functionalities.
      </p>

      <p>
        Themes act as the View. Focused on the design and user interface.
      </p>

      <p>
        This separation adhered to development best practices, ensuring clarity and maintainability for the considerable amount of code involved.
      </p>

      <h5>
        Why Split Logic Between Core and Department-Specific Components?
      </h5>

      <p>
        Simplified Maintenance. Isolating department-specific code minimizes the risk of errors. For instance:
      </p>

      <ul>
        <li>
          Code for Department A is not activated on Department B's site.
        </li>
        <li>
          Changes to Department C's code won't affect Departments A or B.
        </li>
      </ul>

      <p>
        Flexibility. Each department can:
      </p>

      <ul>
        <li>
          Utilize its own technologies.
        </li>
        <li>
          Use different versions of the same libraries without conflict.
        </li>
      </ul>

      <p>
        This architecture ensured a robust, scalable, and efficient solution tailored to the company's diverse needs.
      </p>
    </template>
  </Project>
</template>
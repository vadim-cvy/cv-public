<script setup lang="ts">
import Project from './Project.vue';
</script>

<template>
  <Project title="Knowledge Base with Instant-Autocomplete Search for 10M+ Items">
    <template #problem-description>
      <p>
        A knowledge base website with a filtering feature that includes several fields. One of the key components is a text input for searching by content.
      </p>
    </template>

    <template #solution-description>
      <h5>
        ElasticSearch Integration
      </h5>

      <p>
        Large text data is stored in Elasticsearch to minimize the size of the SQL database (MariaDB).
      </p>

      <h5>
        SQL Database
      </h5>

      <ul>
        <li>
          Structure. The SQL database stores only item titles and meta-information. Data is distributed across three tables for efficiency:

          <ul>
            <li>
              Primary Data Table: Contains essential information, such as titles and core details.
            </li>
            <li>
              Filterable Data Table: Stores data specifically used for filtering items.
            </li>
            <li>
              Metadata Table: Contains information not relevant to filtering.
            </li>
          </ul>
        </li>

        <li>
          Indexes for Queries Optimization:

          <ul>
            <li>
              The filterable data table is equipped with multiple indexes, including composite indexes tailored for specific query types.
            </li>
            <li>
              Although some composite indexes overlap, resulting in increased storage use and slower write times, this trade-off is acceptable because the database workload is predominantly read-heavy.
            </li>
          </ul>
        </li>

        <li>
          Data Joins:

          <ul>
            <li>
              For complete query results, data from the primary and metadata tables is joined with filterable table data using.
            </li>
          </ul>
        </li>

        <li>
          Partitioning:

          <ul>
            <li>
              Data is devided via <code>PARTITION</code> directive into smaller, more manageable parts for faster access.
            </li>
          </ul>
        </li>
      </ul>

      <h5>
        Caching
      </h5>

      <ul>
        <li>
          Redis: Stores the most frequently accessed item data and filter search results.
        </li>
        <li>
          Frontend Local Storage: Caches data on the client side.
        </li>
      </ul>
    </template>
  </Project>
</template>
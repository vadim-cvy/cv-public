<script setup lang="ts">
import Hero from './components/Hero.vue';
import Skills from './components/Skills/Skills.vue';
import TopClients from './components/TopClients/TopClients.vue';
import Projects from './components/Projects/Projects.vue';
import AIExperience from './components/AIExperience/AIExperience.vue';
import Contacts from './components/Contacts/Contacts.vue';
import WorkExperience from './components/WorkExperience/WorkExperience.vue';
</script>

<template>
  <main>
    <Hero/>
    <TopClients/>
    <Skills/>
    <!-- <Projects></Projects> -->
    <AIExperience />
    <!-- <WorkExperience /> -->
    <Contacts />
  </main>
</template>
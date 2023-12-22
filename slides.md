---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shikiji
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
title: Welcome to Slidev
mdc: true
---

# Presentation slides for developers

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
layout: default
---

# Table of contents

<Toc maxDepth="2"></Toc>

---
transition: fade-out
src: ./pages/01-introduction.md
hide: false
---

---
transition: fade-out
src: ./pages/02-traditionalvscloudbased.md
hide: false
---

---
transition: fade-out
layout: two-cols
src: ./pages/03-advantages.md
hide: false
---

---
transition: fade-out
src: ./pages/04-security.md
hide: false
---

---
transition: fade-out
src: ./pages/05-securityandbenefits.md
hide: false
---

---
transition: fade-out
src: ./pages/06-conclusion.md
hide: false
---

---
transition: fade-out
src: ./pages/07-virtualbox.md
hide: false
---

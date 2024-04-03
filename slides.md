---
theme: seriph
background: https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/IBM_Electronic_Data_Processing_Machine_-_GPN-2000-001881.jpg/2560px-IBM_Electronic_Data_Processing_Machine_-_GPN-2000-001881.jpg
class: text-center
highlighter: shikiji
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
hideInToc: true
---

# Development environments

## Rethink... again  

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
hideInToc: true
---

# Table of contents

<Toc maxDepth="1" ></Toc>

---
transition: fade-out
src: ./pages/whoami.md
layout: two-cols
---

---
transition: fade-out
src: ./pages/disclaimer.md
layout: two-cols
---

---
transition: fade-out
src: ./pages/history.md
hide: false
---

---
transition: fade-out
layout: image-right
image: https://images.unsplash.com/photo-1511345624864-d6cf46344e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMzM5Mzh8MHwxfGFsbHx8fHx8fHx8fDE3MDQyNzUxOTR8&ixlib=rb-4.0.3&q=80&w=1080
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
src: ./pages/01-introduction.md
hide: false
---

---
transition: fade-out
layout: section
src: ./pages/virtualbox.md
hide: false
---

---
transition: fade-out
src: ./pages/virtualbox-1.md
hide: false
---


---
transition: fade-out
layout: section
src: ./pages/codespaces.md
hide: false
---

---
transition: fade-out
src: ./pages/codespaces-1.md
hide: false
---

---
transition: fade-out
layout: section
src: ./pages/coder.md
hide: false
---

---
transition: fade-out
src: ./pages/coder-1.md
hide: false
---


---
transition: fade-out
layout: section
src: ./pages/devpod.md
hide: false
---

---
transition: fade-out
src: ./pages/devpod-1.md
hide: false
---

---
transition: fade-out
layout: section
src: ./pages/gitpod.md
hide: false
---

---
transition: fade-out
src: ./pages/gitpod-1.md
hide: false
---

---
transition: fade-out
src: ./pages/06-conclusion.md
hide: false
---
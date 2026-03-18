<template>
  <header class="header">
    <div class="header-left">
      <div class="header-logo">
        <svg width="83" height="28" viewBox="0 0 83 28" fill="none"><rect x="0" y="2" width="24" height="24" rx="4" fill="rgba(255,255,255,0.3)"/><text x="28" y="18" font-family="Inter,sans-serif" font-size="14" font-weight="600" fill="white">BLUE</text><text x="28" y="26" font-family="Inter,sans-serif" font-size="8" fill="rgba(255,255,255,0.9)">EDUCATION</text></svg>
      </div>
      <div class="header-divider"></div>
      <span class="header-title">Teaching Management</span>
    </div>
    <div class="header-right">
      <a href="#" class="header-link">Switch to the teacher's end</a>
      <svg class="header-icon-switch" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M3 7l3-3M3 7l3 3M11 7L8 4M11 7l-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      <div class="header-divider"></div>
      <div class="header-language">
        <span>English</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </div>
      <div class="header-divider"></div>
      <div class="header-user">
        <div class="header-avatar"></div>
        <svg class="header-bell" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2a4 4 0 014 4v2.586l1.707 1.707a1 1 0 01-1.414 1.414L10 9.414V6a2 2 0 00-4 0v3.414l-2.293 2.293a1 1 0 11-1.414-1.414L6 8.586V6a4 4 0 014-4zM6 12a2 2 0 104 0H6z" fill="currentColor"/></svg>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

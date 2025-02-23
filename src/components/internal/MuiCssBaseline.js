const overrides = {
  styleOverrides: (theme) => `
    /* Include font files here. */
    /* Out-commented @font-face example:
    @font-face {
      font-family: 'Family';
      font-weight: 400;
      font-display: swap;
      src: url('/fonts/family/family-regular.woff2') format('woff2');
    }
    */
    /* Define :root css variables. */
    :root {
      --cia-theme-spacing: ${theme.spacing(1)};
      --cia-header-toolbar-primary-height: 56px;
      --cia-header-toolbar-secondary-height: 22px;
      --cia-section-spacing: max(${theme.spacing(3)}, 3.7vw);
      --cia-container-spacing: calc(100vw / 24);
      --cia-toolbar-dense-min-height: 48px;
      --cia-toolbar-min-height: 56px;
      --cia-toolbar-spacing: ${theme.spacing(2)};
    }
    /* Opinionated defaults taken from sanitize.css */
    /* https://github.com/csstools/sanitize.css */
    iframe, img, input, select, textarea {
      height: auto;
      max-width: 100%;
    }
    ol ol, ol ul, ul ol, ul ul {
      margin: 0;
    }
    nav ol, nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    svg:not([fill]) {
      fill: currentColor;
    }
    /* Custom global css */
    [type="search"]::-webkit-search-cancel-button, [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
      appearance: none;
    }
    [id] {
      scroll-margin-top: var(--cia-header-height, 0px);
    }
    a {
      color: inherit;
    }
  `,
}

export default overrides

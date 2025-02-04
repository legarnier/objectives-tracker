
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/your-repo-name/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/your-repo-name"
  },
  {
    "renderMode": 2,
    "route": "/your-repo-name/objectives"
  },
  {
    "renderMode": 2,
    "redirectTo": "/your-repo-name",
    "route": "/your-repo-name/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 529, hash: 'fab3f6fe061eb32b95f7eb65dd40dfcca6c95beef62f0653898b654a04a25639', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1042, hash: 'a7e70259b204464bf176f7f88aee67e73d086beac08c89bab1badef4e9de5403', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'objectives/index.html': {size: 21829, hash: 'aadd26ffbff71102b3b52f10c4b7344957c8e4931307cada7fd3a5e83ab59c7e', text: () => import('./assets-chunks/objectives_index_html.mjs').then(m => m.default)},
    'index.html': {size: 20938, hash: 'd7df7e16ed28a1c0dd3378354e08a9acc35b8f5f6932f4e6936ca8ca24421f33', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

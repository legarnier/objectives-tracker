
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/objectives-tracker/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/objectives-tracker"
  },
  {
    "renderMode": 2,
    "route": "/objectives-tracker/objectives"
  },
  {
    "renderMode": 2,
    "redirectTo": "/objectives-tracker",
    "route": "/objectives-tracker/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 533, hash: '9d8576ba230fa77c5d4678bdb21526d019dd202eb9f7d1561c3da3629872bded', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1046, hash: '3b937a004fb3d1f7a6fde19ac721d177b4443ec471fd70766745467d1ec98451', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'objectives/index.html': {size: 21833, hash: 'e020ef93de89ff6fe50caf2be3ed4d5f94a27d745011491375ed331dd0f44f7a', text: () => import('./assets-chunks/objectives_index_html.mjs').then(m => m.default)},
    'index.html': {size: 20942, hash: '54d4cf8ed3d896e1e6365e5f8fe0d56ff2fb164dbed276af39930016a00b2847', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

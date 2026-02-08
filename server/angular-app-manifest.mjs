
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 22722, hash: 'caf64b7e193449f0cbfd2e6a277e061176a92db7af99818236db3466a81dfd62', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2806, hash: '55dadc654f2b77a983e06c43935546698893d213a748bf8cfc62512cdfab6b66', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 214550, hash: '8c15af431d6bb54f2f4ae388590cb8d62860783a68546fc32020046d140aef23', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TGATFTFN.css': {size: 300506, hash: '5L73Qyo8a8g', text: () => import('./assets-chunks/styles-TGATFTFN_css.mjs').then(m => m.default)}
  },
};

// Navegación de lectura: no modifica el estado ni las ecuaciones de las escenas.
(() => {
  const script = document.currentScript;
  const target = script?.dataset.chapter;
  if (!target) return;
  const embedded = new URLSearchParams(location.search).get('embed') === '1' || window.top !== window.self;
  const style = document.createElement('style');
  style.textContent = '.book-study-links{font:14px/1.6 system-ui;margin:14px 0;padding:10px;border:1px solid #9B3D0040;border-radius:6px}.book-study-links a{color:inherit;text-decoration:underline}.thermal-reader-return{position:fixed;bottom:10px;left:10px;z-index:10000;padding:8px 12px;border-radius:6px;background:#FAF7F2;color:#9B3D00;font:13px/1.3 system-ui;box-shadow:0 1px 8px #0004;text-decoration:none}.thermal-reader-return:focus-visible{outline:3px solid #C45A00;outline-offset:3px}';
  if (embedded) {
    style.textContent += '.book-study-links{display:none!important}';
  } else {
    const a = document.createElement('a');
    a.className = 'thermal-reader-return';
    a.href = target;
    a.textContent = 'Leer ' + script.dataset.label.toLowerCase() + ' →';
    document.body.append(a);
  }
  document.head.append(style);
})();

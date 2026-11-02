// Portal navigation stays outside the Quartz SPA root. Links leave Quartz via
// normal navigation so Hugo receives its own styles, scripts and language.
export default function PortalHeader() {
  return (
    <header class="portal-header">
      <nav aria-label="Navegación del portal" class="portal-nav">
        <div class="portal-identity">
          <a class="portal-brand" href="/" data-router-ignore>
            <img src="/images/logos/lemeit.svg" width="30" height="28" alt="" />
            <span>Prof. Luciano Lamaita</span>
          </a>
          <div class="portal-languages" aria-label="Idioma / Language">
            <a href="/" lang="es" hreflang="es" aria-current="true" title="Español · idioma actual" data-router-ignore>ES</a>
            <a href="/en/" lang="en" hreflang="en" data-router-ignore>EN</a>
            <a href="/zh/" lang="zh" hreflang="zh" data-router-ignore>中文</a>
          </div>
        </div>
        <ul class="portal-menu">
          <li><a href="/projects/" data-router-ignore>Proyectos</a></li>
          <li><a href="/notes/" data-router-ignore>Apuntes</a></li>
          <li><a href="/about/" data-router-ignore>Sobre mí</a></li>
        </ul>
      </nav>
    </header>
  )
}

import{t as e}from"./index-XcbJVwAR.js";function t(e){return e.enlace?window.innerWidth<850?`
      <div class="visor-movil-pdf">
        <span class="icono-doc-movil">📄</span>
        <h4>Documento PDF</h4>
        <p class="subtexto-doc-movil">${e.titulo}</p>
        <a href="${e.enlace}" target="_blank" rel="noopener" class="btn-abrir-pdf-movil">
          Abrir en Visor Nativo ↗
        </a>
      </div>
    `:`
    <div class="contenedor-visor-pdf">
      <iframe
        src="${`${e.enlace}#toolbar=1&navpanes=0`}"
        title="Documento: ${e.titulo}"
        class="iframe-pdf"
        loading="lazy"
      ></iframe>
    </div>
  `:`
      <div class="visor-vacio">
        <p>No hay un archivo PDF asociado a este documento.</p>
      </div>
    `}function n(e){return`
    <div class="visor-fallback">
      <p>Este formato no dispone de visor interactivo en la mesa.</p>
      <a href="${e.enlace||`#`}" target="_blank" class="btn-fallback">
        Abrir o descargar archivo externo
      </a>
    </div>
  `}function r(e){if(!e||!e.enlace)return n(e);switch(e.enlace.split(`.`).pop().toLowerCase().split(`#`)[0].split(`?`)[0]){case`pdf`:return t(e);default:return n(e)}}var i=[];function a(){let t=document.querySelector(`#lista-arrastrables`),n=document.querySelector(`#zona-suelta`),a=document.querySelector(`#btn-limpiar-pizarra`),o=document.querySelector(`#btn-toggle-panel`),s=document.querySelector(`.contenedor-pizarra`),c=document.querySelectorAll(`.btn-split`),l=document.querySelector(`#btn-pantalla-completa`),u=document.querySelector(`#vista-pizarra`);function d(){t&&(t.innerHTML=e.map(e=>`
      <div class="item-arrastrable" draggable="true" data-id="${e.id}">
        <div class="info-arrastrable">
          <h4>${e.titulo||`Sin título`}</h4>
          <span class="badge-mini">${e.categoria||`General`}</span>
        </div>
        <!-- Botón táctil para móviles (añadir con 1 toque) -->
        <button class="btn-toque-anadir" data-id="${e.id}" title="Añadir a la mesa">+</button>
      </div>
    `).join(``),t.querySelectorAll(`.btn-toque-anadir`).forEach(t=>{t.addEventListener(`click`,n=>{n.stopPropagation();let r=t.dataset.id,a=e.find(e=>String(e.id)===String(r));a&&!i.some(e=>String(e.id)===String(a.id))&&(i.push(a),h(a))})}),t.querySelectorAll(`.item-arrastrable`).forEach(e=>{e.addEventListener(`dragstart`,t=>{t.dataTransfer.setData(`text/plain`,e.dataset.id),e.classList.add(`arrastrando`)}),e.addEventListener(`dragend`,()=>e.classList.remove(`arrastrando`))}))}c.forEach(e=>{e.addEventListener(`click`,()=>{c.forEach(e=>e.classList.remove(`activo`)),e.classList.add(`activo`);let t=e.dataset.layout;n.dataset.layout=t})}),o&&s&&o.addEventListener(`click`,()=>{s.classList.toggle(`panel-oculto`);let e=s.classList.contains(`panel-oculto`);o.textContent=e?`▶ Mostrar Panel`:`◀ Ocultar Panel`}),l&&u&&l.addEventListener(`click`,()=>{document.fullscreenElement?document.exitFullscreen():u.requestFullscreen().catch(e=>{console.warn(`El navegador bloqueó la pantalla completa:`,e.message)})});function f(e){return`
      <article class="panel-documento" data-id="${e.id}">
        <header class="cabecera-panel">
          <div class="info-doc">
            <span class="badge-mini">${e.categoria||`General`}</span>
            <h4 title="${e.titulo}">${e.titulo}</h4>
          </div>
          <div class="acciones-panel">
            <button class="btn-accion btn-minimizar" title="Minimizar / Expandir visor">⎯</button>
            <a href="${e.enlace}" target="_blank" rel="noopener" class="btn-accion" title="Abrir en pestaña nueva">↗</a>
            <button class="btn-accion btn-cerrar" title="Cerrar de la mesa">✕</button>
          </div>
        </header>

        <div class="cuerpo-panel">
          ${r(e)}
        </div>

        <footer class="pie-panel">
          <small>Tags: ${(e.tags||[]).join(`, `)}</small>
        </footer>
      </article>
    `}function p(e,t){let n=e.querySelector(`.btn-cerrar`),r=e.querySelector(`.btn-minimizar`);n.addEventListener(`click`,()=>{i=i.filter(e=>String(e.id)!==String(t)),e.remove(),m(),g()}),r.addEventListener(`click`,()=>{e.classList.toggle(`panel-minimizado`)})}function m(){let e=n.querySelector(`.mensaje-zona-vacia`);i.length===0?e||(n.innerHTML=`
          <div class="mensaje-zona-vacia">
            <span class="icono-drop">📥</span>
            <p>Arrastra y suelta documentos aquí para compararlos</p>
          </div>
        `):e&&e.remove()}function h(e){m();let t=document.createElement(`template`);t.innerHTML=f(e).trim();let r=t.content.firstElementChild;n.appendChild(r),p(r,e.id),g()}n.addEventListener(`dragover`,e=>{e.preventDefault(),n.classList.add(`dragover-activo`)}),n.addEventListener(`dragleave`,()=>{n.classList.remove(`dragover-activo`)}),n.addEventListener(`drop`,t=>{t.preventDefault(),n.classList.remove(`dragover-activo`);let r=t.dataTransfer.getData(`text/plain`),a=e.find(e=>String(e.id)===String(r));a&&(i.some(e=>String(e.id)===String(a.id))||(i.push(a),h(a)))});function g(){let e=document.querySelector(`#panel-metricas`);if(!e)return;if(i.length<2){e.classList.add(`vista-oculta`);return}e.classList.remove(`vista-oculta`);let t=i.flatMap(e=>e.tags||[]),n=[...new Set(t)],r=[...new Set(i.map(e=>e.categoria))];e.innerHTML=`
      <h4>📊 Modo Comparativo Activo (${i.length} documentos en paralelo)</h4>
      <p style="font-size: 0.9rem; margin-top: 0.5rem; color: #94a3b8;">
        <strong>Categorías en contraste:</strong> ${r.join(` vs `)}
      </p>
      <p style="font-size: 0.9rem; margin-top: 0.25rem; color: #94a3b8;">
        <strong>Puntos de contacto (Tags):</strong> ${n.join(` • `)}
      </p>
    `}a.addEventListener(`click`,()=>{i=[],n.innerHTML=``,m(),g()}),d()}export{a as inicializarPizarra};
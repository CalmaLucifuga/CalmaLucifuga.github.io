(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:1,titulo:`El Pueblo no debe rogar a los Políticos para decidir su futuro, debe obligarlos`,categoria:`Filosofía`,tipo:`pdf`,miniatura:`/thumbnails/ensayo-congreso.jpg`,descripcion:`Ensayo sobre el rumbo estratégico de la protesta, con foco en el Congreso, y el bloqueo político a las demandas del proletariado.`,tags:[`filosofia`,`filosofía`,`ensayo`,`congreso`,`rejas`,`escritura`,`literatura`],enlace:`/documentos/ensayo-congreso.pdf`,destacado:!0},{id:2,titulo:`El contrato social`,categoria:`Filosofía`,tipo:`pdf`,miniatura:`/thumbnails/Jean-Jacques-Rousseau-El-contrato-social.jpg`,descripcion:`Obra cúspide de Jean Jacques Rousseau.`,tags:[`filosofia`,`filosofía`,`ensayo`,`congreso`,`rejas`,`cita`,`literatura`],enlace:`/documentos/Jean-Jacques-Rousseau-El-contrato-social.pdf`,destacado:!0},{id:3,titulo:`Post-transitional Justice`,categoria:`Estudio`,tipo:`pdf`,miniatura:`/thumbnails/post-transitional-justice-human-rights-trials-in-chile-and-cath-collins.jpg`,descripcion:`Human Rights trials in Chile and El Salvador Post-transitional Justice C A T H C O L L I N S Post-­transitional Justice The Pennsylvania State University Press University Park, Pennsylvania Post-trans`,tags:[`chile`,`justice`,`transitional`,`human`,`rights`,`salvador`],enlace:`/documentos/Post-transitional Justice  Human Rights Trials in Chile and -- Cath Collins.pdf`}];function t(){let t=document.querySelector(`#vista-actualidad`),n=document.querySelector(`#vista-inicio`),r=e[0]||{titulo:`Ensayo Central`,miniatura:`/fondos/24000001-large.png`,enlace:`#`};e[1],t&&(t.innerHTML=`
      <section class="pantalla-actualidad cronica-congreso">
        
        <!-- BANCO DE HUMO PERMANENTE DE LECTURA (Exclusivo de esta pestaña) -->
        <div class="banco-humo-lectura" aria-hidden="true">
          <div class="humo-nube-foco nube-foco-1"></div>
          <div class="humo-nube-foco nube-foco-2"></div>
          <div class="humo-nube-foco nube-foco-3"></div>
        </div>

        <!-- Distintivo superior -->
        <div class="actualidad-emblema-wrapper">
          <span class="emblema-punto"></span>
          <span class="subtexto-institucional">HISTORIA DEL CONGRESO</span>
        </div>

        <!-- HITO 1: 1983 - 1986 -->
        <article class="hito-cronica">
          <h2 class="ano-cronica">1983 — 1986</h2>
          <p class="texto-cronica">
            La oposición encomienda movilizaciones masivas contra el régimen de Augusto Pinochet en el centro cívico de Santiago, impactando la cotidianidad con barricadas, cortes de tránsito y duros choques con Carabineros y el Ejército.
          </p>
          <div class="cita-dictamen">
            <p>Se concluye que la excesiva concentración física de los poderes del Estado (Congreso, ministerios y La Moneda):</p>
            <p class="dictamen-mayuscula">"DIFICULTABAN EL CONTROL POLÍTICO SOBRE LA CLASE TRABAJADORA Y MANIFESTANTES".</p>
          </div>
        </article>

        <!-- HITO 2: 1987 (Con foto sticker del gorro militar a la derecha) -->
        <article class="hito-cronica hito-con-foto">
          <div class="cuerpo-hito">
            <h2 class="ano-cronica">1987</h2>
            <p class="texto-cronica">
              A pesar de todas las quejas y rechazo, bajo el marco legislativo de la Junta Militar se promulga en la Ley N° 18.678: 
              <em class="ley-cita">"La sede del Congreso Nacional será la ciudad de Valparaíso"</em>, logrando así desconectar la fuerza de la oposición, atomizar la vida política y restar la fiscalización frente al Poder Ejecutivo a través del Congreso.
            </p>
          </div>

          <!-- ESPACIO RESERVADO: FOTO STICKER RECORTADA SIN MARCO -->
          <aside class="espacio-foto-relieve">
            <div class="marco-foto-historica">
              <img 
                src="/fondos/gorro-pinochet.png" 
                alt="Emblema / Gorro Militar" 
                class="img-historica"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              />
              <div class="foto-placeholder" style="display: none;">
                <span class="icono-placeholder">🎖️</span>
                <span>[ Foto: Gorro Militar ]</span>
              </div>
            </div>
            <figcaption class="pie-foto-historica">Ley N° 18.678</figcaption>
          </aside>
        </article>

        <!-- HITO 3: 1988 -->
        <article class="hito-cronica">
          <h2 class="ano-cronica">1988</h2>
          <p class="texto-cronica">
            El Hospital Enrique Deformes, un edificio histórico de salud pública, es el sacrificado para albergar en su posición al nuevo Congreso de Valparaíso. La resistencia de los médicos, gremios de salud y ciudadanos para la reparación y reapertura del hospital, tras el terremoto de 1985, fueron en vano.
          </p>
        </article>

        <!-- DISPARADOR HACIA LA CINEMÁTICA: ACTUALIDAD -->
        <div class="bloque-trigger-actualidad">
          <div class="linea-cierre-cronica"></div>
          <h2 
            id="trigger-actualidad" 
            class="titulo-actualidad-interactivo" 
            role="button" 
            tabindex="0" 
            title="Haz clic para continuar"
          >
            ACTUALIDAD
          </h2>
          <div class="indicador-ingreso-actualidad">
            <span class="texto-ingreso">[ HAZ CLICK PARA CONTINUAR ]</span>
            <span class="flecha-ingreso">→</span>
          </div>
        </div>

      </section>
    `),n&&(n.innerHTML=`
      <section class="seccion-inicio escaparate-split-layout">
        <div class="split-contenedor-editorial">
          
          <!-- LADO IZQUIERDO: Imagen del documento con botón "VER AQUÍ" -->
          <div class="panel-espejo panel-espejo-imagen">
            <img 
              src="${r.miniatura||`/fondos/24000001-large.png`}" 
              alt="${r.titulo}" 
              class="img-split-ensayo"
              onerror="this.src='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1000'"
            />
            
            <div class="overlay-boton-ver">
              <a 
                href="${r.enlace||`#`}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn-ver-aqui"
              >
                <span class="texto-carrusel">VER AQUÍ</span>
              </a>
            </div>
          </div>

          <!-- LADO DERECHO: Recuadro con Blur GEMELO en altura y anchura -->
          <div class="panel-espejo panel-espejo-blur">
            <div class="contenido-panel-blur">
              <span class="badge-split-editorial">DOCUMENTO I — ARCHIVO CENTRAL</span>
              <h2 class="titulo-split-editorial">VER PRIMERO</h2>
              <div class="linea-adorno-split"></div>
              
              <p class="descripcion-split-editorial">
                ${r.descripcion||`Análisis documental crítico y registro histórico central de la colección legislativa.`}
              </p>

              <div class="tags-split-editorial">
                ${(r.tags||[`HISTORIA`,`CONGRESO`,`ARCHIVO`]).slice(0,3).map(e=>`<span class="tag-split">${e}</span>`).join(``)}
              </div>
            </div>
          </div>

        </div>
      </section>
    `);let i=n.querySelector(`.panel-espejo-imagen`),a=n.querySelector(`.panel-espejo-blur`),o=i?i.querySelector(`.img-split-ensayo`):null;i&&a&&window.ResizeObserver&&(new ResizeObserver(()=>{if(window.innerWidth<=850){let e=i.getBoundingClientRect().height;e>50&&(a.style.height=`${e}px`)}else a.style.height=``}).observe(i),o&&o.addEventListener(`load`,()=>{window.innerWidth<=850&&(a.style.height=`${i.getBoundingClientRect().height}px`)}))}var n={pdf:`
    <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,video:`
    <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="23 7 16 12 23 17 23 7"></polygon>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
    </svg>
  `,enlace:`
    <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  `,default:`
    <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
      <polyline points="13 2 13 9 20 9"></polyline>
    </svg>
  `};function r(e){return`
    <div class="thumbnail-placeholder tipo-${e}">
      <span class="thumbnail-icono">${n[e]||n.default}</span>
      <span class="thumbnail-tipo-badge">${e.toUpperCase()}</span>
    </div>
  `}function i(e){let t=(e.tipo||`default`).toLowerCase();return e.miniatura?`
    <div class="contenedor-thumbnail">
      <img 
        src="${e.miniatura}" 
        alt="Carátula de ${e.titulo||`documento`}"
        class="img-thumbnail"
        loading="lazy"
        decoding="async"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <!-- Este bloque está oculto por defecto y solo se muestra si la imagen falla -->
      <div class="thumbnail-fallback-error" style="display: none; width: 100%; height: 100%;">
        ${r(t)}
      </div>
    </div>
  `:`
      <div class="contenedor-thumbnail">
        ${r(t)}
      </div>
    `}function a(e){return`
    <article class="data-card" data-id="${e.id||``}">
      <!-- 1. Miniatura siempre visible arriba -->
      ${i(e)}

      <div class="card-cuerpo">
        <!-- 2. Información fija siempre visible -->
        <div class="card-cabecera-fija">
          <span class="badge">${e.categoria||`General`}</span>
          <h3>${e.titulo||`Sin título`}</h3>
        </div>

        <!-- 3. Cajón de detalles: OCULTO en reposo, SE REVELA en hover -->
        <div class="card-detalles-desplegable">
          <p class="card-descripcion">
            ${e.descripcion||e.descripción||`Sin descripción disponible.`}
          </p>
          
          <div class="tags">
            ${(e.tags||[]).map(e=>`<span class="tag">${e}</span>`).join(``)}
          </div>

          <a 
            href="${e.enlace||`#`}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn-documento"
          >
            ${e.enlace?`Ver Documento`:`No disponible`}
          </a>
        </div>
      </div>
    </article>
  `}function o(e){return e.toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).trim()}function s(e,t,n){let r=o(t);return e.filter(e=>{let t=n===`todas`||e.categoria===n,i=o(e.titulo),a=o(e.descripcion),s=e.tags.map(e=>o(e)).join(` `),c=r===``||i.includes(r)||a.includes(r)||s.includes(r);return t&&c})}function c(){let t=document.querySelector(`#contenedor-datos`),n=document.querySelector(`#buscador`),r=document.querySelector(`#filtro-categoria`),i=document.querySelector(`#contador-resultados`);[...new Set(e.map(e=>e.categoria))].forEach(e=>{let t=document.createElement(`option`);t.value=e,t.textContent=e,r.appendChild(t)});function o(n){i.textContent=`Mostrando ${n.length} de ${e.length} documentos`,n.length===0?t.innerHTML=`
        <div class="sin-resultados">
          <p>No se encontraron documentos con esos criterios.</p>
        </div>
      `:t.innerHTML=n.map(e=>a(e)).join(``)}function c(){let t=n.value,i=r.value;o(s(e,t,i))}n.addEventListener(`input`,c),r.addEventListener(`change`,c),o(e)}var l=new Set,u=!1,d=!1,f=0,p={scrollY:0,progreso:0,direccion:1,velocidad:0};function m(){let e=window.scrollY,t=document.documentElement.scrollHeight-window.innerHeight,n=t>0?Math.min(Math.max(e/t,0),1):0,r=e>=f?1:-1,i=Math.abs(e-f);p.scrollY=e,p.progreso=n,p.direccion=r,p.velocidad=i,f=e;let a=document.documentElement.style;a.setProperty(`--progreso`,p.progreso.toFixed(4)),a.setProperty(`--direccion`,p.direccion),a.setProperty(`--scroll-y`,`${p.scrollY}px`),l.forEach(e=>{try{e(p)}catch(e){console.error(`Error en un suscriptor del Scroll Engine:`,e)}}),d=!1}function h(){d||=(window.requestAnimationFrame(m),!0)}function g(){u||(u=!0,window.addEventListener(`scroll`,h,{passive:!0}),window.addEventListener(`resize`,h,{passive:!0}),m())}function ee(e){return typeof e==`function`&&(l.add(e),e(p)),()=>l.delete(e)}var _=1,v=1,y=[],b=null,x=null;function S(e=2e3){if(_=3.6,x)for(let e=0;e<35;e++){let e=new w(x);e.x=x.width+Math.random()*80,e.y=Math.random()*(x.height*1.15),e.esTemporal=!0,y.push(e)}if(b){let t=document.createElement(`div`);t.className=`capa-briznas-papel capa-briznas-refuerzo`,t.innerHTML=E(10),b.appendChild(t),setTimeout(()=>{t.remove()},e+1e3)}}function C(e=!0){if(!b)return;b.querySelectorAll(`.capa-briznas-papel`).forEach(t=>{t.style.display=e?`none`:``});let t=b.querySelector(`#canvas-chispas`);t&&(t.style.display=e?`none`:``);let n=b.querySelector(`.svg-corrientes-viento`);n&&(n.style.display=e?`none`:``)}var w=class{constructor(e){this.canvas=e,this.esTemporal=!1,this.reiniciar(!0)}reiniciar(e=!1){this.x=e?Math.random()*this.canvas.width:this.canvas.width+Math.random()*60,this.y=e?Math.random()*this.canvas.height:Math.random()*(this.canvas.height*1.15),this.esCercana=Math.random()>.6,this.esCercana?(this.vxBase=-(4.2+Math.random()*4.8),this.vyBase=-(1.2+Math.random()*2.2),this.grosor=3+Math.random()*3.5,this.vidaMaxima=65+Math.random()*50):(this.vxBase=-(2.2+Math.random()*2.6),this.vyBase=-(.6+Math.random()*1.4),this.grosor=1.2+Math.random()*1.5,this.vidaMaxima=85+Math.random()*90),this.vida=e?Math.random()*this.vidaMaxima:0,this.faseWobble=Math.random()*Math.PI*2}actualizar(e){this.vida++,this.faseWobble+=.055;let t=Math.sin(this.faseWobble)*(this.esCercana?1.3:.6),n=this.vxBase*e,r=(this.vyBase+t)*e;this.x+=n,this.y+=r;let i=this.vida>=this.vidaMaxima||this.x<-140||this.y<-140;return i&&!this.esTemporal&&this.reiniciar(!1),{vx:n,vy:r,progresoVida:this.vida/this.vidaMaxima,terminada:i}}dibujar(e,t,n){let{vx:r,vy:i,progresoVida:a}=t,o,s,c,l;a<.22?(o=255,s=245,c=210,l=1):a<.6?(o=255,s=145,c=30,l=.95):(o=215,s=50,c=15,l=(1-a)*2.5);let u=this.esCercana?6.2:3.6,d=(6+Math.abs(r)*u)*(.75+n*.35),f=this.x-d*.22*r,p=this.y-d*.22*i;this.esCercana&&(e.beginPath(),e.moveTo(this.x,this.y),e.lineTo(f,p),e.strokeStyle=`rgba(255, 95, 15, ${l*.4})`,e.lineWidth=this.grosor*(1.8+n*.3),e.stroke()),e.beginPath(),e.moveTo(this.x,this.y),e.lineTo(f,p),e.strokeStyle=`rgba(${o}, ${s}, ${c}, ${l})`,e.lineWidth=this.grosor,e.stroke()}};function T(){let e=document.querySelector(`#escenario-artistico`);if(!e)return;e.innerHTML=``;let t=document.createElement(`div`);t.className=`escenario-viento-activo`,b=t,t.innerHTML=`
    <svg class="svg-corrientes-viento" viewBox="0 0 1440 900" preserveAspectRatio="none">
      <defs>
        <linearGradient id="gradienteRafaga" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#8c6d48" stop-opacity="0"/>
          <stop offset="35%" stop-color="#9a5a32" stop-opacity="0.30"/>
          <stop offset="75%" stop-color="#7a4220" stop-opacity="0.20"/>
          <stop offset="100%" stop-color="#8c6d48" stop-opacity="0"/>
        </linearGradient>
      </defs>

      <path class="linea-viento corriente-rapida-1" d="M 1600,200 C 1100,100 600,350 -200,150" stroke="url(#gradienteRafaga)" stroke-width="2.5" fill="none"/>
      <path class="linea-viento corriente-rapida-2" d="M 1700,500 C 1000,350 500,650 -300,400" stroke="url(#gradienteRafaga)" stroke-width="3.5" fill="none"/>
      <path class="linea-viento corriente-rapida-3" d="M 1600,750 C 900,600 400,850 -100,700" stroke="url(#gradienteRafaga)" stroke-width="2.5" fill="none"/>
    </svg>

    <div class="capa-humo-polvora">
      <div class="nube-humo nube-densa-1"></div>
      <div class="nube-humo nube-densa-2"></div>
      <div class="nube-humo nube-densa-3"></div>
      <div class="resplandor-belico"></div>
    </div>

    <canvas id="canvas-chispas"></canvas>

    <!-- Cenizas base permanentes -->
    <div class="capa-briznas-papel">
      ${E(10)}
    </div>
  `,e.appendChild(t);let n=t.querySelector(`#canvas-chispas`);x=n;let r=n.getContext(`2d`,{alpha:!0});function i(){n.width=window.innerWidth,n.height=window.innerHeight}window.addEventListener(`resize`,i),i();let a=[];for(let e=0;e<32;e++)a.push(new w(n));ee(e=>{let t=1+Math.min(e.velocidad/18,2);t>_&&(_=t)});function o(){_=Math.max(1,_*.95),v+=(_-v)*.07,r.clearRect(0,0,n.width,n.height),r.globalCompositeOperation=`lighter`,r.lineCap=`round`;for(let e=0;e<a.length;e++){let t=a[e],n=t.actualizar(v);t.dibujar(r,n,v)}for(let e=y.length-1;e>=0;e--){let t=y[e],n=t.actualizar(v);t.dibujar(r,n,v),n.terminada&&y.splice(e,1)}r.globalCompositeOperation=`source-over`,requestAnimationFrame(o)}requestAnimationFrame(o)}function E(e){let t=``,n=[`pagina-chamuscada`,`brasa-papel`,`escama-ceniza`];for(let r=0;r<e;r++){let e=n[r%n.length],i=(4+Math.random()*3).toFixed(2),a=-(Math.random()*8).toFixed(2),o=(Math.random()*110-10).toFixed(1),s=(.6+Math.random()*.8).toFixed(2);t+=`
      <div 
        class="brizna-pergamino ${e}" 
        style="
          --duracion-vuelo: ${i}s;
          --retraso-vuelo: ${a}s;
          --top-inicial: ${o}%;
          --escala-brizna: ${s};
        "
      >
        <span class="fragmento-papel"></span>
      </div>
    `}return t}var te=`/fondos/textura-base.jpg`,ne=`/fondos/24000001-large.png`,re=`
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = (a_position + 1.0) * 0.5;
    v_uv.y = 1.0 - v_uv.y;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,ie=`
  precision mediump float;
  varying vec2 v_uv;

  uniform sampler2D u_tex_base;
  uniform sampler2D u_tex_liquid;

  uniform float u_time;
  uniform float u_scroll_progress;
  uniform float u_limite_marea;
  uniform float u_telon_progreso;
  uniform vec2 u_resolution;
  uniform vec2 u_tex_base_size;
  uniform vec2 u_tex_liquid_size;

  vec2 getCoverUV(vec2 uv, vec2 screenRes, vec2 texRes, float zoomFactor, float offsetY) {
    vec2 s = max(screenRes, vec2(1.0, 1.0));
    vec2 i = max(texRes, vec2(1.0, 1.0));

    float rs = s.x / s.y;
    float ri = i.x / i.y;

    vec2 uvCover = uv;
    if (rs < ri) {
      float factor = rs / ri;
      uvCover.x = (uv.x - 0.5) * factor + 0.5;
    } else {
      float factor = ri / rs;
      uvCover.y = (uv.y - 0.5) * factor + 0.5;
    }

    uvCover.y += offsetY;
    uvCover = (uvCover - 0.5) * (0.88 / max(zoomFactor, 0.01)) + 0.5;
    return clamp(uvCover, 0.002, 0.998);
  }

  void main() {
    vec2 uv = v_uv;
    bool esMovil = u_resolution.x < u_resolution.y;

    float zoomBase = esMovil ? 1.60 : 1.0;
    vec2 uvBase = getCoverUV(uv, u_resolution, u_tex_base_size, zoomBase, 0.0);

    float zoomMarea = esMovil ? 2.35 : 1.0;
    vec2 uvLiquid = getCoverUV(uv, u_resolution, u_tex_liquid_size, zoomMarea, 0.0);

    uvBase.y = clamp(uvBase.y + (u_scroll_progress - 0.5) * 0.08, 0.002, 0.998);
    uvLiquid.y = clamp(uvLiquid.y + (u_scroll_progress - 0.5) * 0.10, 0.002, 0.998);

    // 1. FISICA DE LA MAREA
    float tiempoMarea = u_time * 0.75;
    float vaivenMarea = pow(sin(tiempoMarea) * 0.5 + 0.5, 0.85);

    float limiteMaximo = clamp(u_limite_marea, 0.05, 0.95);
    float anchoBaseAgua = (limiteMaximo - 0.04) * (0.84 + vaivenMarea * 0.16);

    float curvaOrilla = 
      sin(uv.y * 5.0 + tiempoMarea * 0.9) * 0.038 + 
      cos(uv.y * 11.5 - tiempoMarea * 0.6) * 0.016 + 
      sin(uv.y * 22.0 + tiempoMarea * 1.8) * 0.007;

    float anchoTotalAgua = clamp(anchoBaseAgua + curvaOrilla, 0.04, limiteMaximo);
    float xOrilla = 1.0 - anchoTotalAgua;
    float distOrilla = uv.x - xOrilla;
    float factorAgua = smoothstep(-0.008, 0.008, distOrilla);

    // 2. FONDO A Y AVANCE DEL TELON NEGRO
    vec4 texColorBase = texture2D(u_tex_base, uvBase);
    vec3 colorBaseLuz = texColorBase.rgb;

    float frenteTelon;
    if (u_telon_progreso <= 1.0) {
      frenteTelon = u_telon_progreso * (xOrilla + 0.06) - 0.06;
    } else {
      float t2 = u_telon_progreso - 1.0;
      frenteTelon = mix(xOrilla, 1.18, t2);
    }

    float distTelon = frenteTelon - uv.x;
    float factorNegro = smoothstep(-0.04, 0.04, distTelon);
    float sombraAvance = smoothstep(0.09, 0.0, abs(distTelon)) * (1.0 - factorNegro) * 0.65;
    vec3 colorNegroCarbon = vec3(0.047, 0.039, 0.031);

    vec3 colorBaseConTelon = mix(colorBaseLuz - vec3(sombraAvance), colorNegroCarbon, factorNegro);

    // 3. FONDO B (MAREA LIQUIDA)
    vec2 refraccionLiquida = vec2(
      sin(uv.y * 20.0 + u_time * 1.8) * 0.004,
      cos(uv.x * 24.0 - u_time * 2.2) * 0.003
    );
    vec2 uvLiquidRefract = clamp(uvLiquid + refraccionLiquida, 0.002, 0.998);
    vec4 texColorLiquid = texture2D(u_tex_liquid, uvLiquidRefract);
    vec3 colorLiquidFinal = texColorLiquid.rgb;

    vec3 colorAguaConTelon = mix(colorLiquidFinal - vec3(sombraAvance), colorNegroCarbon, factorNegro);

    float intensidadOla = smoothstep(0.40, 0.85, limiteMaximo);
    float grosorEspuma = mix(0.014, 0.026, intensidadOla);
    float bordeOrilla = smoothstep(grosorEspuma, 0.0, abs(distOrilla)) * mix(0.42, 0.75, intensidadOla);
    vec3 colorEspumaSuave = vec3(1.0, 0.99, 0.96);

    vec3 colorComposicion = mix(colorBaseConTelon, colorAguaConTelon, factorAgua);
    vec3 colorMezcla = mix(colorComposicion, colorEspumaSuave, bordeOrilla * factorAgua * (1.0 - factorNegro));

    // 4. SATURACIÓN
    float saturacion = 1.15;
    float luminancia = dot(colorMezcla, vec3(0.299, 0.587, 0.114));
    vec3 colorSalidaFinal = mix(vec3(luminancia), colorMezcla, saturacion);

    gl_FragColor = vec4(colorSalidaFinal, 1.0);
  }
`,D=!1,ae=0,oe=2100,se=0,O=0;function ce(e){se=e===`total`?2:+(e===`parcial`)}function le(){D=!0,ae=performance.now()}function k(e){let t=Math.max(0,Math.min(1,e));return t*t*t*(t*(t*6-15)+10)}function ue(){return new Promise(e=>{if(document.querySelector(`#canvas-inmersivo`)){e();return}let t=document.createElement(`canvas`);t.id=`canvas-inmersivo`,document.body.prepend(t);let n=t.getContext(`webgl`)||t.getContext(`experimental-webgl`);if(!n){console.warn(`WebGL no disponible; manteniendo fondo estático.`),e();return}function r(e,t){let r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS)?r:(console.error(`Error al compilar Shader:`,n.getShaderInfoLog(r)),n.deleteShader(r),null)}let i=r(n.VERTEX_SHADER,re),a=r(n.FRAGMENT_SHADER,ie);if(!i||!a){e();return}let o=n.createProgram();if(n.attachShader(o,i),n.attachShader(o,a),n.linkProgram(o),!n.getProgramParameter(o,n.LINK_STATUS)){e();return}n.useProgram(o);let s=new Float32Array([-1,-1,1,-1,-1,1,1,1]),c=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,c),n.bufferData(n.ARRAY_BUFFER,s,n.STATIC_DRAW);let l=n.getAttribLocation(o,`a_position`);n.enableVertexAttribArray(l),n.vertexAttribPointer(l,2,n.FLOAT,!1,0,0);let u=n.getUniformLocation(o,`u_time`),d=n.getUniformLocation(o,`u_scroll_progress`),f=n.getUniformLocation(o,`u_limite_marea`),p=n.getUniformLocation(o,`u_telon_progreso`),m=n.getUniformLocation(o,`u_resolution`),h=n.getUniformLocation(o,`u_tex_base`),g=n.getUniformLocation(o,`u_tex_liquid`),_=n.getUniformLocation(o,`u_tex_base_size`),v=n.getUniformLocation(o,`u_tex_liquid_size`);function y(){let e=Math.min(window.devicePixelRatio||1,window.innerWidth<850?1.25:1.5);t.width=Math.floor(window.innerWidth*e),t.height=Math.floor(window.innerHeight*e),n.viewport(0,0,t.width,t.height),n.uniform2f(m,t.width,t.height)}window.addEventListener(`resize`,y),y(),n.uniform2f(_,1920,1080),n.uniform2f(v,1920,1080),n.uniform1f(f,.395),n.uniform1f(p,0);function b(e,t,r,i,a){return new Promise(o=>{let s=n.createTexture();n.activeTexture(e),n.bindTexture(n.TEXTURE_2D,s),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,new Uint8Array([247,243,238,255]));let c=new Image;c.crossOrigin=`anonymous`,c.src=t,c.onload=()=>{n.activeTexture(e),n.bindTexture(n.TEXTURE_2D,s),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,c),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.uniform2f(a,c.naturalWidth||1920,c.naturalHeight||1080),o()},c.onerror=()=>{c.src.includes(`.png`)?c.src=t.replace(`.png`,`.jpg`):c.src.includes(`.jpg`)?c.src=t.replace(`.jpg`,`.png`):r&&c.src!==r?c.src=r:o()};let l=e-n.TEXTURE0;n.uniform1i(i,l)})}let x=b(n.TEXTURE0,te,`https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1600&auto=format&fit=crop`,h,_),S=b(n.TEXTURE1,ne,`https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&auto=format&fit=crop`,g,v);Promise.all([x,S]).then(()=>{e()});let C=0,w=performance.now();ee(e=>{C=e.progreso});function T(e){let t=(e-w)*.001;O+=(se-O)*.055;let r=.395;if(D){let t=(e-ae)/oe;t>=1?(D=!1,r=.395):r=t<.42?.395+k(t/.42)*(.85-.395):t<.76?.85-k((t-.42)/.34)*.55:.3+k((t-.76)/.24)*(.395-.3)}n.uniform1f(u,t),n.uniform1f(d,C),n.uniform1f(f,r),n.uniform1f(p,O),n.drawArrays(n.TRIANGLE_STRIP,0,4),requestAnimationFrame(T)}requestAnimationFrame(T)})}var A=[];function j(){A.forEach(e=>clearTimeout(e)),A=[]}function de(e){let t=document.querySelector(`#vista-cinematica`);if(!t)return;j(),t.innerHTML=`
    <div class="teatro-cinematica">
      
      <!-- Botón de salto accesible -->
      <button id="btn-saltar-cine" class="btn-saltar-cine" title="Saltar cinemática (Esc)">
        Saltar ✕
      </button>

      <!-- Túnel de partículas ascendentes (simula caída al vacío) -->
      <div class="camara-particulas-vertical" id="particulas-verticales">
        ${fe(25)}
      </div>

      <!-- ELEMENTO 1: El gorro militar que desciende -->
      <div class="actor-gorro-descenso" id="actor-gorro">
        <img 
          src="/fondos/gorro-pinochet.png" 
          alt="Gorro Militar" 
          class="img-gorro-cine"
          onerror="this.style.display='none'"
        />
      </div>

      <!-- ELEMENTO 2: Fotografía del Cambio de Mando 1990 con texto exterior -->
      <div class="actor-foto-traspaso" id="actor-foto">
        
        <!-- BLOQUE TIPOGRÁFICO EXTERIOR (Fuera de la imagen) -->
        <header class="encabezado-traspaso-1990">
          <h3 class="fecha-titular-1990">11 de marzo de 1990</h3>
          <p class="bajada-titular-1990">
            Pinochet inaugura el Congreso en Valparaíso, dando pie a su nueva democracia
          </p>
        </header>

        <!-- MARCO EXCLUSIVO DE LA FOTOGRAFÍA -->
        <div class="marco-traspaso-1990">
          <img 
            src="/fondos/cambio-mando-1990.jpg" 
            alt="11 de marzo de 1990: Pinochet inaugura el Congreso en Valparaíso" 
            class="img-foto-1990"
            onerror="this.src='https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=1200'"
          />
        </div>

      </div>
      </div>

    </div>
  `;function n(t=!1){j(),window.removeEventListener(`keydown`,i),typeof e==`function`&&e(t)}let r=t.querySelector(`#btn-saltar-cine`);r&&r.addEventListener(`click`,()=>n(!0));function i(e){e.key===`Escape`&&n(!0)}window.addEventListener(`keydown`,i);let a=setTimeout(()=>{n(!1)},9500);A.push(a)}function fe(e){let t=``;for(let n=0;n<e;n++){let e=(1.4+Math.random()*1.8).toFixed(2),n=-(Math.random()*3).toFixed(2),r=(Math.random()*100).toFixed(1),i=(1.5+Math.random()*3.5).toFixed(1);t+=`
      <span 
        class="chispa-vertical" 
        style="
          --dur-caida: ${e}s;
          --ret-caida: ${n}s;
          --left-x: ${r}%;
          --ancho-p: ${i}px;
        "
      ></span>
    `}return t}var pe=`modulepreload`,me=function(e){return`/`+e},he={},ge=function(e){return e.pathname.endsWith(`.css`)},_e=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},ve=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=me(t,n);let r=s(t),i=ge(r);return _e(he,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:pe,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ye=ue();T(),g(),t(),c();var be=new Promise(e=>setTimeout(e,2500)),xe=document.fonts?document.fonts.ready:Promise.resolve();Promise.race([Promise.all([ye,xe]),be]).then(()=>{document.body.classList.add(`escena-lista`)});var M=document.querySelector(`#cabecera-principal`),N=document.querySelector(`#nav-nodos-home`),P=document.querySelector(`#btn-volver-home`),F=document.querySelector(`#btn-explorador`),I=document.querySelector(`#btn-pizarra`),L=document.querySelector(`#nodo-portada`),R=document.querySelector(`#nodo-actualidad`),z=document.querySelector(`#nodo-inicio`),Se={portada:{el:document.querySelector(`#vista-portada`),dominio:`editorial`,nodo:L},actualidad:{el:document.querySelector(`#vista-actualidad`),dominio:`editorial`,nodo:R},cinematica:{el:document.querySelector(`#vista-cinematica`),dominio:`cinematica`},inicio:{el:document.querySelector(`#vista-inicio`),dominio:`editorial`,nodo:z},explorador:{el:document.querySelector(`#vista-explorador`),dominio:`operativo`,btn:F},pizarra:{el:document.querySelector(`#vista-pizarra`),dominio:`operativo`,btn:I}},Ce=!1,B=!1,V=e=>new Promise(t=>setTimeout(t,e));async function H(e,t=!1){if(B)return;let n=Object.entries(Se).find(([e,t])=>t.el&&!t.el.classList.contains(`vista-oculta`));if(n&&n[0]===e)return;let r=Se[e];if(!r)return;if(B=!0,e===`cinematica`){C(!0),ce(`total`),n&&n[1].el&&n[1].el.classList.add(`actualidad-salida-arriba`),M&&M.classList.add(`vista-oculta`),N&&N.classList.add(`vista-oculta`),await V(800),n&&n[1].el&&(n[1].el.classList.remove(`actualidad-salida-arriba`),n[1].el.classList.add(`vista-oculta`)),r.el.classList.remove(`vista-oculta`),B=!1,de(()=>{C(!1),r.el.classList.add(`vista-oculta`),H(`inicio`)});return}C(!1);let i=document.querySelector(`#vista-cinematica`);i&&i.classList.add(`vista-oculta`),S(),ce(e===`actualidad`?`parcial`:`apagado`);let a=n?n[1].dominio===`editorial`:!1,o=r.dominio===`editorial`;if(a&&o){if(t&&await V(500),n&&n[1].el){let e=n[1].el;e.classList.add(`editorial-salida`),await V(420),e.classList.remove(`editorial-salida`),e.classList.add(`vista-oculta`)}let i=e===`portada`||e===`actualidad`;M&&M.classList.toggle(`vista-oculta`,i),N&&N.classList.toggle(`vista-oculta`,e===`portada`),L&&L.classList.toggle(`activo`,e===`portada`),R&&R.classList.toggle(`activo`,e===`actualidad`),z&&z.classList.toggle(`activo`,e===`inicio`),await V(40),r.el&&(r.el.classList.remove(`vista-oculta`),r.el.classList.add(`editorial-entrada`),await V(550),r.el.classList.remove(`editorial-entrada`))}else{if(n&&n[1].el){let e=n[1].el;e.classList.add(`operativa-salida`),await V(180),e.classList.remove(`operativa-salida`),e.classList.add(`vista-oculta`)}if(le(),o){let t=e===`portada`||e===`actualidad`;M&&M.classList.toggle(`vista-oculta`,t),N&&N.classList.toggle(`vista-oculta`,e===`portada`),L&&L.classList.toggle(`activo`,e===`portada`),R&&R.classList.toggle(`activo`,e===`actualidad`),z&&z.classList.toggle(`activo`,e===`inicio`),P&&P.classList.add(`activo`),F&&F.classList.remove(`activo`),I&&I.classList.remove(`activo`)}else N&&N.classList.add(`vista-oculta`),M&&M.classList.remove(`vista-oculta`),P&&P.classList.remove(`activo`),F&&F.classList.toggle(`activo`,e===`explorador`),I&&I.classList.toggle(`activo`,e===`pizarra`);await V(1600),r.el&&(r.el.classList.remove(`vista-oculta`),r.el.classList.add(`operativa-entrada-izquierda`),await V(1250),r.el.classList.remove(`operativa-entrada-izquierda`))}B=!1}L&&L.addEventListener(`click`,()=>H(`portada`)),R&&R.addEventListener(`click`,()=>H(`actualidad`)),z&&z.addEventListener(`click`,()=>H(`inicio`)),P&&P.addEventListener(`click`,()=>H(`inicio`)),F&&F.addEventListener(`click`,()=>H(`explorador`)),I&&I.addEventListener(`click`,async()=>{H(`pizarra`),Ce||=((await ve(()=>import(`./boardView-msIaz3bn.js`),[])).inicializarPizarra(),!0)});var U=document.querySelector(`#titulo-portada-trigger`);U&&(U.addEventListener(`click`,()=>H(`actualidad`,!0)),U.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),H(`actualidad`,!0))}));var W=document.querySelector(`#trigger-actualidad`);W&&(W.addEventListener(`click`,()=>H(`cinematica`)),W.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),H(`cinematica`))})),M&&M.classList.add(`vista-oculta`),N&&N.classList.add(`vista-oculta`),L&&L.classList.add(`activo`),R&&R.classList.remove(`activo`),z&&z.classList.remove(`activo`);var G=document.querySelector(`#input-buscador-cabecera`),K=document.querySelector(`#dropdown-resultados-cabecera`),we=document.querySelector(`#logo-nav-congreso`);we&&we.addEventListener(`click`,()=>{H(`portada`)}),G&&K&&(G.addEventListener(`input`,t=>{let n=t.target.value.toLowerCase().trim();if(n.length===0){K.classList.add(`vista-oculta`),K.innerHTML=``;return}let r=e.filter(e=>{let t=(e.titulo||``).toLowerCase(),r=(e.descripcion||``).toLowerCase(),i=(e.categoria||``).toLowerCase();return t.includes(n)||r.includes(n)||i.includes(n)});r.length===0?K.innerHTML=`
        <div style="padding: 0.8rem; text-align: center; color: #71717a; font-size: 0.8rem;">
          No se encontraron documentos
        </div>
      `:(K.innerHTML=r.slice(0,5).map(e=>`
        <div class="item-resultado-rapido" data-enlace="${e.enlace}">
          <span class="titulo-item-rapido">${e.titulo}</span>
          <span class="categoria-item-rapido">${e.categoria} · Abrir Documento ↗</span>
        </div>
      `).join(``),K.querySelectorAll(`.item-resultado-rapido`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.enlace;t&&t!==`#`&&window.open(t,`_blank`),K.classList.add(`vista-oculta`),G.value=``})})),K.classList.remove(`vista-oculta`)}),document.addEventListener(`click`,e=>{e.target.closest(`.utilidad-derecha-buscador`)||K.classList.add(`vista-oculta`)}));var Te=document.querySelector(`#btn-hamburguesa-movil`),Ee=document.querySelector(`#btn-lupa-movil`),q=document.querySelector(`#backdrop-movil`),J=document.querySelector(`#drawer-menu-movil`),De=document.querySelector(`#btn-cerrar-menu-movil`),Y=document.querySelector(`#drawer-buscador-movil`),Oe=document.querySelector(`#btn-cerrar-buscador-movil`),X=document.querySelector(`#input-buscador-drawer`),Z=document.querySelector(`#resultados-drawer-movil`),ke=document.querySelector(`#btn-movil-home`),Ae=document.querySelector(`#btn-movil-explorador`),je=document.querySelector(`#btn-movil-pizarra`);function Q(){J&&J.classList.add(`vista-oculta`),Y&&Y.classList.add(`vista-oculta`),q&&q.classList.add(`vista-oculta`)}Te&&J&&q&&Te.addEventListener(`click`,()=>{Q(),J.classList.remove(`vista-oculta`),q.classList.remove(`vista-oculta`)}),De&&De.addEventListener(`click`,Q),ke&&ke.addEventListener(`click`,()=>{Q(),H(`inicio`)}),Ae&&Ae.addEventListener(`click`,()=>{Q(),H(`explorador`)}),je&&je.addEventListener(`click`,()=>{Q(),H(`pizarra`)}),Ee&&Y&&q&&Ee.addEventListener(`click`,()=>{Q(),Y.classList.remove(`vista-oculta`),q.classList.remove(`vista-oculta`),$(),setTimeout(()=>{X&&X.focus()},150)}),Oe&&Oe.addEventListener(`click`,Q),q&&q.addEventListener(`click`,Q);function $(){Z&&(Z.innerHTML=[...new Set(e.map(e=>e.categoria||`General`))].slice(0,6).map(e=>`
    <div class="item-sugerencia-drawer" data-categoria="${e}">
      ${e}
    </div>
  `).join(``),Z.querySelectorAll(`.item-sugerencia-drawer`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.categoria;Q(),H(`explorador`);let n=document.querySelector(`#filtro-categoria`);n&&(n.value=t,n.dispatchEvent(new Event(`change`)))})}))}X&&Z&&X.addEventListener(`input`,t=>{let n=t.target.value.toLowerCase().trim();if(n.length===0){$();return}let r=e.filter(e=>{let t=(e.titulo||``).toLowerCase(),r=(e.descripcion||``).toLowerCase(),i=(e.categoria||``).toLowerCase();return t.includes(n)||r.includes(n)||i.includes(n)});r.length===0?Z.innerHTML=`
        <div style="padding: 1rem 0; color: #71717a; font-size: 0.85rem;">
          No se encontraron coincidencias.
        </div>
      `:(Z.innerHTML=r.slice(0,6).map(e=>`
        <div class="item-resultado-rapido" data-enlace="${e.enlace}">
          <span class="titulo-item-rapido">${e.titulo}</span>
          <span class="categoria-item-rapido">${e.categoria} · Ver PDF ↗</span>
        </div>
      `).join(``),Z.querySelectorAll(`.item-resultado-rapido`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.enlace;t&&t!==`#`&&window.open(t,`_blank`),Q()})}))});export{e as t};
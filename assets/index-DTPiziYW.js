(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:1,titulo:`El Pueblo no debe rogar a los Políticos para decidir su futuro, debe obligarlos`,categoria:`Filosofía`,tipo:`pdf`,miniatura:`/thumbnails/ensayo-congreso.jpg`,descripcion:`Ensayo sobre el rumbo estratégico de la protesta, con foco en el Congreso, y el bloqueo político a las demandas del proletariado.`,tags:[`filosofia`,`filosofía`,`ensayo`,`congreso`,`rejas`,`escritura`,`literatura`],enlace:`/documentos/ensayo-congreso.pdf`,destacado:!0},{id:2,titulo:`El contrato social`,categoria:`Filosofía`,tipo:`pdf`,miniatura:`/thumbnails/Jean-Jacques-Rousseau-El-contrato-social.jpg`,descripcion:`Obra cúspide de Jean Jacques Rousseau.`,tags:[`filosofia`,`filosofía`,`ensayo`,`congreso`,`rejas`,`cita`,`literatura`],enlace:`/documentos/Jean-Jacques-Rousseau-El-contrato-social.pdf`,destacado:!0},{id:3,titulo:`Post-transitional Justice`,categoria:`Estudio`,tipo:`pdf`,miniatura:`/thumbnails/post-transitional-justice-human-rights-trials-in-chile-and-cath-collins.jpg`,descripcion:`Human Rights trials in Chile and El Salvador Post-transitional Justice C A T H C O L L I N S Post-­transitional Justice The Pennsylvania State University Press University Park, Pennsylvania Post-trans`,tags:[`chile`,`justice`,`transitional`,`human`,`rights`,`salvador`],enlace:`/documentos/Post-transitional Justice  Human Rights Trials in Chile and -- Cath Collins.pdf`}];function t(){let t=document.querySelector(`#vista-actualidad`),n=document.querySelector(`#vista-inicio`),r=e[0]||{titulo:`Ensayo Central`,miniatura:`/fondos/24000001-large.png`,enlace:`#`};e[1],t&&(t.innerHTML=`
      <section class="pantalla-actualidad cronica-congreso">
        
        <!-- Distintivo superior -->
        <div class="actualidad-emblema-wrapper">
          <span class="emblema-punto"></span>
          <span class="subtexto-institucional">GÉNESIS & DESPLAZAMIENTO DEL PODER LEGISLATIVO</span>
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
            <span class="texto-ingreso">[ AVANZAR EN EL TIEMPO ]</span>
            <span class="flecha-ingreso">→</span>
          </div>
        </div>

      </section>
    `),n&&(n.innerHTML=`
      <section class="seccion-inicio escaparate-split-layout">
        <div class="split-contenedor-editorial">
          
          <!-- MITAD IZQUIERDA: Imagen con botón "VER AQUÍ" -->
          <div class="columna-split columna-imagen-preview">
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

          <!-- MITAD DERECHA: Cubículo con fondo blur y descripción -->
          <div class="columna-split columna-datos-blur">
            <div class="tarjeta-blur-contenido">
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
    `)}var n={pdf:`
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
      <!-- 1. Miniatura o Carátula de respaldo generada por Thumbnail.js -->
      ${i(e)}

      <!-- 2. Información textual del documento -->
      <div class="card-cuerpo">
        <span class="badge">${e.categoria||`General`}</span>
        <h3>${e.titulo||`Sin título`}</h3>
        <p>${e.descripcion||e.descripción||`Sin descripción disponible.`}</p>
        
        <div class="tags">
          ${(e.tags||[]).map(e=>`<span class="tag">${e}</span>`).join(``)}
        </div>

        <a href="${e.enlace||`#`}" target="_blank" rel="noopener noreferrer">
          ${e.enlace?`Ver Documento`:`No disponible`}
        </a>
      </div>
    </article>
  `}function o(e){return e.toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).trim()}function s(e,t,n){let r=o(t);return e.filter(e=>{let t=n===`todas`||e.categoria===n,i=o(e.titulo),a=o(e.descripcion),s=e.tags.map(e=>o(e)).join(` `),c=r===``||i.includes(r)||a.includes(r)||s.includes(r);return t&&c})}function c(){let t=document.querySelector(`#contenedor-datos`),n=document.querySelector(`#buscador`),r=document.querySelector(`#filtro-categoria`),i=document.querySelector(`#contador-resultados`);[...new Set(e.map(e=>e.categoria))].forEach(e=>{let t=document.createElement(`option`);t.value=e,t.textContent=e,r.appendChild(t)});function o(n){i.textContent=`Mostrando ${n.length} de ${e.length} documentos`,n.length===0?t.innerHTML=`
        <div class="sin-resultados">
          <p>No se encontraron documentos con esos criterios.</p>
        </div>
      `:t.innerHTML=n.map(e=>a(e)).join(``)}function c(){let t=n.value,i=r.value;o(s(e,t,i))}n.addEventListener(`input`,c),r.addEventListener(`change`,c),o(e)}var l=new Set,u=!1,d=!1,f=0,p={scrollY:0,progreso:0,direccion:1,velocidad:0};function m(){let e=window.scrollY,t=document.documentElement.scrollHeight-window.innerHeight,n=t>0?Math.min(Math.max(e/t,0),1):0,r=e>=f?1:-1,i=Math.abs(e-f);p.scrollY=e,p.progreso=n,p.direccion=r,p.velocidad=i,f=e;let a=document.documentElement.style;a.setProperty(`--progreso`,p.progreso.toFixed(4)),a.setProperty(`--direccion`,p.direccion),a.setProperty(`--scroll-y`,`${p.scrollY}px`),l.forEach(e=>{try{e(p)}catch(e){console.error(`Error en un suscriptor del Scroll Engine:`,e)}}),d=!1}function h(){d||=(window.requestAnimationFrame(m),!0)}function g(){u||(u=!0,window.addEventListener(`scroll`,h,{passive:!0}),window.addEventListener(`resize`,h,{passive:!0}),m())}function _(e){return typeof e==`function`&&(l.add(e),e(p)),()=>l.delete(e)}var v=1,y=1,b=[],x=null,S=null;function C(e=2e3){if(v=3.6,S)for(let e=0;e<35;e++){let e=new T(S);e.x=S.width+Math.random()*80,e.y=Math.random()*(S.height*1.15),e.esTemporal=!0,b.push(e)}if(x){let t=document.createElement(`div`);t.className=`capa-briznas-papel capa-briznas-refuerzo`,t.innerHTML=E(10),x.appendChild(t),setTimeout(()=>{t.remove()},e+1e3)}}function w(e=!0){if(!x)return;x.querySelectorAll(`.capa-briznas-papel`).forEach(t=>{t.style.display=e?`none`:``});let t=x.querySelector(`#canvas-chispas`);t&&(t.style.display=e?`none`:``);let n=x.querySelector(`.svg-corrientes-viento`);n&&(n.style.display=e?`none`:``)}var T=class{constructor(e){this.canvas=e,this.esTemporal=!1,this.reiniciar(!0)}reiniciar(e=!1){this.x=e?Math.random()*this.canvas.width:this.canvas.width+Math.random()*60,this.y=e?Math.random()*this.canvas.height:Math.random()*(this.canvas.height*1.15),this.esCercana=Math.random()>.6,this.esCercana?(this.vxBase=-(4.2+Math.random()*4.8),this.vyBase=-(1.2+Math.random()*2.2),this.grosor=3+Math.random()*3.5,this.vidaMaxima=65+Math.random()*50):(this.vxBase=-(2.2+Math.random()*2.6),this.vyBase=-(.6+Math.random()*1.4),this.grosor=1.2+Math.random()*1.5,this.vidaMaxima=85+Math.random()*90),this.vida=e?Math.random()*this.vidaMaxima:0,this.faseWobble=Math.random()*Math.PI*2}actualizar(e){this.vida++,this.faseWobble+=.055;let t=Math.sin(this.faseWobble)*(this.esCercana?1.3:.6),n=this.vxBase*e,r=(this.vyBase+t)*e;this.x+=n,this.y+=r;let i=this.vida>=this.vidaMaxima||this.x<-140||this.y<-140;return i&&!this.esTemporal&&this.reiniciar(!1),{vx:n,vy:r,progresoVida:this.vida/this.vidaMaxima,terminada:i}}dibujar(e,t,n){let{vx:r,vy:i,progresoVida:a}=t,o,s,c,l;a<.22?(o=255,s=245,c=210,l=1):a<.6?(o=255,s=145,c=30,l=.95):(o=215,s=50,c=15,l=(1-a)*2.5);let u=this.esCercana?6.2:3.6,d=(6+Math.abs(r)*u)*(.75+n*.35),f=this.x-d*.22*r,p=this.y-d*.22*i;this.esCercana&&(e.beginPath(),e.moveTo(this.x,this.y),e.lineTo(f,p),e.strokeStyle=`rgba(255, 95, 15, ${l*.4})`,e.lineWidth=this.grosor*(1.8+n*.3),e.stroke()),e.beginPath(),e.moveTo(this.x,this.y),e.lineTo(f,p),e.strokeStyle=`rgba(${o}, ${s}, ${c}, ${l})`,e.lineWidth=this.grosor,e.stroke()}};function ee(){let e=document.querySelector(`#escenario-artistico`);if(!e)return;e.innerHTML=``;let t=document.createElement(`div`);t.className=`escenario-viento-activo`,x=t,t.innerHTML=`
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
  `,e.appendChild(t);let n=t.querySelector(`#canvas-chispas`);S=n;let r=n.getContext(`2d`,{alpha:!0});function i(){n.width=window.innerWidth,n.height=window.innerHeight}window.addEventListener(`resize`,i),i();let a=[];for(let e=0;e<32;e++)a.push(new T(n));_(e=>{let t=1+Math.min(e.velocidad/18,2);t>v&&(v=t)});function o(){v=Math.max(1,v*.95),y+=(v-y)*.07,r.clearRect(0,0,n.width,n.height),r.globalCompositeOperation=`lighter`,r.lineCap=`round`;for(let e=0;e<a.length;e++){let t=a[e],n=t.actualizar(y);t.dibujar(r,n,y)}for(let e=b.length-1;e>=0;e--){let t=b[e],n=t.actualizar(y);t.dibujar(r,n,y),n.terminada&&b.splice(e,1)}r.globalCompositeOperation=`source-over`,requestAnimationFrame(o)}requestAnimationFrame(o)}function E(e){let t=``,n=[`pagina-chamuscada`,`brasa-papel`,`escama-ceniza`];for(let r=0;r<e;r++){let e=n[r%n.length],i=(4+Math.random()*3).toFixed(2),a=-(Math.random()*8).toFixed(2),o=(Math.random()*110-10).toFixed(1),s=(.6+Math.random()*.8).toFixed(2);t+=`
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

  // Algoritmo Cover Universal con Clamping de Seguridad
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

    float zoomBase = esMovil ? 1.50 : 1.0;
    vec2 uvBase = getCoverUV(uv, u_resolution, u_tex_base_size, zoomBase, 0.0);

    float zoomMarea = esMovil ? 2.35 : 1.0;
    vec2 uvLiquid = getCoverUV(uv, u_resolution, u_tex_liquid_size, zoomMarea, 0.0);

    uvBase.y = clamp(uvBase.y + (u_scroll_progress - 0.5) * 0.08, 0.002, 0.998);
    uvLiquid.y = clamp(uvLiquid.y + (u_scroll_progress - 0.5) * 0.10, 0.002, 0.998);

    // 1. FISICA DE LA MAREA (DERECHA A IZQUIERDA)
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

    // 2. FONDO A (BASE) Y AVANCE DEL TELON NEGRO
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

    // 4. SALIDA Y SATURACION (DECLARADA UNA SOLA VEZ)
    float saturacion = 1.15;
    float luminancia = dot(colorMezcla, vec3(0.299, 0.587, 0.114));
    vec3 colorSalidaFinal = mix(vec3(luminancia), colorMezcla, saturacion);

    gl_FragColor = vec4(colorSalidaFinal, 1.0);
  }
`,D=!1,O=0,k=2100,A=0,j=0;function M(e){A=e===`total`?2:+(e===`parcial`)}function ae(){D=!0,O=performance.now()}function N(e){let t=Math.max(0,Math.min(1,e));return t*t*t*(t*(t*6-15)+10)}function oe(){if(document.querySelector(`#canvas-inmersivo`))return;let e=document.createElement(`canvas`);e.id=`canvas-inmersivo`,document.body.prepend(e);let t=e.getContext(`webgl`)||e.getContext(`experimental-webgl`);if(!t)return;function n(e,n){let r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(console.error(`Error al compilar Shader:`,t.getShaderInfoLog(r)),t.deleteShader(r),null)}let r=n(t.VERTEX_SHADER,re),i=n(t.FRAGMENT_SHADER,ie);if(!r||!i)return;let a=t.createProgram();if(t.attachShader(a,r),t.attachShader(a,i),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS)){console.error(`Error al enlazar programa WebGL:`,t.getProgramInfoLog(a));return}t.useProgram(a);let o=new Float32Array([-1,-1,1,-1,-1,1,1,1]),s=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,s),t.bufferData(t.ARRAY_BUFFER,o,t.STATIC_DRAW);let c=t.getAttribLocation(a,`a_position`);t.enableVertexAttribArray(c),t.vertexAttribPointer(c,2,t.FLOAT,!1,0,0);let l=t.getUniformLocation(a,`u_time`),u=t.getUniformLocation(a,`u_scroll_progress`),d=t.getUniformLocation(a,`u_limite_marea`),f=t.getUniformLocation(a,`u_telon_progreso`),p=t.getUniformLocation(a,`u_resolution`),m=t.getUniformLocation(a,`u_tex_base`),h=t.getUniformLocation(a,`u_tex_liquid`),g=t.getUniformLocation(a,`u_tex_base_size`),v=t.getUniformLocation(a,`u_tex_liquid_size`);function y(){let n=Math.min(window.devicePixelRatio||1,window.innerWidth<850?1.25:1.5);e.width=Math.floor(window.innerWidth*n),e.height=Math.floor(window.innerHeight*n),t.viewport(0,0,e.width,e.height),t.uniform2f(p,e.width,e.height)}window.addEventListener(`resize`,y),y(),t.uniform2f(g,1920,1080),t.uniform2f(v,1920,1080),t.uniform1f(d,.395),t.uniform1f(f,0);function b(e,n,r,i,a){let o=t.createTexture();t.activeTexture(e),t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([247,243,238,255]));let s=new Image;s.crossOrigin=`anonymous`,s.src=n,s.onload=()=>{t.activeTexture(e),t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,s),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.uniform2f(a,s.naturalWidth||1920,s.naturalHeight||1080)},s.onerror=()=>{s.src.includes(`.png`)?s.src=n.replace(`.png`,`.jpg`):s.src.includes(`.jpg`)?s.src=n.replace(`.jpg`,`.png`):r&&s.src!==r&&(s.src=r)};let c=e-t.TEXTURE0;t.uniform1i(i,c)}b(t.TEXTURE0,te,`https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1600&auto=format&fit=crop`,m,g),b(t.TEXTURE1,ne,`https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&auto=format&fit=crop`,h,v);let x=0,S=performance.now();_(e=>{x=e.progreso});function C(e){let n=(e-S)*.001;j+=(A-j)*.055;let r=.395;if(D){let t=(e-O)/k;t>=1?(D=!1,r=.395):r=t<.42?.395+N(t/.42)*(.85-.395):t<.76?.85-N((t-.42)/.34)*.55:.3+N((t-.76)/.24)*(.395-.3)}t.uniform1f(l,n),t.uniform1f(u,x),t.uniform1f(d,r),t.uniform1f(f,j),t.drawArrays(t.TRIANGLE_STRIP,0,4),requestAnimationFrame(C)}requestAnimationFrame(C)}var P=[];function F(){P.forEach(e=>clearTimeout(e)),P=[]}function se(e){let t=document.querySelector(`#vista-cinematica`);if(!t)return;F(),t.innerHTML=`
    <div class="teatro-cinematica">
      
      <!-- Botón de salto accesible -->
      <button id="btn-saltar-cine" class="btn-saltar-cine" title="Saltar cinemática (Esc)">
        Saltar ✕
      </button>

      <!-- Túnel de partículas ascendentes (simula caída al vacío) -->
      <div class="camara-particulas-vertical" id="particulas-verticales">
        ${ce(25)}
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
  `;function n(t=!1){F(),window.removeEventListener(`keydown`,i),typeof e==`function`&&e(t)}let r=t.querySelector(`#btn-saltar-cine`);r&&r.addEventListener(`click`,()=>n(!0));function i(e){e.key===`Escape`&&n(!0)}window.addEventListener(`keydown`,i);let a=setTimeout(()=>{n(!1)},9500);P.push(a)}function ce(e){let t=``;for(let n=0;n<e;n++){let e=(1.4+Math.random()*1.8).toFixed(2),n=-(Math.random()*3).toFixed(2),r=(Math.random()*100).toFixed(1),i=(1.5+Math.random()*3.5).toFixed(1);t+=`
      <span 
        class="chispa-vertical" 
        style="
          --dur-caida: ${e}s;
          --ret-caida: ${n}s;
          --left-x: ${r}%;
          --ancho-p: ${i}px;
        "
      ></span>
    `}return t}var le=`modulepreload`,ue=function(e){return`/`+e},de={},fe=function(e){return e.pathname.endsWith(`.css`)},pe=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},me=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=ue(t,n);let r=s(t),i=fe(r);return pe(de,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:le,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};oe(),ee(),g(),t(),c();var I=document.querySelector(`#cabecera-principal`),L=document.querySelector(`#nav-nodos-home`),R=document.querySelector(`#btn-volver-home`),z=document.querySelector(`#btn-explorador`),B=document.querySelector(`#btn-pizarra`),V=document.querySelector(`#nodo-portada`),H=document.querySelector(`#nodo-actualidad`),U=document.querySelector(`#nodo-inicio`),W={portada:{el:document.querySelector(`#vista-portada`),dominio:`editorial`,nodo:V},actualidad:{el:document.querySelector(`#vista-actualidad`),dominio:`editorial`,nodo:H},cinematica:{el:document.querySelector(`#vista-cinematica`),dominio:`cinematica`},inicio:{el:document.querySelector(`#vista-inicio`),dominio:`editorial`,nodo:U},explorador:{el:document.querySelector(`#vista-explorador`),dominio:`operativo`,btn:z},pizarra:{el:document.querySelector(`#vista-pizarra`),dominio:`operativo`,btn:B}},G=!1,K=!1,q=e=>new Promise(t=>setTimeout(t,e));async function J(e,t=!1){if(K)return;let n=Object.entries(W).find(([e,t])=>t.el&&!t.el.classList.contains(`vista-oculta`));if(n&&n[0]===e)return;let r=W[e];if(!r)return;if(K=!0,e===`cinematica`){w(!0),M(`total`),n&&n[1].el&&n[1].el.classList.add(`actualidad-salida-arriba`),I&&I.classList.add(`vista-oculta`),L&&L.classList.add(`vista-oculta`),await q(800),n&&n[1].el&&(n[1].el.classList.remove(`actualidad-salida-arriba`),n[1].el.classList.add(`vista-oculta`)),r.el.classList.remove(`vista-oculta`),K=!1,se(()=>{w(!1),r.el.classList.add(`vista-oculta`),J(`inicio`)});return}w(!1);let i=document.querySelector(`#vista-cinematica`);i&&i.classList.add(`vista-oculta`),C(),M(e===`actualidad`?`parcial`:`apagado`);let a=n?n[1].dominio===`editorial`:!1,o=r.dominio===`editorial`;if(a&&o){if(t&&await q(500),n&&n[1].el){let e=n[1].el;e.classList.add(`editorial-salida`),await q(420),e.classList.remove(`editorial-salida`),e.classList.add(`vista-oculta`)}let i=e===`portada`||e===`actualidad`;I&&I.classList.toggle(`vista-oculta`,i),L&&L.classList.toggle(`vista-oculta`,e===`portada`),V&&V.classList.toggle(`activo`,e===`portada`),H&&H.classList.toggle(`activo`,e===`actualidad`),U&&U.classList.toggle(`activo`,e===`inicio`),await q(40),r.el&&(r.el.classList.remove(`vista-oculta`),r.el.classList.add(`editorial-entrada`),await q(550),r.el.classList.remove(`editorial-entrada`))}else{if(n&&n[1].el){let e=n[1].el;e.classList.add(`operativa-salida`),await q(180),e.classList.remove(`operativa-salida`),e.classList.add(`vista-oculta`)}if(ae(),o){let t=e===`portada`||e===`actualidad`;I&&I.classList.toggle(`vista-oculta`,t),L&&L.classList.toggle(`vista-oculta`,e===`portada`),V&&V.classList.toggle(`activo`,e===`portada`),H&&H.classList.toggle(`activo`,e===`actualidad`),U&&U.classList.toggle(`activo`,e===`inicio`),R&&R.classList.add(`activo`),z&&z.classList.remove(`activo`),B&&B.classList.remove(`activo`)}else L&&L.classList.add(`vista-oculta`),I&&I.classList.remove(`vista-oculta`),R&&R.classList.remove(`activo`),z&&z.classList.toggle(`activo`,e===`explorador`),B&&B.classList.toggle(`activo`,e===`pizarra`);await q(1600),r.el&&(r.el.classList.remove(`vista-oculta`),r.el.classList.add(`operativa-entrada-izquierda`),await q(1250),r.el.classList.remove(`operativa-entrada-izquierda`))}K=!1}V&&V.addEventListener(`click`,()=>J(`portada`)),H&&H.addEventListener(`click`,()=>J(`actualidad`)),U&&U.addEventListener(`click`,()=>J(`inicio`)),R&&R.addEventListener(`click`,()=>J(`inicio`)),z&&z.addEventListener(`click`,()=>J(`explorador`)),B&&B.addEventListener(`click`,async()=>{J(`pizarra`),G||=((await me(()=>import(`./boardView-zArJ8BXn.js`),[])).inicializarPizarra(),!0)});var Y=document.querySelector(`#titulo-portada-trigger`);Y&&(Y.addEventListener(`click`,()=>J(`actualidad`,!0)),Y.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),J(`actualidad`,!0))}));var X=document.querySelector(`#trigger-actualidad`);X&&(X.addEventListener(`click`,()=>J(`cinematica`)),X.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),J(`cinematica`))})),I&&I.classList.add(`vista-oculta`),L&&L.classList.add(`vista-oculta`),V&&V.classList.add(`activo`),H&&H.classList.remove(`activo`),U&&U.classList.remove(`activo`);var Z=document.querySelector(`#input-buscador-cabecera`),Q=document.querySelector(`#dropdown-resultados-cabecera`),$=document.querySelector(`#logo-nav-congreso`);$&&$.addEventListener(`click`,()=>{J(`portada`)}),Z&&Q&&(Z.addEventListener(`input`,t=>{let n=t.target.value.toLowerCase().trim();if(n.length===0){Q.classList.add(`vista-oculta`),Q.innerHTML=``;return}let r=e.filter(e=>{let t=(e.titulo||``).toLowerCase(),r=(e.descripcion||``).toLowerCase(),i=(e.categoria||``).toLowerCase();return t.includes(n)||r.includes(n)||i.includes(n)});r.length===0?Q.innerHTML=`
        <div style="padding: 0.8rem; text-align: center; color: #71717a; font-size: 0.8rem;">
          No se encontraron documentos
        </div>
      `:(Q.innerHTML=r.slice(0,5).map(e=>`
        <div class="item-resultado-rapido" data-enlace="${e.enlace}">
          <span class="titulo-item-rapido">${e.titulo}</span>
          <span class="categoria-item-rapido">${e.categoria} · Abrir Documento ↗</span>
        </div>
      `).join(``),Q.querySelectorAll(`.item-resultado-rapido`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.enlace;t&&t!==`#`&&window.open(t,`_blank`),Q.classList.add(`vista-oculta`),Z.value=``})})),Q.classList.remove(`vista-oculta`)}),document.addEventListener(`click`,e=>{e.target.closest(`.utilidad-derecha-buscador`)||Q.classList.add(`vista-oculta`)}));export{e as t};
# Web Mans Quiromassatge - paquete para publicar

Web estática, sin base de datos ni dependencias. Basta con subir la carpeta.

## Estructura

```
index.html        Català (página principal)
es/index.html     Castellano
fr/index.html     Français
img/              Fotos, logo, favicon e imagen para redes sociales
sitemap.xml       Mapa del sitio con los 3 idiomas (para Google)
robots.txt
```

- Responsive: la misma página se adapta a móvil, tablet y escritorio. No hay versión móvil aparte.
- Cada idioma es una página real con su URL (`/`, `/es/`, `/fr/`). Están enlazadas entre sí con `hreflang`, así Google muestra a cada visitante la versión de su idioma.
- Todos los botones de reserva abren WhatsApp (676 68 98 68) con el mensaje ya escrito en el idioma de la página.

## Cómo publicar

1. Subir **todo el contenido** de esta carpeta a la raíz del dominio `mansquiromassatge.com`, por FTP o con el gestor de archivos del hosting. `index.html` tiene que quedar en la raíz.
2. Activar HTTPS en el hosting (casi todos lo dan gratis con Let's Encrypt).
3. Dar de alta el sitio en Google Search Console y enviar `https://mansquiromassatge.com/sitemap.xml`.

Alternativa sin hosting: arrastrar la carpeta a [app.netlify.com/drop](https://app.netlify.com/drop) y después apuntar el dominio.

Si el dominio final no es `mansquiromassatge.com`, hay que cambiarlo en estos sitios: las etiquetas `canonical`, `hreflang` y `og:` de las tres páginas, y en `sitemap.xml` y `robots.txt` (buscar y reemplazar).

## Pendiente antes de publicar

| Qué | Dónde |
|---|---|
| Enlace de Instagram: ahora apunta a instagram.com genérico | Buscar `https://www.instagram.com/` en las 3 páginas y poner el perfil real |
| Aviso legal, privacidad y cookies: los enlaces del pie apuntan a `#` | Crear las páginas y enlazarlas. Son obligatorias (LSSI / RGPD) |
| Buzón `info@mansquiromassatge.com` | Comprobar que existe y recibe correo. El botón ya usa `mailto:` |
| Logo en vectorial (SVG) | Si existe, sustituir `img/logo-mans.webp` para que se vea más nítido |
| Licencia de la foto `img/abans-de-reservar.jpg` | Confirmar que es de banco libre (Unsplash, Pexels...) |
| Pago por Bizum | Los clientes franceses no tienen Bizum: añadir transferencia u otro método en el texto de condiciones |

Cookies: la web no usa cookies ni analítica. Solo carga las fuentes de Google Fonts. Si se añade Google Analytics o similar, hará falta banner de cookies.

## Editar textos

Los textos están directamente en cada `index.html`. Para cambiar un precio o una frase, buscarla y editarla en las tres páginas (CA, ES y FR).

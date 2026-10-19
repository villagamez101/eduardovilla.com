# Megaluz Online — proyecto cerrado

Sitio de distribuidora de iluminación LED (megaluz.online, 2021–2024, ya fuera
de línea). Dirigido por Eduardo Villa; participaron diseño, copywriting,
proyectos, ventas y más áreas.

El WordPress fue restaurado temporalmente para documentar el proyecto (capturas
y caso de estudio en el portafolio). Al cerrarse se eliminó el backup y la
restauración; lo que sobrevive:

- **Caso de estudio en el portafolio** (`eduardovilla.com`, ES/EN) con
  capturas del sitio restaurado
- **Material original**: copy, catálogos, banners y branding en
  `02_resources/` y gastos en `05_data/megaluz-online/`
- **Capturas**: `archive/Capturas de pantalla/Megaluz/` y el snapshot de
  Wayback Machine (sept 2024)

## Cómo se restauró (referencia histórica)

1. Backup `.wpress` (All-in-One WP Migration): formato propio con header de
   4377 bytes por archivo; extractor en `scripts/wpress_extract.py`
2. BD: dump con placeholder `SERVMASK_PREFIX_` → reemplazo con
   `wp search-replace` (seguro con datos serializados)
3. El dump declaraba longitudes serializadas en caracteres, no bytes (los
   acentos rompían `unserialize`); `scripts/fix_serialized.php` recalculó
   longitudes en toda la BD
4. AI1WM fija al restaurar: tema activo (`hello-elementor` +
   `hello-theme-child-master`), 18 plugins activos, URLs → aquí se aplicó a
   mano vía wp-cli
5. Stack: WordPress 6.5.3 + MySQL 5.7 en Docker (compose en el historial de
   git), login real en `/acceso-usuarios` (WPS Hide Login)

## Material del proyecto (clasificado)

- `02_resources/docs/megaluz-online/copywriting/` — copy de páginas (docx)
- `02_resources/docs/megaluz-online/catalogos/` — catálogos PDF
- `02_resources/assets/megaluz-online/banners/` — banners por sección
- `02_resources/assets/megaluz-online/branding/` — logotipos y manual (MC)
- `05_data/megaluz-online/gastos/` — facturas y cotización
- `archive/Capturas de pantalla/Megaluz/` — capturas del sitio restaurado

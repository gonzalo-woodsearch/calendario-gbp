import { useState } from "react";

const cp = (text, setCopied, key) => {
  const el = document.createElement("textarea");
  el.value = text; el.style.position = "fixed"; el.style.opacity = "0";
  document.body.appendChild(el); el.focus(); el.select();
  document.execCommand("copy"); document.body.removeChild(el);
  setCopied(key); setTimeout(() => setCopied(null), 1800);
};

const MESES = {
  marzo: {
    nombre: "Marzo 2026", servicio: "Implantes dentales", emoji: "🦷",
    colorTab: "bg-blue-600", colorTabInactive: "hover:bg-blue-50",
    kpiMeta: "1-2 reservas/llamadas por semana · Objetivo: 4-8 conversiones en el mes",
    kpiObjetivo: 8,
    hitos: [
      { label: "🚀 Arranque", fecha: "2 mar", color: "bg-green-100 text-green-800 border-green-200" },
      { label: "📊 Reporte KPIs", fecha: "5 abr", color: "bg-blue-100 text-blue-800 border-blue-200" },
      { label: "🔍 Reunión estrategia", fecha: "7-8 abr", color: "bg-purple-100 text-purple-800 border-purple-200" },
    ],
    embudo: [
      { fase: "Captación", semana: "S1", desc: "Atraer pacientes locales con mensaje de cercanía y tecnología", objetivo: "Impresiones y clics en perfil GBP", color: "bg-blue-100 text-blue-800" },
      { fase: "Educación", semana: "S1-S2", desc: "Explicar implante unitario y All-on-4 con vídeos y consejos", objetivo: "Tiempo en perfil · Clics en web", color: "bg-purple-100 text-purple-800" },
      { fase: "Consideración", semana: "S3", desc: "Resolver objeciones (poco hueso, casos complejos) y SEO local", objetivo: "Búsquedas directas · Cómo llegar", color: "bg-yellow-100 text-yellow-800" },
      { fase: "Conversión", semana: "S4", desc: "Financiación, All-on-6 y urgencias para cerrar decisión", objetivo: "Llamadas · Reservas · CTA Reservar", color: "bg-green-100 text-green-800" },
    ],
    semanas: [
      {
        id: 1, titulo: "Semana 1 — Valoración + Implante unitario", objetivo: "Captación",
        color: { header: "bg-blue-600", bg: "bg-blue-50", ring: "ring-blue-400" },
        dias: [
          { dia: "Lunes", fecha: "2 mar", tipo: "POST", formato: "Imagen", tema: "Captación local", cta: "Reservar", foto: "Recepción bonita / fachada / equipo sonriendo (sin pacientes)", descIA: "Captación local: clínica cercana, equipo amable, tecnología diagnóstica. Tono cercano y de confianza. Mensaje principal: estamos en tu zona para ayudarte. CTA: reservar valoración. Incluir {ZONA} de forma natural.", produccion: null },
          { dia: "Martes", fecha: "3 mar", tipo: "GALERÍA", formato: "Foto", tema: "Fachada exterior", cta: "—", foto: "Fachada (plano abierto)", descIA: null, produccion: "Subir foto RAW de fachada en plano abierto a la galería de la ficha GBP." },
          { dia: "Miércoles", fecha: "4 mar", tipo: "POST", formato: "Vídeo", tema: "Diagnóstico y planificación digital", cta: "Más información", foto: "INTRO local 2-3s (fachada/recepción) → CUERPO educativo 15-25s → OUTRO local 2-3s con CTA. Overlay: 'Cleardent {ZONA}'. Si sin voz: bullets (Diagnóstico · Plan · Seguimiento).", descIA: "Proceso de valoración y planificación digital. Tono informativo y tranquilizador. Mensaje: así trabajamos para planificar tu caso con diagnóstico, plan personalizado y seguimiento. CTA: más información en web.", produccion: "Montar: clip fachada/recepción (intro 2-3s) + vídeo educativo de diagnóstico (15-25s) + clip recepción/fachada con CTA 'Reserva tu valoración' (outro 2-3s). Formato 1080×1920, 30fps." },
          { dia: "Jueves", fecha: "5 mar", tipo: "GALERÍA", formato: "Foto", tema: "Recepción en acción", cta: "—", foto: "Recepción en acción", descIA: null, produccion: "Subir foto RAW de recepción en acción a la galería GBP." },
          { dia: "Viernes", fecha: "6 mar", tipo: "POST", formato: "Imagen", tema: "Implante unitario", cta: "Reservar", foto: "Escáner intraoral / pantalla de planificación sin datos / doctor/a con modelo (sin paciente)", descIA: "Implante unitario: recuperar una pieza perdida con función y estética. Tono claro sin promesas. Proceso explicado paso a paso. Matiz obligatorio: 'según valoración'. Destacar tecnología de planificación. CTA: reservar.", produccion: null },
          { dia: "Sábado", fecha: "7 mar", tipo: "GALERÍA", formato: "Foto", tema: "Tecnología: escáner", cta: "—", foto: "Escáner intraoral en mano", descIA: null, produccion: "Subir foto RAW de escáner intraoral en mano a la galería GBP." },
          { dia: "Domingo", fecha: "8 mar", tipo: "POST", formato: "Imagen", tema: "Consejo: salud gingival", cta: "Llamar", foto: "Macro higiene (cepillo/hilo) o equipo/recepción muy limpio", descIA: "Consejo de salud oral previo a implantes: importancia de la salud gingival. Tono educativo y preventivo. Mensaje: si tienes encías inflamadas o con sangrado, consúltalo antes de planificar implantes. CTA: llamar.", produccion: null },
        ]
      },
      {
        id: 2, titulo: "Semana 2 — All-on-4 + Reseña destacada", objetivo: "Educación + Confianza",
        color: { header: "bg-purple-600", bg: "bg-purple-50", ring: "ring-purple-400" },
        dias: [
          { dia: "Lunes", fecha: "9 mar", tipo: "POST", formato: "Imagen", tema: "Captación local → dientes fijos", cta: "Reservar", foto: "Fachada o equipo/recepción", descIA: "Captación local orientada a rehabilitación fija completa. Tono cercano, sin presión. Primer paso es una valoración sin compromiso. Reforzar presencia local en {ZONA}. CTA: reservar.", produccion: null },
          { dia: "Martes", fecha: "10 mar", tipo: "GALERÍA", formato: "Foto", tema: "Entorno / landmark cercano", cta: "—", foto: "Calle / esquina / metro cercano", descIA: null, produccion: "Subir foto RAW del entorno o landmark cercano a la galería GBP." },
          { dia: "Miércoles", fecha: "11 mar", tipo: "POST", formato: "Vídeo", tema: "Qué es el All-on-4", cta: "Más información", foto: "INTRO local 2-3s → CUERPO educativo All-on-4 15-25s → OUTRO local 2-3s con CTA. Overlay: 'Cleardent {ZONA}'.", descIA: "Vídeo explicativo All-on-4: qué es, cómo funciona, perfil de paciente. Tono informativo con matiz obligatorio 'casos seleccionados / según valoración'. Sin prometer tiempos ni resultados. CTA: más información.", produccion: "Montar: clip fachada/recepción (intro 2-3s) + vídeo educativo All-on-4 (15-25s) + clip recepción/fachada con CTA 'Reserva tu valoración' (outro 2-3s). Formato 1080×1920, 30fps." },
          { dia: "Jueves", fecha: "12 mar", tipo: "GALERÍA", formato: "Foto", tema: "Coordinación / explicación de plan", cta: "—", foto: "Coordinador/a explicando plan con tablet (sin datos visibles)", descIA: null, produccion: "Subir foto RAW de coordinador/a con tablet a la galería GBP." },
          { dia: "Viernes", fecha: "13 mar", tipo: "POST", formato: "Imagen", tema: "All-on-4: diagnóstico y plan claro", cta: "Reservar", foto: "Coordinación explicando plan / doctor con pantalla / tecnología (sin datos)", descIA: "All-on-4: rehabilitación fija completa en casos seleccionados. Destacar diagnóstico riguroso y planificación personalizada. Matiz obligatorio: 'casos seleccionados / según valoración'. Tono seguro y profesional. CTA: reservar valoración.", produccion: null },
          { dia: "Sábado", fecha: "14 mar", tipo: "GALERÍA", formato: "Foto", tema: "Tecnología: TAC / CBCT", cta: "—", foto: "TAC/CBCT en sala (si no hay, tecnología equivalente)", descIA: null, produccion: "Subir foto RAW de TAC/CBCT o tecnología equivalente a la galería GBP." },
          { dia: "Domingo", fecha: "15 mar", tipo: "POST", formato: "Imagen", tema: "⭐ Reseña destacada → implantes", cta: "Reservar", foto: "Fondo neutro limpio / recepción / logo Cleardent visible (sin datos del paciente)", descIA: "Reseña destacada del mes relacionada con implantes. Busca una reseña real de 5 estrellas de GBP de esa clínica que mencione implantes, trato del equipo o resultado. Úsala como inspiración para el copy: transmite confianza con la experiencia real de un paciente. Tono cálido y cercano. CTA: reservar.", produccion: null, esResena: true },
        ]
      },
      {
        id: 3, titulo: "Semana 3 — Casos complejos + Cómo llegar", objetivo: "Consideración + SEO local",
        color: { header: "bg-green-600", bg: "bg-green-50", ring: "ring-green-400" },
        dias: [
          { dia: "Lunes", fecha: "16 mar", tipo: "POST", formato: "Imagen", tema: "Implantes en {ZONA} → SEO local", cta: "Reservar", foto: "Doctor/a en gabinete / equipo / recepción (local)", descIA: "SEO local de implantes: posicionar la clínica como referente en implantes dentales en {ZONA}. Tono directo y local. Mensaje: somos tu clínica de implantes en {ZONA}, con valoración y plan a medida. CTA: reservar.", produccion: null },
          { dia: "Martes", fecha: "17 mar", tipo: "GALERÍA", formato: "Foto", tema: "Fachada → detalle rótulo", cta: "—", foto: "Fachada con detalle del rótulo", descIA: null, produccion: "Subir foto RAW de fachada con detalle del rótulo a la galería GBP." },
          { dia: "Miércoles", fecha: "18 mar", tipo: "POST", formato: "Vídeo LOCAL", tema: "Cómo llegar a la clínica", cta: "Cómo llegar", foto: "Montaje 20-30s / 1080×1920 / 30fps:\n• Clip 1 (3-5s): Landmark → \"Desde {METRO}/{HITO}\"\n• Clip 2 (4-6s): caminata tramo 1 → \"↕ 5 min andando\"\n• Clip 3 (4-6s): caminata tramo final\n• Clip 4 (4-6s): fachada con rótulo → \"{CLINICA}\"\n• Clip 5 (3-5s): entrada/recepción → \"Pulsa 'Cómo llegar'\"\n⚠️ Sin caras identificables · Sin datos · Cortes rápidos", descIA: null, produccion: "⚠️ Vídeo local manual. No pasa por herramienta IA. Montar con clips RAW propios siguiendo la receta de 5 clips." },
          { dia: "Jueves", fecha: "19 mar", tipo: "GALERÍA", formato: "Foto", tema: "Equipo → mini grupo", cta: "—", foto: "Mini-grupo del equipo (2-3 personas)", descIA: null, produccion: "Subir foto RAW de mini-grupo del equipo a la galería GBP." },
          { dia: "Viernes", fecha: "20 mar", tipo: "POST", formato: "Imagen", tema: "Casos complejos: poco hueso", cta: "Reservar", foto: "TAC/CBCT / pantalla planificación sin datos / doctor señalando modelo (sin paciente)", descIA: "Casos complejos: pacientes a los que han dicho que tienen poco hueso o no son candidatos a implantes. Tono empático y esperanzador sin prometer resultados. Mensaje: en muchos casos hay solución, depende de la valoración individual. CTA: reservar.", produccion: null },
          { dia: "Sábado", fecha: "21 mar", tipo: "GALERÍA", formato: "Foto", tema: "Gabinete clínico", cta: "—", foto: "Gabinete (plano ancho, limpio)", descIA: null, produccion: "Subir foto RAW del gabinete en plano ancho y limpio a la galería GBP." },
          { dia: "Domingo", fecha: "22 mar", tipo: "POST", formato: "Imagen", tema: "Consejo: bruxismo", cta: "Llamar", foto: "Férula/cepillo o equipo", descIA: "Consejo sobre bruxismo: cómo apretar los dientes puede afectar a la salud oral y a la planificación de implantes. Tono educativo. Mensaje: si tienes bruxismo, cuéntanoslo en consulta. CTA: llamar.", produccion: null },
        ]
      },
      {
        id: 4, titulo: "Semana 4 — All-on-6 Premium + Financiación + Urgencias", objetivo: "Conversión",
        color: { header: "bg-orange-600", bg: "bg-orange-50", ring: "ring-orange-400" },
        dias: [
          { dia: "Lunes", fecha: "23 mar", tipo: "POST", formato: "Imagen", tema: "Financiación → sin barrera de precio", cta: "Reservar", foto: "Coordinación con tablet demo o recepción", descIA: "Financiación de implantes: eliminar la barrera del precio. Sin cifras ni cuotas concretas. Hay opciones de pago, ven a informarte sin compromiso. Matiz obligatorio: 'según condiciones'. CTA: reservar valoración.", produccion: null },
          { dia: "Martes", fecha: "24 mar", tipo: "GALERÍA", formato: "Foto", tema: "Metro / landmark cercano", cta: "—", foto: "Entrada de metro o landmark cercano", descIA: null, produccion: "Subir foto RAW del metro o landmark cercano a la galería GBP." },
          { dia: "Miércoles", fecha: "25 mar", tipo: "POST", formato: "Vídeo", tema: "Qué es el All-on-6 Premium", cta: "Más información", foto: "INTRO local 2-3s → CUERPO educativo All-on-6 Premium 15-25s → OUTRO local 2-3s. Overlay: 'Cleardent {ZONA}'.", descIA: "Vídeo explicativo All-on-6 Premium: diferencias con All-on-4, perfil de paciente ideal, cuándo se recomienda. Tono de alta gama. Matiz obligatorio: 'casos seleccionados / según valoración'. CTA: más información.", produccion: "Montar: clip fachada/recepción (intro 2-3s) + vídeo educativo All-on-6 Premium (15-25s) + clip recepción/fachada con CTA 'Reserva tu valoración' (outro 2-3s). Formato 1080×1920, 30fps." },
          { dia: "Jueves", fecha: "26 mar", tipo: "GALERÍA", formato: "Foto", tema: "Retrato doctor/a", cta: "—", foto: "Retrato del/la doctor/a", descIA: null, produccion: "Subir foto RAW de retrato del/la doctor/a a la galería GBP." },
          { dia: "Viernes", fecha: "27 mar", tipo: "POST", formato: "Imagen", tema: "All-on-6 Premium → rehabilitación completa", cta: "Reservar", foto: "Retrato doctor/a o planificación/tecnología", descIA: "All-on-6 Premium: rehabilitación completa de alto ticket. Destacar exclusividad, planificación detallada y atención personalizada. Matiz: 'casos seleccionados'. CTA: reservar.", produccion: null },
          { dia: "Sábado", fecha: "28 mar", tipo: "GALERÍA", formato: "Foto", tema: "Esterilización / higiene clínica", cta: "—", foto: "Zona de esterilización o bandeja limpia", descIA: null, produccion: "Subir foto RAW de zona de esterilización o bandeja limpia a la galería GBP." },
          { dia: "Domingo", fecha: "29 mar", tipo: "POST", formato: "Imagen", tema: "Urgencias dentales en {ZONA}", cta: "Llamar", foto: "Recepción/teléfono o fachada", descIA: "Urgencias dentales en {ZONA}: disponibilidad para atender dolor o emergencias. Tono inmediato y tranquilizador. Si la clínica abre sábados añadir sello. CTA: llamar.", produccion: null },
        ]
      },
      {
        id: 5, titulo: "Semana 5 — Puente hacia abril (continúa con Ortodoncia Invisible)", objetivo: "Cierre de mes",
        color: { header: "bg-gray-500", bg: "bg-gray-50", ring: "ring-gray-400" },
        dias: [
          { dia: "Lunes", fecha: "30 mar", tipo: "GALERÍA", formato: "Foto", tema: "Equipo completo / ambiente clínica", cta: "—", foto: "Foto de equipo completo o ambiente general de la clínica (sin pacientes)", descIA: null, produccion: "Subir foto RAW de equipo completo o ambiente general a la galería GBP." },
          { dia: "Martes", fecha: "31 mar", tipo: "POST", formato: "Imagen", tema: "Cierre de mes → recordatorio valoración", cta: "Reservar", foto: "Recepción bonita / equipo sonriendo / fachada (sin pacientes)", descIA: "Cierre de mes enfocado a implantes: recordatorio final para quienes llevan tiempo pensándolo. Tono motivador y cercano. Mensaje: si llevas tiempo dándole vueltas a recuperar tu sonrisa, el primer paso es una valoración sin compromiso. Matiz: 'según valoración'. CTA: reservar.", produccion: null },
        ]
      }
    ]
  },
  abril: {
    nombre: "Abril 2026", servicio: "Ortodoncia invisible", emoji: "😁",
    colorTab: "bg-teal-600", colorTabInactive: "hover:bg-teal-50",
    kpiMeta: "1-2 estudios gratuitos reservados por semana · Objetivo: 4-8 conversiones en el mes",
    kpiObjetivo: 8,
    hitos: [
      { label: "🚀 Arranque", fecha: "1 abr", color: "bg-green-100 text-green-800 border-green-200" },
      { label: "📊 Reporte KPIs abril", fecha: "5 may", color: "bg-blue-100 text-blue-800 border-blue-200" },
      { label: "🔍 Reunión estrategia", fecha: "7-8 may", color: "bg-purple-100 text-purple-800 border-purple-200" },
    ],
    embudo: [
      { fase: "Captación", semana: "S1", desc: "Atraer pacientes locales que quieren alinear sin brackets visibles", objetivo: "Impresiones y clics en perfil GBP", color: "bg-teal-100 text-teal-800" },
      { fase: "Educación", semana: "S1-S2", desc: "Explicar alineadores, tecnología 3D y proceso paso a paso", objetivo: "Tiempo en perfil · Clics en web", color: "bg-cyan-100 text-cyan-800" },
      { fase: "Consideración", semana: "S3", desc: "SEO local, marcas (Invisalign/Spark/SureSmile) y cómo llegar", objetivo: "Búsquedas directas · Cómo llegar", color: "bg-yellow-100 text-yellow-800" },
      { fase: "Conversión", semana: "S4", desc: "Resultados, financiación y teens para cerrar decisión", objetivo: "Reservas estudio gratuito · Llamadas", color: "bg-green-100 text-green-800" },
    ],
    semanas: [
      {
        id: 1, titulo: "Semana 1 — Qué es la ortodoncia invisible + Captación", objetivo: "Captación",
        color: { header: "bg-teal-600", bg: "bg-teal-50", ring: "ring-teal-400" },
        dias: [
          { dia: "Lunes", fecha: "30 mar", tipo: "GALERÍA", formato: "Foto", tema: "✅ Publicado en marzo → Equipo completo", cta: "—", foto: "Ya programado en marzo", descIA: null, produccion: "Ya programado en marzo.", yaPublicado: true },
          { dia: "Martes", fecha: "31 mar", tipo: "POST", formato: "Imagen", tema: "✅ Publicado en marzo → Cierre de mes", cta: "Reservar", foto: "Ya programado en marzo", descIA: null, produccion: "Ya programado en marzo.", yaPublicado: true },
          { dia: "Miércoles", fecha: "1 abr", tipo: "POST", formato: "Imagen", tema: "Captación local → ortodoncia invisible en {ZONA}", cta: "Reservar", foto: "Recepción bonita / equipo sonriendo / fachada (sin pacientes)", descIA: "Captación local orientada a ortodoncia invisible. Tono cercano y moderno. Mensaje: si quieres alinear tus dientes sin que se note, estamos en {ZONA} para ayudarte. Enfatizar discreción y comodidad frente a brackets tradicionales. CTA: reservar estudio gratuito.", produccion: null },
          { dia: "Jueves", fecha: "2 abr", tipo: "GALERÍA", formato: "Foto", tema: "Fachada exterior", cta: "—", foto: "Fachada (plano abierto)", descIA: null, produccion: "Subir foto RAW de fachada en plano abierto a la galería GBP." },
          { dia: "Viernes", fecha: "3 abr", tipo: "POST", formato: "Imagen", tema: "Qué son los alineadores transparentes", cta: "Más información", foto: "Alineadores transparentes en mano / escáner intraoral / pantalla planificación 3D sin datos", descIA: "Explicar qué es la ortodoncia invisible con alineadores transparentes personalizados y removibles. Casi invisibles, cómodos, permiten comer y mantener higiene con normalidad. Se cambian cada 7-10 días. Tono educativo y moderno. CTA: más información.", produccion: null },
          { dia: "Sábado", fecha: "4 abr", tipo: "GALERÍA", formato: "Foto", tema: "Recepción en acción", cta: "—", foto: "Recepción en acción", descIA: null, produccion: "Subir foto RAW de recepción en acción a la galería GBP." },
          { dia: "Domingo", fecha: "5 abr", tipo: "POST", formato: "Imagen", tema: "Consejo: higiene con alineadores", cta: "Llamar", foto: "Cepillo dental / hilo / alineadores sobre superficie limpia", descIA: "Consejo de higiene con ortodoncia invisible: con los alineadores removibles la higiene dental es mucho más fácil que con brackets. Tono educativo y positivo. Mensaje: cepíllate con normalidad, come sin restricciones, lleva el alineador las horas recomendadas. CTA: llamar.", produccion: null },
        ]
      },
      {
        id: 2, titulo: "Semana 2 — Tecnología 3D + Proceso + Reseña destacada", objetivo: "Educación + Confianza",
        color: { header: "bg-cyan-600", bg: "bg-cyan-50", ring: "ring-cyan-400" },
        dias: [
          { dia: "Lunes", fecha: "6 abr", tipo: "POST", formato: "Imagen", tema: "Tecnología 3D → ves el resultado antes de empezar", cta: "Reservar", foto: "Escáner intraoral en uso / pantalla con modelo 3D sin datos / doctor/a con tablet", descIA: "Tecnología 3D de planificación: con el escáner intraoral creamos un modelo digital de tu boca y puedes ver cómo quedarán tus dientes antes de empezar. Planificación precisa, sin sorpresas, resultado previsible. CTA: reservar estudio gratuito.", produccion: null },
          { dia: "Martes", fecha: "7 abr", tipo: "GALERÍA", formato: "Foto", tema: "Tecnología: escáner intraoral", cta: "—", foto: "Escáner intraoral en mano", descIA: null, produccion: "Subir foto RAW de escáner intraoral en mano a la galería GBP." },
          { dia: "Miércoles", fecha: "8 abr", tipo: "POST", formato: "Vídeo", tema: "Proceso paso a paso de ortodoncia invisible", cta: "Más información", foto: "INTRO local 2-3s → CUERPO educativo proceso OI 15-25s → OUTRO local 2-3s. Bullets si sin voz: Valoración · Planificación 3D · Alineadores · Seguimiento.", descIA: "Vídeo explicativo del proceso completo: valoración, escáner 3D, fabricación de alineadores personalizados, colocación y revisiones mensuales. Tono tranquilizador. Sin prometer tiempos exactos. CTA: más información.", produccion: "Montar: clip fachada/recepción (intro 2-3s) + vídeo educativo proceso OI (15-25s) + clip recepción/fachada con CTA 'Reserva tu estudio gratuito' (outro 2-3s). 1080×1920, 30fps." },
          { dia: "Jueves", fecha: "9 abr", tipo: "GALERÍA", formato: "Foto", tema: "Gabinete clínico", cta: "—", foto: "Gabinete (plano ancho, limpio)", descIA: null, produccion: "Subir foto RAW de gabinete en plano ancho y limpio a la galería GBP." },
          { dia: "Viernes", fecha: "10 abr", tipo: "POST", formato: "Imagen", tema: "Estudio gratuito → sin compromiso", cta: "Reservar", foto: "Coordinador/a explicando plan con tablet (sin datos) / doctor/a en consulta", descIA: "El estudio de ortodoncia invisible es gratuito en Cleardent: incluye consulta con especialista, imagen interactiva 3D del antes y después, planificación digital y presupuesto personalizado. Tono cercano y sin presión. CTA: reservar estudio gratuito.", produccion: null },
          { dia: "Sábado", fecha: "11 abr", tipo: "GALERÍA", formato: "Foto", tema: "Coordinación / explicación de plan", cta: "—", foto: "Coordinador/a explicando plan con tablet (sin datos)", descIA: null, produccion: "Subir foto RAW de coordinador/a con tablet a la galería GBP." },
          { dia: "Domingo", fecha: "12 abr", tipo: "POST", formato: "Imagen", tema: "⭐ Reseña destacada → ortodoncia invisible", cta: "Reservar", foto: "Fondo neutro limpio / recepción / logo Cleardent visible (sin datos del paciente)", descIA: "Reseña destacada del mes relacionada con ortodoncia invisible. Busca una reseña real de 5 estrellas de GBP que mencione alineadores, proceso o resultado. Úsala como inspiración para el copy. Tono cálido. CTA: reservar.", produccion: null, esResena: true },
        ]
      },
      {
        id: 3, titulo: "Semana 3 — OI en {ZONA} + Cómo llegar + Marcas", objetivo: "Consideración + SEO local",
        color: { header: "bg-emerald-600", bg: "bg-emerald-50", ring: "ring-emerald-400" },
        dias: [
          { dia: "Lunes", fecha: "13 abr", tipo: "POST", formato: "Imagen", tema: "Ortodoncia invisible en {ZONA} → SEO local", cta: "Reservar", foto: "Doctor/a en gabinete / equipo / recepción (imagen muy local)", descIA: "SEO local de ortodoncia invisible: posicionar la clínica como referente en OI en {ZONA}. Tono directo y local. Mensaje: somos tu clínica de ortodoncia invisible en {ZONA}, con estudio gratuito y planificación digital personalizada. CTA: reservar.", produccion: null },
          { dia: "Martes", fecha: "14 abr", tipo: "GALERÍA", formato: "Foto", tema: "Fachada → detalle rótulo", cta: "—", foto: "Fachada con detalle del rótulo", descIA: null, produccion: "Subir foto RAW de fachada con detalle del rótulo a la galería GBP." },
          { dia: "Miércoles", fecha: "15 abr", tipo: "POST", formato: "Vídeo LOCAL", tema: "Cómo llegar a la clínica", cta: "Cómo llegar", foto: "Montaje 20-30s / 1080×1920 / 30fps:\n• Clip 1 (3-5s): Landmark → \"Desde {METRO}/{HITO}\"\n• Clip 2 (4-6s): caminata tramo 1 → \"↕ 5 min andando\"\n• Clip 3 (4-6s): caminata tramo final\n• Clip 4 (4-6s): fachada con rótulo → \"{CLINICA}\"\n• Clip 5 (3-5s): entrada/recepción → \"Pulsa 'Cómo llegar'\"\n⚠️ Sin caras identificables · Sin datos · Cortes rápidos", descIA: null, produccion: "⚠️ Vídeo local manual. No pasa por herramienta IA." },
          { dia: "Jueves", fecha: "16 abr", tipo: "GALERÍA", formato: "Foto", tema: "Equipo → mini grupo", cta: "—", foto: "Mini-grupo del equipo (2-3 personas)", descIA: null, produccion: "Subir foto RAW de mini-grupo del equipo a la galería GBP." },
          { dia: "Viernes", fecha: "17 abr", tipo: "POST", formato: "Imagen", tema: "Invisalign, Spark y SureSmile → marcas líderes", cta: "Más información", foto: "Escáner / tecnología / doctor/a con modelo (sin paciente, sin datos)", descIA: "Cleardent trabaja con las tres marcas líderes: Invisalign, Spark y SureSmile. Elegimos la más adecuada para cada caso tras la valoración. Sin comparativas agresivas. CTA: más información.", produccion: null },
          { dia: "Sábado", fecha: "18 abr", tipo: "GALERÍA", formato: "Foto", tema: "Tecnología: planificación digital", cta: "—", foto: "Pantalla de planificación 3D sin datos de paciente", descIA: null, produccion: "Subir foto RAW de pantalla de planificación 3D a la galería GBP." },
          { dia: "Domingo", fecha: "19 abr", tipo: "POST", formato: "Imagen", tema: "Consejo: qué no hacer con los alineadores puestos", cta: "Llamar", foto: "Alineadores / mesa limpia / equipo", descIA: "Consejo práctico: con los alineadores puestos no se puede comer ni beber nada que no sea agua. Pueden mancharse, deformarse o romperse. Tono educativo y directo. CTA: llamar.", produccion: null },
        ]
      },
      {
        id: 4, titulo: "Semana 4 — Resultados + Financiación + Teens", objetivo: "Conversión",
        color: { header: "bg-indigo-600", bg: "bg-indigo-50", ring: "ring-indigo-400" },
        dias: [
          { dia: "Lunes", fecha: "21 abr", tipo: "POST", formato: "Imagen", tema: "Financiación → sin barrera de precio", cta: "Reservar", foto: "Coordinación con tablet demo o recepción", descIA: "Financiación de ortodoncia invisible: eliminar la barrera del precio. Sin cifras ni cuotas concretas. Hay opciones de pago, el estudio es gratuito. Matiz: 'según condiciones'. CTA: reservar estudio gratuito.", produccion: null },
          { dia: "Martes", fecha: "22 abr", tipo: "GALERÍA", formato: "Foto", tema: "Metro / landmark cercano", cta: "—", foto: "Entrada de metro o landmark cercano", descIA: null, produccion: "Subir foto RAW del metro o landmark cercano a la galería GBP." },
          { dia: "Miércoles", fecha: "23 abr", tipo: "POST", formato: "Vídeo", tema: "Cuándo se empiezan a ver los resultados", cta: "Más información", foto: "INTRO local 2-3s → CUERPO educativo resultados OI 15-25s → OUTRO local 2-3s. Bullets si sin voz: Primeros resultados · Seguimiento mensual · Retención final.", descIA: "Vídeo sobre resultados: primeros cambios a partir del segundo mes. Duración de 3 a 24 meses según el caso. Seguimiento mensual. Retención fija y removible al finalizar. Tono motivador y realista. CTA: más información.", produccion: "Montar: clip fachada/recepción (intro 2-3s) + vídeo resultados OI (15-25s) + clip recepción/fachada con CTA 'Reserva tu estudio gratuito' (outro 2-3s). 1080×1920, 30fps." },
          { dia: "Jueves", fecha: "24 abr", tipo: "GALERÍA", formato: "Foto", tema: "Retrato doctor/a ortodoncista", cta: "—", foto: "Retrato del/la doctor/a ortodoncista", descIA: null, produccion: "Subir foto RAW de retrato del/la doctor/a a la galería GBP." },
          { dia: "Viernes", fecha: "25 abr", tipo: "POST", formato: "Imagen", tema: "Ortodoncia invisible para jóvenes y teens", cta: "Reservar", foto: "Equipo joven / recepción dinámica / escáner con imagen profesional", descIA: "Ortodoncia invisible para adolescentes: ideal para teens que no quieren brackets visibles. Discreta, cómoda y sin restricciones. Apta para adultos y adolescentes. Tono fresco y cercano. CTA: reservar estudio gratuito.", produccion: null },
          { dia: "Sábado", fecha: "26 abr", tipo: "GALERÍA", formato: "Foto", tema: "Esterilización / higiene clínica", cta: "—", foto: "Zona de esterilización o bandeja limpia", descIA: null, produccion: "Subir foto RAW de zona de esterilización o bandeja limpia a la galería GBP." },
          { dia: "Domingo", fecha: "27 abr", tipo: "POST", formato: "Imagen", tema: "Consejo: retención al acabar el tratamiento", cta: "Llamar", foto: "Férula de retención / equipo / recepción limpia", descIA: "Consejo sobre la retención al finalizar: se coloca retención fija y removible. El tratamiento no acaba al quitarse el último alineador. Tono educativo. CTA: llamar.", produccion: null },
        ]
      }
    ]
  },
  mayo: {
    nombre: "Mayo 2026", servicio: "Estética dental", emoji: "✨",
    colorTab: "bg-rose-600", colorTabInactive: "hover:bg-rose-50",
    kpiMeta: "1-2 consultas/reservas por semana · Objetivo: 4-8 conversiones en el mes",
    kpiObjetivo: 8,
    hitos: [
      { label: "🚀 Arranque", fecha: "4 may", color: "bg-green-100 text-green-800 border-green-200" },
      { label: "📊 Reporte KPIs mayo", fecha: "5 jun", color: "bg-blue-100 text-blue-800 border-blue-200" },
      { label: "🔍 Reunión estrategia", fecha: "7-8 jun", color: "bg-purple-100 text-purple-800 border-purple-200" },
    ],
    embudo: [
      { fase: "Captación", semana: "S1", desc: "Atraer pacientes que quieren mejorar su sonrisa en {ZONA}", objetivo: "Impresiones y clics en perfil GBP", color: "bg-rose-100 text-rose-800" },
      { fase: "Educación", semana: "S1-S2", desc: "Explicar blanqueamiento LED, tipos y proceso paso a paso", objetivo: "Tiempo en perfil · Clics en web", color: "bg-pink-100 text-pink-800" },
      { fase: "Consideración", semana: "S3", desc: "SEO local, carillas (composite/porcelana/FirstFit) y cómo llegar", objetivo: "Búsquedas directas · Cómo llegar", color: "bg-yellow-100 text-yellow-800" },
      { fase: "Conversión", semana: "S4", desc: "Diseño de sonrisa, financiación y urgencias para cerrar", objetivo: "Consultas gratuitas · Llamadas", color: "bg-green-100 text-green-800" },
    ],
    semanas: [
      {
        id: 1, titulo: "Semana 1 — Blanqueamiento dental + Captación", objetivo: "Captación",
        color: { header: "bg-rose-600", bg: "bg-rose-50", ring: "ring-rose-400" },
        dias: [
          { dia: "Lunes", fecha: "4 may", tipo: "POST", formato: "Imagen", tema: "Captación local → estética dental en {ZONA}", cta: "Reservar", foto: "Recepción bonita / equipo sonriendo / fachada (sin pacientes)", descIA: "Captación local orientada a estética dental. Tono aspiracional y cercano. Mensaje: si quieres mejorar tu sonrisa, estamos en {ZONA} para ayudarte. Primera consulta gratuita. CTA: reservar consulta gratuita.", produccion: null },
          { dia: "Martes", fecha: "5 may", tipo: "GALERÍA", formato: "Foto", tema: "Fachada exterior", cta: "—", foto: "Fachada (plano abierto)", descIA: null, produccion: "Subir foto RAW de fachada en plano abierto a la galería GBP." },
          { dia: "Miércoles", fecha: "6 may", tipo: "POST", formato: "Vídeo", tema: "Cómo funciona el blanqueamiento dental LED", cta: "Más información", foto: "INTRO local 2-3s → CUERPO educativo blanqueamiento LED 15-25s → OUTRO local 2-3s. Bullets si sin voz: Revisión · Gel blanqueador · Fotoactivación LED · Resultado.", descIA: "Vídeo explicativo del blanqueamiento dental en clínica con tecnología LED: proceso de 45-60 min, resultados desde la primera sesión, hasta 8 tonos más blanco. Tono informativo y visual. Sin prometer resultados exactos. CTA: más información.", produccion: "Montar: clip fachada/recepción (intro 2-3s) + vídeo educativo blanqueamiento LED (15-25s) + clip recepción/fachada con CTA 'Reserva tu consulta gratuita' (outro 2-3s). 1080×1920, 30fps." },
          { dia: "Jueves", fecha: "7 may", tipo: "GALERÍA", formato: "Foto", tema: "Recepción en acción", cta: "—", foto: "Recepción en acción", descIA: null, produccion: "Subir foto RAW de recepción en acción a la galería GBP." },
          { dia: "Viernes", fecha: "8 may", tipo: "POST", formato: "Imagen", tema: "Por qué se oscurecen los dientes → causas", cta: "Más información", foto: "Equipo en consulta / escáner / pantalla sin datos", descIA: "Educativo sobre causas del oscurecimiento dental: café, té, vino, tabaco, envejecimiento natural, medicamentos. Manchas extrínsecas vs intrínsecas. Tono informativo. Conocer la causa es el primer paso para elegir el tratamiento adecuado. CTA: más información.", produccion: null },
          { dia: "Sábado", fecha: "9 may", tipo: "GALERÍA", formato: "Foto", tema: "Tecnología: lámpara LED", cta: "—", foto: "Lámpara LED de blanqueamiento o tecnología de consulta (sin paciente)", descIA: null, produccion: "Subir foto RAW de lámpara LED o tecnología equivalente a la galería GBP." },
          { dia: "Domingo", fecha: "10 may", tipo: "POST", formato: "Imagen", tema: "Consejo: dieta blanca tras el blanqueamiento", cta: "Llamar", foto: "Mesa limpia / productos blancos / equipo/recepción", descIA: "Consejo post-blanqueamiento: durante las 48-72h tras el tratamiento el esmalte es más poroso. Evitar café, té, vino, salsas oscuras y tabaco. Seguir dieta blanca. Tono práctico y útil. CTA: llamar.", produccion: null },
        ]
      },
      {
        id: 2, titulo: "Semana 2 — Tipos de blanqueamiento + Reseña destacada", objetivo: "Educación + Confianza",
        color: { header: "bg-pink-600", bg: "bg-pink-50", ring: "ring-pink-400" },
        dias: [
          { dia: "Lunes", fecha: "11 may", tipo: "POST", formato: "Imagen", tema: "Blanqueamiento en casa con férulas", cta: "Reservar", foto: "Férulas de silicona en mano / mesa limpia con kit", descIA: "Blanqueamiento en casa con férulas personalizadas: más económico, se realiza en el hogar, gel de menor concentración, dura 2-4 semanas. Ideal para quienes prefieren hacerlo a su ritmo. CTA: reservar consulta para valorar qué tipo aplica.", produccion: null },
          { dia: "Martes", fecha: "12 may", tipo: "GALERÍA", formato: "Foto", tema: "Entorno / landmark cercano", cta: "—", foto: "Calle / esquina / metro cercano", descIA: null, produccion: "Subir foto RAW del entorno o landmark cercano a la galería GBP." },
          { dia: "Miércoles", fecha: "13 may", tipo: "POST", formato: "Vídeo", tema: "Blanqueamiento en clínica vs en casa", cta: "Más información", foto: "INTRO local 2-3s → CUERPO educativo comparativa 15-25s → OUTRO local 2-3s. Bullets si sin voz: En clínica (rápido) · En casa (gradual) · Combinado (máximo resultado).", descIA: "Vídeo comparativo: blanqueamiento en clínica con LED (rápido, 1-3 sesiones), en casa con férulas (gradual, 2-4 semanas) y combinado para máximo resultado. El dentista recomienda según el caso. CTA: más información.", produccion: "Montar: clip fachada/recepción (intro 2-3s) + vídeo comparativa blanqueamiento (15-25s) + clip recepción/fachada con CTA 'Reserva tu consulta gratuita' (outro 2-3s). 1080×1920, 30fps." },
          { dia: "Jueves", fecha: "14 may", tipo: "GALERÍA", formato: "Foto", tema: "Coordinación / equipo", cta: "—", foto: "Coordinador/a o equipo explicando tratamiento (sin datos)", descIA: null, produccion: "Subir foto RAW de coordinador/a o equipo a la galería GBP." },
          { dia: "Viernes", fecha: "15 may", tipo: "POST", formato: "Imagen", tema: "¿El blanqueamiento daña el esmalte? → desmontando el mito", cta: "Más información", foto: "Doctor/a en consulta / escáner / tecnología (sin paciente)", descIA: "Desmontando mito: el blanqueamiento bajo supervisión profesional no daña el esmalte. Los agentes actúan sobre los pigmentos sin afectar la estructura dental. Diferencia entre productos de farmacia y tratamiento profesional. Tono de autoridad médica. CTA: más información.", produccion: null },
          { dia: "Sábado", fecha: "16 may", tipo: "GALERÍA", formato: "Foto", tema: "Gabinete clínico", cta: "—", foto: "Gabinete (plano ancho, limpio)", descIA: null, produccion: "Subir foto RAW del gabinete en plano ancho a la galería GBP." },
          { dia: "Domingo", fecha: "17 may", tipo: "POST", formato: "Imagen", tema: "⭐ Reseña destacada → estética / blanqueamiento", cta: "Reservar", foto: "Fondo neutro limpio / recepción / logo Cleardent visible (sin datos)", descIA: "Reseña destacada del mes relacionada con blanqueamiento o estética dental. Busca una reseña real de 5 estrellas que mencione cambio de sonrisa, resultado o satisfacción. Úsala como inspiración. Tono cálido. CTA: reservar.", produccion: null, esResena: true },
        ]
      },
      {
        id: 3, titulo: "Semana 3 — Carillas + Cómo llegar + SEO local", objetivo: "Consideración + SEO local",
        color: { header: "bg-fuchsia-600", bg: "bg-fuchsia-50", ring: "ring-fuchsia-400" },
        dias: [
          { dia: "Lunes", fecha: "18 may", tipo: "POST", formato: "Imagen", tema: "Estética dental en {ZONA} → SEO local", cta: "Reservar", foto: "Doctor/a en gabinete / equipo / recepción (local)", descIA: "SEO local de estética dental: posicionar la clínica como referente en blanqueamiento y carillas en {ZONA}. Tono directo y local. Mensaje: somos tu clínica de estética dental en {ZONA}, con consulta gratuita. CTA: reservar.", produccion: null },
          { dia: "Martes", fecha: "19 may", tipo: "GALERÍA", formato: "Foto", tema: "Fachada → detalle rótulo", cta: "—", foto: "Fachada con detalle del rótulo", descIA: null, produccion: "Subir foto RAW de fachada con detalle del rótulo a la galería GBP." },
          { dia: "Miércoles", fecha: "20 may", tipo: "POST", formato: "Vídeo LOCAL", tema: "Cómo llegar a la clínica", cta: "Cómo llegar", foto: "Montaje 20-30s / 1080×1920 / 30fps:\n• Clip 1 (3-5s): Landmark → \"Desde {METRO}/{HITO}\"\n• Clip 2 (4-6s): caminata tramo 1 → \"↕ 5 min andando\"\n• Clip 3 (4-6s): caminata tramo final\n• Clip 4 (4-6s): fachada con rótulo → \"{CLINICA}\"\n• Clip 5 (3-5s): entrada/recepción → \"Pulsa 'Cómo llegar'\"\n⚠️ Sin caras identificables · Sin datos · Cortes rápidos", descIA: null, produccion: "⚠️ Vídeo local manual. No pasa por herramienta IA." },
          { dia: "Jueves", fecha: "21 may", tipo: "GALERÍA", formato: "Foto", tema: "Equipo → mini grupo", cta: "—", foto: "Mini-grupo del equipo (2-3 personas)", descIA: null, produccion: "Subir foto RAW de mini-grupo del equipo a la galería GBP." },
          { dia: "Viernes", fecha: "22 may", tipo: "POST", formato: "Imagen", tema: "Carillas dentales → composite, porcelana y FirstFit", cta: "Más información", foto: "Doctor/a mostrando muestras de carillas / escáner / planificación (sin paciente)", descIA: "Carillas dentales en Cleardent: composite (rápidas, reversibles, económicas), porcelana (muy duraderas, inalterables a manchas) y FirstFit (100% digital, mínimamente invasiva, en 2 citas). Sin comparativas agresivas. CTA: más información.", produccion: null },
          { dia: "Sábado", fecha: "23 may", tipo: "GALERÍA", formato: "Foto", tema: "Tecnología: planificación o escáner 3D", cta: "—", foto: "Pantalla de planificación / escáner intraoral (sin datos)", descIA: null, produccion: "Subir foto RAW de escáner o pantalla de planificación a la galería GBP." },
          { dia: "Domingo", fecha: "24 may", tipo: "POST", formato: "Imagen", tema: "Consejo: cómo mantener la sonrisa blanca más tiempo", cta: "Llamar", foto: "Cepillo / hilo / pasta dental blanqueadora sobre mesa limpia", descIA: "Consejo para mantener los resultados del blanqueamiento: evitar café, té, vino, tabaco las primeras 48-72h. Cepillado tras cada comida, hilo dental, enjuague sin alcohol, pasta de mantenimiento. Duración 1-3 años con buen cuidado. CTA: llamar.", produccion: null },
        ]
      },
      {
        id: 4, titulo: "Semana 4 — Diseño de sonrisa + Financiación + Urgencias", objetivo: "Conversión",
        color: { header: "bg-violet-600", bg: "bg-violet-50", ring: "ring-violet-400" },
        dias: [
          { dia: "Lunes", fecha: "25 may", tipo: "POST", formato: "Imagen", tema: "Financiación → estética dental sin barrera de precio", cta: "Reservar", foto: "Coordinación con tablet demo o recepción", descIA: "Financiación de estética dental: sin cifras ni cuotas concretas. Hay opciones de pago, la consulta es gratuita. Matiz obligatorio: 'según condiciones'. CTA: reservar consulta gratuita.", produccion: null },
          { dia: "Martes", fecha: "26 may", tipo: "GALERÍA", formato: "Foto", tema: "Metro / landmark cercano", cta: "—", foto: "Entrada de metro o landmark cercano", descIA: null, produccion: "Subir foto RAW del metro o landmark cercano a la galería GBP." },
          { dia: "Miércoles", fecha: "27 may", tipo: "POST", formato: "Vídeo", tema: "Diseño de sonrisa → qué incluye y cómo funciona", cta: "Más información", foto: "INTRO local 2-3s → CUERPO educativo diseño de sonrisa 15-25s → OUTRO local 2-3s. Bullets si sin voz: Diagnóstico · Mock-up digital · Plan personalizado.", descIA: "Vídeo sobre diseño de sonrisa: combinación de blanqueamiento, carillas y/u otros tratamientos según el caso. Mock-up digital para ver el resultado antes de empezar. Totalmente personalizado. Tono aspiracional. Sin prometer precios. CTA: más información.", produccion: "Montar: clip fachada/recepción (intro 2-3s) + vídeo diseño de sonrisa (15-25s) + clip recepción/fachada con CTA 'Reserva tu consulta gratuita' (outro 2-3s). 1080×1920, 30fps." },
          { dia: "Jueves", fecha: "28 may", tipo: "GALERÍA", formato: "Foto", tema: "Retrato doctor/a especialista estética", cta: "—", foto: "Retrato del/la doctor/a especialista en estética", descIA: null, produccion: "Subir foto RAW de retrato del/la doctor/a a la galería GBP." },
          { dia: "Viernes", fecha: "29 may", tipo: "POST", formato: "Imagen", tema: "Mock-up dental → prueba tu sonrisa antes de empezar", cta: "Reservar", foto: "Doctor/a con tablet mostrando simulación / pantalla de planificación (sin datos)", descIA: "Mock-up dental: tecnología que permite visualizar el resultado del tratamiento estético antes de empezar. Mejora la planificación y la confianza. Cleardent lo incluye en el diseño de sonrisa. Tono moderno y de confianza. CTA: reservar consulta gratuita.", produccion: null },
          { dia: "Sábado", fecha: "30 may", tipo: "GALERÍA", formato: "Foto", tema: "Esterilización / higiene clínica", cta: "—", foto: "Zona de esterilización o bandeja limpia", descIA: null, produccion: "Subir foto RAW de zona de esterilización o bandeja limpia a la galería GBP." },
          { dia: "Domingo", fecha: "31 may", tipo: "POST", formato: "Imagen", tema: "Urgencias dentales en {ZONA}", cta: "Llamar", foto: "Recepción/teléfono o fachada", descIA: "Urgencias dentales en {ZONA}: disponibilidad para atender dolor o emergencias. Tono inmediato y tranquilizador. Si la clínica abre sábados añadir sello. CTA: llamar.", produccion: null },
        ]
      }
    ]
  }
};

const formatoBadge = { Imagen: "bg-sky-100 text-sky-700", "Vídeo": "bg-pink-100 text-pink-700", "Vídeo LOCAL": "bg-yellow-100 text-yellow-800", Foto: "bg-gray-100 text-gray-500" };
const objetivoBadge = { "Captación": "bg-blue-100 text-blue-700", "Educación + Confianza": "bg-purple-100 text-purple-700", "Consideración + SEO local": "bg-yellow-100 text-yellow-700", "Conversión": "bg-green-100 text-green-700", "Cierre de mes": "bg-gray-100 text-gray-600" };
const estadoStyle = { programado: "bg-blue-100 text-blue-700 border-blue-300", publicado: "bg-green-100 text-green-700 border-green-300", pendiente: "bg-gray-100 text-gray-500 border-gray-200" };
const estadoLabel = { programado: "📅 Programado", publicado: "✅ Publicado", pendiente: "⬜ Pendiente" };
const VISTAS = ["📅 Calendario", "📊 Estrategia", "⚡ Ejecución"];

export default function App() {
  const [mes, setMes] = useState("marzo");
  const [vista, setVista] = useState("⚡ Ejecución");
  const [selected, setSelected] = useState(null);
  const [estado, setEstado] = useState({});
  const [kpis, setKpis] = useState({});
  const [copied, setCopied] = useState(null);
  const [filtro, setFiltro] = useState("TODO");

  const data = MESES[mes];
  const cambiarMes = (m) => { setMes(m); setSelected(null); setFiltro("TODO"); };
  const toggle = (key) => setSelected(prev => prev === key ? null : key);
  const setEst = (key, val, e) => { e.stopPropagation(); setEstado(prev => ({ ...prev, [key]: val })); };

  const getKpi = (m, sid) => kpis[`${m}-s${sid}`] || 0;
  const setKpi = (m, sid, val) => {
    const v = Math.max(0, parseInt(val) || 0);
    setKpis(prev => ({ ...prev, [`${m}-s${sid}`]: v }));
  };
  const totalKpi = data.semanas.reduce((acc, s) => acc + getKpi(mes, s.id), 0);
  const pct = Math.min(100, Math.round((totalKpi / data.kpiObjetivo) * 100));

  const filtros = ["TODO", "POST", "GALERÍA", "Vídeo"];
  const matchFiltro = (d) => filtro === "TODO" || (filtro === "POST" && d.tipo === "POST") || (filtro === "GALERÍA" && d.tipo === "GALERÍA") || (filtro === "Vídeo" && (d.formato === "Vídeo" || d.formato === "Vídeo LOCAL"));

  const totalPosts = data.semanas.flatMap(s => s.dias).filter(d => d.tipo === "POST" && !d.yaPublicado).length;
  const totalGaleria = data.semanas.flatMap(s => s.dias).filter(d => d.tipo === "GALERÍA" && !d.yaPublicado).length;
  const totalVideos = data.semanas.flatMap(s => s.dias).filter(d => (d.formato === "Vídeo" || d.formato === "Vídeo LOCAL") && !d.yaPublicado).length;

  const KpiPanel = () => (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      <h3 className="font-bold text-gray-800 mb-1 text-base">🎯 Seguimiento de KPIs — {data.nombre}</h3>
      <p className="text-xs text-gray-400 mb-3">{data.kpiMeta}</p>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-semibold text-gray-600">Conversiones totales del mes</span>
          <span className="text-xs font-bold text-gray-800">{totalKpi} / {data.kpiObjetivo}</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
          <div className={`h-3 rounded-full transition-all duration-500 ${pct >= 100 ? "bg-green-500" : pct >= 50 ? "bg-blue-500" : "bg-orange-400"}`} style={{ width: `${pct}%` }}></div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-gray-400">0</span>
          <span className={`text-xs font-semibold ${pct >= 100 ? "text-green-600" : pct >= 50 ? "text-blue-600" : "text-orange-500"}`}>
            {pct >= 100 ? "✅ Objetivo superado" : pct >= 50 ? `${pct}% del objetivo` : `${pct}% — por debajo del objetivo`}
          </span>
          <span className="text-xs text-gray-400">{data.kpiObjetivo}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {data.semanas.filter(s => s.id <= 4).map(s => {
          const val = getKpi(mes, s.id);
          const ok = val >= 2;
          const partial = val === 1;
          return (
            <div key={s.id} className={`rounded-lg p-2.5 border ${ok ? "border-green-200 bg-green-50" : partial ? "border-yellow-200 bg-yellow-50" : "border-gray-200 bg-gray-50"}`}>
              <div className="text-xs font-semibold text-gray-600 mb-1.5 leading-tight">S{s.id} · {s.objetivo.split(" ")[0]}</div>
              <div className="flex items-center gap-1.5">
                <button onClick={() => setKpi(mes, s.id, val - 1)} className="w-6 h-6 rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-gray-100 font-bold text-sm flex items-center justify-center">−</button>
                <span className={`text-lg font-bold flex-1 text-center ${ok ? "text-green-700" : partial ? "text-yellow-700" : "text-gray-400"}`}>{val}</span>
                <button onClick={() => setKpi(mes, s.id, val + 1)} className="w-6 h-6 rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-gray-100 font-bold text-sm flex items-center justify-center">+</button>
              </div>
              <div className="text-xs text-center mt-1">
                {ok ? <span className="text-green-600">✅ OK</span> : partial ? <span className="text-yellow-600">⚠️ Mínimo</span> : <span className="text-gray-400">sin datos</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-sm">
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto">
          <div className="mb-3">
            <h1 className="text-lg font-bold text-gray-800">📋 Calendario GBP — Cleardent 2026</h1>
            <p className="text-xs text-gray-400">Estrategia de 3 meses · 70 clínicas · SEO local</p>
          </div>
          <div className="flex gap-2 mb-3">
            {Object.entries(MESES).map(([key, m]) => (
              <button key={key} onClick={() => cambiarMes(key)}
                className={`flex-1 rounded-lg border-2 px-2 py-1.5 text-left transition-all ${mes === key ? `${m.colorTab} text-white border-transparent` : `bg-white border-gray-200 text-gray-600 ${m.colorTabInactive}`}`}>
                <div className="text-base leading-none">{m.emoji}</div>
                <div className="font-bold text-xs mt-0.5">{m.nombre}</div>
                <div className={`text-xs ${mes === key ? "text-white/70" : "text-gray-400"}`}>{m.servicio}</div>
              </button>
            ))}
          </div>
          <div className="flex gap-1">
            {VISTAS.map(v => (
              <button key={v} onClick={() => setVista(v)}
                className={`flex-1 text-xs py-1.5 rounded-lg font-medium transition-all ${vista === v ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>{v}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-4">

        {vista === "📅 Calendario" && (
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {data.hitos.map(h => (
                <div key={h.label} className={`text-xs px-3 py-1.5 rounded-full border font-medium ${h.color}`}>{h.label} · <span className="font-bold">{h.fecha}</span></div>
              ))}
            </div>
            {data.semanas.map(semana => (
              <div key={semana.id} className="mb-4">
                <div className={`${semana.color.header} text-white px-3 py-2 rounded-t-xl text-xs font-semibold flex justify-between`}>
                  <span>{semana.titulo}</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full">{semana.objetivo}</span>
                </div>
                <div className="grid grid-cols-7 border border-t-0 border-gray-200 rounded-b-xl overflow-hidden bg-white">
                  {["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"].map(d => (
                    <div key={d} className="text-center text-xs font-semibold text-gray-400 py-1 border-b border-gray-100 bg-gray-50">{d}</div>
                  ))}
                  {(() => {
                    const diasSemana = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
                    const calKey = (dn) => `cal-${mes}-s${semana.id}-${dn}`;
                    return [
                      ...diasSemana.map((dn, idx) => {
                        const d = semana.dias.find(x => x.dia === dn);
                        if (!d) return <div key={idx} className="border-r border-b border-gray-100 p-1 min-h-16 bg-gray-50/50"></div>;
                        const key = `${mes}-s${semana.id}-${dn}`;
                        const ck = calKey(dn);
                        const est = estado[key] || "pendiente";
                        const isCalOpen = selected === ck;
                        return (
                          <div key={idx} onClick={() => setSelected(prev => prev === ck ? null : ck)}
                            className={`border-r border-b border-gray-100 p-1.5 min-h-16 cursor-pointer transition-all ${d.yaPublicado ? "bg-gray-50 opacity-60" : isCalOpen ? `bg-white ring-2 ring-inset ${semana.color.ring}` : "hover:bg-gray-50"}`}>
                            <div className="text-xs font-bold text-gray-500 mb-0.5">{d.fecha.split(" ")[0]}</div>
                            {d.tipo === "GALERÍA"
                              ? <div className="text-xs text-gray-400 italic leading-tight">📷 {d.tema.replace("✅ Publicado en marzo → ","")}</div>
                              : <>
                                  <div className={`text-xs px-1 py-0.5 rounded mb-0.5 font-medium leading-tight ${formatoBadge[d.formato]}`}>{d.formato}</div>
                                  <div className="text-xs text-gray-600 leading-tight" style={{display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden'}}>{d.tema.replace("✅ Publicado en marzo → ","")}</div>
                                  <div className={`mt-1 text-xs px-1 rounded border ${estadoStyle[est]}`}>{est === "pendiente" ? "⬜" : est === "programado" ? "📅" : "✅"}</div>
                                </>
                            }
                          </div>
                        );
                      }),
                      ...diasSemana.map((dn) => {
                        const ck = calKey(dn);
                        if (selected !== ck) return null;
                        const d = semana.dias.find(x => x.dia === dn);
                        if (!d) return null;
                        const key = `${mes}-s${semana.id}-${dn}`;
                        const est = estado[key] || "pendiente";
                        return (
                          <div key={`panel-${dn}`} className="col-span-7 border-t border-gray-200 bg-white p-4" onClick={e => e.stopPropagation()}>
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-bold text-gray-800">{d.dia} {d.fecha}</span>
                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${formatoBadge[d.formato] || "bg-gray-100 text-gray-500"}`}>{d.tipo === "GALERÍA" ? "GALERÍA" : d.formato}</span>
                                {d.esResena && <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 font-medium">⭐ Reseña</span>}
                              </div>
                              <button onClick={() => setSelected(null)} className="text-gray-300 hover:text-gray-600 text-xl leading-none ml-2">×</button>
                            </div>
                            <p className="font-semibold text-gray-800 mb-3">{d.tema.replace("✅ Publicado en marzo → ","")}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                                <p className="text-xs font-semibold text-gray-600 mb-1">{d.tipo === "GALERÍA" ? "📷 Foto para galería GBP" : d.formato.includes("Vídeo") ? "🎬 Especificaciones de montaje" : "📸 Tipo de foto"}</p>
                                <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">{d.foto}</p>
                                {d.produccion && (
                                  <div className={`mt-2 rounded p-2 text-xs ${d.formato === "Vídeo LOCAL" ? "bg-yellow-50 text-yellow-800" : "bg-blue-50 text-blue-800"}`}>
                                    <span className="font-semibold">{d.formato === "Vídeo LOCAL" ? "⚠️" : "🎬"}</span> {d.produccion}
                                  </div>
                                )}
                              </div>
                              {d.descIA
                                ? <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                                    <div className="flex justify-between items-center mb-1">
                                      <p className="text-xs font-semibold text-amber-800">🤖 Descripción para herramienta IA</p>
                                      <button onClick={() => cp(d.descIA, setCopied, `cal-${key}`)}
                                        className="text-xs bg-amber-200 hover:bg-amber-300 px-2 py-0.5 rounded ml-2 shrink-0">
                                        {copied === `cal-${key}` ? "✅ Copiado" : "Copiar"}
                                      </button>
                                    </div>
                                    <p className="text-xs text-amber-900 leading-relaxed">{d.descIA}</p>
                                  </div>
                                : <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 flex items-center justify-center text-xs text-gray-400 italic">
                                    {d.yaPublicado ? "✅ Ya publicado en marzo" : "🖼️ Subir foto a galería GBP"}
                                  </div>
                              }
                            </div>
                            {d.tipo === "POST" && !d.yaPublicado && (
                              <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
                                <span className="text-xs text-gray-500"><span className="font-medium text-gray-700">CTA:</span> {d.cta}</span>
                                <div className="flex gap-1">
                                  {["pendiente","programado","publicado"].map(s => (
                                    <button key={s} onClick={(e) => setEst(key, s, e)}
                                      className={`text-xs px-2 py-1 rounded border transition ${est === s ? estadoStyle[s] + " font-semibold" : "bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100"}`}>
                                      {estadoLabel[s]}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      }).filter(Boolean)
                    ];
                  })()}
                </div>
              </div>
            ))}
          </div>
        )}

        {vista === "📊 Estrategia" && (
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <h2 className="font-bold text-gray-800 mb-3 text-base">{data.emoji} {data.nombre} — {data.servicio}</h2>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[["Posts", totalPosts, "📝"], ["Galerías", totalGaleria, "📷"], ["Vídeos", totalVideos, "🎬"]].map(([label, val, icon]) => (
                  <div key={label} className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
                    <div className="text-2xl font-bold text-gray-800">{val}</div>
                    <div className="text-xs text-gray-500">{icon} {label}</div>
                  </div>
                ))}
              </div>
            </div>

            <KpiPanel />

            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3">🔽 Embudo del mes</h3>
              <div className="space-y-2">
                {data.embudo.map((e, i) => (
                  <div key={i} className={`rounded-lg p-3 ${e.color} flex items-start gap-3`}>
                    <div className="text-xs font-bold w-5 h-5 rounded-full bg-white/60 flex items-center justify-center flex-shrink-0">{i+1}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="font-bold text-xs">{e.fase}</span>
                        <span className="text-xs opacity-70">{e.semana}</span>
                      </div>
                      <div className="text-xs opacity-80">{e.desc}</div>
                      <div className="text-xs font-medium mt-1 opacity-90">→ {e.objetivo}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3">🧠 Por qué cada semana tiene ese tema</h3>
              <div className="space-y-3">
                {data.semanas.map(s => (
                  <div key={s.id} className="border border-gray-100 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-xs text-gray-700 flex-1 pr-2">{s.titulo}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${objetivoBadge[s.objetivo] || "bg-gray-100 text-gray-600"}`}>{s.objetivo}</span>
                    </div>
                    <div className="text-xs text-gray-500 mb-2">{data.embudo.find(e => s.objetivo.includes(e.fase))?.desc || "Contenido estratégico alineado con el mes."}</div>
                    <div className="flex flex-wrap gap-1">
                      {s.dias.filter(d => d.tipo === "POST" && !d.yaPublicado).map((d, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{d.tema.substring(0,38)}{d.tema.length > 38 ? "…" : ""}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3">🏁 Hitos del mes</h3>
              <div className="flex flex-wrap gap-2">
                {data.hitos.map(h => (
                  <div key={h.label} className={`text-xs px-3 py-2 rounded-full border font-medium ${h.color}`}>{h.label} · <span className="font-bold">{h.fecha}</span></div>
                ))}
              </div>
            </div>
          </div>
        )}

        {vista === "⚡ Ejecución" && (
          <div>
            {mes === "abril" && (
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-800">
                <span className="font-semibold">ℹ️ La semana 1 arranca el lunes 30 de marzo</span> — esos dos días ya están programados en el calendario de marzo.
              </div>
            )}

            <KpiPanel />

            <div className="flex flex-wrap gap-2 my-4">
              {data.hitos.map(h => (
                <div key={h.label} className={`text-xs px-3 py-1.5 rounded-full border font-medium ${h.color}`}>{h.label} · <span className="font-bold">{h.fecha}</span></div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-4 p-3 bg-white rounded-xl border border-gray-200">
              <span className="text-xs font-semibold text-gray-600 self-center mr-1">Filtrar:</span>
              {filtros.map(f => (
                <button key={f} onClick={() => setFiltro(f)}
                  className={`text-xs px-3 py-1 rounded-full border transition font-medium ${filtro === f ? "bg-gray-800 text-white border-gray-800" : "bg-white text-gray-600 border-gray-300 hover:border-gray-500"}`}>{f}</button>
              ))}
            </div>

            {data.semanas.map(semana => {
              const diasFiltrados = semana.dias.filter(matchFiltro);
              if (diasFiltrados.length === 0) return null;
              return (
                <div key={semana.id} className="mb-5 rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                  <div className={`${semana.color.header} text-white px-4 py-2.5 text-xs font-semibold flex justify-between items-center`}>
                    <span>{semana.titulo}</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded-full">{semana.objetivo}</span>
                  </div>
                  <div className={`${semana.color.bg} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3`}>
                    {diasFiltrados.map((d) => {
                      const key = `${mes}-s${semana.id}-${d.dia}`;
                      const isOpen = selected === key;
                      const isGaleria = d.tipo === "GALERÍA";
                      const est = estado[key] || "pendiente";
                      return (
                        <div key={key} onClick={() => toggle(key)}
                          className={`rounded-xl border bg-white p-3 cursor-pointer transition-all hover:shadow-md ${isGaleria ? "border-dashed border-gray-300" : "border-gray-200"} ${d.yaPublicado ? "opacity-60" : ""} ${isOpen ? `ring-2 ring-offset-1 ${semana.color.ring}` : ""} ${d.esResena ? "border-yellow-300" : ""}`}>
                          <div className="flex justify-between items-start mb-1.5">
                            <div>
                              <span className="font-bold text-gray-800 text-xs">{d.dia}</span>
                              <span className="ml-1.5 text-xs text-gray-400">{d.fecha}</span>
                            </div>
                            <div className="flex gap-1 flex-wrap justify-end">
                              {isGaleria && <span className="text-xs px-1.5 py-0.5 rounded-full font-medium bg-gray-100 text-gray-500">GAL</span>}
                              <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${formatoBadge[d.formato] || "bg-gray-100 text-gray-600"}`}>{d.formato}</span>
                            </div>
                          </div>
                          <p className="text-xs font-semibold text-gray-700 mb-1 leading-tight">{d.tema}</p>
                          <p className="text-xs text-gray-500 leading-snug">{d.foto.includes("•") ? d.foto.split("\n")[0]+"…" : d.foto.length > 65 ? d.foto.substring(0,65)+"…" : d.foto}</p>
                          {d.cta !== "—" && <p className="text-xs mt-1"><span className="font-medium text-gray-600">CTA:</span> <span className="text-gray-500">{d.cta}</span></p>}
                          {!isGaleria && !d.yaPublicado && (
                            <div className="mt-2 flex gap-1" onClick={e => e.stopPropagation()}>
                              {["pendiente","programado","publicado"].map(s => (
                                <button key={s} onClick={(e) => setEst(key, s, e)}
                                  className={`text-xs px-1.5 py-0.5 rounded border transition ${est === s ? estadoStyle[s] + " font-semibold" : "bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100"}`}>
                                  {s === "pendiente" ? "⬜" : s === "programado" ? "📅" : "✅"}
                                </button>
                              ))}
                            </div>
                          )}
                          {isOpen && (
                            <div className="mt-3 space-y-2" onClick={e => e.stopPropagation()}>
                              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                                <p className="text-xs font-semibold text-gray-700 mb-1">{isGaleria ? "📷 Foto para galería GBP" : d.formato.includes("Vídeo") ? "🎬 Especificaciones" : "📸 Tipo de foto"}</p>
                                <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">{d.foto}</p>
                                {d.produccion && (
                                  <div className={`mt-2 rounded p-2 text-xs ${d.formato === "Vídeo LOCAL" ? "bg-yellow-50 text-yellow-800" : "bg-blue-50 text-blue-800"}`}>
                                    <span className="font-semibold">{d.formato === "Vídeo LOCAL" ? "⚠️" : "🎬"}</span> {d.produccion}
                                  </div>
                                )}
                              </div>
                              {d.descIA && (
                                <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                                  <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs font-semibold text-amber-800">🤖 Descripción para herramienta IA</span>
                                    <button onClick={() => cp(d.descIA, setCopied, key)}
                                      className="text-xs bg-amber-200 hover:bg-amber-300 px-2 py-0.5 rounded ml-2 shrink-0">
                                      {copied === key ? "✅ Copiado" : "Copiar"}
                                    </button>
                                  </div>
                                  <p className="text-xs text-amber-900 leading-relaxed">{d.descIA}</p>
                                </div>
                              )}
                              {!d.descIA && !d.produccion && isGaleria && (
                                <div className="bg-gray-50 rounded-lg p-2 border border-gray-200 text-xs text-gray-500 italic">🖼️ Subir foto a la galería de la ficha GBP.</div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <div className="mt-3 p-3 bg-white border border-gray-200 rounded-xl text-xs text-gray-500">
              <p className="font-semibold text-gray-700 mb-1">📦 Checklist materiales por clínica — {data.nombre}</p>
              <p>12 fotos galería (Mar·Jue·Sáb) · 4 clips wrapper RAW · 1 vídeo "Cómo llegar" (S3) · Ficha variables · 1 reseña destacada de GBP relacionada con {data.servicio}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

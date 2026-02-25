import { useState } from "react";

const MESES = {
  marzo: {
    nombre: "Marzo 2026",
    servicio: "Implantes dentales",
    emoji: "🦷",
    color: "blue",
    hitos: [
      { label: "🚀 Arranque", fecha: "2 mar", color: "bg-green-100 text-green-800 border-green-200" },
      { label: "📊 Reporte KPIs", fecha: "5 abr", color: "bg-blue-100 text-blue-800 border-blue-200" },
      { label: "📅 Reunión estrategia", fecha: "7-8 abr", color: "bg-purple-100 text-purple-800 border-purple-200" },
    ],
    semanas: [
      {
        id: 1, titulo: "Semana 1 — Valoración + Implante unitario",
        color: { header: "bg-blue-600", bg: "bg-blue-50", ring: "ring-blue-400" },
        dias: [
          { dia: "Lunes", fecha: "2 mar", tipo: "POST", formato: "Imagen", tema: "Captación local", cta: "Reservar", foto: "Recepción bonita / fachada / equipo sonriendo (sin pacientes)", descIA: "Captación local: clínica cercana, equipo amable, tecnología diagnóstica. Tono cercano y de confianza. Mensaje principal: estamos en tu zona para ayudarte. CTA: reservar valoración. Incluir {ZONA} de forma natural.", produccion: null },
          { dia: "Martes", fecha: "3 mar", tipo: "GALERÍA", formato: "Foto", tema: "Fachada exterior", cta: "—", foto: "Fachada (plano abierto)", descIA: null, produccion: "Subir foto RAW de fachada en plano abierto a la galería de la ficha GBP." },
          { dia: "Miércoles", fecha: "4 mar", tipo: "POST", formato: "Vídeo", tema: "Diagnóstico y planificación digital", cta: "Más información", foto: "INTRO local 2-3s (fachada/recepción) → CUERPO educativo 15-25s → OUTRO local 2-3s con CTA. Overlay: 'Cleardent {ZONA}'. Si sin voz: bullets grandes (Diagnóstico · Plan · Seguimiento). Sin audio o música suave libre de derechos.", descIA: "Proceso de valoración y planificación digital. Tono informativo y tranquilizador. Mensaje: así trabajamos para planificar tu caso con diagnóstico, plan personalizado y seguimiento. CTA: más información en web.", produccion: "Montar: clip fachada/recepción (intro 2-3s) + vídeo educativo de diagnóstico (15-25s) + clip recepción/fachada con CTA 'Reserva tu valoración' (outro 2-3s). Formato 1080×1920, 30fps." },
          { dia: "Jueves", fecha: "5 mar", tipo: "GALERÍA", formato: "Foto", tema: "Recepción", cta: "—", foto: "Recepción en acción", descIA: null, produccion: "Subir foto RAW de recepción en acción a la galería de la ficha GBP." },
          { dia: "Viernes", fecha: "6 mar", tipo: "POST", formato: "Imagen", tema: "Implante unitario", cta: "Reservar", foto: "Escáner intraoral / pantalla de planificación sin datos / doctor/a con modelo (sin paciente)", descIA: "Implante unitario: recuperar una pieza perdida con función y estética. Tono claro sin promesas. Proceso explicado paso a paso. Matiz obligatorio: 'según valoración'. Destacar tecnología de planificación. CTA: reservar.", produccion: null },
          { dia: "Sábado", fecha: "7 mar", tipo: "GALERÍA", formato: "Foto", tema: "Tecnología: escáner", cta: "—", foto: "Escáner intraoral en mano", descIA: null, produccion: "Subir foto RAW de escáner intraoral en mano a la galería de la ficha GBP." },
          { dia: "Domingo", fecha: "8 mar", tipo: "POST", formato: "Imagen", tema: "Consejo: salud gingival", cta: "Llamar", foto: "Macro higiene (cepillo/hilo) o equipo/recepción muy limpio", descIA: "Consejo de salud oral previo a implantes: importancia de la salud gingival. Tono educativo y preventivo. Mensaje: si tienes encías inflamadas o con sangrado, consúltalo antes de planificar implantes. CTA: llamar con dudas.", produccion: null },
        ]
      },
      {
        id: 2, titulo: "Semana 2 — All-on-4",
        color: { header: "bg-purple-600", bg: "bg-purple-50", ring: "ring-purple-400" },
        dias: [
          { dia: "Lunes", fecha: "9 mar", tipo: "POST", formato: "Imagen", tema: "Captación local — dientes fijos", cta: "Reservar", foto: "Fachada o equipo/recepción", descIA: "Captación local orientada a rehabilitación fija completa. Tono cercano, sin presión. Primer paso es una valoración sin compromiso. Reforzar presencia local en {ZONA}. CTA: reservar.", produccion: null },
          { dia: "Martes", fecha: "10 mar", tipo: "GALERÍA", formato: "Foto", tema: "Entorno / landmark cercano", cta: "—", foto: "Calle / esquina / metro cercano", descIA: null, produccion: "Subir foto RAW del entorno o landmark cercano a la galería de la ficha GBP." },
          { dia: "Miércoles", fecha: "11 mar", tipo: "POST", formato: "Vídeo", tema: "Qué es el All-on-4", cta: "Más información", foto: "INTRO local 2-3s (fachada/recepción) → CUERPO educativo All-on-4 15-25s → OUTRO local 2-3s con CTA. Overlay: 'Cleardent {ZONA}'. Sin audio o música suave libre de derechos.", descIA: "Vídeo explicativo All-on-4: qué es, cómo funciona, perfil de paciente. Tono informativo con matiz obligatorio 'casos seleccionados / según valoración'. Sin prometer tiempos ni resultados. CTA: más información.", produccion: "Montar: clip fachada/recepción (intro 2-3s) + vídeo educativo All-on-4 (15-25s) + clip recepción/fachada con CTA 'Reserva tu valoración' (outro 2-3s). Formato 1080×1920, 30fps." },
          { dia: "Jueves", fecha: "12 mar", tipo: "GALERÍA", formato: "Foto", tema: "Coordinación / explicación de plan", cta: "—", foto: "Coordinador/a explicando plan con tablet (sin datos visibles)", descIA: null, produccion: "Subir foto RAW de coordinador/a con tablet (sin datos visibles) a la galería GBP." },
          { dia: "Viernes", fecha: "13 mar", tipo: "POST", formato: "Imagen", tema: "All-on-4: diagnóstico y plan claro", cta: "Reservar", foto: "Coordinación explicando plan / doctor con pantalla / tecnología (sin datos)", descIA: "All-on-4: rehabilitación fija completa en casos seleccionados. Destacar diagnóstico riguroso y planificación personalizada. Matiz obligatorio: 'casos seleccionados / según valoración'. Tono seguro y profesional. CTA: reservar valoración.", produccion: null },
          { dia: "Sábado", fecha: "14 mar", tipo: "GALERÍA", formato: "Foto", tema: "Tecnología: TAC / CBCT", cta: "—", foto: "TAC/CBCT en sala (si no hay, tecnología/instalación equivalente)", descIA: null, produccion: "Subir foto RAW de TAC/CBCT o tecnología equivalente a la galería GBP." },
          { dia: "Domingo", fecha: "15 mar", tipo: "POST", formato: "Imagen", tema: "Consejo: prótesis removible", cta: "Llamar", foto: "Higiene o tecnología/instalación limpia", descIA: "Consejo orientado a pacientes con prótesis removible o dificultad para masticar. Tono empático y motivador. Mensaje: no esperes años, existen alternativas que merece la pena conocer. CTA: llamar.", produccion: null },
        ]
      },
      {
        id: 3, titulo: "Semana 3 — Casos complejos + Cómo llegar",
        color: { header: "bg-green-600", bg: "bg-green-50", ring: "ring-green-400" },
        dias: [
          { dia: "Lunes", fecha: "16 mar", tipo: "POST", formato: "Imagen", tema: "Implantes en {ZONA} — SEO local", cta: "Reservar", foto: "Doctor/a en gabinete / equipo / recepción (local)", descIA: "SEO local de implantes: posicionar la clínica como referente en implantes dentales en {ZONA}. Tono directo y local. Mensaje: somos tu clínica de implantes en {ZONA}, con valoración y plan a medida. CTA: reservar.", produccion: null },
          { dia: "Martes", fecha: "17 mar", tipo: "GALERÍA", formato: "Foto", tema: "Fachada — detalle rótulo", cta: "—", foto: "Fachada con detalle del rótulo", descIA: null, produccion: "Subir foto RAW de fachada con detalle del rótulo a la galería GBP." },
          { dia: "Miércoles", fecha: "18 mar", tipo: "POST", formato: "Vídeo LOCAL", tema: "Cómo llegar a la clínica", cta: "Cómo llegar", foto: "Montaje 20-30s / 1080×1920 / 30fps:\n• Clip 1 (3-5s): Landmark → Texto: \"Desde {METRO}/{HITO}\"\n• Clip 2 (4-6s): caminata tramo 1 → Texto: \"≈ 5 min andando\"\n• Clip 3 (4-6s): caminata tramo final / giro\n• Clip 4 (4-6s): fachada con rótulo → Texto: \"{CLINICA}\"\n• Clip 5 (3-5s): entrada/recepción → Texto: \"Pulsa 'Cómo llegar'\"\n⚠️ Sin caras identificables · Sin datos en pantallas · Cortes rápidos · Stabilize suave", descIA: null, produccion: "⚠️ Vídeo local manual. No pasa por herramienta IA. Montar con clips RAW propios siguiendo la receta de 5 clips." },
          { dia: "Jueves", fecha: "19 mar", tipo: "GALERÍA", formato: "Foto", tema: "Equipo — mini grupo", cta: "—", foto: "Mini-grupo del equipo (2-3 personas)", descIA: null, produccion: "Subir foto RAW de mini-grupo del equipo a la galería GBP." },
          { dia: "Viernes", fecha: "20 mar", tipo: "POST", formato: "Imagen", tema: "Casos complejos: poco hueso", cta: "Reservar", foto: "TAC/CBCT / pantalla planificación sin datos / doctor señalando modelo (sin paciente)", descIA: "Casos complejos: pacientes a los que han dicho que tienen poco hueso o no son candidatos a implantes. Tono empático y esperanzador sin prometer resultados. Mensaje: en muchos casos hay solución, depende de la valoración individual. CTA: reservar.", produccion: null },
          { dia: "Sábado", fecha: "21 mar", tipo: "GALERÍA", formato: "Foto", tema: "Gabinete clínico", cta: "—", foto: "Gabinete (plano ancho, limpio)", descIA: null, produccion: "Subir foto RAW del gabinete en plano ancho y limpio a la galería GBP." },
          { dia: "Domingo", fecha: "22 mar", tipo: "POST", formato: "Imagen", tema: "Consejo: bruxismo", cta: "Llamar", foto: "Férula/cepillo o equipo", descIA: "Consejo sobre bruxismo: cómo apretar los dientes puede afectar a la salud oral y a la planificación de implantes. Tono educativo. Mensaje: si tienes bruxismo, cuéntanoslo en consulta para tenerlo en cuenta. CTA: llamar.", produccion: null },
        ]
      },
      {
        id: 4, titulo: "Semana 4 — All-on-6 Premium + Financiación + Urgencias",
        color: { header: "bg-orange-600", bg: "bg-orange-50", ring: "ring-orange-400" },
        dias: [
          { dia: "Lunes", fecha: "23 mar", tipo: "POST", formato: "Imagen", tema: "Financiación — sin barrera de precio", cta: "Reservar", foto: "Coordinación con tablet demo o recepción", descIA: "Financiación de implantes: eliminar la barrera del precio. Tono empático, sin cifras ni cuotas concretas. Mensaje: hay opciones de pago, ven a informarte sin compromiso. Matiz obligatorio: 'según condiciones'. CTA: reservar valoración.", produccion: null },
          { dia: "Martes", fecha: "24 mar", tipo: "GALERÍA", formato: "Foto", tema: "Metro / landmark cercano", cta: "—", foto: "Entrada de metro o landmark cercano", descIA: null, produccion: "Subir foto RAW del metro o landmark cercano a la galería GBP." },
          { dia: "Miércoles", fecha: "25 mar", tipo: "POST", formato: "Vídeo", tema: "Qué es el All-on-6 Premium", cta: "Más información", foto: "INTRO local 2-3s (fachada/recepción) → CUERPO educativo All-on-6 Premium 15-25s → OUTRO local 2-3s con CTA. Overlay: 'Cleardent {ZONA}'. Sin audio o música suave libre de derechos.", descIA: "Vídeo explicativo All-on-6 Premium: diferencias con All-on-4, perfil de paciente ideal, cuándo se recomienda. Tono informativo de alta gama. Matiz obligatorio: 'casos seleccionados / según valoración'. CTA: más información.", produccion: "Montar: clip fachada/recepción (intro 2-3s) + vídeo educativo All-on-6 Premium (15-25s) + clip recepción/fachada con CTA 'Reserva tu valoración' (outro 2-3s). Formato 1080×1920, 30fps." },
          { dia: "Jueves", fecha: "26 mar", tipo: "GALERÍA", formato: "Foto", tema: "Retrato doctor/a", cta: "—", foto: "Retrato del/la doctor/a", descIA: null, produccion: "Subir foto RAW de retrato del/la doctor/a a la galería GBP." },
          { dia: "Viernes", fecha: "27 mar", tipo: "POST", formato: "Imagen", tema: "All-on-6 Premium — rehabilitación completa", cta: "Reservar", foto: "Retrato doctor/a o planificación/tecnología", descIA: "All-on-6 Premium: rehabilitación completa de alto ticket. Destacar exclusividad, planificación detallada y atención personalizada. Tono premium y de confianza. Matiz obligatorio: 'casos seleccionados'. CTA: reservar.", produccion: null },
          { dia: "Sábado", fecha: "28 mar", tipo: "GALERÍA", formato: "Foto", tema: "Esterilización / higiene clínica", cta: "—", foto: "Zona de esterilización o bandeja limpia", descIA: null, produccion: "Subir foto RAW de zona de esterilización o bandeja limpia a la galería GBP." },
          { dia: "Domingo", fecha: "29 mar", tipo: "POST", formato: "Imagen", tema: "Urgencias dentales en {ZONA}", cta: "Llamar", foto: "Recepción/teléfono o fachada", descIA: "Urgencias dentales en {ZONA}: disponibilidad para atender dolor o emergencias. Tono de servicio inmediato y tranquilizador. Mensaje: llámanos y te orientamos. Si la clínica abre sábados añadir sello. CTA: llamar.", produccion: null },
        ]
      },
      {
        id: 5, titulo: "Semana 5 — Puente hacia abril (continúa con Ortodoncia Invisible)",
        color: { header: "bg-gray-500", bg: "bg-gray-50", ring: "ring-gray-400" },
        dias: [
          { dia: "Lunes", fecha: "30 mar", tipo: "GALERÍA", formato: "Foto", tema: "Equipo completo / ambiente clínica", cta: "—", foto: "Foto de equipo completo o ambiente general de la clínica (sin pacientes)", descIA: null, produccion: "Subir foto RAW de equipo completo o ambiente general de la clínica a la galería GBP." },
          { dia: "Martes", fecha: "31 mar", tipo: "POST", formato: "Imagen", tema: "Cierre de mes — recuerda pedir tu valoración", cta: "Reservar", foto: "Recepción bonita / equipo sonriendo / fachada (sin pacientes)", descIA: "Cierre de mes enfocado a implantes: recordatorio final para quienes llevan tiempo pensándolo. Tono motivador y cercano. Mensaje: si llevas tiempo dándole vueltas a recuperar tu sonrisa, el primer paso es una valoración sin compromiso. Matiz: 'según valoración'. CTA: reservar.", produccion: null },
        ]
      }
    ]
  },
  abril: {
    nombre: "Abril 2026",
    servicio: "Ortodoncia invisible",
    emoji: "😁",
    color: "teal",
    hitos: [
      { label: "🚀 Arranque", fecha: "1 abr", color: "bg-green-100 text-green-800 border-green-200" },
      { label: "📊 Reporte KPIs abril", fecha: "5 may", color: "bg-blue-100 text-blue-800 border-blue-200" },
      { label: "📅 Reunión estrategia", fecha: "7-8 may", color: "bg-purple-100 text-purple-800 border-purple-200" },
    ],
    semanas: [
      {
        id: 1, titulo: "Semana 1 — Qué es la ortodoncia invisible + Captación (lun 30 y mar 31 de marzo ya publicados)",
        color: { header: "bg-teal-600", bg: "bg-teal-50", ring: "ring-teal-400" },
        dias: [
          { dia: "Lunes", fecha: "30 mar", tipo: "GALERÍA", formato: "Foto", tema: "✅ Publicado en marzo — Equipo completo / ambiente clínica", cta: "—", foto: "Foto de equipo completo o ambiente general de la clínica (sin pacientes)", descIA: null, produccion: "Ya programado en marzo. Ver calendario de marzo." },
          { dia: "Martes", fecha: "31 mar", tipo: "POST", formato: "Imagen", tema: "✅ Publicado en marzo — Cierre de mes / recordatorio implantes", cta: "Reservar", foto: "Recepción bonita / equipo sonriendo / fachada (sin pacientes)", descIA: null, produccion: "Ya programado en marzo. Ver calendario de marzo." },
          { dia: "Miércoles", fecha: "1 abr", tipo: "POST", formato: "Imagen", tema: "Captación local — ortodoncia invisible en {ZONA}", cta: "Reservar", foto: "Recepción bonita / equipo sonriendo / fachada (sin pacientes)", descIA: "Captación local orientada a ortodoncia invisible. Tono cercano y moderno. Mensaje: si quieres alinear tus dientes sin que se note, estamos en {ZONA} para ayudarte. Enfatizar discreción y comodidad frente a brackets tradicionales. CTA: reservar estudio gratuito.", produccion: null },
          { dia: "Jueves", fecha: "2 abr", tipo: "GALERÍA", formato: "Foto", tema: "Fachada exterior", cta: "—", foto: "Fachada (plano abierto)", descIA: null, produccion: "Subir foto RAW de fachada en plano abierto a la galería de la ficha GBP." },
          { dia: "Viernes", fecha: "3 abr", tipo: "POST", formato: "Imagen", tema: "Qué son los alineadores transparentes", cta: "Más información", foto: "Alineadores transparentes en mano / escáner intraoral / pantalla planificación 3D sin datos", descIA: "Explicar qué es la ortodoncia invisible con alineadores transparentes personalizados y removibles. Destacar que son casi invisibles, cómodos y que permiten comer y mantener higiene con normalidad. Alineadores se cambian cada 7-10 días. Tono educativo y moderno. CTA: más información en web.", produccion: null },
          { dia: "Sábado", fecha: "4 abr", tipo: "GALERÍA", formato: "Foto", tema: "Recepción en acción", cta: "—", foto: "Recepción en acción", descIA: null, produccion: "Subir foto RAW de recepción en acción a la galería de la ficha GBP." },
          { dia: "Domingo", fecha: "5 abr", tipo: "POST", formato: "Imagen", tema: "Consejo: higiene con alineadores", cta: "Llamar", foto: "Cepillo dental / hilo / alineadores sobre superficie limpia", descIA: "Consejo de higiene con ortodoncia invisible: con los alineadores removibles la higiene dental es mucho más fácil que con brackets. Tono educativo y positivo. Mensaje: cepíllate con normalidad, come sin restricciones, lleva el alineador las horas recomendadas. CTA: llamar con dudas.", produccion: null },
        ]
      },
      {
        id: 2, titulo: "Semana 2 — Tecnología 3D + Proceso paso a paso",
        color: { header: "bg-cyan-600", bg: "bg-cyan-50", ring: "ring-cyan-400" },
        dias: [
          { dia: "Lunes", fecha: "6 abr", tipo: "POST", formato: "Imagen", tema: "Tecnología 3D — ves el resultado antes de empezar", cta: "Reservar", foto: "Escáner intraoral en uso / pantalla con modelo 3D sin datos / doctor/a con tablet", descIA: "Tecnología 3D de planificación: con el escáner intraoral creamos un modelo digital de tu boca y puedes ver cómo quedarán tus dientes antes de empezar el tratamiento. Tono de autoridad tecnológica. Mensaje: planificación precisa, sin sorpresas, resultado previsible. CTA: reservar estudio gratuito.", produccion: null },
          { dia: "Martes", fecha: "7 abr", tipo: "GALERÍA", formato: "Foto", tema: "Tecnología: escáner intraoral", cta: "—", foto: "Escáner intraoral en mano", descIA: null, produccion: "Subir foto RAW de escáner intraoral en mano a la galería de la ficha GBP." },
          { dia: "Miércoles", fecha: "8 abr", tipo: "POST", formato: "Vídeo", tema: "Proceso paso a paso de ortodoncia invisible", cta: "Más información", foto: "INTRO local 2-3s (fachada/recepción) → CUERPO educativo proceso OI 15-25s → OUTRO local 2-3s con CTA. Overlay: 'Cleardent {ZONA}'. Si sin voz: bullets (Valoración · Planificación 3D · Alineadores · Seguimiento). Sin audio o música suave libre de derechos.", descIA: "Vídeo explicativo del proceso completo de ortodoncia invisible: valoración, escáner 3D, fabricación de alineadores personalizados, colocación y revisiones mensuales hasta finalización. Tono informativo y tranquilizador. Sin prometer tiempos exactos. CTA: más información.", produccion: "Montar: clip fachada/recepción (intro 2-3s) + vídeo educativo proceso ortodoncia invisible (15-25s) + clip recepción/fachada con CTA 'Reserva tu estudio gratuito' (outro 2-3s). Formato 1080×1920, 30fps." },
          { dia: "Jueves", fecha: "9 abr", tipo: "GALERÍA", formato: "Foto", tema: "Gabinete clínico", cta: "—", foto: "Gabinete (plano ancho, limpio)", descIA: null, produccion: "Subir foto RAW de gabinete en plano ancho y limpio a la galería GBP." },
          { dia: "Viernes", fecha: "10 abr", tipo: "POST", formato: "Imagen", tema: "Estudio gratuito — sin compromiso", cta: "Reservar", foto: "Coordinador/a explicando plan con tablet (sin datos) / doctor/a en consulta", descIA: "El estudio de ortodoncia invisible es gratuito en Cleardent: incluye consulta con especialista, imagen interactiva 3D del antes y después, planificación digital y presupuesto personalizado. Tono cercano y sin presión. Mensaje: ven a informarte sin compromiso. CTA: reservar estudio gratuito.", produccion: null },
          { dia: "Sábado", fecha: "11 abr", tipo: "GALERÍA", formato: "Foto", tema: "Coordinación / explicación de plan", cta: "—", foto: "Coordinador/a explicando plan con tablet (sin datos visibles)", descIA: null, produccion: "Subir foto RAW de coordinador/a con tablet (sin datos visibles) a la galería GBP." },
          { dia: "Domingo", fecha: "12 abr", tipo: "POST", formato: "Imagen", tema: "Consejo: cuánto tiempo llevar los alineadores", cta: "Llamar", foto: "Alineadores sobre mesa limpia / equipo/recepción", descIA: "Consejo sobre tiempo de uso de los alineadores: para que el tratamiento funcione correctamente deben llevarse entre 20-22 horas al día. Tono educativo. Mensaje: el cumplimiento es clave para conseguir los resultados planificados. CTA: llamar con dudas.", produccion: null },
        ]
      },
      {
        id: 3, titulo: "Semana 3 — Ortodoncia invisible en {ZONA} + Cómo llegar",
        color: { header: "bg-emerald-600", bg: "bg-emerald-50", ring: "ring-emerald-400" },
        dias: [
          { dia: "Lunes", fecha: "13 abr", tipo: "POST", formato: "Imagen", tema: "Ortodoncia invisible en {ZONA} — SEO local", cta: "Reservar", foto: "Doctor/a en gabinete / equipo / recepción (imagen muy local)", descIA: "SEO local de ortodoncia invisible: posicionar la clínica como referente en ortodoncia invisible en {ZONA}. Tono directo y local. Mensaje: somos tu clínica de ortodoncia invisible en {ZONA}, con estudio gratuito y planificación digital personalizada. CTA: reservar.", produccion: null },
          { dia: "Martes", fecha: "14 abr", tipo: "GALERÍA", formato: "Foto", tema: "Fachada — detalle rótulo", cta: "—", foto: "Fachada con detalle del rótulo", descIA: null, produccion: "Subir foto RAW de fachada con detalle del rótulo a la galería GBP." },
          { dia: "Miércoles", fecha: "15 abr", tipo: "POST", formato: "Vídeo LOCAL", tema: "Cómo llegar a la clínica", cta: "Cómo llegar", foto: "Montaje 20-30s / 1080×1920 / 30fps:\n• Clip 1 (3-5s): Landmark → Texto: \"Desde {METRO}/{HITO}\"\n• Clip 2 (4-6s): caminata tramo 1 → Texto: \"≈ 5 min andando\"\n• Clip 3 (4-6s): caminata tramo final / giro\n• Clip 4 (4-6s): fachada con rótulo → Texto: \"{CLINICA}\"\n• Clip 5 (3-5s): entrada/recepción → Texto: \"Pulsa 'Cómo llegar'\"\n⚠️ Sin caras identificables · Sin datos en pantallas · Cortes rápidos · Stabilize suave", descIA: null, produccion: "⚠️ Vídeo local manual. No pasa por herramienta IA. Montar con clips RAW propios siguiendo la receta de 5 clips." },
          { dia: "Jueves", fecha: "16 abr", tipo: "GALERÍA", formato: "Foto", tema: "Equipo — mini grupo", cta: "—", foto: "Mini-grupo del equipo (2-3 personas)", descIA: null, produccion: "Subir foto RAW de mini-grupo del equipo a la galería GBP." },
          { dia: "Viernes", fecha: "17 abr", tipo: "POST", formato: "Imagen", tema: "Invisalign, Spark y SureSmile — marcas líderes", cta: "Más información", foto: "Escáner / tecnología / doctor/a con modelo (sin paciente, sin datos)", descIA: "Cleardent trabaja con las tres marcas líderes de ortodoncia invisible: Invisalign, Spark y SureSmile. Tono de autoridad y confianza. Mensaje: trabajamos con las mejores marcas y elegimos la más adecuada para cada caso tras la valoración. Sin comparativas agresivas entre marcas. CTA: más información.", produccion: null },
          { dia: "Sábado", fecha: "18 abr", tipo: "GALERÍA", formato: "Foto", tema: "Tecnología: planificación digital", cta: "—", foto: "Pantalla de planificación 3D sin datos de paciente", descIA: null, produccion: "Subir foto RAW de pantalla de planificación 3D (sin datos visibles) a la galería GBP." },
          { dia: "Domingo", fecha: "19 abr", tipo: "POST", formato: "Imagen", tema: "Consejo: qué no hacer con los alineadores puestos", cta: "Llamar", foto: "Alineadores / mesa limpia / equipo", descIA: "Consejo práctico: con los alineadores puestos no se puede comer ni beber nada que no sea agua, ya que pueden mancharse, deformarse o romperse. Tono educativo y directo. Mensaje: retíralos para comer o tomar bebidas con color. Es fácil adaptarse y forma parte del proceso. CTA: llamar con dudas.", produccion: null },
        ]
      },
      {
        id: 4, titulo: "Semana 4 — Resultados + Financiación + Teens",
        color: { header: "bg-indigo-600", bg: "bg-indigo-50", ring: "ring-indigo-400" },
        dias: [
          { dia: "Lunes", fecha: "21 abr", tipo: "POST", formato: "Imagen", tema: "Financiación — sin barrera de precio", cta: "Reservar", foto: "Coordinación con tablet demo o recepción", descIA: "Financiación de ortodoncia invisible: eliminar la barrera del precio. Tono empático, sin cifras ni cuotas concretas. Mensaje: hay opciones de pago para que el tratamiento sea accesible, ven a informarte sin compromiso. El estudio es gratuito. Matiz obligatorio: 'según condiciones'. CTA: reservar estudio gratuito.", produccion: null },
          { dia: "Martes", fecha: "22 abr", tipo: "GALERÍA", formato: "Foto", tema: "Metro / landmark cercano", cta: "—", foto: "Entrada de metro o landmark cercano", descIA: null, produccion: "Subir foto RAW del metro o landmark cercano a la galería GBP." },
          { dia: "Miércoles", fecha: "23 abr", tipo: "POST", formato: "Vídeo", tema: "Cuándo se empiezan a ver los resultados", cta: "Más información", foto: "INTRO local 2-3s (fachada/recepción) → CUERPO educativo resultados OI 15-25s → OUTRO local 2-3s con CTA. Overlay: 'Cleardent {ZONA}'. Si sin voz: bullets (Primeros resultados · Seguimiento mensual · Retención final). Sin audio o música suave.", descIA: "Vídeo sobre resultados de la ortodoncia invisible: los primeros cambios se observan a partir del segundo mes. La duración varía según el caso, de 3 a 24 meses. Seguimiento mensual con el ortodoncista. Finalización con retención fija y removible. Tono motivador y realista, sin prometer resultados concretos. CTA: más información.", produccion: "Montar: clip fachada/recepción (intro 2-3s) + vídeo educativo sobre resultados y seguimiento (15-25s) + clip recepción/fachada con CTA 'Reserva tu estudio gratuito' (outro 2-3s). Formato 1080×1920, 30fps." },
          { dia: "Jueves", fecha: "24 abr", tipo: "GALERÍA", formato: "Foto", tema: "Retrato doctor/a ortodoncista", cta: "—", foto: "Retrato del/la doctor/a ortodoncista", descIA: null, produccion: "Subir foto RAW de retrato del/la doctor/a ortodoncista a la galería GBP." },
          { dia: "Viernes", fecha: "25 abr", tipo: "POST", formato: "Imagen", tema: "Ortodoncia invisible para jóvenes y teens", cta: "Reservar", foto: "Equipo joven / recepción dinámica / escáner con imagen profesional", descIA: "Ortodoncia invisible para adolescentes y jóvenes: es una opción ideal para teens que no quieren llevar brackets visibles. Tono fresco y cercano. Mensaje: discreta, cómoda y sin restricciones en el día a día. Mencionar que es apta para adultos y adolescentes. CTA: reservar estudio gratuito.", produccion: null },
          { dia: "Sábado", fecha: "26 abr", tipo: "GALERÍA", formato: "Foto", tema: "Esterilización / higiene clínica", cta: "—", foto: "Zona de esterilización o bandeja limpia", descIA: null, produccion: "Subir foto RAW de zona de esterilización o bandeja limpia a la galería GBP." },
          { dia: "Domingo", fecha: "27 abr", tipo: "POST", formato: "Imagen", tema: "Consejo: retención al acabar el tratamiento", cta: "Llamar", foto: "Férula de retención / equipo / recepción limpia", descIA: "Consejo sobre la fase de retención al finalizar la ortodoncia invisible: una vez conseguidos los resultados se coloca retención fija y removible para mantener la posición de los dientes. Tono educativo. Mensaje: el tratamiento no acaba al quitarse el último alineador, la retención es clave para que dure. CTA: llamar con dudas.", produccion: null },
        ]
      }
    ]
  }
};

const formatoBadge = {
  Imagen: "bg-sky-100 text-sky-700",
  Vídeo: "bg-pink-100 text-pink-700",
  "Vídeo LOCAL": "bg-yellow-100 text-yellow-800",
  Foto: "bg-gray-100 text-gray-500",
};

export default function App() {
  const [mes, setMes] = useState("marzo");
  const [selected, setSelected] = useState(null);
  const [copied, setCopied] = useState(null);
  const [filtro, setFiltro] = useState("TODO");

  const cp = (text, key) => {
    const el = document.createElement("textarea");
    el.value = text;
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.focus();
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  };

  const cambiarMes = (m) => { setMes(m); setSelected(null); setFiltro("TODO"); };
  const toggle = (key) => setSelected(prev => prev === key ? null : key);

  const filtros = ["TODO", "POST", "GALERÍA", "Vídeo"];
  const matchFiltro = (d) => {
    if (filtro === "TODO") return true;
    if (filtro === "POST") return d.tipo === "POST";
    if (filtro === "GALERÍA") return d.tipo === "GALERÍA";
    if (filtro === "Vídeo") return d.formato === "Vídeo" || d.formato === "Vídeo LOCAL";
    return true;
  };

  const data = MESES[mes];

  return (
    <div className="p-4 max-w-5xl mx-auto font-sans text-sm">

      {/* Header + selector de mes */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">📅 Calendario GBP 2026 — Cleardent</h1>
        <div className="flex gap-3">
          {Object.entries(MESES).map(([key, m]) => (
            <button key={key} onClick={() => cambiarMes(key)}
              className={`flex-1 rounded-xl border-2 p-3 text-left transition-all ${mes === key ? "border-gray-800 bg-gray-800 text-white shadow-lg" : "border-gray-200 bg-white text-gray-600 hover:border-gray-400"}`}>
              <div className="text-lg mb-0.5">{m.emoji}</div>
              <div className="font-bold text-sm">{m.nombre}</div>
              <div className={`text-xs mt-0.5 ${mes === key ? "text-gray-300" : "text-gray-400"}`}>{m.servicio}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Hitos */}
      <div className="flex flex-wrap gap-2 mb-4">
        {data.hitos.map(h => (
          <div key={h.label} className={`text-xs px-3 py-1.5 rounded-full border font-medium ${h.color}`}>
            {h.label} · <span className="font-bold">{h.fecha}</span>
          </div>
        ))}
      </div>

      {/* Nota abril semana 1 */}
      {mes === "abril" && (
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-800">
          <span className="font-semibold">ℹ️ La semana 1 arranca el lunes 30 de marzo</span> — esos dos días ya están programados en el calendario de marzo. El contenido de ortodoncia invisible empieza el miércoles 1 de abril.
        </div>
      )}

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-5 p-3 bg-gray-50 rounded-xl border border-gray-200">
        <span className="text-xs font-semibold text-gray-600 self-center mr-1">Filtrar:</span>
        {filtros.map(f => (
          <button key={f} onClick={() => setFiltro(f)}
            className={`text-xs px-3 py-1 rounded-full border transition font-medium ${filtro === f ? "bg-gray-800 text-white border-gray-800" : "bg-white text-gray-600 border-gray-300 hover:border-gray-500"}`}>
            {f}
          </button>
        ))}
      </div>

      {/* Semanas */}
      {data.semanas.map(semana => {
        const diasFiltrados = semana.dias.filter(matchFiltro);
        if (diasFiltrados.length === 0) return null;
        return (
          <div key={semana.id} className="mb-6 rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className={`${semana.color.header} text-white px-4 py-2.5 text-sm font-semibold`}>{semana.titulo}</div>
            <div className={`${semana.color.bg} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3`}>
              {diasFiltrados.map((d, i) => {
                const key = `${mes}-s${semana.id}-${i}`;
                const isOpen = selected === key;
                const isGaleria = d.tipo === "GALERÍA";
                return (
                  <div key={key} onClick={() => toggle(key)}
                    className={`rounded-xl border bg-white p-3 cursor-pointer transition-all hover:shadow-md ${isGaleria ? "border-dashed border-gray-300" : "border-gray-200"} ${isOpen ? `ring-2 ring-offset-1 ${semana.color.ring}` : ""}`}>

                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-bold text-gray-800">{d.dia}</span>
                        <span className="ml-1.5 text-xs text-gray-400 font-medium">{d.fecha}</span>
                      </div>
                      <div className="flex gap-1 flex-wrap justify-end">
                        {isGaleria && <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-gray-100 text-gray-500">GALERÍA</span>}
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${formatoBadge[d.formato] || "bg-gray-100 text-gray-600"}`}>{d.formato}</span>
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-gray-700 mb-1">{d.tema}</p>
                    <p className="text-xs text-gray-500 leading-snug">{d.foto.includes("•") ? d.foto.split("\n")[0]+"…" : d.foto.length > 70 ? d.foto.substring(0,70)+"…" : d.foto}</p>
                    {d.cta !== "—" && <p className="text-xs mt-1.5"><span className="font-medium text-gray-600">CTA:</span> <span className="text-gray-500">{d.cta}</span></p>}

                    {isOpen && (
                      <div className="mt-3 space-y-3" onClick={e => e.stopPropagation()}>
                        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <p className="text-xs font-semibold text-gray-700 mb-1">📸 {isGaleria ? "Foto para galería GBP" : d.formato.includes("Vídeo") ? "Especificaciones de montaje" : "Tipo de foto"}</p>
                          <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">{d.foto}</p>
                        </div>
                        {d.descIA && (
                          <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs font-semibold text-amber-800">🤖 Descripción para herramienta IA</span>
                              <button onClick={(e) => { e.stopPropagation(); cp(d.descIA, key); }}
                                className="text-xs bg-amber-200 hover:bg-amber-300 px-2 py-0.5 rounded transition shrink-0 ml-2">
                                {copied === key ? "✅ Copiado" : "Copiar"}
                              </button>
                            </div>
                            <p className="text-xs text-amber-900 leading-relaxed">{d.descIA}</p>
                          </div>
                        )}
                        {d.produccion && (
                          <div className={`rounded-lg p-3 border text-xs ${d.formato === "Vídeo LOCAL" ? "bg-yellow-50 border-yellow-200 text-yellow-900" : "bg-blue-50 border-blue-200 text-blue-900"}`}>
                            <p className="font-semibold mb-0.5">{d.formato === "Vídeo LOCAL" ? "⚠️ Producción manual" : "🎬 Producción vídeo"}</p>
                            <p className="leading-relaxed">{d.produccion}</p>
                          </div>
                        )}
                        {!d.descIA && !d.produccion && isGaleria && (
                          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-xs text-gray-600">
                            🗂️ Subir esta foto a la galería de la ficha GBP.
                          </div>
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

      <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-500">
        <p className="font-semibold text-gray-700 mb-1">📦 Checklist de materiales por clínica — {data.nombre}</p>
        <p>12 fotos para galería (Mar · Jue · Sáb) · 4 clips wrapper RAW (2 intro + 2 outro) · 1 vídeo "Cómo llegar" (semana 3) · Ficha de variables completa ({"{CLINICA}"} · {"{ZONA}"} · {"{TEL}"} · {"{BOOKING_URL_UTM}"} · {"{WEB_URL_UTM}"} · {"{METRO}/{HITO}"})</p>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Laptop,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Send,
  MessageCircle,
  Brain,
  Compass,
  Heart,
  ShieldCheck,
  Feather,
  Check,
  User,
  Mail,
  HelpCircle,
} from "lucide-react";

export default function Home() {
  // Form State
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    momento: "Una pérdida importante",
    otroMotivo: "",
    acepto: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acepto) {
      setSubmitError("Por favor acepta los términos para continuar.");
      return;
    }
    setSubmitError("");
    setIsSubmitting(true);

    const momentoFinal =
      formData.momento === "Otro" && formData.otroMotivo.trim() !== ""
        ? `Otro: ${formData.otroMotivo.trim()}`
        : formData.momento;

    // Webhook de Google Apps Script para guardar registros en Google Sheets
    // ID de Implementación: AKfycbytpl40sBUianQxEoJ_fSKZp8MSaWjdXDWgj1fNgVu23Gf9mj85fjGBZ1rYqd_aX-ed
    const GOOGLE_SHEETS_WEBHOOK_URL =
      "https://script.google.com/macros/s/AKfycbytpl40sBUianQxEoJ_fSKZp8MSaWjdXDWgj1fNgVu23Gf9mj85fjGBZ1rYqd_aX-ed/exec";

    try {
      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          momento: momentoFinal,
          acepto: formData.acepto ? "Sí" : "No",
          fechaRegistro: new Date().toLocaleString("es-MX", {
            timeZone: "America/Mexico_City",
          }),
        }),
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error al enviar el formulario:", err);
      // Aun si falla la conexión de prueba, mostramos confirmación amigable
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const opcionesMomento = [
    "Una pérdida importante",
    "Una separación o cambio en una relación",
    "Un cambio profesional o económico",
    "Una transición familiar o personal",
    "Siento que necesito una nueva dirección",
    "Otro",
  ];

  const scrollToForm = () => {
    const formElement = document.getElementById("registro");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F6F4ED] text-[#3A4235] overflow-x-hidden selection:bg-[#6B7A65] selection:text-white">
      {/* Background Antigravity Ethereal Orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#6B7A65]/15 to-[#D8B89C]/20 blur-3xl animate-ambient-pulse" />
        <div className="absolute top-[35%] right-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#D8B89C]/25 to-[#6B7A65]/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-gradient-to-t from-[#6B7A65]/15 to-transparent blur-3xl animate-float-medium" />

        {/* Abstract Floating Leaves SVG Accents */}
        <div className="absolute top-[18%] left-[8%] opacity-20 text-[#6B7A65] animate-float-slow">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 59,16.17 3.82,21.34L5.71,22.5C10.74,18.84 15.5,14 17,8Z" />
            <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20Z" opacity="0.4" />
          </svg>
        </div>
        <div className="absolute top-[45%] left-[88%] opacity-25 text-[#D8B89C] animate-float-medium">
          <Sparkles size={40} />
        </div>
        <div className="absolute bottom-[28%] right-[8%] opacity-20 text-[#6B7A65] animate-float-reverse">
          <Feather size={42} />
        </div>
      </div>

      {/* Top Header / Announcement Bar */}
      <header className="relative z-10 w-full backdrop-blur-md bg-[#F6F4ED]/80 border-b border-[#D8B89C]/30 py-3.5 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#6B7A65] font-serif font-semibold text-lg sm:text-xl tracking-tight">
            <span className="text-xl">🌿</span>
            <span>Volver a Ti</span>
          </div>
          <button
            onClick={scrollToForm}
            className="text-xs sm:text-sm font-medium px-4 py-2 rounded-full bg-[#6B7A65] text-white hover:bg-[#546250] transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            Reservar Lugar Gratis
          </button>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-24">
        {/* ==========================================
            SECCIÓN 1: HERO (PORTADA)
           ========================================== */}
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center pt-4 pb-16">
          {/* Floating Tag Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-[#D8B89C]/50 text-[#6B7A65] text-xs sm:text-sm font-medium mb-6 animate-float-medium shadow-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-[#6B7A65] animate-pulse"></span>
            <span>Webinar gratuito online</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-[#3A4235] tracking-tight mb-6 max-w-4xl leading-[1.15]">
            🌿 VOLVER A TI
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-[#6B7A65] max-w-3xl mb-8 leading-relaxed">
            Cómo recuperar claridad, poder personal y dirección cuando la vida cambia.
          </p>

          {/* Intro Text & Card */}
          <div className="max-w-3xl glass-card rounded-2xl p-6 sm:p-8 mb-8 text-left shadow-lg border border-[#D8B89C]/40 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D8B89C]/20 to-transparent rounded-bl-full pointer-events-none" />
            <p className="text-base sm:text-lg text-[#3A4235] leading-relaxed mb-4">
              Hay momentos en los que la vida cambia… Una pérdida. Una separación. Un cambio profesional o familiar. Una etapa que termina. O simplemente esa sensación de que ya no quieres seguir viviendo de la misma manera. Y aparece una pregunta: <span className="font-semibold italic text-[#6B7A65]">“¿Y ahora qué?”</span>
            </p>
            <p className="text-base sm:text-lg text-[#5C6756] leading-relaxed">
              En este webinar descubrirás cómo comenzar a recuperar claridad sobre lo que quieres y cómo utilizar la Inteligencia Artificial como copiloto consciente para ordenar pensamientos, disminuir carga mental y explorar lo que sigue. <strong className="text-[#3A4235] font-semibold">Sin delegar tus decisiones, tu criterio ni tu humanidad.</strong>
            </p>
          </div>

          {/* Event Details Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 text-xs sm:text-base font-medium">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-[#3A4235] border border-[#D8B89C]/40 shadow-sm animate-float-slow">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#6B7A65]" />
              <span>29 de Septiembre</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-[#3A4235] border border-[#D8B89C]/40 shadow-sm animate-float-medium">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#6B7A65]" />
              <span>6:00 PM Hora CDMX</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-[#3A4235] border border-[#D8B89C]/40 shadow-sm animate-float-reverse">
              <Laptop className="w-4 h-4 sm:w-5 sm:h-5 text-[#6B7A65]" />
              <span>Online y gratuito</span>
            </div>
          </div>

          {/* Hero CTA Button */}
          <button
            onClick={scrollToForm}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-[#6B7A65] text-white font-semibold text-base sm:text-lg shadow-xl hover:bg-[#546250] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer active:translate-y-0"
          >
            <span>QUIERO RESERVAR MI LUGAR GRATIS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </section>

        {/* ==========================================
            SECCIÓN 2: CHECKLIST (Este webinar es para ti si…)
           ========================================== */}
        <section className="py-16 sm:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D8B89C] uppercase mb-2 block">
              ALINEACIÓN Y PROPÓSITO
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#3A4235]">
              Este webinar es para ti si…
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#5C6756] max-w-2xl mx-auto">
              Si te identificas con alguna de estas situaciones, este espacio está diseñado para brindarte paz y dirección.
            </p>
          </div>

          {/* Grid of Floating Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Tu vida cambió y sientes que tú también estás cambiando.",
                animation: "animate-float-slow",
              },
              {
                text: "Te preguntas qué quieres para esta nueva etapa.",
                animation: "animate-float-medium",
              },
              {
                text: "Sientes demasiadas cosas ocupando espacio en tu mente.",
                animation: "animate-float-reverse",
              },
              {
                text: "Quieres recuperar claridad y dirección para avanzar.",
                animation: "animate-float-slow",
              },
              {
                text: "Sabes que no quieres volver a ser quien eras, pero todavía estás descubriendo quién quieres ser ahora.",
                animation: "animate-float-medium",
              },
              {
                text: "Te gustaría aprender a utilizar la IA de una manera sencilla, práctica y consciente.",
                animation: "animate-float-reverse",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`glass-card glass-card-hover p-6 rounded-2xl flex items-start gap-4 border border-[#D8B89C]/35 relative group ${item.animation}`}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EBF0E9] text-[#6B7A65] flex items-center justify-center border border-[#6B7A65]/20 group-hover:bg-[#6B7A65] group-hover:text-white transition-colors duration-300">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <p className="text-base sm:text-lg text-[#3A4235] font-medium leading-snug pt-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            SECCIÓN 3: MÓDULOS (Lo que descubrirás)
           ========================================== */}
        <section className="py-16 sm:py-24 relative">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#6B7A65] uppercase mb-2 block">
              CONTENIDO DEL WEBINAR
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#3A4235]">
              Lo que descubrirás
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#5C6756] max-w-2xl mx-auto">
              Cuatro pilares para transformar la sobrecarga mental en serenidad y enfoque.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Módulo 1 */}
            <div className="glass-card glass-card-hover p-8 rounded-3xl relative overflow-hidden border border-[#D8B89C]/40 group">
              <div className="w-14 h-14 rounded-2xl bg-[#EBF0E9] text-[#6B7A65] flex items-center justify-center mb-6 shadow-inner">
                <Brain className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#3A4235] mb-3 flex items-center gap-2">
                <span>🌿 CLARIDAD</span>
              </h3>
              <p className="text-base text-[#5C6756] leading-relaxed">
                Cómo comenzar a ordenar lo que estás pensando y reconocer qué necesita tu atención.
              </p>
            </div>

            {/* Módulo 2 */}
            <div className="glass-card glass-card-hover p-8 rounded-3xl relative overflow-hidden border border-[#D8B89C]/40 group">
              <div className="w-14 h-14 rounded-2xl bg-[#EBF0E9] text-[#6B7A65] flex items-center justify-center mb-6 shadow-inner">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#3A4235] mb-3 flex items-center gap-2">
                <span>🌿 PODER PERSONAL</span>
              </h3>
              <p className="text-base text-[#5C6756] leading-relaxed">
                Cómo volver a conectar con tu capacidad de elegir y tomar decisiones desde quien eres hoy.
              </p>
            </div>

            {/* Módulo 3 */}
            <div className="glass-card glass-card-hover p-8 rounded-3xl relative overflow-hidden border border-[#D8B89C]/40 group">
              <div className="w-14 h-14 rounded-2xl bg-[#EBF0E9] text-[#6B7A65] flex items-center justify-center mb-6 shadow-inner">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#3A4235] mb-3 flex items-center gap-2">
                <span>🌿 DIRECCIÓN</span>
              </h3>
              <p className="text-base text-[#5C6756] leading-relaxed">
                Cómo comenzar a explorar lo que quieres construir en esta nueva etapa.
              </p>
            </div>

            {/* Módulo 4 */}
            <div className="glass-card glass-card-hover p-8 rounded-3xl relative overflow-hidden border border-[#6B7A65]/40 md:col-span-1 lg:col-span-1 bg-gradient-to-br from-white/90 to-[#EBF0E9]/60 group">
              <div className="w-14 h-14 rounded-2xl bg-[#6B7A65] text-white flex items-center justify-center mb-6 shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#3A4235] mb-3 flex items-center gap-2">
                <span>🌿 IA COMO COPILOTO CONSCIENTE</span>
              </h3>
              <p className="text-base text-[#5C6756] leading-relaxed mb-4">
                Cómo utilizar la Inteligencia Artificial para ayudarte a pensar, ordenar y explorar posibilidades sin entregarle el control de tus decisiones.
              </p>
              <div className="pt-3 border-t border-[#6B7A65]/20 flex items-center gap-3 text-sm font-semibold text-[#6B7A65]">
                <span>Tú decides.</span>
                <span>•</span>
                <span>Tú eliges.</span>
                <span>•</span>
                <span>Tú conduces.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECCIÓN 4: TRANQUILIDAD (No necesitas saber de IA)
           ========================================== */}
        <section className="py-16 sm:py-20">
          <div className="glass-card-accent rounded-3xl p-8 sm:p-12 border border-[#D8B89C]/50 shadow-xl relative overflow-hidden max-w-4xl mx-auto">
            {/* Soft decorative background leaf */}
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10 text-[#6B7A65] pointer-events-none">
              <ShieldCheck size={200} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-full bg-[#EBF0E9] text-[#6B7A65] flex items-center justify-center flex-shrink-0 border-2 border-[#D8B89C]/50 shadow-md">
                <ShieldCheck className="w-10 h-10" />
              </div>

              <div className="space-y-4 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-md bg-[#6B7A65]/10 text-[#6B7A65] text-xs font-bold tracking-wider uppercase">
                  ESPACIO SEGURO Y AMIGABLE
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#3A4235]">
                  No necesitas saber de Inteligencia Artificial
                </h3>
                <p className="text-base sm:text-lg text-[#5C6756] leading-relaxed">
                  No necesitas programación. No necesitas conocimientos técnicos. Ni siquiera necesitas haber utilizado IA anteriormente. Comenzaremos desde cero. Si sabes escribir un mensaje, puedes comenzar a conversar con una IA.
                </p>

                {/* Featured Quote */}
                <div className="pt-4 border-t border-[#D8B89C]/40">
                  <blockquote className="italic text-lg sm:text-xl font-serif text-[#6B7A65] font-medium leading-snug">
                    “No preguntarle solamente: <span className="underline decoration-[#D8B89C] decoration-2">‘¿Qué debo hacer?’</span> Sino aprender a decirle: <span className="font-semibold text-[#3A4235]">‘Ayúdame a pensar.’</span>”
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECCIÓN 5: SOBRE MÍ (💛 Hola, soy MaryCarmen)
           ========================================== */}
        <section className="py-16 sm:py-24">
          <div className="glass-card rounded-3xl p-8 sm:p-14 border border-[#D8B89C]/40 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Photo Frame Column */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative group animate-float-slow">
                  {/* Decorative glowing backdrops */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#6B7A65] to-[#D8B89C] rounded-3xl rotate-3 blur-md opacity-40 group-hover:rotate-6 transition-transform" />
                  <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src="/Mary-Carmen.jpeg"
                      alt="MaryCarmen Domínguez - Facilitadora Volver a Ti"
                      fill
                      className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <h4 className="font-serif font-bold text-xl text-[#3A4235]">
                    MaryCarmen Domínguez
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B7A65] font-medium tracking-wide">
                    Educadora & Especialista en Tecnología
                  </p>
                </div>
              </div>

              {/* Story Copy Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F1EA] text-[#B38E6E] text-xs font-bold tracking-wider uppercase">
                  <span>💛</span> SOBRE MÍ
                </div>

                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#3A4235] leading-tight">
                  Hola, soy MaryCarmen Domínguez
                </h3>

                <p className="text-base sm:text-lg text-[#3A4235] font-medium leading-relaxed">
                  Soy educadora, especialista en tecnología y una mujer que también tuvo que reconstruirse cuando la vida cambió.
                </p>

                <div className="space-y-4 text-base text-[#5C6756] leading-relaxed">
                  <p>
                    Hace 11 años perdí a mi esposo. Durante mucho tiempo pensé que reconstruirme significaba volver a ser quien era antes. Hasta que comprendí que no tenía que volver atrás. Tenía que descubrir quién quería llegar a ser ahora.
                  </p>
                  <p>
                    Mi cambio comenzó con una pérdida. El tuyo puede haber comenzado de otra manera. Y de esa experiencia, unida a mi trabajo con la tecnología, nace <strong className="text-[#3A4235] font-semibold">Volver a Ti</strong>.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-2 text-xs font-medium text-[#6B7A65]">
                  <span className="px-3 py-1.5 rounded-lg bg-[#EBF0E9] border border-[#6B7A65]/20">
                    🌿 Reconstrucción Consciente
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#EBF0E9] border border-[#6B7A65]/20">
                    💻 Tecnología Humana
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#EBF0E9] border border-[#6B7A65]/20">
                    ✨ Copiloto de IA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECCIÓN 6: FORMULARIO DE REGISTRO
           ========================================== */}
        <section id="registro" className="py-16 sm:py-24 scroll-mt-12">
          {/* Closing Text Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#6B7A65] uppercase mb-3 block">
              RESERVA TU LUGAR GRATIS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#3A4235] mb-6 leading-tight">
              Tu historia todavía se está escribiendo
            </h2>
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[#D8B89C]/40 text-base sm:text-xl text-[#5C6756] leading-relaxed font-serif italic">
              “Tal vez no necesitas volver a ser quien eras. Tal vez necesitas descubrir quién quieres ser ahora. Tu vida puede haber cambiado. Pero tu historia todavía se está escribiendo. 🌿 <strong className="text-[#3A4235] not-italic font-bold">Volver a Ti</strong> puede ser el comienzo de tu nueva etapa.”
            </div>
          </div>

          {/* Form Card */}
          <div className="max-w-2xl mx-auto glass-card rounded-3xl p-6 sm:p-12 border-2 border-[#D8B89C]/50 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#6B7A65] via-[#D8B89C] to-[#6B7A65]" />

            {isSubmitted ? (
              <div className="py-12 text-center space-y-6 animate-fadeIn">
                <div className="w-20 h-20 bg-[#EBF0E9] text-[#6B7A65] rounded-full flex items-center justify-center mx-auto border-4 border-[#6B7A65]/30 shadow-lg animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-[#3A4235]">
                  ¡Lugar Reservado con Éxito!
                </h3>
                <p className="text-lg text-[#5C6756] max-w-lg mx-auto">
                  Gracias por dar este paso para <strong className="text-[#3A4235]">Volver a Ti</strong>. Recibirás por correo la confirmación y las instrucciones para acceder al webinar del 29 de Septiembre.
                </p>
                <div className="p-4 rounded-xl bg-[#F7F1EA] text-[#B38E6E] text-sm font-medium">
                  📅 29 de Septiembre | ⏰ 6:00 PM Hora CDMX | 💻 Online
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#6B7A65] underline hover:text-[#3A4235] pt-4 cursor-pointer"
                >
                  Registrar otro participante
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#3A4235] mb-2">
                    Reserva tu lugar gratis
                  </h3>
                  <p className="text-sm sm:text-base text-[#5C6756]">
                    Completa tus datos para asegurar tu acceso al webinar online.
                  </p>
                </div>

                {/* Error Banner */}
                {submitError && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm font-medium border border-red-200">
                    {submitError}
                  </div>
                )}

                {/* Campo 1: Nombre */}
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-semibold text-[#3A4235] mb-2 flex items-center gap-1.5"
                  >
                    <User className="w-4 h-4 text-[#6B7A65]" />
                    <span>Nombre completo *</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Ej. María Carmen"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/90 border border-[#D8B89C]/50 text-[#3A4235] placeholder-[#5C6756]/50 focus:outline-none focus:ring-2 focus:ring-[#6B7A65] focus:border-transparent transition-all shadow-sm"
                  />
                </div>

                {/* Campo 2: Correo electrónico */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#3A4235] mb-2 flex items-center gap-1.5"
                  >
                    <Mail className="w-4 h-4 text-[#6B7A65]" />
                    <span>Correo electrónico *</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/90 border border-[#D8B89C]/50 text-[#3A4235] placeholder-[#5C6756]/50 focus:outline-none focus:ring-2 focus:ring-[#6B7A65] focus:border-transparent transition-all shadow-sm"
                  />
                </div>

                {/* Campo 3: Selección de Momento */}
                <div>
                  <label className="block text-sm font-semibold text-[#3A4235] mb-2 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-[#6B7A65]" />
                    <span>¿Qué describe mejor el momento que estás viviendo?</span>
                  </label>
                  <div className="space-y-2.5 pt-1">
                    {opcionesMomento.map((opcion, idx) => {
                      const isSelected = formData.momento === opcion;
                      const isOtro = opcion === "Otro";

                      return (
                        <div key={idx} className="flex flex-col gap-2">
                          <label
                            className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#EBF0E9] border-[#6B7A65] text-[#3A4235] font-semibold shadow-sm"
                                : "bg-white/60 border-[#D8B89C]/30 text-[#5C6756] hover:bg-white"
                            }`}
                          >
                            <input
                              type="radio"
                              name="momento"
                              value={opcion}
                              checked={isSelected}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-[#6B7A65] focus:ring-[#6B7A65] accent-[#6B7A65]"
                            />
                            <span className="text-xs sm:text-sm">{opcion}</span>
                          </label>

                          {/* Si elige 'Otro', se despliega de inmediato la caja para escribir */}
                          {isOtro && isSelected && (
                            <div className="mt-1 pl-2 pr-1 py-1 animate-fadeIn">
                              <label
                                htmlFor="otroMotivo"
                                className="block text-xs font-semibold text-[#6B7A65] mb-1.5"
                              >
                                Por favor especifica tu motivo o situación: *
                              </label>
                              <input
                                type="text"
                                id="otroMotivo"
                                name="otroMotivo"
                                required
                                autoFocus
                                value={formData.otroMotivo}
                                onChange={handleInputChange}
                                placeholder="Escribe aquí tu motivo o situación..."
                                className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-[#6B7A65] text-[#3A4235] text-sm placeholder-[#5C6756]/60 focus:outline-none focus:ring-2 focus:ring-[#6B7A65] shadow-md transition-all"
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Checkbox Aceptación */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="acepto"
                      required
                      checked={formData.acepto}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-[#6B7A65] rounded border-[#D8B89C] focus:ring-[#6B7A65] accent-[#6B7A65]"
                    />
                    <span className="text-xs sm:text-sm text-[#5C6756] leading-snug">
                      Acepto recibir por correo la información necesaria para participar en el webinar. *
                    </span>
                  </label>
                </div>

                {/* Botón de Envío */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 rounded-full bg-[#6B7A65] text-white font-bold text-base sm:text-lg shadow-xl hover:bg-[#546250] hover:shadow-2xl transition-all duration-300 disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>REGISTRO GRATIS VOLVER A TI</span>
                    </>
                  )}
                </button>

                {/* Nota final bajo el botón */}
                <p className="text-center text-xs text-[#5C6756] pt-2">
                  Recibirás por correo la confirmación y las instrucciones para participar.
                </p>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* ==========================================
          BOTÓN FLOTANTE DE WHATSAPP
         ========================================== */}
      <a
        href="https://chat.whatsapp.com/Fcr6EpMMAByFnd3rBYhG97?s=cl&p=a&mlu=4&ilr=4"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Unirse al grupo de WhatsApp"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 animate-pulse-subtle"
      >
        <MessageCircle className="w-6 h-6 fill-current text-white stroke-[1.5]" />
        <span className="hidden sm:inline-block font-semibold text-sm tracking-wide">
          Unirme al Grupo de WhatsApp
        </span>
      </a>

      {/* Footer Minimalista */}
      <footer className="relative z-10 border-t border-[#D8B89C]/30 bg-[#F6F4ED] py-8 text-center text-xs text-[#5C6756]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-serif text-sm font-semibold text-[#3A4235]">
            <span>🌿 Volver a Ti</span>
            <span className="text-[#D8B89C]">|</span>
            <span className="font-sans font-normal text-xs text-[#5C6756]">
              Webinar por MaryCarmen Domínguez
            </span>
          </div>
          <p>© 2026 Volver a Ti. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

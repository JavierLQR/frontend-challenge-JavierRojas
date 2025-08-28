const LogoSection = () => {
  return (
    <div className="relative flex items-center justify-center rounded-2xl overflow-hidden px-4 py-10 sm:px-6">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-blue-100" />

      {/* Grid encima */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Texto principal responsivo */}
      <h1
        className="
          relative 
          text-5xl       /* mobile */
          sm:text-7xl    /* ≥640px */
          md:text-9xl    /* ≥768px */
          lg:text-[160px] /* ≥1024px */
          xl:text-[200px] /* ≥1280px */
          font-extrabold 
          text-transparent 
          bg-clip-text 
          bg-gradient-to-b 
          from-black 
          to-black/80 
          tracking-tight 
          text-center
        "
      >
        SAASWIFTIE
      </h1>
    </div>
  )
}
export default LogoSection

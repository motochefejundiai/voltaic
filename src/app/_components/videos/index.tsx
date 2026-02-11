function Videos() {
  const videos = [
    {
      src: '/videos/hero-1.mp4',
      type: 'video/mp4',
      alt: 'Descrição do vídeo da fachada',
      className: 'hidden md:block'
    },
    {
      src: '/videos/hero-2.mp4',
      type: 'video/mp4',
      alt: 'Descrição do vídeo da fachada mobile',
      className: 'md:hidden'
    }
  ]

  return (
    <section className="relative flex flex-wrap h-[75vh] z-[2]">
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      {videos.map((video, index) => (
        <div key={index} className={`relative w-full h-full ${video.className}`}>
          <video
            preload="metadata"
            muted
            loop
            autoPlay
            playsInline
            className="h-full w-full object-cover object-center"
            aria-label={video.alt}
          >
            <source src={video.src} />O seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      ))}
    </section>
  )
}

export default Videos

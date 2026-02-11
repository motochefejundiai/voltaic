import Image from 'next/image'

type LandscapeImage = {
  src: string
  alt?: string
}

const IMAGES: LandscapeImage[] = [
  { src: '/landscapes/0.jpg', alt: 'Image 1' },
  { src: '/landscapes/1.jpg', alt: 'Image 2' },
  { src: '/landscapes/2.jpg', alt: 'Image 3' },
  { src: '/landscapes/3.jpg', alt: 'Image 4' },
  { src: '/landscapes/4.jpg', alt: 'Image 5' }
]

function LandscapeImageItem({ image }: { image: LandscapeImage }) {
  return (
    <div className="relative w-full aspect-[3/4]">
      <Image
        src={image.src}
        alt={image.alt ?? ''}
        fill
        className="object-cover rounded-xl"
        sizes="
          (min-width: 1024px) 20vw,
          33vw
        "
      />
    </div>
  )
}

export default function Landscapes() {
  return (
    <section className="p-10 z-[1] border-t-4 border-primary relative flex items-center justify-center bg-foreground">
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="flex justify-center mb-4 md:hidden">
          <div className="w-1/2">
            {IMAGES.slice(0, 1).map((img, i) => (
              <LandscapeImageItem key={i} image={img} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {IMAGES.slice(1, 5).map((img, i) => (
            <LandscapeImageItem key={i} image={img} />
          ))}
        </div>
        <div className="hidden md:grid grid-cols-5 gap-5">
          {IMAGES.map((img, i) => (
            <LandscapeImageItem key={i} image={img} />
          ))}
        </div>
      </div>
    </section>
  )
}

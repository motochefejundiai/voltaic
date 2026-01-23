'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { products } from '@/constants/scooters'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle
} from '@/components/ui/dialog'
import Carousel from './carousel'
import { Product } from '@/types/products'
import Link from 'next/link'
import { whatsapp } from '@/constants/links'
import WhatsApp from '@/components/ui/whatsapp'

function Models() {
  const [selectedModel, setSelectedModel] = useState<Product | null>(null)

  return (
    <section
      id="modelos"
      className="p-10 z-[1] bg-gradient-to-b from-background to-foreground relative"
    >
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-6xl font-extrabold text-primary my-12 text-center">
          Modelos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div
              key={product.model}
              className="relative shadow-custom rounded-xl bg-card overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 border-accent"
            >
              {!product.needCnh && (
                <div className="text-center absolute top-0 right-0 bg-primary text-foreground text-md font-bold px-4 py-2 rotate-[45deg] translate-x-[70px] translate-y-[15px] w-[230px] z-20 shadow-custom">
                  Não precisa
                  <br />
                  de CNH
                </div>
              )}
              <div
                onClick={() => setSelectedModel(product)}
                className="cursor-pointer absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 via-black/30 to-transparent text-foreground text-4xl font-bold px-6 pt-4 pb-14 z-10 flex items-end hover:from-primary/20 transition-all duration-300"
              >
                {product.name}
              </div>
              <Image
                width={400}
                height={300}
                alt={`Modelo ${product.name}`}
                className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                src={product.cover}
              />
              <Link
                target="_blank"
                href={whatsapp.main}
                className="absolute w-full bottom-0 left-0 z-50"
              >
                <Button className="bg-[#25D366] hover:bg-[#25D366]/90 w-full rounded-none text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg">
                  <Image
                    height={24}
                    width={24}
                    alt="WhatsApp"
                    src="/logos/whatsapp.png"
                  />
                  Compre agora
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {selectedModel && (
        <Dialog open={!!selectedModel} onOpenChange={() => setSelectedModel(null)}>
          <DialogContent className="h-[100dvh] max-w-screen rounded-none flex flex-col lg:flex-row gap-0 p-0 bg-foreground border-0">
            <WhatsApp />
            <div className="lg:w-1/2 h-1/2 md:h-full flex justify-center items-center">
              <Carousel
                model={selectedModel.model}
                numberOfImages={selectedModel.numberOfImages}
              />
            </div>
            <div className="lg:w-1/2 h-1/2 md:h-full flex flex-col space-y-4 overflow-auto px-4 py-2">
              <DialogTitle className="text-4xl font-bold text-input border-b border-primary text-center md:text-left pb-4 pt-2">
                Especificações {selectedModel.name}
              </DialogTitle>
              <div className="space-y-2 px-2 lg:px-0">
                {selectedModel.descriptions.map((description, index) => (
                  <p key={index} className="text-xl text-input">
                    - {description}
                  </p>
                ))}
              </div>
              <DialogDescription></DialogDescription>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}

export default Models

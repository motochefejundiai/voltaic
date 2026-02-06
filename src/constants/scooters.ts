import { Product } from '@/types/products'

export const scooterBenefits = [
  {
    label: 'Economia diária',
    value: 'Reduza gastos com combustível e manutenção.',
    icon: 'PiggyBank'
  },
  {
    label: 'Sustentabilidade',
    value: 'Zero emissões de poluentes, ajudando o meio ambiente.',
    icon: 'Leaf'
  },
  {
    label: 'Autonomia ampliada',
    value: 'Baterias de longa duração para mais liberdade.',
    icon: 'BatteryCharging'
  },
  {
    label: 'Facilidade de recarga',
    value: 'Recarregue em qualquer tomada comum.',
    icon: 'Plug'
  },
  {
    label: 'Baixo custo de manutenção',
    value: 'Sem necessidade de óleo ou peças caras.',
    icon: 'Wrench'
  },
  {
    label: 'Condução silenciosa',
    value: 'Desfrute de uma pilotagem sem ruídos.',
    icon: 'Volume2'
  },
  {
    label: 'Maior agilidade no trânsito',
    value: 'Escape do congestionamento com facilidade.',
    icon: 'Move'
  },
  {
    label: 'Facilidade de estacionamento',
    value: 'Encontre vagas com mais rapidez.',
    icon: 'SquareParking'
  },
  {
    label: 'Desempenho eficiente',
    value: 'Motores potentes para o dia a dia.',
    icon: 'Gauge'
  }
  // {
  //   label: 'Menos burocracia',
  //   value: 'Modelos que dispensam habilitação em algumas categorias.',
  //   icon: 'ClipboardCheck'
  // },
  // {
  //   label: 'Garantia estendida',
  //   value: 'Segurança e confiabilidade na sua compra.',
  //   icon: 'ShieldCheck'
  // },
  // {
  //   label: 'Design moderno e inovador',
  //   value: 'Estilo e tecnologia em um só veículo.',
  //   icon: 'Sparkles'
  // },
  // {
  //   label: 'Conforto na pilotagem',
  //   value: 'Suspensão eficiente e assento ergonômico.',
  //   icon: 'Armchair'
  // },
  // {
  //   label: 'Tecnologia integrada',
  //   value: 'Painel digital, iluminação LED e conectividade.',
  //   icon: 'Cpu'
  // },
  // {
  //   label: 'Atendimento premium',
  //   value: 'Suporte especializado para garantir a melhor experiência.',
  //   icon: 'Headset'
  // }
] as const

export const products: Product[] = [
  {
    model: 'x12',
    name: 'X12',
    cover: '/models/x12/0.jpg',
    needCnh: false,
    numberOfImages: 4,
    descriptions: [
      'Velocidade Máxima: Até 32 Km/H',
      'Autonomia: de 50Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água IP65*',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 6 horas',
      'Alarme com bloqueio e trava',
      'Carregador Smart bivolt (desliga quando a carga está completa)',
      'Painel LCD (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos',
      'Compartimento para bateria Extra, dobrando autonomia',
      'Freio a disco hidráulico dianteiro e traseiro',
      'Banco duplo',
      'Farol Led, alarme, setas, buzina',
      'Comporta 200 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Porta objetos embaixo do banco'
    ]
  },
  {
    model: 'jet',
    name: 'Jet',
    cover: '/models/jet/0.jpg',
    needCnh: false,
    numberOfImages: 2,
    descriptions: [
      'Velocidade Máxima: Até 32 Km/H',
      'Autonomia: de 60Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Alarme com bloqueio e trava',
      'Carregador bivolt',
      'Painel LCD (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos',
      'Banco Duplo com encosto',
      'Farol Led, alarme, setas, buzina',
      'Comporta 180 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Carregador USB',
      'Freio a disco hidráulico',
      'Pneu New City (Sem câmara)',
      'Porta objetos embaixo do banco + Bagageiro',
      'Compartimento para bateria Extra, dobrando autonomia'
    ]
  },
  {
    model: 'soma',
    name: 'Soma',
    cover: '/models/soma/0.jpg',
    needCnh: false,
    numberOfImages: 1,
    descriptions: [
      'Velocidade Máxima: Até 32 Km/H',
      'Autonomia: de 60Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Tecnologia NFC - Chave key less (liga a Scooter sem precisar da chave)',
      'Alarme com bloqueio e trava',
      'Carregador bivolt',
      'Painel LCD (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos',
      'Banco Duplo',
      'Farol Led, alarme, setas, buzina',
      'Comporta 150 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      ' Carregador USB',
      'Freio a disco hidráulico frontal',
      ' Porta objetos embaixo do banco + Bagageiro'
    ]
  },
  {
    model: 'ret',
    name: 'Ret',
    cover: '/models/ret/0.jpg',
    needCnh: false,
    numberOfImages: 1,
    descriptions: [
      'Velocidade Máxima: Até 32 Km/H',
      'Autonomia: de 60Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água',
      'Banco do garupa com encosto',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Alarme com bloqueio e trava',
      'Carregador bivolt',
      'Painel digital (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Farol Led, alarme, setas, buzina',
      'Comporta 150 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Porta objetos embaixo do banco e na lateral'
    ]
  },
  {
    model: 'mia',
    name: 'Mia',
    cover: '/models/mia/0.jpg',
    needCnh: false,
    numberOfImages: 2,
    descriptions: [
      'Velocidade Máxima: Até 32 Km/H',
      'Autonomia: de 65Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Alarme com bloqueio e trava',
      'Carregador bivolt',
      'Painel digital (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos',
      'Banco Duplo com encosto',
      'Farol Led, alarme, setas, buzina',
      'Comporta 180 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Carregador USB',
      'Porta objetos embaixo do banco e na lateral',
      'Pneu New City (Sem câmara)',
      'Compartimento para bateria Extra, dobrando autonomia'
    ]
  },
  {
    model: 'x11',
    name: 'X11 - MINI',
    cover: '/models/x11/0.jpg',
    needCnh: false,
    numberOfImages: 1,
    descriptions: [
      'Velocidade Máxima: Até 32 Km/H',
      'Autonomia: de 50Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água IP65*',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 6 horas',
      'Alarme com bloqueio e trava',
      'Carregador Smart bivolt (desliga quando a carga está completa)',
      'Painel LCD (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos',
      'Freio a disco hidráulico dianteiro e traseiro',
      'Banco duplo',
      'Farol Led, alarme, setas, buzina',
      'Comporta 200 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Porta objetos embaixo do banco'
    ]
  },
  {
    model: 'baw',
    name: 'BAW',
    cover: '/models/baw/0.jpg',
    needCnh: false,
    numberOfImages: 3,
    descriptions: [
      'Velocidade Máxima: Até 32 Km/H',
      'Autonomia: Até 55Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Alarme embutido',
      'Carregador bivolt',
      'Painel LCD (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos',
      'Banco Duplo com encosto',
      'Farol Led, alarme, setas, buzina',
      'Comporta 150 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Entrada USB e chave NFC',
      'Freio a disco hidráulico',
      'Pneu New City (Sem câmara)',
      'Porta objetos embaixo do banco + Bagageiro'
    ]
  },
  {
    model: 'chopper',
    name: 'Chopper',
    cover: '/models/chopper/0.jpg',
    needCnh: true,
    numberOfImages: 3,
    descriptions: [
      'Velocidade Máxima: Até 75 Km/H',
      'Autonomia: Até 60Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Alarme com bloqueio e trava',
      'Carregador bivolt: 110/220V',
      'Painel LCD (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos',
      'Banco do garupa com encosto',
      'Farol Led, alarme, setas, buzina',
      'Comporta 170 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Carregador USB',
      'Cesta frontal',
      'Precisa de CNH',
      'Freio: Disco'
    ]
  },
  {
    model: 'mia-tri',
    name: 'Mia Tri',
    cover: '/models/mia-tri/0.jpg',
    needCnh: false,
    numberOfImages: 1,
    descriptions: [
      'Velocidade Máxima: Até 32 Km/H',
      'Autonomia: de 40Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Alarme com bloqueio e trava',
      'Carregador bivolt',
      'Painel digital (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Banco Duplo com encosto',
      'Farol Led, alarme, setas, buzina',
      'Comporta 150 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Porta objetos embaixo do banco e na lateral',
      'Pneu New City (Sem câmara)'
    ]
  },
  {
    model: 'tri',
    name: 'Tri 3 lugares',
    cover: '/models/tri/0.jpg',
    needCnh: false,
    numberOfImages: 2,
    descriptions: [
      'Velocidade Máxima: Até 32 Km/H',
      'Cadeirinha de criança',
      'Possui baú',
      'Autonomia: de 55Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Alarme com bloqueio e trava',
      'Carregador bivolt',
      'Painel LCD (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos',
      'Leva até 3 pessoas (Cadeirinha para criança)',
      'Farol Led, alarme, setas, buzina',
      'Comporta 180 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Cesta frontal e traseira',
      'Marcha Ré',
      'Carregador USB'
    ]
  }
]

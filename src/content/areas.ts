import type { AreaCopy } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/config";
import type { AreaId } from "@/lib/i18n/routing";
import { CONTENT_UPDATED_AT } from "@/lib/content/site";

const u = CONTENT_UPDATED_AT;

export const areas: Record<AreaId, Record<Locale, AreaCopy>> = {
  alicante: {
    en: {
      id: "alicante",
      locale: "en",
      name: "Alicante",
      seoTitle: "Renovations and solar panels in Alicante | Casa Expert",
      description:
        "Casa Expert works in Alicante city and nearby districts on renovations, building services and rooftop solar, with a written scope before works start.",
      h1: "Renovations and solar installation in Alicante",
      summary:
        "Service coverage for Alicante and adjoining neighbourhoods, combining interior works with rooftop PV where the building and comunidad allow it.",
      answer:
        "In Alicante the usual constraints are parking and access for materials, older electrical boards in apartments, and comunidad rules for roof plant. Typical south-facing rooftop yield here is around 1,660 kWh per kWp per year after typical system losses.",
      updatedAt: u,
      travelNote: "Site visits in Alicante are scheduled on working days. Same-week surveys depend on access to the property and roof.",
      localNotes: [
        "Apartment blocks often need a written comunidad position before roof anchors.",
        "Old town access can require smaller deliveries and a longer project schedule.",
        "Sea-front salt exposure is treated as a materials and cleaning factor.",
      ],
      faqs: [
        {
          q: "Which services do you offer in Alicante?",
          a: "Full home renovation, solar installation, bathrooms, kitchens, electrical and plumbing, air conditioning, and post-build cleaning.",
        },
        {
          q: "How soon can you survey in Alicante?",
          a: "Usually within 5–10 working days of a confirmed request, depending on roof and apartment access.",
        },
        {
          q: "Do you work only in Alicante city?",
          a: "Alicante is a core area together with Torrevieja and Orihuela Costa. Other Costa Blanca towns are booked when travel and the job make sense.",
        },
        {
          q: "Can you combine renovation and solar in Alicante?",
          a: "Yes, when the building allows roof works. The quotation sequences board upgrades, roof access and the array.",
        },
      ],
      relatedServiceIds: ["solar-panels", "home-renovation", "engineering"],
      relatedProjectIds: ["alicante-apartment-renovation"],
    },
    es: {
      id: "alicante",
      locale: "es",
      name: "Alicante",
      seoTitle: "Reformas y placas solares en Alicante | Casa Expert",
      description:
        "Casa Expert trabaja en Alicante ciudad: reformas, instalaciones y fotovoltaica en cubierta, con alcance escrito.",
      h1: "Reformas e instalación solar en Alicante",
      summary:
        "Cobertura en Alicante y barrios próximos, combinando obra interior y FV cuando el edificio y la comunidad lo permiten.",
      answer:
        "En Alicante suelen mandar el acceso de materiales, cuadros antiguos en pisos y las normas de comunidad para cubierta. La producción típica a sur ronda 1.660 kWh por kWp al año tras pérdidas habituales.",
      updatedAt: u,
      travelNote: "Las visitas en Alicante se agendan en días laborables. La misma semana depende del acceso a vivienda y cubierta.",
      localNotes: [
        "Los bloques suelen exigir posición escrita de la comunidad antes de anclajes.",
        "El casco histórico puede imponer entregas menores y un calendario más largo.",
        "La sal en primera línea es un factor de materiales y limpieza.",
      ],
      faqs: [
        {
          q: "¿Qué servicios ofrecen en Alicante?",
          a: "Reforma integral, instalación solar, baños, cocinas, electricidad, fontanería, aire acondicionado y limpieza de entrega.",
        },
        {
          q: "¿En cuánto pueden visitar en Alicante?",
          a: "Habitualmente en 5–10 días laborables tras confirmar la solicitud, según el acceso a cubierta o al piso.",
        },
        {
          q: "¿Solo Alicante ciudad?",
          a: "Alicante es zona núcleo junto a Torrevieja y Orihuela Costa. Otros municipios se agendan cuando el desplazamiento y el trabajo encajan.",
        },
        {
          q: "¿Se pueden combinar reforma y solar?",
          a: "Sí, si el edificio permite obra en cubierta. El presupuesto ordena cuadro, acceso y el campo de paneles.",
        },
      ],
      relatedServiceIds: ["solar-panels", "home-renovation", "engineering"],
      relatedProjectIds: ["alicante-apartment-renovation"],
    },
    ru: {
      id: "alicante",
      locale: "ru",
      name: "Аликанте",
      seoTitle: "Ремонт и солнечные панели в Аликанте | Casa Expert",
      description:
        "Casa Expert в городе Аликанте: ремонт, инженерия и кровельная СЭС с письменным объёмом.",
      h1: "Ремонт и солнечные панели в Аликанте",
      summary:
        "Город Аликанте и соседние районы: внутренние работы и ФЭ, если здание и comunidad позволяют.",
      answer:
        "В Аликанте типичны доступ для материалов, старые щиты в квартирах и правила comunidad для крыши. Типичная выработка на юг — около 1 660 кВт·ч на кВтp в год после обычных потерь системы.",
      updatedAt: u,
      travelNote: "Осмотры в Аликанте в рабочие дни. Выезд на этой неделе зависит от доступа в жильё и на крышу.",
      localNotes: [
        "Многоквартирные дома часто требуют письменной позиции comunidad до анкеров.",
        "Старый город — меньшие поставки и более длинный график.",
        "Соль на первой линии — фактор материалов и уборки.",
      ],
      faqs: [
        {
          q: "Какие услуги в Аликанте?",
          a: "Ремонт дома, СЭС, ванные, кухни, электрика, сантехника, кондиционеры и уборка после работ.",
        },
        {
          q: "Как быстро выезд в Аликанте?",
          a: "Обычно за 5–10 рабочих дней после подтверждения заявки — если есть доступ на крышу или в квартиру.",
        },
        {
          q: "Только город Аликанте?",
          a: "Аликанте — ядро вместе с Торревьехой и Ориуэлой Коста. Другие города Коста-Бланки — если логистика и объём имеют смысл.",
        },
        {
          q: "Можно совместить ремонт и СЭС?",
          a: "Да, если здание позволяет работы на крыше. В смете выстраиваются щит, доступ и массив панелей.",
        },
      ],
      relatedServiceIds: ["solar-panels", "home-renovation", "engineering"],
      relatedProjectIds: ["alicante-apartment-renovation"],
    },
  },
  torrevieja: {
    en: {
      id: "torrevieja",
      locale: "en",
      name: "Torrevieja",
      seoTitle: "Solar panels and renovations in Torrevieja | Casa Expert",
      description:
        "Rooftop solar, villa and apartment renovation in Torrevieja, with written scopes and site surveys grouped with Orihuela Costa.",
      h1: "Solar panels and renovations in Torrevieja",
      summary:
        "Villas with usable roof, apartments that need bathrooms and kitchens, and owners who may follow the job from abroad.",
      answer:
        "Torrevieja has among the strongest rooftop yields on this coast — around 1,720 kWh per kWp per year on a south plane after typical losses. A 5,000 kWh household still needs a roof survey: yield does not replace shading and board limits.",
      updatedAt: u,
      travelNote: "Torrevieja surveys are grouped with Orihuela Costa when possible.",
      localNotes: [
        "Many villas have mixed tile and flat-roof volumes — the quote should say which plane is used.",
        "Holiday-let units often need a defined shutdown window.",
        "Salt and wind exposure belong in the equipment and cleaning notes.",
      ],
      faqs: [
        {
          q: "Which services do you offer in Torrevieja?",
          a: "Solar installation, full renovation, bathrooms, kitchens, electrical and plumbing, air conditioning, and make-ready cleaning.",
        },
        {
          q: "How soon can you survey in Torrevieja?",
          a: "Usually within 5–10 working days, often on the same travel day as Orihuela Costa.",
        },
        {
          q: "Is Torrevieja better for solar than Alicante?",
          a: "Typical yield is slightly higher. Orientation, shade and how much you use on site still dominate the bill saving.",
        },
        {
          q: "Can you manage the job if I am not in Spain?",
          a: "Yes. You get one point of contact, a written scope and photo updates at agreed stages.",
        },
      ],
      relatedServiceIds: ["solar-panels", "home-renovation", "bathroom-renovation"],
      relatedProjectIds: ["torrevieja-villa-solar"],
    },
    es: {
      id: "torrevieja",
      locale: "es",
      name: "Torrevieja",
      seoTitle: "Placas solares y reformas en Torrevieja | Casa Expert",
      description:
        "Fotovoltaica, reforma de villas y pisos en Torrevieja. Alta productividad en la tabla 2026 y alcances documentados.",
      h1: "Placas solares y reformas en Torrevieja",
      summary:
        "Villas con cubierta útil, pisos que necesitan baños y cocina, y propietarios que pueden seguir la obra desde fuera.",
      answer:
        "Torrevieja tiene de las producciones más altas de esta costa: unos 1.720 kWh por kWp al año a sur tras pérdidas habituales. Un hogar de 5.000 kWh sigue necesitando visita: el recurso no sustituye sombras ni límites de cuadro.",
      updatedAt: u,
      travelNote: "Las visitas se agrupan con Orihuela Costa cuando se puede.",
      localNotes: [
        "Muchas villas mezclan teja y cubierta plana: la oferta debe decir qué plano se usa.",
        "El alquiler vacacional exige una ventana de parada.",
        "Sal y viento deben figurar en equipos y limpieza.",
      ],
      faqs: [
        {
          q: "¿Qué servicios ofrecen en Torrevieja?",
          a: "Instalación solar, reforma integral, baños, cocinas, electricidad, fontanería, aire acondicionado y limpieza de entrega.",
        },
        {
          q: "¿En cuánto pueden visitar?",
          a: "Habitualmente en 5–10 días laborables, a menudo el mismo día de viaje que Orihuela Costa.",
        },
        {
          q: "¿Torrevieja es mejor que Alicante para solar?",
          a: "La producción típica es algo más alta. Orientación, sombra y uso en casa siguen mandando en el ahorro.",
        },
        {
          q: "¿Pueden dirigir la obra si no estoy en España?",
          a: "Sí: un interlocutor, alcance por escrito y fotos en las etapas acordadas.",
        },
      ],
      relatedServiceIds: ["solar-panels", "home-renovation", "bathroom-renovation"],
      relatedProjectIds: ["torrevieja-villa-solar"],
    },
    ru: {
      id: "torrevieja",
      locale: "ru",
      name: "Торревьеха",
      seoTitle: "Солнечные панели и ремонт в Торревьехе | Casa Expert",
      description:
        "СЭС, ремонт вилл и квартир в Торревьехе. Высокая удельная выработка в таблице 2026 и письменный объём.",
      h1: "Солнечные панели и ремонт в Торревьехе",
      summary:
        "Виллы с полезной крышей, квартиры с ванными и кухнями, собственники, которые могут вести объект из-за границы.",
      answer:
        "У Торревьехи одна из сильных выработок на этом побережье — около 1 720 кВт·ч на кВтp в год на юг после обычных потерь. Дому на 5 000 кВт·ч всё равно нужен осмотр: ресурс не отменяет тень и щит.",
      updatedAt: u,
      travelNote: "Выезды группируем с Ориуэлой Коста, когда можно.",
      localNotes: [
        "У многих вилл смесь черепицы и плоской кровли — в смете должен быть выбран скат.",
        "Под аренду нужен интервал остановки работ.",
        "Соль и ветер — в примечаниях к оборудованию и уборке.",
      ],
      faqs: [
        {
          q: "Какие услуги в Торревьехе?",
          a: "СЭС, ремонт дома, ванные, кухни, электрика, сантехника, кондиционеры и уборка после работ.",
        },
        {
          q: "Как быстро выезд?",
          a: "Обычно за 5–10 рабочих дней, часто в один выезд с Ориуэлой Коста.",
        },
        {
          q: "Торревьеха лучше Аликанте для солнца?",
          a: "Типичная выработка чуть выше. Ориентация, тень и потребление на месте всё равно решают экономию.",
        },
        {
          q: "Можно вести объект, если меня нет в Испании?",
          a: "Да: один контакт, письменный объём и фото на согласованных этапах.",
        },
      ],
      relatedServiceIds: ["solar-panels", "home-renovation", "bathroom-renovation"],
      relatedProjectIds: ["torrevieja-villa-solar"],
    },
  },
  "orihuela-costa": {
    en: {
      id: "orihuela-costa",
      locale: "en",
      name: "Orihuela Costa",
      seoTitle: "Renovations and solar in Orihuela Costa | Casa Expert",
      description:
        "Casa Expert covers Orihuela Costa urbanisations for solar, kitchens, bathrooms and villa works, with access rules written into the programme.",
      h1: "Renovations and solar in Orihuela Costa",
      summary:
        "Urbanisations along Orihuela Costa: gated access and mixed roof types.",
      answer:
        "Typical south-facing yield is around 1,705 kWh per kWp per year. Many plots sit on urbanisation streets with unloading windows; that belongs in the project schedule, not as a surprise day-rate.",
      updatedAt: u,
      travelNote: "Orihuela Costa is grouped with Torrevieja. Gated urbanisations need access codes or a local contact on the survey day.",
      localNotes: [
        "Urbanisation rules may limit skip placement and working hours.",
        "Detached villas are the typical solar candidates; apartments need roof rights in writing.",
        "Kitchen and bathroom packages are common when the rest of the house is kept.",
      ],
      faqs: [
        {
          q: "Which services do you offer in Orihuela Costa?",
          a: "Solar, kitchens, bathrooms, villa renovation, electrical and plumbing, air conditioning, and post-build cleaning.",
        },
        {
          q: "How soon can you survey in Orihuela Costa?",
          a: "Usually within 5–10 working days, grouped with Torrevieja when access allows.",
        },
        {
          q: "Which urbanisations?",
          a: "We schedule by address. If the plot is in Orihuela Costa and accessible, we confirm after looking at the job.",
        },
        {
          q: "Do urbanisation rules affect the quote?",
          a: "Yes. Access hours, skip placement and roof rights are written into the scope after the survey.",
        },
      ],
      relatedServiceIds: ["solar-panels", "kitchen-renovation", "bathroom-renovation"],
      relatedProjectIds: ["orihuela-kitchen-bath"],
    },
    es: {
      id: "orihuela-costa",
      locale: "es",
      name: "Orihuela Costa",
      seoTitle: "Reformas y solar en Orihuela Costa | Casa Expert",
      description:
        "Urbanizaciones de Orihuela Costa: solar, cocinas, baños y villas, con reglas de acceso en el programa.",
      h1: "Reformas y energía solar en Orihuela Costa",
      summary:
        "Urbanizaciones de Orihuela Costa: accesos controlados y cubiertas mixtas.",
      answer:
        "La producción típica a sur ronda 1.705 kWh por kWp al año. Muchas calles de urbanización tienen ventanas de descarga: eso va en el calendario, no como extra sorpresa.",
      updatedAt: u,
      travelNote: "Se agrupa con Torrevieja. Las urbanizaciones cerradas necesitan código o contacto el día de la visita.",
      localNotes: [
        "Las normas de urbanización pueden limitar contenedores y horario.",
        "Las villas independientes son el candidato solar típico; los pisos necesitan derecho de cubierta por escrito.",
        "Cocina y baño son paquetes frecuentes si el resto de la casa se mantiene.",
      ],
      faqs: [
        {
          q: "¿Qué urbanizaciones?",
          a: "Programamos por dirección, no por nombres de mapa. Si el solar está en Orihuela Costa, pregunte: diremos sí o no según el trabajo, no con una micro-página inventada.",
        },
      ],
      relatedServiceIds: ["solar-panels", "kitchen-renovation", "bathroom-renovation"],
      relatedProjectIds: ["orihuela-kitchen-bath"],
    },
    ru: {
      id: "orihuela-costa",
      locale: "ru",
      name: "Ориуэла Коста",
      seoTitle: "Ремонт и солнечные панели в Ориуэле Коста | Casa Expert",
      description:
        "Урбанизации Orihuela Costa: СЭС, кухни, ванные и виллы, с правилами доступа в графике.",
      h1: "Ремонт и солнечные панели в Ориуэле Коста",
      summary:
        "Урбанизации Orihuela Costa: КПП, смешанные крыши и много собственников не на месте.",
      answer:
        "Удельная выработка около 1 705 кВт·ч/кВтp/год на юг. На многих улицах окна разгрузки: это в графике, не сюрпризом в день работ.",
      updatedAt: u,
      travelNote: "Группируем с Торревьехой. Закрытым урбанизациям нужны код или контакт в день осмотра.",
      localNotes: [
        "Правила урбанизации могут ограничить контейнер и часы.",
        "Отдельные виллы — типичные кандидаты на СЭС; квартирам нужно право на крышу письменно.",
        "Кухня и ванная часто пакетом, если остальной дом не трогаем.",
      ],
      faqs: [
        {
          q: "Какие урбанизации?",
          a: "Планируем по адресу, не по маркетинговым названиям. Если участок в Orihuela Costa — напишите: скажем да или нет по работе, без выдуманной микространицы.",
        },
      ],
      relatedServiceIds: ["solar-panels", "kitchen-renovation", "bathroom-renovation"],
      relatedProjectIds: ["orihuela-kitchen-bath"],
    },
  },
};

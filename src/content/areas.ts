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
        "Apartment and villa work in the city and nearby districts — renovation, building services and rooftop solar when the building allows it.",
      answer:
        "Casa Expert covers Alicante for full renovations, bathrooms, kitchens, electrical work and rooftop solar. Local jobs usually turn on material access, older apartment boards, and comunidad rules for roof plant. Typical south-facing yield here is about 1,660 kWh per kWp per year after system losses — useful for planning, not a substitute for a survey.",
      updatedAt: u,
      travelNote: "Site visits are on working days. Same-week surveys depend on access to the property and roof.",
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
        "Pisos y villas en la ciudad y barrios próximos: reforma, instalaciones y fotovoltaica cuando el edificio lo permite.",
      answer:
        "Casa Expert cubre Alicante con reforma integral, baños, cocinas, electricidad y solar en cubierta. Lo habitual aquí es el acceso de materiales, cuadros antiguos en pisos y las normas de comunidad para cubierta. La producción típica a sur ronda 1.660 kWh por kWp al año tras pérdidas — orientativo, no sustituye la visita.",
      updatedAt: u,
      travelNote: "Las visitas son en días laborables. La misma semana depende del acceso a vivienda y cubierta.",
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
        "Квартиры и виллы в городе и рядом — ремонт, инженерия и СЭС на крыше, если здание позволяет.",
      answer:
        "Casa Expert в Аликанте: полный ремонт, ванные, кухни, электрика и кровельная СЭС. На месте обычно решают доступ для материалов, старые щиты в квартирах и правила comunidad для крыши. Типичная выработка на юг — около 1 660 кВт·ч на кВтp в год после потерь: ориентир для плана, не замена осмотру.",
      updatedAt: u,
      travelNote: "Выезды в рабочие дни. На этой неделе — если есть доступ в жильё и на крышу.",
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
        "Villas with usable roofs, apartments needing kitchens and bathrooms, and owners who may follow the job from abroad.",
      answer:
        "We run solar and renovation jobs in Torrevieja with a written scope and one point of contact. Rooftop resource here is strong — about 1,720 kWh per kWp per year on a clear south plane — but shade, roof planes and the board still decide the real system. A 5,000 kWh household still needs a survey.",
      updatedAt: u,
      travelNote: "Surveys are often grouped with Orihuela Costa on the same travel day when access allows.",
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
        "Villas con cubierta útil, pisos que necesitan cocina o baño, y propietarios que pueden seguir la obra desde fuera.",
      answer:
        "En Torrevieja hacemos solar y reforma con alcance escrito y un interlocutor. El recurso solar es alto — unos 1.720 kWh por kWp al año a sur — pero sombra, planos de cubierta y el cuadro deciden el sistema real. Un hogar de 5.000 kWh sigue necesitando visita.",
      updatedAt: u,
      travelNote: "Las visitas se agrupan a menudo con Orihuela Costa el mismo día de viaje.",
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
        "Виллы с полезной крышей, квартиры с кухнями и ванными, собственники, которые ведут объект из-за границы.",
      answer:
        "В Торревьехе делаем СЭС и ремонт с письменным объёмом и одним контактом. Ресурс сильный — около 1 720 кВт·ч на кВтp в год на юг — но тень, скаты и щит решают реальную систему. Дому на 5 000 кВт·ч всё равно нужен осмотр.",
      updatedAt: u,
      travelNote: "Выезды часто группируем с Ориуэлой Коста в один день.",
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
        "Gated urbanisations, mixed roof types, and villa work along Orihuela Costa.",
      answer:
        "Casa Expert works across Orihuela Costa on solar, kitchens, bathrooms and villa renovations. Access codes, skip rules and unloading windows go into the programme after the survey — not as day-rate surprises. Typical south-facing yield is about 1,705 kWh per kWp per year.",
      updatedAt: u,
      travelNote: "Surveys are grouped with Torrevieja when possible. Gated urbanisations need an access code or local contact on the day.",
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
        "Urbanizaciones cerradas, cubiertas mixtas y obra en villas a lo largo de Orihuela Costa.",
      answer:
        "Casa Expert trabaja en Orihuela Costa con solar, cocinas, baños y reformas de villa. Códigos de acceso, contenedores y ventanas de descarga van al programa tras la visita — no como extras sorpresa. La producción típica a sur ronda 1.705 kWh por kWp al año.",
      updatedAt: u,
      travelNote: "Las visitas se agrupan con Torrevieja. Las urbanizaciones cerradas necesitan código o contacto el día de la visita.",
      localNotes: [
        "Las normas de urbanización pueden limitar contenedores y horario.",
        "Las villas independientes son el candidato solar típico; los pisos necesitan derecho de cubierta por escrito.",
        "Cocina y baño son paquetes frecuentes si el resto de la casa se mantiene.",
      ],
      faqs: [
        {
          q: "¿Qué servicios ofrecen en Orihuela Costa?",
          a: "Solar, cocinas, baños, reforma de villa, electricidad y fontanería, aire acondicionado y limpieza de entrega.",
        },
        {
          q: "¿En cuánto pueden visitar en Orihuela Costa?",
          a: "Habitualmente en 5–10 días laborables, agrupado con Torrevieja cuando el acceso lo permite.",
        },
        {
          q: "¿Qué urbanizaciones?",
          a: "Programamos por dirección. Si el solar está en Orihuela Costa y es accesible, confirmamos tras ver el trabajo.",
        },
        {
          q: "¿Las normas de urbanización afectan al presupuesto?",
          a: "Sí. Horarios de acceso, contenedores y derechos de cubierta se escriben en el alcance tras la visita.",
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
        "Закрытые урбанизации, смешанные крыши и работы по виллам вдоль Orihuela Costa.",
      answer:
        "Casa Expert на Ориуэле Коста: СЭС, кухни, ванные и ремонт вилл. Коды доступа, контейнеры и окна разгрузки пишем в график после осмотра — не как сюрприз в день работ. Типичная выработка на юг — около 1 705 кВт·ч на кВтp в год.",
      updatedAt: u,
      travelNote: "Выезды группируем с Торревьехой. Закрытым урбанизациям нужны код или контакт в день осмотра.",
      localNotes: [
        "Правила урбанизации могут ограничить контейнер и часы.",
        "Отдельные виллы — типичные кандидаты на СЭС; квартирам нужно право на крышу письменно.",
        "Кухня и ванная часто пакетом, если остальной дом не трогаем.",
      ],
      faqs: [
        {
          q: "Какие услуги в Ориуэле Коста?",
          a: "СЭС, кухни, ванные, ремонт виллы, электрика и сантехника, кондиционеры и уборка после работ.",
        },
        {
          q: "Как быстро выезд в Ориуэле Коста?",
          a: "Обычно за 5–10 рабочих дней, часто в один день с Торревьехой, если доступ позволяет.",
        },
        {
          q: "Какие урбанизации?",
          a: "Планируем по адресу. Если участок в Orihuela Costa и доступен — подтвердим после оценки объёма.",
        },
        {
          q: "Правила урбанизации влияют на смету?",
          a: "Да. Часы доступа, контейнер и права на крышу пишем в объём после осмотра.",
        },
      ],
      relatedServiceIds: ["solar-panels", "kitchen-renovation", "bathroom-renovation"],
      relatedProjectIds: ["orihuela-kitchen-bath"],
    },
  },
  benidorm: {
    en: {
      id: "benidorm",
      locale: "en",
      name: "Benidorm",
      seoTitle: "Renovations and solar in Benidorm | Casa Expert",
      description:
        "Casa Expert works in Benidorm on apartment renovations, bathrooms, kitchens and rooftop solar where the building allows it.",
      h1: "Renovations and solar in Benidorm",
      summary:
        "High-rise apartments, comunidad roofs and coastal materials — renovation and PV when access is clear.",
      answer:
        "Casa Expert covers Benidorm for bathrooms, kitchens, apartment renovations, electrical upgrades and rooftop solar when the building and board allow it. The usual blockers are lift and parking access, older common boards, and written comunidad approval for roof plant. Typical south-facing yield here is about 1,630 kWh per kWp per year after system losses.",
      updatedAt: u,
      travelNote: "Surveys are booked on working days. Same-week visits depend on apartment and roof access in the tower.",
      localNotes: [
        "High-rise deliveries often need timed lifts and shorter material runs.",
        "Salt air near the front line affects finishes, fixings and cleaning.",
        "Roof PV needs a clear comunidad position before anchors and cable routes.",
      ],
      faqs: [
        {
          q: "Which services do you offer in Benidorm?",
          a: "Apartment renovation, bathrooms, kitchens, electrical and plumbing, air conditioning, post-build cleaning, and rooftop solar when the building allows it.",
        },
        {
          q: "How soon can you survey in Benidorm?",
          a: "Usually within 5–10 working days of a confirmed request, once apartment and roof access are clear.",
        },
        {
          q: "Can apartments install solar in Benidorm?",
          a: "Only when roof rights and the electrical board are approved in writing. We state that path in the quotation after the survey.",
        },
        {
          q: "Do you work only in the old town?",
          a: "No. We schedule by address across Benidorm when access and the job make sense.",
        },
      ],
      relatedServiceIds: ["home-renovation", "bathroom-renovation", "solar-panels"],
      relatedProjectIds: ["alicante-apartment-renovation"],
    },
    es: {
      id: "benidorm",
      locale: "es",
      name: "Benidorm",
      seoTitle: "Reformas y solar en Benidorm | Casa Expert",
      description:
        "Casa Expert en Benidorm: reformas de piso, baños, cocinas y fotovoltaica en cubierta cuando el edificio lo permite.",
      h1: "Reformas y energía solar en Benidorm",
      summary:
        "Pisos en altura, cubiertas de comunidad y materiales costeros — reforma y FV con acceso claro.",
      answer:
        "Casa Expert cubre Benidorm con baños, cocinas, reforma de piso, electricidad y solar en cubierta si el edificio y el cuadro lo permiten. Lo habitual aquí es el ascensor y el aparcamiento, cuadros comunes antiguos y la posición escrita de la comunidad para cubierta. La producción típica a sur ronda 1.630 kWh por kWp al año tras pérdidas.",
      updatedAt: u,
      travelNote: "Las visitas son en días laborables. La misma semana depende del acceso al piso y a la cubierta.",
      localNotes: [
        "En altura hace falta ascensor a hora y entregas más cortas.",
        "La sal en primera línea afecta acabados, fijaciones y limpieza.",
        "La FV en cubierta exige posición clara de la comunidad antes de anclajes.",
      ],
      faqs: [
        {
          q: "¿Qué servicios ofrecen en Benidorm?",
          a: "Reforma de piso, baños, cocinas, electricidad y fontanería, aire acondicionado, limpieza de entrega y solar en cubierta si el edificio lo permite.",
        },
        {
          q: "¿En cuánto pueden visitar en Benidorm?",
          a: "Habitualmente en 5–10 días laborables tras confirmar la solicitud, con acceso al piso y a la cubierta.",
        },
        {
          q: "¿Se puede instalar solar en un piso?",
          a: "Solo con derechos de cubierta y cuadro aprobados por escrito. Ese camino va en el presupuesto tras la visita.",
        },
        {
          q: "¿Solo el casco antiguo?",
          a: "No. Programamos por dirección en Benidorm cuando el acceso y el trabajo encajan.",
        },
      ],
      relatedServiceIds: ["home-renovation", "bathroom-renovation", "solar-panels"],
      relatedProjectIds: ["alicante-apartment-renovation"],
    },
    ru: {
      id: "benidorm",
      locale: "ru",
      name: "Бенидорм",
      seoTitle: "Ремонт и солнечные панели в Бенидорме | Casa Expert",
      description:
        "Casa Expert в Бенидорме: ремонт квартир, ванные, кухни и СЭС на крыше, если здание позволяет.",
      h1: "Ремонт и солнечные панели в Бенидорме",
      summary:
        "Высотки, крыши comunidad и прибрежные материалы — ремонт и СЭС при понятном доступе.",
      answer:
        "Casa Expert в Бенидорме: ванные, кухни, ремонт квартир, электрика и кровельная СЭС, если здание и щит позволяют. Обычно мешают лифт и парковка, старые общие щиты и письменное согласие comunidad на крышу. Типичная выработка на юг — около 1 630 кВт·ч на кВтp в год после потерь.",
      updatedAt: u,
      travelNote: "Выезды в рабочие дни. На этой неделе — если есть доступ в квартиру и на крышу.",
      localNotes: [
        "В высотках нужны слоты лифта и короткие поставки.",
        "Соль на первой линии влияет на отделку, крепёж и уборку.",
        "СЭС на крыше — только с ясной позицией comunidad до анкеров.",
      ],
      faqs: [
        {
          q: "Какие услуги в Бенидорме?",
          a: "Ремонт квартиры, ванные, кухни, электрика и сантехника, кондиционеры, уборка после работ и СЭС на крыше, если здание позволяет.",
        },
        {
          q: "Как быстро выезд в Бенидорме?",
          a: "Обычно за 5–10 рабочих дней после подтверждения заявки, если есть доступ в квартиру и на крышу.",
        },
        {
          q: "Можно ли ставить СЭС в квартире?",
          a: "Только при письменных правах на крышу и согласованном щите. Путь фиксируем в смете после осмотра.",
        },
        {
          q: "Только старый город?",
          a: "Нет. Планируем по адресу по всему Бенидорму, если доступ и объём имеют смысл.",
        },
      ],
      relatedServiceIds: ["home-renovation", "bathroom-renovation", "solar-panels"],
      relatedProjectIds: ["alicante-apartment-renovation"],
    },
  },
  "gran-alacant": {
    en: {
      id: "gran-alacant",
      locale: "en",
      name: "Gran Alacant",
      seoTitle: "Renovations and solar in Gran Alacant | Casa Expert",
      description:
        "Casa Expert covers Gran Alacant for villa renovations, kitchens, bathrooms and rooftop solar, with urbanisation access written into the programme.",
      h1: "Renovations and solar in Gran Alacant",
      summary:
        "Detached and semi-detached homes, mixed roofs and gated access between Alicante and Santa Pola.",
      answer:
        "Casa Expert works in Gran Alacant on solar, kitchens, bathrooms and villa renovations. Access codes, skip placement and roof type go into the written scope after the survey. Typical south-facing yield here is about 1,690 kWh per kWp per year after system losses — a planning figure, not a substitute for a site visit.",
      updatedAt: u,
      travelNote: "Surveys are often grouped with Alicante or Santa Pola. Gated streets need an access code or local contact on the day.",
      localNotes: [
        "Urbanisation rules can limit skips, parking and working hours.",
        "Tile and flat roofs both appear; the structure check decides the mounting system.",
        "Kitchen and bathroom packages are common when the rest of the house is kept.",
      ],
      faqs: [
        {
          q: "Which services do you offer in Gran Alacant?",
          a: "Solar, kitchens, bathrooms, villa renovation, electrical and plumbing, air conditioning, and post-build cleaning.",
        },
        {
          q: "How soon can you survey in Gran Alacant?",
          a: "Usually within 5–10 working days, often on the same run as Alicante when access allows.",
        },
        {
          q: "Do gated urbanisations change the quote?",
          a: "Yes. Access hours, skip rules and unloading are written into the programme after the survey.",
        },
        {
          q: "Is Gran Alacant a core area?",
          a: "Yes. It has its own page alongside Alicante, Torrevieja, Orihuela Costa and Benidorm.",
        },
      ],
      relatedServiceIds: ["solar-panels", "home-renovation", "kitchen-renovation"],
      relatedProjectIds: ["torrevieja-villa-solar"],
    },
    es: {
      id: "gran-alacant",
      locale: "es",
      name: "Gran Alacant",
      seoTitle: "Reformas y solar en Gran Alacant | Casa Expert",
      description:
        "Casa Expert en Gran Alacant: reformas de villa, cocinas, baños y fotovoltaica, con acceso de urbanización en el programa.",
      h1: "Reformas y energía solar en Gran Alacant",
      summary:
        "Viviendas unifamiliares, cubiertas mixtas y accesos cerrados entre Alicante y Santa Pola.",
      answer:
        "Casa Expert trabaja en Gran Alacant con solar, cocinas, baños y reformas de villa. Códigos de acceso, contenedores y tipo de cubierta van al alcance escrito tras la visita. La producción típica a sur ronda 1.690 kWh por kWp al año tras pérdidas — orientativo, no sustituye la visita.",
      updatedAt: u,
      travelNote: "Las visitas se agrupan a menudo con Alicante o Santa Pola. Las calles cerradas necesitan código o contacto el día de la visita.",
      localNotes: [
        "Las normas de urbanización pueden limitar contenedores, aparcamiento y horario.",
        "Hay teja y cubierta plana; la estructura decide el sistema de anclaje.",
        "Cocina y baño son paquetes frecuentes si el resto de la casa se mantiene.",
      ],
      faqs: [
        {
          q: "¿Qué servicios ofrecen en Gran Alacant?",
          a: "Solar, cocinas, baños, reforma de villa, electricidad y fontanería, aire acondicionado y limpieza de entrega.",
        },
        {
          q: "¿En cuánto pueden visitar en Gran Alacant?",
          a: "Habitualmente en 5–10 días laborables, a menudo el mismo día que Alicante si el acceso lo permite.",
        },
        {
          q: "¿Las urbanizaciones cerradas cambian el presupuesto?",
          a: "Sí. Horarios de acceso, contenedores y descarga se escriben en el programa tras la visita.",
        },
        {
          q: "¿Gran Alacant es zona núcleo?",
          a: "Sí. Tiene página propia junto a Alicante, Torrevieja, Orihuela Costa y Benidorm.",
        },
      ],
      relatedServiceIds: ["solar-panels", "home-renovation", "kitchen-renovation"],
      relatedProjectIds: ["torrevieja-villa-solar"],
    },
    ru: {
      id: "gran-alacant",
      locale: "ru",
      name: "Гран Алакант",
      seoTitle: "Ремонт и солнечные панели в Гран Алаканте | Casa Expert",
      description:
        "Casa Expert в Гран Алаканте: ремонт вилл, кухни, ванные и СЭС, с доступом урбанизации в графике.",
      h1: "Ремонт и солнечные панели в Гран Алаканте",
      summary:
        "Отдельные дома, смешанные крыши и закрытые въезды между Аликанте и Санта-Полой.",
      answer:
        "Casa Expert в Гран Алаканте: СЭС, кухни, ванные и ремонт вилл. Коды доступа, контейнер и тип крыши пишем в объём после осмотра. Типичная выработка на юг — около 1 690 кВт·ч на кВтp в год после потерь: ориентир, не замена выезду.",
      updatedAt: u,
      travelNote: "Выезды часто в один день с Аликанте или Санта-Полой. Закрытым улицам нужны код или контакт в день осмотра.",
      localNotes: [
        "Правила урбанизации могут ограничить контейнер, парковку и часы.",
        "Есть черепица и плоская крыша; конструкция решает крепёж.",
        "Кухня и ванная часто пакетом, если остальной дом не трогаем.",
      ],
      faqs: [
        {
          q: "Какие услуги в Гран Алаканте?",
          a: "СЭС, кухни, ванные, ремонт виллы, электрика и сантехника, кондиционеры и уборка после работ.",
        },
        {
          q: "Как быстро выезд в Гран Алаканте?",
          a: "Обычно за 5–10 рабочих дней, часто в один день с Аликанте, если доступ позволяет.",
        },
        {
          q: "Закрытые урбанизации меняют смету?",
          a: "Да. Часы доступа, контейнер и разгрузку пишем в график после осмотра.",
        },
        {
          q: "Гран Алакант — ядро?",
          a: "Да. Есть отдельная страница рядом с Аликанте, Торревьехой, Ориуэлой Коста и Бенидормом.",
        },
      ],
      relatedServiceIds: ["solar-panels", "home-renovation", "kitchen-renovation"],
      relatedProjectIds: ["torrevieja-villa-solar"],
    },
  },
};

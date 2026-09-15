import type { ServiceCopy } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/config";
import type { ServiceId } from "@/lib/i18n/routing";
import { CONTENT_UPDATED_AT } from "@/lib/content/site";

const u = CONTENT_UPDATED_AT;

export const services: Record<ServiceId, Record<Locale, ServiceCopy>> = {
  "solar-panels": {
    en: {
      id: "solar-panels",
      locale: "en",
      name: "Solar panel installation",
      seoTitle: "Solar panel installation in Costa Blanca | Casa Expert",
      description:
        "Residential solar installation in Alicante, Torrevieja and Orihuela Costa. Indicative 2026 ranges, legalisation and a calculator that shows results before any phone number.",
      h1: "Solar panel installation in Costa Blanca",
      summary:
        "Design, supply, install and legalise rooftop PV for houses and villas on the Costa Blanca, with a documented scope and a site survey before the final price.",
      answer:
        "As of 15 September 2026, a typical 4.5–6 kWp rooftop system on the Costa Blanca is modelled in an IVA-inclusive installed range of about €6,300–€10,800, before batteries and before any subsidy. The range moves with roof access, electrical board work, orientation and legalisation extras. Use the calculator for a property-specific preliminary figure; it is not a contract.",
      updatedAt: u,
      includes: [
        "Site survey of roof, shading and existing board",
        "System sizing from bills or annual kWh",
        "Modules, inverter, structure and DC/AC protection as specified",
        "Residential legalisation dossier where included in the quote",
        "Commissioning and handover pack (single-line diagram, serials, guarantees)",
      ],
      excludes: [
        "Structural roof rebuilds",
        "Community-of-owners votes and internal neighbour disputes",
        "Automatic subsidy deduction",
        "Batteries unless listed as a line item",
        "Grid upgrades owned by the DSO",
      ],
      process: [
        "Share the town, bill or annual kWh, and photos of the roof and board.",
        "We return a preliminary kWp and IVA-inclusive range, then survey if you proceed.",
        "The quote lists equipment, exclusions, programme and who files legalisation.",
        "Installation window is confirmed after materials and access are locked.",
        "Commissioning, documentation and aftercare contacts are handed over in writing.",
      ],
      priceRows: [
        { item: "4.5–6 kWp rooftop, standard tile, IVA incl.", value: "€6,300–€10,800" },
        { item: "Battery add-on (usable kWh)", value: "€650–€900 / kWh", note: "Not assumed by default" },
        { item: "Complex roof / north / heavy shade", value: "+15% on PV line", note: "Survey confirms" },
        { item: "Subsidies / municipal relief", value: "Not deducted in the quote", note: "Shown separately if eligible" },
      ],
      faqs: [
        {
          q: "How many panels for 5,000 kWh per year in Torrevieja?",
          a: "With a south-facing roof, 5,000 kWh typically points to about 3.15 kWp — 7 × 450 W panels — before evening loads, shade and export. The calculator shows the working.",
        },
        {
          q: "Do you handle legalisation?",
          a: "Residential legalisation is included when the quote says so. Comunidad installations and non-standard connections are scoped separately.",
        },
        {
          q: "Is a battery required?",
          a: "No. Batteries raise self-consumption for evening-heavy loads; they are optional and priced as a separate line.",
        },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["torrevieja-villa-solar"],
      relatedGuideIds: ["solar-cost-costa-blanca-2026", "how-many-solar-panels"],
    },
    es: {
      id: "solar-panels",
      locale: "es",
      name: "Instalación de placas solares",
      seoTitle: "Instalación de placas solares en Costa Blanca | Casa Expert",
      description:
        "Autoconsumo residencial en Alicante, Torrevieja y Orihuela Costa. Rangos 2026 con IVA, legalización y calculadora con resultado antes del teléfono.",
      h1: "Instalación de placas solares en Costa Blanca",
      summary:
        "Diseño, suministro, instalación y legalización de fotovoltaica en cubierta para viviendas en Costa Blanca, con alcance escrito y visita previa al precio final.",
      answer:
        "A 15 de septiembre de 2026, un sistema tipo de 4,5–6 kWp en Costa Blanca se modela en un rango instalado con IVA de unos 6.300–10.800 €, sin batería y sin descontar ayudas. El rango cambia con acceso, cuadro, orientación y extras de legalización. La calculadora da una cifra previa; no es un contrato.",
      updatedAt: u,
      includes: [
        "Visita de cubierta, sombras y cuadro existente",
        "Dimensionado a partir de factura o kWh anuales",
        "Módulos, inversor, estructura y protecciones según oferta",
        "Legalización residencial cuando figura en el presupuesto",
        "Puesta en marcha y dossier (unifilar, series, garantías)",
      ],
      excludes: [
        "Reconstrucción estructural de cubierta",
        "Juntas de comunidad y conflictos entre vecinos",
        "Descuento automático de subvenciones",
        "Baterías si no van como partida",
        "Refuerzos de red a cargo de la distribuidora",
      ],
      process: [
        "Indique municipio, factura o kWh y fotos de cubierta y cuadro.",
        "Devolvemos kWp y rango con IVA; si sigue, hay visita.",
        "La oferta lista equipos, exclusiones, plazo y quién legaliza.",
        "La instalación se agenda con materiales y acceso cerrados.",
        "Entrega documentada y contactos de postventa por escrito.",
      ],
      priceRows: [
        { item: "4,5–6 kWp en teja, IVA incl.", value: "6.300–10.800 €" },
        { item: "Batería (kWh útiles)", value: "650–900 € / kWh", note: "No se asume por defecto" },
        { item: "Cubierta compleja / norte / sombra", value: "+15% en FV", note: "Confirma la visita" },
        { item: "Ayudas", value: "No se restan solas", note: "Se informan aparte" },
      ],
      faqs: [
        {
          q: "¿Cuántas placas para 5.000 kWh/año en Torrevieja?",
          a: "Con cubierta sur, 5.000 kWh apuntan a unos 3,15 kWp — 7 módulos de 450 W — antes de carga nocturna, sombra y vertido. La calculadora muestra el cálculo.",
        },
        {
          q: "¿Incluyen la legalización?",
          a: "La legalización residencial entra cuando el presupuesto lo dice. Comunidades y acometidas no estándar se cotizan aparte.",
        },
        {
          q: "¿Hace falta batería?",
          a: "No. Sube el autoconsumo si la carga es nocturna; es opcional y va como partida propia.",
        },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["torrevieja-villa-solar"],
      relatedGuideIds: ["solar-cost-costa-blanca-2026", "how-many-solar-panels"],
    },
    ru: {
      id: "solar-panels",
      locale: "ru",
      name: "Установка солнечных панелей",
      seoTitle: "Солнечные панели на Коста-Бланке | Casa Expert",
      description:
        "Жилые СЭС в Аликанте, Торревьехе и Ориуэле Коста. Диапазоны 2026 с IVA, легализация и калькулятор с результатом до телефона.",
      h1: "Установка солнечных панелей на Коста-Бланке",
      summary:
        "Проектирование, поставка, монтаж и легализация кровельной СЭС для домов на Коста-Бланке: письменный объём и осмотр до финальной цены.",
      answer:
        "На 15 сентября 2026 года типичная система 4,5–6 кВтp на Коста-Бланке в модели стоит примерно 6 300–10 800 € «под ключ» с IVA, без батареи и без вычета субсидий. Диапазон зависит от доступа на крышу, щита, ориентации и легализации. Калькулятор даёт предварительную цифру, это не договор.",
      updatedAt: u,
      includes: [
        "Осмотр крыши, затенения и существующего щита",
        "Подбор мощности по счёту или годовым кВт·ч",
        "Модули, инвертор, крепёж и защиты по спецификации",
        "Жилая легализация, если она есть в смете",
        "Пусконаладка и пакет документов (схема, серийники, гарантии)",
      ],
      excludes: [
        "Капремонт несущей кровли",
        "Голосования comunidad и споры соседей",
        "Автоматический вычет субсидий",
        "Аккумуляторы, если нет отдельной строки",
        "Усиление сети за счёт DSO",
      ],
      process: [
        "Город, счёт или кВт·ч, фото крыши и щита.",
        "Считаем кВтp и диапазон с IVA; дальше — выезд.",
        "В оферте оборудование, исключения, сроки и кто подаёт легализацию.",
        "Монтаж после фиксации материалов и доступа.",
        "Сдача с документами и контактами сервиса письменно.",
      ],
      priceRows: [
        { item: "4,5–6 кВтp, черепица, с IVA", value: "6 300–10 800 €" },
        { item: "Батарея (полезные кВт·ч)", value: "650–900 € / кВт·ч", note: "По умолчанию не входит" },
        { item: "Сложная крыша / север / тень", value: "+15% к ФЭ", note: "После осмотра" },
        { item: "Субсидии", value: "Не вычитаем автоматически", note: "Отдельной строкой" },
      ],
      faqs: [
        {
          q: "Сколько панелей на 5 000 кВт·ч в год в Торревьехе?",
          a: "При южной крыше 5 000 кВт·ч — это около 3,15 кВтp, 7 × 450 Вт, до вечерней нагрузки, тени и экспорта. Расчёт виден в калькуляторе.",
        },
        {
          q: "Вы делаете легализацию?",
          a: "Жилая — да, если это написано в смете. Comunidad и нестандартные подключения считаются отдельно.",
        },
        {
          q: "Нужна ли батарея?",
          a: "Нет. Она повышает самопотребление при вечерней нагрузке и идёт отдельной строкой.",
        },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["torrevieja-villa-solar"],
      relatedGuideIds: ["solar-cost-costa-blanca-2026", "how-many-solar-panels"],
    },
  },
  "home-renovation": {
    en: {
      id: "home-renovation",
      locale: "en",
      name: "Full home renovation",
      seoTitle: "Full home renovation in Costa Blanca | Casa Expert",
      description:
        "Turnkey apartment and villa renovation in Alicante province: documented scope, sequenced trades and a single accountable team for remote owners.",
      h1: "Full home renovation in Costa Blanca",
      summary:
        "Coordinated renovation of apartments and houses, from strip-out to handover, with one scope document instead of a chain of informal crews.",
      answer:
        "A full renovation on the Costa Blanca is priced from a measured survey, not a single €/m² slogan. Publicly we use 2026 working bands of about €550–€1,200 / m² IVA included for mid-range apartment work, excluding structural surprises, licensed major works and furniture. Villas, sea-front exposure and occupied-home phasing sit outside that band until surveyed.",
      updatedAt: u,
      includes: [
        "Survey, room-by-room scope and exclusions list",
        "Programme of trades and site protection",
        "Demolition, waste, partitions, finishes as specified",
        "Coordination of plumbing, electrics and joinery in the same programme",
        "Handover snag list and photo log for remote owners",
      ],
      excludes: [
        "Furniture and styling packages unless quoted",
        "Community works outside the private unit",
        "Hidden structural or damp remediation discovered after opening-up",
        "Architect/licence fees owned by the client unless listed",
      ],
      process: [
        "Brief, photos and, if you have them, drawings or a previous quote.",
        "Survey and a written scope with allowances and exclusions.",
        "Programme, access rules and payment milestones.",
        "Works with weekly photo updates.",
        "Snagging, certificates that belong to the works, handover.",
      ],
      priceRows: [
        { item: "Apartment, mid-range finishes, IVA incl.", value: "€550–€1,200 / m²", note: "Survey overrides" },
        { item: "Occupied or phased villa work", value: "Quoted separately", note: "Access drives labour" },
        { item: "Licencia / major works technician", value: "As required by the town hall", note: "Not a hidden extra in the narrative" },
      ],
      faqs: [
        {
          q: "Can you run a renovation while the owner is abroad?",
          a: "Yes. The working method is a locked scope, photo reporting and one named contact. It is not a promise of a fixed price if the scope changes.",
        },
        {
          q: "How long is a typical apartment renovation?",
          a: "A 70–90 m² apartment with bathroom, kitchen and finishes often sits in an 8–16 week site window after materials are agreed. Services and licences can extend that.",
        },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["alicante-apartment-renovation"],
      relatedGuideIds: ["renovation-permits-costa-blanca"],
    },
    es: {
      id: "home-renovation",
      locale: "es",
      name: "Reforma integral",
      seoTitle: "Reforma integral en Costa Blanca | Casa Expert",
      description:
        "Reforma de pisos y villas en la provincia de Alicante: alcance escrito, gremios coordinados y un único equipo para propietarios no residentes.",
      h1: "Reforma integral en Costa Blanca",
      summary:
        "Reforma coordinada de viviendas, del vaciado a la entrega, con un documento de alcance en lugar de cuadrillas sueltas.",
      answer:
        "Una reforma integral en Costa Blanca se cotiza con medición, no con un eslogan de €/m². Como banda de trabajo 2026 usamos unos 550–1.200 €/m² con IVA para piso de gama media, sin imprevistos estructurales, obra mayor licenciada ni mobiliario. Villas, primera línea y obra habitada salen de esa banda hasta visita.",
      updatedAt: u,
      includes: [
        "Visita, alcance por estancia y exclusiones",
        "Programa de gremios y protección de zona",
        "Demolición, escombro, tabiquería y acabados según oferta",
        "Coordinación de fontanería, electricidad y carpintería",
        "Lista de pendientes y reportaje para propietarios a distancia",
      ],
      excludes: [
        "Mobiliario y styling si no están en oferta",
        "Obras de comunidad fuera de la vivienda",
        "Patologías ocultas al abrir",
        "Honorarios de arquitecto/licencia del cliente si no figuran",
      ],
      process: [
        "Brief, fotos y planos o presupuestos previos si existen.",
        "Visita y alcance escrito con partidas y exclusiones.",
        "Programa, acceso y hitos de pago.",
        "Obra con reporte fotográfico semanal.",
        "Repasos, documentación de la obra y entrega.",
      ],
      priceRows: [
        { item: "Piso, acabados medios, IVA incl.", value: "550–1.200 € / m²", note: "La visita manda" },
        { item: "Villa habitada o por fases", value: "A presupuesto", note: "El acceso marca la mano de obra" },
        { item: "Licencia / técnico", value: "Según ayuntamiento", note: "No se esconde en el relato" },
      ],
      faqs: [
        {
          q: "¿Pueden reformar si el dueño vive fuera?",
          a: "Sí: alcance cerrado, fotos y un interlocutor. No es precio fijo si el alcance cambia.",
        },
        {
          q: "¿Cuánto dura un piso tipo?",
          a: "70–90 m² con baño, cocina y acabados suele estar en 8–16 semanas de obra tras cerrar materiales. Licencias e instalaciones pueden alargar.",
        },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["alicante-apartment-renovation"],
      relatedGuideIds: ["renovation-permits-costa-blanca"],
    },
    ru: {
      id: "home-renovation",
      locale: "ru",
      name: "Ремонт под ключ",
      seoTitle: "Ремонт под ключ на Коста-Бланке | Casa Expert",
      description:
        "Ремонт квартир и вилл в провинции Аликанте: письменный объём, связанные работы и одна команда для удалённых собственников.",
      h1: "Ремонт квартиры или дома под ключ на Коста-Бланке",
      summary:
        "Связанный ремонт жилья от демонтажа до сдачи: один документ объёма вместо цепочки разрозненных бригад.",
      answer:
        "Комплексный ремонт на Коста-Бланке считается по обмеру, а не по одному слогану €/м². Рабочий диапазон 2026: около 550–1 200 €/м² с IVA для квартиры среднего сегмента, без скрытых конструкций, лицензируемых major works и мебели. Виллы, первая линия и ремонт с проживанием — только после осмотра.",
      updatedAt: u,
      includes: [
        "Осмотр, объём по помещениям и список исключений",
        "График работ и защита объекта",
        "Демонтаж, вывоз, перегородки и отделка по смете",
        "Связка сантехники, электрики и столярки в одном графике",
        "Дефектовка и фотоотчёт для собственника не на месте",
      ],
      excludes: [
        "Мебель и декор, если их нет в смете",
        "Работы comunidad вне квартиры",
        "Скрытые дефекты после вскрытия",
        "Гонорар архитектора/лицензии клиента, если не указаны",
      ],
      process: [
        "Бриф, фото, чертежи или старые сметы.",
        "Осмотр и письменный объём.",
        "График, доступ, этапы оплаты.",
        "Работы с еженедельными фото.",
        "Сдача, документы по работам, ключи.",
      ],
      priceRows: [
        { item: "Квартира, средняя отделка, с IVA", value: "550–1 200 € / м²", note: "Решает осмотр" },
        { item: "Вилла с проживанием / этапы", value: "По смете", note: "Доступ влияет на труд" },
        { item: "Licencia / техник", value: "По требованиям ayuntamiento", note: "Не прячем в тексте" },
      ],
      faqs: [
        {
          q: "Можно вести ремонт, если хозяин за границей?",
          a: "Да: закрытый объём, фото, один контакт. Это не обещание фикс-цены при смене объёма.",
        },
        {
          q: "Сколько длится типичная квартира?",
          a: "70–90 м² с ванной, кухней и отделкой часто 8–16 недель после согласования материалов. Лицензии и инженерия могут удлинить.",
        },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["alicante-apartment-renovation"],
      relatedGuideIds: ["renovation-permits-costa-blanca"],
    },
  },
  "bathroom-renovation": {
    en: {
      id: "bathroom-renovation",
      locale: "en",
      name: "Bathroom renovation",
      seoTitle: "Bathroom renovation in Costa Blanca | Casa Expert",
      description:
        "Bathroom refit in Alicante, Torrevieja and Orihuela Costa: waterproofing, sanitary ware, ventilation and a written exclusions list.",
      h1: "Bathroom renovation on the Costa Blanca",
      summary:
        "Full bathroom strip and refit, including wet-room build-ups where specified, with leak-risk details written down before tiling starts.",
      answer:
        "A complete bathroom renovation in this market commonly lands in a 2026 IVA-inclusive band of about €4,800–€12,500 for a standard 4–6 m² room, excluding structural opening of floors to the neighbour and designer sanitary ware. The drivers are waterproofing spec, waste relocation and access in occupied homes.",
      updatedAt: u,
      includes: ["Strip-out and waste", "Waterproofing as specified", "Sanitary install listed in the quote", "Tiling and silicone", "Extraction if in scope"],
      excludes: ["Unlisted marble or made-to-measure glass", "Community riser replacement", "Furniture vanity as décor extra"],
      process: ["Measure and photo existing falls and wastes", "Lock sanitary and tile SKUs", "Waterproof hold-point before tile", "Commission and snag"],
      priceRows: [
        { item: "Standard 4–6 m², IVA incl.", value: "€4,800–€12,500" },
        { item: "Move soil/waste", value: "Survey item" },
      ],
      faqs: [
        { q: "Do you renovate bathrooms in occupied apartments?", a: "Yes, with protection and a defined shut-off window. Programme is longer than an empty unit." },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["orihuela-kitchen-bath"],
      relatedGuideIds: ["renovation-permits-costa-blanca"],
    },
    es: {
      id: "bathroom-renovation",
      locale: "es",
      name: "Reforma de baño",
      seoTitle: "Reforma de baño en Costa Blanca | Casa Expert",
      description:
        "Reforma de baño en Alicante, Torrevieja y Orihuela Costa: impermeabilización, sanitarios y exclusiones por escrito.",
      h1: "Reforma de baño en Costa Blanca",
      summary:
        "Vaciado y reforma completa del baño, con puntos de impermeabilización cerrados antes del alicatado.",
      answer:
        "Una reforma completa de baño suele situarse en 2026, con IVA, en unos 4.800–12.500 € para un baño tipo de 4–6 m², sin abrir forjados hacia el vecino ni sanitarios de diseño. Mandan la impermeabilización, el traslado de desagües y el acceso en vivienda habitada.",
      updatedAt: u,
      includes: ["Vaciado y escombro", "Impermeabilización prevista", "Sanitarios de oferta", "Alicatado y silicona", "Extracción si está en alcance"],
      excludes: ["Mármol o mampara a medida no listados", "Sustitución de bajante comunitaria", "Mueble como extra decorativo"],
      process: ["Medición y fotos de pendientes", "Cierre de SKU", "Parada de control antes de alicatar", "Puesta en marcha y repasos"],
      priceRows: [
        { item: "Baño 4–6 m², IVA incl.", value: "4.800–12.500 €" },
        { item: "Traslado de bajante", value: "Partida de visita" },
      ],
      faqs: [
        { q: "¿Reforman baños en vivienda habitada?", a: "Sí, con protección y ventana de corte de agua. El plazo es mayor que en vacío." },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["orihuela-kitchen-bath"],
      relatedGuideIds: ["renovation-permits-costa-blanca"],
    },
    ru: {
      id: "bathroom-renovation",
      locale: "ru",
      name: "Ремонт ванной",
      seoTitle: "Ремонт ванной на Коста-Бланке | Casa Expert",
      description:
        "Ремонт ванной в Аликанте, Торревьехе и Ориуэле Коста: гидроизоляция, сантехника и письменные исключения.",
      h1: "Ремонт ванной на Коста-Бланке",
      summary:
        "Полный демонтаж и сборка ванной: гидроизоляция фиксируется до плитки.",
      answer:
        "Полный ремонт ванной 4–6 м² в 2026 году обычно 4 800–12 500 € с IVA, без вскрытия перекрытия к соседям и без дизайнерской сантехники. Цена зависит от гидроизоляции, переноса стояков и доступа в жилой квартире.",
      updatedAt: u,
      includes: ["Демонтаж и вывоз", "Гидроизоляция по смете", "Сантехника из оферты", "Плитка и герметик", "Вытяжка, если в объёме"],
      excludes: ["Неуказанный мрамор и стекло на заказ", "Замена стояка comunidad", "Мебель как декор сверх сметы"],
      process: ["Обмер уклонов", "Фиксация артикулов", "Стоп-контроль до плитки", "Пуск и дефектовка"],
      priceRows: [
        { item: "4–6 м², с IVA", value: "4 800–12 500 €" },
        { item: "Перенос выпуска", value: "После осмотра" },
      ],
      faqs: [
        { q: "Делаете ванную в жилой квартире?", a: "Да, с защитой и окном отключения воды. Срок длиннее, чем в пустом объекте." },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["orihuela-kitchen-bath"],
      relatedGuideIds: ["renovation-permits-costa-blanca"],
    },
  },
  "kitchen-renovation": {
    en: {
      id: "kitchen-renovation",
      locale: "en",
      name: "Kitchen renovation",
      seoTitle: "Kitchen renovation in Costa Blanca | Casa Expert",
      description:
        "Kitchen renovation including services, worktops and appliance coordination in Costa Blanca homes.",
      h1: "Kitchen renovation in Costa Blanca",
      summary:
        "Kitchen strip, services and install with a locked appliance and worktop specification before carpentry starts.",
      answer:
        "A kitchen renovation without a full-home package often sits in a 2026 IVA-inclusive band of about €6,500–€18,000 excluding appliances, depending on carcass source, worktop and whether gas-to-electric conversion is required.",
      updatedAt: u,
      includes: ["Strip and waste", "First-fix water/power as drawn", "Install of listed carcass and worktop", "Silicone and snag"],
      excludes: ["Appliances unless listed", "Structural opening of load-bearing walls", "Bespoke imported stone not yet quoted"],
      process: ["Measure and services survey", "Lock SKUs and lead times", "First fix", "Fit and commission"],
      priceRows: [{ item: "Kitchen works excluding appliances, IVA incl.", value: "€6,500–€18,000" }],
      faqs: [
        { q: "Do you supply the kitchen furniture?", a: "We can install client-supplied kitchens or include a specified range. Mixed supply needs a written interface list." },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["orihuela-kitchen-bath"],
      relatedGuideIds: ["renovation-permits-costa-blanca"],
    },
    es: {
      id: "kitchen-renovation",
      locale: "es",
      name: "Reforma de cocina",
      seoTitle: "Reforma de cocina en Costa Blanca | Casa Expert",
      description:
        "Reforma de cocina con instalaciones, encimera y coordinación de electrodomésticos en Costa Blanca.",
      h1: "Reforma de cocina en Costa Blanca",
      summary:
        "Vaciado, instalaciones y montaje con electrodomésticos y encimera cerrados antes de la carpintería.",
      answer:
        "Una reforma de cocina sin paquete de vivienda completa suele situarse en 2026, con IVA, en unos 6.500–18.000 € sin electrodomésticos, según mueble, encimera y si hay paso de gas a eléctrico.",
      updatedAt: u,
      includes: ["Vaciado", "Fontanería/electricidad de primer pase", "Montaje de mueble y encimera listados", "Silicona y repasos"],
      excludes: ["Electrodomésticos si no figuran", "Apertura estructural", "Piedra importada sin cotizar"],
      process: ["Medición", "Cierre de SKU y plazos", "Primer pase", "Montaje y puesta en marcha"],
      priceRows: [{ item: "Obra de cocina sin electrodomésticos, IVA incl.", value: "6.500–18.000 €" }],
      faqs: [
        { q: "¿Suministran el mueble?", a: "Montamos cocina del cliente o una gama especificada. El suministro mixto exige lista de interfaces." },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["orihuela-kitchen-bath"],
      relatedGuideIds: ["renovation-permits-costa-blanca"],
    },
    ru: {
      id: "kitchen-renovation",
      locale: "ru",
      name: "Ремонт кухни",
      seoTitle: "Ремонт кухни на Коста-Бланке | Casa Expert",
      description:
        "Ремонт кухни: инженерия, столешница и согласование техники на Коста-Бланке.",
      h1: "Ремонт кухни на Коста-Бланке",
      summary:
        "Демонтаж, инженерия и монтаж: техника и столешница фиксируются до корпуса.",
      answer:
        "Ремонт кухни без полного ремонта жилья в 2026 году часто 6 500–18 000 € с IVA без техники — зависит от корпуса, столешницы и перевода с газа на электричество.",
      updatedAt: u,
      includes: ["Демонтаж", "Черновая вода/электричество", "Монтаж указанного корпуса и столешницы", "Герметик и сдача"],
      excludes: ["Техника, если не в смете", "Несущие проёмы", "Камень под заказ без цены"],
      process: ["Обмер", "Артикулы и сроки", "Черновик", "Сборка и пуск"],
      priceRows: [{ item: "Работы без техники, с IVA", value: "6 500–18 000 €" }],
      faqs: [
        { q: "Вы поставляете кухню?", a: "Можем смонтировать кухню клиента или включить согласованную линейку. Смешанная поставка — только со списком стыков." },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["orihuela-kitchen-bath"],
      relatedGuideIds: ["renovation-permits-costa-blanca"],
    },
  },
  engineering: {
    en: {
      id: "engineering",
      locale: "en",
      name: "Electrical, plumbing and air conditioning",
      seoTitle: "Electrical, plumbing and AC in Costa Blanca | Casa Expert",
      description:
        "Rewires, plumbing replacements and air-conditioning work coordinated with renovation or as standalone jobs on the Costa Blanca.",
      h1: "Electrical, plumbing and air conditioning",
      summary:
        "Building services that are specified, tested and handed over with certificates that belong to the work done — not a generic “installations” label.",
      answer:
        "Services work is quoted from a board/plant survey. A partial apartment rewire, a bathroom first-fix or a split AC pair cannot share one public price. We publish factors, not a fake catalogue price.",
      updatedAt: u,
      includes: ["Survey of existing board, plant and routes", "Specified materials", "Testing in scope", "As-fitted notes"],
      excludes: ["Utility company meter or supply upgrades they own", "Unlicensed gas work", "Design of whole-building community plant"],
      process: ["Survey", "Schematic and exclusions", "Install", "Test and handover"],
      priceRows: [
        { item: "Split AC pair, straightforward install", value: "Survey range" },
        { item: "Board upgrade", value: "Survey range" },
      ],
      faqs: [
        { q: "Can engineering run without a full renovation?", a: "Yes. Isolated AC, leaks or board faults are scheduled as standalone tickets." },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["alicante-apartment-renovation"],
      relatedGuideIds: ["renovation-permits-costa-blanca"],
    },
    es: {
      id: "engineering",
      locale: "es",
      name: "Electricidad, fontanería y aire acondicionado",
      seoTitle: "Electricidad, fontanería y aire acondicionado en Costa Blanca | Casa Expert",
      description:
        "Cuadros, fontanería y climatización coordinados con reforma o como trabajo suelto en Costa Blanca.",
      h1: "Electricidad, fontanería y aire acondicionado",
      summary:
        "Instalaciones especificadas, probadas y entregadas con la documentación que corresponde al trabajo hecho.",
      answer:
        "Las instalaciones se cotizan con visita a cuadro y plant. Un rewire parcial, un primer pase de baño o un split no comparten un precio público único. Publicamos factores, no un catálogo ficticio.",
      updatedAt: u,
      includes: ["Visita de cuadro, plant y recorridos", "Materiales especificados", "Pruebas de alcance", "Notas as-fitted"],
      excludes: ["Ampliaciones de acometida de la comercializadora/distribuidora", "Gas sin habilitación", "Planta comunitaria de edificio"],
      process: ["Visita", "Esquema y exclusiones", "Ejecución", "Pruebas y entrega"],
      priceRows: [
        { item: "Split sencillo", value: "Rango de visita" },
        { item: "Ampliación de cuadro", value: "Rango de visita" },
      ],
      faqs: [
        { q: "¿Hacen instalaciones sin reforma integral?", a: "Sí: AC, fugas o averías de cuadro como tickets sueltos." },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["alicante-apartment-renovation"],
      relatedGuideIds: ["renovation-permits-costa-blanca"],
    },
    ru: {
      id: "engineering",
      locale: "ru",
      name: "Электрика, сантехника и кондиционирование",
      seoTitle: "Электрика, сантехника и кондиционеры на Коста-Бланке | Casa Expert",
      description:
        "Щиты, сантехника и климат — вместе с ремонтом или отдельными заявками на Коста-Бланке.",
      h1: "Электрика, сантехника и кондиционирование",
      summary:
        "Инженерия по спецификации, с испытаниями и документами именно на сделанные работы.",
      answer:
        "Инженерия считается после осмотра щита и трасс. Частичная замена проводки, черновая ванная и одна сплит-система не имеют одной публичной цены. Публикуем факторы, не фальшивый прайс.",
      updatedAt: u,
      includes: ["Осмотр щита и трасс", "Указанные материалы", "Испытания по объёму", "Исполнительные заметки"],
      excludes: ["Усиление ввода, которое делает сеть", "Газ без допуска", "Общедомовая plant comunidad"],
      process: ["Осмотр", "Схема и исключения", "Монтаж", "Пуск и сдача"],
      priceRows: [
        { item: "Простая сплит-пара", value: "После осмотра" },
        { item: "Модернизация щита", value: "После осмотра" },
      ],
      faqs: [
        { q: "Можно инженерию без ремонта всей квартиры?", a: "Да: кондиционер, протечка или щит как отдельная заявка." },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["alicante-apartment-renovation"],
      relatedGuideIds: ["renovation-permits-costa-blanca"],
    },
  },
  "property-preparation": {
    en: {
      id: "property-preparation",
      locale: "en",
      name: "Property preparation and post-build cleaning",
      seoTitle: "Property preparation and post-construction cleaning | Casa Expert",
      description:
        "Post-renovation cleaning and sale/rental preparation on the Costa Blanca, with a checklist of what is included.",
      h1: "Property preparation and post-construction cleaning",
      summary:
        "Make-ready cleaning after works, plus a defined preparation pack for sale or holiday rental — not an open-ended maid service.",
      answer:
        "Post-construction cleaning is quoted by area and contamination type. A typical empty apartment after renovation is often a half-day to two-day pack; cement haze, paint overspray and terrace salt sit on the extras list rather than in a cheap headline rate.",
      updatedAt: u,
      includes: ["Dust-down after trades", "Sanitary and glass listed in the pack", "Basic terrace wash if specified"],
      excludes: ["Mould remediation", "Exterior pressure washing of community areas", "Staging furniture"],
      process: ["Walk-through with snag photos", "Cleaning pack", "Optional second pass after snag"],
      priceRows: [{ item: "Empty apartment after works", value: "Quoted by m² and condition" }],
      faqs: [
        { q: "Is this the same as holiday-rental turnover?", a: "No. Turnover cleaning is a different product and is only offered if explicitly scoped." },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["alicante-apartment-renovation"],
      relatedGuideIds: ["renovation-permits-costa-blanca"],
    },
    es: {
      id: "property-preparation",
      locale: "es",
      name: "Preparación de inmuebles y limpieza post-obra",
      seoTitle: "Limpieza post-obra y preparación para venta o alquiler | Casa Expert",
      description:
        "Limpieza post-reforma y preparación para venta o alquiler en Costa Blanca, con checklist de inclusiones.",
      h1: "Preparación de inmuebles y limpieza post-obra",
      summary:
        "Limpieza de entrega tras obra y un pack definido para venta o alquiler vacacional, no un servicio doméstico abierto.",
      answer:
        "La limpieza post-obra se cotiza por superficie y tipo de suciedad. Un piso vacío tras reforma suele ser de medio día a dos días; velado de cemento, pintura y sal en terraza van como extras, no en un precio reclamo.",
      updatedAt: u,
      includes: ["Desempolvado tras gremios", "Sanitarios y cristales del pack", "Terraza básica si está prevista"],
      excludes: ["Remediación de moho", "Zonas comunitarias", "Home staging"],
      process: ["Paseo con fotos de pendientes", "Pack de limpieza", "Segunda pasada opcional"],
      priceRows: [{ item: "Piso vacío post-obra", value: "Por m² y estado" }],
      faqs: [
        { q: "¿Es el cambio de toallas del alquiler vacacional?", a: "No. El turnover es otro producto y solo si se acota." },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["alicante-apartment-renovation"],
      relatedGuideIds: ["renovation-permits-costa-blanca"],
    },
    ru: {
      id: "property-preparation",
      locale: "ru",
      name: "Подготовка объекта и уборка после ремонта",
      seoTitle: "Уборка после ремонта и подготовка к продаже | Casa Expert",
      description:
        "Послеремонтная уборка и подготовка к продаже или аренде на Коста-Бланке со списком включений.",
      h1: "Подготовка недвижимости и уборка после ремонта",
      summary:
        "Сдача после работ и понятный пакет к продаже или сезонной аренде — не открытый клининг «по вызову».",
      answer:
        "Послестроительная уборка считается по площади и типу загрязнений. Пустая квартира после ремонта часто от половины дня до двух; цементная плёнка, краска и соль на террасе — в допах, не в рекламной ставке.",
      updatedAt: u,
      includes: ["Обеспыливание после бригад", "Сантехника и стекло из пакета", "Базовая терраса, если указана"],
      excludes: ["Плесень как санация", "Зоны comunidad", "Хомстейджинг"],
      process: ["Обход с фото", "Пакет уборки", "Второй проход по желанию"],
      priceRows: [{ item: "Пустая квартира после работ", value: "По м² и состоянию" }],
      faqs: [
        { q: "Это смена белья для vacation rental?", a: "Нет. Turnover — другой продукт и только если он в объёме." },
      ],
      relatedAreaIds: ["alicante", "torrevieja", "orihuela-costa"],
      relatedProjectIds: ["alicante-apartment-renovation"],
      relatedGuideIds: ["renovation-permits-costa-blanca"],
    },
  },
};

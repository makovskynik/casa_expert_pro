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
        "As of 15 September 2026, published installed prices start from about €4,950 IVA included for a compact ~3 kWp rooftop — no battery, no subsidy deducted. Larger 4.5–6 kWp villas sit higher; access, board work and orientation move the figure. The calculator gives a property-specific band; it is not a contract.",
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
        { title: "Share the brief", body: "Town, bill or annual kWh, and photos of the roof and board." },
        { title: "Preliminary range", body: "We return indicative kWp and an IVA-inclusive band, then survey if you proceed." },
        { title: "Written quote", body: "Equipment, exclusions, programme and who files legalisation — locked before works." },
        { title: "Installation window", body: "Confirmed after materials and access are agreed." },
        { title: "Handover", body: "Commissioning pack, serials, guarantees and aftercare contacts in writing." },
      ],
      highlight: {
        item: "~3 kWp rooftop, IVA incl., no battery",
        value: "From €4,950",
      },
      priceRows: [
        { item: "Battery add-on (usable kWh)", value: "€650–€900 / kWh", note: "Not assumed by default" },
        { item: "Complex roof / north / heavy shade", value: "+15% on PV line", note: "Survey confirms" },
        { item: "Subsidies / municipal relief", value: "Not deducted in the quote", note: "Shown separately if eligible" },
      ],
      extras: [
        {
          title: "Technical maintenance",
          body: "Scheduled checks of modules, inverter, protections and performance — for systems we installed or third-party arrays after a survey.",
        },
        {
          title: "Panel cleaning",
          body: "Safe roof or ground-level cleaning to recover output lost to dust, salt and pollen on this coast.",
        },
        {
          title: "Upgrades: more panels or a battery",
          body: "Expand an existing array or add storage when the board, inverter and roof rights allow — quoted as a scoped add-on.",
        },
        {
          title: "Electrician call-out for PV faults",
          body: "Diagnosis and repair of faults on the solar side: inverter errors, trips, cabling and board issues tied to the plant.",
        },
        {
          title: "Extra structures for panels",
          body: "Pergolas, canopies and similar frames designed to carry modules where the roof is limited — structure and PV scoped together.",
        },
      ],
      faqs: [
        {
          q: "How many panels for 5,000 kWh per year in Torrevieja?",
          a: "With a south-facing roof, 5,000 kWh typically points to about 3.15 kWp — 7 × 450 W panels — before evening loads, shade and export. The calculator shows the working.",
        },
        {
          q: "Do you install in Alicante, Torrevieja and Orihuela Costa?",
          a: "Yes. Those are our core towns on the Costa Blanca. Other municipalities on this coast are possible after we confirm travel and access.",
        },
        {
          q: "Do you handle legalisation?",
          a: "Residential legalisation is included when the quote says so. Comunidad installations and non-standard connections are scoped separately.",
        },
        {
          q: "Is a battery required?",
          a: "No. Batteries raise self-consumption for evening-heavy loads; they are optional and priced as a separate line.",
        },
        {
          q: "Do you maintain or upgrade systems already installed?",
          a: "Yes. Cleaning, technical checks, extra panels or batteries, PV fault call-outs and panel-ready structures are quoted after a short brief — including third-party installs after a survey.",
        },
        {
          q: "How long does a standard rooftop job take?",
          a: "After materials and access are locked, many residential installs finish in days to a couple of weeks on site. Legalisation and grid paperwork can run longer; the quote states both.",
        },
        {
          q: "Can you manage the project if the owner is abroad?",
          a: "Yes. You get one point of contact, a written scope and photo updates at agreed stages before handover.",
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
        "A 15 de septiembre de 2026 los precios publicados empiezan desde unos 4.950 € con IVA para una cubierta compacta de ~3 kWp — sin batería y sin descontar ayudas. Villas de 4,5–6 kWp quedan por encima; acceso, cuadro y orientación mueven la cifra. La calculadora da una banda previa; no es un contrato.",
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
        { title: "Envíe el brief", body: "Municipio, factura o kWh y fotos de cubierta y cuadro." },
        { title: "Rango preliminar", body: "Devolvemos kWp orientativo y banda con IVA; si sigue, hay visita." },
        { title: "Oferta escrita", body: "Equipos, exclusiones, plazo y quién legaliza — cerrado antes de obra." },
        { title: "Ventana de instalación", body: "Se agenda con materiales y acceso cerrados." },
        { title: "Entrega", body: "Dossier, series, garantías y contactos de postventa por escrito." },
      ],
      highlight: {
        item: "~3 kWp en cubierta, IVA incl., sin batería",
        value: "Desde 4.950 €",
      },
      priceRows: [
        { item: "Batería (kWh útiles)", value: "650–900 € / kWh", note: "No se asume por defecto" },
        { item: "Cubierta compleja / norte / sombra", value: "+15% en FV", note: "Confirma la visita" },
        { item: "Ayudas", value: "No se restan solas", note: "Se informan aparte" },
      ],
      extras: [
        {
          title: "Mantenimiento técnico",
          body: "Revisiones de módulos, inversor, protecciones y rendimiento — en instalaciones nuestras o de terceros tras visita.",
        },
        {
          title: "Limpieza de placas",
          body: "Limpieza segura en cubierta o suelo para recuperar producción por polvo, sal y polen en esta costa.",
        },
        {
          title: "Ampliación: más placas o batería",
          body: "Ampliar el campo o añadir almacenamiento si el cuadro, el inversor y el derecho de cubierta lo permiten.",
        },
        {
          title: "Aviso de electricista por fallos FV",
          body: "Diagnóstico y reparación en el lado solar: errores de inversor, disparos, cableado y cuadro ligados a la planta.",
        },
        {
          title: "Estructuras extras para placas",
          body: "Pérgolas, porches y similares pensados para llevar módulos cuando la cubierta no basta — estructura y FV en el mismo alcance.",
        },
      ],
      faqs: [
        {
          q: "¿Cuántas placas para 5.000 kWh/año en Torrevieja?",
          a: "Con cubierta sur, 5.000 kWh apuntan a unos 3,15 kWp — 7 módulos de 450 W — antes de carga nocturna, sombra y vertido. La calculadora muestra el cálculo.",
        },
        {
          q: "¿Instalan en Alicante, Torrevieja y Orihuela Costa?",
          a: "Sí. Son nuestros municipios principales en Costa Blanca. Otros pueblos de la costa son posibles tras confirmar desplazamiento y acceso.",
        },
        {
          q: "¿Incluyen la legalización?",
          a: "La legalización residencial entra cuando el presupuesto lo dice. Comunidades y acometidas no estándar se cotizan aparte.",
        },
        {
          q: "¿Hace falta batería?",
          a: "No. Sube el autoconsumo si la carga es nocturna; es opcional y va como partida propia.",
        },
        {
          q: "¿Hacen mantenimiento o ampliación de instalaciones ya montadas?",
          a: "Sí. Limpieza, revisiones, más placas o batería, avisos por fallos FV y estructuras para módulos se cotizan tras un brief — también en plantas de terceros tras visita.",
        },
        {
          q: "¿Cuánto tarda una instalación residencial típica?",
          a: "Con materiales y acceso cerrados, muchas instalaciones se resuelven en días o un par de semanas en obra. La legalización y papeles de red pueden alargarse; ambos plazos van en la oferta.",
        },
        {
          q: "¿Pueden gestionar el proyecto si el propietario está fuera?",
          a: "Sí. Un interlocutor, alcance escrito y fotos en etapas acordadas hasta la entrega.",
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
        "На 15 сентября 2026 публичные цены начинаются примерно от 4 950 € с IVA за компактную кровлю ~3 кВтp — без батареи и без вычета субсидий. Виллы 4,5–6 кВтp выше; доступ, щит и ориентация сдвигают цифру. Калькулятор даёт предварительную полосу, это не договор.",
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
        { title: "Краткий бриф", body: "Город, счёт или кВт·ч, фото крыши и щита." },
        { title: "Предварительный диапазон", body: "Считаем ориентир по кВтp и полосу с IVA; дальше — выезд." },
        { title: "Письменная оферта", body: "Оборудование, исключения, сроки и кто подаёт легализацию." },
        { title: "Окно монтажа", body: "После фиксации материалов и доступа." },
        { title: "Сдача", body: "Документы, серийники, гарантии и контакты сервиса письменно." },
      ],
      highlight: {
        item: "~3 кВтp на крыше, с IVA, без батареи",
        value: "от 4 950 €",
      },
      priceRows: [
        { item: "Батарея (полезные кВт·ч)", value: "650–900 € / кВт·ч", note: "По умолчанию не входит" },
        { item: "Сложная крыша / север / тень", value: "+15% к ФЭ", note: "После осмотра" },
        { item: "Субсидии", value: "Не вычитаем автоматически", note: "Отдельной строкой" },
      ],
      extras: [
        {
          title: "Техническое обслуживание",
          body: "Плановые проверки модулей, инвертора, защит и выработки — для наших и сторонних систем после осмотра.",
        },
        {
          title: "Мойка панелей",
          body: "Безопасная чистка на крыше или с земли: пыль, соль и пыльца на этом побережье съедают выработку.",
        },
        {
          title: "Апгрейд: панели или аккумулятор",
          body: "Расширение массива или батарея, если позволяют щит, инвертор и права на кровлю — отдельной сметой.",
        },
        {
          title: "Вызов электрика по неисправностям СЭС",
          body: "Диагностика и ремонт солнечной стороны: ошибки инвертора, срабатывания, кабель и щит, связанные с установкой.",
        },
        {
          title: "Доп. конструкции под панели",
          body: "Беседки, навесы и подобные рамы под модули, когда крыши не хватает — конструкция и СЭС в одном объёме.",
        },
      ],
      faqs: [
        {
          q: "Сколько панелей на 5 000 кВт·ч в год в Торревьехе?",
          a: "При южной крыше 5 000 кВт·ч — это около 3,15 кВтp, 7 × 450 Вт, до вечерней нагрузки, тени и экспорта. Расчёт виден в калькуляторе.",
        },
        {
          q: "Вы ставите в Аликанте, Торревьехе и Ориуэле Коста?",
          a: "Да. Это наши основные города на Коста-Бланке. Другие населённые пункты побережья возможны после подтверждения выезда и доступа.",
        },
        {
          q: "Вы делаете легализацию?",
          a: "Жилая — да, если это написано в смете. Comunidad и нестандартные подключения считаются отдельно.",
        },
        {
          q: "Нужна ли батарея?",
          a: "Нет. Она повышает самопотребление при вечерней нагрузке и идёт отдельной строкой.",
        },
        {
          q: "Обслуживаете или улучшаете уже установленные системы?",
          a: "Да. Мойка, техобслуживание, доп. панели или батарея, выезд по неисправностям СЭС и конструкции под модули — после короткого брифа, в том числе для чужих установок после осмотра.",
        },
        {
          q: "Сколько длится типичный монтаж на крыше?",
          a: "После фиксации материалов и доступа многие жилые объекты закрываются за дни или пару недель на объекте. Легализация и сетевые бумаги могут идти дольше — оба срока в оферте.",
        },
        {
          q: "Можно вести проект, если владелец за границей?",
          a: "Да. Один контакт, письменный объём и фотоотчёты на согласованных этапах до сдачи.",
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
        { title: "Brief", body: "Photos and, if you have them, drawings or a previous quote." },
        { title: "Survey and scope", body: "Written allowances and exclusions after the visit." },
        { title: "Programme", body: "Access rules and payment milestones locked before start." },
        { title: "Works", body: "Weekly photo updates to the locked scope." },
        { title: "Handover", body: "Snagging, certificates that belong to the works, keys." },
      ],
      highlight: {
        item: "Apartment, mid-range finishes, IVA incl.",
        value: "€550–€1,200 / m²",
        note: "Survey overrides",
      },
      priceRows: [
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
        {
          q: "What does the €550–€1,200 / m² band include?",
          a: "It is a 2026 working band for mid-range apartment finishes with IVA, after survey. It excludes furniture, structural surprises and major licensed works unless those lines are written into the quote.",
        },
        {
          q: "Do you handle renovation licences?",
          a: "We coordinate what the town hall requires for the scoped works. Licence and technician fees sit as their own lines when needed — they are not hidden inside the €/m² narrative.",
        },
        {
          q: "Can you renovate an occupied home?",
          a: "Yes, with phased access and protection. Occupied or villa programmes are quoted separately because labour and sequencing change.",
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
        { title: "Brief", body: "Fotos y planos o presupuestos previos si existen." },
        { title: "Visita y alcance", body: "Partidas y exclusiones por escrito." },
        { title: "Programa", body: "Acceso e hitos de pago cerrados antes de empezar." },
        { title: "Obra", body: "Reporte fotográfico semanal al alcance cerrado." },
        { title: "Entrega", body: "Repasos, documentación de la obra y llaves." },
      ],
      highlight: {
        item: "Piso, acabados medios, IVA incl.",
        value: "550–1.200 € / m²",
        note: "La visita manda",
      },
      priceRows: [
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
        {
          q: "¿Qué incluye la banda 550–1.200 €/m²?",
          a: "Es una banda de trabajo 2026 para acabados de piso de gama media con IVA, tras visita. No incluye mobiliario, imprevistos estructurales ni obra mayor licenciada salvo que figuren en la oferta.",
        },
        {
          q: "¿Gestionan la licencia?",
          a: "Coordinamos lo que pida el ayuntamiento para el alcance. Licencia y técnico van como partidas propias cuando hacen falta — no se esconden en el €/m².",
        },
        {
          q: "¿Reforman con la vivienda habitada?",
          a: "Sí, por fases y con protección. Programas habitados o de villa se cotizan aparte porque cambia la mano de obra.",
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
        { title: "Бриф", body: "Фото, чертежи или старые сметы." },
        { title: "Осмотр и объём", body: "Письменные допущения и исключения." },
        { title: "График", body: "Доступ и этапы оплаты до старта." },
        { title: "Работы", body: "Еженедельные фото по закрытому объёму." },
        { title: "Сдача", body: "Дефектовка, документы по работам, ключи." },
      ],
      highlight: {
        item: "Квартира, средняя отделка, с IVA",
        value: "550–1 200 € / м²",
        note: "Решает осмотр",
      },
      priceRows: [
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
        {
          q: "Что входит в 550–1 200 €/м²?",
          a: "Рабочий диапазон 2026 для средней отделки квартиры с IVA после осмотра. Без мебели, скрытых конструкций и лицензируемых major works, если они не в смете.",
        },
        {
          q: "Вы оформляете licencia?",
          a: "Координируем требования ayuntamiento по объёму. Licencia и техник — отдельными строками, не спрятаны в €/м².",
        },
        {
          q: "Можно ремонт с проживанием?",
          a: "Да, этапами и с защитой. Жилой режим или вилла считаются отдельно — меняется труд и график.",
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
      process: [
        { title: "Measure and photo existing falls and wastes", body: "Capture falls, wastes and access constraints before any strip-out." },
        { title: "Lock sanitary and tile SKUs", body: "Fix models and lead times in writing so the programme does not slip mid-works." },
        { title: "Waterproof hold-point before tile", body: "Wet-area build-up is checked and signed off before tiling starts." },
        { title: "Commission and snag", body: "Test drains and fittings, then close the snag list with photos." },
      ],
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
      process: [
        { title: "Medición y fotos de pendientes", body: "Documentamos pendientes, desagües y acceso antes del vaciado." },
        { title: "Cierre de SKU", body: "Modelos y plazos por escrito para no cambiar a mitad de obra." },
        { title: "Parada de control antes de alicatar", body: "La impermeabilización se valida antes del alicatado." },
        { title: "Puesta en marcha y repasos", body: "Pruebas de desagües y lista de pendientes con fotos." },
      ],
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
      process: [
        { title: "Обмер уклонов", body: "Фиксируем уклоны, выпуски и доступ до демонтажа." },
        { title: "Фиксация артикулов", body: "Модели и сроки письменно, без смены на середине работ." },
        { title: "Стоп-контроль до плитки", body: "Гидроизоляция принимается до укладки плитки." },
        { title: "Пуск и дефектовка", body: "Проверка сливов и закрытие дефектовки с фото." },
      ],
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
      process: [
        { title: "Measure and services survey", body: "Confirm carcass footprint, water/power points and extraction before ordering." },
        { title: "Lock SKUs and lead times", body: "Appliances and worktop choices freeze the programme and exclusions." },
        { title: "First fix", body: "Run water and power to the locked drawing while carcasses are in transit." },
        { title: "Fit and commission", body: "Install, silicone, test and snag against the written list." },
      ],
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
      process: [
        { title: "Medición", body: "Confirmamos huella, puntos de agua/luz y extracción antes de pedir." },
        { title: "Cierre de SKU y plazos", body: "Electrodomésticos y encimera cierran programa y exclusiones." },
        { title: "Primer pase", body: "Fontanería y electricidad según plano cerrado mientras llega el mueble." },
        { title: "Montaje y puesta en marcha", body: "Montaje, silicona, pruebas y repasos según lista escrita." },
      ],
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
      process: [
        { title: "Обмер", body: "Корпус, точки воды/света и вытяжка — до заказа." },
        { title: "Артикулы и сроки", body: "Техника и столешница фиксируют график и исключения." },
        { title: "Черновик", body: "Вода и электрика по закрытому чертежу, пока едет корпус." },
        { title: "Сборка и пуск", body: "Монтаж, герметик, испытания и дефектовка по списку." },
      ],
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
      process: [
        { title: "Survey", body: "Board, plant and routes are photographed and noted before any opening-up." },
        { title: "Schematic and exclusions", body: "Scope, materials and what stays with the utility company are written down." },
        { title: "Install", body: "Works follow the locked schematic with site protection where occupied." },
        { title: "Test and handover", body: "Tests in scope plus as-fitted notes for the owner." },
      ],
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
      process: [
        { title: "Visita", body: "Cuadro, plant y recorridos se documentan antes de abrir." },
        { title: "Esquema y exclusiones", body: "Alcance, materiales y lo que queda en la distribuidora, por escrito." },
        { title: "Ejecución", body: "Obra según esquema cerrado, con protección si la vivienda está habitada." },
        { title: "Pruebas y entrega", body: "Pruebas de alcance y notas as-fitted para el propietario." },
      ],
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
      process: [
        { title: "Осмотр", body: "Щит, оборудование и трассы фиксируем до вскрытия." },
        { title: "Схема и исключения", body: "Объём, материалы и зона ответственности сети — письменно." },
        { title: "Монтаж", body: "Работы по закрытой схеме, с защитой при проживании." },
        { title: "Пуск и сдача", body: "Испытания по объёму и исполнительные заметки собственнику." },
      ],
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
      process: [
        { title: "Walk-through with snag photos", body: "Agree rooms, finishes and any builder debris still on site." },
        { title: "Cleaning pack", body: "Run the agreed pack — post-build or make-ready for keys or guests." },
        { title: "Optional second pass after snag", body: "Return after trades close remaining snags if booked." },
      ],
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
      process: [
        { title: "Paseo con fotos de pendientes", body: "Acordamos estancias, acabados y restos de obra aún en el piso." },
        { title: "Pack de limpieza", body: "Ejecutamos el pack cerrado — post-obra o puesta a punto para llaves o huéspedes." },
        { title: "Segunda pasada opcional", body: "Volvemos tras los repasos de gremios si está contratado." },
      ],
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
      process: [
        { title: "Обход с фото", body: "Согласуем комнаты, отделку и остатки строймусора на объекте." },
        { title: "Пакет уборки", body: "Делаем согласованный пакет — после ремонта или подготовка под ключи/гостей." },
        { title: "Второй проход по желанию", body: "Возвращаемся после закрытия дефектов бригадами, если заказано." },
      ],
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

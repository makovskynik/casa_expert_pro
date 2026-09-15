import type { GuideCopy } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/config";
import type { GuideId } from "@/lib/i18n/routing";
import { CONTENT_UPDATED_AT } from "@/lib/content/site";

const u = CONTENT_UPDATED_AT;

const sources = [
  {
    label: "PVGIS 5.3 (JRC)",
    href: "https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis/using-pvgis-5/api-non-interactive-service_en",
  },
  {
    label: "IDAE — guías de autoconsumo",
    href: "https://www.idae.es/tecnologias/energias-renovables/oficina-de-autoconsumo/guias-tecnicas-sobre-autoconsumo",
  },
  {
    label: "Real Decreto 244/2019 (BOE)",
    href: "https://www.boe.es/buscar/doc.php?id=BOE-A-2019-5089",
  },
];

export const guides: Record<GuideId, Record<Locale, GuideCopy>> = {
  "solar-cost-costa-blanca-2026": {
    en: {
      id: "solar-cost-costa-blanca-2026",
      locale: "en",
      name: "What solar costs on the Costa Blanca in 2026",
      seoTitle: "Solar panel cost in Costa Blanca 2026 | Casa Expert",
      description:
        "IVA-inclusive working ranges for rooftop PV in Alicante, Torrevieja and Orihuela Costa, dated 15 September 2026, with methodology and exclusions.",
      h1: "What does a solar installation cost on the Costa Blanca in 2026?",
      summary: "Published ranges, what moves them, and why subsidies are not subtracted in the public calculator.",
      answer:
        "On 15 September 2026 Casa Expert’s public matrix prices a standard residential rooftop system at about €1,250–€2,100 per kWp IVA included, depending on size, access and roof complexity. A 5 kWp example therefore sits near €6,250–€10,500 before batteries. These are installer-reviewed market bands for this coast, not a live tender and not a subsidy-net figure.",
      updatedAt: u,
      sections: [
        {
          heading: "What is in the public range",
          body: [
            "Modules, inverter, structure, DC/AC protection, basic board works and residential legalisation when the quote says they are included.",
            "Scaffolding, crane, north-facing planes, heavy shade, comunidad process and batteries are outside the headline €/kWp until listed.",
          ],
        },
        {
          heading: "Methodology",
          body: [
            "Specific yield is a static table per municipality, derived from typical PVGIS values for this coast — not a live API call.",
            "Price bands are a size-tiered €/kWp matrix with IVA on. We will change the model version when tariffs or the matrix change.",
          ],
        },
      ],
      priceRows: [
        { item: "Up to 4.5 kWp", value: "€1,650–€2,100 / kWp" },
        { item: "4.5–7 kWp", value: "€1,400–€1,800 / kWp" },
        { item: "7–20 kWp", value: "€1,250–€1,600 / kWp" },
        { item: "Battery", value: "€650–€900 / usable kWh" },
      ],
      faqs: [
        {
          q: "Why not subtract Next Generation or municipal aid?",
          a: "Eligibility depends on the file, dates and the dwelling. Automatic subtraction would misstate the cash price.",
        },
      ],
      sources,
      relatedServiceIds: ["solar-panels"],
    },
    es: {
      id: "solar-cost-costa-blanca-2026",
      locale: "es",
      name: "Precio de placas solares en Costa Blanca 2026",
      seoTitle: "Precio de placas solares en Costa Blanca 2026 | Casa Expert",
      description:
        "Rangos con IVA para FV residencial en Alicante, Torrevieja y Orihuela Costa, fecha 15 de septiembre de 2026, con metodología.",
      h1: "¿Cuánto cuesta instalar placas solares en Costa Blanca en 2026?",
      summary: "Rangos publicados, qué los mueve y por qué la calculadora no resta ayudas.",
      answer:
        "A 15 de septiembre de 2026 la matriz pública de Casa Expert sitúa un sistema residencial tipo en unos 1.250–2.100 €/kWp con IVA, según tamaño, acceso y complejidad. Un ejemplo de 5 kWp queda cerca de 6.250–10.500 € antes de batería. Son bandas de costa revisadas, no una licitación ni un neto de subvención.",
      updatedAt: u,
      sections: [
        {
          heading: "Qué entra en el rango público",
          body: [
            "Módulos, inversor, estructura, protecciones, cuadro básico y legalización residencial si la oferta lo dice.",
            "Andamio, grúa, planos norte, sombra fuerte, comunidad y baterías quedan fuera del €/kWp reclamo hasta listarse.",
          ],
        },
        {
          heading: "Metodología",
          body: [
            "La productividad es una tabla estática por municipio, derivada de valores PVGIS típicos de esta costa — no una API en vivo.",
            "Los precios son una matriz por tramo de kWp con IVA. Cambiará la versión del modelo si cambian tarifas o matriz.",
          ],
        },
      ],
      priceRows: [
        { item: "Hasta 4,5 kWp", value: "1.650–2.100 € / kWp" },
        { item: "4,5–7 kWp", value: "1.400–1.800 € / kWp" },
        { item: "7–20 kWp", value: "1.250–1.600 € / kWp" },
        { item: "Batería", value: "650–900 € / kWh útil" },
      ],
      faqs: [
        {
          q: "¿Por qué no restan ayudas?",
          a: "La elegibilidad depende del expediente, las fechas y la vivienda. Restarlas por defecto falsearía el precio de caja.",
        },
      ],
      sources,
      relatedServiceIds: ["solar-panels"],
    },
    ru: {
      id: "solar-cost-costa-blanca-2026",
      locale: "ru",
      name: "Сколько стоят солнечные панели на Коста-Бланке в 2026",
      seoTitle: "Цена солнечных панелей на Коста-Бланке 2026 | Casa Expert",
      description:
        "Диапазоны с IVA для жилой СЭС в Аликанте, Торревьехе и Ориуэле Коста на 15 сентября 2026, с методикой.",
      h1: "Сколько стоит солнечная установка на Коста-Бланке в 2026 году?",
      summary: "Публичные диапазоны, что их двигает и почему калькулятор не вычитает субсидии.",
      answer:
        "На 15 сентября 2026 публичная матрица Casa Expert: около 1 250–2 100 €/кВтp с IVA в зависимости от размера, доступа и сложности крыши. Пример 5 кВтp — примерно 6 250–10 500 € до батареи. Это береговые коридоры, не тендер и не цена «за вычетом субсидии».",
      updatedAt: u,
      sections: [
        {
          heading: "Что входит в публичный диапазон",
          body: [
            "Модули, инвертор, крепёж, защиты, базовый щит и жилая легализация, если это написано в оферте.",
            "Леса, кран, северные скаты, сильная тень, comunidad и батареи — вне заголовочного €/кВтp.",
          ],
        },
        {
          heading: "Методика",
          body: [
            "Удельная выработка — статическая таблица по муниципалитетам на основе типичных значений PVGIS для этого побережья, не live API.",
            "Цены — матрица по ступеням кВтp с IVA. Версия модели меняется вместе с тарифами или матрицей.",
          ],
        },
      ],
      priceRows: [
        { item: "До 4,5 кВтp", value: "1 650–2 100 € / кВтp" },
        { item: "4,5–7 кВтp", value: "1 400–1 800 € / кВтp" },
        { item: "7–20 кВтp", value: "1 250–1 600 € / кВтp" },
        { item: "Батарея", value: "650–900 € / полезный кВт·ч" },
      ],
      faqs: [
        {
          q: "Почему не вычитаете субсидии?",
          a: "Право зависит от дела, дат и жилья. Автовычет исказил бы кассовую цену.",
        },
      ],
      sources,
      relatedServiceIds: ["solar-panels"],
    },
  },
  "how-many-solar-panels": {
    en: {
      id: "how-many-solar-panels",
      locale: "en",
      name: "How many solar panels for a Costa Blanca villa",
      seoTitle: "How many solar panels do I need in Costa Blanca? | Casa Expert",
      description:
        "Worked examples for 3,000, 5,000 and 8,000 kWh using the Costa Blanca yield table for Torrevieja, Alicante and Orihuela Costa.",
      h1: "How many solar panels does a Costa Blanca villa need?",
      summary: "kWp from annual kWh, then panel count from 450 W modules, with roof and self-consumption caveats.",
      answer:
        "Rule of thumb on this coast, south / optimal tilt: divide annual kWh by about 1,660–1,720. A 5,000 kWh house is about 3.15 kWp, or 7 × 450 W panels, before evening loads, shade and export. The calculator shows the arithmetic including IVA price bands.",
      updatedAt: u,
      sections: [
        {
          heading: "Worked sizes (south, optimal tilt, no battery)",
          body: [
            "3,000 kWh/year ≈ 1.7–1.8 kWp ≈ 4 panels.",
            "5,000 kWh/year ≈ 3.15 kWp ≈ 7 × 450 W panels.",
            "8,000 kWh/year ≈ 4.7–4.9 kWp ≈ 11 panels.",
            "East–west roofs need more kWp for the same annual kWh. Apartments are usually limited by roof rights, not by this arithmetic.",
          ],
        },
      ],
      priceRows: [
        { item: "3,000 kWh example", value: "≈ 4 × 450 W" },
        { item: "5,000 kWh example", value: "≈ 7–8 × 450 W" },
        { item: "8,000 kWh example", value: "≈ 11 × 450 W" },
      ],
      faqs: [
        {
          q: "Should I size to 100% of annual kWh?",
          a: "Not always. Evening-heavy houses export more without a battery. We size after the load profile, not to a marketing percentage.",
        },
      ],
      sources,
      relatedServiceIds: ["solar-panels"],
    },
    es: {
      id: "how-many-solar-panels",
      locale: "es",
      name: "Cuántas placas solares necesita una villa",
      seoTitle: "¿Cuántas placas solares necesito en Costa Blanca? | Casa Expert",
      description:
        "Ejemplos para 3.000, 5.000 y 8.000 kWh con la tabla de Costa Blanca para Torrevieja, Alicante y Orihuela Costa.",
      h1: "¿Cuántas placas solares necesita una villa en Costa Blanca?",
      summary: "De kWh anuales a kWp y a número de módulos de 450 W, con matices de cubierta y autoconsumo.",
      answer:
        "Regla práctica en esta costa, sur e inclinación óptima: divida kWh anuales entre unos 1.660–1.720. Una casa de 5.000 kWh son unos 3,15 kWp, 7 módulos de 450 W, antes de carga nocturna, sombra y vertido. La calculadora enseña la cuenta y el rango con IVA.",
      updatedAt: u,
      sections: [
        {
          heading: "Tamaños tipo (sur, óptima, sin batería)",
          body: [
            "3.000 kWh/año ≈ 1,7–1,8 kWp ≈ 4 placas.",
            "5.000 kWh/año ≈ 3,15 kWp ≈ 7 placas de 450 W.",
            "8.000 kWh/año ≈ 4,7–4,9 kWp ≈ 11 placas.",
            "Cubiertas este–oeste necesitan más kWp. Los pisos suelen limitarse por el derecho de cubierta.",
          ],
        },
      ],
      priceRows: [
        { item: "Ejemplo 3.000 kWh", value: "≈ 4 × 450 W" },
        { item: "Ejemplo 5.000 kWh", value: "≈ 7–8 × 450 W" },
        { item: "Ejemplo 8.000 kWh", value: "≈ 11 × 450 W" },
      ],
      faqs: [
        {
          q: "¿Hay que cubrir el 100% anual?",
          a: "No siempre. Casas nocturnas vierten más sin batería. Dimensionamos con el perfil de carga, no con un porcentaje publicitario.",
        },
      ],
      sources,
      relatedServiceIds: ["solar-panels"],
    },
    ru: {
      id: "how-many-solar-panels",
      locale: "ru",
      name: "Сколько панелей нужно вилле на Коста-Бланке",
      seoTitle: "Сколько солнечных панелей нужно на Коста-Бланке? | Casa Expert",
      description:
        "Примеры на 3 000, 5 000 и 8 000 кВт·ч по таблице Коста-Бланки для Торревьехи, Аликанте и Ориуэлы Коста.",
      h1: "Сколько солнечных панелей нужно вилле на Коста-Бланке?",
      summary: "От годовых кВт·ч к кВтp и к числу модулей 450 Вт, с оговорками по крыше и самопотреблению.",
      answer:
        "Практическое правило на этом побережье, юг и оптимальный угол: разделить годовые кВт·ч на 1 660–1 720. Дом на 5 000 кВт·ч — это около 3,15 кВтp, 7 × 450 Вт, до вечерней нагрузки, тени и экспорта. Калькулятор показывает арифметику и диапазон с IVA.",
      updatedAt: u,
      sections: [
        {
          heading: "Типовые размеры (юг, оптимум, без батареи)",
          body: [
            "3 000 кВт·ч/год ≈ 1,7–1,8 кВтp ≈ 4 панели.",
            "5 000 кВт·ч/год ≈ 3,15 кВтp ≈ 7 × 450 Вт.",
            "8 000 кВт·ч/год ≈ 4,7–4,9 кВтp ≈ 11 панелей.",
            "Восток–запад требуют больше кВтp. Квартиры обычно упираются в право на крышу.",
          ],
        },
      ],
      priceRows: [
        { item: "Пример 3 000 кВт·ч", value: "≈ 4 × 450 Вт" },
        { item: "Пример 5 000 кВт·ч", value: "≈ 7–8 × 450 Вт" },
        { item: "Пример 8 000 кВт·ч", value: "≈ 11 × 450 Вт" },
      ],
      faqs: [
        {
          q: "Нужно закрывать 100% годовых кВт·ч?",
          a: "Не всегда. При вечерней нагрузке без батареи больше экспорт. Считаем по профилю, не по рекламному проценту.",
        },
      ],
      sources,
      relatedServiceIds: ["solar-panels"],
    },
  },
  "renovation-permits-costa-blanca": {
    en: {
      id: "renovation-permits-costa-blanca",
      locale: "en",
      name: "Renovation permits on the Costa Blanca",
      seoTitle: "Renovation licences in Alicante province | Casa Expert",
      description:
        "How Casa Expert treats declaración responsable vs obra mayor, comunidad rules and what is not legal advice.",
      h1: "Which licence does a renovation need on the Costa Blanca?",
      summary: "Town halls differ. We write the assumed licence path in the quote instead of hiding it.",
      answer:
        "Interior finishes in a private dwelling often travel as a declaración responsable or equivalent local notice; structural changes, façade, volume and some installations need a technician and an obra mayor file. Alicante, Torrevieja and Orihuela Costa do not share one form. Casa Expert states the assumed path in the quote. This page is not legal advice.",
      updatedAt: u,
      sections: [
        {
          heading: "What we put in writing",
          body: [
            "Whether the price includes a technician, drawings, or only the building work.",
            "Comunidad permissions for roof plant, skips and working hours.",
            "Who files, and what happens if the town hall asks for a different procedure after opening-up.",
          ],
        },
      ],
      faqs: [
        {
          q: "Can you start without a licence because it is “only a bathroom”?",
          a: "No. We will not treat licence risk as a verbal extra. If the town requires a file, it is a line in the scope.",
        },
      ],
      sources: [
        {
          label: "Check the relevant ayuntamiento building desk",
          href: "https://www.alicante.es/",
        },
      ],
      relatedServiceIds: ["home-renovation", "bathroom-renovation", "engineering"],
    },
    es: {
      id: "renovation-permits-costa-blanca",
      locale: "es",
      name: "Licencias de reforma en Costa Blanca",
      seoTitle: "Licencias de reforma en la provincia de Alicante | Casa Expert",
      description:
        "Cómo trata Casa Expert la declaración responsable frente a obra mayor, la comunidad y qué no es asesoramiento jurídico.",
      h1: "¿Qué licencia necesita una reforma en Costa Blanca?",
      summary: "Cada ayuntamiento es distinto. El camino supuesto va en el presupuesto, no escondido.",
      answer:
        "Los acabados interiores de una vivienda particular suelen ir por declaración responsable o trámite local equivalente; cambios estructurales, fachada, volumen y ciertas instalaciones piden técnico y obra mayor. Alicante, Torrevieja y Orihuela Costa no comparten un único impreso. Casa Expert escribe el camino supuesto en la oferta. Esta página no es asesoramiento jurídico.",
      updatedAt: u,
      sections: [
        {
          heading: "Qué dejamos por escrito",
          body: [
            "Si el precio incluye técnico y planos o solo la ejecución.",
            "Permisos de comunidad para cubierta, contenedores y horario.",
            "Quién tramita y qué ocurre si el ayuntamiento pide otro procedimiento al abrir.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Se puede empezar sin licencia porque “es solo un baño”?",
          a: "No. El riesgo de licencia no es un extra verbal. Si el ayuntamiento exige expediente, es una partida de alcance.",
        },
      ],
      sources: [
        {
          label: "Consulte urbanismo del ayuntamiento competente",
          href: "https://www.alicante.es/",
        },
      ],
      relatedServiceIds: ["home-renovation", "bathroom-renovation", "engineering"],
    },
    ru: {
      id: "renovation-permits-costa-blanca",
      locale: "ru",
      name: "Разрешения на ремонт на Коста-Бланке",
      seoTitle: "Licencia на ремонт в провинции Аликанте | Casa Expert",
      description:
        "Как Casa Expert разделяет declaración responsable и obra mayor, правила comunidad и почему это не юрконсультация.",
      h1: "Какое разрешение нужно на ремонт на Коста-Бланке?",
      summary: "Ayuntamiento разные. Предполагаемый путь пишем в смете, не прячем.",
      answer:
        "Внутренняя отделка частного жилья часто идёт как declaración responsable или местный аналог; несущие изменения, фасад, объём и часть инженерии требуют техника и obra mayor. У Аликанте, Торревьехи и Ориуэлы Коста нет одной формы. Casa Expert указывает предполагаемый путь в оферте. Это не юридическая консультация.",
      updatedAt: u,
      sections: [
        {
          heading: "Что фиксируем письменно",
          body: [
            "Входит ли техник и чертежи или только работы.",
            "Согласования comunidad на крышу, контейнер и часы.",
            "Кто подаёт и что будет, если после вскрытия ayuntamiento потребует другой порядок.",
          ],
        },
      ],
      faqs: [
        {
          q: "Можно начать без licencia, «это же только ванная»?",
          a: "Нет. Риск лицензии не устный доп. Если нужен файл — это строка объёма.",
        },
      ],
      sources: [
        {
          label: "Стол urbanismo соответствующего ayuntamiento",
          href: "https://www.alicante.es/",
        },
      ],
      relatedServiceIds: ["home-renovation", "bathroom-renovation", "engineering"],
    },
  },
};

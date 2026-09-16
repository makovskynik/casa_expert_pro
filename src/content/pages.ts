import type { SimplePageCopy } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/config";
import { CONTENT_UPDATED_AT } from "@/lib/content/site";
import { company } from "@/lib/content/site";

const u = CONTENT_UPDATED_AT;

type Key =
  | "home"
  | "about"
  | "process"
  | "contact"
  | "privacy"
  | "cookies"
  | "legal-notice"
  | "thank-you"
  | "calculator"
  | "services-index"
  | "areas-index"
  | "projects-index"
  | "guides-index";

export const pages: Record<Key, Record<Locale, SimplePageCopy>> = {
  home: {
    en: {
      kind: "home",
      locale: "en",
      seoTitle: "Renovations & solar panels in Costa Blanca | Casa Expert",
      description:
        "Casa Expert: renovation and solar installation in Costa Blanca under one accountable team. Alicante, Torrevieja, Orihuela Costa, Benidorm, Gran Alacant. EN / ES / RU.",
      h1: "Renovation and solar installation across Costa Blanca",
      summary: "One multilingual team to plan, manage and deliver your project, from the first survey to handover.",
      answer:
        "Clear scopes, photo updates and one point of contact for local and overseas property owners.",
      updatedAt: u,
      faqs: [
        {
          q: "Is the solar calculator a final quote?",
          a: "No. It is an indicative estimate. The quotation is confirmed after a site survey of the roof, equipment layout and installation complexity.",
        },
        {
          q: "Can you manage a project while the owner is abroad?",
          a: "Yes. You get one point of contact, a written scope and photo updates at agreed stages.",
        },
        {
          q: "Is IVA included in your estimates?",
          a: "Public ranges include IVA unless a page says otherwise. The survey quote states IVA clearly.",
        },
        {
          q: "Do you handle permits and solar legalisation?",
          a: "Residential legalisation is included when the quote says so. Town-hall licences for renovation are listed as a line in the scope.",
        },
        {
          q: "How long does a renovation or installation take?",
          a: "A standard rooftop solar job is often days, not weeks, after materials are agreed. A full apartment renovation is typically 8–16 weeks on site. The schedule is written into the quote.",
        },
        {
          q: "Can renovation and solar work be combined?",
          a: "Yes. Many villas sequence roof works, electrical board upgrades and the solar array in one programme.",
        },
      ],
    },
    es: {
      kind: "home",
      locale: "es",
      seoTitle: "Reformas y placas solares en Costa Blanca | Casa Expert",
      description:
        "Casa Expert: reforma y solar en Costa Blanca con un único equipo responsable. Alicante, Torrevieja, Orihuela Costa, Benidorm, Gran Alacant. EN / ES / RU.",
      h1: "Reformas e instalación solar en Costa Blanca",
      summary: "Un equipo multilingüe para planificar, dirigir y entregar su proyecto, de la primera visita a la entrega.",
      answer:
        "Alcance claro, fotos de progreso y un interlocutor para propietarios locales y no residentes.",
      updatedAt: u,
      faqs: [
        {
          q: "¿La calculadora solar es un presupuesto final?",
          a: "No. Es una estimación orientativa. El presupuesto se confirma tras la visita a cubierta, disposición del equipo y complejidad del montaje.",
        },
        {
          q: "¿Pueden dirigir la obra si el dueño está fuera?",
          a: "Sí: un interlocutor, alcance por escrito y fotos en las etapas acordadas.",
        },
        {
          q: "¿El IVA va incluido?",
          a: "Los rangos públicos incluyen IVA salvo indicación contraria. El presupuesto de visita lo detalla.",
        },
        {
          q: "¿Tramitan licencias y la legalización solar?",
          a: "La legalización residencial entra cuando el presupuesto lo dice. Las licencias de reforma figuran como partida de alcance.",
        },
        {
          q: "¿Cuánto tarda una reforma o una instalación?",
          a: "Una FV residencial suele resolverse en unos días tras cerrar materiales, no en semanas. Un piso completo, 8–16 semanas de obra. El plazo va en el presupuesto.",
        },
        {
          q: "¿Se pueden combinar reforma y solar?",
          a: "Sí. En muchas villas se coordinan cubierta, cuadro e instalación en un mismo calendario.",
        },
      ],
    },
    ru: {
      kind: "home",
      locale: "ru",
      seoTitle: "Ремонт и солнечные панели на Коста-Бланке | Casa Expert",
      description:
        "Casa Expert: ремонт и СЭС на Коста-Бланке одной командой. Аликанте, Торревьеха, Ориуэла Коста, Бенидорм, Гран Алакант. EN / ES / RU.",
      h1: "Ремонт и солнечные панели на Коста-Бланке",
      summary: "Одна команда на трёх языках: от первого осмотра до сдачи объекта.",
      answer:
        "Понятный объём работ, фотоотчёты и один контакт для местных и зарубежных собственников.",
      updatedAt: u,
      faqs: [
        {
          q: "Калькулятор СЭС — это финальная смета?",
          a: "Нет. Это ориентир. Смета подтверждается после осмотра крыши, расположения оборудования и сложности монтажа.",
        },
        {
          q: "Можно вести проект, если хозяин за границей?",
          a: "Да: один контакт, письменный объём и фото на согласованных этапах.",
        },
        {
          q: "IVA входит в оценки?",
          a: "Публичные диапазоны с IVA, если страница не говорит иное. В смете после осмотра IVA указан явно.",
        },
        {
          q: "Вы занимаетесь разрешениями и легализацией СЭС?",
          a: "Жилая легализация — если это написано в смете. Licencia на ремонт идёт отдельной строкой объёма.",
        },
        {
          q: "Сколько длится ремонт или установка?",
          a: "Типовая кровельная СЭС — обычно несколько дней на объекте после согласования материалов, не недели. Квартира целиком — часто 8–16 недель на объекте. Срок фиксируется в смете.",
        },
        {
          q: "Можно совместить ремонт и солнце?",
          a: "Да. На виллах часто в одном графике крыша, щит и массив панелей.",
        },
      ],
    },
  },
  about: {
    en: {
      kind: "about",
      locale: "en",
      seoTitle: "About Casa Expert | Costa Blanca",
      description: "Casa Expert plans, manages and delivers renovation and solar installation across Costa Blanca.",
      h1: "One team responsible for your entire project.",
      summary: "Renovation and solar under one sequence, reported in English, Spanish and Russian.",
      answer:
        "Casa Expert is a Costa Blanca contractor for home renovation, bathrooms, kitchens, electrical and plumbing work, property preparation and rooftop solar. You have one point of contact from the first survey to handover, with a written scope and photo updates at agreed stages.",
      updatedAt: u,
      sections: [
        {
          heading: "How we work",
          body: [
            "We cover Alicante, Torrevieja, Orihuela Costa, Benidorm and Gran Alacant, and other Costa Blanca towns when the job and travel make sense.",
            "Quotes follow a site survey. Public figures are indicative ranges with IVA unless a page says otherwise.",
          ],
        },
      ],
    },
    es: {
      kind: "about",
      locale: "es",
      seoTitle: "Empresa Casa Expert | Costa Blanca",
      description: "Casa Expert planifica, dirige y entrega reformas e instalación solar en Costa Blanca.",
      h1: "Un equipo responsable de todo el proyecto.",
      summary: "Reforma y solar en una misma secuencia, en inglés, español y ruso.",
      answer:
        "Casa Expert es contratista en Costa Blanca para reforma de vivienda, baños, cocinas, electricidad y fontanería, preparación de inmuebles y fotovoltaica en cubierta. Un interlocutor de la primera visita a la entrega, con alcance escrito y fotos en las etapas acordadas.",
      updatedAt: u,
      sections: [
        {
          heading: "Cómo trabajamos",
          body: [
            "Cubramos Alicante, Torrevieja, Orihuela Costa, Benidorm y Gran Alacant, y otros municipios de Costa Blanca cuando el trabajo y el desplazamiento encajan.",
            "El presupuesto sigue a la visita. Las cifras públicas son rangos orientativos con IVA salvo indicación contraria.",
          ],
        },
      ],
    },
    ru: {
      kind: "about",
      locale: "ru",
      seoTitle: "О компании Casa Expert | Коста-Бланка",
      description: "Casa Expert планирует, ведёт и сдаёт ремонт и солнечную установку на Коста-Бланке.",
      h1: "Одна команда отвечает за весь проект.",
      summary: "Ремонт и СЭС в одной последовательности — на английском, испанском и русском.",
      answer:
        "Casa Expert — подрядчик на Коста-Бланке: ремонт дома, ванные, кухни, электрика и сантехника, подготовка объекта и солнечные панели. Один контакт от первого осмотра до сдачи, письменный объём и фото на согласованных этапах.",
      updatedAt: u,
      sections: [
        {
          heading: "Как работаем",
          body: [
            "Ядро — Аликанте, Торревьеха, Ориуэла Коста, Бенидорм и Гран Алакант; другие города Коста-Бланки — если объём и логистика имеют смысл.",
            "Смета после осмотра. Публичные цифры — ориентировочные диапазоны с IVA, если страница не говорит иное.",
          ],
        },
      ],
    },
  },
  process: {
    en: {
      kind: "process",
      locale: "en",
      seoTitle: "How Casa Expert works | Process",
      description: "Five steps from the first request to handover for renovation and solar work on the Costa Blanca.",
      h1: "How your project works",
      summary: "One sequence from the first message to handover, with a written scope and photo updates.",
      answer:
        "Every job follows the same five steps — solar, a bathroom or a full apartment. The written scope lists inclusions, exclusions, the project schedule and who files licences.",
      updatedAt: u,
      steps: [
        {
          title: "Initial request",
          body: "Town, photos, bills or drawings, language and access.",
          result: "We confirm whether we can take the job.",
          timing: "Same day to 48 hours",
        },
        {
          title: "Site survey",
          body: "Roof, electrical board, wet rooms and access on site.",
          result: "Measured notes and photos for the quote.",
          timing: "Usually within 5–10 working days",
        },
        {
          title: "Scope and quotation",
          body: "Inclusions, exclusions, IVA and the project schedule.",
          result: "A written quotation to approve.",
          timing: "A few days after the survey",
        },
        {
          title: "Works and progress updates",
          body: "One point of contact, photo updates and quality checks at agreed stages.",
          result: "Works completed to the locked scope.",
          timing: "Set in the quotation",
        },
        {
          title: "Handover and aftercare",
          body: "Certificates, a snag list of remaining items, and an aftercare contact.",
          result: "Signed handover pack.",
          timing: "At completion",
        },
      ],
    },
    es: {
      kind: "process",
      locale: "es",
      seoTitle: "Cómo trabaja Casa Expert | Proceso",
      description: "Cinco pasos de la primera consulta a la entrega, en reforma y solar.",
      h1: "Cómo funciona su proyecto",
      summary: "Una secuencia del primer mensaje a la entrega, con alcance escrito y fotos de progreso.",
      answer:
        "Cada trabajo sigue los mismos cinco pasos: solar, un baño o un piso completo. El alcance escrito lista inclusiones, exclusiones, el calendario y quién tramita licencias.",
      updatedAt: u,
      steps: [
        {
          title: "Solicitud inicial",
          body: "Municipio, fotos, facturas o planos, idioma y acceso.",
          result: "Confirmamos si podemos asumir el trabajo.",
          timing: "El mismo día o en 48 horas",
        },
        {
          title: "Visita técnica",
          body: "Cubierta, cuadro eléctrico, zonas húmedas y acceso.",
          result: "Mediciones y fotos para el presupuesto.",
          timing: "Habitualmente en 5–10 días laborables",
        },
        {
          title: "Alcance y presupuesto",
          body: "Inclusiones, exclusiones, IVA y calendario de obra.",
          result: "Presupuesto escrito para aprobar.",
          timing: "Unos días después de la visita",
        },
        {
          title: "Obra y actualizaciones",
          body: "Un interlocutor, fotos de progreso y controles de calidad.",
          result: "Obra ejecutada según el alcance cerrado.",
          timing: "Según el presupuesto",
        },
        {
          title: "Entrega y postventa",
          body: "Documentación, lista de repasos pendientes y contacto de postventa.",
          result: "Dossier de entrega firmado.",
          timing: "Al finalizar",
        },
      ],
    },
    ru: {
      kind: "process",
      locale: "ru",
      seoTitle: "Как работает Casa Expert | Процесс",
      description: "Пять шагов от первой заявки до сдачи для ремонта и СЭС на Коста-Бланке.",
      h1: "Как проходит проект",
      summary: "Одна последовательность от первого сообщения до сдачи: письменный объём и фотоотчёты.",
      answer:
        "Любая задача идёт по тем же пяти шагам — СЭС, ванная или вся квартира. В письменном объёме: включения, исключения, график работ и кто подаёт разрешения.",
      updatedAt: u,
      steps: [
        {
          title: "Первая заявка",
          body: "Город, фото, счета или чертежи, язык и доступ.",
          result: "Подтверждаем, берём ли работу.",
          timing: "В тот же день или за 48 часов",
        },
        {
          title: "Выезд на объект",
          body: "Крыша, электрощит, мокрые зоны и доступ.",
          result: "Замеры и фото для сметы.",
          timing: "Обычно за 5–10 рабочих дней",
        },
        {
          title: "Объём и смета",
          body: "Включения, исключения, IVA и график проекта.",
          result: "Письменная смета на согласование.",
          timing: "Несколько дней после осмотра",
        },
        {
          title: "Работы и отчёты",
          body: "Один контакт, фотоотчёты и проверки качества на этапах.",
          result: "Работы по зафиксированному объёму.",
          timing: "Как в смете",
        },
        {
          title: "Сдача и сопровождение",
          body: "Документы, список недоделок и контакт после сдачи.",
          result: "Подписанный пакет сдачи.",
          timing: "По завершении",
        },
      ],
    },
  },
  contact: {
    en: {
      kind: "contact",
      locale: "en",
      seoTitle: "Contact Casa Expert | Costa Blanca",
      description: `Call or WhatsApp ${company.phoneDisplay}. Service area Costa Blanca. EN / ES / RU.`,
      h1: "Contact Casa Expert",
      summary: "Phone and WhatsApp first. We reply in English, Spanish or Russian.",
      answer: `Call or WhatsApp ${company.phoneDisplay}. We work across Costa Blanca — Alicante, Torrevieja, Orihuela Costa, Benidorm and Gran Alacant first — and book a site visit from that first conversation.`,
      updatedAt: u,
    },
    es: {
      kind: "contact",
      locale: "es",
      seoTitle: "Contacto Casa Expert | Costa Blanca",
      description: `Llame o WhatsApp ${company.phoneDisplay}. Zona Costa Blanca. EN / ES / RU.`,
      h1: "Contacto Casa Expert",
      summary: "Teléfono y WhatsApp primero. Respondemos en inglés, español o ruso.",
      answer: `Llame o escriba por WhatsApp al ${company.phoneDisplay}. Trabajamos en Costa Blanca — Alicante, Torrevieja, Orihuela Costa, Benidorm y Gran Alacant primero — y concertamos la visita desde esa primera conversación.`,
      updatedAt: u,
    },
    ru: {
      kind: "contact",
      locale: "ru",
      seoTitle: "Контакты Casa Expert | Коста-Бланка",
      description: `Звонок или WhatsApp ${company.phoneDisplay}. Зона Costa Blanca. EN / ES / RU.`,
      h1: "Контакты Casa Expert",
      summary: "Сначала телефон и WhatsApp. Отвечаем на английском, испанском и русском.",
      answer: `Звонок или WhatsApp ${company.phoneDisplay}. Работаем по Коста-Бланке — сначала Аликанте, Торревьеха, Ориуэла Коста, Бенидорм и Гран Алакант — и назначаем выезд с первого разговора.`,
      updatedAt: u,
    },
  },
  privacy: {
    en: {
      kind: "privacy",
      locale: "en",
      seoTitle: "Privacy policy | Casa Expert",
      description: "How Casa Expert handles enquiries, WhatsApp, optional Blob storage and cookieless analytics.",
      h1: "Privacy policy",
      summary: "Draft for the operator of casaexpertpro.com. Legal identity to be completed after intake.",
      answer:
        "The operator of casaexpertpro.com (“Casa Expert”) processes enquiry data to answer requests about renovation and solar work on the Costa Blanca. Legal name, CIF and postal address of the controller will be added when confirmed. Contact for privacy requests: the phone number published in the footer.",
      updatedAt: u,
      sections: [
        {
          heading: "What we process",
          body: [
            "If you call or use WhatsApp, Meta/WhatsApp processes that conversation under their terms; we receive what you send to the business number.",
            "If the optional form is enabled, we store name, phone, locale, a short note, municipality and calculator outputs in a private Vercel Blob object in an EU region, retained 90 days unless a longer period is required to handle the job. We do not put phone numbers in URLs or analytics.",
            "Vercel Web Analytics and Speed Insights are anonymised and are not used as a marketing pixel. This first release does not load Google tags or Meta Pixel.",
            "The solar calculator runs in your browser against a static yield table; inputs are not sent to us unless you submit the form or WhatsApp message.",
          ],
        },
        {
          heading: "Rights",
          body: [
            "You may ask for access, correction or deletion of a stored lead (quote the lead ID). This draft is not a substitute for counsel on Spanish/EU law.",
          ],
        },
      ],
    },
    es: {
      kind: "privacy",
      locale: "es",
      seoTitle: "Política de privacidad | Casa Expert",
      description: "Tratamiento de consultas, WhatsApp, Blob opcional y analítica sin cookies.",
      h1: "Política de privacidad",
      summary: "Borrador del operador de casaexpertpro.com. Identidad jurídica pendiente de intake.",
      answer:
        "El operador de casaexpertpro.com (“Casa Expert”) trata datos de consulta para responder a reformas y solar en Costa Blanca. Razón social, CIF y domicilio del responsable se añadirán al confirmarse. Contacto: el teléfono del pie de página.",
      updatedAt: u,
      sections: [
        {
          heading: "Qué tratamos",
          body: [
            "Si llama o usa WhatsApp, Meta/WhatsApp tratan esa conversación; recibimos lo que envía al número de empresa.",
            "Si el formulario está activo, guardamos nombre, teléfono, idioma, nota, municipio y resultados de calculadora en Vercel Blob privado en UE, 90 días salvo necesidad del encargo. No ponemos teléfonos en URL ni analítica.",
            "Vercel Web Analytics y Speed Insights son anónimos. Esta versión no carga etiquetas de Google ni Meta Pixel.",
            "La calculadora corre en el navegador; no nos llega nada salvo que envíe formulario o WhatsApp.",
          ],
        },
        {
          heading: "Derechos",
          body: [
            "Puede pedir acceso, corrección o borrado de un lead (indique el ID). Este texto no sustituye asesoramiento legal.",
          ],
        },
      ],
    },
    ru: {
      kind: "privacy",
      locale: "ru",
      seoTitle: "Политика конфиденциальности | Casa Expert",
      description: "Заявки, WhatsApp, опциональный Blob и аналитика без cookie.",
      h1: "Политика конфиденциальности",
      summary: "Черновик оператора casaexpertpro.com. Юрданные — после intake.",
      answer:
        "Оператор casaexpertpro.com («Casa Expert») обрабатывает обращения по ремонту и СЭС на Коста-Бланке. Юрлицо, CIF и адрес контролёра будут добавлены после подтверждения. Контакт: телефон в подвале сайта.",
      updatedAt: u,
      sections: [
        {
          heading: "Что обрабатываем",
          body: [
            "Звонок или WhatsApp обрабатывает Meta/WhatsApp по своим правилам; нам приходит то, что вы шлёте на рабочий номер.",
            "Если форма включена, имя, телефон, язык, заметка, муниципалитет и результат калькулятора пишутся в private Vercel Blob в ЕС на 90 дней, если дольше не нужно для заказа. Телефон не попадает в URL и аналитику.",
            "Vercel Web Analytics и Speed Insights анонимны. В этом релизе нет Google-тегов и Meta Pixel.",
            "Калькулятор считается в браузере; к нам данные не уходят, пока вы не отправите форму или WhatsApp.",
          ],
        },
        {
          heading: "Права",
          body: [
            "Можно запросить доступ, исправление или удаление лида (укажите ID). Это не замена консультации по праву ЕС/Испании.",
          ],
        },
      ],
    },
  },
  cookies: {
    en: {
      kind: "cookies",
      locale: "en",
      seoTitle: "Cookie policy | Casa Expert",
      description: "First release: no marketing cookies. Vercel Analytics does not use cookies.",
      h1: "Cookie policy",
      summary: "No GTM, no Meta Pixel, no consent banner for marketing tags in v1.",
      answer:
        "This release does not set marketing or advertising cookies. Vercel Web Analytics is described by Vercel as cookieless. Essential cookies may be set by the hosting platform for security or deployment protection. If we add Google or Meta tags later, a consent layer will ship with them.",
      updatedAt: u,
    },
    es: {
      kind: "cookies",
      locale: "es",
      seoTitle: "Política de cookies | Casa Expert",
      description: "Primera versión: sin cookies de marketing. Vercel Analytics no usa cookies.",
      h1: "Política de cookies",
      summary: "Sin GTM ni Meta Pixel ni banner de marketing en v1.",
      answer:
        "Esta versión no coloca cookies de marketing. Vercel Web Analytics se describe como sin cookies. La plataforma puede usar cookies esenciales de seguridad. Si más adelante hay etiquetas de Google o Meta, irán con capa de consentimiento.",
      updatedAt: u,
    },
    ru: {
      kind: "cookies",
      locale: "ru",
      seoTitle: "Политика cookies | Casa Expert",
      description: "Первый релиз: без маркетинговых cookie. Vercel Analytics без cookie.",
      h1: "Политика cookies",
      summary: "Без GTM, Meta Pixel и маркетингового баннера в v1.",
      answer:
        "В этом релизе нет маркетинговых cookie. Vercel Web Analytics заявлен как cookieless. Хостинг может ставить служебные cookie безопасности. Если появятся Google или Meta — вместе с согласием.",
      updatedAt: u,
    },
  },
  "legal-notice": {
    en: {
      kind: "legal-notice",
      locale: "en",
      seoTitle: "Legal notice | Casa Expert",
      description: "Legal notice for casaexpertpro.com. Company identifiers pending confirmation.",
      h1: "Legal notice",
      summary: "Information society services notice — identifiers to complete after intake.",
      answer: `Website: ${company.url}. Public name: ${company.publicName}. Phone: ${company.phoneDisplay}. Service area: Costa Blanca (Alicante, Torrevieja, Orihuela Costa, Benidorm, Gran Alacant). Legal name, CIF/NIF, registered office and email on the domain will replace this paragraph when confirmed. Content is informational; quotes exist only in writing.`,
      updatedAt: u,
    },
    es: {
      kind: "legal-notice",
      locale: "es",
      seoTitle: "Aviso legal | Casa Expert",
      description: "Aviso legal de casaexpertpro.com. Identificadores pendientes de confirmación.",
      h1: "Aviso legal",
      summary: "Aviso de servicios de la sociedad de la información — datos a completar.",
      answer: `Sitio: ${company.url}. Nombre público: ${company.publicName}. Teléfono: ${company.phoneDisplay}. Zona: Costa Blanca (Alicante, Torrevieja, Orihuela Costa, Benidorm, Gran Alacant). Razón social, CIF/NIF, domicilio y correo de dominio sustituirán este párrafo al confirmarse. El contenido es informativo; el presupuesto solo existe por escrito.`,
      updatedAt: u,
    },
    ru: {
      kind: "legal-notice",
      locale: "ru",
      seoTitle: "Правовое уведомление | Casa Expert",
      description: "Правовое уведомление casaexpertpro.com. Реквизиты — после подтверждения.",
      h1: "Правовое уведомление",
      summary: "Уведомление об информационном обществе — реквизиты после intake.",
      answer: `Сайт: ${company.url}. Публичное имя: ${company.publicName}. Телефон: ${company.phoneDisplay}. Зона: Коста-Бланка (Аликанте, Торревьеха, Ориуэла Коста, Бенидорм, Гран Алакант). Юрлицо, CIF/NIF, адрес и почта на домене заменят этот абзац после подтверждения. Контент информационный; смета только письменно.`,
      updatedAt: u,
    },
  },
  "thank-you": {
    en: {
      kind: "thank-you",
      locale: "en",
      seoTitle: "Thank you | Casa Expert",
      description: "Enquiry received.",
      h1: "We have the enquiry.",
      summary: "This page is not indexed.",
      answer: "If you used WhatsApp, continue the thread there. If you used the form, keep the lead ID from the confirmation.",
      updatedAt: u,
    },
    es: {
      kind: "thank-you",
      locale: "es",
      seoTitle: "Gracias | Casa Expert",
      description: "Consulta recibida.",
      h1: "Hemos recibido la consulta.",
      summary: "Esta página no se indexa.",
      answer: "Si usó WhatsApp, siga ahí. Si usó el formulario, conserve el ID del lead.",
      updatedAt: u,
    },
    ru: {
      kind: "thank-you",
      locale: "ru",
      seoTitle: "Спасибо | Casa Expert",
      description: "Заявка получена.",
      h1: "Заявка получена.",
      summary: "Страница не индексируется.",
      answer: "Если писали в WhatsApp — продолжайте там. Если форму — сохраните ID лида.",
      updatedAt: u,
    },
  },
  calculator: {
    en: {
      kind: "calculator",
      locale: "en",
      seoTitle: "Solar calculator Costa Blanca | Casa Expert",
      description:
        "Indicative PV sizing for Alicante, Torrevieja, Orihuela Costa, Benidorm and Gran Alacant. Recommended size, cost range with IVA and savings before you share a phone number.",
      h1: "Solar calculator",
      summary: "Size, cost and savings for Costa Blanca homes.",
      answer:
        "Estimate the recommended system size, installation cost and potential annual savings for your Costa Blanca home. The result is indicative; the final quotation follows a site survey.",
      updatedAt: u,
      faqs: [
        {
          q: "Can I use this instead of a survey?",
          a: "No. It is a planning figure. Roof structure, shade and the board decide the real system.",
        },
      ],
    },
    es: {
      kind: "calculator",
      locale: "es",
      seoTitle: "Calculadora de placas solares Costa Blanca | Casa Expert",
      description:
        "Dimensionado orientativo para Alicante, Torrevieja, Orihuela Costa, Benidorm y Gran Alacant. Potencia, rango con IVA y ahorro antes de dejar el teléfono.",
      h1: "Calculadora solar",
      summary: "Potencia, coste y ahorro para viviendas en Costa Blanca.",
      answer:
        "Estime la potencia recomendada, el coste de instalación y el ahorro anual potencial para su vivienda en Costa Blanca. El resultado es orientativo; el presupuesto final sigue a la visita técnica.",
      updatedAt: u,
      faqs: [
        {
          q: "¿Sustituye a la visita?",
          a: "No. Es una cifra de planificación. La cubierta, la sombra y el cuadro deciden el sistema real.",
        },
      ],
    },
    ru: {
      kind: "calculator",
      locale: "ru",
      seoTitle: "Калькулятор солнечных панелей Коста-Бланка | Casa Expert",
      description:
        "Ориентир СЭС для Аликанте, Торревьехи, Ориуэлы Коста, Бенидорма и Гран Алаканта. Мощность, диапазон с IVA и экономия до телефона.",
      h1: "Калькулятор СЭС",
      summary: "Мощность, цена и экономия для домов на Коста-Бланке.",
      answer:
        "Оцените мощность, стоимость монтажа и возможную годовую экономию для дома на Коста-Бланке. Результат ориентировочный; итоговая смета после осмотра.",
      updatedAt: u,
      faqs: [
        {
          q: "Это вместо осмотра?",
          a: "Нет. Это планировочная цифра. Крыша, тень и щит решают реальную систему.",
        },
      ],
    },
  },
  "services-index": {
    en: {
      kind: "services-index",
      locale: "en",
      seoTitle: "Services | Renovation & solar Costa Blanca | Casa Expert",
      description:
        "Two primary lines on the Costa Blanca: full home renovation from about €550–€1,200 / m² and solar from about €4,950 (~3 kWp, no battery). Bathrooms, kitchens, building services and make-ready cleaning available.",
      h1: "Services",
      summary:
        "Choose renovation or solar first. Bathrooms and kitchens sit under renovation; solar care covers systems already installed.",
      answer:
        "Casa Expert’s two primary lines on the Costa Blanca are full home renovation (about €550–€1,200 / m² IVA incl. for mid-range apartments) and residential solar (installed from about €4,950 IVA incl. for ~3 kWp without a battery). Bathrooms and kitchens sit under renovation; maintenance, cleaning and upgrades are quoted for existing PV after a short brief. Core towns: Alicante, Torrevieja, Orihuela Costa, Benidorm and Gran Alacant.",
      updatedAt: u,
      faqs: [
        {
          q: "What are Casa Expert’s main services on the Costa Blanca?",
          a: "Two primary lines: full home renovation and residential solar panel installation. Bathrooms and kitchens sit under renovation; solar care covers maintenance, cleaning and upgrades for existing systems.",
        },
        {
          q: "Where do you work?",
          a: "Core towns are Alicante, Torrevieja, Orihuela Costa, Benidorm and Gran Alacant. Other Costa Blanca municipalities are considered after we confirm travel and access.",
        },
        {
          q: "How do public prices work?",
          a: "Published bands are indicative with IVA stated: renovation about €550–€1,200 / m² for mid-range apartments, solar from about €4,950 for ~3 kWp without battery. A site survey locks the written quote.",
        },
      ],
    },
    es: {
      kind: "services-index",
      locale: "es",
      seoTitle: "Servicios | Reforma y solar Costa Blanca | Casa Expert",
      description:
        "Dos líneas principales en Costa Blanca: reforma integral desde unos 550–1.200 €/m² y solar desde unos 4.950 € (~3 kWp, sin batería). Baños, cocinas, instalaciones y limpiezas disponibles.",
      h1: "Servicios",
      summary:
        "Elija primero reforma o solar. Baños y cocinas van con la reforma; el cuidado solar cubre instalaciones ya montadas.",
      answer:
        "Las dos líneas principales de Casa Expert en Costa Blanca son la reforma integral (unos 550–1.200 €/m² con IVA en piso de gama media) y el solar residencial (desde unos 4.950 € con IVA por ~3 kWp sin batería). Baños y cocinas van con la reforma; mantenimiento, limpieza y ampliaciones se cotizan para FV existente tras un brief corto. Municipios núcleo: Alicante, Torrevieja, Orihuela Costa, Benidorm y Gran Alacant.",
      updatedAt: u,
      faqs: [
        {
          q: "¿Cuáles son los servicios principales de Casa Expert?",
          a: "Dos líneas: reforma integral e instalación solar residencial. Baños y cocinas van con la reforma; el cuidado solar cubre mantenimiento, limpieza y ampliaciones de instalaciones existentes.",
        },
        {
          q: "¿Dónde trabajan?",
          a: "Municipios núcleo: Alicante, Torrevieja, Orihuela Costa, Benidorm y Gran Alacant. Otros pueblos de Costa Blanca tras confirmar desplazamiento y acceso.",
        },
        {
          q: "¿Cómo funcionan los precios publicados?",
          a: "Bandas orientativas con IVA: reforma unos 550–1.200 €/m² en piso de gama media; solar desde unos 4.950 € por ~3 kWp sin batería. La visita cierra la oferta escrita.",
        },
      ],
    },
    ru: {
      kind: "services-index",
      locale: "ru",
      seoTitle: "Услуги | Ремонт и СЭС Коста-Бланка | Casa Expert",
      description:
        "Две основные линии на Коста-Бланке: ремонт под ключ около 550–1 200 €/м² и СЭС от ~4 950 € (~3 кВтp без батареи). Ванные, кухни, инженерия и подготовка объектов.",
      h1: "Услуги",
      summary:
        "Сначала ремонт или СЭС. Ванные и кухни — внутри ремонта; обслуживание СЭС — для уже установленных систем.",
      answer:
        "Две основные линии Casa Expert на Коста-Бланке — ремонт под ключ (около 550–1 200 €/м² с IVA для квартиры среднего сегмента) и жилая СЭС (от ~4 950 € с IVA за ~3 кВтp без батареи). Ванные и кухни — внутри ремонта; ТО, мойка и апгрейды — для уже стоящих СЭС после короткого брифа. Ядро: Аликанте, Торревьеха, Ориуэла Коста, Бенидорм и Гран Алакант.",
      updatedAt: u,
      faqs: [
        {
          q: "Какие основные услуги Casa Expert?",
          a: "Две линии: ремонт под ключ и жилая СЭС. Ванные и кухни — внутри ремонта; обслуживание СЭС — ТО, мойка и апгрейды уже установленных систем.",
        },
        {
          q: "Где вы работаете?",
          a: "Ядро: Аликанте, Торревьеха, Ориуэла Коста, Бенидорм и Гран Алакант. Другие города Коста-Бланки — после подтверждения выезда и доступа.",
        },
        {
          q: "Как читать публичные цены?",
          a: "Ориентиры с IVA: ремонт около 550–1 200 €/м² для квартиры среднего сегмента; СЭС от ~4 950 € за ~3 кВтp без батареи. Осмотр фиксирует письменную смету.",
        },
      ],
    },
  },
  "areas-index": {
    en: {
      kind: "areas-index",
      locale: "en",
      seoTitle: "Service areas | Casa Expert",
      description:
        "Alicante, Torrevieja, Orihuela Costa, Benidorm and Gran Alacant — Costa Blanca coverage with dedicated pages.",
      h1: "Where we work",
      summary: "Five municipalities with real pages. Other Costa Blanca towns case by case.",
      answer:
        "Alicante, Torrevieja, Orihuela Costa, Benidorm and Gran Alacant each have their own page. Other coast towns are booked when travel and the job make sense.",
      updatedAt: u,
    },
    es: {
      kind: "areas-index",
      locale: "es",
      seoTitle: "Zonas de servicio | Casa Expert",
      description:
        "Alicante, Torrevieja, Orihuela Costa, Benidorm y Gran Alacant — cobertura en Costa Blanca con páginas propias.",
      h1: "Dónde trabajamos",
      summary: "Cinco municipios con páginas reales. Otros pueblos, caso a caso.",
      answer:
        "Alicante, Torrevieja, Orihuela Costa, Benidorm y Gran Alacant tienen página propia. Otros municipios de costa se agendan cuando el desplazamiento y el trabajo encajan.",
      updatedAt: u,
    },
    ru: {
      kind: "areas-index",
      locale: "ru",
      seoTitle: "Зоны обслуживания | Casa Expert",
      description:
        "Аликанте, Торревьеха, Ориуэла Коста, Бенидорм и Гран Алакант — покрытие на Коста-Бланке с отдельными страницами.",
      h1: "Где работаем",
      summary: "Пять муниципалитетов с живыми страницами. Остальные города — точечно.",
      answer:
        "Аликанте, Торревьеха, Ориуэла Коста, Бенидорм и Гран Алакант — у каждого своя страница. Другие города побережья — если логистика и объём имеют смысл.",
      updatedAt: u,
    },
  },
  "projects-index": {
    en: {
      kind: "projects-index",
      locale: "en",
      seoTitle: "Projects | Casa Expert",
      description: "Illustrative solar and renovation estimates for Costa Blanca properties — not published as completed jobs.",
      h1: "Worked examples",
      summary: "Indicative scopes used to explain how we price solar and renovation work.",
      answer: "These pages are illustrative estimates, not a portfolio of photographed jobs. A confirmed project page will include site photos, the agreed scope and actual figures.",
      updatedAt: u,
    },
    es: {
      kind: "projects-index",
      locale: "es",
      seoTitle: "Proyectos | Casa Expert",
      description:
        "Estimaciones ilustrativas de solar y reforma en Costa Blanca — no un portafolio de obras fotografiadas.",
      h1: "Ejemplos de trabajo",
      summary: "Alcances orientativos para explicar cómo presupuestamos solar y reforma.",
      answer: "Estas páginas son estimaciones ilustrativas, no un portafolio de obras fotografiadas. Una ficha confirmada incluirá fotos, alcance acordado y cifras reales.",
      updatedAt: u,
    },
    ru: {
      kind: "projects-index",
      locale: "ru",
      seoTitle: "Проекты | Casa Expert",
      description:
        "Иллюстративные оценки СЭС и ремонта на Коста-Бланке — не портфолио снятых объектов.",
      h1: "Примеры расчётов",
      summary: "Ориентировочные объёмы, чтобы показать, как считаем СЭС и ремонт.",
      answer: "Это иллюстративные оценки, не портфолио снятых объектов. Подтверждённый кейс будет с фото, согласованным объёмом и фактическими цифрами.",
      updatedAt: u,
    },
  },
  "guides-index": {
    en: {
      kind: "guides-index",
      locale: "en",
      seoTitle: "Guides | Casa Expert",
      description: "Expert notes on solar cost, panel count and renovation licences on the Costa Blanca.",
      h1: "Guides",
      summary: "Three deep notes instead of a thin translated blog.",
      answer: "We did not migrate the old WordPress posts. New guides are dated, sourced and tied to a service.",
      updatedAt: u,
    },
    es: {
      kind: "guides-index",
      locale: "es",
      seoTitle: "Guías | Casa Expert",
      description: "Notas sobre precio solar, número de placas y licencias de reforma en Costa Blanca.",
      h1: "Guías",
      summary: "Tres notas profundas en lugar de un blog fino traducido.",
      answer: "No migramos los posts antiguos de WordPress. Las guías nuevas tienen fecha, fuentes y servicio asociado.",
      updatedAt: u,
    },
    ru: {
      kind: "guides-index",
      locale: "ru",
      seoTitle: "Статьи | Casa Expert",
      description: "Материалы о цене СЭС, числе панелей и разрешениях на ремонт на Коста-Бланке.",
      h1: "Статьи",
      summary: "Три сильных текста вместо тонкого переведённого блога.",
      answer: "Старые посты WordPress не переносили. Новые тексты с датой, источниками и привязкой к услуге.",
      updatedAt: u,
    },
  },
};

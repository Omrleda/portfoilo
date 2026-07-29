export const samplesData = [
  {
    id: "sample-1",
    category: "journalistic",
    categoryLabel: "Media & News Wire (MENA)",
    title: "International Summit & Diplomatic Statement",
    client: "Middle East News Agency (MENA Wire)",
    direction: "EN ➔ AR / DE",
    sourceText: "The bilateral talks focused on expanding trade relations, energy transition partnerships, and regional security cooperation ahead of the upcoming economic forum.",
    targetText: "ركزت المباحثات الثنائية على توسيع العلاقات التجارية، وشراكات التحول في مجال الطاقة، والتعاون في مجال الأمن الإقليمي قبيل انعقاد المنتدى الاقتصادي المرتقب.",
    highlights: [
      {
        term: "bilateral talks",
        translation: "المباحثات الثنائية",
        note: "Standard official diplomatic terminology used in MENA press bulletins."
      },
      {
        term: "energy transition partnerships",
        translation: "شراكات التحول في مجال الطاقة",
        note: "Precise Arabic economic rendering aligned with international media guidelines."
      }
    ]
  },
  {
    id: "sample-2",
    category: "journalistic",
    categoryLabel: "German Press Release",
    title: "German Foreign Trade & Industry Report",
    client: "Al-Alsun News Translation Workshop",
    direction: "DE ➔ EN",
    sourceText: "Die Vertiefung der wirtschaftlichen Zusammenarbeit zwischen Deutschland und Ägypten eröffnet neue Perspektiven für Erneuerbare Energien und Fachkräfteaustausch.",
    targetText: "The deepening of economic cooperation between Germany and Egypt opens new prospects for renewable energy and skilled workforce exchange.",
    highlights: [
      {
        term: "Fachkräfteaustausch",
        translation: "skilled workforce exchange",
        note: "Compound German noun rendered accurately for international press distribution."
      }
    ]
  },
  {
    id: "sample-3",
    category: "legal",
    categoryLabel: "Legal & Commercial",
    title: "International Commercial Agency Agreement",
    client: "Commercial & Business Translation Project",
    direction: "EN ➔ DE",
    sourceText: "The agent agrees to act with due diligence and uphold all contractual obligations in accordance with commercial laws.",
    targetText: "Der Agent verpflichtet sich, mit gebührender Sorgfalt zu handeln und alle vertraglichen Pflichten gemäß den Handelsgesetzen einzuhalten.",
    highlights: [
      {
        term: "due diligence",
        translation: "gebührende Sorgfalt",
        note: "Standard German legal term of art in commercial contract translation."
      }
    ]
  },
  {
    id: "sample-4",
    category: "literary",
    categoryLabel: "Literary & Academic",
    title: "Academic Translation Analysis",
    client: "Faculty of Al-Alsun Comparative Studies",
    direction: "EN ➔ AR",
    sourceText: "Literary translation demands not merely linguistic equivalence, but the recreation of emotional resonance and cultural nuance.",
    targetText: "لا تتطلب الترجمة الأدبية مجرد تكافؤ لغوي، بل تتطلب إعادة خلق التجاوب العاطفي والظلال الثقافية.",
    highlights: [
      {
        term: "emotional resonance",
        translation: "التجاوب العاطفي",
        note: "Literary stylistic adaptation taught at Al-Alsun."
      }
    ]
  }
];

export const heroLiveSamples = {
  journalistic: {
    en: "The Ministry of Foreign Affairs issued an official statement reaffirming commitment to international climate agreements.",
    de: "Das Außenministerium gab eine offizielle Erklärung heraus, in der das Engagement für internationale Klimaabkommen bekräftigt wird.",
    note: "MENA Press Agency standard diplomatic terminology."
  },
  legal: {
    en: "This Non-Disclosure Agreement shall be governed by and construed in accordance with standard international commercial law.",
    de: "Diese Geheimhaltungsvereinbarung unterliegt dem internationalen Handelsrecht und ist nach diesem auszulegen.",
    note: "Legal precision for corporate contracts."
  },
  literary: {
    en: "The morning light filtered through the ancient arches of Cairo, casting long shadows across the cobblestones.",
    de: "Das Morgenlicht fiel durch die alten Bögen Kairos und warf lange Schatten über das Kopfsteinpflaster.",
    note: "Evocative prose cadence preserved."
  }
};

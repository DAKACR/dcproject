const SHARE_ID = 'v1613404557/dcproject/services_img/'

const IMG_PUBLIC_IDS = {
  draws: SHARE_ID + 'dibujos_n5utua',
  digitalization: SHARE_ID + 'digitalizacion_qovbil',
  generation: SHARE_ID + 'generacion_u0dncl',
  geomatic: SHARE_ID + 'geomatica_uimo3p',
  costs: SHARE_ID + 'costos_r2o59h'
}

const SERVICES_DATA = {
  es: [
    {
      img: IMG_PUBLIC_IDS.draws,
      title: "Dibujos 2D, 3D",
      description:
        "Utilizamos como herramientas software Autodesk, especificamente AutoCAD, Civil3D.",
    },
    {
      img: IMG_PUBLIC_IDS.digitalization,
      title: "Digitalización de Planos",
      description: "Se transfiere de papel a digital usando Autocad, Revit.",
    },
    {
      img: IMG_PUBLIC_IDS.generation,
      title: "Generación de Planos",
      description:
        "Elaboramos planos civiles, topográficos, eléctricos y de arquitectura.",
    },
    {
      img: IMG_PUBLIC_IDS.geomatic,
      title: "Geomática",
      description:
        "Generamos mapas usando programas como ArcGIS, Global Mapper, QGIS.",
    },
    {
      img: IMG_PUBLIC_IDS.costs,
      title: "Costos y Planificación de Obras Civiles",
      description:
        "Estimaciones de costos  de una obra Análisis de precios unitarios (A.P.U) Modelos de Negocio Elaboración de presupuesto para obras Control de cantidades de obras Asesoría en general en contabilidad de costos",
    },
  ],
  en: [
    {
      img: IMG_PUBLIC_IDS.draws,
      title: "2D, 3D Drawings",
      description:
        "We use specialized tools of Autodesk's products, like AutoCAD, Civil 3D.",
    },
    {
      img: IMG_PUBLIC_IDS.digitalization,
      title: "Digital Drawings",
      description: "We convert hand sketch to AutCAD and Revit formats.",
    },
    {
      img: IMG_PUBLIC_IDS.generation,
      title: "Producing Drawings",
      description:
        "We create and design electrical drawings, architectural and topographical drawings and more.",
    },
    {
      img: IMG_PUBLIC_IDS.geomatic,
      title: "Geomatic (SIG)",
      description:
        "We create maps using apps of SIG: ArcGIS, Global Mapper, Qgis, and more tools. All in spatial data.",
    },     
    {
      img: IMG_PUBLIC_IDS.costs,
      title: "Costos y Planificación de Obras Civiles",
      description:
       "Cost estimate Analysis of unitary prices, Works´ budgets, Control of work quantities, Consultant ( advisory in general)",
    },
  ],
};

export default SERVICES_DATA;

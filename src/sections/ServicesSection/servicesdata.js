import dibujos from "assets/img/services_img/dibujos.jpg";
import digitalizacion from "assets/img/services_img/digitalizacion.jpg";
import generacion from "assets/img/services_img/generacion.webp";
import geomatica from "assets/img/services_img/geomatica.jpg";

const SERVICES_DATA = {
  es: [
    {
      img: dibujos,
      title: "Dibujos 2D, 3D",
      description:
        "Utilizamos como herramientas software Autodesk, especificamente AutoCAD, Civil3D.",
    },
    {
      img: digitalizacion,
      title: "Digitalización de Planos",
      description: "Se transfiere de papel a digital usando Autocad, Revit.",
    },
    {
      img: generacion,
      title: "Generación de Planos",
      description:
        "Elaboramos planos civiles, topográficos, eléctricos y de arquitectura.",
    },
    {
      img: geomatica,
      title: "Geomática",
      description:
        "Generamos mapas usando programas como ArcGIS, Global Mapper, QGIS.",
    },
  ],
  en: [
    {
      img: dibujos,
      title: "2D, 3D Drawings",
      description:
        "We use specialized tools of Autodesk's products, like AutoCAD, Civil 3D.",
    },
    {
      img: digitalizacion,
      title: "Digital Drawings",
      description: "We convert hand sketch to AutCAD and Revit formats.",
    },
    {
      img: generacion,
      title: "Producing Drawings",
      description:
        "We create and design electrical drawings, architectural and topographical drawings and more.",
    },
    {
      img: geomatica,
      title: "Geomatic (SIG)",
      description:
        "We create maps using apps of SIG: ArcGIS, Global Mapper, Qgis, and more tools. All in spatial data.",
    },
  ],
};

export default SERVICES_DATA;

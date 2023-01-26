// este es el archivo a donde puedo pasarle todos los datos sin tener que hardcodearlos la forma de hacer las infosections reutilizables

export const homeObjOne = {
  id: "Sobrenosotros",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topline: "Medianet",
  headline: "Sobre Nosotros",
  description:
    "Somos una empresa que brinda servicio de internet y televisión premium con la intención de conectar a nuestros clientes un servicio de calidad e innovación.Ubicados en la ciudad de Mendoza con personal capacitado, teniendo como bandera el respeto, el compromiso y el profesionalismo, procurando obtener confianza y satisfacción plena de nuestros clientes.",
  imgStart: false,
  img: require("../../images/teammedianet.png"),
  alt: "empresa de internet",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "Info",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topline: "Podemos Ayudarte",
  headline: "Mejora tu acceso al mundo digital con Medianet",
  description:
    " Experimenta una conexión de Internet de alta velocidad para sacar el máximo provecho de tus actividades laborales, recreativas y educativas.",
  imgStart: true,
  img: require("../../images/conectmedianet.png"),
  alt: "logo de conexion",
  dark: true,
  primary: true,
  darkText: false,
};
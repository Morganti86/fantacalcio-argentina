//https://tableconvert.com/excel-to-json
//https://products.aspose.app/cells/conversion/excel-to-json

const JUGADORES = [
  {
    "equipo": "Aldosivi",
    "jugador": "Chicco, Ignacio",
    "precioBase": "200",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Moyano, Sebastian",
    "precioBase": "200",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Werner, Axel",
    "precioBase": "200",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Breitenbruch, Nestor",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Enrique, Guillermo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Gonzalez, Ariel",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Iñiguez, Emanuel",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Laurelli, Federico",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Moya, Santiago",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Novillo, Joaquin",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Rodriguez, Lucas",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Roman, Fernando",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Bochi, Roberto",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Falasco, Lucio",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Garcia, Martin",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Gino Acevedo, Federico",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Leys, Franco",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Ludueña, Lautaro",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Morello, Matias",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Rolon, Esteban",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Sosa, Alan",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Arias, Junior",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Cordero, Nicolas",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Da Luz, Mauro",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "De la Vega, Facundo",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Fernandez, Tomas",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Guzman, Natanael",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Marquez, Rodrigo",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Palavecino, Agustin",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Aldosivi",
    "jugador": "Villarreal, Alejandro",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Cortes, Brayan",
    "precioBase": "400",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Rodriguez, Diego",
    "precioBase": "400",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Siri Payer, Gonzalo",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Alvarez, Francisco",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Bravo, Claudio",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Coronel, Kevin",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Godoy, Erik",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Lozano, Leandro",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Prieto, Sebastian",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Ramirez, Tobias",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "Pitufos",
    "precioCompra": "400"
  },
  {
    "equipo": "Argentinos",
    "jugador": "Riquelme, Roman",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Sanchez, Luciano",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Yañez, Thiago",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Bouhier, Gaston",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Cardozo, Juan Jose",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Carrizo, Facundo",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Fattori, Federico",
    "precioBase": "600",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Villa Luro",
    "precioCompra": "700"
  },
  {
    "equipo": "Argentinos",
    "jugador": "Ferreira, Cristian",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Florentin, Gabriel",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Gamarra, Ariel",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Gho, Joaquin",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Giaccone, Lautaro",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Gomez, Lucas",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Infantino, Gino",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Lescano, Alan",
    "precioBase": "800",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Morganti",
    "precioCompra": "1500"
  },
  {
    "equipo": "Argentinos",
    "jugador": "Lopez Muñoz, Hernan",
    "precioBase": "800",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Morganti",
    "precioCompra": "2600"
  },
  {
    "equipo": "Argentinos",
    "jugador": "Mac Allister, Francis",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Oroz, Nicolas",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Perez, Enzo",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Viveros, Emiliano",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Barros, Diego",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Fernandez, Leandro",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Gimenez, Matias",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Kida, Ryoga",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Argentinos",
    "jugador": "Molina, Tomas",
    "precioBase": "600",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Flatulentos",
    "precioCompra": "1000"
  },
  {
    "equipo": "Argentinos",
    "jugador": "Porcel, Diego",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Baldosera",
    "precioCompra": "200"
  },
  {
    "equipo": "Argentinos",
    "jugador": "Veron, Gaston",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Durso, Tomas",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Ingolotti, Luis",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Acosta, Guillermo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Brandan, Moises",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Cabral, Yonathan",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Compagnucci, Gabriel",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Di Placido, Leonel",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Ferrari, Gianluca",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Ferreira, Clever",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Galvan, Ignacio",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Infante, Juan",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Morales, Rodrigo",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Posse, Juan",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Suso, Gaston",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Vallejo, Luciano",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Villa, Maximiliano",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Godoy, Ezequiel",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Godoy, Lautaro",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Ham, Ezequiel",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Lamendola, Nicolas",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Ortiz, Kevin",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Nicola, Franco",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Tesuri, Renzo",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Baldosera",
    "precioCompra": "500"
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Abeldaño, Gabriel",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Benitez, Martin",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Brondo, Manuel",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Diaz, Leandro",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Dep. Areco",
    "precioCompra": "1300"
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Roman, Lucas",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Atl. Tucuman",
    "jugador": "Ruiz Rodriguez, Ramiro",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Molina, Joaquin",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Sanguinetti, Facundo",
    "precioBase": "400",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Abraham, Ignacio",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Alfaro, Juan Luis",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Arboleda, Danilo",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Colazo, Nicolas",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Daniele, Santiago",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Iribarren, Juan",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Lopez Garcia, Santiago",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Meriano, Nicolas",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Oviedo, Brandon",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Pombo, Joaquin",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Vittor, Sergio",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Adoryan, Tomas",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Esquivel, Santiago",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Palavecino, Lucas",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Piñero, Lisandro",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Baldosera",
    "precioCompra": "200"
  },
  {
    "equipo": "Banfield",
    "jugador": "Rio, Martin",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Rios, Lautaro",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Villegas, Lautaro",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Alaniz, Agustin",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Auzmendi, Rodrigo",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Echeverria, Marcos",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Mendez, Mauro",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Perrotta, Tiziano",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Banfield",
    "jugador": "Sepulveda, Bruno",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Insua, Juan Pablo",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Miño, Marcelo",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Barrios, Rafael",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Calderara, Brian",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Capraro, Nicolas",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Demartini, Nicolas",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Insua, Rodrigo",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Jappert, Kevin",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Mater, Facundo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Miloc, Dardo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Porra, Tomas",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Puig, Maximiliano",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Rak, Yonatthan",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Tobio, Fernando",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Coronel, Mateo",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Glaby, Dylan",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Guaraz, Ivan",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Tapia, Ivan",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Briasco, Norberto",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Bruera, Facundo",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Fla 3",
    "precioCompra": "1300"
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Candia, Jhonatan",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Morales, Gonzalo",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Perugini, Thiago",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Barracas Central",
    "jugador": "Rivera, Wilfredo",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Cardozo, Thiago",
    "precioBase": "400",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Daniele, Matias",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Vicentini, Manuel",
    "precioBase": "200",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Benitez, Alcides",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Heredia, Geronimo",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Falcon, Agustin",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Leguizamon, Anibal",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Lopez, Lisandro",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Maldonado, Alexis",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Morales, Leonardo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Ricca, Federico",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Sporle, Adrian",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Velazquez, Juan",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Gonzalez Metilli, Francisco",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Rostock",
    "precioCompra": "500"
  },
  {
    "equipo": "Belgrano",
    "jugador": "Hernandes, Ramiro",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Longo, Santiago",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Mavilla, Julian",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Palavecino, Matias",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Rigoni, Emiliano",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Sanchez, Adrian",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Sanchez, Ulises",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Tapia, Ignacio",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Vazquez, Franco",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Deco",
    "precioCompra": "2300"
  },
  {
    "equipo": "Belgrano",
    "jugador": "Zelarayan, Lucas",
    "precioBase": "600",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Fernandez, Nicolas",
    "precioBase": "600",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Flatulentos",
    "precioCompra": "2600"
  },
  {
    "equipo": "Belgrano",
    "jugador": "Gutierrez, Lautaro",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Passerini, Lucas",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Pastran Lautaro",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Reyna, Bryan",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Belgrano",
    "jugador": "Zelarayan, Gonzalo",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Brey, Leandro",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Garcia, Javier",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Marchesin, Agustin",
    "precioBase": "500",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Aranda, Gabriel",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Barinaga, Juan",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Battaglia, Rodrigo",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Blanco, Lautaro",
    "precioBase": "500",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Blondel, Lucas",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Braida, Malcom",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Costa, Ayrton",
    "precioBase": "500",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Di Lollo, Lautaro",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "Flatulentos",
    "precioCompra": "600"
  },
  {
    "equipo": "Boca",
    "jugador": "Figal, Nicolas",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Gorosito, Dylan",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Molas, Walter",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Pellegrino, Marco",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Weigandt, Marcelo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Alarcon, Williams",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Belmonte, Tomas",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Delgado, Milton",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Herrera, Ander",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Fla 3",
    "precioCompra": "700"
  },
  {
    "equipo": "Boca",
    "jugador": "Maroni, Gonzalo",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Martegani, Agustin",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Palacios, Carlos",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Ay de Mi",
    "precioCompra": "1800"
  },
  {
    "equipo": "Boca",
    "jugador": "Paredes, Leandro",
    "precioBase": "1000",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Flatulentos",
    "precioCompra": "1000"
  },
  {
    "equipo": "Boca",
    "jugador": "Ramirez, Juan",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Rey Domenech, Camilo",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Morganti",
    "precioCompra": "200"
  },
  {
    "equipo": "Boca",
    "jugador": "Velasco, Alan",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Zenon, Kevin",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Aguirre, Brian",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Cavani, Edinson",
    "precioBase": "600",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Gimenez, Milton",
    "precioBase": "600",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Hinestroza, Marino",
    "precioBase": "500",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Janson, Lucas",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Merentiel, Miguel",
    "precioBase": "1000",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "PDC",
    "precioCompra": "1300"
  },
  {
    "equipo": "Boca",
    "jugador": "Orsini, Nicolas",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Ruiz, Joaquin",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Zeballos, Exequiel",
    "precioBase": "600",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Boca",
    "jugador": "Zufiaurre, Iker",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Aguerre, Alan",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Vallejos, Javier",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Bernabeu, Lucas",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Casermeiro, Yuri",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Galvan, Ignacio",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Gomez, Jose",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Mansilla, Facundo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Marchi, Leonardo",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Martinez, Fernando",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Moyano, Santiago",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Pignani, Juan Pablo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Quiroga Agustin",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Cano, Lautaro",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Cravero, Tiago",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Gonzalez, Lucas",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Iacobellis, Marco",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Juarez, Fernando",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Rodriguez, Federico",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Vera, Matias",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Barrera, Diego",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Benitez, Matias",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Flores, Joaquin",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Gerez, Bautista",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Naya, Ezequiel",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Romero, Agustin",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Tijanovich, Horacio",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Varaldo, Lucas",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Central Cordoba",
    "jugador": "Zeballos, Sebastian",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Fiermarin, Cristopher",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Ledesma, Marcos",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Cannavo, Ezequiel",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Fernandez, Damian",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Hausch, Agustin",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Lucero, Samuel",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Martinez, David",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Pereyra, Elias",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Portillo, Ayrton",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Roselli, Nazareno",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Soto, Alexis",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Souto, Lucas",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Banega, Ever",
    "precioBase": "600",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Flatulentos",
    "precioCompra": "900"
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Barbona, David",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Botta, Ruben",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Duarte, Manuel",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Herrera, Rodrigo",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Lopez, Julian",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Miranda, Matias",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Molinas, Aaron",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Perez, Cesar",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Schamine, Benjamin",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Sosa Yung, Santiago",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Aguiar, Mateo",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Fernandez, David",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Gutierrez, Juan Manuel",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "La Roza, Uriel",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Lobato, Lenny",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Miritello, Juan Bautista",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Osorio, Abiel",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Morganti",
    "precioCompra": "600"
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Sosa, Matias",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Defensa y Justicia",
    "jugador": "Stefanelli, Nicolas",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Iacovich, Fabricio",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Muslera, Fernando",
    "precioBase": "500",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Arzamendia, Santiago",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Benedetti, Gaston",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Dall'Aglio, Emanuel",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Funes Mori, Ramiro",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Gonzalez Pirez, Leandro",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Meza, Eric",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Nuñez, Santiago",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Pierani, Valente",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Rodriguez, Facundo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Amondarain, Mikel",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Ascacibar, Santiago",
    "precioBase": "800",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Castro, Alexis",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Medina, Cristian",
    "precioBase": "600",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Neves, Gabriel",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Palacios, Tiago",
    "precioBase": "600",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Ay de Mi",
    "precioCompra": "1600"
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Piovi, Ezequiel",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Sosa, Jose",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Alario, Lucas",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Carrillo, Guido",
    "precioBase": "600",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Morganti",
    "precioCompra": "2900"
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Cetre, Edwin",
    "precioBase": "600",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Farias, Facundo",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Deco",
    "precioCompra": "500"
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Gaich, Adolfo",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Perez, Fabricio",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes LP",
    "jugador": "Tobio Burgos, Joaquin",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "Deco",
    "precioCompra": "1200"
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Bacchia, Renzo",
    "precioBase": "200",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Lastra, Agustin",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Antonini, Juan",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Bersano, Fernando",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Bono, Giuliano",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Fenoglio, Valentin",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Heredia, Santiago",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Maffini, Gonzalo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Morro, Nicolas",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Ojeda, Sergio",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Olmos, Tomas",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Ostchega, Tobias",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Pagliaricci, Matias",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Ramponi, Jeremias",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Ruiz Diaz, Matias",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Valenti, Matias",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Alanis, Gabriel",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Cabrera, Alejandro",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Forclaz, Ezequiel",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Gonzalez, Tomas",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Leiva, Tobias",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Romero, Francisco",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Romero, Santiago",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Rosane, Siro",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Bajamich, Mateo",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Ferreira, Javier",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Galvan, Francisco",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Garnerone, Martin",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Gonzalez, Lucas",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Morales, Agustin",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Tevez, Mauricio",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Estudiantes RC",
    "jugador": "Valiente, Mauro",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Insfran, Nelson",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Kadijevic, Julian",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Barros Schelotto, Bautista",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Conti, German",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Corbalan, Fabricio",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Cortazzo, Juan Cruz",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Giampaoli, Renzo",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Gonzalez, Gonzalo",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Martinez, Enzo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Mastrangelo, Diego",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Melluso, Matias",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Silva Torrejon, Pedro",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Aguiar, Pablo",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Barros Schelotto, Nicolas",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Castro, Lucas",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Di Biasi, Facundo",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Fernandez, Ignacio",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Pitufos",
    "precioCompra": "500"
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Mamut, Leandro",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Max, Augusto",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Miramon, Ignacio",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Moreno, Junior",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Perez, Juan Jose",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Seoane, Mateo",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Steimbach, Alexis",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Yangali, Juan",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Auzmendi, Agustin",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Chavez, Lautaro",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "De Asis, Jorge",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Merlo, Jeremias",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Panaro, Manuel",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Pitufos",
    "precioCompra": "300"
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Torres, Franco",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Torres, Marcelo",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia LP",
    "jugador": "Zalazar, Maximiliano",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Petruchi, Lautaro",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Rigamonti, Cesar",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Carrera, Lautaro",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Cortez, Ismael",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Franco, Juan Jose",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Gonzalez, Imanol",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Mondino, Diego",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Muñoz, Ezequiel",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Paredes, Luciano",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Recalde, Matias",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Saavedra, Franco",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Antonini, Fermin",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Barboza, Nahuel",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Ceballos, Julian",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Fernandez, Esteban",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Gaggi, Enzo",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Lencioni, Facundo",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Linares, Nicolas",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Molina, Daniel",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Ortiz, Benjamin",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Alvarez, Juan Pablo",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Andrada, Brian",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Armoa, Blas",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Cingolani, Luciano",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Ferreyra, Nicolas",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Rodriguez, Santiago",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Romano, Nicolas",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Gimnasia M",
    "jugador": "Simoni, Valentino",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Galindez, Hernan",
    "precioBase": "500",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Meza, Sebastian",
    "precioBase": "200",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Campo, Ignacio",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Carrizo, Lucas",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Ibañez, Cesar",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Lescano, Leandro",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Nervo, Hugo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Paz, Nehuen",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Pereyra, Fabio",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Vera, Federico",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Zabala, Daniel",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Gil, Leonardo",
    "precioBase": "600",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Mora, Lautaro",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Ojeda, Emmanuel",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Peralta, Thaiel",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Perez, Leonel",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Waller, Facundo",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Bisanz, Juan",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Caicedo, Jordy",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Cortes, Oscar",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Gimenez, Luciano",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Ramirez, Eric",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Huracan",
    "jugador": "Sequeira, Leonardo",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Rey, Rodrigo",
    "precioBase": "500",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Blazquez, Joaquin",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Barros Ayala, Luciano",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Bordon, Gonzalo",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Closter, Fernando",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "De Irastorza, Jonathan",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Fedorco, Juan",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Freire, Nicolas",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Godoy, Leonardo",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Lomonaco, Kevin",
    "precioBase": "500",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "Pitufos",
    "precioCompra": "600"
  },
  {
    "equipo": "Independiente",
    "jugador": "Paredes, Franco",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Valdez, Sebastian",
    "precioBase": "500",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Valenzuela, Milton",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Zabala, Facundo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Cabral, Luciano",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Baldosera",
    "precioCompra": "800"
  },
  {
    "equipo": "Independiente",
    "jugador": "Fernandez Cedres, Rodrigo",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Galdames, Pablo",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Lopez, Kevin",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Malcorra, Ignacio",
    "precioBase": "600",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Mancuello, Federico",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Marcone, Ivan",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Millan, Lautaro",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Independiente Spurs",
    "precioCompra": "500"
  },
  {
    "equipo": "Independiente",
    "jugador": "Parmo, Tomas",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Deco",
    "precioCompra": "300"
  },
  {
    "equipo": "Independiente",
    "jugador": "Perez Curci, Mateo",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Abaldo, Matias",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Pitufos",
    "precioCompra": "700"
  },
  {
    "equipo": "Independiente",
    "jugador": "Avalos, Gabriel",
    "precioBase": "500",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Rostock",
    "precioCompra": "600"
  },
  {
    "equipo": "Independiente",
    "jugador": "Laprida, Alan",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Mazzanti, Walter",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Montiel, Santiago",
    "precioBase": "600",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Pitufos",
    "precioCompra": "600"
  },
  {
    "equipo": "Independiente",
    "jugador": "Palais, Josias",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Pussetto, Ignacio",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Ruiz, Javier",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Taborda, Enzo",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Independiente",
    "jugador": "Tarzia, Diego",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Gomez Riga, Emmanuel",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Macagno, Ramiro",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Arena, Nahuel",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Bonifacio, Ezequiel",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Cena, Santiago",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Costa, Leonard",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Elordi, Juan Manuel",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Flores, Santiago",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Peinipil, Mauro",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Segovia, Imanol",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Studer, Sheyko",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Villalba, Ivan",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Amato, Fabricio",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Atencio, Rodrigo",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Independiente Spurs",
    "precioCompra": "1600"
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Bottari, Tomas",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Bucca, Leonel",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Fernandez, Matias",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Rostock",
    "precioCompra": "1300"
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Florentin, Jose",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Deco",
    "precioCompra": "1600"
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Moreyra, Stefano",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Muro, Tomas",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Rios, Gonzalo",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Vazquez, Kevin",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Vera, Juan Ignacio",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Arce, Alex",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Crego, Diego",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Dadin, Juan Bautista",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Muñoz Gomez, Santiago",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Ramis, Victorio",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Sartori, Fabrizio",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Independiente Spurs",
    "precioCompra": "300"
  },
  {
    "equipo": "Indepte. Rivadavia",
    "jugador": "Villa, Sebastian",
    "precioBase": "800",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Maldonado, Lautaro",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Roffo, Manuel",
    "precioBase": "400",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Alarcon, Fernando",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Bravo, Agustin",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Cerato, Giuliano",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "De la Fuente, Hernan",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Erquiaga, Ivan",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Galvan, Jonathan",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Mosevich, Leonel",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Requena, Gonzalo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Sosa, Diego",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Abregu, Gustavo",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Gallardo, Matias",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Lazaro, Jeremias",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Lodico, Gaston",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Mendez, Juan Ignacio",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Moyano, Franco",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Albarracin, Lorenzo",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Cordoba, Jhon",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Fonseca, Matias",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Guerra, Nicolas",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Jara, Franco",
    "precioBase": "500",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Klimowicz, Luca",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Luna, Alex",
    "precioBase": "500",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "Morganti",
    "precioCompra": "2000"
  },
  {
    "equipo": "Instituto",
    "jugador": "Romero, Manuel",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Instituto",
    "jugador": "Suarez, Facundo",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Losada, Nahuel",
    "precioBase": "500",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "Pitufos",
    "precioCompra": "1000"
  },
  {
    "equipo": "Lanus",
    "jugador": "Morales, Lautaro",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Petroli, Franco",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Balbuena, Axel",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Canale, Jose Maria",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "De Jesus, Ronaldo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Guidara, Tomas",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "Dep. Areco",
    "precioCompra": "700"
  },
  {
    "equipo": "Lanus",
    "jugador": "Izquierdoz, Carlos",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Marcich, Sasha",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "Firmamo",
    "precioCompra": "1200"
  },
  {
    "equipo": "Lanus",
    "jugador": "Morgantini, Nicolas",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Ontivero, Octavio",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Perez, Gonzalo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Quiroz, Tobias",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Romero, Luciano",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Cardozo, Agustin",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Carrera, Ramiro",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Gerez, Mariano",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Gonzalez, Maximiliano",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Laplace, Thiago",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Loaiza, Raul",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Medina, Agustin",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Peña Biafore, Felipe",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Sanchez, Facundo",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Watson, Franco",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Aquino, Dylan",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Besozzi, Lucas",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Bou, Walter",
    "precioBase": "500",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Cabrera, Bruno",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Castillo, Rodrigo",
    "precioBase": "600",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Deco",
    "precioCompra": "1200"
  },
  {
    "equipo": "Lanus",
    "jugador": "De Martis, Thomas",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Moreno, Marcelino",
    "precioBase": "1000",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "Firmamo",
    "precioCompra": "1600"
  },
  {
    "equipo": "Lanus",
    "jugador": "Orozco, Franco",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Salvio, Eduardo",
    "precioBase": "600",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Segovia, Alexis",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Lanus",
    "jugador": "Sepulveda, Matias",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Arias, Gabriel",
    "precioBase": "400",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Barlasina, Williams",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Espinola, Juan",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Cabrera, Bruno",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Goitea, Nicolas",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Lollo, Luciano",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Luciano, Martin",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Mendez, Armando",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Montero, Alejo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Mosquera, Jherson",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Noguera, Fabian",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Risso Patron, Gabriel",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Salcedo, Saul",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Salomon, Oscar",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Acuña, Valentino",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Villa Luro",
    "precioCompra": "300"
  },
  {
    "equipo": "Newell's",
    "jugador": "Esponda, Marcelo",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Fernandez, Martin",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Gomez Mattar, Jeronimo",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Jaime, Misael",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Regiardo, Luca",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Guch, Facundo",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Sotelo, David",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Chiaverano, Giovani",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Coccaro, Matias",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Pitufos",
    "precioCompra": "1800"
  },
  {
    "equipo": "Newell's",
    "jugador": "Diaz, Luis",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Garcia, Franco",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Gigena, Thiago",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Herrera, Luciano",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Hoyos, Michael",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Navarro, Alejo",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Nuñez, Walter",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Newell's",
    "jugador": "Ramirez, Juan Ignacio",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Borgogno, Matias",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Bustos, Brian",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Sumavil, Nicolas",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Bay, Jonathan",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Goñi, Gonzalo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Guzman, Axel",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Lagos, Agustin",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Mendia, Mateo",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Quiros, Santiago",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Raggio, Eugenio",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Saborido, Juan Ignacio",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Silva, Tomas",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Valdivia, Gonzalo",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Vazquez, Ignacio",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Amarfil, Maximiliano",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Bussio, Felipe",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Dalmasso, Santiago",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Gomez, Ivan",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Mainero, Guido",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Merlini, Bautista",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Minerva, Franco",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Ocampo, Agustin",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Palavecino, Facundo",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Picco, Leonel",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Baldosera",
    "precioCompra": "900"
  },
  {
    "equipo": "Platense",
    "jugador": "Portillo, Marcos",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Zapiola, Franco",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Bosch, Benjamin",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Gauto, Juan",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Heredia, Leonardo",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Lotti, Augusto",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Luna Diale, Mauro",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Platense",
    "jugador": "Nasif, Tomas",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Deco",
    "precioCompra": "900"
  },
  {
    "equipo": "Racing",
    "jugador": "Cambeses, Facundo",
    "precioBase": "500",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "El Marplatense",
    "precioCompra": "400"
  },
  {
    "equipo": "Racing",
    "jugador": "Tagliamonte, Matias",
    "precioBase": "200",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Colombo, Nazareno",
    "precioBase": "500",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Di Cesare, Marco",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "Fla 3",
    "precioCompra": "700"
  },
  {
    "equipo": "Racing",
    "jugador": "Garcia Basso, Agustin",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "El Marplatense",
    "precioCompra": "900"
  },
  {
    "equipo": "Racing",
    "jugador": "Martirena, Gaston",
    "precioBase": "500",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Pardo, Franco",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Rodriguez, Ignacio",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Rojas, Gabriel",
    "precioBase": "500",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "Firmamo",
    "precioCompra": "1300"
  },
  {
    "equipo": "Racing",
    "jugador": "R, Marcos",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Rubio, Tobias",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Sosa, Santiago",
    "precioBase": "800",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Barrios, Martin",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Carboni, Valentin",
    "precioBase": "800",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Fernandez, Adrian",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Forneris, Alan",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Miljevic, Matko",
    "precioBase": "600",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Firmamo",
    "precioCompra": "500"
  },
  {
    "equipo": "Racing",
    "jugador": "Nardoni, Juan",
    "precioBase": "800",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Firmamo",
    "precioCompra": "2200"
  },
  {
    "equipo": "Racing",
    "jugador": "Rodriguez, Baltasar",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Zaracho, Matias",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Zuculini, Bruno",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Balboa, Adrian",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Conechny, Tomas",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Morganti",
    "precioCompra": "800"
  },
  {
    "equipo": "Racing",
    "jugador": "Martinez, Adrian",
    "precioBase": "1000",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Baldosera",
    "precioCompra": "4400"
  },
  {
    "equipo": "Racing",
    "jugador": "Solari, Santiago",
    "precioBase": "500",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "El Marplatense",
    "precioCompra": "800"
  },
  {
    "equipo": "Racing",
    "jugador": "Torres, Elias",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Reyna, Gonzalo",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Racing",
    "jugador": "Vergara, Duvan",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Arce, Ignacio",
    "precioBase": "400",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Lopez, Ivan",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Barbieri, Miguel",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Bracamonte, Mariano",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Caro Torres, Nicolas",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Gallo, Rodrigo",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Goitia, Jonatan",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Miño, Facundo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Murillo, Yeison",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Paz, Cristian",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Randazzo, Juan Cruz",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Ramirez, Pedro",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Sansotre, Nicolas",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Sayavedra, Rodrigo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Tovo, Eric",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Dramisino, Alejo",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Celiz, Milton",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Landriel, Leonardo",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Madero, Patricio",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Monje, Pablo",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Obredor, Gabriel",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Ramirez, Mateo",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Smarra, Mauro",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Watson, Nicolas",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Alonso, Antony",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Benegas, Nicolas",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Diaz, Alexander",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Independiente Spurs",
    "precioCompra": "300"
  },
  {
    "equipo": "Riestra",
    "jugador": "Herrera, Jonathan",
    "precioBase": "500",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Independiente Spurs",
    "precioCompra": "1200"
  },
  {
    "equipo": "Riestra",
    "jugador": "Ingrati, Jose",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Riestra",
    "jugador": "Stringa, Angel",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Armani, Franco",
    "precioBase": "500",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "Independiente Spurs",
    "precioCompra": "1200"
  },
  {
    "equipo": "River",
    "jugador": "Beltran, Santiago",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Centurion, Ezequiel",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Acuña, Marcos",
    "precioBase": "500",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "Firmamo",
    "precioCompra": "1300"
  },
  {
    "equipo": "River",
    "jugador": "Bustos, Fabricio",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Diaz, Paulo",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Gimenez, Ulises",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Gonzalez, Facundo",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Martinez Quarta, Lucas",
    "precioBase": "500",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Montiel, Gonzalo",
    "precioBase": "500",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Pezzella, German",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Portillo, Juan",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Rivero, Lautaro",
    "precioBase": "500",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Viña, Matias",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Acosta, Thiago",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Castaño, Kevin",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Costantini, Giorgio",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "De la Cuesta, Agustin",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Galarza Fonda, Matias",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Galoppo, Giuliano",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Galvan, Tomas",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Jaime, Cristian",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Lencina, Santiago",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Deco",
    "precioCompra": "300"
  },
  {
    "equipo": "River",
    "jugador": "Meza, Juan Ignacio",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Meza, Maximiliano",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Deco",
    "precioCompra": "1100"
  },
  {
    "equipo": "River",
    "jugador": "Moreno, Anibal",
    "precioBase": "800",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Fla 3",
    "precioCompra": "800"
  },
  {
    "equipo": "River",
    "jugador": "Quintero, Juan Fernando",
    "precioBase": "1000",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Dep. Areco",
    "precioCompra": "3600"
  },
  {
    "equipo": "River",
    "jugador": "Vera, Fausto",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Colidio, Facundo",
    "precioBase": "500",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Villa Luro",
    "precioCompra": "2600"
  },
  {
    "equipo": "River",
    "jugador": "Driussi, Sebastian",
    "precioBase": "500",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Ruberto, Agustin",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Salas, Maximiliano",
    "precioBase": "500",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "River",
    "jugador": "Subiabre, Ian",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "PDC",
    "precioCompra": "1000"
  },
  {
    "equipo": "River",
    "jugador": "Woiski, Alex",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Broun, Jorge",
    "precioBase": "400",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Ledesma, Jeremias",
    "precioBase": "400",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Avila, Gaston",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Burgos, Santiago",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Coronel, Emanuel",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Gimenez, Enzo",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Gimenez, Juan",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Komar, Juan Cruz",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Mallo, Facundo",
    "precioBase": "500",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Martinez, Mauricio",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Ovando, Ignacio",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Quintana, Carlos",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Rios, Leonardo",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Sandez, Agustin",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Cantizano, Giovanni",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Duarte, Gaspar",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "El Marplatense",
    "precioCompra": "500"
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Ibarra, Franco",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Ay de Mi",
    "precioCompra": "1100"
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Lo Celso, Francesco",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Lovera, Maximiliano",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Navarro, Federico",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "O'Connor, Tomas",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Pizarro, Vicente",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Segovia, Santiago",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "El Marplatense",
    "precioCompra": "200"
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Campaz, Jaminton",
    "precioBase": "600",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "Rostock",
    "precioCompra": "3200"
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Cervera, Tobias",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Copetti, Enzo",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Di Maria, Angel",
    "precioBase": "1000",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "Ay de Mi",
    "precioCompra": "400"
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Frias, Franco",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Modica, Agustin",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Oviedo, Fabricio",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Rosario Central",
    "jugador": "Veliz, Alejo",
    "precioBase": "800",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Independiente Spurs",
    "precioCompra": "1100"
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Altamirano, Facundo",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Clemente, Mateo",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Devecchi, Jose",
    "precioBase": "300",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Gill, Orlando",
    "precioBase": "500",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "Baldosera",
    "precioCompra": "1200"
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Arias, Oscar",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Baez, Elias",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Cardillo, Mauricio",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Hernandez, Gaston",
    "precioBase": "500",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "Morganti",
    "precioCompra": "1600"
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Herrera, Daniel",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Herrera, Ezequiel",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Lopez, Fabricio",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Lorenzon, Franco",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Rodriguez Pagano, Teo",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Romaña, Jhohan",
    "precioBase": "500",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Tripichio, Nicolas",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "Fla 3",
    "precioCompra": "1700"
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Zelaya, Maximiliano",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Barrios, Nahuel",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Gulli, Facundo",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Fla 3",
    "precioCompra": "400"
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Insaurralde, Manuel",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Ladstatter, Agustin",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Fla 3",
    "precioCompra": "200"
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Perruzzi, Francisco",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Perruzzi, Ignacio",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Rattalino, Juan Cruz",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Cerutti, Ezequiel",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Flatulentos",
    "precioCompra": "700"
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Cuello, Alexis",
    "precioBase": "600",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Independiente Spurs",
    "precioCompra": "1700"
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Herazo, Diego",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Hernandez, Matias",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Reali, Matias",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Rodriguez, Gregorio",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": "200"
  },
  {
    "equipo": "San Lorenzo",
    "jugador": "Salinardi, Branco",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Fla 3",
    "precioCompra": "200"
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Ayala, Thyago",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Burrai, Javier",
    "precioBase": "200",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Arismendi, Yair",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Arturia, Gaston",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Cabrera, Juan Manuel",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Diaz, Gabriel",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Garcia, Manuel",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Godoy, Joel",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Insaurralde, Juan Manuel",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Morales, Santiago",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Orihuela, Renzo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Rosales, Matias",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Salle, Santiago",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Sandoval, Facundo",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Seyral, Agustin",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Suarez, Lucas",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Vallejos, Jeremias",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Gomez, Jonathan",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Guiacobini, Tomas",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Monaco, Manuel",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Quiroga, Sergio",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Renteria, Jhon",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Villalba, Carlos",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Zabala, Cristian",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Contrera, Julian",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Churin, Diego",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Gonzalez, Gaston",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Magnin, Pablo",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Marabel, Junior",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Sarmiento",
    "jugador": "Marquez, Brandon",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Barbi, Santino",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Florentin, Jeremias",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Herrera, Guido",
    "precioBase": "500",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Baez, Gabriel",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Catalan, Matias",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "Baldosera",
    "precioCompra": "500"
  },
  {
    "equipo": "Talleres",
    "jugador": "Chamorro, Timoteo",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Fernandez, Santiago",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Guth, Rodrigo",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Navarro, Miguel",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Palomino, Jose Luis",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Rodriguez, Juan",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Schott, Augusto",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Suarez, Emilio",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Vigo, Alex",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Caceres, Mateo",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Galarza, Matias Alejandro",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "El Marplatense",
    "precioCompra": "700"
  },
  {
    "equipo": "Talleres",
    "jugador": "Gomez, Matias",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Ortegoza, Diego",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Pitufos",
    "precioCompra": "1700"
  },
  {
    "equipo": "Talleres",
    "jugador": "Ortiz, Lautaro",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Puzzo, Santiago",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Sequeira, Luis",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Alastra, Ignacio",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Angulo, Luis",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Barticcioto, Bruno",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Davila, Valentin",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Depietri, Valentin",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Martinez, Ronaldo",
    "precioBase": "600",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Villa Luro",
    "precioCompra": "1900"
  },
  {
    "equipo": "Talleres",
    "jugador": "Rick",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Talleres",
    "jugador": "Valoyes, Diego",
    "precioBase": "600",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Sultani, Tomas",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Zenobio, Felipe",
    "precioBase": "400",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "Ay de Mi",
    "precioCompra": "1200"
  },
  {
    "equipo": "Tigre",
    "jugador": "Alvarez, Federico",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Arias, Ramon",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Banegas, Nahuel",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Barrionuevo, Alan",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Garay, Martin",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Guiffrey, German",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Laso, Joaquin",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Soto, Guillermo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Villalba, Juan Manuel",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Cabrera, Elias",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Elias, Jalil",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Gonzalez, Santiago",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Leyes, Bruno",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Medina, Sebastian",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Mosqueira, Joaquin",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Neira, Ignacio",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Piñeiro, Gonzalo",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Rivero, Simon",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Saralegui, Jabes",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Villa Luro",
    "precioCompra": "900"
  },
  {
    "equipo": "Tigre",
    "jugador": "Serrago, Tiago",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Ay de Mi",
    "precioCompra": "900"
  },
  {
    "equipo": "Tigre",
    "jugador": "Benitez, Romeo",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Fernandez, Manuel",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Lopez, Santiago",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Oviedo, Alfio",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Ramirez Matheus, Eric",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Tigre",
    "jugador": "Romero, David",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "El Marplatense",
    "precioCompra": "500"
  },
  {
    "equipo": "Tigre",
    "jugador": "Russo, Ignacio",
    "precioBase": "500",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Ay de Mi",
    "precioCompra": "1700"
  },
  {
    "equipo": "Union",
    "jugador": "Mansilla, Matias",
    "precioBase": "400",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "Fla 3",
    "precioCompra": "800"
  },
  {
    "equipo": "Union",
    "jugador": "Meuli, Lucas",
    "precioBase": "100",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Alvarez, Emiliano",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Corvalan, Claudio",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Del Blanco, Mateo",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "SI",
    "fantaEquipo": "Firmamo",
    "precioCompra": "1000"
  },
  {
    "equipo": "Union",
    "jugador": "Fascendini, Valentin",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Ludueña, Juan Pablo",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Paz, Nicolas",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Pitton, Bruno",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Rubio, Enzo",
    "precioBase": "100",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Rodriguez, Maizon",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Vargas, Lautaro",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Fragapane, Franco",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Giaccone, Emilio",
    "precioBase": "100",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Palacios, Julian",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Palavecino, Nicolas",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Pitton, Mauro",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Rostock",
    "precioCompra": "600"
  },
  {
    "equipo": "Union",
    "jugador": "Profini, Rafael",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Roldan, Enzo",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Solari, Augusto",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Colazo, Agustin",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Diaz, Diego",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Estigarribia, Marcelo",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Gonzalez, Tomas",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Solbes, Ricardo",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Union",
    "jugador": "Tarragona, Cristian",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Garzon, Lautaro",
    "precioBase": "200",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Marchiori, Tomas",
    "precioBase": "500",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Montero, Alvaro",
    "precioBase": "200",
    "posicion": "ARQ",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Garcia, Joaquin",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Gomez, Elias",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Gordon, Jano",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Magallan, Lisandro",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Mammana, Emanuel",
    "precioBase": "400",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Quiros, Aaron",
    "precioBase": "300",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Silvero, Thiago",
    "precioBase": "200",
    "posicion": "DEF",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Aliendro, Rodrigo",
    "precioBase": "400",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Andrada, Tobias",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Ay de Mi",
    "precioCompra": "400"
  },
  {
    "equipo": "Velez",
    "jugador": "Baeza, Claudio",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Diaz, Franco",
    "precioBase": "200",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Lanzini, Manuel",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "El Marplatense",
    "precioCompra": "1900"
  },
  {
    "equipo": "Velez",
    "jugador": "Robertone, Lucas",
    "precioBase": "500",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Valdes, Diego",
    "precioBase": "300",
    "posicion": "MED",
    "poli": "",
    "fantaEquipo": "Villa Luro",
    "precioCompra": "400"
  },
  {
    "equipo": "Velez",
    "jugador": "Carrizo, Maher",
    "precioBase": "600",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Villa Luro",
    "precioCompra": "500"
  },
  {
    "equipo": "Velez",
    "jugador": "Godoy, Dilan",
    "precioBase": "200",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Monzon, Florian",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Pellegrini, Matias",
    "precioBase": "300",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Pizzini, Francisco",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "SI",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Romero, Braian",
    "precioBase": "600",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Flatulentos",
    "precioCompra": "2100"
  },
  {
    "equipo": "Velez",
    "jugador": "Santos, Michael",
    "precioBase": "400",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "",
    "precioCompra": ""
  },
  {
    "equipo": "Velez",
    "jugador": "Veron, Alex",
    "precioBase": "100",
    "posicion": "DEL",
    "poli": "",
    "fantaEquipo": "Villa Luro",
    "precioCompra": "200"
  }
];

module.exports = {
  JUGADORES,
};

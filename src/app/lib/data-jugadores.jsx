//https://tableconvert.com/excel-to-json
//https://products.aspose.app/cells/conversion/excel-to-json

const JUGADORES = [
    {
        "equipo": "Aldosivi",
        "jugador": "Barlasina, Williams",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Carranza, Jorge",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Gonzalez, Nahuel",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Breitenbruch, Nestor",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Cabral, Yonathan",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Cerato, Giuliano",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Godoy, Franco",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Gonzalez, Ariel",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Guerrico, Ignacio",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Kummer, Tomas",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Laquidain, Santiago",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Mottes, Gonzalo",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Paredes, Gabriel",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Roman, Fernando",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Bochi, Roberto",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Esponda, Marcelo",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Falasco, Lucio",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Garcia, Matias",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Leiva, Tobias",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Mendez, Emiliano",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Serrago, Tiago",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Chavez, Lautaro",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Dominguez, Alexis",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Giani, Justo",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Rostock",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Guzman, Natanael",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Palavecino, Agustin",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Preciado, Ayrton",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Rami, Franco",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Aldosivi",
        "jugador": "Torres, Elias",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Rodriguez, Diego",
        "precioBase": "400",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Siri Payer, Gonzalo",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Alvarez, Francisco",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Antoni, Mateo",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Coronel, Kevin",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Godoy, Erik",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Lozano, Leandro",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Prieto, Sebastian",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Ramirez, Tobias",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Sanchez, Luciano",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Santamaria, Thiago",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Vega, Roman",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Alvarez, Fernando",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Cardozo, Juan Jose",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Fattori, Federico",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Ferreira, Cristian",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Gamarra, Ariel",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Gomez, Lucas",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Lescano, Alan",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "1300",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Oroz, Nicolas",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Rodriguez, Alan",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Viveros, Emiliano",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Ardaiz, Joaquin",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Barros, Diego",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Bentancourt, Ruben",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Brondo, Manuel",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Herrera, Jose",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "1200",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Molina, Tomas",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Rodriguez, Santiago",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Romero, Maximiliano",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Argentinos",
        "jugador": "Sosa, Ismael",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Durso, Tomas",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Gonzalez, Juan Ignacio",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Acosta, Guillermo",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Brandan, Moises",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Brizuela, Miguel",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "De los Santos, Matias",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Ferrari, Gianluca",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Infante, Juan",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Martinez, Damian",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Orihuela, Matias",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Ortiz, Marcelo",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Vallejo, Luciano",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Castro, Nicolas",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Godoy, Lautaro",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Lamendola, Nicolas",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Lopez, Kevin",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Melo, Rodrigo",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Nicola, Franco",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Sanchez, Adrian",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Tesuri, Renzo",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Auzqui, Carlos",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Bajamich, Mateo",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Firmamo",
        "precioCompra": "1300",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Cabrera, Lisandro",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Coronel, Mateo",
        "precioBase": "500",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "1600",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Diaz, Leandro",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Rodriguez, Luis",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Atl. Tucuman",
        "jugador": "Ruiz Rodriguez, Ramiro",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Romero, Diego",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Sanguinetti, Facundo",
        "precioBase": "400",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Abraham, Ignacio",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Bonifacio, Ezequiel",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "De Ritis, Mathias",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Di Luciano, Ramiro",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Hernandez, Nicolas",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Iribarren, Juan",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Maldonado, Alexis",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Pombo, Joaquin",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Riveros, Paul",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Adoryan, Tomas",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Diaz, Damian",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Esquivel, Santiago",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Gonzalez, Matias",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Lopez Garcia, Santiago",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Miranda, Leonel",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Obando, Agustin",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Palavecino, Lucas",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Rio, Martin",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Rios, Gonzalo",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Rios, Lautaro",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Rivera, Geronimo",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Vega, Gabriel",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Alaniz, Agustin",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Alvarez, Juan",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Arturia, Marcos",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Bisanz, Juan",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Fla 3",
        "precioCompra": "1600",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Bundgaard, Alexander",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Garate, Leandro",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Nasif, Tomas",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Roldan, Mauricio",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Banfield",
        "jugador": "Sepulveda, Bruno",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Insua, Juan Pablo",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Ledesma, Marcos",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Miño, Marcelo",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Barrios, Rafael",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Capraro, Nicolas",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Demartini, Nicolas",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Insua, Rodrigo",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Jappert, Kevin",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Mater, Facundo",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Miloc, Dardo",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Rak, Yonatthan",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Tobio, Fernando",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Barrios, Nahuel",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "1300",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Duarte, Manuel",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Juarez, Alex",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Porra, Tomas",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Puig, Maximiliano",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Rosane, Siro",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Tapia, Ignacio",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Tapia, Ivan",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Blandi, Nicolas",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Bruera, Facundo",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Candia, Jhonatan",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Kruger, Facundo",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Morales, Gonzalo",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Perugini, Thiago",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Barracas Central",
        "jugador": "Ruiz, Javier",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Chicco, Ignacio",
        "precioBase": "200",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Espinola, Juan",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Vicentini, Manuel",
        "precioBase": "200",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Baldi, Agustin",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Bernabeu, Lucas",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Compagnucci, Gabriel",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Dattola, Agustin",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Grillo, Fausto",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Leguizamon, Anibal",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Lopez, Elias",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Meriano, Nicolas",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Ostchega, Tobias",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Troilo, Mariano",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Velazquez, Juan",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Castro, Tomas",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Cravero, Tiago",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Gonzalez Metilli, Francisco",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "1200",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Heredia, Geronimo",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Longo, Santiago",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Lucco, Jeremias",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Mavilla, Julian",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Menossi, Lucas",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Palavecino, Matias",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Quignon, Facundo",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Sanchez, Ulises",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Zelarayan, Lucas",
        "precioBase": "600",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Fernandez, Nicolas",
        "precioBase": "600",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "2400",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Hernandes, Ramiro",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Jara, Franco",
        "precioBase": "600",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "2500",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Passerini, Lucas",
        "precioBase": "600",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Reyna, Bryan",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "1800",
        "": ""
    },
    {
        "equipo": "Belgrano",
        "jugador": "Zelarayan, Gonzalo",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Brey, Leandro",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Garcia, Javier",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Marchesin, Agustin",
        "precioBase": "500",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "1500",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Romero, Sergio",
        "precioBase": "500",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Advincula, Luis",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "JRFC",
        "precioCompra": "1500",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Barinaga, Juan",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Battaglia, Rodrigo",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Pitufos",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Blanco, Lautaro",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Blondel, Lucas",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Costa, Ayrton",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Di Lollo, Lautaro",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Fabra, Frank",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Figal, Nicolas",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Gorosito, Dylan",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Lema, Cristian",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Mendia, Mateo",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Molas, Walter",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Rojo, Marcos",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "1200",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Saracchi, Marcelo",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Alarcon, Williams",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Belmonte, Tomas",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Ceballos, Julian",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Dalmasso, Santiago",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Delgado, Milton",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Herrera, Ander",
        "precioBase": "800",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "3500",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Martegani, Agustin",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Miramon, Ignacio",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Rey Domenech, Camilo",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Rivero, Simon",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Rolon, Esteban",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Zenon, Kevin",
        "precioBase": "600",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "1200",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Aguirre, Brian",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "JRFC",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Cavani, Edinson",
        "precioBase": "1000",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "3500",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Gimenez, Milton",
        "precioBase": "600",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Janson, Lucas",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Merentiel, Miguel",
        "precioBase": "600",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Orsini, Nicolas",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Palacios, Carlos",
        "precioBase": "500",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "1600",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Ruiz, Joaquin",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Velasco, Alan",
        "precioBase": "800",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Deco",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Zeballos, Exequiel",
        "precioBase": "800",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Boca",
        "jugador": "Zufiaurre, Iker",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Aguerre, Alan",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Bursich, Lautaro",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Zozaya, Juan Pablo",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Abascia, Lucas",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Casermeiro, Yuri",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Cufre, Brian",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Galvan, Ignacio",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Galvan, Jonathan",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Mansilla, Facundo",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Marchi, Leonardo",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Martinez, Fernando",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Moyano, Santiago",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Pignani, Juan Pablo",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Pillud, Ivan",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Rivero, Lautaro",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Trindade, Gonzalo",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Alfonso, Franco",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Cristoforo, Sebastian",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Florentin, Jose",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Glaby, Dylan",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Gomez, Ivan",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Palavecino, Manuel",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Quagliata, Nicolas",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Salazar, David",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Vega, Cristian",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Angulo, Luis",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Barrera, Diego",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Benitez, Matias",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Cabral, Favio",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Heredia, Leonardo",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "PDC",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Perello, Matias",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Varaldo, Lucas",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Veron, Gaston",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Central Cordoba",
        "jugador": "Zeballos, Sebastian",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Bologna, Enrique",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Leon, Roberto",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Masuero, Facundo",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Aguilera, Emanuel",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Balanta, Kevin",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Cannavo, Ezequiel",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Delgado, Rafael",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Ferreira, Lucas",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Galvan, Ignacio",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Gimenez, Ulises",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Perez, Damian",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Rubio, Tobias",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Sienra, Agustin",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Soto, Alexis",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Souto, Lucas",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Barbona, David",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Gonzalez, Lucas",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Gonzalez, Maximiliano",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Gutierrez, Kevin",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Larralde, Valentin",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Miranda, Matias",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Molinas, Aaron",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "1400",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Palavecino, Nicolas",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Perez, Cesar",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Ramirez, Matias",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Schamine, Benjamin",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Sosa, Santiago",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Gonzalez, Francisco",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Gonzalez, Gaston",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Rostock",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Gonzalez, Gonzalo",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Hausch, Agustin",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "La Roza, Uriel",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Miritello, Juan Bautista",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "1700",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Osorio, Abiel",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Sosa, Matias",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Defensa y Justicia",
        "jugador": "Togni, Gaston",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Baldosera",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Iacovich, Fabricio",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Mansilla, Matias",
        "precioBase": "400",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "1300",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Arzamendia, Santiago",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Benedetti, Gaston",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Boselli, Sebastian",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Funes Mori, Ramiro",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Meza, Eric",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Nuñez, Santiago",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Rodriguez, Facundo",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Ascacibar, Santiago",
        "precioBase": "800",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "3600",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Castro, Alexis",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Kociubinski, Bautista",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Medina, Cristian",
        "precioBase": "600",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "1200",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Neves, Gabriel",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Palacios, Tiago",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "1400",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Piovi, Ezequiel",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Sosa, Jose",
        "precioBase": "600",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "1200",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Alario, Lucas",
        "precioBase": "600",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "2600",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Carrillo, Guido",
        "precioBase": "600",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "2700",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Castillo Manyoma, Alexis",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "PDC",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Cetre, Edwin",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Farias, Facundo",
        "precioBase": "500",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Gimenez, Luciano",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Mendez, Mauro",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Perez, Fabricio",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Estudiantes",
        "jugador": "Tobio Burgos, Joaquin",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "2500",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Ingolotti, Luis",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Insfran, Nelson",
        "precioBase": "200",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Corbalan, Fabricio",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Cortazzo, Juan Cruz",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Giampaoli, Renzo",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Gonzalez, Gonzalo",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Martinez, Enzo",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Melluso, Matias",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Morales, Leonardo",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Pintado, Juan",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Silva Torrejon, Pedro",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Suso, Gaston",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Villalba, Juan Manuel",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Castro, Lucas",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "De Blasis, Pablo",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Di Biasi, Facundo",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Fernandez, Martin",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Garayalde, Nicolas",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Mamut, Leandro",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Max, Augusto",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Merlini, Bautista",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Moreno, Junior",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Briasco, Norberto",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Castillo, Rodrigo",
        "precioBase": "500",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "1600",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Hurtado, Jan",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Mammini, Ivo",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Panaro, Manuel",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Piedrahita, Alejandro",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Primante, Santino",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Sosa, Alan",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Gimnasia",
        "jugador": "Torres, Franco",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Petroli, Franco",
        "precioBase": "400",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Ramirez, Roberto",
        "precioBase": "200",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Arce, Lucas",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Ardiles, Facundo",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Canela, Nicolas",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Facello, Francisco",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Jara, Leonardo",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Meli, Andres",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Mendoza, Mateo",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Moran, Juan",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Quiroz, Leandro",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Rasmussen, Federico",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Rossi, Tomas",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Abrego, Gonzalo",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Fernandez, Roberto",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Leyes, Bruno",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Perez, Juan Jose",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Poggi, Vicente",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Pozzo, Tomas",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Santiago, Mariano",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Villalobos, Agustin",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Altamira, Facundo",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Andino, Santino",
        "precioBase": "500",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Fla 3",
        "precioCompra": "1600",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Auzmendi, Agustin",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Barrea, Daniel",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Cejas, Juan Bautista",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Gonzalez, Matias",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Martinez Dupuy, Luca",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Parzajuk, Kevin",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Ulariaga, Nahuel",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Godoy Cruz",
        "jugador": "Yañez, Bastian",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Galindez, Hernan",
        "precioBase": "500",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Meza, Sebastian",
        "precioBase": "200",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Carrizo, Lucas",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "De la Fuente, Hernan",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Goitea, Nicolas",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Guidara, Tomas",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Ibañez, Cesar",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Moya, Santiago",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Pellegrino, Marco",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Pereyra, Fabio",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Zabala, Daniel",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Alanis, Gabriel",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Cantillo, Victor",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Gil, Leonardo",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "1200",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Miljevic, Matko",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Ojeda, Emmanuel",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Perez, Leonel",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Spina, Agostino",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Watson, Franco",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Abila, Ramon",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Cabral, Rodrigo",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Mazzantti, Walter",
        "precioBase": "600",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "1500",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Ramirez, Eric",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Sequeira, Leonardo",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Tissera, Matias",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "1600",
        "": ""
    },
    {
        "equipo": "Huracán",
        "jugador": "Urzi, Agustin",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Rey, Rodrigo",
        "precioBase": "500",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Blazquez, Joaquin",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Angulo, Alvaro",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "De Irastorza, Jonathan",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Freire, Nicolas",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Lomonaco, Kevin",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Loyola, Felipe",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Paredes, Franco",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Salle, Santiago",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Sporle, Adrian",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Valdez, Sebastian",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Vera, Federico",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Cabral, Luciano",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Fernandez Cedres, Rodrigo",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Galdames, Pablo",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Mancuello, Federico",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Marcone, Ivan",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "1600",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Martinez, David",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Millan, Lautaro",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Parmo, Tomas",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Avalos, Gabriel",
        "precioBase": "600",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "3500",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Gimenez, Matias",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Hidalgo, Santiago",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Maestro Puch, Ignacio",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Martinez, Braian",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Montiel, Santiago",
        "precioBase": "500",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Pitufos",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Roman, Lucas",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Taborda, Enzo",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Independiente",
        "jugador": "Tarzia, Diego",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "1900",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Centurion, Ezequiel",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Marinelli, Gonzalo",
        "precioBase": "200",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Abecasis, Luciano",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Costa, Leonard",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Flores, Santiago",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Gomez, Luciano",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Ortega, Thomas",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Osella, Alejo",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Peinipil, Mauro",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Segovia, Imanol",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Souto, Pedro",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Studer, Sheyko",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "1200",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Valenti, Matias",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Villalba, Ivan",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Alvez, Gonzalo",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Amarfil, Maximiliano",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Amato, Fabricio",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Bottari, Tomas",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Fernandez, Matias",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Rodriguez, Laureano",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Schwartz, Mateo",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Sequeira, Luis",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Tonetto, Diego",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Vera, Juan Ignacio",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Barbieri, Juan Ignacio",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Cardillo, Mauricio",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Ramis, Victorio",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Retamar, Nicolas",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Romero, Fernando",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Sartori, Fabrizio",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Indepte. Rivadavia",
        "jugador": "Villa, Sebastian",
        "precioBase": "600",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "3500",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Papaleo, Joaquin",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Roffo, Manuel",
        "precioBase": "400",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "1500",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Alarcon, Fernando",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "1500",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Beltran, Emanuel",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Carrera, Lautaro",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Franco, Juan Jose",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Mosevich, Leonel",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Pereyra, Elias",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Requena, Gonzalo",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Rodriguez, Lucas",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Zalazar, Nicolas",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Diaz, Franco",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Gallardo, Matias",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Lazaro, Jeremias",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Lo Celso, Francesco",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Lodico, Gaston",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "1600",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Luna, Alex",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "1800",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Mac Allister, Francis",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Moreyra, Stefano",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Acevedo, Jonas",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "1200",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Albarracin, Lorenzo",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Batallini, Damian",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Fla 3",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Cordero, Nicolas",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Dellarossa, Jonathan",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Godoy, Matias",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Klimowicz, Luca",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Puebla, Damian",
        "precioBase": "600",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Deco",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Romero, Silvio",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Instituto",
        "jugador": "Suarez, Facundo",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Losada, Nahuel",
        "precioBase": "500",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Morales, Lautaro",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Brito, Elias",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "De Jesus, Ronaldo",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Izquierdoz, Carlos",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Marcich, Sasha",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Firmamo",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Mendez, Armando",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Morgantini, Nicolas",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Muñoz, Ezequiel",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Ontivero, Octavio",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Peña Biafore, Felipe",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Fla 3",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Perez, Gonzalo",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "PDC",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Aquino, Dylan",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Cardozo, Agustin",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "1300",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Carrera, Ramiro",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "1900",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Gerez, Mariano",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Laplace, Thiago",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Loaiza, Raul",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Medina, Agustin",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Ramirez, Juan",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Rodriguez, Agustin",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Acosta, Lautaro",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Bou, Walter",
        "precioBase": "600",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "4200",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Cabrera, Bruno",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Canelo, Alexis",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Moreno, Marcelino",
        "precioBase": "800",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Firmamo",
        "precioCompra": "1400",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Orozco, Franco",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Salvio, Eduardo",
        "precioBase": "600",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Rostock",
        "precioCompra": "3000",
        "": ""
    },
    {
        "equipo": "Lanús",
        "jugador": "Segovia, Alexis",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Hoyos, Lucas",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Navas, Keylor",
        "precioBase": "500",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "1200",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Reinatti, Josue",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Calderara, Brian",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Cuesta, Victor",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Jacob, Tomas",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Lollo, Luciano",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Luciano, Martin",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Martino, Angelo",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Mihovilcevich, Lucas",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Montero, Alejo",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Ay de mi",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Salcedo, Saul",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Sosa, Luca",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Tabares, Alejo",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Acuña, Valentino",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Banega, Ever",
        "precioBase": "600",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Cardozo, Fernando",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Jaime, Misael",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Maroni, Gonzalo",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "1300",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Mendez, Juan Ignacio",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Montenegro, Lisandro",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Regiardo, Luca",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Sotelo, David",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Tirado, Fabricio",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Chiaverano, Giovani",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Funez, Nazareno",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Garcia, Juan Manuel",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Gonzalez, Carlos",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Herrera, Luciano",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Newell's",
        "jugador": "Silvetti, Mateo",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Cozzani, Juan Pablo",
        "precioBase": "400",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Desabato, Andres",
        "precioBase": "200",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Losas, Federico",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Barros Schelotto, Bautista",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Bay, Jonathan",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Elizalde, Edgar",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Goñi, Gonzalo",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Lozano, Raul",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Picco, Leonel",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Baldosera",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Saborido, Juan Ignacio",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Salomon, Oscar",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Silva, Tomas",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Valdivia, Gonzalo",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Vazquez, Ignacio",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "1300",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Baldassarra, Franco",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Gonzalez, Federico",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Herrera, Rodrigo",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Juarez, Fernando",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Mainero, Guido",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Minerva, Franco",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Palavecino, Facundo",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Ramirez, Pablo",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Roldan, Enzo",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Taborda, Vicente",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "1200",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Toloza, Santiago",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Zapiola, Franco",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Cervera, Tobias",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Lotti, Augusto",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Marquez, Rodrigo",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Martinez, Ronaldo",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "1700",
        "": ""
    },
    {
        "equipo": "Platense",
        "jugador": "Schor, Ignacio",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Arias, Gabriel",
        "precioBase": "500",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "1200",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Cambeses, Facundo",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Gomez, Gaston",
        "precioBase": "200",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Colombo, Nazareno",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Conti, German",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Di Cesare, Marco",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "1900",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Escudero, Gonzalo",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Garcia Basso, Agustin",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Martirena, Gaston",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Mura, Facundo",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Quiros, Santiago",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Rojas, Gabriel",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Firmamo",
        "precioCompra": "1700",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Sosa, Santiago",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Almendra, Agustin",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Barrios, Martin",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Fernandez, Adrian",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Gonzalez, David",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Nardoni, Juan",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "2000",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Rodriguez, Ignacio",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Sanchez, Richard",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "1800",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Vera, Santino",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Zaracho, Matias",
        "precioBase": "600",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "1400",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Zuculini, Bruno",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Balboa, Adrian",
        "precioBase": "500",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Degregorio, Ramiro",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Fernandez, Roman",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Martinez, Adrian",
        "precioBase": "800",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "4200",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Salas, Maximiliano",
        "precioBase": "800",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Solari, Santiago",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Racing",
        "jugador": "Vietto, Luciano",
        "precioBase": "600",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "1500",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Arce, Ignacio",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Manganelli, Nahuel",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Bracamonte, Mariano",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Caro Torres, Nicolas",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Gallo, Rodrigo",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Goitia, Jonatan",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Mastrangelo, Diego",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Miño, Facundo",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Murillo, Yaison",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Paz, Cristian",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Ramirez, Pedro",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Randazzo, Juan Cruz",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Sansotre, Nicolas",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Tovo, Eric",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Bravo, Gonzalo",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Monje, Pablo",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Montoya, Nehuen",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Muñoz, Ariel",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Obredor, Gabriel",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Ortiz, Sergio",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Ramirez, Mateo",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Sanchez, Brian",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Sayavedra, Rodrigo",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Smarra, Mauro",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Alonso, Antony",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Benegas, Nicolas",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Celiz, Milton",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "1200",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Diaz, Alexander",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Fagundez, Franco",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Fernandez, Gustavo",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Guille, Braian",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Herrera, Jonathan",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Mendez, Jose",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Riestra",
        "jugador": "Sanabria, Mario",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Armani, Franco",
        "precioBase": "500",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Ledesma, Jeremias",
        "precioBase": "400",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Acuña, Marcos",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Firmamo",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Bustos, Fabricio",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Casco, Milton",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Diaz, Paulo",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Gattoni, Federico",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Gonzalez Pirez, Leandro",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Martinez Quarta, Lucas",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Montiel, Gonzalo",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "1300",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Pezzella, German",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Simon, Santiago",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Firmamo",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Aliendro, Rodrigo",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Castaño, Kevin",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "2000",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Costantini, Giorgio",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Ay de mi",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Fernandez, Ignacio",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Galoppo, Giuliano",
        "precioBase": "600",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Kranevitter, Matias",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Lanzini, Manuel",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Lencina, Santiago",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Martinez, Gonzalo",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Mastantuono, Franco",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "1600",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Meza, Maximiliano",
        "precioBase": "800",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "2000",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Perez, Enzo",
        "precioBase": "600",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "2400",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Rojas, Matias",
        "precioBase": "600",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "3300",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Borja, Miguel",
        "precioBase": "1000",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Colidio, Facundo",
        "precioBase": "800",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "2400",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Driussi, Sebastian",
        "precioBase": "800",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "3000",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Ruberto, Agustin",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Subiabre, Ian",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "River",
        "jugador": "Tapia, Gonzalo",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Broun, Jorge",
        "precioBase": "500",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Werner, Axel",
        "precioBase": "200",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Barbieri, Miguel",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Bravo, Agustin",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Coronel, Emanuel",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Elordi, Juan Manuel",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Gimenez, Juan",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Komar, Juan Cruz",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Mallo, Facundo",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Ocampo, Elias",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Quintana, Carlos",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Sandez, Agustin",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Campaz, Jaminton",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "2300",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Duarte, Gaspar",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Giaccone, Lautaro",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Gimenez, Enzo",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Gomez, Jonathan",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Ibarra, Franco",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Lovera, Maximiliano",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Malcorra, Ignacio",
        "precioBase": "600",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "2700",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Navarro, Federico",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "1500",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "O'Connor, Tomas",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Ortiz, Kevin",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Segovia, Santiago",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Solari, Augusto",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Copetti, Enzo",
        "precioBase": "500",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "2100",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Ferreira, Sebastian",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Lopez, Santiago",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Rosario Central",
        "jugador": "Modica, Agustin",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Altamirano, Facundo",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Clemente, Mateo",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Devecchi, Jose",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Gill, Orlando",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Arias, Oscar",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Baez, Elias",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Braida, Malcom",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "1800",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Dominguez, Nery",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Hernandez, Gaston",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Herrera, Daniel",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Herrera, Ezequiel",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Romaña, Jhohan",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "1700",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Tripichio, Nicolas",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Baldosera",
        "precioCompra": "1800",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Zelaya, Maximiliano",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Cecchini, Emanuel",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Escalante, Valentin",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Insaurralde, Manuel",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Irala, Elian",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Ladstatter, Agustin",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Muniain, Iker",
        "precioBase": "800",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "3900",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Perruzzi, Francisco",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Vega, Juan Cruz",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Cerutti, Ezequiel",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Cuello, Alexis",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "2300",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Hernandez, Matias",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Peralta, Jaime",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Reali, Matias",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Fla 3",
        "precioCompra": "1400",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Salinardi, Branco",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Lorenzo",
        "jugador": "Vombergar, Andres",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "1700",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Bonansea, Federico",
        "precioBase": "200",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Borgogno, Matias",
        "precioBase": "200",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Adin, Damian",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Burgos, Esteban",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Caseres, Rodrigo",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Diarte, Lucas",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Lecanda, Tomas",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Lopes, Hernan",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Lucero, Gonzalo",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Molina, Alejandro",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Recalde, Luciano",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Alvarez, Dante",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Escalante, Tomas",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Gonzalez, Diego",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Gonzalez, Sebastian",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Iacobellis, Marco",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Jaurena, Sebastian",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Moreyra, Gaston",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Olguin, Gino",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Pelaitay, Nicolas",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Portillo, Ayrton",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Watson, Nicolas",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Anselmo, Federico",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Casa, Maximiliano",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Cavallaro, Juan Ignacio",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Fernandez, Tomas",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Gonzalez, Federico",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Menendez, Jonathan",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Montagna, Ezequiel",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Pernia, Edwuin",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Tijanovich, Horacio",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "San Martin",
        "jugador": "Toloza, Franco",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Acosta, Lucas",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Ayala, Thyago",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Arismendi, Yair",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Fla 3",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Diaz, Gabriel",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Garcia, Manuel",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Insaurralde, Juan Manuel",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Morales, Santiago",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Orihuela, Renzo",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Roncaglia, Facundo",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Rosales, Matias",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Sandoval, Facundo",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Seyral, Agustin",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Vallejos, Jeremias",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Vigo, Alex",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Andrada, Juan",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Burgoa, Valentin",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Carabajal, Gabriel",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Gho, Joaquin",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Gimenez, Elian",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Guiacobini, Tomas",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Monaco, Manuel",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Paradela, Federico",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Suhr, Leandro",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Villalba, Carlos",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Frias, Franco",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Magnin, Pablo",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Sarmiento",
        "jugador": "Morales Bravo, Ivan",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "JRFC",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Burrai, Javier",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Florentin, Jeremias",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Herrera, Guido",
        "precioBase": "500",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Benavidez, Gaston",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Cardona, Tomas",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Catalan, Matias",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Fernandez, Santiago",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Gelos, Valentin",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Navarro, Miguel",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Olmos, Tomas",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Portillo, Juan",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "PDC",
        "precioCompra": "1700",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Riveros, Blas",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Rodriguez, Juan",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Schott, Augusto",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Suarez, Emilio",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Albarracin, Gabriel",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Botta, Ruben",
        "precioBase": "800",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "1300",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Galarza Fonda, Matias",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Galarza, Matias Alejandro",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Gamarra, Roman",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Gomez, Matias",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Mosqueira, Joaquin",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Ortegoza, Diego",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "1500",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Portilla, Juan Camilo",
        "precioBase": "400",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Portillo, Marcos",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Puzzo, Santiago",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Reynoso, Emanuel",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Bustos, Nahuel",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "1500",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Depietri, Valentin",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Girotti, Federico",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Palacios, Sebastian",
        "precioBase": "500",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "1400",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Rick",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Tarragona, Cristian",
        "precioBase": "500",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Talleres",
        "jugador": "Tucker, Manuel",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Fuster, Luka",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Sosa, Alan",
        "precioBase": "100",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Zenobio, Felipe",
        "precioBase": "300",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Arias, Ramon",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Banegas, Nahuel",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Barrionuevo, Alan",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Garay, Martin",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Firmamo",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Laso, Joaquin",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Ortega, Martin",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Ortiz, Rolando",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Paz, Nehuen",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Tevez, Federico",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Cabrera, Elias",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Gonzalez, Santiago",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Lopez, Julian",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Baldosera",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Medina, Sebastian",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Neira, Ignacio",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Piñeiro, Gonzalo",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Saralegui, Jabes",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Scipioni, Lorenzo",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Sosa, Diego",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Armoa, Blas",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Benitez, Romeo",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Besozzi, Lucas",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Espindola, Matias",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Fertoli, Hector",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Oviedo, Alfio",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Protti, Ijiel",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Ramirez Matheus, Eric",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Romero, David",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Russo, Ignacio",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "1500",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Sarmiento, Dario",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Viganoni, Camilo",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Tigre",
        "jugador": "Zalazar, Maximiliano",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Cardozo, Thiago",
        "precioBase": "400",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Tagliamonte, Matias",
        "precioBase": "200",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "200",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Arturia, Gaston",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Corvalan, Claudio",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "800",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Del Blanco, Mateo",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "JRFC",
        "precioCompra": "600",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Fascendini, Valentin",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Gerometta, Francisco",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Ludueña, Juan Pablo",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Martinez, Mauricio",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "SI",
        "fantaEquipo": "Firmamo",
        "precioCompra": "700",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Pardo, Franco",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Paz, Nicolas",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Pitton, Bruno",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Deco",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Vargas, Lautaro",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Bircher, Juan Ignacio",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Ham, Ezequiel",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "PDC",
        "precioCompra": "1200",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Palacios, Julian",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Pitton, Mauro",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Profini, Rafael",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Verde, Lionel",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "1300",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Angulo, Jose",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Pelota de Trapo",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Colazo, Agustin",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Diaz, Diego",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Domina, Jeronimo",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Estigarribia, Marcelo",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Firmamo",
        "precioCompra": "1100",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Fragapane, Franco",
        "precioBase": "500",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Firmamo",
        "precioCompra": "1900",
        "": ""
    },
    {
        "equipo": "Unión",
        "jugador": "Gamba, Lucas",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Super Celtics",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Garzon, Lautaro",
        "precioBase": "200",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Marchiori, Tomas",
        "precioBase": "500",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "Independiente Spurs",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Rodriguez, Randall",
        "precioBase": "200",
        "posicion": "ARQ",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Andrada, Isaias",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Cavanagh, Tomas",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Fernandez, Damian",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Garcia, Joaquin",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Gomez, Elias",
        "precioBase": "400",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Gomez, Valentin",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Gordon, Jano",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Lagos, Agustin",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Mammana, Emanuel",
        "precioBase": "500",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "900",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Pernicone, Patricio",
        "precioBase": "200",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Quiros, Aaron",
        "precioBase": "300",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Silvero, Thiago",
        "precioBase": "100",
        "posicion": "DEF",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Baeza, Claudio",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Bouzat, Agustin",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "1200",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Fernandez, Thiago",
        "precioBase": "800",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Galvan, Tomas",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Montoro, Alvaro",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Ay de Mi",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Ordoñez, Christian",
        "precioBase": "500",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Rostock",
        "precioCompra": "500",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Porcel, Maximiliano",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Roldan, Leonel",
        "precioBase": "100",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Seoane, Mateo",
        "precioBase": "200",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Vazquez, Kevin",
        "precioBase": "300",
        "posicion": "VOL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Bosch, Benjamin",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "100",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Carrizo, Maher",
        "precioBase": "200",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Villa Luro",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Machuca, Imanol",
        "precioBase": "500",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Morganti",
        "precioCompra": "2100",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Montoro, Francisco",
        "precioBase": "100",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "",
        "precioCompra": "",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Monzon, Florian",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "El Marplatense",
        "precioCompra": "300",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Pellegrini, Matias",
        "precioBase": "300",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Fla 3",
        "precioCompra": "400",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Pizzini, Francisco",
        "precioBase": "400",
        "posicion": "DEL",
        "poli": "SI",
        "fantaEquipo": "Flatulentos",
        "precioCompra": "1000",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Romero, Braian",
        "precioBase": "600",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Pitufos",
        "precioCompra": "2500",
        "": ""
    },
    {
        "equipo": "Vélez",
        "jugador": "Santos, Michael",
        "precioBase": "600",
        "posicion": "DEL",
        "poli": "",
        "fantaEquipo": "Morganti",
        "precioCompra": "1200",
        "": ""
    }
];

module.exports = {
  JUGADORES,
};

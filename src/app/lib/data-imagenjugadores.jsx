//https://www.fifacm.com/
const IMAGENJUGADORES = [
  {
    "jugador": "Breitenbruch, Nestor",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p224049.png?v=22"
  },
  {
    "jugador": "Cabral, Yonathan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p221990.png?v=22"
  },
  {
    "jugador": "Cerato, Giuliano",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p251339.png?v=22"
  },
  {
    "jugador": "Bochi, Roberto",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p261019.png?v=22"
  },
  {
    "jugador": "Mendez, Emiliano",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p215995.png?v=22"
  },
  {
    "jugador": "Dominguez, Alexis",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p237923.png?v=22"
  },
  {
    "jugador": "Giani, Justo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p261261.png?v=22"
  },
  {
    "jugador": "Rodriguez, Diego",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p214933.png?v=22"
  },
  {
    "jugador": "Alvarez, Francisco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p242569.png?v=22"
  },
  {
    "jugador": "Antoni, Mateo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p273603.png?v=22"
  },
  {
    "jugador": "Godoy, Erik",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p215178.png?v=22"
  },
  {
    "jugador": "Lozano, Leandro",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p266844.png?v=22"
  },
  {
    "jugador": "Prieto, Sebastian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p258137.png?v=22"
  },
  {
    "jugador": "Sanchez, Luciano",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p267573.png?v=22"
  },
  {
    "jugador": "Cardozo, Juan Jose",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p276708.png?v=22"
  },
  {
    "jugador": "Fattori, Federico",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p226671.png?v=22"
  },
  {
    "jugador": "Ferreira, Cristian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p241568.png?v=22"
  },
  {
    "jugador": "Lescano, Alan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p272350.png?v=22"
  },
  {
    "jugador": "Oroz, Nicolas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p223105.png?v=22"
  },
  {
    "jugador": "Rodriguez, Alan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p271501.png?v=22"
  },
  {
    "jugador": "Viveros, Emiliano",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p265478.png?v=22"
  },
  {
    "jugador": "Ardaiz, Joaquin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p241005.png?v=22"
  },
  {
    "jugador": "Bentancourt, Ruben",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p205972.png?v=22"
  },
  {
    "jugador": "Herrera, Jose",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p270649.png?v=22"
  },
  {
    "jugador": "Molina, Tomas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p232765.png?v=22"
  },
  {
    "jugador": "Rodriguez, Santiago",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p272857.png?v=22"
  },
  {
    "jugador": "Romero, Maximiliano",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p227903.png?v=22"
  },
  {
    "jugador": "Durso, Tomas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p240955.png?v=22"
  },
  {
    "jugador": "Brizuela, Miguel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p252168.png?v=22"
  },
  {
    "jugador": "De los Santos, Matias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p239645.png?v=22"
  },
  {
    "jugador": "Ferrari, Gianluca",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p245439.png?v=22"
  },
  {
    "jugador": "Infante, Juan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p261016.png?v=22"
  },
  {
    "jugador": "Martinez, Damian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p224104.png?v=22"
  },
  {
    "jugador": "Castro, Nicolas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p258325.png?v=22"
  },
  {
    "jugador": "Sanchez, Adrian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p259690.png?v=22"
  },
  {
    "jugador": "Tesuri, Renzo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p257338.png?v=22"
  },
  {
    "jugador": "Coronel, Mateo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p259537.png?v=22"
  },
  {
    "jugador": "Diaz, Leandro",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p214777.png?v=22"
  },
  {
    "jugador": "Ruiz Rodriguez, Ramiro",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p252193.png?v=22"
  },
  {
    "jugador": "Romero, Diego",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p259606.png?v=22"
  },
  {
    "jugador": "Sanguinetti, Facundo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p262865.png?v=22"
  },
  {
    "jugador": "Bonifacio, Ezequiel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p224511.png?v=22"
  },
  {
    "jugador": "De Ritis, Mathias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p273709.png?v=22"
  },
  {
    "jugador": "Maldonado, Alexis",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p233780.png?v=22"
  },
  {
    "jugador": "Pombo, Joaquin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p268620.png?v=22"
  },
  {
    "jugador": "Diaz, Damian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p189454.png?v=22"
  },
  {
    "jugador": "Gonzalez, Matias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p258080.png?v=22"
  },
  {
    "jugador": "Miranda, Leonel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p214988.png?v=22"
  },
  {
    "jugador": "Obando, Agustin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p246910.png?v=22"
  },
  {
    "jugador": "Rios, Gonzalo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p266161.png?v=22"
  },
  {
    "jugador": "Rios, Lautaro",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p254951.png?v=22"
  },
  {
    "jugador": "Alvarez, Juan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p239491.png?v=22"
  },
  {
    "jugador": "Bisanz, Juan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p274401.png?v=22"
  },
  {
    "jugador": "Sepulveda, Bruno",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p261160.png?v=22"
  },
  {
    "jugador": "Ledesma, Marcos",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p225858.png?v=22"
  },
  {
    "jugador": "Capraro, Nicolas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p272945.png?v=22"
  },
  {
    "jugador": "Demartini, Nicolas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p241120.png?v=22"
  },
  {
    "jugador": "Insua, Rodrigo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p272946.png?v=22"
  },
  {
    "jugador": "Mater, Facundo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p258528.png?v=22"
  },
  {
    "jugador": "Miloc, Dardo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p215993.png?v=22"
  },
  {
    "jugador": "Tobio, Fernando",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p213433.png?v=22"
  },
  {
    "jugador": "Barrios, Nahuel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p237994.png?v=22"
  },
  {
    "jugador": "Duarte, Manuel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p269690.png?v=22"
  },
  {
    "jugador": "Juarez, Alex",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p271277.png?v=22"
  },
  {
    "jugador": "Puig, Maximiliano",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p272313.png?v=22"
  },
  {
    "jugador": "Rosane, Siro",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p261438.png?v=22"
  },
  {
    "jugador": "Tapia, Ivan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p266867.png?v=22"
  },
  {
    "jugador": "Candia, Jhonatan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p255319.png?v=22"
  },
  {
    "jugador": "Morales, Gonzalo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p271933.png?v=22"
  },
  {
    "jugador": "Chicco, Ignacio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p232817.png?v=22"
  },
  {
    "jugador": "Espinola, Juan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p254714.png?v=22"
  },
  {
    "jugador": "Baldi, Agustin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p258125.png?v=22"
  },
  {
    "jugador": "Compagnucci, Gabriel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p244869.png?v=22"
  },
  {
    "jugador": "Grillo, Fausto",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p222830.png?v=22"
  },
  {
    "jugador": "Lopez, Elias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p252706.png?v=22"
  },
  {
    "jugador": "Meriano, Nicolas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273767.png?v=22"
  },
  {
    "jugador": "Castro, Tomas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p255924.png?v=22"
  },
  {
    "jugador": "Gonzalez Metilli, Francisco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p246770.png?v=22"
  },
  {
    "jugador": "Longo, Santiago",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273768.png?v=22"
  },
  {
    "jugador": "Quignon, Facundo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p202331.png?v=22"
  },
  {
    "jugador": "Sanchez, Ulises",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273764.png?v=22"
  },
  {
    "jugador": "Zelarayan, Lucas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p215270.png?v=22"
  },
  {
    "jugador": "Fernandez, Nicolas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p225289.png?v=22"
  },
  {
    "jugador": "Jara, Franco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p198347.png?v=22"
  },
  {
    "jugador": "Passerini, Lucas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p224854.png?v=22"
  },
  {
    "jugador": "Brey, Leandro",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p268619.png?v=22"
  },
  {
    "jugador": "Garcia, Javier",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p178566.png?v=22"
  },
  {
    "jugador": "Romero, Sergio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p173373.png?v=22"
  },
  {
    "jugador": "Advincula, Luis",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p204539.png?v=22"
  },
  {
    "jugador": "Barinaga, Juan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p247368.png?v=22"
  },
  {
    "jugador": "Blanco, Lautaro",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p257185.png?v=22"
  },
  {
    "jugador": "Blondel, Lucas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p238331.png?v=22"
  },
  {
    "jugador": "Costa, Ayrton",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p261097.png?v=22"
  },
  {
    "jugador": "Fabra, Frank",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p214040.png?v=22"
  },
  {
    "jugador": "Figal, Nicolas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p219841.png?v=22"
  },
  {
    "jugador": "Lema, Cristian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p215228.png?v=22"
  },
  {
    "jugador": "Rojo, Marcos",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p201862.png?v=22"
  },
  {
    "jugador": "Saracchi, Marcelo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p240976.png?v=22"
  },
  {
    "jugador": "Alarcon, Williams",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p243684.png?v=22"
  },
  {
    "jugador": "Herrera, Ander",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p191740.png?v=22"
  },
  {
    "jugador": "Martegani, Agustin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p262083.png?v=22"
  },
  {
    "jugador": "Miramon, Ignacio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p261171.png?v=22"
  },
  {
    "jugador": "Rolon, Esteban",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p231212.png?v=22"
  },
  {
    "jugador": "Zenon, Kevin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p259789.png?v=22"
  },
  {
    "jugador": "Aguirre, Brian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p271512.png?v=22"
  },
  {
    "jugador": "Cavani, Edinson",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p179813.png?v=22"
  },
  {
    "jugador": "Gimenez, Milton",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p261161.png?v=22"
  },
  {
    "jugador": "Janson, Lucas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p215202.png?v=22"
  },
  {
    "jugador": "Merentiel, Miguel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p240663.png?v=22"
  },
  {
    "jugador": "Orsini, Nicolas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p220148.png?v=22"
  },
  {
    "jugador": "Palacios, Carlos",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p242971.png?v=22"
  },
  {
    "jugador": "Velasco, Alan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p252238.png?v=22"
  },
  {
    "jugador": "Zeballos, Exequiel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p260601.png?v=22"
  },
  {
    "jugador": "Aguerre, Alan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p215123.png?v=22"
  },
  {
    "jugador": "Galvan, Jonathan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p226616.png?v=22"
  },
  {
    "jugador": "Marchi, Leonardo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p251979.png?v=22"
  },
  {
    "jugador": "Pignani, Juan Pablo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p267410.png?v=22"
  },
  {
    "jugador": "Pillud, Ivan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p193141.png?v=22"
  },
  {
    "jugador": "Alfonso, Franco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273866.png?v=22"
  },
  {
    "jugador": "Cristoforo, Sebastian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p219712.png?v=22"
  },
  {
    "jugador": "Gomez, Ivan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p235987.png?v=22"
  },
  {
    "jugador": "Quagliata, Nicolas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p259876.png?v=22"
  },
  {
    "jugador": "Salazar, David",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p267625.png?v=22"
  },
  {
    "jugador": "Heredia, Leonardo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p241025.png?v=22"
  },
  {
    "jugador": "Veron, Gaston",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p242250.png?v=22"
  },
  {
    "jugador": "Bologna, Enrique",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p142962.png?v=22"
  },
  {
    "jugador": "Aguilera, Emanuel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p223243.png?v=22"
  },
  {
    "jugador": "Cannavo, Ezequiel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p270215.png?v=22"
  },
  {
    "jugador": "Delgado, Rafael",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p216036.png?v=22"
  },
  {
    "jugador": "Ferreira, Lucas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p274046.png?v=22"
  },
  {
    "jugador": "Perez, Damian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p215049.png?v=22"
  },
  {
    "jugador": "Rubio, Tobias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p276819.png?v=22"
  },
  {
    "jugador": "Soto, Alexis",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p231507.png?v=22"
  },
  {
    "jugador": "Souto, Lucas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p270456.png?v=22"
  },
  {
    "jugador": "Barbona, David",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p227274.png?v=22"
  },
  {
    "jugador": "Gonzalez, Lucas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p252239.png?v=22"
  },
  {
    "jugador": "Gonzalez, Maximiliano",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p267853.png?v=22"
  },
  {
    "jugador": "Gutierrez, Kevin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p241833.png?v=22"
  },
  {
    "jugador": "Molinas, Aaron",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p256502.png?v=22"
  },
  {
    "jugador": "Palavecino, Nicolas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p264147.png?v=22"
  },
  {
    "jugador": "Perez, Cesar",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p267931.png?v=22"
  },
  {
    "jugador": "Ramirez, Matias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p261275.png?v=22"
  },
  {
    "jugador": "Schamine, Benjamin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p276867.png?v=22"
  },
  {
    "jugador": "Sosa, Santiago",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p246033.png?v=22"
  },
  {
    "jugador": "Gonzalez, Francisco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p259533.png?v=22"
  },
  {
    "jugador": "Gonzalez, Gaston",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p253953.png?v=22"
  },
  {
    "jugador": "Osorio, Abiel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p268083.png?v=22"
  },
  {
    "jugador": "Togni, Gaston",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p237512.png?v=22"
  },
  {
    "jugador": "Iacovich, Fabricio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p276829.png?v=22"
  },
  {
    "jugador": "Mansilla, Matias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p263204.png?v=22"
  },
  {
    "jugador": "Benedetti, Gaston",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p267602.png?v=22"
  },
  {
    "jugador": "Boselli, Sebastian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273850.png?v=22"
  },
  {
    "jugador": "Funes Mori, Ramiro",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p199667.png?v=22"
  },
  {
    "jugador": "Meza, Eric",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p258090.png?v=22"
  },
  {
    "jugador": "Rodriguez, Facundo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p248137.png?v=22"
  },
  {
    "jugador": "Ascacibar, Santiago",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p232244.png?v=22"
  },
  {
    "jugador": "Castro, Alexis",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p228179.png?v=22"
  },
  {
    "jugador": "Kociubinski, Bautista",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p263501.png?v=22"
  },
  {
    "jugador": "Medina, Cristian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p261082.png?v=22"
  },
  {
    "jugador": "Neves, Gabriel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p253287.png?v=22"
  },
  {
    "jugador": "Piovi, Ezequiel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p251132.png?v=22"
  },
  {
    "jugador": "Sosa, Jose",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p143121.png?v=22"
  },
  {
    "jugador": "Carrillo, Guido",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p215334.png?v=22"
  },
  {
    "jugador": "Cetre, Edwin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p242426.png?v=22"
  },
  {
    "jugador": "Farias, Facundo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p256287.png?v=22"
  },
  {
    "jugador": "Mendez, Mauro",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p259883.png?v=22"
  },
  {
    "jugador": "Ingolotti, Luis",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p243810.png?v=22"
  },
  {
    "jugador": "Morales, Leonardo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p240640.png?v=22"
  },
  {
    "jugador": "Pintado, Juan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p266171.png?v=22"
  },
  {
    "jugador": "Suso, Gaston",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p235004.png?v=22"
  },
  {
    "jugador": "Castro, Lucas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p205633.png?v=22"
  },
  {
    "jugador": "De Blasis, Pablo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p210950.png?v=22"
  },
  {
    "jugador": "Garayalde, Nicolas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p262148.png?v=22"
  },
  {
    "jugador": "Merlini, Bautista",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p233372.png?v=22"
  },
  {
    "jugador": "Briasco, Norberto",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p235989.png?v=22"
  },
  {
    "jugador": "Castillo, Rodrigo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273080.png?v=22"
  },
  {
    "jugador": "Mammini, Ivo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p257676.png?v=22"
  },
  {
    "jugador": "Petroli, Franco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p256407.png?v=22"
  },
  {
    "jugador": "Ramirez, Roberto",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p222639.png?v=22"
  },
  {
    "jugador": "Arce, Lucas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p272844.png?v=22"
  },
  {
    "jugador": "Jara, Leonardo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p215331.png?v=22"
  },
  {
    "jugador": "Meli, Andres",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p269739.png?v=22"
  },
  {
    "jugador": "Mendoza, Mateo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273090.png?v=22"
  },
  {
    "jugador": "Rasmussen, Federico",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p214769.png?v=22"
  },
  {
    "jugador": "Abrego, Gonzalo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p260593.png?v=22"
  },
  {
    "jugador": "Fernandez, Roberto",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p253304.png?v=22"
  },
  {
    "jugador": "Leyes, Bruno",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p263504.png?v=22"
  },
  {
    "jugador": "Pozzo, Tomas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p258284.png?v=22"
  },
  {
    "jugador": "Villalobos, Agustin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273921.png?v=22"
  },
  {
    "jugador": "Barrea, Daniel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p274570.png?v=22"
  },
  {
    "jugador": "Cejas, Juan Bautista",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p238036.png?v=22"
  },
  {
    "jugador": "Gonzalez, Matias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p258080.png?v=22"
  },
  {
    "jugador": "Martinez Dupuy, Luca",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p258081.png?v=22"
  },
  {
    "jugador": "Ulariaga, Nahuel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p260388.png?v=22"
  },
  {
    "jugador": "Galindez, Hernan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p253354.png?v=22"
  },
  {
    "jugador": "Meza, Sebastian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p258180.png?v=22"
  },
  {
    "jugador": "Carrizo, Lucas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p221952.png?v=22"
  },
  {
    "jugador": "De la Fuente, Hernan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p241696.png?v=22"
  },
  {
    "jugador": "Goitea, Nicolas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p273538.png?v=22"
  },
  {
    "jugador": "Guidara, Tomas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p237122.png?v=22"
  },
  {
    "jugador": "Ibañez, Cesar",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p253384.png?v=22"
  },
  {
    "jugador": "Pellegrino, Marco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p274947.png?v=22"
  },
  {
    "jugador": "Pereyra, Fabio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p251138.png?v=22"
  },
  {
    "jugador": "Alanis, Gabriel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p224403.png?v=22"
  },
  {
    "jugador": "Watson, Franco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p272911.png?v=22"
  },
  {
    "jugador": "Abila, Ramon",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p226378.png?v=22"
  },
  {
    "jugador": "Cabral, Rodrigo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p260826.png?v=22"
  },
  {
    "jugador": "Mazzantti, Walter",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p236803.png?v=22"
  },
  {
    "jugador": "Ramirez, Eric",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p228211.png?v=22"
  },
  {
    "jugador": "Rey, Rodrigo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p215069.png?v=22"
  },
  {
    "jugador": "Blazquez, Joaquin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p242073.png?v=22"
  },
  {
    "jugador": "Paredes, Franco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p255256.png?v=22"
  },
  {
    "jugador": "Sporle, Adrian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p223501.png?v=22"
  },
  {
    "jugador": "Valdez, Sebastian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273012.png?v=22"
  },
  {
    "jugador": "Vera, Federico",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p259786.png?v=22"
  },
  {
    "jugador": "Mancuello, Federico",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p214968.png?v=22"
  },
  {
    "jugador": "Marcone, Ivan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p215057.png?v=22"
  },
  {
    "jugador": "Avalos, Gabriel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p226286.png?v=22"
  },
  {
    "jugador": "Gimenez, Matias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p272839.png?v=22"
  },
  {
    "jugador": "Hidalgo, Santiago",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p269719.png?v=22"
  },
  {
    "jugador": "Maestro Puch, Ignacio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p267987.png?v=22"
  },
  {
    "jugador": "Martinez, Braian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p255307.png?v=22"
  },
  {
    "jugador": "Montiel, Santiago",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p255925.png?v=22"
  },
  {
    "jugador": "Centurion, Ezequiel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p246236.png?v=22"
  },
  {
    "jugador": "Marinelli, Gonzalo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p188968.png?v=22"
  },
  {
    "jugador": "Gomez, Luciano",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p232832.png?v=22"
  },
  {
    "jugador": "Villalba, Ivan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p254361.png?v=22"
  },
  {
    "jugador": "Alvez, Gonzalo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p261183.png?v=22"
  },
  {
    "jugador": "Sequeira, Luis",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p257152.png?v=22"
  },
  {
    "jugador": "Romero, Fernando",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p254725.png?v=22"
  },
  {
    "jugador": "Papaleo, Joaquin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p226804.png?v=22"
  },
  {
    "jugador": "Roffo, Manuel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p240796.png?v=22"
  },
  {
    "jugador": "Alarcon, Fernando",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p228959.png?v=22"
  },
  {
    "jugador": "Franco, Juan Jose",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p255451.png?v=22"
  },
  {
    "jugador": "Requena, Gonzalo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p276104.png?v=22"
  },
  {
    "jugador": "Rodriguez, Lucas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p214660.png?v=22"
  },
  {
    "jugador": "Zalazar, Nicolas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p236670.png?v=22"
  },
  {
    "jugador": "Diaz, Franco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p267627.png?v=22"
  },
  {
    "jugador": "Lo Celso, Francesco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p255352.png?v=22"
  },
  {
    "jugador": "Lodico, Gaston",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p242342.png?v=22"
  },
  {
    "jugador": "Mac Allister, Francis",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p232826.png?v=22"
  },
  {
    "jugador": "Moreyra, Stefano",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p271919.png?v=22"
  },
  {
    "jugador": "Acevedo, Jonas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p237993.png?v=22"
  },
  {
    "jugador": "Batallini, Damian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p232709.png?v=22"
  },
  {
    "jugador": "Godoy, Matias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p258700.png?v=22"
  },
  {
    "jugador": "Puebla, Damian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p272912.png?v=22"
  },
  {
    "jugador": "Romero, Silvio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p214781.png?v=22"
  },
  {
    "jugador": "Suarez, Facundo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p266343.png?v=22"
  },
  {
    "jugador": "Losada, Nahuel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p222418.png?v=22"
  },
  {
    "jugador": "Morales, Lautaro",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p253012.png?v=22"
  },
  {
    "jugador": "De Jesus, Ronaldo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p268431.png?v=22"
  },
  {
    "jugador": "Izquierdoz, Carlos",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p214766.png?v=22"
  },
  {
    "jugador": "Marcich, Sasha",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p261262.png?v=22"
  },
  {
    "jugador": "Mendez, Armando",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p253294.png?v=22"
  },
  {
    "jugador": "Morgantini, Nicolas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p255197.png?v=22"
  },
  {
    "jugador": "Muñoz, Ezequiel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p186695.png?v=22"
  },
  {
    "jugador": "Peña Biafore, Felipe",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p264323.png?v=22"
  },
  {
    "jugador": "Perez, Gonzalo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p255873.png?v=22"
  },
  {
    "jugador": "Cardozo, Agustin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p236472.png?v=22"
  },
  {
    "jugador": "Carrera, Ramiro",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p219174.png?v=22"
  },
  {
    "jugador": "Loaiza, Raul",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p214226.png?v=22"
  },
  {
    "jugador": "Ramirez, Juan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p214665.png?v=22"
  },
  {
    "jugador": "Rodriguez, Agustin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p262283.png?v=22"
  },
  {
    "jugador": "Acosta, Lautaro",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p188268.png?v=22"
  },
  {
    "jugador": "Bou, Walter",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p224510.png?v=22"
  },
  {
    "jugador": "Canelo, Alexis",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p227591.png?v=22"
  },
  {
    "jugador": "Moreno, Marcelino",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p235467.png?v=22"
  },
  {
    "jugador": "Segovia, Alexis",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p270036.png?v=22"
  },
  {
    "jugador": "Hoyos, Lucas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p224348.png?v=22"
  },
  {
    "jugador": "Calderara, Brian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p259500.png?v=22"
  },
  {
    "jugador": "Jacob, Tomas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p265402.png?v=22"
  },
  {
    "jugador": "Lollo, Luciano",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p215254.png?v=22"
  },
  {
    "jugador": "Luciano, Martin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p267900.png?v=22"
  },
  {
    "jugador": "Martino, Angelo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p236671.png?v=22"
  },
  {
    "jugador": "Salcedo, Saul",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p228730.png?v=22"
  },
  {
    "jugador": "Sosa, Luca",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p226386.png?v=22"
  },
  {
    "jugador": "Banega, Ever",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p178562.png?v=22"
  },
  {
    "jugador": "Cardozo, Fernando",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p248873.png?v=22"
  },
  {
    "jugador": "Maroni, Gonzalo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p234108.png?v=22"
  },
  {
    "jugador": "Mendez, Juan Ignacio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p241927.png?v=22"
  },
  {
    "jugador": "Montenegro, Lisandro",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p274144.png?v=22"
  },
  {
    "jugador": "Sotelo, David",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p275429.png?v=22"
  },
  {
    "jugador": "Desabato, Andres",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p261014.png?v=22"
  },
  {
    "jugador": "Barros Schelotto, Bautista",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273081.png?v=22"
  },
  {
    "jugador": "Bay, Jonathan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p251212.png?v=22"
  },
  {
    "jugador": "Goñi, Gonzalo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p235966.png?v=22"
  },
  {
    "jugador": "Lozano, Raul",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p257407.png?v=22"
  },
  {
    "jugador": "Picco, Leonel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p252044.png?v=22"
  },
  {
    "jugador": "Saborido, Juan Ignacio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p274736.png?v=22"
  },
  {
    "jugador": "Salomon, Oscar",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p254228.png?v=22"
  },
  {
    "jugador": "Valdivia, Gonzalo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p276094.png?v=22"
  },
  {
    "jugador": "Vazquez, Ignacio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p264365.png?v=22"
  },
  {
    "jugador": "Herrera, Rodrigo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p258051.png?v=22"
  },
  {
    "jugador": "Juarez, Fernando",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p234466.png?v=22"
  },
  {
    "jugador": "Mainero, Guido",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p242002.png?v=22"
  },
  {
    "jugador": "Roldan, Enzo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p256501.png?v=22"
  },
  {
    "jugador": "Taborda, Vicente",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p263693.png?v=22"
  },
  {
    "jugador": "Toloza, Santiago",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p268581.png?v=22"
  },
  {
    "jugador": "Zapiola, Franco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p263502.png?v=22"
  },
  {
    "jugador": "Lotti, Augusto",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p242019.png?v=22"
  },
  {
    "jugador": "Marquez, Rodrigo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p263756.png?v=22"
  },
  {
    "jugador": "Martinez, Ronaldo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p260140.png?v=22"
  },
  {
    "jugador": "Schor, Ignacio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p261011.png?v=22"
  },
  {
    "jugador": "Arias, Gabriel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p223249.png?v=22"
  },
  {
    "jugador": "Cambeses, Facundo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p232645.png?v=22"
  },
  {
    "jugador": "Gomez, Gaston",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p235925.png?v=22"
  },
  {
    "jugador": "Colombo, Nazareno",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p252036.png?v=22"
  },
  {
    "jugador": "Conti, German",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p221219.png?v=22"
  },
  {
    "jugador": "Di Cesare, Marco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p260233.png?v=22"
  },
  {
    "jugador": "Garcia Basso, Agustin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p274266.png?v=22"
  },
  {
    "jugador": "Martirena, Gaston",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p255878.png?v=22"
  },
  {
    "jugador": "Mura, Facundo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p247156.png?v=22"
  },
  {
    "jugador": "Quiros, Santiago",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p274521.png?v=22"
  },
  {
    "jugador": "Rojas, Gabriel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p236668.png?v=22"
  },
  {
    "jugador": "Sosa, Santiago",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p246033.png?v=22"
  },
  {
    "jugador": "Almendra, Agustin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p242081.png?v=22"
  },
  {
    "jugador": "Barrios, Martin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p274122.png?v=22"
  },
  {
    "jugador": "Nardoni, Juan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p253952.png?v=22"
  },
  {
    "jugador": "Rodriguez, Ignacio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p261691.png?v=22"
  },
  {
    "jugador": "Vera, Santino",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p276604.png?v=22"
  },
  {
    "jugador": "Zuculini, Bruno",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p203864.png?v=22"
  },
  {
    "jugador": "Fernandez, Roman",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p271029.png?v=22"
  },
  {
    "jugador": "Martinez, Adrian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p253242.png?v=22"
  },
  {
    "jugador": "Salas, Maximiliano",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p244205.png?v=22"
  },
  {
    "jugador": "Solari, Santiago",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273711.png?v=22"
  },
  {
    "jugador": "Paz, Cristian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p226411.png?v=22"
  },
  {
    "jugador": "Armani, Franco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p214584.png?v=22"
  },
  {
    "jugador": "Ledesma, Jeremias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p219522.png?v=22"
  },
  {
    "jugador": "Acuña, Marcos",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p224334.png?v=22"
  },
  {
    "jugador": "Casco, Milton",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p215071.png?v=22"
  },
  {
    "jugador": "Diaz, Paulo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p214436.png?v=22"
  },
  {
    "jugador": "Gattoni, Federico",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p241930.png?v=22"
  },
  {
    "jugador": "Gonzalez Pirez, Leandro",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p199669.png?v=22"
  },
  {
    "jugador": "Martinez Quarta, Lucas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p228708.png?v=22"
  },
  {
    "jugador": "Montiel, Gonzalo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p231340.png?v=22"
  },
  {
    "jugador": "Pezzella, German",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p193601.png?v=22"
  },
  {
    "jugador": "Simon, Santiago",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p256408.png?v=22"
  },
  {
    "jugador": "Aliendro, Rodrigo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p233029.png?v=22"
  },
  {
    "jugador": "Fernandez, Ignacio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p215998.png?v=22"
  },
  {
    "jugador": "Kranevitter, Matias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p214977.png?v=22"
  },
  {
    "jugador": "Lanzini, Manuel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p188988.png?v=22"
  },
  {
    "jugador": "Martinez, Gonzalo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p226377.png?v=22"
  },
  {
    "jugador": "Perez, Enzo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p196432.png?v=22"
  },
  {
    "jugador": "Borja, Miguel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p219862.png?v=22"
  },
  {
    "jugador": "Colidio, Facundo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p245461.png?v=22"
  },
  {
    "jugador": "Driussi, Sebastian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p221125.png?v=22"
  },
  {
    "jugador": "Ruberto, Agustin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p279165.png?v=22"
  },
  {
    "jugador": "Tapia, Gonzalo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p256532.png?v=22"
  },
  {
    "jugador": "Broun, Jorge",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p216033.png?v=22"
  },
  {
    "jugador": "Werner, Axel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p215213.png?v=22"
  },
  {
    "jugador": "Coronel, Emanuel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p242482.png?v=22"
  },
  {
    "jugador": "Komar, Juan Cruz",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p222428.png?v=22"
  },
  {
    "jugador": "Mallo, Facundo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p248207.png?v=22"
  },
  {
    "jugador": "Quintana, Carlos",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p234458.png?v=22"
  },
  {
    "jugador": "Sandez, Agustin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p263518.png?v=22"
  },
  {
    "jugador": "Campaz, Jaminton",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p238230.png?v=22"
  },
  {
    "jugador": "Giaccone, Lautaro",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p258456.png?v=22"
  },
  {
    "jugador": "Gomez, Jonathan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p211489.png?v=22"
  },
  {
    "jugador": "Ibarra, Franco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p254695.png?v=22"
  },
  {
    "jugador": "Lovera, Maximiliano",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p233924.png?v=22"
  },
  {
    "jugador": "Malcorra, Ignacio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p226797.png?v=22"
  },
  {
    "jugador": "Navarro, Federico",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p246335.png?v=22"
  },
  {
    "jugador": "O'Connor, Tomas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p275336.png?v=22"
  },
  {
    "jugador": "Ortiz, Kevin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p271344.png?v=22"
  },
  {
    "jugador": "Copetti, Enzo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p238332.png?v=22"
  },
  {
    "jugador": "Ferreira, Sebastian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p244832.png?v=22"
  },
  {
    "jugador": "Altamirano, Facundo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p227477.png?v=22"
  },
  {
    "jugador": "Devecchi, Jose",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p225282.png?v=22"
  },
  {
    "jugador": "Braida, Malcom",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p258746.png?v=22"
  },
  {
    "jugador": "Hernandez, Gaston",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p268621.png?v=22"
  },
  {
    "jugador": "Romaña, Jhohan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p233814.png?v=22"
  },
  {
    "jugador": "Tripichio, Nicolas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p227900.png?v=22"
  },
  {
    "jugador": "Insaurralde, Manuel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p245249.png?v=22"
  },
  {
    "jugador": "Irala, Elian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273842.png?v=22"
  },
  {
    "jugador": "Perruzzi, Francisco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p269501.png?v=22"
  },
  {
    "jugador": "Cerutti, Ezequiel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p219525.png?v=22"
  },
  {
    "jugador": "Hernandez, Matias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p269500.png?v=22"
  },
  {
    "jugador": "Recalde, Luciano",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p242362.png?v=22"
  },
  {
    "jugador": "Cavallaro, Juan Ignacio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p215020.png?v=22"
  },
  {
    "jugador": "Acosta, Lucas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p220624.png?v=22"
  },
  {
    "jugador": "Arismendi, Yair",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p261351.png?v=22"
  },
  {
    "jugador": "Diaz, Gabriel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p269132.png?v=22"
  },
  {
    "jugador": "Garcia, Manuel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p264733.png?v=22"
  },
  {
    "jugador": "Insaurralde, Juan Manuel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p153060.png?v=22"
  },
  {
    "jugador": "Morales, Santiago",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p274125.png?v=22"
  },
  {
    "jugador": "Roncaglia, Facundo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p183966.png?v=22"
  },
  {
    "jugador": "Vigo, Alex",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p247150.png?v=22"
  },
  {
    "jugador": "Andrada, Juan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p233034.png?v=22"
  },
  {
    "jugador": "Burgoa, Valentin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p243519.png?v=22"
  },
  {
    "jugador": "Gho, Joaquin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p261614.png?v=22"
  },
  {
    "jugador": "Monaco, Manuel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273909.png?v=22"
  },
  {
    "jugador": "Paradela, Federico",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p263718.png?v=22"
  },
  {
    "jugador": "Burrai, Javier",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p215048.png?v=22"
  },
  {
    "jugador": "Herrera, Guido",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p215251.png?v=22"
  },
  {
    "jugador": "Benavidez, Gaston",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p261081.png?v=22"
  },
  {
    "jugador": "Catalan, Matias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p214990.png?v=22"
  },
  {
    "jugador": "Navarro, Miguel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p255457.png?v=22"
  },
  {
    "jugador": "Portillo, Juan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p259788.png?v=22"
  },
  {
    "jugador": "Riveros, Blas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p233476.png?v=22"
  },
  {
    "jugador": "Rodriguez, Juan",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p244950.png?v=22"
  },
  {
    "jugador": "Schott, Augusto",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p244757.png?v=22"
  },
  {
    "jugador": "Botta, Ruben",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p215199.png?v=22"
  },
  {
    "jugador": "Galarza, Matias Alejandro",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p267626.png?v=22"
  },
  {
    "jugador": "Gomez, Matias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273965.png?v=22"
  },
  {
    "jugador": "Mosqueira, Joaquin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p275100.png?v=22"
  },
  {
    "jugador": "Ortegoza, Diego",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p269889.png?v=22"
  },
  {
    "jugador": "Portilla, Juan Camilo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p248191.png?v=22"
  },
  {
    "jugador": "Portillo, Marcos",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p269620.png?v=22"
  },
  {
    "jugador": "Bustos, Nahuel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p238194.png?v=22"
  },
  {
    "jugador": "Depietri, Valentin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273964.png?v=22"
  },
  {
    "jugador": "Girotti, Federico",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p246471.png?v=22"
  },
  {
    "jugador": "Palacios, Sebastian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p212715.png?v=22"
  },
  {
    "jugador": "Tarragona, Cristian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p232729.png?v=22"
  },
  {
    "jugador": "Zenobio, Felipe",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p256145.png?v=22"
  },
  {
    "jugador": "Laso, Joaquin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p226772.png?v=22"
  },
  {
    "jugador": "Paz, Nehuen",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p219451.png?v=22"
  },
  {
    "jugador": "Cabrera, Elias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273730.png?v=22"
  },
  {
    "jugador": "Lopez, Julian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p245061.png?v=22"
  },
  {
    "jugador": "Armoa, Blas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p254756.png?v=22"
  },
  {
    "jugador": "Benitez, Romeo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p275178.png?v=22"
  },
  {
    "jugador": "Fertoli, Hector",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p222693.png?v=22"
  },
  {
    "jugador": "Protti, Ijiel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p228960.png?v=22"
  },
  {
    "jugador": "Russo, Ignacio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p258082.png?v=22"
  },
  {
    "jugador": "Sarmiento, Dario",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p253715.png?v=22"
  },
  {
    "jugador": "Zalazar, Maximiliano",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p274145.png?v=22"
  },
  {
    "jugador": "Cardozo, Thiago",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p253271.png?v=22"
  },
  {
    "jugador": "Corvalan, Claudio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p211272.png?v=22"
  },
  {
    "jugador": "Del Blanco, Mateo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273028.png?v=22"
  },
  {
    "jugador": "Gerometta, Francisco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p255886.png?v=22"
  },
  {
    "jugador": "Ludueña, Juan Pablo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273079.png?v=22"
  },
  {
    "jugador": "Martinez, Mauricio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p226798.png?v=22"
  },
  {
    "jugador": "Pardo, Franco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p238518.png?v=22"
  },
  {
    "jugador": "Paz, Nicolas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p271969.png?v=22"
  },
  {
    "jugador": "Pitton, Bruno",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p231070.png?v=22"
  },
  {
    "jugador": "Pitton, Mauro",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p228961.png?v=22"
  },
  {
    "jugador": "Profini, Rafael",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p277181.png?v=22"
  },
  {
    "jugador": "Domina, Jeronimo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273051.png?v=22"
  },
  {
    "jugador": "Estigarribia, Marcelo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p269619.png?v=22"
  },
  {
    "jugador": "Fragapane, Franco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p207440.png?v=22"
  },
  {
    "jugador": "Gamba, Lucas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p226765.png?v=22"
  },
  {
    "jugador": "Marchiori, Tomas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p259273.png?v=22"
  },
  {
    "jugador": "Rodriguez, Randall",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p273705.png?v=22"
  },
  {
    "jugador": "Cavanagh, Tomas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p260238.png?v=22"
  },
  {
    "jugador": "Fernandez, Damian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p251686.png?v=22"
  },
  {
    "jugador": "Garcia, Joaquin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p256524.png?v=22"
  },
  {
    "jugador": "Gomez, Elias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p221053.png?v=22"
  },
  {
    "jugador": "Gomez, Valentin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p267860.png?v=22"
  },
  {
    "jugador": "Lagos, Agustin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p252192.png?v=22"
  },
  {
    "jugador": "Mammana, Emanuel",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p221551.png?v=22"
  },
  {
    "jugador": "Pernicone, Patricio",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p273987.png?v=22"
  },
  {
    "jugador": "Quiros, Aaron",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p261769.png?v=22"
  },
  {
    "jugador": "Bouzat, Agustin",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p232255.png?v=22"
  },
  {
    "jugador": "Fernandez, Thiago",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p275205.png?v=22"
  },
  {
    "jugador": "Galvan, Tomas",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p262240.png?v=22"
  },
  {
    "jugador": "Ordoñez, Christian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p273884.png?v=22"
  },
  {
    "jugador": "Seoane, Mateo",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p268732.png?v=22"
  },
  {
    "jugador": "Carrizo, Maher",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p279841.png?v=22"
  },
  {
    "jugador": "Pellegrini, Matias",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p244884.png?v=22"
  },
  {
    "jugador": "Pizzini, Francisco",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p214971.png?v=22"
  },
  {
    "jugador": "Romero, Braian",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc24/players/p227528.png?v=22"
  },
  {
    "jugador": "Santos, Michael",
    "imagen": "https://cdn.fifacm.com/content/media/imgs/fc25/players/p230964.png?v=22"
  }
];

module.exports = {
  IMAGENJUGADORES,
};

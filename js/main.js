
var quotes =
  [
    'messi',
    'ronaldo',
    'abotrika',
    'Mohamed zidan',
    'Lionel Scaloni ',
    'Gonzalo Montiel ',
    'Manuel Lanzini ',
    'Nani',
    'Esteban Cambiasso',
    'Willy Caballero ',
    'Claudio Pizarro',
    'Enner Valencia ',
    'Antonio Valencia',
    'Claudio Bravo ',
    'Ramires',
    'Maicon ',
    'Lucas Moura ',
    'Anderson ',
    'Robert Pires',
    'Sol Campbell ',
    'David Seaman ',
    'Carlos Bacca',
    'James Rodriguez',
    'Diego Godin',
    'Edinson Cavan',
    'Nahuel Molina',
    'Óscar Míguez',
    'Juan Mata',
    'Marco Materazzi',
    'Lautaro Martínez',
    'Lisandro Martínez',
    'Javi Martínez',
    'Miroslav Klose',
    'Jürgen Klinsmann',
    'Sami Khedira',
    'Kaká',
    'NGolo Kanté',
    'Filippo Inzaghi',
    'Mats Hummels',
    'Lucas Hernandez',
    'Thierry Henry',
    'Papu Gómez',
    'Gennaro Gattuso',
    'Nabil Fekir',
    'Cesc Fàbregas',
    'Edmílson',
    'Paulo Dybala',
    'Julian Draxler',
    'Dida',
    'Zinedine Zidane',
    'Gianluca Zambrotta',
    'David Trezeguet',
    'Luca Toni',
    'Lilian Thuram',
    'Bastian Schweinsteiger',
    'Paolo Rossi',
    'Cristian Romero',
    'Romário',
    'Adil Rami',
    'Lukas Podolski',
    'Andrea Pirlo',
    'Nicolás Otamendi',
    'Steven Nzonzi',
    'Jesús Navas',
    'Shkodran Mustafi',
    'Thomas Müller',
    'Gerd Müller',
    'Joselu ',
    'Brahim Díaz',
    'Gerard Deulofeu ',
    'Iago Aspas ',
    'Álvaro Arbeloa',
    'Aleksandar Mitrović ',
    'Fábio Carvalho – Liverpool',
    'Deco ',
    'Carvalho',
    'Jan Bednarek',
    'Wout Weghorst',
    'Jaap Stam',
    'Ruud van Nistelrooy',
    'Robin van Persie',
    'Dirk Kuyt ',
    'Tim Krul',
    'Patrick Kluivert ',
    'Luuk de Jong ',
    'Anwar El Ghazi',
    'Patrick van Aanholt',
    'Stefan Savić ',
    'Gianfranco Zola ',
    'Simone Zaza ',
    'Roberto Mancini',
    'Thilo Kehrer ',
    'Dwight Yorke',
    'Javier Hernández ',
    'Wes Morgan',
    'Percy Tau ',
    'Gedo ',
    'Mohamed Shawky ',
    'Ademola Lookman',
    'Odion Ighalo ',
    'George Weah',
    'Yaya Touré ',
    'Kolo Touré ',
    'Salomon Kalou ',
    'Wilfried Bony ',
    'Michael Essien',
    'Christian Atsu',
    'André Ayew ',
    'Jordan Ayew',
    'Ismael Bennacer',
    'Serge Gnabry',
    'Santi Cazorla',
    'Samir Nasri',
    'Marouane Fellaini',
    'Chris Smalling',
    'Fabien Barthez',
    'Nicky Butt',
    'Gary Neville','Ryan Giggs','Patrice Evra ', 'Victor Moses','Branislav Ivanović',
    'Nemanja Matić','Florent Malouda','Ashley Cole',
    'Michael Ballack','John Terry','William Gallas','Felipe Melo',
    'Edmílson','Ronald de Boer','Batistuta','Fernando Hierro','Carlo Ancelotte',
    'Antonio Conte','Mauricio Pochettino','Guardiola',
    'Pablo Aimar','Antonio Di Natale', 'Juninho',
    'Mario Gómez',' Mario Mandžukić','Marco Reus',
  ];



/*var quote = 0;
var author = 0;

function changeText() {

  var text1 = document.getElementById('changeText1');
  var text2 = document.getElementById('changeText2');
  text1.textContent = quotes[quote];
  text2.textContent = authors[author];
  quote = (quote + 1) % quotes.length;
  author = (author + 1) % authors.length;

}*/

function changeText() {

  var text1 = document.getElementById('changeText1');

  var random= Math.floor(Math.random() * quotes.length);
  console.log(random)

  text1.textContent = quotes[random];

}

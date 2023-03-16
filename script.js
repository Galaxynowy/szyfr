var małe_litery = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ź', 'ż', 'A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W','X', 'Y', 'Z', 'Ź', 'Ż', ' '];
alert("Wybierz jedną z opcji");
alert("1 - szyfrowanie; 2 - rozszyfrowywanie");
var opcja = prompt("Wybierz liczbę 1 lub 2")

if (opcja == 1) {
  var szyfr = prompt("Wpisz szyfr");
  let wynik = "";

  function małe() {
    for (i = 0; i < szyfr.length; i++) {
      for (a = 0; a < małe_litery.length; a++) {
        if (szyfr.charAt(i) == małe_litery[a]) {
          if (małe_litery[a] == 'ź') {
            wynik += małe_litery[0];
          } else if (małe_litery[a] == 'ż') {
            wynik += małe_litery[1];
          } else if (małe_litery[a] == 'Ź') {
            wynik += małe_litery[34];
          } else if (małe_litery[a] == 'Ż') {
            wynik += małe_litery[35];
          } else if (małe_litery[a] == ' ') {
            wynik += ' ';
          } else {
            wynik += małe_litery[a + 2];
          }
        }
      }
    }
    return (wynik);
  }

  alert(małe());
  window.location.reload();
  
}
else if (opcja == 2) {
  var szyfr = prompt("Wpisz szyfr");
  let wynik = "";

  function małe() {
    for (i = 0; i < szyfr.length; i++) {
      for (a = 0; a < małe_litery.length; a++) {
        if (szyfr.charAt(i) == małe_litery[a]) {
          if (małe_litery[a] == 'a') {
            wynik += małe_litery[32];
          } else if (małe_litery[a] == 'ą') {
            wynik += małe_litery[33];
          } else if (małe_litery[a] == 'A') {
            wynik += małe_litery[66];
          } else if (małe_litery[a] == 'Ą') {
            wynik += małe_litery[67];
          } else if (małe_litery[a] == ' ') {
            wynik += ' ';
          } else {
            wynik += małe_litery[a - 2];
          }
        }
      }
    }
    return (wynik);
  }

  alert(małe());
  window.location.reload();
}
else {
  alert("Wybierz opcję 1 lub 2");
  window.location.reload();
}

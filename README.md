# Czytnik RSS
### Aplikacja zbudowana z wykorzystaniem technologii: Backbone.js, Node.js, Express.js, MongoDB, Grunt.js, Bootstrap, jQuery, HTML5, CSS3

##Uruchomienie aplikacji
- Instrukcja dla użytkowników systemu WINDOWS
0. Pobieramy klienta [GIT](https://git-scm.com/download/win)
1. Instalujemy [Node.js](https://nodejs.org) oraz [MongoDb](https://www.mongodb.org/downloads#production) 
2. Na komputerze tworzymy nowy folder o dowolnej nazwie np na dysku C, uruchamiamy konsole git-cmd / git-bash, przechodzimy do nowo utworzonego folderu używając polecenia w konsoli <b>cd c:/przykladowa_nazwa_folderu</b>, następnie: <b>git clone https://github.com/antoni-matusz/czytnik-rss.git</b>
3. Po pomyślnym pobraniu REPO, w konsoli przechodzimy do folderu (polecenie: <b>cd czytnik-rss</b>) i wykonujemy polecenie <b>npm install</b>, które pobierze nam wszystkie  zależności niezbędne do prawidłowego działania aplikacji.
4. Tworzymy dla bazy danych MongoDB, którą wcześniej zainstalowaliśmy zaplecze do przechowywania danych. W tym celu otwieramy nowe okno cmd (konsole) i wpisujemy polecenie <b>cd c:/</b>, następnie <b>mkdir data</b>, <b>cd data</b>, <b>mkdir db</b>.
Następnie z pobranego REPO z folderu MonboDB.zip wykapowujemy zawartość do przykładowego folderu, z którego kopiujemy wszystkie pliki i w klejamy do utworzonego nami folderu => lokalizacja: c:/data/db/
Kolejny krok to uruchomienie bazy danych MongoDB lokalnie na komputerze: w tym celu wykonujemy w konsoli polecenie: <b>cd C:\Program Files\MongoDB\Server\3.0\bin</b> (sprawdź lokalizację instalacji MonboDb na swoim komputerze)
Po przejściu do folderu bin wpisujemy polecenie <b>mongod</b>
Otwieramy nowe okno consoli i wpisujemy polecenie: <b>cd C:\Program Files\MongoDB\Server\3.0\bin</b>, a następnie polecenie <b>mongo</b>
5. Następnie w pierwszej konsoli, w której wykonywaliśmy polecenie npm install uruchamiamy serwer lokalny wpisując w konsoli nodemon server.js => w konsoli zobaczymy komunikat "Serwer aktywny"
6. Uruchamiamy przeglądarkę internetową i wpisujemy w adres: http://localhost:8000
# Czytnik RSS
### Aplikacja zbudowana z wykorzystaniem technologii: Backbone.js, Node.js, Express.js, MongoDB, Grunt.js, Bootstrap, jQuery, HTML5, CSS3

##Uruchomienie aplikacji
####Instrukcja dla użytkowników systemu WINDOWS
- Pobieramy klienta [GIT](https://git-scm.com/download/win)
- Instalujemy [Node.js](https://nodejs.org) oraz [MongoDb](https://www.mongodb.org/downloads#production) 
- Na komputerze tworzymy nowy folder o dowolnej nazwie np na dysku C, uruchamiamy konsole git-cmd / git-bash, przechodzimy do nowo utworzonego folderu używając polecenia w konsoli <b>cd c:/przykladowa_nazwa_folderu</b>, następnie: <b>git clone https://github.com/antoni-matusz/czytnik-rss.git</b>
- Po pomyślnym pobraniu REPO, w konsoli przechodzimy do folderu (polecenie: <b>cd czytnik-rss</b>) i wykonujemy polecenie <b>npm install</b>, które pobierze nam wszystkie  zależności niezbędne do prawidłowego działania aplikacji.
- Tworzymy dla bazy danych MongoDB, którą wcześniej zainstalowaliśmy zaplecze do przechowywania danych. W tym celu otwieramy nowe okno cmd (konsola) i wpisujemy polecenie <b>cd c:/</b>, następnie <b>mkdir data</b>, <b>cd data</b>, <b>mkdir db</b>.
- Kolejny krok to uruchomienie bazy danych MongoDB lokalnie na komputerze: w tym celu wykonujemy w konsoli polecenie: <b>cd C:\Program Files\MongoDB\Server\3.0\bin</b> (sprawdź lokalizację instalacji MonboDb na swoim komputerze rożnica w wersji (<b>Server\3.0</b> !!!))
- Po przejściu do folderu bin wpisujemy polecenie <b>mongod</b>
- Otwieramy nowe okno consoli i wpisujemy polecenie: <b>cd C:\Program Files\MongoDB\Server\3.0\bin</b>, a następnie polecenie <b>mongo</b>, w tym samym oknie konsoli dodajemy nowe polecenie, które utworzy nam nową bazę danych w naszym przypadku o nazwie feeds: <b>use feeds</b>. Finalizując dodamy do bazy danych feeds nową kolekcję też o nazwie feeds oraz przykładowe dane: <b>db.feeds.insert({"title": "Pierwszy wpis", "description":"Przykładowy opis pierwszego wpisu", "date": "10-12-2015"})</b>
- Następnie w pierwszej konsoli, w której wykonywaliśmy polecenie npm install uruchamiamy skrypt GRUNT.JS, który przygotuje nam wersję produkcyjną, wykonujemy polecenie: <b>grunt build</b>
- Finalnie uruchamiamy serwer lokalny wpisując w konsoli <b>cd dist</b>, a następnie polecenie <b>node server.js</b> => jeśli będzie wszystko OK => w konsoli zobaczymy komunikat "Serwer aktywny"
- Uruchamiamy przeglądarkę internetową i wpisujemy w adres: http://localhost:8000
- Po obejrzeniu aplikacji należy w każdej konsoli wykonać CTRL + C aby wyłączyć wszystkie serwery, a następnie wykonać w każdej z konsoli polecenie <b>exit</b>
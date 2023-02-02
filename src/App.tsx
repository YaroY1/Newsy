import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginPage from "./components/LoginPage/LoginPage";
import ExcerciseForm from "./components/ExcerciseForm/ExcerciseForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./helpers/firebaseConfig";
import UserPage from "./components/UserPage/UserPage";
import { Typography } from "@mui/material";
import SearchPage from "./components/SearchPage/SearchPage";
function App() {
  // const [avatarClicked, setAvatarClicked] = useState<boolean>(false);
  // const [usersFirstName, setUsersFirstName] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  // ta funkcja wykonuje się OD RAZU *PO* zmianie stanu autentykacji
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // rob cos po log in
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  // brak user => zalogowanie => tu zachodzi zmiana obiektu user => wywołanie onAuthStateChanged => user

  return (
    <div className="App">
      <BrowserRouter>
        {/* STATIC */}
        <Navbar loggedIn={loggedIn} />
        {/* <ExcerciseForm setUsersFirstName={setUsersFirstName}/> */}
        {/* STATIC */}
        {/* DYNAMIC */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage loggedIn={loggedIn} />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        {/* DYNAMIC */}
        {/* STATIC */}
        {/* STATIC */}
      </BrowserRouter>
    </div>
  );
}

export default App;

// 16.01.2023
// 1. Stwórz komponent Article.tsx
// 2. Komponent Article będzie przyjmował 2 propsy: article oraz key. Prop article to obiekt artykułu pochodządzy z API a key to po prostu liczba. Stwórz interface dla obiektu typu article, nazwij go ArticleObj, w środku: url to string, urlToImage to string, title to string. Sam interface użyj do otypowania propsów w Article, przyjmij je.


// 3. JSX:
// - wszystko ma być obwinięte w komponent ListItem (MUI)
// - w środku ListItem wszystko ma być obwinięte komponentem Card (MUI), props komponentu Card: variant na outlined, w sx'ach margines dolny na 10px
// - w środku Card wszystko obwinięte tagiem a (zwykły anchor z htmla), props: href na url z artykułu który zostaw przekazany propsem do Article.tsx, target na __blank, w style textDecoration none
// - w środku <a> ma się znaleźć tag img (zwykły htmlowy) z src ustawionym na urlToImage z artykułu z propsów, alt ustawiony na title artykułu z propsów i w style width ustawione na 100%
// - obok tagu img ma się znaleźć komponent ListItemText (z MUI) w sx'ach color black, mx 5%. W środku ListItemText wyświetl tytuł artykułu z propsów.

// 17.01.2023 zad1
// 1. Na liście (stanie) todaysArticles odpal metode map, wyświetlaj w niej komponenty Article, jako props article podawaj aktualny element po którym iterujesz (1szy parametr mapa), jako klucz (key) podaj index aktualnego elementu (drugi parametr mapa)
// 17.01.2023 zad2
// 1. Elementem który obwija wszystko inne jest zwykły htmlowy <form>, ma on mieć atrybut style gdzie trzeba ustawić display na flex i flexDirection na column.
// 2. W środku <form> wyświetl komponent <Typography> (MUI) z propsami align center, variant h2, w sx'ach fontSize na 1.5rem. TextContent elementu to Register new account
// 3. Wyświetl obok komponent TextField (MUI) z propsami type email, placeholder email, w sx'ach display block, my .5rem, mx auto
// 4. Wyświetl obok komponent TextField (MUI) z propsami type password, placeholder password, w sx'ach display block, my .5rem, mx auto
// 5. Wyświetl obok komponent TextField (MUI) z propsami type password, placeholder repeat password, w sx'ach display block, my .5rem, mx auto
// 6. Wyświetl obok Button z MUI, variant contained, type submit, w sx'ach display block, mx auto. Tekst buttona to Register

// 18.01.2023 autentykacja
// register zrobiony i zadanie na LoginForm
// 1. Stwórz komponent LoginForm
// 2. Do komponentu LoginForm zaimportuj hook useForm i wywołaj go wyciągając funkcje register i handleSubmit
// 3. Stwórz interface dla wartości z formularza, będą tylko 2: email i hasło, jedno i drugie string. Sam interface dopisz do wywołania useForm
// 4. Stwórz funkcję logUserIn. Funkcja w parametrze będzie przyjmowała destrukturyzowany obiekt z email i password (patrz komponent RegisterForm) dopisz do tego parametru interface z pkt 3. W samej funkcji wywołaj funkcję signInWithEmailAndPassword, uprzednio ją importując. Sama funkcja przyjmuje 3 argumenty, obiekt auth (firebaseConfig), email i password. Do wywołania funkcji przypnij thena i catcha.
// 5. JSX:
// - całość obwinięta w htmlowy <form>, onSubmit skonfiguruj z handleSubmit i funkcją logUserIn, w atrybucie style ustaw display na flex i flexDirection na column
// - w form umieść TextField (MUI) variant outlined, type email, placeholder email, w sxach display block, my .5rem, mx auto. Zarejestruj input pod nazwą email.
// - w form umieść TextField (MUI) variant outlined, type password, placeholder password, w sxach display block, my .5rem, mx auto. Zarejestruj input pod nazwą password.
// - w form umieść Button (MUI) type submit, variant contained, w sxach display block, mb 1rem, mx auto. Tekst w buttonie: Log in

// 1. Stwórz komponent LoginPage
// 2. Będzie tu wyświetlany react fragment, w fragmencie:
// - LoginForm
// - Typography (MUI) variant h6, w sxach fontWeight 100, textAlign center. Text: Don't have an account yet? Register now!
// - Link (react-router-dom) to /register, w atrybucie style textDecoration none
// - w środku Linka Button (mui) variant outlined, w sxach display block, mx auto. Text buttona: Register

// 19.01.2023 autentykacja, formularze część dalsza
// 1. Stwórz komponent ExerciseForm.
// 2. Ten komponent ma wyświetlać formularz z dwoma inputami (TextField (MUI)), jeden na imie, drugi na nazwisko, dodaj też Button (MUI) z typem submit. Zaimportuj useForm i obsłuż formularz.
// 3. W App.tsx stwórz stan usersFirstName, otypuj go na string, wartość początkowa "".
// 4. Wyświetl ExerciseForm w App.tsx (statycznie/dynamicznie, nie ma to znaczenia), przekaż do ExcerciseForm funkcję aktulizującą stan usersFirstName. Nie zapomnij o interface w ExerciseForm
// 5. Wywołuj funkcję aktulizującą stan usersFirstName w własnoręcnie napisanym handlerze, wrzucając do stanu TYLKO IMIE użytkownika.
// 6. Zrób console.log(stan) w App.tsx żeby sprawdzić czy działa

// ------------------------------------------------------------------------------
// 1. Stwórz komponent UserPage.
// 2. Komponent UserPage wyświetlaj jako Route w App.tsx, od razu przekaż do UserPage stan loggedIn, nie zapomnij o interface w UserPage.
// 3. W UserPage wyświetlaj react fragment, w środku:
// - Typography variant h2, align center, w sxach: fontSize 2rem, my 1rem, borderBottom 1px solid #1976d2, pb .5rem. Text: Your profile
// - Typography variant h5, align center, w sxach: fontSize 1rem, my 1rem, mx auto. Text: Your email: *tutaj email użytkownika*. Email użytkownika jest dostępny na obiekcie auth (zaimportuj go z firebaseConfig), auth.currentUser.email
// - Button variant outlined, w sxach: display: block, mx auto, my 1rem. Nadaj mu onClick w którym będziesz wylogowywać użytkownika. Do tego posłuży ci funkcja signOut importowana z firebase/auth. Sama funkcja signOut przyjmuje 1 arugment: obiekt auth (firebaseConfig). Text buttona: Log ou

// ------------------------------------------------
// 23.01.2023 zadanie ze zdjęciami profilowymi

// 1. Stwórz komponent ProfilePhotoForm
// 2. Zaimportuj useForm, wywołaj go wyciągając funkcję register i handleSubmit.
// 3. Stwórz pustą funkcję uploadPhoto
// 4. JSX:
// - wszystko będzie obwinięte tagiem form (htmlowym), skonfiguruj onSubmit w odpowiedni sposób używając funkcji uploadPhoto
// - w formularzu wyświetl komponent Card (MUI), w sx'ach p 1rem
// - w Card wyświetl:
// a) Typography (MUI) variant h6, align center, sx: fontSize 1rem. Text: Upload your profile picture
// b) Button (MUI) variant contained, component label, sx: display block, mx auto, my 1rem, alignContent center.
// <Button component="label">
// <Typography></Typography><input hidden />
// </Button>
// w tym Buttonie wyświetl 2 elementy: Typography (variant h6, align center, sx: fontSize 1rem. Text: Select a file) oraz input (htmlowy, type file, hidden, zarejestruj input w useForm pod nazwą profilePhoto)
// c) Button (MUI) variant contained, type submit, sx: display block, mx auto. Text: Upload
// 5. Interface do useForm'a:
// input type file zwraca typ FileList, otypuj profilePhoto jako FileList

// 1. Z parametru data wyizoluj sam obiekt zdjęcia, console.log(data) i sprawdź co to jest. Do zmiennej zapisz sam pojedyńczy obiekt zdjęcia.
    // 2. Stwórz ifa, w którym sprawdzisz czy auth.currentUser istnieje.
    // 3. W tym ifie stwórz kod odpowiedzialny za wrzucanie zdjęcia do storage'u. Ścieżka do pliku (ścieżka w refie): '/users/${auth.currentUser.uid}/profile'
    // 4. Cały ProfilePhotoForm wyświetl w UserPage pomiędzy mailem a log outem.
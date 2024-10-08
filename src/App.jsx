import "./App.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const pizzas = [
    {
      id: 1,
      name: "Margherita",
      description: "Pomodoro, mozzarella, basilico",
      price: 8.99,
      img: "https://images2.corriereobjects.it/methode_image/2017/11/04/Cucina/Foto%20Trattate/iStock-1414575281-kySG-RgnrXPWRLIrU3yCfn6oXl4N-620x385@Cucina-Web.jpg?v=202310061433",
    },
    {
      id: 2,
      name: "Diavola",
      description: "Pomodoro, mozzarella, salame piccante",
      price: 9.99,
      img: "https://satisfyingslice.com/wp-content/uploads/2023/06/Pizza-alla-Diavola-24.jpg",
    },
    {
      id: 3,
      name: "Quattro Stagioni",
      description: "Pomodoro, mozzarella, prosciutto, funghi",
      price: 10.99,
      img: "https://primochef.it/wp-content/uploads/2020/04/SH_pizza_quattro_stagioni.jpg",
    },
    {
      id: 4,
      name: "Würstel e patatine",
      description: "Pomodoro, mozzarella, würstel, patatine fritte",
      price: 11.99,
      img: "https://t4.ftcdn.net/jpg/04/77/17/69/360_F_477176923_fO6Lb96eZ5N4ZYIvVeRIxz9s5n0mnN7h.jpg",
    },
    {
      id: 5,
      name: "Boscaiola",
      description: "Mozzarella, funghi, salsiccia",
      price: 10.99,
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1c/67/4a/a9/pizza-boscaiola.jpg",
    },
    {
      id: 6,
      name: "Fiori di zucca",
      description: "Mozzarella, fiori di zucca, alici",
      price: 10.99,
      img: "https://www.ricettedalmondo.it/images/foto-ricette/p/31389-pizza-con-fiori-di-zucca-e-alici.jpg",
    },
  ];
  return (
    <>
      <Header />
      <Main pizzas={pizzas} />
    </>
  );
}

export default App;

import axios from "axios";
import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import { API_KEY } from "../../helpers/api";
import { List } from "@mui/material";
import Article from "../Article/Article";
const SearchPage = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${keyword}&from=2023-01-17&language=en&sortBy=popularity&apiKey=${API_KEY}`
        )
        .then((data) => {
          setArticles(data.data.articles);
        });
    }
  }, [keyword]);

  return (
    <>
      <SearchForm setKeyword={setKeyword} />
      <List sx={{ width: "100%", alignContent: "center" }}>
        {articles.map((el, i) => {
          return <Article article={el} key={i} />;
        })}
      </List>
    </>
  );
};

export default SearchPage;
// 4. JSX:

// - w komponencie List odpal pętle .map() na articles (pkt 2). W pętli wyświetlaj komponenty Article, pod propsa article podawaj 1szy parametr .mapa() a jako propsa key podawaj drugi parametr .mapa()
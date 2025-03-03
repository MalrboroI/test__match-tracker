import React, { useState, useEffect, useCallback } from "react";
import ListMatch from "./components/match/ListMatch";
import { ServiceApi } from "./API/Service";
import Header from "./components/header/Header";
import NoData from "./components/utils/NoData";
import LoaderFromAPI from ".//components/utils/LoaderFromAPI";
import "./styles/Main.scss";

// const baseUrl = "https://app.ftoyd.com/fronttemp-service/fronttemp";

const App = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMatchesInit = useCallback(async () => {
    setLoading(true);
    ServiceApi.getMatchList()
      .then((data) => {
        if (data?.length) {
          setMatches(data);
        }
        setError("");
      })
      .catch(() => setError("Ошибка: не удалось загрузить информацию"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchMatchesInit();
  }, [fetchMatchesInit]);

  return (
    <main>
      <Header loading={loading} error={error} matches={fetchMatchesInit} />
      {!matches.length ? <NoData /> : <ListMatch matches={matches} />}
      <LoaderFromAPI />
    </main>
  );
};

export default App;

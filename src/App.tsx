import { getGames } from "./api/api";
import { useRequest } from "./api/useRequest";
import type { Game } from "./models/game";
import styles from "./App.module.css";

function App() {
  const { data, isLoading, isError } = useRequest<Game[]>(getGames);
  if (isLoading) return <div className={styles.loading}>Загрузка...</div>;
  if (isError) return <div className={styles.error}>Ошибка</div>;
  if (!data) return null;
  return (
    <div className={styles.layout}>
      {data.map(
        ({ title, genre, release_date, short_description, id, thumbnail }) => (
          <div key={id} className={styles.tile}>
            <div className={styles.header}>
              <div className={styles.title}>{title}</div>
              <div className={styles.genre}>{genre}</div>
            </div>
            <img src={thumbnail} />
            <div>{short_description}</div>
            <div>{`Дата релиза: ${release_date}`}</div>
          </div>
        )
      )}
    </div>
  );
}

export default App;

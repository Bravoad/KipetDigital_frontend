import './Loader.css';

export function Loader() {
  return (
    <div className="loader" role="status" aria-label="Загрузка">
      <span />
      <p>Загружаем данные...</p>
    </div>
  );
}

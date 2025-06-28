import styles from "./cards.module.css";

export default function Cards({ title, text, icon }) {
  return (
    <>
      <div className="col-6 col-lg-3 my-3">
        <div className={`${styles.card_container} rounded shadow`}>
          <i className={`bi ${icon}`}></i>
          <h2>{title}</h2>
          <h3>{text}</h3>
        </div>
      </div>
    </>
  );
}

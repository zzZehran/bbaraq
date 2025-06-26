import styles from "./hero.module.css";
export default function Hero() {
  return (
    <section className={`${styles.hero}`}>
      <h1>Lorem Homes Inc.</h1>
      <h2 className="my-4">Residential | Commercial</h2>
      <p>Renovations | Re-Modelling | Property Management</p>
      <button className="px-3 py-2 rounded mt-5">Contact Us</button>
    </section>
  );
}

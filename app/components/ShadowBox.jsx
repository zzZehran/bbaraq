export default function ShadowBox({ children }) {
  const styles = {
    minHeight: "50vh",
    boxShadow: "-1px 1px 54px 0px rgba(0, 0, 0, 0.75)",
    marginTop: "-2rem",
    backgroundColor: "white",
  };

  return (
    <div style={styles} className="rounded mx-5 p-5">
      {children}
    </div>
  );
}

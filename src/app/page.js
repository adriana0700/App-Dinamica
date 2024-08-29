
import styles from "./estilos.scss";
import Users from "./users";


export default function Home() {
  
  return (
    <main className={styles.main}>
      <div >
        <h1>
          Empleados
        </h1>
        <br></br>
        <Users />
      </div>
    </main>
  );
}
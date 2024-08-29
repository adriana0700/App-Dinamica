
import styles from "../../estilos.scss";
import DetalleUsers from "./users_detalle";


export default function Home() {
  
  return (
    <main className={styles.main}>
      <div >
       
        <DetalleUsers />
      </div>
    </main>
  );
}
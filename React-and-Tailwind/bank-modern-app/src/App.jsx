import styles from './styles'
import Navbar from "./components/Navbar"
import Stats from "./components/Stats"
import Clients from './components/Clients';



export default function App() {

  return (
    <div className="bg-primary w-full overflow-hidden">
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Navbar />
      </div>
     </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <hero/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Stats />
      <Clients />
      Billings
      </div>
    </div>

    </div> 
  )
}



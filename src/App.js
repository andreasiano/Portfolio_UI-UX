import styles from "./style";
import img from "./assets/img.jpg"
import {
  Navbar,
  Hero,
  ImageCard
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div
      className={`bg-dimWhite ${styles.paddingY} ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}`}>
        <div className="lg:flex gap-10 lg:mb-10">
          <ImageCard/>
          <ImageCard/>
        </div>
      </div>
    </div>
  </div>
);

export default App;

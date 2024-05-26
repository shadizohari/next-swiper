import styles from "./page.module.css";
import SwiperRtl from "./components/Slider";

export default function Home() {
  return (
    <main className={styles.main}>
      <SwiperRtl />
    </main>
  );
}

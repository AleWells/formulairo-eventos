import styles from "./LoaderDash.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={`${styles["justify-content-center"]} ${styles["jimu-primary-loading"]}`}></div>
    </div>
  );
};

export default Loader;

import styles from './loading.module.css'

export default function loading() {
  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <div className="bg-black opacity-30 w-full h-full absolute"></div>
      <div className={styles.loader}></div>
    </div>
  )
}

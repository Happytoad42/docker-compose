import styles from '../styles/Home.module.css'


export default function Home(props) {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to NextJS,  <span>{props.username}</span>
        </h1>

      </main>

    </div>
  )
}


export async function getStaticProps() {
  const res = await fetch('http://localhost:8080');
  console.log(res);
  const data = await res.json()
  return {
    props: {
      username: data.username
    }, 
  }
}

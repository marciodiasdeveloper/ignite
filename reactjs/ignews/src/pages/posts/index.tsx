import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>P
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a>
                        <time>12 de março de 2021</time>
                        <strong>Titulo do post</strong>
                        <p>Resumo do post.</p>
                    </a>
                </div>
                <div className={styles.posts}>
                    <a>
                        <time>12 de março de 2021</time>
                        <strong>Titulo do post</strong>
                        <p>Resumo do post.</p>
                    </a>
                </div>
                <div className={styles.posts}>
                    <a>
                        <time>12 de março de 2021</time>
                        <strong>Titulo do post</strong>
                        <p>Resumo do post.</p>
                    </a>
                </div>
            </main>
        </>
    );
}
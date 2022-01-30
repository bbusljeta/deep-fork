
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { globalStyles } from '../styles';
import Link from 'next/link';
import { firestore } from '@common/firebase';
import { useRouter } from 'next/router';
import { getSortedRoutes } from 'next/dist/shared/lib/router/utils';

interface Card {
    id: string;
    title: string;
    description: string;
}
interface Props {
    card: Card
}

const Card: NextPage<Props> = ({ card }) => {
    const router = useRouter()

    if (router.isFallback) {
        return (<div css={globalStyles.container}>
            ...Loading
        </div>)
    }

    return (
        <div css={globalStyles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main css={globalStyles.main}>
                <h1 css={globalStyles.title}>
                    {card.title}
                </h1>

                <p css={globalStyles.description}>
                    {card.description}
                </p>
            </main>

            <footer css={globalStyles.footer}>
                <a
                    css={globalStyles.footerLink}
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer">
                    Powered by{' '}
                    <span css={globalStyles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
};
export const getStaticPaths: GetStaticPaths = async () => {
    const snapshot = await firestore.collection('cards').get();
    const data = snapshot.docs.map((doc) => ({ ...(doc.data() as Card), id: doc.id }));
    const params = data.map((card) => ({ params: { id: card.id } }));
    return {
        paths: params,
        fallback: true // false or 'blocking'
    };
}
export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context
    const id = params?.id;
    const snapshot = await firestore.collection('cards').doc(id as string).get()
    const data = snapshot.data() as Card

    return {
        props: {
            card: data
        }, // will be passed to the page component as props
    }
}

export default Card;

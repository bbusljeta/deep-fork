import type { NextPage } from 'next';
import { globalStyles } from '../styles';

const Home: NextPage = () => {
    return (
        <div css={globalStyles.container}>
            <main css={globalStyles.main}>
                <h1 css={globalStyles.title}>
                    Create a new card
                </h1>
            </main>
        </div>
    );
};

export default Home;

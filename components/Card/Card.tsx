import { cardStyles } from "./Card.styles"

type Props = {
    id: string;
    title: string;
    description: string;
}
export const Card: React.FC<Props> = ({ title, description }) => {
    return (
        <div css={[cardStyles.card]}>
            <h2>{title}</h2>
            <p css={[cardStyles.cardDescription]}>{description}</p>
        </div>

    )
}
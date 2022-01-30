import Link from "next/link"
import { cardStyles } from "./Card.styles"

type Props = {
    id: string;
    title: string;
    description: string;
    link: string
}
export const Card: React.FC<Props> = ({ title, description }) => {
    return (
        <Link href={'somwhere'}>
            <div css={[cardStyles.card]}>
                <h2>{title}</h2>
                <p css={[cardStyles.cardDescription]}>{description}</p>
            </div>
        </Link>
    )
}
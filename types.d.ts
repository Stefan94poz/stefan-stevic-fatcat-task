interface ICard {
    title: string;
    text: string;
    link: string;
    description?: string;
    background?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface IButton {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

interface CardProps {
    title: string;
    image: string;
    description: string;
    background: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    buttonText: string;
}

type CardsProps = {
    cards: CardProps[];
};

interface IHero {
    title: string;
    image: string;
}

type ItemShowcase = {
    title: string;
    description: string;
};
type ItemShowcaseProps = {
    items: ItemShowcase[];
};

type LayoutProps = {
    children: React.ReactNode;
    background: string;
};

type PanelShowcaseItems = {
    title: string;
    description: string;
    image: string;
};

type PanelShowcaseProps = {
    items: PanelShowcaseItems[];
};
type Image = {
    image: string;
};

type ImagesProps = {
    images: string[];
};

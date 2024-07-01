import Marquee from 'react-fast-marquee';

export const TrustBar: React.FC<ImagesProps> = ({ images }: ImagesProps) => {
    return (
        <Marquee>
            {images.map((image) => (
                <img width={100} key={image} src={image} className="mx-10" />
            ))}
        </Marquee>
    );
};

import React from 'react';
import Container from 'react-bootstrap/Container';
import ProductCarousel from 'Components/Carousel/ProductCarousel';

const HomePageNewRelease = () => {
    return (
        <Container className="mt-5">
            <ProductCarousel heading="Mới nhất" products={productArray} />
        </Container>
    );
};

export default HomePageNewRelease;

const productArray = [
    { address: '/', img: '/images/product/Giày bongda Sân Cỏ Tự Nhiên Không Dây Predator Freak 3.jpg' },
    { address: '/', img: '/images/product/Giày Tennis Adizero Ubersonic 4.jpg' },
    { address: '/', img: '/images/product/FORUM 84 LOW 8K.jpg' },
    { address: '/', img: '/images/product/Giày Harden Vol. 6.jpg' },
    { address: '/', img: '/images/product/Giày Climacool Vento HEAT.RDY.jpg' },
    { address: '/', img: '/images/product/ZX 8000 LEGO.jpg' },
    { address: '/', img: '/images/product/Giày Adistar.jpg' },
];

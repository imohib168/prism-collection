import React, { useContext } from 'react';
import { CollectionContext } from './../../Context/globalContext';
import { Link } from 'react-router-dom';
import { CarouselC, HoverCard } from './../../Components/index';
import { BsArrowRight } from 'react-icons/bs'

import './Home.css';

// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";

export const Home = () => {

    const { data } = useContext(CollectionContext);

    return (
        <main className="homeSection">
            <CarouselC />

            <section className="container">
                <div className="welcome">
                    <div className="textContainer">
                        <h3>Welcome to Prism Collection</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque maiores deserunt molestias autem nesciunt provident magni voluptas aspernatur, repudiandae dolore. Quae ipsum adipisicing elit. Doloremque maiores deserunt molestias autem nesciunt provident magni voluptas aspernatur, repudiandae dolore. Quae ipsum adipisicing elit. Doloremque maiores deserunt molestias autem nesciunt provident magni voluptas aspernatur, repudiandae dolore. Quae ipsum eum tempore commodi culpa, ratione laborum enim non?</p>
                    </div>
                    <div className="imgContainer">
                        {/* <img src="https://images.pexels.com/photos/4452517/pexels-photo-4452517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" /> */}
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_1SEWYBQQMAdnQdCTQFmiP56vIYS16PtPQ&usqp=CAU" alt="image" />
                    </div>
                </div>
            </section>

            {
                data.map((d) => {
                    return (
                        <section className="container" id="collection">
                            <div className="summerCollection">
                                <div className="CollectionHeader">
                                    <h1>Summer Collection</h1>
                                    <Link to="/summer-collection">
                                        <button className="btn">
                                            {/* <BsArrowRight /> */}
                                            View More
                                        </button>
                                    </Link>
                                </div>
                                <div className="underline"></div>
                                <section>
                                    {
                                        d.SummerCollection.slice(0, 4).map(({ id, name, collectionType, price, image, description }) => {
                                            return (
                                                <HoverCard
                                                    id={id}
                                                    name={name}
                                                    collectionType={collectionType}
                                                    price={price}
                                                    image={image}
                                                    description={description}
                                                />
                                            )
                                        })
                                    }
                                </section>
                            </div>

                            <div className="winterCollection">
                                <div className="CollectionHeader">
                                    <h1>Winter Collection</h1>
                                    <Link to="/winter-collection">
                                        <button className="btn">
                                            {/* <BsArrowRight /> */}
                                            View More
                                        </button>
                                    </Link>
                                </div>
                                <div className="underline"></div>
                                <section>
                                    {
                                        d.WinterCollection.slice(0, 4).map(({ id, name, collectionType, price, image, description }) => {
                                            return (
                                                <HoverCard
                                                    id={id}
                                                    name={name}
                                                    collectionType={collectionType}
                                                    price={price}
                                                    image={image}
                                                    description={description}
                                                />
                                            )
                                        })
                                    }
                                </section>
                            </div>
                        </section>
                    )
                })
            }
        </main>
    )
}

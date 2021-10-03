import React, { useContext } from 'react'
import './Collection.css';

import { CollectionContext } from './../../Context/globalContext';
import { HoverCard } from './../../Components/index.js';

export const SummerCollection = () => {

    const { data } = useContext(CollectionContext);

    return (
        <div className="SummerCollection">
            <div className="cover">
                <h2>Summer Collection</h2>
            </div>
            <div className="summerCollectionProducts">
                {
                    data.map((d) => (
                        <section>
                            {
                                d.SummerCollection.map(({ id, name, collectionType, price, image, description }) => {
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
                    ))
                }
            </div>
        </div>
    )
}

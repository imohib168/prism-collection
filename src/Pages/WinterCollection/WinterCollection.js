import React, { useContext } from 'react'
import './../SummerCollection/Collection.css';

import { CollectionContext } from './../../Context/globalContext';
import { HoverCard } from './../../Components/index.js';

export const WinterCollection = () => {

    const { data } = useContext(CollectionContext);

    return (
        <div className="WinterCollection">
            <div className="WinterCover">
                <h2>Winter Collection</h2>
            </div>
            <div className="winterCollectionProducts">
                {
                    data.map((d) => (
                        <section>
                            {
                                d.WinterCollection.map(({ id, name, collectionType, price, image, description }) => {
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

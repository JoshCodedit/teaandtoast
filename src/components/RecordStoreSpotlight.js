import React, { useState, useEffect } from 'react';

function RecordStoreSpotlight(props) {
    const [currentStore, setCurrentStore] = useState('recordStore1');
    const [nextStore, setNextStore] = useState('recordStore2');
    let interval; 

    useEffect(() => {
        interval = setInterval(togglePages, 9000); 

        return () => clearInterval(interval);
    }, []);

    const togglePages = () => {
        fadeOut(currentStore);
    };

    const fadeOut = (store) => {
        const currentStoreElement = document.getElementById(store);
        currentStoreElement.style.opacity = '0';
        setTimeout(() => {
            currentStoreElement.style.display = 'none';
            fadeIn(nextStore);
        }, 500);
    };

    const fadeIn = (store) => {
        const nextStoreElement = document.getElementById(store);
        nextStoreElement.style.display = 'block';
        nextStoreElement.style.opacity = '1';
        swapStores();
    };

    const swapStores = () => {
        const temp = currentStore;
        setCurrentStore(nextStore);
        setNextStore(temp);
    };

    const handleMouseEnter = () => {
        clearInterval(interval);
    };

    const handleMouseLeave = () => {
        togglePages();
    };

    return (
        <div className="recordStoreSpotlight">
            <div id="recordStore1" >
                <h2 className='store-name'>TEN PIN RECORDS<br />
                    <h3 className='store-location'>Purley, Croydon</h3>
                </h2>
                <br />
                <img className='store-image' src="./Images/Ten_Pin_Records.jpg" alt="Ten Pin Records" style={props.imageStyle} />
                <br />
                <p className='store-bio'>Ten Pin Records is a family affair; Docherty's husband, aunt and three children all help.
                    Purley-based record shop. Discover a diverse collection of LPs, singles, CDs, and books
                    across
                    genres.
                    They buy collections, offer used turntables, and provide a record cleaning service. Visit
                    for
                    details.</p>
            </div>

            <div id="recordStore2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ display: 'none' }}>
                <h2 className='store-name'>REVOLUTION RECORDS<br />
                    <h3 className='store-location'>Penge, Lewisham</h3>
                </h2>
                <br />
                <img className='store-image' src="./Images/Revolution_Records.jpg" alt="Revolution Records" style={props.imageStyle} />
                <br />
                <p className='store-bio'>Revolution Records Penge specialises in selling great condition used vinyl 
                    along with a selection of new releases. Dog-friendly shop also stocking CDs, 
                    music related books, t-shirts, posters and more. A destination for the community not only vinyl lovers</p>
            </div>
        </div>
    );
}

export default RecordStoreSpotlight;

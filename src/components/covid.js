import React, {useEffect, useState} from 'react'

const img1 = 'https://picsum.photos/200/300';
const img2 = 'https://picsum.photos/250/300';
const img3 = 'https://picsum.photos/230/300';
const img4 = 'https://picsum.photos/210/300';
const img5 = 'https://picsum.photos/220/300';
const img6 = 'https://picsum.photos/280/300';


const Covid = () => {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
          getCovidData();
    }, []);

    return (
        <> 
            <section>
            <div>

            <h1>Live</h1>
            <h2>Covid-19</h2>
            <ul>
                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner'>
                        <p className='car__name'> <span>OUR</span>COUNTRY</p>
                        <p className='card__total card__small'>INDIA</p>
                        <img src = {img1}  alt = "randomImage"/>
                        </div>
                    </div>
                </li>
            </ul>
            <ul>
                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner'>
                        <p className='car__name'> <span>Total</span>Recovered</p>
                        <p className='card__total card__small'>{data.recovered}</p>
                        <img src = {img2}  alt = "randomImage"/>

                        </div>
                    </div>
                </li>
            </ul>  <ul>
                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner'>
                        <p className='car__name'> <span>Total</span>Confirmed</p>
                        <p className='card__total card__small'>{data.confirmed}</p>
                        <img src = {img3}  alt = "randomImage"/>

                        </div>
                    </div>
                </li>
            </ul>  <ul>
                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner'>
                        <p className='car__name'> <span>Total</span>Active</p>
                        <p className='card__total card__small'>{data.active}</p>
                        <img src = {img4}  alt = "randomImage"/>

                        </div>
                    </div>
                </li>
            </ul>  <ul>
                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner'>
                        <p className='car__name'> <span>Total</span>deaths</p>
                        <p className='card__total card__small'>{data.deaths}</p>
                        <img src = {img5}  alt = "randomImage"/>

                        </div>
                    </div>
                </li>
            </ul>  <ul>
                <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner'>
                        <p className='car__name'> <span>Last</span>Updated</p>
                        <p className='card__total card__small'>{data.lastupdatedtime}</p>
                        <img src = {img6}  alt = "randomImage"/>

                        </div>
                    </div>
                </li>
            </ul>
            </div>
            </section>
        </>
    )
}
export default Covid
// import React from 'react'


// ctrl+d use for copy both select element
// <> react fragment 
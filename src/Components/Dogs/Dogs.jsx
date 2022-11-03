import '../Styles/Dogs.css'
import Card from '../Cards/Card'
import { useState } from 'react'
import Peticion from '../Peticion/Peticion'


function Dogs() {

    const [urlDog, seturlDog] = useState("https://api.thedogapi.com/v1/images/search?limit=2&page=10&order=Desc")

    const { dog, isLoading, isError } = Peticion(urlDog)

    if (isLoading) return <div>loading...</div>
    if (isError) return <div>error</div>

    return (

        <div>
            <div className='dogs'>
                {dog.map((x, index) => <Card key={index} id={x.url} />)}
            </div>
        </div>

    )
}

export default Dogs;
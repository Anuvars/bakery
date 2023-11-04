import React from 'react'
import HomeCollectionItem from '../HomeCollectionItem/HomeCollectionItem'

const HomeCollection = () => {
    return (
        <div className="home-collection">
            <div className="page-container">
                <HomeCollectionItem
                    image='https://tse3.mm.bing.net/th?id=OIP.ZZu-f4URX-iQQ7NkuacNjgHaHH&pid=Api&P=0&h=180'
                    title='Cake  Collection!'
                    comment=' Offer 15% Off!'
                    reverse={false}
                />
                <HomeCollectionItem
                    image='https://i.pinimg.com/originals/9e/ef/72/9eef72908089a0a1a1d4a0ffe30b3238.jpg'
                    title='Modern Collection!'
                    comment='New Season Stock'
                    reverse={true}
                />
            </div>
        </div>
    )
}

export default HomeCollection
import { Container } from '@mui/material'
import React from 'react'
import NewsArticle from './NewsArticle'

const NewsArticleContent = ({data, loadMore, setLoadMore, totalResults}) => {

    return (
        <>
            <Container maxWidth="md">
                <div className="py-[40px] flex flex-col items-center justify-center">
                    <div className="bg-[#f44336] download py-2 px-8 flex items-center justify-between">
                        <p className=" text-white text-[14px] font-light">For the best experience use <span className="font-semibold">inshorts</span> app on your smartphone</p>
                        <div className="flex items-center">
                            <a href="https://itunes.apple.com/us/app/news-in-shorts/id892146527" target="_blank"><img className="w-[130px]" src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="" /></a>
                            <a href="https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source%3DNews%2520In%2520Shorts%2520Website" target="_blank"><img className="w-[130px]" src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="mt-[10px]">
                        {
                            data.map((item, index) =>{
                                // console.log(item.urlToImage);
                                return(
                                    <NewsArticle key={index} item={item} />
                                )
                            })
                        }
                    </div>
                    <div className="mt-[30px]">
                        {
                            loadMore <= totalResults && (
                                <>
                                    <button className="load-more px-[40px] py-2 bg-white text-[#44444d]" type="button" onClick={()=>setLoadMore((prev)=>prev+10)}>Load More</button>
                                </>
                            )
                        }
                </div>
                </div>
            </Container>
        </>
    )
}

export default NewsArticleContent

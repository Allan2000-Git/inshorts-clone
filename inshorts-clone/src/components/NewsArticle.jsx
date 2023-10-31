import React from 'react'

const NewsArticle = ({item}) => {
    const d = new Date(item.publishedAt);
    const date = d.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
    const hour = parseInt(date[4].substring(0, 2)); //
    const time = hour > 12 ? true : false;
    return (
        <>
            <div className="article p-2 flex justify-between gap-4 mt-[40px] sm:flex-row flex-col">
                <div className="sm:w-[35%] w-[100%]">
                    <img className=" sm:w-[350px] sm:h-[250px] rounded-md object-cover" src={item.urlToImage ? item.urlToImage : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} alt={item.title} />
                </div>
                <div className="sm:w-[65%] w-[100%] px-2 text-[#44444d] flex flex-col justify-between">
                    <div>
                        <h1 className="text-[#44444d] text-[18px] leading-[27px] font-light]">{item.title}</h1>
                        <p className="text-[12px] font-light"><span className="text-[14px] font-bold">short </span>by {item.author? item.author:"John Doe"} / {time
                        ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                        : `${hour}:${date[4].substring(3, 5)} am`} on {date[2]} {date[1]} {date[3]}, {date[0]}</p>
                        <p className="text-[14px] font-light mt-[10px]">{item.description ? item.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</p>
                    </div>
                    <div className="mt-[10px] text-[#44444d] text-[12px]">
                        <p className="font-light">read more at <a href={item.url}><span className="text-[#44444d] font-medium">{item.source.name}</span></a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsArticle

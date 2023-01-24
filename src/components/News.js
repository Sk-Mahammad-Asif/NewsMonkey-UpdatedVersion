import React, {  useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const  News = (props)=> {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0)


  const updateNews = async()=>{

    //console.log("CDM");
    //for set top loadbar progress App.js
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=415e94d2aa6245bebd5c64b4f185330e&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    //this.setState({loading: true});
    setLoading(true);
    props.setProgress(30);
    let parsedData = await data.json();
    //console.log(parsedData);
    setArticles(parsedData.articles);
    props.setProgress(50);
    setTotalResults(parsedData.articles);
    setLoading(parsedData.totalResults);
    props.setProgress(80);
    setLoading(false);
  //for set top loadbar progress App.js
    props.setProgress(100);
  }

  useEffect(()=> {
    updateNews();
  }, [])

  const fetchMoreData = async() => {
    //this.setState({page: this.state.page + 1});

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=415e94d2aa6245bebd5c64b4f185330e&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    setArticles(articles.concat (parsedData.articles));
    setTotalResults(parsedData.totalResults);
 };


   return (
     <>
       <h2 className="text-center" style={{margin: '35px 0px', marginTop:'90px'}}>NewsMonkey - Top Headline - {props.category.toUpperCase()}</h2>
       {loading && <Spinner/>}

       {/*Infinite Scroll link1 for package install- https://www.npmjs.com/package/react-infinite-scroll-component  link2 for code- https://codesandbox.io/s/yk7637p62z*/}

       <InfiniteScroll
           dataLength={articles.length}
           next={fetchMoreData}
           hasMore={articles.length !== totalResults}
           loader={<Spinner/>}
         >
         <div className="container">
         <div className="row my-3" >
         {articles.map((element)=> {
           return <div className="col-md-4" key={element.url}>
           <NewsItem  title={element.title ? element.title.slice(0, 20) : ""} description={element.description ? element.description.slice(0,40) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
         </div>
         })}
         </div>

         </div>
       </InfiniteScroll>
      
     </>
   )
 
}

export default News
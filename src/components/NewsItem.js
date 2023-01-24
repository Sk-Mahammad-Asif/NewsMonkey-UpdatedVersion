import React from 'react'

const NewsItem = (props)=> {

    let {title, description,imageUrl, newsUrl, author, date, source} = props;
    return (
      <div >
            <div className="card" >

             <div style={{dispaly: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}><span className="badge rounded-pill bg-danger"> {source}</span></div>

                <img src={imageUrl ? imageUrl : "https://techcrunch.com/wp-content/uploads/2022/11/genesis-x0sunset.jpeg?resize=1200,902"} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{title}  </h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()} </small></p>
                </div>
                <div className="card-body"> 
                <a href="/newsdetail/" className="card-link btn btn-primary">Card link</a>
                <a rel="noreferrer" href={newsUrl} className="card-link btn btn-success">Anotherlink</a>
                </div>
            </div>

      </div>
    )
  
}

export default NewsItem
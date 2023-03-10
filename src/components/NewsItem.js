// rce for class base components 

import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card my-2">
                    <span className='position-absolute top-10 translate-middle badge rounded-pill bg-danger' style={{left :'85%' , zIndex:'3'}}>{source}
                    </span>
                    <img src={!imageUrl ? "https://image.cnbcfm.com/api/v1/image/107122355-1663787647716-powell.jpg?v=1671019853&w=1920&h=1080" : imageUrl} style={{ height: "10rem", width: "100%" }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...
                        </h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>
                            By {!author ? "unknown" : author} <br /> {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

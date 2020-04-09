import React, { Component } from 'react'
import axios from 'axios'

class CatsList extends Component {
  constructor() {
    super();

    this.state = {
      cats: []
    }
  }

  async componentDidMount() {
    const axiosConf = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'x-api-key': process.env.CATS_API_KEY
      }
    }
    const res = await axios.get('https://api.thecatapi.com/v1/images/search?limit=30', axiosConf)
    console.table('cats: ', res.data);

    this.setState({
      cats: res.data
    })
  }

  render() {
    const { cats } = this.state

    return (
      <div className="masonry-cats">
        {cats.map(cat => {
          return (
            <div key={cat.id} className="cat-card">
              <img src={cat.url} alt="Some cat" loading="lazy" />
            </div>
          )
        }) }
      </div>
    ) 
  }
}

export default CatsList;
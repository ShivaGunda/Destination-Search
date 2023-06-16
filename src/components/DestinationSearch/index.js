// Write your code here
import {Component} from 'react'
import DestinationsItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchOut: ''}

  onChangeSearch = event => {
    this.setState({searchOut: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchOut} = this.state

    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchOut),
    )

    return (
      <div className="container">
        <div className="card">
          <h1 className="head"> Destination Search </h1>
          <div className="searchBar">
            <input
              type="search"
              id="searchLink"
              placeholder="Search"
              value={searchOut}
              onChange={this.onChangeSearch}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              htmlFor="searchLink"
              className="image"
            />
          </div>
        </div>
        <ul className="listItems">
          {searchResult.map(each => (
            <DestinationsItem item={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

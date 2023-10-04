import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const renderCategoryView = () => {
    const {categoryOptions} = props

    return categoryOptions.map(each => {
      const {onCategoryUpdate, categoryId} = props
      const onClickCategory = () => {
        onCategoryUpdate(each.categoryId)
      }
      const isActive = categoryId === each.categoryId
      const active = isActive ? 'active' : ''
      return (
        <li key={each.categoryId} className="each-option">
          <button type="button" className="button" onClick={onClickCategory}>
            <p className={active}>{each.name}</p>
          </button>
        </li>
      )
    })
  }

  const renderRatingView = () => {
    const {ratingsList, ratingId} = props

    return ratingsList.map(each => {
      const {onRatingUpdate} = props
      const onClickRating = () => {
        onRatingUpdate(each.ratingId)
      }
      const isActive = ratingId === each.ratingId
      const active = isActive ? 'active' : ''
      return (
        <li key={each.ratingId}>
          <button
            type="button"
            onClick={onClickRating}
            className="button each-list"
          >
            <img
              src={each.imageUrl}
              alt={`rating ${each.ratingId}`}
              className="rating-image"
            />
            <p className={active}>& up</p>
          </button>
        </li>
      )
    })
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onInputChange = event => {
    const {onChangeInput} = props
    onChangeInput(event.target.value)
  }

  const {onClearClick, searchInput} = props
  console.log(searchInput)

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          className="search"
          placeholder="search"
          value={searchInput}
          onChange={onInputChange}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch />
      </div>
      <h1 className="category-heading">Category</h1>
      <ul className="category-container">{renderCategoryView()}</ul>
      <p className="category-heading">Rating</p>
      <ul className="category-container">{renderRatingView()}</ul>
      <button type="button" className="clear-button" onClick={onClearClick}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup

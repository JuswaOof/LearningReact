import PropTypes from 'prop-types'

function List(props){

 const items = props.item;
 const category = props.category

 const listItems = items.map(items => <li>{items.name}: &nbsp; <b>{items.calories}</b></li>)

 return (
   <>
     <h3 className="listCategory">{category}</h3>
     <ol className="listItems">{listItems}</ol>
   </>
 )
}

 List.propTypes = {
  category: PropTypes.string,
  item: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                            name: PropTypes.string,
                                            calories: PropTypes.number}))
 }

 List.defaultProps = {
  item: '',
  category: 'Category',
 }

export default List
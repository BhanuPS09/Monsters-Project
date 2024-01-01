


const SearchBox = (props) => {
    return (<input placeholder={props.placeHolder} type="search" className={`search-box $({props.className})`} onChange={props.onChangeHandler} />);
}

export default SearchBox;
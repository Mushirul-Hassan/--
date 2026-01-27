function Card( { title, setSelected, selected }) {

    const isSelected = selected === title;

    return (
        <div className={isSelected ? "card selected" : "card"}>
        <h2>{ title }</h2>
        
        <button onClick={() => setSelected(title)}>
        {isSelected ? "Selected" : "Select"}
        </button>
                </div>
    );
}

export default Card;
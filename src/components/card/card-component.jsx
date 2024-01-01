


const MonsterCard = (props) => {



    const { monsters } = props;

    return (
        <div className="card-list" >

            {monsters.map((elements) => {
                return (
                    <div className="card-container " key={elements.id}>
                        <img alt={`monster ${elements.name}`} src={`https://robohash.org/${elements.id}?set=set2&size=180x180`} />
                        <h2>{elements.name}</h2>
                        <p>{elements.email}</p>
                    </div>);
            })}


        </div>

    );




}

export default MonsterCard;




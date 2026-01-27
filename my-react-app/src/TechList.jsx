import Card from "./Card";

function TechList({ techs, setSelected, selected}) {
    return (
        <div>
            {techs.map((tech => (
                <Card
                key ={tech.id}
                title={tech.title}
                setSelected={setSelected}
                selected={selected}
/>
            )))}
        </div>
    )
}

export default TechList;
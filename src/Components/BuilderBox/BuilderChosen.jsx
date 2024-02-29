
const BuilderChosen = ({ builder }) => { 
   const { firstname, lastname, pant_color, favorite_food, favorite_tool, pet, hobby } = builder;
    return (
        <>
            <section className="card">
                <h2>{firstname} {lastname}</h2>
                <p>Pant Color: {pant_color}</p>
                <p>Favorite Food: {favorite_food.join(", ")}</p>
                <p>Favorite Tool: {favorite_tool}</p>
                <p>Pet: {pet}</p>
                <p>Hobby: {hobby.join(", ")}</p>
            </section>
        </>
    )
}

export default BuilderChosen;

import { useState } from "react";
import BuilderChosen from "./BuilderChosen";

const BuilderPickPerson = ({ people }) => {
    const [chosenBuilder, setChosenBuilder] = useState(null);

    const handleSelect = (e) => {
        const selectedValue = e.target.value;
        const selectedPerson = people.find(builder => builder.firstname === selectedValue)
        setChosenBuilder(selectedPerson);        
    }
 
    return (
        <>
            <section className="builder">
                <label htmlFor="pickBuilder">Choose a builder:</label>
                <select name="builderName" onChange={handleSelect}>
                    <option value="" className="choose-builder">Choose a builder</option>
                    {people.map((person, index) => (
                        <option value={person.firstname} key={index}>
                            {person.firstname}
                            {person.lastname}
                        </option>
                    ))}
                </select>
                {chosenBuilder && 
                    <BuilderChosen builder={chosenBuilder}/>
                }
            </section>
        </>
    )
}

export default BuilderPickPerson;
const BuilderPickPerson = ({people}) => {
    return (
        <>
            <label htmlFor="pickBuilder">Choose a builder:</label>
            <select name="builderName">
                <option value="" className="choose-builder">Choose a builder</option>
                {people.map((person, index) => (
                    <option value="name" key={index}>{person.firstname}</option>
                ))}
            </select>
        </>
    )
}

export default BuilderPickPerson;
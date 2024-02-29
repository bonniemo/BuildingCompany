const BuilderAbout = ({company, story, pastProjects }) => {
    return (
        <>
        <section className="about">
           <h1>{company.name}</h1> 
           <h2>{company.home_town}</h2>

           <h3>Our Story</h3>
           <p>{story}</p>

           <h3>Past Projects:</h3>           
            {pastProjects.map((project, index) => (
                <li key={index}>
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                </li>
            ))}
           


        </section>
        </>
    )
}

export default BuilderAbout;
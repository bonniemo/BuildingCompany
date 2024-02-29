import BuilderAbout from "./BuilderAbout";
import data from './Builder.json';
import BuilderPickPerson from "./BuilderPickPerson";
import './Builder.css';

const BuilderBox = () => {
    return (
        <>
        <article className="builderBox">
            <BuilderAbout company={data.construction_company} story={data.backstory} pastProjects={data.past_projects}/>
            <BuilderPickPerson people={data.construction_workers}/>
        </article>
        </>
    )
}
export default BuilderBox;
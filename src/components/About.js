import blogData from "../data/blog";

function About () {
const {image, about } = blogData;

return (
<aside>
    
    <image
    src={image ? image : "https://via.placeholder.com/215"}
    alt= {'blogo logo'}
    />
    <p>{about}</p>
    </aside> 
    );
}

export default About;

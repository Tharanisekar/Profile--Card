import Proptypes from "prop-types";
const userData=[
    {
        name :"Tharani",
        city:"Canada",
        description:"Front-end Developer",
        skills:["HTML","CSS","Javascript","ReactJS","Frontend","Java","Springboots"],
        online:true,
        profile:"images.jpg"
    },
    {
        name :"Prithvi",
        city:"Newyork",
        description:"Senior Developer",
        skills:["python","SQL","Angular","Tailwind","backend","PHP","Springboots"],
        online:false,
        profile:"images 2.jpg"
    },
    {
        name :"Sara",
        city:"Germany",
        description:"Associate software Engineer",
        skills:["c++","Python","Mern-stack","ReactJS","Frontend","backend","Hiberante","fullstack",],
        online:false,
        profile:"images 3.avif"
    },
    
]
function User(props){
    return (
    <div className="card-container">
        <span className={props.online?"pro online" :"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile} className="img" height={150} width={150}/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
       
        <div className="skills">
        <h6>Skills</h6>
        <ul> {props.skills.map((skill,index)=> (
            <li key={index}>{skill}</li>
        ))} </ul>
    </div>
    </div>
    );
}
export const UserCard = () =>{
    return ( 
        <>
        {
        userData.map((user,index)=>(
            <User key={index} name={user.name}
            city={user.city}
            description={user.description}
            online={user.online}
            profile={user.profile}
            skills={user.skills}/>
        ))
        }
        </>
    
        // <User name="Tharani" city="Canada" description="Front-end Developer" 
        // skills={["HTML","CSS","Javascript","ReactJS","Frontend","Java","Springboots"]} 
        // online={true} profile="images.jpg"/>
        
    )
}
User.Proptypes = {
    name:Proptypes.string.isRequired,
    citt:Proptypes.string.isRequired,
    description:Proptypes.string.isRequired,
    skills:Proptypes.arrayOf(Proptypes.string).isRequired,
    online: Proptypes.bool.isRequired,
    profile:Proptypes.string.isRequired
}
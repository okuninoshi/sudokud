import React from 'react'
import styled from 'styled-components'

const tools = [ {name: "Reactjs", color:"#61dafb", imgUrl:"techs-React.svg"},
{name: "Vuejs", color:"#42b983", imgUrl:"techs-Vue.svg"},
{name: "Gatsbyjs", color:"#663399", imgUrl:"techs-Gatsby.svg"},
{name: "Netlify", color:"#15847d", imgUrl:"techs-Netlify.svg"},
{name: "Inkscape", color:"#c9fa4b", imgUrl:"techs-Inkscape.svg"},
{name: "Nuxtjs", color:"#2ec58d", imgUrl:"techs-Nuxt.svg"},
{name: "Strapi", color:"#9179ff", imgUrl:"techs-Strapi.svg"},
{name: "Graphql", color:"#e00097", imgUrl:"techs-Graphql.svg"},]

const TechSlideshow = styled.div`
height: 25vh;
width: 110vw;
margin-left: -10vw;
position: relative;
overflow: hidden;
display: flex;
align-items: center;
& .mover-1 {
    animation: moveSlideshow 25s linear infinite;
    display: flex;
    .tool{
        margin: 0 5vw;
    }
}
& .mover-2 {
    animation: moveSlideshow 25s linear infinite;
    display: flex;
    .tool{
        margin: 0 5vw;
    }
}


@keyframes moveSlideshow {
  100% { 
    transform: translateX(-100%);  
  }
}
`

const Techs = () => {
    return (
        <TechSlideshow >
            <span className="mover-1">
                {tools.map(({name, imgUrl} ,id) => {
                    return(
                    <span key={id} className="tool">
                        <img src={`/images/techs/${imgUrl}`} alt={name} />
                    </span>
                    )})
                }
            </span>
            <span className="mover-2">
                {tools.map(({name, imgUrl} ,id) => {
                    return(
                    <span key={id} className="tool">
                        <img src={`/images/techs/${imgUrl}`} alt={name} />
                    </span>
                    )})
                }
            </span>
        </TechSlideshow>
    )
}
export default Techs
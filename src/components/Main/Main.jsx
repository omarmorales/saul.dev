import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Hero from "../Hero/Hero";
import { 
    Switch,
    Route
} from "react-router-dom";
import Articles from "../Articles/Articles";

export default function Main() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact>
                    <Hero />
                    <p>Hello world! I'm Omar Morales</p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet modi natus, expedita corrupti voluptatum quibusdam nobis, quas culpa omnis pariatur nisi, eum dolorem temporibus? Aut, debitis magnam? Asperiores, laudantium itaque.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti harum enim rem excepturi maiores dolores fugit. Sunt illum maiores, unde, sed adipisci cum rem deleniti consequuntur quo quis vel et.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores assumenda illo facere impedit necessitatibus esse quia dolorem veritatis enim illum magni, culpa laborum maiores iste sed temporibus dolore delectus laudantium?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ad assumenda vel non dolores modi officiis placeat fugit quisquam autem totam voluptate quidem nulla porro, ut est atque aspernatur dignissimos?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit facilis itaque id molestiae, atque, totam nobis quam consectetur deserunt aut maiores quis officia vero vitae, sint vel nulla sapiente magnam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quod, numquam placeat rerum ducimus beatae dolore facere aut nihil praesentium! Illo architecto perspiciatis repellendus esse amet debitis? Mollitia, sapiente laborum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente libero quos doloribus quia in assumenda ad repudiandae nulla sit, sint at ut velit pariatur voluptate amet atque. Cupiditate, obcaecati?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quibusdam error modi totam consequatur omnis nam officiis consectetur adipisci quasi, neque, reiciendis in distinctio magnam cumque quia maiores eveniet libero?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam incidunt ipsa libero dolor illo veniam, ratione veritatis corrupti provident aut atque quod. Nulla beatae veniam ab suscipit earum aperiam sequi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum aliquid sunt natus aspernatur, molestias ducimus, asperiores fugiat magnam veniam ex ea ab. Ipsa vero at sit eligendi suscipit iusto.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maxime reprehenderit excepturi debitis omnis ex laborum veritatis eaque. Praesentium, obcaecati id! Expedita soluta voluptas, architecto molestias cum quidem assumenda mollitia!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, beatae a quos voluptatibus ipsum, dolor consectetur quo nesciunt modi, quam impedit saepe vitae porro sapiente. Cumque numquam accusamus odit asperiores.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nesciunt odit nostrum cum illo dolorem modi ipsam, omnis et doloribus error officia aperiam eum quae voluptatum cupiditate quaerat quis corrupti.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni consectetur tenetur molestiae. Distinctio voluptatum voluptas aliquam id similique debitis libero aut, voluptatibus laborum totam corrupti a ratione officia tempora possimus. 
                </Route>
                <Route path="/articles">
                    <Articles />
                </Route>
            </Switch>
        </React.Fragment>
    )
}

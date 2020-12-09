import express from 'express'; 
import {controller} from '../controller/controller'; 

const app = express()

app.use(controller); 
const PORT : string|number = process.env.PORT || 5000; 

/*app.use("*",(req, res) =>{
    res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});*/

app.listen(PORT,() => console.log(`hosting @${PORT}`));

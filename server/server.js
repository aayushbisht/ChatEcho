import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';//wrappers

dotenv.config();//to be able to use dotenv variables
console.log(process.env.OPENAI_API_KEY); 
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
}); 

const openai = new OpenAIApi(configuration);//import openai
const app = express();
app.use(cors());//allow our server to be called from frontend
app.use(express.json())//allow us to pass json from frontend to backend

app.get('/',async(req,res)=>{
    res.status(200).send({
        message: 'hello from chatEcho',
    })
});//cannot really receive more data from frontend

app.post('/',async(req,res)=>{
    try{
        const prompt = req.body.prompt;

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 3000,//length of repsonse
            top_p: 1,
            frequency_penalty: 0.5,//not reapeat similar sentences if high value
            presence_penalty: 0,

        });
        res.status(200).send({
            bot : response.data.choices[0].text
        })
    } catch(error){
        console.error(error);
        res.status(500).send({error})
    }
})
//make sure server listen to requests
app.listen(5000,()=>console.log('Server running on port http://localhost:5000'));



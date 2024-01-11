import  express  from "express"
import mongoose,{Schema} from "mongoose"
import cors  from "cors"
const app = express()
const port = 3100
app.use(express.json())
app.use(cors())
const BlogSchema =new Schema({
    image:String,
    name:String,
    title:String
})
const BlogModel=mongoose.model("BlogSalrm",BlogSchema)
app.get('/', async (req, res) => {
    try{
        const data = await BlogModel.find({})
        res.send(data)
    }catch(error){
        res.send(error.mesagge)
    }
})
app.get('/:id', async (req, res) => {
    try{
        const{id}=req.params
        const data = await BlogModel.findById({id})
        res.send(data)
    }catch(error){
        res.send(error.mesagge)
    }
})
app.post('/', async (req, res) => {
    try{
        const{name,title,image}=req.body
        const data = new BlogModel({name,title,image})
        data.save()
        res.send(data)
    }catch(error){
        res.send(error.mesagge)
    }
})
app.delete('/:id', async (req, res) => {
    try{
        const{id}=req.params
        const data = await BlogModel.findByIdAndDelete({id})
        res.send(data)
    }catch(error){
        res.send(error.mesagge)
    }
})
mongoose.connect("mongodb+srv://mi829361s:1mz01mz0@salayev.kgfgf1t.mongodb.net/").then(()=>console.log("cnnet"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=> {
    res.send('hello from my node and express world')
});


const users =[
    {id: 0, name: 'Shabana', email: 'shabana@gmail.com', phone: '01748574569'},
    {id: 1, name: 'Shabana', email: 'shabana@gmail.com', phone: '01748574569'},
    {id: 2, name: 'Shabnur', email: 'shabnur@gmail.com', phone: '01748574569'},
    {id: 3, name: 'Sonia', email: 'sonia@gmail.com', phone: '01748574569'},
    {id: 4, name: 'Shuchorita', email: 'shuchorita@gmail.com', phone: '01748574569'},
    {id: 5, name: 'Srabonti', email: 'srabonti@gmail.com', phone: '01748574569'},

]

app.get('/users',(req, res)=>{
    //Using Query
    const search = req.query.search;
    if(search){
    const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult);
    }

    else{

    }

    res.send(users);
});


//app methode
app.post('/users',(req, res)=>{
    const newUser = req.body;
    newUser.id= users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)

})

//dynamic API Using 
app.get ('/users/:id',(req, res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res)=>{
    res.send(['mango', 'banana', 'orange','strawberry']);
})

app.get('/fruits/mangoes/fazli', (req, res)=>{
    res.send('faltu amm eta');
})


app.listen(port,()=>{
    console.log('listenign to port', port);
});
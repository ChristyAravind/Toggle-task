import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./App.css";

export default function App() {

  const INITIAL_MOVIE_LIST =[
  {
      name:" Shawshank Redemption",
      star:" Tim Robbins, Morgan Freeman, Bob Gunton",
      dir:" Frank Darabont",
      summary:" Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      rating:" 9.3",
      img:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name:" The Dark Knight",
      star:" Christian Bale, Heath Ledger, Aaron Eckhart",
      dir:" Christopher Nolan",
      summary:" When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rating:" 9.0",
      img:"https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name:" Inception",
      star:" Leonardo DiCaprio ,Joseph Gordon-Levitt, Elliot Page",
      dir:" Christopher Nolan",
      summary:" A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      rating:" 8.8",
      img:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      name:" Forrest Gump",
      star:" Tom Hanks, Robin Wright, Gary Sinise",
      dir:" Robert Zemeckis",
      summary:" The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      rating:" 8.7",
      img:"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" 
    },
    {
      name:" The Departed",
      star:" Leonardo DiCaprio ,Matt Damon, Jack Nicholson",
      dir:" Martin Scorsese",
      summary:" An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
      rating:" 8.5",
      img:"https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_FMjpg_UX1000_.jpg"
    },
    {
      name:" The Green Mile",
      star:" Tom Hanks ,Michael Clarke Duncan, David Morse",
      dir:" Frank Darabont",
      summary:" The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
      rating:" 8.5",
      img:"https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg"
    }
]
const [movielist,setMovielist]=useState(INITIAL_MOVIE_LIST);

  const[mname,setmname]=useState("");

  const[sname,setsname]=useState("");

  const[dname,setdname]=useState("");

  const[sum,setsum]=useState("");

  const[rate,setrate]=useState("");

  const[pic,setpic]=useState("");



  return (

    <div className="App">
        <div className="nmovie">

          <h1 className="asd">MovieBox Pro</h1>
          <h2 className="asd">Add Your Favourite Movies</h2>
            
             <TextField  label="Movie Name"variant="outlined" color="warning" margin="dense"
            onChange={(event)=>setmname(event.target.value)}
            
              />
              <TextField  label="Stars Name" variant="outlined" color="warning" margin="dense" 
            onChange={(event)=>setsname(event.target.value)}
            
              />
              <TextField  label="Director Name"variant="outlined" color="warning" margin="dense" 
            onChange={(event)=>setdname(event.target.value)}
      
              />
              <TextField  label="Summary"variant="outlined" color="warning" margin="dense" 
            onChange={(event)=>setsum(event.target.value)}
      
              />
              <TextField  label="Rating"variant="outlined" color="warning" margin="dense" 
            onChange={(event)=>setrate(event.target.value)}
      
              />
              <TextField  label="Poster" variant="outlined" color="warning" margin="dense" 
            onChange={(event)=>setpic(event.target.value)}
           
              />
              
              <Button variant="contained" margin="dense" color="success" onClick={()=>{
              
                const newmovie=
                {
                  name:mname,
                  star:sname,
                  dir:dname,
                  summary:sum,
                  rating:rate,
                  img:pic
                };

                setMovielist([...movielist,newmovie])

              }}
              
              >Add Movie
              </Button>
              </div>
      <div className="fmain">
      {movielist.map((h)=>
        <Azure name={h.name} star={h.star} dir={h.dir} summary={h.summary} rating={h.rating} img={h.img}/>
        )}
        </div>
    </div>
  );
}

function Azure({ name,img,rating,summary,dir,star,}) {
  const [show, setShow] = useState(false);
  const[like,setlike]=useState(0);
  const[dislike,setdislike]=useState(0);
  
  return (
    <div className="main">
      <img src={img} class="cr7" alt="movie poster" />
      <h2 >Movie : {name}</h2>
      <h2 >Director : {dir}</h2>
      <h2>⭐{rating}</h2>

        <div>
        <Button variant="contained" onClick={() => setShow((s) => !s)}>Summary Details</Button>
        <div className="summ" style={{ display: show ? "block" : "none" }}>{summary}</div>
        </div>
      <h2 className="star">Stars :{star}</h2>
      <div>
      <Button className="click"   variant="contained" onClick={()=>setlike(like+1)}>❤️{like}</Button>
      <Button className="click"   variant="contained" onClick={()=>setdislike(dislike+1)}>💔{dislike}</Button>
      </div>

    </div>
  
  );
}


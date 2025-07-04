import { Link} from "react-router-dom";
import Button from "../components/Buttons/Button";
import { useEffect, useState } from "react";


function Home(){

    const [word, setWord] = useState('');
    const [hint, setHint] = useState('');

    async function fetchWords(){
        const response  = await fetch('http://localhost:3000/words');
       //  console.log(response);
        const data = await response.json();
        // console.log(data);

        const randomIndex = Math.floor(Math.random() * data.length);

        console.log(data[randomIndex]);
        setWord(data[randomIndex].wordValue);
        setHint(data[randomIndex].wordHint);
    }

    useEffect(()=>{
        fetchWords()

    },[]);


    

    return(
        <>

            <div>
                <Link to='/play' state={{wordSelected : word, hintWord : hint.toUpperCase()}}>
                    <Button
                        text = "Single Player"
                    />
                </Link>
                <br />
                <Link  to='/start'>
                    <div className="mt - 4">
                        <Button text = "Multi Player" />
                    </div>
                </Link>
            </div>
        </>
    )

}

export default Home;
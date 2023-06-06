import {useState} from "react";

function EvenOdd()
{

	const [num, setNum] = useState("");
	const [ans, setAns] = useState("");

	const hNum = (event) => {setNum(event.target.value);}

	const find = (event) => {
		event.preventDefault();
		let n = parseInt(num);
		let r = n % 2 == 0?"even":"odd";
		setAns("res = " + r);
	}
	return(
		<>
		<center>
		<h1> Even Odd App </h1>
		<form onSubmit={find}>
		<input type ="number" placeholder="enter integer" onChange={hNum}/>
		<br/><br/>
		<input type ="submit" value="Find EvenOdd"/>
		</form>
		<h1>{ans}</h1>
		</center>
		</>
	);

}

export default EvenOdd;
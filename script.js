function insert_Row() {
    //Write your code here
  const table = document.getElementById("sampleTable")
	const newrow = table.insertRow(0);
	const cell1 = newrow.insertCell(0)
	const cell2 = newrow.insertCell(1)
	cell1.innerText = "New Cell1"
	cell2.innerText = "New Cell2"
	
	
  
}

function saveTask() {
    const descripcion = document.getElementById("descripcion").value;
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    let task = {
        "id": 1,
        "description": descripcion,
        "responsible": {"name": nombre, "email": email},
        "status": "ready",
        "dueDate": new Date(2020,10,4).toString()
    };
    axios.post('https://ietiapp.azurewebsites.net/api/add-task?code=COrAAMHZlkU6QVE6XQRGXSzZ5/4v86FEwFpqYCL7/KMlBAcuhASiog==', task);
}

function getTask(){
    const task = axios.get('https://ietiapp.azurewebsites.net/api/add-task?code=COrAAMHZlkU6QVE6XQRGXSzZ5/4v86FEwFpqYCL7/KMlBAcuhASiog==')
        .then(task => {
            let solution = "";
            for(let x = 0; x < task.data.response.length; x++){
                solution = solution + task.data.response[x].id + "<br/>";
                solution = solution + task.data.response[x].description + "<br/>";
                solution = solution + task.data.response[x].responsible.name + "<br/>";
                solution = solution + task.data.response[x].responsible.email + "<br/>";
                solution = solution + task.data.response[x].status + "<br/>";
                solution = solution + task.data.response[x].dueDate + "<br/>";
                solution = solution + "<br/>";
                solution = solution + "<br/>";
                solution = solution + "<br/>";
            }

            document.getElementById("list").innerHTML = solution;
    });
}
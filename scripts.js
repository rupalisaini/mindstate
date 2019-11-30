$(document).ready(() => {
    console.log("hi");
    //predefined color choices for each mood
    //colors = ["lightcoral", "greenyellow", "deepskyblue", "gold"]

    //create year table with rows and cells appended with corresponding colors
    /**$table = $("#year-table");
    let id = 0;
    for(let i = 0; i < 18; i++){
        row = $("<div class='year-row'></div>");
        for(let j = 0; j < 20; j++){
            cell = $("<div id='" + id + "' class='year-cell'></div>");
            //assign random color for now
            cell.css("background-color", colors[Math.floor(Math.random()*4)]);
            row.append(cell);
            id++;
        }
        $table.append(row);
    }
    //the final unfinished row
    row = $("<div class='year-row'></div>");
    for(let j = 0; j < 5; j++){
        cell = $("<div id='" + id + "' class='year-cell'></div>");
        cell.css("background-color", colors[Math.floor(Math.random()*4)]);
        row.append(cell);
        id++;
    }
    $table.append(row);**/
    $('#root').on('click', '#sign-up', newAccount);
    $('#root').on('click', '#log-in', logIn);
});

const pubRoot = new axios.create({
    baseURL: "http://localhost:3000/account"
});

async function newAccount(){
    event.preventDefault();
    let username = $('#username-sign-up').val();
    let password = $('#password-sign-up').val();
    let name = $('#name-sign-up').val();

    let r = axios.post('http://localhost:3000/account/create',
    {
        name: username,
        pass: password,
        data: {
        other: name,
        }
    });

    r.then(response => {
    console.log(response.data);
    }).catch(error => {
    console.log(error);
    });
}

async function logIn(){
    event.preventDefault();
    let username = $('#username-log-in').val();
    let password = $('#password-log-in').val();
    let r = axios.post('http://localhost:3000/account/login',
    {
        name: username,
        pass: password
    });

    r.then(response => {
    console.log(response.data);
    }).catch(error => {
    console.log(error);
    });
}

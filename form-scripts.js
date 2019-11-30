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
            cell.css("background-color", colors[Math.floor(Math.random()*4)]);
            row.append(cell);
            id++;
        }
        $table.append(row);
    }
    row = $("<div class='year-row'></div>");
    for(let j = 0; j < 5; j++){
        cell = $("<div id='" + id + "' class='year-cell'></div>");
        cell.css("background-color", colors[Math.floor(Math.random()*4)]);
        row.append(cell);
        id++;
    }
    $table.append(row);**/
    $('#root').on('click', '#sign-up', newAccount);
});

//function newAccount(){
//    console.log("hello");
//}

const pubRoot = new axios.create({
    baseURL: "http://localhost:3000/account"
});

export async function newAccount(){
    let username = $('#username-sign-up').val();
    let password = $('#password-sign-up').val();
    let name = $('#name-sign-up').val();
    const result = await pubRoot.post(`/create/`, {
        "name": username,
        "pass": password,
        "data": {
            "role": 2,
            "description": name
        }
    });
    return result;
}

sampleArr = [{date: new Date(01/01/2019), how: 2, about: "hi"}, 
            {date: new Date(01/2/2019), how: 3, about: "hi"}, 
            {date: new Date(01/4/2019), how: 4, about: "hi"}, 
            {date: new Date(01/05/2019), how: 5, about: "hi"}, 
            {date: new Date(01/06/2019), how: 1, about: "hi"}, 
            {date: new Date(01/10/2019), how: 3, about: "hi"}, 
            {date: new Date(01/11/2019), how: 5, about: "hi"}, 
            {date: new Date(01/14/2019), how: 2, about: "hi"}, 
            {date: new Date(01/18/2019), how: 3, about: "hi"}, 
            {date: new Date(01/20/2019), how: 1, about: "hi"}, 
            {date: new Date(01/21/2019), how: 5, about: "hi"}, 
            {date: new Date(01/22/2019), how: 4, about: "hi"}, 
            {date: new Date(01/23/2019), how: 4, about: "hi"}, 
            {date: new Date(01/25/2019), how: 3, about: "hi"}, 
            {date: new Date(01/26/2019), how: 3, about: "hi"}, 
            {date: new Date(01/27/2019), how: 2, about: "hi"}, 
            {date: new Date(01/28/2019), how: 1, about: "hi"}, 
            {date: new Date(01/29/2019), how: 2, about: "hi"}, 
            {date: new Date(01/30/2019), how: 3, about: "hi"}, 
            {date: new Date(01/31/2019), how: 4, about: "hi"}, 
            {date: new Date(02/01/2019), how: 2, about: "hi"}, 
            {date: new Date(02/12/2019), how: 3, about: "hi"}, 
            {date: new Date(02/14/2019), how: 1, about: "hi"}, 
            {date: new Date(02/18/2019), how: 5, about: "hi"}]

$(document).ready(() => {
    console.log("hi");
    //clear();
    
    $('#root').on('click', '#sign-up', newAccount);
    $('#root').on('click', '#log-in', logIn);
    $('#root').on('click', '#log-day', logDay);
    fillUserHistoryLog();

    var ctx = $('#myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
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

logIn = async function(event){
    event.preventDefault();
    let username = $('#username-log-in').val();
    let password = $('#password-log-in').val();
    let jwt;

    let r = axios.post('http://localhost:3000/account/login',
    {
        name: username,
        pass: password
    });

    r.then(response => {
        jwt = response.data.jwt;
        localStorage.setItem('jwt', jwt);
        localStorage.setItem('user', response.data.name)
        console.log(response.data);
        let b = axios.get('http://localhost:3000/user',
        {
            headers: { "Authorization": "Bearer " + jwt }
        });

        b.then(response => {
            console.log(response.data);
            if(!response.data.result.includes("logs")){
                let a = axios.post('http://localhost:3000/user/logs',
                {
                    data: {
                        logs: []
                    }
                },
                {
                    headers: { "Authorization": "Bearer " + jwt }
                });

                a.then(result => {
                    console.log(result.data);
                }).catch(err => {
                    console.log(err);
                });
            }
        }).catch(error => {
            console.log(error);
        });
    }).catch(error => {
        console.log(error);
    });
}

logDay = async function(event){
    event.preventDefault();
    let date = $('#log-date').val();
    let how = $('#how-was-it').val();
    let about = $('#about').val();

    let currentLog = {
        date: new Date(date),
        how: how,
        about: about
    }

    let r = axios.post('http://localhost:3000/public/logs',
    {
        'data': {
            date: date,
            how: how
        }
    });

    r.then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });

    let jwt = localStorage.getItem('jwt');
    let pastLogs;

    let b = axios.get('http://localhost:3000/user/logs',
    {
        headers: { "Authorization": "Bearer " + jwt }
    });

    b.then(response => {
        console.log(response);
        console.log(response.data.result);
        if(!Array.isArray(response.data.result.logs)){
            pastLogs = [currentLog];
        } else {
            pastLogs = response.data.result.logs;
            pastLogs.push(currentLog);
            pastLogs.sort(compare);
        }
        console.log(pastLogs);

        let a = axios.post('http://localhost:3000/user/logs',
        {
            data: {
                logs: pastLogs
            }
        },
        {
            headers: { "Authorization": "Bearer " + jwt }
        });

        a.then(result => {
            console.log(result.data);
        }).catch(err => {
            console.log(err);
        });
    }).catch(error => {
        console.log(error);
    });
}

async function clear(){
    let jwt = localStorage.getItem('jwt');
    let r = axios.delete('http://localhost:3000/user',
    {
        headers: { "Authorization": "Bearer " + jwt }
    });

    r.then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });
}

function compare(a, b) {
    const dateA = a.date;
    const dateB = b.date;
    let comparison = 0;
    if (dateA > dateB) {
      comparison = -1;
    } else if (dateA < dateB) {
      comparison = 1;
    }
    return comparison;
}

function fillUserHistoryLog(){
    $root = $("#progress");

    //predefined color choices for each mood
    colors = ["#00ABB7", "#73C38F", "#FCCE00", "#F29A4D", "#E66641"]

    //create year table with rows and cells appended with corresponding colors
    $table = $("#progress");
    let id = 0;
    let i;

    for(i = 0; i < sampleArr.length; i+=4){
        row = $("<div class='progress-row'></div>");
        for(let j = i; j < i+4; j++){
            cell = $("<div id='" + id + "' class='progress-cell'></div>");
            cell.css("background-color", colors[sampleArr[j].how - 1]);
            row.append(cell);
            id++;
        }
        $table.append(row);
    }
    //the final unfinished row
    if(sampleArr.length%4 != 0){
        row = $("<div class='progress-row'></div>");
        for(let j = i; j < sampleArr.length; j++){
            cell = $("<div id='" + id + "' class='yeprogressar-cell'></div>");
            cell.css("background-color", colors[Math.floor(Math.random()*4)]);
            row.append(cell);
            id++;
        }
        $table.append(row);
    }
}
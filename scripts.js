google.load("visualization", "1", {packages:["corechart"]});
google.charts.load('current', {'packages':['corechart', 'line']});
google.charts.setOnLoadCallback(makeUserChart1);

Date.prototype.dmyy = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
  
    return (mm + "/" + dd + "/" + this.getFullYear());
};

//google.load('visualization', '1', { packages: ['corechart', 'controls'] });
sampleArr = [{date: new Date(2019,1,1), how: 2, about: "hi"}, 
            {date: new Date(2019,1,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,1,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,1,9), how: 5, about: "hi"}, 
            {date: new Date(2019,1,10), how: 2, about: "hi"}, 
            {date: new Date(2019,1,11), how: 3, about: "hi"}, 
            {date: new Date(2019,1,12), how: 1, about: "hi"}, 
            {date: new Date(2019,1,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,1,18), how: 2, about: "hi"}, 
            {date: new Date(2019,1,19), how: 1, about: "hi"}, 
            {date: new Date(2019,1,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,1,22), how: 4, about: "hi"}, 
            {date: new Date(2019,1,23), how: 2, about: "hi"}, 
            {date: new Date(2019,1,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}]

$(document).ready(() => {
    console.log("hi");
    //clear();
    
    $('#root').on('click', '#sign-up', newAccount);
    $('#root').on('click', '#log-in', logIn);
    $('#root').on('click', '#log-day', logDay);
    fillUserHistoryLog();
    makeUserChart1();
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

    for(i = 0; i+4 < sampleArr.length; i+=4){
        row = $("<div class='progress-row'></div>");
        for(let j = i; j < i+4; j++){
            cell = $("<div id='" + id + "' class='progress-cell'></div>");
            cell.css("background-color", colors[sampleArr[j].how - 1]);
            cell.html(sampleArr[j].date.dmyy());
            row.append(cell);
            id++;
        }
        $table.append(row);
    }
    console.log(i)
    //the final unfinished row
    if(!(i >= sampleArr.length)){
        row = $("<div class='progress-row'></div>");
        for(let j = i; j < sampleArr.length; j++){
            cell = $("<div id='" + id + "' class='progress-cell'></div>");
            cell.css("background-color", colors[sampleArr[j].how - 1]);
            cell.html(sampleArr[j].date.dmyy());
            row.append(cell);
            id++;
        }
        $table.append(row);
    }
}

function mapDateAndMood(a){
    return [a.date, a.how];
}

function makeUserChart1() {
    console.log(sampleArr)
    sampleDateAndMood = sampleArr.map(mapDateAndMood);
    console.log(sampleDateAndMood);

    // Create the data table.
    var data = new google.visualization.DataTable(sampleDateAndMood);
    data.addColumn('date', 'Date');
    data.addColumn('number', 'Mood');
    data.addRows(sampleDateAndMood);

    console.log(data);
  
    // Set chart options
    var options = {
        curveType: 'function',
        legend: { 
            position: 'bottom',
            textStyle: {
                color: '#FFFFFF',
                fontName: "Helvetica Neue",
            },
        },
        height: 250,
        width: 650,
        colors: ['#FFFFFF'],
        lineWidth: 1,
        vAxis: {
            gridlines: {
                color: '#FFFFFF'
            },
            format: '0',
            textStyle:{color: '#FFFFFF', fontName: "Helvetica Neue",},
            viewWindow:{
                max:6,
                min:0
            }
        },
        hAxis: {
            format: 'M/d/yy',
            gridlines: {
                color: 'transparent'
            },
            textStyle:{color: '#FFFFFF', fontName: "Helvetica Neue",},
            baselineColor: '#FFFFFF'
        },
        baselineColor: '#FFFFFF',
        chartArea: {
            width: '80%', 
            height: '60%'
        },
        backgroundColor: { fill:'transparent' },
    };
  
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
  }
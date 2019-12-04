Date.prototype.dmyy = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
  
    return (mm + "/" + dd + "/" + this.getFullYear());
};

Date.prototype.dm = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
  
    return (mm + "/" + dd);
};

//google.load('visualization', '1', { packages: ['corechart', 'controls'] });
sampleArr = [{date: new Date(2019,1,1), how: 2, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}]

sampleArrWorld = [{date: new Date(2019,1,1), how: 2, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}, 
            {date: new Date(2019,6,2), how: 3, about: "hi"}, 
            {date: new Date(2019,1,4), how: 4, about: "hi"}, 
            {date: new Date(2019,1,6), how: 5, about: "hi"}, 
            {date: new Date(2019,10,7), how: 1, about: "hi"}, 
            {date: new Date(2019,1,8), how: 3, about: "hi"}, 
            {date: new Date(2019,3,9), how: 5, about: "hi"}, 
            {date: new Date(2019,3,10), how: 2, about: "hi"}, 
            {date: new Date(2019,3,11), how: 3, about: "hi"}, 
            {date: new Date(2019,3,12), how: 1, about: "hi"}, 
            {date: new Date(2019,11,13), how: 5, about: "hi"}, 
            {date: new Date(2019,1,14), how: 4, about: "hi"}, 
            {date: new Date(2019,1,15), how: 4, about: "hi"}, 
            {date: new Date(2019,1,16), how: 3, about: "hi"}, 
            {date: new Date(2019,1,17), how: 3, about: "hi"}, 
            {date: new Date(2019,8,18), how: 2, about: "hi"}, 
            {date: new Date(2019,8,19), how: 1, about: "hi"}, 
            {date: new Date(2019,8,20), how: 2, about: "hi"}, 
            {date: new Date(2019,1,21), how: 3, about: "hi"}, 
            {date: new Date(2019,9,22), how: 4, about: "hi"}, 
            {date: new Date(2019,9,23), how: 2, about: "hi"}, 
            {date: new Date(2019,9,24), how: 3, about: "hi"}, 
            {date: new Date(2019,1,25), how: 1, about: "hi"}, 
            {date: new Date(2019,1,26), how: 5, about: "hi"},
            {date: new Date(2019,1,27), how: 1, about: "hi"}, 
            {date: new Date(2019,1,28), how: 1, about: "hi"}]  

$(document).ready(() => {
    console.log("hi");
    //clear();
    renderNavBar();
    
    $('#root').on('click', '#sign-up', newAccount);
    $('#root').on('click', '#log-in', logIn);
    $('#root').on('click', '#log-day', logDay);
    $('#root').on('click', '#log-out', logOut);

    if(window.location.href == "http://localhost:3001/you.html"){
        google.charts.load('current', {'packages':['corechart', 'line', 'calendar']});
        google.charts.setOnLoadCallback(drawUserCharts);    
        fillUserHistoryLog();
    }
    fillWorldHistoryLog();
});

function renderNavBar(){
    let navbar = $(`<div class="navbar-brand">
                    <h1 class="navbar-item">
                        <strong>Mind Rewind</strong>
                    </h1>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                    <a class="navbar-item" href="world.html">
                        The World
                    </a>

                    <a id="you-link" class="navbar-item" href="log-in-form.html">
                        You
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        More
                        </a>

                        <div class="navbar-dropdown">
                        <a class="navbar-item">
                            About
                        </a>
                        </div>
                    </div>
                    </div>

                    <div class="navbar-end">
                    <div id="end-buttons" class="navbar-item">
                        
                    </div>
                    </div>
                </div>`);
    
    $('#navbar').append(navbar);
    let button = $(`<div class="buttons">
                    <a class="button is-primary" href="sign-up-form.html">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light" href="log-in-form.html">
                        Log in
                    </a>
                    </div>`);
    
    let jwt = localStorage.getItem('jwt');
    if(jwt != undefined){
        button = $(`<div id="log-out" class="buttons">
                    <a class="button is-light" href="log-in-form.html">
                        Log out
                    </a>
                    </div>`);
        $('#you-link').attr("href", "you.html");
    }
    $('#end-buttons').append(button);
}

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
        let c = axios.post('http://localhost:3000/account/login',
        {
            name: username,
            pass: password
        });
    
        c.then(response => {
            console.log("in")
             let jwt = response.data.jwt;
             localStorage.setItem('jwt', jwt);
             localStorage.setItem('user', response.data.name);
             window.location.href = "you.html";
        }).catch(error => {
            console.log(error);  
        })
    }).catch(error => {
        console.log(error);
    });
}

async function test(){
    let jwt = localStorage.getItem('jwt');
    let a = axios.post('http://localhost:3000/user/logs',
    {
        data: [],
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
        window.location.href = "you.html";
    }).catch(error => {
        console.log(error);
        $('#username-log-in').addClass("is-danger");
        $('#password-log-in').addClass("is-danger");
        let a = $('<p class="help is-danger">This username and password combination is invalid</p>');
        $('#password-field').append(a);     
    });
}

logOut = function(event){
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
}

logDay = async function(event){
    event.preventDefault();
    let date = $('#log-date').val().split("/");
    let dateF = new Date(+date[2], date[1] - 1, +date[0]);
    let how = $('#how-was-it').val();
    let about = $('#about').val();

    let currentLog = {
        date: dateF,
        how: how,
        about: about
    }

    let r = axios.post('http://localhost:3000/public/logs',
    {
        'data': {
            date: dateF,
            how: how
        }
    });

    r.then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });

    let jwt = localStorage.getItem('jwt');

    let a = axios.post('http://localhost:3000/user/logs',
    {
        data: [currentLog],
        'type': 'merge'
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
    colors = ["#E66641", "#F29A4D", "#FCCE00", "#73C38F", "#00ABB7"];

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

function fillWorldHistoryLog(){
    //predefined color choices for each mood
    colors = ["#E66641", "#F29A4D", "#FCCE00", "#73C38F", "#00ABB7"];

    //create year table with rows and cells appended with corresponding colors
    $table = $("#progress-world");
    let id = 0;
    let i;

    for(i = 0; i+15 < sampleArrWorld.length; i+=15){
        row = $("<div class='progress-row'></div>");
        for(let j = i; j < i+15; j++){
            cell = $("<div id='" + id + "' class='progress-cell-world'></div>");
            cell.css("background-color", colors[sampleArrWorld[j].how - 1]);
            cell.html(sampleArrWorld[j].date.dm());
            row.append(cell);
            id++;
        }
        $table.append(row);
    }
    //the final unfinished row
    if(!(i >= sampleArrWorld.length)){
        row = $("<div class='progress-row'></div>");
        for(let j = i; j < sampleArrWorld.length; j++){
            cell = $("<div id='" + id + "' class='progress-cell-world'></div>");
            cell.css("background-color", colors[sampleArrWorld[j].how - 1]);
            cell.html(sampleArrWorld[j].date.dm());
            row.append(cell);
            id++;
        }
        $table.append(row);
    }
}

function mapDateAndMood(a){
    return [new Date(a.date), parseInt(a.how)];
}

function drawUserCharts(){
    let jwt = localStorage.getItem('jwt');

    let b = axios.get('http://localhost:3000/user/logs',
    {
        headers: { "Authorization": "Bearer " + jwt }
    });

    b.then(response => {
        makeUserChart1(response.data.result);
        makeUserChart2(response.data.result);
    }).catch(error => {
        console.log(error);
    });
}

function makeUserChart1(logs) {
    sampleDateAndMood = logs.map(mapDateAndMood);

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', 'Mood');
    data.addRows(sampleDateAndMood);

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
    var chart = new google.visualization.LineChart(document.getElementById('myProgressChart'));
    chart.draw(data, options);
}

function makeUserChart2(logs) {
    sampleDateAndMood = logs.map(mapDateAndMood);

    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'date', id: 'Date' });
    dataTable.addColumn({ type: 'number', id: 'Mood' });
    dataTable.addRows(sampleDateAndMood);

    var chart = new google.visualization.Calendar(document.getElementById('myYearChart'));

    var options = {
        calendar: {
        cellColor: {
            stroke: '#f5f5f5',      // Color the border of the squares.
            strokeOpacity: 1, // Make the borders half transparent.
            strokeWidth: 1      // ...and two pixels thick.
        },
        monthOutlineColor: {
            stroke: 'white',
            strokeOpacity: 0.8,
            strokeWidth: 0.1
        },
        unusedMonthOutlineColor: {
            stroke: 'white',
            strokeOpacity: 0.8,
            strokeWidth: 0.1
        },
        focusedCellColor: {
            stroke: 'white',
            strokeOpacity: 0.8,
            strokeWidth: 1
        },
        dayOfWeekLabel: {
            color: 'transparent',
        },
        monthLabel: {
            fontName: 'Helvetica Neue',
            fontSize: 12,
        },
        yearLabel: {
            fontName: 'Helvetica Neue',
            fontSize: 30,
        },
        underMonthSpace: 18,
        cellSize: 10.9
        },
        colorAxis: {
            colors: ["#E66641", "#F29A4D", "#FCCE00", "#73C38F", "#00ABB7"],
            values: [1, 2, 3, 4, 5],
            minValue: 1,
            maxValue: 5
        },
        height: 150,
        noDataPattern: {
            backgroundColor: 'transparent',
            color: 'transparent'
        },
    };
    chart.draw(dataTable, options)
}
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
    renderNavBar();
    
    $('#root').on('click', '#sign-up', newAccount);
    $('#root').on('click', '#log-in', logIn);
    $('#root').on('click', '#log-day', logDay);
    $('#root').on('click', '#log-out', logOut);
    $('#root').on('click', '#log-post', logPost);    
    $('#root').on('click', '#save-profile', saveProfile);
    $('#root').on('click', '.delete', deletePost);

    if(window.location.href == "http://localhost:3001/you.html"){
        google.charts.load('current', {'packages':['corechart', 'line', 'calendar']});
        google.charts.setOnLoadCallback(renderUserPage);    
        $("#log-tags" ).autocomplete({
            source: [ "Work", "Friends", "Relationship", "School", "Health", "Hobby", "Stranger", "Self-Care", "Food" ],
            delay: 600,
        });
    } else if(window.location.href == "http://localhost:3001/world.html"){
        getWorldHistory()
        let jwt = localStorage.getItem('jwt');
        if(jwt == undefined){
            $('#post-your-pos').html("Log in to see the post feed!");
        } else {
            renderPostForm();
            getPosts();
        }
    } else if(window.location.href == "http://localhost:3001/edit-profile.html"){
        renderProfileEdit();
    }

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

async function renderProfileEdit(){
    let jwt = localStorage.getItem('jwt');
    let a = axios.get('http://localhost:3000/user/profile',
    {
        headers: { "Authorization": "Bearer " + jwt }
    });

    a.then(result => {
        console.log(result.data);
        let name = '';
        let notes = '';
        let bio = '';
    
        if(result.data.result.name != undefined){
            name = result.data.result.name;
        }
        if(result.data.result.bio != undefined){
            bio = result.data.result.bio;
        }
        if(result.data.result.notes != undefined){
            notes = result.data.result.notes;
        }

        let $form = $(`<div class="form-profile">
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
            <input class="input" type="text" placeholder="Display name" id="edit-name" value="` + name + `">
            </div>
        </div>
        
        <div class="field">
            <label class="label">Bio</label>
            <div class="control">
                <textarea class="textarea" rows="4" placeholder="Bio" id="edit-bio">` + bio + `</textarea>
            </div>
        </div>
        
        <div class="field">
            <label class="label">Notes</label>
            <div class="control">
                <textarea class="textarea" rows="6" placeholder="Notes" id="edit-notes">` + notes + `</textarea>
            </div>
        </div>
        
        <div class="field is-grouped">
            <div class="control">
            <button class="button is-link" id="save-profile">Save Changes</button>
            </div>
            <div class="control">
            <a class="button is-link is-light" id="save-profile" href="you.html">Back to Profile</a>
            </div>
        </div>`);

        $('#root').append($form);
}).catch(err => {
        console.log(err);
    });

}

async function saveProfile(){
    let name = $('#edit-name').val();
    let bio = $('#edit-bio').val();
    let notes = $('#edit-notes').val();

    let jwt = localStorage.getItem('jwt');

    let a = axios.post('http://localhost:3000/user/profile',
    {
        data: {
            name: name,
            bio: bio,
            notes: notes,
        },
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
        localStorage.setItem('name', response.data.data.other)
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
    localStorage.removeItem('name');
}

logDay = async function(event){
    event.preventDefault();
    let date = $('#log-date').val();
    let how = $('#how-was-it').val();
    let about = $('#about').val();
    let tag = $('#log-tags').val();
    console.log(tag);

    let currentLog = {
        date: new Date(date),
        how: how,
        about: about,
        tag: tag
    }

    let r = axios.post('http://localhost:3000/public/logs',
    {
        'data': [{
            date: date,
            how: how
        }],
        'type': 'merge'
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

logPost = async function(event){
    event.preventDefault();
    let jwt = localStorage.getItem('jwt');
    let user = localStorage.getItem('user');
    let id = localStorage.getItem('id');

    let post = {
        content: $("#log-post-content").val(),
        user: user
    }

    let a = axios.post('http://localhost:3000/private/posts/' + id,
    {
        data: post,
    },
    {
        headers: { "Authorization": "Bearer " + jwt }
    });

    newId = parseInt(id) + 1;

    a.then(result => {
        console.log(result.data);
        localStorage.setItem('id', newId);
    }).catch(err => {
        console.log(err);
    });
}

deletePost = async function(event){
    event.preventDefault();
    console.log(this.id);
    let id = this.id;
    let jwt = localStorage.getItem('jwt');
    let r = axios.delete('http://localhost:3000/private/posts/' + id,
    {
        headers: { "Authorization": "Bearer " + jwt }
    });

    r.then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });
}

function compareNew(a, b) {
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

function compareOld(a, b) {
    const dateA = a.date;
    const dateB = b.date;
    let comparison = 0;
    if (dateA > dateB) {
      comparison = 1;
    } else if (dateA < dateB) {
      comparison = -1;
    }
    return comparison;
}

async function getWorldHistory(){
    let b = axios.get('http://localhost:3000/public/logs');
    b.then(response => {
        console.log("world logs fetched");
        let logs = response.data.result.sort(compareNew);
        fillWorldHistoryLog(logs);
    }).catch(error => {
        console.log(error);
    });

}

function fillWorldHistoryLog(logs){
    //predefined color choices for each mood
    colors = ["#E66641", "#F29A4D", "#FCCE00", "#73C38F", "#00ABB7"];

    //create year table with rows and cells appended with corresponding colors
    $table = $("#progress-world");
    let id = 0;
    let i;
    let count = 0;

    for(i = 0; i+15 < logs.length && count < 30; i+=15){
        row = $("<div class='progress-row'></div>");
        for(let j = i; j < i+15; j++){
            cell = $("<div id='" + id + "' class='progress-cell-world'></div>");
            cell.css("background-color", colors[logs[j].how - 1]);
            let newDate = new Date(logs[j].date);
            cell.html(newDate.dm());
            row.append(cell);
            id++;
        }
        $table.append(row);
        count++;
    }
}

function renderPostForm(){
    let form = $(` <div class="world-right-block white-bg" id="world-form-block">
             <div class="field">
                    <div class="control">
                        <textarea class="textarea" type="text" rows="3" id="log-post-content" placeholder="Write your mind."></textarea>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                    <button class="button is-primary" id="log-post">Post</button>
                    </div>
                    <div class="control">
                    <button type="button" class="button is-primary is-light">Cancel</button>
                    </div>
                </div>
                </div> `);
    $('#world-right-col').append(form);
}

async function getPosts(){
    let jwt = localStorage.getItem('jwt');

    let a = axios.get('http://localhost:3000/private/posts',
    {
        headers: { "Authorization": "Bearer " + jwt }
    });

    a.then(result => {
        console.log(result.data);
        console.log('hello');
        renderPostFeed(result.data.result);
    }).catch(err => {
        console.log(err);
    });
}

function renderPostFeed(posts){
    console.log(posts)
    let user = localStorage.getItem('user');
    let feed = $("<div class='feed'></div>");
    Object.keys(posts).reverse().forEach(function(key,index) {
        console.log(key);
        console.log(posts[key]);
        let curr = posts[key];
        let post = $('<div class="post" id="post' + key + '"></div>');

        if(curr.user == user){
            post.append("<button class='delete float-right' id = '" + key + "' type='button'>Delete</button>")
        }

        post.append(`<div class='name-post'>` + curr.user + `</div>`);

        let textBlock = $("<div id='block-post" + key + "'></div>")
        textBlock.append(`<div id = "text` + key + `" class='text-post'>` + curr.content + `</div>`);
        post.append(textBlock);

        feed.append(post);
    });

    $('#world-right-col').append(feed);
}

async function renderUserPage(){
    let jwt = localStorage.getItem('jwt');

    let b = axios.get('http://localhost:3000/user/logs',
    {
        headers: { "Authorization": "Bearer " + jwt }
    });

    b.then(response => {
        let logs = response.data.result.sort(compareNew);
        console.log(response.data.result);
        fillUserHistoryLog(logs);
        if (response.data.result.length > 1) {
            let logsOld = response.data.result.sort(compareOld);
            makeUserChart1(logsOld);
        } else {
            $('#chart-1-head').html("Log more days to track your progress!");
        }
        makeUserChart2(response.data.result);
        makeUserChart3(response.data.result);
    }).catch(error => {
        console.log(error);
        $('#chart-1-head').html("Log some days to track your progress!");
        $('#chart-2-head').html("This is where your log history will be!");
        $('#chart-3-head').html("This is where your log frequency will be charted");
        $root = $("#user-history");
        $track = $(`<div class="progress-report" id="progress"></div>`);       
        $track.html("This is where your daily logs will appear!");
        $root.append($track);
    });

    let c = axios.get('http://localhost:3000/user/profile',
    {
        headers: { "Authorization": "Bearer " + jwt }
    });

    c.then(response => {
        console.log(response.data.result);
        let name = response.data.result.name;
        let $name = $("#name-banner")
        $name.addClass("name-banner");
        $name.html("Welcome, " + name + "! Happy tracking :)");
        let button = $("<a class='button is-small is-success float-right is-inverted is-outlined' id='edit-profile' href='edit-profile.html'>Edit Profile</a>");
        $name.append(button);
    }).catch(error => {
        console.log(error);
        let $name = $("#name-banner")
        $name.addClass("name-banner");
        $name.html("Add more details to your account here: ");
        let button = $("<a class='button is-small is-success float-right is-inverted is-outlined' id='edit-profile' href='edit-profile.html'>Edit Profile</a>");
        $name.append(button);
    });
}

function fillUserHistoryLog(logs){
    console.log(logs);
    $root = $("#user-history");

    //predefined color choices for each mood
    colors = ["#E66641", "#F29A4D", "#FCCE00", "#73C38F", "#00ABB7"];

    //create year table with rows and cells appended with corresponding colors
    $table = $(`<div class="progress-report progress-table" id="progress"></div>`);
    let id = 0;
    let i;

    for(i = 0; i < logs.length; i+=4){
        row = $("<div class='progress-row'></div>");
        for(let j = i; j < i+4 && j < logs.length; j++){
            cell = $("<div id='" + id + "' class='progress-cell'></div>");
            cell.css("background-color", colors[logs[j].how - 1]);
            dateObj = new Date(logs[j].date);
            cell.html(dateObj.dmyy());
            let tooltip = $("<div id='tooltip" + id + "' class='progress-tip'></div>");
            tooltip.html(logs[j].about);
            let tag = $("<div class='progress-tag'>#" + logs[j].tag + "</div>");
            tooltip.append(tag)
            cell.tipso({
                content: tooltip,
                width: 400,
                tooltipHover: 'true',
                speed: 300,
                background: colors[logs[j].how - 1],
                showArrow: false,
                position: 'right',
                animationIn: 'fadeIn',
            });
            row.append(cell);
            id++;
        }
        $table.append(row);
    }
    $root.append($table);
}

function makeUserChart1(logs) {
    sampleDateAndMood = logs.map(mapDateAndMood);

    $('#chart-1-head').html("Track your progress here:");
    $('#chart-1-head').addClass("remove-margin-bottom");

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
        lineWidth: 2,
        vAxis: {
            gridlines: {
                color: 'transparent'
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
    $('#chart-2-head').html("Days logged:");

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

function makeUserChart3(logs) {

    $('#chart-3-head').html("Track your log frequency here:");

    var data = new google.visualization.DataTable();
      data.addColumn('string', 'Mood Type');
      data.addColumn('number', 'Frequency');

      let freqArray = mapMoodFreq(logs);

      data.addRows(freqArray);

      var options = {
        hAxis: {
            gridlines: {
                color: 'transparent'
            },
            textStyle:{color: '#FFFFFF', fontName: "Helvetica Neue", fontSize: 18},
            baselineColor: '#FFFFFF'
        },
        vAxis: {
            format: '0',
            gridlines: {
                color: '#FFFFFF'
            },
            textStyle:{color: '#FFFFFF', fontName: "Helvetica Neue", fontSize: 15},
            baselineColor: '#FFFFFF'
        },
        legend: {
            position: 'none'
        },
        colors: ['#FFFFFF'],
        backgroundColor: { fill:'transparent' },
        width: 660
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('myBarChart'));
      chart.draw(data, options);
}

function mapDateAndMood(a){
    return [new Date(a.date), parseInt(a.how)];
}

function mapDateAndMoodObject(a){
    return {
        date: new Date(a.date),
        how: parseInt(a.how)
    }
}

function mapMoodFreq(a){
    let freq = [[":(", 0], [":/", 0], [":|", 0], [":)", 0], [":D", 0]];
    for(let i = 0; i < a.length; i++){
        let mood = a[i].how - 1;
        freq[mood][1]++;
    }
    return freq;
}

async function addExtra(){
    //sampleDateAndMood = sampleArrWorld.map(mapDateAndMoodObject);
    let jwt = localStorage.getItem('jwt');
    let logs = [{
        "date": "2020-11-09T05:00:00.000Z",
        "how": "3",
        "about": "asdjfoiasjdfads fa;osdifjaos;difj as;odifja sdfo;ijasdo;fiajsdfioajsdfiasdlkfjnasdfjansdfkjnasd fjkasdfa sdjfaoisdfjasoidfj asoidfja sodifja sdoifj asiodfjasdiofj asoidf jaosidfj asoidfjaf"
      },
      {
        "date": "2021-11-07T04:00:00.000Z",
        "how": "4",
        "about": "asd;fklasdf asdfjasdoif ajsoifd asiodfjaosidf jasidjf kalsd flaskdfj alskdfj aksldf asdlkfj asdlkfj alskdfj aklsdf jalskdf jalsdkjf alskdfj alsdkfj asdlkfjas dflkjasd fklasjd fklasdjf laskdf alsdkjf asldfkj asd;lfkasj df;asldkfj as;fdlk af"
      },
      {
        "date": "2020-04-11T04:00:00.000Z",
        "how": "3",
        "about": "fsjao;idf a;oidfj a;sodifja sodifja dsfoijas difojas ;dfjaslkdf alsk;dfj alksdfja osdfijaos;idfjaosdifja sodifjasoidf a;osdifasifajsd;ofi jasdfo;ijasdf "
      },
      {
        "date": "2021-12-05T05:00:00.000Z",
        "how": "4",
        "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "date": "2020-02-03T05:00:00.000Z",
        "how": "5",
        "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "date": "2020-02-03T05:00:00.000Z",
        "how": "4",
        "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "date": "2020-02-04T05:00:00.000Z",
        "how": "1",
        "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "date": "2021-11-09T05:00:00.000Z",
        "how": "5",
        "about": "Lorem ipsum dolor sit left, consectetur adipisicing elit. Minima top nostrum, quia inventore ullam consequuntur velit right fuga officiis non repellendus ea qui nihil delectus, bottom eligendi accusamus ratione odio.\n",
        "tag": "Work"
      },
      {
        "date": "2021-12-04T05:00:00.000Z",
        "how": "2",
        "about": "adsfjasdofijas dfoaisdjfasdofijasdo;fija",
        "tag": "sifjaosdifjads"
      }]

    let r = axios.post('http://localhost:3000/user/logs',
    {
        'data': logs,
        'type': 'merge'
    },
    {
        headers: { "Authorization": "Bearer " + jwt }
    });

    r.then(response => {
        console.log(response.data);
        console.log("added extra")
    }).catch(error => {
        console.log(error);
    });
}

async function clear(){
    let jwt = localStorage.getItem('jwt');
    let r = axios.delete('http://localhost:3000/private/posts/1',
    {
        headers: { "Authorization": "Bearer " + jwt }
    });

    r.then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });
}
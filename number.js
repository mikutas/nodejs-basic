var func_one = function(callback){
    console.log("The first ...");
    callback();
};

var func_two = function(callback){
    console.log("the second ...");
    callback();
};

var func_three = function(callback){
    console.log("... and the third!");
    if(callback) {
        callback();
    }
};

//func_one();
//func_two();
//func_three();

func_one(function(){
    func_two(function(){
        func_three();
    });
});

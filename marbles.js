var slideid
var index = 0;
check(0)
slideshow()

function slideShow(){
    index=0;
    slideid=setInterval(() => {
        if(index==document.images.length){
            index=0;
        }
        check(index);
        index++;
        
    }, 1000);
}


function check(){
    for(var i =0;i<document.images.length;i++){
        if(index!=i){
            document.images[i].src='./images/b.jpeg'
        }
        else{
            document.images[index].src='./images/y.jpeg'
        }

    }
}

function change(){
slideShow();
}

function stop(){
    clearInterval(slideid);
}


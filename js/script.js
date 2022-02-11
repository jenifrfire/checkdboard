// const getOptions = function (size, number) {
//     let board = document.createElement('div');
//     for (let i = 1; i < number; i++) {
//         const horizontal = document.createElement('div');
//         for (let j = 1; j < number; j++) {
//             horizontal.style.display = 'flex'
//             let coll = document.createElement('div');
//             if (i % 2 == j % 2) {
//                 coll.style.backgroundColor = 'black';
//                 coll.style.width = size + 'px';
//                 coll.style.height = size + 'px';
//             } else {
//                 coll.style.backgroundColor = 'white';
//                 coll.style.width = size + 'px';
//                 coll.style.height = size + 'px';
//             }
//             horizontal.appendChild(coll);
//         }
//         board.appendChild(horizontal);
//     }
//     document.body.appendChild(board);
// }


const getOptions = function(size,number){
    let blackboard = document.createElement("div");

    for( let i = 1; i < number ; i++){
        let harizotal = document.createElement("div");
        for( let j = 1; j < number ; j++){
            harizotal.style.display = "flex";
            const coll =  document.createElement("div")
            if(i % 2 == j % 2){
                coll.style.backgroundColor = "black";
                coll.style.width = size + "px";
                coll.style.height = size + "px";
       
            }else{
                coll.style.backgroundColor = "white";
                coll.style.width = size + "px";
                coll.style.height =  size + "px";
       
            }
            harizotal.appendChild(coll);
     }
     blackboard.appendChild(harizotal);
    }

    document.body.appendChild(blackboard);
};
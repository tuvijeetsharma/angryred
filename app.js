document.onkeydown = function(e) { 
    switch (e.keyCode) { 
        case 37: 
            str = 'Left Key pressed!'; 
            break; 
        case 38: 
            str = 'Up Key pressed!'; 
            break; 
        case 39: 
            str = 'Right Key pressed!'; 
            break; 
        case 40: 
            str = 'Down Key pressed!'; 
            break; 
    } 
}
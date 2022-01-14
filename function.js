
// Digital Clock

function zero(time) {
    return time  < 10 ? '0' + time : time  ;
}



function zero2(h) {
        let hours = '';
    if ( h == 0 || h == 24 ) {
    hours = 12;
 }else{
     hours = h;
 }

return hours;

}

// Counter With loader

function progressBar( start_val , current_val ) {
    return (current_val * 100 ) / start_val;
};


//  Result Cheak



function reCheak(markes) {
    if (markes >= 0 && markes < 33 ) {
        return{
            re : 'You are failed',
            status: 'danger'
        };
             
            
        
    }else if (markes >= 33  ) {
        return{
            re : 'You are passed',
            status : 'success'
        }
            
            
    
    }
}

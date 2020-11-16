function change_slide(i){
    let prev_val = document.getElementById("fig").style.left;
    console.log(prev_val);
    prev_val = prev_val.split("%")[0];
    
    if(prev_val < -400 && prev_val > 0){
          return;
    }
    else{
        let new_val = prev_val - (i * 100);
        document.getElementById("fig").style.left = new_val + '%';
        console.log(new_val);
    }
    
}
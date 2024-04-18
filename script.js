var left_inp = document.getElementById("left_inp")
var right_inp = document.getElementById("rigth_inp")

var select_left = document.getElementById("units_drpdown_left")
var select_right = document.getElementById("units_drpdown_right")

left_inp.addEventListener("keyup",calculate_right);
select_left.addEventListener("change",calculate_left);
select_right.addEventListener("change",calculate_right);
right_inp.addEventListener("keyup",calculate_left);

select_left_val = select_left.value;
select_right_val = select_right.value;

function calculate_right(){
    select_left_val = select_left.value;
    select_right_val = select_right.value;

    // millimeter left fix
    if( select_left_val=="millimeter" && select_right_val=="millimeter"){
        right_inp.value= left_inp.value;
    }
    else if(select_left_val=="millimeter" && select_right_val=="centimeter"){
        right_inp.value= left_inp.value/10;
    }
    else if(select_left_val=="millimeter" && select_right_val=="meter"){
        right_inp.value= left_inp.value/1000;
    }
    else if(select_left_val=="millimeter" && select_right_val=="kilometer"){
        right_inp.value= left_inp.value/1000000;
    }
    else if(select_left_val=="millimeter" && select_right_val=="foot"){
        right_inp.value= left_inp.value/304.8;
    }
    else if(select_left_val=="millimeter" && select_right_val=="inch"){
        right_inp.value= left_inp.value/25.4;
    }

    //centimeter left fix
    if( select_left_val=="centimeter" && select_right_val=="centimeter"){
        right_inp.value= left_inp.value;
    }
    else if(select_left_val=="centimeter" && select_right_val=="millimeter"){
        right_inp.value= left_inp.value*10;
    }
    else if(select_left_val=="centimeter" && select_right_val=="meter"){
        right_inp.value= left_inp.value/100;
    }
    else if(select_left_val=="centimeter" && select_right_val=="kilometer"){
        right_inp.value= left_inp.value/100000;
    }
    else if(select_left_val=="centimeter" && select_right_val=="foot"){
        right_inp.value= left_inp.value/30.48;
    }
    else if(select_left_val=="centimeter" && select_right_val=="inch"){
        right_inp.value= left_inp.value/2.54;
    }

    // meter left fix

    if( select_left_val=="meter" && select_right_val=="meter"){
        right_inp.value= left_inp.value;
    }
    else if(select_left_val=="meter" && select_right_val=="millimeter"){
        right_inp.value= left_inp.value*1000;
    }
    else if(select_left_val=="meter" && select_right_val=="centimeter"){
        right_inp.value= left_inp.value*100;
    }
    else if(select_left_val=="meter" && select_right_val=="kilometer"){
        right_inp.value= left_inp.value/1000;
    }
    else if(select_left_val=="meter" && select_right_val=="foot"){
        right_inp.value= left_inp.value*3.28084;
    }
    else if(select_left_val=="meter" && select_right_val=="inch"){
        right_inp.value= left_inp.value*39.37008;
    }

    //kilometer left fix

    if( select_left_val=="kilometer" && select_right_val=="kilometer"){
        right_inp.value= left_inp.value;
    }
    else if(select_left_val=="kilometer" && select_right_val=="millimeter"){
        right_inp.value= left_inp.value*1000000;
    }
    else if(select_left_val=="kilometer" && select_right_val=="centimeter"){
        right_inp.value= left_inp.value*100000;
    }
    else if(select_left_val=="kilometer" && select_right_val=="meter"){
        right_inp.value= left_inp.value*1000;
    }
    else if(select_left_val=="kilometer" && select_right_val=="foot"){
        right_inp.value= left_inp.value*3280.84;
    }
    else if(select_left_val=="kilometer" && select_right_val=="inch"){
        right_inp.value= left_inp.value*39370.08;
    }

    //foot left fix

    if( select_left_val=="foot" && select_right_val=="foot"){
        right_inp.value= left_inp.value;
    }
    else if(select_left_val=="foot" && select_right_val=="millimeter"){
        right_inp.value= left_inp.value*304.8;
    }
    else if(select_left_val=="foot" && select_right_val=="centimeter"){
        right_inp.value= left_inp.value*30.48;
    }
    else if(select_left_val=="foot" && select_right_val=="meter"){
        right_inp.value= left_inp.value/3.28084;
    }
    else if(select_left_val=="foot" && select_right_val=="kilometer"){
        right_inp.value= left_inp.value/3280.84;
    }
    else if(select_left_val=="foot" && select_right_val=="inch"){
        right_inp.value= left_inp.value*12;
    }

    //inch left fix

    if( select_left_val=="inch" && select_right_val=="inch"){
        right_inp.value= left_inp.value;
    }
    else if(select_left_val=="inch" && select_right_val=="millimeter"){
        right_inp.value= left_inp.value*25.4;
    }
    else if(select_left_val=="inch" && select_right_val=="centimeter"){
        right_inp.value= left_inp.value*2.54;
    }
    else if(select_left_val=="inch" && select_right_val=="meter"){
        right_inp.value= left_inp.value/39.37008;
    }
    else if(select_left_val=="inch" && select_right_val=="kilometer"){
        right_inp.value= left_inp.value/39370.08;
    }
    else if(select_left_val=="inch" && select_right_val=="foot"){
        right_inp.value= left_inp.value/12;
    }

}

function calculate_left(){
    select_left_val = select_left.value;
    select_right_val = select_right.value;

    // millimeter right fix
    if(select_right_val=="millimeter"  && select_left_val=="millimeter" ){
        left_inp.value=right_inp.value;
    }
    else if(select_right_val=="millimeter" && select_left_val=="centimeter"){
        left_inp.value= right_inp.value/10;
    }
    else if(select_right_val=="millimeter" && select_left_val=="meter"){
        left_inp.value = right_inp.value/1000;
    }
    else if(select_right_val=="millimeter" && select_left_val=="kilometer"){
        left_inp.value= right_inp.value/1000000;
    }
    else if(select_right_val=="millimeter" && select_left_val=="foot"){
        left_inp.value= right_inp.value/304.8;
    }
    else if(select_right_val=="millimeter" && select_left_val=="inch"){
        left_inp.value= right_inp.value/25.4;
    }

    //centimeter right fix

    if( select_right_val=="centimeter" && select_left_val=="centimeter"){
        left_inp.value=right_inp.value ;
    }
    else if(select_right_val=="centimeter" && select_left_val=="millimeter"){
        left_inp.value= right_inp.value*10;
    }
    else if(select_right_val=="centimeter" && select_left_val=="meter"){
        left_inp.value= right_inp.value/100;
    }
    else if(select_right_val=="centimeter" && select_left_val=="kilometer"){
        left_inp.value= right_inp.value/100000;
    }
    else if(select_right_val=="centimeter" && select_left_val=="foot"){
        left_inp.value= right_inp.value/30.48;
    }
    else if(select_right_val=="centimeter" && select_left_val=="inch"){
        left_inp.value= right_inp.value/2.54;
    }

    // meter right fix

    if( select_right_val=="meter" && select_left_val=="meter"){
        left_inp.value=right_inp.value ;
    }
    else if(select_right_val=="meter" && select_left_val=="millimeter"){
        left_inp.value= right_inp.value*1000;
    }
    else if(select_right_val=="meter" && select_left_val=="centimeter"){
        left_inp.value= right_inp.value*100;
    }
    else if(select_right_val=="meter" && select_left_val=="kilometer"){
        left_inp.value= right_inp.value/1000;
    }
    else if(select_right_val=="meter" && select_left_val=="foot"){
        left_inp.value= right_inp.value*3.28084;
    }
    else if(select_right_val=="meter" && select_left_val=="inch"){
        left_inp.value= right_inp.value*39.37008;
    }

    //kilometer right fix

    if( select_right_val=="kilometer" && select_left_val=="kilometer"){
        left_inp.value= right_inp.value;
    }
    else if(select_right_val=="kilometer" && select_left_val=="millimeter"){
        left_inp.value= right_inp.value*1000000;
    }
    else if(select_right_val=="kilometer" && select_left_val=="centimeter"){
        left_inp.value= right_inp.value*100000;
    }
    else if(select_right_val=="kilometer" && select_left_val=="meter"){
        left_inp.value= right_inp.value*1000;
    }
    else if(select_right_val=="kilometer" && select_left_val=="foot"){
        left_inp.value= right_inp.value*3280.84;
    }
    else if(select_right_val=="kilometer" && select_left_val=="inch"){
        left_inp.value= right_inp.value*39370.08;
    }
    //foot right fix

    if( select_right_val=="foot" && select_left_val=="foot"){
        left_inp.value=right_inp.value ;
    }
    else if(select_right_val=="foot" && select_left_val=="millimeter"){
        left_inp.value= right_inp.value*304.8;
    }
    else if(select_right_val=="foot" && select_left_val=="centimeter"){
        left_inp.value= right_inp.value*30.48;
    }
    else if(select_right_val=="foot" && select_left_val=="meter"){
        left_inp.value= right_inp.value/3.28084;
    }
    else if(select_right_val=="foot" && select_left_val=="kilometer"){
        left_inp.value= right_inp.value/3280.84;
    }
    else if(select_right_val=="foot" && select_left_val=="inch"){
        left_inp.value= right_inp.value*12;
    }

    //inch right fix

    if( select_right_val=="inch" && select_left_val=="inch"){
        left_inp.value= right_inp.value;
    }
    else if(select_right_val=="inch" && select_left_val=="millimeter"){
        left_inp.value= right_inp.value*25.4;
    }
    else if(select_right_val=="inch" && select_left_val=="centimeter"){
        left_inp.value= right_inp.value*2.54;
    }
    else if(select_right_val=="inch" && select_left_val=="meter"){
        left_inp.value= right_inp.value/39.37008;
    }
    else if(select_right_val=="inch" && select_left_val=="kilometer"){
        left_inp.value= right_inp.value/39370.08;
    }
    else if(select_right_val=="inch" && select_left_val=="foot"){
        left_inp.value= right_inp.value/12;
    }



}




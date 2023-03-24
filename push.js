
'use strict'

var num =3;
switch(num){
    case 10:
        console.log('print 10');
        break;
    case 9 :
        console.log("print 9");
        break;
    case 8:{
        console.log('this with block');
        }
        break;

    default:
        console.log('its wrong');
        break;
}

var val = 11;
switch(true){
    case(val == 10 || val == 9):{
        console.log('print yes');
        break;
    }
    case(val >= 11):{
        console.log('print 11+')
        break;
    }
    default:
        console.log('it`s wrong');
        break;
}
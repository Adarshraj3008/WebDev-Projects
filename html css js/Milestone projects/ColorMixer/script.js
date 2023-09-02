function colorMixer(color1,color2){
var result;

switch(color1){
    case 'red':
        switch(color2){
            case "blue":
                result = "purple";break;
        
            case "yellow":
                result = 'orange'; break;
            default:
                result = "Invalid color combination";
        }
        break;
    case "blue":
        switch(color2){
            case "red":
                result = 'purple';
                break;
            case "yellow":
                result = 'green'
                break;
            default:
                result="invalid color combination"
        }
        break;
    case "yellow":
        switch(color2){
            case "red":
                result= 'orange';
                break;
            case "blue":
                result = 'green';
                break;
            default:
                result = "invalid color combination"
        }
        break;
    default:
        result = "invalid color combination";
    }
console.log("Resulting Color: ",result);
}
colorMixer("red","blue");
colorMixer("blue","red");
colorMixer("red","yellow");
colorMixer("yellow","red");
colorMixer("yellow","blue");
colorMixer("blue","yellow");
colorMixer("green","yellow");
let day = window.prompt("Enter the number of week");
switch (parseInt(day)) {
    case 7:
        document.write("Saturday");
        break;
    case 6:
        document.write("Friday");
        break;
    case 5:
        document.write("Thursday");
        break;
    case 4:
        document.write("Wednesday");
        break;
    case 3:
        document.write("Tuesday");
        break;
    case 2:
        document.write("Monday");
        break;
    case 1:
        document.write("Sunday");
        break;
    default:
        document.write("This not a day in the week");

}
let score = window.prompt("enter your score");
switch (parseInt(score / 10)) {
    case 10:
    case 9:
        document.write("Grade: A");
        break;
    case 8:
        document.write("Grade: B");
        break;
    case 7:
        document.write("Grade: c");
        break;
    case 6:
        document.write("Grade: D");
        break;
    case 5:
        document.write("Grade: E");
        break;
    default:
        document.write("Grade: Fail");
        break;

}
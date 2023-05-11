console.log("ხელფასი")
document.write("<h1>ხელფასი</h1>")

var strSalary = prompt("შეიყვანე დარიცხული ხელფასი მაგალითად: 1200ლარი");
var strPercent = prompt("საშემოსავლო: 0-16%კაი ხელფასი , 20-30% საშუალო ხელფასი , 35% და მეტი ცუდი ხელფასი.");

var salary = parseInt(strSalary);
var percent = parseInt(strPercent);

salary = salary - (salary * percent) / 100;

if (salary > 1000 && percent <= 16) {
    alert("კაი ხელფასი " + salary);
}
else if (salary < 1000 && salary > 800 && percent >= 20) {
    alert("საშუალო ხელფასი " + salary);
}
else if (salary < 800 && percent >= 35) {
    alert("ცუდი ხელფასი წადი სახლიდან :D " + salary);
}
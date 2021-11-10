let userName = "";
let userBirthYear = 0;
let userCurrentYear = 0;
let age = 0;
    
$(".calcAge").click(function() {
  
  userBirthYear = $(".year").val();
  userName = $(".name").val();
  userCurrentYear = $(".currentYear").val();
  
  console.log(userBirthYear);
  console.log(userName);
  console.log(userCurrentYear);
  
  age = userCurrentYear - userBirthYear;
  console.log(age);

  $(".message").text(userName + " it looks like you are " + age + " year(s) old.");
  
});
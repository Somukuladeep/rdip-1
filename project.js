function c(val)
{
document.getElementById("d").value=val;
}
function v(val)
{
document.getElementById("d").value+=val;
}
function e() 
{ 
try 
{ 
  c(eval(document.getElementById("d").value)) 
} 
catch(e) 
{
  c('Error') 
} 
}

function formValidation()
{
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; if(userid_validation(uid,5,12))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(countryselect(ucountry))
{
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
} 
} 
}
}
}
}
return false;
}  
<script>
			function Palindrome()
			{
				var rem, temp, final = 0;
				var number = Number(document.getElementById("N").value);

				temp = number;
				while(number>0)
				{
					rem = number%10;
					number = parseInt(number/10);
					final = final*10+rem;
				}
				if(final==temp)
				{
					window.alert("The inputed number is Palindrome");
				}
				else
				{
					window.alert("The inputted number is not palindrome");
				}
			}
		</script>

function form()
{
    let name=document.getElementById('name').value;
    let age=document.getElementById('age').value;
    let mob=document.getElementById('mob').value;
    let mail=document.getElementById('mail').value;
    let address=document.getElementById('address').value;
    let qualification=document.getElementById('qualification').value;
    let contact=document.getElementById('contact').value;
    let password=document.getElementById('password').value;
    let confirm=document.getElementById('confirm').value;
    if(name=="")
        {
            alert("name is required")
            document.getElementById('name').focus()
            return false

    }
    else if(!(isNaN(name))) 
        {
            alert("Only use alphabets")
            document.getElementById('name').focus()
            return false

        }
    else if(age=="")
        {
            alert("Age no is required")
            document.getElementById('age').focus()
            return false
        }

        else if(isNaN(age)){
            alert("Only numbers allowed")
            document.getElementById('age').focus()
        }
        else if(mob=="")
            {
                alert("Mobil no is required")
                document.getElementById('mobil').focus()
                return false
            }
        else if(mail=="")
            {
                alert("mail id is required")
                document.getElementById('mail').focus()
                return false
            }
            else if(!(mail.includes("@")))
                {
                    alert("Enter a valid mail id")
                    document.getElementById('mail').focus()
                return false
                }
            else if(address=="")
                {
                    alert("Address  is required")
                    document.getElementById('address').focus()
                    return false
                }
                else if(qualification=="")
                    {
                        alert("Qualification is required")
                        document.getElementById('qualification').focus()
                        return false
                    }
                    else if(contact=="")
                        {
                            alert("Contact is required")
                            document.getElementById('contact').focus()
                            return false
                        }
                   
                    else if(contact.length>10 || contact.length<10){
                        alert("Contact Should be 10 digit")
                        document.getElementById('contact').focus()
                        return false
                    }
                    else if(password=="")
                        {
                            alert("Enter password")
                            document.getElementById('password').focus()
                            return false
                        }
                        else if(!(password.match(/[!@#$%^&*?><]/)))
                            {
                                alert("Password must be use in special character")
                                document.getElementById('password').focus()
                            return false
                            }
                            else if(confirm=="")
                                {
                                    alert("Re-enter your password")
                                    document.getElementById('confirm').focus()
                                    return false
                                }
                                else if(password!=confirm)
                                    {
                                        alert("password is not matched")
                                        document.getElementById('confirm').focus()
                                    return false
                                    }
}


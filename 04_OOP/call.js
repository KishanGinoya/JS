function setUsername(username){
    //complex db calls
    this.username=username
    console.log("called")
}

function createUser(username,email,password){
    setUsername.call(this,username)//without this there are no usernaame stored in this context

    this.email=email
    this.password=password

}

const chai=new createUser("chai","chai@gmail.com","123")
console.log(chai)
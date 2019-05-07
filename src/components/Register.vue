<template>
  <div class="register">
   <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
        <label htmlFor="name" className="sr-only">Name</label><br />
        <input type="text" id="name" className="form-control" placeholder="Name" required autoFocus /><br /><br />
        <label htmlFor="inputEmail" className="sr-only">Email address</label> <br />
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required /><br /><br />
        <label htmlFor="inputPassword" className="sr-only">Password</label> <br />
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required /><br /><br />
        <label htmlFor="inputCPassword" className="sr-only">Confirm Password</label> <br />
        <input type="password" id="inputCPassword" className="form-control" placeholder="Confirm Password" required /><br /><br />

        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
import '../assets/login.css'
export default {
  name: 'Register'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

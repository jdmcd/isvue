<template>
  <div class="login">
    <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1><br/>
        <label htmlFor="inputEmail" className="sr-only">Email address</label><br/>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus /><br/><br/>
        <label htmlFor="inputPassword" className="sr-only">Password</label><br/>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required /><br/><br/>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
import '../assets/login.css'
export default {
  name: 'Login'
}
</script>


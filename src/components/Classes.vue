<template>
  <div>
    <NavBar />
    <main role="main" class="container">
      <div class="starter-template">
      <h1>My Classes</h1>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Class Name</th>
            <th scope="col">Teacher</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Programming</td>
            <td>Professor Sterpe</td>
            <td><a href="/class/1">View</a></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Programming</td>
            <td>Professor Sterpe</td>
            <td><a href="/class/1">View</a></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Programming</td>
            <td>Professor Sterpe</td>
            <td><a href="/class/1">View</a></td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Programming</td>
            <td>Professor Sterpe</td>
            <td><a href="/class/1">View</a></td>
          </tr>
        </tbody>
      </table>
      </div>
    </main>
  </div>
</template>

<script>
import '../assets/main.css';
import NavBar from './NavBar';

export default {
  name: 'Classes',
  components: {
    NavBar
  }
}
</script>
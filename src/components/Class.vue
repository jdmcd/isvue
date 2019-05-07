<template>
<div>
    <NavBar />
    <main role="main" class="container">
      <h1>Class Group Projects</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Project Name</th>
                        <th scope="col"># of Groups</th>
                        <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Programming Final Project</td>
                        <td>3</td>
                        <td><a href="/project/1/groups">View</a></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Programming Final Project</td>
                        <td>3</td>
                        <td><a href="/project/1/groups">View</a></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Programming Final Project</td>
                        <td>3</td>
                        <td><a href="/project/1/groups">View</a></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Programming Final Project</td>
                        <td>3</td>
                        <td><a href="/project/1/groups">View</a></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Programming Final Project</td>
                        <td>3</td>
                        <td><a href="/project/1/groups">View</a></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Programming Final Project</td>
                        <td>3</td>
                        <td><a href="/project/1/groups">View</a></td>
                    </tr>
                </tbody>
            </table>

            <hr />
            <h1>Students</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Jimmy McDermott</td>
                        <td>mcdermjk@bc.edu</td>
                        <td><a href="">Delete</a></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Jimmy McDermott</td>
                        <td>mcdermjk@bc.edu</td>
                        <td><a href="">Delete</a></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Jimmy McDermott</td>
                        <td>mcdermjk@bc.edu</td>
                        <td><a href="">Delete</a></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Jimmy McDermott</td>
                        <td>mcdermjk@bc.edu</td>
                        <td><a href="">Delete</a></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Jimmy McDermott</td>
                        <td>mcdermjk@bc.edu</td>
                        <td><a href="">Delete</a></td>
                    </tr>
                </tbody>
            </table>

            <hr />
            <h3>Add Student to Class</h3>
            <form>
                <select>
                    <option>Test student 1</option>
                    <option>Test student 2</option>
                </select>
                <input type="Submit" />
            </form>
    
    </main>
  </div>
</template>

<script>
import '../assets/main.css';
import NavBar from './NavBar';

export default {
  name: 'Class',
  components: {
    NavBar
  }
}
</script>
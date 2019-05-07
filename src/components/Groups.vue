<template>
  <div>
    <NavBar />
    <main role="main" class="container">
      <div class="starter-template">
        <h1>Groups</h1>
        <div className="row mb-3">
            <Group title="Group 1" :people="['Person 1', 'Person 2']" />
            <Group title="Group 2" :people="['Person 1', 'Person 2']" />
            <Group title="Group 3" :people="['Person 1', 'Person 2']" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import '../assets/main.css';
import Group from './Group';
import NavBar from './NavBar';

export default {
  name: 'Groups',
  components: {
    Group,
    NavBar
  }
}
</script>
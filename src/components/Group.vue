<template>
  <div class="card" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <ol>
            <li :key="index" v-for="(person, index) in people"> 
              {{ person }}
            </li>
          </ol>
      </div>
  </div>
</template>

<script>
module.exports = {
  props: ['title', 'people']
}
</script>
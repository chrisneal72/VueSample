<template>
  <div class="data-view">
    <h1>This page will display Data</h1>
    {{ samples }}
  </div>
</template>

<script>
import SampleDataService from "../../services/SampleDataService";

export default {
  name: "sampless-list",
  data() {
    return {
      samples: [],
      currentSample: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveSamples() {
      SampleDataService.getAll()
        .then(response => {
          this.samples = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveSamples();
      this.currentSample = null;
      this.currentIndex = -1;
    },

    setActiveSample(sample, index) {
      this.currentSample = sample;
      this.currentIndex = index;
    },

    removeAllSamples() {
      SampleDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      SampleDataService.findByTitle(this.title)
        .then(response => {
          this.samples = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveSamples();
    console.log('Mounted');
  }
};
</script>
// app.js
const app = Vue.createApp({
  data() {
    return {
      message: "My Contacts",
      contacts: [
        {
          name: "John Doe",
          email: "john.doe@example.com",
          age: 25,
          link: "https://www.linkedin.com/in/johndoe/",
        },
        {
          name: "Jane Smith",
          email: "jane.smith@example.com",
          age: 30,
          link: "https://www.linkedin.com/in/janesmith/",
        },
        // Add other contacts with updated names
      ],
    };
  },
  methods: {
    increaseAge(index) {
      this.contacts[index].age++;
    },
  },
});

app.mount("#app");

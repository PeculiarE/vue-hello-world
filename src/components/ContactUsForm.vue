<template>
  <form>
    <h2>Welcome {{ firstName }},</h2>
    <p class="bold-things">First Name</p>
    <input class="inputs" v-model="firstName" type="text" placeholder="Ada" />
    <p class="bold-things">Email</p>
    <input class="inputs" v-model="email" type="text" placeholder="adaking@hotmail.com" />
    <p class="bold-things">Message</p>
    <textarea
      v-model="message"
      type="text"
      placeholder="Enter your message here"
      cols="40"
      rows="12"
    ></textarea>

    <h3>Summary</h3>
    <p>
      Your first name is <span class="bold-things">{{ firstName }}</span>
    </p>
    <p>
      Your email is <span style="font-weight: bold">{{ email }}</span>
    </p>
    <p>
      Your message is <span class="bold-things">{{ message }}</span>
    </p>

    <button @click="alertBox" :disabled="isTextAreaValid">Submit</button>
  </form>
</template>

<script>
export default {
    name: 'ContactUsForm',
    data() {
        return {
            firstName: '',
            email: '',
            message: '',
        }
    },
    methods: {
        alertBox() {
            alert(`
            Congratulations, ${this.firstName}!
            Your message '${this.message}' has been delivered.
            Replies will be sent to '${this.email}'`);
            this.firstName = '';
            this.email = '';
            this.message = '';
            }
        },
    computed: {
        isTextAreaValid() {
            if (this.message.length >= 2 && this.message != '  ') {
                return false
            }
            return true
        }
    }
}
</script>

<style scoped>
.bold-things {
  font-weight: bold;
}
.inputs {
    width: 300px
}
</style>
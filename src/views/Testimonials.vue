<template>
    <div>
        <h1>This is the Testimonial Page</h1>
        <HelloWorld @updateMessage='handleUpdateMessage' :msg="message" />
        <!-- <HelloWorld msg="Read the glowing reviews!" /> -->
        <!-- <HelloWorld /> -->
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'testimonials',
  data () {
    return {
      message: 'See the feedback from our clients below!'
    }
  },
  components: {
    HelloWorld,
  },
  methods: {
    handleUpdateMessage(payload) {
      this.message = payload.newMsg
    }
  }
};
</script>
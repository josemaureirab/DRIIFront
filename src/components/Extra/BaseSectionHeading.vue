<template>


</template>

<script>
  // Mixins
  import Heading from '@/mixins/heading'

  export default {
    name: 'BaseSectionHeading',

    mixins: [Heading],

    props: {
      align: {
        type: String,
        default: 'center',
      },
      color: {
        type: String,
        default: 'primary',
      },
      icon: String,
      outlined: Boolean,
      space: {
        type: [Number, String],
        default: 12,
      },
      subtitle: String,
      text: String,
      title: String,
    },

    computed: {
      classes () {
        return [
          `text-${this.align}`,
          `mb-${this.space}`,
        ]
      },
    },
  }
</script>

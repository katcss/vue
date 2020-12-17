<template>
  <div class="katui_input">
      <div class="katui_input__main" :class='styles'>
          <div class="katui_input__slot">
            <slot name="before"></slot>
          </div>
          <input :disabled='disabled' :class='fieldStyles' :placeholder="placeholder" class="katui_input__field" v-model="katmodel">
          <div class="katui_input__slot">
            <slot name="after"></slot>
          </div>
      </div>
      <div :class='msgStyles' v-if="!hideMessages" class="katui_input__messages">
          <slot name='message'>{{message}}</slot>
      </div>
  </div>
</template>

<script>
export default {
    name: 'k-input',
    model: {
        prop: 'katmodel',
        event: 'change'
    },
    data(){
        return {
        color: 'default'
    }},
    computed: {
        styles() {
            let border = 'gray-1'
            let focus = 'border-blue'
            let background = 'gray-1'
            switch (this.state) {
                case 'success':
                    border = 'green-accent'
                    break;
                case 'warning':
                    border = 'orange-accent'
                    break;
                case 'error':
                    border = 'red-accent'
                    break;
                default:
                    break;
            }
            let styles = [`border-${border}`, `focus:${focus}`, `bg-${background}`]
            return styles
        },
        fieldStyles() {
            let background = 'gray-1 focus:bg-white'
            let placeholder = 'gray-6'
            let active = 'active:text-sm'

            if (this.disabled) {
                active = ''
                placeholder = 'gray-4'
            }

            return [`bg-${background}`, `placeholder-${placeholder}`, active]
        },
        msgStyles() { //to improve performance, we should put all styles together, better management
            let text = this.color
            if (this.color == 'default') text = 'gray-4' //custom color works only if state is default
            if (this.state != 'default') {
                switch (this.state) {
                    case 'success':
                        text = 'green'
                        break;
                    case 'warning':
                        text = 'orange'
                        break;
                    case 'error':
                        text = 'red'
                        break;
                    default:
                        break;
                }
            }
            return [`text-${text}`]
        }
    },
    props: {
        katmodel: {
            type: String,
            default: '' //V-model handler
        },
        state: {
            type: String,
            default: 'default' //Default, Success, Warning (user for required inputs), Error
        },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: 'Type here'
        },
        type: {
            type: String,
            default: 'text' //Text, Phone, Money, Email, Username, Custom
        },
        hideMessages: {
            type: Boolean,
            default: false
        },
        message: {
            type: [String, Boolean, Number],
            default: ''
        }
    }
}
</script>

<style>
.katui_input {
    @apply inline-block self-center w-full mx-1
}
.katui_input__main {
    @apply rounded-md border-2 box-border w-full flex overflow-hidden
}
.katui_input__main:focus-within {
    @apply bg-white
}
.katui_input__main:focus-within {
    @apply border-primary
}
.katui_input__field {
    @apply px-2 flex-grow outline-none self-center h-9 rounded text-gray-8
}
.katui_input__messages {
    @apply text-left px-2 h-6 text-sm
}
.katui_input__slot {
    @apply px-2 flex items-center
}
.katui_input__slot:empty {
    display: none
}
</style>
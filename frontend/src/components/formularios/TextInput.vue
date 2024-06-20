<template>
  <b-row class="w-100">
    <b-col cols="12" md="12">
      <b-form-input type="text" v-model="text" :id="id" :name="name" :maxlength="length"
        :placeholder="placeholder ? placeholder : ''" :readonly="readonly" :lazy="lazy || false" :state="valid"
        :formatter="formatter">
      </b-form-input>
      <b-form-invalid-feedback :id="id" v-if="!valid">
        {{ invalidText }}
      </b-form-invalid-feedback>
      <div class="d-flex justify-content-between">
        <b-form-text inline :id="id" v-if="helperText">
          {{ helperText }}
        </b-form-text>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "TextInput",
  data() {
    return {
      text: "",
    };
  },
  watch: {
    text() {
      this.$emit("input", this.text);
    },
    value() {
      this.text = this.value;
    },
  },
  methods: {
    changeState() {
      return true;
    },
  },
  updated() {
    this.text = this.value;
  },
  created() {
    this.text = this.value;
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    helperText: {
      type: String,
    },
    length: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    placeholder: {
      type: String,
    },
    readonly: {
      type: Boolean,
    },
    value: {
      type: [String, Number],
    },
    lazy: {
      type: Boolean,
    },
    invalid: {
      type: Boolean,
    },
    invalidText: {
      type: String,
    },
    valid: {
      type: Boolean,
      default: null,
    },
    formatter: {
      type: Function,
      default: (val) => val,
    },
  },
};
</script>

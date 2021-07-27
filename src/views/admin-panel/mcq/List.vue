<template>
  <div class="admin-questions container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10">
        <div class="header mt-md-5">
          <div class="header-body">
            <div class="row align-items-end">
              <div class="col">
                <h6 class="header-pretitle">
                  MCQ / Bank
                </h6>
                <h1 class="header-title">
                  Dashboard
                </h1>
              </div>

              <div class="col-auto">
                <b-button
                  variant="primary"
                  :to="{name: 'admin-mcq'}"
                >
                  Create New
                </b-button>
              </div>

            </div>
          </div>
        </div>

        <b-table
          striped
          hover
          :items="questions"
          :fields="fields"
        >
          <template slot="subject" slot-scope="data">
            {{ data.value.label ? data.value.label : data.value }}
          </template>

          <template slot="chapter" slot-scope="data">
            {{ data.value.label ? data.value.label : data.value }}
          </template>

          <template slot="question" slot-scope="data">
            <div class="question-topic" v-html="data.value.topic"></div>
          </template>

          <template slot="level" slot-scope="data">
            {{ data.value }}
          </template>

          <template slot="options" slot-scope="row">
            {{ row.item.question.options.length }}

            <div class="float-right">
              <b-link
                href="#"
                @click.stop="row.toggleDetails"
              >
                <i class="fal fa-eye"></i>
              </b-link>
            </div>
          </template>

          <template
            slot="row-details"
            slot-scope="row"
          >
            <dl class="w-100">
              <template
                v-for="(answer, index) in row.item.question.options"
              >
                <div :key="index" class="row">
                  <dt class="col-sm-9">
                    <span v-html="answer.topic"></span>
                  </dt>
                  <dd class="col-sm-3"> {{ answer.isCorrect ? 'Correct option' : 'Wrong option' }} </dd>
                </div>
              </template>
            </dl>
          </template>

          <template slot="actions" slot-scope="data">
            <div class="float-right">
              <b-dropdown variant="link" size="lg" no-caret>
                <template slot="button-content" class="p-0">
                  <i class="fal fa-ellipsis-v"></i>
                  <span class="sr-only">Actions</span>
                </template>
                <b-dropdown-item href="#">Show</b-dropdown-item>
                <b-dropdown-item href="#">Edit</b-dropdown-item>
                <b-dropdown-item href="#">Delete</b-dropdown-item>
              </b-dropdown>
            </div>
          </template>
        </b-table>
      </div>

    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapGetters, mapActions } = createNamespacedHelpers('mcq')

export default {
  data () {
    return {
      fields: ['subject', 'chapter', 'question', 'level', 'options', 'actions']
    }
  },
  computed: {
    ...mapGetters(['questions'])
  },
  created () {
    this.fetchQuestions()
  },
  methods: {
    ...mapActions(['fetchQuestions'])
  }
}
</script>

<style lang="scss" scoped>
  /deep/ table {

    .question-topic {
      p {
        margin-bottom: 0;
      }
    }

    .b-dropdown {
      button {
        padding: 0 !important;
      }
    }
  }
</style>

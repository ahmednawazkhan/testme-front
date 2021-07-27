import subjectsData from '../../../assets/sections.json'
import Subject from '../../../models/subject'
import Chapter from '../../../models/chapter.js'

function loadSubjects () {
  const subjects = localStorage.getItem('subjectOptions')

  if (subjects !== 'undefined') {
    return JSON.parse(subjects)
  }

  return subjectsData.map(data => Subject.build(data))
}

function loadQuestions () {
  const questions = localStorage.getItem('mcqBank')

  if (questions) {
    return JSON.parse(questions)
  }

  return []
}

/**
 * @type {import('vuex').Module}
 */
export const mcq = {
  namespaced: true,
  state: {
    subjects: [],
    questions: []
  },
  mutations: {
    setSubjects (state, payload) {
      state.subjects = payload
    },
    setQuestions (state, payload) {
      state.questions = payload
    },
    addSubject (state, payload) {
      state.subjects.push(payload)
      localStorage.setItem('subjectOptions', JSON.stringify(state.subjects))
    },
    addChapter (state, { subject, chapter }) {
      subject.chapters.push(chapter)
      localStorage.setItem('subjectOptions', JSON.stringify(state.subjects))
    },
    addQuestion (state, payload) {
      state.questions.push(payload)
      localStorage.setItem('mcqBank', JSON.stringify(state.questions))
    }
  },
  actions: {
    fetchSubjects ({ commit }) {
      // TODO: Implement real ajax logic to fetch data from server
      const subjects = loadSubjects()

      commit('setSubjects', subjects)
    },
    fetchQuestions ({ commit }) {
      // TODO: Implement real ajax logic to fetch data from server
      const questions = loadQuestions()

      commit('setQuestions', questions)
    },
    createSubject ({ state, commit }, payload) {
      // TODO: Implement real ajax logic to fetch data from server
      if (!state.subjects.find(item => item.label === payload)) {
        const subject = new Subject(payload)

        commit('addSubject', subject)

        return subject
      }
    },
    createChapter ({ state, commit }, { subject, chapter }) {
      const targetSubject = state.subjects.find(item => item.label === subject)
      let theChapter = null

      if (targetSubject &&
        !targetSubject.chapters.find(item => item.label === chapter)) {
        theChapter = new Chapter(chapter)
        theChapter.id = targetSubject.chapters.length
      }

      commit('addChapter', { subject: targetSubject, chapter: theChapter })

      return theChapter
    },
    createQuestion ({ state, commit }, payload) {
      // TODO: Implement logics to save question on server
      commit('addQuestion', payload)
    }
  },
  getters: {
    subjects: (state) => state.subjects,
    questions: (state) => state.questions
  }
}

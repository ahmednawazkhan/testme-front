import Chapter from './chapter'

export default class Subject {
  constructor (label = null) {
    if (label) this.label = label

    this.chapters = []
  }

  setChapters (data) {
    this.chapters = data
  }

  addChapter (data) {
    this.chapters.push(data)
  }

  get isNew () {
    return this.id === undefined
  }

  static build (data) {
    const subject = new Subject()

    if (data.id) subject.id = data.id

    if (data.label) subject.label = data.label

    if (data.chapters) {
      subject.chapters = data.chapters.map((chapter) => Chapter.build(chapter))
    }

    return subject
  }
}

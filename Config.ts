export const Config = {
  title: 'dfg study',
  description: '',
  questionsRemote: null,
  // questionsConfig: fs.readFileSync('./questions.yaml', 'utf8')
}

export const tmpQuestionsConfig = `# element group
type: photo_evaluation

# Photo ID to map the evaluation to
id: '<study>:<username>'

# Question to be displayed
question: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et'

# Site title
label: 'Photo Evaluation'

# sites in question
pages:
  -
    type: 'page'
    id: '<photo>:<username>'
    label: '<question title 1>'
    # Question to be displayed
    question: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et'
    answers:
      -
        answer: 'Family'
        inputType: 'radio' # choose between radio, checkbox and slider
      -
        answer: 'Friends'
        inputType: 'checkbox'
      -
        answer: 'Collegues'
        inputType: 'slider'
  -
    type: 'page'
    id: '<photo>:<username>'
    label: '<question title 2>'
    # Question to be displayed
    question: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et'
    answers:
      -
        answer: 'Family'
        inputType: 'radio' # choose between radio, checkbox and slider
      -
        answer: 'Friends'
        inputType: 'checkbox'
      -
        answer: 'Collegues'
        inputType: 'slider'

`
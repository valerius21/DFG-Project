import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

const q = async (req: NextApiRequest, res: NextApiResponse) => {
    const tmpQuestions = `# element group
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
    label: '<question title>'
    # Question to be displayed
    question: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et'
    answers:
      -
        answer: 'Family'
        inputType: 'radioButton'
      -
        answer: 'Friends'
        inputType: 'checkBox'
      -
        answer: 'Collegues'
        inputType: 'slider'

`
    res.json(await yaml.loadAll(tmpQuestions))
}

// q(null, null)

export default q


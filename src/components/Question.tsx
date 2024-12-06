import React, { useEffect, useState } from 'react'
import { getRandomNumber } from '../helpers/randomNumber'

type Props = {
    questions: {question: string, answer: string}[]
}

const Question = (props: Props) => {
    const { questions } = props
    const [question, setQuestion] = useState({})
    const [showAnswer, setShowAnswer] = useState(false)
    useEffect(() => {
        setQuestion(questions[getRandomNumber()])
    }, [])
  return (
    <div className="space-y-8 flex flex-col justify-center">
		<div className="space-y-6">
			<h2 className="text-3xl faculty font-semibold text-center">{ question.question }</h2>
		</div>

        {
            showAnswer ? (
                <div className="bg-slate-900 rounded-lg px-4 py-3">
					<h2 className="text-xl faculty font-semibold text-center">{ question.answer }</h2>
				</div>
            ) : (
                <button onClick={() => setShowAnswer(true)} className="bg-slate-900 w-1/3 mx-auto px-4 py-3 rounded-lg border-4 border-gray-300 font-bold text-xl">Ver respuesta</button>
            )
        }
	</div>
  )
}

export default Question
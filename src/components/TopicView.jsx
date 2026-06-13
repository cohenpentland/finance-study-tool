import React, { useState } from 'react';
import StudyPanel from './StudyPanel.jsx';
import Flashcard from './Flashcard.jsx';
import Quiz from './Quiz.jsx';
import CVPCalculator from './CVPCalculator.jsx';
import AccountingEquation from './AccountingEquation.jsx';

const MODES = [
  { id: 'study', label: 'Study' },
  { id: 'cards', label: 'Flashcards' },
  { id: 'quiz', label: 'Quiz' },
];

export default function TopicView({ topic, questions, cards, onBack, onProgress }) {
  const [mode, setMode] = useState('study');
  // Interactive tool for the topics that have one.
  const tool = topic.id === 8 ? 'cvp' : topic.id === 5 ? 'equation' : null;

  return (
    <div>
      <button onClick={onBack} className="mb-4 text-sm text-slate-400 hover:text-white">← All topics</button>
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white">{topic.title}</h2>
        <p className="mt-1 text-sm text-slate-400">{topic.marks} marks · {topic.priority} priority · {topic.week}</p>
      </div>

      <div className="mb-6 inline-flex rounded-lg border border-slate-800 bg-slate-900 p-1">
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition ${mode === m.id ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {mode === 'study' && (
        <div className="space-y-6">
          <StudyPanel topicId={topic.id} cards={cards} />
          {tool === 'cvp' && <CVPCalculator />}
          {tool === 'equation' && <AccountingEquation />}
        </div>
      )}
      {mode === 'cards' && <Flashcard topicId={topic.id} cards={cards} onProgress={onProgress} />}
      {mode === 'quiz' && <Quiz topicId={topic.id} questions={questions} onProgress={onProgress} />}
    </div>
  );
}

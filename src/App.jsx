import React, { useState, useCallback } from 'react';
import topics from './data/topics.js';
import quizzes from './data/questionBank.js';
import flashcards from './data/flashcards.js';
import { load } from './lib/storage.js';
import TopicList from './components/TopicList.jsx';
import TopicView from './components/TopicView.jsx';
import MockExam from './components/MockExam.jsx';
import ProgressDashboard from './components/ProgressDashboard.jsx';
import FormulaSheet from './components/FormulaSheet.jsx';
import WorkedStatements from './components/WorkedStatements.jsx';

const totalMarks = topics.reduce((s, t) => s + t.marks, 0);
const totalQuestions = Object.values(quizzes).flat().length;

export default function App() {
  const [view, setView] = useState('topics'); // topics | topic | mockExam | dashboard
  const [topicId, setTopicId] = useState(null);
  // `progress` is a snapshot used for display; bump `rev` to force a re-read
  // after any write so the dashboard/badges stay current.
  const [rev, setRev] = useState(0);
  const progress = load();
  const refresh = useCallback(() => setRev((r) => r + 1), []);

  const openTopic = (id) => { setTopicId(id); setView('topic'); };
  const home = () => { setView('topics'); setTopicId(null); refresh(); };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-900/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <button onClick={home} className="text-left">
            <h1 className="text-base font-bold text-white sm:text-lg">Finance Final — Study Tool</h1>
            <p className="text-xs text-slate-400">Swinburne Week 12 · {topics.length} topics · {totalMarks} marks · {totalQuestions} questions</p>
          </button>
          <nav className="flex gap-2 text-sm">
            <NavBtn active={view === 'topics'} onClick={home}>Topics</NavBtn>
            <NavBtn active={view === 'statements'} onClick={() => setView('statements')}>Statements</NavBtn>
            <NavBtn active={view === 'formulas'} onClick={() => setView('formulas')}>Formulas</NavBtn>
            <NavBtn active={view === 'dashboard'} onClick={() => setView('dashboard')}>Progress</NavBtn>
            <NavBtn active={view === 'mockExam'} onClick={() => setView('mockExam')} accent>Mock Exam</NavBtn>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        {view === 'topics' && (
          <TopicList topics={topics} quizzes={quizzes} flashcards={flashcards} progress={progress} onOpen={openTopic} key={rev} />
        )}
        {view === 'topic' && topicId != null && (
          <TopicView topic={topics.find((t) => t.id === topicId)} questions={quizzes[topicId] || []} cards={flashcards[topicId] || []} onBack={home} onProgress={refresh} />
        )}
        {view === 'formulas' && <FormulaSheet />}
        {view === 'statements' && <WorkedStatements />}
        {view === 'mockExam' && (
          <MockExam topics={topics} quizzes={quizzes} onExit={() => { setView('topics'); refresh(); }} />
        )}
        {view === 'dashboard' && (
          <ProgressDashboard topics={topics} quizzes={quizzes} flashcards={flashcards} progress={progress} onOpenTopic={openTopic} onChange={refresh} key={rev} />
        )}
      </main>

      <footer className="mx-auto max-w-5xl px-4 pb-10 pt-4 text-center text-xs text-slate-600">
        Works fully offline · progress saved on this device
      </footer>
    </div>
  );
}

function NavBtn({ active, accent, onClick, children }) {
  const base = 'rounded-lg px-3 py-1.5 font-medium transition';
  const cls = accent
    ? `${base} ${active ? 'bg-emerald-500 text-slate-900' : 'bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25'}`
    : `${base} ${active ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-800'}`;
  return <button onClick={onClick} className={cls}>{children}</button>;
}

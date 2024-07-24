import React, { useState } from 'react';

// Example topics data
const topics = ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5'];

const cards = [
  { id: 1, topic: 'Topic 1' },
  { id: 2, topic: 'Topic 2' },
  { id: 3, topic: 'Topic 3' },
  { id: 4, topic: 'Topic 4' },
  { id: 5, topic: 'Topic 5' },
  { id: 6, topic: 'Topic 1' },
  { id: 7, topic: 'Topic 2' },
  { id: 8, topic: 'Topic 3' },
];

const ExploreTopics = () => {
  const [selectedTopic, setSelectedTopic] = useState('All');

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const filteredCards = selectedTopic === 'All' ? cards : cards.filter(card => card.topic === selectedTopic);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Explore Topics</h1>
        <a href="#" className="text-blue-500 hover:underline">View All</a>
      </div>
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 font-semibold ${selectedTopic === 'All' ? 'border-b-2 border-black' : ''}`}
          onClick={() => handleTopicClick('All')}
        >
          All
        </button>
        {topics.map((topic) => (
          <button
            key={topic}
            className={`px-4 py-2 font-semibold ${selectedTopic === topic ? 'border-b-2 border-black' : ''}`}
            onClick={() => handleTopicClick(topic)}
          >
            {topic}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <div key={card.id}>
<div className="block mt-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rosetta Workshop</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Rosetta Workshop is a week-long, immersive experience, targeted to new Rosetta users seeking to become more proficient through Rosetta's most accessible interfaces. It has been offered online and in-person.</p>
    </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreTopics;

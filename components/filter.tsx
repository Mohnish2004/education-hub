import React, { useState } from 'react';

// Example topics data
const topics = ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5'];

const cards = [
  { id: 1, topic: 'Topic 1', description: 'This is a description of Topic 1' },
  { id: 2, topic: 'Topic 2', description: 'This is a description of Topic 2' },
  { id: 3, topic: 'Topic 3', description: 'This is a description of Topic 3' },
  { id: 4, topic: 'Topic 4', description: 'This is a description of Topic 4' },
  { id: 5, topic: 'Topic 5', description: 'This is a description of Topic 5' },
  { id: 6, topic: 'Topic 1', description: 'This is a description of Topic 1' },
  { id: 7, topic: 'Topic 2', description: 'This is a description of Topic 2' },
  { id: 8, topic: 'Topic 3', description: 'This is a description of Topic 3' },
];

const ExploreTopics = () => {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setDropdownOpen(false); // Close dropdown after selecting a topic
  };

  const filteredCards = selectedTopic === 'All' ? cards : cards.filter(card => card.topic === selectedTopic);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Explore Topics</h1>
        <a href="/documents/introduction" className=" text-[#196A76] hover:underline">View All</a>
      </div>
      {/* Buttons for larger screens */}
      <div className="hidden sm:flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 font-semibold ${selectedTopic === 'All' ? 'bg-[#F2FBFC] text-[#196A76] rounded-full dark:bg-[#196A76] dark:text-white' : ''}`}
          onClick={() => handleTopicClick('All')}
        >
          All
        </button>
        {topics.map((topic) => (
          <button
            key={topic}
            className={`px-4 py-2 font-semibold ${selectedTopic === topic ? 'bg-[#F2FBFC] text-[#196A76] rounded-full dark:bg-[#196A76] dark:text-white' : ''}`}
            onClick={() => handleTopicClick(topic)}
          >
            {topic}
          </button>
        ))}
      </div>
      {/* Dropdown for smaller screens */}
      <div className="sm:hidden mb-6">
        <button
          className="px-4 py-2 font-semibold bg-[#F2FBFC] text-[#196A76] dark:bg-[#196A76] dark:text-white rounded-full w-full text-left"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {selectedTopic} {dropdownOpen ? '▲' : '▼'}
        </button>
        {dropdownOpen && (
          <div className="mt-2 flex flex-col space-y-2">
            <button
              className={`px-4 py-2 font-semibold ${selectedTopic === 'All' ? 'bg-[#F2FBFC] text-[#196A76] rounded-full dark:bg-[#196A76] dark:text-white' : ''}`}
              onClick={() => handleTopicClick('All')}
            >
              All
            </button>
            {topics.map((topic) => (
              <button
                key={topic}
                className={`px-4 py-2 font-semibold ${selectedTopic === topic ? 'bg-[#F2FBFC] text-[#196A76] dark:bg-[#196A76] dark:text-white rounded-full' : ''}`}
                onClick={() => handleTopicClick(topic)}
              >
                {topic}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <div key={card.id}>
            <div className="block mt-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#12363c45] dark:border-[#10292db4] dark:hover:bg-[#196a7640]">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.topic}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreTopics;

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
    
    <div className="max-w-6xl mx-auto p-2">
<div className="max-w-7xl mt-2 mx-auto px-4 py-2 sm:px-6 lg:px-8 lg:py-2">
  <div className="max-w-4xl mx-auto text-center mb-5 lg:mb-5">
    <h2 className="lg:text-4xl md: text-3xl sm:text-5xl font-bold md:text-4xl md:leading-tight dark:text-white">One Tool, Many Users</h2>
  </div>

  <div className="grid sm:grid-cols-7 gap-8">
  <a className="group sm:col-span-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10">
    <div className="aspect-w-16 aspect-h-9">
      <img className="w-full h-full object-cover rounded-xl" src="/card4.png" alt="Blog Image"></img>
    </div>
    <h1 className="mt-5 font-bold text-lg text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">For new and existing users.</h1>
    <p className="mt-2 text-sm text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
  </a>

  <a className="group sm:col-span-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10">
    <div className="aspect-w-16 aspect-h-9">
      <img className="w-full h-xl object-cover rounded-xl" src="/card5.png" alt="Blog Image"></img>
    </div>
    <h1 className="mt-5 font-bold text-lg text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">Explore a variety of resources and modules.</h1>
    <p className="mt-2 text-sm text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
  </a>

  <a className="group sm:col-span-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10">
    <div className="aspect-w-16 aspect-h-9">
      <img className="w-70 h-82 object-cover rounded-xl" src="/card4.png" alt="Blog Image"></img>
    </div>
    <h1 className="mt-5 font-bold text-lg text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">For new and existing users.</h1>
    <p className="mt-2 text-sm text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do</p>
  </a>
</div>
</div>


<div className="py-2 px-4 mb-20 mt-10 max-w-screen-7xl sm:py-1 lg:px-1">
  <div className="mx-auto max-w-screen-lg text-left p-6 bg-[#F2FBFC] dark:bg-[#052529] rounded-2xl">
    <h2 className="mb-10 text-4xl tracking-tight font-extrabold leading-tight text-[#196A76] dark:text-[#ffffff]">
      Getting Started
    </h2>
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <p className="mb-4 sm:mb-0 max-w-3xl leading-light tracking-light font-normal text-gray-500 dark:text-gray-100 md:text-lg">
        New to Rosetta Commons? Check out the getting started guides that contain an introduction to Rosetta Common’s main concepts and links to and resources.
      </p>
      <a
        href="/documents/introduction"
        className="text-white bg-[#078B9F] dark:bg-[#078B9F] dark:white hover:bg-gray-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 sm:mt-0 sm:ml-4 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
      >
        View Guides
      </a>
    </div>
  </div>
</div>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Explore Topics</h1>
        <a href="/documents/introduction" className=" text-[#078A9F] hover:underline">View All</a>
      </div>
      {/* Buttons for larger screens */}
      <div className="hidden sm:flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 font-semibold ${selectedTopic === 'All' ? 'bg-[#F2FBFC] text-[#078A9F] rounded-xl dark:bg-[#078A9F] dark:text-white' : ''}`}
          onClick={() => handleTopicClick('All')}
        >
          All
        </button>
        {topics.map((topic) => (
          <button
            key={topic}
            className={`px-4 py-2 font-semibold ${selectedTopic === topic ? 'bg-[#F2FBFC] text-[#078A9F] rounded-xl dark:bg-[#078A9F] dark:text-white' : ''}`}
            onClick={() => handleTopicClick(topic)}
          >
            {topic}
          </button>
        ))}
      </div>
      {/* Dropdown for smaller screens */}
      <div className="sm:hidden mb-6">
        <button
          className="px-4 py-2 font-semibold bg-[#F2FBFC] text-[#078A9F] dark:bg-[#078A9F] dark:text-white rounded-xl w-full text-left"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {selectedTopic} {dropdownOpen ? '▲' : '▼'}
        </button>
        {dropdownOpen && (
          <div className="mt-2 flex flex-col space-y-2">
            <button
              className={`px-4 py-2 font-semibold ${selectedTopic === 'All' ? 'bg-[#F2FBFC] text-[#078A9F] rounded-xl dark:bg-[#078A9F] dark:text-white' : ''}`}
              onClick={() => handleTopicClick('All')}
            >
              All
            </button>
            {topics.map((topic) => (
              <button
                key={topic}
                className={`px-4 py-2 font-semibold ${selectedTopic === topic ? 'bg-[#F2FBFC] text-[#078A9F] dark:bg-[#078A9F] dark:text-white rounded-xl' : ''}`}
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
            <div className="block mt-2 max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow hover:bg-gray-100 dark:bg-[#12363c45] dark:border-[#10292db4] dark:hover:bg-[#39828d40]">
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

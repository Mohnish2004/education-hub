const releaseNotes = [
    {
      version: "Lorem Ipsum v2.0.0",
      latest: true,
      date: "January 13th, 2022",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      link: "#",
      linkText: "View module →",
      status: "latest" // Can be "latest", "removed", "updated"
    },
    {
      version: "Lorem Ipsum v1.3.0",
      latest: false,
      date: "Released on December 7th, 2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Nulla facilisi.",
      status: "updated",
      link: "#",
      linkText: "View Resources →",
    },
    {
      version: "Lorem Ipsum v1.2.2",
      latest: false,
      date: "Released on December 2nd, 2021",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      status: "removed"
    }
  ];
  
  const statusColors = {
    latest: {
      bg: "bg-blue-100 rounded-full ml-4 dark:bg-blue-900",
      text: "text-blue-800 dark:text-blue-300"
    },
    removed: {
      bg: "bg-red-100 rounded-full ml-4 dark:bg-red-900",
      text: "text-red-800 dark:text-red-300"
    },
    updated: {
      bg: "bg-green-100 rounded-full ml-4 dark:bg-green-900",
      text: "text-green-800 dark:text-green-300"
    }
  };
  
  const ReleaseNotes = () => (
<div className="max-w-7xl mt-6 mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-4">
    <div className="mb-20">
  <h1 className="text-5xl font-bold">Release Notes</h1>
  <p className="mt-4 text-md font-light max-w-prose">
    Stay updated on the newest modules and changes for Rosetta Commons Education Hub. To learn more about Rosetta Commons, please visit their <span className="text-[#078FA4] text-md font-semibold ">main website</span>
  </p>
</div>

  
      <ol className="relative border-gray-200 dark:border-gray-700">
        {releaseNotes.map((note, index) => (
          <li key={index} className="mb-10 border-b ">
            <time className="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{note.date}</time>
            <h3 className="flex items-center mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              {note.version}
              {note.status && (
                <span className={`ml-2 px-2.5 py-0.5 rounded text-sm font-medium ${statusColors[note.status].bg} ${statusColors[note.status].text}`}>
                  {note.status.charAt(0).toUpperCase() + note.status.slice(1)}
                </span>
              )}
            </h3>
            <p className="mb-2 max-w-prose text-base font-normal text-gray-500 dark:text-gray-400">{note.description}</p>
            {note.link && (
              <a href={note.link} className="block text-[#078FA4] hover:text-[#055f7a] font-semibold text-right mb-2">{note.linkText}</a>
              
            )}
                        <br></br>

          </li>
        ))}
      </ol>
    </div>
  );
  
  export default ReleaseNotes;
  
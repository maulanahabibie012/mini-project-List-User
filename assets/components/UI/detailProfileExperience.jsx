export default function DetailProfileExperiences() {
    const experiences = [
        {
            title: 'Senior Tour Guide',
            company: 'Venice Explore Tours',
            period: 'January 2015 - Present',
            description: 'Leading and managing group tours across Venice, providing engaging and informative experiences, ensuring customer satisfaction and safety.',
            icon: '🏛️'
        },
        {
            title: 'Tour Guide',
            company: 'Historical Venice Walks',
            period: 'June 2010 - December 2014',
            description: 'Conducted guided tours focusing on the history and culture of Venice, developed tour scripts, and trained new tour guides.',
            icon: '🏰'
        }
    ];

    return (
        <div className="px-4 sm:px-8 mt-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">Experiences</h2>
            <div className="space-y-6">
                {experiences.map((exp) => (
                    <div key={exp.title} className="flex gap-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-olive-50 dark:bg-olive-900/30 rounded-xl text-2xl">
                            {exp.icon}
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{exp.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400">{exp.company} • {exp.period}</p>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
import { CheckCircle } from 'lucide-react';

export default function DetailProfileSkills() {
    const skills = [
        'Fluent in English, Italian, and French',
        'Excellent communication and storytelling',
        'In-depth knowledge of Venetian history and culture',
        'Customer service and hospitality',
        'Navigation and safety management'
    ];

    return (
        <div className="px-4 sm:px-8 mt-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">Skills</h2>
            <div className="space-y-3">
                {skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-olive-600 dark:text-olive-300" />
                        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
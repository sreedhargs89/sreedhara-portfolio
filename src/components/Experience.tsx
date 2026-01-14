import { experience } from '../data/resume';

const Experience = () => {
  const companyLogos: Record<string, string> = {
    'Asahi Group Holdings': 'A',
    'SAP Labs India Pvt Ltd': 'SAP',
    'Samsung R&D Institute India': 'S',
    'Nokia R&D Institute India': 'N',
  };

  const companyColors: Record<string, string> = {
    'Asahi Group Holdings': 'from-red-500 to-red-600',
    'SAP Labs India Pvt Ltd': 'from-blue-500 to-blue-700',
    'Samsung R&D Institute India': 'from-blue-600 to-indigo-600',
    'Nokia R&D Institute India': 'from-blue-400 to-blue-600',
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">Work Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-200" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} pl-8 md:pl-0`}>
                  <div className={`bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                    {/* Company Header */}
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${companyColors[job.company]} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                        {companyLogos[job.company]}
                      </div>
                      <div className={index % 2 === 0 ? '' : 'md:text-right'}>
                        <h3 className="text-lg font-bold text-gray-900">{job.company}</h3>
                        <p className="text-sm text-gray-500">{job.location}</p>
                      </div>
                    </div>

                    {/* Role & Period */}
                    <div className={`mb-4 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                      <h4 className="text-blue-600 font-semibold">{job.role}</h4>
                      <p className="text-sm text-gray-500">{job.period}</p>
                    </div>

                    {/* Highlights */}
                    <ul className={`space-y-2 ${index % 2 === 0 ? '' : 'md:text-left'}`}>
                      {job.highlights.slice(0, 4).map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{highlight}</span>
                        </li>
                      ))}
                      {job.highlights.length > 4 && (
                        <li className="text-sm text-blue-600 font-medium pl-7">
                          +{job.highlights.length - 4} more achievements
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

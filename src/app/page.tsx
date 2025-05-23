'use client'

import ImageFallback from '@/app/components/ImageFallback'

export default function Home() {
  return (
    <section className="py-12">
      <div className="glass-card p-8">
        <h2 className="display-5 text-center mb-8 gradient-text">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="lead text-gray-300 mb-8">
              Experienced backend developer specializing in .NET technologies and API development. 
              Proven track record in modernizing legacy systems into modular applications and 
              designing robust REST APIs. Passionate about clean code architecture and building 
              scalable enterprise solutions.
            </p>
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'C#', '.NET Framework', 'WPF', 
                  'WCF', 'REST API', 'Modular Architecture', 
                  'MySQL', 'Oracle', 'AWS',
                  'Legacy System Modernization', 'TypeScript', 'React'
                ].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full text-sm bg-[#162040] text-gray-200 border border-white/20 hover:border-amber-300/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative min-h-[600px] rounded-2xl overflow-hidden glass-card">
            <ImageFallback
              src="https://i.imgur.com/OGVUBaN.png"
              fallbackSrc="/images/anime-profile.png"
              alt="Profile"
              style={{ objectPosition: 'center top' }}
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
function AboutPage() {
  return (
    <div class="space-y-8">
      <section class="bg-white rounded-2xl p-8 shadow-lg">
        <h1 class="text-4xl font-bold text-slate-800 mb-8 text-center">About Me</h1>
        
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div class="w-64 h-64 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span class="text-8xl">👨‍💻</span>
            </div>
          </div>
          
          <div class="space-y-6">
            <div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-6">
              <h3 class="text-2xl font-semibold text-slate-800 mb-4">Professional Summary</h3>
              <p class="text-lg text-slate-700 leading-relaxed">
                BSc IT student at North-West University with proven teaching and mentoring experience. 
                MATLAB certified with strong programming skills in Python, C#, and Java. 
                Award-winning cybersecurity competitor and Golden Key member with a passion for 
                technology education and hands-on learning.
              </p>
            </div>
            
            <p class="text-lg text-slate-600 leading-relaxed">
              Hi! I'm Carlo Barnardo, a BSc IT student at North-West University in South Africa with 
              a strong academic record and practical teaching experience. I've had the privilege of 
              working as a Student Assistant, helping fellow students with Python and C# programming, 
              which has deepened my understanding of these languages.
            </p>
            
            <p class="text-lg text-slate-600 leading-relaxed">
              My journey in technology is driven by both academic excellence and real-world application. 
              I'm passionate about cybersecurity, having competed in the SANReN Cyber Security Challenge 
              and AFRICC, while also maintaining strong programming skills across multiple languages 
              including MATLAB, Java, and C#.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section class="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8">
        <h2 class="text-3xl font-bold text-slate-800 mb-8 text-center">Technical Skills</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h3 class="text-xl font-semibold text-slate-800 mb-4 flex items-center">
              <span class="mr-2">�</span>
              Programming Languages
            </h3>
            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-slate-600">MATLAB</span>
                <div class="w-24 bg-slate-200 rounded-full h-2">
                  <div class="bg-amber-500 h-2 rounded-full" style="width: 95%"></div>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-600">Python</span>
                <div class="w-24 bg-slate-200 rounded-full h-2">
                  <div class="bg-amber-500 h-2 rounded-full" style="width: 90%"></div>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-600">C#</span>
                <div class="w-24 bg-slate-200 rounded-full h-2">
                  <div class="bg-amber-500 h-2 rounded-full" style="width: 88%"></div>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-600">Java</span>
                <div class="w-24 bg-slate-200 rounded-full h-2">
                  <div class="bg-amber-500 h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-md">
            <h3 class="text-xl font-semibold text-slate-800 mb-4 flex items-center">
              <span class="mr-2">�</span>
              Cybersecurity
            </h3>
            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-slate-600">Security Competitions</span>
                <div class="w-24 bg-slate-200 rounded-full h-2">
                  <div class="bg-amber-500 h-2 rounded-full" style="width: 95%"></div>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-600">Network Security</span>
                <div class="w-24 bg-slate-200 rounded-full h-2">
                  <div class="bg-amber-500 h-2 rounded-full" style="width: 80%"></div>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-600">Penetration Testing</span>
                <div class="w-24 bg-slate-200 rounded-full h-2">
                  <div class="bg-amber-500 h-2 rounded-full" style="width: 75%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-md">
            <h3 class="text-xl font-semibold text-slate-800 mb-4 flex items-center">
              <span class="mr-2">🎓</span>
              Teaching & Mentoring
            </h3>
            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-slate-600">Student Mentoring</span>
                <div class="w-24 bg-slate-200 rounded-full h-2">
                  <div class="bg-amber-500 h-2 rounded-full" style="width: 95%"></div>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-600">Academic Support</span>
                <div class="w-24 bg-slate-200 rounded-full h-2">
                  <div class="bg-amber-500 h-2 rounded-full" style="width: 90%"></div>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-600">Code Review</span>
                <div class="w-24 bg-slate-200 rounded-full h-2">
                  <div class="bg-amber-500 h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section class="bg-white rounded-2xl p-8 shadow-lg">
        <h2 class="text-3xl font-bold text-slate-800 mb-8 text-center">Education & Experience</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
              <span class="mr-2">🎓</span>
              Education
            </h3>
            <div class="space-y-4">
              <div class="border-l-4 border-amber-500 pl-4">
                <h4 class="font-semibold text-slate-800">BSc Information Technology</h4>
                <p class="text-slate-600">North-West University (NWU) • 2023-2026</p>
                <p class="text-sm text-slate-500">Focus on cybersecurity, network security, and software development</p>
                <ul class="text-sm text-slate-500 mt-2 ml-4 list-disc">
                  <li>Golden Key International Honour Society member</li>
                  <li>MATLAB Programming certification</li>
                  <li>Python Programming certification</li>
                  <li>SANReN Cyber Security Competition Winner (2024)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-2xl font-semibold text-slate-800 mb-4 flex items-center">
              <span class="mr-2">💼</span>
              Experience & Projects
            </h3>
            <div class="space-y-4">
              <div class="border-l-4 border-amber-500 pl-4">
                <h4 class="font-semibold text-slate-800">Student Assistant</h4>
                <p class="text-slate-600">North-West University • 2024-Present</p>
                <p class="text-sm text-slate-500">Providing academic support and guidance to fellow students</p>
                <ul class="text-sm text-slate-500 mt-2 ml-4 list-disc">
                  <li>Assisting with MATLAB and programming courses</li>
                  <li>Mentoring students in IT-related coursework</li>
                  <li>Supporting exam preparation and project development</li>
                </ul>
              </div>
              <div class="border-l-4 border-amber-500 pl-4">
                <h4 class="font-semibold text-slate-800">Barista</h4>
                <p class="text-slate-600">Veld Coffee & Smith Coffee • 2022-2024</p>
                <p class="text-sm text-slate-500">Crafting specialty coffee beverages and customer service</p>
                <ul class="text-sm text-slate-500 mt-2 ml-4 list-disc">
                  <li>Expertise in coffee brewing techniques and equipment</li>
                  <li>Customer relationship management and service excellence</li>
                  <li>Developed passion for coffee roasting and brewing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Skills & Achievements */}
      <section class="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8">
        <h2 class="text-3xl font-bold text-slate-800 mb-8 text-center">Professional Skills & Achievements</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h3 class="text-xl font-semibold text-slate-800 mb-4 flex items-center">
              <span class="mr-2">🏆</span>
              Key Achievements
            </h3>
            <ul class="space-y-3 text-slate-600">
              <li class="flex items-start">
                <span class="text-amber-500 mr-2">•</span>
                <span>SANReN Cyber Security Competition Winner (2024)</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-500 mr-2">•</span>
                <span>Golden Key International Honour Society member</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-500 mr-2">•</span>
                <span>MATLAB Programming certification</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-500 mr-2">•</span>
                <span>Python Programming certification</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-500 mr-2">•</span>
                <span>Student Assistant at North-West University</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-500 mr-2">•</span>
                <span>Active GitHub contributor with 27+ repositories</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h3 class="text-xl font-semibold text-slate-800 mb-4 flex items-center">
              <span class="mr-2">🎯</span>
              Career Objectives
            </h3>
            <ul class="space-y-3 text-slate-600">
              <li class="flex items-start">
                <span class="text-amber-500 mr-2">•</span>
                <span>Pursue a career in cybersecurity and ethical hacking</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-500 mr-2">•</span>
                <span>Contribute to open source security tools</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-500 mr-2">•</span>
                <span>Develop expertise in penetration testing</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-500 mr-2">•</span>
                <span>Build innovative security solutions</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-500 mr-2">•</span>
                <span>Share knowledge through mentoring and teaching</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

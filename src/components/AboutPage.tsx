import AboutCards from "./AboutCards"

function AboutPage() {
  return (
    <div class="space-y-6 lg:space-y-8 px-4">
      <section class="bg-white dark:bg-slate-800 rounded-2xl p-4 lg:p-8 shadow-lg">
        <h1 class="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-6 lg:mb-8 text-center">About Me</h1>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div class="order-2 lg:order-1">
            <div class="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-6 lg:mb-8 flex items-center justify-center">
              <img src="src\assets\Carlo_Barnardo_SouthAfrica.JPG" alt="" srcset="" class="rounded-full m-10 p-10" />
            </div>
          </div>
          
          <div class="space-y-4 lg:space-y-6 order-1 lg:order-2">
            <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-4 lg:p-6 mb-4 lg:mb-6">
              <h3 class="text-xl lg:text-2xl font-semibold text-slate-800 dark:text-white mb-3 lg:mb-4">Professional Summary</h3>
              <p class="text-base lg:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                BSc IT student at North-West University with proven teaching and mentoring experience. 
                MATLAB certified with strong programming skills in Python, C#, and Java. 
                Award-winning cybersecurity competitor and Golden Key member with a passion for 
                technology education and hands-on learning.
              </p>
            </div>
            
            <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Hi! I'm Carlo Barnardo, a BSc IT student at North-West University in South Africa with 
              a strong academic record and practical teaching experience. I've had the privilege of 
              working as a Student Assistant, helping fellow students with Python and C# programming, 
              which has deepened my understanding of these languages.
            </p>
            
            <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My journey in technology is driven by both academic excellence and real-world application. 
              I'm passionate about cybersecurity, having competed in the SANReN Cyber Security Challenge 
              and AFRICC, while also maintaining strong programming skills across multiple languages 
              including MATLAB, Java, and C#.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section class="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8">
        <h2 class="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">Technical Skills</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AboutCards title="Programming Languages" skills={["MATLAB", "Python", "C#", "JAVA"]} levels={[95, 90, 88,60]} icon="💻" />
          <AboutCards title="Cybersecurity" skills={["Security Competitions", "Network Security", "Penetration Testing"]} levels={[90, 85, 80]} icon="🛡️" />
          <AboutCards title="Teaching & Mentoring" skills={["Student Mentoring", "Academic Support", "Code Review"]} levels={[95, 90, 85]} icon="👩‍🏫" />
          <AboutCards title="Web Development" skills={["HTML", "CSS", "JavaScript", "React"]} levels={[85, 80, 75, 70]} icon="🌐" />
          <AboutCards title="Game Development" skills={["GODOT", "C#", "Game Design"]} levels={[80, 75, 70]} icon="🎮" />
        </div>
      </section>

      {/* Education & Experience */}
      <section class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
        <h2 class="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">Education & Experience</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
              <span class="mr-2">🎓</span>
              Education
            </h3>
            <div class="space-y-4">
              <div class="border-l-4 border-amber-500 pl-4">
                <h4 class="font-semibold text-slate-800 dark:text-white">BSc Information Technology</h4>
                <p class="text-slate-600 dark:text-slate-300">North-West University (NWU) • 2023-2026</p>
                <p class="text-sm text-slate-500 dark:text-slate-400">Focus on cybersecurity, network security, and software development</p>
                <ul class="text-sm text-slate-500 dark:text-slate-400 mt-2 ml-4 list-disc">
                  <li>Golden Key International Honour Society member</li>
                  <li>MATLAB Programming certification</li>
                  <li>Python Programming certification</li>
                  <li>SANReN Cyber Security Competition Winner (2024)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-2xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
              <span class="mr-2">💼</span>
              Experience & Projects
            </h3>
            <div class="space-y-4">
              <div class="border-l-4 border-amber-500 pl-4">
                <h4 class="font-semibold text-slate-800 dark:text-white">Student Assistant</h4>
                <p class="text-slate-600 dark:text-slate-300">North-West University • 2024-Present</p>
                <p class="text-sm text-slate-500 dark:text-slate-400">Providing academic support and guidance to fellow students</p>
                <ul class="text-sm text-slate-500 dark:text-slate-400 mt-2 ml-4 list-disc">
                  <li>Assisting with MATLAB and programming courses</li>
                  <li>Mentoring students in IT-related coursework</li>
                  <li>Supporting exam preparation and project development</li>
                </ul>
              </div>
              <div class="border-l-4 border-amber-500 pl-4">
                <h4 class="font-semibold text-slate-800 dark:text-white">Barista</h4>
                <p class="text-slate-600 dark:text-slate-300">Veld Coffee & Smith Coffee • 2022-2024</p>
                <p class="text-sm text-slate-500 dark:text-slate-400">Crafting specialty coffee beverages and customer service</p>
                <ul class="text-sm text-slate-500 dark:text-slate-400 mt-2 ml-4 list-disc">
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
      <section class="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8">
        <h2 class="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">Professional Skills & Achievements</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
            <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
              <span class="mr-2">🏆</span>
              Key Achievements
            </h3>
            <ul class="space-y-3 text-slate-600 dark:text-slate-300">
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
          
          <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
            <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
              <span class="mr-2">🎯</span>
              Career Objectives
            </h3>
            <ul class="space-y-3 text-slate-600 dark:text-slate-300">
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

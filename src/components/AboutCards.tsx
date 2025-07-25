function AboutCards(props: { title: string, skills: string[], levels: number[], icon: string }) {
    return (
              <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
            <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
              <span class="mr-2">{props.icon}</span>
              {props.title}
            </h3>
            <div class="space-y-2">
                {props.skills.map((skill, index)=>(
                    <div class="flex justify-between items-center">
                <span class="text-slate-600 dark:text-slate-300">{skill}</span>
                <div class="w-24 bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                  <div class="bg-amber-500 h-2 rounded-full" style={`width: ${props.levels[index]}%`}></div>
                </div>
              </div>
                ))}
                </div>
              </div>
  )
}

export default AboutCards
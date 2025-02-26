"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      category: "Mobile Development",
      skills: ["Android", "iOS", "Kotlin", "Swift", "Flutter", "Jetpack Compose", "SwiftUI", "ARKit"],
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "NestJS", "Microservices", "RESTful APIs", "GraphQL"],
    },
    {
      category: "Architecture",
      skills: ["MVVM", "MVI", "Clean Architecture", "Design Patterns"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker","CI/CD", "Jenkins", "GitLab CI", "Git", "Jira", "Firebase"],
    },
    {
      category: "Databases",
      skills: ["SQL", "NoSQL","Redis", "Firestore", "Room", "CoreData"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Technical competencies I've mastered throughout my career.
          </p>
        </div>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-bold">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="bg-muted rounded-full px-4 py-2 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


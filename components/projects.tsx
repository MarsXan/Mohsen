"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Fog Computing Simulator",
      description:
        "Developed a toolkit for fog/edge computing using Java, Kotlin, and Machine Learning, improving simulation accuracy by 30% and reducing processing time by 25%.",
      technologies: ["Java", "Kotlin", "Machine Learning"],
      github: "#",
      demo: "#",
    },
    {
      title: "Crypto Arbitrage Detector",
      description:
        "Created a tool using Nest.js, Angular, and Redis for identifying crypto arbitrage opportunities, achieving a detection accuracy of 90% and generating alerts in real-time.",
      technologies: ["Nest.js", "Angular", "Redis"],
      github: "#",
      demo: "#",
    },
    {
      title: "Android Malware Detector",
      description:
        "Collaborated on a malware detection project using Machine Learning, increasing detection rates by 40% compared to traditional methods.",
      technologies: ["Android", "Machine Learning"],
      github: "#",
      demo: "#",
    },
    {
      title: "Yass",
      description:
        "Developed donation apps for Android, iOS, and web platforms using Flutter, Kotlin, Swift, and Dart, integrating RxDart, Firebase, and a role-based clean architecture.",
      technologies: ["Flutter", "Kotlin", "Swift", "Dart", "Firebase"],
      github: "#",
      demo: "#",
    },
    {
      title: "Time-Tracking App",
      description:
        "Developing a time-tracking and productivity monitoring app similar to Time Doctor using NestJS, with WebSocket integration for real-time tracking and handling user sessions.",
      technologies: ["NestJS", "WebSocket", "React"],
      github: "#",
      demo: "#",
    },
    {
      title: "AirBox: Online Air Mail",
      description:
        "Developed a cross-platform app for Android and iOS that allows users to send and receive packages using drones. Focused on a seamless user experience with real-time tracking, notifications, and efficient delivery management.",
      technologies: ["Android", "iOS", "Real-time Tracking"],
      github: "#",
      demo: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Personal Projects</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Showcasing my passion for innovation and problem-solving.
          </p>
        </div>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


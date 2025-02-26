"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "iOS Developer",
      company: "Forequest",
      location: "Italy (Remote)",
      period: "Apr 2024 – Present",
      description: [
        "Developed Ludovico iOS app using SwiftUI, improving user retention by 15% through advanced animations and seamless user experience.",
        "Utilized Google Cloud Platform (GCP) services like Firestore, Cloud Functions, Storage, and Analytics to build a scalable, cloud-native infrastructure.",
        "Managed technical direction and team coordination, driving efficient project execution and delivery across mobile and backend teams.",
      ],
      skills: ["SwiftUI", "GCP", "Firestore", "Cloud Functions","Firebase","AR"],
    },
    {
      title: "iOS & Android Developer",
      company: "Actifyre",
      location: "Italy (Freelance)",
      period: "Sep 2023 – Nov 2023",
      description: [
        "Developed iOS AR app using SwiftUI, optimizing UI performance by 25% and improving AR experience responsiveness by 30%.",
        "Implemented CI/CD pipelines to streamline development and ensure smooth, continuous delivery.",
        "Developed Android AR app using Jetpack Compose, optimizing UI performance.",
      ],
      skills: ["SwiftUI", "AR", "Jetpack Compose", "CI/CD"],
    },
    {
      title: "Android & iOS Developer",
      company: "Boom",
      location: "Australia (Remote)",
      period: "Sep 2021 – Sep 2023",
      description: [
        "Built iOS apps using SwiftUI and Android with Jetpack Compose, reducing development time by 40% and improving UI performance.",
        "Developed iOS and Android workout platform, increasing user engagement by 20% and reducing app loading time by 35%.",
        "Implemented MVVM and MVI architectures, ensuring maintainable and scalable codebases.",
        "Developed image and video editing tools, along with image processing functionalities for a rich media experience.",
        "Established CI/CD pipelines to automate testing and streamline deployments across both platforms.",
      ],
      skills: ["SwiftUI", "Jetpack Compose", "MVVM", "MVI", "CI/CD"],
    },
    {
      title: "Technical Team Lead",
      company: "Toolbox",
      location: "Tehran, Iran (Part-Time)",
      period: "Jul 2022 – Sep 2023",
      description: [
        "Led the migration from version 5 to 6, incorporating Jetpack and Android Navigation Component to enhance app functionality and performance.",
        "Launched web and PWA apps, increasing user accessibility by 50% and growing platform reach by 15%.",
        "Introduced microservices for the backend, improving scalability and deployment efficiency.",
        "Established a stable DevOps environment, streamlining development and deployment processes.",
        "Spearheaded the development of new features, ensuring a seamless transition during the migration.",
      ],
      skills: ["Jetpack", "Navigation Component", "PWA", "Microservices", "DevOps"],
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
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My professional journey in mobile development.
          </p>
        </div>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>
                        {exp.company} | {exp.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


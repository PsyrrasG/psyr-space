import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineItemClasses,
} from "@mui/lab";
import { Typography, Paper, Box } from "@mui/material";
import { color, motion } from "framer-motion";
import {
  Work as WorkIcon,
  EmojiEvents as AwardIcon,
} from "@mui/icons-material";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const TimelineComponent = () => {
  const timelineData = [
    {
        id: 1,
        title: "Software Engineer",
        place: "Efestos Hub Ltd",
        date: "December 2022 - Present",
        description: "Designed and developed the end-to-end 'Efestos Hub' web app and the 'Efestos Plugin' desktop app. Responsible for the management, maintenance and scaling of the entire Efestos Hub infrustructure.",
        icon: <WorkIcon fontSize="large"/>,
        // color: "secondary"
    },
    {
        id: 2,
        title: "Doctoral Researcher in Structural Engineering",
        place: "City, University of London",
        date: "October 2022 - Present",
        description: "I have been awarded a full PhD scholarship from City, University of London, to examine the behaviour of perforated steel beams. My research work focuses on developing closed-form analytical solutions, computational modelling, and applying machine learning techniques.",
        icon: <FaUniversity className="text-4xl" />,
        // color: "secondary",
    },
    {
        id: 3,
        title: "Construction Manager",
        place: "Artemis ITS GmbH",
        date: "February 2021 - October 2021",
        description: "Worked on multiple FTTx projects in Hessen and Bavaria for Deutche Glasfaser. Daily responsibilities included; planning and supervision of civil works, coordinating works with local authorities and contractors, liaising with the public, and producing the as-built documentation.",
        icon: <WorkIcon fontSize="large" />,
        // color: "success",
    },
    {
        id: 4,
        title: "Research Associate",
        place: "Aristotle University of Thessaloniki",
        date: "April 2019 - June 2020",
        description: "Worked on two EU-funded research projects; validated experimental tests on composite wall systems using numerical and simplified analytical approaches, ensuring accuracy and reliability. Optimised FEA workflows by employing Python scripting both in modelling and post-processing. Developed in-house software solutions, including a VB.NET GUI integrated with Matlab for data processing and visualisation.",
        icon: <WorkIcon fontSize="large" />,
        // color: "warning",
    },
    {
        id: 5,
        title: "Diploma in Civil Engineering",
        place: "Aristotle University of Thessaloniki",
        date: "October 2013 - April 2019",
        description: "Graduated from the Department of Civil Engineering with specialisation in Structural Engineering. Completed coursework includes, among others: Statistics, Mathematics (I, II, III), Numerical Analysis, Informatics and Computer Programming, Numerical Methods in Structural Analysis (I, II), Fluid Mechanics, and Project Management.",
        icon: <FaGraduationCap className="text-4xl" />,
        // color: "warning",
      },
  ];

  return (
    <Box sx={{ width: "100%", maxWidth: 800, mx: "auto", mb: 8}}>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {timelineData.map((item, index) => (
          <TimelineItem key={item.id}>
            <TimelineSeparator>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <TimelineDot color={item.color}>{item.icon}</TimelineDot>
              </motion.div>
              {index < timelineData.length - 1 && (
                <TimelineConnector sx={{ bgcolor: `${item.color}.main` }} />
              )}
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="font-Raleway text-sm lg:text-base"
              >
                <div className="bg-white text-black shadow-lg p-5 lg:p-5 rounded-2xl">
                  <p className="text-base lg:text-lg font-medium">
                    {item.title}
                  </p>
                  <p className="font-medium text-gray-600">
                    {item.place}
                  </p>
                  <p className="text-violet-700">
                    {item.date}
                  </p>
                  <p className="text-black text-left">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default TimelineComponent;
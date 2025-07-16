import React from 'react';
import CourseCard from '../components/CourseCard';

const sampleCourses = [
  {
    id: '1',
    title: 'Web Development Bootcamp',
    description: 'Master HTML, CSS, JS and modern web frameworks.',
    price: 99,
    instructor: 'John Doe',
  },
  {
    id: '2',
    title: 'Advanced React & Redux',
    description: 'Build complex apps with React, Redux, and hooks.',
    price: 149,
    instructor: 'Jane Smith',
  },
  {
    id: '3',
    title: 'Data Structures & Algorithms',
    description: 'Ace coding interviews with solid DSA knowledge.',
    price: 129,
    instructor: 'Peter Jones',
  },
  {
    id: '4',
    title: 'Machine Learning with Python',
    description: 'Dive into ML concepts and hands-on Python models.',
    price: 199,
    instructor: 'Sarah Williams',
  },
  {
    id: '5',
    title: 'Cybersecurity Essentials',
    description: 'Understand threats and protect digital systems.',
    price: 109,
    instructor: 'David Brown',
  },
];

function Home() {
  return (
    <div>
      <section className="text-center py-16 bg-[#0a192f] text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Empower Your Career with Expert-Led Courses</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Learn from top instructors and get job-ready with hands-on, high-impact curriculum.
        </p>
      </section>

      <section className="py-10 px-4 bg-[#112240]">
        <h2 className="text-2xl font-semibold text-center text-accent mb-8">Our Top Courses</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sampleCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
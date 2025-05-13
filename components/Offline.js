'use client'
import React from "react";
import { useEffect, useState } from 'react';
import OfflineClient from "./OfflineClient";
import axios from "axios";

const Offline =  () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
        try {
            const res = await axios.get('/api/courses');
            setCourses(res.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    fetchCourses();
}, []);

if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
  return  <OfflineClient courses={courses} />
};

export default Offline;


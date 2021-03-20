import React from 'react';
import { motion } from 'framer-motion'
import Layout from '../components/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <motion.div 
      initial={{
        opacity: 0,
        y: 300
      }}
       animate={{
         opacity: 1,
         y: 0,
       }}
       exit={{
        opacity: 0,
        y: 300,
      }}
      key="contact">
        <div className="contact">
          <div className="title">
            <h1>Contact</h1>
            <hr />
          </div>
          <div className="content">
            <p>Donec nec ultricies tellus. Aenean sit amet aliquet orci. Ut a nisl velit. Nunc id elit ac purus hendrerit facilisis. Mauris vel facilisis turpis. Sed sapien arcu, congue quis efficitur commodo, accumsan vitae ligula. Vivamus lobortis vel dui at mattis. Duis tincidunt lacinia metus, nec dictum.</p>
            <p>Praesent diam neque, varius a bibendum sit amet, fermentum et libero. Ut quis rutrum est, at cursus justo. In metus diam, luctus non felis a, congue ultricies risus. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vitae euismod justo, at malesuada turpis. Suspendisse sagittis eleifend nibh quis accumsan. Etiam non ante varius, porta enim sit amet.</p>
          </div>       
        </div>
      </motion.div>
    </Layout>
  )
};

export default ContactPage;
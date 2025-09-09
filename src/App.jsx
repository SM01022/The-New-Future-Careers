import { useState } from 'react'
import './App.css'

function App() {
  const webdevImg = "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Web Developer</div>
        <ul className="navbar-links">
        </ul>
      </nav>

      <header className="hero-section">
        <img
          src={webdevImg}
          alt="Web development"
          className="hero-img"
        />
        <h1>อาชีพ Web Developer</h1>
        <p>
          Web Developer คือผู้ที่สร้างและดูแลเว็บไซต์ รวมถึงแอปพลิเคชันบนเว็บ โดยใช้เทคโนโลยีต่าง ๆ เช่น HTML, CSS, JavaScript และ Frameworks ต่าง ๆ
        </p>
        <p style={{ marginTop: "1rem", color: "#b2f5ea" }}>
          อาชีพนี้เหมาะสำหรับผู้ที่ชอบการแก้ปัญหา รักการเรียนรู้เทคโนโลยีใหม่ ๆ และต้องการสร้างสรรค์ผลงานที่ใช้งานได้จริงบนโลกออนไลน์
        </p>
      </header>

      <section className="info-section">
        <h2>ทักษะที่จำเป็น</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>Frontend Frameworks (React, Vue, Angular)</li>
          <li>Backend (Node.js, PHP, Python, etc.)</li>
          <li>Database (MySQL, MongoDB, PostgreSQL)</li>
          <li>Version Control (Git)</li>
          <li>Responsive Design</li>
        </ul>
        <p style={{ marginTop: "1rem", color: "#cfcfcf" }}>
          นอกจากทักษะด้านเทคนิคแล้ว ทักษะการสื่อสารและการทำงานเป็นทีมก็สำคัญมากสำหรับสายงานนี้
        </p>
      </section>

      <section className="info-section">
        <h2>หน้าที่หลัก</h2>
        <ul>
          <li>ออกแบบและพัฒนาเว็บไซต์</li>
          <li>ดูแลและปรับปรุงเว็บไซต์ให้ทันสมัย</li>
          <li>แก้ไขปัญหาและบำรุงรักษาระบบ</li>
          <li>ทำงานร่วมกับทีมออกแบบและทีมอื่น ๆ</li>
        </ul>
        <p style={{ marginTop: "1rem", color: "#cfcfcf" }}>
          Web Developer ต้องสามารถปรับตัวกับเทคโนโลยีใหม่ ๆ และแก้ไขปัญหาได้อย่างรวดเร็ว
        </p>
      </section>

      <section className="info-section">
        <h2>แนวทางการเติบโต</h2>
        <ul>
          <li>Frontend Developer</li>
          <li>Backend Developer</li>
          <li>Full Stack Developer</li>
          <li>Web Architect</li>
          <li>Tech Lead</li>
        </ul>
        <p style={{ marginTop: "1rem", color: "#cfcfcf" }}>
          เมื่อมีประสบการณ์มากขึ้น สามารถเติบโตเป็นหัวหน้าทีมหรือผู้เชี่ยวชาญเฉพาะทางได้
        </p>
      </section>

      <footer className="footer">
        <p>© 2025 Future Careers Info. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App

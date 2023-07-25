import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "home": "Home",
      "about": "About",
      "project": "Project",
      "workplace": "Workplace",
      "skills": "Skills",
      "capabilities": "Capabilities",
      "contact": "Contact",
      "others": "Others",
      "hello": "Hello everyone,",
      "myname": "My name is Tanan.",
      "home_content": "I have 10 years of experience software developing  and 10 years of experience software implementation for production control. Presently, I'm interested and learning about web application, mobile application developing by using technologies like React, React-Native and Tailwind.",
      "about_header": "About Me",
      "about_content": "NAME :          Tanan Lertgungwarnkit\nGENDER :      Male\nAGE :              42\nNATIONALITY :   THAI\nRELIGION :          Buddhism\nLANGUAGE :      Thai, English, Japanese\nEDUCATION :     2000 – 2003:  Chulalongkorn University, \nMajor Computer Science \nDegree Bachelor of Science",
      "about_name_hd": "NAME :",
      "about_name_dt": "Tanan Lertgungwarnkit",
      "about_gender_hd": "GENDER :",
      "about_gender_dt": "Male",      
      "about_age_hd": "AGE :",
      "about_age_dt": "42",
      "about_nation_hd": "NATIONALITY :",
      "about_nation_dt": "THAI",
      "about_religion_hd": "RELIGION :",
      "about_religion_dt": "Buddhism",
      "about_lang_hd": "LANGUAGE :",
      "about_lang_dt": "Thai, English, Japanese",
      "about_education_hd": "EDUCATION :",
      "about_education_dt1": "2000 – 2003:  Chulalongkorn University,",
      "about_education_dt2": "Major Computer Science",
      "about_education_dt3": "Degree Bachelor of Science",
      "project_header": "My Previous Project",
      "project_content1": "Implement for Production Control System (PRONES).",
      "project_content2": "Develop the barcode system (FURUNO) for Industries's Production Line of Industries.",
      "project_content3": "Develop the Production Control System (KOOGA) for Industries.",
      "project_content4": "Develop the web application mostly from Head Office (Japan).",
      "workplace_header": "My Previous WorkPlace",
      "workplace_keihin": "Rojana Industrial Park, Ayutthaya",
      "workplace_fut": "Eastern Seaboard Industrial Estate, Rayong",
      "workplace_toacs": "Amata City Chonburi Industrial estate, Chonburi",
      "workplace_furuya": "Rojana Industrial Park2, Ayutthaya",
      "workplace_aip": "Amata City Chonburi Industrial estate, Chonburi",
      "workplace_kgs": "Samut Sakhon",
      "skills_header": "Skills",
      "skills_language": "Programming Language :",
      "skills_database": "Database :",
      "skills_tools": "Tools :",
      "capa_header": "Key capabilities include",
      "capa_content1": "• High responsibility",
      "capa_content2": "• Good attitude and fast learner",
      "capa_content3": "• Adaptable to change, punctual and work well under pressure to meet deadlines",
      "capa_content4": "• Calming influence in a highly pressurized environment",
      "capa_content5": "• Friendly manner and willingness to assist others",
      "capa_content6": "• Ability to get requirement from user to be used for analysis and system design",
      "capa_content7": "• Ability to design UI",
      "capa_content8": "• Ability to perform test such as Unit Test, Integrated test, etc.",
      "capa_content9": "• Understand the production control process within an industrial factory",
      "contact_header": "Contact",
      "contact_subheader": "Submit the form below for sending message to me.",
      "contact_name": "Enter your name",
      "contact_email": "Enter your email",
      "contact_message": "Enter your message",
      "contact_send": "Send",
      "others_header": "Others",
      "others_content1": "PRO-NES is a production control system. (Manufacturing Control System), which uses Seiban and MRP control methods, thus allowing manufacturers to produce products. and delivered to customers on time Reduce the risk of purchasing and prevent the occurrence of backlog products.",
      "others_content2": "About 10 years of experience in implementing PRO-NES has given me a good knowledge and understanding of the production control process. Starting from receiving Sales Order, Production Planning, Issuing Purchase Orders/Production Orders, Goods Receiving, Production Work Result, Finished Goods Shipment including inventory control management."
    }
  },
  th: {
    translation: {
      "home": "หน้าหลัก",
      "about": "เกี่ยวกับฉัน",
      "project": "โครงการที่ผ่านมา",
      "workplace": "สถานที่ที่เคยทำงาน",
      "skills": "ทักษะ",
      "capabilities": "ความสามารถ",
      "contact": "ติดต่อฉัน",
      "others": "อื่นๆ",
      "hello": "สวัสดีครับทุกคน",
      "myname": "ผมชื่อ...ฐนันท์...ครับ",
      "home_content": "ผมมีประสบการณ์ 10 ปีในการพัฒนาซอฟต์แวร์และประสบการณ์ 10 ปีในการ implement ซอฟต์แวร์สำหรับการควบคุมการผลิต ปัจจุบัน ผมสนใจและเรียนรู้เกี่ยวกับเว็บแอปพลิเคชัน แอปพลิเคชันมือถือที่พัฒนาโดยใช้เทคโนโลยีอย่าง React, React-Native และ Tailwind",
      "about_header" : "เกี่ยวกับฉัน",
      "about_content": "ชื่อ :          ฐนันท์ เลิศกังวานกิจ\nเพศ :        ชาย\nอายุ :        42\nสัญชาติ :       ไทย\nศาสนา :        พุทธ\nภาษา :          ไทย, อังกฤษ, ญี่ปุ่น\nการศึกษา :    2543 – 2546: จุฬาลงกรณ์มหาวิทยาลัย \nสาขาวิชาวิทยาการคอมพิวเตอร์ \nปริญญาวิทยาศาสตรบัณฑิต",
      "about_name_hd": "ชื่อ :",
      "about_name_dt": "ฐนันท์ เลิศกังวานกิจ",
      "about_gender_hd": "เพศ :",
      "about_gender_dt": "ชาย",      
      "about_age_hd": "อายุ :",
      "about_age_dt": "42",
      "about_nation_hd": "สัญชาติ :",
      "about_nation_dt": "ไทย",
      "about_religion_hd": "ศาสนา :",
      "about_religion_dt": "พุทธ",
      "about_lang_hd": "ภาษา :",
      "about_lang_dt": "ไทย, อังกฤษ, ญี่ปุ่น",
      "about_education_hd": "การศึกษา :",
      "about_education_dt1": "2543 – 2546: จุฬาลงกรณ์มหาวิทยาลัย",
      "about_education_dt2": "สาขาวิชาวิทยาการคอมพิวเตอร์",
      "about_education_dt3": "ปริญญาวิทยาศาสตรบัณฑิต",
      "project_header": "โครงการที่ผ่านมา",
      "project_content1": "Implement ระบบควบคุมการผลิต (PRONES)",
      "project_content2": "พัฒนาระบบบาร์โค้ด (FURUNO) สำหรับสายการผลิตของอุตสาหกรรม",
      "project_content3": "พัฒนาระบบการควบคุมการผลิต (KOOGA) สำหรับอุตสาหกรรม",
      "project_content4": "พัฒนาเว็บแอปพลิเคชันโดยได้รับข้อมูลความต้องการมาจากสำนักงานใหญ่ (ญี่ปุ่น)",
      "workplace_header": "สถานที่ที่เคยทำงาน",
      "workplace_keihin": "นิคมอุตสาหกรรมโรจนะ อยุธยา",
      "workplace_fut": "นิคมอุตสาหกรรมอีสเทิร์นซีบอร์ด ระยอง",
      "workplace_toacs": "นิคมอุตสาหกรรมอมตะ ซิตี้ ชลบุรี",
      "workplace_furuya": "นิคมอุตสาหกรรมโรจนะ2 อยุธยา",
      "workplace_aip": "นิคมอุตสาหกรรมอมตะ ซิตี้ ชลบุรี",
      "workplace_kgs": "สมุทรสาคร",
      "skills_header": "ทักษะ",
      "skills_language": "ภาษาโปรแกรม :",
      "skills_database": "ฐานข้อมูล :",
      "skills_tools": "เครื่องมือ :",
      "capa_header": "ความสามารถที่โดดเด่น",
      "capa_content1": "• มีความรับผิดชอบสูง",
      "capa_content2": "• มีทัศนคติที่ดีและสามารถเรียนรู้ได้เร็ว",
      "capa_content3": "• สามารถปรับตัวได้กับการเปลี่ยนแปลง ตรงต่อเวลา และทำงานภายใต้แรงกดดันให้ทันกำหนดเวลาได้ดี",
      "capa_content4": "• สามารถรับมือกับสภาพแวดล้อมที่มีความกดดันสูงได้",
      "capa_content5": "• เป็นมิตรและเต็มใจช่วยเหลือผู้อื่น",
      "capa_content6": "• มีความสามารถในการเก็บรวบรวมความต้องการจากผู้ใช้เพื่อนำมาใช้ในการวิเคราะห์และออกแบบระบบ",
      "capa_content7": "• มีความสามารถในการออกแบบ UI",
      "capa_content8": "• มีความสามารถในการทดสอบโปรแกรม เช่น Unit Test, Integrated test เป็นต้น",
      "capa_content9": "• เข้าใจขั้นตอนการควบคุมการผลิตภายในโรงงานอุตสาหกรรม",
      "contact_header": "ติดต่อฉัน",
      "contact_subheader": "ส่งแบบฟอร์มด้านล่างเพื่อส่งข้อความถึงฉัน",
      "contact_name": "ใส่ชื่อของคุณ",
      "contact_email": "กรอกอีเมล์ของคุณ",
      "contact_message": "ป้อนข้อความของคุณ",
      "contact_send": "ส่ง",
      "others_header": "อื่นๆ",
      "others_content1": "PRO-NES คือ ระบบควบคุมการผลิต (Manufacturing Control System) ซึ่งใช้วิธีการควบคุม แบบ Seiban และ MRP จึงช่วยให้ผู้ผลิตสามารถผลิตสินค้า และส่งมอบแก่ลูกค้าได้ทันเวลากำหนด ลดความเสี่ยงในการจัดซื้อ และป้องกันไม่ให้เกิดสินค้าค้างสต็อก",
      "others_content2": "ประสบการณ์ประมาณ 10 ปีในการใช้ PRO-NES ทำให้ผมมีความรู้และความเข้าใจที่ดีเกี่ยวกับกระบวนการควบคุมการผลิต เริ่มตั้งแต่การรับใบสั่งขาย การวางแผนการผลิต การออกใบสั่งซื้อ/ใบสั่งผลิต การรับสินค้า ผลงานการผลิต การส่งสินค้าสำเร็จรูป รวมถึงการจัดการควบคุมสินค้าคงคลัง"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
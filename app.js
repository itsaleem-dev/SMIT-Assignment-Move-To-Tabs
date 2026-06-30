const about = document.querySelector('#about');
const vision = document.querySelector('#vision');
const goals = document.querySelector('#goals');
const tabs_Heading = document.querySelector('#tabs_Heading');
const para = document.querySelector('#para');
const tabImage = document.querySelector('#tabImage');

const tabsObj = [
    {
        img: `https://images.unsplash.com/photo-1673905110274-86b3c5680071?fm=jpg&q=60&w=3000&auto=format&fit=crop`,
        heading: "About",
        tabPara: `We are dedicated to creating innovative solutions that help people learn, grow, and achieve their goals. Our focus is on providing quality experiences through creativity, technology, and continuous improvement.`
    },
    {
        img: `https://img.magnific.com/free-vector/businessmen-run-their-business-with-visionary-vision-work-bring-company-top-market-beating-competition-no-1-position_24797-2308.jpg`,
        heading: "Vision",
        tabPara: `Our vision is to become a trusted platform that inspires individuals and businesses to reach their full potential. We aim to build a future where innovation and knowledge are accessible to everyone.`
    },
    {
        img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKS_obc0B4VeFepdPvPVd1IYtruoNPy-57BUfJsbSPsuqOPSxHL43YWo&s=10`,
        heading: "Goals",
        tabPara: `Our goal is to deliver value through reliable services, maintain customer satisfaction, and continuously improve our products. We strive to achieve excellence while fostering growth and long-term success.`
    }
]

about.addEventListener('click', () => {
    tabImage.src = tabsObj[0].img;
    tabs_Heading.innerHTML = tabsObj[0].heading;
    para.innerHTML = tabsObj[0].tabPara;

});

vidion.addEventListener('click', () => {
    tabImage.src = tabsObj[1].img;
    tabs_Heading.innerHTML = tabsObj[1].heading;
    para.innerHTML = tabsObj[1].tabPara;
});

goals.addEventListener('click', () => {
    tabImage.src = tabsObj[2].img;
    tabs_Heading.innerHTML = tabsObj[2].heading;
    para.innerHTML = tabsObj[2].tabPara;
});
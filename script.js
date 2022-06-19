let barLength = 300;

// IEEE third international conference in Multimedia Processing, Communication and information Technology

let data = {
    'menu': [
        // {'class' : 'uil uil-estate icon', 'text' : 'Home'},
        { 'class': 'uil uil-user icon', 'text': 'About', 'to': '#about' },
        { 'class': 'uil uil-university icon', 'text': 'Education', 'to': '#education' },
        { 'class': 'uil uil-file-alt icon', 'text': 'Skills', 'to': '#skills' },
        { 'class': 'uil uil-briefcase-alt icon', 'text': 'Research', 'to': '#work' },
        { 'class': 'uil uil-briefcase-alt icon', 'text': 'Experience', 'to': '#sub__title indus' },
        { 'class': 'uil uil-browser icon', 'text': 'Projects', 'to': '#projects' },
        { 'class': 'uil uil-trophy icon', 'text': 'Achievements', 'to': '#achievements' },
        { 'class': 'uil uil-postcard icon', 'text': 'Certificates', 'to': '#certifications' },
        { 'class': 'uil uil-message icon', 'text': 'Contact', 'to': '#contact__me' }


    ],
    'socialMedia': [
        { 'class': 'uil uil-envelope social__icon', 'to': 'mailto:balajibetadur@gmail.com' },
        { 'class': 'uil uil-linkedin-alt social__icon', 'to': 'https://www.linkedin.com/in/balaji-betadur/' },
        { 'class': 'uil uil-github social__icon', 'to': 'https://github.com/balajibetadur' },
    ],

    'whatIdo': [
        {
            'title': 'Data Science & AI',
            'image': 'DSAI.svg',
            'description': [
                '⚡Developing highly scalable production-ready models for various deep learning and statistical use cases.',
                '⚡ Experience of working with Computer Vision and NLP projects.',
                '⚡ Complex quantitative modeling for dynamic forecasting and time series analysis.'
            ]
        },
        {
            'title': 'Web development',
            'image': 'web.svg',
            'description': [
                '⚡ Building responsive websites for deploying Machine Learning algorithms.',
                '⚡ Developing front end using react.',
                '⚡ Creating simple UI using javascript, firebase, MongoDB, NodeJS, flask, bootstrap.'
            ]
        }, 
        {
            'title': 'Cloud Development',
            'image': 'cloud.svg',
            'description': [
                '⚡ Hosting and maintaining websites on virtual machine instances along with the integration of databases.',
                '⚡ Deploying deep learning models on the cloud to use on mobile devices.',
                '⚡ Training deep learning models on GCP Auto ML for faster training and better accuracy.'
            ]
        },
        // {
        //     'title' : 'Freelance',
        //     'image' : 'freelance.svg',
        //     'description' : [
        //     '⚡ Delivering full-stack projects on upwork, freelancer.com, and fiverr.',
        //     '⚡ Worked on machine learning, quantitative development, automation and web development related projects.',            
        //     '⚡ Completed 12+ end-to-end projects.'
        //     ]
        // },
        {
            'title': 'UI/UX Design',
            'image': 'design.svg',
            'description': [
                '⚡ Designing an attractive user interface for web applications.',
                '⚡ Customizing logo designs and building logos from scratch.',
                '⚡ Creating the flow of application functionalities to optimize the user experience.'
            ]
        }
    ],
    'skills': [
        { 'skill': 'Python', 'Level': 0.9 },
        { 'skill': 'Machine Learning', 'Level': 0.8 },
        { 'skill': 'Deep Learning', 'Level': 0.8 },
        { 'skill': 'Keras', 'Level': 0.7 },
        { 'skill': 'PyTorch', 'Level': 0.8 },
        { 'skill': 'Tableau', 'Level': 0.7 },
        { 'skill': 'Neural Networks', 'Level': 0.75 },
        { 'skill': 'SQL', 'Level': 0.8 },
        { 'skill': 'Flask', 'Level': 0.8 },
        { 'skill': 'Javascript', 'Level': 0.9 },
        { 'skill': 'DBMS', 'Level': 0.9 },
        { 'skill': 'MongoDB', 'Level': 0.9 },
        { 'skill': 'Express ', 'Level': 0.7 },
        { 'skill': 'ReactJS', 'Level': 0.8 },
        { 'skill': 'NodeJS ', 'Level': 0.7 },
        { 'skill': 'Firebase', 'Level': 0.8 },
        { 'skill': 'REST Api', 'Level': 0.8 },
        { 'skill': 'AWS', 'Level': 0.5 },
        { 'skill': 'Redux', 'Level': 0.8 },
        { 'skill': 'C', 'Level': 0.7 },
        { 'skill': 'Bootstrap', 'Level': 0.9 },
        { 'skill': 'C++', 'Level': 0.7 },
        { 'skill': 'Git', 'Level': 0.8 },
        { 'skill': 'HTML 5', 'Level': 0.9 },
        { 'skill': 'CSS 3', 'Level': 0.8 },
        { 'skill': 'Figma', 'Level': 0.7 },
        { 'skill': 'Mentoring', 'Level': 1 },
        { 'skill': 'Teaching', 'Level': 1 }
    ]
    ,
    'work':
    {
        'Research_Internships': [
            {
                'image': 'nlp.jpeg',
                'name': 'Deep Learning Research Intern',
                'location': '@ Indian Institute of Technology, Guwahati',
                'duration': 'Jun 20 - Aug 20',
                'description': `
                        
                        ✔ Worked on <b>Creativity Index evaluation</b> for Q&A systems like CEED, UCEED (Subjectivity index module) <br><br>
                        
                        ✔ Evaluation of both questions and answers is implemented using 2 methods.<br>
                        &nbsp;&nbsp;&nbsp; - Evaluation of creativity using subjectivity features.<br>
                        &nbsp;&nbsp;&nbsp; - Evaluation of creativity using variance in corpus.<br><br>
                        
                        ✔ For text questions and answers, the input is classified as a single word and subjective answer before evaluating the creativity index.<br><br>

                        ✔ Further, the <b>BERT NLP model</b> will assess the subjectivity of text using <b>21 factors</b> like polarity and question intent. <br><br>
                        
                        ✔ Creativity of images is measured by <b>similarity index (variance method). Lesser the similarity, the more the creativity</b>  (there are other factors that contribute to text creativity).<br><br>
                        

                 `,
                'outcome': `
                
                        ✔ Successfully implemented a module for evaluating creativity index by using subjectivity features.<br><br>

                        ✔ This module, along with a few other modules of image evaluation, will be able to assess the questions and answers automatically.<br><br>

                        ✔ Working on a research paper that includes both approaches for creativity evaluation in the text and the variance approach for images.

                
                 `,
                 'modal-class': 'test1',
                 'line' : 'Worked on Creativity Index evaluation of text and images, analyzed 20 different subjectivity features of text to find the creativity index of text. In images, creativity is inversely proportional to the similarity index.'
            },
            {
                'image': 'robot.jpg',
                'name': 'Deep Learning Research Intern',
                'location': '@ Indian Institute of Technology, Bhubaneshwar',
                'duration': 'Mar 20 - Nov 20',
                'description': `

                    ✔ Fast Sweeping Method is used for path planning of a biped robot in a static environment.<br><br>
                    
                    ✔ The FSM utilizes Eikonal equation at each location to find the optimal path between the start and goal positions. <br><br>
                    
                    ✔ In this research, I was actively involved in coding the algorithm and doing literature review.<br><br>

                    ✔ Implemented and compared multiple algorithms, namely<br>
                            &nbsp;&nbsp;&nbsp;- fast-marching<br>
                            &nbsp;&nbsp;&nbsp;- fast-sweeping<br>
                            &nbsp;&nbsp;&nbsp;- a-star<br><br>
                    
                    ✔ Implemented border collision function to avoid collision of the object with the borders/edges of the obstacles.<br><br>
                `,
                'outcome': `
                
                    ✔ Fast Sweeping algorithm executed efficiently among all other algorithms.<br><br>
                    
                    ✔ FSM performed better than FMM and A star in terms of path length and time taken to generate the path.<br><br>
                `,
                'modal-class': 'test',
                 'line' : 'Implemented and compared path planning algorithms like Fast Marching Method, Fast Sweeping Method, and A Star for a biped robot in a static environment.'
            },

            {
                'image': 'farmer.jpg',
                'name': 'NLP Research Intern',
                'location': '@ GIT, belgaum',
                'duration': 'Jan 20 - Jan 21',
                'description': `

                        ✔ Developed a <b>chatbot (Smart Sampark)</b> for farmers that help to solve their queries using <b>Cosine Similarity and natural Language Processing.</b><br><br>
                        
                        ✔ <b>Dynamic data updating</b> module will automatically download data from multiple online resources (for ex: data.gov.in) every time after a certain period.<br><br>

                        ✔ Once the user enters the query, the best solution, along with the <b>top 10</b> related solutions, will be provided.<br><br> 
                        
                        ✔ The solution is fetched based on multiple features like <br>
                        &nbsp;&nbsp;&nbsp;- sector (Agriculture, Horticulture..)<br>
                        &nbsp;&nbsp;&nbsp;- query category (vegetables, pulses, general..)<br>
                        &nbsp;&nbsp;&nbsp;- crop type (onion, chilies..)<br>
                        &nbsp;&nbsp;&nbsp;- query type (Market info, weather, mandi prices..)<br><br> 
                        
                        ✔ The response includes immediate solution, related solutions, related/referred online links for each solution, contact number based on query type and query domain.<br><br>
                        `,
                'outcome': `
                        ✔ Successfully developed a chatbot that resolves user queries with <b>96.8% accuracy in less than 0.002 seconds</b> . (1000 queries in 1.7 seconds)<br><br>

                        ✔ Integrating the chatbot with farmer related official government and un-official mobile applications and websites (ongoing).<br><br>
                        
                        ✔ Published a research paper <b>"Smart Sampark-An approach towards building a responsive system for Kisan Call Center"</b> at "IEEE Explore" (co-author).<br><br>

                `,
                'modal-class': 'test',
                 'line' : 'An agricultural chatbot was developed to assist farmers that provide the answers using various online resources along with other insights using NLP and cosine similarity matching.'
            },
            // {
            //     'image' : 'chatBot.jpg', 
            //     'name' : 'Machine Learning Research Intern', 
            //     'location' : '@ GIT, belgaum', 
            //     'duration' : 'Sep 20 - Present',
            //     'description' : `
            //     Implemented and compared multiple machine learning algorithms for multi-label classification for the sponsered project.<br><br>

            //     Algorithms like Decision Tree, KNN, Logistic regression, SVM, Random Forest, Naive Bayes
            //     `,
            //     'outcome' : 'jhgdf</br></br>sdfh'
            // }
        ],
        'Publications': [

            {
                'image': 'nlp.jpeg',
                'name': 'Creativity Evaluation in Text and Images - variance evaluation and subjectivity feature analysis',
                'location': '@ Indian Institute of Technology, Guwahati',
                'duration': 'Sep 20 - Present',
                'description': ['test'],
                'outcome': ['test'],
                'progress': 'in progress'
            },

            {
                'image': 'robot.jpg',
                'name': 'An Efficient Path Planning Algorithm for the Biped Robot in a Static Environment using Fast Sweeping Method',
                'location': '@ Indian Institute of Technology, Bhubaneshwar',
                'duration': 'Sep 20 - Present',
                'description': ['test'],
                'outcome': ['test'],
                'progress': 'Accepted - Sage Publication'
            },

            {
                'image': 'chatBot.jpg',
                'name': 'System Model to Effectively Understand Programming Error Messages Using Similarity Matching and Natural Language Processing',
                'location': '@ Gogte Institute of Technology, belgaum',
                'duration': 'Sep 20 - Present',
                'description': ['test'],
                'outcome': 'jhgdf</br></br>sdfh',
                'progress': 'Published in ICCCMLA Springer'
            },
            {
                'image': 'chatBot.jpg',
                'name': 'Smart Sampark-An approach towards building a responsive system for Kisan Call Cente',
                'location': '@ Gogte Institute of Technology, belgaum',
                'duration': 'Sep 20 - Present',
                'description': ['test'],
                'outcome': 'jhgdf</br></br>sdfh',
                'progress': 'Published in IEEE (contributor)'
            },

            // {
            //     'image': 'farmer.jpg',
            //     'name': 'Multi-label Question Classification for Agricultural Questions',
            //     'location': '@ Gogte Institute of Technology, belgaum',
            //     'duration': 'Sep 20 - Present',
            //     'description': ['test'],
            //     'outcome': 'jhgdf</br></br>sdfh',
            //     'progress': 'Published in IEEE Explore (MPCIT)'
            // }
        ],

        'Industrial_Internships': [

            {
                'image': 'stockMarket.jpg',
                'name': 'Quantitative Research Analyst',
                'name_': `
             Quantitative Research Analyst<br>
                    <span class ="project__skill">Python</span>
                    <span class ="project__skill">Neural Networks</span>
                    <span class ="project__skill">Pandas</span>
                    <span class ="project__skill">Sklearn</span>
                    <span class ="project__skill">Keras</span>
                    <span class ="project__skill">GCP</span>
                    <span class ="project__skill">Tradingview</span>
                    <span class ="project__skill">MongoDB</span>
                    <span class ="project__skill">AWS</span>
                    <span class ="project__skill">Git</span>
                    <span class ="project__skill">JavaScript</span>
                    <span class ="project__skill">Firebase</span>
                    <span class ="project__skill">VSCode</span>
                    <span class ="project__skill">Putty</span>
                    <span class ="project__skill">Jupyter Notebook</span>
             `,
                'location': '@ Bluebery Capital',
                'duration': 'Sep 20 - Present',
                'description': `

                    ✔ Designed an automated quantitative trading cloud-based platform to <b>monitor, trade, generate signals, perform analytical operations, and backtest historical data</b> .<br><br>

                    ✔ Implemented Machine Learning pipeline for <b>time-series forecasting</b> and what-if analysis.<br><br>

                    ✔ Responsible for technology infrastructure systems development, which includes connectivity,
                    maintenance, and internal automation processes.<br><br>

                    ✔ Developing backtesting, booking, position keeping, and reconciliation mechanism.<br><br>

                    ✔ Over all portfolio module will squareoff all positions and cancel limit orders irrespective of any executing strategies. It also provides multiple filters for squaring off (ordertype, )

                    ✔ Worked on general <b>efficiency</b> improvement and optimization of the analytical library.<br><br>

                    ✔ Implemented an optimized way of placing a market order to <b>reduce slippage</b> .<br><br>

                    ✔ Developed <b>ALO (Advanced Limit Orders)</b> for placing target and stop-loss limit orders with triggers.<br><br>

             `,
                'outcome': `

                    ✔ High-performance and low-latency trading components/strategies optimized algorithm flow that
                    resulted in <b>reducing slippage (latency loss) by 90%</b> . <br><br>
                    
                    ✔ New Features like <b>copy-trading, multi-account-trading, dynamic infrastructure</b> are not available with any other broker/third party applications in the market.<br><br>

                    ✔ Generates signals on triggers events and provide alert/notification to  the user.<br><br>

                    ✔ Increased overall <b>profit by 22%</b> . ALO orders reduced <b>slippage</b> by more than <b>30%</b> .<br><br>

                    ✔ Dynamic infrastructure enables the user to <b>modify any variables</b> before and in between execution.<br><br>

                    ✔ Dynamic infrastructure enables to <b>switch between multiple APIs</b> within 2 seconds by user input. <br><br>


             `,
                 'line' : 'Developed an automated end-to-end customizable cloud-based quantitative trading platform that can monitor, trade, generate signals, perform analytical operations, and back-test historical data using Python, Machine Learning, and NLP.'
            },

            {
                'image': 'computerVision.jpg',
                'name': 'Computer Vision Intern',
                'name_': `Computer Vision Intern<br>
             
                    <span class ="project__skill">Python</span>
                    <span class ="project__skill">Heroku</span>
                    <span class ="project__skill">JavaScript</span>
                    <span class ="project__skill">OpenCV</span>
                    <span class ="project__skill">MongoDB</span>
                    <span class ="project__skill">SQL</span>
                    <span class ="project__skill">Keras</span>
                    <span class ="project__skill">AutoML</span>
                    <span class ="project__skill">Git</span>
                    <span class ="project__skill">Google Collab</span>
                    <span class ="project__skill">VSCode</span>
                    <span class ="project__skill">GCP</span>

             `,
                'location': '@ Naaniz Pvt Ltd',
                'duration': 'Jun 20 - Aug 20',
                'description': `
               
                    ✔ Deployed deep learning model to <b>classify 250+ dishes</b> to an AI module in a food delivery application.<br><br>

                    ✔ Implemented a <b>hotel surveillance system</b> to monitor<br>
                    &nbsp;&nbsp;&nbsp;- number of people<br>
                    &nbsp;&nbsp;&nbsp;- detect un-hygienic places<br>
                    &nbsp;&nbsp;&nbsp;- workers wearing masks<br>
                    &nbsp;&nbsp;&nbsp;- gloves and cooking hats<br>
                    &nbsp;&nbsp;&nbsp;- common pests<br><br>

                    ✔ Built <b>Object Detection</b> Model for detecting possible veggies/fruits visible in a dish using <b>Yolo v3</b> .<br><br>

                    

               `,
                'outcome': `
               
                    ✔ AI-based Food assistant helps people search for a dish by an image and publishes <b>detailed
                    information</b> about the dish like <br>
                    &nbsp;&nbsp;&nbsp;- hotels that serve that dish<br>
                    &nbsp;&nbsp;&nbsp;- ingredients<br>
                    &nbsp;&nbsp;&nbsp;- nutrition distribution<br><br>

                    ✔ Hotel surveillance system has been installed in all Naaniz approved restaurants.



               `,
                 'line' : 'Deployed Dishes Classification and Object Detection modules in an AI assistant in food delivery applications—details like nutrition distribution and extracted ingredients about the dish selected by the user will be displayed.'
            },

            {
                'image': 'jobs.jpg',
                'name': 'Machine Learning Intern',
                'name_': `Machine Learning Intern <br>

                    <span class ="project__skill">Python</span>
                    <span class ="project__skill">Flask</span>
                    <span class ="project__skill">JavaScript</span>
                    <span class ="project__skill">MongoDB</span>
                    <span class ="project__skill">Bootstrap</span>
                    <span class ="project__skill">Git</span>
                    <span class ="project__skill">AWS</span>
                    <span class ="project__skill">Selenium</span>
                    <span class ="project__skill">Web Scraping</span>
                    <span class ="project__skill">Pandas</span>
                    <span class ="project__skill">API</span>
                    <span class ="project__skill">Putty</span>

             
             `,
                'location': '@ Conscript Pvt ltd',
                'duration': 'Apr 20 - May 20',
                'description': `
               
                    ✔ Designed an advanced cloud-based platform for <b>autonomous hiring</b> using machine learning and cosine similarity matching.<br><br>

                    ✔ Collected job opening by <b>scraping</b> multiple online resources like LinkedIn jobs, Naukri.com, monster.com, etc. <br><br>

                    ✔ When a user enters the keyword (job role, location, salary range, job type...) all the openings are fetched in parallel simultaneously based on the filters applied.<br><br>

                    ✔ User can also add his profile on the portal (skills, experience, certifications...) to get related job openings based on the <b>cosine similarity index</b> between the job requirement/ job description with the user's profile.<br><br>
                    
                    ✔ Jobs, once fetched, are labeled based on the features like location, role, type, etc. By using machine learning, the user will get the most relevant jobs based on their profile. <br><br>
               
               `,
                'outcome': `
               
                    ✔ This platform is used by the applicants and also by employers.<br><br>

                    ✔ Employers add the user's profile on the portal to check the <b>job-profile match index</b> .<br><br>

                    ✔ New feature: Employer can upload the resume on the portal, which proceeds with <b>extracting the data from the pdf using OCR</b> . This further is matched with the job description/job requirement to get the job-profile index.<br><br>
                    
               `,
                 'line' : 'An AI-based platform that enables the user to find an appropriate job based on the resume/profile. Employers can also match applicant profiles with job descriptions using profile extractor.'
            },

            {
                'image': 'webd.png',
                'name': 'Web development Intern',
                'name_': `Web development Intern<br>

                    <span class ="project__skill">Python</span>
                    <span class ="project__skill">Flask</span>
                    <span class ="project__skill">SQL</span>
                    <span class ="project__skill">Javascript</span>
                    <span class ="project__skill">MongoDB</span>
                    <span class ="project__skill">GUI</span>
                    <span class ="project__skill">Tkinter</span>
                    <span class ="project__skill">Git</span>
                    <span class ="project__skill">AWS</span>

             `,
                'location': '@ Uniq Technologies',
                'duration': 'Jun 19 - Aug 19',
                'description': `

                    ✔ This is my first internship. I worked as a python developer.<br><br>

                    ✔ I developed a <b>blog along with a shopping platform</b> for a client using <b>flask</b> .<br><br>

                    ✔ The website enables the admin to <b>add posts and tag items</b> in the post along with the details related to each item. (cost, color, size, exchange, etc...)<br><br>

                    ✔ If the user is interested in any item in the post, he can click and add it to the cart.<br><br>

                    ✔ Admin can also add users with admin privileges so that a new <b>user can add posts</b> with items he wants to sell.<br><br>
               
               `,
                'outcome': `
               
                    ✔ Converted an initial simple gallery website to a blog, which can also be used as a shopping website.<br><br>

                    ✔ Redirecting posts from social media to blog and vice versa increased the number of users visiting the website by <b>40%</b> .<br><br>
                    
                    ✔ Allowing other users to add posts widened the reach and increased the revenue by <b>5%</b> .
               `,
                 'line' : 'A hybrid application for blog and shopping that enables a user to browse the blog and buy products. Verified users can also add posts to the blog. The application can be linked with social media platforms to exchange posts.'
            }
        ],

        'Volunteerships': [
            
            {
                'image': 'onlineTeaching.jpg',
                'name': 'Machine Learning Trainee',
                'location': '@ Girlscript Foundation',
                'duration': 'Aug 20 - Nov 20',
                'description': `

                        ✔ I joined as a Machine Learning trainee at Girlscript technology's core program.<br><br>

                        ✔ I taught Python and machine learning concepts for <b>150+ engineering students</b> that includes<br>
                        &nbsp;&nbsp;&nbsp;- Machine Learning algorithms<br>
                        &nbsp;&nbsp;&nbsp;- Deep Learning Algorithms<br>
                        &nbsp;&nbsp;&nbsp;- Python core concepts<br>
                        &nbsp;&nbsp;&nbsp;- Python packaging<br>
                        &nbsp;&nbsp;&nbsp;- Pandas, Numpy and Matplotlib<br>
                        &nbsp;&nbsp;&nbsp;- Sklearm, keras and fastai<br>
                        &nbsp;&nbsp;&nbsp;- Deployment on heroku<br><br>


                        ✔ We developed <b>five projects</b> on machine learning and deep learning and deployed them on Heroku.<br><br>

                `,
                'outcome': 'jhgdf</br></br>sdfh'
            },
            {
                'image': 'campusHero.jpg',
                'name': 'Campus Hero',
                'location': '@ Girlscript Technologies',
                'duration': 'Dec 20 - Mar 21',
                'description': `

                        ✔ Girlscript is India's <b>First & Biggest</b> Indian Origin Technical Community
                        and a section-8 NON PROFIT company registered under the government of India.<br><br>
                        
                        ✔ It is open for all organizations and supports beginners in technology and programming. It promotes diversity by reserving 50% seats for women & IGBT in all its programs worldwide.<br><br>

                        ✔ I was elected as a <b>campus hero</b> for my university among <b>4000+ students</b> .<br><br>

                        ✔ Represented my university at <b>national-level events</b> held by Girlscript technologies.<br><br>

                        ✔ Organized <b>webinars</b> and <b>hackathons</b> to help students improve and develop programming skills.<br><br>

                        ✔ Weekly events were held and coordinated by each team member every week to get creative ideas, which gradually led our team in the <b>top 10</b> nation-wide.

                
                `,
                'outcome': 'jhgdf</br></br>sdfh'
            },
            {
                'image': 'leader.jpg',
                'name': 'Club Coordinator',
                'location': '@ GIT, Belgaum',
                'duration': 'Sep 18 - jan 21',
                'description': `
                
                        ✔ I <b>co-ordinated</b> student clubs in my university, namely<br>
                        &nbsp;&nbsp;&nbsp;- Technical Paper Presentation Club<br>
                        &nbsp;&nbsp;&nbsp;- Fine Arts Club<br>
                        &nbsp;&nbsp;&nbsp;- National Service Scheme Club (NSS)<br><br>

                        ✔ As a part of the technical paper presentation club, I organized local conferences at my university. I also wrote <b>four research papers</b> (2 yet to publish)<br><br>

                        ✔ I represented my university at the 21st Janani event held by VTU and <b>won a state-level collage event</b> (painting/craft from waste).<br><br>

                        ✔ As a part of NSS, we visited rural schools and spread <b>educational and social awareness</b> among young students. 
                        
                        <br><br>✔ We painted classrooms and planted trees around the school to <b>promote green and healthy</b> environment<br><br><br><br>
                
                `,
                'outcome': 'jhgdf</br></br>sdfh'
            },
            {
                'image': 'internshala.jpg',
                'name': 'Internshala Student Partner',
                'location': '@ Internshala',
                'duration': 'May 20 - Feb 21',
                'description': `
                
                        ✔ Internshala is <b>India's no.1</b> internship and training platform with <b>40000+ paid internships</b> in Engineering, MBA, media, law, arts, and other streams.<br><br>  

                        ✔ <b>Internshala Student Partner</b> 11 (ISP) is India's largest student community. It is a 50 - day transformational program aimed at building the leaders of tomorrow. <br><br>
                        
                        ✔ During this program, we learned to lead from the front and develop essential skills like marketing and communication while representing Internshala in our college and understood how it all comes together for a cause.<br><br>

                        ✔ I was selected as a super candidate for <b>three consecutive batches</b> .<br><br>

                        ✔ We spread awareness among students about courses, internships, and other services provided by Internshala for free. <br><br>

                        ✔ I stood <b>first</b> in the <b>Internshala referral program</b> consecutively two times, where a total of <b>2600+</b> new students joined the Internshala platform with my referral.<br><br>

                        ✔ I stood <b>2nd</b> among <b>40,000+</b> students in ISP'19 program.<br><br>

                
                `,
                'outcome': 'jhgdf</br></br>sdfh'
            },
            {

                'image': 'teaching.jpg',
                'name': 'Uplift Project Mentor',
                'location': '@ Girlscript Technologies',
                'duration': 'may 20 - Aug 20',
                'description': `
                
                        ✔ Uplift project aims at helping everyone who is looking for opportunities to leverage their knowledge, skills, and potential up to higher levels.<br><br>


                        ✔ I lead <b>two major communities</b> of Data Science and Artificial Intelligence.<br><br>


                        ✔ I mentored <b>4 teams</b> and taught python, machine learning, computer vision, and deep learning for <b>300+ students</b> .<br><br>


                        ✔ <b>Two out of ten</b> selected projects (250+ in total) were mentored by me.<br><br>


                
                `,
                'outcome': 'jhgdf</br></br>sdfh'
            }
            // {
            //     'image' : 'mentor.jpg', 
            //     'name' : 'Uplift Project Trainee', 
            //     'location' : '@ Girlscript Technologies', 
            //     'duration' : 'Sep 20 - Present',
            //     'description' : ['test'],
            //     'outcome' : 'jhgdf</br></br>sdfh'
            // }
        ]
    },
    'projects': [
        {
            'title': 'Auto AI Modelling',
            'purpose': `

                    ✔ One of my cousins, with <b>limited technical</b> expertise, approached me asking to develop a machine learning module for his business website.<br><br>
                    
                    ✔ I realized that this <b>technical barrier prevents people</b> from accessing the advantages of machine learning and deep learning.<br><br>

                    ✔ I wanted to break this barrier, so I created a website, 'Auto Modelling', where people without or with limited technical knowledge can <b>train and use machine learning</b> models with a single click.<br><br>
                
                `,
            'description': `
                    
                    ✔ Auto Modelling is a platform where <b>anyone can train, retrain and use machine learning models irrespective of their technical expertise</b> .<br><br>
                
                    ✔ User can upload data in any format(.txt, .csv, .xlsx, folders, .msg, .zip etc), <b>data preparation module</b> will format the uploaded data into standard format.<br><br>

                    ✔ If the user is completely unaware of machine learning, he can select a <b>standard training option</b> that will train the model with <b>different algorithms, a different combination of parameters, and different features from the dataset</b> .<br><br>

                    ✔ If the user is partially aware of technicalities, he can modify select any algorithms, filter algorithms based on <b>training time</b> , modify any parameter of selected algorithm, enable/disable grid search--<b>hyperparameter tuning</b> (trying different parameters in different combinations to get the model with the best accuracy) and return the model with the best accuracy.<br><br>



                `,
            'outcome': `

                    ✔ Many <b>students from non-It backgrounds</b> used this website to use machine learning and deep learning in their projects without coding anything themselves.<br><br>

                    ✔ Apart from a few algorithms like transformers and deep learning algorithms, other algorithms will be trained in <b>5 - 8 seconds</b> .<br><br>

                    ✔ Not only can the user train the models, but he can also <b>save every trained model</b> . If the user wishes to <b>revert to the previous model</b> he can select the required model to download it or use the model to predict new samples.<br><br>

                    ✔ Average time for standard training (all algorithms, all parameters, different combinations) is <b>less than 10 seconds</b> .<br><br>

                    ✔ This platform also provides an interface for <b>predicting new samples</b> (single document and bulk collection) and enables users to download the output in any required format.<br><br>

                    
                    
                `,
            'image': 'autoML.jpg',
            'skills': ['Python', 'JavaScript', 'Machine Learning', 'Neural Networks', 'Keras', 'fastai', 'Pandas', 'Sklearn', 'Bootstrap', 'Git', 'MongoDB', 'VSCode', 'Jupyter Notebook'],
            'github': 'https://github.com/balajibetadur/AI-Email-Classifier',
                 'line' : "A cloud-based platform to train, re-train, use, save and export machine learning/deep learning models irrespective of the user's technical knowledge. The application also provides hyperparameter tuning features. "
        },
        {
            'title': 'COVID-19 prediction',
            'purpose': `
                
                    ✔ During the beginning of the COVID-19 outburst, there were <b>limited ways to diagnose</b> the spread of the infection.<br><br>

                    ✔ People were worried due to the lack of facilities to get tested for COVID-19 and prevent spreading the infection to others.<br><br>
                    
                    ✔ Many websites displayed the number of deaths and number of infected people, but there was <b>no website enabling people to know whether they had the infection</b> .<br><br>
                    
                    ✔ So I designed a platform where users can enter their symptoms (fever, cold, cough, age, body pain, etc.) and rate the intensity for each symptom to <b>predict infection probability</b> .<br><br>
                
                `,
            'description': `
                
                    ✔ The website <b>takes user symptoms as input</b> and <b>predicts the infection probability</b> using machine learning.<br><br> 

                    ✔ It also classified the user under <b>four categories</b> , namely<br>
                    &nbsp;&nbsp;&nbsp;- Infected<br>
                    &nbsp;&nbsp;&nbsp;- Sensitive<br>
                    &nbsp;&nbsp;&nbsp;- Cautious  <br>  
                    &nbsp;&nbsp;&nbsp;- Safe<br><br>

                    ✔ Based on the category, there were precautions displayed to the user.<br><br>
                    
                    ✔ Not only symptoms, but users can also upload <b>x-ray scans</b> to know the infection status. The image classification model (X-Ray) was <b>98.8 % accurate</b> .<br><br>
                    
                    ✔ Further, I included a <b>mask detection software</b> that will detect whether the person is wearing the mask and <b>notify the admin</b> if anyone without a face mask is found.<br><br>

                `,
            'outcome': `

                    ✔ Users determined the probability of infection sitting at home without contacting or visiting any test centers.<br><br>

                    ✔ The face mask detection software has been installed in <b>3 societies</b> of my locality.   <br><br>            

                `,
            'image': 'covid.jpg',
            'skills': ['Python', 'Machine Learning', 'Heroku', 'javascript', 'Sklearn', 'Pandas', 'Git', 'Firebase', 'Bootstrap', 'VSCode'],
            'github': 'https://github.com/balajibetadur/COVID-19-system',
                 'line' : "A Machine Learning application to predict the COVID-19 infection probability using the user's symptoms like fever, cough, body pain, cold, etc. It also predicts the lung infection with the user's x-ray using deep learning. It includes face-mask detection software implemented using OpenCV."
            },
        {
            'title': 'Lookinat - Abroad study prep website',
            'purpose': `
                
                    ✔ I was preparing for GRE (Graduate Record Examinations), and I needed to learn new words daily to understand the passage and sentences in the verbal section of the exam.<br><br>

                    ✔ There are <b>third-party applications</b> that provide flashcards (decks of 30 words). But these flashcards had <b>no other features</b> , which made them <b>difficult to use</b> . I realized that many other students are facing the same issue.<br><br>
                    
                    ✔ So I developed an application where there were multiple features that will help students to <b>add, search, study, revise, star, shuffle, sort, filter words</b> . <br><br>
                    
                    ✔ I also found that there are limited resources online to help students with abroad study, so I am adding new modules to the application that will help a student from the beginning until he completes education abroad and get a job.<br><br>
                
                `,
            'description': `
                
                    ✔ The current application has around <b>3000</b> words. It also has a <b>separate word sets</b> for the Sentence Equivalence Section, where one word with its contextual synonym words will be available.<br><br>

                    ✔ There are <b>48 decks</b> of words, each containing 30 to 50 words in each deck. These decks are designed based on the difficulty and frequency of the words appearing in the actual GRE.<br><br>
                    
                    ✔ New features that are introduced
                        &nbsp;&nbsp;&nbsp;- <b>Star a word</b> - user can star/mark a word and revise them later at any point in time.<br>
                        &nbsp;&nbsp;&nbsp;- <b>Add words</b> - The user can add new words into a new deck.<br>
                        &nbsp;&nbsp;&nbsp;- <b>Seach word</b> - The user can search for any new word that he encounters during practice. New words that are searched are also saved in the database as a new deck of words. <br>
                        &nbsp;&nbsp;&nbsp;- <b>Word Tone</b> - Every word is marked with any one of the labels (positive, negative, neutral). This helps in the text completion section, where one can get correct answers just by knowing the tone of the word.<br>
                        &nbsp;&nbsp;&nbsp;- <b>Shuffle</b> - The user can shuffle the words for robust practice.<br>
                        &nbsp;&nbsp;&nbsp;- <b>Filter</b> - The user can filter the words by deck number and perform shuffle action for filtered words.<br>
                        &nbsp;&nbsp;&nbsp;- <b>Synonyms</b> - For every word, there will be a meaning, description, example, and set of synonyms. Definitions of these synonyms can also be viewed just by hovering on the synonym.<br>
                        &nbsp;&nbsp;&nbsp;- <b>Study/Practice Mode</b> - These modes help users to study and practice words in an effective manner.<br><br>
                    ✔ New modules like GRE quant preparation, voting and ranking system for students solving doubts asked by peers, IELTS preparation, university shortlisting, profile evaluation, university predictor, detailed description of each university (application requirements, ranking, courses, tuition fees, application fees, deadline, etc.), VISA interview preparation and a job portal.<br><br>
                `,
            'outcome': `
                
                    ✔ This platform <b>overcomes the shortcomings</b> of existing well-known application.<br><br>
                
                    ✔ More than <b>450 students</b> use the current version.<br><br>

                    ✔ <b>Voting and ranking system</b> motivates students to answer more questions that lead to robust preparation.<br><br>

                    ✔ <b>Periodic question sets and word quiz</b> helps students to keep the preparation on track. <br><br>

                `,
            'image': 'ms.jpg',
            'skills': ['JavaScript', 'ReactJS', 'Firebase', 'Git', 'VSCode', 'Material UI', 'Google API', 'Selenium', 'JSON', 'Netlify'],
            'github': 'https://github.com/balajibetadur/Study-Abroad',
                 'line' : 'Study Abroad platform provides a complete package for someone who wants to study abroad. It includes a GRE preparation module to learn new words with new features that are absent in well-known applications online. It also includes GRE, IELTS, TOEFL preparation, University shortlisting, profile evaluation, university prediction, Networking, Room finder, etc. (few modules are in progress)'
        },
        {
            'title': 'Moving Window Object detection',
            'purpose': `
                
                    ✔ There was a hackathon on Computer Vision held by the Indian Institute of Technology, Bombay. We were required to <b>classify/detect the traffic signals</b> in such images, where there is a crowd, multiple symbols, and the size of the signs varied from <b>100%</b> to <b>2%</b> to image ratio.<br><br>

                    ✔ I needed a unique way to solve this because conventional methods would fail to give better accuracy on tiny signs than regular and large signs.<br><br>
                    
                    ✔ So, I developed a simple moving window method to overcome this issue.<br><br>
                
                
                `,
            'description': `
                
                    ✔ The moving window method is a unique way of solving an object detection task with a classification algorithm.<br><br>

                    ✔ When the user adds an image, the window of smaller resolution is created and rolled over the image.<br><br>
                    
                    ✔ Every time this window moves by a specific distance/pixel, an image classification algorithm is executed.<br><br>
                    
                    ✔ At a certain point, if the image classification algorithm classifies the window/sub-image as a sign, that window is marked as a object, and a <b>sign-label is tagged</b> to that image.<br><br>
                    
                    ✔ In the end, we have all possible signs in the image along with the coordinates of the sign, no matter the size of the sign.<br><br>
                `,
            'outcome': `
                
                    ✔ I won <b>2nd prize</b> with this project in a <b>national-level</b> hackathon at the Indian Institute of Technology, Bombay.<br><br>

                    ✔ The accuracy, especially for tiny signs in the image, is <b>15% more</b> than the conventional methods.<br><br>
                                
                `,
            'image': 'object.png',
            'skills': ['Python', 'Keras', 'Neural Networks', 'Matplotlib', 'openCV', 'fastai', 'GCP', 'Git', 'Google Collab GPU', 'VSCode'],
            'github': 'https://github.com/balajibetadur/Traffic-sign-Recognition-2-methods',
                 'line' : 'An object detection algorithm by image classification technique using the moving window method.'
        },
        {
            'title': 'Auto EDA',
            'purpose': `
                    
                    ✔ After I learned EDA skills up to intermidiate level, I realized <b>many steps are being repeated</b> in all projects/datasets.<br><br>

                    ✔ So, I created a simple module that takes any dataset and <b>performs basic EDA steps autonomously</b> .<br><br>
                    
                    ✔ Gradually, I started adding more features that requires the user to perform minimal possible EDA himself during the process.<br><br>

                `,
            'description': `
                    
                    ✔ Auto EDA is an application where users can upload the data and get the <b>EDA reports generated automatically</b> . <br><br>

                    ✔ I included both <b>automated and manual options</b> if the user wants to make any changes or add new inputs in the EDA.<br><br>
                    
                    ✔ I also used python packages like pandas-profiling, sweetviz, D-Tale, and Auto viz to <b>generate charts and reports</b> in a single click.<br><br>
                    
                    ✔ The auto EDA application generates insights like <b>charts, tables, heatmap, correlation matrix</b> , etc. that helps users to understand the data clearly.<br><br>
                
                
                `,
            'outcome': `
                
                    ✔ It reduced <b>repetitious tasks</b> during exploring any dataset.<br><br>

                    ✔ Charts and plots helped to understand data in a better way.<br><br>
                    
                    ✔ Data with <b>600,000</b> rows was analyzed in less than <b>2 seconds</b> .<br><br>
                    
                    ✔ These analyses and reports can be exported, which can be imported easily using python.<br><br>

                `,
            'image': 'eda.jpg',
            'skills': ['Python', 'Javascript', 'Pandas', 'Numpy', 'Bootstrap', 'profiling', 'Git', 'Heroku',],
            'github': 'https://github.com/balajibetadur/EDA',
                 'line' : 'A website that performs automated EDA (Exploratory Data Analysis) and displays results in the form of exportable tables, charts, and plots.'
        },
        {
            'title': 'Automation',
            'purpose': `
                
                    ✔ There were many activities that I used to perform every day. Once I started learning to program, I was curious if can automate everything, and now <b>most of the tasks run every day autonomously</b> at a given time.<br><br>

                    ✔ So, I started writing automation scripts. It began with simple alarms, notifications, sending WhatsApp messages.<br><br>
                    
                    ✔ And soon, I started exploring new things that help to optimize automation; <b>web scraping and selenium</b> .<br><br>
                    
                    ✔ Now, I can automate any monotonous activities, primarily <b>browser-based</b> tasks (filling google forms,  copy paste work, repetitive tasks, etc.)<br><br>

                `,
            'description': `
                
                    ✔ Automation scripts are simple programs that <b>automate monotonous and repetitious tasks</b> .<br><br>

                    ✔ I automate most of the activities I perform in my day-to-day life by putting my knowledge into use.<br><br>
                    
                    ✔ I used <b>selenium</b> to write python scripts that help to perform specific tasks on the browser.<br><br>
                    
                    ✔ <b>Chromedriver</b> helps to access the chrome web browser using selenium in python.<br><br>
                    
                    ✔ If the task is repetitive, then automation will carry out the job effectively in a <b>very short time<b>.   <br><br>             
                
                `,
            'outcome': `
                    
                    ✔ <b>Stood 2nd</b> in Internshala Student Partner (ISP 19) among <b>40,000+ students</b> by automating given tasks without human intervention.<br><br>

                    ✔ Automated multiple web scraping tasks that <b>reduced time consumption by ten times</b> compared to manually performing the same task.<br><br>

                    ✔ <b>Automated login for Zerodha API</b> for multiple accounts to get request tokens with a single click.<br><br>
                                
                `,
            'image': 'automate.jpg',
            'skills': ['Python', 'Selenium', 'Pandas', 'Chromedriver', 'Scrapy', 'Git', 'MongoDB', 'Google Collab'],
            'github': 'https://github.com/balajibetadur/Automation',
                 'line' : 'Python scripts that automate simple daily-to-day life repetitive tasks. Selenium allows automating any web-browser-based tasks using chrome driver in a very short time.'
        },
        {
            'title': 'Buggy - Debugging programming errors',
            'purpose': `

                    ✔ When I was a beginner in programming, I used to make many mistakes. My code was not perfect, and it had many errors. <br><br>

                    ✔ I was a self-learner, and sometimes I used to <b>spend hours</b> together to <b>fix the errors</b> . <br><br>

                    ✔ So I designed a simple python script, which helps the user <b>find a solution in less than a second</b> .<br><br>
                
                `,
            'description': `
                
                    ✔ Buggy is the python script that enables the user to <b>find a solution</b> for the <b>error encountered</b> during programming.<br><br>

                    ✔ Users can <b>copy-paste the question</b> as an input; the algorithm using <b>cosine-similarity matching</b> searches for a similar question and provide answers to the user.<br><br>

                    ✔ It also provides the <b>top 10</b> related solutions to the error the user entered.<br><br>

                    ✔ Along with the solution for the error, the results also provide <b>links, blogs, and related code snippet</b> references.  <br><br>

                    ✔ I also wrote and published a research paper on this work named <b>'System Model to Effectively Understand Programming Error Messages Using Similarity Matching and Natural Language Processing'</b> at International Conference on Cybernetics, Cognition and Machine Learning Applications.<br><br>

                `,
            'outcome': `
                
                    ✔ Although I developed this project when I was a beginner, It helped me solve many errors during my learning phase and <b>saved hundreds of hours</b> .<br><br>

                    ✔ I shared this with my peers and received positive feedback.<br><br>
                    
                    ✔ <b>Future Work</b> - We are working on the next version of this project, i.e., an <b>extension for IDE's and browsers</b> . <br><br>
                    
                    ✔ When the user encounters an error, the extension will automatically detect the error and provide the solution to the user.<br><br>
                    
                    ✔ Users can click on the suggestion by the extension to replace the original piece of code with the correct version of code.<br><br>

                `,
            'image': 'debug.jpg',
            'skills': ['Python', 'Cosine Similarity MAtching', 'NLP', 'Sklearn', 'Keras', 'Google Collab', 'Neural Networks', 'VSCode', 'Selenium', 'Git'],
            'github': 'https://github.com/balajibetadur/Human-Machine-interaction-Chat-bots/tree/master/Error-Solution-Generator',
                 'line' : 'Buggy enables the user to find solutions for the errors encountered during programming. It provides a solution popup whenever an error is raised.'
        },
        {
            'title': 'Spotty - Desktop Assisstant',
            'purpose': `
                
                    ✔ Spotty is my first project, which I developed during my first semester in college.<br><br>

                    ✔ There is a character called 'Iron Man' in MCU (Marvel Cinematic Universe). The character designs a <b>natural language UI</b> using Artificial Intelligence. I was intrigued by how technology can be used and was interested in building an AI bot myself.<br><br>
                    
                    ✔ So, I wrote a basic python script that works as a desktop assistant. It performs most of the generic tasks that humans do every day.<br><br>

                `,
            'description': `
                
                    ✔ Spotty is a <b>voice-based assistant</b> that listens to your command and replies with an audio output.<br><br>

                    ✔ Users can ask questions or assign any task by saying it in the usual language (English).<br><br>
                    
                    ✔ Few basic tasks performed are<br>
                        &nbsp;&nbsp;&nbsp;- Play music<br>
                        &nbsp;&nbsp;&nbsp;- Play videos (youtube, server, local storage)<br>
                        &nbsp;&nbsp;&nbsp;- Increase and decrease volume<br>
                        &nbsp;&nbsp;&nbsp;- Increase and decrease brightness<br>
                        &nbsp;&nbsp;&nbsp;- Search something on the web<br>
                        &nbsp;&nbsp;&nbsp;- Daily updates<br>
                        &nbsp;&nbsp;&nbsp;- Logout/Login<br>
                        &nbsp;&nbsp;&nbsp;- Shutdown/Restart<br>
                        &nbsp;&nbsp;&nbsp;- Keep an alarm<br><br>
                
                `,
            'outcome': `
                
                    ✔ A basic UI that helped me perform simple daily tasks just by sitting at my work table.<br><br>

                    ✔ There are two voices available; male and female voices.<br><br>
                    
                    ✔ New functions can be added explicitly to the program/code without any complications.<br><br>
                
                `,
            'image': 'spotty.jpg',
            'skills': ['Python', 'Testing', 'Pyttx3', 'Speech Recognition', 'Panads', 'VSCode', 'Git'],
            'github': 'https://github.com/balajibetadur/spotty',
                 'line' : 'Spotty is a voice-based desktop assistant implemented using python. It performs tasks that we do every day on our desktops.'
        },
        {
            'title': 'Portfolio',
            'purpose': `

                    ✔ I always wanted to <b>build my portfolio</b> website because I like to talk about my work<br>
                        &nbsp;&nbsp;&nbsp;- why I do something<br>
                        &nbsp;&nbsp;&nbsp;- what did I do<br>
                        &nbsp;&nbsp;&nbsp;- what are the outcomes/advantages/new-unique features <br><br>
                    
                    ✔ It also shows how good I am at what I do. A good, responsive website will reflect my skills in web development.<br><br>
                    
                    ✔ Additionally, It wasn't easy to cover my four-year journey on a single-page resume, so I built a website to showcase my skills and describe my work in detail.<br><br>

                `,
            'description': `
                
                    ✔ My portfolio website consists of ten sections<br>
                        &nbsp;&nbsp;&nbsp;- Home<br>
                        &nbsp;&nbsp;&nbsp;- About<br>
                        &nbsp;&nbsp;&nbsp;- Education<br>
                        &nbsp;&nbsp;&nbsp;- Skills<br>
                        &nbsp;&nbsp;&nbsp;- Research<br>
                        &nbsp;&nbsp;&nbsp;- Work Experience<br>
                        &nbsp;&nbsp;&nbsp;- Projects<br>
                        &nbsp;&nbsp;&nbsp;- Achievements<br>
                        &nbsp;&nbsp;&nbsp;- Extra-curricular<br>
                        &nbsp;&nbsp;&nbsp;- Contact<br><br>
                    
                    ✔ It is <b>completely portable</b> ; Data from every section is fetched from a <b>JSON file</b> , where new users can <b>change/add/remove</b> the information.<br><br>
                    
                    ✔ The website is responsive, which creates dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it.<br><br>

                `,
            'outcome': `
                
                    ✔ I can display my work in detail so that the reader will get a complete understanding of my work.<br><br>

                    ✔ People can use the same <b>template</b> , change the information in the JSON file and use it as their portfolio website.<br><br>
                    
                    ✔ People can reach out to me if interested in working on similar and interesting projects. It helps me to connect with new people and allows me to learn new things. <br><br>
                    
                    ✔ It also helps me to develop and <b>grow my network</b> .<br><br>
                
                `,
            'image': 'portfolio.jpg',
            'skills': ['JavaScript', 'Iconscout', 'JOSN', 'Netlify', 'Git', 'VSCode'],
            'github': 'https://github.com/balajibetadur/portfolio',
                 'line' : "It is the current website 'balajibetadur.github.io' that tells about me and showcase my skills, research, work experience, projects, achievements, and certifications. "
        }
    ],

    'Achievements': [
        '<span class = "emoji">⚡</span> Runner up in 2 National-Level AI Competitions held by <b>Indian Institute of Technology, Bombay</b>.',
        '<span class = "emoji">⚡</span> State-Level winner in collage (painting) at 21st Janani event held bu VTU.',
        '<span class = "emoji">⚡</span> 6-star in python programming on Hackerrank Platform.',
        '<span class = "emoji">⚡</span> Top ranker in 17+ challenges/hackathons/competitions on Hackerearth platform (Top 4).',
        '<span class = "emoji">⚡</span> Winner in App Presentation in Appoloyd held by IEEE.',
        '<span class = "emoji">⚡</span> Co-ordinator in university student clubs<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Technical Paper Presentation.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Design Thinking.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Fine Arts.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- National Service Scheme'
    ],
    'Certifications': [

        {'name' : 'Neural Networks and Deep Learning', 'link' : 'https://coursera.org/share/f8e14d74a1b26a4bcfdf545baf82468b'},
        {'name' : 'Data Science Methodology', 'link' : 'https://coursera.org/share/ecdbd88b038a686077ee5ca8c89d5526'},
        {'name' : 'Structuring Machine Learning Projects', 'link' : 'https://coursera.org/share/bc6e76ad1c94405a161f14728677c85a'},
        {'name' : 'Sequesnces, Time Series and Prediction', 'link' : 'https://coursera.org/share/0a6bf0931bf5208c0bc98a8954227a9b'},
        {'name' : 'Data Visualization with Python', 'link' : 'https://coursera.org/share/d19597c937d9db03944ebc4a8d7f5508'},
        {'name' : 'Data Analysis with Python', 'link' : 'https://coursera.org/share/f42522475476591a0d9bbf3e6ee355d3'},
        {'name' : 'Databases and SQL for Data Science with Python', 'link' : 'https://coursera.org/share/915a5dce9c56fe4cfb6207c2233ad659'},
        {'name' : 'Python for Data Science, AI & Development', 'link' : 'https://coursera.org/share/ddc3869aa02cd0ec3057cdd6852d03d1'},
    ]


}


let certi = document.getElementById('certi__cards')
data.Certifications.forEach(certi_ => {
  
    certi.innerHTML += '<a  class="certi__card" href = "'+certi_.link+'" target = "_blank"><div>' + certi_.name + '</div></a>'
})

let ach = document.getElementById('achs')

data.Achievements.forEach(achi => {
    ach.innerHTML += '<p class = "achievement">' + achi + '</p></br>'
})

let header = document.getElementById('header');
data.menu.forEach(option => {
    header.innerHTML += '<a  class = "main__option" href = "' + option.to + '">' + option.text + '</a>'
})

data.socialMedia.forEach(icon => {
    document.getElementById('social__media').innerHTML += "<a href='" + icon.to + "' target='_blank'><i class='" + icon.class + "'></i></a>"
});

data.socialMedia.forEach(icon => {
    document.getElementById('others').innerHTML += "<a href='" + icon.to + "' target='_blank'><i class='" + icon.class + "t c__icon'></i></a>"
});

data.menu.forEach(icon => {
    document.getElementById('menu').innerHTML += "<div class='icon__text'><a class='menu__items' href='" + icon.to + "'> <i class='" + icon.class + "'></i>" + icon.text + "</a></div>"
});

let menuIcon = document.getElementById('open__menu')

if (menuIcon) {

    menuIcon.addEventListener('click', () => {
        document.getElementById('menu').classList.add('menu__show');
    })
}

let closeIcon = document.getElementById('close__menu')

if (closeIcon) {

    closeIcon.addEventListener('click', () => {
        document.getElementById('menu').classList.remove('menu__show');
    })
}

let options = document.querySelectorAll('.icon__text')

options.forEach((option, i) => option.addEventListener('click', () => {

    document.getElementById('menu').classList.remove('menu__show');
})
)

resumeBtn = document.getElementById('resume');

if (resumeBtn) {
    resumeBtn.addEventListener('mouseenter', () => {
        document.getElementById('resume__icon').classList.add('anim');
    })
    resumeBtn.addEventListener('mouseleave', () => {
        document.getElementById('resume__icon').classList.remove('anim');
    })
}

let darkMode = document.getElementById('dark__mode');
let lightMode = document.getElementById('light__mode');
darkMode.addEventListener('click', () => {
    darkMode.classList.add('hide');
    lightMode.classList.add('view');
    document.body.classList.add('dark');
})
lightMode.addEventListener('click', () => {
    darkMode.classList.remove('hide');
    lightMode.classList.remove('view');
    document.body.classList.remove('dark');
})

whatIDo = document.getElementById('about__data')

data.whatIdo.forEach(item => {
    temp = '<p class="what__i__do__title" id="what__i__do__title">' + item.title + '</p><div class = "d" id="d">'

    temp += '<img class = "DSAI__img" id ="DSAI__img" src="images/' + item.image + '" alt="" srcset=""><div class="about__desc" id="about__desc">';

    // ele = document.getElementById('about__desc')
    item.description.forEach(desc => {
        temp += '</br><p class ="about__description" >' + desc + '</p>'
    })

    temp += '</div>'
    whatIDo.innerHTML += temp

})

// data.whatIdo.forEach(item => {
//     whatIDo.innerHTML += '<p class="what__i__do__title" id="what__i__do__title">'+item.title+'</p><div class = "d" id="d"></div>'

//     let ele = document.getElementById('d')
//     ele.innerHTML += '<img class = "DSAI__img" id ="DSAI__img" src="images/'+item.image+'" alt="" srcset=""><div clas="about__desc" id="about__desc"></div>';

//     ele = document.getElementById('about__desc')
//     item.description.forEach(desc => {
//         ele.innerHTML += '</br><p class ="description" >'+desc+'</p>'
//     })
// })

skillBars = document.getElementById('skillBars');

data.skills.forEach(skill => {
    skillBars.innerHTML += '<div class = "bars"><div class="fullBar" id="fullBar"><div style = "width: ' + skill.Level * 300 + 'px" class="bar" id="bar"> <p class="skills__text" id="skills__text">' + skill.skill + '</p></div></div></div>'
})


let works = document.getElementById('r__internships')

data.work.Research_Internships.forEach(work => {

    works.innerHTML += '<div class="card" id="card '+work["modal-class"]+'"><div class="card__name" id="card__name">' + work.location + '</div> <img class = "card__img"src="images/' + work.image + '" alt="" srcset=""> <div class="details" id="details"> <p class="location" id="location"> ' + work.name + '</p><p class="duration" id="duration"> ' + work.duration + ' </p> </div><p class ="view__more">view</p></div><div class="modal" id="modal"><div class="modal__content" id="modal-content'+work["modal-class"]+'"> <i class="uil uil-times modal__close close__ind"></i><p class="modal__title" id="modal__title">' + work.name + '</p> </br><div class = "one__line"><span class="line__text">'+work.line+'<span></div><div class="modal__set" id="modal__set"> <div class ="dec__sections"><p class="outcome" id="outcome">Description</p><hr>' + work.description + '</div><div class ="dec__sections"> <p class="outcome" id="outcome">Outcome</p><hr>' + work.outcome + '</div></div> </div>'
})

let pubs = document.getElementById('pubs')

data.work.Publications.forEach(work => {

    pubs.innerHTML += '<div class="card__pub" id="card__pub"><div class="card__name__pub" id="card__name">' + work.location + '</div> <div class="details__pub" id="details__pub"> <p class="pub__name" id="pub__name"> ' + work.name + '</p> </div><p class ="pub__more">' + work.progress + '</p></div>'
})

works = document.getElementById('i__internships')

data.work.Industrial_Internships.forEach(work => {

    works.innerHTML += '<div class="card" id="card"><div class="card__name" id="card__name">' + work.location + '</div> <img class = "card__img"src="images/' + work.image + '" alt="" srcset=""> <div class="details" id="details"> <p class="location" id="location"> ' + work.name + '</p><p class="duration" id="duration"> ' + work.duration + ' </p> </div><p class ="view__more">view</p></div><div class="modal" id="modal"><div class="modal__content" id="modal-content"> <i class="uil uil-times modal__close"></i><p class="modal__title" id="modal__title">' + work.name_ + '</p></br><div class = "one__line"><span class="line__text">'+work.line+'<span></div> <div class="modal__set" id="modal__set"> <div class ="dec__sections"><p class="outcome" id="outcome">Description</p><hr>' + work.description + ' </div><div class ="dec__sections"><p class="outcome" id="outcome">Outcome</p><hr>' + work.outcome + '</div> </div></div></div>'


})

works = document.getElementById('v__internships')

data.work.Volunteerships.forEach(work => {

    works.innerHTML += '<div class="card" id="card"><div class="card__name" id="card__name">' + work.location + '</div> <img class = "card__img"src="images/' + work.image + '" alt="" srcset=""> <div class="details" id="details"> <p class="location" id="location"> ' + work.name + '</p><p class="duration" id="duration"> ' + work.duration + ' </p> </div><p class ="view__more">view</p></div><div class="modal" id="modal"><div class="modal__content vol__modal" id="modal-content"> <i class="uil uil-times modal__close close__ind"></i><p class="modal__title" id="modal__title">' + work.name + '</p> <hr>' + work.description + '</div> </div>'
})

let modals = document.querySelectorAll('.modal')
let cards = document.querySelectorAll('.card')
let close = document.querySelectorAll('.modal__close')


cards.forEach((card, i) => card.addEventListener('click', () => {
    modals[i].classList.add('block');
}))


document.querySelectorAll('.modal').forEach((card, i) => card.addEventListener('click', () => {
    modals.forEach(modal => {
        modal.classList.remove('block')
    }
    )
}))



close.forEach((card, i) => card.addEventListener('click', () => {
    modals.forEach(modal => {
        modal.classList.remove('block')
    }
    )
}))

let projects_ = document.getElementById('project__cards')

data.projects.forEach(project => {
    projects_.innerHTML += '<div style="background-image: url(images/' + project.image + ');" class="project__card" id="project__card"><p class="project__name" id="project__name">' + project.title + '</p><p class ="more">view</p></div><div class="project__modal" id="modal"><div class="modal__content" id="modal-content"> <i class="uil uil-times project__modal__close"></i><p class="modal__title" id="modal__title">' + project.title + '</p><br><div class ="proj__skills" id ="proj__skills ' + project.title + '"></div></br><div class = "one__line__"><span class="line__text">'+project.line+'<span></div> <div class="modal__set" id=modal__set"><div class = "proj__sections"><p class="outcome" id="outcome">Purpose</p><hr>' + project.purpose + '</div><div class = "proj__sections"><p class="outcome" id="outcome">Description</p><hr>' + project.description + ' </div><div class = "proj__sections"><p class="outcome" id="outcome">Outcome</p><hr>' + project.outcome + '</div></div> <div class="github" id="github"> <a class="aa icon__github" target = "_blank" href="' + project.github + '"><i class="uil uil-github "><span class="github__text">&nbsp;&nbsp; GitHub</span></i></div></div></div>'
})

data.projects.forEach(proj => {
    proj.skills.forEach(skill => {
        document.getElementById('proj__skills ' + proj.title).innerHTML += '<span class = "projects__skills">' + skill + '</span>'
    })
})

let projectCards = document.querySelectorAll('.project__card');
let projectModals = document.querySelectorAll('.project__modal')
let projectClose = document.querySelectorAll('.project__modal__close')

projectCards.forEach((card, i) => card.addEventListener('click', () => {
    
    projectModals[i].classList.add('block');
}))

projectClose.forEach((card, i) => card.addEventListener('click', () => {
    projectModals.forEach(modal => {
        modal.classList.remove('block')
    }
    )
}))

document.querySelectorAll('.project__modal').forEach((card, i) => card.addEventListener('click', () => {
    projectModals.forEach(modal => {
        modal.classList.remove('block')
    }
    )
}))

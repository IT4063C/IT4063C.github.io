"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1273],{83482:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));a(8209);const l={sidebar_position:1,title:"Machine Learning",draft:!1},r=void 0,o={unversionedId:"ml/index",id:"ml/index",title:"Machine Learning",description:"What is Machine Learning (ML)?",source:"@site/content/course-notes/8.ml/index.md",sourceDirName:"8.ml",slug:"/ml/",permalink:"/course-notes/ml/",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/course-notes/8.ml/index.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1665353938,formattedLastUpdatedAt:"Oct 9, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Machine Learning",draft:!1},sidebar:"notes",previous:{title:"Visualization",permalink:"/course-notes/visualizations/"},next:{title:"Regression",permalink:"/course-notes/ml-regression/"}},s={},m=[{value:"What is Machine Learning (ML)?",id:"what-is-machine-learning-ml",level:2},{value:"When and Why use Machine Learning?",id:"when-and-why-use-machine-learning",level:2},{value:"Tasks that are too complex to program",id:"tasks-that-are-too-complex-to-program",level:3},{value:"Tasks that require adaptivity",id:"tasks-that-require-adaptivity",level:3},{value:"Applications of ML",id:"applications-of-ml",level:2},{value:"Types of ML Systems:",id:"types-of-ml-systems",level:2},{value:"Classification by Supervision Type",id:"classification-by-supervision-type",level:3},{value:"Supervised Learning",id:"supervised-learning",level:4},{value:"Unsupervised Learning",id:"unsupervised-learning",level:4},{value:"Semi-supervised Learning",id:"semi-supervised-learning",level:4},{value:"Reinforcement Learning",id:"reinforcement-learning",level:4},{value:"Challenges of ML",id:"challenges-of-ml",level:2},{value:"Algorithm Challenges",id:"algorithm-challenges",level:3},{value:"Overfitting the Training Data",id:"overfitting-the-training-data",level:4},{value:"Underfitting the Training Data",id:"underfitting-the-training-data",level:4},{value:"Data Challenges",id:"data-challenges",level:3},{value:"Irrelevant Features and Poor quality Data",id:"irrelevant-features-and-poor-quality-data",level:4},{value:"Insufficient Quantity of Training Data",id:"insufficient-quantity-of-training-data",level:4}],p={toc:m};function u(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-machine-learning-ml"},"What is Machine Learning (ML)?"),(0,i.kt)("p",null,"Machine learning is the science of getting computers to act without being explicitly programmed to do so. It brings together the fields of statistics, algebra , and computer science to build algorithms that can learn from data."),(0,i.kt)("p",null,"Also, "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A computer program is said to learn from Experience E with respect to some class of tasks T and performance measure P if its performance at tasks in T, as measured by P, improves with experience E."),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Tom M. Mitchell"))),(0,i.kt)("p",null,"Let's give break this definition down and see what it means."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Experience E"),": What the machine learns from; The data we feed to the algorithm.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It's the datasets that we use to train the algorithm."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tasks T"),": What machine learns for; The tasks the algorithm is supposed to perform.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"image classification, spam email detection, finding patterns in Medical Diagnosis, forecasting stock market prices, ...etc."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Performance measure P"),": How well the machine learns; The measure of the algorithm's performance and accuracy.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Accuracy, Precision, Recall, F1-Score, ...etc.")))),(0,i.kt)("p",null,"An Example:"),(0,i.kt)("p",null,"If we take filtering spam emails as an example, we can define the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Tasks T"),": Filtering the spam emails.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Experience E"),": the labelled emails from users; whether they marked them as spam or not.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Performance measure P"),": the ratio of emails that are correctly classified as spam or not spam.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Data Science is a field that uses machine learning to solve problems.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Not every machine learning is a data science and vice versa."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ML and DS",src:a(63088).Z,width:"1920",height:"1080"})),(0,i.kt)("h2",{id:"when-and-why-use-machine-learning"},"When and Why use Machine Learning?"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If we can have the computer teach itself, why do we program anything at all?")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If the only tool you have is a hammer, you tend to see every problem as a nail."),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"The law of Instrument By Abraham Maslow"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There are 2 factors, based on which we decide if Machine Learning is the right tool for the job:"),(0,i.kt)("li",{parentName:"ul"},"The problem's complexity"),(0,i.kt)("li",{parentName:"ul"},"and/or the need for adaptivity in the solution you're building")),(0,i.kt)("h3",{id:"tasks-that-are-too-complex-to-program"},"Tasks that are too complex to program"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tasks performed by animals or humans"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"our introspection of those tasks is not elaborate enough to extract a defined algorithm that we can program.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Speech recognition, understanding images and objects and shapes, and driving cars, playing chess. "),(0,i.kt)("li",{parentName:"ul"},"There's a lot of mental work that would be near impossible to program.")))))),(0,i.kt)("p",null,"Another class of tasks that are too complex to program are tasks that are beyond the human capability."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tasks Beyond Human Capability"),": ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, analyzing very large and very complex data sets, finding patterns in millions of correlated records.")))),(0,i.kt)("h3",{id:"tasks-that-require-adaptivity"},"Tasks that require adaptivity"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Programmed solutions are rigid"),(0,i.kt)("li",{parentName:"ul"},"Machine learning algorithms are flexible, they can change and adapt to new data, and new experiences.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Programmed solution",src:a(60280).Z,width:"1920",height:"1080"}),"\n",(0,i.kt)("img",{alt:"ML solution",src:a(21685).Z,width:"1920",height:"1080"})),(0,i.kt)("h2",{id:"applications-of-ml"},"Applications of ML"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Analyzing images of products on a production line to detect defects and classify them automatically."),(0,i.kt)("li",{parentName:"ul"},"Detecting tumors in brain scans or body scans, if you know the markers you look for."),(0,i.kt)("li",{parentName:"ul"},"Creating a recommendation system for a website, to recommend products to users based on their previous purchases."),(0,i.kt)("li",{parentName:"ul"},"Or letting the computer learn similarities and cluster similar data point together which may and has been used to identify new patterns and clusters of data that we didn't know existed."),(0,i.kt)("li",{parentName:"ul"},"Segmenting customers based on their purchasing patterns, to create targeted marketing campaigns (clustering)."),(0,i.kt)("li",{parentName:"ul"},"Finding new patterns in the tumor scans that led to discovering new markers for cancer."),(0,i.kt)("li",{parentName:"ul"},"Forecasting and optimizing a company revenue, based on historical data (time series analysis)."),(0,i.kt)("li",{parentName:"ul"},"...etc.")),(0,i.kt)("h2",{id:"types-of-ml-systems"},"Types of ML Systems:"),(0,i.kt)("p",null,"Three are different ways to classify machine learning systems, or to distinguish between them, like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Whether or not they are trained with human supervision (supervised, unsupervised, semisupervised, and reinforcement learning)."),(0,i.kt)("li",{parentName:"ul"},"weather or not they can learn incrementally on the fly (online versus batch learning)."),(0,i.kt)("li",{parentName:"ul"},"weather or not they work by simply comparing new data points to known data points, or instead detect patterns in the training data and build a predictive model, much like humans do (instance-based versus model-based learning).")),(0,i.kt)("h3",{id:"classification-by-supervision-type"},"Classification by Supervision Type"),(0,i.kt)("h4",{id:"supervised-learning"},"Supervised Learning"),(0,i.kt)("p",null,"task of learning a function that maps an input to an output based on example input-output pairs. It infers a function from labeled training data consisting of a set of training examples."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Classification"),": predicting a categorical label (spam or not spam)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Regression"),": predicting a continuous value (price of a house).")),(0,i.kt)("h4",{id:"unsupervised-learning"},"Unsupervised Learning"),(0,i.kt)("p",null,"Unsupervised learning is a type of algorithm that learns patterns from untagged data. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Clustering"),": grouping similar data points together.")),(0,i.kt)("h4",{id:"semi-supervised-learning"},"Semi-supervised Learning"),(0,i.kt)("p",null,"a hybrid of supervised and unsupervised learning. It combines a small amount of labeled data with a large amount of unlabeled data during training."),(0,i.kt)("h4",{id:"reinforcement-learning"},"Reinforcement Learning"),(0,i.kt)("p",null,"Reinforcement learning is an area of machine learning concerned with how intelligent agents ought to take actions in an environment in order to maximize the notion of cumulative reward."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Machine learning problems",src:a(28720).Z,width:"1398",height:"1000"})),(0,i.kt)("h2",{id:"challenges-of-ml"},"Challenges of ML"),(0,i.kt)("p",null,"There are challenges related to the data, and challenges related to the algorithms.\n",(0,i.kt)("img",{alt:"Ml Challenges",src:a(40759).Z,width:"1448",height:"494"})),(0,i.kt)("h3",{id:"algorithm-challenges"},"Algorithm Challenges"),(0,i.kt)("h4",{id:"overfitting-the-training-data"},"Overfitting the Training Data"),(0,i.kt)("p",null,"Overfitting is when the machine learning model is trained to fit exactly the training data including the noise in the data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Overfitting could also occur when you have a lot of features in your data, and you don't have a lot of data to be able to train your model to detect all the patterns and relationships between the different features and come up with a generalized state."),(0,i.kt)("li",{parentName:"ul"},"Overfitting could also happen when you have a lot of features, but you don't have enough data for the model to learn the connections between the features and the target.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"overfitting",src:a(97765).Z,width:"736",height:"255"}),"\nComic:\n",(0,i.kt)("img",{parentName:"p",src:"https://imgs.xkcd.com/comics/electoral_precedent.png",alt:"overfitting-presidential-candidates"})),(0,i.kt)("h4",{id:"underfitting-the-training-data"},"Underfitting the Training Data"),(0,i.kt)("p",null,"Underfitting is when the model you're developing is not complex enough to fit the complexity in the data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This can also be caused by lack of data or features, "),(0,i.kt)("li",{parentName:"ul"},"It can be caused by biased data."),(0,i.kt)("li",{parentName:"ul"},"It can be caused by an overly simple model.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"polynomial",src:a(22737).Z,width:"960",height:"720"})),(0,i.kt)("p",null,"The higher the degree of the polynomial, the more complex the model is, and the more fluctuations that can be controlled.\n",(0,i.kt)("img",{alt:"underfitting",src:a(97765).Z,width:"736",height:"255"})),(0,i.kt)("h3",{id:"data-challenges"},"Data Challenges"),(0,i.kt)("h4",{id:"irrelevant-features-and-poor-quality-data"},"Irrelevant Features and Poor quality Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Garbage In, Garbage out. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you feed the algorithm with irrelevant features, it will learn irrelevant patterns and will not be able to generalize well.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"there's a process in Machine Learning called feature engineering.\n",(0,i.kt)("img",{alt:"feature engineering",src:a(74444).Z,width:"1286",height:"386"})))),(0,i.kt)("h4",{id:"insufficient-quantity-of-training-data"},"Insufficient Quantity of Training Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you don't have enough data, you won't be able to train your model well.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The most important task a machine learning algorithm goes through is getting trained on the data. and so the more data you have, the better the algorithm will be.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The quantity of data is a relative, and it depends on the complexity of the problem you're trying to solve.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The more complex the problem, the more features you have in your data, the more data you need.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Research shows that even with poor algorithms and models, you can get good results if you have enough data."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://homl.info/6"},"Research 1: Scaling to very very large corpora for natural language disambiguation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://homl.info/7"},"Research 2: The Unreasonable Effectiveness of Data"))))))}u.isMDXComponent=!0},74444:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Feature-Engineering-e194ccf6b393f35b395c535f91e99d48.png"},40759:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ML-Challenges-85a669cf2641aa4e6cf74b513337bb08.png"},63088:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ML-DS-978bbfa91b2e5eac145c5e2b46265bba.png"},28720:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/machine-learning-d8d0b92097b201a8b0f6b3fc613cc75f.png"},21685:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ml-solution-e5d469c5b72d0e1a607296640249a1bf.png"},97765:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/over-underfitting-a76eca1069069e12552d63136df8326c.webp"},22737:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/polynomial-e9314f0c7d618f33a7a1474973f22a7f.jpeg"},60280:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/programmed-solution-777244c193e27da3238cee5595d7ee0b.png"}}]);
"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"installing-pipenv","metadata":{"permalink":"/blog/installing-pipenv","editUrl":"https://github.com/IT4063C/IT4063C.github.io/tree/main/blog/2023-01-16-installing-pipenv/index.md","source":"@site/blog/2023-01-16-installing-pipenv/index.md","title":"Installing Pipenv","description":"Purpose of this post","date":"2023-01-16T00:00:00.000Z","formattedDate":"January 16, 2023","tags":[{"label":"Problem Solving","permalink":"/blog/tags/problem-solving"}],"readingTime":1.195,"hasTruncateMarker":false,"authors":[{"name":"Yahya Gilany","title":"Class Instructor","url":"https://yahya-gilany.com","imageURL":"https://yahya-gilany.com/img/Yahya1.webp","key":"ygilany"}],"frontMatter":{"slug":"installing-pipenv","title":"Installing Pipenv","draft":false,"authors":["ygilany"],"tags":["Problem Solving"]},"nextItem":{"title":"Breaking Down Problems into Manageable Pieces and Steps","permalink":"/blog/break-down-problems"}},"content":"## Purpose of this post\\nIf you had issues installing pipenv on your Windows computer, This guide is for you.\\n\\n## Instructions\\n### Pre-conditions\\n- You have Python 3.11 installed on your computer.\\n- You have pip installed on your computer.\\n- You\'re able to access pip from the command line.\\n\\n### Installing PipEnv\\n- From your command line, run the following command:\\n```bash\\npip uninstall virtualenv\\npip uninstall pipenv\\n``` \\n  - This command will uninstall any existing versions of PipEnv and VirtualEnv that you have installed on your computer.\\n- Run the following command:\\n```bash\\npip install --user pipenv\\n```\\n  - This command will install PipEnv on your computer.\\n  - You may get a warning that says that certain scripts and packages are not in your PATH. Copy that PATH and [add it to your PATH environment variable](https://windowsloop.com/how-to-add-to-windows-path/#:~:text=Add%20directory%20or%20program%20to%20Windows%20PATH%201,full%20directory%20path%20of%20the%20program.%20More%20items).\\n- For the terminal to recognize the new PATH, you may need to restart your terminal (close and open).\\n\\n### Post-conditions\\nTo confirm that PipEnv is installed, run the following command:\\n```bash\\npipenv --version\\n```\\n\\n## Using PipEnv\\nFor each assignment that you work on, you install its dependencies using the following command:\\n```bash\\npipenv install\\n```\\n  - This command will install all the dependencies that are listed in the Pipfile.\\n  - It will also create a virtual environment for the project.\\n\\nTo learn more about pipenv:\\n  - check out the the [course notes](/course-notes/dev-env)\\n  - check out the [official documentation](https://pipenv.pypa.io/en/latest/)."},{"id":"break-down-problems","metadata":{"permalink":"/blog/break-down-problems","editUrl":"https://github.com/IT4063C/IT4063C.github.io/tree/main/blog/2023-01-06-breaking-down-problems/index.md","source":"@site/blog/2023-01-06-breaking-down-problems/index.md","title":"Breaking Down Problems into Manageable Pieces and Steps","description":"Divide and Conquer","date":"2023-01-06T00:00:00.000Z","formattedDate":"January 6, 2023","tags":[{"label":"Problem Solving","permalink":"/blog/tags/problem-solving"}],"readingTime":2.895,"hasTruncateMarker":false,"authors":[{"name":"Yahya Gilany","title":"Class Instructor","url":"https://yahya-gilany.com","imageURL":"https://yahya-gilany.com/img/Yahya1.webp","key":"ygilany"}],"frontMatter":{"slug":"break-down-problems","title":"Breaking Down Problems into Manageable Pieces and Steps","draft":false,"authors":["ygilany"],"tags":["Problem Solving"],"image":"divide-and-conquer.webp"},"prevItem":{"title":"Installing Pipenv","permalink":"/blog/installing-pipenv"}},"content":"![Divide and Conquer](divide-and-conquer.webp)\\n\\n## Introduction\\nOne of the keys to effective critical thinking and problem-solving is the ability to take a large, complex challenge and break it down into smaller, more manageable pieces. When you do this, you can focus your efforts on one aspect of the problem at a time, rather than getting overwhelmed by the entirety of the task. Plus, tackling smaller problems individually can often be more efficient and effective than trying to solve the whole thing at once.\\n\\n## Tips for Breaking Down Problems\\nBut how do you go about breaking down a big problem? Here are a few tips to get you started:\\n\\n### Brainstorm\\nStart by writing down everything that you know about the problem. What are the specific challenges you need to overcome? Are there any dependencies or requirements that you need to consider? This can help you get a better understanding of what you\'re dealing with and identify potential sub-problems.\\n\\n### Create a list of sub-problems\\nOnce you have a sense of the different challenges you need to tackle, try organizing them into a list of smaller problems that you can work on independently. This can help you prioritize your efforts and focus on one thing at a time.\\n\\n### Use visual tools\\nTools like flowcharts and mind maps can be helpful for breaking down a problem into smaller pieces. These visual aids can help you see the relationships between different sub-problems and figure out the most logical order in which to tackle them.\\n\\n### Look for resources\\nIf you get stuck on a particular sub-problem, don\'t be afraid to seek out resources that can help you. This might mean doing some online research, asking a colleague for advice, or consulting with an expert.\\n\\n## An Example\\nHere\'s an example of how this process might work in practice. Suppose you have an assignment that requires you to query data from a MS SQL database and visualize the results in a couple of charts. Rather than Googling \\"How to query data from SQL and visualize it using Python,\\" you could break down the assignment requirements into the following sub-problems:\\n\\n1. Clone down the starting files for the project.\\n2. Make sure you have all the necessary dependencies and requirements installed.\\n3. Connect to the database.\\n4. Run a sample query to test your connection.\\n5. Store the query results in an appropriate data structure.\\n6. Visualize the data using the appropriate charts and tools.\\n\\nBy breaking the problem down into smaller pieces, you can focus on solving one sub-problem at a time, rather than trying to tackle the whole thing all at once. And if you get stuck on any particular sub-problem, you can always do some additional research or seek out resources to help you overcome the challenge.\\n\\n## Conclusion\\nIn conclusion, breaking down big software challenges into smaller, manageable pieces is a key critical thinking skill that can help you solve problems more effectively. So the next time you\'re facing a big challenge, try breaking it down into smaller pieces and tackling them one by one. You might be surprised by how much more successful you are!\\n\\n## Bonus: Additional Tips for Breaking Down Problems\\n* Dividing a problem into smaller tasks that can be tackled independently\\n* Focusing on one aspect of the problem at a time\\n* Seeking help and advice from others\\n* Using tools like flowcharts or mind maps to visualize the problem and its sub-problems"}]}')}}]);
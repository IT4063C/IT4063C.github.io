"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3259],{17602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));n(8209);const i={sidebar_position:2.1,title:"SQL Refresher",sidebar_label:"SQL",toc_max_heading_level:6},r=void 0,s={unversionedId:"refreshers/sql/index",id:"refreshers/sql/index",title:"SQL Refresher",description:"SQL, or Structured Query Language, is a language to talk to databases. It allows you to select specific data and to build complex reports. Today, SQL is a universal language of data. It is used in practically all technologies that process data.",source:"@site/content/course-notes/2.refreshers/sql/index.md",sourceDirName:"2.refreshers/sql",slug:"/refreshers/sql/",permalink:"/course-notes/refreshers/sql/",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/course-notes/2.refreshers/sql/index.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1661292517,formattedLastUpdatedAt:"Aug 23, 2022",sidebarPosition:2.1,frontMatter:{sidebar_position:2.1,title:"SQL Refresher",sidebar_label:"SQL",toc_max_heading_level:6},sidebar:"notes",previous:{title:"Python",permalink:"/course-notes/refreshers/python/"},next:{title:"Git and GitHub",permalink:"/course-notes/git/"}},o={},u=[{value:"Sample Data",id:"sample-data",level:2},{value:"<code>SELECT</code>",id:"select",level:2},{value:"Order (<code>ORDER BY</code>)",id:"order-order-by",level:3},{value:"Query using aliases (<code>AS</code>)",id:"query-using-aliases-as",level:3},{value:"Filtering the output (<code>WHERE</code>)",id:"filtering-the-output-where",level:3},{value:"Comparison Operators",id:"comparison-operators",level:4},{value:"Text Operators",id:"text-operators",level:4},{value:"Other Operators",id:"other-operators",level:3},{value:"<code>SELECT</code> with <code>JOIN</code>",id:"select-with-join",level:2},{value:"<code>INNER JOIN</code>",id:"inner-join",level:3},{value:"<code>LEFT JOIN</code>",id:"left-join",level:3},{value:"<code>RIGHT JOIN</code>",id:"right-join",level:3},{value:"<code>FULL JOIN</code>",id:"full-join",level:3},{value:"<code>CROSS JOIN</code>",id:"cross-join",level:3},{value:"<code>GROUP BY</code> - Aggregation And Grouping",id:"group-by---aggregation-and-grouping",level:2},{value:"Aggregate Functions",id:"aggregate-functions",level:3},{value:"Example Queries",id:"example-queries",level:4},{value:"Subqueries",id:"subqueries",level:2},{value:"Single Value",id:"single-value",level:3},{value:"Multiple Values",id:"multiple-values",level:3},{value:"Correlated",id:"correlated",level:3},{value:"Set Operations",id:"set-operations",level:2},{value:"<code>UNION</code>",id:"union",level:3},{value:"<code>INTERSECT</code>",id:"intersect",level:3},{value:"<code>EXCEPT</code>",id:"except",level:3},{value:"<code>INSERT</code>",id:"insert",level:2},{value:"<code>UPDATE</code>",id:"update",level:2},{value:"<code>DELETE</code>",id:"delete",level:2},{value:"Delete all data in a table",id:"delete-all-data-in-a-table",level:3},{value:"Delete with a condition",id:"delete-with-a-condition",level:3},{value:"Transactions",id:"transactions",level:2},{value:"Variables",id:"variables",level:2},{value:"Function",id:"function",level:2},{value:"Stored Procedure",id:"stored-procedure",level:2}],c={toc:u};function d(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"SQL"),", or Structured Query Language, is a language to talk to databases. It allows you to select specific data and to build complex reports. Today, SQL is a universal language of data. It is used in practically all technologies that process data."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This cheatsheet is modified from ",(0,l.kt)("a",{parentName:"p",href:"https://learnsql.com/blog/sql-basics-cheat-sheet/"},"https://learnsql.com/blog/sql-basics-cheat-sheet/"))),(0,l.kt)("h2",{id:"sample-data"},"Sample Data"),(0,l.kt)("p",null,"The following queries are based on this sample data"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Sample data",src:n(68473).Z,width:"2000",height:"936"})),(0,l.kt)("h2",{id:"select"},(0,l.kt)("inlineCode",{parentName:"h2"},"SELECT")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fetch all columns from the ",(0,l.kt)("inlineCode",{parentName:"li"},"country")," table:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM country;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fetch ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"name")," columns from the ",(0,l.kt)("inlineCode",{parentName:"li"},"city")," table:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT id, name\nFROM city;\n")),(0,l.kt)("h3",{id:"order-order-by"},"Order (",(0,l.kt)("inlineCode",{parentName:"h3"},"ORDER BY"),")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fetch city ",(0,l.kt)("inlineCode",{parentName:"li"},"name"),"s sorted by the ",(0,l.kt)("inlineCode",{parentName:"li"},"rating")," column in the default ",(0,l.kt)("inlineCode",{parentName:"li"},"ASC"),"ending order:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM city\nORDER BY rating [ASC];\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fetch city ",(0,l.kt)("inlineCode",{parentName:"li"},"name"),"s sorted by the ",(0,l.kt)("inlineCode",{parentName:"li"},"rating")," column in the ",(0,l.kt)("inlineCode",{parentName:"li"},"DESC"),"ending order:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM city\nORDER BY rating DESC;\n")),(0,l.kt)("h3",{id:"query-using-aliases-as"},"Query using aliases (",(0,l.kt)("inlineCode",{parentName:"h3"},"AS"),")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Aliasing Columns")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name AS city_name\nFROM city;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Aliasing Table")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT co.name, ci.name\nFROM city AS ci\nJOIN country AS co\n  ON ci.country_id = co.id;\n")),(0,l.kt)("h3",{id:"filtering-the-output-where"},"Filtering the output (",(0,l.kt)("inlineCode",{parentName:"h3"},"WHERE"),")"),(0,l.kt)("h4",{id:"comparison-operators"},"Comparison Operators"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fetch names of cities that have a rating above 3:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM city\nWHERE rating > 3;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fetch names of cities that are neither Berlin nor Madrid:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM city\nWHERE name != 'Berlin'\n  AND name != 'Madrid';\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fetch names of cities that have a population between 500K and 5M:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM city\nWHERE population BETWEEN 500000 AND 5000000;\n")),(0,l.kt)("p",null,"OR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM city\nWHERE population > 500000\nAND population   < 5000000;\n")),(0,l.kt)("h4",{id:"text-operators"},"Text Operators"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fetch names of cities that start with a 'P' or end with an 's':")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM city\nWHERE name LIKE 'P%'\n  OR name LIKE '%s';\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fetch names of cities that start with any letter followed by 'ublin' (like Dublin in Ireland or Lublin in Poland):")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM city\nWHERE name LIKE '%ublin';\n")),(0,l.kt)("h3",{id:"other-operators"},"Other Operators"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fetch names of cities that don't miss a rating value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM city\nWHERE rating IS NOT NULL;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fetch names of cities that are in countries with IDs 1, 4, 7, or 8:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM city\nWHERE country_id IN (1, 4, 7, 8);\n")),(0,l.kt)("h2",{id:"select-with-join"},(0,l.kt)("inlineCode",{parentName:"h2"},"SELECT")," with ",(0,l.kt)("inlineCode",{parentName:"h2"},"JOIN")),(0,l.kt)("p",null,"This is to query from multiple tables at the same time. "),(0,l.kt)("p",null,"This is a summary of all the join types.\n",(0,l.kt)("img",{alt:"SQL Joins Summary",src:n(84190).Z,width:"966",height:"760"})),(0,l.kt)("h3",{id:"inner-join"},(0,l.kt)("inlineCode",{parentName:"h3"},"INNER JOIN")),(0,l.kt)("p",null,"JOIN (or explicitly INNER JOIN) returns rows that have matching values in both tables."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT city.name, country.name\nFROM city\n[INNER] JOIN country\n  ON city.country_id = country.id;\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Tables joined using INNER JOIN",src:n(93071).Z,width:"1536",height:"342"})),(0,l.kt)("h3",{id:"left-join"},(0,l.kt)("inlineCode",{parentName:"h3"},"LEFT JOIN")),(0,l.kt)("p",null,"LEFT JOIN returns all rows from the left table with corresponding rows from the right table. If there's no matching row, NULLs are returned as values from the second table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT city.name, country.name\nFROM city\nLEFT JOIN country\n  ON city.country_id = country.id;\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Tables joined using LEFT JOIN",src:n(85745).Z,width:"1532",height:"358"})),(0,l.kt)("h3",{id:"right-join"},(0,l.kt)("inlineCode",{parentName:"h3"},"RIGHT JOIN")),(0,l.kt)("p",null,"RIGHT JOIN returns all rows from the right table with corresponding rows from the left table. If there's no matching row, NULLs are returned as values from the left table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT city.name, country.name\nFROM city\nRIGHT JOIN country\n  ON city.country_id = country.id;\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Tables joined using RIGHT JOIN",src:n(68041).Z,width:"2000",height:"440"})),(0,l.kt)("h3",{id:"full-join"},(0,l.kt)("inlineCode",{parentName:"h3"},"FULL JOIN")),(0,l.kt)("p",null,"FULL JOIN (or explicitly FULL OUTER JOIN) returns all rows from both tables \u2013 if there's no matching row in the second table, NULLs are returned."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT city.name, country.name\nFROM city\nFULL [OUTER] JOIN country\n  ON city.country_id = country.id;\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Tables joined using FULL JOIN",src:n(1937).Z,width:"2000",height:"513"})),(0,l.kt)("h3",{id:"cross-join"},(0,l.kt)("inlineCode",{parentName:"h3"},"CROSS JOIN")),(0,l.kt)("p",null,"CROSS JOIN returns all possible combinations of rows from both tables. There are two syntaxes available."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT city.name, country.name\nFROM city\nCROSS JOIN country;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT city.name, country.name\nFROM city, country;\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Tables joined using CROSS JOIN",src:n(66535).Z,width:"2000",height:"513"})),(0,l.kt)("h2",{id:"group-by---aggregation-and-grouping"},(0,l.kt)("inlineCode",{parentName:"h2"},"GROUP BY")," - Aggregation And Grouping"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," groups together rows that have the same values in specified columns. It computes summaries (aggregates) for each unique combination of values."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Table before and after aggregation",src:n(68390).Z,width:"2000",height:"666"})),(0,l.kt)("h3",{id:"aggregate-functions"},"Aggregate Functions"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"avg(expr)")," \u2212 average value for rows within the group\n",(0,l.kt)("inlineCode",{parentName:"p"},"count(expr)")," \u2212 count of values for rows within the group\n",(0,l.kt)("inlineCode",{parentName:"p"},"max(expr)")," \u2212 maximum value within the group\n",(0,l.kt)("inlineCode",{parentName:"p"},"min(expr)")," \u2212 minimum value within the group\n",(0,l.kt)("inlineCode",{parentName:"p"},"sum(expr)")," \u2212 sum of values within the group"),(0,l.kt)("h4",{id:"example-queries"},"Example Queries"),(0,l.kt)("p",null,"Find out the number of cities:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(*)\nFROM city;\n")),(0,l.kt)("p",null,"Find out the number of cities with non-null ratings:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(rating)\nFROM city;\n")),(0,l.kt)("p",null,"Find out the number of distinctive country values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(DISTINCT country_id)\nFROM city;\n")),(0,l.kt)("p",null,"Find out the smallest and the greatest country populations:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT MIN(population), MAX(population)\nFROM country;\n")),(0,l.kt)("p",null,"Find out the total population of cities in respective countries:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT country_id, SUM(population)\nFROM city\nGROUP BY country_id;\n")),(0,l.kt)("p",null,"Find out the average rating for cities in respective countries if the average is above 3.0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT country_id, AVG(rating)\nFROM city\nGROUP BY country_id\nHAVING AVG(rating) > 3.0;\n")),(0,l.kt)("h2",{id:"subqueries"},"Subqueries"),(0,l.kt)("p",null,"A subquery is a query that is nested inside another query, or inside another subquery. There are different types of subqueries."),(0,l.kt)("h3",{id:"single-value"},"Single Value"),(0,l.kt)("p",null,"The simplest subquery returns exactly one column and exactly one row. It can be used with comparison operators =, <, <=, >, or >=."),(0,l.kt)("p",null,"This query finds cities with the same rating as Paris:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM city\nWHERE rating = (\n  SELECT rating\n  FROM city\n  WHERE name = 'Paris'\n);\n")),(0,l.kt)("h3",{id:"multiple-values"},"Multiple Values"),(0,l.kt)("p",null,"A subquery can also return multiple columns or multiple rows. Such subqueries can be used with operators IN, EXISTS, ALL, or ANY."),(0,l.kt)("p",null,"This query finds cities in countries that have a population above 20M:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM city\nWHERE country_id IN (\n  SELECT country_id\n  FROM country\n  WHERE population > 20000000\n);\n")),(0,l.kt)("h3",{id:"correlated"},"Correlated"),(0,l.kt)("p",null,"A correlated subquery refers to the tables introduced in the outer query. A correlated subquery depends on the outer query. It cannot be run independently from the outer query."),(0,l.kt)("p",null,"This query finds cities with a population greater than the average population in the country:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM city main_city\nWHERE population > (\n  SELECT AVG(population)\n  FROM city average_city\n  WHERE average_city.country_id = main_city.country_id\n);\n")),(0,l.kt)("p",null,"This query finds countries that have at least one city:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM country\nWHERE EXISTS (\n  SELECT *\n  FROM city\n  WHERE country_id = country.id\n);\n")),(0,l.kt)("h2",{id:"set-operations"},"Set Operations"),(0,l.kt)("p",null,"Set operations are used to combine the results of two or more queries into a single result. The combined queries must return the same number of columns and compatible data types. The names of the corresponding columns can be different"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Sample data for set operations",src:n(6466).Z,width:"2000",height:"502"})),(0,l.kt)("h3",{id:"union"},(0,l.kt)("inlineCode",{parentName:"h3"},"UNION")),(0,l.kt)("img",{src:n(46585).Z,alt:"UNION circles",style:{display:"block",width:"10rem",marginLeft:"auto",marginRight:"auto"}}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UNION")," combines the results of two result sets and removes duplicates. ",(0,l.kt)("inlineCode",{parentName:"p"},"UNION ALL")," doesn't remove duplicate rows."),(0,l.kt)("p",null,"This query displays German cyclists together with German skaters:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM cycling\nWHERE country = 'DE'\nUNION\nSELECT name\nFROM skating\nWHERE country = 'DE';\n")),(0,l.kt)("p",null,"With ",(0,l.kt)("inlineCode",{parentName:"p"},"UNION ALL")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM cycling\nWHERE country = 'DE'\nUNION ALL\nSELECT name\nFROM skating\nWHERE country = 'DE';\n")),(0,l.kt)("h3",{id:"intersect"},(0,l.kt)("inlineCode",{parentName:"h3"},"INTERSECT")),(0,l.kt)("img",{src:n(74126).Z,alt:"INTERSECT circles",style:{display:"block",width:"10rem",marginLeft:"auto",marginRight:"auto"}}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"INTERSECT")," returns only rows that appear in both result sets."),(0,l.kt)("p",null,"This query displays German cyclists who are also German skaters at the same time:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM cycling\nWHERE country = 'DE'\nINTERSECT\nSELECT name\nFROM skating\nWHERE country = 'DE';\n")),(0,l.kt)("h3",{id:"except"},(0,l.kt)("inlineCode",{parentName:"h3"},"EXCEPT")),(0,l.kt)("img",{src:n(49608).Z,alt:"EXCEPT circles",style:{display:"block",width:"10rem",marginLeft:"auto",marginRight:"auto"}}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"EXCEPT")," returns only the rows that appear in the first result set but do not appear in the second result set."),(0,l.kt)("p",null,"This query displays German cyclists unless they are also German skaters at the same time:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name\nFROM cycling\nWHERE country = 'DE'\nEXCEPT / MINUS\nSELECT name\nFROM skating\nWHERE country = 'DE';\n")),(0,l.kt)("h2",{id:"insert"},(0,l.kt)("inlineCode",{parentName:"h2"},"INSERT")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"insert into cycling (name, country) \nvalues \n    ('YG', 'EG'), \n    (`MS`, 'EG');\n")),(0,l.kt)("h2",{id:"update"},(0,l.kt)("inlineCode",{parentName:"h2"},"UPDATE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE cycling SET name = 'Mo' WHERE id = 1;\n")),(0,l.kt)("h2",{id:"delete"},(0,l.kt)("inlineCode",{parentName:"h2"},"DELETE")),(0,l.kt)("h3",{id:"delete-all-data-in-a-table"},"Delete all data in a table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE from skating;\n")),(0,l.kt)("h3",{id:"delete-with-a-condition"},"Delete with a condition"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE from skating WHERE id > 10;\n")),(0,l.kt)("h2",{id:"transactions"},"Transactions"),(0,l.kt)("p",null,"Run a transaction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"begin transaction\nupdate tass_police set bezahlt = 0 where id_fi_kunde = 3533 and id_fi_vers_art = 1700\ncommit\n-- or rollback\n")),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("p",null,"Declare"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE @veraenderung SMALLINT = 180;\nDECLARE @neue_summe INT;\n")),(0,l.kt)("h2",{id:"function"},"Function"),(0,l.kt)("p",null,"A function can be called from inside a statement just like any other function and can return a scalar value."),(0,l.kt)("p",null,"Create - Get value from table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create function f_plic_bez()\n  returns decimal(10,2)\n  as begin\n  return (select sum(bezahlt) from tass_police)\n  end;\ngo\nselect  dbo.f_plic_bez() AS 'Summe aller bezahlten Leistungen'\ngo\n")),(0,l.kt)("p",null,"Drop"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"drop function f_bezahlt_versich\n")),(0,l.kt)("p",null,"Create - With parameters"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create function f_rabatt(@name varchar(40), @vers varchar(30))\n  returns int\n  as begin\n  return (select (praem_stufe-100)*10 from  tass_police\n  join tbl_kunde on id_fi_kunde = id_kunde\n  join tkey_versicherung on id_fi_vers_art = id_vers_art\n  where name = @name and vers_bez = @vers)\n  end\n")),(0,l.kt)("h2",{id:"stored-procedure"},"Stored Procedure"),(0,l.kt)("p",null,"Stored procedures are stored as precompilated code (stored routine) and called by the programmer wherever it wants to fire. Stored procedure can return value(s)."),(0,l.kt)("p",null,"Create and execute"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROCEDURE p_polic_del @fname VARCHAR(30), @versich VARCHAR(30)\n  AS\n  BEGIN\n    DELETE FROM tass_police\n      FROM tbl_kunde, tkey_versicherung\n        WHERE name = @fname\n          AND id_kunde = id_fi_kunde\n          AND id_fi_vers_art = id_vers_art\n          AND vers_bez = @versich\n    IF @@ROWCOUNT = 0\n      PRINT 'Police existiert nicht.'\n      ELSE PRINT 'L\xf6schung vollzogen.'\n  END\nGO\n\nEXECUTE p_polic_del 'Meier', 'Taggeld';\n")))}d.isMDXComponent=!0},46585:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/10-union-e4dffd53025ecaf3622016de97e69e3f.png"},74126:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/11-intersect-7f4e15be5da20ef0dfc22a9b38b48641.png"},49608:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/12-except-0b03d224d6913df19cac245811c8ea0a.png"},68473:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/01-sample-data-c2979b57912972a4dfe843cf0a060b01.png"},93071:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/02-inner-join-5b94bdc099b2876747a29e50a341c4f8.png"},85745:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/03-left-join-7b510d100b7bea0df5edc38fb5d143e3.png"},68041:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/04-right-join-b9442e22a02618bf3469af9bbd7a3fd0.png"},1937:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/05-full-join-23fe10d649561370de35a31fbc4fa122.png"},66535:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/06-cross-join-10e6d5af32cf51bd16c605d9dea9e2e4.png"},68390:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/08-aggregation-577431b401c48d5c380d754f3d418f4c.png"},6466:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/09-sets-data-9a33ec95d0b3d265c2f54f2bc0502869.png"},84190:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/joins-909acd5ab89d0a085b87a6f57e29f8c4.webp"}}]);
---
sidebar_position: 6
title: Course Outline (subject to change)
sidebar_label: Course Outline
---

I'm currently in the process of updating the course, adding more modern and relevant topics. The following may not reflect the changes implemented in the class yet.

```mermaid
flowchart TD
   %% STYLES %%

   %% NODES %%
   A[Start]
   env(Setting up the Environment)
   svc(Source Version Control - git)
   in-python(Installing Python)
   python(Basics of Python)
   data-sources[(Working with Data Sources)]
      style data-sources fill: #f95
   F(Files)
   G(Relational Databases)
   H(non-Relational Databases)
   I(REST API)
   correlate{{Correlating Data}}
   K(Apply Basics of Statistics)
   viz(Visualizing Data)
      style viz fill:#f9f,stroke:#333,stroke-width:4px
   graphtypes[Graph Types]
   N[Pie]
   O[Bar]
   P[Chart 3]
   story(Telling the Story of Data)

   %% SUB GRAPHS %%
   subgraph ENV [Environment Setup]
     direction LR
     svc --> in-python --> python
   end

   subgraph DATA-SOURCES [Data Sources]
     direction LR
     F --> G --> H --> I
   end

   subgraph CHARTS [Chart Types]
     direction LR
     N --> O --> P
   end

   %% DIAGRAM %%
   A --> env
   env --> ENV
   ENV --> data-sources
   data-sources --> DATA-SOURCES 
   DATA-SOURCES --> correlate
   correlate --> K
   K --> viz
   viz --> graphtypes
   graphtypes --> CHARTS
   CHARTS --> story

```

## Data Analytics Pipeline
```mermaid
flowchart TB
  START --> A[1. Capture] --> B[2. Process] --> C[3. Store] --> D[4. Analyze] --> E[5. Use] --> END
      style START fill: #f95
      style END fill: #f95

  A --> CAPTURE
  subgraph CAPTURE [Data Ingestion]
    direction TB
    A1[Cloud pub/sub]
    A2[Data Transfer Service]
    A3[Storage Transfer Service]
    A1 --> A2 --> A3
  end
  B --> PROCESS
  subgraph PROCESS[Streaming and Data Pipelines]
    direction TB
    B1[Cloud Data flow - Stream and Batch Processing]
    B2[Cloud Data Proc - Hadoop + Spark]
    B3[Data Prep]
    B1 --> B2 --> B3
  end
  C --> STORE
  subgraph STORE [Data Lake and Data warehousing]
    direction TB
    C1[Cloud Storage]
    C2[Big Query Storage]
    C1 --> C2
  end
  D --> ANALYZE
  subgraph ANALYZE [Data Warehousing]
    direction TB
    D1[Big Query]
    D2[Data Visualization]
    D1 --> D2
  end
  E --> USE
  subgraph USE [Advanced Analytics]
    direction TB
    E1[TensorFlow]
  end

```


## Course Technologies
* There needs to be a unified framework to connect all the different technologies together (Python or other)


* Source Version Control (git)
* Data Sources
  * Reading Files
  * Relational Database
    * MS SQL (paid)
    * PostgreSQL (free)
    * MySQL (free)
  * Non-Relational Databases
    * MongoDB (free)
    * ElasticSearch (freemium)
  * REST APIs
* Data Storage
  * Data warehouse
* Data Pipelines
  * ETL 
  * Kafka
* Visualization
  * Python Libraries
  * Tableau
  * PowerBI

## Course Modules
### 1. Source Version Control (git)
   * Development Environment Setup
   * Source Version Control Using Git/Github
   * **Assignment:** Basics of Python
   * **Quiz 1:** Syllabus
   * **Quiz 2:** Source Version Control

### 2. 

### 3.

### 4.

### 5.

### 6.

### 7.

### 8.

### 9.

### 10.

### 11.

### 12.

### 13.